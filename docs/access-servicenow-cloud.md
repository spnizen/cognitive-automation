---
template: overrides/main.html
title: Getting started with ServiceNow Tools
---

## 1. Register and create an ServiceNow Developer Account

1.1 Tune your browser to [https://developer.servicenow.com/](https://developer.servicenow.com/nav.do)

  ![ServiceNow Register](assets/images/SNow-Signup.png)

1.2 Click on the button:'Sign-up and Start Building' and this will display the be registration form as shown below:

  ![ServiceNow Register](assets/images/SNow-Signup2.png)

1.3 Use your Enterprise enterprise email id, provide the other necessary details as as Name, Country and password. 

1.4 Click on th button:'Sign Up' and this should display the registration confirmation message as shown below.

  ![ServiceNow Register](assets/images/SNow-Signup3.png)

## 2. Verify your ServiceNow ID!
2.1 Login to your Enterprise enterprise email and look for the email with sbuject:'Verify your ServiceNow ID!' 

  ![ServiceNow Register](assets/images/SNow-EmailVerification.png)

2.2 Click open relevant email and then click on the button:'Verify Email' and this should display the  confirmation message and asking to to login, as shown below.

  ![ServiceNow Register](assets/images/SNow-SignSucessfulpng.png)  

## 3. First time Login into ServiceNow

3.1 Click on the button:'Login' and this will prompt to enter your email id.

  ![ServiceNow Register](assets/images/SNow-Login.png)

Enter your Enterprise email id and click on the button:'Next' and this will prompt to enter your password. 

Enter the password and click on the button:'Sign In' and once authenticated successfully the below Welcome page will be displayed.

  ![ServiceNow Register](assets/images/SNow-WelcomePage.png)

3.2 Click on the button:'Request Instance' in the banner or on button:"Start Building" in main content page and this will start processing the required tasks for instance creation as shown below.

  ![ServiceNow Register](assets/images/SNow-Instance-Assignment-In-Progress.png)


## 4. Your Developer Instance 

The instance processing will take a while and once completed you should see popup window displaying the message:'Your instance is ready!' along with the key information as shown below:   

  ![ServiceNow Register](assets/images/SNow-Instance-URL-UserName-Password.png) 

4.1 Please copy/store the instance URL, Username and the password in a safe place as this will be required everytime you would like to launch and access the ServiceNow developer instance.

Click on the button:'Open Instance' to launch the new instance. 

4.3 One way to launch is by tuning your browser directly to [https://put_your_instance_name.service-now.com](https://dev135377.service-now.com) and will bring up the login page wherein you are required to enter:

```sh
Username: admin
Password: <the one which as provided/copied/last updated>
```

  ![ServiceNow Register](assets/images/SNow-Dev-Direct-Login.png)

4.4 The other way to launch is by tuning your browser directly to [https://developer.servicenow.com/](https://developer.servicenow.com/) and will bring up the devloper landing page.

  ![ServiceNow Register](assets/images/SNow-Login2.png)

4.5 Click on the link:'Sign In' and this will display the login page as shown below:

  ![ServiceNow Register](assets/images/SNow-LoginPage2.png)

Enter your Enterprise email id and click on the button:'Next' and this will prompt to enter your password. 

Enter the password and click on the button:'Sign In' and once authenticated successfully the below Welcome page will be displayed.

  ![ServiceNow Register](assets/images/SNow-Dev-StartBuildingPage2.png)

4.6 Click on the dropdown against your initials and this will bring up all the information and actions what can be performed on your instance.

  ![ServiceNow Register](assets/images/SNow-Launch-Instance.png)

4.7 Click on the button:'Start Building' and this will launch your ServiceNow Developer Instance as shown below:

  ![ServiceNow Register](assets/images/SNow-Dev-LandingPage-AppEngineStudio2.png)

## 5. Explore your Developer Instance

5.1 Click on the menuItem:'All' and this will display the dropdown menu along with the search filter textbox with an option to **pin all the menu** as secondary navigation on the left side, if needed. 

  ![ServiceNow Register](assets/images/SNow-Dev-LandingPage-AppEngineStudio3.png)

5.2 Though, there is a ocean of information but as we are interested in pulling Incidents, type the text:'Explorer' and this will filter the menu options on 'Explorer' and display the matched criterion as shown below:

  ![ServiceNow Register](assets/images/SNow-Dev-LandingPage-AppEngineStudio.png)

5.3 Click on the menuItem:'REST API Explorer' to launch the same.

  ![ServiceNow Register](assets/images/SNow-Dev-REST-API-Explorer.png)

5.3 Click on the menuItem:'REST API Explorer' to launch the same. Select the following as shown in the screenshots below:

  ![ServiceNow Register](assets/images/SNow-Dev-REST-API-Name-Table.png)

  ![ServiceNow Register](assets/images/SNow-Dev-REST-API-Name-Table-Incident.png)

  ![ServiceNow Register](assets/images/SNow-Dev-REST-API-Name-Table-Incident-Get_Sys-Params-python.png)

  ![ServiceNow Register](assets/images/SNow-Dev-REST-API-Name-Table-Incident-Get_Sys-Params-python-sample.png)

The value of the url is the REST API endpoint what is required for creating a REST call from the IBM Cloud Python Flask Application.

Copy the endpoint url and switch to creating the SNow Flask microservice documentation and steps.

## 10. Final Step

<form name="myform" action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
  <input type="hidden" id="issuetitle" name="ititle" value="Completed Copying the ServiceNow REST API Endpoint">
  <input type="hidden" id="issuebody" name="ibody" value="Completed Copying the ServiceNow REST API Endpoint">
  <a href="javascript: submitform()">Click Here</a> to register the completion of tasks on Github
</form>
<script type="text/javascript">
function submitform(){document.myform.submit();}
</script>