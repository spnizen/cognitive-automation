---
template: overrides/main.html
title: Getting started
---



## 1. Introduction
### 1.1 IBM Secure Gateway Maintenance & Operations Guide
This document outlines any day to day, periodic and scheduled tasks what needs to be performed 
for operating and proper maintenance of the Gateways, Clients, Destinations and Certificates if any 
along with any other associated items as part of the IBM Secure Gateway Server Instance Service 
hosted on the IBM Cloud and the IBM Secure Gateway Client installed and setup on the customer 
environment.  

**Note**: A Secure Gateway Service Instance for SIA is already created and enabled on the IBM Cloud.
### 1.2 Understanding the Secure Gateway Service Plans
Please verify the service plan subscribed, there are three Service Plans available as listed below:
1. Essentials -
2. Professional -
3. Enterprise -
Based on the Service Plan subscribed the Secure Gateway can be scaled to meet the needs of the 
company.
### 1.3 Creating the first Gateway or adding additional Gateway’s 
The DevOps team can create the first Gateway and also add additional Gateway’s using the IBM Cloud 
Console based on the IBM Secure Gateway Plan Level subscribed by the Customer.
### 1.4 Adding a Destination or adding additional Destinations to a Gateway 
The DevOps team can add a Destination and also add additional Destination’s and configure it with the 
Resource Hostname and Port details along with any Self-Signed Certificates for a specific Gateway 
and the associated Client what is installed.
### 1.5 Managing your Secure Gateway Client using the Client UI
The Customer team with RHEL Admin access can run the Secure Gateway Client shell scripts to start, 
restart and stop client and manage the Secure Gateway Client using the Client UI.

## 2. Pre-requisite Requirements
### 2.1 The Secure Gateway Service should be created on the IBM Cloud
The Secure Gateway Service should be existing on the IBM Cloud for the SIA Account and this should 
be in the enabled state.
### 2.2 IBM Cloud User Access for SIA Account
The DevOps identified team member should have the IBM Cloud User Access for administering and 
managing the Secure Gateway Service.
### 2.3 SIA System Admin or Root Access to run the Client UI
The SIA identified team member should have the System Admin or Root Access for administering and 
managing the Secure Gateway Client
### 2.4 The SIA Secure Gateway Client must be installed successfully
The SIA team should have successfully completed the installation of the Secure Gateway Client on their 
RHEL.
### 2.5 SIA to allow outbound traffic to Gateway Node’s added
The SIA team should seek the necessary security approval to enable flow of outbound network traffic for 
the hostname’s and ports of the Gateway Node’s as and when the IBM DevOps team adds and shares 
the information via email with the associated Gateway ID and Security Token. 
Note: Please refer to section#2.2.1 of the SIA - IBM Secure Gateway Client Installation and Setup 
Guide_Version_1.2 for information pertaining to the ports and the hostnames which need outbound 
traffic enabled from SIA.

## 3. Managing your Secure Gateway Service on the IBM Cloud
### 3.1 IBM Cloud Dashboard
Login to the IBM Cloud Console using the valid credentials and once successfully authenticated the 
IBM cloud Dashboard is displayed. Please see the IBM Cloud Dashboard Screen Shot below giving a 
high level view of various resources: 
Click on the item: ”Cloud Foundry Services” and this will expand the and show all the Resources
listed under the Resource Summary group as shown in the Screen Shot below:
Click and select the item: “Secure Gateway-XX” and this will display the Dashboard page for the 
selected Secure Gateway. Please see section 3.2 for the Main Secure Gateway Dashboard.
### 3.2 Main Secure Gateway Dashboard
The below Screen Shot shows the Secure Gateway Dashboard wherein there are no gateways 
created yet: 

While at the Secure Gateway Dashboard the user can perform the following actions:
1. Navigate to Plan page to View or Change Current Subscribed Plan 
2. View the current Service Plan on the Dashboard
3. Add/Create a Gateway
### 3.3 Navigate to Plan Page to View or Change Current Subscribed Plan
Click the Menu Item: ”Plan” from the Left Navigation Menu to view the current subscribed plan or change 
to another plan based on the usage and scalability requirements as shown in the following screen shot:
IBM Secure Gateway Client Maintenance & Operations Guide V1.0
IBM Confidential – For SIA Use Only
06-10-2020 Last Saved: 2020-11-04 Page 9 of 38
### 3.4 Service Profile - View the current Service Plan on the Dashboard
Click the Icon: visible next to the title: “Secure Gateway Dashboard” and this will hover show the 
Service Level details currently subscribed see the following screen shot:
Field Description
Plan Level Your currently selected service plan.
Gateway Limit The number of gateways you can have before being charged for extra gateways.
Client Limit The number of clients you can connect to any single gateway.
Destination Limit The number of destinations any single gateway can contain.
Data Limit The amount of data transfer (in GB) that your plan supports before being charged for a data overage.
Gateway Overages The current number of gateway overages you are being charged for.
Data Overages The number of data overages incurred for the current month's billing cycle.
### 3.5 Add/Create a Gateway or Add Additional Gateway’s
Click the button: “Add Gateway” and this will display the popup to input the name of a Gateway, provide 
a Gateway name and based on the inputs provided by SIA make the necessary changes for two 
checkboxes and click on the button: “Add Gateway” as shown in the screen shot below:
Important: The IBM DevOps team to get the number of days from SIA based on SIA Security Policy and 
set the “Token Expiration days” as share by SIA. The DevOps Team will also need to share the schedule as when the new Security Token will be regenerated and shared with SIA as part of the periodic maintenance scheduled activity post Go Live.

The Gateway will be added and the user is navigated to the Dashboard view of the added Gateway. 
See section 3.5.1.
#### 3.5.1 Dashboard for the Added/Selected Gateway 
The screen shot below shows the Dashboard view for the newly added Gateway. As there are no 
Clients and Destinations added the count on the two tabs:”Destinations” and “Clients” below the 
graph shows as zero. 
The DevOps team can perform the following actions:
1. Launch the Gateway Info Panel to view the settings of the Gateway
2. Connect a Client
3. View Connected Clients
4. Add a Destination
5. Navigate back to the Main Secure Dashboard 

##### 3.5.1.1 Launch the Gateway Info Panel to View Settings of the Gateway
The setting of an added Gateway is displayed as a Gateway Info Panel popup as shown below:
Node: The node your gateway has been created 
on. This is the hostname your client will connect 
to and the outbound traffic should be enabled for 
this hostname and the associated port.
Created at: When the gateway was created and 
the user who it was created by.
Last modified at: When the gateway was last 
modified and the user who it was modified by.
Security: A link to regenerate the certificate and 
key associated with the gateway. These files are 
only used with legacy destinations that do not 
contain their own certificate/key pair for mutual 
authentication on the client.
The above Gateway Info Panel popup also can be viewed while in the Top level Secure Gateway 
Dashboard view as mentioned and shown below:
1. By clicking on gear wheel icon or the Settings button from the tiled view of the displayed 
Gateway(s)
2. While in the dashboard view of Gateway as shown below:

While in the Gateway Info Panel popup of the Gateway the user has can perform the following actions:
1. View/Copy the Security Token of the Gateway
2. View/Copy the Gateway ID of the Gateway
3. View/Copy the hostname of the Node 
4. Edit the Gateway
5. Disable/Enable a Gateway
6. Delete a Gateway
##### 3.5.1.2 View/Copy the Security Token of the Gateway
The security token is required to connect a client, depending on whether the token is being enforced on 
client connections or not. By default this is enabled and the default expiration number of days is set to 90 
days or the number of days as defined by SIA after which the a new Security Token will/should be 
generated and shared by the DevOps team to SIA as without which the SG Client will not be able to 
establish a connection.
Important: The IBM DevOps team to share the Security Token for the specific Gateway along with the 
future date as when the new Security Token will be shared based on the expiration days set.
Note: DevOps to create a GIT task for renewal of Security Token.
##### 3.5.1.3 View/Copy the Gateway ID of the Gateway
The Gateway ID is required and is used in conjunction with Security Token for the SG Client to connect 
with the Gateway in multiple ways as listed below:

1. Interacting through terminal command line prior to startup
2. Managing after startup, using the client's interactive command line (CLI)
3. Managing after startup, using the client's local UI via browser
Please refer to section#4.5 of the SIA - IBM Secure Gateway Client Installation and Setup 
Guide_Version_1.2 for detailed instructions.
Important: The IBM DevOps team will have to share the Gateway ID for the specific Gateway along 
with Security Token as these two details are key for SG Client to establish a connection with the 
Gateway along with the hostname of the Gateway Node – see section#3.5.1.4.
##### 3.5.1.4 View/Copy the hostname of the Gateway Node
View/Copy the hostname of the Gateway Node and share this with SIA.
Important: IBM DevOps team to share the hostname with SIA to so as to ensure and check or seek the 
necessary approvals to modify any firewall and/or internet filters to allow outbound traffic for this 
hostname and the associated port. Please Refer to section#2.2.1 of the SIA - IBM Secure Gateway 
Client Installation and Setup Guide_Version_1.2 document as this is the Gateway node to which a SG 
Client will establish a connection.
##### 3.5.1.5 Edit the current Gateway
The following field elements can be edited:
• Gateway Name
• Gateway Options
• Regenerate Sect
• Security Token

##### 3.5.1.6 Disable/Enable the Gateway
Click the button:”Enable” to Enable a 
Gateway 
Click the button:” Disable” to disable a 
Gateway
##### 3.5.1.7 Delete the Gateway
Note: The Gateway(s) can also be deleted as explained in section# 3.6.6.
Click on the button: ”Delete” while in the Gateway Info Panel and this will display a popup to 
confirm – click on the button: ”Delete” to delete the Gateway. The Gateway will be deleted and will 
not be visible in the tiled Gateways view.

#### 3.5.2 Connect a Client
Click on the button: “Connect Client” and this will bring up Info Panel popup as shown below:

Choose the Installer option to first download the Secure Gateway installer and then proceed with 
the installation instructions as provided in the SIA - IBM Secure Gateway Client Installation and 
Setup Guide_Version_1.2 document and complete the installation of the client.
#### 3.5.3 View Connected Clients
The Connected Clients can be viewed as a tile under the tab:”Clients” in the Dashboard view of the 
Gateway as shown below:
The user can perform the following actions:
1. Perform the Round-trip test
2. Terminate the Client

##### 3.5.3.1 Perform the Round-trip test
##### 3.5.3.2 Terminate the Remote Client
Click on the redCrossButton shown on the Client tile to terminate the client for the current Gateway,
#### 3.5.4 Adding Destinations to a Gateway
Click on the tab: “Destinations” while in the Dashboard view of the Gateway and this displays the
button:”Add Destination” along with other user actions as listed below:
1. Add a Destination to a Gateway
2. Manage Activity for added Destinations
3. Delete Destination(s)
4. Import an exported Destination or configuration JSON file
See the screen shot below:
On clicking the button: ”Add Destination” the popup: “Add Destination Panel” is displayed 
prompting the user to select any one of the with two options:

##### 3.5.4.1 Select the location of the resource
Select the option: “On-Premises” and click on the arrowButton: “next” and this will display the next 
pane of the popup: “Add Destination Panel” as shown below:
##### 3.5.4.2 Select the Resource Hostname and Port
Input the hostname and the port and click on the arrowButton: “next” and this will display the next 
pane prompting the user with options to select the required protocol for the User/Application to 
connect to the Destination, as shown in the screen shot below:

##### 3.5.4.3 Select the Protocol for the User/Application to connect to the Destination
Select the option:”TLS: Mutual Auth” from the dropdown list and click on the arrowButton: “next” 
and this will display the next pane prompting the user with options to select the required
authentication to be enforced on the destination, as shown in the screen shot below:
##### 3.5.4.4 Select the required authentication to be enforced on the destination
Select the option:”Mutual Auth” from the dropdown list and click on the button: ”UPLOAD 
CERTIFICATES” and choose the certificate shared by SIA. Click on the arrowButton: “next” and then 
this will display the next pane prompting the user input the required IP Addresses and the Ports to
make the destination private using the IP Table rules, the user has an option to add more than one 
IP address and Port, as shown in the screen shot below:

##### 3.5.4.5 Input the required IP Addresses and the Ports to make the destination private
Input the required IP Addresses and Ports and click on the imageButton:”+” and this will add a new 
row above the current textboxes. Click on the arrowButton: “next” and this will display the next 
pane prompting the user input a name for destination that is being added/created as shown in the 
screen shot below:
##### 3.5.4.6 Input a name for the destination that is being added/created 
Input a name which identifies the destination being created for and click on the button:”Add 
Destination” and this adds/creates the Destination and will is visible as a tile under the 
tab:”Destinations” next to the multifunction buttons as shown below:

#### 3.5.5 Dashboard view of a Gateway after a Destination is added:
This completes the adding of a Destination for a Gateway. Now the user can also perfrom the 
following actions other than the four actions already mention:
1. Destination Info Panel – to view the setting of a Destionation
2. Download the Destination as a JSON file.
##### 3.5.5.1 Manage Activities for Destinations Added
Click on the wrench/spanner button and this will display all the Active/Inactive Destinations. Click on the 
arrowButton against each Destination listed under Active Destinations and this will move the Destination 
into the Inactive Destination list making the Destination Inactive and to make a Destination Active click 
on the arrowButton against each Destination listed under Inactive Destinations and this will move the 
Destination into the Active Destination list making the Destination Active.
##### 3.5.5.2 Delete Destination(s)
Click on the trash can button and this will display all the Destinations. Click and select the checkbox 
against each Destination listed or click on the button: ”Select All” to select all the Destinations and 
clicking on button: ”Delete Selected” to delete the selected Destination(s).
3.5.5.3 Import an exported Destination or configuration JSON file

##### 3.5.5.4 Destination Info Panel - View Settings of the Destination
The setting of a Destination is displayed as a Destination Info Panel popup as shown below:
While in the Destination Info Panel popup of the Destination the user has can perform the following 
actions:
7. View/Copy the Cloud Host - Port
8. Edit the Destination
9. Disable/Enable a Destination
10. Delete a Destination
###### 3.5.5.4.1 View/Copy the Cloud Host - Port of the Destination
The security token is required to connect a client, depending on whether the token is being enforced on 
client connections
###### 3.5.5.4.2 Edit the current Destination
The following field elements can be edited:
• Destination Name
###### 3.5.5.4.3 Disable/Enable the Gateway
Click on the button: ”Disable” to disable a Destination and click on the button: ”Enable” to enable a 
Destination.
###### 3.5.5.4.4 Delete the Destination
Note: The Destination(s) can also be deleted as explained in section# 3.6.3.2
Click on the button: ”Delete” while in the Destination Info Panel and this will display a popup to 
confirm – click on the button: ”Delete” to delete the Destination. The Destination will be deleted 
and will not be visible in the tiled Destination’s view.

#### 3.5.6 Navigate back to the Main Secure Dashboard 
While in the Dashboard view of a Gateway click the back arrow icon before the Gateway name and this
will navigate the user back to the Main Secure Gateway Dashboard and display the tiled view of
Gateways added next to the button: “Add Gateway” as shown in the screen shot below:
The Main Secure Gateway Dashboard displays all the Gateways added and shows the status 
Enabled or Disabled for each Gateway and also shows the number of Destinations created for each 
Gateway. 
In addition to the actions already defined in sections 3.1.2.1 thru 3.1.2.3 the user can also perform these 
below listed actions on each Gateway:
1. View the settings of a Gateway - Gateway Info Panel
2. Download the Gateway configuration details as a JSON file
There are additional actions also displayed on the Add Gateway Button as shown below:
These actions are:
1. Manage Activities
2. Delete Gateways
3. Import an exported Gateway or Configuration file

#### 3.5.7 Manage Activities
Click on the wrench/spanner button and this will display all the Active/Inactive Gateways. Click on the 
arrowButton against each Gateway listed under Active Gateways and this will move the Gateway into 
the Inactive Gateway list making the Gateway Inactive and to make a Gateway Active click on the 
arrowButton against each Gateway listed under Inactive Gateways and this will move the Gateway into 
the Active Gateway list making the Gateway Active.
3.5.8 Deleting Gateway(s)
Click on the trash can button and this will display all the Gateways. Click and select the checkbox 
against each Gateway listed or click on the button: ”Select All” to select all the Gateways and clicking on 
button: ”Delete Selected” to delete the selected Gateways.
#### 3.5.9 Import an exported Gateway or Configuration file

#### 3.5.10 Download the Gateway configuration details as a JSON file
Click on the download icon shown next to the gear wheel icon of the displayed Gateway while in the tiled 
Gateway view as shown in the screen shot above. This will download the file on to the local drive.
Sample structure of the JSON file is as shown below:
{"desc":"SIAStagingGW_01","enf_tok_sec":true,"destinations":[]}

4. Managing the Secure Gateway Client
There are multiple ways to interact with the SG Client as listed below:
1. Interacting through terminal command line prior to startup
2. Managing after startup, using the client's interactive command line (CLI)
3. Managing after startup, using the client's local UI via browser
4.1 Interacting through terminal command line prior to startup
The following parameters and arguments can be provided alongside the startup command for the client 
thereby allowing the required configuration of the client prior to startup rather than requiring individual 
setup once the client is running using the client's interactive command line as mention in section#4.5.2.
Parameter and Arguments Description
<gateway ID> Connect to IBM Cloud by using the gateway ID that is provided
-F, --aclfile <file> Access control List file
-g, --gateway 
<hostname:port>
Used to manually select a specific gateway destination (advanced use 
only)
-l, --loglevel <level> Change the log level to ERROR, INFO, DEBUG or TRACE
-p, --logpath <file> Direct logging to a specific file
-t, --sectoken <security token> The security token to use for this gateway connection
-P, --port <port> The port for the UI to run on. Defaults to port 9003
-w, --password <password> The password to protect the UI with. Defaults to no password
-x, --proxy <proxy agent> The proxy for the port 9000 connection
--noUI Prevent the UI from starting up automatically
--allow Allows all connections to the client. Is overridden by the ACL file, if 
provided
--service After an initial connection, the parent will restart within 60s if all child clients 
are terminated
Note: --service, --allow, and --noUI flags should be the last parameters in the command line 
arguments.

#### 4.1.1 Single client connection, custom log level, no UI:
node lib/secgwclient.js <gateway_id> -t <security_token> -l <loglevel> --noUI
#### 4.1.2 Multiple client connections, default options:
node lib/secgwclient.js <gateway_id_1> <gateway_id_2> -t <security_token_1>--
<security_token_2>
#### 4.1.3 Multiple client connections, all custom settings:
node lib/secgwclient.js <myGatewayID_1> <myGatewayID_2> -t none--<token for
gateway 2> -l DEBUG--TRACE -p <full path to log file for gateway 1>--<full path
to log file for gateway 2> -F <full path to ACL file for gateway 1>

### 4.2 Managing after startup, using the client's interactive command line (CLI)
The Secure Gateway client has a command line interface (cli) and shell prompt for easy configuration 
and control. The interactive environment has many more capabilities than the command line arguments 
to facilitate better interactive control over the client. The commands can only be executed once the SC 
Client is successfully established a connection with the Gateway and the SG Client CLI prompt is 
displayed as shown in the screen shot below:
#### 4.2.1 Display Gateway Configuration details using SG Client CLI command
While at the CLI command prompt type uppercase “C” and this will display the current Gateway 
configuration details as shown in the screenshot below:
#### 4.2.2 Display all SG Client CLI commands using the help command
While at the CLI command prompt type “help” and hit the “Enter” key and this will display all the SG
Client CLI commands and please be aware these are case sensitive as shown in the screenshot below:

#### 4.2.3 Setup an ACL rules using SG Client CLI command
To execute an ACL command to allow access to the on-premise resource, while at the SG Client CLI 
command prompt type “A <Resource Hostname>:<Port>” or “acl allow <Resource 
Hostname>:<Port>” and hit the “Enter” key and this will allow access to specified on-premise resource.

Usage Example: Here is an ACL example to allow access to the on-premise ServiceNow”. The below 
command needs to be executed at the SG Client prompt:
SG Client ID Prompt>acl allow snowdev.country.companyid:443 
The same can also be executed as shown below:
SG Client ID Prompt>A snowdev.country.companyid:443
For more details on ACL please see section#5 of this document.
4.2.4 SG Client CLI command list
The below table lists all commands that be executed at the SG Client CLI command prompt only:
Interactive Commands Description
```
A, acl allow <hostname:port> <worker ID> Access control list allow
D, acl deny <hostname:port> <worker ID> Access control list deny
N, no acl <hostname:port> <worker ID> Remove an access control list entry
S, show acl <worker ID> Show all access control list entries
F, acl file <file> <worker ID> Access control List file
C, displayconfig <worker ID> Display the current Secure Gateway configuration, if available
a, authorize <worker ID> Toggle the override of the reject unauthorized parameter for 
outbound TLS connections for the specified worker
t, sectoken <security token> The security token to use for the next gateway connection
c, connect <gateway ID> Connect to IBM Cloud by using the gateway ID that is provided
l, loglevel <level> <worker ID> Change the log level to ERROR, INFO, DEBUG or TRACE
p, logpath <file> <worker ID> Direct logging to a specific file
r, reverse <worker ID> List the ports the client is currently listening on for reverse 
destinations
k, kill <worker ID> Terminate the specified worker
e, select <worker ID> Specifies a worker to perform commands on unless otherwise 
specified
d, deselect Deselects the previously specified worker. Issue select command 
to specify another
w, password <old password> <new 
password>
Set the UI password. If <new password> is blank, no password 
will be enforced. <old password> required on password update. 
Passwords must contain only letters
P, port <new port> Change the port that the UI is listening on
u, uistart <initial password> <port> Starts the UI on localhost:<port>/dashboard. If <initial password> 
is blank and no other password has been set for the session, no 
UI password will be enforced. If <port> is blank the UI will be 
reachable on 9003
U, uistop Closes the UI associated with this client session. The session will 
only be accessible via CLI until a new UI is manually started
R, revoke Clears all UI authorizations associated with this client session
q, quit Disconnect and exit
s, status <worker ID> Print the status details of the tunnel and its connections
L, list Displays a list of the currently associated workers
```
### 4.3 Managing after startup, using the client's local UI via a browser
Once the SG Client is up and running the Client UI - a web interface enabled for the users to interact 
with the Gateway’s created on the Secure Gateway Server Instance can be launched using this default 
URL localhost:9003/dashboard. The UI is organized to display Client/Gateway related information 
via the following listed pages:
1. Connect
2. Login
3. Dashboard
4. View Logs
5. Access Control List
6. Connection Info
#### 4.3.1 Connect
This is the initial landing page for the UI where a user can provide a gateway ID and security token to 
connect their first client.
#### 4.3.2 Login
This page will be displayed if the UI has been password protected. If this page is reached while no 
password is being enforced, please refresh the page to be redirected.
#### 4.3.3 Dashboard
Upon successful connection with the Gateway, the user is navigated to the dashboard which is like the 
main landing page and displays all the pertaining information and allows the user to navigate to the other 
pages such as the View Logs page, the Access Control List page, and the Connection Info page. On the 
top of the page, the currently selected client will be displayed, and there will be an option to connect 
additional clients.
#### 4.3.4 View Logs
This page will allow you to see the logs being generated by the selected client (shown in the upper right 
of the page). The displayed logs can be filtered by the check boxes below the logs.

#### 4.3.5 Access Control List
This page will allow you to manipulate the Access Control List for the selected client (shown in the upper 
right of the page). Rules can be individually added to the allow/deny tables or a file can be uploaded at 
the bottom of the page. Any ACL commands run using the CLI will also get listed here.

#### 4.3.6 Connection Info
This page will show the current connection information for the selected client (shown in the upper right of 
the page). Information such as gateway description, number of current connections, and reverse 
destination listeners can be seen here.
#### 4.3.7 Remote Client Termination
If a client has been provided an ID, then it can be remotely terminated via the SG UI. If you terminate a 
client that is running as a service, the client will restart and obtain a new client ID; however, if the service 
has multiple clients connected, the terminated client will not restart until all of the remaining clients have 
been terminated.
See Section# 3.6.2.2

## 5. Access Control List
The Secure Gateway client provides embedded Access Control List (ACL) support. You can allow or 
restrict (deny) access to on-premises resources by making modifications to the ACL for the client. This 
can be done interactively using the client commands or specifying a file that contains the ACLs you want 
to have in affect.
### 5.1 Access Control List commands
The supported ACL commands are:
acl allow [<hostname>]:[<port>]
acl deny [<hostname>]:[<port>]
no acl [<hostname>]:[<port>]
no acl
show acl
The forms where you have left out either a hostname or port this implies all hostnames or ports. For 
example, the following is an ACL rule to allow all hostnames for port 22.
acl allow :22
The following is another example ACL rule to allow all hostnames for all ports, essentially disabling ACL 
support. This is not recommended.
acl allow :
The show acl command will show the currently set ACL or provide a message on the overall setting.
### 5.2 HTTP/S Route Control using the ACL
The HTTP/S destinations for specific routes can be enforced using the ACL entries. This is similar to 
adding the typical ACL entries but ends with the path appended to the end of the rule. For example, the 
following will allow only requests following the /my/api path to pass through:
acl allow localhost:80/my/api
With this rule in place, requests to <cloud host>:<cloud port>/my/api* will be allowed through.
Routes are only supported on acl allow commands.
### 5.3 Access Control List Precedence
After providing an acl allow : command, if further acl allow commands are entered, 
the ALL:ALL allow rule (from acl allow :) will be removed from the list on the assumption that you 
no longer want to allow unbounded access. After providing an acl deny :command, if another acl
deny command is entered, the ALL:ALL deny rule (from acl deny :) will be removed from the list on 
the assumption that you no longer want to restrict all access. If you list your current ACL rules via 
the show acl command in the CLI, there will be an indicator to display whether unlisted rules are being 
allowed or denied.
### 5.4 Importing an ACL File
You can supply a filename to the acl file command that contains the supported ACL commands that 
will be read by the client upon startup. This file should have commands of the following format:
acl allow [<hostname>]:[<port>]
acl deny [<hostname>]:[<port>]
no acl [<hostname>]:[<port>]
no acl
Note: no acl without any other parameters RESETS the ACL table and sets the access to DENY ALL.
### 5.5 Sample ACL file.
```
# Lines preceded by a # will be ignored as a comment
# To allow specific port on a specific host:
# acl allow <hostname>:<port>
# To allow all ports on a specific host:
# acl allow <hostname>:
# To allow all hosts from a specific port:
# acl allow :<port>
# To allow all hosts and ports, use below command:
# acl allow :
# To deny specific port on a specific host:
# acl deny <hostname>:<port>
# To deny all ports on a specific host:
# acl deny <hostname>:
# To deny all hosts from a specific port:
# acl deny :<port>
# To deny all hosts and ports, use below command:
# acl deny :
```
## 6. Certificate and Key Management
### 6.1 Generating a self-signed certificate/key pair
To generate a self-signed certificate/key pair, run the following command:
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout
SIAServerKey.pem -out SIAServerCert.pem
### 6.2 Uploading a cert/key pair to the browser for self-signed Certificates
Note: This step needs to be performed only if self-signed certificates have been used.
To access a destination which enforces mutual authentication, you must convert your cert/key pair to a 
PKCS#12 file and upload it to your browser.
To create the PKCS#12 file, use the following command:
openssl pkcs12 -export -in <path_to_cert> -inkey <path_to_key> -name "my-SIA-sgpair" -out <path_to_write_to>.p12
In Firefox, the .p12 file can be uploaded to Options > Preferences > Advanced > Certificates > View 
Certificates > Your Certificates > Import
In Chrome, the .p12 file can be uploaded to Settings > HTTPS/SSL > Manage certificates > Import
In Internet Explorer, the .p12 file can be uploaded to Settings > Content > Certificates > Import

## 7. Appendix
### 7.1 Terminology
Term or Acronym Description
WSSwW Workplace Support Services with Watson
ASD Architecture Solution Document
SG Secure Gateway
### 7.2 Reference Documents
Source Location
SG Online documentation on IBM Cloud https://cloud.ibm.com/docs/services/SecureGateway?topic=securegatewaygetting-started-with-sg
SG other details from actual SG Dashboard Launch the dashboard using http://localhost:9003/dashboard