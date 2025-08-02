import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "healthcare";

export const title = "Healthcare Solutions";

export const description = "We deliver secure, compliant healthcare technology solutions that improve patient care and streamline medical operations.";

export const hero: HeroMetadata = {
    title: "Healthcare Solutions",
    description: "We develop innovative healthcare technology solutions that enhance patient care, streamline operations, and ensure regulatory compliance.",
    image: "/images/industries/healthcare/healthcare-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Patient Self Care Management System",
        description: "A multi-channel system (Mobile app, WhatsApp, Telegram) for patient self-care.",
        features: [
            "Health records - HIPAA and FHIR compliant data storage",
            "Medication, symptoms, vitals, nutrition, exercise tracking",
            "Appointment scheduling, careplans, device integrations and reminders",
            "Multi-channel support - iOS and Android Mobile app, WhatsApp and Telegram",
            "Patient health reports and analytics"
        ],
        image: "/images/industries/healthcare/patient-app.png"
    },
    {
        title: "Electronic Health Records (EHR)",
        description: "Compliant EHR module supporting FHIR that improve patient care and clinical workflow efficiency.",
        features: [
            "Patient records management and history",
            "Clinical documentation and notes",
            "E-prescribing and medication management",
            "Lab results and imaging integration",
            "Secure, HIPAA compliant data storage",
        ],
        image: "/images/industries/healthcare/ehr.jpg"
    },
    {
        title: "Conversation AI-powered virtual assistant",
        description: "This is a conversational AI-powered Virtual Assistant for patients and healthcare workers.",
        features: [
            "Secure, HIPAA compliant, Natural language based",
            "Supports RAG, Multi-agents, intent recognition, and more",
            "Multi-layer authorization including consent management",
            "Multi-channel support - WhatsApp, Telegram and web-embedded chat",
            "Assessments, appointments, reminders, documents and patient data integration",
            "Completely rewritten from scratch to support generative AI workflows"
        ],
        image: "/images/industries/healthcare/virtual-assistant.jpg"
    },
    {
        title: "Healthcare Analytics",
        description: "Data analytics solutions that provide actionable insights for better healthcare delivery.",
        features: [
            "Patient outcome analysis",
            "Population health management",
            "Resource utilization tracking",
            "Predictive analytics",
            "Custom reporting and dashboards",
            "AI-powered insights"
        ],
        image: "/images/industries/healthcare/analytics.jpg"
    },
    {
        title: "Medical Practice Management",
        description: "Comprehensive practice management solutions for healthcare providers.",
        features: [
            "Appointment scheduling",
            "Insurance verification",
            "Billing and claims management",
            "Inventory management",
            "Staff scheduling",
            "Financial reporting"
        ],
        image: "/images/industries/healthcare/hospital-management.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Patient Self Care Management System",
        client: "Non-profit foundation working in Social Health and Chronic Care",
        challenge: "A growing healthcare network needed to modernize their whole ecosystem to support patient self-care through multi-channel interfaces.",
        solution: "We developed a multi-channel system (Mobile app, WhatsApp, Telegram) for patient self-care. It involved multiple microservices and a very scalable,         flexible, and secure backend. On frontend we developed a Flutter based patient facing mobile app, an admin portal and patient portal developed using svelte. A chatbot service integrates with WhatsApp and Telegram channels and uses RAG, Agentic workflows for patient and healthworker interactions.",
        results: [
            "Health records - HIPAA and FHIR compliant data storage",
            "Medication, symptoms, vitals, nutrition, exercise tracking",
            "Appointment scheduling, careplans, device integrations and reminders",
            "Multi-channel support - iOS and Android Mobile app, WhatsApp and Telegram",
            "Patient health reports and analytics",
            "Secure, HIPAA compliant, Natural language based",
            "Supports RAG, Multi-agents, intent recognition, and more",
            "Multi-layer authorization including consent management",
            "Multi-channel support - WhatsApp, Telegram and web-embedded chat",
            "Assessments, appointments, reminders, documents and patient data integration",
            "Generative AI first workflows for chatbot"
        ],
        image: "/images/industries/healthcare/rean-foundation.png",
        TechnologyStack: [
            "Svelte",
            "Flutter",
            "Node.js",
            "MySQL",
            "Redis",
            "Docker",
            "AWS (HIPAA Compliant)",
            "HL7 FHIR",
            "WhatsApp",
            "Telegram"
        ]
    },
    {
        title: "Vitals Monitoring Device Platform",
        client: "A vitals monitoring device developer and manufacturer",
        challenge: "A device manufacturer needed to develop a platform to support their device lifecycle, client facing apps development and admin portal.",
        solution: "We built a platform to support their device lifecycle auch as device registration, firmware updates, patient data integration, client facing apps development (clinic and patient apps) and admin portal.",
        results: [
            "Signal processing of vitals signals",
            "Device lifecycle management- registration, firmware updates, maintenance, digital twins and support",
            "Patient data integration - HL7 FHIR compliant data storage",
            "Client facing apps development - for clinics and patients",
            "Data sync over Bluetooth and WiFi",
            "Data encryption at rest and in transit",
            "Consent based report sharing for patients",
            "Admin portal - Device management, Usage analytics, subscriptions, payments, support tickets, etc.",
            "Client self service portal - for clinics to manage their devices and records",
            "Vitals data pipeline, data storage and analytics",
            "Data anonymization for research",
            "AI-powered insights from vitals data"
        ],
        image: "/images/industries/healthcare/device.png",
        TechnologyStack: [
            "Svelte",
            "Flutter",
            "Node.js",
            "MySQL",
            "Docker",
            "Azure",
            "HL7 FHIR"
        ]
    },
    {
        title: "Healthcare Chatbot Platform",
        client: "A healthcare startup specializing in AI-powered solutions",
        challenge: "A healthcare startup needed a chatbot platform that uses LLMs, RAG, and Agentic Routing for appointment scheduling, medication reminders, and condition-specific healthcare queries.",
        solution: "We built a chatbot platform that uses LLMs, RAG, and Agentic Routing for appointment scheduling, medication reminders, and condition-specific healthcare queries.",
        results: [
            "AI-powered virtual assistant for patients and healthcare workers",
            "A well-designed Conversation Routing Agent that can use multiple LLM models",
            "Secure, HIPAA compliant, Natural language based",
            "Supports RAG, Multi-agents, intent recognition, and more",
            "Multi-layer authorization including consent management",
            "Appointment scheduling",
            "Medication reminders",
            "Condition-specific healthcare queries",
            "Multi-channel support - WhatsApp, Telegram and web-embedded chat",
            "Secure, HIPAA compliant data storage",
            "AI-powered insights",
            "Natural language processing",
        ],
        image: "/images/industries/healthcare/virtual-assistant.jpg",
        TechnologyStack: [
            "Svelte",
            "Node.js",
            "MySQL",
            "Redis",
            "Docker",
            "AWS (HIPAA Compliant)",
            "HL7 FHIR"
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to transform your healthcare operations?",
    description: "Let's discuss how our healthcare solutions can improve patient care and operational efficiency.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Healthcare Operations",
    description: "Explore our tailored solutions designed to enhance patient care and streamline medical operations.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "Digital Healthcare Transformation",
        description: "The impact of digital solutions on healthcare delivery",
        image: "/images/industries/healthcare-infographic-1.svg"
    },
    {
        title: "Telemedicine Benefits",
        description: "Key advantages of implementing telemedicine solutions",
        image: "/images/industries/healthcare-infographic-2.svg"
    },
    {
        title: "Healthcare Data Security",
        description: "Our approach to securing sensitive healthcare data",
        image: "/images/industries/healthcare-infographic-3.svg"
    }
];
