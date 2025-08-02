import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { BlogMetadata } from '$lib/types/blog';
import { getAllblogsMetadata } from './blog.utils';
import { defaultSeoData } from '$lib/data/seo';
import type { SeoData } from '$lib/types/seo';

//////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({ params }) => {

    try {
        const blogsMetadata = getAllblogsMetadata();

        const categories = blogsMetadata
            .map((blog: BlogMetadata) => blog.category)
            .filter(category => category !== undefined);

        // Find unique categories and count the number of blogs in each category
        const uniqueCategories = [...new Set(categories)] as string[];
        const categoryCounts = uniqueCategories.map((category: string) => ({
            name: category,
            count: categories.filter((c: string) => c === category).length
        }));

        categoryCounts.push({
            name: 'All',
            count: blogsMetadata.length
        });

        const seoData: SeoData = {
            ...defaultSeoData,
            title: 'Blogs',
            description: 'Insights, trends and best practices in software development from our team of experts.',
            keywords: 'blogs, best practices, insights, experiences, technologies, processes',
            url: `${defaultSeoData.url}/blogs`,
            image: `${defaultSeoData.url}/images/blogs/blogs-hero.jpg`
        };

        return {
            seo: seoData,
            blogsMetadata,
            categories: categoryCounts
        };
    } catch (e) {
        console.error(e);
        throw error(404, `Blogs not found`);
    }
};
