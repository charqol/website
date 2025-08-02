export interface Industry {
    id: string;
    title: string;
    icon: string;
    iconAlt: string;
    link?: string;
    description?: string;
    benefits: string[];
}

export const industries: Industry[] = [
    {
        id: "finance",
        title: "Finance",
        icon: "/images/industries/icons/icons8-bank-card-dollar-50.png",
        iconAlt: "FinTech",
        link: "/industries/finance",
        description: "We deliver secure, scalable financial technology solutions that help financial institutions modernize their operations and enhance customer experiences.",
        benefits: [
            "Secure transaction processing systems",
            "Compliance with financial regulations",
            "Real-time analytics and reporting",
            "Digital banking and payment solutions",
            "Blockchain and cryptocurrency integration"
        ]
    },
    {
        id: "healthcare",
        title: "Healthcare",
        icon: "/images/industries/icons/icons8-stethoscope-50.png",
        iconAlt: "Healthcare",
        link: "/industries/healthcare",
        description: "Our healthcare solutions improve patient care, streamline operations, and ensure compliance with healthcare regulations while protecting sensitive data.",
        benefits: [
            "Electronic Health Records (EHR) systems",
            "Telemedicine platforms",
            "Healthcare analytics and reporting",
            "Patient engagement solutions",
            "Medical device integration"
        ]
    },
    {
        id: "ecommerce",
        title: "E-commerce",
        icon: "/images/industries/icons/icons8-add-shopping-cart-50.png",
        iconAlt: "E-commerce",
        link: "/industries/ecommerce",
        description: "We build powerful e-commerce platforms that drive sales, enhance customer experiences, and streamline inventory management for businesses of all sizes.",
        benefits: [
            "Custom e-commerce platforms",
            "Mobile shopping applications",
            "Inventory management systems",
            "Payment gateway integration",
            "Customer analytics and personalization"
        ]
    },
    {
        id: "realestate",
        title: "Real Estate",
        icon: "/images/industries/icons/icons8-real-estate-50.png",
        iconAlt: "Real Estate",
        link: "/industries/realestate",
        description: "Our real estate technology solutions help property managers, agents, and developers streamline operations and enhance property listings and transactions.",
        benefits: [
            "Property management systems",
            "Virtual property tours",
            "Transaction management platforms",
            "Market analysis tools",
            "Tenant and owner portals"
        ]
    },
    {
        id: "enterprise",
        title: "Enterprise",
        icon: "/images/industries/icons/icons8-enterprise-50.png",
        iconAlt: "Enterprise",
        link: "/industries/enterprise",
        description: "We develop enterprise-grade solutions that help large organizations optimize operations, improve efficiency, and drive digital transformation initiatives.",
        benefits: [
            "Enterprise resource planning (ERP) systems",
            "Customer relationship management (CRM)",
            "Business intelligence and analytics",
            "Workflow automation",
            "Legacy system modernization"
        ]
    },
    {
        id: "education",
        title: "Education",
        icon: "/images/industries/icons/icons8-literature-50.png",
        iconAlt: "Education",
        link: "/industries/education",
        description: "Our educational technology solutions enhance learning experiences, streamline administrative processes, and enable remote and hybrid learning environments.",
        benefits: [
            "Learning Management Systems (LMS)",
            "Educational content platforms",
            "Student information systems",
            "Assessment and evaluation tools",
            "Virtual classroom solutions"
        ]
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        icon: "/images/industries/icons/icons8-robotic-arm-50.png",
        iconAlt: "Manufacturing",
        link: "/industries/manufacturing",
        description: "We create manufacturing technology solutions that optimize production processes, improve quality control, and enable smart factory capabilities.",
        benefits: [
            "Production planning and scheduling",
            "Quality management systems",
            "Supply chain optimization",
            "IoT and sensor integration",
            "Predictive maintenance solutions"
        ]
    },
    {
        id: "agriculture",
        title: "Agriculture",
        icon: "/images/industries/icons/icons8-agriculture-50.png",
        iconAlt: "Agriculture",
        link: "/industries/agriculture",
        description: "Our agricultural technology solutions help farmers and agribusinesses optimize crop yields, manage resources efficiently, and implement sustainable farming practices.",
        benefits: [
            "Precision agriculture systems",
            "Crop monitoring and management",
            "Resource optimization tools",
            "Supply chain traceability",
            "Weather and climate analysis"
        ]
    }
];
