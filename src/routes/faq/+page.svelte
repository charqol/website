<script lang="ts">
    import Faq from "$components/common/Faq.svelte";
    import Seo from "$components/common/Seo.svelte";
    import { contactPageFaqs } from "$lib/data/faq";
    import type { PageProps } from "../$types";

    const { data }: PageProps = $props();
    const seo = data?.seo;
</script>

<Seo
    pageTitle={seo?.title}
    pageDescription={seo?.description}
    pageImage={seo?.image}
    pageUrl={seo?.url}
    pageKeywords={seo?.keywords}
    pageCardImage={seo?.cardImage}
    googleAnalyticsId={seo?.googleAnalyticsId}
    companyName={seo?.companyName}
    logo={seo?.logo}
    sameAs={seo?.sameAs}
    contactPoint={seo?.contactPoint}
/>

<!-- Page Header -->
<section class="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 py-16 md:py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-500 mb-4">Frequently Asked Questions</h1>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-300">Answers to common questions about our services and products.</p>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<Faq faqs={contactPageFaqs} />
