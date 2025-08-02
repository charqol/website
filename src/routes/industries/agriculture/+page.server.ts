import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Agriculture Software Solutions',
        description: 'We deliver innovative agricultural technology solutions that optimize farming operations and enhance productivity through smart farming practices.',
        keywords: 'agriculture software, farm management, precision agriculture, agtech, farming software, agricultural technology, crop management, livestock management, agricultural solutions, smart farming',
        url: `${defaultSeoData.url}/industries/agriculture`,
        image: `${defaultSeoData.url}/images/industries/agriculture/agriculture-hero.jpg`
    };

    return {
        seo: seoData
    };
};
