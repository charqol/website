import type { PageServerLoad } from './$types';
import { defaultSeoData } from '$lib/data/seo';
import type { SeoData } from '$lib/types/seo';

///////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async () => {

  // Customize SEO data for the "About Us" page
  const seoData: SeoData = {
    ...defaultSeoData,
    title: 'Contact Us',
    description: 'Get in touch with our team to discuss your software development needs and discover how we can help your business grow.',
    keywords: 'contact, get in touch, software development, business inquiry, project consultation, tech support, software solutions, contact form, Inflection Zone Lab',
    url: `${defaultSeoData.url}/contact`,
    image: `${defaultSeoData.url}/images/accelerators/accelerators-hero.jpg`
  };

  return {
    seo: seoData
  };

};
