---
title: "Projects"
slug: "projects"
description: "Research and development projects"
---

<div style="display: flex; gap: 2rem; flex-wrap: wrap;">

<div style="flex: 0 0 200px; position: sticky; top: 100px; align-self: flex-start;">

**Quick Navigation**

- [Current Research](#current-research)
- [Completed Projects](#completed-projects)
- [Industry Projects](#industry-projects)
- [Academic Research](#academic-research)

</div>

<div style="flex: 1; min-width: 300px;">

## Current Research

### Uncertainty Quantification for Biomedical Classification
**Collaborator**: [Dr. Gemma Moran](https://www.gemma-moran.com/) | Rutgers University | January 2026 - Present

Developing probabilistic models and calibration methods for clinical prediction systems. Applying Bayesian deep learning and ensemble techniques to quantify predictive uncertainty in healthcare applications.

**Technologies**: Python, PyTorch, Bayesian Neural Networks

---

### Pediatric Brain Tumor Segmentation with Deep Learning
**Institution**: [CHOP D3b Center](https://d3b.center/) | July 2024 - Present  
**Advisor**: [Dr. Anahita Fathi Kazerooni](https://d3b.center/team-members/anahita-fathi-kazerooni/)

- Deployed nnU-Net v2 pipelines on HPC clusters (Slurm/GPU) for pediatric brain tumor segmentation
- Implemented Monte Carlo Dropout with 20 inference passes per case to generate uncertainty maps
- Processed and curated 100+ GB of multi-sequence MRI data with automated ETL
- Contributed to AutoSurv pipeline achieving 10% higher concordance than Cox baselines

**Technologies**: Python, nnU-Net, PyTorch, Slurm, HPC, Medical Imaging

---

### Interactive R/Shiny App for Clinical Trial Design
**Collaborators**: Dr. Han Zhang, [Dr. Philip He](https://www.linkedin.com/in/philip-he-6b26a5a1) | Rutgers University | June 2025 - Present

Built interactive Shiny applications to visualize hypothesis graphs and redistribute test weights dynamically for multiple testing procedures. Extended the open-source trialsimulator R package.

**Technologies**: R, Shiny, Clinical Trial Simulation  
**Live Demo**: [oncotrialdesign.shinyapps.io/graphMTP](https://oncotrialdesign.shinyapps.io/graphMTP/)

---

## Completed Projects

### Bristol Myers Squibb Challenge: Proton Pulse App

Designed an interactive Streamlit-based computation tool to estimate charge variants in therapeutic proteins, integrating pI calculation and PTM site modeling to assess formulation stability.

**Technologies**: Python, Streamlit, Bioinformatics, Protein Modeling  
**Live App**: [protonpulse.streamlit.app](https://protonpulse.streamlit.app/)

---

## Industry Projects

### Automated Valuation Model (AVM) for Real Estate
**Company**: IDX Exchange | New York, NY

- Trained XGBoost AVM for home values with geo features, cutting RMSE 18% and reaching MAPE 7.9%
- Deployed home-value estimator API (p95 180 ms, 99.9% uptime)
- Built Tableau market dashboards across 42 counties, reducing ad-hoc reporting time 60%

**Technologies**: Python, XGBoost, Tableau, API Development

---

### Risk Analytics & Pricing Models
**Company**: JPMorgan Chase & Co. | New York, NY

- Engineered market-data ETL reducing VaR error by 8%
- Built LSTM forecasting improving equity prediction accuracy 12%
- Developed vectorized Black-Scholes pricer increasing throughput 15%

**Technologies**: Python, LSTM, Financial Modeling, Monte Carlo Simulation

---

## Academic Research

### Causal Inference Methods Study
**Mentor**: [Dr. Nicole Pashley](https://sites.google.com/view/npashley/) | Rutgers University | Summer 2025

Studied CBPS, AIPW/DR estimators, overlap/trim rules, and matching vs weighting methods for treatment effect estimation.

**Technologies**: R, Causal Inference, Statistical Methods

---

### Psychometric Scale Evaluation
**Mentor**: [Dr. Lee Jussim](https://sites.rutgers.edu/lee-jussim/social-perception-lab/) | [Social Perception Lab](https://sites.rutgers.edu/lee-jussim/social-perception-lab/) | Rutgers University | 2023-2024

Applied Confirmatory Factor Analysis (CFA) in R to assess construct validity and model fit for social psychology measurement instruments.

**Technologies**: R, CFA, Psychometrics

---

### Behavioral Intervention Research
**Mentors**: [Dr. Teresa Leyro](https://psych.rutgers.edu/abusa-lab/welcome), Dr. Samantha Farris | [ABUSA REHAB Lab](https://psych.rutgers.edu/abusa-lab/welcome) | Rutgers University | 2022-2023

Processed heart rate data using HRV and PRV software to extract physiological stress biomarkers for smoking cessation studies.

**Technologies**: MATLAB, HRV Analysis, Clinical Research

</div>
</div>
