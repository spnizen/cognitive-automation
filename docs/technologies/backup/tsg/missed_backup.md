---
template: overrides/main.html
title: Missed Backups
--- 

* ORACLE Database Basic Preliminary troubleshooting steps for Missed Backup.

** Missed Backup(s): 	
If a Backup is missed, then please check the following 
** Files Exist? 
Check the following files exist in OS
- ls -ltr /opt/tivoli/tsm/client/ba/bin/dsm.sys
- ls -ltr /opt/tivoli/tsm/client/ba/bin/dsm.opt
- ls -ltr /opt/tivoli/tsm/client/oracle/bin64/dsm.sys
- ls -ltr /opt/tivoli/tsm/client/oracle/bin64/tdpo.opt
Check the following File exist with soft link
- ls -ltr /opt/tivoli/tsm/client/api/bin64/dsm.sys
- ls -ltr /opt/tivoli/tsm/client/api/bin64/dsm.opt
Action: If any of the file not available reach Enterprise team for help 

** Communication:
Once the Files are exist with proper permissions then use following commands to validate the communication.
(As Root or sudo User)
- dsmc -optfile= /opt/tivoli/tsm/client/ba/bin/dsm.sys
- dsmc -optfile= /opt/tivoli/tsm/client/api/bin64/dsm.sys
- cd /opt/tivoli/tsm/client/oracle/bin64
- tdpoconf showenv -tdpo_optfile=tdpo.opt

Action: If any of this prompt for password, then check with Enterprise team for password then execute below commands

- dsmc -optfile= /opt/tivoli/tsm/client/ba/bin/dsm.sys
- dsmc -optfile= /opt/tivoli/tsm/client/api/bin64/dsm.sys

here, Let the ID be blank just put enter. 
In place of password use the pass shared by enterprise team.
Then run below command and type same password three times one by one followed with enter.

- cd /opt/tivoli/tsm/client/oracle/bin64
- tdpoconf password -tdpo_optfile=tdpo.opt

Then Restart dsmcad service 
(As a root or sudo user)
- systemctl restart dsmcad
- or
- service dsmcad stop
- service dsmcad start

** File Permissions:
Following should exist with the read and write permissions for the Oracle User or group.

- /opt/tivoli/tsm/client/ba/bin/dsm.sys
- /opt/tivoli/tsm/client/ba/bin/dsm.opt
- /opt/tivoli/tsm/client/ba/bin/dsm.sys
- /opt/tivoli/tsm/client/ba/bin/tpdo.opt
Also, open all the above files and check error log, password file, dsmsched log should also have read write permissions for oracle user (Highly Important)

** Dsmcad Service
	To make the backup to run automatically as per schedule dsmcad service is very important.

Check the dsmcad service is running or not or hung.
(As root or Sudo user)
- systemctl status dsmcad 
If this command says Service is Active which means it is running
Else run the below command to start the service
- systemctl start dsmcad 
- or
- service dsmcad stop
- service dsmcad start

If any doubt that this service is actively working or hung then below command to restart
- systemctl restart dsmcad 
(0r)
- systemctl stop dsmcad 
- systemctl start dsmcad 
