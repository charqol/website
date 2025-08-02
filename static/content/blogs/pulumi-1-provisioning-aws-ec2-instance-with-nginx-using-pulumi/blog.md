
## Abstract
In this tutorial, we walk through deploying a complete AWS infrastructure setup for hosting an NGINX server on an EC2 instance using Pulumi with TypeScript. We'll start by preparing the local environment, setting up necessary configurations, generating SSH keys for secure instance access, and writing the Pulumi code to define cloud resources. By the end of this tutorial, you'll be able to easily set up a complete AWS environment using code, following modern Infrastructure as Code (IaC) practices.


## Prologue
As cloud infrastructure grows more complex, using Infrastructure as Code (IaC) has become essential for developers and DevOps teams. Pulumi makes it easy by letting you manage cloud resources with familiar languages like TypeScript. In this blog, we'll show you a step-by-step way to launch an NGINX server on AWS using Pulumi.


## Setup Pulumi Project

### Prerequisites
Ensure your system meets the prerequisites mentioned below:

1. **AWS Account**: Ensure you have an AWS account with the necessary permissions.
2. **IAM User Permissions**: The IAM user should have the following permissions:
   - `AmazonEC2FullAccess`
   - `AmazonS3FullAccess`
   - `IAMFullAccess`
   - `AmazonVPCFullAccess`
   - `AmazonRDSFullAccess`
   - `AmazonRoute53FullAccess`
3. **Pulumi Installed**: Ensure Pulumi is installed on your local machine. Install Pulumi from [here](https://www.pulumi.com/docs/get-started/install/) according to your OS.
4. **AWS CLI Installed**: Ensure the AWS CLI is installed and configured. Install AWS CLI from [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
5. **Node.js Installed**: Ensure Node.js and npm are installed.
6. **Visual Studio Code**: Recommended for editing the Pulumi project files.

### Create Pulumi Project

1. **Create a New Directory**
```sh
  mkdir pulumi-project && cd pulumi-project
```

2. **Initiate a New Pulumi Project**
```sh
  pulumi new aws-typescript
```

> **Note**: If this is your first time running pulumi new or other pulumi commands, you may be prompted to log in to the Pulumi Service. Hitting Enter at the prompt opens a browser for you to sign in or sign up.

3. **Follow the CLI Prompts**

* After logging in, the CLI will proceed with walking you through creating a new project.
    - **Project Name and Description**: Accept default values or specify new ones.
    - **Stack Name**: Accept the default value (dev) or specify a new one.
    - **AWS Region**: Enter "ap-south-1".


4. **Review Generated Files**
Open directory in Visual Studio Code to review the generated files :
   - **Pulumi.yaml**: Defines the project
   - **Pulumi.dev.yaml**: Contains configuration values for the stack you just initialized.
   - **index.ts**: The Pulumi program that defines your stack resources. Modify it as per your requirements.


5. **Store Database Credentials**
* Store database credentials like dbUsername and dbPassword:

```sh
  pulumi config set dbUsername <your-db-username>
  pulumi config set --secret dbPassword <your-db-password>
```

6. **Generate and Store SSH Keys**

* Generate SSH keys for your EC2 instance:
```sh
  ssh-keygen -t rsa -f <your-key-name> -m PEM
```
For Example: `ssh-keygen -t rsa -f webkey -m PEM`
This will create webkey (private key) and webkey.pub (public key) files in your project directory.


* Store the public and private keys in Pulumi config:
```sh
  cat webkey.pub | pulumi config set publicKey --
  cat webkey | pulumi config set privateKey --secret --
```

7. **Pulumi Code for AWS Infrastructure**
- To keep the code clean and easy to maintain, we have separated the logic for creating different AWS resources into different TypeScript files.

- You can find the full working project here:
 [Pulumi Code](https://github.com/inflection-zone/blogs/tree/main/code/pulumi-3-ec2-provisioning-using-pulumi)

Here’s a quick overview of how the project is organized:

- Each AWS resource (like VPC, Security Group, EC2, IAM Role, etc.) has its own dedicated TypeScript file.

- The `index.ts` file is the main entry point where we **import** modules, **configure**, and **create** all the resources.

- Configuration values are stored in a `config.json` file, making it easy to modify project-specific details without changing the code.

**Main Program**

Below is a snapshot of the `index.ts` file, which ties everything together:

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { Config } from "./interface";
import * as fs from 'fs';
import { createVpc } from "./vpc";
import { createSecurityGroup } from "./securitygroup";
import { getUserData } from "./script";
import { createIamRole } from "./iamroles";
import {createEc2Instance} from "./instance";
import {createDbSecurityGroup} from "./dbsecuritygroup";
import {createDbInstance} from "./dbinstance";
import {createWaf} from "./waf"

(async () => {

const config: Config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const instanceProfileName = `${config.projectName}-${config.environment}-ec2-instance-profile`

const { vpc, subnets } = await createVpc(config);

const securityGroup = await createSecurityGroup(config, vpc);

const dbSecurityGroup = await createDbSecurityGroup(config, vpc, securityGroup)

const dbServer = await createDbInstance(config, subnets, dbSecurityGroup)

const script = await getUserData();

const iamRole = await createIamRole(config);

const instanceProfile = new aws.iam.InstanceProfile(instanceProfileName, {
    name: instanceProfileName,
    role: iamRole.name,
});
const subnet = subnets[0]

const server = await createEc2Instance(subnet, script, instanceProfile, securityGroup, dbServer, config);
})()
```

**What's Happening Here?**

- **Configuration Loading**: Reads project-specific configurations like project name, environment, instance types, etc., from a `config.json` file.

- **Network Setup**: Creates the VPC, public and private subnets, and route tables.

- **Security Setup**: Creates security groups for EC2 and the database.

- **Database Setup**: Spins up an RDS database instance using the configured parameters.

- **IAM Setup**: Creates an IAM role and attaches it to the EC2 instance for necessary permissions.

- **Server Deployment**: Launches an EC2 instance with the user data script to install and run NGINX automatically.

### **AWS Resources Created**
* Using this code, the following AWS resources will be created:
  1. VPC
  2. Public and private subnets
  3. Internet Gateway
  4. Route Tables and their subnet associations
  5. Security group for EC2 instance
  6. Userdata script for EC2 instance (installs necessary packages on launch)
  7. Private & public keys for EC2 instance login
  8. IAM role
  9. Policies attached to the IAM role
  10. RDS Instance
  11. Security group for RDS instance
  12. EC2 Instance
  13. Instance Profile


## Infrastructure Diagram

* Refer to the infrastructure diagram below:
<p align="center">
 <img src="{{BlogImagesPath}}/architecture.png" style="width: 70%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


## Deploying the Infrastructure

1. **Provisioning Resources**
- Open PowerShell and change the directory to the Pulumi Project directory. Run following command to provision defined AWS resources.

```sh
  pulumi up
```
  - This command reads your Pulumi program, checks the current state of your infrastructure, and shows a preview of the resources that will be created, updated, or deleted.
  - Carefully review the proposed changes. Once you're ready, type yes and press Enter to apply the changes and deploy your infrastructure to AWS.

2. **Verify Resources**

After deployment, log in to your AWS Management Console. Navigate to the relevant services like EC2, VPC, Subnets, Security Groups, and IAM to verify that all resources have been created successfully and are configured as expected.


## Updating and Destroying Infrastructure

1. **Update the Infrastructure**
If you make changes to your Pulumi code (for example, updating the instance type, modifying security rules, or adding new resources), run `pulumi update`. Pulumi will detect the changes, show you a preview, and allow you to apply the updates without needing to recreate your entire setup.
```sh
  pulumi update
```
2. **Destroy the Infrastructure**
When you no longer need the infrastructure, run `pulumi destroy`. Pulumi will plan and remove all the resources it created during deployment. This helps avoid unnecessary cloud costs and keeps your AWS account clean and organized. Confirm the destroy action by typing `yes` when prompted.
```sh
  pulumi destroy
```


## Epilogue
By following this guide, you’ve set up a full AWS environment — from creating a VPC to launching an EC2 instance with NGINX — using Pulumi and TypeScript. You now have a solid, reusable setup for deploying cloud infrastructure with code.








