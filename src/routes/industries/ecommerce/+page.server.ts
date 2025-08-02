import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'E-commerce Software Solutions',
        description: 'Elevate your online business with our comprehensive e-commerce solutions. From shopping carts to inventory management, we help online retailers optimize operations and enhance customer experiences.',
        keywords: 'e-commerce software, online store, shopping cart, e-commerce solutions, online retail, e-commerce platform, inventory management, payment processing, order management, digital commerce',
        url: `${defaultSeoData.url}/industries/ecommerce`,
        image: `${defaultSeoData.url}/images/industries/ecommerce/ecommerce-hero.jpg`,
    };

    return {
        seo: seoData
    };
};

