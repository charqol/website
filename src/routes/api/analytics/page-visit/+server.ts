import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import clientPromise from '$lib/server/db';
import { MONGODB_DB } from '$env/static/private';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
    try {
        const {
            page,
            referrer,
            utmSource,
            utmMedium,
            utmCampaign,
            utmTerm,
            utmContent,
            previousPath
        } = await request.json();

        const pageVisitData = {
            page,
            timestamp: new Date(),
            ipAddress: getClientAddress(),
            userAgent: request.headers.get('user-agent'),
            referrer: {
                url: referrer || null,
                previousPath: previousPath || null
            },
            utm: {
                source: utmSource || null,
                medium: utmMedium || null,
                campaign: utmCampaign || null,
                term: utmTerm || null,
                content: utmContent || null
            }
        };

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db(MONGODB_DB);

        // Insert the page visit
        const result = await db.collection('page_visits').insertOne(pageVisitData);

        if (result.acknowledged) {
            return json({ success: true });
        } else {
            return json({ success: false, message: 'Failed to record page visit' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error recording page visit:', error);
        return json(
            { success: false, message: 'An error occurred while recording page visit' },
            { status: 500 }
        );
    }
};
