import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Manufacturing Software Solutions',
        description: 'Optimize your manufacturing operations with our cutting-edge software solutions. From production planning to quality control, we help manufacturers increase efficiency and reduce costs.',
        keywords: 'manufacturing software, production management, industrial automation, factory software, manufacturing solutions, production planning, quality control, supply chain management, industrial IoT, smart manufacturing',
        url: `${defaultSeoData.url}/industries/manufacturing`,
        image: `${defaultSeoData.url}/images/industries/manufacturing/manufacturing-hero.jpg`
    };

    return {
        seo: seoData
    };
};
