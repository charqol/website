
export interface SeoData {
    title: string;
    description: string;
    image: string;
    url: string;
    keywords: string | undefined;
    cardImage: string;
    googleAnalyticsId: string;
    companyName: string;
    logo: string;
    sameAs: string[];
    contactPoint: {
        telephone: string;
        contactType: string;
    };
};
