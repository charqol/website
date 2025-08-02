<script lang="ts">
    import { statsData } from '$lib/data/stats';

    export let backgroundColors = "bg-white dark:bg-gray-800";
</script>

<section class="py-20 {backgroundColors}">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each statsData as stat, i}
                <div
                    class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center animate-slide-in-up"
                    style="animation-delay: {i * 100}ms"
                >
                    <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                    <p class="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
