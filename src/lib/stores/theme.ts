import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial dark mode preference from localStorage or system preference
function getInitialDarkMode() {
    if (browser) {
        const savedPreference = localStorage.getItem('darkMode');
        if (savedPreference !== null) {
            return savedPreference === 'true';
        }
        // return window.matchMedia('(prefers-color-scheme: dark)').matches;
        return true; // Default to dark mode
    }
    return true; // Default to dark mode
}

// Create the store
const darkMode = writable(getInitialDarkMode());

// Subscribe to changes and update localStorage
if (browser) {
    darkMode.subscribe(value => {
        localStorage.setItem('darkMode', value.toString());
        document.documentElement.classList.toggle('dark', value);
    });
}

export { darkMode };
