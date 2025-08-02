// Define a new interface for differentiator objects
export interface Differentiator {
    title: string;
    description: string;
    image: string;
}

export interface Expertise {
    title: string;
    description: string;
    landingImage?: string;
    heroImage?: string;
    icon: string;
    link: string;
    differentiators: Differentiator[];
    technologies?: string[];
    keywords?: string[];
    callToAction: {
        title: string;
        description: string;
        primaryButtonText: string;
        primaryButtonLink: string;
        backgroundColor: string;
        secondaryButtonText?: string;
        secondaryButtonLink?: string;
    };
}
