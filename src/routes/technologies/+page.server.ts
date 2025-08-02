import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the Privacy Policy page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Technologies We Use',
        description: 'Explore the wide range of modern technologies we leverage to build robust, scalable, and innovative software solutions.',
        keywords: 'technologies, software development, programming languages, frameworks, tools, software engineering, digital products, market-ready, startup, enterprise, ideation, market-ready digital products, product development, digital product development, product engineering services',
        url: `${defaultSeoData.url}/technologies`,
        image: `${defaultSeoData.url}/images/technologies/technologies-hero.jpg`
    };

    return {
        seo: seoData
    };
};
