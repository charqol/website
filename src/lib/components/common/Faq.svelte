<script lang="ts">
    import { fade } from 'svelte/transition';
    import type { FaqItem } from '$lib/types/faq';

    export let faqs: FaqItem[] = [];
    export let title:string|null|undefined = undefined;
    export let description:string|undefined = undefined;

    let openFaq: number | null = null;

    function toggleFaq(index: number) {
        openFaq = openFaq === index ? null : index;
    }
</script>

<section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
        {#if title }
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
                {#if description}
                    <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {description}
                    </p>
                {/if}
            </div>
        {/if}
        <!-- <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            {#if description}
                <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {description}
                </p>
            {/if}
        </div> -->

        <div class="max-w-3xl mx-auto">
            {#each faqs as faq, index}
                <div class="mb-6">
                    <button
                        on:click={() => toggleFaq(index)}
                        class="flex justify-between items-center w-full px-6 py-4 text-left bg-white dark:bg-gray-700 {openFaq === index ? 'rounded-t-lg' : 'rounded-lg'} shadow-md hover:shadow-lg transition-all duration-300"
                        aria-expanded={openFaq === index}
                        aria-controls={`faq-answer-${index}`}
                    >
                        <span class="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                        <svg class="w-5 h-5 text-primary-500 transform transition-transform duration-300 {openFaq === index ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {#if openFaq === index}
                    <div
                        transition:fade={{ duration: 200 }}
                        class="px-6 py-4 bg-white dark:bg-gray-700 rounded-b-lg shadow-md -mt-1 text-gray-600 dark:text-gray-300"
                        id={`faq-answer-${index}`}
                    >
                        <p>{faq.answer}</p>
                    </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
