---
template: overrides/main.html
---

# Cloning the AXA master site from Kyndryl GitHub 

???+ important " QUICK SETUP GUIDE "
    ``` mermaid
        flowchart LR
            S([Start])-->A
            A-->B
            B-->C
            C-->D
            D-->End([End])
            click A "./#cloning-the-repository-on-local"
            click B "./#copy-contents-from-the-cloned-directory"
            click C "./#add-and-commit-to-git"
            click D "./#previewing-axa-site-from-your-work-directory-on-local"
    ```
    __A__ = Cloning the Repository on local  
    __B__ = Copy contents from the cloned directory  
    __C__ = Add and Commit to Git  
    __D__ = Previewing AXA site from your work directory on local  


Now that you have your local and remote mkdocs site up and running it is time to clone the AXA master site and once the cloning is complteted the files are to be copied into your work directory from the cloned directory. 

## Cloning the Repository on local   

Open the "Git Bash" by pressing the keyboard keys "Windows (or Windows+R) and then type “git bash” and press the "Enter" key to bring up the "Git Bash App" in normal mode.

 Type `cd` to revert to your home directory.

 Type `git clone https://github.kyndryl.net/sre-axa/mkdocs.git` and press the "Enter" key and should see cloning messages as shown below:

    Cloning into <repository name>...
    remote: Enumerating objects: 1153, done.
    remote: Counting objects: 100% (385/385), done.
    remote: Compressing objects: 100% (116/116), done.
    remote: Total 1153 (delta 320), reused 293 (delta 268), pack-reused 768
    Receiving objects: 100% (1153/1153), 945.15 KiB | 1.67 MiB/s, done.
    Resolving deltas: 100% (581/581), done.
    
 Type `cd <work directory` to change to the work directory.

## Copy contents from the cloned directory
 
 Type `cp -r ../mkdocs/. .` 
    
## Add and Commit to Git

 Type `git add -A` or `git add .` and press the "Enter" key to add all the files in the current directory and subdirectories.

 Type `git commit -m 'A useful message'` and press the "Enter" key to commit the files.

## Previewing AXA site from your work directory on local

MkDocs includes a live preview server, so you can preview your changes as you
write your documentation. The server will automatically rebuild the site upon
saving. Start it with:

``` sh
mkdocs serve # (1)!
```

1.  If you have a large documentation project, it might take minutes until
    MkDocs has rebuilt all pages for you to preview. If you're only interested
    in the current page, the [`--dirtyreload`][--dirtyreload] flag will make
    rebuilds much faster:

    ```
    mkdocs serve --dirtyreload
    ```

## Final Step

``` sh
Submit Form # (1)!
```

1.    <form action = "https://us-south.functions.appdomain.cloud/api/v1/web/bdf78e36-1be8-4ace-a364-7a580281a4fb/gitsrvmgmt/createIssue" method = "post">
      <label for="issuetitle">Title:</label>
      <input style="color:grey;border-width: 1; border: solid;border-radius: 3px; text-align: left" type="text" id="issuetitle" name="ititle" placeholder="InputGitIssueTitle"><br>
      <label for="issuebody">Issue Details:</label>
      <input style="color:grey;text-align:center;border-width: 1; border: solid; solid;border-radius: 3px; text-align: left" type="text" id="issuebody" name="ibody" placeholder="InputIssueDetails"><br>
      <button style="background-color: #4CAF50; border: none;border-radius: 5px;color: white;padding: 5px 15px;text-align: center;text-decoration: none;display: inline-block;cursor: pointer" type="submit">Create Issue</button>
      </form>  


<form name="myform" action = "https://us-south.functions.appdomain.cloud/api/v1/web/bdf78e36-1be8-4ace-a364-7a580281a4fb/gitsrvmgmt/createIssue" method = "post">
  <input type="hidden" id="issuetitle" name="ititle" value="Completed Cloning the Master Site">
  <input type="hidden" id="issuebody" name="ibody" value="Cloning of Master Site completed without any issues.">
  <a href="javascript: submitform()">Click Here</a> to register the completion of tasks on Github
</form>
<script type="text/javascript">
function submitform(){document.myform.submit();}
</script>