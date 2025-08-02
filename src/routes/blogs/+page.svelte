<script lang="ts">
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import NewsletterRegistration from '$lib/components/common/NewsletterRegistration.svelte';
    import Hero from '$lib/components/common/Hero.svelte';
    import type { BlogPost } from '$lib/types/blog';
    import { onMount } from 'svelte';
    import type { PageProps } from './$types';
    import BlogListing from '$components/blogs/BlogListing.svelte';
    import Seo from '$components/common/Seo.svelte';

    const heroImage = '/images/blogs/blogs-hero.jpg';
    const heroImageAlt = 'Blogs';
    const heroTitle = 'Our Musings & Experiences';
    const heroDescription = 'Insights, trends and best practices in software development from our team of experts.';

    const { data }: PageProps = $props();

    const { blogsMetadata, categories, seo } = data;
    const blogPosts = blogsMetadata;

    //Pagination settings
    let currentPage: number = $state(1);
    let filteredPosts: BlogPost[] = $state([]);
    let selectedCategory = $state('All');
    let searchTerm = $state('');
    let selectedTags: string[] = $state([]);

    // Extract all unique tags from blog posts
    let allTags = $state<string[]>([]);

    onMount(() => {
        // const hasTags = blogPosts.some((post: BlogPost) => post.tags && post.tags.length > 0);
        const tagSet = new Set<string>();
        blogPosts.forEach((post: BlogPost) => {
            if (post.tags && Array.isArray(post.tags)) {
                post.tags.forEach((tag: string) => tagSet.add(tag));
            }
        });
        allTags = Array.from(tagSet);
    });

    $effect(() => {
        filteredPosts = blogPosts
            .filter((post: BlogPost) => selectedCategory === 'All' || post.category === selectedCategory)
            .filter((post: BlogPost) => {
                if (!searchTerm || searchTerm.trim() === '') {
                    return true;
                }
                const term = searchTerm.toLowerCase().trim();
                return (
                    post.title.toLowerCase().includes(term) ||
                    (post.category ? post.category.toLowerCase().includes(term) : false)
                );
            })
            .filter((post: BlogPost) => {
                if (selectedTags.length === 0) {
                    return true;
                }
                // Check if post has any of the selected tags
                return post.tags && Array.isArray(post.tags) && selectedTags.some(tag => post.tags!.includes(tag));
            });

        // Reset to page 1 when changing display mode or filters
        currentPage = 1;
    });

    $effect(() => {
        console.log('Current Page:', currentPage);
        console.log('Filtered Posts:', filteredPosts?.length);
        console.log('Selected Category:', selectedCategory);
        console.log('Search Term:', searchTerm);
        console.log('Selected Tags:', selectedTags);
    });

    // Toggle tag selection
    function toggleTag(tag: string) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
    }

    // Back to top functionality
    let showBackToTop = $state(false);

    onMount(() => {
        const handleScroll = () => {
            showBackToTop = window.scrollY > 300;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBlogs = () => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth',
        });
    };

    // Function to change page
    function goToPage(page: number) {
        currentPage = Math.max(1, page);
        scrollToBlogs();
    }

</script>

<!-- <svelte:head>
    <title>Blogs | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Stay updated with the latest insights, trends, and best practices in software development from our team of experts."
    />
</svelte:head> -->

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

<Hero
    image={heroImage}
    imageAlt={heroImageAlt}
    title={heroTitle}
    description={heroDescription}
/>

<MinimalCallToAction
    title="Want to explore more?"
    description="Explore our blogs to get insights, trends, and best practices in software development from our team of experts."
    primaryButtonText="Explore With Us"
    primaryButtonLink="/contact"
    backgroundColor="red"
/>

<!-- Blog Content -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <!-- Sidebar -->
            <div class="lg:col-span-1">
                <div class="sticky top-8">
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
                    <div class="space-y-2">
                        {#each categories as category}
                            <button
                                class="w-full text-left px-4 py-2 rounded-md transition-colors duration-200 {selectedCategory ===
                                category.name
                                    ? 'bg-primary-500 text-white'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}"
                                onclick={() => (selectedCategory = category.name)}
                            >
                                <span class="font-medium">{category.name}</span>
                                <span class="float-right text-sm opacity-75">({category.count})</span>
                            </button>
                        {/each}
                    </div>

                    <!-- Tags Filter -->
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Filter by Tags</h2>
                    <div class="flex flex-wrap gap-2 mb-6">
                        {#if allTags.length > 0}
                            {#each allTags as tag}
                                <button
                                    class="px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 {selectedTags.includes(tag)
                                        ? 'bg-primary-500 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}"
                                    onclick={() => toggleTag(tag)}
                                >
                                    {tag}
                                    {#if selectedTags.includes(tag)}
                                        <span class="ml-1">✕</span>
                                    {/if}
                                </button>
                            {/each}
                        {:else}
                            <p class="text-gray-500 dark:text-gray-400">No tags available</p>
                        {/if}
                    </div>

                    <!-- Search Blogs Feature -->
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Search Blogs</h2>
                    <div class="relative">
                        <input
                            type="text"
                            placeholder="Search posts..."
                            bind:value={searchTerm}
                            class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <!-- Clear Filters Button -->
                    {#if selectedCategory !== 'All' || searchTerm || selectedTags.length > 0}
                        <button
                            class="mt-4 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                            onclick={() => {
                                selectedCategory = 'All';
                                searchTerm = '';
                                selectedTags = [];
                            }}
                        >
                            Clear All Filters
                        </button>
                    {/if}
                </div>
            </div>

            <!-- Blog Posts -->
            <div class="lg:col-span-3">
                <BlogListing posts={filteredPosts} currentPage={currentPage} onPageChange={goToPage} />
            </div>
        </div>
    </div>
</section>

<NewsletterRegistration />

<!-- CTA Section -->
<CallToAction
    title="Ready to Start Your Project?"
    description="Let's discuss how we can help you achieve your business goals with our software development services."
    primaryButtonText="Get Started"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>

<!-- Back to Top Button -->
<button
    class="fixed bottom-8 right-8 z-50 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 {showBackToTop
        ? 'opacity-100'
        : 'opacity-0'}"
    onclick={scrollToTop}
    aria-label="Back to top"
>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
</button>
