---
template: overrides/main.html
---

!!! success inline end
    Preview local on http://127.0.0.1:8000/


???+ important " QUICK SETUP GUIDE "
    ``` mermaid
        flowchart LR
            S([Start])-->A
            A-->B
            B-->C
            C-->D
            D-->E
            E-->F
            F-->End([End])
    ```
    __A__ = Execute `mkdocs new <new directory name>`  
    __B__ = Change to the new directory `cd <new directory name>`  
    __C__ = Git Config & Init   
    __D__ = Git add & commit  
    __E__ = Serve `mkdocs serve`  
    __F__ = Preview in browser


## Steps for first time setup

Open the "Git Bash" by pressing the keyboard keys "Windows (or Windows+R) and then type “git bash” and press the "Enter" key to bring up the "Git Bash App" in normal mode.

1. Type `mkdocs new <new directory name>` and press the "Enter" key.

2. Type `cd <new directory name>` and press the "Enter" key.

3. Type `ls -l` and press the "Enter" key to display the contents

  ```
  total 1
  drwxr-xr-x 1 AzureAD+YourName 4096  0 Jun 23 13:04 docs/
  -rw-r--r-- 1 AzureAD+YourName 4096 20 Jun 23 13:04 mkdocs.yml
  ```

## Configuring Git 

### Adding the default User & email

Type `git config --global user.name "John Doe"` and press the "Enter" key.

Type `git config --global user.email johndoe@example.com` and press the "Enter" key.

### Initializing git

As each project should be managed within its own git repository. From within the root directory of the project, advised to set up git for the project. There can be many git repositories on your local workstation, each managing a separate project tree.

Proceed to initialize `git` for the project:

Type `git init` and press the "Enter" key to initialize `git`, a message as shown below is displayed: 

```
Initialized empty Git repository in C:/Users/SRIDHARNAIDU/Desktop/spnize/.git/
```

This command initializes git by creating a `.git` directory in the current directory. At this point, Git is not managing any files in the project.

### Git Status

Type `git status` and press the "Enter" key to display the status as shown below is displayed: 

```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/
        mkdocs.yml

nothing added to commit but untracked files present (use "git add" to track)
``` 

Shows that no files are being managed by git yet. The files that need Git to manage are to be added by the developer as and when new files are created for our project. 

### Git Add

Type `git add <fileName.extension>` and press the "Enter" key to ass individual file. 

Type `git add -A` or `git add .` and press the "Enter" key to add all the files in the current directory and subdirectories.

Type `git status` and press the "Enter" key to display the status as shown below is displayed: 

```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   docs/index.md
        new file:   mkdocs.yml

``` 
### Git Commit

Once we have told git to manage our files we will need to commit them to the repository:

Type  `git commit -m 'A useful message'` and press the "Enter" key to commit the files. This will display the message as shown below:

```
[master (root-commit) 27b813e] initial commit
 2 files changed, 18 insertions(+)
 create mode 100644 docs/index.md
 create mode 100644 mkdocs.yml
```

#### (Optional) Amending the most recent commit message

If you did a `commit` to state with a bad message or with typos, you can amend it.

* `git commit --amend -m "New commit message"`

#### (Optional) Using tags to manage version numbers

Version numbers for commits can be managed using the `git tag` command. It is recommended that the following versioning methodology approach be used:
* Vx.b.x e.g. V2.3.4
* major - new function or fixes that break backwards compatibility
* minor - new function that preserves backwards compatibility
* patch - fixes that preserve backwards compatibility

To add a version tag to a commit use the following command:

* `git tag -a V0.1.0 -m 'version notes'`

The Version number should also be captured in the `README.md` file and possibly the modified code also.

## Publish the local site

Type ```mkdocs serve``` and press the "Enter" key which executes the mkdocs http server displaying the progress as shown below:

  ```
  INFO     -  Building documentation...
  INFO     -  Cleaning site directory
  INFO     -  Documentation built in 0.38 seconds
  INFO     -  [13:11:58] Watching paths for changes: 'docs', 'mkdocs.yml'
  INFO     -  [13:11:58] Serving on http://127.0.0.1:8000/
  ```
## View the local site on browser

Open a browser and tune to "http://127.0.0.1:8000/" and press the "Enter" key to bring up the local mkdocs site as shown below:



## Final Step

``` sh
Submit Form # (1)
```

1.    <form action = "https://restsvr.eu-gb.cf.appdomain.cloud/create" method = "post">
      <label for="issuetitle">Title:</label>
      <input style="color:grey;border-width: 1; border: solid;border-radius: 3px; text-align: left" type="text" id="issuetitle" name="ititle" placeholder="InputGitIssueTitle"><br>
      <label for="issuebody">Issue Details:</label><br>
      <textarea id="issuebody" name="ititle" rows="4" cols="33">Trigger Point:</textarea><br>
      <textarea id="issuebody" name="ititle" rows="4" cols="33">Initial Analysis:</textarea><br>
      
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

