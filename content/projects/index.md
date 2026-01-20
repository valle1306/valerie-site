---
title: "Projects"
slug: "projects"
description: "Research and development projects"
---

<div class="projects-container">

<div class="projects-filter">
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="research">Research</button>
<button class="filter-btn" data-filter="app">App</button>
<button class="filter-btn" data-filter="industry">Industry</button>
<button class="filter-btn" data-filter="academic">Academic</button>
</div>

<div class="projects-grid">

<div class="project-card" data-category="research">
<div class="project-card-header">
<h3>Uncertainty Quantification for Biomedical Classification</h3>
<span class="project-date">Jan 2026</span>
</div>
<div class="project-card-summary">Probabilistic models for clinical prediction systems with Bayesian deep learning.</div>
<div class="project-card-image"><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop" alt="Biomedical Classification"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Collaborator:</strong> <a href="https://www.gemma-moran.com/">Dr. Gemma Moran</a> | Rutgers University</p>
<p>Developing probabilistic models and calibration methods for clinical prediction systems. Applying Bayesian deep learning and ensemble techniques to quantify predictive uncertainty in healthcare applications.</p>
<div class="tech-tags">
<span>Python</span>
<span>PyTorch</span>
<span>Bayesian NN</span>
</div>
</div>
</div>

<div class="project-card" data-category="research">
<div class="project-card-header">
<h3>Pediatric Brain Tumor Segmentation</h3>
<span class="project-date">Jul 2024</span>
</div>
<div class="project-card-summary">Deep learning pipeline for brain tumor segmentation with uncertainty estimation.</div>
<div class="project-card-image"><img src="/static/peds-image.png" alt="Brain MRI Scan"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Institution:</strong> <a href="https://d3b.center/">CHOP D3b Center</a> | Advisor: <a href="https://d3b.center/team-members/anahita-fathi-kazerooni/">Dr. Anahita Fathi Kazerooni</a></p>
<ul>
<li>Deployed nnU-Net v2 pipelines on HPC clusters (Slurm/GPU)</li>
<li>Implemented Monte Carlo Dropout with 20 inference passes per case</li>
<li>Processed and curated 100+ GB of multi-sequence MRI data</li>
<li>Contributed to AutoSurv pipeline achieving 10% higher concordance</li>
</ul>
<div class="tech-tags">
<span>Python</span>
<span>nnU-Net</span>
<span>PyTorch</span>
<span>HPC</span>
</div>
</div>
</div>

<div class="project-card" data-category="app">
<div class="project-card-header">
<h3>Interactive Shiny App for Clinical Trial Design</h3>
<span class="project-date">Jun 2025</span>
<span class="project-tag">Live Demo</span>
</div>
<div class="project-card-summary">Interactive visualization tool for hypothesis graphs and test weight redistribution.</div>
<div class="project-card-image"><img src="/static/clinical-trial-app.png" alt="Clinical Trial App"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Collaborators:</strong> Dr. Han Zhang, <a href="https://www.linkedin.com/in/philip-he-6b26a5a1">Dr. Philip He</a> | Rutgers University</p>
<p>Built interactive Shiny applications to visualize hypothesis graphs and redistribute test weights dynamically for multiple testing procedures. Extended the open-source trialsimulator R package.</p>
<p><strong><a href="https://oncotrialdesign.shinyapps.io/graphMTP/">Live Demo →</a></strong></p>
<div class="tech-tags">
<span>R</span>
<span>Shiny</span>
<span>Clinical Trials</span>
</div>
</div>
</div>

<div class="project-card" data-category="app">
<div class="project-card-header">
<h3>Proton Pulse: Charge Variant Calculator</h3>
<span class="project-date">Oct 2025</span>
<span class="project-tag">Live App</span>
</div>
<div class="project-card-summary">Bristol Myers Squibb Challenge: Interactive tool for therapeutic protein analysis.</div>
<div class="project-card-image"><img src="/static/proton-pulse-app.png" alt="Proton Pulse App"/></div>
<div class="project-card-details" style="display: none;">
<p>Designed an interactive Streamlit-based computation tool to estimate charge variants in therapeutic proteins, integrating pI calculation and PTM site modeling to assess formulation stability.</p>
<p><strong><a href="https://protonpulse.streamlit.app/">Live App →</a></strong></p>
<div class="tech-tags">
<span>Python</span>
<span>Streamlit</span>
<span>Bioinformatics</span>
</div>
</div>
</div>

<div class="project-card" data-category="industry">
<div class="project-card-header">
<h3>Automated Valuation Model (AVM)</h3>
<span class="project-date">2023-2024</span>
</div>
<div class="project-card-summary">XGBoost-powered real estate valuation with 7.9% MAPE accuracy.</div>
<div class="project-card-image"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" alt="Real Estate Valuation"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Company:</strong> IDX Exchange | New York, NY</p>
<ul>
<li>Trained XGBoost AVM for home values with geo features</li>
<li>Cut RMSE 18%, achieved MAPE of 7.9%</li>
<li>Deployed home-value estimator API (p95 180ms, 99.9% uptime)</li>
<li>Built Tableau dashboards across 42 counties</li>
<li>Reduced ad-hoc reporting time by 60%</li>
</ul>
<div class="tech-tags">
<span>Python</span>
<span>XGBoost</span>
<span>Tableau</span>
<span>API</span>
</div>
</div>
</div>

<div class="project-card" data-category="industry">
<div class="project-card-header">
<h3>Risk Analytics & Pricing Models</h3>
<span class="project-date">2022-2023</span>
</div>
<div class="project-card-summary">Financial modeling suite with LSTM forecasting and Black-Scholes optimization.</div>
<div class="project-card-image"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop" alt="Financial Analytics"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Company:</strong> JPMorgan Chase & Co. | New York, NY</p>
<ul>
<li>Engineered market-data ETL reducing VaR error by 8%</li>
<li>Built LSTM forecasting improving equity prediction accuracy 12%</li>
<li>Developed vectorized Black-Scholes pricer increasing throughput 15%</li>
</ul>
<div class="tech-tags">
<span>Python</span>
<span>LSTM</span>
<span>Monte Carlo</span>
<span>Finance</span>
</div>
</div>
</div>

<div class="project-card" data-category="academic">
<div class="project-card-header">
<h3>Causal Inference Methods Study</h3>
<span class="project-date">Summer 2025</span>
</div>
<div class="project-card-summary">Research in causal inference techniques: CBPS, AIPW, matching, and weighting.</div>
<div class="project-card-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" alt="Statistical Research"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Mentor:</strong> <a href="https://sites.google.com/view/npashley/">Dr. Nicole Pashley</a> | Rutgers University</p>
<p>Studied CBPS, AIPW/DR estimators, overlap/trim rules, and matching vs weighting methods for treatment effect estimation.</p>
<div class="tech-tags">
<span>R</span>
<span>Causal Inference</span>
<span>Statistics</span>
</div>
</div>
</div>

<div class="project-card" data-category="research">
<div class="project-card-header">
<h3>Psychometric Scale Evaluation</h3>
<span class="project-date">2023-2024</span>
</div>
<div class="project-card-summary">CFA analysis for social psychology measurement instruments and construct validity.</div>
<div class="project-card-image"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop" alt="Research Analysis"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Mentor:</strong> <a href="https://sites.rutgers.edu/lee-jussim/social-perception-lab/">Dr. Lee Jussim</a> | <a href="https://sites.rutgers.edu/lee-jussim/social-perception-lab/">Social Perception Lab</a> | Rutgers University</p>
<p>Applied Confirmatory Factor Analysis (CFA) in R to assess construct validity and model fit for social psychology measurement instruments.</p>
<div class="tech-tags">
<span>R</span>
<span>CFA</span>
<span>Psychometrics</span>
</div>
</div>
</div>

<div class="project-card" data-category="research">
<div class="project-card-header">
<h3>Behavioral Intervention Research</h3>
<span class="project-date">2022-2023</span>
</div>
<div class="project-card-summary">HRV and PRV analysis for physiological stress biomarkers in smoking cessation studies.</div>
<div class="project-card-image"><img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=200&fit=crop" alt="Behavioral Research"/></div>
<div class="project-card-details" style="display: none;">
<p><strong>Mentors:</strong> <a href="https://psych.rutgers.edu/abusa-lab/welcome">Dr. Teresa Leyro</a>, Dr. Samantha Farris | <a href="https://psych.rutgers.edu/abusa-lab/welcome">ABUSA REHAB Lab</a> | Rutgers University</p>
<p>Processed heart rate data using HRV and PRV software to extract physiological stress biomarkers for smoking cessation studies.</p>
<div class="tech-tags">
<span>MATLAB</span>
<span>HRV Analysis</span>
<span>Clinical Research</span>
</div>
</div>
</div>

</div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Card expansion functionality
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't toggle if clicking a link
      if (e.target.tagName === 'A') return;
      
      const details = this.querySelector('.project-card-details');
      const isCurrentlyExpanded = this.classList.contains('expanded');
      
      // Close all cards first
      cards.forEach(c => {
        c.classList.remove('expanded');
        const d = c.querySelector('.project-card-details');
        if (d) d.style.display = 'none';
      });
      
      // Toggle current card
      if (!isCurrentlyExpanded) {
        this.classList.add('expanded');
        details.style.display = 'block';
      }
    });
  });
});
</script>
