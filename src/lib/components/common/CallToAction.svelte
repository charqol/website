<script lang="ts">
    export let title: string;
    export let description: string;
    export let primaryButtonText = 'Get In Touch';
    export let secondaryButtonText = 'Learn More';
    export let primaryButtonLink = '#';
    export let secondaryButtonLink = '#';
    export let backgroundColor = 'primary';
    export let showSecondaryButton = false;
</script>

<section
    class="py-12 {backgroundColor === 'primary'
        ? 'bg-gradient-to-r from-primary-500 to-primary-900 text-white'
        : 'bg-gradient-to-r from-primary-500 to-green-900 text-gray-900 dark:text-white'}"
>
    <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {title}
            </h2>
            <p class="text-xl mb-8 text-gray-200 dark:text-gray-300 leading-relaxed">
                {description}
            </p>
            <div class="flex justify-center space-x-4">
                <a
                    href={primaryButtonLink}
                    class="px-8 py-3 {backgroundColor === 'primary'
                        ? 'bg-white text-primary-500 hover:bg-gray-100'
                        : 'bg-primary-500 text-white hover:bg-primary-600'} rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                >
                    {primaryButtonText}
                </a>
                {#if showSecondaryButton}
                    <a
                        href={secondaryButtonLink}
                        class="px-8 py-3 {backgroundColor === 'primary'
                            ? 'border-2 border-white text-white hover:bg-white/10'
                            : 'border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500/10'} rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {secondaryButtonText}
                    </a>
                {/if}
            </div>
        </div>
    </div>
</section>
