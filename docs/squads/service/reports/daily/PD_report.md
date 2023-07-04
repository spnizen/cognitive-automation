---
template: overrides/main.html
title: Daily Reporting Overview
---

# PIAAS Daily Reports
## List of Reports


|Sl. No. |Report Name |Report Usage|Duration|Manual or Automated|Report Owner|
|:----------- | :--------- | :-------------| :------------- | :------------| :------------- |
|1 | [Hypercare](#Hypercare Report) |External | 2H | Manual | Abbas and Suma |
|2 |[Backup Report](#Backup) |External|15m|Automated|Suma|
|3|[Silva/He02](#Silva)|External|15m|Automated|Suma|
|4|[DataStore Report](#DS)|External|15m|Automated|Suma and Abbas|
|5|[E2E Report](#E2E)|External|15m|Automated|Suma|
|6|[Daily WIF Report](#WIF)|External|20m|Manual|Abbas|
|7|[I2BCK SLA/SLO (2nd Copy Replication)](#i2bck)|External|1.5H|Manual|Abbas|
|8|[PIAAS I2BCK](#PIAAS I2BCK)|External|40m|Manual|Abbas|


## 1. Hypercare Report<a name="Hypercare Report"></a>

   Hypercare Report is a report for daily operations standup meeting which has the details of previous day highlights of all the teams for Enterprise Account.
   Most of the contents are provided by respective team’s/Squads.
   <p>Topics covered in HC report</p>

   * Incident Management
   * Change Management
   * Datastore Optimization Action Plan
   * Backup Status Report
   * Capacity Report
   * Cloud Infra Availability Report
   * Hotspots for each region covered by respective regional SDM
   * On call Rota (Enterprise and Enterprise).
   Sample of the HC report- which covers both for PiaaS and CoreIT
???+ "Screenshot of the report"
     ![CACF](images/hc.png)
     ![CACF](images/hc1.png)
     ![CACF](images/hc2.png)
     ![CACF](images/hc3.png)
     ![CACF](images/hc4.png)
     ![CACF](images/hc5.png)
     ![CACF](images/hc6.png)
     ![CACF](images/hc7.png)
     ![CACF](images/hc8.png)
     ![CACF](images/hc9.png)
     ![CACF](images/hc10.png)
     <b>Hot Spots</b>
     ![CACF](images/hc11.png)
     ![CACF](images/hc12.png)
     ![CACF](images/hc13.png)
     ![CACF](images/hc14.png)


## 2. Backup Report<a name="Backup"></a>

???+ "Steps to create the report"

     <span style="color: blue;"><b><i>Step 1:</b></span></i>
     Use the file named “ Backup Daily Report_new_dd-mm-yyyy
     
     <span style="color: blue;"><b><i>Step 2:</b></span></i>
     Rename the file with today's date.

     <span style="color: blue;"><b><i>Step 3:</b></span></i>
     Required to update 3 tabs – Chart, OS and DB. Only OS and DB tab are updated, Chart tab will be automatically filled.
     <p>![CACF](images/db.png)</p>

     <span style="color: blue;"><b><i>Step 4:</b></span></i>
     Go to the OS tab and clear the contents from A to O excluding heading.

     <span style="color: blue;"><b><i>Step 5:</b></span></i>
     Go to the DB tab and clear the contents from A to R excluding heading

     <span style="color: blue;"><b><i>Step 6:</b></span></i>
     Required automated reports are available on share folder location as given below
     https://enterprise.sharepoint.com/sites/EnterpriseReportdelivery/SitePages/ProjectHome.aspx?OR=Teams-HL&CT=1661402483534&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjA3MzEwMTAwNSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D
     ![CACF](images/db1.png)

     <span style="color: blue;"><b><i>Step 7:</b></span></i>
     Go the folder eg – AT – go the respective year xxxx month XX and respective day for which the report to be updated.

     <span style="color: blue;"><b><i>Step 8:</b></span></i>
     Go the OS backup tab, and copy from b to p excluding the heading and paste in to the OS tab of backup report file.

     <span style="color: blue;"><b><i>Step 9:</b></span></i>
     Go the DB backup tab, and copy from b to s excluding the heading and paste in to the DS tab of backup report file.

     <span style="color: blue;"><b><i>Step 10:</b></span></i>
     Repeat the same for all other regions ME, NE, NA and SE and paste them one below the other in respective tabs.

     <span style="color: blue;"><b><i>Step 11:</b></span></i>
     Once the pasting is done and sort by host name for both OS and DB Tab

     <span style="color: blue;"><b><i>Step 12:</b></span></i>
     The automated report will be available by 6:00 Pm everyday for next day’s report. Previous day data is always captured for next day report.

     <span style="color: blue;"><b><i>Step 13:</b></span></i>
     This report should be sent to backup team to update the 3rd table -IBM data. 

     <span style="color: blue;"><b><i>Step 14:</b></span></i>
     Backup team will update the third one and send back to update the HC report and the final report is viewed as below
     ![CACF](images/db2.png)


## 3. Silva/He02<a name="Silva"></a>

???+ "Steps to create the report"
      
      <span style="color: blue;"><b><i>Step 1:</b></span></i>
      IPHE02 Report is available on Share point on daily basis 

      <span style="color: blue;"><b><i>Step 2:</b></span></i>
      Location of the file
      ![CACF](images/he.png)

      <span style="color: blue;"><b><i>Step 3:</b></span></i>
      CMDB logs will be received from automated mail every day at 3:00 PM
      ![CACF](images/he1.png)
      Download them and extract the gz files.
      Upload IPHE02 and CMDB logs to the Enterprise shareBoxfolder – as given below on daily basis

      https://sre365.sharepoint.com/sites/AGO1/GSBX952307/Midtermshare/Forms/AllItems.aspx?ga=1&id=%2Fsites%2FAGO1%2FGSBX952307%2FMidtermshare%2FCMDB%20injector%2F19%2D8%2D2022&viewid=a5533f91%2D343a%2D4d5d%2Daf2f%2D08b797331fb3

## 4. Datastore Report<a name="DS"></a>

???+ "Steps to create the report"
     
     <span style="color: blue;"><b><i>Step 1:</b></span></i>
     Source data is received from cloud team via email

     ![CACF](images/ds.png)

     <span style="color: blue;"><b><i>Step 2:</b></span></i>
     Download and open the file, delete columns  B, C, E and I and apply filters, Datastore column , search for cache, and delete all the rows corresponding to it

     <span style="color: blue;"><b><i>Step 3:</b></span></i>
     % should be calculating on the last column  = Utilized in GB/Capacity in GB.

     ![CACF](images/ds1.png)

     <span style="color: blue;"><b><i>Step 4:</b></span></i>
     Filter the % column for <80% and delete.

     <span style="color: blue;"><b><i>Step 5:</b></span></i>
     Then open data store template 

     <span style="color: blue;"><b><i>Step 6:</b></span></i>
     It will have 3 tabs, Previous day, Today and ME-Open paas
     ![CACF](images/ds2.png)

     <span style="color: blue;"><b><i>Step 7:</b></span></i>
     Copy from today from a to J column and paste it on Previous day tab

     <span style="color: blue;"><b><i>Step 8:</b></span></i>
     From the automated file, filter for cloud group starting with series BNE, copy and paste the data in ME openPaas tab.

     <span style="color: blue;"><b><i>Step 9:</b></span></i>
     Rest of the data in Today’s tab.

     <span style="color: blue;"><b><i>Step 10:</b></span></i>
     Both Today’s data and ME-Open Paas data is shared in Hypercare report and sent to Cloud team
     Report looks as below –

     Today
     ![CACF](images/ds3.png)
     ME-Open Paas
     ![CACF](images/ds4.png)


## 5. E2E Report<a name="E2E"></a>

???+ "Steps to create the report"

     <span style="color: blue;"><b><i>Step 1:</b></span></i>
     This report looks in to PIF data -APIS User for the last 90 days

     <span style="color: blue;"><b><i>Step 2:</b></span></i>
     There's a template created in snow – which pulls the data for this condition

     <span style="color: blue;"><b><i>Step 3:</b></span></i>
     Extract the data from snow.

     <span style="color: blue;"><b><i>Step 4:</b></span></i>
     Use the E2E file.

     <span style="color: blue;"><b><i>Step 5:</b></span></i>
     Open the E2E report, clear the cells from A to U excluding heading.

     <span style="color: blue;"><b><i>Step 6:</b></span></i>
     Copy the extracted data and paste it to the E2E report 2nd tab Sheet 1
     
     <span style="color: blue;"><b><i>Step 7:</b></span></i>
     Refresh the data in sheet 2.

     <span style="color: blue;"><b><i>Step 8:</b></span></i>
     This should be uploaded on BOX
     
     <span style="color: blue;"><b><i>Step 9:</b></span></i>
     https://enterprise.ent.box.com/folder/99039804970

     <span style="color: blue;"><b><i>Step 10:</b></span></i>
     The same file should be sent to Enterprise on every Monday.
     ![CACF](images/e2e.png)

 
## 6. Daily WIF Report<a name="WIF"></a>

## 7. I2BCK SLA/SLO (2nd Copy Replication)<a name="i2bck"></a>

## 8. PIAAS I2BCK Report<a name="PIAAS I2BCK"></a>

???+ "Steps to create the report"

      <span style="color: blue;"><b><i>Step 1:</b></span></i>
         Working report Name - PIaaS_I2BCK_DLY_audit_logs - VM and DB View DD-Month– Update the date for which report is prepared

      <span style="color: blue;"><b><i>Step 2:</b></span></i>
         Share point link for automated report:  https://enterprise.sharepoint.com/sites/EnterpriseReportdelivery/SitePages/ProjectHome.aspx
         ![CACF](images/bck.png)

      <span style="color: blue;"><b><i>Step 3:</b></span></i>
          Path to download the automated report - Enterprise Report delivery - EnterpriseREPORTDELIVERY\PIAAS\REPORTS\I2BCK\OPERATIONAL
           
      <span style="color: blue;"><b><i>Step 4:</b></span></i>
          For NA we use N-1 report for other regions we should use same day report

      <span style="color: blue;"><b><i>Step 5:</b></span></i>
         Go to DB View & VM View
         <p>![CACF](images/i2b.png)</p>

      <span style="color: blue;"><b><i>Step 6:</b></span></i>
         Copy the data from F to S Colum
         ![CACF](images/i2b1.png)

      <span style="color: blue;"><b><i>Step 7:</b></span></i>
         Paste the date from E Colum.
         ![CACF](images/i2b2.png)

      <span style="color: blue;"><b><i>Step 8:</b></span></i>
         Delete the data in in S Colum.
         ![CACF](images/i2b3.png)

      <span style="color: blue;"><b><i>Step 9:</b></span></i>
         In S Colum enter the date for which we are preparing the report
         ![CACF](images/i2b4.png)

      <span style="color: blue;"><b><i>Step 10:</b></span></i>
         Validate the DB Details in DB View in working report with the automated report.

      <span style="color: blue;"><b><i>Step 11:</b></span></i>
         To validate download the automated report from share point link. For the region we are working on.
         ![CACF](images/i2b5.png)   

      <span style="color: blue;"><b><i>Step 12:</b></span></i>
         In automated report put a vlookup formula in L Colum 
         ![CACF](images/i2b6.png)
        <p>=Vlookup(Select B2 Colum in automated report, Select complete A Colum of DB view in working report,1,0)</p>
         ![CACF](images/i2b7.png)
         ![CACF](images/i2b8.png)

      <span style="color: blue;"><b><i>Step 13:</b></span></i>
         Drag and drop formula till the end of the sheet.

      <span style="color: blue;"><b><i>Step 14:</b></span></i>
         Apply filler on and Select N/A in L Colum.
         ![CACF](images/i2b9.png)

      <span style="color: blue;"><b><i>Step 15:</b></span></i>
         In K column Type if there is DB.
         ![CACF](images/i2b10.png)

      <span style="color: blue;"><b><i>Step 16:</b></span></i>
         If there is no DB no action required. If we find DB we’ll have to select that and should copy the Node Name in B column and should paste it in DB view working sheet A column at the end of the sheet.
         ![CACF](images/i2b11.png)

      <span style="color: blue;"><b><i>Step 17:</b></span></i>
         Validate the VM Details in VM View in working report with the automated report.

      <span style="color: blue;"><b><i>Step 18:</b></span></i>
         In automated report put a vlookup formula in L Colum
         ![CACF](images/i2b12.png)
         <p>=Vlookup(Select D2 Colum in automated report, Select complete A Colum of VM view in working report,1,0)</p>
         ![CACF](images/i2b13.png)
         ![CACF](images/i2b14.png)

      <span style="color: blue;"><b><i>Step 19:</b></span></i>
         Drag the formula till the end of the sheet.

      <span style="color: blue;"><b><i>Step 20:</b></span></i>
         Apply filler on and Select N/A in L Colum.
         ![CACF](images/i2b15.png)

      <span style="color: blue;"><b><i>Step 21:</b></span></i>
         In K column “Type” if there is VM.
         ![CACF](images/i2b16.png)

      <span style="color: blue;"><b><i>Step 22:</b></span></i>
         If there is no VM no action required. If we find VM we’ll have to select that and should copy the Filespace Name in D column and should paste it in DB view working sheet A column at the end of the sheet.
         ![CACF](images/i2b17.png)
         ![CACF](images/i2b18.png)

      <span style="color: blue;"><b><i>Step 23:</b></span></i>
         Updating replication status on working sheet.
         Replication successful = OK
         Replication Failed = KO

      <span style="color: blue;"><b><i>Step 24:</b></span></i>
         For DB data. In Working Sheet D Colum “Today” in ME DB View we’ll have to put a formula. 
         =VLOOKUP(Select A2 ,in automated report select data from B to J,9,0)
         Sample formula =VLOOKUP([@[Filespace Name]],'[ME_PIaaS_Operational_I2BCK_DLY_audit_logs_2022-08-01.xlsx]SLA'!$B:$J,9,0)
         ![CACF](images/i2b19.png)
         ![CACF](images/i2b20.png)

      <span style="color: blue;"><b><i>Step 25:</b></span></i>
         Once the formula us applied value will appear on D Colum working Sheet.
         ![CACF](images/i2b21.png)

      <span style="color: blue;"><b><i>Step 26:</b></span></i>
         Apply filter and Select Replication successful. In “S” column mention “OK “  if we have any Replication failed values select that from the filter and & mention “S” Colum. For N/A values we should leave that blank in “S” Colum. Once we fill the data in S Colum. Delete the data from D column.
         ![CACF](images/i2b22.png)

      <span style="color: blue;"><b><i>Step 27:</b></span></i>
         For VM data. In Working Sheet D Colum “Today” in VM View we’ll have to put a formula. 
         <p>=VLOOKUP(Select A2 ,in automated report select data from D to J,7,0)</p>
         Sample formula
         <p>=VLOOKUP([@[Filespace Name]],'[ME_PIaaS_Operational_I2BCK_DLY_audit_logs_2022-08-01.xlsx]SLA'!$D:$J,7,0))</p>

      <span style="color: blue;"><b><i>Step 28:</b></span></i>
         Apply filter and Select Replication successful. In “S” column mention “OK “  if we have any Replication failed values select that from the filter and & mention “S” Colum. For N/A values we should leave that blank in “S” Colum. Once we fill the data in S Colum. Delete the data from D column.

      <span style="color: blue;"><b><i>Step 29:</b></span></i>
         Entering Value in DB and VM for region we are working on in working sheet. Move to DB tab. Refresh the sheet 
         ![CACF](images/i2b23.png)

      <span style="color: blue;"><b><i>Step 30:</b></span></i>
         Post refreshing do the right click and select Show field list. In Pivot table fields select the date for which we are working on. Once is selected check if value is appearing in main sheet. Repeat the same steps for VM as well.
         ![CACF](images/i2b24.png)
         ![CACF](images/i2b25.png)
         ![CACF](images/i2b26.png)

      <span style="color: blue;"><b><i>Step 31:</b></span></i>
         Validate the data is accurate in Summary tab of working sheet.
         ![CACF](images/i2b27.png)

      <span style="color: blue;"><b><i>Step 32:</b></span></i>
         Repeat the above steps for all the regions.

      <span style="color: blue;"><b><i>Step 33:</b></span></i>
         Uploading the file to ISC portal.

      <span style="color: blue;"><b><i>Step 34:</b></span></i>
         ISC portal link - https://www.ibm.com/services/connect/portal/

      <span style="color: blue;"><b><i>Step 35:</b></span></i>
         Once logon to ISC portal click on document. Click on Access Documents and other collaborative features.
         ![CACF](images/i2b28.png)

      <span style="color: blue;"><b><i>Step 36:</b></span></i>
         Once we click on Access Documents and other collaborative features. It will take you new page. Select Enterprise report.
         ![CACF](images/i2b29.png)

      <span style="color: blue;"><b><i>Step 37:</b></span></i>
         Select Enterprise I2BCK_Reports.
         ![CACF](images/i2b30.png)

      <span style="color: blue;"><b><i>Step 38:</b></span></i>
         Select Daily.
         ![CACF](images/i2b31.png)

      <span style="color: blue;"><b><i>Step 39:</b></span></i>
         Click on Add. Select new upload
         ![CACF](images/i2b32.png)

      <span style="color: blue;"><b><i>Step 40:</b></span></i>
         Browse a file and upload the file.
         ![CACF](images/i2b33.png)

      <span style="color: blue;"><b><i>Step 41:</b></span></i>
         Post upload we’ll have send email to following email id’s.

      To : Suma Maraiah <Suma.Maraiah@enterprise.com>; Kalli Reddy <Kalli.Reddy@enterprise.com>; Parthasarathy Srinivasan <Parthasarathy.Srinivasan@enterprise.com>; Enterprise_Backup <sre_backup@enterprise.com>; Abbas Ali R Abbas.Ali.R@enterprise.com

      CC: SUNITHA SREEJITH <Sunitha.Sreejith@enterprise.com>; SANJU PHILIP <Sanju.Philip@enterprise.com>; Enterprise-PIAAS-AccountTeam <Enterprise-PIAAS-AccountTeam@enterprise.com>; Enterprise-SAMs Enterprise-SAMs@Enterprise.com Seema Vijay Seema.Vijay@enterprise.com .

      ![CACF](images/i2b34.png)