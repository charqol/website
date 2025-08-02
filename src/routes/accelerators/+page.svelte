<script lang="ts">
    import { accelerators } from '$lib/data/accelerators';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import IndustrySolution from '$lib/components/common/IndustrySolution.svelte';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import Hero from '$components/common/Hero.svelte';

    import Seo from '$lib/components/common/Seo.svelte';
    import type { PageProps } from '../$types';

    const { data }: PageProps = $props();
    const seo = data?.seo;
</script>

<!-- <svelte:head>
    <title>Our Accelerators | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Explore our pre-built solutions and frameworks designed to accelerate project delivery and reduce time-to-market."
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
    image="/images/accelerators/accelerators-hero.jpg"
    imageAlt="Accelerators"
    title="Our Accelerators"
    description="Jumpstart your projects with our ready-to-deploy solutions and frameworks, built on industry best practices."
/>

<MinimalCallToAction
    title="See how accelerators can speed up the things for you?"
    description="Contact us today to discuss your problem statements, proof of concepts and market testing."
    primaryButtonText="Contact Us"
    primaryButtonLink="/contact"
    backgroundColor="teal"
/>

<!-- Accelerators List Section -->
<section id="solutions" class="py-16 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Accelerators</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Accelerators are customizable pre-built, adaptable, robust and secure solutions developed through our years of experience across industries.
            </p>
        </div>
        <div class="space-y-16">
            {#each accelerators as accelerator, i}
                <IndustrySolution solution={accelerator} index={i} />
            {/each}
        </div>
    </div>
</section>

<CallToAction
    title="Leverage Our Accelerators"
    description="Interested in how our accelerators can speed up your development process? Contact us to learn more."
    primaryButtonText="Discuss Accelerators"
    secondaryButtonText="View Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
