<script lang="ts">
  import { onMount } from 'svelte';
  import { cookieConsentStore, type ConsentType, type CookieConsent } from '$lib/stores/cookie.consent';
  import { browser } from '$app/environment';

  // Development mode detection
  const DURATION =  90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds

  // Consent visibility state
  let showBanner = false;
  let showPreferences = false;

  // Current consent values (for checkboxes)
  let consent: CookieConsent;

  // Subscribe to the cookie consent store
  const unsubscribe = cookieConsentStore.subscribe((value) => {
    consent = value;
  });

  // Cleanup subscription on component destroy
  onMount(() => {
    if (browser) {
      // Check if consent exists in localStorage
      const storedConsent = localStorage.getItem('cookie-consent');

      // Show banner if no consent exists or if it's expired
      if (!storedConsent) {
        showBanner = true;
      } else {
        try {
          const parsedConsent = JSON.parse(storedConsent);
          const timestamp = parsedConsent.timestamp || 0;
          // Show if more than 180 days old (expired) or if timestamp is missing
          showBanner = !timestamp || (Date.now() - timestamp > DURATION);
        } catch (error) {
          // If localStorage data is corrupted, show the banner
          showBanner = true;
          console.error('Error parsing cookie consent data', error);
        }
      }

      // For testing purposes - check URL for a force parameter
      if (browser && window.location.search.includes('cookie-test=true')) {
        showBanner = true;
      }
    }

    // Clear any existing interval to avoid memory leaks
    clearInterval(checkInterval);

    return unsubscribe;
  });

  // Periodically check if the banner should be shown (e.g. if localStorage is cleared)
  let checkInterval: ReturnType<typeof setInterval>;
  if (browser) {
    checkInterval = setInterval(() => {
      // If banner is already showing, no need to check
      if (showBanner) return;

      const storedConsent = localStorage.getItem('cookie-consent');
      if (!storedConsent) {
        showBanner = true;
      }
    }, 5000); // Check every 5 seconds
  }

  // Handle consent update for a specific type
  function updateConsent(type: ConsentType, value: boolean) {
    cookieConsentStore.updateConsent(type, value);
  }

  // Accept all cookies
  function acceptAll() {
    cookieConsentStore.acceptAll();
    showBanner = false;
    showPreferences = false;
  }

  // Reject optional cookies
  function rejectAll() {
    cookieConsentStore.rejectAll();
    showBanner = false;
    showPreferences = false;
  }

  // Save current preferences
  function savePreferences() {
    cookieConsentStore.updateConsent('analytics', consent.analytics);
    cookieConsentStore.updateConsent('marketing', consent.marketing);
    cookieConsentStore.updateConsent('preferences', consent.preferences);
    showBanner = false;
    showPreferences = false;
  }
</script>

{#if showBanner}
  <div class="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-100 dark:border-gray-700 backdrop-blur-md">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto px-6 py-4 md:px-8 md:py-5">
      <div class="flex-1 pr-0 md:pr-4 mb-4 md:mb-0 w-full md:w-auto">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-green-500 mb-1">We value your privacy (Cookie Consent)</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 max-w-3xl">
          We use cookies to enhance your experience, analyze site traffic, and personalize content.
          By using our site, you agree to our <a href="/privacy-policy" class="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a> and <a href="/terms" class="text-primary-600 dark:text-primary-400 hover:underline">Terms of Use</a>.
        </p>
      </div>
      <div class="flex items-center gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto justify-end">
        <button
          class="text-primary-600 dark:text-primary-400 text-sm font-medium underline hover:text-primary-700 dark:hover:text-primary-300 py-2 px-3"
          on:click={() => showPreferences = true}
        >
          Manage preferences
        </button>
        <button
          class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 text-sm font-medium rounded-md py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          on:click={rejectAll}
        >
          Decline
        </button>
        <button
          class="bg-primary-600 text-white text-sm font-medium rounded-md py-2 px-4 hover:bg-primary-700 transition-colors"
          on:click={acceptAll}
        >
          Accept all
        </button>
      </div>
    </div>
  </div>
{/if}

{#if showPreferences}
  <div class="fixed inset-0 z-[60] bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl">
      <div class="flex justify-between items-center px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Cookie Preferences</h3>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-consider-explicit-label -->
        <button
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-full flex items-center justify-center"
          on:click={() => showPreferences = false}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="flex flex-col gap-6 px-6 py-5">
        <div class="flex flex-col gap-2">
          <div class="flex items-center">
            <label class="flex items-center opacity-70">
              <input type="checkbox" checked disabled class="w-5 h-5 mr-3 accent-primary-600 cursor-not-allowed" />
              <span class="text-base font-medium text-gray-900 dark:text-white">Necessary Cookies</span>
            </label>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 pl-8">
            These cookies are required for basic site functionality and are always enabled.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" bind:checked={consent.analytics} class="w-5 h-5 mr-3 accent-primary-600" />
              <span class="text-base font-medium text-gray-900 dark:text-white">Analytics Cookies</span>
            </label>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 pl-8">
            Help us improve our website by collecting anonymous information about its usage.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" bind:checked={consent.marketing} class="w-5 h-5 mr-3 accent-primary-600" />
              <span class="text-base font-medium text-gray-900 dark:text-white">Marketing Cookies</span>
            </label>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 pl-8">
            Used to track visitors across websites to display relevant advertisements.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" bind:checked={consent.preferences} class="w-5 h-5 mr-3 accent-primary-600" />
              <span class="text-base font-medium text-gray-900 dark:text-white">Preference Cookies</span>
            </label>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 pl-8">
            Allow the website to remember your preferences for a better experience.
          </p>
        </div>

        <div class="text-sm text-gray-600 dark:text-gray-400">
          For more information about how we use cookies, please read our
          <a href="/privacy-policy" class="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a>.
        </div>
      </div>

      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <button
          class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 text-sm font-medium rounded-md py-2.5 px-5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          on:click={rejectAll}
        >
          Reject All
        </button>
        <button
          class="bg-primary-600 text-white text-sm font-medium rounded-md py-2.5 px-5 hover:bg-primary-700 transition-colors"
          on:click={savePreferences}
        >
          Save Preferences
        </button>
      </div>
    </div>
  </div>
{/if}
