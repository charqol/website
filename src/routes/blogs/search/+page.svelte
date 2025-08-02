<script lang="ts">
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import { onMount } from 'svelte';

    let searchQuery = '';
    let searchResults: any[] = [];
    let isSearching = false;
    let recentSearches = ['AI Development', 'Cloud Computing', 'Web Development', 'DevOps Best Practices'];

    // This would typically come from your CMS or API
    const allPosts = [
        {
            title: 'The Future of Software Development: Trends to Watch in 2024',
            excerpt:
                'Explore the latest trends shaping the software development landscape, from AI-powered development to low-code platforms.',
            category: 'Software Development',
            date: 'March 15, 2024',
            readTime: '5 min read',
            image: '/images/blog/future-dev.jpg',
            author: {
                name: 'John Smith',
                avatar: '/images/team/john-smith.jpg',
            },
            tags: ['AI', 'Development Trends', 'Cloud Computing'],
        },
        {
            title: 'Implementing AI in Your Software Development Process',
            excerpt:
                'How to integrate AI tools and technologies to enhance your software development workflow and productivity.',
            category: 'AI & Machine Learning',
            date: 'February 20, 2024',
            readTime: '6 min read',
            image: '/images/blog/ai-dev.jpg',
            author: {
                name: 'John Smith',
                avatar: '/images/team/john-smith.jpg',
            },
            tags: ['AI', 'Machine Learning', 'Development'],
        },
        {
            title: 'Machine Learning in Modern Web Applications',
            excerpt:
                'Learn how to incorporate machine learning capabilities into your web applications for enhanced user experiences.',
            category: 'AI & Machine Learning',
            date: 'February 10, 2024',
            readTime: '7 min read',
            image: '/images/blog/ml-web.jpg',
            author: {
                name: 'Sarah Johnson',
                avatar: '/images/team/sarah-johnson.jpg',
            },
            tags: ['AI', 'Web Development', 'Machine Learning'],
        },
    ];

    function handleSearch() {
        if (!searchQuery.trim()) return;

        isSearching = true;
        // Simulate API call delay
        setTimeout(() => {
            searchResults = allPosts.filter(
                (post) =>
                    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
            );
            isSearching = false;
        }, 500);
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    onMount(() => {
        // Check for query parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        if (query) {
            searchQuery = query;
            handleSearch();
        }
    });
</script>

<svelte:head>
    <title>Search Blog | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Search through our blog posts to find articles about software development, AI, cloud computing, and more."
    />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-32 bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Search Our Blog</h1>
            <p class="text-xl opacity-90 mb-8">
                Find articles about software development, AI, cloud computing, and more.
            </p>
            <div class="max-w-2xl mx-auto">
                <div class="relative">
                    <input
                        type="text"
                        bind:value={searchQuery}
                        on:keypress={handleKeyPress}
                        placeholder="Search articles..."
                        class="w-full px-6 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                        on:click={handleSearch}
                        class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Search Results -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-8">
                {#if isSearching}
                    <div class="text-center py-12">
                        <div
                            class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-600 border-t-transparent"
                        ></div>
                        <p class="mt-4 text-gray-600 dark:text-gray-300">Searching...</p>
                    </div>
                {:else if searchQuery && searchResults.length === 0}
                    <div class="text-center py-12">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">No results found</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                            We couldn't find any articles matching "{searchQuery}". Try different keywords or browse our
                            categories.
                        </p>
                    </div>
                {:else if searchResults.length > 0}
                    <div class="space-y-8">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                            Found {searchResults.length} results for "{searchQuery}"
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {#each searchResults as post}
                                <article
                                    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                                >
                                    <a href="/blog/{post.title.toLowerCase().replace(/ /g, '-')}" class="block">
                                        <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div class="p-6">
                                            <div
                                                class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4"
                                            >
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h3
                                                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
                                            >
                                                {post.title}
                                            </h3>
                                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                                {post.excerpt}
                                            </p>
                                            <div class="flex items-center">
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    class="w-10 h-10 rounded-full"
                                                />
                                                <div class="ml-3">
                                                    <div class="font-medium text-gray-900 dark:text-white">
                                                        {post.author.name}
                                                    </div>
                                                    <div class="text-sm text-gray-500 dark:text-gray-400">
                                                        {post.category}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            {/each}
                        </div>
                    </div>
                {:else}
                    <div class="text-center py-12">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start Your Search</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                            Enter keywords above to find articles about software development, AI, cloud computing, and
                            more.
                        </p>
                    </div>
                {/if}
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-4">
                <div class="sticky top-8">
                    <!-- Recent Searches -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Searches</h3>
                        <div class="space-y-2">
                            {#each recentSearches as search}
                                <button
                                    on:click={() => {
                                        searchQuery = search;
                                        handleSearch();
                                    }}
                                    class="w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                >
                                    {search}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <!-- Popular Categories -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Categories</h3>
                        <div class="space-y-2">
                            <a
                                href="/blog/category/software-development"
                                class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                            >
                                Software Development
                            </a>
                            <a
                                href="/blog/category/ai-machine-learning"
                                class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                            >
                                AI & Machine Learning
                            </a>
                            <a
                                href="/blog/category/cloud-computing"
                                class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                            >
                                Cloud Computing
                            </a>
                            <a
                                href="/blog/category/devops"
                                class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                            >
                                DevOps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<CallToAction
    title="Can't Find What You're Looking For?"
    description="Our team of experts can help you with your software development needs. Let's discuss your project."
    primaryButtonText="Contact Us"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
