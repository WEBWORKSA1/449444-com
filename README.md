# 449444.com — The Number Meaning Lab

A cross-cultural number-meaning platform. It decodes any number across Chinese homophone culture, angel numbers and Pythagorean numerology, and adds tools for phones, plates, addresses, zodiac, Kua and lucky dates. It is a static site (HTML, CSS and vanilla JS) and is hosted free on **GitHub Pages**.

- **Live (GitHub Pages):** https://webworksa1.github.io/449444-com/
- **Research brief:** [`docs/RESEARCH.md`](docs/RESEARCH.md)
- **Phase-wise build prompt:** [`docs/PROMPT.md`](docs/PROMPT.md)

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Home, with the hero decoder, the 449444 story, tools, trending numbers, the lead band, videos, contests and FAQ |
| `tools.html` | 8 calculators: decoder, life path/name, phone/plate/address scorer, zodiac, Kua, lucky dates, compatibility, personal lucky numbers |
| `number.html?n=` | Programmatic page for any number, with FAQ schema |
| `numbers.html` | Dictionary: angel numbers, Chinese slang combos, digits and ranges |
| `chinese-numbers.html`, `guides.html` | Pillar and guide content |
| `report.html` | **Lead generation**: a 3-step funnel for personal reports and B2B Number Audits |
| `support.html` | Donations, patron and sponsor tiers, use of funds, pledge form |
| `advertise.html` | Ad and sponsorship packages, media-kit form |
| `contests.html` | Contests, prizes and the entry form |
| `careers.html` | Open roles and the application form |
| `videos.html` | YouTube hub (click-to-load, privacy-enhanced) |
| `about.html`, `contact.html`, `legal.html`, `404.html` | Trust and legal pages |
| `assets/js/config.js` | **The only file you need to edit**: AdSense, GA4, YouTube, donation links, prizes |
| `assets/js/engine.js` | The number engine |
| `assets/js/app.js` | Shell (header, footer, forms, consent, modal, ads, video) |

## Launch checklist

1. **Activate forms.** Submit any form once on the live site. FormSubmit sends a one-time confirmation email to the owner's inbox, so click *Activate*. Optionally paste the random alias FormSubmit provides into `formAlias` in `config.js`. The address is never shown on the site: it is stored encoded and decoded only at submit time.
2. **AdSense.** Apply with the domain. After approval, set `adsenseClient` and `adSlots` in `config.js` and uncomment the line in `ads.txt`. For EEA/UK traffic, enable Google's certified CMP (Privacy & messaging).
3. **Donations.** Paste Ko-fi, Buy Me a Coffee, GitHub Sponsors, Stripe or PayPal links into `config.js`. Buttons with no link fall back to the pledge form.
4. **YouTube.** Add your channel URL and video IDs to `config.js`. They appear on the home page and in the Video Hub automatically.
5. **Custom domain.** At your registrar, create four `A` records for `@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and a `CNAME` for `www` pointing to `webworksa1.github.io`. Then add a file named `CNAME` containing `449444.com` to the repo (or set it under Settings → Pages) and tick **Enforce HTTPS**.
6. **Search Console.** Verify the domain and submit `sitemap.xml`.

## Deployment

The site is served by GitHub Pages (free plan, public repo) from the repository root. There is no build step. `.nojekyll` is included.

## Legal

See `legal.html#trademark`. "449444" is used only as a domain name and descriptive label. There is no affiliation with any entity using the same digits. All content is original, and third-party marks belong to their owners.
