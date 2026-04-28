---
permalink: /
title: "Wenye (Bear) Xiong  熊闻野"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am currently a **Visiting Undergraduate Student at Harvard University** (Sep. 2025 – May 2026) and an **undergraduate student at ShanghaiTech University** (B.E. in Computer Science and Technology, **Minor in Life Sciences**, expected Jun. 2027).

My research interests lie in **Computer Vision**, **Embodied AI**, and **World Models**, with a focus on **compositional generative models**, **scene understanding**, and **spatial reasoning**. Recently, I have been working on **Compositional Scene Generation**: learning disentangled representations from structured scene descriptions (e.g., scene graphs / object-relation specifications) to enable flexible control over diffusion-based generation and reasoning.

For more information, please see my [Curriculum Vitae](http://xiongwenye.github.io/files/cv.pdf).

## Research Interests

- Computer Vision
- Embodied AI & World Models
- Compositional Generative Models
- Scene Understanding & Spatial Reasoning

## Education

- **ShanghaiTech University** — B.E. in Computer Science and Technology, Minor in Life Sciences (Sep. 2023 – Jun. 2027 expected)  
  - **AI Honor Class**  
  - Overall GPA: 3.82/4.0 (Rank 9/173 in CS major)  
  - General Evaluation Ranking: Rank **1/173** in CS major  
  - Relevant Coursework: Intro. to Information Science and Technology (A+), Intro. to Programming (A), Algorithms and Data Structures (A), Intro. to Machine Learning (A-), AI in Medical Imaging (A), Computational Science and Engineering (A+), Computer Architecture (A-) & Project (A), Protein Design (A+), Game Theory (A)

- **Harvard University** — Visiting Undergraduate Student (Sep. 2025 – May 2026)  
  - Overall GPA: 4.0/4.0  
  - Relevant Coursework: Signal Processing (MIT cross-registration) (A), Computer Vision (A), Planning and Learning Methods in AI (A), Hardware Architecture for Deep Learning (MIT cross-registration) (in progress), AI for Molecular Biology (in progress), High Performance Computing (in progress)

## Awards & Honors

- **Merit Student** (Top 2% in school), ShanghaiTech University, 2023–2024  
- **Merit Student** (**Top 1** in CS major), ShanghaiTech University, 2024–2025  
- **AI Honor Class** (Honors Degrees), ShanghaiTech University, 2024–2027 (expected)  
- **Gold Medal**, International Genetically Engineered Machine Competition (iGEM), 2024  
- **First Place**, Analytical Performance, SensUs Competition, 2025  
- **Outstanding Mentor Assistant**, ShanghaiTech University, 2023  

## Experience

- **Embodied Minds Lab, Harvard University & Kempner Institute** — Visiting Undergraduate Research Assistant (Sep. 2025 – present)  
  Supervisors: Prof. [Yilun Du](https://yilundu.github.io/) & Dr. [Ruojin Cai](https://ruojincai.github.io/)  
  - Developed an **inverse generative modeling** framework for scene understanding on both synthetic and real-world datasets, training a relation-conditioned composable diffusion model that generates scenes from structured object-attribute and spatial-relation inputs.  
  - Focused on unsupervised **object-relation discovery with Diffusion Models**, enabling generative models to perform text-image attribution analysis on both synthesized and real-world images.  
  - Investigated the potential of improving compositional generation with unsupervised relation discovery in a training-free manner, achieving **SOTA** performance on the 2D spatial relation dataset VISOR.

- **Perception, Learning and UnderStanding (PLUS) Lab, ShanghaiTech** — Undergraduate Research Assistant (Jan. 2025 – Sep. 2025)  
  Supervisor: Prof. [Xuming He](https://faculty.sist.shanghaitech.edu.cn/faculty/hexm/index.html)  
  - Investigated **Compositional Scene Generation** with scene-graph-based diffusion models.  
  - Focused on learning disentangled representations from scene graphs, enabling flexible control over the generation process.  
  - Explored Classifier-Free Guidance and training-free methods in image generation.

## Selected Competitions

- **PACIFY** – iGEM 2024 [[wiki](https://2024.igem.wiki/shanghaitech-china)] — Team Member (Dec. 2023 – Oct. 2024)  
  - Performed homology modeling to obtain protein structures and used AlphaFold 2 for structure prediction.  
  - Operated protein preparation and molecular dynamics simulation.  
  - Developed devices based on PID algorithm to address itchiness without harming the skin.  
  - Awarded **Gold Medal**.

- **MakeSense, ShanghaiTech First SensUs Team** — Co-Founder & Leader of Data Analysis Team (Aug. 2024 – Aug. 2025)  
  - Developed a wearable biosensor-based device to continuously monitor acute kidney injury (AKI) biomarkers.  
  - Invested in an enzyme-based creatinine sensor and QCM (Quartz Crystal Microbalance) platform.  
  - Set up a data analysis pipeline to process sensor data, achieving near-perfect accuracy in predicting creatinine concentration.  
  - **First Place** in Analytical Performance: *"This team did an absolutely remarkable job with unprecedented results and near-perfect accuracy. This is a first in SensUs history and sets a new benchmark for other teams, especially as a first-time participating team."* — SensUs Committee.

## Selected Projects

- **De Novo Design of Odorant Binding Proteins for Breast Cancer Detection** (Dec. 2024 – Jan. 2025)  
  Supervisor: Prof. Jiayi Dou  
  - Designed three novel Odorant Binding Proteins (OBPs) to specifically recognize VOCs (hexanal, octanal, nonanal) that serve as biomarkers for breast cancer.  
  - Executed a complete de novo computational design pipeline, generating protein backbones with RFdiffusionAA and designing amino acid sequences using LigandMPNN.  
  - Validated designs using AutoDock, PyRosetta, and ESMFold, demonstrating significantly higher binding affinity and stability compared to natural counterparts.

- **Neural Olfactory Sensing and Evaluation (NOSE)** (May. 2025 – Jun. 2025)  
  Supervisor: Prof. Yujiao Shi  
  - Fine-tuned **MoLFormer**, a large chemical language model, on the GS-LF olfactory dataset for specialized odor prediction tasks.  
  - Evaluated against the state-of-the-art **OpenPOM** on the Keller-2016 dataset, performing odor label classification and pleasantness rating prediction.  
  - Achieved state-of-the-art performance, with the fine-tuned model matching or surpassing OpenPOM on key metrics.

- **Phase-Adaptive Quantization for AI Accelerators** (Apr. 2026 – May 2026)  
  Supervisor: Prof. Joel Emer & Prof. Vivienne Sze (MIT)  
  - Designed a **phase-aware 4-bit quantization design-space exploration** framework for LLM, VLM, and VLA inference workloads, comparing prefill and decode regimes across NVFP4-like, MXFP4-like, and custom rescale pipelines.  
  - Built an automated **AccelForge** experiment flow to generate workload/architecture YAMLs, run hardware energy/latency sweeps, extract per-einsum bottleneck breakdowns, and resume long-running Docker-based mappings.  
  - Implemented a Python quantization accuracy emulator using real model tensor snapshots to evaluate per-layer cosine similarity and combine accuracy with hardware cost for Pareto frontier analysis.  
  - Demonstrated that decode and prefill favor different quantization configurations, motivating **phase-adaptive datapaths** over a single fixed 4-bit format.

## Technical Strengths

- **Programming Languages:** Matlab, Python, C & C++, RISC-V Assembly  
- **Framework & Toolchain:** PyTorch, Git, Docker, Linux, Rosetta, CUDA, AccelForge, OpenMP, MPI  
- **Misc:** LaTeX, Markdown, IELTS 7.5 (6.5), CET-6 (646)

## Publications

No publications yet.

## News

- **2025.09** Joined Embodied Minds Lab (Harvard University & Kempner Institute) as a Visiting Undergraduate Research Assistant.
- **2025.05** Admitted to the Visiting Undergraduate Student (VUS) program at Harvard University for the 2025–2026 academic year.
- **2025.01** Joined the PLUS Lab of SIST, ShanghaiTech University, advised by Prof. Xuming He.
- **2025** Our MakeSense team won **First Place (Analytical Performance)** at SensUs 2025.
- **2024.12** Awarded **Merit Student** of ShanghaiTech University (Top 2% in school) for 2023–2024.
- **2024.10** Our PACIFY project won the **Gold Medal** at iGEM 2024.
- **2023.10** Joined the AI Honor Class of SIST, ShanghaiTech University.
- **2024.06** Joined VRVC as an undergraduate research assistant.
- **2024.02** Joined ShanghaiTech iGEM Team.
- **2024.01** Awarded the 2023 Outstanding Mentor Assistant.

<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=300&t=n&d=EasZ2og5WUm-qsd2B6EmHMVE_3C_YNylKdZgiR4H1n0'></script>
