export interface Technology {
    name: string;
    icon?: string; // Path to logo/icon
    description?: string;
    link?: string; // Optional link to official site
}

export interface TechnologyCategory {
    name: string;
    technologies: Technology[];
}
