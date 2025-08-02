export interface ERPModule {
    id: string;
    name: string;
    slug: string;
    icon: string;
    shortDescription: string;
    fullDescription: string;
    keyFeatures: string[];
    targetIndustries: string[];
    benefits: string[];
    integrations: string[];
    screenshots: string[];
    useCases: UseCase[];
}

export interface UseCase {
    title: string;
    description: string;
    industry: string;
    benefits: string[];
}

export interface PricingPlan {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    maxUsers: number;
    includedModules: string[];
    features: string[];
    support: string;
    popular?: boolean;
}