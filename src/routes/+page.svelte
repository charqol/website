<script lang="ts">
    import HeroSection from '$lib/components/landing/HeroSection.svelte';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import ExpertiseSection from '$lib/components/landing/ExpertiseSection.svelte';
    import WhyChooseUs from '$lib/components/landing/WhyChooseUs.svelte';
    import Testimonials from '$lib/components/landing/Testimonials.svelte';
    import CaseStudiesSlider from '$lib/components/common/CaseStudiesSlider.svelte';
    import IndustriesLanding from '$lib/components/landing/IndustriesLanding.svelte';
    import { heroSlides } from '$lib/data/hero';
    import MinimalCallToAction from '$lib/components/common/MinimalCallToAction.svelte';
    import OverlayCard from '$lib/components/common/OverlayCard.svelte';

    import CookieConsent from '$lib/components/common/CookieConsent.svelte';
    // import CookieDebug from '$lib/components/common/CookieDebug.svelte';

    export let data;
    const isDevelopment = data?.isDevelopment ?? false;

    const lightBackground = "bg-white dark:bg-gray-800";
    const darkBackground = "bg-gray-200 dark:bg-gray-900";

</script>

<div class="relative">
    <HeroSection slides={heroSlides} />
    <OverlayCard visible={true} />
</div>

<MinimalCallToAction
    title="Ready to Transform Your Digital Presence?"
    description="Talk to us about how we can accelerate your business through tailored software solutions."
    primaryButtonText="Get In Touch"
    primaryButtonLink="/contact"
    backgroundColor="primary"
/>

<ExpertiseSection backgroundColors={darkBackground} />

<CallToAction
    title="Let’s Build What’s Next, Together"
    description="Let’s connect and build something exceptional..."
    primaryButtonText="Get In Touch"
    primaryButtonLink="/contact"
/>

<WhyChooseUs backgroundColors={lightBackground} />
<CaseStudiesSlider backgroundColors={darkBackground} />
<IndustriesLanding backgroundColors={lightBackground} />
<Testimonials backgroundColors={darkBackground} />

<MinimalCallToAction
    title="From Concept to Code — We've Got You Covered"
    description="Discover how our end-to-end product engineering approach turns bold ideas into scalable digital products."
    primaryButtonText="Get In Touch"
    primaryButtonLink="/contact"
    backgroundColor="secondary"
/>

<!-- Cookie Consent Banner -->
<!-- Adding only for home page -->
<CookieConsent />

<!-- Cookie Debug Tool - only in development -->
<!-- {#if isDevelopment}
    <CookieDebug />
{/if} -->
