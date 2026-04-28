---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Last updated: April 2026 &nbsp; | &nbsp; [Download PDF](/files/cv.pdf)

## Research Interests

Computer Vision, Embodied AI, World Models.  
Compositional Generative Model, Scene Understanding, Spatial Reasoning.

## Education

**ShanghaiTech University** — Shanghai, CHN  
*B.E. in Computer Science and Technology, Minor in Life Sciences* | Sep. 2023 – Jun. 2027 (expected)

- **AI Honor Class**
- Overall GPA: 3.82/4.0 (Rank 9/173 in CS major)
- General Evaluation Ranking: Rank **1/173** in CS major
- Relevant Coursework: Intro. to Information Science and Technology (A+), Intro. to Programming (A), Algorithms and Data Structures (A), Intro. to Machine Learning (A-), AI in Medical Imaging (A), Computational Science and Engineering (A+), Computer Architecture (A-) & Project (A), Protein Design (A+), Game Theory (A)

**Harvard University** — Cambridge, USA  
*Visiting Undergraduate Student* | Sep. 2025 – May 2026

- Overall GPA: 4.0/4.0
- Relevant Coursework: Signal Processing (MIT cross-registration) (A), Computer Vision (A), Planning and Learning Methods in AI (A), Hardware Architecture for Deep Learning (MIT cross-registration) (in progress), AI for Molecular Biology (in progress), High Performance Computing (in progress)

## Awards & Honors

- **Merit Student** (Top 2% in school), ShanghaiTech University, 2023–2024
- **Merit Student** (**Top 1** in CS major), ShanghaiTech University, 2024–2025
- **AI Honor Class** (Honors Degrees), ShanghaiTech University, 2024–2027 (expected)
- **Gold Medal**, International Genetically Engineered Machine Competition (iGEM), 2024
- **First Place**, Analytical Performance, SensUs Competition, 2025
- **Outstanding Mentor Assistant**, ShanghaiTech University, 2023

## Research Experience

**Embodied Minds Lab, Harvard University & Kempner Institute** — Cambridge, USA  
*Visiting Undergraduate Research Assistant* | Sep. 2025 – present  
Supervisors: Prof. [Yilun Du](https://yilundu.github.io/) & Dr. [Ruojin Cai](https://ruojincai.github.io/)

- Developed an **inverse generative modeling** framework for scene understanding on both synthetic and real-world datasets, training a relation-conditioned composable diffusion model that generates scenes from structured object-attribute and spatial-relation inputs.
- Focused on unsupervised **object-relation discovery with Diffusion Models**, enabling generative models to perform text-image attribution analysis on both synthesized and real-world images.
- Investigated the potential of improving compositional generation with unsupervised relation discovery in a training-free manner, achieving **SOTA** performance on the 2D spatial relation dataset VISOR.

**Perception, Learning and UnderStanding (PLUS) Lab, ShanghaiTech** — Shanghai, CHN  
*Undergraduate Research Assistant* | Jan. 2025 – Sep. 2025  
Supervisor: Prof. [Xuming He](https://faculty.sist.shanghaitech.edu.cn/faculty/hexm/index.html)

- Investigated **Compositional Scene Generation** with scene-graph-based diffusion models.
- Focused on learning disentangled representations from scene graphs, enabling flexible control over the generation process.
- Explored Classifier-Free Guidance and training-free methods in image generation.

## Selected Competitions

**PACIFY** – iGEM 2024 [[wiki](https://2024.igem.wiki/shanghaitech-china)] | Dec. 2023 – Oct. 2024  
*Team Member*

- Performed homology modeling to obtain protein structures and used AlphaFold 2 for structure prediction.
- Operated protein preparation and molecular dynamics simulation.
- Developed devices based on PID algorithm to address itchiness without harming the skin.

**MakeSense, ShanghaiTech First SensUs Team** | Aug. 2024 – Aug. 2025  
*Co-Founder & Leader of Data Analysis Team*

- Developed a wearable biosensor-based device to continuously monitor acute kidney injury (AKI) biomarkers.
- Invested in an enzyme-based creatinine sensor and QCM (Quartz Crystal Microbalance) platform.
- Set up a data analysis pipeline to process sensor data, achieving near-perfect accuracy in predicting creatinine concentration.
- **First Place** in Analytical Performance: *"This team did an absolutely remarkable job with unprecedented results and near-perfect accuracy. This is a first in SensUs history and sets a new benchmark for other teams, especially as a first-time participating team."* — SensUs Committee.

## Selected Projects

**De Novo Design of Odorant Binding Proteins for Breast Cancer Detection** | Dec. 2024 – Jan. 2025  
*Course Project, Supervisor: Prof. Jiayi Dou*

- Designed three novel Odorant Binding Proteins (OBPs) to specifically recognize VOCs (hexanal, octanal, nonanal) that serve as biomarkers for breast cancer.
- Executed a complete de novo computational design pipeline (RFdiffusionAA + LigandMPNN).
- Validated designs using AutoDock, PyRosetta, and ESMFold, demonstrating significantly higher binding affinity and stability.

**Neural Olfactory Sensing and Evaluation (NOSE)** | May. 2025 – Jun. 2025  
*Course Project for Intro. to Machine Learning, Supervisor: Prof. Yujiao Shi*

- Fine-tuned **MoLFormer**, a large chemical language model, on the GS-LF olfactory dataset for specialized odor prediction tasks.
- Evaluated against **OpenPOM** on Keller-2016, performing odor label classification and pleasantness rating prediction.
- Achieved state-of-the-art performance, matching or surpassing OpenPOM on key metrics.

**Phase-Adaptive Quantization for AI Accelerators** | Apr. 2026 – May 2026  
*Course Project for Hardware Architecture for Deep Learning, Supervisor: Prof. Joel Emer & Prof. Vivienne Sze (MIT)*

- Designed a **phase-aware 4-bit quantization design-space exploration** framework for LLM, VLM, and VLA inference workloads, comparing prefill and decode regimes across NVFP4-like, MXFP4-like, and custom rescale pipelines.
- Built an automated **AccelForge** experiment flow to generate workload/architecture YAMLs, run hardware energy/latency sweeps, extract per-einsum bottleneck breakdowns, and resume long-running Docker-based mappings.
- Implemented a Python quantization accuracy emulator using real model tensor snapshots to evaluate per-layer cosine similarity and combine accuracy with hardware cost for Pareto frontier analysis.
- Demonstrated that decode and prefill favor different quantization configurations, motivating **phase-adaptive datapaths** over a single fixed 4-bit format.

## Technical Strengths

| | |
|---------------------------|----------------------------------------------------------------------------|
| **Programming Languages** | Matlab, Python, C & C++, RISC-V Assembly |
| **Framework & Toolchain** | PyTorch, Git, Docker, Linux, Rosetta, CUDA, AccelForge, OpenMP, MPI |
| **Misc**                  | LaTeX, Markdown, IELTS 7.5 (6.5), CET-6 (646) |

## Publications

{% if site.publications.size > 0 %}
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% else %}
No publications yet.
{% endif %}
