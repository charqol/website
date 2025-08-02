<script lang="ts">
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import type { BlogPost } from '$lib/types/blog';
    import BlogListing from '$components/blogs/BlogListing.svelte';
    import { browser } from '$app/environment';
    import type { SeoData } from '$lib/types/seo';
    import Seo from '$components/common/Seo.svelte';

    let { data }: { data: PageData } = $props();
    const seo: SeoData = data?.seo;
    let { tag } = $page.params;

    const posts: BlogPost[] = data.posts;
    const relatedTags = data.relatedTags;
    let currentPage = $state(1);

    let newsletterEmail = $state('');
    let newsLetterEmailValid = $state(false);

    $effect(() => {
        console.log("Newsletter email:", newsletterEmail);
        //Check if newsletterEmail is valid email
        if (newsletterEmail && newsletterEmail.length > 0) {
            // Simple regex for email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(newsletterEmail)) {
                newsLetterEmailValid = false;
            }
            else {
                newsLetterEmailValid = true;
            }
        }
    });

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

    async function onNewsletterSubmit(event: Event) {

        if (newsletterEmail && newsLetterEmailValid) {

            console.log('Submitting newsletter email:', newsletterEmail);
            //Make rest api call to '/api/newsletter/subscribe'
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: newsletterEmail }),
            });
            if (!response.ok) {
                console.error('Failed to subscribe to newsletter');
                return;
            }
            // Handle newsletter subscription logic here
            console.log('Newsletter email submitted:', newsletterEmail);
            // Reset the input field
            newsletterEmail = '';
        } else {
            console.error('Invalid email address');
        }
    }

</script>

<!-- <svelte:head>
    <title>#{tag} - Blog Posts | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Explore our latest articles about {tag} and stay updated with the latest trends in software development."
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

<!-- Hero Section -->
<section class="relative py-16 bg-gradient-to-r from-primary-600 to-gray-900 text-white overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-2xl mx-auto text-center animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">#{tag}</h1>
            <p class="text-xl opacity-90">
                Latest articles about {tag} and related topics.
            </p>
        </div>
    </div>
</section>

<!-- Blog Posts Grid -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-8">
                <BlogListing {posts} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
            <!-- Sidebar -->
            <div class="lg:col-span-4">
                <div class="sticky top-8">
                    <!-- Related Tags -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Related Tags</h3>
                        <div class="flex flex-wrap gap-2">
                            {#each relatedTags as relatedTag}
                                <a
                                    href={`/blogs/tag/${relatedTag}`}
                                    class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                    data-sveltekit-reload
                                >
                                    #{relatedTag}
                                </a>
                            {/each}
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            Stay updated with our latest articles and insights about {tag} and other technology topics.
                        </p>
                        <form class="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                bind:value={newsletterEmail}
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                class="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                                disabled={!newsLetterEmailValid}
                                onclick={onNewsletterSubmit}
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
