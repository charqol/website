import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "manufacturing";

export const title = "Manufacturing Solutions";

export const description = "We deliver cutting-edge manufacturing solutions that optimize production processes, improve efficiency, and drive digital transformation.";

export const hero: HeroMetadata = {
    title: "Manufacturing Solutions",
    description: "Transform your manufacturing operations with smart technology solutions that enhance productivity and drive innovation.",
    image: "/images/industries/manufacturing/manufacturing-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Smart Factory Solutions",
        description: "Comprehensive IoT and automation solutions for modern manufacturing facilities.",
        features: [
            "Real-time monitoring",
            "Predictive maintenance",
            "Production optimization",
            "Quality control automation",
            "Energy management",
            "Asset tracking",
            "Environmental monitoring"
        ],
        image: "/images/industries/manufacturing/smart-factory.jpg"
    },
    {
        title: "Supply Chain Management",
        description: "End-to-end supply chain solutions for improved visibility and efficiency.",
        features: [
            "Inventory management",
            "Supplier integration",
            "Order tracking",
            "Demand forecasting",
            "Logistics optimization",
            "Cost analysis",
            "Real-time reporting"
        ],
        image: "/images/industries/manufacturing/supply-chain.jpg"
    },
    {
        title: "Quality Management System",
        description: "Digital quality control and compliance management solutions.",
        features: [
            "Quality inspection",
            "Compliance tracking",
            "Document control",
            "Audit management",
            "Corrective actions",
            "Training management",
            "Performance analytics"
        ],
        image: "/images/industries/manufacturing/quality-management.jpg"
    },
    {
        title: "Production Planning",
        description: "Advanced planning and scheduling solutions for optimal production efficiency.",
        features: [
            "Production scheduling",
            "Resource allocation",
            "Capacity planning",
            "Material requirements",
            "Work order management",
            "Performance tracking",
            "Cost optimization"
        ],
        image: "/images/industries/manufacturing/production-planning.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Battery Testing Software",
        client: "Leading Battery Manufacturer",
        challenge: "A battery manufacturer needed to modernize their testing software to improve efficiency and accuracy.",
        solution: "We developed a custom battery testing software that integrates with their existing systems and provides real-time data analysis.",
        results: [
            "Complete overhaul of the legacy system",
            "Automated testing processes",
            "User-friendly interface",
            "Improved testing efficiency",
            "Custom testing cycles",
            "Real-time monitoring and reporting",
        ],
        image: "/images/industries/manufacturing/battery-testing.jpg",
        TechnologyStack: [
            "CSharp"
        ]
    },
    {
        title: "Inventory Management System",
        client: "Industrial Equipment Manufacturer",
        challenge: "A manufacturer faced challenges with supply chain visibility and inventory management.",
        solution: "We developed an integrated inventory management system with real-time tracking and analytics.",
        results: [
            "Track quantities across SKUs",
            "Real-time stock levels",
            "Batch/lot tracking, Barcode and RFID scanning support",
            "Create and manage Purchase Orders (POs)",
            "Vendor/supplier management",
            "Goods receipt tracking, Purchase returns and debit notes",
            "Multi-warehouse support, Bin and location-level tracking"
        ],
        image: "/images/industries/manufacturing/inventry-management.jpg",
        TechnologyStack: [
            "Python",
            "Svelte",
            "PostgreSQL",
            "Redis",
            "AWS",
            "Docker",
            "Elasticsearch"
        ]
    },
    {
        title: "Smart Factory Implementation",
        client: "Global Manufacturing Corporation",
        challenge: "A large manufacturer needed to modernize their facilities and improve operational efficiency across multiple plants.",
        solution: "We implemented a comprehensive smart factory solution with IoT sensors and real-time monitoring capabilities.",
        results: [
            "Energy consumption monitoring and optimization",
            "Predictive maintenance",
            "Production optimization",
            "Quality control automation",
            "Asset tracking",
            "Environmental monitoring"
        ],
        image: "/images/industries/manufacturing/smart-factory-2.jpg",
        TechnologyStack: [
            "EdgeX Foundry",
            "Azure IoT",
            "Node.js",
            "Svelte",
            "MongoDB",
            "Docker",
            "Kubernetes"
        ]
    },
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to transform your manufacturing operations?",
    description: "Let's discuss how our manufacturing solutions can improve your efficiency and productivity.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Manufacturing Operations",
    description: "Explore our tailored solutions designed to enhance productivity and drive innovation.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "Industry 4.0",
        description: "The future of smart manufacturing",
        image: "/images/industries/manufacturing-infographic-1.svg"
    },
    {
        title: "Digital Manufacturing",
        description: "Benefits of digital transformation in manufacturing",
        image: "/images/industries/manufacturing-infographic-2.svg"
    },
    {
        title: "Smart Factory Benefits",
        description: "Key advantages of smart factory implementation",
        image: "/images/industries/manufacturing-infographic-3.svg"
    }
];
