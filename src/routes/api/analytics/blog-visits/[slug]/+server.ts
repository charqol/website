import clientPromise from "$lib/server/db";
import { json, type RequestHandler } from "@sveltejs/kit";
import { MONGODB_DB } from "$env/static/private";

export const GET: RequestHandler = async ({ params }) => {
    try {

        const slug = params?.slug;
        if (!slug) {
            return json({ success: false, message: 'Blog slug is required' }, { status: 400 });
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db(MONGODB_DB);

        // Get the blog visit count
        const blogVisit = await db.collection('blog_visits').findOne({ slug });

        if (!blogVisit) {
            console.error('Blog visit not found for slug:', slug);
            return json({ success: true, visits: 0 }, { status: 200 });
        }

        return json({ success: true, visits: blogVisit.visitCount });

    } catch (error) {
        console.error('Error recording blog visit:', error);
        return json(
            { success: false, message: 'An error occurred while recording blog visit' },
            { status: 500 }
        );
    }
};
