---
template: overrides/main.html
title: Getting started
---

## 1. Introduction

### 1.1 Node Down Incident

Description:                                                 
When a node or device is down or unreachable via remote monitoring

Sample Incident:                                             
[ seclg8272t1 2/17/2020 3:07 PM City = $ NodeName=SECLG8272T1.cloudfabric.intrsre IP 172.16.153.5. Alert Node is Down and not reachable Severity=5 Attention commas replaced by dots. ]

Steps to follow:

1.	Validate whether or not the suspected device is a network device from latest SESDR.                      
Login to Jump Server and do a SSH or HTTPS to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate option (CLI command or GUI menu) check the up-time of the device and validate the node-down alert, whether or not Genuine based on how long has the device been up!
3.	Update the ticket logs with appropriate status report or artifacts after this initial validation.
4.	If the device found to be UP since ever, then alert is a False alert, then keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then can be closed if no further alerts received.
5.	If the alert is a Genuine alert and the device is found to be Down or unreachable.. follow necessary troubleshooting steps and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers) while handling any high priority P1/P2 tickets especially high utilization alerts

Checking UP-TIME on Lenovo Switches:
    ![Node Uptime](assets/images/Lenovo Node Uptime.png)


### 1.2 Interface Down Incident

Description:                                                  
When an active Interface goes DOWN and the uplink/downlink connection breaks.

Sample Incident:                                             
[ seclg827201 9/11/2019 9:24 PM Interface Port-Channel79 for NodeName=SECLG827201.cloudfabric.intrsre IP 172.16.153.1, interface status is Unknown Severity=3 ]

Steps to follow:

1.	Validate whether or not the suspected device is a network device from latest SESDR.                      
Login to Jump Server and do a SSH or HTTPS to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate CLI command or GUI menu, check the current status of the suspected Interface on the suspected device.
3.	Update the ticket logs with the findings and artifacts after this initial validation of the alert.
4.	If the Interface found to be UP since ever, then the alert is a False alert, then keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then can be closed if no further alerts received.
5.	If the Interface found to be Down currently or in recent past during the problem-period then the alert is a Genuine alert.. follow necessary troubleshooting steps and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers ) while handling any high priority P1/P2 tickets especially high utilization alerts.

Checking Interface status on Lenovo Switches:
    ![Interface Status](assets/images/Lenovo Interface UP_DOWN Status.png)



### 1.3 CPU High-Utilization Incident

Description:                                                  
When the average CPU usage increases beyond its accepted threshold level : 70% warning level and 85% critial level


Steps to follow:

1.	Validate whether or not the suspected device is a network device from latest SESDR.                   
Login to Jump Server and do a SSH to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate CLI command check the current CPU utilization on the device.
3.	Update the ticket logs with the findings and artifacts after this initial validation.
4.	If the actual CPU utilization is found to be normal during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received.
5.	If the actual CPU utilization is found or was found to be high during the problem-period beyond the accepted threshold.. then the alert is considered a Genuine alert and follow necessary troubleshooting steps  and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers ) while handling any high priority P1/P2 tickets especially high utilization alerts.


Checking CPU Utilization on Lenovo Switches:
   ![CPU Usage Status](assets/images/Lenovo CPU Usage Status.png)



### 1.4 Memory High-Utilization Incident

Description:                                                  
When the average Memory usage increases beyond its accepted threshold level : 70% warning level and 85% critial level



Steps to follow: 

1.	Validate whether or not the suspected device is a network device from latest SESDR.                   
Login to Jump Server and do a SSH to the suspected device and login to the device using a valid login username/password.
2.	Using appropriate CLI command check the current memory utilization on the device.
3.	Update the ticket logs with the findings and artifacts after this initial validation of the alert.
4.	If the actual memory utilization is found to be normal during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received.
5.	If the actual memory utilization is found or was found to be high during the problem-period beyond the accepted threshold.. then the alert is considered a Genuine alert and follow necessary troubleshooting steps  and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers ) while handling any high priority P1/P2 tickets especially high utilization alerts.


Checking Memory Utilization on Lenovo Switches:
  ![Memory Usage Status](assets/images/Lenovo Memory Usage Status.png)



### 1.5 Interface High-Utilization Incident

Description:                                                  
[Type-1] When the average Rx utilization on an Interface increases beyond its accepted threshold level : 70% Warning level and 85% Critical level

[Type-2] When the average Tx utilization on an Interface increases beyond its accepted threshold level : 70% Warning level and 85% Critical level

Sample Incident:                                             

[ 6/20/2022 4:38 AM City = NodeName=SELOG827202.cloudfabric.intrsre IP 172.16.153.4 Interface Ethernet25 ? LO_LEAF2 int e1/27 (CISCO VPC PVLAN_SWITCH / LACP KEY 300) has a Transmitted utilization of 88 which is greater than the threshold of 80% Severity=4  ]  
[Tx utilization]


Steps to follow: 

1. Validate whether or not the suspected device is a network device from latest SESDR.
Login to Jump Server and do a SSH or HTTPS to the suspected device and login to the device using a valid login username/password.
2. Using appropriate CLI command or GUI menu check the current interface utilization on the device.
3. Update the ticket logs with the findings and artifacts after this initial validation of the alert
4. If the actual interface utilization is found to be normal during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received
5. If the actual interface utilization is found or was found to be high beyond the accepted threshold during the problem-period.. then the alert is considered a Genuine alert and follow necessary troubleshooting steps  and manager on duty to immediately trigger the escalation matrix and coordination with all relevant stakeholders (platform teams, duty managers ) while handling any high priority P1/P2 tickets especially high utilization alerts.


Checking Interface Utilization on Lenovo Switches:
  ![Interface Usage Status](assets/images/Lenovo Interface Usage Status.png)



### 1.6 Node Reboot Incident

Description:                                                  
Whenever a node reboots, it generates an alert which needs to be verified manually to ascertain whether the event was part of a planned activity or an unplanned activity.

Sample incident:                                             
[ seclg8272t2 1/14/2020 2:05 PM City = $ NodeName=SECLG8272T2.cloudfabric.intrsre IP ${N=SwisEntity;M=Node.IP_Address}, Alert Node reboot Severity=3 ]


Steps to follow:

1. Validate whether or not the suspected device is a network device from latest SESDR.            
Login to Jump Server and do a SSH or HTTPS to the suspected device and login to the device using a valid login username/password.
2. Using appropriate CLI command or GUI menu check the current up-time on the device.
3. Update the ticket logs with the findings and artifacts after this initial validation of the alert
4. If the current up-time is not found to be recent during the problem-period then alert is a False alert, keep it monitoring for an hour or so in SLA-HOLD with appropriate justification comments in the ticket and then close the ticket if no further alerts received
5. If the current up-time is found or was found to be during the problem-period, then the alert is considered a Genuine alert.
Check for an ongoing change-activity involving device reboot tasks by Network team. If no change activity found then update the ticket logs with appropriate comments and escalate to next level support within specified SLA period, for further investigation.


Checking Last Reboot time of Lenovo Switch:
    ![Last Reboot Time](assets/images/Lenovo Last Reboot Time.png)



### 1.7 Hardware-components (e.g Power-supply, Fan-tray, Temperature) Monitoring Incident

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


Checking Power-supply / Temperature Status on Lenovo Switches:
  ![PSU Status](assets/images/Lenovo PSU & Fan Status.png)
  



