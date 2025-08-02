<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { crossfade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { caseStudies } from '$lib/data/case.studies';

    export let backgroundColors = "bg-white dark:bg-gray-900";
    export let title = "Success Stories";
    export let description = "Discover how we've helped businesses transform their operations with our innovative solutions.";

    let currentIndex = 0;
    let timer: ReturnType<typeof setTimeout>;
    const visibleCards = 3;
    const interval = 10000;

    const [send, receive] = crossfade({
        duration: 800,
        easing: quintOut
    });

    function getVisibleStudies() {
        const studies = [];
        for (let i = 0; i < visibleCards; i++) {
            const index = (currentIndex + i) % caseStudies.length;
            studies.push(caseStudies[index]);
        }
        return studies;
    }

    function startTimer() {
        clearTimeout(timer);
        timer = setTimeout(nextSlide, interval);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % caseStudies.length;
        startTimer();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + caseStudies.length) % caseStudies.length;
        startTimer();
    }

    onMount(() => {
        startTimer();
    });

    onDestroy(() => {
        clearTimeout(timer);
    });
</script>

<section class="py-20 {backgroundColors}">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {description}
            </p>
        </div>

        <div class="relative">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each getVisibleStudies() as study (study.id)}
                    <div
                        in:receive={{key: study.id}}
                        out:send={{key: study.id}}
                        class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
                    >
                        <img src={study.image} alt={study.title} class="w-full h-48 object-cover" />
                        <div class="p-6 flex flex-col flex-grow">
                            <span class="text-primary-600 dark:text-primary-400 text-sm font-semibold">{study.category}</span>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-4">{study.title}</h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                {study.description}
                            </p>
                            <div class="mt-auto">
                                <a href={study.link} class="text-primary-600 dark:text-primary-400 hover:underline inline-block">Read More →</a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Navigation Buttons -->
            <button
                class="absolute -left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                onclick={prevSlide}
                aria-label="Previous case studies"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                class="absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300"
                onclick={nextSlide}
                aria-label="Next case studies"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <!-- Slide Navigation Dots -->
        <div class="flex justify-center mt-8 space-x-2">
            {#each caseStudies as _, i}
                <!-- svelte-ignore element_invalid_self_closing_tag -->
                <button
                    class="w-2 h-2 rounded-full transition-all duration-300 {i === currentIndex ? 'bg-primary-600 w-4' : 'bg-gray-300 dark:bg-gray-600'}"
                    onclick={() => {
                        currentIndex = i;
                        startTimer();
                    }}
                    aria-label="Go to case study {i + 1}"
                />
            {/each}
        </div>
    </div>
</section>
