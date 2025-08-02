<script lang="ts">
    import { ourValues } from '$lib/data/our.values';

    export let backgroundColors = "bg-white dark:bg-gray-800";
    export let title = "Our Core Values";
    export let description = "As a company, we believe in the importance of our core values and how they are part of our culture.";
</script>

<section class="py-16 {backgroundColors}">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each ourValues as item}
                <div class="relative bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl h-full transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <!-- Subtle Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-transparent to-transparent rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <!-- Content (Positioned above overlay) -->
                    <div class="relative z-10">
                        <div class="flex items-center mb-4">
                            <img src={item.icon} alt={item.iconAlt} class="w-10 h-10 mr-4" />
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

