
import type { SeoData } from '$lib/types/seo';
import {
    PUBLIC_GOOGLE_ANALYTICS_ID,
    PUBLIC_VITE_ENVIRONMENT,
    PUBLIC_BASE_URL,
    PUBLIC_COMPANY_NAME,
    PUBLIC_COMPANY_FULL_NAME,
    PUBLIC_DESCRIPTION,
    PUBLIC_WEBSITE_KEYWORDS,
    PUBLIC_LINKEDIN_LINK,
    PUBLIC_TWITTER_LINK,
    PUBLIC_CONTACT_EMAIL,
    PUBLIC_CONTACT_PHONE,
} from '$env/static/public';

//////////////////////////////////////////////////////////////////////////

export const defaultSeoData: SeoData = {

    title: PUBLIC_COMPANY_NAME,
    description: PUBLIC_DESCRIPTION,
    image: `${PUBLIC_BASE_URL}/images/cover.jpg`,
    url: PUBLIC_BASE_URL,
    keywords: PUBLIC_WEBSITE_KEYWORDS,
    cardImage: `${PUBLIC_BASE_URL}/images/cover.jpg`,
    googleAnalyticsId: PUBLIC_GOOGLE_ANALYTICS_ID,
    companyName: PUBLIC_COMPANY_NAME,
    logo: `${PUBLIC_BASE_URL}/images/logo.svg`,
    sameAs: [
        PUBLIC_LINKEDIN_LINK,
        PUBLIC_TWITTER_LINK
    ],
    contactPoint: {
        telephone: PUBLIC_CONTACT_PHONE,
        contactType: 'Customer Service',
    }
};

export const isDevelopment = PUBLIC_VITE_ENVIRONMENT === 'development';
export const isProduction = PUBLIC_VITE_ENVIRONMENT === 'production';
