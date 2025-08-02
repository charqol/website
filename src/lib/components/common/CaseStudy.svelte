<script lang="ts">
    import TechStack from '$lib/components/common/TechStack.svelte';

    export let title: string;
    export let client: string;
    export let challenge: string;
    export let solution: string;
    export let results: string[] = [];
    export let image: string;
    export let technologyStack: string[] = [];
</script>

<div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
    <img src={image} alt={title} class="w-full h-48 object-cover" />
    <div class="p-8">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p class="text-primary-600 dark:text-primary-400 font-medium mb-4">{client}</p>
        <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
            <p class="text-gray-600 dark:text-gray-300">{challenge}</p>
        </div>
        <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
            <p class="text-gray-600 dark:text-gray-300">{solution}</p>
        </div>
        <div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
            <ul class="space-y-2">
                {#each results as result}
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-600 dark:text-gray-300">{result}</span>
                    </li>
                {/each}
            </ul>
        </div>

        {#if technologyStack && technologyStack.length > 0}
            <TechStack technologies={technologyStack} />
        {/if}
    </div>
</div>
