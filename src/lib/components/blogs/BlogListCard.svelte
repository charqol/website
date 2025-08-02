<script lang="ts">
    import type { BlogPost } from '$lib/types/blog';
    import { formatDate } from '$lib/utils/common.utils';

    export let post: BlogPost;
    export let index: number = 0;

    const image = post.image ? `/content/blogs/${post.slug}/${post.image}` : '/images/blogs/hero-placeholder.jpg';

</script>

<a href={`/blogs/${post.slug}`}
    class="block transition-transform duration-200 hover:scale-105 group"
    style="animation-delay: {index * 100}ms"
>
    <!-- Mobile view (with background image) -->
    <div class="sm:hidden bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg relative h-auto min-h-24">
        {#if post.image}
            <div class="absolute inset-0 z-0">
                <img src={image} alt={post.title} class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gray-900 opacity-85"></div>
            </div>
        {/if}
        <div class="relative z-10 h-full p-3 flex flex-col justify-center">
            <h3 class="text-base font-bold text-primary-500 line-clamp-2 mb-1">
                {post.title}
            </h3>
            <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-gray-200">{formatDate(post.date)}</span>
                {#if post.readTimeMinutes && post.readTimeMinutes > 0}
                    <span class="text-xs text-gray-200">{post.readTimeMinutes} min read</span>
                {/if}
            </div>
            {#if post.authors && post.authors.length > 0}
                <div class="flex items-center text-xs text-green-500 mb-1 truncate">
                    <!-- <span>By </span> -->
                    {#each post.authors as author, i}
                        <span>{author.name}{i < post.authors.length - 1 ? ', ' : ''}</span>
                    {/each}
                </div>
            {/if}
            <!-- <div class="flex items-center gap-1 flex-wrap">
                {#if post.category}
                    <span class="inline-block px-1.5 py-0.5 text-2xs font-semibold bg-primary-600 text-white rounded-md">
                        {post.category}
                    </span>
                {/if}
                {#if post.tags && post.tags.length > 0}
                    {#each post.tags.slice(0, 2) as tag}
                        <span class="inline-block px-1.5 py-0.5 text-2xs bg-gray-700 text-gray-200 rounded-md">
                            {tag}
                        </span>
                    {/each}
                {/if}
            </div> -->
        </div>
    </div>

    <!-- Tablet and Desktop view (original layout) -->
    <div class="hidden sm:block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg h-auto min-h-32">
        <div class="flex h-full">
            {#if post.image}
                <div class="w-40 min-w-40 h-full">
                    <img
                        src={image}
                        alt={post.title}
                        class="w-full h-full object-cover"
                    />
                </div>
            {/if}
            <div class="p-3 flex-1 flex flex-col justify-between overflow-hidden {post.image ? '' : 'md:w-full'}">
                <div>
                    <div class="flex items-center justify-between mb-1">
                        <h3 class="text-base font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                            {post.title}
                        </h3>
                        <span class="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">{formatDate(post.date)}</span>
                    </div>
                </div>
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
                <div class="flex items-center gap-2 flex-wrap mb-2">
                    {#if post.category}
                        <span class="inline-block px-2 py-0.5 text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100 rounded-md">
                            {post.category}
                        </span>
                    {/if}
                    {#if post.tags && post.tags.length > 0}
                        {#each post.tags.slice(0, 2) as tag}
                            <span class="inline-block px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                                {tag}
                            </span>
                        {/each}
                    {/if}
                </div>
            </div>
        </div>
    </div>
</a>

<style>
    /* Define a text-2xs class for very small text on mobile */
    .text-2xs {
        font-size: 0.65rem;
        line-height: 1rem;
    }
</style>
