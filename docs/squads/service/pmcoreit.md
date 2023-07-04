---
template: overrides/main.html
title: PM Overview
---

# <b>AXA Problem Management - COREIT</b>

## 1. AXA Problem Management Process Flow

???+ "Flowchart - Lifecycle of a Problem record"

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

## **2. Problem Management**

This section of the AXA / Kyndryl Process Interface Manual (PIM) provides interfaces for requesting and obtaining in-scope services pursuant to the Master Services Agreement with Kyndryl for PIaas services. Nothing contained in this document is intended to amend the terms and conditions of the Agreement, and in the event of a conflict, the Agreement takes precedence.
This document is intended to be used by both AXA and Kyndryl personnel responsible for providing the required services.

### 2.1. Description

Problem Management minimizes the Impact of Problems affecting the availability and services in the AXA environment through analysis, tracking and prevention of Problems from impacting managed IT resources. Problem Management resolves Problems affecting the IT service, both reactively and proactively. Problem Management finds trends in Incidents, groups those Incidents into Problems, identifies the Root Causes of Problems and initiates Change Requests (RFCs) required to implement workarounds and to fix the Problems. The process is primarily concerned with establishing the Root Cause of an Incident and its subsequent resolution and prevention. The reactive function is to solve Problems relating to one or more Incidents. The proactive function is to identify and solve Problems before Incidents occur. 

## <b>3. Scope</b>

Following is the scope of Problem Management as it relates to AXA:

  - Problem Management applies to IT services and components managed by Kyndryl: PIaas 
  - Problem analysis and review of items listed in Problem Analysis Criteria section
  - Root Cause investigation
  - Creation & Submission of Post-Mortem reports, post Incident resolution & Final communication.
  - Production of Root Cause Analysis (RCA)
  - Management of Problem records and review of the status of corrective actions
  - Kyndryl is responsible for Kyndryl owned Problems (internal) and AXA is responsible for related Problems.

## <b>4. Responsibility Matrix</b>

???+ info "RACI Matrix:"

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


## <b>5. Problem Manager</b>
 
The Problem Manager role is responsible for Problem Management and to assign the Problem record to different Service Provider Problem Managers based on the scope of the Problem.
In case the Problem Manager is unable to assign a ticket to a Problem Manager, the appropriate Service Manager is engaged.

???+ info "Specific responsibilities include:"

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

## 6. Problem KPI IR-PI02
    
IR-PI02 : « Post Mortem » P1 and P2 incident report distribution

   **Functional Description**

   This KPI measures the delay within which the "Post Mortem" P1 and P2 incident report (global report containing all details of the event, including Root Cause Analysis, resolution method, possible workarounds etc) is distributed.

   **Indicator Definition**

   IR-PI02 : Rate of respect of the delay of distribution of the "Post Mortem" report when incident is resolved by Kyndryl.

   **Service Level**

   IR-PI02 < 2 days in 100% of the events

   **Calculation Method**

   IR-PI02= Number of P1 and P2 incidents where the "Post Mortem" report has been distributed within the delay / Number of P1 and P2 Incidents resolved during the period.

   **Frequency**

   Monthly

   **Scope**

   All P1 and P2 incidents (= severity 1 and 2 at Kyndryl side) raised by AXA or by monitoring or by Kyndryl with AXA impact (outage or loss of performance/functionality,..) that were resolved during the month - i.e. that went thru a "Resolved" status in Kyndryl ITSM tool during the month.
   In order to ensure a validation from AXA, the Post Mortem should contain the following information (with the ad hoc level of quality):
 
   * Chronology of events
   * Exhaustive impacts identification
   * Root Cause Analysis (identified or not, eradicated or not, following a change or not)
   * Resolution method (remediation action plan to avoid any new occurrences)
   * Possible workarounds recommendations (to avoid any new occurrences)

## 7. Customer Focal

   AXA Focal acts as a primary interface for AXA IT and other Service Providers to Problem Management, representing AXA IT interests toward meeting Service commitments.
   <p>Specific responsibilities include:</P>
    
   * Providing communications and updates to AXA as part of formal and agreed escalation Process
   * Acting as a point for escalation and mediator for situations that Problem Manager is unable to resolve
   * Acting as a point of contact for cross provider for Problem Management Integration
   * Acting as a point for escalation and mediator for cross supplier Problems
   * Monitoring for adherence of proper notifications and escalations
   * Managing multi provider escalations for Problem Management activities
   * Providing input to Problem Manager for categorization for multi provider Problems
   * Providing input to Problem Manager for assignment/reassignment for multi provider Problems.
   * Participating in escalations for process compliance issues.
   * Approving target date extensions based on SLA, target, or guideline as appropriate for Problem completion.
   * Approving extensions to action item target dates.
   * Attending the Problem Management related meetings.
   * Verifying completion of any assigned actions.
   * Assisting Kyndryl to determine business impact.
   * Approval for problem closure

### 7.1. Kyndryl Customer Liaison 
   ITSM LEAD / DPE (Delivery Project Executive)

  The Customer Liaison serves as the primary liaison between AXA (not the user) and the IT organization and promotes interaction between the two. This role helps AXA identify the most appropriate point of contact within the IBM IT organization and helps clarify communication between the two parties.
  <p>Specific responsibilities include:</p>

   * Facilitating the identification and resolution of AXA satisfaction issues
   * Assisting in engaging AXA to act on CORE IT related activities in the Problem Management process. CORE IT Changes or actions assigned to AXA.

## 8. Problem Analysis Criteria

  The Problem may be initiated automatically or at the request of the appropriate requester. Requests for out-of-scope services are managed via email,
    <p>The following criteria indicate a need for a Problem Record:</p>

   * (Priority 1 and Priority 2) Incidents that are not related to an existing Problem.
   * Incidents with Business Impact to the environment.
   * Incidents with recurring trends that potentially have a Business Impact.
   * Missed Service Level Agreement (SLA).
   * Requests approved by IBM Executive Management.
   * A failed Change resulting in impact to the environment

  <p>The following items are the minimum required information to log the Problem Record:</p>

   * Unique Problem record identifier
   * Date and Time Problem recorded
   * Name/Contact details of the user reporting the Problem
   * Description of Problem including any relevant information obtained from data source(s) such as Incident/Change Management and any actions already taken to assist with the investigation
   * Priority based on impact and urgency assessment
   * Configuration item(s) (CIs), assets or devices involved
   * Classification (category)
   * Indication, where Problem has been proactively identified
   * Any Third-Party record number for referencing purposes
   * Defined Problem Manager / support group to which the Problem is assigned

## 8.1. Root Cause Analysis and Documentation

   Root Cause is defined as the underlying or original cause of an Incident or Problem and once eliminated or altered, will minimize or prevent the recurrence of Incidents and Problems.
   Root Cause Analysis (RCA) is a structured activity performed to identify the Root Cause using the most suitable technique or methodology. IBM has identified the 5 Why’s methodology as the best practice for Root Cause Analysis. 
   A Root Cause Analysis must be conducted for each Problem unless an identical Root Cause Analysis has already been performed. The results of a Root Cause Analysis must be documented in the Problem Record.
   The Problem Manager reviews and accepts the results prior to communicating the information to relevant parties.
   Where Root Cause Analysis was performed, however, the underlying cause of a Problem could not be identified, the assigned owner is to establish a mitigation plan or preventative measures to reduce the impact of the unresolved Problem so as to:

   * Capture additional data to assist with Root Cause identification (if feasible)
   * Prevent future Incidents
   * Additional information has been captured to assist with Root Cause determination
   * Incident count related to that Problem has increased
   * Existing Impact, urgency and priority of Problem has changed
   * Proposed solutions require reconsideration
   If no workaround or Root Cause is found determine whether additional effort is required to be spent in investigating the Problem.

## 9. Governance

  |Primary Contacts|Name|Email|
  |:----------|:-----------:|:----------:|
  |AXA Customer Focal| Simon Squance|Simon.squance@axa.com|
  |Kyndryl Problem Management Team Lead / Focal|Penin Priya/<p>Sreeranga Raghavan</p>|Penin.Priya@kyndryl.com<p>Sreeranga.Raghavan@kyndryl.com</P>|
  |IBM Service Manager (ITSM Leader)|Anitha Kodigemakki|Anitha.kodigemakki@kyndryl.com|
  |Incident management Focal|Raghav Nayak|Raghav.Nayak@kyndryl.com|

  |Meetings|Description|Frequency|Day/Time|
  |:------|:-----------|:-------:|:----:|
  |Problem Review Meeting (External)|This will be a meeting which will be conducted alongside the scheduled weekly meeting for Private Iaas. The meeting will have one section to discuss Incidents and Problems.| Weekly|Friday|
  |Problem Review Meeting (Internal)|Track the status of all open actions|Weekly|Thursday|
  |SLA/KPI Review|IR-PI02 Postmortem report distribution|Monthly|1st week of the month|
  
