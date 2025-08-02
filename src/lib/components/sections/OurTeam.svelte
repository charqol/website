<script lang="ts">
    import { teamMembers } from '$lib/data/team';

    export let title = "Our Team";
    export let description = "Meet the talented individuals who make our vision a reality.";
    export let backgroundColors = "bg-white dark:bg-gray-900";

    // Placeholder for social icons if you want to add them later
    // import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    // import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
    // import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<section class="py-20 {backgroundColors}">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {description}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each teamMembers as member, i}
                <div
                    class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-scale-in h-full flex flex-col"
                    style="animation-delay: {i * 100}ms"
                >
                    <div class="aspect-w-1 aspect-h-1">
                        <img src={member.image} alt={member.name} class="object-cover w-full h-full" />
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                        <p class="text-primary-600 dark:text-primary-400 mb-4">{member.position}</p>
                        <p class="text-gray-600 dark:text-gray-300 flex-grow mb-4">{member.bio}</p>

                        <!-- Optional Social Links -->
                        {#if member.socials}
                            <div class="mt-auto flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                {#if member.socials.linkedin}
                                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="{member.name} LinkedIn" class="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                        <!-- LinkedIn Icon (replace with actual icon component if using svelte-icons) -->
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                {/if}
                                {#if member.socials.twitter}
                                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="{member.name} Twitter" class="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                        <!-- Twitter Icon -->
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.565-.665 2.454 0 1.492.757 2.814 1.903 3.588-.704-.023-1.367-.216-1.952-.536v.08c0 2.084 1.483 3.819 3.45 4.21-.36.097-.738.148-1.13.148-.278 0-.548-.027-.813-.078.548 1.708 2.138 2.95 4.022 2.984-1.474 1.156-3.336 1.845-5.357 1.845-.348 0-.692-.02-1.03-.061 1.905 1.221 4.161 1.935 6.579 1.935 7.894 0 12.216-6.548 12.216-12.217 0-.186-.004-.372-.012-.557.84-.606 1.567-1.361 2.141-2.224z"></path></svg>
                                    </a>
                                {/if}
                                {#if member.socials.github}
                                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="{member.name} GitHub" class="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                        <!-- GitHub Icon -->
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                {/if}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
