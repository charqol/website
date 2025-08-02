import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the Terms of Use page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Terms of Use',
        description: 'Please read these terms and conditions carefully before using our services. These terms govern your use of our website and services.',
        keywords: 'terms of use, terms and conditions, legal terms, user agreement, service terms, software development terms, licensing, intellectual property',
        url: `${defaultSeoData.url}/terms`
    };

    return {
        seo: seoData
    };
};
