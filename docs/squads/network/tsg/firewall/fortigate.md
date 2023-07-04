---
template: overrides/main.html
title: Getting started
---

## 1. Introduction

### 1.1 Node Down Incident

Description:                                                 
When a node or device is down or unreachable via remote monitoring

Sample Incident:                                             
[ seclfg370001 3/2/2020 3:21 PM City = $Clichy DC NodeName=SECLFG370001.cloudfabric.intraxa IP 172.16.154.116. Alert Node is Down and not reachable Severity=5 Attention commas replaced by dots. ]

Steps to follow:

1.	Validate whether or not the suspected device is a network device from latest SESDR.                      
Login to Jump Server and do a SSH or HTTPS to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate option (CLI command or GUI menu) check the up-time of the device and validate the node-down alert, whether or not Genuine based on how long has the device been up!
3.	Update the ticket logs with appropriate status report or artifacts after this initial validation.
4.	If the device found to be UP since ever, then alert is a False alert, then keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then can be closed if no further alerts received.
5.	If the alert is a Genuine alert and the device is found to be Down or unreachable.. follow necessary troubleshooting steps and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers) while handling any high priority P1/P2 tickets especially high utilization alerts

Checking UP-TIME on FortiGate Firewall:
    ![Node Uptime](assets/images/FG Node Uptime.png)


### 1.2 CPU High-Utilization Incident

Description:                                                  
When the average CPU usage increases beyond its accepted threshold level : 70% warning level and 85% critial level


Steps to follow:

1.	Validate whether or not the suspected device is a network device from latest SESDR.                   
Login to Jump Server and do a SSH to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate CLI command check the current CPU utilization on the device.
3.	Update the ticket logs with the findings and artifacts after this initial validation.
4.	If the actual CPU utilization is found to be normal during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received.
5.	If the actual CPU utilization is found or was found to be high during the problem-period beyond the accepted threshold.. then the alert is considered a Genuine alert and follow necessary troubleshooting steps  and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers ) while handling any high priority P1/P2 tickets especially high utilization alerts.


Checking CPU Utilization on FortiGate Firewall:
   ![CPU Usage Status](assets/images/FG CPU Usage Status.png)


### 1.3 Memory High-Utilization Incident

Description:                                                  
When the average Memory usage increases beyond its accepted threshold level : 70% warning level and 85% critial level


Steps to follow: 

1.	Validate whether or not the suspected device is a network device from latest SESDR.                   
Login to Jump Server and do a SSH to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate CLI command check the current memory utilization on the device.
3.	Update the ticket logs with the findings and artifacts after this initial validation of the alert.
4.	If the actual memory utilization is found to be normal during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received.
5.	If the actual memory utilization is found or was found to be high during the problem-period beyond the accepted threshold.. then the alert is considered a Genuine alert and follow necessary troubleshooting steps  and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers ) while handling any high priority P1/P2 tickets especially high utilization alerts.


Checking Memory Utilization on FortiGate Firewall:
  ![Memory Usage Status](assets/images/FG Memory Usage Status.png)


### 1.4 Node Reboot Incident

Description:                                                  
Whenever a node reboots, it generates an alert which needs to be verified manually to ascertain whether the event was part of a planned activity or an unplanned activity.

Sample incident:                                             
[ 5/14/2022 9:18 PM City = $Koln DC NodeName=NEKOFG370001.cloudfabric.intraxa IP ${N=SwisEntity;M=Node.IP_Address}. Alert Node reboot Severity=3 Attention commas replaced by dots. ]


Steps to follow:

1. Validate whether or not the suspected device is a network device from latest SESDR.            
Login to Jump Server and do a SSH or HTTPS to the suspected device and login to the device using a valid login username/password.
2. Using appropriate CLI command or GUI menu check the current up-time on the device.
3. Update the ticket logs with the findings and artifacts after this initial validation of the alert
4. If the current up-time is not found to be recent during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received
5. If the current up-time is found or was found to be during the problem-period, then the alert is considered a Genuine alert.
Check for an ongoing change-activity involving device reboot tasks by Network team. If no change activity found then update the ticket logs with appropriate comments and escalate to next level support within specified SLA period, for further investigation.


Checking Last Reboot time of FortiGate Firewall:
    ![Last Reboot Time](assets/images/FG Node Last Reboot.png)


### 1.5 IP Filtering rule manual modification request 

Description:                                                  
Due to either an unsupported feature or any other technical reasons related to BAW/AXALIS portal or AXALIS database, an end-user may sometimes raise a Service-Request for manual creation/deletion/modification of configuration of an existing or new VIP on F5 LB.  

Sample Request:                                              

Network: manual IP Filtering request
    ![VIP Mod Request](assets/images/VIP Mod Request.png)


Steps to follow:

If a service request is received from AXA user, please follow below steps to make an initial analysis of the request parameters before proceeding for change implementation..

1. Validate user request template for must-have details, e.g. requester name/email, source/destination IP address, service port number.. if anything missing, revert back to the requester asking for missing details.
2. Upon successful validation of the manual configuration request in above step, then proceed to assess and prepare a change plan based on request template.
3. Follow change process guidelines to raise a Normal or Standard change, as appropriate, and then get the change ticket peer-reviewed, CAB reviewed and submit for approval..
4. After successful completion of the change request, send out appropriate communication to the change requester.

[ IMPORTANT NOTE ]                                           
All manual configuration requests related to IP Filtering modification, must be raised as Service Request(SR), instead as an Incident(IN) and if a manual configuration request received as an Incident(IN), please update the below statement in the ticket and transfer the ticket back to AXA queue in Service Now.

“ For any LB manual configurations requests, please use 'Private IaaS -Load Balance Rules' product in AXA Silva. These requests will not be handled under Incidents any more. 
Please reach out to regional SDMs or cloud brokers for support”


### 1.6 Hardware-components (e.g Power-supply, Fan-tray, Temperature) Monitoring Incident

Description:                                                  
When a power-supply module or Fan tray goes down. When current operating temperature on the device goes up beyond accepted threshold


Steps to follow:

1. Validate whether or not the suspected device is a network device from latest SESDR.            
Login to Jump Server and do a SSH or HTTPS to the suspected device 
2. Using appropriate CLI command or GUI menu check the status of the suspected component on the device as reported.
3. Update the ticket logs with the findings and artifacts after this initial validation of the alert
4. If the specific hardware component is not found to be faulty during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received
5. If the specific hardware component (power-supply, FAN, temperature) is found or was found to be faulty during the problem-period, then the alert is considered a Genuine alert.
6. If a Power-supply module or Fan module found to be faulty, raise a TSS onsite CE assist ticket for physical investigation of the faulty component and its replacement, if required so. 
7. If a replacement part required, TSS team will do the needful to coordinate with the Vendor and replace the faulty component.
8. When the faulty component comes back up, update the ticket logs with appropriate comments and close the ticket. For any other issue, escalate to next level support within specified SLA period, for further investigation.


Checking Power-supply / Temperature Status on FortiGate Firewall:
  ![PSU Status](assets/images/FG PSU Status.png)
  ![Temperature Status](assets/images/FG Temperature Status.png)


