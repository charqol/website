import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the FAQ page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'FAQ',
        description: 'Answers to common questions about our services and products.',
        keywords: 'Frequently Asked Questions, FAQ, Help, Support',
        url: `${defaultSeoData.url}/faq`
    };

    return {
        seo: seoData
    };
};
