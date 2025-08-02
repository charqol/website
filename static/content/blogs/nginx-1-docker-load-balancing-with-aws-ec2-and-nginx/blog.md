## Abstract

This blog walks you through configuring **Nginx** as a load balancer for containerized applications running across **AWS EC2 instances** using **Docker**. It demonstrates how to distribute traffic between multiple servers using a real-world example, offering high availability and improved performance with minimal setup.

---

## Prologue

Modern applications demand scalability and reliability — two challenges best addressed with **load balancing**. Whether you're managing traffic spikes or ensuring high availability, Nginx remains a go-to solution. Combined with Docker and AWS EC2, it allows developers and DevOps engineers to build flexible, cost-effective load-balanced environments. This blog will show you how to implement it step-by-step.

---

## Architecture

<p align="center">
    <img src="{{BlogImagesPath}}/architecture.png" style="width: 80%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

---

## Prerequisites

1. AWS Account

---

## What is Load Balancing?

Load balancing ensures that incoming requests are distributed across multiple application instances. This:
- Prevents individual instances from overloading
- Reduces latency
- Minimizes downtime due to crashes
- Improves scalability

---
## Launch AWS EC2 Instances

1. Log into your **AWS Console**.
2. Go to **EC2 > Instances** and click **Launch Instance**.
3. Choose:
   - Name for the instance
   - Amazon Linux AMI
   - Create and download a `.pem` key
   - New security group allowing `port 80` from `0.0.0.0/0`
4. Launch the instance.
5. Repeat the steps to launch a **second instance**, which will serve as an additional backend for load balancing.

---

## First EC2 Instance Configuration (Nginx Load Balancer)

1. SSH into the EC2 instance
    ```bash
    chmod 400 <ssh-key-path>.pem
    ssh -i <ssh-key-path>.pem ec2-user@<first-ec2-public-ip>
    ```
2. Install Docker and Docker Compose
    ```bash
    sudo yum update -y
    sudo yum install docker -y
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -a -G docker $(whoami)
    newgrp docker

    sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```
3. Create and open the `default.conf` file:
    ```bash
    vim default.conf
    ```
4. Paste the following configuration:
    ```nginx
    log_format upstreamlog '$server_name to: $upstream_addr [$request] '
        'upstream_response_time $upstream_response_time '
        'msec $msec request_time $request_time';

    upstream app {
        server apache-server-container weight=1;         # Local container
        server <second-ec2-public-ip>:80 weight=2;       # Second EC2 instance
    }

    server {
        listen 80;
        access_log /var/log/nginx/access.log upstreamlog;

        location / {
            proxy_pass http://app;
        }
    }
    ```

> Replace `<second-ec2-public-ip>` with the actual public IP of your second EC2 instance.

4. Create and open the `docker-compose.yml` file:
    ```bash
    vim docker-compose.yml
    ```
5. Paste the following configuration:
    ```yml
    services:
      nginx:
        container_name: nginx-container
        image: nginx:latest
        ports:
          - 80:80
        networks:
          - loadbalancer

      apache-server:
        container_name: apache-server-container
        image: httpd
        ports:
          - 8080:80
        networks:
          - loadbalancer

    networks:
      loadbalancer:
        driver: bridge
    ```
5. Deploy Docker Compose and copy Nginx config:
    ```bash
    docker-compose up -d
    docker cp ./default.conf nginx-container:/etc/nginx/conf.d/default.conf
    docker exec nginx-container nginx -s reload
    ```

---

## Second EC2 Instance Configuration

1. SSH into your second EC2 instance:
    ```bash
    chmod 400 <ssh-key-path>.pem
    ssh -i <ssh-key-path>.pem ec2-user@<second-ec2-public-ip>
    ```
2. Install Docker and run Nginx container:
    ```bash
    sudo yum update -y
    sudo yum install docker -y
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -a -G docker $(whoami)
    newgrp docker
    docker run -d --name nginx-container -p 80:80 nginx
    ```

---

## Test Load Balancing

1. Open a browser and go to the **first EC2 public IP**.
2. Refresh the page multiple times. You should see one of the following pages on each refresh:
    - Apache default: “It works!”
    - Nginx default: “Welcome to nginx!”
3. Alternating responses helps verify the load balancer is switching between instances.

### Screenshots

**Nginx Page**

<p align="center">
    <img src="{{BlogImagesPath}}/nginx-page.png" style="width: 70%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

**Apache Page**

<p align="center">
    <img src="{{BlogImagesPath}}/apache-page.png" style="width: 60%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

###  Validation with Access Logs

To monitor request distribution, we configured a custom `log_format` named `upstreamlog`. The logs include:
- Which upstream server handled a request
- Response latency
- Request handling time

Run the following command in the SSH terminal of first EC2 Instance to view Nginx load balancer logs:
  ```bash
  docker logs nginx-container
  ```

  Sample Output:
  You should see log entries routing requests to different upstream servers:

  ```
  to: apache-server-container [...]
  to: <second-ec2-public-ip>:80 [...]
  ```

This helps verify traffic is balanced as expected.

---

## Epilogue

In this tutorial, you've successfully set up **Nginx-based load balancing** across two **AWS EC2** instances, using **Docker** to containerize both Nginx and Apache. This setup forms the foundation of a scalable, distributed infrastructure. As your system grows, you can easily extend this approach by adding more EC2 instances or integrating with auto-scaling groups and monitoring solutions.

---
