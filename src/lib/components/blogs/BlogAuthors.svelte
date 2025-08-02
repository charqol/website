<script lang="ts">
    import type { Author } from "$lib/types/blog";

    export let authors: Author[] = [];

    // Default fallback avatar if none is provided
    const defaultAvatar = "/images/blogs/team/default-avatar.jpg";

</script>

<div class="bg-gray-200 dark:bg-gray-700 rounded-md p-3 sm:p-4 mb-3 sm:mb-4 mt-3 sm:mt-4">
    <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">
        {#if authors.length > 1}
            Meet Our
        {:else}
            Meet Our
        {/if}
        {authors.length > 1 ? 'Authors' : 'Author'}
    </h3>

    <div class="h-px opacity-90 bg-gray-300 dark:bg-gray-600 mb-3 sm:mb-4"></div>

    <div class="space-y-3 sm:space-y-4">
        {#each authors as author, i}
            <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div class="flex-shrink-0 mb-2 sm:mb-0">
                    <a href={`/blogs/authors/${author.slug}`}>
                        <img
                            src={author.avatar || defaultAvatar}
                            alt={author.name}
                            class="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary-500"
                        />
                    </a>
                </div>
                <div class="sm:ml-4">
                    <a href={`/blogs/authors/${author.slug}`}>
                        <h4 class="font-semibold text-gray-900 dark:text-white">{author.name}</h4>
                    </a>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 px-2 sm:px-0">
                        {author.bio ? author.bio.slice(0, 90) + ' ...' : ''}
                        <br/>
                        <a href={`/blogs/authors/${author.slug}`} class="text-teal-500 hover:teal-green-600">Know more about {author.name?.split(' ')[0]}</a>
                    </p>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <div class="flex justify-center sm:justify-start space-x-2 mt-2">
                        {#if author.twitter}
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <a href={author.twitter} class="text-primary-500 hover:text-primary-600">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                                </svg>
                            </a>
                        {/if}
                        {#if author.linkedin}
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <a href={author.linkedin} class="text-primary-500 hover:text-primary-600">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
            {#if i < authors.length - 1}
                <div class="h-px opacity-90 bg-gray-300 dark:bg-gray-600 my-3 sm:my-4"></div>
            {/if}
        {/each}
    </div>
</div>
