import type { Expertise } from '$lib/types/expertise';



export const services: Expertise[] = [
    {
        title: 'Backend Microservices',
        description: 'Scalable, resilient, and maintainable microservices architecture in multiple stacks',
        link: '/services/microservices',
        landingImage: '/images/expertise/backend-microservices-small.jpg',
        heroImage: '/images/services/microservices-hero.jpg',
        icon: '/images/expertise/icons/backend-microservices-2-50.png',
        differentiators: [
            {
                title: "Language of the choice (Node.js, Python, Java, Go, .NET Core and even C++!)",
                description: "We offer complete flexibility in programming language selection, allowing you to leverage your team's existing expertise or choose the best tool for specific workloads.",
                image: "/images/services/differentiators/development.png"
            },
            {
                title: "Framework of the choice (Express.js, NestJS, Spring Boot, FastAPI, Minimal API, Gin and more...)",
                description: "Build upon battle-tested frameworks that maximize developer productivity while ensuring performance and reliability for your specific use case.",
                image: "/images/services/differentiators/framework.png"
            },
            {
                title: "Domain-driven design and event-driven architecture",
                description: "Structure your software around business domains and use events to coordinate between services, increasing maintainability and flexibility.",
                image: "/images/services/differentiators/ddd.png"
            },
            {
                title: "Automated testing and continuous deployment",
                description: "Ensure reliability with comprehensive test suites and streamlined deployment pipelines that catch issues early and deliver value faster.",
                image: "/images/services/differentiators/testing.png"
            },
            {
                title: "Scalable and resilient infrastructure",
                description: "Design systems that gracefully handle increased load and recover automatically from failures to provide consistent user experiences.",
                image: "/images/services/differentiators/scalable.png"
            },
            {
                title: "Monitoring and observability solutions- OpenTelemetry, Prometheus",
                description: "Gain deep insights into your application's behavior with comprehensive metrics, logs, and traces to quickly identify and resolve issues.",
                image: "/images/services/differentiators/monitoring.png"
            },
            {
                title: "Cloud-native and containerized deployments",
                description: "Leverage containers and cloud services to simplify deployment, improve resource utilization, and enable dynamic scaling.",
                image: "/images/services/differentiators/cloud.png"
            },
            {
                title: "Microservices architecture best practices",
                description: "Apply proven patterns for service boundaries, communication, data management, and deployment to avoid common pitfalls.",
                image: "/images/services/differentiators/best-practices.png"
            },
            {
                title: "API design and documentation",
                description: "Create intuitive, consistent, and well-documented APIs that developers love to use and that stand the test of time.",
                image: "/images/services/differentiators/api.png"
            },
            {
                title: "Performance optimization and monitoring",
                description: "Identify and eliminate bottlenecks through profiling, benchmarking, and continuous performance measurement.",
                image: "/images/services/differentiators/performance.png"
            },
            {
                title: "Security and authentication mechanisms",
                description: "Implement robust security controls and authentication systems to protect sensitive data and prevent unauthorized access.",
                image: "/images/services/differentiators/security.png"
            },
            {
                title: "Cloud-native, Serverless and containerized deployments",
                description: "Reduce operational overhead and costs while improving scalability by leveraging modern deployment paradigms.",
                image: "/images/services/differentiators/docker.png"
            },
            {
                title: "CI/CD pipelines and automation",
                description: "Accelerate delivery with automated build, test, and deployment workflows that increase reliability and reduce manual effort.",
                image: "/images/services/differentiators/cicd.png"
            },
            {
                title: "Cloud provider agnostic - AWS, Azure, GCP, etc.",
                description: "Avoid vendor lock-in with designs that can run on any major cloud platform, giving you flexibility and leverage.",
                image: "/images/services/differentiators/aws.png"
            },
            {
                title: "Cost Auditing and Optimization",
                description: "Identify opportunities to reduce cloud spending without sacrificing performance through right-sizing, reserved instances, and architecture improvements.",
                image: "/images/services/differentiators/cost.png"
            }
        ],
        technologies: [
            "Node.js", "Python", "Java", "Go", ".NET Core", "C++",
            "Express.js", "NestJS", "Spring Boot", "FastAPI", "Gin",
            "Docker", "Kubernetes", "AWS", "Azure", "GCP",
            "OpenTelemetry", "Prometheus", "Grafana", "REST", "GraphQL", "gRPC"
        ],
        callToAction: {
            title: "Want to simplify, rewrite, or modernize your backend?",
            description: "Let us understand your needs and provide a tailored solution. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "blue"
        }
    },
    {
        title: 'Agentic AI & Chatbots',
        description: 'Conversational agents, Tools, MCP, Deep Learning, Intelligent automation and custom models',
        link: '/services/ai',
        landingImage: '/images/expertise/ai-workflows-small.jpg',
        heroImage: '/images/services/ai-hero.jpg',
        icon: '/images/expertise/icons/workflows-50.png',
        differentiators: [
            {
                title: "LLM integration and fine-tuning",
                description: "Integrate your app workloads through Langchain, LlamaIndex, and more. Seamlessly connect large language models to your applications, enabling advanced natural language understanding and generation.",
                image: "/images/services/differentiators/ai.png"
            },
            {
                title: "Multi-agent orchestration and workflows",
                description: "Create systems of specialized AI agents that collaborate to solve complex problems through coordinated workflows.",
                image: "/images/services/differentiators/multi-agent.png"
            },
            {
                title: "Context-aware conversation routing and management",
                description: "Intelligently direct conversations based on content, intent, and history to provide seamless user experiences across complex domains.",
                image: "/images/services/differentiators/chat-3.png"
            },
            {
                title: "Custom knowledge base integration (RAG)",
                description: "Connect AI systems to your proprietary data using retrieval-augmented generation, ensuring accurate and up-to-date responses.",
                image: "/images/services/differentiators/rag-2.png"
            },
            {
                title: "Enterprise-grade security and compliance",
                description: "Implement robust security controls and compliance measures to protect sensitive data and meet regulatory requirements.",
                image: "/images/services/differentiators/security-2.png"
            },
            {
                title: "Use consent-based data collection and processing",
                description: "Build trust with transparent data practices that respect user privacy and give users control over their information.",
                image: "/images/services/differentiators/brochure.png"
            },
            {
                title: "Document management and storage",
                description: "Efficiently process, index, and retrieve documents with AI-powered systems that understand document structure and content.",
                image: "/images/services/differentiators/documents.png"
            },
            {
                title: "Multi-language support",
                description: "Create inclusive experiences with AI systems that understand and respond in multiple languages with cultural sensitivity.",
                image: "/images/services/differentiators/language.png"
            },
            {
                title: "Multi-modal support (text, audio, video)",
                description: "Engage users through their preferred communication channels with AI that understands text, speech, images, and video.",
                image: "/images/services/differentiators/play.png"
            },
            {
                title: "Customizable and scalable architecture",
                description: "Design systems that grow with your needs and can be extended with new capabilities as requirements evolve.",
                image: "/images/services/differentiators/performance-2.png"
            },
            {
                title: "Real-time analytics and monitoring",
                description: "Gain insights into system performance and user interactions to continuously improve your AI solutions.",
                image: "/images/services/differentiators/analytics-2.png"
            },
            {
                title: "Multi-channel support",
                description: "Web, mobile, WhatsApp, Telegram and more. Meet users where they are with consistent AI experiences across web, mobile, messaging platforms, and more.",
                image: "/images/services/differentiators/whatsapp.png"
            },
            {
                title: "Pick your features",
                description: "RAG-QnA, Reminders, Custom Workflows, Questionnaire, Scheduler, etc. Choose from a menu of proven AI capabilities to quickly assemble the perfect solution for your specific needs.",
                image: "/images/services/differentiators/checklist.png"
            }
        ],
        technologies: [
            "Python", "Langchain", "LlamaIndex", "OpenAI API", "Hugging Face",
            "TensorFlow", "PyTorch", "Vector DBs (Pinecone, Chroma)",
            "Node.js", "WhatsApp API", "Telegram API", "Docker", "AWS SageMaker"
        ],
        callToAction: {
            title: "Need your software stack to be at the cutting edge?",
            description: "Writing AI agents, Intelligent workflows, Tool Integrations, and more? Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "purple"
        }
    },
    {
        title: 'Cloud Ops',
        description: 'Secure, scalable, flexible and cost-effective Cloud infrastructure, Infrastructure as code (IaC), DevOps automation',
        link: '/services/cloud-ops',
        landingImage: '/images/expertise/cloud-ops.jpg',
        heroImage: '/images/services/cloud-ops-hero.jpg',
        icon: '/images/expertise/icons/cloud-50.png',
        differentiators: [
            {
                title: "Infrastructure as Code (IaC) expertise- Terraform and Pulumi",
                description: "Define and manage your infrastructure through code, enabling version control, automated deployment, and consistent environments.",
                image: "/images/services/differentiators/iac.png"
            },
            {
                title: "Cloud-native, Serverless and containerized deployments",
                description: "Leverage modern deployment paradigms to reduce operational overhead while improving scalability and resource utilization.",
                image: "/images/services/differentiators/cloud.png"
            },
            {
                title: "Best practices and finetuned templates for each use-case",
                description: "Start with battle-tested configurations optimized for specific workloads, saving time and avoiding common pitfalls.",
                image: "/images/services/differentiators/best-practices.png"
            },
            {
                title: "Automated scaling and failover",
                description: "Build systems that automatically adjust to changing demand and recover from failures without manual intervention.",
                image: "/images/services/differentiators/grow.png"
            },
            {
                title: "Security-first architecture design",
                description: "Integrate security at every layer with defense-in-depth strategies, least privilege access, and continuous validation.",
                image: "/images/services/differentiators/security-first.png"
            },
            {
                title: "Multi-provider deployment - AWS, Azure, GCP, Kubernetes, etc.",
                description: "Avoid vendor lock-in with cloud-agnostic designs that can run on any major platform, providing flexibility and leverage.",
                image: "/images/services/differentiators/multi-cloud.png"
            },
            {
                title: "Cloud-native microservices design (12-factor apps)",
                description: "Apply proven methodologies for building services that work seamlessly in modern cloud environments.",
                image: "/images/services/differentiators/12-factor.png"
            },
            {
                title: "Compliance readiness (HIPAA, GDPR, ISO, SOC2)",
                description: "Design systems with regulatory requirements in mind, simplifying audit processes and reducing compliance risk.",
                image: "/images/services/differentiators/compliance.png"
            },
            {
                title: "Multi-environment deployment strategies",
                description: "Implement consistent deployment pipelines across development, testing, staging, and production environments.",
                image: "/images/services/differentiators/clients.png"
            },
            {
                title: "Cost optimization, auditing and monitoring",
                description: "Control cloud spending through architecture choices, resource management, and continuous cost visibility.",
                image: "/images/services/differentiators/cost-2.png"
            },
            {
                title: "CI/CD pipelines and automation",
                description: "Accelerate delivery with automated build, test, and deployment workflows that increase reliability and reduce manual effort.",
                image: "/images/services/differentiators/cicd.png"
            },
            {
                title: "On-premises Kubernetes and Docker deployments",
                description: "Apply cloud-native practices to on-premises infrastructure, improving resource utilization and operational consistency.",
                image: "/images/services/differentiators/server-2.png"
            }
        ],
        technologies: [
            "AWS", "Azure", "GCP", "Terraform", "Pulumi", "Ansible",
            "Docker", "Kubernetes", "Serverless (Lambda, Functions)",
            "CI/CD (GitHub Actions, Jenkins, GitLab CI)", "Prometheus", "Grafana", "ELK Stack"
        ],
        callToAction: {
            title: "Cloud cost overruns? Not able to scale?",
            description: "Build new cloud infra. Automate provisioning with Terraform/Pulumi? We can help you out. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "green"
        }
    },
    {
        title: 'Web and Mobile Apps',
        description: 'Cross-platform and native mobile applications',
        link: '/services/apps',
        landingImage: '/images/expertise/mobile-app-small.jpg',
        heroImage: '/images/services/apps-hero.jpg',
        icon: '/images/expertise/icons/mobile-app-50.png',
        differentiators: [
            {
                title: "UI/UX expertise at hand",
                description: "Create intuitive, engaging user experiences with professional design expertise integrated into the development process.",
                image: "/images/services/differentiators/ux.png"
            },
            {
                title: "Mobile - Flutter & .NET MAUI for cross-platform development",
                description: "Build once and deploy everywhere with modern frameworks that provide native-like performance across iOS and Android.",
                image: "/images/services/differentiators/cross-platform.png"
            },
            {
                title: "Native performance optimization",
                description: "Achieve smooth, responsive experiences through platform-specific optimizations and performance-focused development practices.",
                image: "/images/services/differentiators/speed.png"
            },
            {
                title: "Web - Svelte, React (NextJS), Vue, and more for web development",
                description: "Leverage modern frontend frameworks that enable rapid development of rich, interactive web applications.",
                image: "/images/services/differentiators/framework-2.png"
            },
            {
                title: "Server side rendering (SSR) and static site generation (SSG)",
                description: "Improve performance, SEO, and user experience with modern rendering techniques that deliver content faster.",
                image: "/images/services/differentiators/development-2.png"
            },
            {
                title: "Progressive Web App capabilities",
                description: "Create web applications that work offline, can be installed on devices, and provide app-like experiences.",
                image: "/images/services/differentiators/mobile.png"
            },
            {
                title: "Responsive and adaptive design",
                description: "Build interfaces that automatically adjust to different screen sizes and device capabilities for consistent experiences.",
                image: "/images/services/differentiators/responsive.png"
            },
            {
                title: "Offline-first architecture",
                description: "Design applications that work seamlessly without an internet connection and synchronize when connectivity returns.",
                image: "/images/services/differentiators/offline.png"
            },
            {
                title: "Best practices for secure authentication and authorization",
                description: "Implement robust security controls that protect user data while providing smooth login experiences.",
                image: "/images/services/differentiators/fingerprint.png"
            },
            {
                title: "API integration (REST, GraphQL, WebSockets, etc.) and data synchronization",
                description: "Connect to backend services using modern protocols with efficient data loading and real-time capabilities.",
                image: "/images/services/differentiators/api.png"
            },
            {
                title: "Performance optimization and monitoring",
                description: "Create lightning-fast applications through code optimization, efficient asset management, and continuous performance tracking.",
                image: "/images/services/differentiators/analytics-2.png"
            },
            {
                title: "Real-time analytics and monitoring",
                description: "Gain insights into user behavior and application performance to guide ongoing improvements.",
                image: "/images/services/differentiators/analyze-2.png"
            },
            {
                title: "Theming and localization",
                description: "Support multiple languages and visual themes to create personalized experiences for diverse user bases.",
                image: "/images/services/differentiators/theme.png"
            }
        ],
        technologies: [
            "Svelte/SvelteKit", "React/Next.js", "Vue/Nuxt.js", "Flutter", ".NET MAUI",
            "TypeScript", "JavaScript", "HTML5", "CSS3/TailwindCSS",
            "Node.js", "REST APIs", "GraphQL", "WebSockets", "PWAs", "Vite"
        ],
        callToAction: {
            title: "Have an idea for a new app? Web or Mobile?",
            description: "A quick Proof of Concept? Or a full fledged app? Let us understand your needs and provide a tailored solution. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "yellow"
        }
    },
    {
        title: 'Embedded Systems',
        description: 'In-depth capabilities in embedded systems programming and hardware-software co-design',
        link: '/services/embedded',
        landingImage: '/images/expertise/embedded.jpg',
        heroImage: '/images/services/embedded-hero.jpg',
        icon: '/images/expertise/icons/embedded-64.png',
        differentiators: [
            {
                title: "Embedded systems design and development",
                description: "Create reliable, efficient systems tailored to specific hardware platforms and operational requirements.",
                image: "/images/services/differentiators/electronics.png"
            },
            {
                title: "Real-time systems programming",
                description: "Develop systems with deterministic timing guarantees for applications where precise timing is critical.",
                image: "/images/services/differentiators/monitoring.png"
            },
            {
                title: "Device driver development",
                description: "Build software interfaces between hardware components and higher-level applications for seamless integration.",
                image: "/images/services/differentiators/device-driver.png"
            },
            {
                title: "Firmware development",
                description: "Create low-level software that controls hardware functions with optimized code for specific microcontrollers and processors.",
                image: "/images/services/differentiators/processor.png"
            },
            {
                title: "RTOS and kernel programming",
                description: "Work with real-time operating systems to manage tasks, scheduling, and resource allocation in embedded environments.",
                image: "/images/services/differentiators/linux.png"
            },
            {
                title: "C/C++ programming",
                description: "Leverage low-level programming expertise for maximum performance and direct hardware control in resource-constrained environments.",
                image: "/images/services/differentiators/cpp.png"
            },
            {
                title: "Hardware-software co-design",
                description: "Optimize system performance by considering hardware and software design together from the beginning of development.",
                image: "/images/services/differentiators/circuit.png"
            },
            {
                title: "Embedded UI development",
                description: "Create intuitive interfaces for devices with limited display capabilities and processing power.",
                image: "/images/services/differentiators/embedded-ui.png"
            },
            {
                title: "Embedded systems testing and validation",
                description: "Ensure reliability through comprehensive testing strategies adapted for embedded environments.",
                image: "/images/services/differentiators/validation.png"
            },
            {
                title: "Embedded systems documentation and maintenance",
                description: "Develop clear documentation and maintenance procedures for long-lived embedded systems.",
                image: "/images/services/differentiators/documentation.png"
            },
            {
                title: "Expertise with peripherals and sensors",
                description: "Integrate and optimize diverse sensors and peripheral devices into cohesive embedded systems.",
                image: "/images/services/differentiators/connections-2.png"
            }
        ],
        technologies: [
            "C", "C++", "Rust", "MicroPython", "RTOS (FreeRTOS, Zephyr)",
            "PlatformIO", "ARM Cortex", "ESP32/ESP8266", "Raspberry Pi",
            "Linux Kernel Dev", "Yocto", "MQTT", "Modbus", "CAN bus"
        ],
        callToAction: {
            title: "Need to build a custom embedded system?",
            description: "We can help you with that. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "teal"
        }
    },
    {
        title: 'Data Operations',
        description: 'Expertise in data pipelines, ingestion, integration, analytics, visualization, and more...',
        link: '/services/data-ops',
        landingImage: '/images/expertise/data-analytics-small.jpg',
        heroImage: '/images/services/data-ops-hero.jpg',
        icon: '/images/expertise/icons/analytics-64.png',
        differentiators: [
            {
                title: "Data Pipelines, Data Ingestion & Integration",
                description: "Build robust pipelines that efficiently collect, transform, and load data from diverse sources into unified repositories.",
                image: "/images/services/differentiators/data-pipelines.png"
            },
            {
                title: "Scalable ETL pipeline design",
                description: "Create data processing workflows that grow with your needs and handle increasing data volumes without performance degradation.",
                image: "/images/services/differentiators/etl.png"
            },
            {
                title: "Advanced analytics and visualization",
                description: "Transform raw data into actionable insights with sophisticated analysis techniques and intuitive visual representations.",
                image: "/images/services/differentiators/visualization.png"
            },
            {
                title: "Data quality and governance",
                description: "Ensure data accuracy, completeness, and compliance through automated validation and governance frameworks.",
                image: "/images/services/differentiators/data-quality.png"
            },
            {
                title: "Machine learning integration",
                description: "Enhance data pipelines with predictive capabilities and automated decision-making through integrated machine learning models.",
                image: "/images/services/differentiators/brain.png"
            },
            {
                title: "Segmentation & Clustering",
                description: "Identify natural groupings and patterns in your data to enable targeted strategies and personalized experiences.",
                image: "/images/services/differentiators/clustering.png"
            },
            {
                title: "Edge Computing & Real-time Data Processing",
                description: "Process data where it's generated to reduce latency and enable immediate insights and actions.",
                image: "/images/services/differentiators/thermometer.png"
            },
            {
                title: "Workflow Automation",
                description: "Eliminate manual tasks with automated data workflows that trigger actions based on conditions and events.",
                image: "/images/services/differentiators/workflow.png"
            },
            {
                title: "DataOps & DevOps Integration",
                description: "Apply software engineering best practices to data operations for increased reliability, velocity, and quality.",
                image: "/images/services/differentiators/cloud-sync.png"
            },
            {
                title: "Security & Compliance",
                description: "Protect sensitive data with encryption, access controls, and compliance frameworks tailored to your industry.",
                image: "/images/services/differentiators/data-security.png"
            }
        ],
        technologies: [
            "Python", "SQL", "Apache Spark", "Apache Kafka", "Airflow", "dbt",
            "Pandas", "AWS (S3, Glue, Redshift, EMR)", "Azure (Data Factory, Synapse)",
            "GCP (BigQuery, Dataflow)", "Docker", "Looker", "Tableau", "Power BI"
        ],
        callToAction: {
            title: "Want to make sense of your data? Need to streamline data movement?",
            description: "We can help you with that. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "primary"
        }
    },
    {
        title: 'Algorithms & Modelling',
        description: 'Advanced mathematical modeling and algorithm development for complex and niche use-cases',
        link: '/services/algorithms',
        landingImage: '/images/expertise/algorithms-small.jpg',
        heroImage: '/images/services/algorithms-hero.jpg',
        icon: '/images/expertise/icons/algorithms-50.png',
        differentiators: [
            {
                title: "Robotics & Navigation",
                description: "Develop algorithms for motion planning, localization, mapping, and control in robotic systems.",
                image: "/images/services/differentiators/robotics.png"
            },
            {
                title: "Custom Algorithm Design",
                description: "Develop specialized algorithms tailored to your specific problem domain for optimal performance and accuracy.",
                image: "/images/services/differentiators/algorithms.png"
            },
            {
                title: "Mathematical Modelling & Simulation",
                description: "Create mathematical representations of real-world systems to predict behavior and optimize outcomes.",
                image: "/images/services/differentiators/maths.png"
            },
            {
                title: "Computer Vision",
                description: "Develop systems that can understand and analyze visual information from images and video streams.",
                image: "/images/services/differentiators/computer-vision.png"
            },
            {
                title: "Image Processing & Analysis",
                description: "Enhance and analyze images using advanced techniques for applications in medical imaging, remote sensing, and more.",
                image: "/images/services/differentiators/image-processing.png"
            },
            {
                title: "Scientific & Engineering Computation",
                description: "Implement numerical methods for solving complex scientific and engineering problems with high accuracy.",
                image: "/images/services/differentiators/matrix.png"
            },
            {
                title: "2D & 3D Geometric Algorithms",
                description: "Develop efficient algorithms for spatial data processing, computational geometry, and geometric modeling.",
                image: "/images/services/differentiators/geometry.png"
            },
            {
                title: "Computer Graphics",
                description: "Create algorithms for rendering, animation, and visual effects with optimal performance and quality.",
                image: "/images/services/differentiators/computer-graphics.png"
            },
            {
                title: "LiDAR data Processing, Mapping & Visualization",
                description: "Process and analyze 3D point cloud data for applications in mapping, robotics, and autonomous systems.",
                image: "/images/services/differentiators/lidar.png"
            },
            {
                title: "Optimization Techniques",
                description: "Apply advanced methods to find the best solutions within complex problem spaces with multiple constraints.",
                image: "/images/services/differentiators/optimization.png"
            },
            {
                title: "Machine Learning and Predictive Analytics",
                description: "Build models that learn from data to make accurate predictions and enable data-driven decision making.",
                image: "/images/services/differentiators/scatter.png"
            },
            {
                title: "Signal Processing Techniques",
                description: "Extract meaningful information from noisy data using advanced signal processing algorithms.",
                image: "/images/services/differentiators/voice-processing.png"
            },
            {
                title: "Parallel Processing Implementation",
                description: "Speed up computation by designing algorithms that efficiently utilize multiple processors or computing nodes.",
                image: "/images/services/differentiators/video-cards.png"
            },
            {
                title: "Algorithm Visualization Tools",
                description: "Create intuitive visualizations that help understand complex algorithms and their behavior.",
                image: "/images/services/differentiators/visualization-2.png"
            },
            {
                title: "Time Series Analysis & Forecasting",
                description: "Analyze temporal data patterns to predict future values and identify trends and anomalies.",
                image: "/images/services/differentiators/signal-processing.png"
            }
        ],
        technologies: [
            "Python", "C++", "MATLAB", "R", "NumPy", "SciPy", "Pandas",
            "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "CUDA",
            "Parallel Computing (MPI, OpenMP)", "Jupyter"
        ],
        callToAction: {
            title: "A really difficult problem to solve? Reduce the complexity?",
            description: "We have an expertise to solve those sticky problems. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "gray"
        }
    },
    {
        title: 'Bespoke Development',
        description: 'Something different and special? We can help you with that! Plenty of breadth there.',
        link: '/services/bespoke',
        landingImage: '/images/expertise/custom-software-development.jpg',
        heroImage: '/images/services/bespoke-hero.jpg',
        icon: '/images/expertise/icons/bespoke-development-50.png',
        differentiators: [
            {
                title: "Desktop UI Applications",
                description: "Flutter, ElectronJS, .NET MAUI, WinForms, WPF, etc. Build rich desktop applications with modern frameworks that provide native experiences across platforms.",
                image: "/images/services/differentiators/desktop.png"
            },
            {
                title: "Proof of Concepts (PoC)",
                description: "Rapidly create working prototypes to validate ideas and demonstrate feasibility before full development.",
                image: "/images/services/differentiators/project.png"
            },
            {
                title: "Legacy System Modernization",
                description: "Fix difficult to maintain codebases. Technical Debt Reduction. Systematically address accumulated shortcuts and compromises to improve long-term maintainability. Refactor and improve problematic code to enhance maintainability, performance, and reliability.",
                image: "/images/services/differentiators/legacy-modernization.png"
            },
            {
                title: "Re-architecture",
                description: "Transform existing systems with improved architecture and design patterns for future scalability and flexibility. Update and extend existing systems to incorporate modern technologies and integrate with new platforms.",
                image: "/images/services/differentiators/refactor.png"
            },
            {
                title: "Custom AI/ML models",
                description: "Training, Inference, and more. Develop specialized machine learning models tailored to your specific data and business problems.",
                image: "/images/services/differentiators/custom-ai.png"
            },
            {
                title: "Specialized Web and mobile apps",
                description: "Create applications with unique requirements and capabilities beyond standard templates and frameworks.",
                image: "/images/services/differentiators/specialized-apps.png"
            },
            {
                title: "Performance Analysis and Optimization",
                description: "Identify and eliminate bottlenecks to dramatically improve application speed and resource efficiency.",
                image: "/images/services/differentiators/curve.png"
            },
            {
                title: "Custom Applications for 3D Data Processing",
                description: "Geometry, Surfaces, Meshes, Voxels, Point Clouds, and more. Process and visualize complex 3D data for applications in design, simulation, and analysis.",
                image: "/images/services/differentiators/3d.png"
            },
            {
                title: "Custom Applications 3D Visualization",
                description: "Rendering & Simulation. Vulkan, DirectX, SceneGraphs and more. Create high-performance graphics and simulations using modern GPU programming techniques.",
                image: "/images/services/differentiators/3d-rendering.png"
            },
        ],
        technologies: [
            "ElectronJS", ".NET MAUI/WPF/WinForms", "Qt", "OpenGL/Vulkan/DirectX",
            "Game Engines (Unreal, Unity - custom)", "CAD/CAM APIs", "GIS Tools",
            "Custom Compilers/DSLs", "WebAssembly", "Any technology needed for the specific solution"
        ],
        callToAction: {
            title: "Want to build something custom? Overwhelmed by the legacy code?",
            description: "We have a track record of building custom solutions for a variety of areas and problems. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "blue"
        }
    },
    {
        title: "Digital Services",
        description: "We offer a range of digital services and consulting to help you achieve your goals. Contact us for a consultation.",
        link: "/services/digital-services",
        landingImage: "/images/expertise/digital-services-small.jpg",
        heroImage: "/images/services/digital-services-hero.jpg",
        icon: "/images/expertise/icons/digital-services-50.png",
        differentiators: [
            {
                title: "CTO as a Service",
                description: "Access executive-level technology leadership without the full-time cost, guiding your strategy and implementation.",
                image: "/images/services/differentiators/executive.png"
            },
            {
                title: "Development Partner",
                description: "Collaborate with a dedicated team that understands your business goals and works as an extension of your organization.",
                image: "/images/services/differentiators/deal.png"
            },
            {
                title: "Developer for Hire",
                description: "Quickly scale your team with skilled professionals who can integrate seamlessly and deliver value immediately.",
                image: "/images/services/differentiators/developer-2.png"
            },
            {
                title: "Extended Development Team",
                description: "Augment your in-house capabilities with specialized expertise that works under your direction as part of your team.",
                image: "/images/services/differentiators/connections-3.png"
            },
            {
                title: "Digital Transformation Consulting",
                description: "Reimagine your business processes and customer experiences with strategic technology adoption and change management.",
                image: "/images/services/differentiators/consulting.png"
            },
            {
                title: "Problem Focused Consulting",
                description: "Address specific technical challenges with targeted expertise and proven methodologies for rapid resolution.",
                image: "/images/services/differentiators/problem-consulting.png"
            },
            {
                title: "Technology Strategy and Roadmapping",
                description: "Develop clear, actionable plans for technology adoption and evolution aligned with your business objectives.",
                image: "/images/services/differentiators/strategy.png"
            }
        ],
        technologies: [
        ],
        callToAction: {
            title: "Need to close an operational gap?",
            description: "We have a broad range of digital services to help you out. Contact us for a consultation.",
            primaryButtonText: "Get In Touch",
            primaryButtonLink: "/contact",
            backgroundColor: "teal"
        }
    }
];
