import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "E-commerce";

export const title = "E-commerce Solutions";

export const description = "We build scalable, secure e-commerce platforms that deliver exceptional shopping experiences and drive business growth.";

export const hero: HeroMetadata = {
    title: "E-commerce Solutions",
    description: "Transform your retail business with modern e-commerce solutions that enhance customer experience and boost sales performance.",
    image: "/images/industries/ecommerce/ecommerce-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Custom E-commerce Platform",
        description: "Tailored e-commerce solutions that perfectly match your business needs and brand identity.",
        features: [
            "Responsive design",
            "Advanced product management",
            "Custom checkout process",
            "Multi-currency support",
            "Inventory synchronization",
            "SEO optimization",
            "Analytics integration"
        ],
        image: "/images/industries/ecommerce/ecommerce.jpg"
    },
    {
        title: "Marketplace Solutions",
        description: "Multi-vendor marketplace platforms that connect sellers with buyers efficiently.",
        features: [
            "Vendor management",
            "Commission handling",
            "Product categorization",
            "Rating and review system",
            "Automated payouts",
            "Dispute resolution"
        ],
        image: "/images/industries/ecommerce/marketplace.jpg"
    },
    {
        title: "Order Management System",
        description: "Comprehensive order management solutions that streamline fulfillment processes.",
        features: [
            "Order tracking",
            "Inventory management",
            "Multi-warehouse support",
            "Returns handling",
            "Shipping integration",
            "Automated notifications"
        ],
        image: "/images/industries/ecommerce/order-management.jpg"
    },
    {
        title: "E-commerce Analytics",
        description: "Advanced analytics solutions for data-driven decision making in e-commerce.",
        features: [
            "Sales analytics",
            "Customer behavior tracking",
            "Conversion optimization",
            "Inventory forecasting",
            "Marketing performance",
            "Custom reporting"
        ],
        image: "/images/industries/ecommerce/analytics.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Multi-vendor Marketplace for Manufacturing",
        client: "Start up",
        challenge: "A `Proof of Concept` pilot for a startup specializing in E-commerce for Manufacturing Goods and Tools. The PoC helped the startup get a market feedback early and iteratively.",
        solution: "We developed a custom marketplace platform with advanced vendor management and real-time inventory synchronization.",
        results: [
            //No fictitipus numbers, only features
            "Product listing management",
            "Seller dashboard",
            "Customer reviews and ratings",
            "Automated order processing",
            "Payment gateway integration",
            "Real-time analytics dashboard",
            "Seamless seller onboarding process",
            "Real-time product updates",
            "Automated commission calculations",
            "Real-time inventory updates",
        ],
        image: "/images/industries/ecommerce/online-shop.jpg",
        TechnologyStack: [
            "Svelte",
            "Flutter",
            "Node.js",
            "PostgreSQL",
            "RabbitMQ",
            "Elasticsearch",
            "AWS",
            "Stripe",
            "CloudFlare",
            "Razorpay"
        ]
    },
    {
        title: "Point of Sale System for Retail",
        client: "Retailer",
        challenge: "A retailer needed a modern POS system to integrate with their existing e-commerce platform and improve in-store operations.",
        solution: "We developed a custom POS system that integrates seamlessly with their e-commerce platform, providing real-time inventory updates and sales analytics.",
        results: [
            //No fictitipus numbers, only features
            "Real-time inventory synchronization",
            "Sales reporting and analytics",
            "Customer loyalty program integration",
            "Multi-store management",
            "Barcode scanning",
            "Payment processing integration",
            "User-friendly interface",
            "Offline mode support",
            "Customizable receipt printing",
            "Inventory alerts and notifications"
        ],
        image: "/images/industries/ecommerce/pos.jpg",
        TechnologyStack: [
            "Svelte",
            "GraphQL",
            "Node.js",
            "MongoDB",
            "Redis",
            "Kubernetes",
            "CloudFlare",
            "Razorpay"
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to transform your retail business?",
    description: "Let's discuss how our e-commerce solutions can help you achieve your online retail goals.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Retail Business",
    description: "Explore our tailored solutions designed to enhance your online presence and boost sales.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "E-commerce Growth Trends",
        description: "Latest trends and statistics in e-commerce growth",
        image: "/images/industries/e-commerce-infographic-1.svg"
    },
    {
        title: "Digital Shopping Experience",
        description: "Key elements of a successful online shopping experience",
        image: "/images/industries/e-commerce-infographic-2.svg"
    },
    {
        title: "E-commerce Security",
        description: "Best practices in e-commerce security and compliance",
        image: "/images/industries/e-commerce-infographic-3.svg"
    }
];
