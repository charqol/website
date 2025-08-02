import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "real-estate";

export const title = "Real Estate Solutions";

export const description = "We develop innovative real estate technology solutions that streamline property management and enhance the buying, selling, and renting experience.";

export const hero: HeroMetadata = {
    title: "Real Estate Solutions",
    description: "Transform your real estate business with modern technology solutions that improve efficiency and deliver better experiences for agents and clients.",
    image: "/images/industries/realestate/realestate-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Property Management Platform",
        description: "Comprehensive property management solutions for real estate agencies and property managers.",
        features: [
            "Tenant portal and communication",
            "Maintenance request tracking",
            "Rent collection and accounting",
            "Property inspection tools",
            "Document management",
            "Financial reporting",
            "Automated notifications"
        ],
        image: "/images/industries/realestate/property-management.jpg"
    },
    {
        title: "Real Estate CRM",
        description: "Custom CRM solutions designed specifically for real estate professionals.",
        features: [
            "Lead management",
            "Client communication",
            "Property matching",
            "Task automation",
            "Email marketing",
            "Performance analytics",
            "Mobile access"
        ],
        image: "/images/industries/realestate/crm.jpg"
    },
    {
        title: "Hotel Management System",
        description: "A custom hotel management system that helps hotels manage their operations and improve customer satisfaction.",
        features: [
            "Room booking and reservation",
            "Inventory management",
            "Payment processing",
            "Customer support",
            "Analytics and reporting",
            "Customizable templates"
        ],
        image: "/images/industries/realestate/hotel-management.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Property Management Platform",
        client: "National Property Management Group",
        challenge: "A large property management company needed to modernize their operations and improve tenant communication across multiple properties.",
        solution: "We developed a comprehensive property management platform with tenant portal and automated maintenance tracking.",
        results: [
            "40% reduction in maintenance response time",
            "60% decrease in administrative tasks",
            "95% tenant satisfaction rate",
            "Improved rent collection efficiency",
            "Centralized document management"
        ],
        image: "/images/industries/realestate/property-management-2.jpg",
        TechnologyStack: [
            "React",
            "Node.js",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Stripe",
            "SendGrid"
        ]
    },
    {
        title: "Virtual Tour Platform",
        client: "Luxury Real Estate Agency",
        challenge: "A luxury real estate agency needed a solution to showcase high-end properties virtually during the pandemic.",
        solution: "We created an immersive virtual tour platform with VR support and interactive features.",
        results: [
            "300% increase in property views",
            "50% reduction in physical showings",
            "25% faster sales cycle",
            "Expanded market reach",
            "Improved client engagement"
        ],
        image: "/images/industries/realestate/hotel-management-4.jpg",
        TechnologyStack: [
            "Three.js",
            "WebGL",
            "Vue.js",
            "Python",
            "MongoDB",
            "AWS",
            "WebRTC"
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to modernize your real estate business?",
    description: "Let's discuss how our real estate solutions can improve your operations and client experience.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Real Estate Business",
    description: "Explore our tailored solutions designed to enhance property management and client experiences.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "PropTech Trends",
        description: "Latest trends in real estate technology",
        image: "/images/industries/real-estate-infographic-1.svg"
    },
    {
        title: "Digital Property Management",
        description: "Benefits of digital property management solutions",
        image: "/images/industries/real-estate-infographic-2.svg"
    },
    {
        title: "Virtual Real Estate",
        description: "The impact of virtual solutions in real estate",
        image: "/images/industries/real-estate-infographic-3.svg"
    }
];
