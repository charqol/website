import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Financial Software Solutions',
        description: 'Transform your financial operations with our secure and innovative software solutions. From banking systems to financial analytics, we help financial institutions optimize processes and enhance security.',
        keywords: 'financial software, banking software, fintech, financial technology, financial solutions, banking solutions, financial management, financial analytics, payment processing, financial security',
        url: `${defaultSeoData.url}/industries/finance`,
        image: `${defaultSeoData.url}/images/industries/finance/finance-3.jpg`
    };

    return {
        seo: seoData
    };
};
