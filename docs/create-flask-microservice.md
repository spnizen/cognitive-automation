---
template: overrides/main.html
title: Adding a Python Flask Microservice
---

#Adding a Python Flask Microservice

???+ important " QUICK EXPLORE GUIDE "
    ``` mermaid
        flowchart LR
            S([Start])-->1
            1-->2 
            2-->3
            3-->4
            4-->5
            5-->6 
            6-->7
            7-->8
            8-->9
            9-->End([End])
    ```


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
    profile = {"Name": "Sridhar P Naidu", "Email Id": "sridhar.naidu@enterprise.com", "Address": "Where I lay my head is my home"}
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


## 13. Copy and Create a new file 'gitCreate.py' in the `server/routes`folder

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
api_url = "https://github.enterprise.net/api/v3/repos/sre-sre/steady-state-tasks/issues"

@app.route('/create', methods =["POST"])
def issue():
	
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

13.2 Create the new file by typing `code gitCreate.py` at git bash command prompt and this will open the new blank file in Visual Code.

13.3 Paste the earlier copied lines of code in Visual Code by pressing `Ctrl + V` and then press `Ctrl + S` to save the file.

13.4 Replace the following with your Git Information:
```sh
github_username  = "srpagada"
basic_auth = HTTPBasicAuth('srpagada', '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')
api_url = "https://github.enterprise.net/api/v3/repos/sre-sre/steady-state-tasks/issues"
```





## 15. Final Step
Congratulations you have successfully run your Python Flask Microservice on your local.

<form name="myform" action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
  <input type="hidden" id="issuetitle" name="ititle" value="Record Completion of successfully run your Python App on your local.">
  <input type="hidden" id="issuebody" name="ibody" value="The Register & Access IBM Cloud Completed ">
  <a href="javascript: submitform()">Click Here</a> to register the completion of this task on Github
</form>
<script type="text/javascript">
function submitform(){document.myform.submit();}
</script>
