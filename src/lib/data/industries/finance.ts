import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "finance";

export const title = "Finance Solutions";

export const description = "We deliver secure, scalable financial technology that helps institutions modernize operations and enhance customer experiences.";

export const hero: HeroMetadata = {
    title: "Finance Solutions",
    description: "We deliver secure and reliable financial technology solutions in areas such payment processing, point of sale, accounting and financial analytics.",
    image: "/images/industries/finance/finance-3.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Accounting Solutions",
        description: "Customized accounting that streamlines financial management, reporting, and compliance.",
        features: [
            "Account management, transactions and reconciliation",
            "Automated invoicing, billing, expenses, ledger and taxation",
            "Support for Crypto and Multi-currency support",
            "Integration with banking and payment APIs",
            "Compliance and regulatory reporting",
            "Secure authentication and authorization",
            "Reporting, dashboards and analytics",
        ],
        image: "/images/industries/finance/accounting.jpg"
    },
    {
        title: "Point of Sale Systems",
        description: "Robust point of sale systems that enhance retail and hospitality operations with real-time data and analytics.",
        features: [
            "Inventory management and tracking",
            "Customer relationship management (CRM)",
            "Sales reporting and analytics",
            "Integration with e-commerce platforms",
            "Multi-location support"
        ],
        image: "/images/industries/finance/pos.jpg"
    },
    {
        title: "Payment Processing Systems",
        description: "Secure and efficient payment solutions that handle transactions with speed and reliability.",
        features: [
            "Payment gateway integration",
            "Multi-currency support",
            "Real-time transaction processing",
            "Fraud detection and prevention",
            "Compliance with PCI DSS standards"
        ],
        image: "/images/industries/finance/payments.jpg"
    },
    {
        title: "Financial Analytics & Reporting",
        description: "Data-driven insights that help financial institutions make informed decisions and improve performance.",
        features: [
            "Custom dashboards and visualizations",
            "Predictive analytics and forecasting",
            "Regulatory reporting automation",
            "Risk assessment and management",
            "Performance metrics and KPIs"
        ],
        image: "/images/industries/finance/analytics.jpg"
    },
    {
        title: "Blockchain & Cryptocurrency",
        description: "Innovative solutions leveraging blockchain technology for secure, transparent financial transactions.",
        features: [
            "Cryptocurrency wallet applications",
            "Smart contract development",
            "Decentralized finance (DeFi) platforms",
            "Tokenization of assets",
            "Blockchain integration with legacy systems"
        ],
        image: "/images/industries/finance/crypto.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Custom Multi-currency Accounting System",
        client: "FinaTech Startup",
        challenge: "A fintech startup needed to to provide their clients a seamless accounting experience with Fiat as well as Crypto currencies.",
        solution: "We developed an accounting module that supports multiple currencies, including cryptocurrencies, and integrates with their existing systems.",
        results: [
            "Integration with banking API aggregators like Plaid",
            "Integration with payment gateways like Stripe and PayPal",
            "Integration with Crypto exchanges and aggregators (like Binance, Nomics, etc.)",
            "Enhanced security and compliance",
            "All the major features of typical accounting requirements"
        ],
        image: "/images/industries/finance/money.jpg",
        TechnologyStack: [
            "Svelte & SvelteKit",
            "Node.js & Express",
            "PostgreSQL",
            "RabbitMQ",
            "Redis",
            "Docker",
            "AWS (EC2, S3, RDS)",
            "Stripe API",
            "Plaid API",
            "Binance API",
            "Coingecko API"
        ]
    },
    {
        title: "Point of Sale System",
        client: "E-Commerce Startup",
        challenge: "An e-commerce startup required a robust point of sale system to manage their retail operations and integrate with their online platform.",
        solution: "We developed a custom point of sale system that integrates with their e-commerce platform, providing real-time inventory management and sales analytics.",
        results: [
            "Hardware integration with barcode scanners and printers",
            "Integrated inventory, purchase and sales management",
            "Seamless integration with e-commerce platform",
            "Enhanced customer relationship management",
            "Detailed sales reporting and analytics",
            "Multi-location support",
            "Integration with payment gateways and UPI",
        ],
        image: "/images/industries/finance/pos-2.jpg",
        TechnologyStack: [
            "Svelte & SvelteKit",
            ".NET Core",
            "MySQL",
            "RabbitMQ",
            "Redis",
            "Docker",
            "AWS (EC2, S3, RDS)",
            "Stripe API"
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to transform your financial operations?",
    description: "Let's discuss how our finance industry solutions can address your specific challenges and drive growth.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Financial Operations",
    description: "Explore our tailored solutions designed to enhance efficiency and security in the fintech area.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "Financial Technology Adoption",
        description: "The rapid growth of fintech adoption across financial institutions",
        image: "/images/industries/finance-infographic-1.svg"
    },
    {
        title: "Digital Banking Benefits",
        description: "Key advantages of implementing digital banking solutions",
        image: "/images/industries/finance-infographic-2.svg"
    },
    {
        title: "Payment Processing Flow",
        description: "How our secure payment processing systems work",
        image: "/images/industries/finance-infographic-3.svg"
    }
];
