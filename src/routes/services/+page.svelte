<script lang="ts">
    import ServiceCard from '$lib/components/services/ServiceCard.svelte';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import { services } from '$lib/data/services';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import CaseStudiesSlider from '$lib/components/common/CaseStudiesSlider.svelte';
    import Hero from '$components/common/Hero.svelte';

    import type { PageProps } from './$types';
    import Seo from '$components/common/Seo.svelte';

    const { data }: PageProps = $props();
    const seo = data?.seo;
</script>

<!-- <svelte:head>
    <title>Our Services | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Explore our comprehensive range of software development services designed to enhance your business capabilities."
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
    image="/images/services/services-hero.jpg"
    imageAlt="Services"
    title="Our Services"
    description="Comprehensive software solutions tailored to meet your business needs and drive growth."
/>

<MinimalCallToAction
    title="Ready to Get Started?"
    description="Contact us today to discuss your project requirements and discover how we can help you achieve your business goals."
    primaryButtonText="Request a Quote"
    primaryButtonLink="/contact"
    backgroundColor="blue"
/>

<!-- Services Overview -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From custom software development to AI solutions, we provide a wide range of services to help your
                business thrive in the digital age.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each services as expertise, i}
                <div class="animate-slide-in-up" style="animation-delay: {i * 100}ms">
                    <ServiceCard {expertise} />
                </div>
            {/each}
        </div>
    </div>
</section>

<MinimalCallToAction
    title="Product Engineering"
    description="Check out our product engineering methodology to learn more about our approach to building products."
    primaryButtonText="Learn More"
    primaryButtonLink="/product-engineering"
    backgroundColor="purple"
/>

<CaseStudiesSlider
    title="Case Studies"
    description="Check out our case studies to see how we've helped businesses achieve their goals."
/>

<!-- Process Section -->
<!-- <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Development Process</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered on time, within budget, and to the
                highest quality standards.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-slide-in-left">
                <div class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">1</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Discovery</h3>
                <p class="text-gray-600 dark:text-gray-300">
                    We begin by understanding your business needs, goals, and challenges to define the project scope.
                </p>
            </div>
            <div
                class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-slide-in-left"
                style="animation-delay: 100ms"
            >
                <div class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">2</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Planning</h3>
                <p class="text-gray-600 dark:text-gray-300">
                    We develop a detailed project plan, timeline, and resource allocation strategy.
                </p>
            </div>
            <div
                class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-slide-in-left"
                style="animation-delay: 200ms"
            >
                <div class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Development</h3>
                <p class="text-gray-600 dark:text-gray-300">
                    Our team builds your solution using agile methodologies with regular updates and feedback.
                </p>
            </div>
            <div
                class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-slide-in-left"
                style="animation-delay: 300ms"
            >
                <div class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">4</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Delivery</h3>
                <p class="text-gray-600 dark:text-gray-300">
                    We deploy your solution, provide training, and offer ongoing support to ensure success.
                </p>
            </div>
        </div>
    </div>
</section> -->

<!-- CTA Section -->
<CallToAction
    title="Ready to Get Started?"
    description="Contact us today to discuss your project requirements and discover how we can help you achieve your business goals."
    primaryButtonText="Request a Quote"
    secondaryButtonText="Schedule a Consultation"
    primaryButtonLink="/contact"
    secondaryButtonLink="/contact"
/>
