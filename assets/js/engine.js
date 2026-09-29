/* 449444 Number Engine — cross-cultural number meanings. For cultural & entertainment use. */
(function (g) {
  'use strict';
  var D = {
    0: { zh: '零', py: 'líng', sound: '灵 líng (spirit) · 圆满 wholeness', w: 0.5, angel: 'infinite potential, wholeness and a spiritual fresh start', love: 'a relationship reset — room to begin again with honesty', career: 'a blank page: an idea or venture is ready to be born', action: 'pause, clear space and set one intention' },
    1: { zh: '一', py: 'yī / yāo', sound: '要 yào (will / want) · unity', w: 1, angel: 'new beginnings, leadership and manifestation', love: 'take the first step; say what you want clearly', career: 'launch, lead, pitch — initiative is rewarded now', action: 'start the thing you keep postponing' },
    2: { zh: '二', py: 'èr', sound: '易 yì (easy) · 好事成双 good things come in pairs', w: 2, angel: 'balance, partnership and trust', love: 'harmony and patience strengthen your bond', career: 'partnerships and collaboration beat going solo', action: 'reach out to one ally or partner today' },
    3: { zh: '三', py: 'sān', sound: '生 shēng (life, birth) · also 散 sàn (scatter)', w: 1, angel: 'creativity, self-expression and support around you', love: 'playfulness and open communication', career: 'create, publish, present — visibility pays', action: 'share your work publicly' },
    4: { zh: '四', py: 'sì', sound: '死 sǐ (death) — traditionally avoided · modern: 事 shì (matters), 是 shì (yes)', w: -3, angel: 'stability, foundations, protection and hard work', love: 'commitment built on reliability, not drama', career: 'systems, structure and steady effort compound', action: 'strengthen one foundation: savings, health or process' },
    5: { zh: '五', py: 'wǔ', sound: '无 wú (none) / 我 wǒ (me) · the Five Elements', w: 0, angel: 'change, freedom and adventure', love: 'excitement and change — keep freedom and trust balanced', career: 'pivot, travel, experiment', action: 'say yes to one new experience' },
    6: { zh: '六', py: 'liù', sound: '溜 liù (smooth, flowing) · 六六大顺', w: 3, angel: 'home, family, care and responsibility', love: 'nurturing, domestic harmony and loyalty', career: 'service, care and customer love grow the business', action: 'take care of home and the people in it' },
    7: { zh: '七', py: 'qī', sound: '起 qǐ (rise) / 气 qì (anger) · Ghost Month is the 7th', w: 0, angel: 'intuition, inner wisdom and spiritual awakening', love: 'deep, soulful connection over surface attraction', career: 'research, strategy and learning pay off', action: 'trust your gut and study before you move' },
    8: { zh: '八', py: 'bā', sound: '发 fā (prosper, get rich) — the luckiest digit', w: 4, angel: 'abundance, power and financial flow', love: 'mutual respect and shared ambition', career: 'money, deals and authority are flowing your way', action: 'ask for the raise, price higher, close the deal' },
    9: { zh: '九', py: 'jiǔ', sound: '久 jiǔ (long-lasting, eternal)', w: 3, angel: 'completion, compassion and a chapter closing', love: 'long-lasting love; forgiveness closes old wounds', career: 'finish, deliver, and give back — legacy work', action: 'complete one open loop before starting new ones' }
  };
  var ROOT = {
    1: 'The Leader — independent, driven, pioneering.', 2: 'The Peacemaker — diplomatic, sensitive, cooperative.', 3: 'The Communicator — creative, expressive, social.', 4: 'The Builder — practical, disciplined, reliable.', 5: 'The Adventurer — free, curious, adaptable.', 6: 'The Nurturer — caring, responsible, family-minded.', 7: 'The Seeker — analytical, spiritual, introspective.', 8: 'The Powerhouse — ambitious, material success, authority.', 9: 'The Humanitarian — compassionate, wise, global.', 11: 'Master Number 11 — The Illuminator: intuition, inspiration, vision.', 22: 'Master Number 22 — The Master Builder: turning big dreams into reality.', 33: 'Master Number 33 — The Master Teacher: compassion and service.'
  };
  var COMBOS = {
    '5201314': ['我爱你一生一世', 'I love you forever', 3], '1314': ['一生一世', 'for a whole lifetime', 2], '520': ['我爱你', 'I love you', 2], '521': ['我愿意', 'I do / I am willing', 2], '530': ['我想你', 'I miss you', 1], '9420': ['就是爱你', 'it is you I love', 2], '7758': ['亲亲我吧', 'kiss me', 1], '1711': ['一心一意', 'wholehearted devotion', 2],
    '168': ['一路发', 'prosperity all the way', 3], '1688': ['一路发发', 'prosperity all the way, doubled', 3], '518': ['我要发', 'I will prosper', 3], '6688': ['顺顺发发', 'smooth and prosperous', 3], '888': ['发发发', 'triple prosperity', 3], '88': ['发发', 'double prosperity (also "bye-bye" in chat)', 2], '28': ['易发', 'easy prosperity', 2], '68': ['路发', 'road to wealth', 2], '98': ['久发', 'lasting prosperity', 2], '89': ['发久', 'prosperity that lasts', 2], '86': ['发溜', 'wealth flows smoothly', 1],
    '666': ['溜溜溜', 'awesome / so smooth (slang)', 2], '66': ['溜溜', 'smooth, everything goes well', 2], '999': ['久久久', 'eternity', 2], '99': ['久久', 'everlasting', 2], '94': ['就是', 'exactly / that\'s it (internet slang)', 1], '918': ['加油吧', 'come on! go for it (cheer)', 1], '3344': ['生生世世', 'for all generations', 1], '886': ['拜拜了', 'bye-bye', 0],
    '250': ['二百五', 'a fool (insult) — avoid in prices', -2], '38': ['三八', 'a rude insult — avoid in names/prices', -1], '514': ['我要死', '"I want to die" (dramatic slang)', -2], '748': ['去死吧', '"go to hell"', -2], '7456': ['气死我了', '"I\'m so angry"', -1], '995': ['救救我', '"help me"', -1], '555': ['呜呜呜', 'boo-hoo (crying)', -1],
    '14': ['要死', '"will die" — avoided on plates and floors', -2], '24': ['易死', '"easy death" — avoided', -2], '74': ['气死', '"angered to death"', -1], '44': ['死死 / 事事', 'double 4 — traditionally avoided; modern reframe 事事 "every matter" (事事如意)', -1], '444': ['死死死', 'the most avoided triple in Chinese — yet the #1 angel number (protection) in the West', -2], '54': ['无事 / 我死', 'ambiguous: "nothing wrong" or "I die"', 0]
  };
  function clean(n) { return String(n == null ? '' : n).replace(/\D/g, '').slice(0, 20); }
  function reduce(n, keep) { keep = keep !== false; while (n > 9 && !(keep && (n === 11 || n === 22 || n === 33))) { n = String(n).split('').reduce(function (a, b) { return a + +b; }, 0); } return n; }
  function digitSum(s) { return s.split('').reduce(function (a, b) { return a + +b; }, 0); }
  function combos(s) {
    var found = [];
    Object.keys(COMBOS).forEach(function (k) { var i = s.indexOf(k); while (i > -1) { found.push({ k: k, i: i, e: i + k.length }); i = s.indexOf(k, i + 1); } });
    found = found.filter(function (a) { return !found.some(function (b) { return b !== a && b.i <= a.i && b.e >= a.e && (b.e - b.i) > (a.e - a.i); }); });
    var seen = {}; return found.filter(function (f) { if (seen[f.k]) return false; seen[f.k] = 1; return true; }).map(function (f) { var c = COMBOS[f.k]; return { code: f.k, zh: c[0], meaning: c[1], w: c[2] }; });
  }
  function pattern(s) {
    var p = [];
    if (s.length > 1 && /^(\d)\1+$/.test(s)) p.push('Repdigit — the energy of ' + s[0] + ' is amplified ' + s.length + '×');
    if (s.length > 2 && s === s.split('').reverse().join('')) p.push('Mirror (palindrome) — balance, reflection, things coming full circle');
    var asc = true, desc = true; for (var i = 1; i < s.length; i++) { if (+s[i] !== +s[i - 1] + 1) asc = false; if (+s[i] !== +s[i - 1] - 1) desc = false; }
    if (s.length > 2 && asc) p.push('Ascending sequence — progress, step-by-step growth');
    if (s.length > 2 && desc) p.push('Descending sequence — release, simplifying, letting go');
    var m = s.match(/(\d)\1\1/g); if (m && !/^(\d)\1+$/.test(s)) p.push('Contains triple ' + m.join(', ') + ' — a strong repeating signal');
    var cnt = {}; s.split('').forEach(function (d) { cnt[d] = (cnt[d] || 0) + 1; });
    var dom = Object.keys(cnt).sort(function (a, b) { return cnt[b] - cnt[a]; })[0];
    if (s.length > 2 && cnt[dom] / s.length >= 0.5 && !/^(\d)\1+$/.test(s)) p.push('Dominant digit ' + dom + ' (' + cnt[dom] + ' of ' + s.length + ')');
    return { list: p, dominant: dom, counts: cnt };
  }
  function decode(input) {
    var s = clean(input); if (!s) return null;
    var digits = s.split('').map(function (d) { var x = D[d]; return { d: d, zh: x.zh, py: x.py, sound: x.sound, w: x.w, angel: x.angel }; });
    var avg = digits.reduce(function (a, b) { return a + b.w; }, 0) / digits.length;
    var cb = combos(s); var bonus = cb.reduce(function (a, c) { return a + c.w * 3; }, 0);
    var chinese = Math.max(1, Math.min(99, Math.round(50 + avg * 12.5 + bonus)));
    var sum = digitSum(s), root = reduce(sum), pat = pattern(s);
    var uniq = Object.keys(pat.counts).length;
    var angelScore = Math.min(99, Math.round(40 + (s.length - uniq) / Math.max(1, s.length - 1) * 45 + (pat.list.length ? 10 : 0) + (s.length >= 3 ? 4 : 0)));
    var harmony = Math.round((chinese + angelScore + ([1, 3, 6, 8, 9, 11, 22, 33].indexOf(root) > -1 ? 80 : 60)) / 3);
    var dom = D[pat.dominant];
    var verdict;
    if (chinese >= 75) verdict = 'Highly auspicious in Chinese culture — a number people pay a premium for.';
    else if (chinese >= 55) verdict = 'Mildly lucky in Chinese culture — a comfortable, positive choice.';
    else if (chinese >= 40) verdict = 'Neutral in Chinese culture — neither sought after nor avoided.';
    else verdict = 'Traditionally avoided in Chinese culture (the sound of 4 → 死). In the West it reads very differently.';
    return { number: s, digits: digits, combos: cb, chinese: chinese, angelScore: angelScore, harmony: harmony, sum: sum, root: root, rootMeaning: ROOT[root], pattern: pat.list, dominant: pat.dominant, love: dom.love, career: dom.career, action: dom.action, angel: dom.angel, verdict: verdict };
  }
  function lifePath(y, m, d) { var r = reduce(reduce(digitSum(String(y))) + reduce(digitSum(String(m))) + reduce(digitSum(String(d)))); return { n: r, meaning: ROOT[r] }; }
  var PY = { a: 1, j: 1, s: 1, b: 2, k: 2, t: 2, c: 3, l: 3, u: 3, d: 4, m: 4, v: 4, e: 5, n: 5, w: 5, f: 6, o: 6, x: 6, g: 7, p: 7, y: 7, h: 8, q: 8, z: 8, i: 9, r: 9 };
  function nameNum(name, vowelsOnly) { var t = 0; String(name).toLowerCase().replace(/[^a-z]/g, '').split('').forEach(function (c) { if (!vowelsOnly || 'aeiou'.indexOf(c) > -1) t += PY[c]; }); var r = t ? reduce(t) : 0; return { n: r, meaning: ROOT[r] || '' }; }
  var ANIMALS = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  var AZH = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  var ZL = [[[2, 3], [5, 9]], [[1, 4], [5, 6]], [[1, 3, 4], [6, 7, 8]], [[3, 4, 6], [1, 7, 8]], [[1, 6, 7], [3, 8]], [[2, 8, 9], [1, 6, 7]], [[2, 3, 7], [1, 5, 6]], [[2, 7], [6, 8, 9]], [[4, 9], [2, 7]], [[5, 7, 8], [1, 3, 9]], [[3, 4, 9], [1, 6, 7]], [[2, 5, 8], [1, 7, 9]]];
  var EL = ['Metal', 'Metal', 'Water', 'Water', 'Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth'];
  function zodiac(y) { y = +y; var i = ((y - 1900) % 12 + 12) % 12; return { year: y, animal: ANIMALS[i], zh: AZH[i], element: EL[y % 10], lucky: ZL[i][0], unlucky: ZL[i][1] }; }
  var KUA = { 1: ['SE', 'E', 'S', 'N'], 2: ['NE', 'W', 'NW', 'SW'], 3: ['S', 'N', 'SE', 'E'], 4: ['N', 'S', 'E', 'SE'], 6: ['W', 'NE', 'SW', 'NW'], 7: ['NW', 'SW', 'NE', 'W'], 8: ['SW', 'NW', 'W', 'NE'], 9: ['E', 'SE', 'N', 'S'] };
  function kua(y, gender) {
    y = +y; var n = reduce(digitSum(String(y % 100).padStart(2, '0')), false); var k;
    if (gender === 'male') { k = y < 2000 ? 10 - n : 9 - n; } else { k = y < 2000 ? n + 5 : n + 6; }
    k = reduce(k, false); if (k === 0) k = 9; if (k === 5) k = gender === 'male' ? 2 : 8;
    var dirs = KUA[k]; return { kua: k, group: [1, 3, 4, 9].indexOf(k) > -1 ? 'East' : 'West', success: dirs[0], health: dirs[1], love: dirs[2], growth: dirs[3] };
  }
  function compat(a, b) {
    var x = reduce(a, false), y = reduce(b, false); var G = [[1, 5, 7], [2, 4, 8], [3, 6, 9]];
    var same = G.some(function (g) { return g.indexOf(x) > -1 && g.indexOf(y) > -1; });
    var pct = same ? 86 + ((x * y) % 12) : 58 + ((x + y * 3) % 22);
    return { a: x, b: y, pct: Math.min(98, pct), note: same ? 'Natural match — you share the same core rhythm.' : 'Complementary match — different rhythms that can balance each other with effort.' };
  }
  var WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  function luckyDates(y, m) {
    var days = new Date(y, m, 0).getDate(), out = [];
    for (var d = 1; d <= days; d++) { var code = String(m) + String(d).padStart(2, '0'); var r = decode(code); var bonus = /8/.test(String(d)) ? 8 : 0; if (/9/.test(String(d))) bonus += 4; if (/6/.test(String(d))) bonus += 3; var sc = Math.min(99, r.chinese + bonus - (/4/.test(String(d)) ? 25 : 0)); out.push({ date: y + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0'), day: WD[new Date(y, m - 1, d).getDay()], score: sc, combos: r.combos.map(function (c) { return c.code + ' ' + c.zh; }).join(', ') }); }
    return out.sort(function (a, b) { return b.score - a.score; });
  }
  function scoreFor(input, type) {
    var s = clean(input); if (!s) return null; var all = decode(s); var tail = decode(s.slice(-4)); var score = Math.round(all.chinese * 0.55 + tail.chinese * 0.45);
    var tips = [];
    if (/4/.test(s.slice(-4))) tips.push('The last digits contain 4 — Chinese-speaking buyers/visitors notice endings most. Consider an ending in 8, 6 or 9.');
    if (/8/.test(s)) tips.push('Contains 8 (发, prosperity) — a strong positive signal.');
    if (/(\d)\1\1/.test(s)) tips.push('Has a repeated triple — memorable and valued for ' + (type || 'numbers') + '.');
    if (all.combos.length) tips.push('Detected combos: ' + all.combos.map(function (c) { return c.code + ' (' + c.zh + ')'; }).join(', ') + '.');
    if (!tips.length) tips.push('No strong lucky or unlucky signals — a neutral, safe choice.');
    return { score: score, all: all, tips: tips };
  }
  function personal(dateStr, gender) {
    var p = String(dateStr).split('-'); if (p.length < 3) return null; var y = +p[0], m = +p[1], d = +p[2];
    var lp = lifePath(y, m, d), z = zodiac((m < 2 || (m === 2 && d < 4)) ? y - 1 : y), k = kua((m < 2 || (m === 2 && d < 4)) ? y - 1 : y, gender || 'female');
    var set = {}; [lp.n > 9 ? reduce(lp.n, false) : lp.n].concat(z.lucky).concat([8, 9]).forEach(function (n) { if (z.unlucky.indexOf(n) < 0) set[n] = 1; });
    var nums = Object.keys(set).map(Number); var combosOut = [nums.join(''), (nums[0] || 8) + '' + (nums[1] || 8) + '8', '168', '1' + (nums[0] || 6) + (nums[0] || 6) + '8'];
    return { lifePath: lp, zodiac: z, kua: k, lucky: nums, suggestions: combosOut };
  }
  g.NumberEngine = { decode: decode, lifePath: lifePath, expression: function (n) { return nameNum(n); }, soulUrge: function (n) { return nameNum(n, true); }, zodiac: zodiac, kua: kua, compat: compat, luckyDates: luckyDates, scoreFor: scoreFor, personal: personal, digits: D, combosTable: COMBOS, rootMeanings: ROOT, reduce: reduce, clean: clean };
})(window);
