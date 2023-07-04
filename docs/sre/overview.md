---
template: overrides/main.html
title: Kyndryl Tools for AXA
---

???+ important " SRE Organization Structure "
    ``` mermaid
        flowchart LR
            S[AXA Account DPE]-->A[SRE Leader]
            A-->B[SRE - CPS] 
            B-->CPS1[Solution Architecture]
            B-->CPS2[Build]
            B-->CPS3[Run]
            A-->C[SRE - Network] 
            C-->NW1[Solution Architecture]
            C-->NW2[Network Devices]
            C-->NW3[Firewall]
            A-->D[SRE - BAS] 
            D-->BAS1[Solution Architecture]
            D-->BAS2[Storage Devices]
            D-->BAS3[Backup Applications]
            A-->E[Platform SRE] 
            E-->MT0[Solution Architecture]
            E-->MT1[ITM6]
            E-->MT2[SL1]
            E-->MT3[SNow]
            E-->MT4[APM/DataDog/Grafana]
    ```

##  Overview

!!! tip "Kyndryl Strategy: Automation & Optimization to achieve ‘Zero Touch’ delivery"



## SRE Tenets and Core Skills

* Read and understand our principles and the expected core skills for any SRE.
  * SRE Tenets [page](https://kyndryl.sharepoint.com/sites/sre-kyndryl/SitePages/tenets-of-sre.aspx)
  * SRE Core Skills [page](https://w3.ibm.com/ocean/w3publisher/sre-kyndryl/sre-certification/sre-skills-conformance-guide)

## SRE Bootcamp

* For anyone new starting on the SRE journey as a profession, we recommend reviewing the following bootcamp materials. These are recorded sessions while we were still IBM GTS. The content remains valid.
  * Find playbacks at this [link](https://ec-kyndryl.yourlearning.ibm.com/kyndryl/playback/10006662)

## SRE Books

* Cross-Training of SREs by reading chapters from the `Site Reliability Engineering` and `The Site Reliability Workbook` books.
  * Group cross-training [plan](./AXA-sre-books-plan.md)
  * Google SRE Books [links](https://pages.github.kyndryl.net/kyndryl-SRE/doc-program-documentation/sre-books-reading-plan/)

## SRE Enablement Status

| **Cluster** | **Name** | **E-mail** | **SRE Specialty** | **SRE Tenets** | **SRE Core Skills** | **SRE Bootcamp** | **SRE Books** |
|:------------:|:-----------------------|:-----------------------|:-----------------------|:------------:|:------------:|:------------:|:------------:|
| `1` | Sridhar Naidu | [Sridhar.Naidu@kyndryl.com](mailto:Sridhar.Naidu@kyndryl.com) | Client Transformation Leader - SRE | N | N | N | N |
| `1` | Chim Borah | [Chim.Borah@kyndryl.com](mailto:Chim.Borah@kyndryl.com) | Platform SRE | N | N | N | N |
| `1` | Avinash Singh| [Avinash.Singh@kyndryl.com](mailto:Avinash.Singh@kyndryl.com) | Platform SRE | N | N | N | N |
| `1` | Kalli Sudhakar | [Kalli.Reddy@kyndryl.com](mailto:Kalli.Reddy@kyndryl.com) | BAS SRE | N | N | N | N |
| `1` | Kamesh  | [kameswararao.ayyagari@kyndryl.com](mailto:@kyndryl.com) | Cloud Pak SRE | N | N | N | N |
| `1` | Jaminikanta| [jaminikanta.behera@kyndryl.com](mailto:.@kyndryl.com) | Build SME | N | N | N | N |
| `1` | Penin | [Penin.Priya@kyndryl.com](mailto:Penin.Priya@kyndryl.com) | SM SME | N | N | N | N |
| `1` | Seema| [Seema.Vijay@kyndryl.com](mailto:.Seema.Vijay@kyndryl.com) | SM SME | N | N | N | N |
| `1` | Raghav| [Raghav.Nayak@kyndryl.com](mailto:Raghav.Nayak@kyndryl.com) | SM SME | N | N | N | N |
| `1` | Prasenjit| [Prasenjit.Pal@kyndryl.com](mailto:Prasenjit.Pal@kyndryl.com) | Build SME | N | N | N | N |
| `1` | Sripati| [sripati.jena@kyndryl.com](mailto:sripati.jena@kyndryl.com) | Network Architect  | N | N | N | N |

## Go Back

* Go to [Home](../index.md)

