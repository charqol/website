import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import type { PageServerLoad } from './$types';
import type { BlogMetadata, BlogPost } from '$lib/types/blog';
import { compile } from 'mdsvex';
import type { MdsvexCompileOptions } from 'mdsvex';
import type { SeoData } from '$lib/types/seo';
import { defaultSeoData } from '$lib/data/seo';
import { PUBLIC_BASE_URL } from '$env/static/public';
import { getAllblogsMetadata } from '$routes/blogs/blog.utils';
import type { Author } from '$lib/types/blog';
import { authors } from '$lib/data/blogs/authors';

//////////////////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({ params, fetch }) => {

  const { slug } = params;
  const blogFolder = `static/content/blogs/${slug}`;
  const blogPath = `${blogFolder}/blog.md`;
  const metadataPath = `${blogFolder}/metadata.json`;

  try {

    // Check if the blog file exists
    const fullBlogPath = path.join(process.cwd(), blogPath);
    if (!fs.existsSync(fullBlogPath)) {
      throw error(404, `Blog post not found: ${slug}`);
    }
    // Read the markdown content
    let fileContent = fs.readFileSync(fullBlogPath, 'utf-8');
    
    //Replace all instances of {{BlogImagesPath}} with the `/content/blogs/${slug}/blog-images`
    const blogImagesPath = `/content/blogs/${slug}/blog-images`;
    fileContent = fileContent.replace(/{{BlogImagesPath}}/g, blogImagesPath);

    const metadataFileContent = fs.readFileSync(metadataPath, 'utf-8');
    const metadata = JSON.parse(metadataFileContent);
    const postMetadata: BlogPost = {
      ...metadata,
      slug: slug
    };

    // Add author details to the metadata
    if (postMetadata.authorNames && postMetadata.authorNames.length > 0) {
      const authorDetails = authors.filter((author: Author) =>
        postMetadata.authorNames?.includes(author.name)
      );
      postMetadata.authors = authorDetails;
    }

    //Get the blog visits
    const visitsResponse = await fetch(`/api/analytics/blog-visits/${slug}`, {
      method: 'GET',
    });
    const visitsData = await visitsResponse.json();
    const blogVisits = visitsData?.visits ?? 0;

    const otherBlogsInSeries = await getOtherBlogsInSeries(slug, postMetadata);

    // Process the markdown content with mdsvex
    const processed = await compile(fileContent, {
      // You can add mdsvex options here if needed
      extensions: ['.md'],
    } as MdsvexCompileOptions);

    if (!processed) {
      throw error(500, 'Failed to process markdown content');
    }

    // Create a component from the processed code
    const { code } = processed;

    // Create a component object that mimics the structure from import
    const component = {
      default: code
    };

    // Get related posts (same category, excluding current post)
    const relatedPosts = await getRelatedPosts(slug, postMetadata);

    const seoData: SeoData = {
      ...defaultSeoData,
      title: `Blog: ${postMetadata.title}`,
      description: postMetadata.description,
      keywords: postMetadata.tags?.join(', ') ?? '',
      image: postMetadata.image ? `${defaultSeoData.url}metadata.image` : postMetadata.title,
      url: `${defaultSeoData.url}/blogs/${slug}`
    };

    return {
      seo: seoData,
      // The processed component from mdsvex
      component: component.default,
      metadata: postMetadata,
      relatedPosts,
      otherBlogsInSeries,
      blogVisits,
      baseUrl: PUBLIC_BASE_URL
    };
  } catch (e) {
    console.error(e);
    throw error(404, `Blog post not found: ${slug}`);
  }
};

const getOtherBlogsInSeries = (slug: string, metadata: BlogMetadata): {
  title: string;
  slug: string;
}[] => {
  const allBlogsMetadata = getAllblogsMetadata();
  const posts = allBlogsMetadata
    .filter((post: BlogPost | null): post is BlogPost => post !== null);

  const otherBlogsInSeries = posts.filter(
    (post: BlogPost) => post.series?.title === metadata.series?.title && post.slug !== slug
  );

  const series = otherBlogsInSeries.map((post: BlogPost) => ({
    title: post.title,
    slug: post.slug,
    sequence: post.series?.sequence ?? 0
  }));

  return series;
}

async function getRelatedPosts(currentSlug: string, metadata: BlogMetadata): Promise<BlogPost[]> {

  const blogsMetadata = getAllblogsMetadata();
  const posts = blogsMetadata
    .filter((post: BlogPost | null): post is BlogPost => post !== null);

  // Filter by category if provided, otherwise return random posts
  let relatedPosts = metadata.category && metadata.category.length > 0
    ? posts.filter((post: BlogPost) => post.category === metadata.category)
    : posts;

  relatedPosts = relatedPosts.filter((post: BlogPost) => post.slug !== currentSlug);

  //update the related posts with Author metadata
  relatedPosts = relatedPosts.map((post: BlogPost) => {
    const authorDetails = authors.filter((author: Author) =>
      post.authorNames?.includes(author.name)
    );
    post.authors = authorDetails;
    return post;
  });

  // Limit to 3 posts
  return relatedPosts.slice(0, 3);
}

//////////////////////////////////////////////////////////////////////////////////
