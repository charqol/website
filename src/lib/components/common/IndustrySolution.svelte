<script lang="ts">
    import type { IndustrySolutionMetadata } from '$lib/types/industry';

    export let solution: IndustrySolutionMetadata;
    export let index: number = 0;

</script>

<div class="flex flex-col md:flex-row gap-8 items-center">
    <div class="w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div class="flex flex-col md:flex-row items-stretch">
            <div class="md:w-1/2 {index % 2 === 0 ? 'md:order-2' : ''} flex">
                <div class="relative w-full min-h-[24rem] md:min-h-full">
                    <img src={solution.image} alt={solution.title} class="absolute inset-0 w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/10"></div>
                </div>
            </div>
            <div class="md:w-1/2 p-8 {index % 2 === 1 ? 'md:order-2' : ''}">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{solution.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">{solution.description}</p>
                <div class="grid grid-cols-1 gap-4">
                    {#each solution.features as feature}
                        <div class="flex items-start">
                            <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
