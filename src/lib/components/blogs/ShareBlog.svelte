<script lang="ts">
    import { PUBLIC_BASE_URL } from '$env/static/public';

    export let link: string = `${PUBLIC_BASE_URL}/blogs`;

</script>

<div class="bg-gray-200 dark:bg-gray-700 rounded-md p-4 mb-4 mt-4">
    <div class="flex justify-center space-x-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white ">Share on</h3>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a
            href={link}
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
        >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
            </svg>
        </a>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a
            href={link}
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
        >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
            </svg>
        </a>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a
            href={link}
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
        >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
            </svg>
        </a>
    </div>
</div>

<style>

    /* Dev.to-inspired styling */
    .dev-container {
        width: 100%;
        max-width: auto;
        margin: 0 auto;
        padding: 1rem 1rem;
        color: #171717;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    .blog-header {
        margin-bottom: 2rem;
    }

    .blog-header h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: #111827;
    }

    .category-tag {
        margin-bottom: 1rem;
    }

    .category-tag span {
        font-size: 1rem;
        font-weight: 600;
        color: #3b49df;
    }

    .article-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        font-size: 0.9rem;
        color: #64748b;
    }

    .tags-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag-item {
        color: #3b49df;
        font-weight: 500;
    }

    .cover-image {
        margin: 2rem 0;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .cover-image img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }

    .article-content {
        margin-bottom: 2rem;
    }

    .prose-content {
        line-height: 1.7;
        font-size: 1.125rem;
        color: #374151;
    }

    .prose-content :global(h1),
    .prose-content :global(h2),
    .prose-content :global(h3),
    .prose-content :global(h4),
    .prose-content :global(h5),
    .prose-content :global(h6) {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.3;
        color: #111827;
    }

    .prose-content :global(h1) {
        font-size: 2.25rem;
    }

    .prose-content :global(h2) {
        font-size: 1.875rem;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 0.5rem;
    }

    .prose-content :global(h3) {
        font-size: 1.5rem;
    }

    .prose-content :global(p) {
        margin-bottom: 1.5rem;
    }

    .prose-content :global(ul),
    .prose-content :global(ol) {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
    }

    .prose-content :global(li) {
        margin-bottom: 0.5rem;
    }

    .prose-content :global(a) {
        color: #3b49df;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s;
    }

    .prose-content :global(a:hover) {
        border-color: #3b49df;
    }

    .prose-content :global(blockquote) {
        border-left: 4px solid #3b49df;
        padding-left: 1rem;
        color: #4b5563;
        font-style: italic;
        margin: 1.5rem 0;
    }

    .prose-content :global(pre) {
        background: #1e293b;
        color: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1.5rem 0;
    }

    .prose-content :global(code) {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.9em;
        background: rgba(229, 231, 235, 0.5);
        padding: 0.2em 0.4em;
        border-radius: 0.25rem;
    }

    .prose-content :global(pre code) {
        background: transparent;
        padding: 0;
        border-radius: 0;
    }

    .prose-content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin: 1.5rem 0;
    }

    .prose-content :global(hr) {
        border: 0;
        border-top: 1px solid #e5e7eb;
        margin: 2rem 0;
    }

    .prose-content :global(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
    }

    .prose-content :global(th),
    .prose-content :global(td) {
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
    }

    .prose-content :global(th) {
        background: #f9fafb;
        font-weight: 600;
        text-align: left;
    }

    /* Dark mode support */
    :global(.dark) .blog-header h1 {
        color: #f3f4f6;
    }

    :global(.dark) .prose-content {
        color: #d1d5db;
    }

    :global(.dark) .prose-content :global(h1),
    :global(.dark) .prose-content :global(h2),
    :global(.dark) .prose-content :global(h3),
    :global(.dark) .prose-content :global(h4),
    :global(.dark) .prose-content :global(h5),
    :global(.dark) .prose-content :global(h6) {
        color: #f3f4f6;
    }

    :global(.dark) .prose-content :global(h2) {
        border-bottom-color: #374151;
    }

    :global(.dark) .prose-content :global(a) {
        color: #818cf8;
    }

    :global(.dark) .prose-content :global(a:hover) {
        border-color: #818cf8;
    }

    :global(.dark) .prose-content :global(blockquote) {
        color: #9ca3af;
    }

    :global(.dark) .prose-content :global(code) {
        background: rgba(55, 65, 81, 0.5);
    }

    :global(.dark) .prose-content :global(hr) {
        border-top-color: #374151;
    }

    :global(.dark) .prose-content :global(th),
    :global(.dark) .prose-content :global(td) {
        border-color: #374151;
    }

    :global(.dark) .prose-content :global(th) {
        background: #1f2937;
    }
</style>
