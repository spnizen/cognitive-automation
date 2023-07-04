---
template: overrides/main.html
title: Getting started
---

Following are the detailed procedure, step-by-step guide, to build TSM proxy VM.

#### 5.1.Create Computer Objects
Connect to SE Jump server -10.227.94.22.
Make sure DNS entries are created for all TSM proxy servers.
Go to Server Manager -tools-Acitive Directory users and computers.

![AD Users & Computer](../assets/images/ADUserComputer.png)

Click on Active Directory Users and Computers

![AD Users & Computer1](../assets/images/ADUserComputer1.png)

Right Click on  INFRA under the following path  Cloudfabric.intraxa-→Servers-→INFRA 
Click on NEW-->Computer

![AD Users & Computer2](../assets/images/ADUserComputer2.png)

Type the Host Name under Computer Name  and Click on OK to continue

#### 5.2 Create TSM VLAN
Login to respective BMLS -→ System -→ Network Configuration -→ VLANs and Links
We have to add the TSM_2107  VLAN and add in to the link

![Add Vlan](../assets/images/AddVlan.png)

Click on ADD Vlan

![Add Vlan1](../assets/images/AddVlan1.png)

Provide the TSM_VLAN under VLAN Name and 2107 under VLAN ID and click on Confirm.

![Add Vlan2](../assets/images/AddVlan2.png)

We have to add the TSM_VLAN in to the IBM_infra Link Name. 
click on  Edit and add the TSM_VLAN and confirm and save it

![Add Vlan3](../assets/images/AddVlan3.png)

Connect to Respective PAS which is having INR cloud group and add the 2107 vlan.
 VLAN 2107 should be added under system-system settings ->Cloud Management IP-> VLANs-

![Cloud Mgmt IP ](../assets/images/CloudMgmtIP.png)

#### 5.3 Create TSM IP Group

![Cloud IP Group ](../assets/images/CloudIPGroup.png)

Click on + symbol 

![Cloud IP Group1 ](../assets/images/CloudIPGroup1.png)
(subnet ,netmask, gateway, DNS remains same for the region )

![Cloud IP Group2 ](../assets/images/CloudIPGroup2.png)

Click on + for adding IP Addresses

![IP Rang ](../assets/images/IPRang.png)

Use the Backup and Recovery servers IPs range
Attach IP address reserved into the file on (https://ibm.ent.box.com) : IBM Internal AXA Private Cloud T&T > Network > IP MANAGEMENT > LANIPMgmt – v…..xlsx

https://ibm.ent.box.com/folder/14002280083


#### 5.4 Create Virtual Appliance

![3M Tool Env](../assets/images/3MEnv.png)

Login to the respective Infrastructure PAS  (INR VMCG Should have)

![Login Page](../assets/images/LoginPage.png)

![Virtual Appliances](../assets/images/VirtualAppliance.png)

![Import New VA](../assets/images/ImportNewVirtualAppliance.png)

Username should be with complete Domain ID like:

Remote Host is AT Signtel RTEM server-

Name: IBM WIN 2012R2 TSM /IBM RHEL 7.3 TSM

Remote Host : 10.227.89.136

Remote path: /share/receive/secl/all/baseline/prod/bmls/images/IBM/TSM/TSM_WIN2012R2_V2.ova

/share/receive/secl/all/baseline/prod/bmls/images/IBM/TSM/TSM_RHEL7_V2.ova

User ID/Password : dhanalakshmi.k@cloudfabric.intraxa/xxxxxxxxxxx

Cloud Group : INR03

From Run -\share\receive\secl\all\baseline\prod\bmls\images\IBM\TSM\TSM_RHEL7_V2.ova

• List of RETM Servers:

![List of RTEM](../assets/images/ListOfRTEMServer.png) 

![TSM](../assets/images/TSM.png) 

#### 5.5 Windows VM Deployment
Login to PAS

![Login to PAS](../assets/images/LoginToPas.png)

![Configure & Deploy VA](../assets/images/Configure&DeployVA.png)

note : virtual memory is 12 gb . 

![Configure & Deploy VA1](../assets/images/Configure&DeployVA1.png)

administrator: N3v5r1mp0s$ibL3

Product Key : 6Q9NM-K44P6-Q4BB4-HCFV9-FRFR8

ibmadmin1: Qu3L@F0rc3S01t! (use for RDP login )


![Configure & Deploy VA2](../assets/images/Configure&DeployVA2.png) 

Continue the same for next Vms deployment

![Configure & Deploy VA3](../assets/images/Configure&DeployVA3.png) 

Go to Virtual Machines

![Configure & Deploy VA4](../assets/images/Configure&DeployVA4.png)

![Configure & Deploy VA5](../assets/images/Configure&DeployVA5.png)

Power on VMs

#### 5.6 Configure the post deploy Windows VM

Login to the Server and add in to domain

![RDP](../assets/images/RDP.png)

login with ibmadmin1 user . Pwd :

![RDP1](../assets/images/RDP1.png)

![System Properties](../assets/images/SytemProperties.png)

![System Properties1](../assets/images/SytemProperties1.png)

Adding the host in to  cloudfabric.intraxa domain

![System Properties2](../assets/images/SytemProperties2.png) 
![System Properties3](../assets/images/SytemProperties3.png)

Reboot the server

Re-login to the server with AD Id .

![Re-Login](../assets/images/ReLogin.png)

![Administrator Properties](../assets/images/AdministratorProperties.png)

Add TSM Backup &restoration groups in to Administrator respective to backup and restoration servers, for DR add both .. 

![Multiple Name Found](../assets/images/MultipleNameFound.png)

![Administrator Properties1](../assets/images/AdministratorProperties1.png)

Firewall

![All Control Panel Items](../assets/images/AllControlPanelItems.png)

![Windows Firewall](../assets/images/WindowsFirewall.png)

Make sure all firewall states are Off

#### 5.7 Linux VM deployment
TSM_RHEL7_V2.ova
\\10.99.132.135\share\receive\secl\all\baseline\prod\bmls\images\IBM\TSM\ TSM_RHEL7_V2.ova

Path : /share/receive/secl/all/baseline/prod/bmls/images/IBM/TSM/TSM_RHEL7_V2.ova

![Import New VA](../assets/images/ImportNewVA.png)

Click on deploy

![Click Deploy](../assets/images/ClickDeploy.png)

Provide Hostname and IP address and click on ok

![VA](../assets/images/VA.png)

![VA1](../assets/images/VA1.png)

Power on Vm from Virtual Machines

#### 5.8 Configure the post deploy  Linux server
Connect on SSH to the IPv4 IP address of the proxie

Default root password on the image is: "XXXXXXXXXXXXXX"

Connect to the linux server through putty

Linux Server IP :10.99.131.14

User ID: root

Password :"XXXXXXXXXXXXX"

Run nmtui  

![nmtui](../assets/images/nmtui.png)

Edit a connection

![nmtui1](../assets/images/nmtui1.png)


Select the interface ens192 and Enter

![nmtui2](../assets/images/nmtui2.png)

Add the search domain: cloudfabric.intraxa

Select the Require IPv4 addressing for this connection

IPv6 CONFIGURATION: select ignore

![nmtui3](../assets/images/nmtui3.png)


Click on OK

![nmtui4](../assets/images/nmtui4.png)

Quit nmtui

service network restart
for new linux versions (systemctl restart network)

![SystemCtl restart network](../assets/images/SystemCtlRestartNetwork.png)

Change the NTP servers:

Type the command: vi /etc/ntp.conf

on Use Public servers:

remove the rhel servers

add the servers (get the information from the file in the box : All Files > IBM Internal AXA Private Cloud build> Network > IP MANAGEMENT > IPPlanOOB......xlsx

Get the GW for both site

add in first server the gw of the site and in secondary the gw of the other site.

For example on SE to configure singtel Backup Server:

server 10.227.94.126

server 10.227.94.254

Save and restart the service via: systemctl restart ntpd

![systemctl restart](../assets/images/SystemCtl.png)


Check the hostname of the vm on by typing the command: cat /etc/sysconfig/network or via nmtui

![systemctl1](../assets/images/SystemCtl1.png)

Check the DNS information by typing the command: cat /etc/resolv.conf

![DNS](../assets/images/DNS.png)

The build satellite server is configured on the template on vi /etc/yum.repos.d/repoweb2.repo

![repoweb2 repo](../assets/images/repoweb2Repo.png)

Run: yum clean all

![Run yum](../assets/images/RunYum.png)

Install the necessary package for integrate the vm to domain via: 

yum -y install realmd oddjob oddjob-mkhomedir sssd adcli krb5-workstation

Discover the domain: realm discover cloudfabric.intraxa

![Discover domain](../assets/images/DiscoverDomain.png)

Join the domain with: realm join -U tambekar@cloudfabric.intraxa cloudfabric.intraxa

![Join domain](../assets/images/JoinDomain.png)

If you get the message like already joined to this domain then we have to remove first then we have to add in to domain 
For removing we have to use “realm leave”

![realm leave](../assets/images/RealmLeave.png)

realm join -U tambekar@cloudfabric.intraxa cloudfabric.intraxa

image

Where “user” is your login

When the prompt is available type: id user@cloudfabric.intraxa

Where “user” is your login

If the return is prompting the groups you belong, it’s good.

Edit the sssd configuration file: vi /etc/sssd/sssd.conf

![sssd Config](../assets/images/SssdConfig.png)

Add the following line at the end:

ad_server = SECLPRVSYSADP01.cloudfabric.intraxa

ad_server_backup = NEKOPRVSYSADP01.cloudfabric.intraxa

Configure the permissions on the vm:

realm deny  --all

realm permit -g CLOUDFABRIC\\LIN-ADM

realm permit -g CLOUDFABRIC\\LIN-USR

realm permit -g CLOUDFABRIC\\TSM-ADM

realm permit -g CLOUDFABRIC\\TSM-RST-ADM

![real deny](../assets/images/RealmDeny.png)

Restart the sssd service: systemctl restart sssd

[root@atsiprvtsmxrt03 ~]# systemctl restart sssd

[root@atsiprvtsmxrt03 ~]#

Edit the sudoers configuration file to add groups to sudoers: 

sed -i '/Allow root to run any commands anywhere/a %CLOUDFABRIC\\\\LIN-ADM ALL=(ALL) ALL' /etc/sudoers

sed -i '/Allow root to run any commands anywhere/a %CLOUDFABRIC\\\\TSM-RST-ADM ALL=(ALL) ALL' /etc/sudoers

sed -i '/Allow root to run any commands anywhere/a %CLOUDFABRIC\\\\TSM-ADM ALL=(ALL) ALL' /etc/sudoers


![sed](../assets/images/sed.png)

#### 5.9 Adding  a new disks for Linux Restore Proxy server

On the Pure Application Software IaaS:  http://10.99.206.10
Click on volumes : Cloud-->Volumes

![Cloud Volume](../assets/images/CloudVolume.png)

Create New Volume 

![Create New Volume](../assets/images/CreateNewVolume.png)

Add a VMFS Volume from Data stores

![add VMFS Volume](../assets/images/VMFSvolume.png)

Name is vm_ + hostname of the restore proxy + _disk2 (example: vm_NEKOPRVTSMXRT04_disk2)

Type : VMFS

In Cloud Group : INR0x

Size : 20GB

![Create New Volume1](../assets/images/CreateNewVolume1.png)

![Create New Volume2](../assets/images/CreateNewVolume2.png)


When the volume is created, go back on Pattern >Virtual Machines

![Pattern Virtual Machine](../assets/images/PatterenVirtualMachine.png)

Select the Linux Restore Proxy Server and on Volume select the volume on the list to attach it to the vm
Repeat this step and add a new volume with 10GB (example: vm_NEKOPRVTSMXRT04_disk3)

![Create New Volume3](../assets/images/CreateNewVolume3.png)

![Virtual Machine](../assets/images/VirtualMachine.png)

The 20GB volume will be used by /opt and the 10GB by /tmp

Add the additional space to /opt:

List disk and search for the 20GB volume (should be /dev/sdb): fdisk -l

![20GB Volume](../assets/images/20GBVolume.png)

Create a new partition on it (change disk if it’s not /dev/sdb): fdisk /dev/sdb

Create new partition: press n

Select primary: press p

Select default for others: press enter until end

Change type: press t

Select default partition: press enter

Hex code: 8e

![Hex Code](../assets/images/HexCode.png)


![Hex Code1](../assets/images/HexCode1.png)

Fdisk /dev/sdc

Create new partition: press n

Select primary: press p

Select default for others: press enter until end

Change type: press t

Select default partition: press enter

Hex code: 8e

![fdisk](../assets/images/fdisk.png)

Quit fdisk: press q

Run following commands to have information:

Pvs

![Pvs](../assets/images/Pvs.png)

Vgs

![Vgs](../assets/images/Vgs.png)

Lvs

![Lvs](../assets/images/Lvs.png)


Create Physical Volume: pvcreate /dev/sdb

![pvcreate](../assets/images/pvCreate.png)

Extend the volume group for opt (vg name is displayed on vgs command above): 

vgextend vg_app /dev/sdb

vgextend vg_rhel /dev/sdc

![vgextend](../assets/images/vgextend.png)

Extend Logical Volume for opt (name is displayed on lvs command above): lvextend -r -L +19G /dev/mapper/vg_app-lv_opt

![lvextend](../assets/images/lvextend.png)

lvextend -r -L +9.5G /dev/mapper/vg_rhel-lv_tmp

![lvextend1](../assets/images/lvextend1.png)

Check the space added with: df -h

![df](../assets/images/df-h.png)


Configure the mounting point for TSM installation:

Configuring the two mounting point for TSM package on RTEM:

Type the command: sudo mkdir /mnt/sources

Type the command: sudo mkdir /mnt/repos

![sudo mkdir](../assets/images/SudoMkdir.png)

Regarding the region where is the server, use the following command:

SE:

sudo mount -t nfs -o vers=4 10.227.89.135:/sources /mnt/sources

sudo mount -t nfs -o vers=4 10.227.89.135:/repos /mnt/repos

NE:

sudo mount -t nfs -o vers=4 10.241.183.137:/sources /mnt/sources

sudo mount -t nfs -o vers=4 10.241.183.137:/repos /mnt/repos

NA:

sudo mount -t nfs -o vers=4 10.68.124.135:/sources /mnt/sources

sudo mount -t nfs -o vers=4 10.68.124.135:/repos /mnt/repos

ME:

sudo mount -t nfs -o vers=4 10.99.5.135:/sources /mnt/sources

sudo mount -t nfs -o vers=4 10.99.5.135:/repos /mnt/repos

AT: 

sudo mount -t nfs -o vers=4 10.99.132.135:/sources /mnt/sources

sudo mount -t nfs -o vers=4 10.99.132.135:/repos /mnt/repos

Due to DNS entries wrong configuration hostname was mismatched, hence 

How to correct the hostname as per below screenshots to correct it.

![vi network](../assets/images/vinetwork.png)

![cat host](../assets/images/catHost.png)

Restarting network service

service network restart

![service network restart](../assets/images/ServiceNetworkRestart.png)

![host](../assets/images/hostname.png)

![root login](../assets/images/rootLogin.png)

All the required build tasks are completed & TSM Proxy VM is now ready for onboarding.
