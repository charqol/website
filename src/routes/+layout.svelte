<script lang="ts">
    import '../app.css';
    import { navigating, page } from '$app/stores';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Header from '$lib/components/common/Header.svelte';
    import Footer from '$lib/components/common/Footer.svelte';
    import { darkMode } from '$lib/stores/theme';
    import Seo from '$lib/components/common/Seo.svelte';

    export let data;
    const seoData = data?.seo;

    // Track page visits
    let lastPath = '';

    // Record a page visit when the page changes
    async function recordPageVisit(path: string, previousPath: string | null = null) {
        if (!browser) return;

        try {
            const params = new URLSearchParams(window.location.search);
            const response = await fetch('/api/analytics/page-visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    page: path,
                    referrer: document.referrer,
                    previousPath: previousPath,
                    utmSource: params.get('utm_source'),
                    utmMedium: params.get('utm_medium'),
                    utmCampaign: params.get('utm_campaign'),
                    utmTerm: params.get('utm_term'),
                    utmContent: params.get('utm_content')
                })
            });

            if (!response.ok) {
                console.error('Failed to record page visit');
            }
        } catch (error) {
            console.error('Error recording page visit:', error);
        }
    }

    // Watch for page changes
    $: if (browser && $page && $page.url.pathname !== lastPath) {
        const previousPath = lastPath || null;
        lastPath = $page.url.pathname;
        recordPageVisit($page.url.pathname, previousPath);
    }

    // Record initial page visit
    onMount(() => {
        if (browser) {
            recordPageVisit($page.url.pathname);
        }
    });
</script>

<!-- <Seo
    pageTitle={seoData?.title}
    pageDescription={seoData?.description}
    pageImage={seoData?.image}
    pageUrl={seoData?.url}
    pageKeywords={seoData?.keywords}
    pageCardImage={seoData?.cardImage}
    googleAnalyticsId={seoData?.googleAnalyticsId}
    companyName={seoData?.companyName}
    logo={seoData?.logo}
    sameAs={seoData?.sameAs}
    contactPoint={seoData?.contactPoint}
/> -->

<!-- Loading Overlay -->
{#if $navigating}
    <div
        class="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center"
    >
        <div class="text-center">
            <div
                class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"
            ></div>
            <p class="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
    </div>
{/if}

<div class="min-h-screen flex flex-col {$darkMode ? 'dark' : ''}">
    <Header />

    <!-- Main Content -->
    <main class="flex-grow pt-20">
        <slot />
    </main>

    <Footer />

</div>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(body) {
        @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white;
    }
</style>
