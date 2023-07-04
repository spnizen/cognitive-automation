---
template: overrides/main.html
title: Getting started
---

#### 3.1	Introduction
This document is the procedure to configure BMLS  on AXA Private Cloud project. We will only describe the initial configuration, which is put in place just after the IBM SWAT team has run the SGEN process on a brand new BMLS. 

#### 3.2	Assumptions
We assume that the following operations have been performed by IBM SWAT team and TSS:
•	Racks are physically delivered in the datacentres and powered up;
•	Racks have been eventually upgraded to the latest firmware level;
•	SGEN  have been successfully done;
•	Default content data (corresponding to the firmware level) have been uploaded to PureApplication;
•	Racks are physically connected to the datacentre network;
•	The following settings have been configured:
o	“System management IP”: IP version, floating IP address, host name, primary IP address, secondary IP address, domain name, netmask, default gateway.
 
o	DNS (at least one)
  
o	NTP (at least one)
  

#### 3.3    Required information
The following information must be provided by infrastructure team to complete the configuration. Information can usually be found on Box (see provided links), otherwise, the main contact is Eric Lesport.
•	BMLS IP addresses and hostname (see file https://ibm.box.com/s/krr6s5dib95ze0r0wfx05f574ppnwqou)
•	Username and password for the default administrator (this user is created by SWAT team during SGEN). It is usually “admin”, with password “admin” or “passw0rd”. 
•	IP management plan: https://ibm.box.com/s/9vw6u0w1nlhyy5l34fhqlipk0sjeze5o


#### 3.4	Removing test configuration
When a new BMLS is “SGENed”, SWAT team is supposed to test it by deploying a sample pattern. This also means creating a basic cloud configuration on the BMLS.
Before starting configuration:
1.	Delete any deployments. 
2.	Delete any IP Group (usually called “Demo IP Group”).
3.	Remove compute nodes from the Cloud Group (usually named “Shared”).
4.	Delete “Shared” Cloud Group and “Shared” Environment Profile
5.	Delete VLAN 300 from network configuration (System -> Network Configuration, “VLANs and Links”)
5	Rack name customization
Login the BMLS and go to “Hardware -> Infrastructure Map”.
On the top of the screen, change the name of the system following the naming convention “<Datacenter><BMLS number in the region> <model>/<serial number>”, for example “LEVERKUSSEN2 8564/78CE19G”:
 
#### 3.5	Register the BMLS in tooling 
Go to http://10.227.94.138
Login using your LDAP id and password
 
Reminder : latest version of the 3M documentation is available at https://ibm.box.com/s/4yesanswezdguipfsgbzbur7uuquanms
To create or update an environment, you use the Databases / Manage Instances menu:
 

In the generic Database view, select the Environment base:

 

You will see the list of Environment instances as a table-list view:

 

To edit an existing record, click the Edit icon in the Actions column.
To create a new record, click the ‘+’ icon in the panel blue-header. The ‘create a new Environment’ form opens:

 

All the fields marked with the little red ‘ID’ are mandatory. They also form the environment instance unique ID, therefore their combined value must be unique within the Environment database.
Provide the following information before submitting:
•	Region
•	Datacenter
•	Name. Format is “BMLS model/serial”, i.e. “BMLS 8564/78E495G”. You can find the model and serial number on the login screen of the BMLS or on the very bottom left of the screen once you’re connected to the BMLS.
•	Type: BMLS
•	Version. You can find the version number on the very bottom right of the screen once you connected to the BMLS
•	IP Address
•	Class
 
#### 3.6	Network configuration
Important:
Setting up or modifying the network configuration is an important task that can impact the solution a lot. A bad configuration can cause connectivity issues on AXA VMs, can prevent IBM solution to work properly or can cause damage on the BMLS or even on datacentre network. 
The “network reconfigure” job that is executed to apply a change on these settings is not queued. If two jobs run at the same time, this may cause inconsistencies in the network configuration that would require L3 Support to fix. As a consequence, make sure that you’re the only person working on it and that there’s no “network reconfigure” job already in progress or failed.
Open a second window and go to “System -> Job queue”, then filter on “network” and refresh regularly to make sure that there’s no “network reconfigure” job already in progress or failed.
Double-check each parameter before saving the network configuration.

BMLS are connected to the OOB VLAN (Out-Of-Band). OOB VLAN has an ID of 100 or 200 depending on the datacenter:
Region	Datacenter	OOB VLAN ID	Subnet
AS	Singtel	100	10.99.129.0/24
AS	Keppel	200	10.99.130.0/24
ME	Paulstrasse	100	10.99.2.0/24
ME	Balsberg	200	10.99.3.0/24
NA	Suwanee	100	10.68.125.0/24
NA	Atlanta (Metro)	200	10.68.126.0/24
NE	Koln	100	10.241.180.0/24
NE	Leverkusen	200	10.241.181.0/24
SE	Clichy	100	10.227.94.0/25
SE	Lognes	200	10.227.94.128/25

Globally, we need 4 links between a BMLS and the datacentre network:
-	One link to administer the BMLS itself. This link will be named “Rack_Mgmt”.
-	One link that will be used by the management interfaces of AXA VMs. This link will be named “AXA_Mgmt”.
-	One link that will be used by the data interfaces of AXA VMs. This link will be named “AXA_Data”.
-	One link that will be used for IBM infrastructure, such as PureApplication Software (PAS), TSM proxy servers, block storage replication, access to compute nodes… This link will be named “IBM_Infra”.
Each BMLS has 2 TOR switches.
For each link, we use at least 2 cables (one per TOR) to connect to the datacentre. Cabling is performed by IBM TSS people.
By design, on Gen3 W3550 BMLS (if S/N starts with “8564/”), “Rack_Mgmt” link is always on port 48 of TORs. This link is the only one that is using transceivers for 1Gb SFP Copper. This link is created by SWAT team during SGEN process and should not be modified because we may lose connectivity to the BMLS administration.
Other links are using one or several ports with 10 Gb SFP+ Fiber transceivers.
For cabling details, go to https://ibm.ent.box.com/folder/12028314417 and, depending on the region, go to the right subdirectory and look for Excel spreadsheets called “AXA * CLOUD Urbanization *.xlsx”.

For each link, you need to assign one or several VLAN groups.

##### 3.6.1	Create VLAN groups
Go to “System -> Network Configuration” and expand “Additional Networking Features” at the bottom of the page.
Make sure that “Private VLAN” feature is enabled as shown below. If not, enable it.
 
Then, expand the “VLANs and Links” section.

##### 3.6.2	Default VLAN groups
The following VLAN groups must be already created in the VLANs table:
VLAN Name	Type	Private VLAN Type	Primary Private VLAN	VLAN ID	Allow Multiple Links	Spanning Tree Enabled
DEFAULT VLAN	Native VLAN	None	None	1	Yes	No
MERION	External Storage	None	None	4091	No	No
Console	System Management	None	None	100 or 200 depending on datacenter	Yes	No

##### 3.6.3	Add VLAN groups for IBM infrastructure
Create the following VLAN Groups.
To create a VLAN group, click on the “Create VLAN” button, fill all the fields and click confirm:
 
VLAN Name	Type	Private VLAN Type	Primary Private VLAN	VLAN ID	Allow Multiple Links	Spanning Tree Enabled
MKS Console	IP Group	None	None	2105	No	No
Block Storage Replication	IP Group	None	None	2098	No	No
PAS Prod Management	IP Group	None	None	2106	No	No

##### 3.6.4 Add VLAN groups for AXA VMs management
If you already know which AXA OpCos will be deployed on the BMLS, take on of them. Otherwise, choose an OpCo of the same region. We may have to delete this OpCo from network configuration if it’s not required anymore. We need at least one OpCo, even if it won’t be used, in order to properly configure the BMLS. If there’s no VLAN assigned to a link, the corresponding ports on the TORs are not activated.

First, create the Primary PVLAN for the OpCo.
VLAN Name	Type	Private VLAN Type	Primary Private VLAN	VLAN ID	Allow Multiple Links	Spanning Tree Enabled
yyy_MGMT_xxx_PRI	IP Group	Primary	None	nnnn	No	No

The name of the link must be “yyy_MGMT_xxx_PRI” where “xxx” is the trigram (in capital letters) of the OpCo. “yyy” is usually replaced “ATS” (regular OpCos), by “TSn” (Service zones) or “TMn” (Management zones). The VLAN ID can be provided by the IBM network team or by looking at the network configuration of another BMLS in the same region.
 

Then, create the Isolated PVLAN for the OpCo.
VLAN Name	Type	Private VLAN Type	Primary Private VLAN	VLAN ID	Allow Multiple Links	Spanning Tree Enabled
yyy_MGMT_xxx	IP Group	Isolated	yyy_MGMT_xxx_PRI	mmm	No	No
The name of the link must be “yyy_MGMT_xxx” where “xxx” is the trigram (in capital letters) of the OpCo. “yyy” is usually replaced “ATS” (regular OpCos), by “TSn” (Service zones) or “TMn” (Management zones). The Primary Private VLAN is the one you just created before for this OpCo. The VLAN ID can be provided by the IBM network team or by looking at the network configuration of another BMLS in the same region. It is usually the one used by the Primary PVLAN+1.
  
##### 3.6.5	Add VLAN groups for AXA VMs data interface
For each OpCo, you need a VLAN group for the data interfaces. The VLAN group will be named “xxx_DATA” where “xxx” is the trigram (in capital letters) of the OpCo.
These VLANs are not Private VLANs.
The VLAN ID field is actually a list of VLAN IDs. This list is comma-separated and can contain ranges using “-“. For more information about the list of VLAN IDs of a given OpCo, see the BMLS Team@AXA application.
VLAN Name	Type	Private VLAN Type	Primary Private VLAN	VLAN ID	Allow Multiple Links	Spanning Tree Enabled
xxx_DATA	IP Group	None	None	nnnn	No	No

##### 3.6.6	Save VLAN group configuration
It is recommended to save the network configuration in 2 steps. So, once all the VLAN groups have been created, scroll down till you see the “Save” button under the links table. Click on “Save” and check the job queue to see if the “network reconfigure” job is completing successfully. This may take several minutes, potentially hours if the number of VLAN IDs is very high.

##### 3.6.7	Assign VLAN groups to physical links
Once the job reconfigure job is successfully completed. Go back to “System -> Network configuration”. Eventually, refresh the page to make sure you’re seeing the actual configuration.
Expand the “VLANs and Links” section and scroll down to the Links table.
Create or modify the table to get the 4 links as following. Be careful, these parameters are important for solution to work and not cause any issue on the network.
Link name	Ports	Transceiver	Aggre-gation	Port type	VLAN name	Native VLAN	Tagged Native
Rack_Mgmt	48	1 Gb SFP Copper	LACP	Access	Console	Calculated by BMLS	No
IBM_Infra	27 	10 Gb SFP+ Fiber	LACP	Trunk	All VLAN groups for IBM infrastructure	Calculated by BMLS	Yes
AXA_Mgmt	29,30 	10 Gb SFP+ Fiber	LACP	Trunk	All VLAN groups for AXA VMs management	Calculated by BMLS	Yes
AXA_Data	25,26 	10 Gb SFP+ Fiber	LACP	Trunk	All VLAN groups for AXA VMs data interface	Calculated by BMLS	Yes

##### 3.6.8 	System Management IP
System management IP section should be already configured by SWAT team and should not be changed. In case you detect a bad value in one of the fields of this section, get in touch with SWAT team. Do not attempt to change this section without support from SWAT team.
 
##### 3.6.9 	IP configuration for Block disk replication
Go to section “Additional IPs for storage device for block disk replication” on System -> Network configuration page.
This section sets external IP addresses to the storage controllers of the BMLS to allow block storage replication with another BMLS.
Information to set on this page is provided by the IP management plan (see Required information).
Block storage replication requires 3 IP addresses (IPv4), usually on VLAN 2098.
If not yet configured by the SWAT team, set the IP addresses, VLAN ID, netmask and gateway for the 3 ports (management port, replication ports 1 and 2). Click “Save” and make sure that the job completes successfully. Then check that the status of each port is marked as “available”.
If not, this must be investigated with the network team and eventually with PureApplication Support.
 
##### 3.6.10 	External IP address for vCenter
BMLS is based on VMWare vCenter which is, by default, hidden. Since firmware 2.2.3, it is possible to provide an external IP address to vCenter, making it accessible. This is also required to create Virtual Manager Cloud Groups as we do on AXA Private Cloud project. Since firmware 2.2.4, it is also possible to provide a FQDN to vCenter instead of the default “purevc” hostname.
Providing an external IP address to vCenter for the first time does not take very long but changing this IP or changing the FQDN requires the BMLS to reinstall vCenter under the covers. This operation takes several hours and causes an outage that prevents any deployment or operation on existing VMs. Moreover, some minor issues have been seen in the past during this operation.
As a consequence, this operation is usually performed by SWAT team while setting up the BMLS for the first time. Do not change these values.
To check the settings, go to “System -> Network configuration” and expand the “Virtual Manager external IP address” section.
The “Configure IPv4 addresses” must be checked and the “Virtual Manager FQDN” and “Virtual Manager IP address” must be set. Make sure the FQDN is correct (containing the full domain). The IP address must be on the same VLAN and subnet as the BMLS.
 

#### 3.7    System Settings
Go to “System -> System Settings”
8.1	Mail Delivery
SMTP Server: smtp.cloudfabric.intraxa
Reply-to address: imi_cloud_support@wwpdl.vnet.ibm.com
 
##### 3.7.1 	Date and Time
NTP servers are normally set by during SGEN. NTP servers are the gateways of the OOB of both datacenters of the region.
The following table gives you the NTP servers in the right order depending on the datacenter where the BMLS is located.
Region	Datacenter	NTP 1	NTP 2
AS	Singtel	10.99.129.254	10.99.130.254
AS	Keppel	10.99.130.254	10.99.129.254
ME	Paulstrasse	10.99.2.254	10.99.3.254
ME	Balsberg	10.99.3.254	10.99.2.254
NA	Suwanee	10.68.125.254	10.68.126.254
NA	Atlanta (Metro)	10.68.126.254	10.68.125.254
NE	Koln	10.241.180.254	10.241.181.254
NE	Leverkusen	10.241.181.254	10.241.180.254
SE	Clichy	10.227.94.126	10.227.94.254
SE	Lognes	10.227.94.254	10.227.94.126
Do not forget to click the “save” button if you change anything on this section. In this case, please have a look at the “System -> Job Queue” to see if the job completes successfully.
 

##### 3.7.2 	Events
PureApplication name: <use the IP address of the BMLS>
PureApplication contact: kayyagar@in.ibm.com,sankabi1@in.ibm.com,imi_cloud_support@wwpdl.vnet.ibm.com
PureApplication location: <use the name of the datacenter>
 
Then, click on the “Create Trap Destination”.
You have to create 6 trap destinations. These will use the 2 ITM Relay of the region (one ITM relay in each datacentre). There are 3 communities, one per severity between “Warning”, “Critical” and “Fatal”. Port number is always 162 and SNMP version is “2c”. Use the following table to create the trap destinations.
Region	IP addresses for ITM relays	Communities
AS	10.99.132.135
10.99.132.136	axa_fatal
axa_crit
axa_warn
ME	10.99.5.135
10.99.5.136	axa_fatal
axa_crit
axa_warn
NA	10.68.124.135
10.68.124.136	axa_fatal
axa_crit
axa_warn
NE	10.241.183.137
10.241.183.138	NE_Fatal
NE_Crit
NE_Warn
SE	10.227.89.135
10.227.89.136	axa_fatal
axa_crit
axa_warn

 
 
Do not forget to click on the “Save” button.
##### 3.7.3 	Service and Support Manager
Go to System -> System settings and expand the “Service and Support Manager”. This feature is often known as “Call Home”.
Click on the “pencil” icon to edit the different sections.

In section “Service and Support Level”, select the second choice “Collect troubleshooting information and open a service request, but do not post the log files.” And check “Disable automatic health check”.

 

Section “Company Contact” depends on the region and datacentre where the BMLS is located. Contact project manager (Eric Lesport) to have the right information.
 
Section “System Information” depends on the region and datacentre where the BMLS is located. Contact project manager (Eric Lesport) to have the right information.

 

On section “Connection”, check “HTTP proxy server” and set “proxy server host name” as “10.229.246.11” and port number as “8080”.

 
On section “Send Notification”, do not check anything and click on OK.

 
Make sure that all sections are ticked in green and click on the “Test Connection” button.
If the test is not successful, check the error messages. It is probably due to the connection to the Internet proxy. Double-check the proxy settings but this may due to the configuration of the Internet proxy itself. The proxy must be configured specifically to allow connections from the BMLS.
If test is successful, click on the “Send test service ticket”.
 
Delete the test ticket by going to “System -> Problems” and look for the “Call home test service ticket test call home functionality”.
 
Click on the “close” icon (grey cross) and then delete the problem (recycle bin icon).

##### 3.7.4 	Log Management
Maximum number of days to retain log files: 90, enabled
Destination address (IP or FQDN):
•	AS: 10.99.131.101
•	ME: 10.99.4.101
•	NA: 10.68.123.101
•	NE: 10.241.182.106
•	SE: 10.227.88.106
Select the log files to be collected: “Security and audit log files”
Click the “Save” button.

##### 3.7.5 	Domain Name Service (DNS)
DNS servers are normally set by during SGEN. There are 2 DNS servers worldwide, one in France and one in Germany. Their order depends on the distance with the datacenter.
The following table gives you the DNS servers in the right order depending on the datacenter where the BMLS is located.
Region	DNS 1	DNS 2
AS	10.241.183.130	10.227.89.134
ME	10.227.89.134	10.241.183.130
NA	10.227.89.134	10.241.183.130
NE	10.241.183.130	10.227.89.134
SE	10.227.89.134	10.241.183.130
Do not forget to click the “save” button if you change anything on this section. In this case, please have a look at the “System -> Job Queue” to see if the job completes successfully.
 
##### 3.7.6 	Virtual Management Instance Settings
In a given region, each BMLS must have a unique ID.
This information is usually provided by Eric Lesport in the TDA information.

#### 3.8	MKS Console IP Groups
Go to “Cloud -> IP Groups”. Create a new IP group called “MKS Console IP Group” in case it does not exist already, with the following parameters:
-	Name: MKS Console IP Group
-	Version: IPv4
-	Used For: Compute Nodes
-	Primary DNS: 10.227.89.134
For subnet, netmask, gateway and VLAN ID, see IP management plan spreadsheet at https://ibm.box.com/s/9vw6u0w1nlhyy5l34fhqlipk0sjeze5o
VLAN is normally VLAN 2105.

Once created, add the IP addresses that were reserved for the compute nodes of this BMLS in the IP management plan.
For each IP address, attach a compute node (in the right order, from Chassis 1 Bay 1 to Chassis 1 Bay 14 and then from Chassis 2 Bay 1 to Chassis 2 Bay 14). Do not attach more than 6 IP compute nodes in parallel. The operation takes time to complete. Check the job queue to see if any job is failing.
All compute nodes must be attached.
  
#### 3.9	High Availability
Go to “Cloud -> High Availability”. Select “High availability” on the left.
 
Use the “Add more…” list to add 2 compute nodes. Preferably, choose one node from each chassis. It’s also preferable to wait for attachment to be completed before attaching another compute node. Check job queue for any issue.
You should have the following configuration at the end:
 
#### 3.10  System Security
We will update the system security mainly by using scripts. This assumes that the password for “admin” is “passw0rd”. If this is not the case, go to “System -> Users” and select the “admin” user. Then edit the password and set it to “passw0rd”.

##### 3.10.1	Integration with Active Directory
Go to “System -> System Security” and expand the “LDAP settings” section:
 
Check that it is not yet configured (like on the previous screenshot).
This can be configured using the 3M Tooling. 
From the main menu, select Tools / Script Launcher:
 
In the script database, look for the Configure PAS Network as Admin user script:
 
Make sure you select the right script (executable is configureAsAdmin.cmd).
Click Execute in the Actions column to execute this script:
 
In the Parameter: Target Environment section, click the Select button:
 
Use the filtering fields in the Instance Selector dialog box to search for your target environment:
 
Click on the checkbox on the Select column to select the target environment for the script:
 
The parameter value displays the unique ID of the selected environment once the dialog box closes.
 
(Make sure an environment is selected before going next)

In the Parameter: JSON configuration file section, click the Browse button to make the File selection dialog box open. Select the file /config/generic/baseLDAPConfig.json using the tree-like structure. The relative path of the selected file is shown on the File area:
 
Click Ok once the right file is selected. The absolute, server-side path of the selected file is shown in the parameter area:
 
Click the Execute button to launch the script execution. A sub-process is created server-side to execute the script. A remote console opens on the browser to display the output of the script process:
 
You can immediate kill the process using the small, red bomb icon. Once the script execution completes, you can use the green, outdoor icon to return to the job execution result database:

This should run the scripts to configure LDAP. 

Go on the BMLS / PAS and on the UI select System > System Security and expand the “LDAP Settings menu”

 


On the line “Security certificate”, click the “accept…” link. This opens a popup to choose and accept the certificate There should be only one certificate. Click OK.
 
Then, the Security certificate should be green and accepted:
 

We choose the certificate of the Sub CA because it is the common certificate for the both domain controllers. In case of disaster on SE, the VIP will redirect flow to the NE domain controller. The certificate should be the same for the both DC.
In case of disaster on SE, the VIP will redirect flow to the NE domain controller. The certificate should be the same for the both DC.

NOTE: before doing this action, be sure to have the local admin password and be sure to set the good IP address indicated to this documentation. IP is automatically set, there is no action to apply the setting so do not make any mistake.

##### 3.10.2	Users and Groups
Now, you need to configure the Users and User Groups. For this follow the same procedure but use the ‘/config/generic/addUsersAndUserGroups.json’ configuration file instead:
 
Now go to System> User Groups page and click on ‘BMLS-PureApp-Administrators’
At the bottom of the page, make sure that, under ‘Security Administration’, Managed Security (Full permission) is checked.
 
Then, on the BMLS, go to “System -> Users”. Delete users “fderouiche” and “tferreira”.
Go to “System -> User Groups”. Delete the group called “BMLS-PureApp-ICO-PIF”.

In case the BMLS is for NE region, you need to delete the group called “BMLS-PureApp-Administrators” and add the group called “BMLS-PureApp-SuperAdminNE” as external account type. Set the permissions for this group as:
•	Manage workload resources (Full permission)
•	Allow delegation when full permission is selected
•	Manage cloud resources (Full permission)
•	Manage hardware resources (Full permission)
•	Manage auditing (Full permission)
•	Manage block storage replication profiles (Full permission)
•	Manage security (Full permission)

#### 3.11	Backup and Restore
Refer to file https://ibm.box.com/s/8ac9jmy748az0fm9i9f3v1hjjnbkqk3d

#### 3.12	Block Storage Replication

##### 3.12.1	Create the user for replication
We need to create a local account on both BMLS to replicate storage one to the other.
On each BMLS of the pair, go to “System -> Users” and create a new account with the following information:
•	User name: replication
•	Full name: replication
•	Email address: replication@cloudfabric.intraxa
•	Account type: Local
•	Password: IBM4axaReplic@tion
 
Give this user the following permissions:
•	Manage block storage replication profiles (full permission)
•	Manage security (Full permission)

##### 3.12.2	Create the block storage replication profile
Go to “System -> Block Storage replication” and click on the “+” icon. Accept the responsibility and click on “Agree and continue”.
 
Select “IP based replication”.
Set name as “<Current BMLS name> to <the other BMLS>”
Peer management location is the IP address of other BMLS.
Trust user ID is “replication” and its password is “IBM4axaReplic@tion”.
 
Click OK.
You should get a message saying “Block storage replication profile with peer management location xx.xxx.xxx.xxx has been successfully created.”

Do the same on the other BMLS.

Once done on both BMLS, click on the “Validate” button and check the job queue to be sure they all complete successfully.
If everything’s successful, then click on the “Start” button on block storage replication page. The “Storage controller connection state” should be “connected”, even if “Overall Replication State” is “unconfigured”. This only means that the 2 BMLS are connected and ready for replication but there’s no replicated volume yet.

##### 3.12.3	Change the replication speed
When you’re on the Block storage replication page, copy the URL to get the profile ID: https://<BMLS_IP>/systemconsole/system/dr/#<Profile_ID>
https://10.99.130.41/systemconsole/system/dr/#aa5d2da7-9f28-4d9d-8719-27f1934a2bd6
 

From the 3M Tooling main menu, select Tools / Script Launcher:
 
In the script database, look for the Update the Replication Profile for bandwidth and copy rate script:
 
Click on the “Execute” button on the right.
 
Select the BMLS and provide the replication profile ID you found in the URL. Then click on the “Execute” button.

A new screen shows the job progress. 
Once job completed successfully, (you should see a message saying “updatereplicationprofile execution done !”), go back to the BMLS and request the following URL: https://<BMLS_IP>/admin/resources/dr_infos/<Profile_ID>, e.g. https://10.99.130.41/admin/resources/dr_infos/aa5d2da7-9f28-4d9d-8719-27f1934a2bd6
Look for the attributes “storage_copy_bandwidth” and “background_copy_rate” that must be valued respectively “10000” and “80”.

##### 3.12.4	Test storage replication
In order to test block storage replication, create volumes and enable replication between them. To do so, on each BMLS, go to “Cloud -> Volumes” and click on the “Create New” button. Put a name for the volume, select “Block” or “Block VMFS” as type and set the size to 10 GB (the 2 volumes must be identical in size). Wait for the volumes to be marked as “Available” on both BMLS.
Then, back to “System -> Block Storage Replication”, select the profile and click on the “Add Volumes” button. Choose your local volume and then the remote volume. Keep replication type as “synchronous” and click “Add”.
Go to the other BMLS, to “System -> Block Storage Replication”, select the profile and you should see the volume replication. Click on the “Accept” button so that replication can start.
After several minutes, the replication status for this volume should be marked as “Pending” then to “Available”. The “Overall Replication State” should be also “Available”.
Once test is successful, delete the volume from the replication and delete the volumes on both BMLS.

#### 3.13	External Application Access Settings

##### 3.13.1	Creating accesses
Go to « System -> System Settings » and expand the « External Application Access Settings » section.
The following accesses need to be created:
Name	Access scope	Virtual Manager Privilege Set	Grant CN access	Grant Storage Access
ICO user for backup	Everything	Default	yes	yes
AXA Flexera	Everything	Read Only	no	no
IBM SP4VE Backup User	Everything	IBM Spectrum Protect Data Mover - Backup Role	no	no
IBM SP4VE Recovery User	Everything	IBM Spectrum Protect Data Mover - Backup and Recovery Role	no	no
AXA SP4VE Recovery User	Everything	IBM Spectrum Protect Data Mover - Backup and Recovery Role	no	no

Once done, connect to vCenter using the credentials for “ICO user for backup” and check that all the compute nodes are shown with their IPv4 address, not and IPv6. If a compute node is shown in vCenter with its IPv6, go to the MKS Console IP Group on the BMLS, detach the compute node, wait for the job to complete, then attach the compute node to its IPv4 address, check the job status. If, once job completed successfully, the compute node is still seen with its IPv6 in vCenter, you’ll need to get this fixed by SWAT team or IBM Support.

##### 3.13.2	Additional steps for Flexera
Once the credentials for “AXA Flexera” are generated:

1.	Create a Service Request for IBM network team to allow communication from Flexera to the new BMLS vCenter. The communication must be allowed for AXA Flexera servers to access the vCenter IPv4 using ICMP and TCP on port 443 (HTTPS)

2.	Contact AXA firewall team (through distribution list) and get the communication allowed from Flexera to new vCenter.

=================================================================