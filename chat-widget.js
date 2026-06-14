// Sam Chatbot Widget - JavaScript with Integrated Knowledge Base
class SamChatbot {
    constructor() {
        // Knowledge base is now directly embedded
        this.knowledgeBase = this.getKnowledgeBase();
        this.initialize();
    }

    async initialize() {
        // No need to load from API - knowledge base is already available
        console.log('Knowledge base loaded from embedded data');
        
        // Initialize chatbot UI
        this.initUI();
        
        // Add event listeners
        this.addEventListeners();
    }

    getKnowledgeBase() {
        // All data.json content embedded directly
        return {
            "company": {
                "name": "Samiksha Tech Solutions",
                "tagline": "Innovative Technology Solutions for Modern Businesses",
                "responses": {
                    "about": "🚀 <strong>Samiksha Tech Solutions</strong> is a leading technology consulting company that provides innovative software solutions, digital transformation services, and IT consulting to businesses worldwide. We specialize in delivering cutting-edge technology solutions that drive growth and efficiency.",
                    
                    "mission": "🎯 <strong>Our Mission:</strong> To empower businesses with transformative technology solutions that enhance productivity, drive innovation, and create sustainable competitive advantages in the digital era.",
                    
                    "vision": "🔭 <strong>Our Vision:</strong> To be the most trusted technology partner for businesses globally, recognized for excellence, innovation, and client success.",
                    
                    "values": "💎 <strong>Our Core Values:</strong><br>" +
                             "• <strong>Innovation:</strong> Constantly pushing technological boundaries<br>" +
                             "• <strong>Integrity:</strong> Transparent and ethical business practices<br>" +
                             "• <strong>Excellence:</strong> Delivering superior quality in everything we do<br>" +
                             "• <strong>Collaboration:</strong> Partnering for mutual success<br>" +
                             "• <strong>Customer-Centricity:</strong> Putting clients at the heart of our solutions",
                    
                    "team": "👥 <strong>Our Expert Team:</strong> We have a team of certified professionals including:<br>" +
                           "• Software Architects & Developers<br>" +
                           "• Cloud & DevOps Engineers<br>" +
                           "• Cybersecurity Experts<br>" +
                           "• AI/ML Specialists<br>" +
                           "• UI/UX Designers<br>" +
                           "• Project Managers",
                    
                    "contact": "📞 <strong>Contact Information:</strong><br>" +
                              "• <strong>Email:</strong> samikshatechsolutions@gmail.com<br>" +
                              "• <strong>Phone:</strong> +91-9876924411<br>" +
                              "• <strong>Address:</strong>Prayag Tech Park, Prayagraj, India<br>" +
                              "• <strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST<br>" +
                              "• <strong>Website:</strong> www.samikshatechsolutions.github.io",
                    
                    "industries": "🏢 <strong>Industries We Serve:</strong><br>" +
                                 "• <strong>Retail & E-commerce:</strong> Omnichannel solutions, inventory management<br>" +
                                 "• <strong>Healthcare:</strong> Telemedicine, EHR systems, health tech<br>" +
                                 "• <strong>Finance:</strong> Fintech solutions, banking software, payment gateways<br>" +
                                 "• <strong>Education:</strong> EdTech platforms, LMS, e-learning solutions<br>" +
                                 "• <strong>Manufacturing:</strong> Industry 4.0, IoT solutions, supply chain management<br>" +
                                 "• <strong>Logistics:</strong> Fleet management, tracking systems, warehouse solutions"
                }
            },
            
            "products": {
                "categories": ["Software Solutions", "Cloud Services", "Cybersecurity", "ERP Solutions", "AI Products"],
                "responses": {
                    "software_solutions": "💻 <strong>Custom Software Solutions:</strong><br>" +
                                         "• <strong>Enterprise Applications:</strong> Tailored business software<br>" +
                                         "• <strong>CRM Systems:</strong> Customer relationship management<br>" +
                                         "• <strong>Business Intelligence:</strong> Data analytics & reporting tools<br>" +
                                         "• <strong>Workflow Automation:</strong> Process optimization software<br>" +
                                         "• <strong>Legacy System Modernization:</strong> Upgrading old systems",
                    
                    "cloud_services": "☁️ <strong>Cloud Services & Solutions:</strong><br>" +
                                     "• <strong>Cloud Migration:</strong> Seamless transition to cloud<br>" +
                                     "• <strong>AWS/Azure/GCP Consulting:</strong> Expert cloud strategy<br>" +
                                     "• <strong>Cloud Infrastructure Setup:</strong> Scalable architecture design<br>" +
                                     "• <strong>Managed Cloud Services:</strong> 24/7 monitoring & support<br>" +
                                     "• <strong>Hybrid Cloud Solutions:</strong> Best of both worlds",
                    
                    "cybersecurity": "🔒 <strong>Cybersecurity Solutions:</strong><br>" +
                                    "• <strong>Vulnerability Assessment:</strong> Security gap analysis<br>" +
                                    "• <strong>Penetration Testing:</strong> Simulated cyber attacks<br>" +
                                    "• <strong>Security Monitoring:</strong> Real-time threat detection<br>" +
                                    "• <strong>Compliance Management:</strong> GDPR, HIPAA, ISO 27001<br>" +
                                    "• <strong>Data Protection:</strong> Encryption & access control",
                    
                    "erp_solutions": "📊 <strong>ERP Solutions:</strong><br>" +
                                    "• <strong>Custom ERP Development:</strong> Tailored to your business<br>" +
                                    "• <strong>Odoo Implementation:</strong> Open-source ERP solutions<br>" +
                                    "• <strong>SAP Business One:</strong> Enterprise resource planning<br>" +
                                    "• <strong>Inventory Management:</strong> Stock control systems<br>" +
                                    "• <strong>Supply Chain Solutions:</strong> End-to-end management",
                    
                    "ai_products": "🤖 <strong>AI-Powered Products:</strong><br>" +
                                  "• <strong>SamAI Chatbot:</strong> Intelligent customer support<br>" +
                                  "• <strong>Predictive Analytics:</strong> Data-driven insights<br>" +
                                  "• <strong>Computer Vision:</strong> Image & video analysis<br>" +
                                  "• <strong>Natural Language Processing:</strong> Text analysis tools<br>" +
                                  "• <strong>Recommendation Engines:</strong> Personalized suggestions"
                }
            },
            
            "services": {
                "categories": ["Web Development", "Mobile Development", "AI/ML Services", "DevOps", "IT Consulting", "Support & Maintenance"],
                "responses": {
                    "web_development": "🌐 <strong>Web Development Services:</strong><br>" +
                                      "• <strong>Responsive Websites:</strong> Mobile-friendly designs<br>" +
                                      "• <strong>E-commerce Solutions:</strong> Online stores & marketplaces<br>" +
                                      "• <strong>CMS Development:</strong> WordPress, Drupal, Joomla<br>" +
                                      "• <strong>Progressive Web Apps:</strong> Native-like web apps<br>" +
                                      "• <strong>Web Portals:</strong> Customer & employee portals<br>" +
                                      "• <strong>API Development:</strong> RESTful & GraphQL APIs",
                    
                    "mobile_development": "📱 <strong>Mobile App Development:</strong><br>" +
                                         "• <strong>iOS Development:</strong> Swift & Objective-C<br>" +
                                         "• <strong>Android Development:</strong> Kotlin & Java<br>" +
                                         "• <strong>Cross-Platform:</strong> Flutter & React Native<br>" +
                                         "• <strong>UI/UX Design:</strong> Intuitive user interfaces<br>" +
                                         "• <strong>App Store Optimization:</strong> Better visibility<br>" +
                                         "• <strong>App Maintenance:</strong> Updates & support",
                    
                    "ai_ml_services": "🧠 <strong>AI/ML Development Services:</strong><br>" +
                                     "• <strong>Custom Chatbots:</strong> AI-powered assistants<br>" +
                                     "• <strong>Machine Learning Models:</strong> Predictive analytics<br>" +
                                     "• <strong>Deep Learning:</strong> Neural networks implementation<br>" +
                                     "• <strong>Data Science:</strong> Insights & analytics<br>" +
                                     "• <strong>Computer Vision:</strong> Image recognition systems<br>" +
                                     "• <strong>NLP Solutions:</strong> Text analysis & processing",
                    
                    "devops": "⚙️ <strong>DevOps Services:</strong><br>" +
                             "• <strong>CI/CD Pipeline:</strong> Automated deployment<br>" +
                             "• <strong>Containerization:</strong> Docker & Kubernetes<br>" +
                             "• <strong>Infrastructure as Code:</strong> Terraform & Ansible<br>" +
                             "• <strong>Monitoring:</strong> Logging & performance tracking<br>" +
                             "• <strong>Microservices Architecture:</strong> Scalable systems<br>" +
                             "• <strong>Cloud Automation:</strong> Auto-scaling & management",
                    
                    "it_consulting": "💼 <strong>IT Consulting Services:</strong><br>" +
                                    "• <strong>Digital Transformation:</strong> Business modernization<br>" +
                                    "• <strong>Technology Strategy:</strong> Roadmap planning<br>" +
                                    "• <strong>System Architecture:</strong> Solution design<br>" +
                                    "• <strong>Technical Advisory:</strong> Expert guidance<br>" +
                                    "• <strong>Process Optimization:</strong> Efficiency improvement<br>" +
                                    "• <strong>Vendor Selection:</strong> Technology partnership",
                    
                    "support_maintenance": "🔄 <strong>Support & Maintenance:</strong><br>" +
                                         "• <strong>24/7 Technical Support:</strong> Round-the-clock assistance<br>" +
                                         "• <strong>Application Maintenance:</strong> Regular updates<br>" +
                                         "• <strong>Bug Fixing:</strong> Issue resolution<br>" +
                                         "• <strong>Performance Optimization:</strong> Speed improvement<br>" +
                                         "• <strong>Security Updates:</strong> Vulnerability patches<br>" +
                                         "• <strong>Backup & Recovery:</strong> Data protection"
                }
            },
            
            "technology_stack": {
                "frontend": ["React", "Angular", "Vue.js", "TypeScript", "HTML5/CSS3", "Bootstrap"],
                "backend": ["Node.js", "Python Django", "Java Spring", ".NET Core", "PHP Laravel", "Ruby on Rails"],
                "mobile": ["Flutter", "React Native", "Swift", "Kotlin", "Java"],
                "database": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
                "cloud": ["AWS", "Azure", "Google Cloud", "Digital Ocean"],
                "devops": ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"]
            },
            
            "faq": {
                "questions": [
                    {
                        "keywords": ["price", "cost", "pricing", "how much"],
                        "answer": "💰 <strong>Pricing Information:</strong><br>" +
                                 "We offer flexible pricing models to suit different needs:<br>" +
                                 "• <strong>Project-Based:</strong> Fixed price for defined scope<br>" +
                                 "• <strong>Time & Material:</strong> Hourly/daily rates<br>" +
                                 "• <strong>Monthly Retainer:</strong> Ongoing support packages<br>" +
                                 "• <strong>Dedicated Team:</strong> Full-time resources<br><br>" +
                                 "📊 <strong>Factors affecting cost:</strong><br>" +
                                 "1. Project complexity & features<br>" +
                                 "2. Technology stack required<br>" +
                                 "3. Timeline & urgency<br>" +
                                 "4. Team size & expertise<br><br>" +
                                 "💡 <strong>Get a Quote:</strong> Contact us for a free consultation and customized pricing."
                    },
                    {
                        "keywords": ["time", "timeline", "duration", "how long", "delivery"],
                        "answer": "⏱️ <strong>Project Timeline:</strong><br>" +
                                 "Typical project durations:<br>" +
                                 "• <strong>Small Projects:</strong> 2-4 weeks<br>" +
                                 "• <strong>Medium Projects:</strong> 1-3 months<br>" +
                                 "• <strong>Large Projects:</strong> 3-6 months<br>" +
                                 "• <strong>Enterprise Solutions:</strong> 6+ months<br><br>" +
                                 "🔄 <strong>Our Development Phases:</strong><br>" +
                                 "1. Discovery & Planning (1-2 weeks)<br>" +
                                 "2. Design & Prototyping (2-3 weeks)<br>" +
                                 "3. Development (4-12 weeks)<br>" +
                                 "4. Testing & QA (2-4 weeks)<br>" +
                                 "5. Deployment & Launch (1-2 weeks)<br>" +
                                 "6. Support & Maintenance (Ongoing)"
                    },
                    {
                        "keywords": ["technology", "tech stack", "what technology", "tools"],
                        "answer": "🛠️ <strong>Technology Stack:</strong><br>" +
                                 "We work with modern, proven technologies:<br><br>" +
                                 "🌐 <strong>Frontend:</strong> React, Angular, Vue.js, TypeScript<br>" +
                                 "⚙️ <strong>Backend:</strong> Node.js, Python, Java, .NET, PHP<br>" +
                                 "📱 <strong>Mobile:</strong> Flutter, React Native, Swift, Kotlin<br>" +
                                 "🗄️ <strong>Database:</strong> PostgreSQL, MySQL, MongoDB, Redis<br>" +
                                 "☁️ <strong>Cloud:</strong> AWS, Azure, Google Cloud Platform<br>" +
                                 "🚀 <strong>DevOps:</strong> Docker, Kubernetes, Jenkins, GitLab"
                    },
                    {
                        "keywords": ["process", "methodology", "how work", "approach"],
                        "answer": "🔄 <strong>Our Development Process:</strong><br>" +
                                 "We follow Agile methodology with these phases:<br><br>" +
                                 "1. 📋 <strong>Requirement Analysis:</strong> Understanding your needs<br>" +
                                 "2. 📐 <strong>Planning & Estimation:</strong> Roadmap creation<br>" +
                                 "3. 🎨 <strong>Design & Prototyping:</strong> UI/UX design<br>" +
                                 "4. 💻 <strong>Development:</strong> Coding & implementation<br>" +
                                 "5. 🧪 <strong>Testing:</strong> QA & bug fixing<br>" +
                                 "6. 🚀 <strong>Deployment:</strong> Launch & go-live<br>" +
                                 "7. 🔧 <strong>Maintenance:</strong> Support & updates"
                    },
                    {
                        "keywords": ["support", "maintenance", "after launch", "warranty"],
                        "answer": "🛡️ <strong>Support & Maintenance:</strong><br>" +
                                 "We provide comprehensive post-launch support:<br><br>" +
                                 "• <strong>Standard Support:</strong> 3 months free support<br>" +
                                 "• <strong>Extended Support:</strong> Customizable packages<br>" +
                                 "• <strong>Response Time:</strong> 2-24 hours based on priority<br>" +
                                 "• <strong>Support Channels:</strong> Email, Phone, Ticketing System<br>" +
                                 "• <strong>Regular Updates:</strong> Security patches & feature updates<br>" +
                                 "• <strong>Performance Monitoring:</strong> 24/7 system monitoring"
                    }
                ]
            },
            
            "keywords": {
                "greetings": ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
                "farewell": ["bye", "goodbye", "see you", "thanks", "thank you"],
                "products": ["product", "software", "cloud", "cyber", "security", "erp", "ai", "solution"],
                "services": ["service", "develop", "build", "create", "make", "design", "consult"],
                "company": ["about", "company", "mission", "vision", "values", "team", "who are you"],
                "contact": ["contact", "email", "phone", "address", "location", "reach", "get in touch"]
            },
            
            "default_responses": {
                "greeting": "👋 Hello! I'm <strong>Sam</strong>, your AI assistant for <strong>Samiksha Tech Solutions</strong>. I'm here to help you learn about our products, services, and company. How can I assist you today?",
                
                "farewell": "👋 Thank you for chatting with me! If you have more questions about Samiksha Tech Solutions, feel free to ask anytime. Have a great day!",
                
                "unknown": "🤔 I'm not sure I understand. I'm here to help with information about <strong>Samiksha Tech Solutions</strong>.<br><br>" +
                          "You can ask me about:<br>" +
                          "• Our <strong>products</strong> and <strong>services</strong><br>" +
                          "• Company <strong>information</strong><br>" +
                          "• <strong>Technology</strong> stack we use<br>" +
                          "• Project <strong>pricing</strong> and <strong>timelines</strong><br>" +
                          "• How to <strong>contact</strong> us<br><br>" +
                          "💡 <strong>Try asking:</strong> 'What services do you offer?' or 'How can I contact your team?'"
            }
        };
    }

    initUI() {
        // Create chatbot container if it doesn't exist
        if (!document.getElementById('sam-chatbot-container')) {
            const container = document.createElement('div');
            container.id = 'sam-chatbot-container';
            container.innerHTML = `
                <button id="sam-toggle-btn" title="Chat with Sam">
                    <span>🤖</span>
                </button>
                
                <div id="sam-chat-window" class="sam-hidden">
                    <div class="sam-chat-header">
                        <h3>
                            <div class="sam-chat-header-avatar">S</div>
                            Sam - AI Assistant
                        </h3>
                        <button id="sam-close-btn" title="Close">×</button>
                    </div>
                    
                    <div id="sam-chat-messages">
                        <div class="sam-message sam-bot-message">
                            ${this.knowledgeBase.default_responses.greeting}
                        </div>
                    </div>
                    
                    <div class="sam-quick-replies" id="sam-quick-replies">
                        <div class="sam-quick-reply" data-question="What services do you offer?">Our Services</div>
                        <div class="sam-quick-reply" data-question="Tell me about your products">Products</div>
                        <div class="sam-quick-reply" data-question="How to contact you?">Contact Us</div>
                        <div class="sam-quick-reply" data-question="What is your pricing?">Pricing</div>
                    </div>
                    
                    <div class="sam-chat-input-area">
                        <input type="text" id="sam-user-input" placeholder="Type your question here..." autocomplete="off">
                        <button id="sam-send-btn">Send</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(container);
            
            // Inject styles
            this.injectStyles();
        }
    }

    injectStyles() {
        // CSS is loaded externally from chat-widget.css
        // If you want to inject dynamically, uncomment below:
        
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'https://abhishekpatel111.github.io/sam/chat-widget.css';
        document.head.appendChild(style);
        
    }

    addEventListeners() {
        // Toggle chatbot
        document.getElementById('sam-toggle-btn')?.addEventListener('click', () => {
            this.toggleChat();
        });

        // Close chatbot
        document.getElementById('sam-close-btn')?.addEventListener('click', () => {
            this.closeChat();
        });

        // Send message
        document.getElementById('sam-send-btn')?.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        document.getElementById('sam-user-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Quick reply buttons
        document.querySelectorAll('.sam-quick-reply').forEach(button => {
            button.addEventListener('click', (e) => {
                const question = e.target.getAttribute('data-question');
                this.processQuickReply(question);
            });
        });
    }

    toggleChat() {
        const chatWindow = document.getElementById('sam-chat-window');
        chatWindow.classList.toggle('sam-hidden');
        
        if (!chatWindow.classList.contains('sam-hidden')) {
            document.getElementById('sam-user-input').focus();
        }
    }

    closeChat() {
        document.getElementById('sam-chat-window').classList.add('sam-hidden');
    }

    async sendMessage() {
        const input = document.getElementById('sam-user-input');
        const message = input.value.trim();
        
        if (message) {
            // Add user message
            this.addMessage(message, 'user');
            input.value = '';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Get response after delay
            setTimeout(() => {
                this.removeTypingIndicator();
                const response = this.getResponse(message);
                this.addMessage(response, 'bot');
            }, 800 + Math.random() * 800);
        }
    }

    processQuickReply(question) {
        document.getElementById('sam-user-input').value = question;
        this.sendMessage();
    }

    addMessage(text, sender) {
        const chatMessages = document.getElementById('sam-chat-messages');
        const messageDiv = document.createElement('div');
        
        messageDiv.className = `sam-message sam-${sender}-message`;
        
        if (sender === 'user') {
            messageDiv.textContent = text;
        } else {
            messageDiv.innerHTML = text;
        }
        
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Update quick replies based on conversation
        this.updateQuickReplies(text, sender);
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('sam-chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'sam-typing-indicator';
        typingDiv.id = 'sam-typing-indicator';
        typingDiv.innerHTML = `
            <div class="sam-typing-dot"></div>
            <div class="sam-typing-dot"></div>
            <div class="sam-typing-dot"></div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('sam-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    getResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Check greetings
        if (this.knowledgeBase.keywords?.greetings?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.default_responses.greeting;
        }
        
        // Check farewell
        if (this.knowledgeBase.keywords?.farewell?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.default_responses.farewell;
        }
        
        // Check company info
        if (this.knowledgeBase.keywords?.company?.some(keyword => 
            message.includes(keyword))) {
            return this.searchInKnowledgeBase(message, 'company');
        }
        
        // Check products
        if (this.knowledgeBase.keywords?.products?.some(keyword => 
            message.includes(keyword))) {
            return this.searchInKnowledgeBase(message, 'products');
        }
        
        // Check services
        if (this.knowledgeBase.keywords?.services?.some(keyword => 
            message.includes(keyword))) {
            return this.searchInKnowledgeBase(message, 'services');
        }
        
        // Check contact
        if (this.knowledgeBase.keywords?.contact?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.company?.responses?.contact || 
                   this.knowledgeBase.default_responses.unknown;
        }
        
        // Check FAQ
        const faqResponse = this.searchFAQ(message);
        if (faqResponse) {
            return faqResponse;
        }
        
        // Deep search in all responses
        const deepSearchResponse = this.deepSearch(message);
        if (deepSearchResponse) {
            return deepSearchResponse;
        }
        
        // Default response
        return this.knowledgeBase.default_responses.unknown;
    }

    searchInKnowledgeBase(message, category) {
        if (!this.knowledgeBase[category]?.responses) {
            return this.knowledgeBase.default_responses.unknown;
        }
        
        const responses = this.knowledgeBase[category].responses;
        
        // Search for specific keywords in responses
        for (const [key, response] of Object.entries(responses)) {
            const searchKey = key.replace('_', ' ');
            if (message.includes(searchKey) || 
                message.includes(key.replace('_', ''))) {
                return response;
            }
        }
        
        // Return first response if no match found
        return Object.values(responses)[0] || 
               this.knowledgeBase.default_responses.unknown;
    }

    searchFAQ(message) {
        if (!this.knowledgeBase.faq?.questions) {
            return null;
        }
        
        for (const faq of this.knowledgeBase.faq.questions) {
            for (const keyword of faq.keywords) {
                if (message.includes(keyword)) {
                    return faq.answer;
                }
            }
        }
        
        return null;
    }

    deepSearch(message) {
        // Search in all categories
        const categories = ['company', 'products', 'services'];
        
        for (const category of categories) {
            if (this.knowledgeBase[category]?.responses) {
                for (const [key, response] of Object.entries(this.knowledgeBase[category].responses)) {
                    // Convert response to lowercase for searching
                    const responseLower = response.toLowerCase();
                    // Check if any word from message is in response
                    const words = message.split(' ');
                    for (const word of words) {
                        if (word.length > 3 && responseLower.includes(word)) {
                            return response;
                        }
                    }
                }
            }
        }
        
        return null;
    }

    updateQuickReplies(message, sender) {
        if (sender === 'user') {
            const quickReplies = document.getElementById('sam-quick-replies');
            
            // Update based on user's message
            if (message.toLowerCase().includes('service')) {
                quickReplies.innerHTML = `
                    <div class="sam-quick-reply" data-question="web development">Web Development</div>
                    <div class="sam-quick-reply" data-question="mobile app development">Mobile Apps</div>
                    <div class="sam-quick-reply" data-question="AI ML services">AI/ML Services</div>
                    <div class="sam-quick-reply" data-question="devops services">DevOps</div>
                `;
            } else if (message.toLowerCase().includes('product')) {
                quickReplies.innerHTML = `
                    <div class="sam-quick-reply" data-question="software solutions">Software</div>
                    <div class="sam-quick-reply" data-question="cloud services">Cloud</div>
                    <div class="sam-quick-reply" data-question="cybersecurity">Security</div>
                    <div class="sam-quick-reply" data-question="ERP solutions">ERP</div>
                `;
            } else if (message.toLowerCase().includes('contact')) {
                quickReplies.innerHTML = `
                    <div class="sam-quick-reply" data-question="email address">Email</div>
                    <div class="sam-quick-reply" data-question="phone number">Phone</div>
                    <div class="sam-quick-reply" data-question="office address">Address</div>
                    <div class="sam-quick-reply" data-question="working hours">Hours</div>
                `;
            }
            
            // Re-add event listeners
            document.querySelectorAll('.sam-quick-reply').forEach(button => {
                button.addEventListener('click', (e) => {
                    const question = e.target.getAttribute('data-question');
                    this.processQuickReply(question);
                });
            });
        }
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.samChatbot = new SamChatbot();
});
