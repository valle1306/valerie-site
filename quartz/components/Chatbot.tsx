import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// Site knowledge base for the chatbot - contains all relevant info about Valerie
const SITE_KNOWLEDGE = `
You are Valerie Le's personal AI assistant on her portfolio website. You help visitors learn about Valerie and navigate her site.

ABOUT VALERIE LE:
- Full name: Phan Nguyen Huong Le (goes by Valerie Le)
- PhD Student in Statistics at Rutgers University (2024 - Present)
- Previously: BS in Statistics from Rutgers University (2020-2024) with minor in Data Science, Summa Cum Laude
- Research interests: Causal inference, adaptive clinical trial design, machine learning applications in healthcare

CONTACT:
- Email: pnl38@stat.rutgers.edu
- LinkedIn: https://www.linkedin.com/in/valerie-le-1306/
- GitHub: https://github.com/valle1306

EXPERIENCE HIGHLIGHTS:
1. IQVIA (Biostatistics Intern, Summer 2024):
   - Developed R Shiny app for graphical testing in oncology trials
   - Deployed at: https://oncotrialdesign.shinyapps.io/graphMTP/
   - Mentored by Dr. Philip He

2. Rutgers DIMACS REU (May-Aug 2023):
   - Researched propensity score methods for causal inference
   - Mentored by Dr. Nicole Pashley

3. Social Perception Lab (2021-2024):
   - Data analyst studying social psychology
   - Worked with Dr. Lee Jussim

4. ABUSA Lab - Anxiety and Depression Research (2022-2024):
   - Data analyst for mental health research
   - Worked with Dr. Teresa Leyro

PROJECTS:
1. Clinical Trial Design App (GraphMTP Shiny App):
   - Interactive R Shiny application for graphical multiple testing
   - Features: hypothesis visualization, Type I error control, power optimization
   - Link: https://oncotrialdesign.shinyapps.io/graphMTP/

2. ProtonPulse: Proton Therapy Clinical Trial Navigator:
   - Streamlit app comparing FDA-approved proton therapy indications
   - Uses advanced embeddings for trial similarity analysis
   - Link: https://protonpulse.streamlit.app/

3. Dr. Gemma Moran's AI Research Agent:
   - Designed AI agent for biostatistics domain research
   - Explores grant pathways and collaboration opportunities

4. Optimal Allocation in Multi-Armed Bandit Trials:
   - Research on adaptive randomization in clinical trials

LIFE & INTERESTS:
- Runner: Completed Asbury Park Half Marathon (2:25), Flying Pig Marathon (full, 5:58)
- Strava profile: https://www.strava.com/athletes/105261652

SITE NAVIGATION:
- Home: / - Overview and deployed apps
- Projects: /projects - Research and software projects
- Experience: /experience - Work and research experience
- CV: /resume - Download academic or industry resume
- Life: /life - Personal interests and photos

RESUME DOWNLOADS:
- Academic CV: /static/Jan2026__Valerie_Le__Academic.pdf
- Industry/Masters CV: /static/Jan2026__Valerie_Le__Masters.pdf

When responding:
1. Be friendly, helpful, and concise
2. When asked about specific topics, provide relevant details and links
3. If asked about contacting Valerie, provide her email
4. Guide visitors to relevant pages when appropriate
5. Keep responses under 150 words unless more detail is requested
`

const Chatbot: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <div id="chatbot-container">
      {/* Chat Toggle Button */}
      <button 
        id="chat-toggle" 
        aria-label="Open chat"
        onclick="toggleChat()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Chat Window */}
      <div id="chat-window" class="hidden">
        <div id="chat-header">
          <span>💬 Ask Valerie's AI Assistant</span>
          <button onclick="toggleChat()" aria-label="Close chat">×</button>
        </div>
        <div id="chat-messages">
          <div class="chat-message bot">
            Hi! I'm Valerie's AI assistant. I can help you learn about her research, projects, and experience. What would you like to know?
          </div>
        </div>
        <div id="chat-input-container">
          <input 
            type="text" 
            id="chat-input" 
            placeholder="Ask about projects, experience, contact..."
            onkeypress="handleKeyPress(event)"
          />
          <button id="send-btn" onclick="sendMessage()" aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div id="api-key-setup" class="hidden">
          <p>Enter your OpenAI API key to enable AI responses:</p>
          <input type="password" id="api-key-input" placeholder="sk-..." />
          <button onclick="saveApiKey()">Save</button>
          <button onclick="useLocalMode()">Use offline mode</button>
        </div>
      </div>

      <style>{`
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

        #chat-window.hidden {
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
          background: var(--lightgray);
          color: var(--darkgray);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .chat-message.user {
          background: linear-gradient(135deg, var(--secondary) 0%, var(--tertiary) 100%);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .chat-message.typing {
          background: var(--lightgray);
          color: var(--gray);
        }

        .chat-message a {
          color: var(--secondary);
          text-decoration: underline;
        }

        .chat-message.user a {
          color: white;
        }

        #chat-input-container {
          display: flex;
          padding: 12px;
          gap: 8px;
          border-top: 1px solid var(--lightgray);
          background: var(--light);
        }

        #chat-input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid var(--lightgray);
          border-radius: 20px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
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

        #api-key-setup {
          padding: 16px;
          background: var(--lightgray);
          text-align: center;
        }

        #api-key-setup.hidden {
          display: none;
        }

        #api-key-setup input {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          border: 1px solid var(--gray);
          border-radius: 4px;
        }

        #api-key-setup button {
          padding: 8px 16px;
          margin: 4px;
          background: var(--secondary);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
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
      `}</style>

      <script>{`
        // Site knowledge for local mode
        const KNOWLEDGE = ${JSON.stringify(SITE_KNOWLEDGE)};

        // Simple local responses based on keywords
        const LOCAL_RESPONSES = {
          'contact|email|reach': 'You can reach Valerie at pnl38@stat.rutgers.edu. She\\'s also on LinkedIn: linkedin.com/in/valerie-le-1306/',
          'project|app|deployed|clinical|trial': 'Valerie has two deployed apps: 1) GraphMTP Shiny App for clinical trial design at oncotrialdesign.shinyapps.io/graphMTP/ 2) ProtonPulse for proton therapy trials at protonpulse.streamlit.app/',
          'experience|work|intern|job': 'Key experiences: IQVIA Biostatistics Intern (2024), DIMACS REU researcher (2023), Social Perception Lab analyst (2021-24), and ABUSA Lab researcher (2022-24). Check /experience for details!',
          'education|degree|school|phd|rutgers': 'Valerie is a PhD student in Statistics at Rutgers (2024-present). She got her BS in Statistics from Rutgers in 2024, summa cum laude!',
          'research|interest|focus': 'Valerie researches causal inference, adaptive clinical trial design, and ML applications in healthcare. Check /projects for her work!',
          'cv|resume|download': 'Download Valerie\\'s CV from the CV page (/resume). There\\'s an Academic CV and an Industry/Masters CV available.',
          'run|marathon|hobby|life|personal': 'Valerie is an avid runner! She completed the Asbury Park Half Marathon (2:25) and Flying Pig Marathon (5:58). Check /life for more!',
          'hello|hi|hey|help': 'Hi there! I can tell you about Valerie\\'s projects, experience, research interests, or how to contact her. What would you like to know?',
          'navigate|page|where|find': 'Site pages: Home (/), Projects (/projects), Experience (/experience), CV (/resume), Life (/life). What are you looking for?'
        };

        let chatOpen = false;
        let apiKey = localStorage.getItem('chatbot_api_key');
        let useLocal = localStorage.getItem('chatbot_local_mode') === 'true';

        function toggleChat() {
          chatOpen = !chatOpen;
          const window = document.getElementById('chat-window');
          const toggle = document.getElementById('chat-toggle');
          
          if (chatOpen) {
            window.classList.remove('hidden');
            document.getElementById('chat-input').focus();
          } else {
            window.classList.add('hidden');
          }
        }

        function handleKeyPress(event) {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }

        function addMessage(text, isUser) {
          const container = document.getElementById('chat-messages');
          const msg = document.createElement('div');
          msg.className = 'chat-message ' + (isUser ? 'user' : 'bot');
          msg.innerHTML = text;
          container.appendChild(msg);
          container.scrollTop = container.scrollHeight;
        }

        function showTyping() {
          const container = document.getElementById('chat-messages');
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

        function getLocalResponse(query) {
          const lowerQuery = query.toLowerCase();
          
          for (const [pattern, response] of Object.entries(LOCAL_RESPONSES)) {
            const regex = new RegExp(pattern, 'i');
            if (regex.test(lowerQuery)) {
              return response;
            }
          }
          
          return "I can help with info about Valerie's projects, experience, research, or contact info. What would you like to know?";
        }

        async function sendMessage() {
          const input = document.getElementById('chat-input');
          const text = input.value.trim();
          if (!text) return;

          addMessage(text, true);
          input.value = '';

          showTyping();

          if (useLocal || !apiKey) {
            // Local mode - use keyword matching
            setTimeout(() => {
              removeTyping();
              addMessage(getLocalResponse(text), false);
            }, 500 + Math.random() * 500);
            return;
          }

          // OpenAI API mode
          try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
              },
              body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                  { role: 'system', content: KNOWLEDGE },
                  { role: 'user', content: text }
                ],
                max_tokens: 300,
                temperature: 0.7
              })
            });

            const data = await response.json();
            removeTyping();

            if (data.error) {
              if (data.error.code === 'invalid_api_key') {
                addMessage('API key issue. Using offline mode.', false);
                useLocal = true;
                localStorage.setItem('chatbot_local_mode', 'true');
                addMessage(getLocalResponse(text), false);
              } else {
                addMessage('Error: ' + data.error.message, false);
              }
            } else {
              addMessage(data.choices[0].message.content, false);
            }
          } catch (error) {
            removeTyping();
            addMessage('Connection error. Using offline mode.', false);
            addMessage(getLocalResponse(text), false);
          }
        }

        function saveApiKey() {
          const key = document.getElementById('api-key-input').value.trim();
          if (key.startsWith('sk-')) {
            apiKey = key;
            localStorage.setItem('chatbot_api_key', key);
            useLocal = false;
            localStorage.setItem('chatbot_local_mode', 'false');
            document.getElementById('api-key-setup').classList.add('hidden');
            addMessage('API key saved! AI responses enabled.', false);
          } else {
            alert('Please enter a valid OpenAI API key starting with sk-');
          }
        }

        function useLocalMode() {
          useLocal = true;
          localStorage.setItem('chatbot_local_mode', 'true');
          document.getElementById('api-key-setup').classList.add('hidden');
          addMessage('Offline mode enabled. I\\'ll answer based on site content.', false);
        }
      `}</script>
    </div>
  )
}

Chatbot.css = `
  /* Chatbot styles are inline in the component */
`

export default (() => Chatbot) satisfies QuartzComponentConstructor
