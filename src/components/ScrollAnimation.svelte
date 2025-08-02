<script>
    import { onMount } from 'svelte';
    /**
	 * @type {HTMLDivElement}
	 */
    let element;
    let isVisible = false;

    function handleScroll() {
        const rect = element.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= viewHeight && rect.bottom >= 0) {
            isVisible = true;
        } else {
            isVisible = false;
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<div
    bind:this={element}
    class:opacity-0={!isVisible}
    class:translate-y-12={!isVisible}
    class="transition-transform duration-1000 ease-out transform"
>
    <slot />
</div>
