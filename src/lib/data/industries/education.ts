import type {
    IndustrySolutionMetadata,
    CaseStudyMetadata,
    InfographicMetadata,
    HeroMetadata,
    CallToActionMetadata
} from '$lib/types/industry';

export const industry = "education";

export const title = "Education Solutions";

export const description = "We deliver innovative educational technology solutions that enhance learning experiences and streamline academic operations.";

export const hero: HeroMetadata = {
    title: "Education Solutions",
    description: "Transform your educational institution with modern technology solutions that improve learning outcomes and operational efficiency.",
    image: "/images/industries/education/education-hero.jpg",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Solutions",
    secondaryButtonLink: "#solutions"
};

export const solutions: IndustrySolutionMetadata[] = [
    {
        title: "Learning Management System",
        description: "Comprehensive learning management solutions that enhance the educational experience.",
        features: [
            "Course management",
            "Student progress tracking",
            "Online assessments and assignments",
            "Interactive content delivery",
            "Gradebook management",
            "Communication tools"
        ],
        image: "/images/industries/education/lms.jpg"
    },
    {
        title: "Student Information System",
        description: "Integrated student information management for educational institutions.",
        features: [
            "Enrollment management",
            "Attendance tracking",
            "Academic records",
            "Fee management",
            "Report generation",
            "Mobile accessibility"
        ],
        image: "/images/industries/education/student-info.jpg"
    },
    {
        title: "Virtual Classroom Platform",
        description: "Advanced virtual learning solutions for remote and hybrid education.",
        features: [
            "Live video classes",
            "Interactive whiteboard",
            "Resource sharing",
            "Breakout rooms",
            "Recording capabilities",
            "Student engagement tools"
        ],
        image: "/images/industries/education/virtual-classroom.jpg"
    },
    {
        title: "Educational Analytics",
        description: "Data-driven insights for improved educational outcomes.",
        features: [
            "Learning analytics",
            "Performance tracking",
            "Attendance analysis",
            "Behavioral insights",
            "Resource utilization",
            "Custom reporting"
        ],
        image: "/images/industries/education/analysis.jpg"
    }
];

export const caseStudies: CaseStudyMetadata[] = [
    {
        title: "Learning Management System",
        client: "Edutech startup",
        challenge: "The client needed a modern LMS to support their online courses and virtual classroom offerings for 10/12th grade students for IIT/JEE and NEET preparation.",
        solution: "We developed a comprehensive LMS with integrated virtual classroom capabilities with modules such as video lectures, assignments, tests, and analytics.",
        results: [
            "Program and course management",
            "Streaming recorded video lectures",
            "Assignments and tests",
            "Virtual classroom",
            "Faculty and student management",
            "Document management",
            "Student analytics"
        ],
        image: "/images/industries/education/examination.jpg",
        TechnologyStack: [
            "React",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "AWS",
            "WebRTC",
            "Docker"
        ]
    },
    {
        title: "Company Training and Knowledge Management System",
        client: "Manufacturing company",
        challenge: "The client needed a system to train their employees and manage their knowledge base. This involved understanding their current training processes and creating a system that could be used by the employees to learn and grow.",
        solution: "We developed a comprehensive training and knowledge management system with modules such as video lectures, assignments, tests, and analytics.",
        results: [
            "Training and knowledge management",
            "Assessment and certification",
            "Employee skillset orientation",
            "Training calendar and scheduling",
            "Training analytics - Skill matrix and gap analysis",
            "Knowledge base- Content Repository",

        ],
        image: "/images/industries/education/training.jpg",
        TechnologyStack: [
            "Svelte",
            "Node.js",
            "MySQL",
            "Redis",
            "AWS",
            "Docker"
        ]
    }
];

export const ctaBottom: CallToActionMetadata = {
    title: "Ready to transform your educational institution?",
    description: "Let's discuss how our education solutions can improve learning outcomes and operational efficiency.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const ctaTop: CallToActionMetadata = {
    title: "Transform Your Educational Institution",
    description: "Explore our tailored solutions designed to enhance learning experiences and streamline operations.",
    primaryButtonText: "Get In Touch",
    primaryButtonLink: "/contact"
};

export const infographics: InfographicMetadata[] = [
    {
        title: "Digital Learning Impact",
        description: "The impact of digital solutions on education outcomes",
        image: "/images/industries/education-infographic-1.svg"
    },
    {
        title: "Modern Education Tools",
        description: "Essential tools for modern educational institutions",
        image: "/images/industries/education-infographic-2.svg"
    },
    {
        title: "Learning Analytics",
        description: "How data analytics improves educational outcomes",
        image: "/images/industries/education-infographic-3.svg"
    }
];
