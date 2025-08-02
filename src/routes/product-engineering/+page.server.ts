import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the Privacy Policy page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Product Engineering Services',
        description: 'From Ideation to Market-Ready Digital Products - We partner with startups and enterprises to bring bold ideas to life.',
        keywords: 'product engineering, digital products, market-ready, startup, enterprise, ideation, market-ready digital products, product development, digital product development, product engineering services',
        url: `${defaultSeoData.url}/product-engineering`,
        image: `${defaultSeoData.url}/images/product-engineering/product-engineering-hero.jpg`
    };

    return {
        seo: seoData
    };
};
