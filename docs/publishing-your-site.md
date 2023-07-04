---
template: overrides/main.html
---

# Publishing your site

The great thing about hosting project documentation in a `git` repository is
the ability to deploy it automatically when new changes are pushed. MkDocs
makes this ridiculously simple.

## Publishing the local site to remote
 
Type `mkdocs gh-deploy --force` and press the "Enter" key to manually deploy the local to remote github.

```
INFO     -  Cleaning site directory
INFO     -  Building documentation to directory: C:\Users\SRIDHARNAIDU\Desktop\spnize\site
INFO     -  Documentation built in 0.41 seconds
INFO     -  Copying 'C:\Users\SRIDHARNAIDU\Desktop\spnize\site' to 'gh-pages' branch and pushing to GitHub.
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 636 bytes | 636.00 KiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote: detect-secrets-stream ver=manual-enterprise-manual-enterprise FAQ: https://pages.github.enterprise.net/river/detect-secrets-pages
remote:
remote: Successfully send push metadata.
remote: Push info collect pre-receive hook finished within 3 seconds.
To https://github.enterprise.net/Enterprise-Europe/8-Tools-Enablement.git
   d874bc5..d59a48b  gh-pages -> gh-pages
INFO     -  Your documentation should be available shortly.
```

## View the remote site on browser

Open a browser and tune to "https://github.enterprise.net/<Org name>/<repository name>.git" and press the "Enter" key to bring up the remote github site as shown below:


Click on the tab:"Settings" and once the settings page is displayed, click on "Pages" in the left navigation which display the GitHub Pages landing page with a message as shown below:
```
Your site is published at https://pages.github.enterprise.net/<Org name>/<repository name>/
```
Point the cursor and right+click the pointing device to open the site in a new browser tab.

The remote site should have rendered sucessfully in the browser.


## Final Step

``` sh
Submit Form # (1)
```

1.    <form action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
      <label for="issuetitle">Title:</label>
      <input style="color:grey;border-width: 1; border: solid;border-radius: 3px; text-align: left" type="text" id="issuetitle" name="ititle" placeholder="InputGitIssueTitle"><br>
      <label for="issuebody">Issue Details:</label>
      <input style="color:grey;text-align:center;border-width: 1; border: solid; solid;border-radius: 3px; text-align: left" type="text" id="issuebody" name="ibody" placeholder="InputIssueDetails"><br>
      <button style="background-color: #4CAF50; border: none;border-radius: 5px;color: white;padding: 5px 15px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer" type="submit">Create Issue</button>
      </form>  


<form name="myform" action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
  <input type="hidden" id="issuetitle" name="ititle" value="InputGitIssueTitle">
  <input type="hidden" id="issuebody" name="ibody" value="InputIssueDetails">
  <a href="javascript: submitform()">Click Here</a> to register the completion of tasks on Github
</form>
<script type="text/javascript">
function submitform(){document.myform.submit();}
</script>

