<!-- src/lib/components/Infographics.svelte -->
<script lang="ts">
    import type { InfographicMetadata } from '$lib/types/industry';
    export let infographics: InfographicMetadata[];
</script>

<section class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Industry Insights
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            {#each infographics as infographic}
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div class="h-48 overflow-hidden">
                        <img
                            src={infographic.image}
                            alt={infographic.title}
                            class="w-full h-full object-contain p-4"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {infographic.title}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            {infographic.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
