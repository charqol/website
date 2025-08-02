<script>
    import "../app.css";
    import { onMount } from 'svelte';
    import { initializeAOS } from '../aos.config.js'; 
    onMount(() => {
        initializeAOS();
    });
  </script>
  
  <slot />

  