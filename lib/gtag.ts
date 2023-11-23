export const GA_TRACKING_ID = "G-C7TX0YVEWM"
export const GADS_TRACKING_ID = "AW-11250148191"

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

interface Event {
  action: string
  category: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export function gtag_report_conversion(url: string) {
  var callback = function () {
    if (typeof(url) !== 'undefined') {
      window.location.href = url; // Assuming 'url' is a string
    }
  };

  window.gtag('event', 'conversion', {
    'send_to': `${GADS_TRACKING_ID}/R81nCNm3qvkYEN_GvvQp`,
    'event_callback': callback,
  });

  return false;
}