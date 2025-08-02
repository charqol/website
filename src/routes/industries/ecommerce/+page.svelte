<script lang="ts">
    import {
        hero,
        caseStudies,
        solutions,
        industry,
        title,
        description,
        ctaBottom,
        ctaTop,
        infographics
    } from '$lib/data/industries/ecommerce';
    import Industry from '$lib/components/industry/Industry.svelte';

    import type { PageProps } from '../$types';

    const { data }: PageProps = $props();
    const seo = data?.seo;
</script>

<!-- <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelte:head> -->

<Industry
    seo={seo}
    industry={industry}
    title={title}
    description={description}
    hero={hero}
    solutions={solutions}
    caseStudies={caseStudies}
    ctaBottom={ctaBottom}
    ctaTop={ctaTop}
    infographics={infographics}
    topCtaBackgroundColor="yellow"
    bottomCtaBackgroundColor="primary"
/>
