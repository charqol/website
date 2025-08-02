import type { PageServerLoad } from './$types';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import { error } from '@sveltejs/kit';
import { services } from '$lib/data/services';
import type { Expertise } from '$lib/types/expertise';

///////////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({ params }) => {

    const serviceId = params.serviceId;
    const service: Expertise | undefined = services.find(e => e.link === `/services/${serviceId}`);

    // Please note that- seo is defined within the svelte file
    if (service) {
        return {
            expertise: service,
        };
    }

    throw error(404, 'Service not found');
};
