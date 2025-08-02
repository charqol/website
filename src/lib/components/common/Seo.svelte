<script lang="ts">
    import { defaultSeoData, isDevelopment } from '$lib/data/seo';

    export let googleAnalyticsId: string = defaultSeoData.googleAnalyticsId;
    export let pageTitle: string = defaultSeoData.title;
    export let pageDescription: string = defaultSeoData.description;
    export let pageImage: string = defaultSeoData.image;
    export let pageUrl: string = defaultSeoData.url;
    export let pageKeywords: string | undefined = defaultSeoData.keywords;
    export let pageCardImage: string = defaultSeoData.cardImage;
    export let companyName: string = defaultSeoData.companyName;
    export const logo: string = defaultSeoData.logo;
    export const sameAs: string[] = defaultSeoData.sameAs;
    export const contactPoint: {
        telephone: string;
        contactType: string;
    } = defaultSeoData.contactPoint;

    let defaultTitle = `${companyName}`;

    let title = pageTitle ? `${defaultTitle} - ${pageTitle}` : defaultTitle;
    let description = pageDescription ? pageDescription : defaultSeoData.description;
    let image = pageImage ? pageImage : defaultSeoData.image;
    let url = pageUrl ? pageUrl : defaultSeoData.url;
    let keywords = pageKeywords ? pageKeywords : defaultSeoData.keywords;
    let cardImage = pageCardImage ? pageCardImage : defaultSeoData.cardImage;

    // console.log('SEO Data:', {
    //     title,
    //     description,
    //     image,
    //     url,
    //     keywords,
    //     cardImage,
    //     companyName,
    //     logo,
    //     sameAs,
    //     contactPoint
    // });

    // Track analytics consent
    // let analyticsConsent = false;

    // Subscribe to cookie consent store
    // const unsubscribe = cookieConsentStore.subscribe(value => {
    //     analyticsConsent = value.analytics;
    // });

    // onMount(() => {
    //     return unsubscribe;
    // });

</script>

<svelte:head>
    {#if isDevelopment}
        <meta name="robots" content="noindex, nofollow" />
    {/if}

    <title>{title}</title>
    <meta name="description" content={description} />

    {#if !isDevelopment}
        <!-- OpenGraph tags -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        <!-- Twitter Card tags -->
        <meta name="twitter:card" content={cardImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={cardImage} />

        <meta name="keywords" content={keywords} />
        <meta name="author" content={companyName} />

        <!-- Canonical -->
        <link rel="canonical" href={url} />

        <!-- Favicon and Manifest -->
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo_180.png" />
        <!-- Uncomment this when the PWA is ready -->
        <!-- <link rel="manifest" href="/manifest.json" /> -->
        <meta name="theme-color" content="#ffffff" />

        <!-- JSON-LD Schema -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": {companyName},
            "url": {url},
            "logo": {logo},
            "sameAs": {sameAs},
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": {contactPoint.telephone},
                    "contactType": {contactPoint.contactType}
                }
            }
        </script>
    {/if}

    <!-- Google Analytics -->
    {#if !isDevelopment /*&& analyticsConsent*/ }
        <!-- Google tag (gtag.js) -->
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', `${googleAnalyticsId}`);
        </script>
    {/if}

</svelte:head>
