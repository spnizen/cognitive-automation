---
template: overrides/main.html
---
#Systematic Approach for Troubleshooting

???+ important " QUICK GUIDE "
    ``` mermaid
        flowchart LR
            S([Start])-->A
            A-->B
            B-->C
            C-->D
            D-->E
            E-->End([End])
            click A "./#information-gathering"
            click B "./#analysis-and-planning"
            click C "./#implementation-of-a-solution"
            click D "./#assessment-of-the-effectiveness-of-the-solution"
            click E "./#documentation-of-the-incidents"
           
    ```
    __A__ = Information Gathering   
    __B__ = Analysis and Planning  
    __C__ = Implementation of a solution   
    __D__ = Assessment of the effectiveness of the solution  
    __E__ = Documentation of the incident


##Information Gathering

Gathering information can be particularly challenging when the problem manifests itself at a device where the access level may be an issue as these may be the vendor or the customer direct resources who may be the owners. It is important to formulate the necessary questions carefully in order to get meaningful information. Log files contain great information you should consult during the data-gathering stage. Also check to see the respective product dashboards or alerts notifications if all Services are running properly.


##Analysis and Planning

Once we have gathered the data (including attempting to reproduce the problem), it's time to analyze the data.  The primary task in this phase is to look for patterns. An important part of the analysis phase involves prioritizing and arriving at a plan. This includes prioritizing the problems, if there are multiple problems. Performance problems are generally less urgent than access problems.

 
##Implementation of a solution
 
Although there could be several possible solutions to a problem, the need is to always implement one change at a time. Test, validate and assess the results of that change before proceeding with the next change. This approach will definetly save time in the long run.


##Assessment of the effectiveness of the solution

It is vital that you assess the results of your actions and determine whether the "fix" worked, whether it was a temporary work around, or whether it caused additional problems.


##Documentation of the incident(s)

After completing your assessment, you should develop a summarization of the problem, which should include the reported and observed symptoms, the corrective actions taken, and the results of those actions.




??? important " Integrated AI-OPS Home "
    ``` mermaid
        flowchart LR
            R(P1.Home)-->S1(Home)
            P2(P2.Insights)-->S2.1(Overview)
            P3(P3.Automation)
            P4(p4.Extensions)
            S1-->B(Health)
            S1-->C(Inventory)
            S1-->D(AI/ML)
            S1-->E(Admin)
            D-->F.1(Global Explainability)
            D-->F.2(Precision & Recall)
            E-->E.1(Bring Your Own Data)

    ```
??? important " Integrated AI-OPS Insights -> Dashboard "
    ``` mermaid
        flowchart LR
            S2.2(Dashboards)-->S2.2.1(Track Hardware EOS/EOL)
            S2.2(Dashboards)-->S2.2.2(Manage Inventory)
            S2.2(Dashboards)-->S2.2.3(Automation)
            S2.2(Dashboards)-->S2.2.4(Manage Backups)
            S2.2(Dashboards)-->S2.2.5(Enforce Compliance)
            S2.2(Dashboards)-->S2.2.6(IT Controls)
            S2.2(Dashboards)-->S2.2.7(Improve Automation)
            S2.2(Dashboards)-->S2.2.8(Ticketing)
            S2.2(Dashboards)-->S2.2.9(Track Transformation)
            S2.2(Dashboards)-->S2.2.10(Opersations)
            S2.2(Dashboards)-->S2.2.11(Reduce Toil)
            S2.2(Dashboards)-->S2.2.12(Optiize Spend)
            S2.2(Dashboards)-->S2.2.13(Support Mainframe)
            S2.2(Dashboards)-->S2.2.14(Track Software EOS/EOL)
            S2.2(Dashboards)-->S2.2.15(Manage Patch/Update)

    ```

??? important " Integrated AI-OPS Insights "
    ``` mermaid
        flowchart LR
            S2.1(Overview)
            ??? manage " Track Hardware EOS/EOL)
            ??? manage " Account Health Analysis)
            ??? manage " Hardware Planned Actions-EU)
            ??? manage " Market Summary Dashboard)
            ??? manage " Network EOS/EOL-Global)
            ??? manage " Physical Hardware EOS-EU)
        

    ```