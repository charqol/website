<script lang="ts">
    export let title: string;
    export let description: string;
    export let image: string;
    export let primaryButtonText: string = '';
    export let primaryButtonLink: string = '';
    export let secondaryButtonText: string = '';
    export let secondaryButtonLink: string = '';
</script>

<section class="relative min-h-[60vh] py-12 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
        <img src={image} alt={title} class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl ml-auto text-left">
            <h1
                class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight opacity-70 animate-fade-slide-in"
                style="animation-delay: 300ms;"
            >
                {title}
            </h1>
            <p
                class="text-xl text-gray-200 mb-8 leading-relaxed opacity-60 animate-fade-slide-in"
                style="animation-delay: 500ms;"
            >
                {description}
            </p>
            <div
                class="flex space-x-4 opacity-80 animate-fade-slide-in"
                style="animation-delay: 700ms;"
            >
                {#if primaryButtonText}
                    <a
                        href={primaryButtonLink}
                        class="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                    >
                        {primaryButtonText}
                    </a>
                {/if}
                <!-- {#if secondaryButtonText}
                    <a
                        href={secondaryButtonLink}
                        class="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    >
                        {secondaryButtonText}
                    </a>
                {/if} -->
            </div>
        </div>
    </div>
</section>
