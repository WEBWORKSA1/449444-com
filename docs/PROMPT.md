# Phase-wise build prompt for 449444.com

The prompts below build 449444.com, "The Number Meaning Lab", in phases. Paste them into an AI coding agent one phase at a time. Each phase is self-contained and assumes the previous one shipped.

---

## Global rules (include with every phase)

- **Stack**: static HTML5, one CSS file, vanilla ES2020 JS. No build step. It must run on the **GitHub Pages free plan** (repo `WEBWORKSA1/449444-com`, branch `main`/`gh-pages`, root folder). Include `.nojekyll`.
- **Top banner on every page**, above all other content: "Contact, if you are interested in this website / domain name / Sponsorship / Advertisement / Partnership", linking to `https://web.works/contact`.
- **One email only**: every form and contact route delivers to the owner's single inbox. **Never show the address in HTML, text or visible source.** Store it as XOR-encoded char codes and decode it at runtime only inside the submit handler. Submit with `fetch` to `https://formsubmit.co/ajax/<decoded>`, and fall back to a `mailto:` link built on click.
- **Design**: mobile-first and responsive (320px to 1920px). Palette of ink, vermilion red (#D7263D) and imperial gold (#E0A526). Dark mode toggle. Inter plus Noto Serif SC. WCAG AA. Lighthouse score of 90 or more.
- **Trademark safety**: "449444" is used only as a domain and brand label. Include no third-party logos, mascots or copyrighted text. Publish a Trademark & Copyright Disclosure.
- **Monetization hooks everywhere**: AdSense slots (config-driven, hidden until a publisher ID exists), YouTube embeds, affiliate blocks, lead CTAs, donate CTAs.

---

## Phase 1: Foundation and design system

> Build the skeleton for 449444.com.
>
> - `assets/css/style.css` holds the design tokens (light and dark), the grid and cards, buttons, forms, tabs, modal, toasts, the sticky header and a mobile drawer.
> - `assets/js/config.js` is the single configuration file: AdSense client and slots, YouTube channel and video IDs, donation links (Ko-fi, Buy Me a Coffee, GitHub Sponsors, Stripe Payment Link, PayPal hosted button), contest prizes and the brand contact URL.
> - `assets/js/app.js` injects the header and nav, footer, cookie consent, theme toggle, newsletter, lead-magnet modal (triggered by scroll depth or exit intent), sticky mobile CTA bar, share buttons, AdSense loader and the form handler.
> - Also create `favicon.svg`, `site.webmanifest`, `robots.txt`, `sitemap.xml`, `ads.txt` (placeholder) and `404.html`.

## Phase 2: The number engine

> Create `assets/js/engine.js` with these functions:
>
> - `decode(number)` returns:
>   - a per-digit table: Chinese character, pinyin, homophone, luck weight and the Western angel meaning;
>   - detected Chinese combos from a dictionary of 40+ entries (520 我爱你, 1314 一生一世, 168 一路发, 94 就是, 518 我要发, 3344 生生世世, 514, 748…);
>   - a Chinese luck score from 0 to 100;
>   - the numerology reduction (keeping 11, 22 and 33);
>   - the angel-number pattern (repeats, mirrors, ascending runs);
>   - a plain-English verdict.
> - `lifePath(date)`, `expression(name)` (Pythagorean), `zodiac(year)` returning the animal with its lucky and unlucky numbers, `kua(year, gender)` returning the East or West group and four lucky directions, `compat(a, b)`, `luckyDates(month, year)` and `personalLucky(date)`.

## Phase 3: Core pages

> 1. **`index.html`**: the hero decoder ("Decode any number: Chinese, angel, numerology") with an instant result. After it:
>    - a "Why 449444?" story;
>    - trending numbers;
>    - a tools grid;
>    - the lead-gen band;
>    - video hub teaser, contests teaser and support teaser;
>    - FAQ with JSON-LD, plus WebSite SearchAction schema.
> 2. **`tools.html`**: a hub with 8 tabbed tools (Decoder, Life Path and Expression, Phone/Plate/Address Scorer, Zodiac Lucky Numbers, Kua & Directions, Lucky Date Picker, Compatibility, Personal Lucky Numbers). Every result ends with a report CTA and share buttons.
> 3. **`number.html?n=`**: the programmatic number page, with meaning, digit table, Chinese view, angel view, numerology, love/career/money, "What to do when you see it", FAQ (JSON-LD), related numbers, an ad slot and a video block. Set the title and meta description dynamically.
> 4. **`numbers.html`**: a searchable dictionary, range index (0–99, 100–999, 1000–9999, famous combos) and trending grid.
> 5. **`chinese-numbers.html`**: the pillar guide covering digits 0–9, combos, economics (housing discounts, skipped floors, plate auctions) and etiquette (gifts, red envelopes, dates).

## Phase 4: Lead generation engine

> **`report.html`** is a high-converting, 3-step form.
>
> 1. **Goal**, one of:
>    - Personal Lucky Report
>    - Business / Brand Number Audit
>    - Phone / Plate / Address Selection
>    - Wedding / Launch Date
>    - Real-Estate Unit / Address Advice
> 2. **Details**: the numbers, dates, market and budget.
> 3. **Contact**: name, email, WhatsApp/phone, country and consent.
>
> Add a progress bar, social-proof strip, guarantee box, FAQ and urgency ("limited weekly slots"). Capture hidden UTM, referrer and landing-page fields. Add secondary funnels:
>
> - a lead-magnet modal ("Free 2027 Lucky Numbers Guide");
> - a quiz funnel ("Which number rules you?") that asks for an email before the full result;
> - inline CTAs after every tool result.

## Phase 5: Community, money and people

> - **`support.html`**: donations. Tiers are Supporter $5, Patron $25/mo and Founding Sponsor $100+/mo. Show a use-of-funds breakdown (operations, marketing and promotion, hiring, contest prizes), provider buttons from config, a pledge form fallback and a transparency ledger.
> - **`advertise.html`**: sponsorship and advertising packages with a media-kit request form.
> - **`contests.html`**: three contests (Lucky Number Story, Number Hunter photo, Design Challenge). Include prize tiers from config, a timeline, an entry form, rules, eligibility and a winners wall.
> - **`careers.html`**: 7 roles (bilingual Mandarin editor, numerology writer, YouTube editor, front-end developer, SEO/growth marketer, community manager, commission-only sponsorship sales), benefits, process and an application form with portfolio URL.

## Phase 6: Media and content

> - **`videos.html`**: a YouTube hub. Use a click-to-load privacy-enhanced (youtube-nocookie) player built from config IDs, topic playlists (search deep-links) and a subscribe CTA.
> - **`guides.html`**: an article hub with long-form guides (tetraphobia economics, angel number 444, how to choose a lucky phone number, lucky wedding dates, pricing for Chinese consumers). Each has a byline, updated date and internal links.

## Phase 7: Trust, legal and compliance

> - **`about.html`**: mission, the 449444 story, editorial standards and methodology.
> - **`contact.html`**: general, press and partnerships.
> - **`legal.html`**: Privacy (cookies, AdSense, FormSubmit), Terms, Entertainment Disclaimer, Trademark & Copyright Disclosure, Affiliate Disclosure, Donations and Contest terms.
> - A cookie-consent banner. For EEA/UK traffic, switch to a Google-certified CMP before AdSense approval.

## Phase 8: SEO and performance

> - Canonicals, Open Graph and Twitter cards, and JSON-LD (Organization, WebSite, FAQPage, BreadcrumbList).
> - A sitemap covering all pages and the top 100 number URLs, and descriptive alt text.
> - Lazy-loaded embeds, preconnected fonts, no layout shift from ad slots (reserved min-height), and a 404 page with search.

## Phase 9: Deploy and launch

> 1. Push to `WEBWORKSA1/449444-com`. Pages is served from the `gh-pages` branch, which a GitHub Actions workflow mirrors from `main`.
> 2. Point DNS for 449444.com: four A records (185.199.108.153, .109, .110, .111) and a `www` CNAME to `webworksa1.github.io`. Then add a `CNAME` file containing `449444.com` and enforce HTTPS.
> 3. Submit the first form once to activate FormSubmit.
> 4. Apply for AdSense and paste the publisher ID into `config.js` and `ads.txt`.
> 5. Connect Search Console and submit the sitemap.

## Phase 10: Growth roadmap (expandable)

- A Simplified Chinese (`/zh/`) mirror and hreflang.
- Static-generate 10,000 number pages with a Node script.
- A daily lucky-number email.
- Paid PDF reports (Stripe Payment Links).
- An embeddable decoder widget for backlinks.
- A number marketplace directory (phone and plate listings) as a paid-listing revenue line.
- A YouTube Shorts auto-script from `engine.js`.
