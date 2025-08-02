<script lang="ts">
  import { cookieConsentStore } from '$lib/stores/cookie.consent';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let isVisible = false;
  let consentStatus = '';

  function showDebug() {
    isVisible = !isVisible;
    updateStatus();
  }

  function resetConsent() {
    cookieConsentStore.reset();
    updateStatus();
    // Force page reload to show banner
    if (browser) {
      window.location.reload();
    }
  }

  function updateStatus() {
    if (browser) {
      const stored = localStorage.getItem('cookie-consent');
      consentStatus = stored ? JSON.stringify(JSON.parse(stored), null, 2) : 'No consent stored';
    }
  }

  onMount(() => {
    updateStatus();
  });
</script>

<!-- Simple button in bottom right to toggle debug panel -->
<button
  class="fixed bottom-4 right-4 bg-gray-200 p-2 rounded z-50 text-xs"
  on:click={showDebug}
>
  🍪
</button>

{#if isVisible}
  <div class="fixed bottom-12 right-4 bg-white border border-gray-300 rounded p-4 shadow-lg z-50 max-w-sm">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-sm font-bold">Cookie Consent Debug</h3>
      <button class="text-xs" on:click={() => isVisible = false}>✕</button>
    </div>

    <div class="text-xs mb-4">
      <pre class="bg-gray-100 p-2 rounded overflow-auto max-h-40">{consentStatus}</pre>
    </div>

    <div class="flex gap-2">
      <button
        class="bg-red-500 text-white px-2 py-1 rounded text-xs"
        on:click={resetConsent}
      >
        Reset Consent
      </button>
    </div>
  </div>
{/if}

<style>
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  pre {
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  }
</style>
