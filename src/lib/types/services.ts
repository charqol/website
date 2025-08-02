export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    technologies?: string[];
    features?: string[];
}

export interface Technology {
    name: string;
    category: TechnologyCategory;
    icon: string;
}

export enum TechnologyCategory {
    Backend = 'Backend',
    FrontendWeb = 'Frontend Web',
    FrontendMobile = 'Frontend Mobile',
    CloudDevOps = 'Cloud and DevOps',
    Database = 'Database',
    AI_ML = 'AI/ML',
    Blockchain = 'Blockchain',
    CustomSoftware = 'Custom Software Development',
    CyberSecurity = 'Cyber Security',
    MathematicalAlgorithms = 'Mathematical Algorithms',
    DataAnalytics = 'Data Analytics'
}
