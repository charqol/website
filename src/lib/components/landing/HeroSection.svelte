<script lang="ts">
    import { crossfade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount, onDestroy } from 'svelte';
    import type { HeroSlide } from '$lib/types/hero';

    export let slides: HeroSlide[] = [];
    export let autoAdvance = true;
    export let interval = 10000;

    let currentSlide = 0;
    let timer: ReturnType<typeof setTimeout>;

    function startTimer() {
        if (autoAdvance) {
            // Clear any existing timer first
            clearTimeout(timer);
            // Start a new timer
            timer = setTimeout(nextSlide, interval);
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        startTimer();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        startTimer();
    }

    function goToSlide(index: number) {
        currentSlide = index;
        startTimer();
    }

    onMount(() => {
        startTimer();
    });

    onDestroy(() => {
        clearTimeout(timer);
    });

    const [send, receive] = crossfade({
        duration: 800,
        easing: quintOut
    });
</script>

<section class="relative h-[85vh] overflow-hidden">
    {#each slides as slide, i}
        {#if i === currentSlide}
            <div
                class="absolute inset-0"
                in:receive={{key: `slide-${i}`}}
                out:send={{key: `slide-${i}`}}
            >
                <div
                    class="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-105"
                    style="background-image: url('{slide.image}');"
                >
                    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50"></div>
                </div>
                <div class="relative h-full flex items-center">
                    <div class="container mx-auto px-4">
                        <div class={`max-w-3xl ${slide.alignment === 'right' ? 'ml-auto' : ''}`}>
                            <h1
                                class="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-slide-in"
                                style="animation-delay: 300ms;"
                            >
                                {slide.title}
                            </h1>
                            <p
                                class="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed opacity-0 animate-fade-slide-in"
                                style="animation-delay: 500ms;"
                            >
                                {slide.description}
                            </p>
                            <!-- On mobile screens, buttons should be one below the other -->
                            <div
                                class="flex flex-col gap-2 md:flex-row md:space-x-4 opacity-0 animate-fade-slide-in"
                                style="animation-delay: 700ms;"
                            >
                                {#if slide.primaryButtonText}
                                    <a
                                        href={slide.primaryButtonLink}
                                        class="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                                    >
                                        {slide.primaryButtonText}
                                    </a>
                                {/if}
                                {#if slide.secondaryButtonText}
                                    <a
                                        href={slide.secondaryButtonLink}
                                        class="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                                    >
                                        {slide.secondaryButtonText}
                                    </a>
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {/each}

    <!-- Slide Navigation -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {#each slides as _, i}
            <button
                class="w-3 h-3 rounded-full transition-all duration-300 {i === currentSlide
                    ? 'bg-primary-500 scale-125'
                    : 'bg-white/50 hover:bg-white/75'}"
                on:click={() => goToSlide(i)}
            >
                <span class="sr-only">Go to slide {i + 1}</span>
            </button>
        {/each}
    </div>

    <!-- Previous/Next Buttons -->
    <button
        class="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        on:click={prevSlide}
        aria-label="Previous slide"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>
    <button
        class="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        on:click={nextSlide}
        aria-label="Next slide"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</section>

<style>
    @keyframes fade-slide-in {
        0% {
            opacity: 0;
            transform: translateX(var(--slide-direction, -30px));
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .animate-fade-slide-in {
        animation: fade-slide-in 0.8s ease-out forwards;
        --slide-direction: -30px;
    }

    [style*="right"] .animate-fade-slide-in {
        --slide-direction: 30px;
    }
</style>
