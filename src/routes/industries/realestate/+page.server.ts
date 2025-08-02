import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Real Estate Software Solutions',
        description: 'Transform your real estate business with our innovative software solutions. From property management to CRM systems, we help real estate professionals streamline operations and enhance customer experiences.',
        keywords: 'real estate software, property management, real estate CRM, property technology, real estate solutions, property management software, real estate technology, property listing, real estate automation, proptech',
        url: `${defaultSeoData.url}/industries/realestate`,
        image: `${defaultSeoData.url}/images/industries/realestate/realestate-hero.jpg`
    };

    return {
        seo: seoData
    };
};
