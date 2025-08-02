import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the Privacy Policy page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Privacy Policy',
        description: 'Our commitment to protecting your privacy and personal data. Learn how we collect, use, and safeguard your information.',
        keywords: 'privacy policy, data protection, personal data, GDPR, privacy rights, data security, information collection, cookies policy',
        url: `${defaultSeoData.url}/privacy-policy`
    };

    return {
        seo: seoData
    };
};
