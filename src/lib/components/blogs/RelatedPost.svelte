<script lang="ts">
  import type { BlogPost } from '$lib/types/blog';

  export let post: BlogPost;

  const image = post.image ? `/content/blogs/${post.slug}/${post.image}` : '/images/blogs/hero-placeholder.jpg';

</script>

<a href="/blogs/{post.slug}" class="block group" data-sveltekit-reload>
  <div class="relative overflow-hidden mb-3">
    <!-- Image container with rounded top corners only -->
    <div class="overflow-hidden rounded-t-lg">
      <img
        src={image}
        alt={post.title}
        class="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </div>
  </div>
  <h4
    class="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
  >
    {post.title}
  </h4>

      <div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
        <span>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        {#if post.authors}
          <span> | </span>
          {#each post.authors as author, i}
            <span>{author.name}</span>
            {#if i < post.authors.length - 1}
              ,
            {/if}
          {/each}
        {/if}
      </div>

  <div class="flex items-center justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">

    <span>{post.readTime}</span>
  </div>
</a>

<style>
  /* Removed aspect ratio styling as we're now using fixed height */
</style>
