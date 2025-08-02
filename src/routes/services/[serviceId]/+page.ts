import { error } from '@sveltejs/kit';
import { services } from '$lib/data/services';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const serviceId = params.serviceId;
    const service = services.find(e => e.link === `/services/${serviceId}`);

    if (service) {
        return {
            expertise: service
        };
    }

    throw error(404, 'Service not found');
};
