<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="min-h-[60vh] flex items-center justify-center bg-white dark:bg-gray-900">
    <div class="text-center">
        <div
            class="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-600 border-t-transparent"
        ></div>
        <p class="mt-6 text-xl text-gray-600 dark:text-gray-300">Loading {$page.route.id}...</p>
        <div class="mt-8 space-y-2">
            <div class="w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-48 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-56 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
    </div>
</div>
