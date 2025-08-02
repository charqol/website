import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import clientPromise from '$lib/server/db';
import { MONGODB_DB } from '$env/static/private';

///////////////////////////////////////////////////////////////////////////////////

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
  try {
    // Get form data from the request
    const body = await request.json();
    const { email } = body;


    // Add timestamp and client info
    const enrichedData = {
      email: email,
      submittedAt: new Date(),
      ipAddress: getClientAddress(),
      userAgent: request.headers.get('user-agent')
    };

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(MONGODB_DB);

    // Create collection if does not exits
    const collectionExists = await db.listCollections({ name: 'newsletter_emails' }).hasNext();
    if (!collectionExists) {
      await db.createCollection('newsletter_emails');
    }
    // Insert the contact form submission
    const result = await db.collection('newsletter_emails').insertOne(enrichedData);
    // Check if the insertion was successful
    if (!result.acknowledged) {
      return json({ success: false, message: 'Failed to submit contact form' }, { status: 500 });
    }
    return json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
};
