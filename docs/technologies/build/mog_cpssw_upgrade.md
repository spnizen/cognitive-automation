---
template: overrides/main.html
title: Getting started
---

#### 2.1	Introduction

This document is providing instructions to **upgrade CPS SW** from **version 2.3.2.0 to 2.3.3.3.**

Upgrading CPS SW from v2.3.2.0 to 2.3.3.3 is not possible through the regular maintenance process because these 2 versions do not run on the same OS: CPS SW 2.3.2.0 only runs on RHEL 6.x while CPS SW only runs on RHEL 7. Therefore, the operation is a lot more complex and time consuming.
But CPS SW 2.3.3.3 is a major step for several reasons.

•	It is now running on RHEL 7, which will solve some security and support issues(RHEL6 is very old).
•	It brings support for VM Mobility which is a major feature for the Enterprise Private IaaS that is waited for many years.

#### 2.2	Prerequisites

•	Have administrator access to the PureApplication Software and to the BMLS that is hosting it.

•	Have access to the Meta Model Manager tool (3M).

#### 2.3	Assumptions and Acronyms used in the documentation

This document is assuming that the CPS SW environment is healthy.

Please get familiar with the Acronyms used in the document

| **CPS** | **Cloud Pak system** |
  |:-----------------------|:-----------------------|
  | **CPSSW**| **Cloud Pak system Software (Also known as PAS)**|
  | **Legacy CPSSW**| **Cloud Pak system Software on 2320** |

#### 2.4	Steps involved in the Upgrade of CPSSW 2320 to CPSSW233.

Follow the steps one after another for the upgrade process:

1.	Create a new instance of CPS SW 2.3.3.3 on a new RHEL 7 VM
2.	Take a full backup of the existing CPS SW 2.3.2.0
3.	Take an offline backup of the Db2 database of CPS SW 2.3.2.0
4.	Restore the back up into the new CPS SW 2.3.3.3.
5.	Configure the new CPS SW 2.3.3.3
6.	Validate the new CPS SW
7.	Delete the existing CPSSW 2.3.2.0

#### 2.5	Setup a new CPS SW 2.3.3.3

We are going to deploy the CPSSW 2333 using the OVA image.
This new CPSSW 2333 VM will temporarily use a different IP address than the one used by the Legacy CPSSW 2320. Get this temporary IP address and its gateway ready (if any question, ask Eric Lesport).

Before you begin, create a datastore of size 2.3 TB and assign it to the same VMCG as Legacy CPSSW2320. 
Datastore name must be:
•	On internal storage: “<CPSSW Hostname>_VMPAS_0002”
•	On external storage: “<CPSSW Hostname>_VMPAS_EXT_02”
Note that “<CPSSW Hostname>_VMPAS_0001” or “<CPSSW Hostname>_VMPAS_EXT_01” should already exist and be used by the legacy CPSSW.

:bulb: ***Leave the “associate system” field blank on the CPS volumes page***

You need to login to the Jump server which is the closest to the BMLS on which you need to create a PAS, e.g. if you need to create a PAS on a BMLS in Balsberg, you should connect to the Jump Server in Balsberg. If you face some issues doing so, try the other Jump server of the given region, in the other datacenter (Paulstrasse in our example) but do not change for another region.
The same rule applies to the RTEM server you’ll work with. It should be the RTEM located in the same datacenter or, in worst case, in the other datacenter of the same region.
You can connect to the “local” Jump Server directly from CyberArk or by running a new Remote Desktop connection from your usual Jump Server (in any region).

|    <br>Region    |    <br>Location    |    <br>Jump   Server    |    <br>RTEM    |
|---|---|---|---|
|    <br>SE    |    <br>Clichy    |    <br>10.227.94.23    |    <br>10.227.89.135    |
|    <br>SE    |    <br>Lognes    |    <br>10.227.94.138<br>10.227.94.150    |    <br>10.227.89.136    |
|    <br>NE    |    <br>Koln    |    <br>10.241.180.33    |    <br>10.241.183.137    |
|    <br>NE    |    <br>Leverkusen    |    <br>10.241.181.33    |    <br>10.241.183.138    |
|    <br>NA    |    <br>Suwanee    |    <br>10.168.125.33    |    <br>10.68.124.135    |
|    <br>NA    |    <br>Atlanta    |    <br>10.168.126.33    |    <br>10.68.124.136    |
|    <br>ME    |    <br>Paulstrasse    |    <br>10.99.2.33    |    <br>10.99.5.135    |
|    <br>ME    |    <br>Balsberg    |    <br>10.99.3.33    |    <br>10.99.5.136    |
|    <br>AS    |    <br>Singtel    |    <br>10.99.129.33    |    <br>10.99.132.135    |
|    <br>AS    |    <br>Keppel    |    <br>10.99.130.33    |    <br>10.99.132.136    |



Login using Remote Desktop Connection to the local Jump Server form CyberArk or from your usual Jump Server.

Once you logged into the local Jump Server, mount the “share” directory from RTEM server on the local regional server. You can do this in 2 different ways:

•	Option 1: you can open the “Run” window and open "\\LOCALRTEMIP\share”

![Windows Command Prompt](../assets/images/Run1.png)

•	Option 2: You can open a Windows Explorer, click on “Map network drive” in the “Computer” menu. Enter "\\LOCALRTEMIP\share” as Folder

![Map Network Drive](../assets/images/MapNetworkDrive.png)

The PAS OVA image is under the below directory.
\\<RTEM_IP>\share\receive\secl\all\productinstallpackages\software\pas\install\PAS_InstallPAS_233\PAS233_PRELOADED1.ova

Except for SECL : 
\\10.227.89.135\share\send\all\productinstallpackages\software\pas\install\PAS_Install\PAS_233\PAS233_PRELOADED1.ova

#### 2.6 Create the new VM using vSphere Power CLI on RTEM

Login to RTEM and run the following commands

Refer to the table RTEM_table to get the RTEM IP. 
For example, login to 10.227.89.135 using your AD ID (e.g. myname@cloudfabric.intrsre) and then

1.Run “pwsh”

![pwsh](../assets/images/pwsh.png)

2.Then

Set-PowerCLIConfiguration -ProxyPolicy NoProxy -Scope User -InvalidCertificateAction Ignore -DefaultVIServerMode Single

It will prompt to confirm

Press “Y”

![prompt to confirm](../assets/images/promptToConfirm.png)

3.Now connect to the vCenter with the following command.

Connect-VIServer -Server 'vcenter.fullfqdn' -Protocol https -User 'username' -Password 'XXXXXXXXXXX' >> Connect the the Vcenter

For example:

Connect-VIServer -Server 'SELOGRVGN3VMW03.cloudfabric.infratest' -Protocol https -User 'app_6ce279d5@vsphere.local' -Password 'XXXXXX’

![Connect VIServer](../assets/images/ConnectViServer.png)

**Note** : Open Command prompt from the Windows RDP and run nslookup command to get the FQDN of the vCenter.

4.Now gather all the information before running the below command.

   •	ESXI_where_should_be_the_vm: IP address of the compute node where the CPSSW 2333 VM will be created.

   •	Source: should be the path where the OVA file is present

   •	Datastore name: you can find this from CPS Cloud -> Volumes. Look for the Datastore name

   •	Final_vm_name: hostname of the CPSSW. The name of the VM should be same has Legacy CPSSW 2320 with ‘-1’. 
   
For example, if the hostname of the legacy CPSSW2320 is SECLPRVGN3PAS15 create VM as SECLPRVGN3PAS15-1

![Legacy PAS VM](../assets/images/LegacyPAS.png)

Get-VMHost 'ESXI_where_should_be_the_vm' | Import-vApp -Source ' /share/.../PAS_233/PAS233_PRELOADED1.ova' -Datastore 'datastore_name'

-Name 'final_vm_name' -DiskStorageFormat thin -Force

For example:
Get-VMHost '10.227.56.8' | Import-vApp -Source '/share/receive/secl/all/productinstallpackages/software/pas/install/PAS_InstallPAS_233/

PAS233_PRELOADED1.ova ' -Datastore 'p_147d25a7-137a-4721-b91d-ca3543d0a59c' -Name ' SECLPRVGN3PAS15-1' -DiskStorageFormat  thin -Force

It would approximately take 2 hours to complete and after completing you will output as shown in the screenshot below.

![Completion Output](../assets/images/CompletionOutput.png)

5.Once the VM is created in vCenter make sure you disconnect

Disconnect-VIServer -Server 'SELOGRVGN3VMW03.cloudfabric.infratest'

![Disconnect VIServer](../assets/images/Disconnect VIserver.png)

6.Now go to vCenter

Edit the VM settings you created, click the “New device…” button at the bottom of the Virtual Hardware tab and add a Network card.

![VM Edit Setting](../assets/images/EditSetting.png)

On the “New Network” card, select the drop list and choose “show more networks”.

Then select the right VLAN: you must choose the VLAN ID on which the PAS will be (usually 2106, see information provided by project

management or, by default, table in chapter §1.1. Click OK.

Note that, on the 2 following screenshots, VLAN 2006 is selected instead of VLAN 2106. This is because the screenshot was taken in 

Infratest, using different VLANs.

![Select Network](../assets/images/SelectNetwork.png)

Ensure that the ‘Connect at Power On’ option is checked, then OK.

![Select Network](../assets/images/ConnectAtPowerOn.png)

7.You also need to change some CPU settings on the PAS VM.

Expand the “CPU” section in Virtual Hardware and change the following settings:
•	CPU Reservation: 4000 MHz
•	CPU Limit: Unlimited MHz
•	CPU Shares: Custom 256000

![Select Network](../assets/images/ChangeCPSsettings.png)

Click OK to validate.

8.Now find the datastore of the CPSSW VM and expand the OS disk to Thick provision

Select the CPSSW 2330 VM and select Datastores

![Datastore to expand](../assets/images/DatastoreToExpand.png)

Select the datastore and Click Browse files now select the CPSSW2333 VM folder and select the first disk with the HOSTNAME-1.vmdk

For example below MEBAPPVGN3PAS05-1.vmdk

![Browse Datastore1](../assets/images/BrowseFile1.png)

![Browse Datastore2](../assets/images/BrowseFile2.png)

Now look at the task and once its 100% your VM is good to be powered on.

![Browse Datastore3](../assets/images/100Percent.png)

9.Configure the VM’s network

Use VMWare remote console to login the VM. Use the “root” username & Password.

From the VM command line, run the following command to configure the network card:

nmcli con add con-name ens192 type ethernet ipv4.method manual ifname ens192 ipv4.address CPSSW_temp_IP ipv4.gateway CPSSW_temp_Gateway

For example:

nmcli con add con-name ens192 type ethernet ipv4.method manual \

ifname ens192 ipv4.address 10.99.6.50/23 ipv4.gateway 10.99.7.254

#### 2.7 Post Deployment steps

Before you begin, please ensure all the psm services are online. Run “psm info all” 

1)	SSH to the CPSSW 2333 and run the below command
Yum update

2)	Configure Cloud Management IP, DNS.

**Note.** that the GUI has changed with CPS SW 2.3.3.3, compared to v2.3.2.0. Especially, the single menu has moved to the top left (the 3 horizontal lines in the corner) and some sections has moved within the menu. For example, the “job queue” has moved from the “System” menu (in 2.3.2.0 and earlier) to a new “Problem Determination” menu (in 2.3.3.3).

![Menu Problem Determination](../assets/images/ProblemDetermination.png)

Go to “System -> System Settings”. 

![Menu System Settings](../assets/images/SystemSettings.png)

![Menu System Settings1](../assets/images/SystemSettings1.png)


On the Cloud Management IP section, enter the PAS IP Address; PAS name, set cloudfabric.intrsre as the domain name, netmask and Default

Gateway. Leave the default value for the VLANS list.

All this information must be the same as on the legacy CPSSW. Do not use the temporary IP address that has been given to this CPSSW

2333 VM. It’s normal to have a temporary inconsistency between CPS SW IP and VM IP. This will be fixed in a next step of the procedure.

Be careful, once the values are entered and confirmed you cannot change it. Any change would require recreating the PAS VM.

![DNS1](../assets/images/DNS1.png)

Confirm the modification. Notice that you cannot change these values once saved!

![Cloud IP Mgmt](../assets/images/CloudIPMgmt.png)

The save request will trigger an internal Job. The information message contains a direct link to the Job Queue where the job completion

may be monitored

![JOb Queue](../assets/images/JobQueue.png)

Simply wait for the job status to reach ‘Success’, then go back to the Cloud Management IP section. There, add the management VLAN in the VLANS list

![VLAN](../assets/images/VLAN.png)

3)	On the System Settings page, expand the “Domain Name Service (DNS)” section.

![Domain Name Service](../assets/images/DomainNameService.png)

Enter the DNS servers IP address and hit save (see “§1.1 Configuration parameters you need as input”). Be careful as the DNS servers IP depends on the region.

![DNS2](../assets/images/DNS2.png)

In case of OpenPaaS, you also need to add, in 3rd and 4th positions, the following DNS:
•	10.99.124.6
•	10.99.124.7

In the ‘Lookup host name or IP address’ field, put both the PAS name, and IP address to check direct lookup and reverse DNS lookup

![DNS3](../assets/images/DNS3.png)

4)	Manually configure LDAP from Cloud Pak menu  Security and Access  System Security
Replicate the below configuration from CPSSW 2320 to CPSSW 2333. You can also us the 3M tool (Tools -> Script Launcher -> “Configure PAS Network (IP Groups, Cloud Groups, Environment Profile) as Admin user”) put it requires to temporarily add an entry in its Environment database with the temp IP address of the CPSSW VM.
Make sur to accept the LDAPS certificate and Ensure you are able to authenticate using your LDAP account.

![LDAP](../assets/images/LDAP.png)

5)	Backup LDAP files

https://ibm.box.com/s/873ifds2g13ailo2p1gpej8nudoqhuix to execute this step


SSH to CPS SW 2333  and SCP the file upgrade.tar upgrade_scripts_3.2.0.tgz

•	Untar the file using tar -xvzf upgrade_scripts_3.2.0.tgz
•	cd upgrade_scripts/
•	./upgrade.sh

From the below menu please run option 3)

![Script Menu Option](../assets/images/ScriptMenuOption.png)

#### 2.8    Procedure 
Cloud Pak System Software/PAS Version 2.3.2.0 is supported only on RHEL 6.x (6.6) and version Cloud Pak System Software/PAS 2.3.3.3 needs 7.7. In other words, version 2.3.2.0 does not run on RHEL 7.7 and version 2.3.3.3 does not work with RHEL 6.x. Given this OS dependency, a direct software upgrade from 2.3.2.0 to 2.3.3.3 is not possible. So, the upgrade from 2.3.2.0 to 2.3.3.3 is actually a 'migration'.

Since the Cloud Pak System Software/PAS installation is always on a VM, the guidance to customers will be to bring up a new VM running the requisite RHEL 7.7 level and then do the migration. This was discussed and agreed to in the workshop. There will be no use case of upgrading the base OS of the VM itself. 
During the migration from 2.3.2.0 to 2.3.3.3, there will be the existing RHEL 6.x VM running 2.3.2.0 and the new RHEL 7.x VM running 2.3.3.3. After a successful migration, the old RHEL 6.x VM can be shut down or deleted. 
The full system backup and restore procedure will be used to move Cloud Pak System data from the old to the new VM.

Cloud Pak System offers following categories of backups:
•	System backup
•	Component backup
•	Security (users/groups) backup

System backup would be a super set and includes rest of them. More details on setting up the backup locations/ schedules can be found here at the KC section: https://www.ibm.com/support/knowledgecenter/SSL5ES_2.3.3.0/intel/iwd/brc_overview.html

It’s important that you understand the backup process. Please read the below carefully before you proceed.

The backup process consists of the following jobs:

**Complete System Information Backup 1 of 3 (Referred as Phase 1 in zero.config file)**
This job initiates the backup process. This job remains in the Running state until the background process is initialized, then the second of the three jobs is queued to start.
**Complete System Information Backup 2 of 3 (Referred as Phase 2 in zero.config file)**
This job prepares the data for backup. New tasks are blocked or placed in a pending state while this job runs to ensure a consistent copy of management databases and other artifacts. After all target data is defined, the third job starts.
Note: There is a delay between the completion of the second job and the start of the third job. This behaviour is normal.
**Complete System Information Backup 3 of 3 (Referred as Phase 3 in zero.config file)**
This job compresses, encrypts, and transfers the target data to the specified remote backup system.
The system configuration data on the Platform System Manager and selected component data are included in the system backup. Backup images that are stored on an external backup storage server are encrypted to protect sensitive data, allowing only trusted parties to view the backup image. You can decrypt the backup image only by using the private key, and only on the Cloud Pak System Software for x86 hardware.
When you configure your settings for email notification, the system sends an email that provides status information about complete or incomplete backup jobs.


#### 2.9    Create a backup location on 2.3.2.0
Before you begin extract the system health check report of CPSSW 2320.

Configure the backup of CPSSW 2320 to CPSSW 233 which you have setup on Chapter 5

Navigate to System Backup and Restore. Click on “Set up”

![Backup Config](../assets/images/BackupConfig.png)

Click on “Create New”.

**•	Name:** “Default” Don’t change anything
**•	Hostname:** IP address of the new CPSSW 2333 Environment you have setup in the Chapter 5
**•	Path:** /cps-sw-data/pas_backup
**•	Port:** 22
**•	Username:** root
**•	Password:** XXXXXXXXXX (This is the default factory password. If you have changed it, please enter the actual root password).
**•	Encryption:** Select the checkbox

Finally click “Save”.

![Backup Config Save](../assets/images/BackupConfigSave.png)

Select **“Generate New private key and Certificate”** and type the passphrase twice for encrypting the backup. 

Set the passphrase as **"XXXXXXXXXXX"**

![Backup Config1](../assets/images/BackupConfig1.png)

Now that you have created a location for backup. You have to create a backup configuration

Go System Backup and Restore and select “Create New” on the Backup Configurations

![Backup Config2](../assets/images/BackupConfig2.png)

**•	Name:** PAS2320

**•	Location:** Select the location from the Dropdown (Select the location you have created in the previous setup. You should have only 
one Location here)

**•	Type:** System backup

#### 2.10   Take a full backup of CPS SW 2320 

Navigate to System Backup and Restore 

Click on the “Backup Now” button.

![FUll Backup](../assets/images/FullBackup.png)

Full backup takes approximately 2 to 4 hours. After the completion of backup proceed to next step.

#### 2.11	 Disable Phase 3

Please download the scripts from https://ibm.box.com/s/873ifds2g13ailo2p1gpej8nudoqhuix to execute this step.

SSH to legacy CPS SW 2320 and SCP the file upgrade.tar upgrade_scripts_3.2.0.tgz

•	Untar the file using tar -xvzf upgrade_scripts_3.2.0.tgz
•	cd upgrade_scripts/
•	./upgrade.sh

You will be displayed with the Menu and list of options and Select 1) to disable phase3

[root@selotsvgn3pas03 upgrade_scripts]# ./upgrade.sh

![Scrip Menu Option1](../assets/images/ScriptMenuOption1.png)

Once this is done, rerun the backup following the instructions from 6.2 except that this time it will not be a full backup but a modified backup.

#### 2.12	 Offline DB2 backup

Steps to take offline backups: 
Run the below commands one after another

1)	mkdir -p /pureapp-sw-data/mkm/offline_backup/databases 

2)	chmod 777 -R /pureapp-sw-data/mkm/offline_backup/databases 

3)	su - db2inst 

4)	db2 quiesce instance db2inst restricted access immediate force connections 

5)	db2 deactivate db RAINMAKE 

6)	db2 backup db RAINMAKE to /pureapp-sw-data/mkm/offline_backup/databases

7)	db2 activate db RAINMAKE 

8)	db2 deactivate db STORHOUS 

9)	db2 backup db STORHOUS to /pureapp-sw-data/mkm/offline_backup/databases

10)	db2 activate db STORHOUS 

11)	db2 deactivate db IPASDB 

12)	db2 backup db IPASDB to /pureapp-sw-data/mkm/offline_backup/databases

13)	db2 activate db IPASDB 

14)	db2 unquiesce instance db2inst

Now cd /pureapp-sw-data/mkm/offline_backup/databases

Run this for loop “for i in `pwd`;do db2ckbkp -h $i;done”

Validate all three DB backups by using the above for loop and ensure you see Image Verification Complete – successful at the end of each line

![Media Header Reach](../assets/images/MediaHeaderReach.png)

![Media Header Reach1](../assets/images/MediaHeaderReach1.png)


Perform this for all the three backup files and note that Backup Mode now seen as Offline. 

**Note:** 
Since DBs were deactivated for taking offline backup you may find the services in offline state. Wait for all the services to come
online before proceeding with next steps. 

Traverse to the /pureapp-sw-data/mkm/offline_backup/databases folder and compress each backup file separately as follows: 

1)	cd /pureapp-sw-data/mkm/offline_backup/databases

2)	gzip IPASDB.0.db2inst.DBPART000.20201201081109.001 

3)	gzip RAINMAKE.0.db2inst.DBPART000.20201201081056.001 

4)	gzip STORHOUS.0.db2inst.DBPART000.20201201081031.001 


Copy the database configuration files from timestamp folder created by step 6.2 (Take a full backup of CPS SW 2320), for example /data/

hdd-files/backup/external/1607704844141/databases/ to /pureapp-sw-data/mkm/offline_backup/databases

**Note: Every time when you run the backup you will see a new folder created under the directory /data/hdd-files/backup/external/.** 

cd /pureapp-sw-data/mkm/offline_backup/databases

From the backup folder created on 6.3 (Disable phase 3), copy the configuration file. For example 

cp /data/hdd-files/backup/external/1607704844141/databases/*.cfg.gz . 

-bash-4.1# ls -ltr *.cfg.gz 

-rw-r--r-- 1 root root 3368 Dec 11 16:52 db_STORHOUS.cfg.gz 

-rw-r--r-- 1 root root 3362 Dec 11 16:52 db_RAINMAKE.cfg.gz 

-rw-r--r-- 1 root root 3367 Dec 11 16:52 db_IPASDB.cfg.gz

#### 2.13	Modify the Phase2 to disable db2

Using the same scripts as used in 6.3 run the script with option 2
./upgrade.sh

![Modify Phase2](../assets/images/ModifyPhase2.png)

Check the status of Service 7 using the “psm info all” command on the CPS SW 2320 VM. Wait for the Service7 to be online. 

When we will run the System backup this time, everything should get transferred to the configured backup server. Before we trigger this 

action, we need to embed the manually taken offline DB backup files into the timestamp folder (for example /data/hdd-files/backup/

external/1607704844141).

**Note:The 3 jobs are triggered back-to-back and first 2 jobs approximately take 2-3 minutes; we have only this 2-3 minutes time window** **(by the time 3rd job is triggered) to copy the offline db backup files into the newly created timestamp folder.** 

Do the following steps: 

a.	Have a PuTTY session opened to PAS 2320 environment and traverse to /data/hdd-files/backup/external/.

b.	Trigger a System backup once more on the Cloud Pak System user interface and switch to PuTTY session. 

c.	Issue “ls -ltr” immediately on the PuTTY session and note down the newly created timestamp folder under /data/hdd-files/backup/
external/. 

d.	Run the following command: 

cp -R /pureapp-sw-data/mkm/offline_backup/databases <newly_created_timestamp_folder>

Wait for the phase 3 job to be completed and login to backup server and confirm that the backup file along with DB offline backup files 

now exist on the location configured. 


#### 2.14	Restoring backed up data into CPS SW 2.3.3.3 environment

•	Log in to CPSSW 2333 user interface and traverse to “System -> Backup and Restore” page. 

•	Setup a backup location pointing to the same location where we had taken backup in Chapter 6.1

•	Select the use the same key option on enabling the encryption and test connectivity of location it should succeed. Chapter 6.1

**Note:** Two folders might be present under backup location, one for 2320 and one for 2333 VM. In that scenario you will have to copy all the folders from 2320 to 2333 and rename couple of them as mentioned below. If "use the same key" option is greyed out, then download the cert and key files from <backuplocation>/backupSecurity and upload them using option "upload own key files".

Log in to the backup server and traverse to the <location_home_folder>. For example, /cps-sw-data/pas_backup

![Restoring backedup data](../assets/images/restore.png)

Switch back to the Cloud Pak System user interface and the System -> Backup and Restore page. Refresh the restore section and now it should show the restore location with size of the backup artifact matching with backup taken from CPSSW 2320 environment. 

![Restoring backedup data1](../assets/images/restore1.png)

Select the restore location and click on Restore data button and select System restore; 

![Select Restore Location](../assets/images/SelectRestoreLocation.png)

It prompts for a decryption password; enter the password 'XXXXXXXXXXXX'

Monitor the restore job. Restoration workflow recycles all the services once restoration is complete. 

Do not be surprised if you are not able to access the Cloud Pak System user interface on CPSSW 2333 environment for some time. 

Review all the artifacts deployed on the CPSSW 2320 environment to see if they are still visible on the new 2333 PAS environment.

#### 2.15	Post Configuration steps

Assumptions: We assume that you have validated the CPS2333 environment with CPS 2320 Environment and Shutdown or Power off the Legacy CPS2320 Environment. 

IWD and other sub-systems would be caching the old 2320 PAS PSM management IP in their repositories. Now we would need to transfer the old PAS management IP to this new CPSSW 2333. 

Perform the following steps: 

1.	Shut down the old CPSSW 2320(Legacy) instance from vCenter

2.	Open a PuTTY session to new 2333 PAS VM and traverse to /etc/sysconfig/network-scripts/ 

cd /etc/sysconfig/network-scripts/ 

3.	Edit the ifcfg-ens192 file replace the IPADDR with old CPSSW 2320 IP address: 

![ifcfg-ens192](../assets/images/ifcfg-ens192.png)

4.	Create a ifcfg-ens192:0 file add the following lines; IPADDR here is what you had configured on CPSW 2333 (copy the NETMASK from ifcfg-ens192 file): 

![ifcfg-ens192-0](../assets/images/ifcfg-ens192-0.png)

5.	Save and exit both ifcfg-ens192 and ifcfg-ens192:0 

6.	Now SCP the same script package from https://ibm.box.com/s/fv08fjlalulmecrmlrr58k5kiq680knh https://ibm.box.com/s/873ifds2g13ailo2p1gpej8nudoqhuix to execute this step.

SSH to CPS SW 2330 and SCP the file upgrade_scripts_3.2.0.tgz. Untar and execute as follows:

![Upgrade Script Menu](../assets/images/UpgradeScriptMenu.png)

7.	Now run the option 4) change_backupconfig_2330

8.	Now run option 5) sethostname

This will prompt you to enter the CPS2320 (Legacy) Hostname

**Please enter the hostname of the CPS2320:**

Note: Please are the list of patches to run after Migration CCPS2320 to CPS2333

9.	Now run option 6) restore_security

10.	Reboot is needed 

11.	Now run option 7) disable_vdcs

12.	Now run option 8) white_list

13.	Now run option 9) vm_moblity

14.	Now run Option 10) diskaddon Disk add on is depreceted (Not Present) 

15.	Now run Option 10) cpsuipatch

16.	Now run Option 11)db2patch

17.	Now run Option 12)vm_mobility_RHEL_fix

18.	Now run Option 13)vm_mobility_windows_fix

19.	Now run Option 14)quit

20.	Issue df -h to check the file system utilization statistics. If you find /cps-sw-runtime/ full, check the troubleshooting section
 and apply the resolution provided before proceeding with CPSSW VM reboot.

21.	Now navigate to CloudPak menu -> Security and Access -> Usergroups

Now select BMLS-PureApp-sreDevUsers and select the permission as shown in the oval circle

![BMLS-PureApp-sreDevUsers](../assets/images/BMLS-PureApp-sreDevUsers.png)

22.	Reboot the CPSSW VM using shutdown -r now

23.	Open an SSH session to PSM and run the following tool to fix or refresh the roles or permissions: 

zero ipas.genesis maintenance_upgrade 2.3.3.3 2.3.3.3

1.	Do a data validation using system health check report extracted from Legacy CPSW2320: compare the list of Virtual Appliances, 

Virtual System Instances, Virtual Machines, Virtual System Patterns…

#### 2.16   Validation and checks

Deploy a test pattern.

#### 2.17	Known issues

**Issue 1**:** /cps-sw-runtime/ File System becomes full. 
On some PAS system it was observed that the /cps-sw-runtime/ File System was 100%; Due to which the IWD and Service77 could not get
started and few configurations supposed to be done when the IWD (Service60) comes up first time got skipped due to space issues. 

**Resolution:** 
This issue was caused due to a failed image importing workflow leaving behind residual files under /cps-sw-runtime/data/storage/images/ folder; If you find any big vmdk files - clean them up before restarting the PAS after step 4 (Post restore configurations). 
-bash-4.2# rm -rf /cps-sw-runtime/data/storage/images/<uuid Folder> 

**Issue 2:** It is observed that first backup triggered remains in 'Running' state even after all 3 jobs (phase) are completed 
On some PAS system it was observed that the state of backup schedule remains in 'Running' state even after all the three jobs are completed, blocking the next step. 
Wait for at least 10 minutes if the status does not change to 'Disabled' and then proceed with the following resolution. 

***Resolution:**

1.	Make sure all the three jobs are seen completed on the System -> Job queue. We can also check the job log files under /var/log/purescale/ipas.async/backup.

2.	Delete and recreate the System Backup Configurations with same location selected.

3.	Proceed with the next step. 

**Issue 3 (Deprecated, Resolved by configuring LDAP on CPS 2333): Unable to login as LDAP user after the restore completes**

**Resolution:** 
1.	Get the credentials of admin account from CyberArk.

2.	Remove all the entries from the System security (Users and user groups page)

3.	Ensure you set the CPSSW admin credentials to passw0rd

4.	Reconfigure the LDAP using 3M tool. 

#### 2.18	Update script history

When using the update script under /root/upgrade_scripts, a global logs directory is automatically created.

Each time a menu option is selected for execution, a record is added in the global log file /root/upgrade_scripts/logs/upgrade.log

Sample record:

2021-07-27T08:28:19 (/root/upgrade_scripts/upgrade.sh:165) executing step vm_mobility_RHEL_fix

2021-07-27T08:28:28 (/root/upgrade_scripts/upgrade.sh:173) quitting upgrade script

===================
