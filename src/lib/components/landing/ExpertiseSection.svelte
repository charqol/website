<script lang="ts">
    import { services } from '$lib/data/services';

    export let backgroundColors = "bg-white dark:bg-gray-900";
    export let title = "Our Expertise";
    export let description = "Specialized solutions across diverse technological domains";

</script>

<section class="py-20 {backgroundColors}">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {description}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each services as area}
                <a
                    href={area.link}
                    class="group flex flex-col bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-100 dark:hover:bg-slate-800/20"
                >
                    <!-- Top Content Section -->
                    <div class="p-6">
                        <div class="flex items-center justify-left mb-4 gap-4">
                            {#if area.icon}
                                <img src={area.icon} alt={area.title} class="w-8 h-8" />
                            {/if}
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                {area.title}
                            </h3>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            {area.description}
                        </p>
                    </div>

                    <!-- Bottom Image Section (takes remaining space) -->
                    <div class="relative mt-auto h-48 flex-grow">
                        <img
                            src={area.landingImage}
                            alt={area.title}
                            class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <!-- Gradient overlay ON TOP of image -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
