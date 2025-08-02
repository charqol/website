<script lang="ts">

    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import IndustryHero from '$components/industry/IndustryHero.svelte';
    import IndustrySolution from '$lib/components/common/IndustrySolution.svelte';
    import CaseStudy from '$lib/components/common/CaseStudy.svelte';
    import type {
        HeroMetadata,
        IndustrySolutionMetadata,
        CaseStudyMetadata,
        CallToActionMetadata,
        InfographicMetadata
    } from '$lib/types/industry';
    import Seo from '$components/common/Seo.svelte';
    import type { SeoData } from '$lib/types/seo';

    let {
        seo,
        industry,
        title,
        description,
        hero,
        solutions,
        caseStudies,
        ctaBottom,
        ctaTop,
        infographics,
        topCtaBackgroundColor = "primary",
        bottomCtaBackgroundColor = "primary",
    }: {
        seo: SeoData,
        industry: string,
        title: string,
        description: string,
        hero: HeroMetadata,
        solutions: IndustrySolutionMetadata[],
        caseStudies: CaseStudyMetadata[],
        ctaBottom: CallToActionMetadata,
        ctaTop: CallToActionMetadata,
        infographics: InfographicMetadata[],
        topCtaBackgroundColor: string | null,
        bottomCtaBackgroundColor: string | null,
    } = $props();
</script>

<!-- <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
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

<IndustryHero
    title={hero.title}
    description={hero.description}
    image={hero.image}
    primaryButtonText={hero.primaryButtonText}
    primaryButtonLink={hero.primaryButtonLink}
    secondaryButtonText={hero.secondaryButtonText}
    secondaryButtonLink={hero.secondaryButtonLink}
/>

<MinimalCallToAction
    title={ctaTop.title}
    description={ctaTop.description}
    primaryButtonText={ctaTop.primaryButtonText}
    primaryButtonLink={ctaTop.primaryButtonLink}
    backgroundColor={topCtaBackgroundColor as string}
/>

<!-- Solutions Section -->
<section id="solutions" class="py-16 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Solutions</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Technology solutions tailored to your unique needs for {industry} sector.
            </p>
        </div>
        <div class="space-y-16">
            {#each solutions as solution, i}
                <IndustrySolution solution={solution} index={i} />
            {/each}
        </div>
    </div>
</section>

<!-- Case Studies Section -->
<section class="py-16 bg-gray-50 dark:bg-gray-900" id="case-studies">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Case Studies</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how we've helped customers transform and streamline their operations.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each caseStudies as study}
                <CaseStudy
                    title={study.title}
                    client={study.client}
                    challenge={study.challenge}
                    solution={study.solution}
                    results={study.results}
                    image={study.image}
                    technologyStack={study.TechnologyStack}
                />
            {/each}
        </div>
    </div>
</section>

<!-- Call to Action -->
<CallToAction
    title={ctaBottom.title}
    description={ctaBottom.description}
    primaryButtonText={ctaBottom.primaryButtonText}
    primaryButtonLink={ctaBottom.primaryButtonLink}
    backgroundColor={bottomCtaBackgroundColor as string}
/>
