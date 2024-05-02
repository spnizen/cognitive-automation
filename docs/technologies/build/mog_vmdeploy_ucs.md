---
template: overrides/main.html
title: Getting started
---

#### 6.1 VMs Requirement
Make sure get the following information before deploying any vm

1. VM Hostname
2. IP Addresss
3. Subnetmask
4. Gateway
5. VLAN ID
6. ESX Cluster Name
7. Data Store Name
8. OS-Windows/Linux - Source Path
9. vCPU
10. RAM
11. HDD
12. File Systems Information (For Linux)

:bulb: ***DNS is common for all regions. DNS server IPs: 10.227.89.134 and 10.241.183.130***

**Example for Windows VM**

> Host Name: SELOPRVETLSV01 (Windows 2012)
>
>IP Address: 10.227.88.33
>
>Gateway: 10.227.88.46
>
>subnetmask :255.255.255.240
>
>DNS server IPs: 10.227.89.134 and 10.241.183.130 
>
>VLAN:Mgmt int (2092) and Data int (1093)
>
>RAM:4GB
>
>vCPU :4
>
>HDD : C drive-100GB and D drive 100GB (Thin Provisioning)
>
>OS: windows 2012
>
>Datastore: SE-LO-VMW-97

**Example for Linux VM**

>Host Name :SELOPRVETLDB01 (Linux 7.7)
>
IP Address: 10.227.88.35
>
Gateway: 10.227.88.46
>
subnetmask :255.255.255.240
>
DNS: 10.227.89.134 and 10.241.183.130 
>
VLAN:Mgmt int (2092) and Data int (1093)
>
RAM:6GB
>
vCPU:4
>
OS: Linux 7.7
>
Datastore: SE-LO-VMW-97
>
HDD : 2 disks each 100GB
>
Partitioning with LVM
>
1st disk
>
>    /boot ->2 GB
>
>    /     ->10 GB
>
>    /tmp  ->10 GB  
>
>    /var  ->20 GB
>
>    /opt  ->10 GB
>
2nd disk

>    /data01 ->20 GB
>
>    others (db2 not defined yet)

#### 6.2 Login information for UCS Infra vcenter

Login to UCS Infra Vcenter -https://seclpravmwsrv01.cloudfabric.intrsre/ui

![UCS vCenter](../assets/images/UCSVcenter.png)

#### 6.3 Windows VM Deployment

Go to CLUSTER-SE-> and right click on respective Esxhost: SELOPRSHYPESX04
 
![UCS vCenter1](../assets/images/UCSVcenter1.png)

Click on New Virtual Machine

![UCS vCenter2](../assets/images/UCSVcenter2.png) 

Click on Next

![UCS vCenter3](../assets/images/UCSVcenter3.png) 

Provide the Host name : SELOPRETLSV01

Select a location for the virtual Machine as mentioned above WINDOWS under INFRA for windows servers

LINUX for Linux servers unless until we have any specific folder names.

![UCS vCenter4](../assets/images/UCSVcenter4.png)
 
Select the ESX host name  and Click on Next
 
![UCS vCenter5](../assets/images/UCSVcenter5.png)

Select the data store – SE-LO-VMW-97 Click on Next

![UCS vCenter6](../assets/images/UCSVcenter6.png)
 
Let it ESXi 6.5 and later and Click on Next 

![UCS vCenter7](../assets/images/UCSVcenter7.png)
 
Select the Guest OS -Windows and Guest OS family version -Windows 2012  and click on Next

![UCS vCenter8](../assets/images/UCSVcenter8.png)

Provide the vCPU,RAM,HDD ,Network adapter, VLAN..etc 

![UCS vCenter9](../assets/images/UCSVcenter9.png)

Select the vlan and Adapter type

Add New Device for 2nd Hard disk…

![UCS vCenter10](../assets/images/UCSVcenter10.png)

Click on NEXT

![UCS vCenter11](../assets/images/UCSVcenter11.png)

Select the ISO image for windows 2012 and Click on OK to continue..

![UCS vCenter12](../assets/images/UCSVcenter12.png)

Select the  Connect at Power on after select the image file through browse option for mounting it as CD/DVD Media and Click on Next.

![UCS vCenter13](../assets/images/UCSVcenter13.png)

![UCS vCenter14](../assets/images/UCSVcenter14.png)

Verify all parameters which you have provided and click on Finish to deploy  VM

![UCS vCenter16](../assets/images/UCSVcenter15.png)

Select theVM which got deployed and power on it and Launch the console.

![Win Server2012 r2](../assets/images/WinServer2012r2.png)
 
Click on next

![Window Server1](../assets/images/WinServer1.png)

Click on install

![Window Server2](../assets/images/WinServer2.png)
 
Select the server with GUI

Click on next

![Window Server3](../assets/images/WinServer3.png)

Accept the license and click on next

![Accept License](../assets/images/AcceptLicense.png)
 
Select the custom installation

![Window Server4](../assets/images/WinServer4.png)

Click on next 

![Window Server5](../assets/images/WinServer5.png)
 
Provide the Admin Password – XXXXXXXX

![Settings](../assets/images/Settings.png)

Click on Finish

![Administartor Login](../assets/images/AdministartorLogin.png)

![UCS Vcenter17](../assets/images/UCSVcenter17.png)

Right Click on VM and select the Guest OS and install vmware tools


 
Click on mount  and go to console of the vm 



 


 
Click on Next
 
Select Typical and  click on next 

 
Click on Install
In the net screen 
Click on finish the setup and reboot
 


Click on Yes











4.Post Windows VM Deployment Configuration


 

Go to Windows Firewall with Advanced Security

 


 
Make it off the firewall state for domain profile, private and Public profile.
 
Provide the IPv4 required details as mentioned above .

 
Enable RDP connection from system properies..
Note: Uncheck the Allow connections only from computers running Remote Desktop with Network level Authentication.
Joining in to Domain













 

Click on OK.. It will ask for the Domain user ID /Password  after joined in to the domain successfully then reboot the server and test login with with AD User id/password.

 

Add cloud fabric\ domain users to login to server with AD/ID













Adding 2nd Nic and 2nd hard disk

 
Right Click on VM  select the Edit settings  click on Add New Device
Select the Adapter type VMXNET3 and VLAN for  2nd NIC
Select the Hard Disk 2 as 100GB & select the Thin provisioning 
2nd Nic IPV4 configuration-1093 Data vlan  
 
Provide the required Network details and click on ok
To Verify the 2nd Hard disk
Go Disk management and Initialize the newly added disk and format it and assign the Drive Letter

 















5.LINUX VM Deployment

Right Click on ESX Host and click on New virtual Machine 
 
Click on Next
 

Provide the virtual Machine name and folder
 
Select the ESX host and click on NEXT
 
Select the Datastore and click on Next

 
Select the compatibility with ESXi6.5 and later


 
Select the Guest OS family as Linux and Guest OS version as Redhat Enterprise Linux 7(64bit)
 
Select the CPU,RAM,HDDs ,Network Adapters , mount the OS image to CD/DVD Media through browse option where the image is located in folders..
 
 
Click on Finish after verification of all parameters entered correctly


 

Power on the VM and Launch the console.

 
 


 
Click on Installation Destination
 
Select the “sda” disk for the partitions creation
 
Select the  first Disk sda and select the “I will configure portioning” and click on Done at the top of the screen left side


 
Click on Add Mount point .. mention in MiB/GiB

 
 
Click on + symbol left side down and select the mount point  and give the desired capacity
Select the standard for boot and rest of the partitions are LVM and xfs file systems.


 


 
Click on Accept Changes

 
Click on Network and Host Name

 
Provide the host name -SELOPRVETLDB01 and click on Configure

 
Provide required Network Details  Ipv4 and click on save 

 

Click on Done left top corner
 
Click on Begin Installation
 
Select the ROOT password and provide the password
 


 
Click on Finish Configuration

 

Click on reboot












6.Post Linux VM Deployment Configuration

 
For Network Configuration use nmtui command
#Nmtui  (Network Management Text User Interface)
It will open the below screen 

 
Select the “ Edit a connection”
 
Select the options as per above screen
Require IPV4 addressing for this connection
Automatically Connect
Available to all users

 

Activate a Connection and click on ok

 
Restart the NetworkManager service
#service NetworkManager restart
# reboot 

 

AD Integration
To get the yum repolist first we have to create the “/etc/yum.repos.d/repoweb2.repo” file using vi editor and copy the entire content which is below between dotted lines.
vi /etc/yum.repos.d/repoweb2.repo

---------------------------------------------------------------------------------------------------
 [repoweb2]
name=IBM RHEL7 repo from Redhat
enabled=1
gpgcheck=0
baseurl=http://10.227.89.148:8530/repos/repo7/rhel-7-server-rpms/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
[reposuppweb2]
name=IBM RHEL7 supplementary repo from redhat
gpgcheck=0
enabled=1
baseurl=http://10.227.89.148:8530/repos/repo7/rhel-7-server-supplementary-rpms/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
[repooptioweb2]
name=IBM RHEL7 optional repo from redhat
gpgcheck=0
enabled=1
baseurl=http://10.227.89.148:8530/repos/repo7/rhel-7-server-optional-rpms/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
[repoextrasweb2]
name=IBM RHEL7 optional repo from redhat
gpgcheck=0
enabled=1
baseurl=http://10.227.89.148:8530/repos/repo7/rhel-7-server-extras-rpms/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
--------------------------------------------------------------------------------------------
=============================================
1. Install following packages through yum:
yum -y install realmd oddjob oddjob-mkhomedir sssd adcli krb5-workstation samba-common-tools
2. Discover the Active Directory domain as:
realm discover cloudfabric.intrsre
3. Once the AD domain is successfully discovered, join the system to AD domain as:
realm join -U nirpaul1@cloudfabric.intrsre cloudfabric.intrsre
4. Now check whether user information can be retrieved from AD and the AD user is able to login through ssh. By default you will need to use the users FQDN to login. This is due to the use_fully_qualified_names setting is set to True by default in /etc/sssd/sssd.conf.

CD /etc /sssd
Vi sssd.conf
id dhanalakshmi@cloudfabric.intrsre
5. Restrict to Site DC or Specific DC - Edit vi  configuration file, add the following lines under the [domain] section:
Use the ad_server and, optionally, ad_server_backup options for Active Directory servers. Use the ad_site option for Active Directory sites. For more details on these options, see the sssd-ad(5) man page.
ad_server = SECLPRVSYSADP01.cloudfabric.intrsre
ad_server_backup = SELOPRVSYSADP01.cloudfabric.intrsre
6. Permission   need to skip
realm deny --all
realm permit -g CLOUDFABRIC\\LIN-ADM CLOUDFABRIC\\xxxxxxx
7. Restart SSSD:
systemctl restart sssd
8. Adding LIN-ADM to sudoers
sed -i '/Allow root to run any commands anywhere/a %CLOUDFABRIC\\\\LIN-ADM ALL=(ALL) ALL' /etc/sudoers

 

 
Test login with AD/ID -dhanalakshmi@cloudfabric

 

Creating LVM Partitions on 2nd disk /dev/sdb
#fidsk -l
 

# fdisk  /dev/sdb
 [root@SELOPRVETLDB01 ~]# fdisk /dev/sdb
Welcome to fdisk (util-linux 2.23.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.
Device does not contain a recognized partition table
Building a new DOS disklabel with disk identifier 0xf092c3cf.
Command (m for help): n
Partition type:
   p   primary (0 primary, 0 extended, 4 free)
   e   extended
Select (default p): p
Partition number (1-4, default 1): 
First sector (2048-209715199, default 2048):
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-209715199, default 209715199):
Using default value 209715199
Partition 1 of type Linux and of size 100 GiB is set

Command (m for help): t
Selected partition 1
Hex code (type L to list all codes): L

 
Hex code (type L to list all codes): 8e
Changed type of partition 'Linux' to 'Linux LVM'

Command (m for help):w

[root@SELOPRVETLDB01 ~]# pvcreate /dev/sdb1
  Physical volume "/dev/sdb1" successfully created.
[root@SELOPRVETLDB01 ~]# vgcreate vg_data /dev/sdb1
  Volume group "vg_data" successfully created
[root@SELOPRVETLDB01 ~]# lvcreate -n lv_data01 -L +20G vg_data
  Logical volume "lv_data01" created.
[root@SELOPRVETLDB01 ~]#

 

File system creation

[root@SELOPRVETLDB01 mapper]# mkfs.xfs /dev/mapper/vg_data-lv_data01
Creating directory
[root@SELOPRVETLDB01 mapper]# mkdir /data01
Mounting the file system
[root@SELOPRVETLDB01 mapper]# mount /dev/mapper/vg_data-lv_data01 /data01
 

 
Now data01 is mounted
To make it persistent ,we have to add the file system entry in to /etc/fstab



 
Vi /etc/fstab 
Add the below entry 
/dev/mapper/vg_data-lv_data01   /data01         xfs       defaults        0 0
After adding the entry in to /etc/fstab
Cat /etc/fstab
 
