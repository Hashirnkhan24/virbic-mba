export interface Specialization {
	id: string;
	name: string;
	shortName: string;
	overview: {
		description: string;
		focusStatement: string;
		keyPoints: string[];
	};
	coreFocusAreas: string[];
	bestSuitedFor: string[];
	salary: {
		entryLevel: {
			tier2_3: string;
			topCampuses: string;
		};
		midLevel: string;
		seniorLevel: string;
		executiveLevel: string;
	};
	industries: string[];
	recruiters: string[];
	marketOutlook: {
		futureRelevance: string;
		automationRisk: string;
		demandTrend: string;
	};
	workNature: {
		creativity: string;
		analyticalThinking: string;
		peopleInteraction: string;
		stressLevel: string;
		travelFrequency: string;
		workHours: string;
	};
	typicalWorkStyle: string;
	typicalResponsibilities: string[];
	careerProgression: {
		entry: string;
		mid: string;
		senior: string;
		director: string;
		executive: string;
	};
	topInstitutes: string[];
	certifications: string[];
	industryTrends: string[];
	challenges: string[];
	opportunities: string[];
}

export const mbaSpecializations: Specialization[] = [
	{
		id: "finance",
		name: "MBA in Finance",
		shortName: "Finance",
		overview: {
			description:
				"MBA in Finance focuses on financial management, investment analysis, corporate finance, and financial planning. Professionals in this field work on understanding, managing, and improving an organization's financial health and investment decisions.",
			focusStatement:
				"The finance specialization remains one of the most sought-after and highest-paying MBA tracks in India, attracting candidates with strong analytical abilities and interest in capital markets.",
			keyPoints: [
				"Work involves a mix of strategy, quantitative analysis, risk assessment, and cross-functional collaboration",
				"Finance professionals are the backbone of any business, ensuring optimal allocation of resources",
				"They operate at the intersection of business strategy and numerical analysis",
				"Modern finance professionals must be comfortable with financial modeling software and data analytics tools",
				"The Indian financial sector has witnessed tremendous growth over the past decade",
			],
		},
		coreFocusAreas: [
			"Financial Management - capital budgeting, working capital management, financial planning and analysis, treasury operations",
			"Investment Analysis - evaluating securities, conducting valuation exercises, making investment recommendations",
			"Corporate Finance - mergers and acquisitions, capital raising, strategic financial decisions",
			"Risk Management - identifying, measuring, and mitigating financial risks",
		],
		bestSuitedFor: [
			"Analytical thinkers with strong numerical aptitude and comfort with complex calculations",
			"Detail-oriented individuals who enjoy working with data and financial models",
			"Risk-aware professionals with strategic mindset and long-term thinking abilities",
			"Those interested in capital markets, investment strategies, and financial instruments",
		],
		salary: {
			entryLevel: {
				tier2_3: "Rs. 5,00,000 - Rs. 8,00,000 per annum",
				topCampuses:
					"Rs. 25,00,000 - Rs. 40,00,000 per annum (up to Rs. 1 crore for international roles)",
			},
			midLevel:
				"Rs. 12,00,000 - Rs. 25,00,000 per annum (3-5 years experience)",
			seniorLevel: "Rs. 40,00,000+ per annum (8-10 years experience)",
			executiveLevel: "Rs. 1 crore+ annually for CFO positions",
		},
		industries: [
			"Banking and Financial Services",
			"Investment Banking and Capital Markets",
			"Consulting and Advisory",
			"Insurance",
			"FMCG and Consumer Goods",
			"IT and Technology",
			"Real Estate and Infrastructure",
			"Healthcare and Pharmaceuticals",
		],
		recruiters: [
			"Goldman Sachs",
			"JP Morgan Chase",
			"Morgan Stanley",
			"Boston Consulting Group",
			"Bain and Company",
			"McKinsey and Company",
			"HDFC Bank",
			"ICICI Bank",
			"Axis Bank",
			"KPMG",
			"Deloitte",
			"PwC",
			"EY",
			"Citibank",
			"HSBC",
			"Standard Chartered",
			"Bajaj Finance",
			"Tata Capital",
		],
		marketOutlook: {
			futureRelevance:
				"HIGH - Finance remains a core business function with increasing complexity",
			automationRisk:
				"MEDIUM - Strategic decisions and complex problem-solving require human expertise",
			demandTrend:
				"GROWING - India's growing economy and expanding capital markets drive continuous demand",
		},
		workNature: {
			creativity:
				"Medium - requiring innovative solutions to complex financial challenges",
			analyticalThinking:
				"HIGH - heavy emphasis on quantitative analysis and financial modeling",
			peopleInteraction:
				"Medium - regular interaction with stakeholders and internal teams",
			stressLevel: "HIGH - especially in investment banking and trading roles",
			travelFrequency:
				"Low to Medium - depending on role and client requirements",
			workHours:
				"50-70 hours/week in investment banking; 45-55 hours/week in corporate finance",
		},
		typicalWorkStyle:
			"Analyzing financial statements, building financial models, conducting valuation exercises, and preparing investment recommendations. Work is project-based with quarterly and annual reporting cycles.",
		typicalResponsibilities: [
			"Analyzing financial statements and business performance metrics",
			"Developing financial models for forecasting and scenario planning",
			"Managing corporate treasury functions including cash flow optimization",
			"Conducting due diligence for mergers and acquisitions",
			"Preparing board presentations and investor communications",
			"Monitoring regulatory compliance and risk management frameworks",
			"Evaluating capital investment proposals",
			"Supporting strategic planning with financial analysis",
		],
		careerProgression: {
			entry: "Financial Analyst or Associate",
			mid: "Senior Analyst or Senior Associate",
			senior: "Finance Manager or Assistant Vice President",
			director: "Senior Finance Manager or Vice President",
			executive: "Chief Financial Officer (CFO)",
		},
		topInstitutes: [
			"IIM Ahmedabad",
			"IIM Bangalore",
			"IIM Calcutta",
			"XLRI Jamshedpur",
			"ISB Hyderabad",
			"FMS Delhi",
			"JBIMS Mumbai",
			"SPJIMR Mumbai",
		],
		certifications: [
			"CFA (Chartered Financial Analyst)",
			"FRM (Financial Risk Manager)",
			"CAIA (Chartered Alternative Investment Analyst)",
			"CPA (Certified Public Accountant)",
			"NCFM Certifications from NSE",
		],
		industryTrends: [
			"Increasing focus on ESG factors creating opportunities in sustainable finance",
			"Fintech revolution creating new roles in digital payments and blockchain",
			"AI and machine learning integration automating routine tasks",
			"Continued economic growth and digital transformation in India",
		],
		challenges: [
			"Managing market volatility and economic uncertainty",
			"Regulatory compliance becoming increasingly complex",
			"Technology disruption changing how finance functions operate",
		],
		opportunities: [
			"Fintech creating new career paths in digital payments and blockchain",
			"Sustainable finance and ESG investing growing rapidly",
			"Data analytics and AI in finance creating opportunities for tech-savvy professionals",
		],
	},
	{
		id: "marketing",
		name: "MBA in Marketing",
		shortName: "Marketing",
		overview: {
			description:
				"MBA in Marketing focuses on brand management, consumer behavior, digital marketing, and market strategy. Professionals in this field work on understanding, managing, and improving customer acquisition, retention, and brand positioning.",
			focusStatement:
				"Marketing is often called the heart of business as it directly connects organizations with their customers.",
			keyPoints: [
				"Work involves a mix of creative strategy, data-driven decision making, and consumer insights analysis",
				"Marketing professionals are responsible for creating value for customers and building sustainable competitive advantages",
				"Marketing has evolved dramatically with the rise of digital channels and data analytics",
				"The Indian marketing landscape has grown significantly with digital infrastructure expansion",
				"The pandemic has accelerated digital adoption, making digital marketing skills critical",
			],
		},
		coreFocusAreas: [
			"Brand Management - developing and maintaining brand identity, positioning, and equity",
			"Digital Marketing - social media, SEO, content marketing, and online advertising",
			"Consumer Insights - understanding customer needs, preferences, and behaviors",
			"Product Marketing - launching new products, managing portfolios, go-to-market strategies",
			"Marketing Analytics - using data to measure campaign effectiveness",
			"Marketing Communications - advertising, public relations, corporate communications",
			"Customer Experience Management - creating positive interactions across touchpoints",
			"Sales Enablement - providing tools and resources to help sales teams succeed",
		],
		bestSuitedFor: [
			"Creative thinkers with strategic business acumen and innovative mindset",
			"Individuals who understand consumer psychology and behavioral patterns",
			"Data-driven professionals with storytelling abilities and communication skills",
			"Those who thrive in dynamic, fast-paced environments with constant change",
		],
		salary: {
			entryLevel: {
				tier2_3: "Rs. 5,50,000 - Rs. 9,00,000 per annum",
				topCampuses: "Rs. 18,00,000 - Rs. 30,00,000 per annum",
			},
			midLevel:
				"Rs. 12,00,000 - Rs. 20,00,000 per annum (3-5 years experience)",
			seniorLevel:
				"Rs. 35,00,000+ per annum for senior brand managers and marketing heads",
			executiveLevel: "Significant growth potential for high performers",
		},
		industries: [
			"FMCG (Fast Moving Consumer Goods)",
			"E-commerce and Retail",
			"Technology and SaaS",
			"Banking and Financial Services",
			"Media and Entertainment",
			"Healthcare and Pharmaceuticals",
			"Automotive",
			"Telecommunications",
		],
		recruiters: [
			"Hindustan Unilever Limited (HUL)",
			"Procter and Gamble (P&G)",
			"ITC Limited",
			"Nestle India",
			"Amazon India",
			"Flipkart",
			"Google India",
			"Marico",
			"Godrej Consumer Products",
			"Coca-Cola",
			"PepsiCo",
			"Samsung",
			"Apple",
		],
		marketOutlook: {
			futureRelevance:
				"HIGH - Marketing evolves with technology but remains essential for business growth",
			automationRisk: "LOW - Strategy and creativity require human expertise",
			demandTrend:
				"GROWING - Digital transformation and e-commerce expansion drive continuous demand",
		},
		workNature: {
			creativity:
				"HIGH - requiring constant innovation in messaging, campaigns, and strategies",
			analyticalThinking:
				"HIGH - data analytics and consumer insights are critical",
			peopleInteraction:
				"HIGH - extensive collaboration with agencies, teams, and stakeholders",
			stressLevel:
				"Medium to HIGH - campaign deadlines and performance pressure",
			travelFrequency: "Medium - market visits, agency meetings, and events",
			workHours: "45-60 hours/week with peak periods during campaign launches",
		},
		typicalWorkStyle:
			"Developing brand strategies, planning campaigns across multiple channels, analyzing consumer insights, and managing agency relationships. Work is project-based with quarterly planning cycles.",
		typicalResponsibilities: [
			"Developing brand positioning and communication strategies",
			"Planning and executing integrated marketing campaigns",
			"Analyzing consumer behavior and market trends",
			"Managing digital marketing channels and social media presence",
			"Overseeing product launches and go-to-market strategies",
			"Measuring campaign effectiveness and optimizing ROI",
			"Managing marketing budgets and allocating resources",
			"Conducting market research and competitive analysis",
		],
		careerProgression: {
			entry: "Management Trainee or Marketing Executive",
			mid: "Assistant Brand Manager or Marketing Analyst",
			senior: "Brand Manager or Senior Marketing Manager",
			director: "Group Brand Manager or Marketing Head",
			executive: "Chief Marketing Officer (CMO)",
		},
		topInstitutes: [
			"IIM Ahmedabad",
			"IIM Bangalore",
			"IIM Calcutta",
			"XLRI Jamshedpur",
			"MICA Ahmedabad",
			"FMS Delhi",
			"JBIMS Mumbai",
			"Symbiosis Institute of Business Management",
		],
		certifications: [
			"Google Analytics Certification",
			"Google Ads Certification",
			"HubSpot Content Marketing Certification",
			"Facebook Blueprint Certification",
			"Digital Marketing Certifications",
		],
		industryTrends: [
			"Marketing landscape transformed dramatically with digitalization",
			"Proficiency in data analytics, marketing automation tools, and digital platforms essential",
			"Rise of performance marketing and marketing technology (MarTech)",
			"Integration of AI and machine learning into marketing creating new opportunities",
		],
		challenges: [
			"Keeping up with rapidly evolving digital platforms and technologies",
			"Measuring ROI across multiple channels has become increasingly complex",
			"Privacy regulations changing how marketers collect and use customer data",
		],
		opportunities: [
			"Growth of digital marketing creating numerous new career paths",
			"Personalization at scale opening new possibilities for customer engagement",
			"Marketing technology enabling more sophisticated targeting and measurement",
		],
	},
	{
		id: "hr",
		name: "MBA in Human Resources",
		shortName: "hr",
		overview: {
			description:
				"MBA in Human Resources focuses on talent management, organizational behavior, employee relations, and strategic workforce planning. Professionals in this field work on understanding, managing, and improving the human capital of organizations.",
			focusStatement:
				"HR has evolved from an administrative function to a strategic partner in business success.",
			keyPoints: [
				"Work involves a mix of people strategy, policy development, conflict resolution, and cross-functional collaboration",
				"HR professionals are responsible for creating positive work environments and attracting/retaining talent",
				"Modern HR professionals are strategic business partners who help build competitive advantage through people",
				"The COVID-19 pandemic has fundamentally changed the role of HR, elevating its importance",
				"The HR landscape in India has evolved with organizations recognizing the strategic importance of human capital",
			],
		},
		coreFocusAreas: [
			"Talent Acquisition - recruiting, selecting, and onboarding employees",
			"Learning and Development - training, skill development, and career progression",
			"Employee Relations - engagement, grievance handling, and workplace culture",
			"Compensation and Benefits - designing competitive reward systems",
			"HR Analytics - using data to inform people decisions",
			"Organizational Development - change management, culture transformation, leadership development",
			"Performance Management - goal setting, feedback, and evaluation",
			"Diversity and Inclusion - promoting equitable workplaces",
		],
		bestSuitedFor: [
			"Empathetic individuals with strong interpersonal skills and emotional intelligence",
			"Strategic thinkers who understand business and people dynamics",
			"Problem solvers who can handle sensitive situations with discretion",
			"Those passionate about organizational culture and employee wellbeing",
		],
		salary: {
			entryLevel: {
				tier2_3: "Rs. 4,50,000 - Rs. 7,00,000 per annum",
				topCampuses:
					"Rs. 17,00,000 - Rs. 30,00,000 per annum (XLRI particularly renowned)",
			},
			midLevel:
				"Rs. 10,00,000 - Rs. 18,00,000 per annum (3-5 years experience)",
			seniorLevel:
				"Rs. 30,00,000+ per annum for senior HR managers and directors",
			executiveLevel:
				"CHRO positions at large organizations earn significantly more",
		},
		industries: [
			"IT and Technology Services",
			"Consulting and Professional Services",
			"Banking and Financial Services",
			"FMCG and Manufacturing",
			"Pharmaceuticals and Healthcare",
			"E-commerce and Startups",
			"Retail",
			"Telecommunications",
		],
		recruiters: [
			"Tata Consultancy Services (TCS)",
			"Infosys",
			"Wipro",
			"Accenture",
			"Deloitte",
			"Amazon",
			"HDFC Bank",
			"ICICI Bank",
			"HUL",
			"P&G",
			"ITC",
			"Google",
			"Microsoft",
			"Reliance Industries",
		],
		marketOutlook: {
			futureRelevance:
				"HIGH - People management remains critical despite automation",
			automationRisk:
				"LOW - HR requires human judgment, empathy, and relationship building",
			demandTrend:
				"GROWING - Focus on employee experience and talent retention drives demand",
		},
		workNature: {
			creativity:
				"Medium - requiring innovative approaches to engagement and culture building",
			analyticalThinking:
				"Medium - HR analytics and data-driven decision making are growing",
			peopleInteraction:
				"HIGH - constant engagement with employees at all levels",
			stressLevel:
				"Medium - handling conflicts and sensitive situations can be challenging",
			travelFrequency: "Low to Medium - depending on organizational structure",
			workHours: "45-55 hours/week with flexibility in many organizations",
		},
		typicalWorkStyle:
			"Talent acquisition, employee engagement initiatives, performance management, and policy development. Work combines operational tasks with strategic projects.",
		typicalResponsibilities: [
			"Managing end-to-end recruitment and onboarding processes",
			"Designing and implementing employee engagement programs",
			"Overseeing performance management and talent development initiatives",
			"Handling employee relations and conflict resolution",
			"Developing compensation and benefits strategies",
			"Ensuring compliance with labor laws and regulations",
			"Driving diversity, equity, and inclusion initiatives",
			"Managing organizational change and transformation",
		],
		careerProgression: {
			entry: "HR Executive or Trainee",
			mid: "HR Generalist or Specialist",
			senior: "HR Manager or Business Partner",
			director: "Senior HR Manager or Head of Function",
			executive: "Chief Human Resources Officer (CHRO)",
		},
		topInstitutes: [
			"XLRI Jamshedpur",
			"TISS Mumbai",
			"IIM Ranchi",
			"SCMHRD Pune",
			"MDI Gurgaon",
			"IIM Indore",
		],
		certifications: [
			"SHRM-CP/SCP",
			"PHR/SPHR",
			"CIPD Certifications",
			"HR Analytics Certifications",
			"Talent Management Certifications",
		],
		industryTrends: [
			"HR function evolved from administrative to strategic",
			"Proficiency in HR technology (HRIS), people analytics, and digital tools increasingly important",
			"COVID-19 pandemic elevated importance of HR in managing remote work and employee wellbeing",
			"Focus on employee experience, mental health, and work-life balance central to HR strategy",
		],
		challenges: [
			"Managing a diverse workforce with varying expectations and needs",
			"Balancing employee advocacy with business requirements",
			"Keeping up with changing labor laws and regulations",
		],
		opportunities: [
			"Growing recognition of HR as a strategic function creates opportunities to influence organizational direction",
			"Focus on diversity and inclusion creating new specialized roles",
			"Technology transforming HR with AI-powered recruitment and people analytics tools",
		],
	},
	{
		id: "operations",
		name: "MBA in Operations",
		shortName: "Operations",
		overview: {
			description:
				"MBA in Operations focuses on supply chain management, process optimization, logistics, and operational excellence. Professionals in this field work on understanding, managing, and improving the systems and processes that deliver products and services to customers.",
			focusStatement:
				"Operations is the engine that powers business execution.",
			keyPoints: [
				"Work involves a mix of process design, quality management, supply chain coordination, and cross-functional collaboration",
				"Operations professionals ensure that organizations deliver value efficiently and effectively",
				"Operations management has gained significant importance with globalization and e-commerce growth",
				"The field continues to evolve with adoption of Industry 4.0 technologies including IoT, robotics, and AI",
				"India's manufacturing sector is growing rapidly with initiatives like Make in India",
			],
		},
		coreFocusAreas: [
			"Supply Chain Management - planning and coordinating flow of materials and information",
			"Process Optimization - improving efficiency and reducing waste in business processes",
			"Quality Management - ensuring products and services meet customer expectations",
			"Logistics and Distribution - managing movement and storage of goods",
			"Project Management - planning and executing operational initiatives",
			"Inventory Management - optimizing stock levels to balance service and cost",
			"Procurement - managing supplier relationships and sourcing",
			"Operations Analytics - using data to drive operational decisions",
		],
		bestSuitedFor: [
			"Process-oriented individuals with analytical mindset",
			"Problem solvers who enjoy optimization challenges",
			"Detail-focused professionals with systems thinking",
			"Those interested in manufacturing, logistics, and supply chain",
		],
		salary: {
			entryLevel: {
				tier2_3: "Rs. 6,00,000 - Rs. 10,00,000 per annum",
				topCampuses:
					"Rs. 20,00,000 - Rs. 35,00,000 per annum (IIM Mumbai particularly renowned)",
			},
			midLevel:
				"Rs. 12,00,000 - Rs. 22,00,000 per annum (3-5 years experience)",
			seniorLevel:
				"Rs. 35,00,000+ per annum for senior operations managers and supply chain directors",
			executiveLevel:
				"COO positions at large organizations earn significantly more",
		},
		industries: [
			"Manufacturing and Automotive",
			"E-commerce and Retail",
			"Consulting and Supply Chain Services",
			"IT and Technology",
			"FMCG and Consumer Goods",
			"Logistics and Transportation",
			"Pharmaceuticals",
			"Energy and Utilities",
		],
		recruiters: [
			"Amazon",
			"Flipkart",
			"Reliance Industries",
			"Tata Motors",
			"Accenture",
			"Deloitte",
			"FedEx",
			"DHL",
			"TCS",
			"Infosys",
			"Wipro",
			"HUL",
			"P&G",
			"Maruti Suzuki",
		],
		marketOutlook: {
			futureRelevance:
				"HIGH - Operations efficiency is critical for competitive advantage",
			automationRisk:
				"MEDIUM - Technology augments but doesn't replace operations expertise",
			demandTrend:
				"GROWING - E-commerce boom and supply chain complexity drive demand",
		},
		workNature: {
			creativity:
				"Medium - requiring innovative solutions to process challenges",
			analyticalThinking:
				"HIGH - heavy emphasis on data analysis and optimization",
			peopleInteraction:
				"Medium - coordination with multiple internal and external stakeholders",
			stressLevel:
				"Medium to HIGH - meeting delivery deadlines and managing disruptions",
			travelFrequency:
				"Medium - site visits, supplier meetings, and logistics coordination",
			workHours: "50-60 hours/week depending on industry and role",
		},
		typicalWorkStyle:
			"Process mapping, supply chain optimization, inventory management, and quality assurance. Daily work involves collaboration with procurement, manufacturing, and logistics teams. Work is operational with continuous improvement cycles.",
		typicalResponsibilities: [
			"Designing and optimizing business processes and workflows",
			"Managing supply chain and logistics operations",
			"Overseeing inventory planning and demand forecasting",
			"Implementing quality management systems",
			"Coordinating with suppliers and vendors",
			"Driving continuous improvement initiatives",
			"Managing operational budgets and cost reduction",
			"Ensuring operational compliance and safety",
		],
		careerProgression: {
			entry: "Operations Executive or Analyst",
			mid: "Operations Manager",
			senior: "Senior Operations Manager",
			director: "Head of Operations or Plant Manager",
			executive: "Chief Operating Officer (COO)",
		},
		topInstitutes: [
			"IIM Mumbai (NITIE)",
			"IIM Calcutta",
			"IIM Bangalore",
			"IIT Delhi (DMS)",
			"SPJIMR Mumbai",
			"MDI Gurgaon",
		],
		certifications: [
			"APICS Certifications",
			"Six Sigma Green/Black Belt",
			"PMP (Project Management Professional)",
			"CSCP (Certified Supply Chain Professional)",
			"CPIM (Certified in Production and Inventory Management)",
		],
		industryTrends: [
			"Field gained significant importance with rise of e-commerce and global supply chains",
			"Expertise in supply chain analytics, lean manufacturing, Six Sigma, and digital operations in high demand",
			"COVID-19 pandemic highlighted critical importance of resilient supply chains",
			"Industry 4.0 technologies transforming operations with IoT, robotics, and AI",
		],
		challenges: [
			"Managing complex global supply chains with multiple stakeholders",
			"Balancing cost efficiency with service quality",
			"Responding to supply chain disruptions requires agility and quick decision-making",
		],
		opportunities: [
			"Growth of e-commerce creating tremendous opportunities in logistics and fulfillment",
			"Industry 4.0 technologies enabling new levels of efficiency and visibility",
			"Operations professionals who demonstrate results in efficiency improvement highly valued",
		],
	},
	{
		id: "systems",
		name: "MBA in Information Systems",
		shortName: "systems",
		overview: {
			description:
				"MBA in Information Systems focuses on technology management, digital transformation, business analytics, and IT strategy. Professionals in this field work on understanding, managing, and improving the technology infrastructure and digital capabilities of organizations.",
			focusStatement:
				"In today's digital economy, technology leadership is business leadership.",
			keyPoints: [
				"Work involves a mix of technology strategy, project management, data analytics, and cross-functional collaboration",
				"Systems professionals bridge the gap between business needs and technology solutions",
				"The Information Systems field is experiencing unprecedented growth driven by digital transformation",
				"The rapid pace of technological change creates both opportunities and challenges",
				"India's IT industry continues to be a major employer with growing demand for tech professionals",
			],
		},
		coreFocusAreas: [
			"IT Strategy and Governance - aligning technology investments with business objectives",
			"Business Analytics - using data to drive decision-making and business insights",
			"Project Management - planning and executing technology initiatives",
			"Digital Transformation - helping organizations leverage technology for competitive advantage",
			"Information Security - ensuring protection of digital assets and compliance",
			"Enterprise Systems Management - ERP, CRM, and other business systems",
			"Data Management - data governance, quality, and analytics",
			"Cloud Computing and Infrastructure Management",
		],
		bestSuitedFor: [
			"Tech-savvy professionals with business acumen",
			"Analytical thinkers who enjoy working with data",
			"Problem solvers who can translate business needs to tech solutions",
			"Those interested in digital transformation and innovation",
		],
		salary: {
			entryLevel: {
				tier2_3: "Rs. 6,50,000 - Rs. 11,00,000 per annum",
				topCampuses:
					"Rs. 20,00,000 - Rs. 35,00,000 per annum (product management and data science roles higher)",
			},
			midLevel:
				"Rs. 15,00,000 - Rs. 28,00,000 per annum (3-5 years experience)",
			seniorLevel:
				"Rs. 40,00,000+ per annum for senior IT managers and analytics leaders",
			executiveLevel: "CIO/CTO positions can earn significantly more",
		},
		industries: [
			"IT Services and Consulting",
			"Technology and Product Companies",
			"Banking and Financial Services",
			"E-commerce and Digital Platforms",
			"Healthcare and Pharmaceuticals",
			"Consulting and Advisory",
			"Retail",
			"Manufacturing",
		],
		recruiters: [
			"TCS",
			"Infosys",
			"Wipro",
			"HCL",
			"Accenture",
			"Deloitte",
			"KPMG",
			"Google",
			"Amazon",
			"Microsoft",
			"Flipkart",
			"Swiggy",
			"Zomato",
			"IBM",
			"Capgemini",
			"Cognizant",
			"PhonePe",
			"Paytm",
			"Razorpay",
			"Salesforce",
			"Oracle",
			"SAP",
			"Tata Digital",
			"Reliance Jio",
		],
		marketOutlook: {
			futureRelevance:
				"HIGH - Digital transformation is a top priority for all organizations",
			automationRisk:
				"LOW - Technology professionals drive automation, not replaced by it",
			demandTrend:
				"GROWING - AI, cloud, and data analytics drive exponential demand",
		},
		workNature: {
			creativity:
				"Medium - requiring innovative approaches to technology solutions",
			analyticalThinking:
				"HIGH - heavy emphasis on data analysis and system design",
			peopleInteraction:
				"Medium - collaboration with technical and business teams",
			stressLevel:
				"Medium to HIGH - project deadlines and system criticality create pressure",
			travelFrequency:
				"Low to Medium - depending on client and project requirements",
			workHours: "45-60 hours/week with flexibility in many tech organizations",
		},
		typicalWorkStyle:
			"IT project management, business analysis, data analytics, and technology strategy development. Daily work involves collaboration with development teams, business stakeholders, and vendors. Work is project-based with agile methodologies.",
		typicalResponsibilities: [
			"Managing IT projects and digital transformation initiatives",
			"Analyzing business requirements and designing technology solutions",
			"Overseeing data analytics and business intelligence functions",
			"Managing vendor relationships and technology procurement",
			"Ensuring information security and compliance",
			"Driving innovation and emerging technology adoption",
			"Developing IT strategy and roadmap",
			"Managing IT budgets and resource allocation",
		],
		careerProgression: {
			entry: "Business Analyst or IT Consultant",
			mid: "Senior Business Analyst or Project Manager",
			senior: "IT Manager or Program Manager",
			director: "Senior IT Manager or Head of Function",
			executive:
				"Chief Information Officer (CIO) or Chief Technology Officer (CTO)",
		},
		topInstitutes: [
			"IIM Bangalore",
			"IIM Calcutta",
			"ISB Hyderabad",
			"IIT Bombay (SJMSOM)",
			"IIT Delhi (DMS)",
			"NMIMS Mumbai",
		],
		certifications: [
			"AWS/Azure/GCP Certifications",
			"PMP (Project Management Professional)",
			"Agile/Scrum Certifications",
			"Data Analytics Certifications",
			"ITIL Certifications",
		],
		industryTrends: [
			"Field experiencing unprecedented growth driven by digital transformation and AI adoption",
			"Professionals with skills in cloud computing, data analytics, AI/ML, cybersecurity highly valued",
			"Convergence of business and technology creates opportunities for professionals who can bridge both worlds",
			"Cloud computing, data analytics, and AI transforming how organizations operate",
		],
		challenges: [
			"Keeping up with rapidly evolving technologies and platforms",
			"Managing legacy systems while implementing new technologies",
			"Ensuring information security in an increasingly connected world",
		],
		opportunities: [
			"Digital transformation wave has created tremendous opportunities",
			"AI and machine learning opening new possibilities for automation and insights",
			"Excellent career prospects for those who combine technical skills with business understanding",
		],
	},
	{
		id: "sales",
		name: "MBA in Sales",
		shortName: "Sales",
		overview: {
			description:
				"MBA in Sales focuses on business development, sales strategy, relationship management, and revenue generation. Professionals in this field work on understanding, managing, and improving the sales performance and customer acquisition efforts of organizations.",
			focusStatement:
				"Sales is the lifeblood of business, directly driving revenue and growth.",
			keyPoints: [
				"Work involves a mix of strategic planning, relationship building, negotiation, and cross-functional collaboration",
				"Sales professionals are directly responsible for driving revenue and business growth",
				"Sales has evolved from a transactional function to a strategic discipline focused on customer success",
				"The rise of digital selling, CRM, and sales analytics has transformed the profession",
				"India's growing economy and expanding markets create significant opportunities for sales professionals",
			],
		},
		coreFocusAreas: [
			"Business Development - identifying and pursuing new business opportunities",
			"Account Management - maintaining and growing relationships with existing customers",
			"Sales Operations - managing processes and tools that support sales effectiveness",
			"Channel Management - working with partners and distributors",
			"Sales Strategy - planning and executing go-to-market approaches",
			"Sales Enablement - providing tools and resources to help sales teams succeed",
			"Territory Management - optimizing coverage and resource allocation",
			"Key Account Management - focusing on strategic customer relationships",
		],
		bestSuitedFor: [
			"Outgoing individuals with strong communication skills",
			"Results-driven professionals who thrive on targets",
			"Relationship builders with persuasive abilities",
			"Those who enjoy competition and measurable outcomes",
		],
		salary: {
			entryLevel: {
				tier2_3: "Rs. 5,00,000 - Rs. 8,50,000 per annum (base + variable)",
				topCampuses:
					"Rs. 15,00,000 - Rs. 28,00,000 per annum (high performers can exceed significantly)",
			},
			midLevel:
				"Rs. 12,00,000 - Rs. 25,00,000 per annum (3-5 years experience)",
			seniorLevel:
				"Rs. 40,00,000+ per annum for senior sales managers and directors",
			executiveLevel:
				"Significant variable components can substantially increase total compensation",
		},
		industries: [
			"FMCG and Consumer Goods",
			"Banking and Financial Services",
			"IT and Technology",
			"Pharmaceuticals and Healthcare",
			"E-commerce and Retail",
			"Automotive and Industrial Products",
			"Real Estate",
			"Telecommunications",
		],
		recruiters: [
			"HUL",
			"P&G",
			"ITC",
			"Nestle",
			"HDFC Bank",
			"ICICI Bank",
			"Axis Bank",
			"TCS",
			"Infosys",
			"Wipro",
			"Maruti Suzuki",
			"Hyundai",
			"Tata Motors",
			"Amazon",
			"Flipkart",
			"Sun Pharma",
			"Cipla",
			"Dr. Reddy's",
			"BYJU's",
			"Unacademy",
			"Uber",
			"Ola",
		],
		marketOutlook: {
			futureRelevance: "HIGH - Sales remains the engine of business growth",
			automationRisk:
				"LOW - While tools assist, relationships and closing require humans",
			demandTrend:
				"GROWING - Economic expansion and new market creation drive demand",
		},
		workNature: {
			creativity:
				"Medium - requiring innovative approaches to customer engagement",
			analyticalThinking:
				"Medium - data-driven sales planning and forecasting are important",
			peopleInteraction:
				"HIGH - constant engagement with customers and stakeholders",
			stressLevel:
				"HIGH - revenue targets and performance pressure create stress",
			travelFrequency:
				"HIGH - client meetings, market visits, and territory coverage",
			workHours: "50-70 hours/week with irregular schedules",
		},
		typicalWorkStyle:
			"Prospecting, client meetings, proposal development, and deal closure. Daily work involves collaboration with marketing, product teams, and operations. Work is target-driven with monthly and quarterly cycles.",
		typicalResponsibilities: [
			"Identifying and qualifying sales opportunities",
			"Building and maintaining client relationships",
			"Developing sales proposals and negotiating contracts",
			"Achieving revenue targets and sales quotas",
			"Managing key accounts and strategic partnerships",
			"Providing market feedback to product and marketing teams",
			"Forecasting sales and managing pipeline",
			"Representing the company at industry events",
		],
		careerProgression: {
			entry: "Sales Executive or Management Trainee",
			mid: "Territory Sales Manager",
			senior: "Regional Sales Manager",
			director: "National Sales Manager",
			executive: "Chief Sales Officer or Chief Revenue Officer (CRO)",
		},
		topInstitutes: [
			"IIMs",
			"XLRI Jamshedpur",
			"FMS Delhi",
			"JBIMS Mumbai",
			"SPJIMR Mumbai",
			"Symbiosis Institutes",
		],
		certifications: [
			"SPIN Selling Certification",
			"Challenger Sale Certification",
			"Salesforce Certifications",
			"HubSpot Sales Certifications",
			"SPHR Certifications",
		],
		industryTrends: [
			"High-reward field where performance directly correlates with compensation",
			"Profession offers rapid career growth for high performers",
			"Modern sales requires proficiency in CRM tools, sales analytics, and digital selling techniques",
			"Rise of inside sales and digital selling changing how sales is conducted",
		],
		challenges: [
			"Dealing with rejection and maintaining motivation in a target-driven environment",
			"Keeping up with changing customer expectations and buying behaviors",
			"Balancing short-term targets with long-term relationship building",
		],
		opportunities: [
			"High performers can earn significantly more than their base salary",
			"Profession offers rapid career progression for those who demonstrate results",
			"Sales professionals who provide consultative solutions are most successful",
		],
	},
];

// Helper functions for accessing data

export const getSpecializationById = (
	id: string
): Specialization | undefined => {
	return mbaSpecializations.find((spec) => spec.id === id);
};

export const getSpecializationByName = (
	name: string
): Specialization | undefined => {
	return mbaSpecializations.find(
		(spec) =>
			spec.name.toLowerCase() === name.toLowerCase() ||
			spec.shortName.toLowerCase() === name.toLowerCase()
	);
};

export const getAllSpecializationNames = (): string[] => {
	return mbaSpecializations.map((spec) => spec.name);
};

export const getAllShortNames = (): string[] => {
	return mbaSpecializations.map((spec) => spec.shortName);
};

export const getAllIds = (): string[] => {
	return mbaSpecializations.map((spec) => spec.id);
};

export const getRecruitersBySpecialization = (id: string): string[] => {
	const spec = getSpecializationById(id);
	return spec ? spec.recruiters : [];
};

export const getIndustriesBySpecialization = (id: string): string[] => {
	const spec = getSpecializationById(id);
	return spec ? spec.industries : [];
};

export const getTopInstitutesBySpecialization = (id: string): string[] => {
	const spec = getSpecializationById(id);
	return spec ? spec.topInstitutes : [];
};

export const getCertificationsBySpecialization = (id: string): string[] => {
	const spec = getSpecializationById(id);
	return spec ? spec.certifications : [];
};

export const getSalaryRangeBySpecialization = (
	id: string,
	level: "entry" | "mid" | "senior" | "executive" = "entry"
) => {
	const spec = getSpecializationById(id);
	if (!spec) return null;

	switch (level) {
		case "entry":
			return spec.salary.entryLevel;
		case "mid":
			return spec.salary.midLevel;
		case "senior":
			return spec.salary.seniorLevel;
		case "executive":
			return spec.salary.executiveLevel;
		default:
			return spec.salary.entryLevel;
	}
};

export default mbaSpecializations;
