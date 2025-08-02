import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import { type Load } from '@sveltejs/kit';

export const load: Load = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Healthcare Software Solutions',
        description: 'Transform healthcare delivery with our innovative software solutions. From EHR systems to telemedicine platforms, we help healthcare providers improve patient care and operational efficiency.',
        keywords: 'healthcare software, medical software, EHR systems, telemedicine, healthcare IT, medical technology, healthcare solutions, hospital management, patient care software, healthcare digital transformation',
        url: `${defaultSeoData.url}/industries/healthcare`,
        image: `${defaultSeoData.url}/images/industries/healthcare/healthcare-hero.jpg`
    };

    return {
        seo: seoData
    };
};
