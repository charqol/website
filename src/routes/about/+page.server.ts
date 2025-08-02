import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the "About Us" page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'About Us',
        description: 'Learn about Inflection Zone Lab - our mission, values, and the expert team behind our innovative software development solutions.',
        keywords: 'about us, company vision, software development team, our values, tech experts, software solutions',
        url: `${defaultSeoData.url}/about`,
        image: `${defaultSeoData.url}/images/aboutus/aboutus-hero.jpg`
    };

    return {
        seo: seoData
    };
};
