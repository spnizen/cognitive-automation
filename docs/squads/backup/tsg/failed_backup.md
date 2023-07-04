---
template: overrides/main.html
title: Failed Backups
---

* ORACLE Database Basic Preliminary steps to troubleshoot Failed Backup.

** Failed Backup(s)
For Failed backup, it is still good to check all the above ones are working and then check the below actions.
** IBM Spectrum Protect authorized user can perform this Action.

For this error Check the below files are having full permissions for Oracle Users.
- ls -ltr /etc/adsm/TSM* 
- ls -ltr /opt/tivoli/tsm/client/oracle/bin64/TSM*

** SSL Connection Failure
For this error, please check with Kyndryl team to update below command in TSM Server
- Upd node node_name sessionsecurity=transitional

** TCP IP Connection Failure
For this server please do ping tsm tcpserver address mentioned in dsm.sys file
- ping tcpserveraddress
- telnet tcpserver 1500

if Telnet not active use below command to check the same
- nc -zv IP (or) DNS 1500

** Out of Storage Space
- For this Error DBA team has nothing much to do , please check Kyndryl to check the space.
- In Parallel Check the Database growth for huge backup and see if there anyway to cleanup to reduce the DB size

** Intermittent Connection Failure

- Do a continuous ping from this server to TSM Server address mentioned in the dsm.sys file.
- See any packet drops detected, if so, involve OS /NW team to investigate the setting and routing, etc and fix .
- do telnet with the TSM server address with 1500 point 
- Repeat first three steps few times to see any error detection.
- if no error then, kindly involves network or OS team to do network tracing during backup window.
