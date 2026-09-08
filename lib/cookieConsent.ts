type ConsentApi = typeof import('vanilla-cookieconsent');

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

let api: ConsentApi | null = null;
let initialized = false;

async function loadApi() {
  api ??= await import('vanilla-cookieconsent');
  return api;
}

function syncGtm(id: string, consent: ConsentApi) {
  const analytics = consent.acceptedCategory('analytics');
  window.dataLayer = window.dataLayer || [];
  const gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag = gtag;
  gtag('consent', 'update', { analytics_storage: analytics ? 'granted' : 'denied', ad_storage: analytics ? 'granted' : 'denied', ad_user_data: analytics ? 'granted' : 'denied', ad_personalization: analytics ? 'granted' : 'denied' });
  if (!analytics || !id || document.getElementById('gtm-script')) return;
  const script = document.createElement('script'); script.id = 'gtm-script'; script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`; document.head.appendChild(script);
}

export async function initCookieConsent(gtmId?: string) {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  const consent = await loadApi();
  const sync = () => syncGtm(gtmId || '', consent);
  await consent.run({ categories: { necessary: { enabled: true, readOnly: true }, analytics: {} }, onFirstConsent: sync, onConsent: sync, onChange: sync, language: { default: 'en', translations: { en: { consentModal: { title: 'We use cookies', description: 'Essential cookies keep this example working. Analytics cookies are optional.', acceptAllBtn: 'Accept all', acceptNecessaryBtn: 'Reject analytics', showPreferencesBtn: 'Manage preferences' }, preferencesModal: { title: 'Cookie preferences', acceptAllBtn: 'Accept all', acceptNecessaryBtn: 'Reject analytics', savePreferencesBtn: 'Save preferences', closeIconLabel: 'Close', sections: [] } } } } });
}

export async function showCookiePreferences() {
  const consent = await loadApi();
  await consent.showPreferences();
}
