<script lang="ts">
    import { page } from '$app/stores';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
</script>

<svelte:head>
    <title>{$page.status} - Page Not Found | Inflection Zone Lab</title>
    <meta
        name="description"
        content="The page you're looking for could not be found. Please check the URL or navigate to our homepage."
    />
</svelte:head>

<!-- Hero Section -->
<section
    class="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden"
>
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
            <div class="text-9xl font-bold mb-4 text-white/20">{$page.status}</div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
            <p class="text-xl opacity-90 mb-8">
                The page you're looking for could not be found. Please check the URL or navigate to our homepage.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/"
                    class="px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
                >
                    Go to Homepage
                </a>
                <button
                    on:click={() => history.back()}
                    class="px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Helpful Links -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                You might be interested in:
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a
                    href="/services"
                    class="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-200"
                >
                    <div
                        class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                    >
                        <svg
                            class="w-6 h-6 text-primary-600 dark:text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Services</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        Explore our comprehensive software development services.
                    </p>
                </a>

                <a
                    href="/blog"
                    class="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-200"
                >
                    <div
                        class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                    >
                        <svg
                            class="w-6 h-6 text-primary-600 dark:text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.5-1.5L15 4.5a2 2 0 00-1.5-.5H5a2 2 0 00-2 2v12a2 2 0 002 2h14z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Blog</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        Read our latest articles and insights about software development.
                    </p>
                </a>

                <a
                    href="/contact"
                    class="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-200"
                >
                    <div
                        class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                    >
                        <svg
                            class="w-6 h-6 text-primary-600 dark:text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        Get in touch with our team for any questions or inquiries.
                    </p>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<CallToAction
    title="Need Help Finding Something?"
    description="Our team is here to help you navigate our website and find the information you need."
    primaryButtonText="Contact Us"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
