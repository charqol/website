import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Customize SEO data for the "Accelerators" page
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Accelerators',
        description: 'Discover our powerful software accelerators and frameworks designed to speed up your development process and deliver high-quality solutions faster.',
        keywords: 'software accelerators, development frameworks, rapid development, code templates, productivity tools, software solutions',
        url: `${defaultSeoData.url}/accelerators`,
        image: `${defaultSeoData.url}/images/accelerators/accelerators-hero.jpg`
    };

    return {
        seo: seoData
    };
};
