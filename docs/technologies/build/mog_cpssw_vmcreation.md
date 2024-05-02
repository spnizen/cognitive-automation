---
template: overrides/main.html
title: Getting started
---

This is the detailed procedure, step-by-step guide, to create a new PAS VM.

The procedure may evolve depending on the PAS version, so make sure to take the procedure 
release that is related to your PAS version.

#### 4.1 Pre-requisites
Configuration parameters you need as input
Before you start this procedure, please gather the following parameters:
• PAS location (on which BMLS)
• PAS Name
• PAS IP Address, Netmask and Gateway
• PAS management VLAN (VLAN ID)
• DNS servers
• NTP servers 
You may have to configure one or several VMCG for the same PAS. So you also need to know for 
each VMCG:
• VMCG Name
• Number of Compute Nodes for the VMCG
• Storage to be allocated for the VMCG
• On which VMCG the PAS must be hosted. 

**When Infrastructure VMCG (INRxx) must be created, use it to host the PAS.**

Normal values are the following, depending on region:

|  **Region** |    **SEDC**    |    **NEDC**    |    **NADC**    |    **MEDC**    |    **ATDC**    |
|:-----------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
|   **VLAN**  |      2106      |      2106      |      2106      |      2106      |      2106      |
| **Netmask** |  255.255.254.0 |  255.255.254.0 |  255.255.254.0 |  255.255.254.0 |  255.255.254.0 |
| **Gateway** |  10.227.59.254 | 10.241.187.254 |  10.68.115.254 |   10.99.7.254  |  10.99.207.254 |
|   **DNS1**  |  10.227.89.134 | 10.241.183.130 |  10.227.89.134 |  10.227.89.134 |  10.227.89.134 |
|   **DNS2**  | 10.241.183.130 |  10.227.89.134 | 10.241.183.130 | 10.241.183.130 | 10.241.183.130 |
|  **NTP 1**  |  10.227.94.126 | 10.241.180.254 |  10.68.125.254 |   10.99.2.254  |  10.99.129.254 |
|  **NTP 2**  |  10.227.94.254 | 10.241.181.254 |  10.68.126.254 |   10.99.3.254  |  10.99.130.254 |

#### 4.2 Access to 3M tooling

Some steps of this procedure require access to 3M tooling (Meta Model Manager).
3M is accessible at http://10.227.94.138.

#### 4.3 Detailed procedure
##### 4.3.1 Create VMCG in the BMLS
Connect to the BMLS for the datacenter the PAS is related to:

   ![Enterprise Environment](../assets/images/EnterpriseEnv.png)
   ![Enterprise Environment](../assets/images/3mtool1.png)

Use a login ID with administrator privileges

![Login UI](../assets/images/loginUI.png)

Go to Cloud / Cloud Groups

![PAS UI](../assets/images/pasUI.png)

Click on the ‘+’ sign next to ‘Cloud Groups’ to create a new Cloud Group

![VMCG](../assets/images/CloudGroup.png) 

Set the name of the Cloud Group, select ‘Virtual Manager’ as the Cloud Group type and click OK. 
Open the ‘Compute nodes’ section:

![Compute Node](../assets/images/ComputeNode.png)

On the drop-down list, select a free compute node. It will be attached to the VMCG.
Repeat this operation to have the right number of compute nodes in the VMCG.

![Compute Node](../assets/images/ComputeNode1.png)

Wait until the status for all the Compute Nodes becomes ‘Available’

![Compute Node2](../assets/images/ComputeNode2.png)

In case you need to create several VMCG on the same PAS, repeat these steps for each VMCG.

 - **VMCG becomes “Unavailable” with Compute Node “Quiesced” – What to do?**
After you add Compute Nodes to several VMCG, the first Compute Node stays “Available” while 
next Compute Nodes become Quiesced, nevertheless Compute Node you select.
So the VMCG state changes from “Available” to “Unavailable” like in those screenshots:

![VMCG BNR08](../assets/images/BNR08.png)

Then, after a few seconds, the two Compute Nodes become “Quiesced”, the VMCG becomes “Unavailable”:

![Compute Node Quiesced](../assets/images/ComputeNodeQuiesced.png) 

To resolve this problem, you must reconfigure High Availability on vCenter.

Actions:

- Get Credentials for Virtual Manager access (menu System, submenu System Settings, 
choice External Application Access Settings):

![External User](../assets/images/ExternalUser.png)

- Connect on vCenter with those credentials

- Select the first Compute Node – the one in “Available” state, display the contextual menu 
and click on “Reconfigure for vSphere HA”:

![Reconfigure of vSphereHA](../assets/images/ReconfigureVsphereHA.png)

- Wait until the process is completed:

![Recent Task](../assets/images/vCenterRecentTasks.png)

- Do the same action on each other Compute Nodes until it’s completed:

![Reconfigure of vSphereHA1](../assets/images/ReconfigureVsphereHA1.png)

- Login on BMLS, on menu Hardware, click on Compute Nodes:

![BMLS HW CN](../assets/images/BMLS1.png)

- For each Compute Node in “Quiesced” state, click on “Start” button:

![Compute Node Quiesced1](../assets/images/ComputeNodeQuiesced1.png)

- Wait until the Compute Node state moves to “Available”:

![Compute Node Available](../assets/images/ComputeNodeAvailable.png)

- When all Compute Nodes are started, check the VMCG becomes “Available”:

![List of CN](../assets/images/ComputeNodeList.png)

##### 4.3.2 Create volumes in the BMLS on internal storage

**Warning:**
Section 4.3.2 only applies for BMLS internal storage. In case, you are asked to use external 
storage, please refer to section 4.3.3 

- **Create Volume Group for PAS**

    Go to Cloud / Volume Groups
 ![Volume Group1](../assets/images/VolumeGroup1.png)

Click on ‘Create New’
![Volume Group2](../assets/images/VolumeGroup2.png)

Set the PAS’ hostname as name of the volume group with a short description and select the VMCG 
name from the drop-down list for ‘In Cloud Group’.

**Rule: When the PAS contains INRxx Cloud Group, select it.**

Open the Volumes section to add new volumes to this Volume Group
![Volume1](../assets/images/Volume1.png)

- Create CACHE volume
Click the ‘Add Volume’ button to add the CACHE datastore
![Create Cache Volume](../assets/images/CreateCacheVolume.png)

Set <hostname>_CACHE_0001 as the volume’s Name, Block VMFS as type.
In the “In Cloud Group” section, make sure you check the name of ALL the VMCG that will be 
managed by your PAS. If one VMCG is not checked, this VMCG won’t be usable by the PAS.
**Sizing Rule:**
Specify 500 GB.
Click OK.

- Create PAS VM volume

Create another volume with <hostname>_VMPAS_0001 as the volume’s name, Block VMFS as 
type, ensure that the name of the VMCG that is hosting the PAS is checked in the ‘In Cloud Group’ 
list.
**Sizing Rule:**
Specify 1 TB.
Click OK.
![Create PAS VM Volume](../assets/images/CreatePASVMVolume.png)

Once this volume is created, click on the volume’s link on the Volume Group page. This will lead 
to the Cloud > Volumes page with details of the VMPAS volume.

![PAS Volume Page](../assets/images/VolumePage.png)

Look for ‘Datastore name’. Copy the ‘datastore name’ and save it for future use.

- Create Volume Groups and Volumes for VMCG
For each VMCG, check the change request/spec to see if additional volume is required for the 
VMCG. 
If yes, go back to the ‘Volume Groups’ page and create a volume group with name: 
<PASHOSTNAME>_<VMCGName> and assign to the VMCG.
Then create a “Block VMFS” volume with name 
“<PASHOSTNAME>_<VMCGName>_VMFS_000x” and appropriate size. Attach this volume 
to its VMCG only.

- Assign volumes to the PAS
With PureApplication 2.2.5.x, you need to set the “Associate System” name to each volume to 
make them visible to the PAS.
Go to “Cloud -> Volumes” on the BMLS.
On EACH volume you have created, including CACHE and PAS VM volumes, change the 
“Associate System” field with the short hostname of the PAS you’re about to create.
Warning: be careful of the case (use only capital letters)

![BMLS Volume Page](../assets/images/BMLSvolumePage.png) 

- Case of “GOLD” VMCG – Replication Volumes

In case the VMCG you’re adding is from “Gold” class (i.e. its name starts with a “G”), you need 
to process the following additional steps. In the following steps, we will designate BMLS#1 as the
BMLS where you have created the VMCG and BMLS#2 as the BMLS on which storage is replicated.

Storage is replicated between couples of BMLS. For these steps, you need to connect to the BMLS 
that is paired with the one you are creating the VMCG on. If you don’t know which BMLS is 
replicated with the BMLS you’re working on, go to “System -> Bock Storage replication”, then 
select the replication profile on the left and expand the “details” section. The IP address of the other 
BMLS is the “Peer management location”.
1) On BMLS#2, create a volume group called “DR_<PASHOSTNAME>_<VMCGName>”. Do 
not assign any cloud group to it.
2) In this volume group, create new volumes. For each volume you have created on BMLS#1, you 
need to create a volume on BMLS#2. The name of the volume on BMLS#2 is the same as the 
one on BMLS#1, prefixed by “DR_”. The size of the volumes must be identical on both BMLS. 
Type is “Block VMFS”. Do not assign volumes on BMLS#2 to any cloud group.

To summarize:
![BMLS1 vs BMLS2](../assets/images/bmls1Vsbmls2.png)

Volume group and volume assigned to Gold VMCG No cloud group assignment

3) On BMLS#1, go to “System -> Block Storage replication” and select the replication profile on 
the left.

![BMLS1](../assets/images/1stBMLS.png) 

4) Click the “Add Volumes” button.

5) In the “Local volume” list, select one volume you have created and select its corresponding 
volume in “remote volume” list (it’s populated depending on local volume size). Make sure 
replication type is “synchronous”. Click “Add”.

![Add volume for replication](../assets/images/AddVolumeForReplication.png)

6) Repeat steps 4 and 5 for each volume.

7) On BMLS#2, go to “System -> Block Storage replication” and select the replication profile 
on the left. Accept replication for all volumes by clicking on **Accept** button.

![Block storage replication profile](../assets/images/BlockStorageRepicationProfile.png)

##### 4.3.3 Create volumes in the BMLS on in External Storage

**Warning:** 
Section 4.3.3 only applies for storage external to BMLS. In case, you are asked to use 
BMLS internal storage, please refer to section 4.3.2
This document is assuming that the BMLS are already connected to the external storage and 
properly configured to access it.

Main differences when using external storage, compared to internal storage:

• There’s no volume group defined on BMLS
• Volumes are created by storage administrators on external storage and discovered by the 
BMLS. 
• By default, the external volumes are seen by the BMLS as “Block” storage, instead of 
“Block VMFS”, requiring additional steps to format them as “Block VMFS”
• Block storage replication is not managed by the BMLS
• Naming convention is different both at BMLS and PAS levels

- Naming conventions for external volumes

The names of the volumes are based on the hostname of the PAS and the name of the VMCG that 
will use these volumes.

![ES Naming Convention](../assets/images/ESNamingConvention.png)

In case of Gold VMCG, storage administrators need to create 2 consistency groups that will 
contain all the replicated external volumes on each side. Due to a limitation to 15 characters on 
SVC, we will use the PAS hostname as name for these 2 consistency groups.
In our example, name of the consistency groups will be “SECLPRVGN3PAS15”.

- Creation of new volumes on external storage

The creation of new volumes on the external storage is performed by the storage administrators. 
They need the following details in order to create a new volume:
• Name of the new volume (see §2.3.1 “naming conventions for external volumes”);
• Size of the new volume;
• Name of the BMLS that will use the new volume;
• If the volume is replicated (i.e. targeted for Gold workload), provide the same information 
for the “DR” volume.

***Replication must NOT be enabled before the volumes are fully configured on both BMLS***

To summarize, you need to ask the storage administrators to create the volumes listed on the table 
below (please adapt):
![ES Create Volumes](../assets/images/CreateESVolumes.png)

- Volumes configuration in BMLS

Follow this procedure for EACH volume, including the “DR_” volumes (on peer BMLS).
Login the BMLS and go to the “Hardware -> Storage Devices” menu.
You should see in the left column a device called “External Storage Node”. Select it and expand 
the “Volumes” section.
If you can’t find the volume(s) you have requested, click on the “Discover” icon on top right of 
the screen (“eye” icon)

![ES Volume Discover](../assets/images/ESVolumeDiscover.png)

This is launching a discovery job. Wait for the job to complete (see “System -> Job Queue” 
menu).

![ES Launching Discovery Job1](../assets/images/ESLaunchingDiscoveryJob1.png)
![ES Launching Discovery Job2](../assets/images/ESLaunchingDiscoveryJob2.png) 

Once the job is completed, refresh the page and you should see the new volumes:

![ES Launching Discovery Job3](../assets/images/ESLaunchingDiscoveryJob3.png)

**Warning:**
Since the external SVC is shared by several BMLS, you could see volumes that are not supposed 
to be used by the BMLS you’re working on. This is normal and works as designed. Be careful in 
selecting the right volumes.

Click on the name of the volume to directly go the “Cloud Volumes” page:

image

As you can see, the type of the volume is, by default, set to “Block”. We need to change this to 
“Block VMFS” but, with external volumes, this option is not available by default.
We first need to map this volume to a cloud group (or VMCG).
Click on the “Edit” link in from of the “In Cloud Group” section and select the VMCG you want 
to attach the volume to. If the volume is a CACHE volume and needs to be mapped to several 
VMCG, select one of these VMCG for now, you’ll be able to map the volume to the other 
VMCG later.
**In case of “DR_” volumes (for Gold VMCG),** these volumes are not supposed to be mapped to 
a VMCG in a normal situation, but this is required by the procedure. We will temporarily map 
these volumes to a VMCG and unmap them at the end. You can temporarily map these volumes 
to any VMCG, even if it’s the VMCG that they should be mapped to in case of DR.

Image

image

If the job fails on “DR_” volume, contact the storage administrator to confirm that the volume is 
not yet the destination of a replication.


Go back to your volume (or refresh its page). Now you can edit the type and choose “Block 
VMFS”. Also check the “Format” checkbox and click “Save”:

image

image

Wait for the “volume update” job to complete.

image

Go back to the volume page or refresh it. Note that the “datastore name” should be the same as 
the volume name and the section “In Cloud Group” should have changed to this:

image

If the volume you are working on is a “CACHE” volume and the corresponding PAS is managing 
several VMCG, you need to attach this volume to all the VMCG this PAS is managing. To do so, 
click on the “Edit” button in section “In Cloud Group” (see previous screenshot) and select all the 
VMCG that needs to be attached. Wait for the job to complete.
Edit the “Associate System” attribute and set it with the short hostname of the PAS that will use 
this volume. The hostname must be in capital letters like on the screenshot below:

image 

Wait for the “storage volume updated” job to complete.

image

- Case of “GOLD” VMCG

You should have followed the same procedure (see §2.3.3) for “DR_” volumes on the peer BMLS 
and the “DR_” volumes should have been mapped to a VMCG (it doesn’t care which one).
Once completed, unmap the “DR_” volumes from any VMCG (the section “In Cloud Group” 
must be empty) and wait for the “volume update” job to complete.

image

Once you have configured all the “DR_” volumes on the BMLS, ask the storage administrators to 
enable replication from the non-DR to the DR volumes, providing them the following table:

image

##### 4.3.4 Create External Application Access in the BMLS for the PAS to be created.

Go to System / External Application Access Settings:

image

- Administrator group
Click on the ‘Create’ button to create new credentials for the new VMCG
image

Set ‘<PAS name> - Administrators’ as the credential’s name. Set ‘Cloud Groups’ as Access Scope. 
Leave ‘Virtual Manager Privilege Set’ with default value. Ensure to check the names of all the 
VMCG managed by the PAS in the provided ‘Cloud Group’ list and ensure the boxes ‘Grant 
Compute Nodes Access’ and ‘Grant Storage Access’ are checked

image

- Compute Node does not show the IP – What to do?
If the ‘IP Address’ of a Compute Node does not show on the External Users dialog box (as per 
following screenshot) follow the steps below. 

image

1 - Go to Cloud / IP Groups and select the MKS Console P Group

image

2 - Look at the IP Address section and find a free IP Address to attach the compute node to.

image

3 - Select the compute node to attach from the drop-down list. Having noticed the location of the 
compute node before helps looking for the right compute node in the list. 

image

4 - Confirm your choice by clicking ‘Attach’.

image

5 - Validate the operation by looking at the External Users dialog box and check that the IP 
Addresses shows up there.
Notice that the MKS Console IP Group ‘Attach’ operation can be done before the external user 
credentials are generated.

##### 4.3.5 Create a PAS VM

We are going to deploy the PASWE v2.3.0.1 using the OVA image. 
You need to login to the Jump server which is the closest to the BMLS on which you need to create 
a PAS, e.g. if you need to create a PAS on a BMLS in Balsberg, you should connect to the Jump 
Server in Balsberg. If you face some issues doing so, try the other Jump server of the given region, 
in the other datacenter (Paulstrasse in our example) but do not change for another region.
The same rule applies to the RTEM server you’ll work with. It should be the RTEM located in the 
same datacenter or, in worst case, in the other datacenter of the same region.
You can connect to the “local” Jump Server directly from CyberArk or by running a new Remote 
Desktop connection from your usual Jump Server (in any region).


| **Region** | **Location** | **Jump Server**             | **RTEM**       |
|------------|--------------|-----------------------------|----------------|
| SE         | Clichy       | 10.227.94.23                | 10.227.89.135  |
| SE         | Lognes       | 10.227.94.138, 10.227.94.150 | 10.227.89.136  |
| NE         | Koln         | 10.241.180.33               | 10.241.183.137 |
| NE         | Leverkusen   | 10.241.181.33               | 10.241.183.138 |
| NA         | Suwanee      | 10.168.125.33               | 10.68.124.135  |
| NA         | Atlanta      | 10.168.126.33               | 10.68.124.136  |
| ME         | Paulstrasse  | 10.99.2.33                  | 10.99.5.135    |
| ME         | Balsberg     | 10.99.3.33                  | 10.99.5.136    |
| AS         | Singtel      | 10.99.129.33                | 10.99.132.135  |
| AS         | Keppel       | 10.99.130.33                | 10.99.132.136  |

Login using Remote Desktop Connection to the local Jump Server form CyberArk or from your 
usual Jump Server.
Once you logged into the local Jump Server, mount the “share” directory from RTEM server on 
the local regional server. You can do this in 2 different ways:

- Option 1: you can open the “Run” window and open "\\LOCALRTEMIP\share”

image

- Option 2: You can open a Windows Explorer, click on “Map network drive” in the 
“Computer” menu. Enter "\\LOCALRTEMIP\share” as Folder

image

The PAS OVA image is under the below directory.
\\LOCALRTEMIP\share\receive\secl\all\productinstallpackages\softw
are\pas\install\PAS_Install\VM_PAS-2301-v1
Except for SECL : 
\\10.227.89.135\share\send\all\productinstallpackages\software\pa
s\install\PAS_Install\VM_PAS-2301-v1
If the BMLS is running version 2.2.6.0 or higher, you need to use the vSphere Web Client for the 
next steps because the fat client does not work anymore.
If the BMLS is running version 2.2.5.x, you can use either the vSphere Web Client or the 
vSphere fat client.

1. **Using vSphere power cli in RTEM (required for BMLS 2.2.6.0 or higher)**

For the PAS Image in V2301 we are going to use command line tool to create the PAS. Follow the 
below steps carefully.
Login to RTEM and run the following commands
Refer 2.4 Chapter to get the RTEM IP. Details.
For example, login to 10.227.89.135 using your AD ID (e.g. myname@cloudfabric.intrsre) 
and then

a) Run “pwsh”

image

Then
Set-PowerCLIConfiguration -ProxyPolicy NoProxy -Scope User -
InvalidCertificateAction Ignore -DefaultVIServerMode Single
It will prompt to Confirm
Press “Y”

image

Now connect to the vCenter with the following command.
Connect-VIServer -Server 'vcenter.fullfqdn' -Protocol https -User 
'username' -Password '***********' >> Connect the the Vcenter
For example:
Connect-VIServer -Server 'SELOGRVGN3VMW03.cloudfabric.infratest' -
Protocol https -User 'app_6ce279d5@vsphere.local' -Password 
'XXXXXX’

image

Note: Open Command prompt from the Windows RDP and run nslookup command to get the 
FQDN of the vCenter.

Now gather all the information before running the below command.
**'ESXI_where_should_be_the_vm – Ip address of the compute node where the PAS VM will be created.**
**Source should be the path where the OVA file is present**
**Datastore name – You can find this from CPS Cloud Volume**
**Look for the Datastore name**

image

Get-VMHost 'ESXI_where_should_be_the_vm' | Import-vApp -Source 
'/infratest/share/.../vm.ova' -Datastore 'datastore_name' -Name 
'final_vm_name' -Force

For example:

Get-VMHost '11.227.56.8' | Import-vApp -Source 
'/root/infratest/share/software/pas/PAS2301/PAS2301_V2.ova' -
Datastore 'p_147d25a7-137a-4721-b91d-ca3543d0a59c' -Name 
'PASVM2301' -Force

It would approximately take 2 hours to complete and after completing you will output as shown in 
the screenshot below.


image

image

**Once the VM is created in vCenter make sure you disconnect**
Disconnect-VIServer -Server 'SELOGRVGN3VMW03.cloudfabric.infratest'

image

Now go to vCenter.
Edit the VM settings you created, click the “New device…” button at the bottom of the Virtual 
Hardware tab and add a Network card.

image

On the “New Network” card, select the drop list and choose “show more networks”.

Then select the right VLAN: you must choose the VLAN ID on which the PAS will be (usually 
2106, see information provided by project management or, by default, table in chapter §1.1. Click 
OK.

Note that, on the 2 following screenshots, VLAN 2006 is selected instead of VLAN 2106. This is 
because the screenshot was taken in Infratest, using different VLANs.

image

Ensure that the ‘Connect at Power On’ option is checked, then OK.

image

You also need to change some CPU settings on the PAS VM.
Expand the “CPU” section in Virtual Hardware and change the following settings:
• CPU Reservation: 4000 MHz
• CPU Limit: Unlimited MHz
• CPU Shares: Custom 256000

image

Click OK to validate.
Now your VM is good to be powered on.

2. **Using vSphere fat client (for BMLS up to version 2.2.5.3)**
To create the PAS virtual machine, the vCenter fat client makes it easier than the web client. 
From the local Jump Server, open the vCenter fat client using the credentials for the Virtual 
Manager

image

Notice that right after clicking the ‘Login’ button, the following dialog box may appear asking you 
to confirm you want to access this vCenter server with that administrative client.

image 

Click the check box “Install this certificate and do not display any security warnings” then click on 
“Ignore” button.
If you fail to do so within a short timeframe, the fat client will just close and you will have to 
reconnect.

image

Go to Hosts and Clusters and deploy the topology tree up to the compute node

image

Now Navigate to File Deploy OVF template

image

Click “Next” button.

OVF template is found:

image

Click “Next” button.

image

Enter the PAS Name and Select the Inventory Location.
Rule: When the PAS contains INRxx Cloud Group, select it.


Select the datastore to receive the PAS VM, the one you named “VMPAS” with 1 TB size:

imgage

Click on “Next” button.
Select the Disk Format “Thick Provision Eager Zeroed”:

image 

Click “Next” button.

Click on “Finish” button to deploy the PAS VM:

image

image 

image 

This operation takes 2 hours and maybe more.

image 

**NOTE –** Once the deployment is complete. You can disconnect from the local regional Jump 
server and continue the below steps from SE Jump server.

Now Edit the VM settings you created, click the “Add…” button on the Hardware tab and add a 
Network card (Ethernet adapter).

image

image

image

image 

Select « VMXNET 3 » as adapter type. Select the right VLAN for ‘Network label’: you must 
choose the VLAN ID on which the PAS will be (usually 2106, see information provided by project 
management or, by default, table in chapter §1.1. 
Ensure the adapter is ‘VMXNET 3’ and that the ‘Connect at Power On’ option is checked, then 
Next
You also need to change some CPU settings on the PAS VM.
On the Virtual Machine Properties, click on the “Resources” tab and select the “CPU” settings. 
Change the following settings:
• CPU Shares: Custom 256000
• CPU Reservation: 4000 MHz
• CPU Limit: Unlimited

image 

Click OK.
Now your VM is good to be powered on.

##### 4.3.6 Configure networks for the new PAS VM

##### 4.3.7 VMCG with more than one compute node

- Add compute nodes at BMLS level
- Configure VMCG at vCenter level

##### 4.3.8 PAS basic configuration
Open the PSM UI on the URL: https://<PAS-IP-Address> and log on using admin / passw0rd as 
credentials


##### 4.3.9 Update environments database in 3M tooling.


##### 4.3.10 LDAPs and Security configuration.

- LDAPS configuration

##### 4.3.11 Specific Users Groups for NE

For NE PAS, you need to remove the default group “BMLS-PureApp-Administrators” and add the 
two following groups.

- BMLS-PureApp-SuperAdminNE
- BMLS-PureApp-AdministratorsNE

##### 4.3.12 Enterprise Userids
Depending on type of PAS (PréProduction vs Production) and Regions, some Enterprise userids must 
be defined, with specific authorizations.

- Authorizations for all Enterprise userids
- On all environments
- On all PreProduction environments
- On AS Production environments
- On ME Production environments
- On ME Production and PreProduction environments
- On NA environments
- On NE PreProduction environments
- On NE environments
- On SE environments

##### 4.3.13 Setting the CPU ratio on VMCG.

The CPU ratio of each VMCG depends on its class. This CPU ratio is contractually defined. This 
CPU ratio must be set before any deployment is performed on the VMCG. If VMs are deployed 
(even if they’re stopped), we cannot change the CPU ratio anymore. In this case, you would have 
to delete all the VMs on this VMCG before being able to change the CPU ratio.

The CPU ratio of each VMCG depends on its class. This CPU ratio is contractually defined. This 
CPU ratio must be set before any deployment is performed on the VMCG. If VMs are deployed 
(even if they’re stopped), we cannot change the CPU ratio anymore. In this case, you would have 
to delete all the VMs on this VMCG before being able to change the CPU ratio.

table

The 3M application provides a tool that can tell you what the expected CPU ratio on each VMCG 
is, compare it to the current one and, depending on the case, can fix the issue for you without 
writing any single command.

To use 3M, connect to 3M tooling at http://10.227.94.138 and select “Fix CPU Ratio on PAS” in 
the Applications menu.

Expand the Enterprise Cloud to find your PAS. Click on the PAS. The tool will gather the information 
from the PAS and list the VMCG.
Select you VMCG.

Depending on the different situations, the tool will tell you if the CPU ratio must be fixed or not 
and if it can do it for you.

image

Click the button to change the CPU ratio and check in the PAS GUI.
For PAS 2.2.5.3, no more action is required.


For PAS 2.3.0.1 and 2.3.1.1, if there are VMs on the VMCG, these VMs must be stopped, then 
stored and then started to force the PAS to calculate the new allocation. Normally, your VMCG 
should be empty or only contains the PAS VM so no more action is required.
More information about changing CPU ratio is available in document “Modifying CPU ratio on a 
VMCG” available at https://ibm.box.com/s/frtpag7uuxylj1odpypquyipws7cl7kw

1)
2)

image 

3)
4)

image

5)
6)

image

7)
8)
9)
10)
11)
12)


##### 4.3.14 Specific configuration for OpenPaaS

PAS that are targeted for “OpenPaaS” require additional steps. 
OpenPaaS environments require a new datastore on vCenter that is not usable by the PAS, i.e. PAS 
should not be able to deploy virtual machines on this datastore.
So, if the PAS you’re building is for OpenPaaS, you need to run the following steps.

**- Additional datastore for OpenPaaS**

On BMLS, go to Cloud / Volume Groups and select the cloud group that you have created for the 
VMCG (named <PASHOSTNAME>_<VMCGName>) in section 2.2.4.
Add a new volume to this volume group:
• Name: <PASHOSTNAME>_<VMCGName>_OPENPAAS_000x
• Description: “Datastore for OpenPAAS”
• Type: Block VMFS
• In Cloud Group: attach to the VMCG
• Size: to be provided by capacity management/project manager

image

Once created, click on the name of the volume.

image

Copy the datastore name, datastore UUID and LUN identifier.
You need to provide this information to project management for them to send to Enterprise OpenPaaS 
team.
**Important point: do NOT set the “Associate System” field. Leave it empty on purpose.**
Because the “associate system” field is empty, PAS will not discover it and will not deploy any 
VM on it, letting Enterprise populate this datastore at their convenience.

**- Additional vCenter credentials**
On BMLS, go to System / System Settings and expand the “External Application Access Settings” 
section.

Click the “create” button and fill the popup window as following:
• Name: <PAS Name> - OpenPaaS
• Access scope: Cloud Groups
• Cloud Group: select the appropriate VMCG
• Virtual Manager Set: “OpenShift Container Platform”
• Grant Compute Nodes Access: yes
• Grant Storage Access: yes

image

Click OK.
Once the credentials are created, click the details icon in the Actions column. Then click the “Show 
passwords”.
You need to provide the credentials to to project management for them to send to Enterprise OpenPaaS 
team

image

**- Add Enterprise DNS to PAS System Settings**
On PAS, go to System / System Settings and expand section “Domain Name Service (DNS)”
In addition to the 2 IBM DNS (10.227.89.134 and 10.241.183.130), add 2 Enterprise DNS for ME:
• 10.99.124.6
• 10.99.124.7
You should get the following list:

image
Click the “Save” button and check the job completion.

**- Change user group permissions**
On PAS, go to System / User Groups.
Select the “BMLS-PureApp-ICOProjectUsers” and change the “Cloud group administration / 
System level administration” permission from “View all cloud resources (Read-only)” to “Manage 
cloud resources (Full permission)” as follows:

image

**- Allow the Open PaaS VAs to communicate to the vCenter on opposite site**
Assign a SR for network team to update Enterprise_TO_IBM ACL in ME region OOB switches.
Traffic from the management interface of VA to be allowed towards other DC vCenter (If the VA 
is in ME PA, traffic to be allowed toward ME BA vCenter and vise versa).
Share the newly build VA IPs and vCenter IPs with network team upon completion of the build.
Any action may not be required if Enterprise_TO_IBM ACL is already allowing the traffic. Network 
team should provide the evidence of existing ACL entry before resolving the SR.

##### 4.3.15 Update admin & root passwords

From Box, lock then download the file named “BMLS & PAS & VMCG passwords.xls”.

Add a new line by copying/placing line number 69.
Replace Region, Site, Environment, Pure Name, Pure Type, Pure IP and VLAN based on PAS 
information.
The cells “admin password” and “root password” are updated based on your inputs.
Save the file, upload it on the Box, then unlock it.

**- Admin password**
Login to PAS UI with userid “admin” and default password.
Go on menu System, choice Users.
Click on “admin” userid. Click on “edit” link:

image

Then replace the password from the one on Excel file:

image

**- Root password**
Start SSH (thru Putty) to your PAS IP.
Login to PAS UI with userid “root” and default password.
Enter “passwd” command to set the new password from the one on Excel file.

##### 4.3.16 Validate Installation

Now, log off the PSM, then log on again with your cloudfabric userid to validate security 
configuration.

image 

On a well configured PAS there are three security settings should be configured:
1. LDAPs should be configured as follows (Go to ‘System’ > ‘System Security’ > LDAP 
settings) :

image

2. User Groups (Go to ‘System’ > ‘User Groups’)
The following User Groups should exist:
• BMLS-PureApp-ICOProjectUsers
• BMLS-PureApp-Administrators (except in NE)
• BMLS-PureApp-AdministratorsNE (only in NE)
• BMLS-PureApp-SuperAdminNE (only in NE)
IBM Cloud Integration Expert Labs Page 97/106
• BMLS-PureApp-ICO-PIF
• PUREAPP-RO
• Everyone

3. Users (Go to ‘System’ > ‘User’)
Ensure the following users exists:
• ICO_BMLS_CTU
• KPI_BMLS_USER
• JMP_PAS_PDT
• Several Enterprise users (see sections 2.11.x)

Finally, register the PAS creation as an event in the BMLS Tool @ Enterprise. 
For this go to the ‘BMLS Tool @ sre’ : http://10.227.94.138/html/index.html
On the navigation bar, go to Event log > Register a new Events:

image

Select the PAS and Submit. 

##### 4.3.17 Mail to Security teams

Last action is to contact the CyberArk and Linux teams to hand over the PAS root account.
For that, create a copy of Excel file named “CyberArk configuration - tempate_Enterprise-PUAMTemplateforOnboarding_Accounts.xlsx” then send this Excel file to 

sre_linux@wwpdl.vnet.ibm.com and sre-puam@wwpdl.vnet.ibm.com asking them to define OS 
Security IDs then to manage on CyberArk.

##### 4.3.18 Environment Profile, IP Groups and Catalog Content

After PAS installation, the configuration steps require to create one Environment Profile, define IP 
Groups and load Catalog items (plugins, storehouse files, OS images and patterns).

**- Environment Profile**
The same Environment Profile is created on all PAS.
From the main menu, select Tools / Script Launcher:

image

In the script database, look for the Configure PAS Network script:

image

Make sure you select the right script (executable is configure.cmd).
Click Execute in the Actions column to execute this script:

image

In the Parameter: Target Environment section, click the Select button:

image

Use the filtering fields in the Instance Selector dialog box to search for your target environment:

image 

Click on the checkbox on the Select column to select the target environment for the script:

image 

The parameter value displays the unique ID of the selected environment once the dialog box closes.

(Make sure an environment is selected before going next)
In the Parameter: JSON configuration file section, click the Browse button to make the File 
selection dialog box open:

image

Select the file /config/generic/createEnvironmentProfile.json using the tree-like structure. The 
relative path of the selected file is shown on the File area:

image

Click Ok once the right file is selected. The absolute, server-side path of the selected file is shown 
in the parameter area:

image

Click the Execute button to launch the script execution. A sub-process is created server-side to 
execute the script. A remote console opens on the browser to display the output of the script 
process:

image 

You can immediate kill the process using the small, red bomb icon. Once the script execution 
completes, you can use the green, outdoor icon to return to the job execution result database:

image

By default, the table is filtered on the current user ID.
Using the magnifier icon on the Actions column, you can retrieve the job console. The trash icon 
is used to delete the job execution result from the database

From BMLS Team @ Enterprise Tooling, menu “Enterprise Environments”, select “Tools”:

image
image 

**- IP Groups**

See KT document named “MassLoad IPGroups on Production VMCGs - v1.0.pdf”.

- Additional actions for OpenPaaS

For OpenPaaS, you need to prepopulate the IP Groups with all the IP addresses that are potentially 
usable by Enterprise. These IP Groups contain “OPAA” in their name.
Make sure the Enterprise DNS are already configured in the PAS System Settings (see section 4.3.14 for "Add Enterprise DNS to PAS System Settings")

For each of them, in Cloud / IP Groups, section “IP addresses”, assuming this section is empty:
1. Write down the subnet address and the gateway of the IP Group
2. Click the “+” button
3. Select “IP Range” and type the 1st IP address of the subnet (i.e. subnet address + 1) and the 
last IP address before the gateway (i.e. gateway address – 1). See screenshot below as an 
example

image 

4. Do the same with all “OPAA” IP groups.

**- Catalog Content**

See KT document named “Catalog Content Upload on Production PAS - v1.0.1.pdf”

