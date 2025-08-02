import type { SeoData } from '$lib/types/seo';
import { defaultSeoData, isDevelopment } from '$lib/data/seo';

export const load = async () => {
    return {
        seo: defaultSeoData as SeoData,
        isDevelopment: isDevelopment
    };
};
