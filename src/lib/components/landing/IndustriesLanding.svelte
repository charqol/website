<script lang="ts">
    import { industries } from '$lib/data/industries/industries';

    export let backgroundColors = "bg-gray-100 dark:bg-gray-800";
    export let title = "Industries We Serve";
    export let description = "Our expertise spans across various industries, delivering tailored solutions for specific needs.";
</script>

<!-- Industries Section -->
<section class="py-10 sm:py-14 md:py-20 {backgroundColors}">
    <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">{title}</h2>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
                {description}
            </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {#each industries as industry}
                <a href={industry.link || `/industries/${industry.id}`} class="block no-underline hover:no-underline">
                    <div class="bg-gray-200 dark:bg-gray-900 rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl text-center transition-all duration-300 transform hover:scale-105 h-full">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 text-primary-500">
                            <img src={industry.icon} alt={industry.iconAlt} class="w-full h-full" />
                        </div>
                        <h3 class="text-base sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">{industry.title}</h3>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

