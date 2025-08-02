import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

// Cookie consent types
export type ConsentType = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface CookieConsent {
    necessary: boolean; // Always true - required cookies
    analytics: boolean; // For analytics cookies (Google Analytics)
    marketing: boolean; // For marketing/advertising cookies
    preferences: boolean; // For user preference cookies
    timestamp?: number | null; // When consent was given/updateden consent was given/updated
}

const STORAGE_KEY = 'cookie-consent';
const COOKIE_DURATION = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds

// Helper function to set a cookie
const setCookie = (name: string, value: string, days: number = 90) => {
    if (!browser) return;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
};

// Helper function to delete a cookie
const deleteCookie = (name: string) => {
    if (!browser) return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

// Apply cookie consent based on user preferences
function applyCookieConsent(consent: CookieConsent): void {
    if (!browser) return;

    // Always set necessary cookies (they're required)
    setCookie('necessary_consent', 'true', 90);

    // Handle analytics cookies
    if (consent.analytics) {
        setCookie('analytics_consent', 'true', 90);
    } else {
        deleteCookie('analytics_consent');
        // Also clear any Google Analytics cookies
        deleteCookie('_ga');
        deleteCookie('_gid');
        deleteCookie('_gat');
    }

    // Handle marketing cookies
    if (consent.marketing) {
        setCookie('marketing_consent', 'true', 90);
    } else {
        deleteCookie('marketing_consent');
    }

    // Handle preference cookies
    if (consent.preferences) {
        setCookie('preferences_consent', 'true', 90);
    } else {
        deleteCookie('preferences_consent');
        // Clear any preference cookies except theme (handle specially)
        const theme = localStorage.getItem('theme');
        if (theme) {
            setCookie('theme_preference', theme, 90);
        }
    }
}

const getInitialConsent = (): CookieConsent => {
    if (!browser) {
        return {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false,
            timestamp: null
        };
    }

    const storedConsent = localStorage.getItem(STORAGE_KEY);

    if (storedConsent) {
        try {
            return JSON.parse(storedConsent);
        } catch (error) {
            console.error('Failed to parse stored cookie consent', error);
        }
    }

    return {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
        timestamp: null
    };
};

// Create writable store with initial value
const cookieConsent = writable<CookieConsent>(getInitialConsent());

// Store subscriber to persist changes to localStorage and apply cookie settings
if (browser) {
    cookieConsent.subscribe((value) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));

        // Apply cookie settings based on consent
        applyCookieConsent(value);
    });
}

// Create a custom store with helper functions
export const cookieConsentStore = {
    subscribe: cookieConsent.subscribe,

    // Update specific consent type
    updateConsent: (type: ConsentType, value: boolean) => {
        cookieConsent.update((current) => ({
            ...current,
            [type]: value,
            timestamp: Date.now()
        }));
    },

    // Accept all cookie types
    acceptAll: () => {
        cookieConsent.set({
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true,
            timestamp: Date.now()
        });
    },

    // Reject all optional cookie types
    rejectAll: () => {
        cookieConsent.set({
            necessary: true, // Necessary cookies are always required
            analytics: false,
            marketing: false,
            preferences: false,
            timestamp: Date.now()
        });
    },

    // Check if a specific cookie type is allowed
    isAllowed: (type: ConsentType): boolean => {
        // Get the current value from the store
        const current = get(cookieConsent);
        return current[type];
    },

    // Force showing the cookie consent banner (for debugging)
    reset: () => {
        if (browser) {
            localStorage.removeItem(STORAGE_KEY);
            cookieConsent.set({
                necessary: true,
                analytics: false,
                marketing: false,
                preferences: false,
                timestamp: 0
            });
        }
    }
};
