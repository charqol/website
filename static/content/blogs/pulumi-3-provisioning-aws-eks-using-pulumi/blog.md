## Abstract

This guide demonstrates how to provision **Elastic Kubernetes Service (EKS)** cluster using **Pulumi**, an Infrastructure as Code (IaC) tool. The infrastructure includes a custom **VPC**, **EKS**, and an **RDS MySQL** instance for relational data storage. All resources are deployed using modular, reusable Pulumi components in Python — enabling rapid, consistent, and maintainable infrastructure provisioning.

## Prologue

As modern applications scale, the complexity of infrastructure provisioning grows. Developers and DevOps engineers increasingly rely on **Infrastructure as Code** to reduce manual errors, improve repeatability, and maintain version control. **Pulumi**, with its programming language support and cloud-native capabilities, offers flexibility in defining and deploying infrastructure.

In this tutorial, we’ll leverage Pulumi to provision:
- A **custom VPC** for network isolation
- An **EKS cluster** for containerized workloads
- An **RDS MySQL** instance for persistent data
- And connect to RDS securely via a **Bastion Host**

Let’s dive into building a secure, scalable Kubernetes environment on AWS.



## Architecture

<p align="center">
    <img src="{{BlogImagesPath}}/architecture.png" style="width: 80%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>



## Prerequisites

1. AWS Account with an IAM user having appropriate permissions.
2. [AWS CLI installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and configured.
3. [Pulumi installed](https://www.pulumi.com/docs/iac/download-install/).
4. [Kubectl installed](https://kubernetes.io/docs/tasks/tools/).



## Write Pulumi Configuration Files

We will begin by setting up a Pulumi project and using predefined modules from a Pulumi library for creating AWS infrastructure.

### Steps
1. Create a Pulumi project directory.
2. Open PowerShell or Terminal.
3. Navigate into the created directory.
4. Run:
    ```bash
    pulumi new aws-python
    ```
5. Enter project details: *name*, *description*, *stack*, *toolchain*, *region*, etc.
6. This will generate some Pulumi files in this directory.

### Install Modules:
7. Now we will install predefined Pulumi modules.
8. Activate virtual environment:
    ```bash
    venv\Scripts\activate  # Windows
    source venv/bin/activate  # macOS/Linux
    ```
9. Install pre-defined modules:
    ```bash
    pip install git+https://github.com/inflection-sahil/pulumi.git
    ```
10. Deactivate the environment:
    ```bash
    deactivate
    ```

### Setup Folder Structure:

11. Now open the directory in the preferred IDE.
12. Create a folder named `commons`.
13. Inside it, add `__init__.py` and import the following:
    ```python
    from inflection_zone_pulumi.modules.aws.vpc import vpc
    from inflection_zone_pulumi.modules.aws.rds import rds
    from inflection_zone_pulumi.modules.aws.eks import eks
    ```

    🔗 [View Code](https://github.com/inflection-zone/blogs/blob/main/code/pulumi-1-eks-provisioning-using-pulumi/commons/__init__.py)

14. In the root folder, create a `values.py` file defining:
    - vpc_properties
    - rds_properties
    - bastion_properties
    - eks_properties

    🔗 [View Code](https://github.com/inflection-zone/blogs/blob/main/code/pulumi-1-eks-provisioning-using-pulumi/sample.values.py)
15. In `__main__.py`, clear the sample code if present and import:
    ```python
    from commons import vpc, rds, eks
    import values
    ```
16. Instantiate resources:
    ```python
    VPC = vpc(values)
    RDS = rds(values, VPC)
    EKS = eks(values, VPC)
    ```

    🔗 [View Code](https://github.com/inflection-zone/blogs/blob/main/code/pulumi-1-eks-provisioning-using-pulumi/__main__.py)



## Provisioning the Infrastructure



Now we will provision the infrastructure by applying the above-created configuration files.
> Ensure AWS CLI is configured with appropriate IAM user credentials and enough permissions.

### Steps:
1. Open the PowerShell.
2. Change the directory to the above-created Pulumi Project.
3. Run the following:
    ```bash
    pulumi up
    ```
    When prompted, choose `yes` to proceed. This will deploy:
    - VPC
    - MySQL RDS
    - Bastion Host
    - EKS Cluster
4. Head to the AWS Console, and verify the created resources.



## Screenshots of Provisioned Infrastructure

### VPC
<p align="center">
    <img src="{{BlogImagesPath}}/vpc.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### RDS
<p align="center">
    <img src="{{BlogImagesPath}}/rds.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### EKS Cluster
<p align="center">
    <img src="{{BlogImagesPath}}/eks-cluster.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### EKS Node Group
<p align="center">
    <img src="{{BlogImagesPath}}/eks-node-group.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### EKS Nodes
<p align="center">
    <img src="{{BlogImagesPath}}/eks-nodes.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>



## Connect to EKS Cluster from PowerShell

1. Open a new Powershell window.
2. Run the following command to configure local kubectl with eks cluster
    ```sh
    aws eks --region <region-name> update-kubeconfig --name <cluster-name>
    ```
    > Substitute <*region-name*> and <*cluster-name*> with the values defined in the above-created *values.py* file.
3. Now, you can apply any Kubernetes manifest files.
4. Once applied, list them all using:
    ```sh
    kubectl get all
    ```



## Connection to the RDS database

Now, we will use MySQL Workbench to connect and access the MySQL RDS Database through above created Bastion Host.
1. Open MySQL Workbench → Add Connection.
2. Choose: `Standard TCP/IP over SSH`.
3. Fill details:
   - **SSH Hostname**: `bastion-host-ip:22` (received from `pulumi stack output bastion-host-ip` command)
   - **SSH Username**: `ec2-user`
   - **SSH Key File**: select `bastion-key.pem` file passed in above-created *values.py* file.
   - **MySQL Hostname**: `DB_HOST` (received from `pulumi stack output DB_HOST` command)
   - **Password**: Store in Vault → use password passed in above-created *values.py* file.

4. Click OK and connect.
5. You can now run SQL queries securely.



## Screenshots of MySQL Workbench

### Connection Setup
<p align="center">
    <img src="{{BlogImagesPath}}/connection.png" style="width: 70%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### Commands Page
<p align="center">
    <img src="{{BlogImagesPath}}/workbench.png" style="width: 70%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>



## Destroy the Provisioned Infrastructure

1. First, delete all the Kubernetes Deployments.
2. Then we will destroy the above-created resources.
3. Run
    ```bash
    pulumi destroy
    ```
    Select `yes` when prompted to tear down the resources cleanly.
4. Infrastructure will be destroyed.


## Epilogue

In this blog, we built a secure, scalable Kubernetes environment on AWS using Pulumi. We created a custom VPC, EKS cluster, and Bastion Host for secure database access. The infrastructure is now ready for containerized workloads.
