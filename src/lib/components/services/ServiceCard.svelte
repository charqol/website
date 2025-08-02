<script lang="ts">
    import type { Expertise } from '$lib/types/expertise';

    export let expertise: Expertise;
</script>

<div
    class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 h-full flex flex-col"
>
    <div class="p-6 space-y-4 flex flex-col flex-grow">
        <div class="flex items-center mb-4">
            <div class="w-12 h-12 flex items-center justify-center transition-colors duration-300">
                <img src={expertise.icon} alt={expertise.title} class="h-8 w-8" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200 ml-4">
                {expertise.title}
            </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300">
            {expertise.description}
        </p>
        {#if expertise.differentiators}
            <ul class="space-y-2 pt-2 flex-grow">
                {#each expertise.differentiators as differentiator}
                    <li class="flex items-start text-gray-600 dark:text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm">{differentiator.title}</span>
                    </li>
                {/each}
            </ul>
        {/if}
        <div class="pt-4 mt-auto">
            <a
                href={expertise.link}
                class="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 group-hover:translate-x-1 transform"
            >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </div>
    </div>
</div>
