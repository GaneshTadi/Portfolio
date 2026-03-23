export const projects = [  
  {  
    id: 1,  
    title: 'Full-Stack Website Development',  
    description: 'Developed a dynamic website with CMS functionality, dynamic filters, and pagination. Implemented SEO best practices.',  
    longDescription: 'This full-stack website development project involved creating a comprehensive digital presence for Nexivo with advanced content management capabilities. The website was designed to be fully responsive, with a focus on user experience and SEO optimization. The CMS implementation allows non-technical staff to easily update content, while dynamic filters and pagination improve content discovery for users.',  
    category: 'web',  
    image: '/images/projects/logos/Website.png',  
    demoUrl: 'www.nexivo.co',  
    codeUrl: 'www.nexivo.co',  
    technologies: ['Webflow', 'JavaScript', 'CMS', 'SEO', 'Figma', 'Canva'],  
    features: [  
      'Custom CMS with user-friendly interface for content management',  
      'Dynamic filtering system for improved content discovery',  
      'Pagination for handling large content volumes efficiently',  
      'Advanced SEO implementation with structured data markup',  
      'Responsive design optimized for all device sizes',  
      'Performance optimization with 90+ PageSpeed score'  
    ],  
    challenges: 'A major challenge was implementing the dynamic filtering system that could handle multiple filter combinations without performance degradation. I solved this by creating an efficient JavaScript filtering algorithm and implementing client-side caching to reduce server load.',  
    role: 'Full-stack Developer responsible for all aspects from design implementation to deployment and optimization.'  
  },  
  {  
    id: 2,  
    title: 'Zolancer Application',  
    description: 'A freelancing platform built with Bubble.io\'s responsive features and JavaScript integrations.',  
    longDescription: 'Zolancer is a comprehensive freelancing platform that connects freelancers with clients seeking various professional services. Built using Bubble.io and enhanced with custom JavaScript integrations, the platform offers a responsive and intuitive interface for both service providers and clients. The application includes robust user authentication, profile management, project posting and bidding, messaging, and secure payment processing.',  
    category: 'fullstack',  
    image: '/images/projects/logos/zoolancer.png',  
    demoUrl: 'http://zolancer-28590.bubbleapps.io/version-test/signup_login?debug_mode=true&v=signup',  
    codeUrl: 'http://zolancer-28590.bubbleapps.io/version-test/signup_login?debug_mode=true&v=signup',  
    technologies: ['Bubble.io', 'JavaScript', 'API Integration', 'Responsive Design', 'Payment Gateway Integration'],  
    features: [  
      'User authentication and role-based access control',  
      'Dynamic profile creation for freelancers with portfolio showcase',  
      'Advanced project posting with detailed requirements specification',  
      'Bidding system with proposal submission functionality',  
      'Real-time messaging between clients and freelancers',  
      'Secure payment processing with multiple gateway options',  
      'Rating and review system for quality assurance'  
    ],  
    challenges: 'Integrating multiple payment gateways while ensuring consistent user experience across different payment flows was particularly challenging. I implemented a unified payment interface layer that standardized the interaction regardless of the chosen payment method.',  
    role: 'Lead Developer responsible for application architecture, Bubble.io workflow design, and custom JavaScript implementations.'  
  },  
  {  
    id: 3,  
    title: 'Zoom Backup Application',  
    description: 'App that automates the backup of Zoom recordings to Zoho WorkDrive with authentication and folder management.',  
    longDescription: 'The Zoom Backup Application solves a critical business need by automatically backing up Zoom cloud recordings to Zoho WorkDrive. This ensures that important meeting content is safely archived and easily accessible. The application handles OAuth authentication with both Zoom and Zoho platforms, manages folder hierarchies based on organizational structure, and provides detailed logs and notifications about backup status.',  
    category: 'fullstack',  
    image: '/images/projects/logos/Zoom Backup 3.png',  
    demoUrl: 'https://zoombackup.cloud',  
    codeUrl: 'https://zoombackup.cloud',  
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'Express.js', 'Firebase', 'Zoho Catalyst', 'OAuth 2.0'],  
    features: [  
      'Secure OAuth 2.0 authentication with Zoom and Zoho WorkDrive',  
      'Automated backup scheduling with configurable intervals',  
      'Intelligent folder organization based on meeting metadata',  
      'Email notifications for backup success or failure',  
      'Detailed activity logs for audit purposes',  
      'Admin dashboard with backup statistics and configuration options',  
      'Multi-tenant architecture supporting multiple organizations'  
    ],  
    challenges: 'Managing OAuth token refreshes and handling API rate limits were significant challenges. I implemented a token manager service that handles refresh cycles and implements exponential backoff for API calls to ensure reliable operation even under heavy load.',  
    role: 'Full-stack Developer responsible for architecture design, API integrations, and deployment on Zoho Catalyst platform.'  
  },  
  {  
    id: 4,  
    title: 'Email Validation - Zoho CRM',  
    description: 'Extension for Zoho CRM that provides precise email validation and seamless integration.',  
    longDescription: 'This Zoho CRM extension enhances data quality by providing real-time email validation directly within the CRM interface. Using advanced validation algorithms, it verifies email syntax, domain existence, and mail server availability to ensure that only valid email addresses are stored in the CRM. The extension integrates seamlessly with Zoho CRM\'s UI and workflows, providing instant feedback to users.',  
    category: 'zoho',  
    image: '/images/projects/logos/Email Validation.jpg',  
    demoUrl: 'https://example.com/email-validation',  
    codeUrl: 'https://github.com/ganeshtadi/email-validation',  
    technologies: ['JavaScript', 'Node.js', 'Deluge', 'Bootstrap', 'Zoho CRM API', 'Email Validation APIs'],  
    features: [  
      'Real-time email syntax validation using regex patterns',  
      'Domain existence verification via DNS lookup',  
      'Mail server validation through SMTP connection testing',  
      'Disposable email domain detection and flagging',  
      'Batch validation for existing CRM records',  
      'Detailed validation reports with error categorization',  
      'Configuration panel for customizing validation rules'  
    ],  
    challenges: 'Integrating with Zoho CRM\'s UI without affecting performance was challenging. I developed a lightweight validation module that runs asynchronously and caches results to minimize API calls and ensure a smooth user experience.',  
    role: 'Lead Developer for the extension, including UI design, validation logic, and Zoho Marketplace deployment.'  
  },  
  {  
    id: 5,  
    title: 'Aadhar Verifier - Zoho Recruit',  
    description: 'Extension that simplifies candidate verification in Zoho Recruit using Aadhaar verification.',  
    longDescription: 'The Aadhar Verifier extension for Zoho Recruit streamlines the candidate verification process by integrating Aadhaar verification directly into the recruitment workflow. It allows recruiters to verify candidates\' identities securely and efficiently without leaving the Zoho Recruit interface. The extension handles secure API communication with the Aadhaar verification service while maintaining compliance with privacy regulations.',  
    category: 'zoho',  
    image: '/images/projects/logos/Aadhar verifier.jpg',  
    demoUrl: 'https://example.com/aadhar-verifier',  
    codeUrl: 'https://github.com/ganeshtadi/aadhar-verifier',  
    technologies: ['JavaScript', 'Node.js', 'Deluge', 'Bootstrap', 'Zoho Recruit API', 'Aadhaar Verification API'],  
    features: [  
      'One-click Aadhaar verification within Zoho Recruit',  
      'Secure handling of Aadhaar data with encryption',  
      'Automatic candidate record update with verification status',  
      'Verification history tracking for compliance purposes',  
      'Customizable verification workflow based on job roles',  
      'Photo matching option for enhanced verification',  
      'Detailed verification reports with timestamp and status'  
    ],  
    challenges: 'Ensuring data privacy and security while handling sensitive Aadhaar information was paramount. I implemented end-to-end encryption and secure API communication channels, ensuring that no sensitive data was stored unnecessarily and all transmissions were encrypted.',  
    role: 'Full-stack Developer responsible for integration architecture, security implementation, and Zoho Recruit UI customization.'  
  },  
  {  
    id: 6,  
    title: 'PAN Verifier - Zoho CRM & Recruit',  
    description: 'Tool that ensures precise identification by validating PAN details, eliminating fraudulent identities.',  
    longDescription: 'The PAN Verifier extension works across both Zoho CRM and Zoho Recruit platforms to validate Permanent Account Number (PAN) details of leads, contacts, and candidates. This tool helps organizations maintain data accuracy and comply with KYC requirements by verifying the authenticity of PAN information. It seamlessly integrates with both platforms, providing a consistent verification experience.',  
    category: 'zoho',  
    image: '/images/projects/logos/_PAN verifier.jpg',  
    demoUrl: 'https://example.com/pan-verifier',  
    codeUrl: 'https://github.com/ganeshtadi/pan-verifier',  
    technologies: ['JavaScript', 'Node.js', 'Deluge', 'Bootstrap', 'Zoho CRM API', 'Zoho Recruit API', 'PAN Verification API'],  
    features: [  
      'Real-time PAN validation with official verification API',  
      'Name matching between PAN data and CRM/Recruit records',  
      'Automatic flagging of discrepancies for review',  
      'Bulk verification capability for multiple records',  
      'Verification status tracking with timestamp and source',  
      'Cross-platform support for both CRM and Recruit',  
      'Detailed verification logs for audit purposes'  
    ],  
    challenges: 'Creating a unified experience across two different Zoho platforms (CRM and Recruit) required careful planning. I developed a modular architecture with shared core components and platform-specific adapters to maintain consistency while accommodating the unique aspects of each platform.',  
    role: 'Lead Developer responsible for cross-platform integration, verification logic, and compliance implementation.'  
  },
  {  
    "id": 7,  
    "title": "Business PAN Verifier - Zoho CRM",  
    "description": "Tool that validates Business PAN details effortlessly in Zoho CRM, ensuring accurate identification.",  
    "longDescription": "Business PAN Verifier is a specialized extension for Zoho CRM that validates Business Permanent Account Number (PAN) details of companies and corporate contacts. This tool helps organizations maintain data accuracy, comply with KYC requirements, and prevent association with fraudulent entities by verifying the authenticity of Business PAN information. It provides a seamless verification experience within the Zoho CRM interface.",  
    "category": "zoho",  
    "image": "images/projects/logos/Business PAN verifier.jpg",  
    "demoUrl": "https://example.com/business-pan-verifier",  
    "codeUrl": "https://github.com/ganeshtadi/business-pan-verifier",  
    "technologies": ["JavaScript", "Node.js", "Deluge", "Bootstrap", "Zoho CRM API", "Business PAN Verification API"],  
    "features": [  
      "Real-time Business PAN validation with official government API",  
      "Company name and entity type verification against PAN data",  
      "Automatic detection of mismatches between registered and provided information",  
      "Bulk verification capability for multiple business records",  
      "Verification status tracking with timestamp and audit trail",  
      "Dashboard for monitoring verification statistics",  
      "Integration with lead qualification workflow"  
    ],  
    "challenges": "Accessing and integrating with the Business PAN verification services required handling complex authentication flows and managing rate limits. I implemented an efficient caching mechanism to reduce API calls and built a robust error handling system to manage unexpected verification service disruptions without affecting the CRM functionality.",  
    "role": "Lead Developer responsible for API integration, verification logic implementation, and creating a user-friendly interface within Zoho CRM."  
},  
{  
    "id": 8,  
    "title": "Zoho CRM Sync for Microsoft OneDrive",  
    "description": "Seamless integration between Zoho CRM and Microsoft OneDrive for comprehensive file management and CRUD operations.",  
    "longDescription": "The Zoho CRM Sync for Microsoft OneDrive extension creates a bidirectional integration between Zoho CRM and Microsoft's cloud storage platform. This solution allows organizations to manage documents and files associated with CRM records directly within their OneDrive environment. Users can create, read, update, and delete files from either system with automatic synchronization, ensuring data consistency while leveraging the strengths of both platforms.",  
    "category": "zoho",  
    "image": "/images/projects/logos/Zoho to onedrive .jpg",  
    "demoUrl": "https://example.com/crm-onedrive-sync",  
    "codeUrl": "https://github.com/ganeshtadi/crm-onedrive-sync",  
    "technologies": ["JavaScript", "Node.js", "Deluge", "Bootstrap", "Zoho CRM API", "Microsoft Graph API", "OAuth 2.0"],  
    "features": [  
      "Bidirectional file synchronization between CRM and OneDrive",  
      "Automatic file categorization based on CRM record type",  
      "Version control and document history tracking",  
      "Secure OAuth authentication with both platforms",  
      "Selective synchronization options for different CRM modules",  
      "File preview directly within CRM interface",  
      "Advanced file search capabilities across both systems"  
    ],  
    "challenges": "The main challenge was designing a conflict resolution system that could intelligently handle when the same file was modified in both systems. I implemented a timestamp-based approach with optional user intervention for complex conflicts, ensuring data integrity while maintaining a smooth user experience.",  
    "role": "Full Stack Developer responsible for Microsoft Graph API integration, synchronization logic, and implementing secure OAuth authentication flows."  
},  
{  
    "id": 9,  
    "title": "Zoho CRM Sync for Zoho WorkDrive",  
    "description": "Powerful integration connecting Zoho CRM with WorkDrive for seamless file management and CRUD operations.",  
    "longDescription": "Zoho CRM Sync for Zoho WorkDrive creates a native integration between two core Zoho platforms, allowing for seamless document management within the Zoho ecosystem. The extension enables organizations to associate CRM records with relevant documents in WorkDrive, maintaining a centralized document repository that follows the CRM data structure. Users can perform all file operations directly from the CRM interface while leveraging WorkDrive's collaborative features.",  
    "category": "zoho",  
    "image": "/images/projects/logos/Zoho crm to zoho workdrive .jpg",  
    "demoUrl": "https://example.com/crm-workdrive-sync",  
    "codeUrl": "https://github.com/ganeshtadi/crm-workdrive-sync",  
    "technologies": ["JavaScript", "Node.js", "Deluge", "Bootstrap", "Zoho CRM API", "Zoho WorkDrive API"],  
    "features": [  
      "Automated folder structure creation based on CRM hierarchy",  
      "Document templates with dynamic CRM data population",  
      "Real-time document collaboration linked to CRM records",  
      "Advanced permission management synchronized with CRM roles",  
      "Automated document generation for proposals and contracts",  
      "Activity tracking for document interactions",  
      "Bulk document processing for multiple CRM records"  
    ],  
    "challenges": "Designing an optimal folder structure that would work efficiently for different types of organizations was complex. I developed a customizable template system that allowed businesses to define their own hierarchical structure while maintaining the core integration functionality.",  
    "role": "Integration Specialist responsible for architecting the connection between the two Zoho platforms and implementing advanced document automation workflows."  
},  
{  
    "id": 10,  
    "title": "Address Finder in Zoho CRM",  
    "description": "Smart tool that finds company addresses in Zoho CRM using just the company name through D&B API integration.",  
    "longDescription": "The Address Finder extension for Zoho CRM leverages the Dun & Bradstreet API to automatically retrieve and populate company address information based solely on the company name. This tool eliminates the need for manual address entry, reduces data errors, and provides verified company location data directly within the CRM. Users can confirm and select from multiple potential matches when a company name has several possible results.",  
    "category": "zoho",  
    "image": "/images/projects/logos/Address Finder.jpg",  
    "demoUrl": "https://example.com/address-finder",  
    "codeUrl": "https://github.com/ganeshtadi/address-finder",  
    "technologies": ["JavaScript", "Node.js", "Deluge", "Bulma.js", "Zoho CRM API", "D&B API"],  
    "features": [  
      "One-click company address lookup from company name",  
      "Multiple address suggestion handling for disambiguation",  
      "Address verification against official D&B records",  
      "Batch processing for multiple company records",  
      "Address format standardization across global locations",  
      "Integration with CRM mapping functionality",  
      "Address update history and change tracking"  
    ],  
    "challenges": "The D&B API returns multiple potential matches for many company names, especially for businesses with similar names or multiple locations. I developed a smart scoring algorithm that ranks potential matches based on additional CRM data points like industry, size, and region to improve first-match accuracy.",  
    "role": "API Integration Specialist responsible for D&B data integration, match scoring algorithm development, and CRM field mapping."  
},  
{  
    "id": 11,  
    "title": "Credit Score Check with D&B",  
    "description": "CRM extension that provides instant company credit score insights using D&B API and DUNS number verification.",  
    "longDescription": "The Credit Score Check extension for Zoho CRM leverages the Dun & Bradstreet API to retrieve and display company credit scores and financial health indicators directly within the CRM interface. By using a company's DUNS number, the tool provides real-time access to credit worthiness data, helping sales and finance teams make informed decisions about payment terms, credit limits, and risk assessment for prospects and customers.",  
    "category": "zoho",  
    "image": "/images/projects/logos/_Credit Score Check with D&B.jpg",  
    "demoUrl": "https://example.com/credit-score-check",  
    "codeUrl": "https://github.com/ganeshtadi/credit-score-check",  
    "technologies": ["JavaScript", "Node.js", "Deluge", "Bulma.js", "Zoho CRM API", "D&B Credit Assessment API"],  
    "features": [  
      "Real-time credit score retrieval using DUNS number",  
      "Comprehensive financial risk assessment dashboard",  
      "Historical credit score tracking and change alerts",  
      "Customizable risk threshold settings for different business units",  
      "Automated workflows based on credit score changes",  
      "PDF report generation for credit assessments",  
      "Integration with deal approval processes"  
    ],  
    "challenges": "Credit data is highly sensitive, requiring strict security measures while still making the information accessible to authorized users. I implemented a multi-level access control system and encryption protocol that protected the sensitive financial data while providing appropriate visibility based on user roles within the organization.",  
    "role": "Security-Focused Developer responsible for secure API integration, sensitive data handling, and building the financial assessment visualization components."  
},  
{  
    "id": 12,  
    "title": "Sales Trip Planner in Zoho CRM",  
    "description": "Comprehensive CRM extension that enables sales teams to plan, schedule, and optimize client meetings directly within Zoho CRM.",  
    "longDescription": "The Sales Trip Planner extension for Zoho CRM helps sales representatives and managers efficiently plan client visits by organizing meetings geographically and optimizing travel routes. The tool allows users to select contacts or leads from the CRM, visualize them on a map, and create an optimized schedule for in-person meetings. It integrates with calendar systems for appointment booking and includes tracking features for visit outcomes.",  
    "category": "zoho",  
    "image": "/images/projects/logos/_Sales Trip Planner in Zoho CRM.jpg",  
    "demoUrl": "https://example.com/sales-trip-planner",  
    "codeUrl": "https://github.com/ganeshtadi/sales-trip-planner",  
    "technologies": ["JavaScript", "Node.js", "Deluge", "Bulma.js", "Zoho CRM API", "Maps API", "Calendar API"],  
    "features": [  
      "Geographic visualization of CRM contacts and leads",  
      "Intelligent route optimization for multiple client visits",  
      "Direct meeting scheduling with calendar integration",  
      "Travel time and distance estimation between appointments",  
      "Mobile-friendly interface for on-the-road access",  
      "Meeting outcome tracking and visit report generation",  
      "Territory management and team coordination for multi-rep planning"  
    ],  
    "challenges": "Optimizing travel routes while accounting for meeting duration, importance, and time windows required a complex algorithm. I implemented a constraint-based optimization system that balanced efficiency with business priorities, allowing sales teams to maximize the value of their time while minimizing travel overhead.",  
    "role": "Lead Developer responsible for mapping integration, route optimization algorithm, and mobile-responsive design for field accessibility."  
},  
{  
    "id": 13,  
    "title": "Deal to Project Mapping - Zoho CRM",  
    "description": "Streamlined solution that converts CRM deals into project frameworks, ensuring smooth information transfer between sales and project teams.",  
    "longDescription": "The Deal to Project Mapping extension for Zoho CRM creates a seamless workflow between sales and project teams by automatically converting closed deals into project frameworks. This tool captures all relevant deal information, including requirements, pricing, timelines, and customer contacts, and transforms it into a structured project format that can be immediately actioned by delivery teams. It eliminates information gaps and reduces the manual effort typically required when transitioning from sales to implementation.",  
    "category": "zoho",  
    "image": "/images/projects/logos/Deal to Project Mapping -Zoho CRM.jpg",  
    "demoUrl": "https://example.com/deal-project-mapping",  
    "codeUrl": "https://github.com/ganeshtadi/deal-project-mapping",  
    "technologies": ["JavaScript", "Deluge", "Vue.js", "Zoho CRM API", "Zoho Projects API"],  
    "features": [  
      "Automated project creation from closed deals",  
      "Customizable mapping templates for different deal types",  
      "Intelligent task generation based on deal components",  
      "Resource allocation suggestions based on project requirements",  
      "Timeline generation from deal milestones",  
      "Budget and cost tracking linked to deal financials",  
      "Bidirectional updates between project progress and CRM"  
    ],  
    "challenges": "Different types of deals required different project structures and workflows. I developed a template system that allowed for customizable mappings based on deal characteristics, ensuring that each project created would follow the appropriate methodology for that particular type of work while maintaining core data consistency.",  
    "role": "Full Stack Developer responsible for Vue.js frontend implementation, cross-platform data mapping, and custom template system design."  
},  
{  
    "id": 14,  
    "title": "EPFO Search - Zoho Recruit",  
    "description": "Innovative recruitment tool that integrates EPFO data retrieval with Zoho Recruit to verify employment history and streamline candidate verification.",  
    "longDescription": "The EPFO Search extension for Zoho Recruit integrates with India's Employees' Provident Fund Organisation database to verify candidates' employment history directly within the recruitment platform. This tool allows recruiters to validate candidates' previous employment claims, check contribution history, and confirm employment tenure details during the hiring process. By automating this verification step, organizations can reduce hiring risks and accelerate the candidate screening process.",  
    "category": "zoho",  
    "image": "/images/projects/logos/EPFO search.jpg",  
    "demoUrl": "https://example.com/epfo-search",  
    "codeUrl": "https://github.com/ganeshtadi/epfo-search",  
    "technologies": ["JavaScript", "Deluge", "Bootstrap", "Zoho Recruit API", "EPFO Data API"],  
    "features": [  
      "Automated employment history verification through EPFO records",  
      "Side-by-side comparison of claimed vs. verified employment details",  
      "UAN-based employee contribution history retrieval",  
      "Verification report generation for compliance documentation",  
      "Bulk verification for multiple candidates",  
      "Integration with candidate scoring and assessment workflows",  
      "Alert system for employment history discrepancies"  
    ],  
    "challenges": "Accessing EPFO data requires strict compliance with privacy regulations and secure handling of personal information. I implemented a comprehensive consent management system and data anonymization process that ensured all verifications were conducted with proper authorization while protecting candidate information.",  
    "role": "Integration Specialist responsible for secure API implementation, compliance features, and developing the verification comparison algorithm."  
},
  {
  id: 15,
  title: 'Manufacturing Process Automation with Zoho One',
  description: 'Enterprise-grade manufacturing automation including HR, payroll, recruitment, support, and production workflows with advanced integrations.',
  longDescription: 'A manufacturing organization faced challenges with disconnected systems across HR, production, finance, and customer support. I designed a scalable Zoho One architecture integrating all departments with custom automation, API layers, and real-time data synchronization.',
  category: 'zoho',
  technologies: [
    'Zoho CRM', 'Zoho Inventory', 'Zoho Books', 'Zoho Creator',
    'Zoho People', 'Zoho Payroll', 'Zoho Recruit', 'Zoho Desk',
    'Zoho Campaigns', 'Zoho Assist',
    'Deluge', 'Client Script', 'JavaScript', 'Node.js', 'Zoho Catalyst', 'REST APIs'
  ],
  features: [
    'End-to-end order-to-production workflow automation using CRM + Creator',
    'Client Script-based UI enhancements for real-time validation and user experience',
    'Real-time inventory and warehouse automation using Zoho Inventory',
    'Employee lifecycle and payroll automation using Zoho People & Payroll',
    'Recruitment pipeline automation using Zoho Recruit',
    'Customer support system using Zoho Desk with SLA automation',
    'Remote diagnostics and troubleshooting using Zoho Assist',
    'Marketing automation using Zoho Campaigns',
    'Custom API layer built using Zoho Catalyst and Node.js',
    'Integration with NetSuite for financial and ERP data synchronization',
    'Automated invoicing and reporting with Zoho Books',
    'Production dashboards and analytics'
  ],
  challenges: 'Synchronizing real-time production, HR, and financial data across multiple systems.',
  solution: 'Built middleware using Node.js and Zoho Catalyst APIs to integrate Zoho apps with external ERP systems like NetSuite.',
  integrations: [
    'Google Workspace', 'Microsoft 365', 'OneDrive',
    'NetSuite ERP', 'Logistics APIs', 'IoT Systems'
  ],
  role: 'Senior Zoho Solution Architect & Full Stack Developer'
},
{
  id: 16,
  title: 'Healthcare Management System with Zoho One',
  description: 'Secure healthcare system with patient lifecycle management, billing, and support automation.',
  longDescription: 'Healthcare provider needed a secure and scalable system for managing patients, billing, and support. I implemented a Zoho-based solution with custom APIs and automation workflows.',
  category: 'zoho',
  technologies: [
    'Zoho CRM', 'Zoho Creator', 'Zoho Books', 'Zoho Desk', 'Zoho Campaigns',
    'Deluge', 'Client Script', 'JavaScript', 'Node.js', 'Zoho Catalyst'
  ],
  features: [
    'Patient lifecycle management using Zoho CRM',
    'Custom EMR system built using Zoho Creator',
    'Client Script for real-time form validations and UI improvements',
    'Automated billing using Zoho Books',
    'Patient support ticketing system using Zoho Desk',
    'Automated reminders via email/SMS',
    'Custom APIs using Node.js and Zoho Catalyst for data exchange',
    'Campaign automation for patient engagement'
  ],
  challenges: 'Handling sensitive healthcare data and ensuring secure integrations.',
  solution: 'Implemented secure API architecture using Zoho Catalyst and Node.js with role-based access.',
  integrations: [
    'Government Health APIs', 'Twilio', 'Google Calendar', 'Email Systems'
  ],
  role: 'Zoho Solution Architect & Backend Developer'
},
{
  id: 17,
  title: 'Pharmaceutical Sales & Compliance Automation',
  description: 'Compliance-driven pharma CRM system with sales tracking and regulatory automation.',
  longDescription: 'Pharma company required strict compliance tracking and sales monitoring. I built a Zoho-based solution with automation and centralized dashboards.',
  category: 'zoho',
  technologies: [
    'Zoho CRM', 'Zoho Books', 'Zoho Analytics', 'Zoho Campaigns',
    'Deluge', 'Client Script', 'JavaScript', 'Node.js', 'Zoho Catalyst'
  ],
  features: [
    'Sales and territory management using Zoho CRM',
    'Client Script for validation of compliance data',
    'Distributor management system',
    'Compliance tracking with automated alerts',
    'Financial tracking using Zoho Books',
    'Marketing campaigns for product promotions',
    'Custom reporting dashboards using Zoho Analytics',
    'API integrations using Node.js and Catalyst'
  ],
  challenges: 'Ensuring compliance and audit tracking across multiple regions.',
  solution: 'Developed centralized compliance engine with automated workflows and audit logs.',
  integrations: [
    'Government APIs', 'Excel Automation', 'Email Systems'
  ],
  role: 'Zoho Automation Engineer & Integration Developer'
},
{
  id: 18,
  title: 'Hospitality Operations Management System',
  description: 'Automated hospitality platform with booking, support, and customer experience optimization.',
  longDescription: 'Hospitality business needed a centralized system for bookings, operations, and customer engagement. Implemented Zoho-based automation and integrations.',
  category: 'zoho',
  technologies: [
    'Zoho CRM', 'Zoho Creator', 'Zoho Books', 'Zoho Desk', 'Zoho Campaigns',
    'Deluge', 'Client Script', 'JavaScript', 'Node.js'
  ],
  features: [
    'Booking and reservation management system',
    'Client Script for dynamic pricing and booking validations',
    'Customer support system using Zoho Desk',
    'Automated invoicing and billing',
    'Marketing campaigns and promotions',
    'Staff workflow and task management',
    'Analytics dashboards for revenue tracking'
  ],
  challenges: 'Managing real-time bookings and dynamic customer requests.',
  solution: 'Built automated workflows and integrated real-time communication systems.',
  integrations: [
    'Google Maps', 'Twilio', 'Payment Gateways'
  ],
  role: 'Zoho Consultant & Full Stack Developer'
},
{
  id: 19,
  title: 'EdTech Learning Management & CRM System',
  description: 'Scalable EdTech platform with student lifecycle, communication, and learning automation.',
  longDescription: 'EdTech company needed a scalable system for managing students, courses, and communication. Built a Zoho-powered platform with automation and integrations.',
  category: 'zoho',
  technologies: [
    'Zoho CRM', 'Zoho Creator', 'Zoho Books', 'Zoho Campaigns', 'Zoho Desk',
    'Deluge', 'Client Script', 'JavaScript', 'Node.js', 'Zoho Catalyst'
  ],
  features: [
    'Student onboarding and CRM automation',
    'Course tracking system using Zoho Creator',
    'Client Script for dynamic UI and validations',
    'Student support system using Zoho Desk',
    'Email/SMS automation campaigns',
    'Fee and payment tracking using Zoho Books',
    'Custom APIs for LMS integration using Node.js and Catalyst',
    'Performance analytics dashboards'
  ],
  challenges: 'Handling large-scale student data and integrations with external LMS.',
  solution: 'Built scalable architecture using Zoho CRM + Creator + Catalyst APIs.',
  integrations: [
    'Google Classroom', 'Zoom', 'Twilio', 'Payment APIs'
  ],
  role: 'Full Stack Zoho Developer & Solution Architect'
}
];  
