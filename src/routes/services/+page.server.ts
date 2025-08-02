import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the Privacy Policy page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Services',
        description: 'Explore our comprehensive range of software development services designed to enhance your business capabilities.',
        keywords: 'software development, software engineering, software solutions, software development services, software development company, software development agency, software development services company, software development agency company, software development services agency, software development agency services',
        url: `${defaultSeoData.url}/services`,
        image: `${defaultSeoData.url}/images/services/services-hero.jpg`
    };

    return {
        seo: seoData
    };
};
