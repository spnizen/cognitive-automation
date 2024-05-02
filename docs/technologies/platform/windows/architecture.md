---
template: overrides/main.html
title: Getting started
---

#  __Architectural Solution Design__


## 1.0 Document History

## 1.1	Document Location
This is a live on-line document. Paper copies are snapshot of on-line docunment(s) valid only on the day they are printed and will have a expiry of maximum one week only for the purpose of circulating as attachments to seek email approvals. Refer to the author if you are in any doubt about the currency of this document.
## 1.2	Revision History
Revision Number	Revision Date	Summary of Changes	Changes marked	Contributor
Version: 1.0
11-Feb-2020
Initial lightweight version of Template, simplified the longer template version as most architects complained about template being too long, 40 pages to 14 pages.		Can Koklu
Version 1.1	DD-MM-YY			
Version 2.0	31-May-21	Major update to all deployment models. Strategy is now IBM Hosted. SaaS is no longer valid. So this changes sections AD-001, Reference Architecture and FW rules		Can Koklu
Version 2.1	28-Jun-21	Added required ports for some DB monitoring		Can Koklu
Version 2.x		Revised specifically for the <account>		@Task for Account Architect and mneaas architect advisor(s)
## 1.3	Distribution
This document has been distributed to the above Approvers, and to:
Name
Title
Company
Matthew Waterfield	M&EaaS - Lead Architect	IBM
Tomas Simek	Global M&E and M&EaaS DPE	IBM
	HST Architect	IBM
	M&EaaS PM	IBM
	<account> Account SDM	IBM
	<account> Account PM	IBM
	<account> Architect	IBM

## 1.4	Reference Documents

Name
Link
GTS-SL1 Architecture	https://ibm.box.com/s/dz95p89ywbketc9pkjznnjtagecwt4fe

SL1 collector build iso and guide	https://ibm.ent.box.com/folder/91983970018?s=7rtgvtz8typpyod6zow886fwf3fvrdm4


## 2.0	Introduction

## 2.1	Science Logic Overview
Provide an overall perspective of the solution goals, business requirements and desires, that define minimum expectations.
<TEchnology/COmponent> is a comprehensive monitoring tool which is designed for traditional data centers and multi cloud environments like IBM Cloud, AWS, Azure and Google. 
ScienceLogic is capable for resource monitoring (server, middleware, database, web and application servers, storage and network devices) and modern workloads like Containers and Kubernetes platforms.
## 2.2	<TEchnology/COmponent> Scope
The scope is the characteristics, features of the system or service that is to be built.  Solution scope is all about the solution to be implemented: how will it look like, how will it function, and other characteristics, etc.
Objective of this project is to deploy ScienceLogic monitoring by choosing the most suitable option from the available deployment models to monitor the servers, devices in scope.
A sample inventory could be a combination of different server types that are given in the ScienceLogic Overview section above. 
In addition to the monitoring delivered by using ScienceLogic, certain external event sources could be directly integrated to Netcool by using HTTP/json post or SNMP traps
### 2.2.1	Detailed Inventory/Summary

Device Type	Count	Requirements Notes
Physical 		
Linux VMs	316	
Windows VMs	530	 

Virtualization		 
vCenters (per location)	1	Specify here how many sites and the number of VCs per site.
Example: 2 sites, 1 VC each in total 2 VCs.
VMWare VMs	k in total	Specify here how many VMs, OS versions in details. 
Example: 5 RHELv7, 10 Windows 2016
Middleware & Web Servers		 
BAW	7	BAW version 8.6.2.20002 (  linux servers )
		
		
Cloud Services		 
AWS		Specify number of VMs per cloud service and types of VMs
Example: 10 VMs in AWS, 5 RHEL v7, 5 Windows 2016
Azure		
IBM Cloud Private		
Database		 
DB2	3	Version 11
Couch DB	6	
		
Networking		
Network devices	216	  

Storage		
Storage devices	163	  

BackUp ( TSM ) devices	10	TS4500 FW



## 2.3	Functional Requirements

Requirement
Must Provide monitoring for each OS and application mentioned above at the section of detailed inventory
Use IBMID/LDAP authentication for IBM users on ScienceLogic Portal or Enterprise equivalent
SL1 instance should be able to support multiple tenants
Event Management systems should be able to support multiple tenants
Must Provide integrations agreed with the account in the DoU
Add a line per additional FR


## 2.4	Non-Functional Requirements

Requirement
Provide high availability for the SL1 Core Infrastructure
Provide high availability for the SL1 Collection Layer 
Provide high availability event management systems
The solution must support up to X servers by end of 2021 in the client environments considering future growth.
Solution must be GDPR compliant
Add a line per additional NFR

## 3.0	System Context
## 3.1	Overview
The system context represents the entire system as a single object or process and identifies the interfaces between the system and external entities.  Shown as a diagram, this representation defines the system and identifies the information and control flows that cross the system boundary. 
## 3.2	Diagram
System context diagram visually describes the system and identifies the information and control flows that cross the system boundary. 
See ART 0651

 
Figure 1 – System Context Diagram
## 3.3	External Entities
The ASD author(s) must create a separate External Entity section for each Actor and System.

### 3.3.1	DevOps
Description	M&EaaS DevOps Team will be responsible for maintenance and compliance of ScienceLogic infrastructure (KSTP hosted), application support and delivery of service. They will interact with HST (Hybrid Service Technology) and account teams in case of issues or problems with the environment and service.
Type	Actor
Owner	Enterprise (M&EaaS)
### 3.3.2	Monitoring Admins
Description	Monitoring Administrators are responsible to ensure client monitoring requirements are met by ScienceLogic Monitoring tool, by interfacing between the Account and DevOps team. Monitoring Administrators are also responsible to support the Account teams to enable and improve monitoring.
Type	Actor
Owner	Enterprise
### 3.3.3	System Admins
Description	SysAdmins are the users of M&EaaS Service who define/update monitoring needs of their respective systems through ScienceLogic and/or M&EaaS Portal. This includes Middleware and Database and Application Administrators also. In some cases, SysAdmins could use ScienceLogic Portal to have a consolidated view for their devices or to validate the latest status of a resource and/or to take corrective actions.
Type	Actor
Owner	Enterprise
### 3.3.4	SysOps
Description	SysOps will primarily use Netcool Event Management System for managing Operations. In some cases, SysOps are also responsible for first level troubleshooting, whereby they could use ScienceLogic Portal to validate the latest status of a resource and/or to take corrective actions.
Type	Actor
Owner	Enterprise

### 3.3.5	Netcool Event Management System
Description	Netcool Event Management System is responsible for event correlation, event normalization, event deduplication and event processing. It receives and processes the events generated by ScienceLogic, validates and filters the event before taking appropriate pre-defined automated actions like Automated Notifications, Automated Incident Tickets & initiating Remediations through Dynamic Automation, and sending Event Data to MACE/MCMP (AIOPs).
Type	System
Owner	Enterprise or M&EaaS
### 3.3.6	M&EaaS Portal
Description	Self Service Portal serves as a Self-Service tool allowing System Admins, Developers and Support teams to enable/disable/update monitoring on target servers, without the technical knowledge of ScienceLogic monitoring tool. In addition, this tool interfaces with Event Management system to define what Event Actions should be taken for alerts generated by ScienceLogic.
Type	System
Owner	M&EaaS
### 3.3.7	Managed Devices
Description	Managed devices like Windows, Linux, VMware ESXi servers and storage devices. Middleware and database components can be also considered as managed devices. It can also be called monitored devices. 
Type	System
Owner	<account> (Managed by Enterprise)
### 3.3.8	Enterprise BluePages (SSO)
Description	Enterprise BluePages (SSO) provides authentication for platform users. 
Type	System
Owner	Enterprise

## 4.0	Architectural Decisions

This section is intended to include the domain solution specific architecture decisions (ADs). 
See ART 0513 for guidance.

## 4.1	Summary and Status
This section summarizes all decisions and their status

The below are usual architectural decisions and options, add or remove as needed. Go first to the detailed section and update summary accordingly.

ID	Decision	Status	Last Update
AD-001	Option 1: SaaS (ScienceLogic hosted and managed)
Option 2: M&EaaS (KSTP hosted, global/EU&AP/EU only support)	OPEN	
AD-002	Option 1: Use Dedicated SL1 instance
Option 2: Use Shared SL1 instance	OPEN	
AD-003	Option 1: Stay on the Existing Netcool
Option 2: Migrate to Shared M&EaaS Netcool
Option 3: Migrate to Dedicated M&EaaS Netcool	OPEN	
AD-004	Option 1: Place Collection Layer in CP (Client Premise)
Option 2: Place Collection Layer in EP (Extended Premise)
Option 3: Place Collection Layer in ISPW DRES	OPEN	
AD-005	Option 1: Build a CUG across data centers
Option 2: Build CUG in each data center
Note: These options are very dependent on your network & location situation, the above example is only displaying basic decision on cross data center communication or separate collectors for each data center.	OPEN	
AD-006	Option 1: Use standard communication where SL1 Database initiates communication to the Collection layer
Option 2: Configure the Collection layer to use the PhoneHome method to communicate to the SL1 Database
Option 3: Configure one or more server(s) to act as proxy server between Collection layer and the SL1 database in the PhoneHome method	OPEN	
AD-007	Availability Monitoring:
Option 1: Use Netcool Ping probes
Option 2: Use SL1 Ping monitoring	OPEN	
AD-008	Option 1: Use Agent-based monitoring
Option 2: Use Agentless monitoring
Option 3: Use combination of Agent-based and Agentless monitoring	OPEN	
AD-009	Option 1: Use WMI based Windows Server Power Pack
Option 2: Use SNMP based Windows Power Pack
Option 3: Use PowerShell based Windows Server Power Pack
Option 4: Use combination of PowerShell based Windows Server Power Pack on supported platforms and WMI based Power Pack on unsupported platforms	OPEN	
AD-010	Option 1: Use only Data Collectors in the CUG 
Option 2: Use Data Collectors and Message Collectors in the CUG	OPEN	
AD-011	Option 1: Enable out-of-box SL1 monitoring and perform fine tuning over time
Option 2: Enable custom SL1 monitoring to reproduce the current monitoring	OPEN	
AD-012	Option 1: SNMP Push monitoring is done by storage management tools and events forwarded to Netcool through EIF probe
Option 2: SNMP Pull monitoring is done by SL1 and events forwarded to Netcool through MsgBus probe	OPEN	
Table 3: Architectural Decision Summary
The following codes indicate the status of decisions:
•	DM – decision made. The decision or recommendation has been made having weighed up the alternatives and stated the justification.
•	AD – awaiting decision. All information has been gathered to make the decision, but no final decision has yet been made.
•	AI – awaiting information. More information is needed before a decision can be made.

### 4.1.1	AD-001 SL1 Deployment Model
Comment by M&EaaS: SL1 Saas is GTS strategic and preferred solution.
Usual Options:
1.	SaaS
Connectivity – SL1 Collectors to SaaS SL1 DB (SSH Tunnel, no VPN) as service available on Internet. 
Hosted on Amazon Web Services, managed by ScienceLogic (Global support). Instances in multiple GEOs (exact location to be agreed with SL1). Security PenTest/ SDA signed (GDPR). 
2.	ISPW
Connectivity – SL1 Collectors to ISPW Dedicated Resource Segment for Client (DRES). Standard connectivity via site-to-site VPN over Internet or GNPP.
Hosted by IBM Cloud – ISPW, managed by M&EaaS team (global/EU&AP/EU only).

Subject Area	Deployment Model	Topic	Monitoring Infrastructure
Architectural Decision		ID	AD-001
Issue or Problem Statement	Which SL1 deployment model would be best suited to the business needs of the client?
Assumptions	
Motivation	Selecting of right deployment model is crucial for the future monitoring capability & scalability. Also security and compliance should be taken into account. 
Alternatives	•	Option 1: Use SaaS (ScienceLogic hosted and managed)
•	Option 2: Use M&EaaS (KSTP hosted, Global HST team managed)
Decision	Option 2
Justification	SaaS deployment model gives full responsibility to the SL1 vendor for monitoring infrastructure setup, support, maintenance and the base monitoring configuration. 
Implications	
Derived requirements	Enable network connectivity between <account> LDAP and SL1 Database
Related Decisions	AD-002, AD-003
### 4.1.2	AD-002 SL1 Tenancy

Subject Area	Tenancy	Topic	Monitoring Infrastructure
Architectural Decision	Use Dedicated SL1 instance
Use Shared SL1 instance	ID	AD-002
Issue or Problem Statement	Should we use Dedicated or Shared SL1 instance? 
Assumptions	•	There are approximately 1259 managed devices in the scope.
•	The basic monitoring of CPS devices and the sub-components will be done by SL1 which will via SNMP trap
•	Number of managed devices may scale down wherein there will be one CPS lesser every month starting 2023
•	Dedicated and Shared SaaS SL1 deployments have the same cost
•	Shared ISPW SL1 Instance has lower cost than Dedicated SL1 Instance
•	Shared KSTP hosted instance is used by multiple Enterprise accounts
•	Advanced monitoring requirements or integrations are required
Motivation	Affordable deployment model which can scale for a potential demand without migration
Alternatives	•	Option 1: Use Dedicated SL1 instance
•	Option 2: Use Shared SL1 instance
Decision	Use Option 2
Justification	
Implications	N/A
Derived requirements	N/A
Related Decisions	AD-003
### 4.1.3	AD-003 Event Management Deployment Model
Comment by M&EaaS: 
Strategic direction for GTS is to migrate all accounts to the M&EaaS model. All strategic requirements and needs will be prioritized first for the M&EaaS platform.
M&EaaS Netcool has standard solution to integrate with CACF/Ansible, GNM/Everbridge Notification, ICD (Maximo), ServiceNow, MCMP (AIOPs).

Subject Area	Deployment Model	Topic	Event Management
Architectural Decision	Migrate to Shared M&EaaS Netcool	ID	AD-003
Issue or Problem Statement	Should we use stay with existing Netcool or migrate to Shared M&EaaS Netcool?
Assumptions	•	[Example: Current auto-ticketing solution built for <account> on the existing environment isn’t strategic anymore and, in the future, will be removed from GSMA supported solutions]
•	[Example: Current auto-ticketing solution built for <account> is not functional since <account> doesn’t allow 2-way communication from/to their own ticketing tool]
•	[Example: Account’s ticketing tool is managed by <account> and only limited number of users have access to this ticketing system]
•	[Example: Both existing Netcool and Shared M&EaaS Netcool are already integrated to BlueIntegrate instance for auto-ticketing solution of another clients]
•	[Example: Both existing Netcool and Shared M&EaaS Netcool are not yet integrated to DA 2.0 and Shared M&EaaS Netcool will be onboarded first to DA 2.0]
•	[Example: There is a big cost difference between Shared and Dedicated M&EaaS Netcool]
Motivation	Affordable solution which is aligned with the strategic direction and which can scale for a potential demand without migration
Alternatives	•	Option 1: Stay on the Existing Netcool
•	Option 2: Migrate to Shared M&EaaS Netcool
•	Option 3: Migrate to Dedicated M&EaaS Netcool
Decision	Use Option 1 or 3
Justification	
Implications	•	Netcool MsgBus probes required for SL1-Netcool integration to be provided by M&EaaS
Derived requirements	Enable network connectivity between SL1 CUGs and Netcool MsgBus probes

Related Decisions	AD-004, AD-006
### 4.1.4	AD-004 Collection Layer Network Placement
Comment by M&EaaS: 
Collectors (Collection Layer) retrieve data from managed devices (using SNMP Get, SSH, PSH or other). 
It is recommended to place the Collection Layer close to the managed devices, therefore usually to the Extended or Customer Premises, where the devices are located. The motivation is to avoid a network latency and complex firewall configuration.
Note: EP is the network segment hosted in the IBM Data Centers, CP is client owned network segment.

Subject Area	Collection Layer	Topic	Network
Architectural Decision	Place Collection Layer in EP	ID	AD-005
Issue or Problem Statement	In which network segment(s) should we place the SL1 Data Collectors?
Assumptions	•	[Example: Collection Layer will communicate with managed devices, SL1 core infrastructure and Netcool MsgBus probe]
•	[Example: Managed devices are in EP]
•	[Example: SL1 core infrastructure will be in SL1 Cloud (Internet)]
•	[Example: Netcool MsgBus probes provided by M&EaaS will be in ISPW DRES]
•	[Example: Collection layer will be deployed and managed by the M&EaaS team]
Motivation	Collection layer should be as close as possible to the managed devices to avoid network latency and firewall configuration
Alternatives	•	Option 1: Place Collection Layer in CP
•	Option 2: Place Collection Layer in EP
•	Option 3: Place Collection Layer in DRES
Decision	Use Option 3
Justification	
Implications	N/A
Derived requirements	N/A
Related Decisions	AD-006
### 4.1.5	AD-005 Collection Layer High Availability
Comment by M&EaaS:
-	What is CUG (HA and Load Balance)
-	HA recommendation (Size for the load “n” and add for HA +1 at least up to 2n)
-	Calculate Message Collector separately from Data Collectors
-	REF. to Sizing or Move sizing here…

Subject Area	Collection Layer	Topic	High Availability
Architectural Decision	Build CUG_DC1 and CUG_DC2 (2 CU in DC1, 2 CU in DC2)	ID	AD-006
Issue or Problem Statement	How should we setup the Collection Layer to have it up and running in case a single data collector fails or complete data center is down?
Assumptions	•	Enough network bandwidth between Data Centers
•	Managed devices are equally distributed between Data Centers.
•	enough resources available to host n+1 SL1 data collectors within data center
Motivation	SL1 data collectors will support HA & DR when needed
Alternatives	•	Option 1: Build a CUG across DC1 and DC2 (n+1 CU in DC1, n+1 CU in DC2)
•	Option 2: Build CUG_DC1 and CUG_DC2 (n+1 CU in DC1, n+1 CU in DC2)
Decision	Use Option 2
Justification	Option 1 provides HA in both data centers. Drawback is that it increases the network traffic cross the data centers over the WAN, since single SL1 CUG doesn’t have concept of location.
Therefore Option 2 is selected to avoid network traffic between managed devices and SL1 Collection Layer cross data centers.
Implications	There will be two separate CUG to maintain with different IP range for the target managed devices in each data center.
Derived requirements	N/A
Related Decisions	AD-005, AD-011
### 4.1.6	AD-006 SL1 Communication Method
Comment by M&EaaS: 
The recommended solution with M&EaaS is PhoneHome, where the Data Collectors and Message Collectors initiate communication with the Database Server. The Traditional method is the opposite direction. 
https://docs.sciencelogic.com/latest/Content/Web_General_Information/Architecture/architecture_collector_groups.htm#Traditional_and_PhoneHome_Collectors

The SSH Proxy might be required to be placed between SL1 Collector Layer and SL1 DB due to networking and security reasons. 
For ISPW Shared SL1 deployment model requires using a proxy, because ISPW does not allow direct connection from Client Premise/Extended Premise to SRES. The proxy is then placed as a standard solution to ISPW DRES. 
About Proxy: SSH communication between SL1 Collector and SL1 DB use non-standard port (tcp/7705). The proxy is basically SSH daemon with SSH Forward function (listen on tcp/22 by default).
Guide how to setup SL1 Appliance to act as proxy: https://docs.sciencelogic.com/latest/Content/Web_Install_Configure/Installation/installation_phone_home.htm#Configuring_One_or_More_Proxy_Servers
Guide how to setup any Linux/Unix server to act as proxy: https://enterprise.ent.box.com/file/679089633495?s=hwpy3kjn0mxrk5311ctsa7b9j4zutwi4


Subject Area	Communication Method	Topic	Monitoring
Architectural Decision	Configure one or more server(s) to act as proxy server between Collection layer and the SL1 database in the PhoneHome method	ID	AD-007
Issue or Problem Statement	SL1 Collection Layer and SL1 Core Infrastructure need a communication path. How should we connect them to each other?
Assumptions	•	Collection layer is in EP (Red)
•	Core infrastructure is in Internet zone (Red)
•	Firewall ports are permitted to allow the communication of all components
Motivation	Limit the number of inbound connections from the Internet zone to the Red zone
Alternatives	•	Option 1: Use standard communication where SL1 Database initiates communication to the Collection layer
•	Option 2: Configure the Collection layer to use the PhoneHome method to communicate to the SL1 Database
•	Option 3: Configure one or more server(s) to act as proxy server between Collection layer and the SL1 database in the PhoneHome method
Decision	Use Option  ??
Justification	Since access from Internet to Red Zone is not allowed and communication from Red Zone to Internet requires proxy servers, Option 3 is chosen. With this option, Collection layer will initiate communication with the SL1 database and the SL1 database will create an SSH tunnel through the proxy server.
Implications	Proxy server(s) need to be identified and need to be deployed, if they don’t exist.
Derived requirements	•	Enable network connectivity between SL1 CUGs and proxy server(s).
•	Enable SSH configuration on SL1 CUGs and proxy server(s).
•	Enable SSH key exchange between SL1 CUGs and SL1 Database.
Related Decisions	N/A
### 4.1.7	AD-007 Availability Monitoring
Comment by M&EaaS: 
The SL1 ping monitoring is a standard way to provide availability monitoring. There is no need for an additional component like Netcool Ping Probe.

Subject Area	Managed Device Availability	Topic	Monitoring
Architectural Decision	Use SL1 Ping monitoring	ID	AD-008
Issue or Problem Statement	Which monitoring tool should we use for availability and network latency monitoring of the managed devices?
Assumptions	•	There is no Netcool Ping probe currently installed in the environment
Motivation	Satisfy this requirement with minimum investment and use a single monitoring tool for availability and resource monitoring.
Alternatives	•	Option 1: Use Netcool Ping probes
•	Option 2: Use SL1 Ping monitoring
Decision	Use Option 2
Justification	SL1 can use the Collection Layer to send ICMP Ping requests to the managed devices to monitor availability and network latency of the managed devices. We don’t need to install additional Netcool Ping probe component.
Implications	Managed devices must be configured to respond an ICMP Ping request.
Derived requirements	•	Enable network connectivity between SL1 CUGs and managed devices for ICMP Ping requests.
•	Reconfigure the firewall on the Windows and Linux servers to allow ICMP Ping requests.
Related Decisions	N/A
### 4.1.8	AD-008 Monitoring Agents
Comment by M&EaaS: 
The GTS strategic solution is to use SL1 with agentless monitoring. The agent should be used only if there is a requirement that cannot be covered with agentless solution.

Subject Area	Agent-based vs. Agentless	Topic	Monitoring
Architectural Decision	Use Agentless monitoring	ID	AD-009
Issue or Problem Statement	Do we need to deploy SL1 agents on the managed devices or can we monitor them without deploying agents?
Assumptions	•	Agent-based monitoring supports only Windows and Linux operating systems
•	Agent-based monitoring is not supported by M&EaaS since it is not GTS strategy
•	Agent -based monitoring provides out-of-box capability for log monitoring (text file or Windows Event Log)
•	Agentless monitoring requires additional SL1 Power Packs for log monitoring
Motivation	Satisfy the monitoring requirements with minimum maintenance costs
Alternatives	•	Option 1: Use Agent-based monitoring
•	Option 2: Use Agentless monitoring
•	Option 3: Use combination of Agent-based and Agentless monitoring
Decision	Use Option 2 //TBD
Justification	Agentless monitoring is the strategic choice since it eliminates the agent maintenance. In addition, there is a community Power Pack which provides agentless monitoring for Windows Event Logs.
Implications	Agentless monitoring requires remote data collection methods like SNMP, SSH and PowerShell.
Derived requirements	•	Enable network connectivity between SL1 CUGs and managed devices for SNMP, SSH and PowerShell
•	Enable SNMP, SSH and PowerShell on the managed devices
•	Provide required credentials and SSH keys
Related Decisions	AD-010
### 4.1.9	AD-009 Power Pack for Windows Servers
Comment by M&EaaS: 
The GTS strategic solution is to use PowerShell based monitoring for Windows Servers. The exception is on older Windows server, which does not have a required version of powershell (known for Windows 2000, Windows 2003). These systems are not officially supported by M&EaaS nor Sciencelogic as the vendor (Microsoft) does not support them neither. But these systems are successfully monitored by SL1 SNMP based powerpacks with a risk that there might not be further development or fixes from Enterprise GTS nor Sciencelogic. Powershell PP is supported on 2008 R2, 2012, 2012 R2, 2010, 2016, 2019.
.
Subject Area	Windows Servers	Topic	Monitoring
Architectural Decision	Use PowerShell based Windows Server Power Pack	ID	AD-010
Issue or Problem Statement	Should we monitor Windows servers using PowerShell or WMI data collection method?
Assumptions	•	WMI based Power Pack doesn’t have out-of-box dashboards
•	PowerShell is allowed on the Windows servers
Motivation	Provide out-of-box dashboards for the Windows servers
Alternatives	•	Option 1: Use WMI based Windows Server Power Pack
•	Option 2: Use SNMP based Windows Power Pack
•	Option 3: Use PowerShell based Windows Server Power Pack
•	Option 4: Use combination of PowerShell based Windows Server Power Pack on supported platforms and SNMP based Power Pack on unsupported platforms
Decision	Use Option 2
Justification	PowerShell based Power Pack can collect more metrics from the Windows servers and it is compatible with the out-of-box Power Pack which provides dashboards.
Implications	N/A
Derived requirements	N/A
Related Decisions	AD-009
### 4.1.10	AD-010 Collector Type
Comment by M&EaaS: 
Data Collectors connects actively to managed systems and APIs to collect data through multiple protocols. Message Collector can be used to receive and process SNMP traps and Syslog messages into alerts in SL1. 
The need for Message Collector may come from a requirement for Syslog and/or SNMP traps. The related decision can be how to receive and process SNMP traps. The SNMP traps can be processed by SL1 Message Collector or Netcool SNMP probe. The decision can be considered from strategic and practical point of view – for some SNMP trap sources there are already existing solutions, for some it requires a decision where the solution should be built. Another consideration could be if there is a need for the traps to be displayed in SL1 or not.

Subject Area	Collector Type	Topic	Monitoring
Architectural Decision	Use only Data Collectors in the CUG	ID	AD-011
Issue or Problem Statement	Do we need to use Message Collector?
Assumptions	•	SL1 agents are not required
•	Syslog collection or SNMP traps are not required to be received by SL1
Motivation	Provide out-of-box dashboards for the Windows servers
Alternatives	•	Option 1: Use only Data Collectors in the CUG
•	Option 2: Use Data Collectors and Message Collectors in the CUG
Decision	Use Option 1
Justification	Message Collector is not required since SL1 agents are not planned to be used and Syslog collection or SNMP traps are not required to be received by SL1.
Implications	In case SL1 agents, Syslog collection or SNMP trap monitoring are required to interact with the SL1 system, a new CU appliance needs to be added to each CUG for the Message Collector role. 
Derived requirements	N/A
Related Decisions	AD-006
### 4.1.11	AD-011 Initial Monitoring Configuration
Comment by M&EaaS: 
M&EaaS does not support custom SL1 monitoring. It is recommended to go with out-of-box SL1 monitoring in the beginning. Enterprise community produces Power Packs based on the Enterprise best practices. You can apply them as they are available. 
If you identify that your required monitoring is not provided by any available and supported SL1 powerpack. You can raise an AHA Idea to M&E and document it in Risk/Issues. Business justification is required. Generally benefiting monitors are more likely to be approved and developed. 
Aha! : https://enterprise.aha.io/
Custom monitors may not be developed (if refused by M&E Global community) with native SL1 powerpack. We can then discuss how can account own solutions be integrated with M&EaaS. 

Note on transferring thresholds and detailed requirements between different technologies may not be possible, so requirement to one to one transition is unrealistic. We recommend a pilot phase, where your SME will spend time to tune the SL1 monitoring to their up to date needs than trying to copy-paste previous monitoring, which would take the effort anyway.

Note that SL1 cannot be used to execute a code (custom script), which is not in fully in its control. It is due security reason. SL1 development has controlled process that ensure that there is no harmful code, ensuring control over collected data to achieve required security level.

Subject Area	Initial Configuration	Topic	Monitoring
Architectural Decision	Enable out-of-box SL1 monitoring and perform fine tuning over time	ID	AD-012
Issue or Problem Statement	When current <legacy> monitoring is replaced by SL1, how should we set up the initial monitoring?
Assumptions	•	Out-of-box SL1 Power Packs will be used to replace <legacy monitoring>
•	Similar metrics are collected by <legacy monitoring> and SL1 data collectors from Windows, Linux and VMware ESXi servers <and other relevant devices in scope>
•	Out-of-box SL1 Power Packs are maintained by Sciencelogic and Enterprise to keep monitoring settings up to date
•	Internal Enterprise community will produce best practices monitoring for SL1 in parallel
Motivation	Enable best-practices monitoring with minimum effort
Alternatives	•	Option 1: Enable out-of-box SL1 monitoring and perform fine tuning over time
•	Option 2: Enable custom SL1 monitoring to reproduce the <legacy> monitoring
Decision	Use Option 1
Justification	Custom SL1 monitoring is not supported by M&EaaS and it requires a huge effort. Therefore, it makes sense to go with out-of-box SL1 monitoring in the beginning. Over time, if internal Enterprise community produces custom Power Packs based on the Enterprise best practices, we can apply them.
Implications	Out-of-box SL1 monitoring may require fine tuning to adjust thresholds as requested by the SysAdmins. 
Derived requirements	N/A
Related Decisions	N/A
### 4.1.12	AD-012 SNMP Pull Monitoring for Storage Devices
Comment by M&EaaS: 
There are few options how to monitor Storage Devices depending on the type and requirement. 
Please discuss the current options with M&EaaS team. 

Subject Area	SNMP pull for storage devices	Topic	Monitoring
Architectural Decision	SNMP Pull monitoring is done by SL1 and events forwarded to Netcool through MsgBus probe	ID	AD-013
Issue or Problem Statement	How should we pull SNMP data from the storage devices?
Assumptions	•	Storage management tools like TPC or Spectrum Control are in place
•	Performance and Capacity metrics collected from the storage devices are required to be visible in the SL1 Portal
Motivation	Primary driver for the monitoring solution is to provide external clients a read-only portal for metrics collected from managed devices.
Alternatives	•	Option 1: SNMP Pull monitoring is done by storage management tools and events forwarded to Netcool through EIF probe
•	Option 2: SNMP Pull monitoring is done by SL1 and events forwarded to Netcool through MsgBus probe
Decision	Use Option ?
Justification	Data collected from storage devices using SNMP Pull can be presented in the SL1 Portal
Implications	Supported storage devices and collected data will be limited to out-of-box SL1 Power Packs
Derived requirements	•	Collect storage inventory and enable related SL1 Power Packs
•	Enable SNMP on the storage devices
•	Provide required credentials
Related Decisions	N/A
### 4.1.13	AD-013 SNMP Trap Monitoring for Storage Devices/<type> Devices
Comment by M&EaaS: 
There are two main options how to integrate devices that can send SNMP traps. The usual example to integrate for SNMP traps are multiple storage devices.
Please discuss the options with M&EaaS team. 

Subject Area	SNMP trap for storage devices/<type> Devices	Topic	Monitoring
Architectural Decision	Storage devices send SNMP traps to Netcool via SNMP probes	ID	AD-014
Issue or Problem Statement	Where should storage devices send SNMP traps?
Assumptions	•	All storage devices in scope can send SNMP traps
•	SNMP traps will be primarily used to report hardware failures
•	SNMP traps will not contain any performance or capacity metrics and there is no need to show them in the SL1 Portal
Motivation	To find a suitable integration between storage devices and M&E environment
Alternatives	•	Option 1: Storage devices send SNMP traps to SL1 via message collectors
•	Option 2: Storage devices send SNMP traps to Netcool via SNMP probes
Decision	Use Option ?
Justification	SNMP traps don't contain any performance metric and there is no need to show these alerts in the ScienceLogic Portal.
Implications	SNMP probes should be implemented in the M&EaaS environment
Derived requirements	•	Enable network connectivity between storage devices and SNMP probes
•	Configure SNMP trap destination to Netcool SNMP probes on each storage device 
Related Decisions	AD-003

## 5.0	Architectural Overview

## 5.1	Reference Architecture
Example: ISPww hosted shared model
Insert corresponding reference architecture if a different model is used.
 
 
 
## 5.2	Target Architecture
TBD//@Account Architect, which is showing SL1 DB and customer site information and placement of collectors, collector groups. Diagram should illustrate the deployment type, all sites monitored, the number of collectors per CUG, number of CUGs, which CUGs are monitoring which sites
 
## 5.3	Key Concepts

### 5.3.1	ScienceLogic Core Infrastructure:
Database Layer:
Database layer is responsible for storing configuration data and data collected from managed devices. It pushes data and retrieve data from the collection layer, process and normalize collected data and execute automation actions in response to events.
Interface Layer:
Administrators and users access the user interface through a web browser session. In the user interface, they can view collected data and reports, define organizations and user accounts, define policies, view events, and create and view tickets, among other tasks. The appliance that provides the user interface function also generates all scheduled reports. 
 
### 5.3.2	ScienceLogic Collection Layer:
Data Collector:
Data Collector: The Data Collector retrieves data from monitored devices and applications in your network at regularly scheduled intervals. In a distributed system, Data Collector also performs some pre-processing of collected data and execute automation actions in response to events. 
Message Collector:
 The Message Collector receives and process inbound, asynchronous syslog and trap messages from monitored devices. When installed on a device, the ScienceLogic Agent also sends asynchronous messages to the appliance performing message collection. It can be part of the Data Collector. 

## 6.0	Solution Testing //TBD
## 6.1	Functional and Non-Functional Requirement Testing
Document the recommended tests to validate the functional and non-functional requirements have been met.

## 7.0	 Viability Assessment //TBD
Capture Assumptions, Dependencies and Risks that affect the architecture and associated Actions and Decisions that were identified in solution development here so that they are not lost during the development of the solution.  Also maintain a RAID log for architecture items that are identified during T&T. 
See ART 0530

Highly recommended to document here any monitoring requirements that cannot be confirmed as covered by current solution (monitoring gaps). Consider the RISK that such case can have to the project.
## 7.1	Design Considerations
### 7.1.1	Assumptions
Assumption	Impact if Assumption proves false
Out of box Power Packs will be used and only minor customization is expected for monitoring threshold tuning	Account team may need additional support from the M&EaaS team which may require additional charges
There is no need to use ScienceLogic APIs for custom integrations to account tools	Account team may need training to learn how to use and apply these APIs and there will be a PCR
There is no need for SL1 agents or syslog collection	At least one new Message Collector appliance needs to be added to each CUG
	
### 7.1.2	Dependencies
Dependency	Impact if Dependency is not available
There is a dependency on <account> to configure firewall rules/VPN connectivity between the on-prem datacenters and KSTP.	Tooling deployment will be delayed.
There is a dependency on CACF availability to enable Dynamic Automation.	Dynamic Automation implementation delayed until CACF service is deployed.
There is a dependency on the availability of Service Now and on <account> to deploy the ‘droplet’ integration.	Delay to auto-ticketing and remediation. 
	
### 7.1.3	Risks
Risk	Impact if Assumption proves false
	
	

## 8.0	Collection Layer //TBD
## 8.1	VM Specs
Node Name	Location	App Name	Server Func.	HW (Vend. and Model)	OS	CPU
(Cores)	Mem
(GB)	Disk (Local & SAN)
(GB)
Data Collector #1	DC1	SL1	DC	VM
Appliance	Oracle Linux	4	24	150
Data Collector #2	DC1	SL1	DC	VM
Appliance	Oracle Linux	4	24	150
Table 5: Node Descriptions
### 8.1.1	Server Hostnames
List of deployed SL1 appliances within <account> data center(s).

Server Function	Hostname	Net. IP Addr.
Data Collector #1 in DC1		
Data Collector #2 in DC1		
Data Collector #1 in DC2		
Data Collector #2 in DC2		
Table 6: Server Hostnames

## 8.2	Sizing Chart
The below table displays recommendation how many devices can be managed by single collector. The recommendation is based on a collector configuration with 4 CPU cores, 32GB RAM, 150GB storage. You can reduce collector counts on large deployments a configuration with 8 CPU cores, 64GB RAM and 200GB storage can be used with approximately double the device counts. We do not recommend to go below 2 CPU sized collector.

 
source: https://support.sciencelogic.com/s/system-requirements

You organize collectors into Collector Unit Group, a group of collectors that should serve assigned group of managed devices. It provides both balancing and option for high availability when you opt for more collectors than needed.

We recommend to not rely only on the table above, but discuss each sizing with M&EaaS Architect Advisor.
Figure 3: Sizing Chart

## 8.3	Security
This section will describe the security related components of the infrastructure which will be applied, managed, or utilized to protect the infrastructure.   Where the component is external to the system, for example firewalls, a list of required configurations is provided and must be available before the infrastructure will function as architected.
8.3.1	Firewall Data Flows
The following table defines the network flows required for the <account> deployment.

There are 4 Main flows related to SL1
-	Data Collection, where collectors connect to managed devices on needed interfaces (SSH, WinRM, HTTPs API or specific port, that you want to monitor).
-	Supporting Services (DNS, AD, NTP) that are needed for collectors to functional properly
-	Data Collectors to SL1 DB The SL1 DB listens on TCP/7705 and can be proxied through SSH Proxy (TCP/22) as it is in fact SSH tunnel. The communication depends on your SL1 Deployment Model. 
-	Data Collectors event flow to Event Management goes to M&EaaS MsgBus Probe.
-	Optionally you can integrate SysLog and SNMP traps to SL1 MessageCollector
And other expected flows are SNMP Traps (usually from Storage devices) or other Event Sources that you want to integrate with M&EaaS Event Management through Netcool Probes.

The bellow is a communication on standard ports required for usual implementations, requirements may warry.

Note: CUG = Collector Unit Group, a group of collectors that should serve assigned group of managed devices. You can have multiple groups.


Application/Service 	Source IP Address	Destination IP Address	Protocol	Ports
				
Data Collection (SSH)	Data Collectors (CUG)	Managed Devices (Linux)	TCP	22 
Data Collection (PowerShell)	Data Collectors (CUG)	Managed Devices (Windows)	TCP	5986 (WinRM secure)
5985 (WinRM unencrypted)
Data Collection (VMware)	Data Collectors (CUG)	vCenter API	TCP	443 (secure)
Data Collection (Ping)	Data Collectors (CUG)	Managed Devices (All)	ICMP
(bidirectional: echo / reply)
Data Collection (Database API)	Data Collectors (CUG)	Managed Devices (Databases)	TCP	DB/Listener Port
Data Collection (Port Availability, URL monitoring, or other API)	Data Collectors (CUG)	Managed Devices (with the port to be monitored)	TCP	Port to be monitored
				
Authentication	Data Collectors (CUG)	Domain Controller(s)	UDP (and TCP)	88 (Kerberos)
Name Resolution	Data Collectors (CUG)	DNS	UDP (and TCP)	53
Clock Synchronization	Data Collectors (CUG)	NTP Server(s)	UDP	123
				
Event Forwarding	Data Collectors (CUG)	MEaaS_Probes/SL1 Proxy	TCP	8443
				
PhoneHome 
(Model: SL1 ISPW Shared)	Data Collectors (CUG)	MEaaS_Probes/SL1 Proxy (ISPW DRES)	TCP	22 (SSH)
PhoneHome 
(Model: SL1 ISPW Dedicated)	Data Collectors (CUG)	SL1 DB (ISPW)	TCP	7705 (SSH)
PhoneHome 
(Model: SL1 SaaS Directly)	Data Collectors (CUG)	SL1 DB (Saas AWS)	TCP	7705 (SSH)
PhoneHome 
(Model: SL1 SaaS Via Proxy)	Data Collectors (CUG)	Proxy
(SSH forward)	TCP	22 (SSH)
PhoneHome 
(Model: SL1 SaaS Via Proxy)	Proxy
(to reach internet)	SL1 DB (Saas)	TCP	7705 (SSH)
				
SNMP Traps	Storage or Other SNMP Trap Source	SNMP Probes
or
Message/Data Collector	UDP	162
Table 7: Firewall Rules
8.3.2	Backup & Recovery
The on-prem SL1 collectors are used for forwarding the monitored events to SL1 servers in IBM Cloud.  The collectors do not store any data long-term and push the collected data to SL1 database frequently and all the configuration of collectors are stored in the SL1 systems.  The collectors are deployed for high availability and if one collector is unavailable then the rest of the collectors in that specific CUG would still handle the workload allowing the damaged collector to be rebuilt. 
In case of any failure, the collector will be rebuilt, either from standard backups or via a fresh install and will be added to the proper CUG.  Once the new collector is added to the CUG, the configuration will be pushed from the SL1 systems automatically.
The M&EaaS team will not access the collectors deployed in <account> network. If any malfunction happens on the appliance, it will be visible on the SL1 portal and the M&EaaS team will be notified.  The M&EaaS team will be doing basic troubleshooting like checking the port status, rebooting the appliance etc.  If any major issue occurs the appliance, it will be redeployed and will be reconfigured by M&EaaS team.


 
### 8.3.3	Monitoring 
The power pack documentation contains the details of the monitoring for each technology. The Power Pack documentation for various technologies is available on SL1 web site & publisher page:

ScienceLogic Support Page: https://support.sciencelogic.com/s/powerpacks#sort=relevancy
Vendor Specific Monitoring: https://docs.sciencelogic.com/latest/Content/Web_Vendor_Specific_Monitoring/Section_9_Vendor_Specific_Monitoring.htm?tocpath=PowerPacks%7C_____0
IBM Internal PP: https://w3.ibm.com/ocean/w3publisher/sciencelogic-for-ibm-services/powerpacks/ibm-internal
## 9.0	Appendix

## 10.0	Reference 
