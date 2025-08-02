<script lang="ts">
    import type { BlogPost } from '$lib/types/blog';
    import { formatDate } from '$lib/utils/common.utils';

    export let post: BlogPost & {
        readTime?: string;
        author?: {
            name: string;
            avatar: string;
        };
    };
    export let index: number = 0;
    const heroImage = post.image ? `/content/blogs/${post.slug}/${post.image}` : `/images/blogs/hero-placeholder.jpg`;
</script>

<article
    class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-up flex flex-col h-full"
    style="animation-delay: {index * 100}ms"
>
    <a href="/blogs/{post.slug}">
    <div class="h-0 pb-[50%] relative overflow-hidden">
        <img src={heroImage} alt={post.title} class="absolute inset-0 object-cover w-full h-full" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    </div>
    <div class="p-6 flex-grow">
        <div class="flex items-center space-x-4 mb-4">
            {#if post.category}
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400"
                    >{post.category}</span
                >
            {/if}
            <span class="text-sm text-gray-500 dark:text-gray-400">{formatDate(post.date)}</span>
            {#if post.readTime}
                <span class="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
            {/if}
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            <span class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
                {post.title}
            </span>
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">{post.description ? post.description.substring(0, 100): ''}</p>
        <div
            class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
            {#if post.readTimeMinutes && post.readTimeMinutes > 0}
                <span>{post.readTimeMinutes} min read</span>
                <span> | </span>
            {/if}
            {#if post.authors}
                {#each post.authors as author, i}
                    <span>{author.name}</span>
                    {#if i < post.authors.length - 1}
                        ,
                    {/if}
                {/each}
            {/if}
        </div>
    </div>
    </a>
</article>
