type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, eventName: string, params?: AnalyticsParams) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: AnalyticsParams = {},
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const safeParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );
  window.gtag("event", eventName, safeParams);
}
