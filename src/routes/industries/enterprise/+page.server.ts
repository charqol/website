import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Enterprise Software Solutions',
        description: 'Empower your enterprise with our comprehensive software solutions. From ERP systems to business intelligence tools, we help large organizations streamline operations and drive growth.',
        keywords: 'enterprise software, ERP systems, business intelligence, enterprise solutions, corporate software, business management, enterprise applications, business analytics, enterprise IT, digital transformation',
        url: `${defaultSeoData.url}/industries/enterprise`,
        image: `${defaultSeoData.url}/images/industries/enterprise/enterprise-hero.jpg`
    };

    return {
        seo: seoData
    };
};
