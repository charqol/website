<script lang="ts">
    export let otherBlogsInSeries: {
        sequence: number;
        title: string;
        slug: string;
    }[];
    export let seriesTitle: string;
    export let seriesSeuence: number;
</script>

<div class="text-gray-500 dark:text-gray-400 my-4">
    <!-- <h2 class="text-2xl font-bold">{seriesTitle}</h2> -->
    <p class="mt-4">
        This blog is part {seriesSeuence} of the <strong>{seriesTitle}</strong> series.
        You may also want to check out the other blogs in this series:
    </p>
    <ul>
        {#each otherBlogsInSeries as blog}
            <li class="my-2 text-blue-500 dark:text-blue-400">
                <!-- svelte-ignore a11y_anchor_has_content -->
                <a 
                    href={`/blogs/${blog.slug}`}
                    class="hover:text-blue-600 dark:hover:text-blue-400"
                    data-sveltekit-reload
                >
                    Part {blog.sequence}. {blog.title}
                </a>
            </li>
        {/each}
    </ul>
</div>
