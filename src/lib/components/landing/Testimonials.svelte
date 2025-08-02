<script lang="ts">
    import { testimonials } from '$lib/data/testimonials';
    import { onMount } from 'svelte';

    export let backgroundColors = "bg-gray-100 dark:bg-gray-800";

    let currentSlide = 0;
    let sliderContainer: HTMLElement;
    let autoplayInterval: number;
    let isHovered = false;

    const slideCount = testimonials.length; // Total number of testimonials

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSliderPosition();
    }

    function goToSlide(index: number) {
        currentSlide = index;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        if (sliderContainer) {
            const slideWidth = sliderContainer.clientWidth;
            sliderContainer.scrollTo({
                left: currentSlide * slideWidth,
                behavior: 'smooth'
            });
        }
    }

    function startAutoplay() {
        if (!isHovered) {
            autoplayInterval = window.setInterval(nextSlide, 10000);
        }
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    onMount(() => {
        startAutoplay();
        return () => {
            stopAutoplay();
        };
    });
</script>

<section class="py-20 {backgroundColors}">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it!
            </p>
        </div>

        <!-- Slider Container -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            bind:this={sliderContainer}
            class="relative overflow-hidden max-w-3xl mx-auto"
            on:mouseenter={() => { isHovered = true; stopAutoplay(); }}
            on:mouseleave={() => { isHovered = false; startAutoplay(); }}
        >
            <!-- Slides -->
            <div class="flex transition-transform duration-500 ease-in-out">
                {#each testimonials as testimonial}
                <!-- Testimonial 1 -->
                <div class="min-w-full px-4">
                    <div class="bg-gradient-to-r from-gray-50 to-gray-300 dark:from-gray-500 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div class="flex items-center mb-4">
                            <a href="{testimonial.website}" target="_blank">
                                <div class="flex-shrink-0">
                                    <img class="h-12 w-auto rounded-sm" src="{testimonial.image}" alt="{testimonial.name}" />
                                </div>
                            </a>
                            <div class="ml-4">
                                <a href="{testimonial.linkedInLink}" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.title}, {testimonial.company}</p>
                                </a>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 italic">
                            ❝ {testimonial.testimonial} ❞
                        </p>
                    </div>
                </div>
                {/each}
            </div>
        </div>

        <!-- Dots Navigation -->
        <div class="flex justify-center mt-8 space-x-2">
            {#each Array(slideCount) as _, i}
                <button
                    class="w-3 h-3 rounded-full transition-all duration-300 {currentSlide === i ? 'bg-primary-600 scale-125' : 'bg-gray-300 dark:bg-gray-600'}"
                    on:click={() => goToSlide(i)}
                    aria-label="Go to testimonial {i + 1}"
                ></button>
            {/each}
        </div>
    </div>
</section>
