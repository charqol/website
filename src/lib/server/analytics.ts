import clientPromise from './db';

export interface PageVisit {
  page: string;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
  referrer?: string;
}

/**
 * Record a page visit in the database
 */
export async function recordPageVisit(pageVisitData: Omit<PageVisit, 'timestamp'>): Promise<boolean> {
  try {
    const client = await clientPromise;
    const db = client.db('inflection_website');
    
    const result = await db.collection('page_visits').insertOne({
      ...pageVisitData,
      timestamp: new Date()
    });
    
    return result.acknowledged;
  } catch (error) {
    console.error('Error recording page visit:', error);
    return false;
  }
} 