export interface HeroSlide {
    title: string;
    description: string;
    image: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    alignment?: 'left' | 'right';
}
