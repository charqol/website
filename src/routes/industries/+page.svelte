<script lang="ts">
    import { industries } from '$lib/data/industries/industries';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import Hero from '$components/common/Hero.svelte';
</script>

<svelte:head>
    <title>Industries We Serve | Software Development Services</title>
    <meta name="description" content="Explore the industries we serve with our custom software solutions. From finance and healthcare to e-commerce and manufacturing, we deliver tailored technology for your industry." />
</svelte:head>

<Hero
    image="/images/industries/industries-hero.jpg"
    imageAlt="Industries We Serve"
    title="Industries We Serve"
    description="We deliver tailored software solutions across diverse industries, addressing unique challenges and opportunities in each sector."
/>

<MinimalCallToAction
    title="Check out our industry specific solutions!"
    description="Let's discuss how our solutions can address your industry specific challenges."
    primaryButtonText="Start a Project"
    primaryButtonLink="/contact"
    backgroundColor="slate"
/>

<!-- Industries Grid -->
<section class="py-16 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            {#each industries as industry}
                <a href={`/industries/${industry.id}`} class="block transform transition-all duration-300 hover:scale-105">
                    <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 mr-6 text-primary-500">
                                <img src={industry.icon} alt={industry.iconAlt} class="w-full h-full" />
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{industry.title}</h2>
                        </div>

                        <p class="text-gray-600 dark:text-gray-300 mb-6">
                            {industry.description}
                        </p>

                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h3>
                        <ul class="space-y-2">
                            {#each industry.benefits as benefit}
                                <li class="flex items-start">
                                    <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-600 dark:text-gray-300">{benefit}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- Call to Action -->
<MinimalCallToAction
    title="Ready to transform your industry with custom software?"
    description="Let's discuss how our solutions can address your specific industry challenges."
    primaryButtonText="Start a Project"
    primaryButtonLink="/contact"
    secondaryButtonText="View Services"
    secondaryButtonLink="/services"
    backgroundColor="primary"
/>
