<script lang="ts">
    let {
        backgroundColor = "primary",
        title = "Ready to start your project?",
        description = "Let's discuss how we can help you achieve your goals.",
        primaryButtonText = "Start a Project",
        primaryButtonLink = "/contact",
        secondaryButtonText = null,
        secondaryButtonLink = null,
        textColors }: {
            backgroundColor: string,
            title: string,
            description: string,
            primaryButtonText: string,
            primaryButtonLink: string,
            secondaryButtonText?: string | null,
            secondaryButtonLink?: string | null,
            textColors?: string } = $props();

    let sectionClass = $state("py-4 bg-gradient-to-r from-primary-500 to-gray-900 text-gray-900 dark:text-white");

    $effect(() => {
        if (backgroundColor === "primary") {
            sectionClass = "py-4 bg-gradient-to-r from-primary-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "blue") {
            sectionClass = "py-4 bg-gradient-to-r from-blue-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "green") {
            sectionClass = "py-4 bg-gradient-to-r from-green-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "yellow") {
            sectionClass = "py-4 bg-gradient-to-r from-yellow-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "purple") {
            sectionClass = "py-4 bg-gradient-to-r from-purple-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "red") {
            sectionClass = "py-4 bg-gradient-to-r from-red-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "teal") {
            sectionClass = "py-4 bg-gradient-to-r from-teal-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "gray") {
            sectionClass = "py-4 bg-gradient-to-r from-gray-500 to-gray-900 text-gray-900 dark:text-white";
        } else if (backgroundColor === "slate") {
            sectionClass = "py-4 bg-gradient-to-r from-slate-500 to-gray-900 text-gray-900 dark:text-white";
        } else {
            sectionClass = "py-4 bg-gradient-to-r from-primary-500 to-gray-900 text-gray-900 dark:text-white";
        }
        console.log(sectionClass);
    });

</script>

<section
    class={sectionClass}
>
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-6 md:mb-0 md:mr-8">
                <h2 class="text-2xl font-bold {textColors} mb-2">{title}</h2>
                <p class="text-lg {textColors} opacity-90">{description}</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
                <a
                    href={primaryButtonLink}
                    class="px-8 py-3 {backgroundColor === 'primary'
                        ? 'bg-white text-primary-500 hover:bg-gray-100'
                        : 'bg-primary-500 text-white hover:bg-primary-600'} rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                >
                    {primaryButtonText}
                </a>
                {#if secondaryButtonText !== null && secondaryButtonText !== ''}
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
