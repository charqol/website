
## Abstract

This blog demonstrates how to provision an end-to-end containerized infrastructure on AWS using **Pulumi** as Infrastructure as Code (IaC). The setup includes a custom **VPC**, **ECS Cluster** for container workloads, integration with **ECR** for Docker images, **S3** for configuration management, and **RDS MySQL** for persistent relational storage. Secure database access is enabled via a **Bastion Host**.

---

## Prologue

Infrastructure provisioning for scalable cloud-native applications often involves managing several AWS services in coordination. Manual setup can be error-prone and time-consuming. This blog shows how to achieve the same using Pulumi — a modern IaC tool that uses general-purpose programming languages to define cloud infrastructure. We'll automate deployment of ECS architecture within minutes.

---

## Architecture

<p align="center">
    <img src="{{BlogImagesPath}}/architecture.png" style="width: 80%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

---

## Prerequisites

1. AWS Account with an IAM user having appropriate permissions.
2. [AWS CLI installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and configured.
3. [Pulumi installed](https://www.pulumi.com/docs/iac/download-install/).

---
## Write Pulumi Configuration files

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
    from inflection_zone_pulumi.modules.aws.s3 import s3
    from inflection_zone_pulumi.modules.aws.rds import rds
    from inflection_zone_pulumi.modules.aws.load_balancer import load_balancer
    from inflection_zone_pulumi.modules.aws.ecs import ecs
    ```

    🔗 [View Code](https://github.com/inflection-zone/blogs/blob/main/code/pulumi-2-ecs-provisioning-using-pulumi/commons/__init__.py)

14. In the root folder, create a `values.py` file defining:
    - vpc_properties
    - s3_properties
    - rds_properties
    - bastion_properties
    - ecs_properties
    - ecs_container_definition
    - load_balancer_properties

    🔗 [View Code](https://github.com/inflection-zone/blogs/blob/main/code/pulumi-2-ecs-provisioning-using-pulumi/sample.values.py)

15. In `__main__.py`, clear the sample code if present and import:
    ```python
    from commons import vpc, s3, rds, load_balancer, ecs
    import values
    ```

16. Instantiate resources:
    ```python
    VPC = vpc(values)
    S3 = s3(values)
    RDS = rds(values, VPC)
    Load_balancer = load_balancer(values, VPC)
    ECS = ecs(values, VPC, Load_balancer)

    bucket_object = aws.s3.BucketObject(
        "config.env",

        bucket = S3.s3_bucket.id,
        source = pulumi.FileAsset(values.s3_properties["s3-env-file-path"])
    )
    ```

    🔗 [View Code](https://github.com/inflection-zone/blogs/blob/main/code/pulumi-2-ecs-provisioning-using-pulumi/__main__.py)

---

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
    - S3 Bucket
    - MySQL RDS
    - ECS Cluster
    - Load Balancer
    - Bastion Host

4. Head to the AWS Console, and verify the created resources.
5. Access the service onto the browser using the load balancer url received by running:
    ```bash
    pulumi stack output url
    ```

---

## Screenshots of Provisioned Infrastructure

### VPC
<p align="center">
    <img src="{{BlogImagesPath}}/vpc.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### S3
<p align="center">
    <img src="{{BlogImagesPath}}/s3.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### RDS
<p align="center">
    <img src="{{BlogImagesPath}}/rds.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>

### Load Balancer
<p align="center">
    <img src="{{BlogImagesPath}}/lb.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

### ECS Cluster
<p align="center">
    <img src="{{BlogImagesPath}}/ecs.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

---

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

---

## Screenshots of MySQL Workbench

#### Connection Setup
<p align="center">
    <img src="{{BlogImagesPath}}/workbench.png" style="width: 70%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

#### Query Execution
<p align="center">
    <img src="{{BlogImagesPath}}/commands.png" style="width: 70%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

---

## Destroy the Provisioned Infrastructure

1. Lastly, we will destroy the above-created resources.
2. Run
    ```bash
    pulumi destroy
    ```
    Select `yes` when prompted to tear down the resources cleanly.
3. Infrastructure will be destroyed.

---

## Epilogue

With Pulumi, provisioning complex infrastructure becomes a structured and repeatable process. In this blog, we built a full ECS-backed microservice deployment architecture, stored configs securely on S3, and connected to RDS via a bastion for secure database operations — all using reusable modules and code.

---
