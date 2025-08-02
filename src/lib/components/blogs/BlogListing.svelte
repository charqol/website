<script lang="ts">
    import type { BlogPost } from '$lib/types/blog';
    import BlogListCard from '$components/blogs/BlogListCard.svelte';
    import BlogGridCard from '$components/blogs/BlogGridCard.svelte';

    let {
        posts,
        currentPage = 1,
        onPageChange,
    }: {
        posts: BlogPost[];
        currentPage: number;
        onPageChange: (page: number) => void;
    } = $props();

    let basePostsPerPage: number = 6; // Base number for grid view
    let displayMode: 'grid' | 'list' = $state('grid');

    // Calculate posts per page based on display mode
    let postsPerPage = $derived(displayMode === 'grid' ? basePostsPerPage : 10);
    let totalPosts = $derived(posts.length);
    let totalPages = $derived(Math.ceil(totalPosts / postsPerPage));
    let displayedPosts = $derived(posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage));

    $effect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        }
    });

    $effect(() => {
        console.log('Current Page:', currentPage);
        console.log('Total Pages:', totalPages);
        console.log('Filtered Posts:', posts?.length);
        console.log('Displayed Posts:', displayedPosts?.length);
        console.log('Display Mode:', displayMode);
        console.log('Posts Per Page:', postsPerPage);
    });

    // Toggle display mode
    function setDisplayMode(mode: 'grid' | 'list') {
        displayMode = mode;
    }

    // Function to change page
    function goToPage(page: number) {
        currentPage = Math.max(1, Math.min(totalPages, page));
        onPageChange(currentPage);
    }

</script>

<div>
    <!-- Display Mode Controls -->
    <div class="flex justify-between items-center mb-6">
        <div class="text-gray-700 dark:text-gray-300">
            <span>{totalPosts} blog post{totalPosts !== 1 ? 's' : ''}</span>
        </div>
        <div class="flex border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
            <button
                class="p-2 {displayMode === 'grid'
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'}"
                onclick={() => setDisplayMode('grid')}
                aria-label="Grid view"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </button>
            <button
                class="p-2 {displayMode === 'list'
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'}"
                onclick={() => setDisplayMode('list')}
                aria-label="List view"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>

    {#if displayMode === 'grid'}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each displayedPosts as post, i}
                <BlogGridCard {post} index={i} />
            {/each}
        </div>
    {:else}
        <div class="space-y-4">
            {#each displayedPosts as post, i}
                <BlogListCard {post} index={i} />
            {/each}
        </div>
    {/if}

    <!-- Pagination -->
    <div class="mt-12 flex justify-center">
        <nav class="flex items-center space-x-2">
            <button
                class="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
                onclick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {#if totalPages > 0}
                {#each Array(totalPages) as _, i}
                    <button
                        class="px-4 py-2 rounded-md {currentPage === i + 1
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'} transition-colors duration-200"
                        onclick={() => goToPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                {/each}
            {/if}
            <button
                class="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
                onclick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
            >
                Next
            </button>
        </nav>
    </div>
</div>
