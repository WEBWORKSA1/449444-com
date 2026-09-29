/* 449444.com — single configuration file. Edit values here; no other file needs changing. */
window.SITE = {
  name: "449444",
  tagline: "The Number Meaning Lab",
  url: "https://449444.com",
  brandContact: "https://web.works/contact",

  /* Google AdSense: paste your publisher ID (e.g. "ca-pub-1234567890123456") and slot IDs. Ads stay hidden until set. */
  adsenseClient: "",
  adSlots: { top: "", inContent: "", bottom: "" },

  /* Google Analytics 4 measurement ID (optional), e.g. "G-XXXXXXX" */
  ga4: "",

  /* YouTube: your channel URL and video IDs (11-char IDs). Leave empty to show topic playlists only. */
  youtubeChannel: "https://www.youtube.com/results?search_query=chinese+lucky+numbers",
  videos: [
    /* { id: "VIDEO_ID", title: "What does 444 mean?" } */
  ],

  /* Donation / payment links. Any empty link falls back to the pledge form (which emails you). */
  donate: {
    kofi: "",            /* https://ko-fi.com/yourname */
    buymeacoffee: "",    /* https://buymeacoffee.com/yourname */
    githubSponsors: "",  /* https://github.com/sponsors/WEBWORKSA1 (after enabling Sponsors) */
    stripe: "",          /* Stripe Payment Link */
    paypal: ""           /* PayPal.me or hosted-button link */
  },

  /* Contest prize pool (display values — edit freely). */
  prizes: { grand: "$500", runnerUp: "$150", community: "$50", currencyNote: "USD or equivalent gift card" },
  contestDeadline: "2027-01-31",

  /* FormSubmit alias. After the first submission you will receive an activation email;
     FormSubmit then gives you a random alias string — paste it here to replace the encoded address. */
  formAlias: ""
};
