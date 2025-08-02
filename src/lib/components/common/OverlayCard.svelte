<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    export let visible = false;

    onMount(() => {
        setTimeout(() => {
            visible = true;
        }, 100);
    });
</script>

<div class="absolute top-10 w-full pointer-events-none z-50 px-4 md:px-6 animate-move-across-wide">
    {#if visible}
        <div
            class="relative mx-auto bg-gradient-to-br from-white/40 to-gray-200/40 dark:from-gray-700/40 dark:to-gray-900/40 rounded-2xl p-2 md:p-4 shadow-xl max-w-sm transform transition-opacity duration-1000"
            in:fly={{ y: 30, duration: 1000, delay: 100, easing: (t) => 1 - Math.pow(1 - t, 3) }}
            out:fade={{ duration: 200 }}
        >
            <div class="text-center overflow-hidden">
                <h2 class="text-lg md:text-xl font-bold mb-2">
                    <span class="inline-block text-primary-800 dark:text-primary-400" in:fly={{ y: 15, duration: 700, delay: 500 }}>Less Drag.</span>
                    <span class="inline-block text-purple-700 dark:text-purple-400 ml-1" in:fly={{ y: 15, duration: 700, delay: 600 }}>More Dev.</span>
                    <span class="inline-block text-green-800 dark:text-green-400 ml-1" in:fly={{ y: 15, duration: 700, delay: 700 }}>Any Scale.</span>
                </h2>
                <!-- <p class="text-base md:text-lg text-gray-700 dark:text-primary-400 font-semibold"
                   in:fly={{ y: 10, duration: 600, delay: 800 }}>
                    Engineered to Scale
                </p> -->
            </div>
        </div>
    {/if}
</div>

<style>
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }

    .animate-float {
        animation: float 4s ease-in-out infinite;
    }

    @keyframes text-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .animate-text-gradient {
        background-size: 200% auto; /* Increased size for smoother gradient animation */
        animation: text-gradient 5s linear infinite;
    }

    @keyframes move-across-wide {
        0% { transform: translateX(-40vw); } /* Start further left */
        50% { transform: translateX(40vw); }  /* Move further right */
        100% { transform: translateX(-40vw); } /* Return further left */
    }

    .animate-move-across-wide {
        /* Apply wider animation to the outer container */
        animation: move-across-wide 25s ease-in-out infinite; /* Increased duration for slower movement */
    }
</style>
