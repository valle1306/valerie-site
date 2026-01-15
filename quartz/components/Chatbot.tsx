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
          <span>💬 Ask Valerie's AI Assistant</span>
          <button id="chat-close" aria-label="Close chat">×</button>
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
  // Simple local responses based on keywords
  const LOCAL_RESPONSES = {
    'contact|email|reach': 'You can reach Valerie at pnl38@stat.rutgers.edu. She is also on LinkedIn: linkedin.com/in/valerie-le-1306/',
    'project|app|deployed|clinical|trial': 'Valerie has two deployed apps: 1) GraphMTP Shiny App for clinical trial design at oncotrialdesign.shinyapps.io/graphMTP/ 2) ProtonPulse for proton therapy trials at protonpulse.streamlit.app/',
    'experience|work|intern|job': 'Key experiences: CHOP D3b Center RA (2024-present), Bristol Myers Squibb Challenge, IDX Exchange intern, JPMorgan Quant Research. Check /experience for details!',
    'education|degree|school|phd|rutgers|master': 'Valerie is a Masters student in Statistics - Data Science at Rutgers (2024-present). She got her BS in Biomathematics from Rutgers in 2024!',
    'research|interest|focus': 'Valerie researches uncertainty quantification, causal inference, and ML applications in healthcare. Check /projects for her work!',
    'cv|resume|download': 'Download Valeries CV from the CV page (/resume). There is an Academic CV and an Industry/Masters CV available.',
    'run|marathon|hobby|life|personal': 'Valerie is an avid runner! She completed the Asbury Park Half Marathon (2:25) and Flying Pig Marathon (5:58). Check /life for more!',
    'hello|hi|hey|help': 'Hi there! I can tell you about Valeries projects, experience, research interests, or how to contact her. What would you like to know?',
    'navigate|page|where|find': 'Site pages: Home (/), Projects (/projects), Experience (/experience), CV (/resume), Life (/life). What are you looking for?',
    'gemma|moran|uncertainty': 'Valerie is working with Dr. Gemma Moran on uncertainty quantification for biomedical classification at Rutgers.',
    'chop|brain|tumor|imaging': 'Valerie works as an Imaging Data Analyst RA at CHOP D3b Center, developing deep learning pipelines for pediatric brain tumor segmentation.',
    'shiny|graphmtp|clinical trial': 'The GraphMTP Shiny app helps biostatisticians design clinical trials with graphical multiple testing. Try it at oncotrialdesign.shinyapps.io/graphMTP/',
    'proton|pulse|bms|bristol': 'ProtonPulse is a Streamlit app Valerie built for the BMS Challenge to estimate charge variants in therapeutic proteins. Try it at protonpulse.streamlit.app/'
  };

  let chatOpen = false;

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

  function getLocalResponse(query) {
    const lowerQuery = query.toLowerCase();
    
    for (const [pattern, response] of Object.entries(LOCAL_RESPONSES)) {
      const regex = new RegExp(pattern, 'i');
      if (regex.test(lowerQuery)) {
        return response;
      }
    }
    
    return "I can help with info about Valeries projects, experience, research, or contact info. What would you like to know?";
  }

  function sendMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, true);
    input.value = '';

    showTyping();

    // Local mode - use keyword matching
    setTimeout(() => {
      removeTyping();
      addMessage(getLocalResponse(text), false);
    }, 500 + Math.random() * 500);
  }

  // Attach event listeners
  const toggleBtn = document.getElementById('chat-toggle');
  const closeBtn = document.getElementById('chat-close');
  const sendBtn = document.getElementById('send-btn');
  const chatInput = document.getElementById('chat-input');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleChat);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', toggleChat);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
`

export default (() => Chatbot) satisfies QuartzComponentConstructor
