import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const seoData: SeoData = {
        ...defaultSeoData,
        title: 'Education Software Solutions',
        description: 'Revolutionize education with our innovative software solutions. From learning management systems to student information systems, we help educational institutions enhance teaching and learning experiences.',
        keywords: 'education software, learning management system, LMS, student information system, e-learning, educational technology, school management, online education, classroom software, education solutions',
        url: `${defaultSeoData.url}/industries/education`,
        image: `${defaultSeoData.url}/images/industries/education/education-hero.jpg`
    };

    return {
        seo: seoData
    };
};
