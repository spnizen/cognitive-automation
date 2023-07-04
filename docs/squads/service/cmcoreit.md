---
template: overrides/main.html
title: CoreIT CM Overview
---

# <b>Enterprise Change Management</b>
## <b>1 Change Managemet</b>

This section of the Enterprise / Enterprise Process Interface Manual provides customer interfaces for requesting and obtaining in-scope services pursuant to the Master Services Agreement with Enterprise. Nothing contained in this document is intended to amend the terms and conditions of the Agreement, and in the event of a conflict, the Agreement takes precedence.
This document is intended to be used by both Enterprise and KYNDRYL personnel responsible for providing the required services.

## <b>1.1 Description </b>

Change / Deployment Management facilitates successful introduction of Changes.
Change Management controls the assessment, authorization, scheduling and monitoring of Changes.
Deployment Management Places Releases or Changes into their target environments and activates them.

## <b> 1.2 Scope</b>

Following is the scope of Change:

  - Change Management is used for IT hardware and software in scope of the Agreement 
  - Deployment Management is used for: 
      1.  system and applications supported by KYNDRYL.  
      2.	Infrastructure environments. 
      3.	Upgrade (Windows SP / AIX TL…): Deploy new image in production after Enterprise validation.
      4.	Migration (New Operating System Version): Deploy new image provided by Enterprise.



## <b>1.3 Responsibility Matrix</b>

??? info "Change Management RACI"

    |Key Activities| Enterprise | Enterprise|
    | :--------- |:-----------| :----------|
    |Change Planning when change is required|R,A,C,I|C,I|
    |Assess for Business Impact|R,A,C,I|C,I|
    |Create and Submit the Change Request for assessment and approval|A,R,I|I|
    |Filter Validate and accept change request |A,R,I|A,R|
    |Obtain Additional information|R,A,C,I|A,R|
    |Approve or Reject change |R,A,C,I|A,R|
    |Create and publishing daily Forward Schedule of operation Changes (FSC)|A,R,I|A,R|
    |Schedule and chair Change Advisory Board Meeting (CAB)|A,R,I | A,R,I |
    |Address Pre-authorization change requirements|R,A,C,I|R,I|
    |Provide leadership/guidance for Change Implementation in exceptional situations as required e.g critical/expedited changes |A,R,I|C,I|
    |Monitor Policy and Procedure Compliance (w.r.t change  rish. process)|A,R,I|A,R|
    |Notify Stakeholders of Authorization, Schedule, or Cancellation|R,A,C,I|C,A|
    |Implement and Monitor Changes|R,A,C,I|I|
    |Conduct Change reviews|R,A,C,I|A,R,I|
    |Close Change record with documented results and evidence|R,A,C,I|C,I|
    |Manage Escalations|R,A|R,A,I|
    |Provide Change Management Process Measurements|R,A,I|R,A,I|
    |Support Audit requirements/deliverables for Change Management process|R,A,C,I|R,A,I|
       


## <b>1.4 Change Manager</b>
 
The Change Manager ensures that the Change Management process is executed and is accountable for day-to-day management and the integrity of the process. They are the main coordinator within this process and is the focal point regarding changes for the IT organization. They prioritize change requests, assess their impact, and accept or reject changes. They also document change management processes and change plans.

??? info "Specific responsibilities include:"

    -	Acting as focal point for process execution to the IT organization and other stakeholders 
    - Building upon the defined Process Framework to provide process lifecycle management 
    - Providing input for process improvement and facilitating process improvement implementation as applicable 
    - Identifying and submitting process exceptions and deviations for review and approval 
    - Performing/coordinating day to day process management 
    - Being accountable for creation and maintenance of process/procedure documentation required for approved variation and deviation of standard processes/procedures and additional procedures, as needed 
    - Ensuring that the standard procedures are communicated to practitioners 
    - Utilizing the appropriate reporting management system to provide process performance reports, trending, and analysis 
    - Following defined escalation path when needed, as defined in the escalation policy 
    - Monitoring and tracking process execution activities to identify, initiate and manage required action to meet service level agreements 
    - Taking appropriate action in case of negative process performance trends 
    - Owning, maintaining, and publishing the authorized Forward Schedule of Change and Projected Service Outage - as applicable (PSO) 
    - Identifying requests for change or changes that have not been acted upon in a timely manner and taking appropriate action 
    - Taking corrective action or escalating in case of issues with the interfaced processes, Release Management and Deployment Management when the performance of the Change Management process is impacted or related SLAs are at risk Revision 
    - Preparing list of successful and failed changes closed for review at CAB meeting 
    - Preparing the CAB meeting, including inviting of participants, creating of agenda, creation and circulation of Forward Schedule of Change and Projected Service Outage (PSO) - as applicable 
    - Chairing the Change Advisory Board (CAB) 
    - Ensuring all applicable changes on the Forward Schedule of Change are reviewed
    - Ensuring that authorized changes are communicated in a timely manner 
    - Owning and maintaining the Standard Changes List 
    - Generating process-related reports and communicating them to subscribed stakeholders 
    - Assisting in overseeing current status of change records and tracking progress 
    - Assisting in notifying stakeholders when action from them is needed and tracking action completion 
    - Assisting in applying escalation procedures when action item status requires it
    

## <b>1.5	Change Management  (Process flowchart ) :</b>

??? "Flowchart - Lifecycle of a Change record"

  ``` mermaid
        flowchart TD;

        S((Start))==>X
        X([Request for change using the regional template - Change owner]) ==> A[Review the Risk& impact, Schedule - Enterprise CM];
        B[Notify swivel chair to Create Silva change  and Assign to correct assignment group - Change Owner] ==> C[Validate Silva change and get Silva change updated -Enterprise CM];
        A ==> B;
        D[Send email Enterprise local point of contact - Enterprise CM] ==> E[Enterprise POC to present change in Enterprise regional CAB];
        C ==> D;
        F[Enterprise POC to provide update on CAB decision] ==> G{Approved} ==> |Yes| G1[Attach approval artifact to Snow - Enterprise CM];
        G ==> |No| G2[Provide required info - Change owner]
        E ==> F;
        G2 ==>D;
        H[Notify Change owners to secure necessary approval] ==> I[Monitor the change implementation];
        J[Conduct the PIR and close the change] ==> K[Notify swivel chair to add the closure comment in Silva - Change owner];
        G1 ==> H;
        I ==> J;
        Y([Enterprise POC close the change in Silva])
        K ==> Y ==> T((End))




  ```

## <b>1.6	Change Lead Time :</b> 

??? info "<b>Local lead time : </b>"

    |  | Critical (Risk 1)| Major (Risk 2) | Medium (Risk 3)| Minor (Risk 4) | Standard & BAU (Risk 5) |
    | :------ | :------ | :------ | :------ | :------ | :------ |
    |**ASIA**|15 Business Days| 10 Business Days| 10 Business Days| 3 Days | < 1 Day | 
    |**Middle Europe**| 15 Days| 10 Days | 10 Days | 3 Days | < 1 Day |
    |**North America**| 15 Days| 10 Days | 10 Days | 3 Days | < 1 Day |
    |**North Europe**| 15 Days| 10 Days | 10 Days | 3 Days | < 1 Day |
    |**South Europe**| 15 Days| 10 Days | 10 Days | 3 Days | < 1 Day |
    |**Global**| 15 Business Days | 10 Business Days | 10 Business Days | 5 Business Days | < 1 Day |
    | **Urgent** |<td colspan="4">24hr (Best Efforts to support urgent approval process in respect to different timezones)</td>|
    |**Emergency/Retro**| <td colspan="4">0 days with supporting P1 or P2 and SDM/DPE approval</td>|
    


## <b>1.7	Enterprise Point of Contact (POC) :</b>

??? info "<b>Point of Contact for BaaS (Backup as a Service) : </b>"
   
    |Region  |Name |Email ID |
    | :------------ | :-------------| :-------------|
    |**ASIA**|CG Backup Team|atss_in_dl_backup.ops.in@capgemini.com|
    |**Middle Europe**|Steve Sloman|steve.sloman@sre.com|
    |**North America**|Noe Jonathan Rembrandt, HERNANDEZ MARQUEZ Gustavo,Jose Carlos|noerembrandt.velazquez@sre.com, gustavo.hernandez@sre.com, JoseCarlos.Patron@sre.com|
    |**North Europe**|Philip Weets|philip.weets.external@sre.com|
    |**South Europe**|Steve Sloman|steve.sloman@sre.com|

??? info "<b>Point of Contact for BufferIT  & StoaaS (Storage as a Service ) : </b>"

    |Region| Name| Email ID|
    | :------------ | :-------------| :-------------|
    |**ASIA**|Joel Choong, Michael Palmares|joel.choong@sre.com , michael.palmares@sre.com|
    |**ME**|Tom Whaley, Robert Kovac, Alfonso Santamaria|tom.whaley.external@sre.com ,robert.kovac@sre.com , alfonso.santamaria.external@sre.com|
    |**NE**|Wim|wim.backx@sre.com|
    |**SE**|David Gamar, Assana Diawara|david.gamard@sre.com , assana.diawara.uniware@sre.com|

??? info "<b>SDM and Over PoC Enterprise : </b>"  

    |Business Service|Enterprise SDM|Enterprise Overall PoC|
    | :----------| :-----------| :--------------|
    |**BaaS**| Suneetha shreejith, RAJESH PILLAI| Philip Weets, Francis Hufkens|
    |**BufferIT**| Suneetha shreejith, RAJESH PILLAI| Guido Engel|
    |**StoaaS**| Suneetha shreejith, RAJESH PILLAI| Guido Engel|

   




