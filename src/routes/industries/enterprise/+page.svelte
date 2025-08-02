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
    } from '$lib/data/industries/enterprise';
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
    {seo}
    {industry}
    {title}
    {description}
    {hero}
    {solutions}
    {caseStudies}
    {ctaBottom}
    {ctaTop}
    {infographics}
    topCtaBackgroundColor="purple"
    bottomCtaBackgroundColor="primary"
/>
