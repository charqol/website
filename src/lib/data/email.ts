import {
    PUBLIC_BASE_URL,
    PUBLIC_COMPANY_NAME,
    PUBLIC_COMPANY_FULL_NAME,
    PUBLIC_LINKEDIN_LINK,
    PUBLIC_TWITTER_LINK,
    PUBLIC_CONTACT_EMAIL,
    PUBLIC_CONTACT_PHONE,
} from '$env/static/public';

export function getBasicInfo () {
    return {
        Website: PUBLIC_BASE_URL,
        LinkedIn: PUBLIC_LINKEDIN_LINK,
        Twitter: PUBLIC_TWITTER_LINK,
        LinkedLogoLink: `${PUBLIC_BASE_URL}/icons/linkedin.png`,
        TwitterLogoLink: `${PUBLIC_BASE_URL}/icons/x.png`,
        OrganizationName: PUBLIC_COMPANY_NAME,
        OrganizationFullName: PUBLIC_COMPANY_FULL_NAME,
        UnsubscribeLink: `${PUBLIC_BASE_URL}/unsubscribe`,
        ContactLink: `${PUBLIC_BASE_URL}/contact`,
        PrivacyPolicyLink: `${PUBLIC_BASE_URL}/privacy-policy`,
        TermsOfServiceLink: `${PUBLIC_BASE_URL}/terms`,
        FaqLink: `${PUBLIC_BASE_URL}/faq`,
        // OrganizationLogo: `${PUBLIC_BASE_URL}/images/logo.svg`,
        OrganizationLogo: `${PUBLIC_BASE_URL}/wp-content/uploads/2022/03/FullColor_IconOnly_1024x1024_72dpi_transparent.png`,
        SupportPhone: PUBLIC_CONTACT_PHONE,
        SupportEmail: PUBLIC_CONTACT_EMAIL,
        CurrentYear: new Date().getFullYear(),
    };
};
