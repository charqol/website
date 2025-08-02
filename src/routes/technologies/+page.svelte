<script lang="ts">
    import { technologyCategories } from '$lib/data/technologies';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import Hero from '$components/common/Hero.svelte';

    import type { PageProps } from './$types';
    import Seo from '$components/common/Seo.svelte';

    const { data }: PageProps = $props();
    const seo = data?.seo;

    // Placeholder function to check if icon exists (replace with actual logic if needed)
    function iconExists(iconPath: string | undefined): boolean {
        // In a real app, you might check if the file actually exists
        // or have a more robust way to handle missing icons.
        return !!iconPath;
    }
</script>

<!-- <svelte:head>
    <title>Technologies We Use | Inflection Zone Lab</title>
    <meta name="description" content="Explore the wide range of modern technologies we leverage to build robust, scalable, and innovative software solutions." />
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
    image="/images/technologies/technologies-hero.jpg"
    imageAlt="Technologies"
    title="Technologies We Use"
    description="Leveraging cutting-edge tools and frameworks to deliver high-performance, future-proof solutions."
/>

<MinimalCallToAction
    title="Want to understand more about our tech stack?"
    description="Contact us today to discuss your project requirements and discover how we can help you achieve your business goals."
    primaryButtonText="Request a Quote"
    primaryButtonLink="/contact"
    backgroundColor="yellow"
/>

<!-- Technologies Grid Section -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        {#each technologyCategories as category, catIndex}
            <div class="mb-16 animate-fade-in" style="animation-delay: {catIndex * 150}ms">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b-2 border-primary-500 inline-block">
                    {category.name}
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {#each category.technologies as tech, techIndex}
                        {#if tech.link}
                            <a
                                href={tech.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                style="animation-delay: {techIndex * 30}ms"
                                title="Visit {tech.name} website"
                            >
                                <div class="p-4 h-full flex items-center space-x-4">
                                    {#if iconExists(tech.icon)}
                                        <img src={tech.icon} alt="{tech.name} logo" class="flex-shrink-0 object-contain h-10 w-10 mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                    {:else}
                                        <div class="w-8 h-8 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                                            <span class="text-gray-500 dark:text-gray-400 text-lg font-mono">{tech.name.substring(0, 1)}</span>
                                        </div>
                                    {/if}
                                    <span class="text-gray-700 dark:text-gray-300 font-light text-sm md:text-base" title={tech.name}>{tech.name}</span>
                                </div>
                            </a>
                        {:else}
                            <div
                                class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-4 transform hover:scale-105 animate-scale-in"
                                style="animation-delay: {techIndex * 30}ms"
                                title={tech.name}
                            >
                                {#if iconExists(tech.icon)}
                                    <img src={tech.icon} alt="{tech.name} logo" class="flex-shrink-0 object-contain h-10 w-10 mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                {:else}
                                    <div class="w-8 h-8 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                                        <span class="text-gray-500 dark:text-gray-400 text-lg font-mono">{tech.name.substring(0, 1)}</span>
                                    </div>
                                {/if}
                                <span class="text-gray-700 dark:text-gray-300 font-light text-sm md:text-base" title={tech.name}>{tech.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- CTA Section -->
<CallToAction
    title="Ready to Build with the Right Tech?"
    description="Let's discuss how our technological expertise can bring your project vision to life."
    primaryButtonText="Start a Project"
    secondaryButtonText="Explore Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
