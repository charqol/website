import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import clientPromise from '$lib/server/db';
import { MONGODB_DB } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { slug } = await request.json();

        if (!slug) {
            return json({ success: false, message: 'Blog slug is required' }, { status: 400 });
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db(MONGODB_DB);

        // Update or insert the blog visit count
        const result = await db.collection('blog_visits').updateOne(
            { slug },
            {
                $inc: { visitCount: 1 },
                $set: { lastVisited: new Date() }
            },
            { upsert: true }
        );

        if (result.acknowledged) {
            return json({ success: true });
        } else {
            return json({ success: false, message: 'Failed to record blog visit' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error recording blog visit:', error);
        return json(
            { success: false, message: 'An error occurred while recording blog visit' },
            { status: 500 }
        );
    }
};
