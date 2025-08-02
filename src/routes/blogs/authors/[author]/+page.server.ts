import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/types/blog';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import { authors } from '$lib/data/blogs/authors';
import { getAllblogsMetadata } from '$routes/blogs/blog.utils';

///////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({ params }) => {
    const { author } = params;
    try {
        const blogsMetadata = getAllblogsMetadata();

        const posts = blogsMetadata.filter((blog: BlogPost) => {
            return blog.authors?.find(a => a.slug === author);
        });

        let relatedTags: string[] = [];
        posts.forEach((post: BlogPost) => {
            if (post.tags) {
                post.tags.forEach((tag: string) => {
                    if (!relatedTags.includes(tag)) {
                        relatedTags.push(tag);
                    }
                });
            }
        });

        const currentAuthor = authors.find(a => a.slug === author);
        if (!currentAuthor) {
            throw error(404, `Author ${author} not found`);
        }

        const seoData: SeoData = {
            ...defaultSeoData,
            title: `Blog Author: ${currentAuthor.name}`,
            description: `Explore blogs by ${currentAuthor.name}.`,
            keywords: `${currentAuthor.name}, blogs, software development`,
            url: `${defaultSeoData.url}/blogs/authors/${author}`
        };

        return {
            seo: seoData,
            posts: posts,
            relatedTags: relatedTags,
            currentAuthor: currentAuthor,
        };
    } catch (e) {
        console.error(e);
        throw error(404, `Blogs by author ${author} not found`);
    }
};

///////////////////////////////////////////////////////////////////////
