<script lang="ts">
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import type { BlogPost } from '$lib/types/blog';
    import BlogListing from '$components/blogs/BlogListing.svelte';
    import { browser } from '$app/environment';
    import type { SeoData } from '$lib/types/seo';
    import Seo from '$components/common/Seo.svelte';
    import AuthorBio from '$components/blogs/AuthorBio.svelte';

    let { data }: { data: PageData } = $props();
    const seo: SeoData = data?.seo;
    let { tag } = $page.params;

    const posts: BlogPost[] = data.posts;
    const currentAuthor = data.currentAuthor;
    const relatedTags = data.relatedTags;

    let currentPage = $state(1);

    const scrollToBlogs = () => {
        if (browser) {
            window.scrollTo({
                top: 500,
                behavior: 'smooth',
            });
        }
    };

    function handlePageChange(page: number) {
        currentPage = page;
        scrollToBlogs();
    }
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

<!-- Hero Section -->
<section class="relative py-4 md:py-8 lg:py-12 bg-gradient-to-r from-slate-800 to-gray-900 text-white overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="container mx-auto px-4 py-8 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2">
        <AuthorBio author={currentAuthor} />
    </div>
</section>

<!-- Blog Posts Grid -->
<section class="py-10 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-8">
                <BlogListing {posts} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
            <!-- Sidebar -->
            <div class="lg:col-span-4">
                <div class="sticky top-8">
                    <!-- Related Tags -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Related Tags</h3>
                        <div class="flex flex-wrap gap-2">
                            {#each relatedTags as relatedTag}
                                <a
                                    href="/blogs/tag/{relatedTag}"
                                    class="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm md:text-base rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                >
                                    #{relatedTag}
                                    <!-- <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"
                                        >({relatedTag.count})</span
                                    > -->
                                </a>
                            {/each}
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                            Stay updated with our latest articles and insights about {tag} and other technology topics.
                        </p>
                        <form class="space-y-3 md:space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                class="w-full px-4 py-2 md:px-6 md:py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<CallToAction
    title="Want to Learn More About {tag}?"
    description="Our team of experts can help you implement {tag} solutions in your projects. Let's discuss how we can help."
    primaryButtonText="Contact Us"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
