---
template: overrides/main.html
title: Getting started with Watson API to create conversations
---

??? important " QUICK EXPLORE GUIDE "
    ``` mermaid
        flowchart LR
            S([Start])-->A
            A-->B 
            B-->C
            C-->D
            D-->E
            E-->F
            F-->G
            G-->H
            H-->I
            I-->End([End])
            click A "https://cloud.ibm.com/registration"
            click B "https://cloud.ibm.com/login"
            click C "https://cloud.ibm.com/"
            click D "https://cloud.ibm.com/catalog"
            click E "https://cloud.ibm.com/resources"
            click F "https://cloud.ibm.com/shell"
            click G "https://cloud.ibm.com/docs?tab=api-docs"
    ```
    __A__ = Register to create an IBM Cloud Account;  
    __B__ = Login to the IBM Cloud Account;  
    __C__ = Explore IBM Cloud Dashboard;  
    __D__ = Explore IBM Cloud Resources;  
    __E__ = Explore IBM Cloud Catalog;   
    __F__ = Explore IBM Cloud Shell;  
    __G__ = Explore IBM Cloud API Docs;  
    __H__ = Install the IBM Cloud CLI;  
    __I__ = Access IBM Cloud on local via GIT Bash;




## 1. Login to the IBM Cloud Account
Use your IBM Ocean Id and password to login.

  ![IBM Cloud Register](assets/images/IBMCloudLogin.png)


## 2. Launch and Create Watson Asisstant Service
2.1 One way to launch is by clicking on the Hamburger/List Menu icon on the top left and then click on Watson -> Overview

  ![IBM Cloud Register](assets/images/WatsonAssitant-101.png)

And then cLick on Watson Assistant from the Watson Overview page as shown below

  ![IBM Cloud Register](assets/images/WatsonAssitant-102.png)

2.2 Second way is to type "Watson Assistan" in the search textbox visible in the banner and then select the Watson Assistant Service from the list as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-103.png)

2.3 The Create Watson Assistant Service page will be displayed as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-104.png)

2.3.1 Select the tab:"Create" if already not selected.

2.3.2 Click on the location dropdown.

2.3.3 Select a location - preferably London and scroll the page down.

  ![IBM Cloud Register](assets/images/WatsonAssitant-105.png)

2.3.4 Overwrite/Append the Service Name with your Squad Name

2.3.5 Select the checkbox

2.3.6 Click on the button:"Create".

The new Watson Asisstant Service landing page is displayed shown your squad name instead of SRE as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-107.png)

## 3. Launch Watson Asisstant Tool and create the first Assistant

Click on the button:"Launch Watson Assistant" and this open the tool in a new browser tab displaying the details in tab:"Create" as shown below:

![IBM Cloud Register](assets/images/WatsonAssitant-108.png)

3.1 Enter a name for the Assistant.

3.2 Input the description.

3.3 Click on the button:"Next" and this will display the tab:"Personalize".

  ![IBM Cloud Register](assets/images/WatsonAssitant-109.png)

3.4 Select Web from the dropdown.

3.5 Select "Banking and Finance" or whatever is appropriate.

3.6 Select "Content strategist or writer" or whatever is appropriate.

3.7 Select "I want to provide confident answers to common questions" as we would like to provide solutions/fixes.

3.8 Click on the button:"Next" and this will display the tab:"Customize".

  ![IBM Cloud Register](assets/images/WatsonAssitant-110.png)

3.9 Enter an appropriate Assistants name.

3.10 Click on the button:"Next" and this will display the tab:"Preview".

  ![IBM Cloud Register](assets/images/WatsonAssitant-111.png)

You have the option to change the default background by adding a image or web URL and once done you can share the preview with other stakeholders to get their review comments.

3.11 Click on the button:"Create". This will create your new chat pop-up pane and display the Home page for your newly created assistant.


## 4. Create Actions from the Watson Assistant tools Homepage

Once in the homepage of the newly created Assistant, here you can see your assistant name in the banner with an option to create further Assistants.  

  ![IBM Cloud Register](assets/images/WatsonAssitant-111B.png)

4.1 Scroll your mouse cursor to the left on the icon:"home" and this will slide open the side menu - select "Actions -> Created by you" to display actions pane. As there are no actions yet the button:"Create actiosn" is visible.

  ![IBM Cloud Register](assets/images/WatsonAssitant-112.png)


4.2 Click on the button:"Create action" and this will display "create action pane"

  ![IBM Cloud Register](assets/images/WatsonAssitant-113.png)

4.3 Select card:"Start from Scratch" and this will bring a pop-up asking "What does the customer say to start the interaction" as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-114.png)

4.3.1 Type "troubleshoot"
4.3.2  Click the button:"Save" and this will bring up the pane to write the conversations steps for the action "troubleshoot"

  ![IBM Cloud Register](assets/images/WatsonAssitant-116a.png)

4.3.3 Click on the tab:"Customer starts with" to bring up the relevant form.

4.3.4 Enter similar phrases to launch this action as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-115.png)

4.3.5 Click on button:"next" to move to the conversation step#1.

## 5. Create Conversation Step#1 

Think of a response as a text message what should be displayed when the customer says/types in "troubleshoot" 

5.1 For Assistant says, enter the text "Oops, What is it now?"

  ![IBM Cloud Register](assets/images/WatsonAssitant-116.png)

5.2 Click on the drodown:"Define customer response" and select "Options" and this will bring up a pop-up pane as shown below.

  ![IBM Cloud Register](assets/images/WatsonAssitant-117.png)

5.3 Enter as many response options you want but limit it to not more than 10 t the extent possible. 

5.4 When done click on the button:"Apply".

  ![IBM Cloud Register](assets/images/WatsonAssitant-118.png)

5.5 Click on the drodown:"Continue with next step" and select "Continue with next step".

5.6 Click on the save icon to save your changes.

5.7 Click on the button:"Preview" to bring up the chat pane.

5.8 Enter the text "troublshoot" and the Assitant will respond with text shown in "Res{" as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-119.png)

5.9 Click on button:"next" to move to the conversation step#2.

## 6. Create Conversation Step#2

6.1 Click the dropdown and select "with conditions"

  ![IBM Cloud Register](assets/images/WatsonAssitant-120.png)


6.2 Click the dropdown and select "the condition" as fit - select the defaulted first one.

6.3 For Assistant says, enter the text "Is it SP Server of NetApp?"

6.4 Click on the drodown:"Define customer response" and select "Options" and this will bring up a pop-up pane enter "Spectrum Protect Server" and "NetApp Server", then click on the button:"Apply" this will close the pop-up pane.

6.5 Click on the save icon to save your changes.

6.6 Click on option:"Issue with backup(s)" and this will bring the response as show below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-121.png)

6.7 Click on button:"next" as shown above to move to the conversation step#3. 

## 7. Create Conversation Step#3

7.1 For Assistant says, enter the text "Click here to verify the troubleshooting approach"

7.2 Select the text "Click here" as shown

  ![IBM Cloud Register](assets/images/WatsonAssitant-122.png)

7.3 Click on the icon:"link" and this will bring a popup pane as shown below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-123.png)

7.4 Copy the relevant URL from the github pages portal and and Paste it here.

7.5 Uncheck the checkbox.

7.6 Click on the button:"Apply".

  ![IBM Cloud Register](assets/images/WatsonAssitant-124.png)

7.7 Copy and Paste the below lines:

``` sh

2. Search or Verify the next steps for the error code at https://www.ibm.com/docs/en/tsm/7.1.0?topic=manager-messages-return-codes-error-codes
3. Proceed with fix

```

7.8 Click on the drodown:"Define customer response" to expand the pane.

7.9 Select "Confirmation" and this will populate "Yes" and "No" automatically.

Keep the default for element:"And then" which is "Continue with next step".

7.10 Click on the icon:"save" to save your changes.

7.11 In the Privew pabe, click on the option:"Spectrum Protect Server" and this will bring the response as show below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-125.png)

7.12 Click on button:"next" as shown above to move to the conversation step#4. 

## 8. Create Conversation Step#4

8.1 thru 8.8 follow the sequence of steps as defined in the screenshot below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-126.png)

8.9 Click on the icon:"duplicate" to create step#5 which is adulplicate of the step#4. Select Step#5 card on the left.

## 9. Create Conversation Step#5

9.1 thru 9.5 follow the sequence of steps as defined in the screenshot below:
  ![IBM Cloud Register](assets/images/WatsonAssitant-127.png)

9.6 Click on the icon:"duplicate" to create step#6 which is adulplicate of the step#5. Select Step#6 card on the left.

## 10. Create Conversation Step#6  

10.1 thru 8.8 follow the sequence of steps as defined in the screenshot below:

  ![IBM Cloud Register](assets/images/WatsonAssitant-128.png)
  ![IBM Cloud Register](assets/images/WatsonAssitant-129.png)

With that done - the conversation steps for the happy scenario is complete. 

## 11. Final Step

<form name="myform" action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
  <input type="hidden" id="issuetitle" name="ititle" value="Record Completion of Register & Access IBM Cloud">
  <input type="hidden" id="issuebody" name="ibody" value="The Register & Access IBM Cloud Completed ">
  <a href="javascript: submitform()">Click Here</a> to register the completion of tasks on Github
</form>
<script type="text/javascript">
function submitform(){document.myform.submit();}
</script>