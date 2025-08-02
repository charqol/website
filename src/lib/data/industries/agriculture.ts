import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "agriculture";

export const title = "Agriculture Solutions";

export const description = "We deliver innovative agricultural technology solutions that optimize farming operations and enhance productivity through smart farming practices.";

export const hero: HeroMetadata = {
    title: "Agriculture Solutions",
    description: "Transform your agricultural operations with cutting-edge technology solutions that improve efficiency, sustainability, and crop yields.",
    image: "/images/industries/agriculture/agriculture-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Smart Farming Systems",
        description: "Integrated IoT solutions for precision agriculture and smart farming operations.",
        features: [
            "Real-time crop monitoring",
            "Soil health analysis",
            "Weather monitoring and forecasting",
            "Irrigation automation",
            "Pest and disease detection",
            "Yield prediction",
            "Resource optimization"
        ],
        image: "/images/industries/agriculture/smart-farming.jpg"
    },
    {
        title: "Farm Management Platform",
        description: "Comprehensive farm management solutions for efficient agricultural operations.",
        features: [
            "Crop planning and scheduling",
            "Inventory management",
            "Equipment tracking",
            "Worker management",
            "Cost tracking",
            "Compliance documentation",
            "Reporting and analytics"
        ],
        image: "/images/industries/agriculture/farm-management.jpg"
    },
    {
        title: "Agriculture Produce Aggregator",
        description: "A platform that allows farmers to sell their produce directly to consumers, reducing intermediaries and increasing profits.",
        features: [
            "Product traceability",
            "Quality control",
            "Auction system",
            "Storage monitoring",
            "Transportation management",
            "Market integration",
        ],
        image: "/images/industries/agriculture/aggregator.jpg"
    },
    // {
    //     title: "Agricultural Analytics",
    //     description: "Data-driven insights for improved agricultural decision-making.",
    //     features: [
    //         "Yield analytics",
    //         "Resource utilization analysis",
    //         "Market trend analysis",
    //         "Predictive maintenance",
    //         "Financial planning",
    //         "Sustainability metrics"
    //     ],
    //     image: "/images/industries/agriculture/analytics.jpg"
    // }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Smart Farming Implementation",
        client: "Large-Scale Farm Cooperative",
        challenge: "A farming cooperative needed to modernize their operations with IoT and automation to improve crop yields and reduce resource waste.",
        solution: "We implemented a comprehensive smart farming system with sensors, automation, and real-time monitoring capabilities.",
        results: [
            "30% increase in crop yields",
            "40% reduction in water usage",
            "50% decrease in pesticide use",
            "Improved resource allocation",
            "Enhanced crop quality"
        ],
        image: "/images/industries/agriculture/smart-farming-2.jpg",
        TechnologyStack: [
            "IoT Sensors",
            "Node.js",
            "Python",
            "PostgreSQL",
            "AWS IoT",
            "PyTorch",
            "Docker"
        ]
    },
    {
        title: "Agriculture Produce Aggregator",
        client: "Agricultural Export Company",
        challenge: "An agricultural export company needed better visibility and control over their supply chain from farm to international markets.",
        solution: "We developed a blockchain-based supply chain platform with real-time tracking and quality monitoring.",
        results: [

        ],
        image: "/images/industries/agriculture/aggregator-2.jpg",
        TechnologyStack: [
            "Svelte",
            "CSharp",
            "Flutter",
            "RabbitMQ",
            "Redis",
            "MySQL",
            "Azure",
            "Docker"
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to modernize your agricultural operations?",
    description: "Let's discuss how our agricultural solutions can improve your farming efficiency and productivity.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Agricultural Operations",
    description: "Explore our tailored solutions designed to enhance farming efficiency and sustainability.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "Smart Farming Benefits",
        description: "The impact of smart farming technologies on agricultural productivity",
        image: "/images/industries/agriculture-infographic-1.svg"
    },
    {
        title: "Sustainable Agriculture",
        description: "Key practices for sustainable farming operations",
        image: "/images/industries/agriculture-infographic-2.svg"
    },
    {
        title: "Agricultural Supply Chain",
        description: "Modern approaches to agricultural supply chain management",
        image: "/images/industries/agriculture-infographic-3.svg"
    }
];
