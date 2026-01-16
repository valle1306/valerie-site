import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Chatbot: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <div id="chatbot-container">
      {/* Chat Toggle Button */}
      <button 
        id="chat-toggle" 
        aria-label="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Chat Window */}
      <div id="chat-window" class="chat-hidden">
        <div id="chat-header">
          <span>Ask Valerie's Assistant</span>
          <button id="chat-close" aria-label="Close chat">×</button>
        </div>
        <div id="chat-messages">
          <div class="chat-message bot">
            Hi, I'm here to help you navigate Valerie's site. You can ask me about her projects, experience, skills, or where to find specific information. What would you like to know?
          </div>
        </div>
        <div id="chat-input-container">
          <input 
            type="text" 
            id="chat-input" 
            placeholder="Ask about projects, experience, contact..."
          />
          <button id="send-btn" aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

Chatbot.css = `
  #chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    font-family: var(--bodyFont);
  }

  #chat-toggle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--secondary) 0%, var(--tertiary) 100%);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 12px rgba(155, 107, 158, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  #chat-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(155, 107, 158, 0.5);
  }

  #chat-window {
    position: absolute;
    bottom: 70px;
    right: 0;
    width: 360px;
    max-width: calc(100vw - 40px);
    height: 480px;
    max-height: calc(100vh - 120px);
    background: var(--light);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--lightgray);
  }

  :root[saved-theme="dark"] #chat-window {
    background: var(--dark);
    border-color: var(--gray);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  #chat-window.chat-hidden {
    display: none;
  }

  #chat-header {
    background: linear-gradient(135deg, var(--secondary) 0%, var(--tertiary) 100%);
    color: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  }

  #chat-header button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    line-height: 1;
    padding: 0;
  }

  #chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .chat-message {
    max-width: 85%;
    padding: 10px 14px;
    border-radius: 16px;
    line-height: 1.4;
    font-size: 14px;
  }

  .chat-message.bot {
    background: rgba(155, 107, 158, 0.15);
    color: var(--dark);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  }

  :root[saved-theme="dark"] .chat-message.bot {
    background: rgba(155, 107, 158, 0.25);
    color: var(--light);
  }

  .chat-message.user {
    background: linear-gradient(135deg, var(--secondary) 0%, var(--tertiary) 100%);
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  }

  .chat-message.typing {
    background: rgba(155, 107, 158, 0.15);
    color: var(--gray);
  }

  :root[saved-theme="dark"] .chat-message.typing {
    background: rgba(155, 107, 158, 0.25);
  }

  .chat-message a {
    color: var(--secondary);
    text-decoration: underline;
  }

  .chat-message.user a {
    color: white;
  }

  :root[saved-theme="dark"] .chat-message.bot a {
    color: var(--tertiary);
  }

  #chat-input-container {
    display: flex;
    padding: 12px;
    gap: 8px;
    border-top: 1px solid var(--lightgray);
    background: var(--light);
  }

  :root[saved-theme="dark"] #chat-input-container {
    background: var(--dark);
    border-top-color: var(--gray);
  }

  #chat-input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--lightgray);
    border-radius: 20px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    background: var(--light);
    color: var(--dark);
  }

  :root[saved-theme="dark"] #chat-input {
    background: var(--darkgray);
    border-color: var(--gray);
    color: var(--light);
  }

  :root[saved-theme="dark"] #chat-input::placeholder {
    color: var(--gray);
  }

  #chat-input:focus {
    border-color: var(--secondary);
  }

  #send-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--secondary) 0%, var(--tertiary) 100%);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: transform 0.2s;
  }

  #send-btn:hover {
    transform: scale(1.05);
  }

  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-4px); }
  }

  .typing-indicator span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: var(--gray);
    border-radius: 50%;
    margin: 0 2px;
    animation: bounce 1.4s infinite;
  }

  .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
  .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

  @media (max-width: 480px) {
    #chat-window {
      width: calc(100vw - 40px);
      height: calc(100vh - 120px);
      bottom: 70px;
      right: 0;
    }
  }
`

Chatbot.afterDOMLoaded = `
  // ============================================
  // VALERIE'S SMART AI ASSISTANT - Knowledge Base
  // ============================================

  // Contact Information
  const CONTACT_INFO = {
    email: 'hpl14@scarletmail.rutgers.edu',
    phone: '715-440-1726',
    linkedin: 'linkedin.com/in/hpl14',
    github: 'github.com/valle1306',
    strava: 'strava.com/athletes/136970948'
  };

  // Detailed Projects Database
  const PROJECTS = {
    healthcare: [
      {
        name: 'Uncertainty Quantification for Biomedical Classification',
        type: 'Current Research',
        advisor: 'Dr. Gemma Moran',
        institution: 'Rutgers University',
        period: 'January 2026 - Present',
        description: 'Building probabilistic models to quantify prediction uncertainty in healthcare ML systems. Developing calibration methods for safer clinical AI deployment.',
        tech: ['Python', 'PyTorch', 'Bayesian Neural Networks']
      },
      {
        name: 'Pediatric Brain Tumor Segmentation',
        type: 'Current Research',
        advisor: 'Dr. Anahita Fathi Kazerooni',
        institution: 'CHOP D3b Center',
        period: 'July 2024 - Present',
        description: 'Deployed nnU-Net v2 pipelines for pediatric brain tumor segmentation. Implemented Monte Carlo Dropout (20 passes/case) for uncertainty maps. Processed 100+ GB MRI data. Contributed to AutoSurv with 10% higher concordance than Cox baselines.',
        tech: ['Python', 'nnU-Net', 'PyTorch', 'Slurm', 'HPC'],
        link: 'd3b.center'
      },
      {
        name: 'GraphMTP Shiny App - Clinical Trial Design',
        type: 'Deployed App',
        advisors: 'Dr. Han Zhang, Dr. Philip He',
        institution: 'Rutgers University',
        period: 'June 2025 - Present',
        description: 'Interactive Shiny app to visualize hypothesis graphs and redistribute test weights for multiple testing procedures. Extended trialsimulator R package with node/edge editing and JSON import/export.',
        tech: ['R', 'Shiny', 'Clinical Trial Simulation'],
        link: 'oncotrialdesign.shinyapps.io/graphMTP/'
      },
      {
        name: 'ProtonPulse - BMS Challenge',
        type: 'Deployed App',
        institution: 'Bristol Myers Squibb Challenge',
        description: 'Streamlit tool to estimate charge variants in therapeutic proteins by integrating pI calculation and PTM site modeling. Helps formulation scientists assess protein stability.',
        tech: ['Python', 'Streamlit', 'Bioinformatics'],
        link: 'protonpulse.streamlit.app/'
      }
    ],
    finance: [
      {
        name: 'Automated Valuation Model (AVM)',
        type: 'Industry Project',
        company: 'IDX Exchange',
        location: 'New York, NY',
        description: 'Trained XGBoost AVM for home values with geo features (schools, transit, parks). Cut RMSE by 18%, reached MAPE 7.9% (R² 0.71→0.77). Deployed API with p95 latency 180ms, 99.9% uptime. Built Tableau dashboards across 42 counties.',
        tech: ['Python', 'XGBoost', 'Tableau', 'API Development']
      },
      {
        name: 'Risk Analytics & Pricing Models',
        type: 'Industry Project',
        company: 'JPMorgan Chase & Co.',
        location: 'New York, NY',
        description: 'Built market-data ETL pipeline reducing VaR error by 8%. Created LSTM model improving equity forecasting accuracy by 12%. Developed vectorized Black-Scholes pricer increasing throughput 15%.',
        tech: ['Python', 'LSTM', 'Monte Carlo', 'Financial Modeling']
      }
    ],
    research: [
      {
        name: 'Causal Inference Methods Study',
        type: 'Directed Reading',
        mentor: 'Dr. Nicole Pashley',
        period: 'Summer 2025',
        description: 'Studied CBPS, AIPW/DR estimators, overlap/trim rules, and matching vs weighting methods for treatment effect estimation.',
        tech: ['R', 'Causal Inference']
      },
      {
        name: 'Psychometric Scale Evaluation',
        type: 'Research Assistant',
        mentor: 'Dr. Lee Jussim',
        lab: 'Social Perception Lab',
        period: '2023-2024',
        description: 'Applied Confirmatory Factor Analysis (CFA) in R to assess construct validity and model fit for psychometric scales.',
        tech: ['R', 'CFA', 'Psychometrics']
      },
      {
        name: 'Behavioral Intervention Research',
        type: 'Research Assistant',
        mentors: 'Dr. Teresa Leyro, Dr. Samantha Farris',
        lab: 'ABUSA REHAB Lab',
        period: '2022-2023',
        description: 'Processed heart rate data (HRV/PRV) to extract physiological stress biomarkers for smoking cessation studies.',
        tech: ['MATLAB', 'HRV Analysis', 'Clinical Research']
      }
    ]
  };

  // Experience Database
  const EXPERIENCE = {
    current: [
      { role: 'Imaging Data Analyst RA', org: 'CHOP D3b Center', period: 'July 2024 - Present', type: 'healthcare' },
      { role: 'Research - Uncertainty Quantification', org: 'Rutgers (Dr. Gemma Moran)', period: 'Jan 2026 - Present', type: 'healthcare' },
      { role: 'Shiny App Developer', org: 'Rutgers (Clinical Trials)', period: 'June 2025 - Present', type: 'healthcare' }
    ],
    industry: [
      { role: 'Bioinformatics Data Scientist', org: 'Bristol Myers Squibb Challenge', type: 'healthcare' },
      { role: 'Data Science Intern', org: 'IDX Exchange, NYC', type: 'finance' },
      { role: 'Quantitative Research Mentee', org: 'JPMorgan Chase & Co., NYC', type: 'finance' }
    ],
    teaching: [
      { role: 'Learning Assistant', course: 'Calculus II', period: 'Fall 2023, Spring 2024' },
      { role: 'Grader', course: 'Undergraduate Statistics', period: 'Fall 2024 - Fall 2025' }
    ]
  };

  // Conversation context
  let conversationContext = null;

  // Smart response generator
  function getSmartResponse(query) {
    const q = query.toLowerCase().trim();
    
    // === CONTACT QUERIES ===
    if (/contact|email|reach|phone|call|linkedin|github|connect/.test(q)) {
      return \`<b>Contact Valerie:</b><br>
- Email: <a href="mailto:\${CONTACT_INFO.email}">\${CONTACT_INFO.email}</a><br>
- Phone: \${CONTACT_INFO.phone}<br>
- LinkedIn: <a href="https://www.\${CONTACT_INFO.linkedin}" target="_blank">\${CONTACT_INFO.linkedin}</a><br>
- GitHub: <a href="https://\${CONTACT_INFO.github}" target="_blank">\${CONTACT_INFO.github}</a>\`;
    }

    // === PROJECT CATEGORY QUERIES ===
    if (/project|work|portfolio|built|made|created/.test(q)) {
      // Check for specific category
      if (/health|medical|clinic|brain|tumor|chop|bio/.test(q)) {
        conversationContext = 'healthcare_projects';
        const projects = PROJECTS.healthcare;
        let response = '<b>Healthcare & Biomedical Projects:</b><br><br>';
        projects.forEach((p, i) => {
          response += \`<b>\${i+1}. \${p.name}</b>\${p.link ? ' <a href="https://'+p.link+'" target="_blank">[link]</a>' : ''}<br>\`;
          response += \`   \${p.type} | \${p.institution || p.company || ''}<br>\`;
          response += \`   \${p.description.substring(0, 100)}...<br><br>\`;
        });
        response += 'Ask me about any specific project for more details.';
        return response;
      }
      
      if (/finance|quant|trading|bank|money|jpmorgan|idx|real estate|valuation/.test(q)) {
        conversationContext = 'finance_projects';
        const projects = PROJECTS.finance;
        let response = '<b>Finance & Quantitative Projects:</b><br><br>';
        projects.forEach((p, i) => {
          response += \`<b>\${i+1}. \${p.name}</b><br>\`;
          response += \`   \${p.company} | \${p.type}<br>\`;
          response += \`   \${p.description.substring(0, 100)}...<br><br>\`;
        });
        response += 'Ask me about any specific project for more details.';
        return response;
      }
      
      // General project query - ask for category
      conversationContext = 'asking_project_type';
      return \`<b>Valerie has projects in several areas:</b><br><br>
<b>Healthcare/Biomedical</b> - brain tumor segmentation, clinical trials, uncertainty quantification<br>
<b>Finance/Quant</b> - real estate valuation, risk analytics, trading models<br>
<b>Research</b> - causal inference, psychometrics, behavioral studies<br><br>
Which area interests you? Or visit the <a href="./projects">Projects page</a> for the full list.\`;
    }

    // === HANDLE FOLLOW-UP FOR PROJECT CATEGORY ===
    if (conversationContext === 'asking_project_type') {
      if (/health|bio|medical|clinic/.test(q)) {
        conversationContext = 'healthcare_projects';
        return getSmartResponse('healthcare projects');
      }
      if (/finance|quant|money|bank/.test(q)) {
        conversationContext = 'finance_projects';
        return getSmartResponse('finance projects');
      }
      if (/research|academic|study/.test(q)) {
        conversationContext = 'research_projects';
        const projects = PROJECTS.research;
        let response = '<b>Academic Research Projects:</b><br><br>';
        projects.forEach((p, i) => {
          response += \`<b>\${i+1}. \${p.name}</b><br>\`;
          response += \`   \${p.mentor || p.mentors} | \${p.period}<br>\`;
          response += \`   \${p.description}<br><br>\`;
        });
        return response;
      }
    }

    // === SPECIFIC PROJECT QUERIES ===
    if (/brain|tumor|chop|d3b|segment|mri|imaging/.test(q)) {
      const p = PROJECTS.healthcare.find(x => x.name.includes('Brain Tumor'));
      return \`<b>\${p.name}</b><br><br>
<b>Institution:</b> \${p.institution}<br>
<b>Advisor:</b> \${p.advisor}<br>
<b>Period:</b> \${p.period}<br><br>
<b>What she does:</b><br>\${p.description}<br><br>
<b>Tech:</b> \${p.tech.join(', ')}<br>
<b>Link:</b> <a href="https://\${p.link}" target="_blank">\${p.link}</a>\`;
    }

    if (/uncertainty|quantif|calibrat|gemma|moran|bayesian/.test(q)) {
      const p = PROJECTS.healthcare[0];
      return \`<b>\${p.name}</b><br><br>
<b>Advisor:</b> \${p.advisor}<br>
<b>Institution:</b> \${p.institution}<br>
<b>Period:</b> \${p.period}<br><br>
<b>Description:</b> \${p.description}<br><br>
<b>Tech:</b> \${p.tech.join(', ')}\`;
    }

    if (/shiny|graphmtp|clinical trial|multiple test/.test(q)) {
      const p = PROJECTS.healthcare.find(x => x.name.includes('GraphMTP'));
      return \`<b>\${p.name}</b><br><br>
<b>Advisors:</b> \${p.advisors}<br>
<b>Period:</b> \${p.period}<br><br>
<b>Description:</b> \${p.description}<br><br>
<b>Try it:</b> <a href="https://\${p.link}" target="_blank">\${p.link}</a><br>
<b>Tech:</b> \${p.tech.join(', ')}\`;
    }

    if (/proton|pulse|bms|bristol|charge variant|protein/.test(q)) {
      const p = PROJECTS.healthcare.find(x => x.name.includes('ProtonPulse'));
      return \`<b>\${p.name}</b><br><br>
<b>Context:</b> \${p.institution}<br><br>
<b>Description:</b> \${p.description}<br><br>
<b>Try it:</b> <a href="https://\${p.link}" target="_blank">\${p.link}</a><br>
<b>Tech:</b> \${p.tech.join(', ')}\`;
    }

    if (/idx|real estate|home value|avm|valuation/.test(q)) {
      const p = PROJECTS.finance[0];
      return \`<b>\${p.name}</b><br><br>
<b>Company:</b> \${p.company}, \${p.location}<br>
<b>Type:</b> \${p.type}<br><br>
<b>What she built:</b> \${p.description}<br><br>
<b>Tech:</b> \${p.tech.join(', ')}\`;
    }

    if (/jpmorgan|jp morgan|risk|var|lstm|black.?scholes|quant/.test(q)) {
      const p = PROJECTS.finance[1];
      return \`<b>\${p.name}</b><br><br>
<b>Company:</b> \${p.company}, \${p.location}<br>
<b>Type:</b> \${p.type}<br><br>
<b>What she built:</b> \${p.description}<br><br>
<b>Tech:</b> \${p.tech.join(', ')}\`;
    }

    // === EXPERIENCE QUERIES ===
    if (/experience|work history|job|intern|career|employ/.test(q)) {
      if (/current|now|present/.test(q)) {
        let response = '<b>Current Positions:</b><br><br>';
        EXPERIENCE.current.forEach(e => {
          response += \`- <b>\${e.role}</b> at \${e.org}<br>  \${e.period}<br><br>\`;
        });
        return response;
      }
      
      if (/industry|company|intern/.test(q)) {
        let response = '<b>Industry Experience:</b><br><br>';
        EXPERIENCE.industry.forEach(e => {
          response += \`- <b>\${e.role}</b> at \${e.org}<br>\`;
        });
        response += '<br>Ask about any specific role for details, or visit the <a href="./experience">Experience page</a>.';
        return response;
      }

      // General experience
      return \`<b>Experience Summary:</b><br><br>
<b>Current (2024-2026):</b><br>
- CHOP D3b Center - Imaging Data Analyst RA<br>
- Rutgers - Uncertainty Quantification Research<br>
- Rutgers - Clinical Trial Shiny App Development<br><br>
<b>Industry:</b><br>
- Bristol Myers Squibb Challenge - Bioinformatics<br>
- IDX Exchange, NYC - Data Science Intern<br>
- JPMorgan Chase, NYC - Quant Research Mentee<br><br>
For full details, visit the <a href="./experience">Experience page</a>.\`;
    }

    // === EDUCATION ===
    if (/education|degree|school|study|rutgers|master|undergrad|major/.test(q)) {
      return \`<b>Education:</b><br><br>
<b>M.S. Statistics - Data Science</b><br>
Rutgers University | 2024 - Present<br><br>
<b>B.A.Sc. Biomathematics</b><br>
Rutgers University | Graduated 2024<br><br>
<b>Research Focus:</b> Uncertainty quantification, computational neuroscience, causal inference, ML for healthcare\`;
    }

    // === SKILLS & TECH ===
    if (/skill|tech|tool|language|python|r\\b|programming|stack/.test(q)) {
      return \`<b>Technical Skills:</b><br><br>
<b>Languages:</b> Python, R, SQL, MATLAB<br>
<b>ML/DL:</b> PyTorch, TensorFlow, XGBoost, scikit-learn<br>
<b>Data:</b> Pandas, NumPy, Tableau, Streamlit, Shiny<br>
<b>Neuro/Medical:</b> nnU-Net, HRV analysis, medical imaging<br>
<b>Tools:</b> Git, Docker, Slurm/HPC, CI/CD<br>
<b>Stats:</b> Bayesian modeling, causal inference, psychometrics\`;
    }

    // === CV/RESUME ===
    if (/cv|resume|download|pdf/.test(q)) {
      return \`<b>Download Valerie's CV:</b><br><br>
Visit the <a href="./resume">CV page</a> to download:<br>
- Academic CV (PDF)<br>
- Industry/Masters CV (PDF)<br><br>
Or view detailed experience on the <a href="./experience">Experience page</a>.\`;
    }

    // === HOBBIES/LIFE ===
    if (/hobby|hobbies|run|marathon|personal|life|fun|free time|outside work|knit|coffee|matcha/.test(q)) {
      return \`<b>Life & Hobbies:</b><br><br>
<b>Running:</b> Training for Asbury Half Marathon & Flying Pig Marathon. Follow on <a href="https://\${CONTACT_INFO.strava}" target="_blank">Strava</a><br><br>
<b>Other interests:</b><br>
- Knitting<br>
- Strength training<br>
- Coffee & matcha exploration<br><br>
Check out the <a href="./life">Life page</a> for photos and more.\`;
    }

    // === NAVIGATION ===
    if (/page|navigate|where|find|site|menu/.test(q)) {
      return \`<b>Site Navigation:</b><br><br>
- <a href="./">Home</a> - Overview & intro<br>
- <a href="./projects">Projects</a> - All research & work<br>
- <a href="./experience">Experience</a> - Full work history<br>
- <a href="./resume">CV</a> - Downloadable resumes<br>
- <a href="./life">Life</a> - Hobbies & personal\`;
    }

    // === GREETINGS ===
    if (/^(hi|hello|hey|yo|sup|greetings|howdy)/.test(q)) {
      return \`Hi there. I can help you navigate this site and learn about Valerie. Try asking about:<br><br>
- <b>Projects</b> - healthcare, finance, or research work<br>
- <b>Experience</b> - current roles, industry, teaching<br>
- <b>Contact</b> - email, phone, LinkedIn, GitHub<br>
- <b>Education</b> - degrees and background<br>
- <b>Personal</b> - hobbies and interests<br><br>
What would you like to know?\`;
    }

    // === RESEARCH INTERESTS ===
    if (/research|interest|focus|speciali|area/.test(q)) {
      return \`<b>Research Interests:</b><br><br>
- Uncertainty quantification & probabilistic modeling<br>
- Computational neuroscience<br>
- Biostatistics & causal inference<br>
- Machine learning for healthcare<br>
- Reproducible data science workflows<br><br>
Currently working on: <b>Uncertainty Quantification for Biomedical Classification</b> with Dr. Gemma Moran and <b>Pediatric Brain Tumor Segmentation</b> at CHOP D3b Center.\`;
    }

    // === DEPLOYED APPS ===
    if (/deploy|live|app|demo|try|link/.test(q)) {
      return \`<b>Live Deployed Apps:</b><br><br>
<b>1. GraphMTP Shiny App</b> - Clinical trial design<br>
<a href="https://oncotrialdesign.shinyapps.io/graphMTP/" target="_blank">oncotrialdesign.shinyapps.io/graphMTP/</a><br><br>
<b>2. ProtonPulse</b> - Protein charge variants<br>
<a href="https://protonpulse.streamlit.app/" target="_blank">protonpulse.streamlit.app/</a>\`;
    }

    // === DEFAULT FALLBACK ===
    conversationContext = null;
    return \`I'm not sure I understood that. Here's what I can help with:<br><br>
- <b>"projects"</b> - See work by category<br>
- <b>"experience"</b> - Work history and roles<br>
- <b>"contact"</b> - Email, phone, LinkedIn<br>
- <b>"skills"</b> - Technical abilities<br>
- <b>"navigate"</b> - Site pages overview<br><br>
Or ask about a specific project like "brain tumor" or "JPMorgan".\`;
  }

  let chatOpen = false;
  let hasAutoOpened = false;

  function toggleChat() {
    chatOpen = !chatOpen;
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    
    if (chatOpen) {
      chatWindow.classList.remove('chat-hidden');
      if (chatInput) chatInput.focus();
    } else {
      chatWindow.classList.add('chat-hidden');
    }
  }

  // Auto-open chat on first visit
  function autoOpenChat() {
    if (hasAutoOpened) return;
    const hasVisited = sessionStorage.getItem('chatOpened');
    if (!hasVisited) {
      setTimeout(() => {
        toggleChat();
        sessionStorage.setItem('chatOpened', 'true');
      }, 1500);
    }
    hasAutoOpened = true;
  }

  function addMessage(text, isUser) {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.className = 'chat-message ' + (isUser ? 'user' : 'bot');
    msg.innerHTML = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function showTyping() {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.className = 'chat-message bot typing';
    msg.id = 'typing-indicator';
    msg.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  function sendMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, true);
    input.value = '';

    showTyping();

    // Smart response with context awareness
    setTimeout(() => {
      removeTyping();
      addMessage(getSmartResponse(text), false);
    }, 400 + Math.random() * 400);
  }

  // Attach event listeners
  const toggleBtn = document.getElementById('chat-toggle');
  const closeBtn = document.getElementById('chat-close');
  const sendBtn = document.getElementById('send-btn');
  const chatInput = document.getElementById('chat-input');

  if (toggleBtn) toggleBtn.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

  // Auto-open chat on first visit to the site
  autoOpenChat();
`

export default (() => Chatbot) satisfies QuartzComponentConstructor
