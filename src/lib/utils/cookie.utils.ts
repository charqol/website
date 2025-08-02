import { browser } from '$app/environment';
import type { CookieConsent } from '$lib/stores/cookie.consent';

/**
 * Set a cookie with the specified name, value, and options
 */
export function setCookie(
  name: string,
  value: string,
  options: {
    expires?: number | Date; // Days or specific date
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
  } = {}
): void {
  if (!browser) return;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  // Handle expiration
  if (options.expires) {
    if (typeof options.expires === 'number') {
      const days = options.expires;
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      cookieString += `; expires=${date.toUTCString()}`;
    } else if (options.expires instanceof Date) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
  }

  // Add other options
  if (options.path) cookieString += `; path=${options.path}`;
  if (options.domain) cookieString += `; domain=${options.domain}`;
  if (options.secure) cookieString += '; secure';
  if (options.sameSite) cookieString += `; samesite=${options.sameSite}`;

  document.cookie = cookieString;
}

/**
 * Get the value of a cookie by name
 */
export function getCookie(name: string): string | null {
  if (!browser) return null;

  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : null;
}

/**
 * Delete a cookie by setting an expired date
 */
export function deleteCookie(name: string, options: { path?: string; domain?: string } = {}): void {
  if (!browser) return;

  setCookie(name, '', {
    ...options,
    expires: -1
  });
}

/**
 * Set cookies based on consent preferences
 */
export function applyCookieConsent(consent: CookieConsent): void {
  // Always set necessary cookies

  // Set analytics cookies if consent given
  if (consent.analytics) {
    // Example: Set GA consent cookie
    setCookie('_ga_consent', 'granted', {
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });
  } else {
    deleteCookie('_ga_consent', { path: '/' });
    // Also delete any Google Analytics cookies that might exist
    deleteCookie('_ga', { path: '/' });
    deleteCookie('_gid', { path: '/' });
    deleteCookie('_gat', { path: '/' });
  }

  // Set marketing cookies if consent given
  if (consent.marketing) {
    // Example: Set marketing consent cookie
    setCookie('marketing_consent', 'granted', {
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });
  } else {
    deleteCookie('marketing_consent', { path: '/' });
    // Delete any marketing cookies
  }

  // Set preference cookies if consent given
  if (consent.preferences) {
    // Example: Set preferences consent cookie
    setCookie('preferences_consent', 'granted', {
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });

    // Example: Set theme preference cookie
    const theme = localStorage.getItem('theme') || 'light';
    setCookie('theme_preference', theme, {
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });
  } else {
    deleteCookie('preferences_consent', { path: '/' });
    deleteCookie('theme_preference', { path: '/' });
    // Delete any other preference cookies
  }
}
