<script lang="ts">
    import CallToAction from '$lib/components/common/CallToAction.svelte';

    // This would typically come from your CMS or API based on the category parameter
    const category = 'AI & Machine Learning'; // This would be dynamic based on the route parameter
    const posts = [
        {
            title: 'Implementing AI in Your Software Development Process',
            excerpt:
                'How to integrate AI tools and technologies to enhance your software development workflow and productivity.',
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
            date: 'February 10, 2024',
            readTime: '7 min read',
            image: '/images/blog/ml-web.jpg',
            author: {
                name: 'Sarah Johnson',
                avatar: '/images/team/sarah-johnson.jpg',
            },
            tags: ['AI', 'Web Development', 'Machine Learning'],
        },
        {
            title: 'Natural Language Processing: A Practical Guide',
            excerpt:
                'A comprehensive guide to implementing NLP in your applications, from basic concepts to advanced techniques.',
            date: 'January 25, 2024',
            readTime: '8 min read',
            image: '/images/blog/nlp-guide.jpg',
            author: {
                name: 'Michael Chen',
                avatar: '/images/team/michael-chen.jpg',
            },
            tags: ['AI', 'NLP', 'Machine Learning'],
        },
    ];

    const relatedCategories = [
        { name: 'Software Development', count: 15 },
        { name: 'Web Development', count: 12 },
        { name: 'Cloud Computing', count: 8 },
        { name: 'DevOps', count: 10 },
    ];

    const popularTags = [
        { name: 'AI', count: 25 },
        { name: 'Machine Learning', count: 18 },
        { name: 'Deep Learning', count: 12 },
        { name: 'Neural Networks', count: 8 },
        { name: 'Natural Language Processing', count: 15 },
        { name: 'Computer Vision', count: 10 },
    ];
</script>

<svelte:head>
    <title>{category} - Blog Posts | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Explore our latest articles about {category} and stay updated with the latest trends in software development."
    />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-32 bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">{category}</h1>
            <p class="text-xl opacity-90">
                Explore our latest articles and insights about {category} and related topics in software development.
            </p>
        </div>
    </div>
</section>

<!-- Blog Posts Grid -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {#each posts as post}
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
                                    <h2
                                        class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
                                    >
                                        {post.title}
                                    </h2>
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
                                            <div class="text-sm text-gray-500 dark:text-gray-400">{category}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    {/each}
                </div>

                <!-- Pagination -->
                <div class="mt-12 flex justify-center">
                    <nav class="flex items-center space-x-2">
                        <a
                            href="#"
                            class="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                            Previous
                        </a>
                        <a href="#" class="px-4 py-2 bg-primary-600 text-white rounded-lg">1</a>
                        <a
                            href="#"
                            class="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                            >2</a
                        >
                        <a
                            href="#"
                            class="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                            >3</a
                        >
                        <a
                            href="#"
                            class="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                            Next
                        </a>
                    </nav>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-4">
                <div class="sticky top-8">
                    <!-- Related Categories -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Related Categories</h3>
                        <div class="space-y-2">
                            {#each relatedCategories as relatedCategory}
                                <a
                                    href="/blog/category/{relatedCategory.name.toLowerCase().replace(/ /g, '-')}"
                                    class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                >
                                    {relatedCategory.name}
                                    <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"
                                        >({relatedCategory.count})</span
                                    >
                                </a>
                            {/each}
                        </div>
                    </div>

                    <!-- Popular Tags -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Tags</h3>
                        <div class="flex flex-wrap gap-2">
                            {#each popularTags as tag}
                                <a
                                    href="/blog/tag/{tag.name.toLowerCase()}"
                                    class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                >
                                    #{tag.name}
                                    <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">({tag.count})</span>
                                </a>
                            {/each}
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">
                            Stay updated with our latest articles and insights about {category} and other technology topics.
                        </p>
                        <form class="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                class="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<CallToAction
    title="Want to Learn More About {category}?"
    description="Our team of experts can help you implement {category} solutions in your projects. Let's discuss how we can help."
    primaryButtonText="Contact Us"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
