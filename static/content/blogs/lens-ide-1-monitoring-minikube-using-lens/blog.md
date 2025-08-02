
## Abstract
This blog explains the process of provisioning and monitoring Kubernetes workloads on a Minikube cluster using the Lens Desktop IDE. Starting with basic system requirements and installation steps for Lens on Windows, the guide continues by demonstrating how to connect to a local Minikube cluster, deploy sample workloads using manifests, and monitor pod logs, services, and other cluster components within the Lens UI.


## Prologue
Kubernetes is a powerful tool for running and managing container-based apps, but using it through the command line and writing config files can be tricky—especially if you're a newcomer. That’s where Lens IDE helps. It gives you a visual and easy-to-use way to see and manage everything in your Kubernetes cluster. In this blog, we’ll take a hands-on journey starting from installation to deploying and monitoring workloads on a local Minikube setup, all with just a few clicks.


## System requirements
Before you proceed with Lens Desktop installation, verify that your system meets the system requirements.

### Hardware requirements
Minimum hardware requirements:

- 2 GHz or faster processor
- 1 GB of RAM
- 1 GB of disk space

### Platforms
Lens has been tested on the following platforms:

- macOS
- Windows
- Linux


## Install Lens Desktop on Windows
1. Download the [Lens Desktop installer](https://k8slens.dev/) for Windows.
2. Now run the **Lens-Setup-{version}.exe installer** to install Lens Desktop.
3. Open Lens Desktop. Here you need to activate Lens. Choose Lens ID if you already have a Lens ID or need to create one. Alternatively, you can select Activation Code to proceed with an air-gapped installation, if you have already set up an activation code.

<p align="center">
  <img src="{{BlogImagesPath}}/lens-id.png" style="width: 50%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

4. Here are steps for new account creation on Lens:
    1. If you select Lens ID in previous step, on the next page, either log in or select **Create your Lens ID**. You will need to enter a username, password, and email. Alternatively, you can authenticate with a GitHub or Google account.

    <p align="center">
     <img src="{{BlogImagesPath}}/lens-id-2.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
    </p>

    <p align="center">
     <img src="{{BlogImagesPath}}/lens-id-3.png" style="width: 50%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
    </p>



    2. Next, you need to verify your email, then select **Add Lens Subscription**.

    <p align="center">
     <img src="{{BlogImagesPath}}/verify-email-subscribe.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
    </p>


    3. Choose a Lens Personal or Lens Pro subscription. (A 30-day free trial of Lens Pro is available.)

    <p align="center">
     <img src="{{BlogImagesPath}}/choose-sub.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
    </p>

    4. Now you are ready to get started with Lens. Select **Open Lens Desktop** to open Lens. The application will check for updates, and then you’ll be ready to get started.

    <p align="center">
     <img src="{{BlogImagesPath}}/ready.png" style="width: 50%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
    </p>


## Add a Cluster
* Select the catalog icon in the upper right-hand corner. You may brows clusters here.
* Lens will search common directories for kubeconfig files.
* you may already find some clusters listed, for example- local development clusters like minikube or docker-desktop.
* You can simply click on these clusters to connect to them with Lens.

<p align="center">
 <img src="{{BlogImagesPath}}/lens-clusters.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>



* To add a new cluster to the catalog, hover over the blue plus icon in the lower right-hand corner of the screen. You will have the option to add a kubeconfig directly or by syncing with a file.

<p align="center">
 <img src="{{BlogImagesPath}}/lens-cluster-1.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>



<p align="center">
 <img src="{{BlogImagesPath}}/add-from-kubeconfig.png" style="width: 50%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>




## Deploy Workloads

* In this tutorial, let's use **minikube** cluster. So select minikube from cluster's list. You may see the following screen.

<p align="center">
 <img src="{{BlogImagesPath}}/add-minikube.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* Here you may see all information about cluster like its nodes, workloads, configs etc. Terminal is also provided in lens. Let's deploy some workloads. We have already created some sample manifests. You may find them [here](https://github.com/inflection-zone/blogs/tree/main/code/lens-1-monitoring-minikube-cluster-workloads-using-lens).

* To deploy these manifests, open terminal of lens and move to folder containing manifests.

<p align="center">
 <img src="{{BlogImagesPath}}/manifests.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* Now to deploy these workloads on our minikube cluster, please run command:
```
  kubectl apply -f .
```
You may see the output that all workloads are created.

<p align="center">
 <img src="{{BlogImagesPath}}/kubectl-apply.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* Now click on **Workloads** tab. You may see the list of workloads and overview. If you select **Overview**, you may see the total number of pods, deployments etc.

<p align="center">
 <img src="{{BlogImagesPath}}/overview.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* You may check status and logs of these workloads one by one. Click on **Pods**. You will see the list of Pods deployed in cluster. If you want to check details of Pod, just click on it and lens will display all the details of that Pod.

<p align="center">
 <img src="{{BlogImagesPath}}/Pods.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* In the right corner of details plane, you may see some icons like, pod shell, logs, edit, delete etc. Lens make it easy for us to check logs of pods, execute inside pod or edit pods manifest using these option in UI. Let's check logs of **nodeapp** pod. Click on **Pod Logs** icon. It will display logs of that paricular pod.

<p align="center">
 <img src="{{BlogImagesPath}}/nodeapp-logs.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* In this way, you may check details and status of any workload you deployed.

* In, **Network** section, you may see services and other network components listed. Click on **Services**. You may see the list of services running and their details.

* Let's check **nginx** service. Select it, you will see the details of service.

<p align="center">
 <img src="{{BlogImagesPath}}/services.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>


* Now if you want to **port forward** for this service, you may see the blue coloured tab **Forward** under **ports** section in details plane. Select it and you will see a small pop-up screen, in which you have to mention port number to which you want to expose this service. Then click on start. It will redirect you to browser and you may see your service's index page in browser.

<p align="center">
 <img src="{{BlogImagesPath}}/port-forward.png" style="width: 100%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>

<p align="center">
<img src="{{BlogImagesPath}}/output.png" style="width: 50%; height: auto; border: 1px solid gray; border-radius: 8px;"/>
</p>



## Epilogue
Lens IDE makes working with Kubernetes much easier by giving you a simple, user-friendly interface instead of using complex commands and files. As you saw in this tutorial, it helps you set up clusters, deploy services, and keep track of everything quickly. Whether you're just testing things on Minikube or handling bigger clusters in the cloud, Lens provides you the observability and control you need—all in one place.

---
