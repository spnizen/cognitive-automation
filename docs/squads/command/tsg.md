---
template: overrides/main.html
---

???+ important " QUICK GUIDE "
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
    __A__ = Information Gathering   
    __B__ = Analysis and Planning  
    __C__ = Implementation of a solution   
    __D__ = Assessment of the effectiveness of the solution  
    __E__ = Documentation of the incident 
    __F__ = Preview in browser



#Steps of Troubleshooting

The systematic approach to troubleshooting should involve these basic steps:

 
##Information Gathering

Information Gathering  Before we can determine how to address a problem--or even assess what the problem is--we must gather information. Gathering information can be particularly challenging when the problem manifests itself at the client side. You might have to formulate your questions carefully in order to get meaningful information. Log files contain great information you should consult during the data-gathering stage. Both the Windows logs and the AIRA logs should be consulted. Also check to see if all Services are running properly.


##Analysis and Planning

Analysis Once we have gathered the data (including attempting to reproduce the problem), it's time to analyze the data.  The primary task in this phase is to look for patterns. An important part of the analysis phase involves prioritizing. This includes prioritizing the problems, if there are multiple problems. Performance problems are generally less urgent than access problems.

 
##Implementation of a solution
 
Below we will address these steps individually. 
Solution Implementation Although there could be several possible solutions to a problem, you should always implement one change at a time. Assess the results of that change before trying something else. This will save you time in the long run.

 

##Assessment of the effectiveness of the solution

Assessment  It is vital that you assess the results of your actions and determine whether the "fix" worked, whether it was a temporary work around, or whether it caused additional problems.

 

##Documentation of the incident

Documentation After completing your assessment, you should develop a summarization of the problem, which should include the reported and observed symptoms, the corrective actions taken, and the results of those actions.