<script lang="ts">
    import { mainNav } from '$lib/data/navigation';
    import { page } from '$app/stores';
    import { darkMode } from '$lib/stores/theme';
    import { fade, slide } from 'svelte/transition';
    import { clickOutside } from '$lib/actions/clickOutside';

    let isMenuOpen = false;
    let openDropdowns: Record<string, boolean> = {};

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        // Close all dropdowns when toggling menu
        if (!isMenuOpen) {
            closeDropdowns();
        }
    }

    function toggleDropdown(label: string) {
        openDropdowns = {
            ...openDropdowns,
            [label]: !openDropdowns[label]
        };
    }

    function closeDropdowns() {
        openDropdowns = {};
    }

    function toggleDarkMode() {
        $darkMode = !$darkMode;
    }
</script>

<header
    class="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all duration-300"
>
    <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <!-- Logo and Site Name -->
            <div class="flex items-center space-x-2 flex-shrink-0 px-2">
                <img src="/images/logo_1024x1024_transparent.png" alt="Charcoal ERP" class="w-12 h-12" />
                <a
                    href="/"
                    class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-800 bg-clip-text text-transparent hover:from-primary-600 hover:to-primary-700 transition-all duration-300 whitespace-nowrap"
                >
                    Charcoal ERP
                </a>
            </div>

            <!-- Desktop Navigation - Only show on large screens (lg) and up -->
            <div class="hidden lg:flex items-center space-x-8">
                {#each mainNav as item}
                    {#if item.children}
                        <div class="relative" use:clickOutside={{ handler: closeDropdowns }}>
                            <button
                                class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 flex items-center {$page.url.pathname.startsWith(item.href) ? 'text-primary-500 dark:text-primary-400 font-medium' : ''}"
                                on:click|stopPropagation={() => toggleDropdown(item.label)}
                            >
                                {item.label}
                                <svg
                                    class="w-4 h-4 ml-1 transition-transform duration-200 {openDropdowns[item.label] ? 'rotate-180' : ''}"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {#if openDropdowns[item.label]}
                                <div
                                    class="absolute mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 z-20"
                                    transition:slide={{ duration: 200, easing: (t) => t * (2 - t) }}
                                >
                                    <div class="p-4">
                                        <p class="text-sm font-medium text-gray-400 dark:text-gray-500 mb-2">{item.label}</p>
                                        <div class="grid gap-2">
                                            {#each item.children as childItem, index}
                                                {#if childItem.label === 'menu-separator'}
                                                    <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                                                {:else}
                                                    <a
                                                        href={childItem.href}
                                                        class="block p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors {$page.url.pathname === childItem.href ? 'bg-gray-50 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''}"
                                                        data-sveltekit-reload
                                                    >
                                                    {childItem.label}
                                                </a>
                                                {/if}
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    {:else}
                        <a
                            href={item.href}
                            class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 {$page.url.pathname === item.href ? 'text-primary-500 dark:text-primary-400 font-medium' : ''}"
                        >
                            {item.label}
                        </a>
                    {/if}
                {/each}
            </div>

            <!-- CTA Buttons -->
            <!-- <div class="hidden md:flex items-center space-x-4">
                <button
                    class="px-4 py-2 text-primary-500 border border-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    Contact Us
                </button>
            </div> -->

            <!-- Dark Mode Toggle - Hidden on mobile -->
            <button
                class="hidden lg:block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                on:click={toggleDarkMode}
            >
                {#if $darkMode}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                {/if}
            </button>

            <!-- Mobile Menu Button -->
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button
                class="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                on:click={toggleMenu}
            >
                {#if isMenuOpen}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                {/if}
            </button>
        </div>

        <!-- Mobile Menu -->
        {#if isMenuOpen}
            <div class="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700" transition:slide={{ duration: 200 }}>
                <div class="flex flex-col space-y-4">
                    {#each mainNav as item}
                        {#if item.children}
                            <div>
                                <button
                                    class="flex justify-between w-full text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 {$page.url.pathname.startsWith(item.href) ? 'text-primary-500 dark:text-primary-400 font-medium' : ''}"
                                    on:click={() => toggleDropdown(item.label)}
                                >
                                    {item.label}
                                    <svg
                                        class="w-4 h-4 transition-transform duration-200 {openDropdowns[item.label] ? 'rotate-180' : ''}"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                {#if openDropdowns[item.label]}
                                    <div class="mt-2 ml-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                                         transition:slide={{ duration: 200 }}
                                    >
                                        {#each item.children as childItem, index}
                                            {#if childItem.label === 'menu-separator'}
                                                <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                                            {:else}
                                                <a
                                                    href={childItem.href}
                                                    class="block py-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 {$page.url.pathname === childItem.href ? 'text-primary-500 dark:text-primary-400' : ''}"
                                                    data-sveltekit-reload
                                                    on:click={() => isMenuOpen = false}
                                                >
                                                    {childItem.label}
                                                </a>
                                            {/if}
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        {:else}
                            <a
                                href={item.href}
                                class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 {$page.url.pathname === item.href ? 'text-primary-500 dark:text-primary-400 font-medium' : ''}"
                                on:click={() => isMenuOpen = false}
                            >
                                {item.label}
                            </a>
                        {/if}
                    {/each}

                    <!-- Dark Mode Toggle in Mobile Menu -->
                    <div class="pt-2">
                        <button
                            class="flex items-center w-full text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                            on:click={toggleDarkMode}
                        >
                            <span class="mr-2">
                                {#if $darkMode}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                {:else}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                {/if}
                            </span>
                            {$darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>

                    <div class="flex flex-col space-y-2 pt-4">
                        <button
                            class="w-full px-4 py-2 text-primary-500 border border-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
                        >
                            Get a Quote
                        </button>
                        <button
                            class="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    </nav>
</header>
