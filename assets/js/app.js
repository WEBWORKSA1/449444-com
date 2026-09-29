/* 449444.com — site shell & shared behaviour */
(function () {
  'use strict';
  var S = window.SITE || {};
  var $ = function (q, c) { return (c || document).querySelector(q); };
  var $$ = function (q, c) { return Array.prototype.slice.call((c || document).querySelectorAll(q)); };
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  window.esc = esc;

  /* ---------- Theme ---------- */
  var saved = store('theme'); if (saved) document.documentElement.setAttribute('data-theme', saved);

  /* ---------- Header / Nav ---------- */
  var NAV = [['index.html', 'Home'], ['tools.html', 'Tools'], ['numbers.html', 'Numbers'], ['chinese-numbers.html', 'Chinese Numbers'], ['guides.html', 'Guides'], ['videos.html', 'Videos'], ['contests.html', 'Contests'], ['support.html', 'Support']];
  var here = (location.pathname.split('/').pop() || 'index.html');
  var hdr = $('#site-header');
  if (hdr) {
    hdr.outerHTML = '<header class="hdr"><div class="wrap"><a class="logo" href="index.html" aria-label="449444 home"><b>449</b>444<span>.com</span></a>' +
      '<button class="icon-btn menu-btn" aria-label="Open menu" aria-expanded="false" id="menuBtn">☰</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + NAV.map(function (n) { return '<a href="' + n[0] + '"' + (here === n[0] ? ' aria-current="page"' : '') + '>' + n[1] + '</a>'; }).join('') +
      '<a class="btn btn-primary btn-sm" style="color:#fff" href="report.html">Get My Report</a></nav>' +
      '<button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">◐</button></div></header>';
    $('#menuBtn').addEventListener('click', function () { var n = $('#nav'); var o = n.classList.toggle('open'); this.setAttribute('aria-expanded', o); });
    $('#themeBtn').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var nx = cur === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', nx); store('theme', nx);
    });
  }

  /* ---------- Footer ---------- */
  var ftr = $('#site-footer');
  if (ftr) {
    var y = new Date().getFullYear();
    ftr.outerHTML = '<footer class="ftr"><div class="wrap"><div class="ftr-grid">' +
      '<div><a class="logo" href="index.html" style="color:#fff"><b>449</b>444<span>.com</span></a><p class="small" style="margin-top:12px">The Number Meaning Lab — decode any number across Chinese culture, angel numbers and numerology. For cultural and entertainment purposes.</p>' +
      '<form class="inline-form" data-form="Newsletter" novalidate><input type="email" name="email" placeholder="Your email for the Lucky Number Weekly" required aria-label="Email"><input class="hp" name="_honey" tabindex="-1" autocomplete="off"><button class="btn btn-gold btn-sm">Subscribe</button><div class="form-msg" role="status"></div></form></div>' +
      '<div><h4>Explore</h4><ul><li><a href="tools.html">Number Tools</a></li><li><a href="numbers.html">Number Dictionary</a></li><li><a href="chinese-numbers.html">Chinese Lucky Numbers</a></li><li><a href="number.html?n=444">Angel Number 444</a></li><li><a href="guides.html">Guides</a></li><li><a href="videos.html">Video Hub</a></li></ul></div>' +
      '<div><h4>Work with us</h4><ul><li><a href="report.html">Get a Personal Report</a></li><li><a href="report.html#business">Business Number Audit</a></li><li><a href="advertise.html">Advertise & Sponsor</a></li><li><a href="contests.html">Contests & Prizes</a></li><li><a href="careers.html">Careers</a></li><li><a href="support.html">Donate / Support</a></li></ul></div>' +
      '<div><h4>Company</h4><ul><li><a href="about.html">About & Methodology</a></li><li><a href="contact.html">Contact</a></li><li><a href="' + S.brandContact + '" rel="noopener">Buy / Partner on this domain</a></li><li><a href="legal.html#privacy">Privacy</a></li><li><a href="legal.html#terms">Terms</a></li><li><a href="legal.html#trademark">Trademark & Copyright</a></li></ul></div>' +
      '</div><div class="legal">© ' + y + ' 449444.com. All rights reserved. Content is for cultural, educational and entertainment purposes only and is not financial, legal, medical or real-estate advice. "449444" is used solely as a domain name and descriptive label; no affiliation with any company, product or trademark using the same digits is implied. All third-party trademarks belong to their respective owners. <a href="legal.html#trademark">Full disclosure</a>.</div></div></footer>' +
      '<div class="sticky-cta" id="stickyCta"><a class="btn btn-ghost" href="tools.html">Decode a number</a><a class="btn btn-primary" href="report.html">Free report</a></div>' +
      '<div class="cookie" id="cookie" role="dialog" aria-label="Cookie consent"><strong>Cookies & ads</strong><p class="small" style="margin:6px 0">We use cookies for analytics and to show ads (Google AdSense) that keep this site free. See our <a href="legal.html#privacy">Privacy Policy</a>.</p><button class="btn btn-primary btn-sm" data-consent="yes">Accept</button> <button class="btn btn-ghost btn-sm" data-consent="no">Essential only</button></div>' +
      '<div class="modal" id="leadModal" role="dialog" aria-modal="true" aria-labelledby="lmTitle"><div class="modal-box"><button class="icon-btn modal-x" data-close aria-label="Close">✕</button><span class="eyebrow">Free download</span><h3 id="lmTitle" style="font-size:1.5rem">Your 2027 Lucky Numbers Guide</h3><p class="muted">Lucky numbers for your zodiac, the best dates of 2027 and the numbers to avoid for phones, plates and addresses. Sent straight to your inbox.</p>' +
      '<form data-form="Lead Magnet: 2027 Guide" novalidate><div class="field"><input name="name" placeholder="First name" required aria-label="First name"></div><div class="field"><input type="email" name="email" placeholder="Email address" required aria-label="Email"></div><div class="field"><input type="number" name="birth_year" placeholder="Birth year (for your zodiac)" min="1920" max="2026" aria-label="Birth year"></div><input class="hp" name="_honey" tabindex="-1" autocomplete="off"><button class="btn btn-primary btn-block">Send me the free guide</button><p class="form-note">No spam. Unsubscribe anytime.</p><div class="form-msg" role="status"></div></form></div></div>' +
      '<div class="toast" id="toast" role="status"></div>';
  }
  function toast(t) { var el = $('#toast'); if (!el) return; el.textContent = t; el.classList.add('show'); setTimeout(function () { el.classList.remove('show'); }, 2400); }
  window.toast = toast;

  /* ---------- Consent + Ads + Analytics ---------- */
  var consent = store('consent');
  var ck = $('#cookie'); if (ck && !consent) ck.classList.add('show');
  $$('[data-consent]').forEach(function (b) { b.addEventListener('click', function () { store('consent', b.dataset.consent); ck.classList.remove('show'); loadThirdParty(b.dataset.consent); }); });
  function loadThirdParty(c) {
    if (S.adsenseClient && !window.__ads) {
      window.__ads = 1; window.adsbygoogle = window.adsbygoogle || [];
      if (c !== 'yes') window.adsbygoogle.requestNonPersonalizedAds = 1;
      var s = document.createElement('script'); s.async = true; s.crossOrigin = 'anonymous'; s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + S.adsenseClient; document.head.appendChild(s);
      $$('.ad-slot').forEach(function (el) { var slot = S.adSlots[el.dataset.slot] || ''; el.classList.add('live'); el.innerHTML = '<ins class="adsbygoogle" style="display:block;width:100%" data-ad-client="' + S.adsenseClient + '"' + (slot ? ' data-ad-slot="' + slot + '"' : '') + ' data-ad-format="auto" data-full-width-responsive="true"></ins>'; try { window.adsbygoogle.push({}); } catch (e) { } });
    }
    if (S.ga4 && c === 'yes' && !window.__ga) { window.__ga = 1; var g = document.createElement('script'); g.async = true; g.src = 'https://www.googletagmanager.com/gtag/js?id=' + S.ga4; document.head.appendChild(g); window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', S.ga4); }
  }
  if (!S.adsenseClient) $$('.ad-slot').forEach(function (el) { el.innerHTML = 'Advertisement space · <a href="advertise.html">Advertise here</a>'; });
  loadThirdParty(consent || 'no');

  /* ---------- UTM capture ---------- */
  try { var qs = new URLSearchParams(location.search); ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) { if (qs.get(k)) sessionStorage.setItem(k, qs.get(k)); }); if (!sessionStorage.getItem('landing')) { sessionStorage.setItem('landing', location.href); sessionStorage.setItem('ref', document.referrer || 'direct'); } } catch (e) { }

  /* ---------- Protected contact routing (address is never rendered) ---------- */
  var K = [96, 114, 117, 96, 120, 101, 124, 100, 118, 38, 87, 112, 122, 118, 126, 123, 57, 116, 120, 122];
  function route() { return K.map(function (c) { return String.fromCharCode(c ^ 23); }).join(''); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-mail]'); if (!a) return; e.preventDefault();
    location.href = 'mail' + 'to:' + route() + '?subject=' + encodeURIComponent('[449444.com] ' + (a.dataset.mail || 'Inquiry'));
  });

  /* ---------- Forms ---------- */
  function collect(form) {
    var data = {}; new FormData(form).forEach(function (v, k) { if (k === '_honey') return; data[k] = data[k] ? data[k] + ', ' + v : v; });
    try { ['utm_source', 'utm_medium', 'utm_campaign', 'landing', 'ref'].forEach(function (k) { var v = sessionStorage.getItem(k); if (v) data['meta_' + k] = v; }); } catch (e) { }
    data.meta_page = location.href; data.meta_time = new Date().toISOString();
    return data;
  }
  function submit(form) {
    var msg = $('.form-msg', form); var btn = $('button:not([type=button])', form);
    if (form.querySelector('[name=_honey]') && form.querySelector('[name=_honey]').value) return;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var data = collect(form); var type = form.dataset.form || 'Inquiry';
    data._subject = '[449444.com] ' + type + (data.name ? ' — ' + data.name : '');
    data._template = 'table'; data._captcha = 'false'; data.form_type = type;
    if (btn) { btn.disabled = true; btn.dataset.t = btn.textContent; btn.textContent = 'Sending…'; }
    var target = S.formAlias || route();
    fetch('https://formsubmit.co/ajax/' + target, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || j.success === 'false' || j.success === false) throw new Error(j.message || 'fail'); }); })
      .then(function () {
        if (msg) { msg.className = 'form-msg ok'; msg.textContent = form.dataset.ok || 'Thank you! Your submission was received — we will reply within 1–2 business days.'; }
        form.reset(); toast('Sent ✓'); if (window.gtag) gtag('event', 'generate_lead', { form: type });
        var m = form.closest('.modal'); if (m) setTimeout(function () { m.classList.remove('open'); }, 1800);
        store('leadDone', '1');
      })
      .catch(function () {
        if (msg) { msg.className = 'form-msg err'; msg.innerHTML = 'We could not send this automatically. <a href="#" data-fallback>Click here to send it by email instead</a>.'; }
        var fb = $('[data-fallback]', form); if (fb) fb.addEventListener('click', function (e) { e.preventDefault(); var body = Object.keys(data).filter(function (k) { return k[0] !== '_'; }).map(function (k) { return k + ': ' + data[k]; }).join('\n'); location.href = 'mail' + 'to:' + route() + '?subject=' + encodeURIComponent(data._subject) + '&body=' + encodeURIComponent(body); });
      })
      .then(function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.t; } });
  }
  document.addEventListener('submit', function (e) { var f = e.target; if (!f.dataset.form) return; e.preventDefault(); submit(f); });

  /* ---------- Multi-step forms ---------- */
  $$('form.stepper').forEach(function (form) {
    var steps = $$('.step', form), bar = $('.progress i', form), i = 0;
    function show(n) { steps.forEach(function (s, k) { s.hidden = k !== n; }); if (bar) bar.style.width = ((n + 1) / steps.length * 100) + '%'; i = n; var h = $('.step-count', form); if (h) h.textContent = 'Step ' + (n + 1) + ' of ' + steps.length; }
    form.addEventListener('click', function (e) {
      if (e.target.matches('[data-next]')) { e.preventDefault(); var ok = $$('input,select,textarea', steps[i]).every(function (f) { return f.checkValidity() || (f.reportValidity(), false); }); if (ok) { show(Math.min(i + 1, steps.length - 1)); form.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }
      if (e.target.matches('[data-prev]')) { e.preventDefault(); show(Math.max(i - 1, 0)); }
    });
    show(0);
  });

  /* ---------- Lead magnet modal ---------- */
  var modal = $('#leadModal');
  function openModal() { if (!modal || store('leadDone') || store('lmSeen') > Date.now() - 6 * 864e5) return; modal.classList.add('open'); store('lmSeen', String(Date.now())); }
  window.openLeadModal = function () { if (modal) modal.classList.add('open'); };
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal || e.target.hasAttribute('data-close')) modal.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') modal.classList.remove('open'); });
    var fired = false;
    window.addEventListener('scroll', function () { var sc = (scrollY + innerHeight) / document.body.scrollHeight; var sticky = $('#stickyCta'); if (sticky) sticky.classList.toggle('show', scrollY > 400); if (!fired && sc > 0.6) { fired = true; setTimeout(openModal, 800); } }, { passive: true });
    document.addEventListener('mouseout', function (e) { if (!fired && !e.relatedTarget && e.clientY < 5) { fired = true; openModal(); } });
  }
  $$('[data-open-lead]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); window.openLeadModal(); }); });

  /* ---------- Share ---------- */
  window.shareBar = function (title, url) {
    url = url || location.href; var u = encodeURIComponent(url), t = encodeURIComponent(title || document.title);
    return '<div class="share"><a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="https://wa.me/?text=' + t + '%20' + u + '">WhatsApp</a><a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=' + t + '&url=' + u + '">X / Twitter</a><a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + u + '">Facebook</a><a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="https://www.linkedin.com/sharing/share-offsite/?url=' + u + '">LinkedIn</a><button type="button" class="btn btn-ghost btn-sm" onclick="navigator.clipboard&&navigator.clipboard.writeText(\'' + url.replace(/'/g, '') + '\');toast(\'Link copied\')">Copy link</button></div>';
  };
  $$('[data-share]').forEach(function (el) { el.innerHTML = window.shareBar(el.dataset.share); });

  /* ---------- Click-to-load YouTube (privacy-enhanced) ---------- */
  window.videoHTML = function (id, title) { return '<div class="video" data-yt="' + esc(id) + '" role="button" tabindex="0" aria-label="Play: ' + esc(title) + '"><img loading="lazy" src="https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg" alt="' + esc(title) + '"></div><p class="small" style="margin-top:8px;font-weight:600">' + esc(title) + '</p>'; };
  document.addEventListener('click', function (e) { var v = e.target.closest('.video[data-yt]'); if (!v || v.querySelector('iframe')) return; v.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.dataset.yt + '?autoplay=1&rel=0" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'; });
  $$('[data-videos]').forEach(function (el) {
    var vids = (S.videos || []).slice(0, +el.dataset.videos || 6);
    if (vids.length) el.innerHTML = vids.map(function (v) { return '<div>' + window.videoHTML(v.id, v.title) + '</div>'; }).join('');
  });

  /* ---------- Donation buttons ---------- */
  $$('[data-donate]').forEach(function (a) { var link = (S.donate || {})[a.dataset.donate]; if (link) { a.href = link; a.target = '_blank'; a.rel = 'noopener'; } else { a.href = '#pledge'; } });

  /* ---------- Contest config ---------- */
  $$('[data-prize]').forEach(function (el) { el.textContent = (S.prizes || {})[el.dataset.prize] || el.textContent; });
  $$('[data-deadline]').forEach(function (el) { if (S.contestDeadline) el.textContent = new Date(S.contestDeadline + 'T12:00:00').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); });

  /* ---------- Number search boxes ---------- */
  $$('form.num-search').forEach(function (f) { f.addEventListener('submit', function (e) { e.preventDefault(); var v = (f.querySelector('input').value || '').replace(/\D/g, ''); if (v) location.href = 'number.html?n=' + v; }); });

  /* ---------- Shared decoder renderer ---------- */
  window.renderDecode = function (r, opts) {
    opts = opts || {}; if (!r) return '<p class="muted">Enter digits only (up to 20).</p>';
    var cls = function (w) { return w > 0 ? 'good' : w < 0 ? 'bad' : ''; };
    var h = '<div class="scores"><div class="score"><span>Chinese luck score</span><strong>' + r.chinese + '/100</strong><div class="meter"><i style="width:' + r.chinese + '%"></i></div></div><div class="score"><span>Angel-number signal</span><strong>' + r.angelScore + '/100</strong><div class="meter"><i style="width:' + r.angelScore + '%"></i></div></div><div class="score"><span>Numerology root</span><strong>' + r.sum + ' → ' + r.root + '</strong><span>' + esc(r.rootMeaning || '') + '</span></div></div>';
    h += '<p><strong>Verdict:</strong> ' + esc(r.verdict) + '</p>';
    h += '<div class="digits">' + r.digits.map(function (d) { return '<div class="digit ' + cls(d.w) + '" title="' + esc(d.sound) + '"><b>' + d.d + '</b><span class="zh">' + d.zh + '</span><small>' + d.py + '</small></div>'; }).join('') + '</div>';
    if (r.combos.length) h += '<p><strong>Chinese combos found:</strong> ' + r.combos.map(function (c) { return '<span class="tag ' + (c.w > 0 ? 'good' : c.w < 0 ? 'bad' : '') + '">' + c.code + ' <span class="zh">' + c.zh + '</span></span> ' + esc(c.meaning); }).join(' · ') + '</p>';
    if (r.pattern.length) h += '<p><strong>Pattern:</strong> ' + esc(r.pattern.join(' · ')) + '</p>';
    h += '<p><strong>Angel-number reading:</strong> ' + esc(r.angel.charAt(0).toUpperCase() + r.angel.slice(1)) + '.</p>';
    if (!opts.noCta) h += '<div class="share"><a class="btn btn-primary btn-sm" href="number.html?n=' + r.number + '">Full meaning of ' + r.number + ' →</a><a class="btn btn-gold btn-sm" href="report.html?n=' + r.number + '">Get a personal report</a></div>';
    return h;
  };
})();
