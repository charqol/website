import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { BlogMetadata } from '$lib/types/blog';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import { getAllblogsMetadata } from '$routes/blogs/blog.utils';

///////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({ params }) => {
    const { tag } = params;
    try {
        const blogsMetadata = getAllblogsMetadata();

        const posts = blogsMetadata.filter((blog: BlogMetadata) => {
            return blog.tags?.includes(tag);
        });

        let relatedTags = blogsMetadata.map((blog: BlogMetadata) => {
            const containsTag = blog.tags?.includes(tag);
            if (containsTag) {
                const otherTags = blog.tags?.filter((t: string) => t !== tag);
                return otherTags;
            }
            return [];
        }).flat();
        relatedTags = [...new Set(relatedTags)];
        relatedTags = relatedTags.filter((t) => t?.toLowerCase() !== tag.toLowerCase());
        relatedTags = relatedTags.slice(0, 10);

        const seoData: SeoData = {
            ...defaultSeoData,
            title: `Blogs: ${tag}`,
            description: `Explore our blogs tagged with ${tag}.`,
            keywords: `${tag}, blogs, software development`,
            url: `${defaultSeoData.url}/blogs/tag/${tag}`
        };

        return {
            seo: seoData,
            posts,
            relatedTags
        };
    } catch (e) {
        console.error(e);
        throw error(404, `Blogs with tag ${tag} not found`);
    }
};
