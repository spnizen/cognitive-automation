---
template: overrides/main.html
title: Creating a Python Flask Microservice for Git API
---

#Creating a Flask Microservice Program for Git API

## 1. Verify the current directory and list the files recursively in Python App directory and sub-directories

  ![IBM Cloud Register](assets/images/GitBashCommandPrompt-pwd_lsR_cd-server-routes.png)

1.1 Type `pwd` and press the "Enter" key to verify your are in your Python App directory, else change to this directory.

1.2 Type `ls -R` and press enter to see the recursive directory listing of files in Python App directory.

1.3 Locate from the list the first level directories `public`, `scripts` and `server` 

## 2. Change to the microservices directory 'Server/routes'

Type `cd server/routes` and list the files by typing `ls -l`

  ![IBM Cloud Register](assets/images/GitBashCommandPrompt-lsl-routes.png)


## 3. Verify the individual files in Visual Code

Type `code health.py` and this will display the below code in Visual Code IDE.

***
```sh 
from flask import jsonify
from server import app

@app.route("/health")
def health():
    """health route"""
    state = {"status": "UP"}
    return jsonify(state)
```
***

## 4. Appending new code in 'health.py'

Copy and append the below code in the "health.py" python file open in Visual Code.

***
```sh 
@app.route("/profile")
def GetProfile():
    """Profile route"""
    profile = {"Name": "Sridhar P Naidu", "Email Id": "sridhar.naidu@kyndryl.com", "Address": "Where I lay my head is my home"}
    return jsonify(profile)

```
***

when done please save the file by pressing the keys `Ctrl + s`.

## 5. Run the Python App on Local

Switch back to Git Bash and type `python manage.py run` and press enter. On successful outcome you should see the message:
`* Running on http://127.0.0.1:3000`


## 13. View the new Microservice - profile in a browser
Launch a browser and tune to `http://127.0.0.1:3000/profile` and this should display the FLask microservice endpoint JSON response as shown below:

  ![IBM Cloud Register](assets/images/Successful%20Execution%20in%20Browser5.png)


## 13. Create a new file 'gitAPI.py' in the `server/routes`folder

13.1  Copy the below 20 plus lines of code snippet by selecting and pressing `Ctrl + C`.

***
```sh
# importing the required module libraries
from flask import jsonify, request, json, redirect, render_template
from server import app

import requests
from requests.auth import HTTPBasicAuth

# getting inputs from Github Profile and Security
github_username  = "srpagada"
basic_auth = HTTPBasicAuth('srpagada', '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')
api_url = "https://github.kyndryl.net/api/v3/repos/sre-axa/steady-state-tasks/issues"

@app.route('/createIssue', methods =["POST"])
def createIssue():
	
	# getting inputs from HTML form
    issue_title = request.form.get("ititle")
    issue_body = request.form.get("ibody")
    formatted_body = 'Trigger Point: '+ issue_body

	# create the JSON object
    jdata = {
		"title": issue_title,
		"body": formatted_body,
		"assignees": [ github_username ]
	}

	#send post request
    response = requests.post(api_url, json=jdata, auth=basic_auth, allow_redirects=True)

	#recieve the response data in json format
    data =  response.json()
    result = data['html_url']
    fresult = '<a href='+result+'>'+ result +'</a>'
    return fresult
```
***

13.2 Create the new file by typing `code gitAPI.py` at git bash command prompt and this will open the new blank file in Visual Code.

13.3 Paste the earlier copied lines of code in Visual Code by pressing `Ctrl + V` and then press `Ctrl + S` to save the file.

13.4 Replace the following with your Git Information:
```sh
github_username  = "<replace with your git username>"
basic_auth = HTTPBasicAuth(github_username, 'replace with your Personal Access Token')

api_url = "https://github.kyndryl.net/api/v3/repos/AXA-Europe/<replace with your git repo name>/issues"
```

when done please save the file by pressing the keys `Ctrl + s`.

## 14. Run the Python App on Local

Switch back to Git Bash and type `python manage.py run` and press enter. On successful outcome you should see the message:
`* Running on http://127.0.0.1:3000`

## 13. Launch the new Microservice - createIssue in a browser
Launch a browser and tune to `http://127.0.0.1:3000/createIssue` and this should display the response as shown below:

  ![IBM Cloud Register](assets/images/GitAPI-CreateIssueLandingPage.png)

If you see the 404 then you are on the right path. To successfully execute your new API endpoint please move to the next step.

## 14. Update the code in existing index.html file in the 'public' directory

14.1 Copy the below code snippet by clicking the icon:"copy to clipboard" on the right or select the text and press 'Ctrl = C'

```sh
<!DOCTYPE html>
<html>
<head>
    <title>Create Git Issue Form</title>
</head>
<body>
    <form action = "http://127.0.0.1:3000/createIssue" method = "post">
        <label for="issuetitle">Title:</label>
        <input type="text" id="issuetitle" name="ititle" placeholder="InputGitIssueTitle"><br>
        <label for="issuebody">Issue Details:</label>
        <input type="text" id="issuebody" name="ibody" placeholder="InputIssueDetails"><br>
        <button  type="submit">Create Issue</button>
    </form> 
</body>
</html>
```

14.2 Switch back to bash window by pressing 'Alt + Tab' 

14.3 Terminate the python process by pressing 'Ctrl + C'

14.4 Type `cd public` to change to the 'public' directory 

14.5 Type `code index.html` at the bash command propmpt and wait a while for the Visual Code to open the `index.html` as shown below:

  ![IBM Cloud Register](assets/images/GitBashCommandPrompt-code-index_html.png)

14.6 Press `Ctrl + a` to select all the content of the `index.html` as shown below:

  ![IBM Cloud Register](assets/images/GitBashCommandPrompt-code-index_html-selAll.png)

14.7 Press `Ctrl + v` to paste the previously copied code snippet and replace the existing lines of code in the `index.html` as shown below:

  ![IBM Cloud Register](assets/images/GitBashCommandPrompt-code-index_html-paste.png) 

14.8 When done please save the file by pressing the keys `Ctrl + s`. 

## 15. Run the Python App on Local

15.1 Switch back to Git Bash.

15.2 Type `cd ..` to change to your app root directory.

15.3 Type `python manage.py run` and press enter. On successful outcome you should see the message:
`* Running on http://127.0.0.1:3000`

## 16. Test the new Microservice - createIssue in a browser
16.1 Launch a browser and tune to `http://127.0.0.1:3000` and this should display the new index.html response as shown below:

  ![IBM Cloud Register](assets/images/BrowserResponse-index_html-new1.png)

16.2 Input the sample text in the textboxes Title and Issue Details.

16.3 Click on the button:'Create Issue' and on successful outcome you should see the URL of the issue created in the github repo as a response from the API - see screenshot below:

  ![IBM Cloud Register](assets/images/BrowserResponse-after-executing-restapi.png)

**Note**: The Organization and the Repository will be different and also the issue number will be running increment.

Click on the URL and this will navigate you to the Kyndryl Guthub Site displaying the Issue as shown below:

  ![IBM Cloud Register](assets/images/BrowserResponse-Viewing-Issue-Github.png)

**Note**: The Organization and the Repository will be different and also the GitUser will be your git username.

## 15. Final Step
Congratulations you have successfully run your Python Flask Microservice to create a Git Issue using your local python Server.

<form name="myform" action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
  <input type="hidden" id="issuetitle" name="ititle" value="Successfully completed the running the Python Flask Microservice to create a Git Issue">
  <input type="hidden" id="issuebody" name="ibody" value="Works Perfectly Fine">
  <a href="javascript: submitform()">Click Here</a> to register the completion of this task on Github
</form>
<script type="text/javascript">
function submitform(){document.myform.submit();}
</script>
