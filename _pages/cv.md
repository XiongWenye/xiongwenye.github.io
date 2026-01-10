---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Contact

*   Address: 393 Middle Huaxia Road, Pudong New Area, Shanghai, P.R. China, 201210
*   GitHub: [github.com/XiongWenye](https://github.com/XiongWenye)
*   Homepage: [xiongwenye.github.io](https://xiongwenye.github.io/)
*   Email: xiongwenye@shanghaitech.edu.cn
*   Phone: (+86) 13851488286

## Research Interest

Multimodal Machine Learning, Computer Vision, AI for Healthcare & Life Science.
Compositional Generative Model, Scene Understanding, Spatial Reasoning.

## Education

*   **ShanghaiTech University**
    *   September 2023 - June 2027 (expected)
    *   B.E. in Computer Science and Technology, Minor in Life Sciences
    *   Shanghai, CHN
    *   Overall GPA: 3.8/4.0 (rank 13/172 in CS major, 19/267 in school)
    *   Relevant Coursework: Introduction to Information Science and Technology(A+), Introdcution to Programming(A), Algorithms and Data Structures(A), Introduction to Machine Learning(A-), Artificial Intelligence in Medical Imaging(A), Computational Science and Engineering(A+), Computer Architecture(A-) & Project(A), Protein Design(A+), Game Theory(A)
*   **Harvard University (Visiting Undergraduate Student)**
    *   September 2025 - May 2026
    *   Cambridge, USA
    *   Overall GPA: 4.0/4.0
    *   Relevant Coursework: Signal Processing (MIT cross-registration)(A), Computer Vision(A), Planning and Learning Methods in AI(A)

## Awards & Honors

*   **MERIT STUDENT**(Top 2% in school), ShanghaiTech University, 2023-2024
*   **AI HONOR CLASS**(Honors Degrees), ShanghaiTech University, 2024-2027(expected)
*   **GOLD MEDAL**, International Genetically Engineered Machine Competition (iGEM), 2024
*   **FIRST PLACE**, Analytical Performance, SensUs Competition, 2025
*   **2023 OUTSTANDING MENTOR ASSISTANT**, ShanghaiTech University, 2023

## Experience

<ul>
  {% assign sorted_experience_posts = site.posts | where_exp:"post", "post.tags contains 'Deep Learning' or post.tags contains 'Compositional Scene Generation' or post.tags contains 'Generative Modeling' or post.tags contains 'iGEM' or post.tags contains 'Biosensors'" | sort: "date" | reverse %}
  {% for post in sorted_experience_posts %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

## Publications

No publications yet.

## Course Projects

<ul>
  {% assign sorted_course_project_posts = site.posts | where_exp:"post", "post.tags contains 'Protein Design' or post.tags contains 'Machine Learning'" | sort: "date" | reverse %}
  {% for post in sorted_course_project_posts %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

## Technical Strengths

*   **Programming Languages**: Matlab, Python, C&C++, RISC-V
*   **Framework & Toolchain**: PyTorch, Git, Docker, Linux, Rosetta
*   **Misc**: LaTeX, Markdown, IELTS 7.5(6.5)