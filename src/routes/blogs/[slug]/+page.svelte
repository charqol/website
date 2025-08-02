<script lang="ts">
    import type { BlogPost } from '$lib/types/blog';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import RelatedPost from '$lib/components/blogs/RelatedPost.svelte';
    import BlogAuthors from '$components/blogs/BlogAuthors.svelte';
    import ShareBlog from '$lib/components/blogs/ShareBlog.svelte';
    import { onMount } from 'svelte';
    import { formatDate } from '$lib/utils/common.utils';
    import type { SeoData } from '$lib/types/seo';
    import Seo from '$components/common/Seo.svelte';
    import BlogSeries from '$lib/components/blogs/BlogSeries.svelte';

    export let data: {
        component: any;
        metadata: BlogPost;
        relatedPosts: BlogPost[];
        baseUrl: string;
        seo: SeoData;
        otherBlogsInSeries: {
            title: string;
            slug: string;
            sequence: number;
        }[];
    };

    const { component, metadata, relatedPosts, baseUrl, seo, otherBlogsInSeries } = data;

    // Extracting author information
    const authors = metadata.authors || [];
    const slug = metadata.slug;
    const heroImage = `/content/blogs/${slug}/${metadata.image}`;

    // Back to top functionality
    let showBackToTop = false;

    const recordBlogVisit = async (slug: string) => {
        try {
            const response = await fetch('/api/analytics/blog-visits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    slug: slug
                })
            });

            if (!response.ok) {
                console.error('Failed to record blog visit');
            }
        } catch (error) {
            console.error('Error recording blog visit:', error);
        }
    };

    onMount(() => {
        const handleScroll = () => {
            showBackToTop = window.scrollY > 300;
        };

        window.addEventListener('scroll', handleScroll);

        // Record the blog visit
        recordBlogVisit(slug);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
</script>

<Seo
    pageTitle={seo?.title}
    pageDescription={seo?.description}
    pageImage={seo?.image}
    pageUrl={seo?.url}
    pageKeywords={seo?.keywords}
    pageCardImage={seo?.cardImage}
    googleAnalyticsId={seo?.googleAnalyticsId}
    companyName={seo?.companyName}
    logo={seo?.logo}
    sameAs={seo?.sameAs}
    contactPoint={seo?.contactPoint}
/>

<!-- Dev.to style blog layout -->
<div class="dev-container bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
			 <div class="lg:col-span-9">
                <!-- Article Header -->
                <header class="blog-header">
                    <h1>{metadata.title}</h1>
                    {#if metadata.category}
                        <div class="category-tag">
                            <!-- Category should be with background rectangular button rather than #tag. -->
                            <span class="bg-primary-600 text-gray-100 px-4 py-2 rounded-md text-lg font-medium">{metadata.category}</span>
                        </div>
                    {/if}
                    <div class="flex flex-wrap gap-2 text-gray-500 dark:text-gray-400 text-lg">
                        {#if metadata.authors}
                            {#each metadata.authors as author, i}
                                {#if i < metadata.authors.length - 2}
                                    <a href={`/blogs/authors/${author.slug}`} class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                        {author.name},
                                    </a>
                                {:else if i === metadata.authors.length - 2}
                                    <a href={`/blogs/authors/${author.slug}`} class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                        {author.name}
                                    </a>
                                    <span class="text-gray-400 dark:text-gray-500"> and</span>
                                {:else}
                                    <a href={`/blogs/authors/${author.slug}`} class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                        {author.name}
                                    </a>
                                {/if}
                            {/each}
                            <span class="text-gray-400 dark:text-gray-500"> | </span>
                        {/if}
                        <div class="article-meta">
                            <span class="publish-date text-gray-400 dark:text-gray-500 text-lg">{formatDate(metadata.date)}</span>
                        </div>
                        {#if metadata.readTimeMinutes}
                            <span class="text-gray-400 dark:text-gray-500"> | </span>
                            <span class="text-gray-400 dark:text-gray-500">{metadata.readTimeMinutes} min read</span>
                        {/if}
                    </div>

                    {#if metadata.tags && metadata.tags.length > 0}
                        <div class="mt-4">
                            <div class="flex flex-wrap gap-2 text-gray-500 dark:text-gray-400">
                                {#each metadata.tags as tag}
                                    <a href={`/blogs/tag/${tag}`} class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md text-md font-normal hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                        #{tag}
                                    </a>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </header>

                <!-- Cover Image -->
                <div class="cover-image">
                    <img src={heroImage} alt={metadata.title} />
                </div>

                {#if metadata.series }
                    <BlogSeries
                        otherBlogsInSeries={otherBlogsInSeries}
                        seriesTitle={metadata.series.title}
                        seriesSeuence={metadata.series.sequence}
                    />
                {/if}

                <!-- Article Content -->
                <!-- prose prose-lg dark:prose-invert -->
                <article class="prose prose-lg dark:prose-invert max-w-full w-full">
                    <!-- <div class="prose max-w-full"> -->
                        {@html component}
                    <!-- </div> -->
                </article>

                <!-- Tags and Share Section - NOT MODIFIED AS REQUESTED -->
                {#if metadata.tags && metadata.tags.length > 0}
                    <div class="mt-4">
                        <div class="flex flex-wrap gap-2 text-gray-500 dark:text-gray-400">
                            {#each metadata.tags as tag}
                                <a href={`/blogs/tag/${tag}`} class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md text-md font-normal hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                    #{tag}
                                </a>
                            {/each}
                        </div>
                    </div>
                {/if}
		    </div>
            <!-- Sidebar -->
            <div class="lg:col-span-3">
                <div class="sticky top-8">
                    <a
                        href="/blogs"
                        class="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 rounded-md transition-all duration-300 transform hover:scale-105 font-medium"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to all blogs
                    </a>

                    <!-- Share Buttons -->
                    <ShareBlog link={`${baseUrl}/blogs/${metadata.slug}`}></ShareBlog>

                    <!-- Author Bio Section -->
                    {#if authors.length > 0}
                        <BlogAuthors authors={authors} />
                    {/if}

                    <!-- Related Posts -->
                    <div class="bg-gray-200 dark:bg-gray-700 rounded-md p-4 mb-4 mt-4">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">You may also like</h3>
                        <!-- Add seperator here -->
                        <div class="h-px opacity-90 bg-gray-300 dark:bg-gray-600 mb-4"></div>
                        {#if relatedPosts.length === 0}
                            <p class="text-gray-500 dark:text-gray-400">No related posts found.</p>
                        {:else}
                            <div class="space-y-6">
                                {#each relatedPosts as post, i}
                                    <RelatedPost post={post} />
                                    {#if i < relatedPosts.length - 1}
                                        <div class="h-px opacity-90 bg-gray-300 dark:bg-gray-600 my-4"></div>
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
	    </div>
	</div>
</div>

<!-- <NewsletterRegistration /> -->

<CallToAction
    title="Ready to discuss your project?"
    description="Let's talk about how we can help you achieve your business goals."
    primaryButtonText="Get in Touch"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>

<!-- Back to Top Button -->
<button
    class="fixed bottom-8 right-8 z-50 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 {showBackToTop ? 'opacity-100' : 'opacity-0'}"
    on:click={scrollToTop}
    aria-label="Back to top"
>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
</button>

<style>

    /* Dev.to-inspired styling */
    .dev-container {
        width: 100%;
        max-width: auto;
        margin: 0 auto;
        padding: 1rem 1rem;
        color: #171717;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    .blog-header {
        margin-bottom: 2rem;
    }

    .blog-header h1 {
        text-align: center;
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: #111827;
    }

    .category-tag {
        margin-bottom: 1rem;
    }

    .category-tag span {
        font-size: 1rem;
        font-weight: 600;
    }

    .article-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        font-size: 0.9rem;
        color: #64748b;
    }

    .tags-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag-item {
        font-weight: 500;
    }

    .cover-image {
        margin: 2rem 0;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .cover-image img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }

    .article-content {
        margin-bottom: 2rem;
    }

    .prose-content {
        line-height: 1.7;
        font-size: 1.125rem;
        color: #374151;
    }

    .prose-content :global(h1),
    .prose-content :global(h2),
    .prose-content :global(h3),
    .prose-content :global(h4),
    .prose-content :global(h5),
    .prose-content :global(h6) {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.3;
        color: #111827;
    }

    .prose-content :global(h1) {
        font-size: 2.25rem;
    }

    .prose-content :global(h2) {
        font-size: 1.875rem;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 0.5rem;
    }

    .prose-content :global(h3) {
        font-size: 1.5rem;
    }

    .prose-content :global(p) {
        margin-bottom: 1.5rem;
    }

    .prose-content :global(ul),
    .prose-content :global(ol) {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
    }

    .prose-content :global(li) {
        margin-bottom: 0.5rem;
    }

    .prose-content :global(a) {
        color: #3b49df;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s;
    }

    .prose-content :global(a:hover) {
        border-color: #3b49df;
    }

    .prose-content :global(blockquote) {
        border-left: 4px solid #3b49df;
        padding-left: 1rem;
        color: #4b5563;
        font-style: italic;
        margin: 1.5rem 0;
    }

    .prose-content :global(pre) {
        background: #1e293b;
        color: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1.5rem 0;
    }

    .prose-content :global(code) {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.9em;
        background: rgba(229, 231, 235, 0.5);
        padding: 0.2em 0.4em;
        border-radius: 0.25rem;
    }

    .prose-content :global(pre code) {
        background: transparent;
        padding: 0;
        border-radius: 0;
    }

    .prose-content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin: 1.5rem 0;
    }

    .prose-content :global(hr) {
        border: 0;
        border-top: 1px solid #e5e7eb;
        margin: 2rem 0;
    }

    .prose-content :global(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
    }

    .prose-content :global(th),
    .prose-content :global(td) {
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
    }

    .prose-content :global(th) {
        background: #f9fafb;
        font-weight: 600;
        text-align: left;
    }

    /* Dark mode support */
    :global(.dark) .blog-header h1 {
        color: #f3f4f6;
    }

    :global(.dark) .prose-content {
        color: #d1d5db;
    }

    :global(.dark) .prose-content :global(h1),
    :global(.dark) .prose-content :global(h2),
    :global(.dark) .prose-content :global(h3),
    :global(.dark) .prose-content :global(h4),
    :global(.dark) .prose-content :global(h5),
    :global(.dark) .prose-content :global(h6) {
        color: #f3f4f6;
    }

    :global(.dark) .prose-content :global(h2) {
        border-bottom-color: #374151;
    }

    :global(.dark) .prose-content :global(a) {
        color: #818cf8;
    }

    :global(.dark) .prose-content :global(a:hover) {
        border-color: #818cf8;
    }

    :global(.dark) .prose-content :global(blockquote) {
        color: #9ca3af;
    }

    :global(.dark) .prose-content :global(code) {
        background: rgba(55, 65, 81, 0.5);
    }

    :global(.dark) .prose-content :global(hr) {
        border-top-color: #374151;
    }

    :global(.dark) .prose-content :global(th),
    :global(.dark) .prose-content :global(td) {
        border-color: #374151;
    }

    :global(.dark) .prose-content :global(th) {
        background: #1f2937;
    }
</style>
