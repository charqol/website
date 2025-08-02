
export interface IndustrySolutionMetadata {
    title: string;
    description: string;
    features: string[];
    image: string;
}

export interface CaseStudyMetadata {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    TechnologyStack: string[];
}

export interface InfographicMetadata {
    title: string;
    description: string;
    image: string;
}

export interface HeroMetadata {
    title: string;
    description: string;
    image: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}

export interface CallToActionMetadata {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
}

export interface IndustryMetadata {
    title: string;
    description: string;
    hero: HeroMetadata;
    solutions: IndustrySolutionMetadata[];
    caseStudies: CaseStudyMetadata[];
    infographics: InfographicMetadata[];
    cta: CallToActionMetadata;
}
