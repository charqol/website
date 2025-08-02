import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import clientPromise from '$lib/server/db';
import type { ContactFormData } from '$lib/models/ContactForm';
import { sendAdminNotification, sendUserConfirmation, verifyEmailDomain } from '$lib/server/email';
import { MONGODB_DB } from '$env/static/private';

///////////////////////////////////////////////////////////////////////////////////

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
    try {
        // Get form data from the request
        const formData = await request.json() as ContactFormData;

        const ipAddress = getClientAddress();
        const {
            city,
            region,
            country,
            countryCode,
            regionCode,
            postal,
            longitude,
            latitude,
            timezone
        } = await getLocationInfo(ipAddress);

        // Add timestamp and client info
        const enrichedData = {
            ...formData,
            submittedAt: new Date(),
            ipAddress: ipAddress || '',
            userAgent: request.headers.get('user-agent'),
            location: {
                city,
                region,
                country,
                countryCode,
                regionCode,
                postal,
                longitude,
                latitude,
                timezone
            }
        };

        // Verify email domain validity
        const isValidDomain = await verifyEmailDomain(formData.email);
        if (!isValidDomain) {
            return json({
                success: false,
                message: 'Please provide a valid email address with a working domain'
            }, { status: 400 });
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db(MONGODB_DB);

        // Insert the contact form submission
        const result = await db.collection('contact_submissions').insertOne(enrichedData);


        if (result.acknowledged) {
            // Send emails asynchronously - don't wait for them to complete
            // We don't want the user to wait for emails to be sent
            sendAdminNotification(enrichedData)
                .catch(err => console.error('Error sending admin notification:', err));

            sendUserConfirmation(enrichedData)
                .catch(err => console.error('Error sending user confirmation:', err));

            return json({ success: true, message: 'Contact form submitted successfully' });
        } else {
            return json({ success: false, message: 'Failed to submit contact form' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return json(
            { success: false, message: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
};

async function getLocationInfo(ipAddress: string) {
    try {
        if (!ipAddress) {
            throw new Error('IP address is not available');
        }
        const locationData = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const locationJson = await locationData.json();
        if (!locationJson) {
            throw new Error('Failed to fetch location data');
        }
        const country = locationJson?.country_name || 'Unknown';
        const region = locationJson?.region || 'Unknown';
        const countryCode = locationJson?.country_code || 'Unknown';
        const regionCode = locationJson?.region_code || 'Unknown';
        const postal = locationJson?.postal || 'Unknown';
        const city = locationJson?.city || 'Unknown';
        const longitude = locationJson?.longitude || 'Unknown';
        const latitude = locationJson?.latitude || 'Unknown';
        const timezone = locationJson?.timezone || 'Unknown';
        return { city, region, country, countryCode, regionCode, postal, longitude, latitude, timezone };
    }
    catch (error) {
        console.error('Error fetching location data:', error);
        return {
            city: 'Unknown',
            region: 'Unknown',
            country: 'Unknown',
            countryCode: 'Unknown',
            regionCode: 'Unknown',
            postal: 'Unknown',
            longitude: 'Unknown',
            latitude: 'Unknown',
            timezone: 'Unknown'
        };
    }
}

