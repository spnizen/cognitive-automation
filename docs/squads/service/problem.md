---
template: overrides/main.html
title: PM Overview
---

# <b>AXA Problem Management</b>
## <b>1 Problem Managemet</b>

This section of the AXA / Kyndryl Process Interface Manual (PIM) provides interfaces for requesting and obtaining in-scope services pursuant to the Master Services Agreement with Kyndryl for PIaas services. Nothing contained in this document is intended to amend the terms and conditions of the Agreement, and in the event of a conflict, the Agreement takes precedence.
This document is intended to be used by both AXA and Kyndryl personnel responsible for providing the required services.

## <b>1.1 Description </b>

Problem Management minimizes the Impact of Problems affecting the availability and services in the AXA environment through analysis, tracking and prevention of Problems from impacting managed IT resources. Problem Management resolves Problems affecting the IT service, both reactively and proactively. Problem Management finds trends in Incidents, groups those Incidents into Problems, identifies the Root Causes of Problems and initiates Change Requests (RFCs) required to implement workarounds and to fix the Problems. The process is primarily concerned with establishing the Root Cause of an Incident and its subsequent resolution and prevention. The reactive function is to solve Problems relating to one or more Incidents. The proactive function is to identify and solve Problems before Incidents occur. 

## <b> 1.2 Scope</b>

Following is the scope of Problem Management as it relates to AXA:

  - Problem Management applies to IT services and components managed by Kyndryl: PIaas 
  - Problem analysis and review of items listed in Problem Analysis Criteria section
  - Root Cause investigation
  - Creation & Submission of Post-Mortem reports, post Incident resolution & Final communication.
  - Production of Root Cause Analysis (RCA)
  - Management of Problem records and review of the status of corrective actions
  - Kyndryl is responsible for Kyndryl owned Problems (internal) and AXA is responsible for related Problems.

## <b>1.3 Responsibility Matrix</b>

??? info "RACI Matrix:"

    |(For Kyndryl owned Problems)| Kyndryl | AXA|
    | :--------- |:-----------| :----------|
    |Submitting Problem Records|R,A|C,I|
    |Performing Root Cause Analysis (RCA) and identifying cause|R,A|C,I|
    |Distributing Root Cause Analysis reports|R,A|C,I|
    |Reviewing and accepting the final RCA|R,C,I|R,A|
    |Developing workarounds and resolutions |R,A|C,I|
    |Developing the permanent resolution plan|R,A|C,I|
    |Providing input and concurrence on permanent resolution plan|R,A|C,I|
    |Implementing the permanent resolution plan|R,A|C,I|
    |Submitting Change Requests for resolution of Problems or Known Errors|R,A|C,I|
    |Hosting Problem review meetings as required|R,A|C,I|
    |Attending Problem review meetings|R,A,C,I|R|
    |Performing assigned action items|R,A,C,I|R|
    |Assigning, escalating and tracking action items to resolution|R,A,C,I|
    |Updating the Problem reporting system with the Root Cause and permanent resolution information|R,A,C,I|
    |Reviewing and approving final closure version of the RCA report|C,I|R,A|
    |Managing the Problem queue, assigning and reassigning Problems as required|R,A,C,I|
    |Performing Incident trend analysis to proactively identify and investigate Problems with the aim of resolving them before Incidents occur|R,A,C,I|
    |Producing and providing Problem Management reports (Post-Mortem & RCA)|R,A,C,I|
    |Owning and managing the Problem Management process|R,A,C,I|R|
    |Owning and managing the Problem Management tool|R,A,C,I|
    |Identifying and implementing process improvement opportunities|R,A|R,A,C,I|
    |Providing support for Problem Management tools and processes|R,A,C,I|
    |Liaising with all Problem resolution groups to verify swift resolution of Problems within SLA targets|R,A,C,I|
    |Maintaining and managing the Known Error Database (KEDB)|R,A,C,I|
    |Acting as formal closure of all the Problem tickets in SNOW.|R,A,C,I|
    |Review Incident data to analyze assigned Problems|R,A,C,I|
    |Raising Request for Service (RFC) to resolve Problems|R,A,C,I|


## <b>1.4 Problem Manager</b>
 
The Problem Manager role is responsible for Problem Management and to assign the Problem record to different Service Provider Problem Managers based on the scope of the Problem.
In case the Problem Manager is unable to assign a ticket to a Problem Manager, the appropriate Service Manager is engaged.

??? info "Specific responsibilities include:"

    -	Working with the process Execution Owner / specialist to plan and coordinate all process activities
    - Verifying all activities are carried out as required throughout the service lifecycle
    - Working with service owners and other process managers to verify smooth running of services
    - Identifying and implementing process improvement opportunities
    - Providing support for Problem Management tools and processes
    - Coordinating interfaces between Problem Management and other Service Management processes
    - Liaising with all Problem resolution groups to verify swift resolution of Problems within SLA targets
    - Acting as formal closure focal point of all Problem Records
    - Analyzing multi-Service Provider Incidents, and closed Problems, to identify and act upon trends
    - Liaising with suppliers, contractors, among others, to verify that third parties fulfil their contractual obligations, especially with regard to resolving  Problems and providing Problem-related information and data
    - Arranging, running, documenting and all follow-up activities relating to Major Problem reviews
    - Tracking and reporting delivery of RCA documents and completion of identified actions
    - Creating, analyzing and distributing process reports

## <b>1.5	Problem Management (RCA) Interface:</b>

??? "Flowchart - Lifecycle of a Problem record"

    ``` mermaid
        graph TD
        X((Start)) ==> S[MI Closed/Final Comms sent] ==> S1[PM to share postmortem template to SAM] & A[PM to create Problem ticket in Snow];
        S1 ==> S2[PM to validate the postmortem] ==> S3[PM to share the postmortem to AXA] ==> Y((End));
        A ==> A1[PM to share RCA template to SMEs] ==> A2[PM to schedule RCA review meetings with SMEs]
        ==> B{Internal approval from SRE on RCA?} ==> |Yes| B1[PM to review and share the DRAFT RCA to AXA]
        ==> C[PM to track all open actions]
        ==> C1[Publish internal weekly dashboard]
        ==> C2[Review RCA with AXA]
        ==> C3[Await for closure approval from AXA]
        ==> Z((End));
        B ==> |No| A2
    ```

