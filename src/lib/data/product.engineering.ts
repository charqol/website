export type ApproachStep = {
    number: number;
    title: string;
    description: string;
    icon: string;
    tags: string[];
};

export const approachSteps: ApproachStep[] = [
    {
        number: 1,
        title: "Ideate & Validate",
        description: "Discovery workshops, product strategy, tech feasibility",
        icon: "💡",
        tags: ["Business Goals", "Product Vison", "Tech Feasibility", "Market Study", "Strategy"]
    },
    {
        number: 2,
        title: "Design & Prototype",
        description: "UX/UI design, clickable mockups, MVP scoping",
        icon: "🎨",
        tags: ["Design", "Prototyping", "User Testing", "UI/UX Design", "Product Design"]
    },
    {
        number: 3,
        title: "Build & Iterate",
        description: "Scalable architecture, CI/CD, cloud-native code",
        icon: "🔧",
        tags: ["Engineering", "Development", "Cloud", "DevOps", "CI/CD"]
    },
    {
        number: 4,
        title: "Test & Validate",
        description: "Automated testing, performance optimization, security hardening",
        icon: "🧪",
        tags: ["Testing", "Performance", "Security", "QA", "Automation"]
    },
    {
        number: 5,
        title: "Launch & Scale",
        description: "Market readiness, observability, performance optimization",
        icon: "🚀",
        tags: ["Launch", "Scale", "Observability", "Performance", "Deployment"]
    },
    {
        number: 6,
        title: "Evolve & Support",
        description: "Continuous delivery, L2/L3 support, feature growth",
        icon: "♻️",
        tags: ["Support", "Maintenance", "Feature Growth", "Continuous Delivery", "L2/L3 Support"]
    }
];

export const offerings = [
    {
        id: "strategy",
        title: "Product Strategy & Innovation",
        icon: "🛠️",
        items: [
            "Discovery sessions",
            "Roadmap planning",
            "Product-market fit exploration"
        ]
    },
    {
        id: "design",
        title: "UX/UI Design",
        icon: "🧠",
        items: [
            "Design systems",
            "Interactive wireframes",
            "User research & personas"
        ]
    },
    {
        id: "engineering",
        title: "Engineering & Development",
        icon: "⚙️",
        items: [
            "Web, Mobile, API development",
            "Cloud-native & serverless architecture",
            "Modern tech stacks: React, .NET, Node.js, Python, Java, Flutter"
        ]
    },
    {
        id: "testing",
        title: "Quality & Test Automation",
        icon: "🧪",
        items: [
            "Automated testing",
            "Performance testing",
            "Security hardening"
        ]
    },
    {
        id: "devops",
        title: "DevOps & Deployment",
        icon: "🚀",
        items: [
            "CI/CD pipelines",
            "Infrastructure-as-Code (IaC)",
            "Monitoring & alerting"
        ]
    },
    {
        id: "support",
        title: "Product Modernization & Support",
        icon: "🧩",
        items: [
            "Refactoring legacy systems",
            "Feature rollouts",
            "Maintenance & scaling"
        ]
    }
];

export const accelerators = [
    {
        title: "Rapid MVP Framework",
        description: "Launch MVPs in weeks with reusable templates. Experiment early and often!",
        icon: "🧩"
    },
    {
        title: "Microservice Bootstrap Kit",
        description: "Starter for scalable backends. Security, Observability, Performance, Monitoring, ...",
        icon: "❄️"
    },
    {
        title: "Automated CI/CD & Packaging",
        description: "Out-of-the-box DevOps pipelines for large set of deployment schenarios and environments",
        icon: "📦"
    },
    {
        title: "Design System Toolkit",
        description: "Customizable component libraries, skeletons and best practices for quick UI rollout",
        icon: "🎨"
    },
    {
        title: "Automated Tests and QA Processes",
        description: "Automated test generator for your application ecosystem",
        icon: "🐞"
    },
    {
        title: "Deployment Templates",
        description: "Large pool of well researched, cost effective, best practices aligned deployment templates",
        icon: "🌎"
    },
    {
        title: "Flexible team models",
        icon: "🤝",
        description: "Ramp up and down your teams as needed. Part of your team or independent."
    },
    {
        title: "Agile & Iterative",
        description: "We use sprint-based, milestone-driven approach to deliver your product on time and on budget.",
        icon: "🔄"
    },
    {
        title: "Security and Performance-first",
        description: "We have proven expertise in building secure and performant products.",
        icon: "⚡"
    },
    {
        title: "Deep Tech and Domain Expertise",
        description: "We have a very deep and domain expertise.",
        icon: "🤵"
    }
];

