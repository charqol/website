<script lang="ts">
    import { approachSteps, accelerators } from '$lib/data/product.engineering';
    import Hero from '$components/common/Hero.svelte';

    import type { PageProps } from './$types';
    import Seo from '$components/common/Seo.svelte';

    const { data }: PageProps = $props();
    const seo = data?.seo;

</script>

<!-- <svelte:head>
    <title>Product Engineering Services | Inflection Zone Lab</title>
    <meta name="description" content="From Ideation to Market-Ready Digital Products - We partner with startups and enterprises to bring bold ideas to life." />
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
    title="Product Engineering Services"
    description="From Ideation to Market-Ready Digital Products"
    image="/images/product-engineering/product-engineering-hero.jpg"
/>

<!-- Our Product Engineering Approach -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Product Engineering Approach</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                <strong>From Concept to Continuous Evolution.</strong><br>
                We believe product engineering is more than just coding—it's about turning ideas into experiences users love. We follow a full-lifecycle, agile-first approach:
            </p>
        </div>

        <!-- Process Steps -->
        <div class="relative">
            <!-- Connection Line -->
            <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 dark:bg-primary-900 transform -translate-x-1/2 hidden md:block z-0"></div>

            <div class="space-y-4 md:space-y-0 relative">
                {#each approachSteps as step, i}
                    <div class="relative flex flex-col md:flex-row md:items-center py-2 md:py-3">
                        <!-- Icon - Always absolutely centered on the line -->
                        <div class="order-1 md:order-none absolute left-1/2 top-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <div class="w-12 h-12 rounded-full bg-slate-800/80 text-white flex items-center justify-center text-2xl shadow-lg">
                                {step.icon}
                            </div>
                        </div>

                        <!-- Content Box -->
                        <div class={`order-2 md:order-none w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-center md:text-right' : 'md:pl-16 md:ml-auto text-center md:text-left'}`}>
                            <div class="inline-block align-top group p-6 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500/30 dark:to-green-900/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary-50 dark:hover:bg-gray-700">
                                <div class="flex flex-col items-center md:items-start gap-2 mb-2 md:flex-row md:gap-4 md:items-center md:mb-4">
                                    <span class="hidden md:inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 font-bold text-xl transition-colors group-hover:bg-primary-200 dark:group-hover:bg-primary-800">
                                        {step.number}
                                    </span>
                                    <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                        {step.title}
                                    </h3>
                                </div>
                                <p class="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                         <!-- Mobile Step Number/Connector -->
                         <div class="order-0 md:hidden flex flex-col items-center my-4">
                             <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 font-bold text-lg mb-2">
                                 {step.number}
                             </span>
                             {#if i < approachSteps.length - 1}
                                 <div class="w-1 h-12 bg-primary-100 dark:bg-primary-900"></div>
                             {/if}
                         </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- Our Accelerators & Frameworks -->
<section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Differentiators</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We bring a unique combination of industry expertise, technical excellence, and proven methodologies.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {#each accelerators as accelerator, i}
                <div class="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500/30 dark:to-green-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 text-white rounded-lg flex items-center justify-center text-4xl transition-colors">
                            {accelerator.icon}
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {accelerator.title}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                {accelerator.description}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Why Choose Us -->
<!-- <section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Differentiators</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We bring a unique combination of industry expertise, technical excellence, and proven methodologies.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {#each benefits as benefit}
                <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary-100 dark:border-primary-800 flex flex-col items-center">
                    <div class="text-4xl mb-4 text-primary-600 dark:text-primary-400">
                        {benefit.icon}
                    </div>
                    <p class="text-gray-900 dark:text-white font-semibold">
                        {benefit.title}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section> -->

<!-- Let's Build Your Next Product -->
<section class="py-20 bg-gradient-to-br from-primary-600 to-blue-800 text-white">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Let's Build Your Next Product</h2>
            <p class="text-xl mb-8">
                Whether you're a startup with a big idea or an enterprise transforming your stack—we'd love to help you build it.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a
                    href="/contact"
                    class="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    Discover Now!
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<!-- <CallToAction
    title="Ready to Build Your Next Digital Product?"
    description="Let's discuss how we can help you bring your product idea to life with our engineering expertise."
    primaryButtonText="Start a Project"
    secondaryButtonText="Learn More"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/> -->

<style>
    @keyframes gradient-x {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-gradient-x {
        animation: gradient-x 15s ease infinite;
        background-size: 200% 200%;
    }
</style>
