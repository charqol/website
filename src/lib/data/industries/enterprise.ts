import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "enterprise";

export const title = "Enterprise Solutions";

export const description = "We deliver comprehensive enterprise software solutions that streamline operations, enhance productivity, and drive digital transformation.";

export const hero: HeroMetadata = {
    title: "Enterprise Solutions",
    description: "Transform your enterprise with modern technology solutions that improve efficiency, scalability, and competitive advantage.",
    image: "/images/industries/enterprise/enterprise-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Enterprise Resource Planning (ERP)",
        description: "Comprehensive ERP solutions that integrate all aspects of your business operations.",
        features: [
            "Financial management",
            "Human resources",
            "Supply chain management",
            "Inventory control",
            "Project management",
            "Business intelligence",
            "Compliance management"
        ],
        image: "/images/industries/enterprise/erp.jpg"
    },
    {
        title: "Customized Team Collaboration System",
        description: "Modern workplace solutions that enhance collaboration and productivity.",
        features: [
            "Team collaboration",
            "Communication tools",
            "File sharing",
            "Project management",
            "Task management",
            "Workflow automation"
        ],
        image: "/images/industries/enterprise/team-collaboration.jpg"
    },
    {
        title: "Human Resource Management System",
        description: "Automated solutions that streamline workflows and reduce manual operations.",
        features: [
            "Employee management",
            "Payroll processing",
            "Performance tracking",
            "Attendance and leave management",
            "Training and development",
            "Compliance management"
        ],
        image: "/images/industries/enterprise/hr-management.jpg"
    },
    {
        title: "Asset Management System",
        description: "Asset management system that helps you track and manage your assets.",
        features: [
            "Asset tracking",
            "Maintenance scheduling",
            "Usage monitoring",
            "Cost tracking",
            "Data visualization",
            "Real-time reporting"
        ],
        image: "/images/industries/enterprise/asset-management.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Identity and Access Management System",
        client: "Technology Startup",
        challenge: "A technology startup specializing in Identity solutions needed a platform to provide OAuth2 based multi-modal authentication (OTP, Face Biometrics, Fingerprint, Email, SMS, etc.).",
        solution: "We built a custom identity management platform that supports multi-modal authentication and integrates with existing systems.",
        results: [
            "OAuth2 based multi-modal authentication",
            "User management",
            "Integration with AI models - Face recognition, Fingerprint recognition",
            "Role-based access control",
            "Audit logging",
            "User onboarding and offboarding",
            "Passwordless authentication",
            "Single sign-on (SSO)",
            "Multi-factor authentication (MFA)",
            "Identity federation",
            "Compliance reporting",
        ],
        image: "/images/industries/enterprise/iam.jpg",
        TechnologyStack: [
            "Node.js",
            "FastAPI",
            "React",
            "PostgreSQL",
            "Redis",
            "AWS",
            "Docker",
        ]
    },
    {
        title: "Custom ERP Solution for MSME",
        client: "Multiple MSME Businesses",
        challenge: "A custom ERP solution that integrated all business processes and provided real-time visibility.",
        solution: "We implemented a custom ERP solution that integrated all business processes and provided real-time visibility.",
        results: [
            "Attendance and leave management",
            "Payroll processing",
            "Performance tracking",
            "Training and development",
            "Compliance management",
            "Data visualization",
            "Operational Process Automation",
            "Asset and Inventory Management",
            "Accounting and Finance",
            "Sales pipeline management",
            "Customer relationship management",
            "Customized Project management",
        ],
        image: "/images/industries/enterprise/msme.jpg",
        TechnologyStack: [
            "React",
            ".NET Core",
            "SQL Server",
            "Redis",
            "Azure",
            "Docker",
            "Kubernetes"
        ]
    },
    {
        title: "Project & Process Workflow Management System",
        client: "Manufacturing Company",
        challenge: "A manufacturing company needed to modernize their workplace to support remote work and enhance collaboration.",
        solution: "We developed a customized project management platform with integrated collaboration tools and workflows.",
        results: [
            "Task and Dependency management",
            "Events and schedules",
            "Conditional workflows",
            "Multi-branching workflows",
            "File sharing",
            "Real-time communication",
            "Project tracking",
            "Automated notifications",
            "Integrations with existing tools"
        ],
        image: "/images/industries/enterprise/project-management.jpg",
        TechnologyStack: [
            "Vue.js",
            "Node.js",
            "MongoDB",
            "WebRTC",
            "AWS",
            "Elasticsearch",
            "Docker"
        ]
    },
    {
        title: "Face Recognition Benchmarking",
        client: "Technology Startup",
        challenge: "A technology startup specializing in Face Recognition needed to benchmark their algorithms against NIST FRTE Verification.",
        solution: "We helped the customer benchmark their face recognition system against NIST standards.",
        results: [
            "Benchmarking against NIST FRTE Verification",
            "Low level integration of the Python and C++ code",
            "Targeting multiple Linux systems",
            "Tune the algorithms for performance",
            "Performance analysis",
            "Model Tuning & Algorithm optimization",
        ],
        image: "/images/industries/enterprise/face-recognition.jpg",
        TechnologyStack: [
            "Python",
            "Cpp",
            "OpenCV",
            "NumPy",
            "Pandas",
            "PyTorch",
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to transform your enterprise?",
    description: "Let's discuss how our enterprise solutions can improve your operational efficiency and drive growth.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Enterprise Operations",
    description: "Explore our tailored solutions designed to enhance efficiency and drive digital transformation.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "Digital Transformation Journey",
        description: "Key stages in enterprise digital transformation",
        image: "/images/industries/enterprise-infographic-1.svg"
    },
    {
        title: "Enterprise Integration",
        description: "Benefits of integrated enterprise solutions",
        image: "/images/industries/enterprise-infographic-2.svg"
    },
    {
        title: "Business Process Automation",
        description: "Impact of automation on enterprise operations",
        image: "/images/industries/enterprise-infographic-3.svg"
    }
];
