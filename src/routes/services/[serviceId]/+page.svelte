<script lang="ts">
    import Seo from '$components/common/Seo.svelte';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import TechnologyBadge from '$lib/components/services/TechnologyBadge.svelte';
    import { defaultSeoData } from '$lib/data/seo';
    import type { SeoData } from '$lib/types/seo';
    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
    const expertise = data?.expertise;

    const seo: SeoData = {
            ...defaultSeoData,
            title: expertise.title,
            description: expertise.description,
            keywords: expertise.keywords ? expertise.keywords.join(', ') : undefined,
            url: `${defaultSeoData.url}/services/${expertise}`,
            image: `${defaultSeoData.url}${expertise.heroImage}`
        };

</script>

<!-- <svelte:head>
    <title>{expertise.title} | Services | Inflection Zone Lab</title>
    <meta name="description" content={expertise.description} />
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
<section class="relative min-h-[500px] flex items-center">
    <div class="absolute inset-0">
        {#if expertise.heroImage}
            <img src={expertise.heroImage} alt={expertise.title} class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30"></div>
        {:else}
            <div class="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500"></div>
        {/if}
    </div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl animate-fade-in text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">{expertise.title}</h1>
            <p class="text-xl mb-8 leading-relaxed">{expertise.description}</p>
        </div>
    </div>
</section>

<MinimalCallToAction
    title={expertise.callToAction.title}
    primaryButtonText={expertise.callToAction.primaryButtonText}
    primaryButtonLink={expertise.callToAction.primaryButtonLink}
    backgroundColor={expertise.callToAction.backgroundColor}
    description={expertise.callToAction.description}
/>

<!-- Differentiators/Aspects Section -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{expertise.title}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Key features and benefits of our {expertise.title.toLowerCase()} services.
            </p>
        </div>
        <div class="max-w-6xl mx-auto">
            <ul class="space-y-4">
                {#each expertise.differentiators as differentiator, i}
                    <li
                        class="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm animate-slide-in-up"
                        style="animation-delay: {i * 80}ms"
                    >
                        <img src={differentiator.image} alt={differentiator.title} class="h-12 w-12 mr-4" />
                        <div class="flex flex-col">
                            <span class="text-gray-800 dark:text-teal-200 text-lg font-semibold mb-2">{differentiator.title}</span>
                            <p class="text-gray-600 dark:text-gray-300 text-md font-extralight">{differentiator.description}</p>
                        </div>
                        <svg class="h-8 w-8 text-green-500/80 mr-4 mt-1 flex-shrink-0 ml-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>

<!-- Technologies Section -->
{#if expertise.technologies && expertise.technologies.length > 0}
    <section class="py-20 bg-gray-100 dark:bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Technologies</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Technologies we frequently leverage for {expertise.title.toLowerCase()} solutions.
                </p>
            </div>
            <div class="max-w-5xl mx-auto text-center">
                {#each expertise.technologies as tech, i}
                    <div class="inline-block animate-scale-in" style="animation-delay: {i * 40}ms">
                        <TechnologyBadge {tech} />
                    </div>
                {/each}
            </div>
        </div>
    </section>
{/if}

<!-- CTA Section -->
<CallToAction
    title="Discuss Your {expertise.title} Needs"
    description="Let's explore how our expertise in {expertise.title.toLowerCase()} can benefit your project. Contact us for a consultation."
    primaryButtonText="Get In Touch"
    secondaryButtonText="View All Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
