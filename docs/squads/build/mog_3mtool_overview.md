---
template: overrides/main.html
title: Getting started
---
#### 1.1 3M – What is it for ?

• 3M is a Web-based application

• It is designed to be an alternative support for any set of data usualy stored in a spreadsheet.

• It supports concurrent modifications with integrated, fine-grained security.

• Data can be used by tools developed on top of 3M.

• Provide an Open, extensible model with attributes and relationships.

![3MToolDataModel](../assets/images/3mtoolDataModel1.png)

• 3M dynamicaly creates views for data handling (create, read, update, delete).

![3MToolDataManagement](../assets/images/3mtoolDataManagement.png)

• Advanced search page allows search on multiple criteria.

![3M Tool Advance Search](../assets/images/3mtoolAdvanceSearch.png)

• Table reference allows more accurate data creation through constrained set of values.

![3M Tool Entity Management](../assets/images/EntityManagement.png)

• 3M checks for primary-key constraint, not-null constraint, [0..1] or [0..n] relationships 

• 3M also allows custom validators

![3M Tool DB Management](../assets/images/DBMgmt.png)


• Views allow user-friendly data presentation with sort, filtering and search capability.

![3M Tool Environment](../assets/images/3mtoolENV.png)


#### 1.2 Out-of-the-box features

• Fine-grained, role-based security

• LDAP-based authentication

• Data-model definition

• Database management (CRUD operations)

• Advanced search engine

• Configurable Script engine to integrate old legacy scripts

• Lightweight Process engine to supervise basic workflows

• SQL client to easily test SQL queries

• Universal REST client to test REST API calls

• Remote File-System explorer to manage input/output from scripts

#### 1.3 Creating applications for 3M

• Applications and customizations are written in Javascript

• Code editor is provided directly by 3M.

• Code is stored in the 3M database.

– Independance between the core framework and customizations.

– No resource publication needed.

– Application maintenance is dynamic.

• Applications are subject to the same fine-grained, role-based security.

![3M Tool UPdate Application](../assets/images/AXACloudExplorer.png)

![3M Tool Existing Customization](../assets/images/UpdateExistingCust.png)

• Code executes client-side, on the browser

• Applications perform REST calls to the core framework…

– To access the database

– To access the file-system (server-side)

– To execute scripts

– To use connectors

• Generic REST connector

• PureApplication REST connector

• SQL connector (MySQL, DB2)

• SSH connector

• Mail connector

• LDAP connector

• …and use jQuery and Bootstrap to display the results

![3M Tool Application1](../assets/images/Application1.png)

![3M Tool Application2](../assets/images/Application2.png)


#### 1.4 Sample Applications as below

![3M Tool Sample App1](../assets/images/AXACloudExplorer.png)

![3M Tool Sample App2](../assets/images/AXAvolumeUsage.png)

![3M Tool Sample App3](../assets/images/VMSearchTool.png)

![3M Tool Sample App4](../assets/images/VMmigrationTool.png)
 
![3M Tool Sample App4](../assets/images/CPUratioFixingTool.png)


• 3M applications execute on the browser, which introduces some limitations

– Performance issue because of the network if frequent communication between the browser and partner systems requires exchange of a lot of data

– Limited access to the server-side File-System. The application must invoke services.

– Access to advanced Node.js features through services.

 …and the most important one: 3M requires a UI.

– 3M core services may be called using REST API…

– …but applications are designed to execute on a browser

• 3M v1.3.0 will introduce a new feature: dynamic services.

• Dynamic Services execute on the Node.js server.

• The implementation will be developed as any other 3M customization

– Javascript

– Using 3M integrated code editor

– Saved in the CouchDB database

– Same fine-grained, role-based security as applications

• The dynamic service is invoked as a REST API call

– http://<3M-IP>/<3M-instance-name>/dynamic/execute/[service-id]

• Dynamic Services help implement

– Server-side efficient services that can deal with big amounts of data
• E.g. search for a VM on all the PAS given its name

– Services that require multiple calls to the same connector

– Services that may be shared with other tools and exposed as REST API

– Services that may have to be integrated into a scheduler (script-like)

Latest and updated architecture diagram of 3M Tool as below 

![3M Tool Sample App4](../assets/images/architectureDiagram.png)