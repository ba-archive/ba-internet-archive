import {
  t as $e,
  F as At,
  x as Bt,
  l as Di,
  B as Dr,
  f as Gt,
  m as Hu,
  w as Ku,
  C as Lr,
  y as Mn,
  q as Pe,
  s as Rt,
  a as U,
  c as Y,
  A as _n,
  v as bt,
  h as ce,
  d as dt,
  p as en,
  _ as ft,
  k as is,
  n as lt,
  j as ns,
  u as q,
  z as rs,
  r as se,
  b as tn,
  i as ut,
  e as xt,
  g as yt,
  o as z,
} from './index.7624513d.js';

var Qu = './public/yostarBottom.89a51789.png';
const zu = n => (en('data-v-429d9001'), (n = n()), tn(), n),
  Gu = { class: 'foot_view' },
  Xu = { class: 'top_link' },
  Zu = zu(() =>
    U(
      'div',
      { class: 'logo_zone' },
      [U('img', { class: 'bottom_logo', src: Qu, alt: '' })],
      -1
    )
  ),
  Yu = dt({
    __name: 'foot',
    setup(n) {
      const t = {
          1: 'terms',
          2: 'privacy',
          3: 'specific_business',
          4: 'based',
          5: 'fankit/guidelines',
        },
        i = s => {
          window.open(`https://bluearchive.jp/${t[s]}`);
        };
      return (s, l) => (
        z(),
        Y('div', Gu, [
          U('div', Xu, [
            U(
              'div',
              { class: 'link_item', onClick: l[0] || (l[0] = f => i('1')) },
              '\u5229\u7528\u898F\u7D04'
            ),
            U(
              'div',
              { class: 'link_item', onClick: l[1] || (l[1] = f => i('2')) },
              '\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC'
            ),
            U(
              'div',
              { class: 'link_item', onClick: l[2] || (l[2] = f => i('3')) },
              '\u7279\u5B9A\u5546\u53D6\u5F15\u6CD5\u306B\u57FA\u3065\u304F\u8868\u793A'
            ),
            U(
              'div',
              { class: 'link_item', onClick: l[3] || (l[3] = f => i('4')) },
              '\u8CC7\u91D1\u6C7A\u6E08\u6CD5\u306B\u57FA\u3065\u304F\u8868\u793A'
            ),
            U(
              'div',
              { class: 'link_item', onClick: l[4] || (l[4] = f => i('5')) },
              '\u4E8C\u6B21\u5275\u4F5C\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3'
            ),
          ]),
          Zu,
        ])
      );
    },
  });
var $u = ft(Yu, [['__scopeId', 'data-v-429d9001']]);
class Xe {
  constructor() {
    this.inspector = null;
  }
  createInspector(t, i, s, l, f) {
    (this.inspector = new IntersectionObserver(
      c => {
        c.forEach(m => {
          if (s === 'flower' && m.intersectionRatio > 0.9) {
            f && f();
            return;
          }
          m.intersectionRatio > 0.9 && (m.target.classList.add(i), f && f());
        });
      },
      { threshold: 0.9, rootMargin: '0px 40px -80px 40px' }
    )),
      document.getElementById(t) &&
        this.inspector.observe(document.getElementById(t)),
      l && this.inspector.observe(l);
  }
}
function ea(n) {
  return {
    all: (n = n || new Map()),
    on: function (t, i) {
      var s = n.get(t);
      s ? s.push(i) : n.set(t, [i]);
    },
    off: function (t, i) {
      var s = n.get(t);
      s && (i ? s.splice(s.indexOf(i) >>> 0, 1) : n.set(t, []));
    },
    emit: function (t, i) {
      var s = n.get(t);
      s &&
        s.slice().map(function (l) {
          l(i);
        }),
        (s = n.get('*')) &&
          s.slice().map(function (l) {
            l(t, i);
          });
    },
  };
}
const yn = ea();
const ss = n => (en('data-v-476a57a5'), (n = n()), tn(), n),
  ta = ss(() => U('div', { class: 'wufan' }, null, -1)),
  na = ss(() =>
    U(
      'div',
      { class: 'download' },
      [
        ce(` <div class="d_word">DOWNLOAD</div>
    <img v-if="isMobile" @click="toLink('apple')" src="@/assets/images/mobile/applestore.png" alt="" class="apple">
    <img v-if="!isMobile" @click="toLink('apple')" src="@/assets/images/pc/applePC.png" alt="" class="apple">
    <img v-if="isMobile" @click="toLink('google')" src="@/assets/images/mobile/googleplay.png" alt="" class="google">
    <img v-if="!isMobile" @click="toLink('google')" src="@/assets/images/pc/googlePC.png" alt="" class="google"> `),
        ce(` <img v-if="isMobile" src="@/assets/images/mobile/4-1.png" alt="" class="left_line" id="left_line6">
    <img v-if="!isMobile" src="@/assets/images/pc/4-1.png" alt="" class="left_line" id="left_line6">
    <img v-if="isMobile" src="@/assets/images/mobile/4-2.png" alt="" class="right_line" id="right_line6">
    <img v-if="!isMobile" src="@/assets/images/pc/4-2.png" alt="" class="right_line" id="right_line6"> `),
      ],
      -1
    )
  ),
  ia = dt({
    __name: 'wufan',
    setup(n) {
      let t = se(0);
      return (
        se(!1),
        xt(() => t.value < 700),
        Gt(() => {
          yn.on('width', i => {
            t.value = i.val;
          });
        }),
        yt(() => {
          lt(() => {
            new Xe().createInspector('left_line6', 'left_line_ani'),
              new Xe().createInspector('right_line6', 'right_line_ani');
          });
        }),
        (i, s) => (z(), Y(At, null, [ta, na], 64))
      );
    },
  });
var ra = ft(ia, [['__scopeId', 'data-v-476a57a5']]),
  Or =
    'data:image/png;base64,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',
  Ir =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAHvklEQVR4nN2ceWxVVR7HP29poaULa6HyZKlAhRYHa4uDC1IBRWWJZjDE4hJRR1ETnUnUjAuuiUs0RjQyzDiCyhKMRhR0BFkUbLDMsGhbaVlUfIW2AaHpOq9vmT9+XV5f7319y7n3XfwkL+0799zz+71v7u/cc889v2MrvGwxCSIJuAAYDWR0fNKAdqCp43MaOAb8miAfcZpkxwZMAa4GLgMmA2OjsN8MVAP7gd3AVsCt3s3e2Ay+ggqAxcAiIFtx2weA94D1wEnFbXdhN6DNZOAu4Hvgv8DDqBcH5Ip8DQm/z4CrDLChVKB+wIPAUeAfSBiZgQOYC+wEvgFmq2xclUDXAOXAG4BLUZuxcCWwBfgUGKOiwXgFGg58CHwJjIvfHWXMAyqBR4jzN8Zz8hykn/lTPA4YSArwEvAVMCLWRmIV6HFgM5AVq2ETKUaGB9NjOTlagRzA34HnYzg3kYxA+qaor/ZofmR/pL+5J1ojFqEfMma6L5qTIhUoGRHnxiidshoO4C1knBYRkQhkA/6FjDV+D9iAFcD8SCpHItAyoCQejyyIA1gHFPZVsS+BrgeeUuGRBUlFuo2B4SqFEygbWIVckr9XxiDdh+5vDCfQ28AwxQ6F8yVR3AjcrndQT6C5wAIjvJl03RKKbn2alIGWGmO+DAzWOqAlUAry0GkISakZZGTnMPWO58jKnWqUmWgZBrygdUBLoPuR2T5DcSanMHnBA+TOuhW7w6yJzbDcA+SFFoYKlAL8xRR3OnAVzOaSkidJHRTz86Qq7MCTWoXB3Ikxs39hyRgxlqLbn7FCyC0kZNomWCAb8JCp7gRhkZCzA/eGFnTyRyww6eUqmE1hyVOJDLlbkJE20FOg28z3RZv0EWMSGXLZBM1r24P+LkyEN3okOOQWdf7TKdDFwBCzvYgEV8FsChcvMzvkZnb+Yw8tSASNdT/zS9nnBPw+zePpw0ebHXIuYAJ0CzTDLMta1FeVcWTnevatf5H/NZ3RrNMj5JxJZrg1A7oF6nNexAzOuqsoW/UEv/1crlvHxJArBBEoC0Oe2mPD09LI/g2vcOTrDfohlzXKjJDLBxEo4WOf3gT45btNEYXcQFeuUU6MAxFopFEW4qWvkKutKKWx7iejzA8DkuxAulEWVKAVcj5PG5WbV1KxeQW+dg8Ag8fkMyTnD6rNpzuxuECChFxDzWFcF8/k2Lcf0/JbLQB2ZxLjZyzCVTALsOHe9xWHd67D721XYTjtHBFIOOuu4qy7quv7gCHZ5M+7n7SsUV1lroJZZLom8MPG5bSeqYvXZKYd0L5VWJzsydMpuu3ZHuJ0kp41iglXK3lT5XMCjSpaMgtncgoXXnsHwydO063TWH+c6u1rVJhrOqcEysjOIX/e0rAT/jUHd1C97QNVfVDDOSKQjVFTr2Pc9IXY7A7NGj5PG4e2rKK2slSVUT/Q6AQMG0ioIDk1nUk3/JkhYy/SrdN0yk35xuU0n1a62LUG8DuRhdqWZPDoPPLm3kvygEzdOhJSa/B7ParNHwVZyN0AHAd63w5MwhfSX9jsDnKuuInRl87FZtN+E2tASIVyELpXuu8hQQKd+OEbag7s6PreP3Mo+fOWknme/iOiQSEVShl0C7QduNlIa6F4Pa0c+vJd6n7c01WWlVvExDlLcPZL1T3vZPkuqrau7nrEMJDt0C3QjjAVleJpbqDhxBEqNq2g9Ww9AI6kZMYXlzBySrHueb52D1VbV3OyfJcZblYCtdAtUDVyNzP8lfOP/36nx/e0oS7y5i8lbaj++vPm0ycp37icplOm5K+ALPgEembbrEWW95rGyCnFjC8uwZGUrFuntqKUQ1tX4fO0megZXcPwYIHewySBnP1SmThnCVm5Rbp1TA6pYCqB/3R+CRaoGihF8rkMIyM7h8nzH6B/5lDdOgkIqWDeD/4S+kbuVQwWaOy0BWHFqa0s5dAW00Oqkxbgn8EFoQJ9AlSgsU5GGToDP7+3neptH1Bz0LQbqhYrgVPBBaEC+ZGVVmvN8gig5Uwt5RvfpLH+uJlme7kBvBhaqLXCbD3SF5lCfVUZe1cvS7Q4IOL0moLUWhUQQJbh7dU5rgS/t53DO9bi3r/NKBPRcBR4ReuAngAHgOVIvqlSvG0tVgmpTgLI+kTNu0K4rOcUZDwwSaU3NrsDAgECAb/KZuPhdcJcCOEWkrciD7DNKr0J+H1WEmcv8Gi4Cn3lalQgCzsDqjyyEG7gJiDstEAk2T4bgL+p8MhCNCCJOn0O1R3nna8/1xvEbmSvjZjyPi1GC5LGvi+SypEKBDKB5EWSZC2XkRIhZ4AbiGKcF21i7gvA3Zybb2NrkAjYHc1JsWQuv4Mk7msv3LEme4BpyO4QURFravcXwCUdhq1MANlc4Epi3IMontz3nzoMP4pshmQ1DiOd8WNI3xkT8W4O4EWS0SYBH8XZlipakTzbfGRbirhQtXvCr8iuBtOQLSsSMbBsRvYTGgc8Rx8DwEhRvb3EHiSdswBJCDZjYcQx4GnkjcxfgRMqGzd6i64UZDi/CNm/TP+NYHS4gU1I7vsuDLxijc4SaUVeoaxB9v64FLgc2V4rD8jpKA/HaWS+5nvk4fJb5BnRFMxMo2kDvu74BDOo45MGDECmfb3IOKsOxbMJ0fJ/OG4Y8rRQjgQAAAAASUVORK5CYII=',
  sa =
    'data:image/png;base64,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',
  ua =
    'data:image/png;base64,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',
  aa =
    'data:image/png;base64,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',
  oa =
    'data:image/png;base64,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';
function Pr(n) {
  return (
    n !== null &&
    typeof n == 'object' &&
    'constructor' in n &&
    n.constructor === Object
  );
}
function Li(n = {}, t = {}) {
  Object.keys(t).forEach(i => {
    typeof n[i] == 'undefined'
      ? (n[i] = t[i])
      : Pr(t[i]) && Pr(n[i]) && Object.keys(t[i]).length > 0 && Li(n[i], t[i]);
  });
}
const us = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
};
function Ne() {
  const n = typeof document != 'undefined' ? document : {};
  return Li(n, us), n;
}
const la = {
  document: us,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(n) {
    return typeof setTimeout == 'undefined' ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame(n) {
    typeof setTimeout != 'undefined' && clearTimeout(n);
  },
};
function De() {
  const n = typeof window != 'undefined' ? window : {};
  return Li(n, la), n;
}
function fa(n) {
  const t = n.__proto__;
  Object.defineProperty(n, '__proto__', {
    get() {
      return t;
    },
    set(i) {
      t.__proto__ = i;
    },
  });
}
class kt extends Array {
  constructor(t) {
    typeof t == 'number' ? super(t) : (super(...(t || [])), fa(this));
  }
}
function wn(n = []) {
  const t = [];
  return (
    n.forEach(i => {
      Array.isArray(i) ? t.push(...wn(i)) : t.push(i);
    }),
    t
  );
}
function as(n, t) {
  return Array.prototype.filter.call(n, t);
}
function da(n) {
  const t = [];
  for (let i = 0; i < n.length; i += 1) t.indexOf(n[i]) === -1 && t.push(n[i]);
  return t;
}
function ca(n, t) {
  if (typeof n != 'string') return [n];
  const i = [],
    s = t.querySelectorAll(n);
  for (let l = 0; l < s.length; l += 1) i.push(s[l]);
  return i;
}
function H(n, t) {
  const i = De(),
    s = Ne();
  let l = [];
  if (!t && n instanceof kt) return n;
  if (!n) return new kt(l);
  if (typeof n == 'string') {
    const f = n.trim();
    if (f.indexOf('<') >= 0 && f.indexOf('>') >= 0) {
      let c = 'div';
      f.indexOf('<li') === 0 && (c = 'ul'),
        f.indexOf('<tr') === 0 && (c = 'tbody'),
        (f.indexOf('<td') === 0 || f.indexOf('<th') === 0) && (c = 'tr'),
        f.indexOf('<tbody') === 0 && (c = 'table'),
        f.indexOf('<option') === 0 && (c = 'select');
      const m = s.createElement(c);
      m.innerHTML = f;
      for (let v = 0; v < m.childNodes.length; v += 1) l.push(m.childNodes[v]);
    } else l = ca(n.trim(), t || s);
  } else if (n.nodeType || n === i || n === s) l.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof kt) return n;
    l = n;
  }
  return new kt(da(l));
}
H.fn = kt.prototype;
function pa(...n) {
  const t = wn(n.map(i => i.split(' ')));
  return (
    this.forEach(i => {
      i.classList.add(...t);
    }),
    this
  );
}
function ha(...n) {
  const t = wn(n.map(i => i.split(' ')));
  return (
    this.forEach(i => {
      i.classList.remove(...t);
    }),
    this
  );
}
function ga(...n) {
  const t = wn(n.map(i => i.split(' ')));
  this.forEach(i => {
    t.forEach(s => {
      i.classList.toggle(s);
    });
  });
}
function va(...n) {
  const t = wn(n.map(i => i.split(' ')));
  return (
    as(this, i => t.filter(s => i.classList.contains(s)).length > 0).length > 0
  );
}
function ma(n, t) {
  if (arguments.length === 1 && typeof n == 'string')
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (let i = 0; i < this.length; i += 1)
    if (arguments.length === 2) this[i].setAttribute(n, t);
    else for (const s in n) (this[i][s] = n[s]), this[i].setAttribute(s, n[s]);
  return this;
}
function Aa(n) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(n);
  return this;
}
function ya(n) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = n;
  return this;
}
function wa(n) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof n != 'string' ? `${n}ms` : n;
  return this;
}
function Sa(...n) {
  let [t, i, s, l] = n;
  typeof n[1] == 'function' && (([t, s, l] = n), (i = void 0)), l || (l = !1);
  function f(y) {
    const A = y.target;
    if (!A) return;
    const C = y.target.dom7EventData || [];
    if ((C.indexOf(y) < 0 && C.unshift(y), H(A).is(i))) s.apply(A, C);
    else {
      const T = H(A).parents();
      for (let P = 0; P < T.length; P += 1) H(T[P]).is(i) && s.apply(T[P], C);
    }
  }
  function c(y) {
    const A = y && y.target ? y.target.dom7EventData || [] : [];
    A.indexOf(y) < 0 && A.unshift(y), s.apply(this, A);
  }
  const m = t.split(' ');
  let v;
  for (let y = 0; y < this.length; y += 1) {
    const A = this[y];
    if (i)
      for (v = 0; v < m.length; v += 1) {
        const C = m[v];
        A.dom7LiveListeners || (A.dom7LiveListeners = {}),
          A.dom7LiveListeners[C] || (A.dom7LiveListeners[C] = []),
          A.dom7LiveListeners[C].push({ listener: s, proxyListener: f }),
          A.addEventListener(C, f, l);
      }
    else
      for (v = 0; v < m.length; v += 1) {
        const C = m[v];
        A.dom7Listeners || (A.dom7Listeners = {}),
          A.dom7Listeners[C] || (A.dom7Listeners[C] = []),
          A.dom7Listeners[C].push({ listener: s, proxyListener: c }),
          A.addEventListener(C, c, l);
      }
  }
  return this;
}
function Ca(...n) {
  let [t, i, s, l] = n;
  typeof n[1] == 'function' && (([t, s, l] = n), (i = void 0)), l || (l = !1);
  const f = t.split(' ');
  for (let c = 0; c < f.length; c += 1) {
    const m = f[c];
    for (let v = 0; v < this.length; v += 1) {
      const y = this[v];
      let A;
      if (
        (!i && y.dom7Listeners
          ? (A = y.dom7Listeners[m])
          : i && y.dom7LiveListeners && (A = y.dom7LiveListeners[m]),
        A && A.length)
      )
        for (let C = A.length - 1; C >= 0; C -= 1) {
          const T = A[C];
          (s && T.listener === s) ||
          (s &&
            T.listener &&
            T.listener.dom7proxy &&
            T.listener.dom7proxy === s)
            ? (y.removeEventListener(m, T.proxyListener, l), A.splice(C, 1))
            : s ||
              (y.removeEventListener(m, T.proxyListener, l), A.splice(C, 1));
        }
    }
  }
  return this;
}
function Ea(...n) {
  const t = De(),
    i = n[0].split(' '),
    s = n[1];
  for (let l = 0; l < i.length; l += 1) {
    const f = i[l];
    for (let c = 0; c < this.length; c += 1) {
      const m = this[c];
      if (t.CustomEvent) {
        const v = new t.CustomEvent(f, {
          detail: s,
          bubbles: !0,
          cancelable: !0,
        });
        (m.dom7EventData = n.filter((y, A) => A > 0)),
          m.dispatchEvent(v),
          (m.dom7EventData = []),
          delete m.dom7EventData;
      }
    }
  }
  return this;
}
function ba(n) {
  const t = this;
  function i(s) {
    s.target === this && (n.call(this, s), t.off('transitionend', i));
  }
  return n && t.on('transitionend', i), this;
}
function Ba(n) {
  if (this.length > 0) {
    if (n) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue('margin-right')) +
        parseFloat(t.getPropertyValue('margin-left'))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function ka(n) {
  if (this.length > 0) {
    if (n) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue('margin-top')) +
        parseFloat(t.getPropertyValue('margin-bottom'))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Ta() {
  if (this.length > 0) {
    const n = De(),
      t = Ne(),
      i = this[0],
      s = i.getBoundingClientRect(),
      l = t.body,
      f = i.clientTop || l.clientTop || 0,
      c = i.clientLeft || l.clientLeft || 0,
      m = i === n ? n.scrollY : i.scrollTop,
      v = i === n ? n.scrollX : i.scrollLeft;
    return { top: s.top + m - f, left: s.left + v - c };
  }
  return null;
}
function xa() {
  const n = De();
  return this[0] ? n.getComputedStyle(this[0], null) : {};
}
function Fa(n, t) {
  const i = De();
  let s;
  if (arguments.length === 1)
    if (typeof n == 'string') {
      if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(n);
    } else {
      for (s = 0; s < this.length; s += 1)
        for (const l in n) this[s].style[l] = n[l];
      return this;
    }
  if (arguments.length === 2 && typeof n == 'string') {
    for (s = 0; s < this.length; s += 1) this[s].style[n] = t;
    return this;
  }
  return this;
}
function Da(n) {
  return n
    ? (this.forEach((t, i) => {
        n.apply(t, [t, i]);
      }),
      this)
    : this;
}
function La(n) {
  const t = as(this, n);
  return H(t);
}
function Oa(n) {
  if (typeof n == 'undefined') return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = n;
  return this;
}
function Ia(n) {
  if (typeof n == 'undefined')
    return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = n;
  return this;
}
function Pa(n) {
  const t = De(),
    i = Ne(),
    s = this[0];
  let l, f;
  if (!s || typeof n == 'undefined') return !1;
  if (typeof n == 'string') {
    if (s.matches) return s.matches(n);
    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(n);
    if (s.msMatchesSelector) return s.msMatchesSelector(n);
    for (l = H(n), f = 0; f < l.length; f += 1) if (l[f] === s) return !0;
    return !1;
  }
  if (n === i) return s === i;
  if (n === t) return s === t;
  if (n.nodeType || n instanceof kt) {
    for (l = n.nodeType ? [n] : n, f = 0; f < l.length; f += 1)
      if (l[f] === s) return !0;
    return !1;
  }
  return !1;
}
function Na() {
  let n = this[0],
    t;
  if (n) {
    for (t = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (t += 1);
    return t;
  }
}
function Ja(n) {
  if (typeof n == 'undefined') return this;
  const t = this.length;
  if (n > t - 1) return H([]);
  if (n < 0) {
    const i = t + n;
    return i < 0 ? H([]) : H([this[i]]);
  }
  return H([this[n]]);
}
function Ra(...n) {
  let t;
  const i = Ne();
  for (let s = 0; s < n.length; s += 1) {
    t = n[s];
    for (let l = 0; l < this.length; l += 1)
      if (typeof t == 'string') {
        const f = i.createElement('div');
        for (f.innerHTML = t; f.firstChild; ) this[l].appendChild(f.firstChild);
      } else if (t instanceof kt)
        for (let f = 0; f < t.length; f += 1) this[l].appendChild(t[f]);
      else this[l].appendChild(t);
  }
  return this;
}
function _a(n) {
  const t = Ne();
  let i, s;
  for (i = 0; i < this.length; i += 1)
    if (typeof n == 'string') {
      const l = t.createElement('div');
      for (l.innerHTML = n, s = l.childNodes.length - 1; s >= 0; s -= 1)
        this[i].insertBefore(l.childNodes[s], this[i].childNodes[0]);
    } else if (n instanceof kt)
      for (s = 0; s < n.length; s += 1)
        this[i].insertBefore(n[s], this[i].childNodes[0]);
    else this[i].insertBefore(n, this[i].childNodes[0]);
  return this;
}
function Ua(n) {
  return this.length > 0
    ? n
      ? this[0].nextElementSibling && H(this[0].nextElementSibling).is(n)
        ? H([this[0].nextElementSibling])
        : H([])
      : this[0].nextElementSibling
      ? H([this[0].nextElementSibling])
      : H([])
    : H([]);
}
function qa(n) {
  const t = [];
  let i = this[0];
  if (!i) return H([]);
  for (; i.nextElementSibling; ) {
    const s = i.nextElementSibling;
    n ? H(s).is(n) && t.push(s) : t.push(s), (i = s);
  }
  return H(t);
}
function Ma(n) {
  if (this.length > 0) {
    const t = this[0];
    return n
      ? t.previousElementSibling && H(t.previousElementSibling).is(n)
        ? H([t.previousElementSibling])
        : H([])
      : t.previousElementSibling
      ? H([t.previousElementSibling])
      : H([]);
  }
  return H([]);
}
function Va(n) {
  const t = [];
  let i = this[0];
  if (!i) return H([]);
  for (; i.previousElementSibling; ) {
    const s = i.previousElementSibling;
    n ? H(s).is(n) && t.push(s) : t.push(s), (i = s);
  }
  return H(t);
}
function ja(n) {
  const t = [];
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode !== null &&
      (n
        ? H(this[i].parentNode).is(n) && t.push(this[i].parentNode)
        : t.push(this[i].parentNode));
  return H(t);
}
function Wa(n) {
  const t = [];
  for (let i = 0; i < this.length; i += 1) {
    let s = this[i].parentNode;
    for (; s; ) n ? H(s).is(n) && t.push(s) : t.push(s), (s = s.parentNode);
  }
  return H(t);
}
function Ka(n) {
  let t = this;
  return typeof n == 'undefined'
    ? H([])
    : (t.is(n) || (t = t.parents(n).eq(0)), t);
}
function Ha(n) {
  const t = [];
  for (let i = 0; i < this.length; i += 1) {
    const s = this[i].querySelectorAll(n);
    for (let l = 0; l < s.length; l += 1) t.push(s[l]);
  }
  return H(t);
}
function Qa(n) {
  const t = [];
  for (let i = 0; i < this.length; i += 1) {
    const s = this[i].children;
    for (let l = 0; l < s.length; l += 1) (!n || H(s[l]).is(n)) && t.push(s[l]);
  }
  return H(t);
}
function za() {
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode && this[n].parentNode.removeChild(this[n]);
  return this;
}
const Nr = {
  addClass: pa,
  removeClass: ha,
  hasClass: va,
  toggleClass: ga,
  attr: ma,
  removeAttr: Aa,
  transform: ya,
  transition: wa,
  on: Sa,
  off: Ca,
  trigger: Ea,
  transitionEnd: ba,
  outerWidth: Ba,
  outerHeight: ka,
  styles: xa,
  offset: Ta,
  css: Fa,
  each: Da,
  html: Oa,
  text: Ia,
  is: Pa,
  index: Na,
  eq: Ja,
  append: Ra,
  prepend: _a,
  next: Ua,
  nextAll: qa,
  prev: Ma,
  prevAll: Va,
  parent: ja,
  parents: Wa,
  closest: Ka,
  find: Ha,
  children: Qa,
  filter: La,
  remove: za,
};
Object.keys(Nr).forEach(n => {
  Object.defineProperty(H.fn, n, { value: Nr[n], writable: !0 });
});
function Ga(n) {
  const t = n;
  Object.keys(t).forEach(i => {
    try {
      t[i] = null;
    } catch {}
    try {
      delete t[i];
    } catch {}
  });
}
function Vn(n, t) {
  return t === void 0 && (t = 0), setTimeout(n, t);
}
function An() {
  return Date.now();
}
function Xa(n) {
  const t = De();
  let i;
  return (
    t.getComputedStyle && (i = t.getComputedStyle(n, null)),
    !i && n.currentStyle && (i = n.currentStyle),
    i || (i = n.style),
    i
  );
}
function Za(n, t) {
  t === void 0 && (t = 'x');
  const i = De();
  let s, l, f;
  const c = Xa(n);
  return (
    i.WebKitCSSMatrix
      ? ((l = c.transform || c.webkitTransform),
        l.split(',').length > 6 &&
          (l = l
            .split(', ')
            .map(m => m.replace(',', '.'))
            .join(', ')),
        (f = new i.WebKitCSSMatrix(l === 'none' ? '' : l)))
      : ((f =
          c.MozTransform ||
          c.OTransform ||
          c.MsTransform ||
          c.msTransform ||
          c.transform ||
          c
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = f.toString().split(','))),
    t === 'x' &&
      (i.WebKitCSSMatrix
        ? (l = f.m41)
        : s.length === 16
        ? (l = parseFloat(s[12]))
        : (l = parseFloat(s[4]))),
    t === 'y' &&
      (i.WebKitCSSMatrix
        ? (l = f.m42)
        : s.length === 16
        ? (l = parseFloat(s[13]))
        : (l = parseFloat(s[5]))),
    l || 0
  );
}
function Nn(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === 'Object'
  );
}
function Ya(n) {
  return typeof window != 'undefined' &&
    typeof window.HTMLElement != 'undefined'
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
function Ge() {
  const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !Ya(s)) {
      const l = Object.keys(Object(s)).filter(f => t.indexOf(f) < 0);
      for (let f = 0, c = l.length; f < c; f += 1) {
        const m = l[f],
          v = Object.getOwnPropertyDescriptor(s, m);
        v !== void 0 &&
          v.enumerable &&
          (Nn(n[m]) && Nn(s[m])
            ? s[m].__swiper__
              ? (n[m] = s[m])
              : Ge(n[m], s[m])
            : !Nn(n[m]) && Nn(s[m])
            ? ((n[m] = {}), s[m].__swiper__ ? (n[m] = s[m]) : Ge(n[m], s[m]))
            : (n[m] = s[m]));
      }
    }
  }
  return n;
}
function Jn(n, t, i) {
  n.style.setProperty(t, i);
}
function os(n) {
  let { swiper: t, targetPosition: i, side: s } = n;
  const l = De(),
    f = -t.translate;
  let c = null,
    m;
  const v = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = 'none'),
    l.cancelAnimationFrame(t.cssModeFrameID);
  const y = i > f ? 'next' : 'prev',
    A = (T, P) => (y === 'next' && T >= P) || (y === 'prev' && T <= P),
    C = () => {
      (m = new Date().getTime()), c === null && (c = m);
      const T = Math.max(Math.min((m - c) / v, 1), 0),
        P = 0.5 - Math.cos(T * Math.PI) / 2;
      let I = f + P * (i - f);
      if ((A(I, i) && (I = i), t.wrapperEl.scrollTo({ [s]: I }), A(I, i))) {
        (t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [s]: I });
          }),
          l.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = l.requestAnimationFrame(C);
    };
  C();
}
let mi;
function $a() {
  const n = De(),
    t = Ne();
  return {
    smoothScroll:
      t.documentElement && 'scrollBehavior' in t.documentElement.style,
    touch: !!(
      'ontouchstart' in n ||
      (n.DocumentTouch && t instanceof n.DocumentTouch)
    ),
    passiveListener: (function () {
      let s = !1;
      try {
        const l = Object.defineProperty({}, 'passive', {
          get() {
            s = !0;
          },
        });
        n.addEventListener('testPassiveListener', null, l);
      } catch {}
      return s;
    })(),
    gestures: (function () {
      return 'ongesturestart' in n;
    })(),
  };
}
function ls() {
  return mi || (mi = $a()), mi;
}
let Ai;
function eo(n) {
  let { userAgent: t } = n === void 0 ? {} : n;
  const i = ls(),
    s = De(),
    l = s.navigator.platform,
    f = t || s.navigator.userAgent,
    c = { ios: !1, android: !1 },
    m = s.screen.width,
    v = s.screen.height,
    y = f.match(/(Android);?[\s\/]+([\d.]+)?/);
  let A = f.match(/(iPad).*OS\s([\d_]+)/);
  const C = f.match(/(iPod)(.*OS\s([\d_]+))?/),
    T = !A && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    P = l === 'Win32';
  let I = l === 'MacIntel';
  const _ = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !A &&
      I &&
      i.touch &&
      _.indexOf(`${m}x${v}`) >= 0 &&
      ((A = f.match(/(Version)\/([\d.]+)/)),
      A || (A = [0, 1, '13_0_0']),
      (I = !1)),
    y && !P && ((c.os = 'android'), (c.android = !0)),
    (A || T || C) && ((c.os = 'ios'), (c.ios = !0)),
    c
  );
}
function to(n) {
  return n === void 0 && (n = {}), Ai || (Ai = eo(n)), Ai;
}
let yi;
function no() {
  const n = De();
  function t() {
    const i = n.navigator.userAgent.toLowerCase();
    return (
      i.indexOf('safari') >= 0 &&
      i.indexOf('chrome') < 0 &&
      i.indexOf('android') < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      n.navigator.userAgent
    ),
  };
}
function io() {
  return yi || (yi = no()), yi;
}
function ro(n) {
  let { swiper: t, on: i, emit: s } = n;
  const l = De();
  let f = null,
    c = null;
  const m = () => {
      !t || t.destroyed || !t.initialized || (s('beforeResize'), s('resize'));
    },
    v = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((f = new ResizeObserver(C => {
          c = l.requestAnimationFrame(() => {
            const { width: T, height: P } = t;
            let I = T,
              _ = P;
            C.forEach(M => {
              let { contentBoxSize: N, contentRect: j, target: K } = M;
              (K && K !== t.el) ||
                ((I = j ? j.width : (N[0] || N).inlineSize),
                (_ = j ? j.height : (N[0] || N).blockSize));
            }),
              (I !== T || _ !== P) && m();
          });
        })),
        f.observe(t.el));
    },
    y = () => {
      c && l.cancelAnimationFrame(c),
        f && f.unobserve && t.el && (f.unobserve(t.el), (f = null));
    },
    A = () => {
      !t || t.destroyed || !t.initialized || s('orientationchange');
    };
  i('init', () => {
    if (t.params.resizeObserver && typeof l.ResizeObserver != 'undefined') {
      v();
      return;
    }
    l.addEventListener('resize', m), l.addEventListener('orientationchange', A);
  }),
    i('destroy', () => {
      y(),
        l.removeEventListener('resize', m),
        l.removeEventListener('orientationchange', A);
    });
}
function so(n) {
  let { swiper: t, extendParams: i, on: s, emit: l } = n;
  const f = [],
    c = De(),
    m = function (A, C) {
      C === void 0 && (C = {});
      const T = c.MutationObserver || c.WebkitMutationObserver,
        P = new T(I => {
          if (I.length === 1) {
            l('observerUpdate', I[0]);
            return;
          }
          const _ = function () {
            l('observerUpdate', I[0]);
          };
          c.requestAnimationFrame
            ? c.requestAnimationFrame(_)
            : c.setTimeout(_, 0);
        });
      P.observe(A, {
        attributes: typeof C.attributes == 'undefined' ? !0 : C.attributes,
        childList: typeof C.childList == 'undefined' ? !0 : C.childList,
        characterData:
          typeof C.characterData == 'undefined' ? !0 : C.characterData,
      }),
        f.push(P);
    },
    v = () => {
      if (!!t.params.observer) {
        if (t.params.observeParents) {
          const A = t.$el.parents();
          for (let C = 0; C < A.length; C += 1) m(A[C]);
        }
        m(t.$el[0], { childList: t.params.observeSlideChildren }),
          m(t.$wrapperEl[0], { attributes: !1 });
      }
    },
    y = () => {
      f.forEach(A => {
        A.disconnect();
      }),
        f.splice(0, f.length);
    };
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', v),
    s('destroy', y);
}
var uo = {
  on(n, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s;
    const l = i ? 'unshift' : 'push';
    return (
      n.split(' ').forEach(f => {
        s.eventsListeners[f] || (s.eventsListeners[f] = []),
          s.eventsListeners[f][l](t);
      }),
      s
    );
  },
  once(n, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != 'function') return s;
    function l() {
      s.off(n, l), l.__emitterProxy && delete l.__emitterProxy;
      for (var f = arguments.length, c = new Array(f), m = 0; m < f; m++)
        c[m] = arguments[m];
      t.apply(s, c);
    }
    return (l.__emitterProxy = t), s.on(n, l, i);
  },
  onAny(n, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof n != 'function') return i;
    const s = t ? 'unshift' : 'push';
    return i.eventsAnyListeners.indexOf(n) < 0 && i.eventsAnyListeners[s](n), i;
  },
  offAny(n) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const i = t.eventsAnyListeners.indexOf(n);
    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
  },
  off(n, t) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        n.split(' ').forEach(s => {
          typeof t == 'undefined'
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((l, f) => {
                (l === t || (l.__emitterProxy && l.__emitterProxy === t)) &&
                  i.eventsListeners[s].splice(f, 1);
              });
        }),
      i
    );
  },
  emit() {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
    let t, i, s;
    for (var l = arguments.length, f = new Array(l), c = 0; c < l; c++)
      f[c] = arguments[c];
    return (
      typeof f[0] == 'string' || Array.isArray(f[0])
        ? ((t = f[0]), (i = f.slice(1, f.length)), (s = n))
        : ((t = f[0].events), (i = f[0].data), (s = f[0].context || n)),
      i.unshift(s),
      (Array.isArray(t) ? t : t.split(' ')).forEach(v => {
        n.eventsAnyListeners &&
          n.eventsAnyListeners.length &&
          n.eventsAnyListeners.forEach(y => {
            y.apply(s, [v, ...i]);
          }),
          n.eventsListeners &&
            n.eventsListeners[v] &&
            n.eventsListeners[v].forEach(y => {
              y.apply(s, i);
            });
      }),
      n
    );
  },
};
function ao() {
  const n = this;
  let t, i;
  const s = n.$el;
  typeof n.params.width != 'undefined' && n.params.width !== null
    ? (t = n.params.width)
    : (t = s[0].clientWidth),
    typeof n.params.height != 'undefined' && n.params.height !== null
      ? (i = n.params.height)
      : (i = s[0].clientHeight),
    !((t === 0 && n.isHorizontal()) || (i === 0 && n.isVertical())) &&
      ((t =
        t -
        parseInt(s.css('padding-left') || 0, 10) -
        parseInt(s.css('padding-right') || 0, 10)),
      (i =
        i -
        parseInt(s.css('padding-top') || 0, 10) -
        parseInt(s.css('padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(n, {
        width: t,
        height: i,
        size: n.isHorizontal() ? t : i,
      }));
}
function oo() {
  const n = this;
  function t(Z) {
    return n.isHorizontal()
      ? Z
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[Z];
  }
  function i(Z, de) {
    return parseFloat(Z.getPropertyValue(t(de)) || 0);
  }
  const s = n.params,
    { $wrapperEl: l, size: f, rtlTranslate: c, wrongRTL: m } = n,
    v = n.virtual && s.virtual.enabled,
    y = v ? n.virtual.slides.length : n.slides.length,
    A = l.children(`.${n.params.slideClass}`),
    C = v ? n.virtual.slides.length : A.length;
  let T = [];
  const P = [],
    I = [];
  let _ = s.slidesOffsetBefore;
  typeof _ == 'function' && (_ = s.slidesOffsetBefore.call(n));
  let M = s.slidesOffsetAfter;
  typeof M == 'function' && (M = s.slidesOffsetAfter.call(n));
  const N = n.snapGrid.length,
    j = n.slidesGrid.length;
  let K = s.spaceBetween,
    Q = -_,
    Ae = 0,
    o = 0;
  if (typeof f == 'undefined') return;
  typeof K == 'string' &&
    K.indexOf('%') >= 0 &&
    (K = (parseFloat(K.replace('%', '')) / 100) * f),
    (n.virtualSize = -K),
    c
      ? A.css({ marginLeft: '', marginBottom: '', marginTop: '' })
      : A.css({ marginRight: '', marginBottom: '', marginTop: '' }),
    s.centeredSlides &&
      s.cssMode &&
      (Jn(n.wrapperEl, '--swiper-centered-offset-before', ''),
      Jn(n.wrapperEl, '--swiper-centered-offset-after', ''));
  const ge = s.grid && s.grid.rows > 1 && n.grid;
  ge && n.grid.initSlides(C);
  let ee;
  const be =
    s.slidesPerView === 'auto' &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      Z => typeof s.breakpoints[Z].slidesPerView != 'undefined'
    ).length > 0;
  for (let Z = 0; Z < C; Z += 1) {
    ee = 0;
    const de = A.eq(Z);
    if ((ge && n.grid.updateSlide(Z, de, C, t), de.css('display') !== 'none')) {
      if (s.slidesPerView === 'auto') {
        be && (A[Z].style[t('width')] = '');
        const ue = getComputedStyle(de[0]),
          Le = de[0].style.transform,
          et = de[0].style.webkitTransform;
        if (
          (Le && (de[0].style.transform = 'none'),
          et && (de[0].style.webkitTransform = 'none'),
          s.roundLengths)
        )
          ee = n.isHorizontal() ? de.outerWidth(!0) : de.outerHeight(!0);
        else {
          const ct = i(ue, 'width'),
            at = i(ue, 'padding-left'),
            tt = i(ue, 'padding-right'),
            qt = i(ue, 'margin-left'),
            he = i(ue, 'margin-right'),
            ae = ue.getPropertyValue('box-sizing');
          if (ae && ae === 'border-box') ee = ct + qt + he;
          else {
            const { clientWidth: oe, offsetWidth: je } = de[0];
            ee = ct + at + tt + qt + he + (je - oe);
          }
        }
        Le && (de[0].style.transform = Le),
          et && (de[0].style.webkitTransform = et),
          s.roundLengths && (ee = Math.floor(ee));
      } else
        (ee = (f - (s.slidesPerView - 1) * K) / s.slidesPerView),
          s.roundLengths && (ee = Math.floor(ee)),
          A[Z] && (A[Z].style[t('width')] = `${ee}px`);
      A[Z] && (A[Z].swiperSlideSize = ee),
        I.push(ee),
        s.centeredSlides
          ? ((Q = Q + ee / 2 + Ae / 2 + K),
            Ae === 0 && Z !== 0 && (Q = Q - f / 2 - K),
            Z === 0 && (Q = Q - f / 2 - K),
            Math.abs(Q) < 1 / 1e3 && (Q = 0),
            s.roundLengths && (Q = Math.floor(Q)),
            o % s.slidesPerGroup === 0 && T.push(Q),
            P.push(Q))
          : (s.roundLengths && (Q = Math.floor(Q)),
            (o - Math.min(n.params.slidesPerGroupSkip, o)) %
              n.params.slidesPerGroup ===
              0 && T.push(Q),
            P.push(Q),
            (Q = Q + ee + K)),
        (n.virtualSize += ee + K),
        (Ae = ee),
        (o += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, f) + M),
    c &&
      m &&
      (s.effect === 'slide' || s.effect === 'coverflow') &&
      l.css({ width: `${n.virtualSize + s.spaceBetween}px` }),
    s.setWrapperSize &&
      l.css({ [t('width')]: `${n.virtualSize + s.spaceBetween}px` }),
    ge && n.grid.updateWrapperSize(ee, T, t),
    !s.centeredSlides)
  ) {
    const Z = [];
    for (let de = 0; de < T.length; de += 1) {
      let ue = T[de];
      s.roundLengths && (ue = Math.floor(ue)),
        T[de] <= n.virtualSize - f && Z.push(ue);
    }
    (T = Z),
      Math.floor(n.virtualSize - f) - Math.floor(T[T.length - 1]) > 1 &&
        T.push(n.virtualSize - f);
  }
  if ((T.length === 0 && (T = [0]), s.spaceBetween !== 0)) {
    const Z = n.isHorizontal() && c ? 'marginLeft' : t('marginRight');
    A.filter((de, ue) => (s.cssMode ? ue !== A.length - 1 : !0)).css({
      [Z]: `${K}px`,
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let Z = 0;
    I.forEach(ue => {
      Z += ue + (s.spaceBetween ? s.spaceBetween : 0);
    }),
      (Z -= s.spaceBetween);
    const de = Z - f;
    T = T.map(ue => (ue < 0 ? -_ : ue > de ? de + M : ue));
  }
  if (s.centerInsufficientSlides) {
    let Z = 0;
    if (
      (I.forEach(de => {
        Z += de + (s.spaceBetween ? s.spaceBetween : 0);
      }),
      (Z -= s.spaceBetween),
      Z < f)
    ) {
      const de = (f - Z) / 2;
      T.forEach((ue, Le) => {
        T[Le] = ue - de;
      }),
        P.forEach((ue, Le) => {
          P[Le] = ue + de;
        });
    }
  }
  if (
    (Object.assign(n, {
      slides: A,
      snapGrid: T,
      slidesGrid: P,
      slidesSizesGrid: I,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    Jn(n.wrapperEl, '--swiper-centered-offset-before', `${-T[0]}px`),
      Jn(
        n.wrapperEl,
        '--swiper-centered-offset-after',
        `${n.size / 2 - I[I.length - 1] / 2}px`
      );
    const Z = -n.snapGrid[0],
      de = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map(ue => ue + Z)),
      (n.slidesGrid = n.slidesGrid.map(ue => ue + de));
  }
  if (
    (C !== y && n.emit('slidesLengthChange'),
    T.length !== N &&
      (n.params.watchOverflow && n.checkOverflow(),
      n.emit('snapGridLengthChange')),
    P.length !== j && n.emit('slidesGridLengthChange'),
    s.watchSlidesProgress && n.updateSlidesOffset(),
    !v && !s.cssMode && (s.effect === 'slide' || s.effect === 'fade'))
  ) {
    const Z = `${s.containerModifierClass}backface-hidden`,
      de = n.$el.hasClass(Z);
    C <= s.maxBackfaceHiddenSlides
      ? de || n.$el.addClass(Z)
      : de && n.$el.removeClass(Z);
  }
}
function lo(n) {
  const t = this,
    i = [],
    s = t.virtual && t.params.virtual.enabled;
  let l = 0,
    f;
  typeof n == 'number'
    ? t.setTransition(n)
    : n === !0 && t.setTransition(t.params.speed);
  const c = m =>
    s
      ? t.slides.filter(
          v => parseInt(v.getAttribute('data-swiper-slide-index'), 10) === m
        )[0]
      : t.slides.eq(m)[0];
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || H([])).each(m => {
        i.push(m);
      });
    else
      for (f = 0; f < Math.ceil(t.params.slidesPerView); f += 1) {
        const m = t.activeIndex + f;
        if (m > t.slides.length && !s) break;
        i.push(c(m));
      }
  else i.push(c(t.activeIndex));
  for (f = 0; f < i.length; f += 1)
    if (typeof i[f] != 'undefined') {
      const m = i[f].offsetHeight;
      l = m > l ? m : l;
    }
  (l || l === 0) && t.$wrapperEl.css('height', `${l}px`);
}
function fo() {
  const n = this,
    t = n.slides;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = n.isHorizontal()
      ? t[i].offsetLeft
      : t[i].offsetTop;
}
function co(n) {
  n === void 0 && (n = (this && this.translate) || 0);
  const t = this,
    i = t.params,
    { slides: s, rtlTranslate: l, snapGrid: f } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset == 'undefined' && t.updateSlidesOffset();
  let c = -n;
  l && (c = n),
    s.removeClass(i.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let m = 0; m < s.length; m += 1) {
    const v = s[m];
    let y = v.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (y -= s[0].swiperSlideOffset);
    const A =
        (c + (i.centeredSlides ? t.minTranslate() : 0) - y) /
        (v.swiperSlideSize + i.spaceBetween),
      C =
        (c - f[0] + (i.centeredSlides ? t.minTranslate() : 0) - y) /
        (v.swiperSlideSize + i.spaceBetween),
      T = -(c - y),
      P = T + t.slidesSizesGrid[m];
    ((T >= 0 && T < t.size - 1) ||
      (P > 1 && P <= t.size) ||
      (T <= 0 && P >= t.size)) &&
      (t.visibleSlides.push(v),
      t.visibleSlidesIndexes.push(m),
      s.eq(m).addClass(i.slideVisibleClass)),
      (v.progress = l ? -A : A),
      (v.originalProgress = l ? -C : C);
  }
  t.visibleSlides = H(t.visibleSlides);
}
function po(n) {
  const t = this;
  if (typeof n == 'undefined') {
    const y = t.rtlTranslate ? -1 : 1;
    n = (t && t.translate && t.translate * y) || 0;
  }
  const i = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: l, isBeginning: f, isEnd: c } = t;
  const m = f,
    v = c;
  s === 0
    ? ((l = 0), (f = !0), (c = !0))
    : ((l = (n - t.minTranslate()) / s), (f = l <= 0), (c = l >= 1)),
    Object.assign(t, { progress: l, isBeginning: f, isEnd: c }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      t.updateSlidesProgress(n),
    f && !m && t.emit('reachBeginning toEdge'),
    c && !v && t.emit('reachEnd toEdge'),
    ((m && !f) || (v && !c)) && t.emit('fromEdge'),
    t.emit('progress', l);
}
function ho() {
  const n = this,
    { slides: t, params: i, $wrapperEl: s, activeIndex: l, realIndex: f } = n,
    c = n.virtual && i.virtual.enabled;
  t.removeClass(
    `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
  );
  let m;
  c
    ? (m = n.$wrapperEl.find(
        `.${i.slideClass}[data-swiper-slide-index="${l}"]`
      ))
    : (m = t.eq(l)),
    m.addClass(i.slideActiveClass),
    i.loop &&
      (m.hasClass(i.slideDuplicateClass)
        ? s
            .children(
              `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${f}"]`
            )
            .addClass(i.slideDuplicateActiveClass)
        : s
            .children(
              `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${f}"]`
            )
            .addClass(i.slideDuplicateActiveClass));
  let v = m.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
  i.loop && v.length === 0 && ((v = t.eq(0)), v.addClass(i.slideNextClass));
  let y = m.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
  i.loop && y.length === 0 && ((y = t.eq(-1)), y.addClass(i.slidePrevClass)),
    i.loop &&
      (v.hasClass(i.slideDuplicateClass)
        ? s
            .children(
              `.${i.slideClass}:not(.${
                i.slideDuplicateClass
              })[data-swiper-slide-index="${v.attr(
                'data-swiper-slide-index'
              )}"]`
            )
            .addClass(i.slideDuplicateNextClass)
        : s
            .children(
              `.${i.slideClass}.${
                i.slideDuplicateClass
              }[data-swiper-slide-index="${v.attr('data-swiper-slide-index')}"]`
            )
            .addClass(i.slideDuplicateNextClass),
      y.hasClass(i.slideDuplicateClass)
        ? s
            .children(
              `.${i.slideClass}:not(.${
                i.slideDuplicateClass
              })[data-swiper-slide-index="${y.attr(
                'data-swiper-slide-index'
              )}"]`
            )
            .addClass(i.slideDuplicatePrevClass)
        : s
            .children(
              `.${i.slideClass}.${
                i.slideDuplicateClass
              }[data-swiper-slide-index="${y.attr('data-swiper-slide-index')}"]`
            )
            .addClass(i.slideDuplicatePrevClass)),
    n.emitSlidesClasses();
}
function go(n) {
  const t = this,
    i = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: s,
      snapGrid: l,
      params: f,
      activeIndex: c,
      realIndex: m,
      snapIndex: v,
    } = t;
  let y = n,
    A;
  if (typeof y == 'undefined') {
    for (let T = 0; T < s.length; T += 1)
      typeof s[T + 1] != 'undefined'
        ? i >= s[T] && i < s[T + 1] - (s[T + 1] - s[T]) / 2
          ? (y = T)
          : i >= s[T] && i < s[T + 1] && (y = T + 1)
        : i >= s[T] && (y = T);
    f.normalizeSlideIndex && (y < 0 || typeof y == 'undefined') && (y = 0);
  }
  if (l.indexOf(i) >= 0) A = l.indexOf(i);
  else {
    const T = Math.min(f.slidesPerGroupSkip, y);
    A = T + Math.floor((y - T) / f.slidesPerGroup);
  }
  if ((A >= l.length && (A = l.length - 1), y === c)) {
    A !== v && ((t.snapIndex = A), t.emit('snapIndexChange'));
    return;
  }
  const C = parseInt(t.slides.eq(y).attr('data-swiper-slide-index') || y, 10);
  Object.assign(t, {
    snapIndex: A,
    realIndex: C,
    previousIndex: c,
    activeIndex: y,
  }),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    m !== C && t.emit('realIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
}
function vo(n) {
  const t = this,
    i = t.params,
    s = H(n).closest(`.${i.slideClass}`)[0];
  let l = !1,
    f;
  if (s) {
    for (let c = 0; c < t.slides.length; c += 1)
      if (t.slides[c] === s) {
        (l = !0), (f = c);
        break;
      }
  }
  if (s && l)
    (t.clickedSlide = s),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(H(s).attr('data-swiper-slide-index'), 10))
        : (t.clickedIndex = f);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var mo = {
  updateSize: ao,
  updateSlides: oo,
  updateAutoHeight: lo,
  updateSlidesOffset: fo,
  updateSlidesProgress: co,
  updateProgress: po,
  updateSlidesClasses: ho,
  updateActiveIndex: go,
  updateClickedSlide: vo,
};
function Ao(n) {
  n === void 0 && (n = this.isHorizontal() ? 'x' : 'y');
  const t = this,
    { params: i, rtlTranslate: s, translate: l, $wrapperEl: f } = t;
  if (i.virtualTranslate) return s ? -l : l;
  if (i.cssMode) return l;
  let c = Za(f[0], n);
  return s && (c = -c), c || 0;
}
function yo(n, t) {
  const i = this,
    {
      rtlTranslate: s,
      params: l,
      $wrapperEl: f,
      wrapperEl: c,
      progress: m,
    } = i;
  let v = 0,
    y = 0;
  const A = 0;
  i.isHorizontal() ? (v = s ? -n : n) : (y = n),
    l.roundLengths && ((v = Math.floor(v)), (y = Math.floor(y))),
    l.cssMode
      ? (c[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal()
          ? -v
          : -y)
      : l.virtualTranslate ||
        f.transform(`translate3d(${v}px, ${y}px, ${A}px)`),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? v : y);
  let C;
  const T = i.maxTranslate() - i.minTranslate();
  T === 0 ? (C = 0) : (C = (n - i.minTranslate()) / T),
    C !== m && i.updateProgress(n),
    i.emit('setTranslate', i.translate, t);
}
function wo() {
  return -this.snapGrid[0];
}
function So() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Co(n, t, i, s, l) {
  n === void 0 && (n = 0),
    t === void 0 && (t = this.params.speed),
    i === void 0 && (i = !0),
    s === void 0 && (s = !0);
  const f = this,
    { params: c, wrapperEl: m } = f;
  if (f.animating && c.preventInteractionOnTransition) return !1;
  const v = f.minTranslate(),
    y = f.maxTranslate();
  let A;
  if (
    (s && n > v ? (A = v) : s && n < y ? (A = y) : (A = n),
    f.updateProgress(A),
    c.cssMode)
  ) {
    const C = f.isHorizontal();
    if (t === 0) m[C ? 'scrollLeft' : 'scrollTop'] = -A;
    else {
      if (!f.support.smoothScroll)
        return (
          os({ swiper: f, targetPosition: -A, side: C ? 'left' : 'top' }), !0
        );
      m.scrollTo({ [C ? 'left' : 'top']: -A, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    t === 0
      ? (f.setTransition(0),
        f.setTranslate(A),
        i && (f.emit('beforeTransitionStart', t, l), f.emit('transitionEnd')))
      : (f.setTransition(t),
        f.setTranslate(A),
        i && (f.emit('beforeTransitionStart', t, l), f.emit('transitionStart')),
        f.animating ||
          ((f.animating = !0),
          f.onTranslateToWrapperTransitionEnd ||
            (f.onTranslateToWrapperTransitionEnd = function (T) {
              !f ||
                f.destroyed ||
                (T.target === this &&
                  (f.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    f.onTranslateToWrapperTransitionEnd
                  ),
                  f.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    f.onTranslateToWrapperTransitionEnd
                  ),
                  (f.onTranslateToWrapperTransitionEnd = null),
                  delete f.onTranslateToWrapperTransitionEnd,
                  i && f.emit('transitionEnd')));
            }),
          f.$wrapperEl[0].addEventListener(
            'transitionend',
            f.onTranslateToWrapperTransitionEnd
          ),
          f.$wrapperEl[0].addEventListener(
            'webkitTransitionEnd',
            f.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Eo = {
  getTranslate: Ao,
  setTranslate: yo,
  minTranslate: wo,
  maxTranslate: So,
  translateTo: Co,
};
function bo(n, t) {
  const i = this;
  i.params.cssMode || i.$wrapperEl.transition(n), i.emit('setTransition', n, t);
}
function fs(n) {
  let { swiper: t, runCallbacks: i, direction: s, step: l } = n;
  const { activeIndex: f, previousIndex: c } = t;
  let m = s;
  if (
    (m || (f > c ? (m = 'next') : f < c ? (m = 'prev') : (m = 'reset')),
    t.emit(`transition${l}`),
    i && f !== c)
  ) {
    if (m === 'reset') {
      t.emit(`slideResetTransition${l}`);
      return;
    }
    t.emit(`slideChangeTransition${l}`),
      m === 'next'
        ? t.emit(`slideNextTransition${l}`)
        : t.emit(`slidePrevTransition${l}`);
  }
}
function Bo(n, t) {
  n === void 0 && (n = !0);
  const i = this,
    { params: s } = i;
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    fs({ swiper: i, runCallbacks: n, direction: t, step: 'Start' }));
}
function ko(n, t) {
  n === void 0 && (n = !0);
  const i = this,
    { params: s } = i;
  (i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0),
      fs({ swiper: i, runCallbacks: n, direction: t, step: 'End' }));
}
var To = { setTransition: bo, transitionStart: Bo, transitionEnd: ko };
function xo(n, t, i, s, l) {
  if (
    (n === void 0 && (n = 0),
    t === void 0 && (t = this.params.speed),
    i === void 0 && (i = !0),
    typeof n != 'number' && typeof n != 'string')
  )
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof n}] given.`
    );
  if (typeof n == 'string') {
    const K = parseInt(n, 10);
    if (!isFinite(K))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${n}] given.`
      );
    n = K;
  }
  const f = this;
  let c = n;
  c < 0 && (c = 0);
  const {
    params: m,
    snapGrid: v,
    slidesGrid: y,
    previousIndex: A,
    activeIndex: C,
    rtlTranslate: T,
    wrapperEl: P,
    enabled: I,
  } = f;
  if ((f.animating && m.preventInteractionOnTransition) || (!I && !s && !l))
    return !1;
  const _ = Math.min(f.params.slidesPerGroupSkip, c);
  let M = _ + Math.floor((c - _) / f.params.slidesPerGroup);
  M >= v.length && (M = v.length - 1),
    (C || m.initialSlide || 0) === (A || 0) &&
      i &&
      f.emit('beforeSlideChangeStart');
  const N = -v[M];
  if ((f.updateProgress(N), m.normalizeSlideIndex))
    for (let K = 0; K < y.length; K += 1) {
      const Q = -Math.floor(N * 100),
        Ae = Math.floor(y[K] * 100),
        o = Math.floor(y[K + 1] * 100);
      typeof y[K + 1] != 'undefined'
        ? Q >= Ae && Q < o - (o - Ae) / 2
          ? (c = K)
          : Q >= Ae && Q < o && (c = K + 1)
        : Q >= Ae && (c = K);
    }
  if (
    f.initialized &&
    c !== C &&
    ((!f.allowSlideNext && N < f.translate && N < f.minTranslate()) ||
      (!f.allowSlidePrev &&
        N > f.translate &&
        N > f.maxTranslate() &&
        (C || 0) !== c))
  )
    return !1;
  let j;
  if (
    (c > C ? (j = 'next') : c < C ? (j = 'prev') : (j = 'reset'),
    (T && -N === f.translate) || (!T && N === f.translate))
  )
    return (
      f.updateActiveIndex(c),
      m.autoHeight && f.updateAutoHeight(),
      f.updateSlidesClasses(),
      m.effect !== 'slide' && f.setTranslate(N),
      j !== 'reset' && (f.transitionStart(i, j), f.transitionEnd(i, j)),
      !1
    );
  if (m.cssMode) {
    const K = f.isHorizontal(),
      Q = T ? N : -N;
    if (t === 0) {
      const Ae = f.virtual && f.params.virtual.enabled;
      Ae &&
        ((f.wrapperEl.style.scrollSnapType = 'none'),
        (f._immediateVirtual = !0)),
        (P[K ? 'scrollLeft' : 'scrollTop'] = Q),
        Ae &&
          requestAnimationFrame(() => {
            (f.wrapperEl.style.scrollSnapType = ''),
              (f._swiperImmediateVirtual = !1);
          });
    } else {
      if (!f.support.smoothScroll)
        return (
          os({ swiper: f, targetPosition: Q, side: K ? 'left' : 'top' }), !0
        );
      P.scrollTo({ [K ? 'left' : 'top']: Q, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    f.setTransition(t),
    f.setTranslate(N),
    f.updateActiveIndex(c),
    f.updateSlidesClasses(),
    f.emit('beforeTransitionStart', t, s),
    f.transitionStart(i, j),
    t === 0
      ? f.transitionEnd(i, j)
      : f.animating ||
        ((f.animating = !0),
        f.onSlideToWrapperTransitionEnd ||
          (f.onSlideToWrapperTransitionEnd = function (Q) {
            !f ||
              f.destroyed ||
              (Q.target === this &&
                (f.$wrapperEl[0].removeEventListener(
                  'transitionend',
                  f.onSlideToWrapperTransitionEnd
                ),
                f.$wrapperEl[0].removeEventListener(
                  'webkitTransitionEnd',
                  f.onSlideToWrapperTransitionEnd
                ),
                (f.onSlideToWrapperTransitionEnd = null),
                delete f.onSlideToWrapperTransitionEnd,
                f.transitionEnd(i, j)));
          }),
        f.$wrapperEl[0].addEventListener(
          'transitionend',
          f.onSlideToWrapperTransitionEnd
        ),
        f.$wrapperEl[0].addEventListener(
          'webkitTransitionEnd',
          f.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Fo(n, t, i, s) {
  if (
    (n === void 0 && (n = 0),
    t === void 0 && (t = this.params.speed),
    i === void 0 && (i = !0),
    typeof n == 'string')
  ) {
    const c = parseInt(n, 10);
    if (!isFinite(c))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${n}] given.`
      );
    n = c;
  }
  const l = this;
  let f = n;
  return l.params.loop && (f += l.loopedSlides), l.slideTo(f, t, i, s);
}
function Do(n, t, i) {
  n === void 0 && (n = this.params.speed), t === void 0 && (t = !0);
  const s = this,
    { animating: l, enabled: f, params: c } = s;
  if (!f) return s;
  let m = c.slidesPerGroup;
  c.slidesPerView === 'auto' &&
    c.slidesPerGroup === 1 &&
    c.slidesPerGroupAuto &&
    (m = Math.max(s.slidesPerViewDynamic('current', !0), 1));
  const v = s.activeIndex < c.slidesPerGroupSkip ? 1 : m;
  if (c.loop) {
    if (l && c.loopPreventsSlide) return !1;
    s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
  }
  return c.rewind && s.isEnd
    ? s.slideTo(0, n, t, i)
    : s.slideTo(s.activeIndex + v, n, t, i);
}
function Lo(n, t, i) {
  n === void 0 && (n = this.params.speed), t === void 0 && (t = !0);
  const s = this,
    {
      params: l,
      animating: f,
      snapGrid: c,
      slidesGrid: m,
      rtlTranslate: v,
      enabled: y,
    } = s;
  if (!y) return s;
  if (l.loop) {
    if (f && l.loopPreventsSlide) return !1;
    s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
  }
  const A = v ? s.translate : -s.translate;
  function C(M) {
    return M < 0 ? -Math.floor(Math.abs(M)) : Math.floor(M);
  }
  const T = C(A),
    P = c.map(M => C(M));
  let I = c[P.indexOf(T) - 1];
  if (typeof I == 'undefined' && l.cssMode) {
    let M;
    c.forEach((N, j) => {
      T >= N && (M = j);
    }),
      typeof M != 'undefined' && (I = c[M > 0 ? M - 1 : M]);
  }
  let _ = 0;
  if (
    (typeof I != 'undefined' &&
      ((_ = m.indexOf(I)),
      _ < 0 && (_ = s.activeIndex - 1),
      l.slidesPerView === 'auto' &&
        l.slidesPerGroup === 1 &&
        l.slidesPerGroupAuto &&
        ((_ = _ - s.slidesPerViewDynamic('previous', !0) + 1),
        (_ = Math.max(_, 0)))),
    l.rewind && s.isBeginning)
  ) {
    const M =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(M, n, t, i);
  }
  return s.slideTo(_, n, t, i);
}
function Oo(n, t, i) {
  n === void 0 && (n = this.params.speed), t === void 0 && (t = !0);
  const s = this;
  return s.slideTo(s.activeIndex, n, t, i);
}
function Io(n, t, i, s) {
  n === void 0 && (n = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = 0.5);
  const l = this;
  let f = l.activeIndex;
  const c = Math.min(l.params.slidesPerGroupSkip, f),
    m = c + Math.floor((f - c) / l.params.slidesPerGroup),
    v = l.rtlTranslate ? l.translate : -l.translate;
  if (v >= l.snapGrid[m]) {
    const y = l.snapGrid[m],
      A = l.snapGrid[m + 1];
    v - y > (A - y) * s && (f += l.params.slidesPerGroup);
  } else {
    const y = l.snapGrid[m - 1],
      A = l.snapGrid[m];
    v - y <= (A - y) * s && (f -= l.params.slidesPerGroup);
  }
  return (
    (f = Math.max(f, 0)),
    (f = Math.min(f, l.slidesGrid.length - 1)),
    l.slideTo(f, n, t, i)
  );
}
function Po() {
  const n = this,
    { params: t, $wrapperEl: i } = n,
    s = t.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : t.slidesPerView;
  let l = n.clickedIndex,
    f;
  if (t.loop) {
    if (n.animating) return;
    (f = parseInt(H(n.clickedSlide).attr('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? l < n.loopedSlides - s / 2 ||
          l > n.slides.length - n.loopedSlides + s / 2
          ? (n.loopFix(),
            (l = i
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${f}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Vn(() => {
              n.slideTo(l);
            }))
          : n.slideTo(l)
        : l > n.slides.length - s
        ? (n.loopFix(),
          (l = i
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${f}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          Vn(() => {
            n.slideTo(l);
          }))
        : n.slideTo(l);
  } else n.slideTo(l);
}
var No = {
  slideTo: xo,
  slideToLoop: Fo,
  slideNext: Do,
  slidePrev: Lo,
  slideReset: Oo,
  slideToClosest: Io,
  slideToClickedSlide: Po,
};
function Jo() {
  const n = this,
    t = Ne(),
    { params: i, $wrapperEl: s } = n,
    l = s.children().length > 0 ? H(s.children()[0].parentNode) : s;
  l.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
  let f = l.children(`.${i.slideClass}`);
  if (i.loopFillGroupWithBlank) {
    const v = i.slidesPerGroup - (f.length % i.slidesPerGroup);
    if (v !== i.slidesPerGroup) {
      for (let y = 0; y < v; y += 1) {
        const A = H(t.createElement('div')).addClass(
          `${i.slideClass} ${i.slideBlankClass}`
        );
        l.append(A);
      }
      f = l.children(`.${i.slideClass}`);
    }
  }
  i.slidesPerView === 'auto' && !i.loopedSlides && (i.loopedSlides = f.length),
    (n.loopedSlides = Math.ceil(
      parseFloat(i.loopedSlides || i.slidesPerView, 10)
    )),
    (n.loopedSlides += i.loopAdditionalSlides),
    n.loopedSlides > f.length && (n.loopedSlides = f.length);
  const c = [],
    m = [];
  f.each((v, y) => {
    const A = H(v);
    y < n.loopedSlides && m.push(v),
      y < f.length && y >= f.length - n.loopedSlides && c.push(v),
      A.attr('data-swiper-slide-index', y);
  });
  for (let v = 0; v < m.length; v += 1)
    l.append(H(m[v].cloneNode(!0)).addClass(i.slideDuplicateClass));
  for (let v = c.length - 1; v >= 0; v -= 1)
    l.prepend(H(c[v].cloneNode(!0)).addClass(i.slideDuplicateClass));
}
function Ro() {
  const n = this;
  n.emit('beforeLoopFix');
  const {
    activeIndex: t,
    slides: i,
    loopedSlides: s,
    allowSlidePrev: l,
    allowSlideNext: f,
    snapGrid: c,
    rtlTranslate: m,
  } = n;
  let v;
  (n.allowSlidePrev = !0), (n.allowSlideNext = !0);
  const A = -c[t] - n.getTranslate();
  t < s
    ? ((v = i.length - s * 3 + t),
      (v += s),
      n.slideTo(v, 0, !1, !0) &&
        A !== 0 &&
        n.setTranslate((m ? -n.translate : n.translate) - A))
    : t >= i.length - s &&
      ((v = -i.length + t + s),
      (v += s),
      n.slideTo(v, 0, !1, !0) &&
        A !== 0 &&
        n.setTranslate((m ? -n.translate : n.translate) - A)),
    (n.allowSlidePrev = l),
    (n.allowSlideNext = f),
    n.emit('loopFix');
}
function _o() {
  const n = this,
    { $wrapperEl: t, params: i, slides: s } = n;
  t
    .children(
      `.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`
    )
    .remove(),
    s.removeAttr('data-swiper-slide-index');
}
var Uo = { loopCreate: Jo, loopFix: Ro, loopDestroy: _o };
function qo(n) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const i = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
  (i.style.cursor = 'move'), (i.style.cursor = n ? 'grabbing' : 'grab');
}
function Mo() {
  const n = this;
  n.support.touch ||
    (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n[
      n.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = '');
}
var Vo = { setGrabCursor: qo, unsetGrabCursor: Mo };
function jo(n, t) {
  t === void 0 && (t = this);
  function i(s) {
    if (!s || s === Ne() || s === De()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const l = s.closest(n);
    return !l && !s.getRootNode ? null : l || i(s.getRootNode().host);
  }
  return i(t);
}
function Wo(n) {
  const t = this,
    i = Ne(),
    s = De(),
    l = t.touchEventsData,
    { params: f, touches: c, enabled: m } = t;
  if (!m || (t.animating && f.preventInteractionOnTransition)) return;
  !t.animating && f.cssMode && f.loop && t.loopFix();
  let v = n;
  v.originalEvent && (v = v.originalEvent);
  let y = H(v.target);
  if (
    (f.touchEventsTarget === 'wrapper' && !y.closest(t.wrapperEl).length) ||
    ((l.isTouchEvent = v.type === 'touchstart'),
    !l.isTouchEvent && 'which' in v && v.which === 3) ||
    (!l.isTouchEvent && 'button' in v && v.button > 0) ||
    (l.isTouched && l.isMoved)
  )
    return;
  !!f.noSwipingClass &&
    f.noSwipingClass !== '' &&
    v.target &&
    v.target.shadowRoot &&
    n.path &&
    n.path[0] &&
    (y = H(n.path[0]));
  const C = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
    T = !!(v.target && v.target.shadowRoot);
  if (f.noSwiping && (T ? jo(C, y[0]) : y.closest(C)[0])) {
    t.allowClick = !0;
    return;
  }
  if (f.swipeHandler && !y.closest(f.swipeHandler)[0]) return;
  (c.currentX = v.type === 'touchstart' ? v.targetTouches[0].pageX : v.pageX),
    (c.currentY = v.type === 'touchstart' ? v.targetTouches[0].pageY : v.pageY);
  const P = c.currentX,
    I = c.currentY,
    _ = f.edgeSwipeDetection || f.iOSEdgeSwipeDetection,
    M = f.edgeSwipeThreshold || f.iOSEdgeSwipeThreshold;
  if (_ && (P <= M || P >= s.innerWidth - M))
    if (_ === 'prevent') n.preventDefault();
    else return;
  if (
    (Object.assign(l, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (c.startX = P),
    (c.startY = I),
    (l.touchStartTime = An()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    f.threshold > 0 && (l.allowThresholdMove = !1),
    v.type !== 'touchstart')
  ) {
    let N = !0;
    y.is(l.focusableElements) &&
      ((N = !1), y[0].nodeName === 'SELECT' && (l.isTouched = !1)),
      i.activeElement &&
        H(i.activeElement).is(l.focusableElements) &&
        i.activeElement !== y[0] &&
        i.activeElement.blur();
    const j = N && t.allowTouchMove && f.touchStartPreventDefault;
    (f.touchStartForcePreventDefault || j) &&
      !y[0].isContentEditable &&
      v.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !f.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit('touchStart', v);
}
function Ko(n) {
  const t = Ne(),
    i = this,
    s = i.touchEventsData,
    { params: l, touches: f, rtlTranslate: c, enabled: m } = i;
  if (!m) return;
  let v = n;
  if ((v.originalEvent && (v = v.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && i.emit('touchMoveOpposite', v);
    return;
  }
  if (s.isTouchEvent && v.type !== 'touchmove') return;
  const y =
      v.type === 'touchmove' &&
      v.targetTouches &&
      (v.targetTouches[0] || v.changedTouches[0]),
    A = v.type === 'touchmove' ? y.pageX : v.pageX,
    C = v.type === 'touchmove' ? y.pageY : v.pageY;
  if (v.preventedByNestedSwiper) {
    (f.startX = A), (f.startY = C);
    return;
  }
  if (!i.allowTouchMove) {
    H(v.target).is(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(f, { startX: A, startY: C, currentX: A, currentY: C }),
        (s.touchStartTime = An()));
    return;
  }
  if (s.isTouchEvent && l.touchReleaseOnEdges && !l.loop) {
    if (i.isVertical()) {
      if (
        (C < f.startY && i.translate <= i.maxTranslate()) ||
        (C > f.startY && i.translate >= i.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (A < f.startX && i.translate <= i.maxTranslate()) ||
      (A > f.startX && i.translate >= i.minTranslate())
    )
      return;
  }
  if (
    s.isTouchEvent &&
    t.activeElement &&
    v.target === t.activeElement &&
    H(v.target).is(s.focusableElements)
  ) {
    (s.isMoved = !0), (i.allowClick = !1);
    return;
  }
  if (
    (s.allowTouchCallbacks && i.emit('touchMove', v),
    v.targetTouches && v.targetTouches.length > 1)
  )
    return;
  (f.currentX = A), (f.currentY = C);
  const T = f.currentX - f.startX,
    P = f.currentY - f.startY;
  if (i.params.threshold && Math.sqrt(T ** 2 + P ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling == 'undefined') {
    let N;
    (i.isHorizontal() && f.currentY === f.startY) ||
    (i.isVertical() && f.currentX === f.startX)
      ? (s.isScrolling = !1)
      : T * T + P * P >= 25 &&
        ((N = (Math.atan2(Math.abs(P), Math.abs(T)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal()
          ? N > l.touchAngle
          : 90 - N > l.touchAngle));
  }
  if (
    (s.isScrolling && i.emit('touchMoveOpposite', v),
    typeof s.startMoving == 'undefined' &&
      (f.currentX !== f.startX || f.currentY !== f.startY) &&
      (s.startMoving = !0),
    s.isScrolling)
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (i.allowClick = !1),
    !l.cssMode && v.cancelable && v.preventDefault(),
    l.touchMoveStopPropagation && !l.nested && v.stopPropagation(),
    s.isMoved ||
      (l.loop && !l.cssMode && i.loopFix(),
      (s.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating && i.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
      (s.allowMomentumBounce = !1),
      l.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit('sliderFirstMove', v)),
    i.emit('sliderMove', v),
    (s.isMoved = !0);
  let I = i.isHorizontal() ? T : P;
  (f.diff = I),
    (I *= l.touchRatio),
    c && (I = -I),
    (i.swipeDirection = I > 0 ? 'prev' : 'next'),
    (s.currentTranslate = I + s.startTranslate);
  let _ = !0,
    M = l.resistanceRatio;
  if (
    (l.touchReleaseOnEdges && (M = 0),
    I > 0 && s.currentTranslate > i.minTranslate()
      ? ((_ = !1),
        l.resistance &&
          (s.currentTranslate =
            i.minTranslate() -
            1 +
            (-i.minTranslate() + s.startTranslate + I) ** M))
      : I < 0 &&
        s.currentTranslate < i.maxTranslate() &&
        ((_ = !1),
        l.resistance &&
          (s.currentTranslate =
            i.maxTranslate() +
            1 -
            (i.maxTranslate() - s.startTranslate - I) ** M)),
    _ && (v.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === 'next' &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === 'prev' &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    l.threshold > 0)
  )
    if (Math.abs(I) > l.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (f.startX = f.currentX),
          (f.startY = f.currentY),
          (s.currentTranslate = s.startTranslate),
          (f.diff = i.isHorizontal()
            ? f.currentX - f.startX
            : f.currentY - f.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !l.followFinger ||
    l.cssMode ||
    (((l.freeMode && l.freeMode.enabled && i.freeMode) ||
      l.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    i.params.freeMode &&
      l.freeMode.enabled &&
      i.freeMode &&
      i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate));
}
function Ho(n) {
  const t = this,
    i = t.touchEventsData,
    { params: s, touches: l, rtlTranslate: f, slidesGrid: c, enabled: m } = t;
  if (!m) return;
  let v = n;
  if (
    (v.originalEvent && (v = v.originalEvent),
    i.allowTouchCallbacks && t.emit('touchEnd', v),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  s.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const y = An(),
    A = y - i.touchStartTime;
  if (t.allowClick) {
    const j = v.path || (v.composedPath && v.composedPath());
    t.updateClickedSlide((j && j[0]) || v.target),
      t.emit('tap click', v),
      A < 300 &&
        y - i.lastClickTime < 300 &&
        t.emit('doubleTap doubleClick', v);
  }
  if (
    ((i.lastClickTime = An()),
    Vn(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !t.swipeDirection ||
      l.diff === 0 ||
      i.currentTranslate === i.startTranslate)
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let C;
  if (
    (s.followFinger
      ? (C = f ? t.translate : -t.translate)
      : (C = -i.currentTranslate),
    s.cssMode)
  )
    return;
  if (t.params.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: C });
    return;
  }
  let T = 0,
    P = t.slidesSizesGrid[0];
  for (
    let j = 0;
    j < c.length;
    j += j < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const K = j < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof c[j + K] != 'undefined'
      ? C >= c[j] && C < c[j + K] && ((T = j), (P = c[j + K] - c[j]))
      : C >= c[j] && ((T = j), (P = c[c.length - 1] - c[c.length - 2]));
  }
  let I = null,
    _ = null;
  s.rewind &&
    (t.isBeginning
      ? (_ =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (I = 0));
  const M = (C - c[T]) / P,
    N = T < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (A > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === 'next' &&
      (M >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? I : T + N)
        : t.slideTo(T)),
      t.swipeDirection === 'prev' &&
        (M > 1 - s.longSwipesRatio
          ? t.slideTo(T + N)
          : _ !== null && M < 0 && Math.abs(M) > s.longSwipesRatio
          ? t.slideTo(_)
          : t.slideTo(T));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (v.target === t.navigation.nextEl || v.target === t.navigation.prevEl)
      ? v.target === t.navigation.nextEl
        ? t.slideTo(T + N)
        : t.slideTo(T)
      : (t.swipeDirection === 'next' && t.slideTo(I !== null ? I : T + N),
        t.swipeDirection === 'prev' && t.slideTo(_ !== null ? _ : T));
  }
}
function Jr() {
  const n = this,
    { params: t, el: i } = n;
  if (i && i.offsetWidth === 0) return;
  t.breakpoints && n.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: l, snapGrid: f } = n;
  (n.allowSlideNext = !0),
    (n.allowSlidePrev = !0),
    n.updateSize(),
    n.updateSlides(),
    n.updateSlidesClasses(),
    (t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(),
    (n.allowSlidePrev = l),
    (n.allowSlideNext = s),
    n.params.watchOverflow && f !== n.snapGrid && n.checkOverflow();
}
function Qo(n) {
  const t = this;
  !t.enabled ||
    t.allowClick ||
    (t.params.preventClicks && n.preventDefault(),
    t.params.preventClicksPropagation &&
      t.animating &&
      (n.stopPropagation(), n.stopImmediatePropagation()));
}
function zo() {
  const n = this,
    { wrapperEl: t, rtlTranslate: i, enabled: s } = n;
  if (!s) return;
  (n.previousTranslate = n.translate),
    n.isHorizontal()
      ? (n.translate = -t.scrollLeft)
      : (n.translate = -t.scrollTop),
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
  let l;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (l = 0) : (l = (n.translate - n.minTranslate()) / f),
    l !== n.progress && n.updateProgress(i ? -n.translate : n.translate),
    n.emit('setTranslate', n.translate, !1);
}
let Rr = !1;
function Go() {}
const ds = (n, t) => {
  const i = Ne(),
    {
      params: s,
      touchEvents: l,
      el: f,
      wrapperEl: c,
      device: m,
      support: v,
    } = n,
    y = !!s.nested,
    A = t === 'on' ? 'addEventListener' : 'removeEventListener',
    C = t;
  if (!v.touch)
    f[A](l.start, n.onTouchStart, !1),
      i[A](l.move, n.onTouchMove, y),
      i[A](l.end, n.onTouchEnd, !1);
  else {
    const T =
      l.start === 'touchstart' && v.passiveListener && s.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    f[A](l.start, n.onTouchStart, T),
      f[A](
        l.move,
        n.onTouchMove,
        v.passiveListener ? { passive: !1, capture: y } : y
      ),
      f[A](l.end, n.onTouchEnd, T),
      l.cancel && f[A](l.cancel, n.onTouchEnd, T);
  }
  (s.preventClicks || s.preventClicksPropagation) &&
    f[A]('click', n.onClick, !0),
    s.cssMode && c[A]('scroll', n.onScroll),
    s.updateOnWindowResize
      ? n[C](
          m.ios || m.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          Jr,
          !0
        )
      : n[C]('observerUpdate', Jr, !0);
};
function Xo() {
  const n = this,
    t = Ne(),
    { params: i, support: s } = n;
  (n.onTouchStart = Wo.bind(n)),
    (n.onTouchMove = Ko.bind(n)),
    (n.onTouchEnd = Ho.bind(n)),
    i.cssMode && (n.onScroll = zo.bind(n)),
    (n.onClick = Qo.bind(n)),
    s.touch && !Rr && (t.addEventListener('touchstart', Go), (Rr = !0)),
    ds(n, 'on');
}
function Zo() {
  ds(this, 'off');
}
var Yo = { attachEvents: Xo, detachEvents: Zo };
const _r = (n, t) => n.grid && t.grid && t.grid.rows > 1;
function $o() {
  const n = this,
    {
      activeIndex: t,
      initialized: i,
      loopedSlides: s = 0,
      params: l,
      $el: f,
    } = n,
    c = l.breakpoints;
  if (!c || (c && Object.keys(c).length === 0)) return;
  const m = n.getBreakpoint(c, n.params.breakpointsBase, n.el);
  if (!m || n.currentBreakpoint === m) return;
  const y = (m in c ? c[m] : void 0) || n.originalParams,
    A = _r(n, l),
    C = _r(n, y),
    T = l.enabled;
  A && !C
    ? (f.removeClass(
        `${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`
      ),
      n.emitContainerClasses())
    : !A &&
      C &&
      (f.addClass(`${l.containerModifierClass}grid`),
      ((y.grid.fill && y.grid.fill === 'column') ||
        (!y.grid.fill && l.grid.fill === 'column')) &&
        f.addClass(`${l.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach(M => {
      const N = l[M] && l[M].enabled,
        j = y[M] && y[M].enabled;
      N && !j && n[M].disable(), !N && j && n[M].enable();
    });
  const P = y.direction && y.direction !== l.direction,
    I = l.loop && (y.slidesPerView !== l.slidesPerView || P);
  P && i && n.changeDirection(), Ge(n.params, y);
  const _ = n.params.enabled;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    T && !_ ? n.disable() : !T && _ && n.enable(),
    (n.currentBreakpoint = m),
    n.emit('_beforeBreakpoint', y),
    I &&
      i &&
      (n.loopDestroy(),
      n.loopCreate(),
      n.updateSlides(),
      n.slideTo(t - s + n.loopedSlides, 0, !1)),
    n.emit('breakpoint', y);
}
function el(n, t, i) {
  if ((t === void 0 && (t = 'window'), !n || (t === 'container' && !i))) return;
  let s = !1;
  const l = De(),
    f = t === 'window' ? l.innerHeight : i.clientHeight,
    c = Object.keys(n).map(m => {
      if (typeof m == 'string' && m.indexOf('@') === 0) {
        const v = parseFloat(m.substr(1));
        return { value: f * v, point: m };
      }
      return { value: m, point: m };
    });
  c.sort((m, v) => parseInt(m.value, 10) - parseInt(v.value, 10));
  for (let m = 0; m < c.length; m += 1) {
    const { point: v, value: y } = c[m];
    t === 'window'
      ? l.matchMedia(`(min-width: ${y}px)`).matches && (s = v)
      : y <= i.clientWidth && (s = v);
  }
  return s || 'max';
}
var tl = { setBreakpoint: $o, getBreakpoint: el };
function nl(n, t) {
  const i = [];
  return (
    n.forEach(s => {
      typeof s == 'object'
        ? Object.keys(s).forEach(l => {
            s[l] && i.push(t + l);
          })
        : typeof s == 'string' && i.push(t + s);
    }),
    i
  );
}
function il() {
  const n = this,
    { classNames: t, params: i, rtl: s, $el: l, device: f, support: c } = n,
    m = nl(
      [
        'initialized',
        i.direction,
        { 'pointer-events': !c.touch },
        { 'free-mode': n.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        {
          'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column',
        },
        { android: f.android },
        { ios: f.ios },
        { 'css-mode': i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { 'watch-progress': i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  t.push(...m), l.addClass([...t].join(' ')), n.emitContainerClasses();
}
function rl() {
  const n = this,
    { $el: t, classNames: i } = n;
  t.removeClass(i.join(' ')), n.emitContainerClasses();
}
var sl = { addClasses: il, removeClasses: rl };
function ul(n, t, i, s, l, f) {
  const c = De();
  let m;
  function v() {
    f && f();
  }
  !H(n).parent('picture')[0] && (!n.complete || !l) && t
    ? ((m = new c.Image()),
      (m.onload = v),
      (m.onerror = v),
      s && (m.sizes = s),
      i && (m.srcset = i),
      t && (m.src = t))
    : v();
}
function al() {
  const n = this;
  n.imagesToLoad = n.$el.find('img');
  function t() {
    typeof n == 'undefined' ||
      n === null ||
      !n ||
      n.destroyed ||
      (n.imagesLoaded !== void 0 && (n.imagesLoaded += 1),
      n.imagesLoaded === n.imagesToLoad.length &&
        (n.params.updateOnImagesReady && n.update(), n.emit('imagesReady')));
  }
  for (let i = 0; i < n.imagesToLoad.length; i += 1) {
    const s = n.imagesToLoad[i];
    n.loadImage(
      s,
      s.currentSrc || s.getAttribute('src'),
      s.srcset || s.getAttribute('srcset'),
      s.sizes || s.getAttribute('sizes'),
      !0,
      t
    );
  }
}
var ol = { loadImage: ul, preloadImages: al };
function ll() {
  const n = this,
    { isLocked: t, params: i } = n,
    { slidesOffsetBefore: s } = i;
  if (s) {
    const l = n.slides.length - 1,
      f = n.slidesGrid[l] + n.slidesSizesGrid[l] + s * 2;
    n.isLocked = n.size > f;
  } else n.isLocked = n.snapGrid.length === 1;
  i.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    i.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    t && t !== n.isLocked && (n.isEnd = !1),
    t !== n.isLocked && n.emit(n.isLocked ? 'lock' : 'unlock');
}
var fl = { checkOverflow: ll },
  Ur = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function dl(n, t) {
  return function (s) {
    s === void 0 && (s = {});
    const l = Object.keys(s)[0],
      f = s[l];
    if (typeof f != 'object' || f === null) {
      Ge(t, s);
      return;
    }
    if (
      (['navigation', 'pagination', 'scrollbar'].indexOf(l) >= 0 &&
        n[l] === !0 &&
        (n[l] = { auto: !0 }),
      !(l in n && 'enabled' in f))
    ) {
      Ge(t, s);
      return;
    }
    n[l] === !0 && (n[l] = { enabled: !0 }),
      typeof n[l] == 'object' && !('enabled' in n[l]) && (n[l].enabled = !0),
      n[l] || (n[l] = { enabled: !1 }),
      Ge(t, s);
  };
}
const wi = {
    eventsEmitter: uo,
    update: mo,
    translate: Eo,
    transition: To,
    slide: No,
    loop: Uo,
    grabCursor: Vo,
    events: Yo,
    breakpoints: tl,
    checkOverflow: fl,
    classes: sl,
    images: ol,
  },
  Si = {};
class Je {
  constructor() {
    let t, i;
    for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
      l[f] = arguments[f];
    if (
      (l.length === 1 &&
      l[0].constructor &&
      Object.prototype.toString.call(l[0]).slice(8, -1) === 'Object'
        ? (i = l[0])
        : ([t, i] = l),
      i || (i = {}),
      (i = Ge({}, i)),
      t && !i.el && (i.el = t),
      i.el && H(i.el).length > 1)
    ) {
      const y = [];
      return (
        H(i.el).each(A => {
          const C = Ge({}, i, { el: A });
          y.push(new Je(C));
        }),
        y
      );
    }
    const c = this;
    (c.__swiper__ = !0),
      (c.support = ls()),
      (c.device = to({ userAgent: i.userAgent })),
      (c.browser = io()),
      (c.eventsListeners = {}),
      (c.eventsAnyListeners = []),
      (c.modules = [...c.__modules__]),
      i.modules && Array.isArray(i.modules) && c.modules.push(...i.modules);
    const m = {};
    c.modules.forEach(y => {
      y({
        swiper: c,
        extendParams: dl(i, m),
        on: c.on.bind(c),
        once: c.once.bind(c),
        off: c.off.bind(c),
        emit: c.emit.bind(c),
      });
    });
    const v = Ge({}, Ur, m);
    return (
      (c.params = Ge({}, v, Si, i)),
      (c.originalParams = Ge({}, c.params)),
      (c.passedParams = Ge({}, i)),
      c.params &&
        c.params.on &&
        Object.keys(c.params.on).forEach(y => {
          c.on(y, c.params.on[y]);
        }),
      c.params && c.params.onAny && c.onAny(c.params.onAny),
      (c.$ = H),
      Object.assign(c, {
        enabled: c.params.enabled,
        el: t,
        classNames: [],
        slides: H(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return c.params.direction === 'horizontal';
        },
        isVertical() {
          return c.params.direction === 'vertical';
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: c.params.allowSlideNext,
        allowSlidePrev: c.params.allowSlidePrev,
        touchEvents: (function () {
          const A = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
            C = ['pointerdown', 'pointermove', 'pointerup'];
          return (
            (c.touchEventsTouch = {
              start: A[0],
              move: A[1],
              end: A[2],
              cancel: A[3],
            }),
            (c.touchEventsDesktop = { start: C[0], move: C[1], end: C[2] }),
            c.support.touch || !c.params.simulateTouch
              ? c.touchEventsTouch
              : c.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: c.params.focusableElements,
          lastClickTime: An(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: c.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      c.emit('_swiper'),
      c.params.init && c.init(),
      c
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit('enable'));
  }
  disable() {
    const t = this;
    !t.enabled ||
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit('disable'));
  }
  setProgress(t, i) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const l = s.minTranslate(),
      c = (s.maxTranslate() - l) * t + l;
    s.translateTo(c, typeof i == 'undefined' ? 0 : i),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = t.el.className
      .split(' ')
      .filter(
        s =>
          s.indexOf('swiper') === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit('_containerClasses', i.join(' '));
  }
  getSlideClasses(t) {
    const i = this;
    return i.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter(
            s =>
              s.indexOf('swiper-slide') === 0 ||
              s.indexOf(i.params.slideClass) === 0
          )
          .join(' ');
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = [];
    t.slides.each(s => {
      const l = t.getSlideClasses(s);
      i.push({ slideEl: s, classNames: l }), t.emit('_slideClass', s, l);
    }),
      t.emit('_slideClasses', i);
  }
  slidesPerViewDynamic(t, i) {
    t === void 0 && (t = 'current'), i === void 0 && (i = !1);
    const s = this,
      {
        params: l,
        slides: f,
        slidesGrid: c,
        slidesSizesGrid: m,
        size: v,
        activeIndex: y,
      } = s;
    let A = 1;
    if (l.centeredSlides) {
      let C = f[y].swiperSlideSize,
        T;
      for (let P = y + 1; P < f.length; P += 1)
        f[P] &&
          !T &&
          ((C += f[P].swiperSlideSize), (A += 1), C > v && (T = !0));
      for (let P = y - 1; P >= 0; P -= 1)
        f[P] &&
          !T &&
          ((C += f[P].swiperSlideSize), (A += 1), C > v && (T = !0));
    } else if (t === 'current')
      for (let C = y + 1; C < f.length; C += 1)
        (i ? c[C] + m[C] - c[y] < v : c[C] - c[y] < v) && (A += 1);
    else for (let C = y - 1; C >= 0; C -= 1) c[y] - c[C] < v && (A += 1);
    return A;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: i, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function l() {
      const c = t.rtlTranslate ? t.translate * -1 : t.translate,
        m = Math.min(Math.max(c, t.maxTranslate()), t.minTranslate());
      t.setTranslate(m), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let f;
    t.params.freeMode && t.params.freeMode.enabled
      ? (l(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === 'auto' || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (f = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (f = t.slideTo(t.activeIndex, 0, !1, !0)),
        f || l()),
      s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
      t.emit('update');
  }
  changeDirection(t, i) {
    i === void 0 && (i = !0);
    const s = this,
      l = s.params.direction;
    return (
      t || (t = l === 'horizontal' ? 'vertical' : 'horizontal'),
      t === l ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (s.$el
          .removeClass(`${s.params.containerModifierClass}${l}`)
          .addClass(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.each(f => {
          t === 'vertical' ? (f.style.width = '') : (f.style.height = '');
        }),
        s.emit('changeDirection'),
        i && s.update()),
      s
    );
  }
  mount(t) {
    const i = this;
    if (i.mounted) return !0;
    const s = H(t || i.params.el);
    if (((t = s[0]), !t)) return !1;
    t.swiper = i;
    const l = () =>
      `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let c = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const m = H(t.shadowRoot.querySelector(l()));
        return (m.children = v => s.children(v)), m;
      }
      return s.children ? s.children(l()) : H(s).children(l());
    })();
    if (c.length === 0 && i.params.createElements) {
      const v = Ne().createElement('div');
      (c = H(v)),
        (v.className = i.params.wrapperClass),
        s.append(v),
        s.children(`.${i.params.slideClass}`).each(y => {
          c.append(y);
        });
    }
    return (
      Object.assign(i, {
        $el: s,
        el: t,
        $wrapperEl: c,
        wrapperEl: c[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === 'rtl' || s.css('direction') === 'rtl',
        rtlTranslate:
          i.params.direction === 'horizontal' &&
          (t.dir.toLowerCase() === 'rtl' || s.css('direction') === 'rtl'),
        wrongRTL: c.css('display') === '-webkit-box',
      }),
      !0
    );
  }
  init(t) {
    const i = this;
    return (
      i.initialized ||
        i.mount(t) === !1 ||
        (i.emit('beforeInit'),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.params.loop && i.loopCreate(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.preloadImages && i.preloadImages(),
        i.params.loop
          ? i.slideTo(
              i.params.initialSlide + i.loopedSlides,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            )
          : i.slideTo(
              i.params.initialSlide,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            ),
        i.attachEvents(),
        (i.initialized = !0),
        i.emit('init'),
        i.emit('afterInit')),
      i
    );
  }
  destroy(t, i) {
    t === void 0 && (t = !0), i === void 0 && (i = !0);
    const s = this,
      { params: l, $el: f, $wrapperEl: c, slides: m } = s;
    return (
      typeof s.params == 'undefined' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        l.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          f.removeAttr('style'),
          c.removeAttr('style'),
          m &&
            m.length &&
            m
              .removeClass(
                [
                  l.slideVisibleClass,
                  l.slideActiveClass,
                  l.slideNextClass,
                  l.slidePrevClass,
                ].join(' ')
              )
              .removeAttr('style')
              .removeAttr('data-swiper-slide-index')),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach(v => {
          s.off(v);
        }),
        t !== !1 && ((s.$el[0].swiper = null), Ga(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ge(Si, t);
  }
  static get extendedDefaults() {
    return Si;
  }
  static get defaults() {
    return Ur;
  }
  static installModule(t) {
    Je.prototype.__modules__ || (Je.prototype.__modules__ = []);
    const i = Je.prototype.__modules__;
    typeof t == 'function' && i.indexOf(t) < 0 && i.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach(i => Je.installModule(i)), Je)
      : (Je.installModule(t), Je);
  }
}
Object.keys(wi).forEach(n => {
  Object.keys(wi[n]).forEach(t => {
    Je.prototype[t] = wi[n][t];
  });
});
Je.use([ro, so]);
function cl(n) {
  let { swiper: t, extendParams: i, on: s, emit: l } = n,
    f;
  (t.autoplay = { running: !1, paused: !1 }),
    i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  function c() {
    const M = t.slides.eq(t.activeIndex);
    let N = t.params.autoplay.delay;
    M.attr('data-swiper-autoplay') &&
      (N = M.attr('data-swiper-autoplay') || t.params.autoplay.delay),
      clearTimeout(f),
      (f = Vn(() => {
        let j;
        t.params.autoplay.reverseDirection
          ? t.params.loop
            ? (t.loopFix(),
              (j = t.slidePrev(t.params.speed, !0, !0)),
              l('autoplay'))
            : t.isBeginning
            ? t.params.autoplay.stopOnLastSlide
              ? v()
              : ((j = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)),
                l('autoplay'))
            : ((j = t.slidePrev(t.params.speed, !0, !0)), l('autoplay'))
          : t.params.loop
          ? (t.loopFix(),
            (j = t.slideNext(t.params.speed, !0, !0)),
            l('autoplay'))
          : t.isEnd
          ? t.params.autoplay.stopOnLastSlide
            ? v()
            : ((j = t.slideTo(0, t.params.speed, !0, !0)), l('autoplay'))
          : ((j = t.slideNext(t.params.speed, !0, !0)), l('autoplay')),
          ((t.params.cssMode && t.autoplay.running) || j === !1) && c();
      }, N));
  }
  function m() {
    return typeof f != 'undefined' || t.autoplay.running
      ? !1
      : ((t.autoplay.running = !0), l('autoplayStart'), c(), !0);
  }
  function v() {
    return !t.autoplay.running || typeof f == 'undefined'
      ? !1
      : (f && (clearTimeout(f), (f = void 0)),
        (t.autoplay.running = !1),
        l('autoplayStop'),
        !0);
  }
  function y(M) {
    !t.autoplay.running ||
      t.autoplay.paused ||
      (f && clearTimeout(f),
      (t.autoplay.paused = !0),
      M === 0 || !t.params.autoplay.waitForTransition
        ? ((t.autoplay.paused = !1), c())
        : ['transitionend', 'webkitTransitionEnd'].forEach(N => {
            t.$wrapperEl[0].addEventListener(N, C);
          }));
  }
  function A() {
    const M = Ne();
    M.visibilityState === 'hidden' && t.autoplay.running && y(),
      M.visibilityState === 'visible' &&
        t.autoplay.paused &&
        (c(), (t.autoplay.paused = !1));
  }
  function C(M) {
    !t ||
      t.destroyed ||
      !t.$wrapperEl ||
      (M.target === t.$wrapperEl[0] &&
        (['transitionend', 'webkitTransitionEnd'].forEach(N => {
          t.$wrapperEl[0].removeEventListener(N, C);
        }),
        (t.autoplay.paused = !1),
        t.autoplay.running ? c() : v()));
  }
  function T() {
    t.params.autoplay.disableOnInteraction ? v() : (l('autoplayPause'), y()),
      ['transitionend', 'webkitTransitionEnd'].forEach(M => {
        t.$wrapperEl[0].removeEventListener(M, C);
      });
  }
  function P() {
    t.params.autoplay.disableOnInteraction ||
      ((t.autoplay.paused = !1), l('autoplayResume'), c());
  }
  function I() {
    t.params.autoplay.pauseOnMouseEnter &&
      (t.$el.on('mouseenter', T), t.$el.on('mouseleave', P));
  }
  function _() {
    t.$el.off('mouseenter', T), t.$el.off('mouseleave', P);
  }
  s('init', () => {
    t.params.autoplay.enabled &&
      (m(), Ne().addEventListener('visibilitychange', A), I());
  }),
    s('beforeTransitionStart', (M, N, j) => {
      t.autoplay.running &&
        (j || !t.params.autoplay.disableOnInteraction
          ? t.autoplay.pause(N)
          : v());
    }),
    s('sliderFirstMove', () => {
      t.autoplay.running &&
        (t.params.autoplay.disableOnInteraction ? v() : y());
    }),
    s('touchEnd', () => {
      t.params.cssMode &&
        t.autoplay.paused &&
        !t.params.autoplay.disableOnInteraction &&
        c();
    }),
    s('destroy', () => {
      _(),
        t.autoplay.running && v(),
        Ne().removeEventListener('visibilitychange', A);
    }),
    Object.assign(t.autoplay, { pause: y, run: c, start: m, stop: v });
}
function pl(n) {
  const {
    effect: t,
    swiper: i,
    on: s,
    setTranslate: l,
    setTransition: f,
    overwriteParams: c,
    perspective: m,
    recreateShadows: v,
    getEffectParams: y,
  } = n;
  s('beforeInit', () => {
    if (i.params.effect !== t) return;
    i.classNames.push(`${i.params.containerModifierClass}${t}`),
      m && m() && i.classNames.push(`${i.params.containerModifierClass}3d`);
    const C = c ? c() : {};
    Object.assign(i.params, C), Object.assign(i.originalParams, C);
  }),
    s('setTranslate', () => {
      i.params.effect === t && l();
    }),
    s('setTransition', (C, T) => {
      i.params.effect === t && f(T);
    }),
    s('transitionEnd', () => {
      if (i.params.effect === t && v) {
        if (!y || !y().slideShadows) return;
        i.slides.each(C => {
          i.$(C)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .remove();
        }),
          v();
      }
    });
  let A;
  s('virtualUpdate', () => {
    i.params.effect === t &&
      (i.slides.length || (A = !0),
      requestAnimationFrame(() => {
        A && i.slides && i.slides.length && (l(), (A = !1));
      }));
  });
}
function hl(n, t) {
  return n.transformEl
    ? t.find(n.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden',
      })
    : t;
}
function qr(n, t, i) {
  const s = `swiper-slide-shadow${i ? `-${i}` : ''}`,
    l = n.transformEl ? t.find(n.transformEl) : t;
  let f = l.children(`.${s}`);
  return (
    f.length ||
      ((f = H(`<div class="swiper-slide-shadow${i ? `-${i}` : ''}"></div>`)),
      l.append(f)),
    f
  );
}
function Mr(n) {
  let { swiper: t, extendParams: i, on: s } = n;
  i({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
      transformEl: null,
    },
  }),
    pl({
      effect: 'coverflow',
      swiper: t,
      on: s,
      setTranslate: () => {
        const { width: c, height: m, slides: v, slidesSizesGrid: y } = t,
          A = t.params.coverflowEffect,
          C = t.isHorizontal(),
          T = t.translate,
          P = C ? -T + c / 2 : -T + m / 2,
          I = C ? A.rotate : -A.rotate,
          _ = A.depth;
        for (let M = 0, N = v.length; M < N; M += 1) {
          const j = v.eq(M),
            K = y[M],
            Q = j[0].swiperSlideOffset,
            Ae = (P - Q - K / 2) / K,
            o =
              typeof A.modifier == 'function'
                ? A.modifier(Ae)
                : Ae * A.modifier;
          let ge = C ? I * o : 0,
            ee = C ? 0 : I * o,
            be = -_ * Math.abs(o),
            Z = A.stretch;
          typeof Z == 'string' &&
            Z.indexOf('%') !== -1 &&
            (Z = (parseFloat(A.stretch) / 100) * K);
          let de = C ? 0 : Z * o,
            ue = C ? Z * o : 0,
            Le = 1 - (1 - A.scale) * Math.abs(o);
          Math.abs(ue) < 0.001 && (ue = 0),
            Math.abs(de) < 0.001 && (de = 0),
            Math.abs(be) < 0.001 && (be = 0),
            Math.abs(ge) < 0.001 && (ge = 0),
            Math.abs(ee) < 0.001 && (ee = 0),
            Math.abs(Le) < 0.001 && (Le = 0);
          const et = `translate3d(${ue}px,${de}px,${be}px)  rotateX(${ee}deg) rotateY(${ge}deg) scale(${Le})`;
          if (
            (hl(A, j).transform(et),
            (j[0].style.zIndex = -Math.abs(Math.round(o)) + 1),
            A.slideShadows)
          ) {
            let at = C
                ? j.find('.swiper-slide-shadow-left')
                : j.find('.swiper-slide-shadow-top'),
              tt = C
                ? j.find('.swiper-slide-shadow-right')
                : j.find('.swiper-slide-shadow-bottom');
            at.length === 0 && (at = qr(A, j, C ? 'left' : 'top')),
              tt.length === 0 && (tt = qr(A, j, C ? 'right' : 'bottom')),
              at.length && (at[0].style.opacity = o > 0 ? o : 0),
              tt.length && (tt[0].style.opacity = -o > 0 ? -o : 0);
          }
        }
      },
      setTransition: c => {
        const { transformEl: m } = t.params.coverflowEffect;
        (m ? t.slides.find(m) : t.slides)
          .transition(c)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(c);
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
function _t(n) {
  return (
    typeof n == 'object' &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === 'Object'
  );
}
function Tt(n, t) {
  const i = ['__proto__', 'constructor', 'prototype'];
  Object.keys(t)
    .filter(s => i.indexOf(s) < 0)
    .forEach(s => {
      typeof n[s] == 'undefined'
        ? (n[s] = t[s])
        : _t(t[s]) && _t(n[s]) && Object.keys(t[s]).length > 0
        ? t[s].__swiper__
          ? (n[s] = t[s])
          : Tt(n[s], t[s])
        : (n[s] = t[s]);
    });
}
function cs(n) {
  return (
    n === void 0 && (n = {}),
    n.navigation &&
      typeof n.navigation.nextEl == 'undefined' &&
      typeof n.navigation.prevEl == 'undefined'
  );
}
function ps(n) {
  return (
    n === void 0 && (n = {}),
    n.pagination && typeof n.pagination.el == 'undefined'
  );
}
function hs(n) {
  return (
    n === void 0 && (n = {}),
    n.scrollbar && typeof n.scrollbar.el == 'undefined'
  );
}
function gs(n) {
  n === void 0 && (n = '');
  const t = n
      .split(' ')
      .map(s => s.trim())
      .filter(s => !!s),
    i = [];
  return (
    t.forEach(s => {
      i.indexOf(s) < 0 && i.push(s);
    }),
    i.join(' ')
  );
}
const vs = [
  'modules',
  'init',
  '_direction',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_preloadImages',
  'updateOnImagesReady',
  '_loop',
  '_loopAdditionalSlides',
  '_loopedSlides',
  '_loopFillGroupWithBlank',
  'loopPreventsSlide',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideBlankClass',
  'slideActiveClass',
  'slideDuplicateActiveClass',
  'slideVisibleClass',
  'slideDuplicateClass',
  'slideNextClass',
  'slideDuplicateNextClass',
  'slidePrevClass',
  'slideDuplicatePrevClass',
  'wrapperClass',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'lazy',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
];
function Vr(n) {
  n === void 0 && (n = {});
  const t = { on: {} },
    i = {};
  Tt(t, Je.defaults),
    Tt(t, Je.extendedDefaults),
    (t._emitClasses = !0),
    (t.init = !1);
  const s = {},
    l = vs.map(c => c.replace(/_/, '')),
    f = Object.assign({}, n);
  return (
    Object.keys(f).forEach(c => {
      typeof n[c] != 'undefined' &&
        (l.indexOf(c) >= 0
          ? _t(n[c])
            ? ((t[c] = {}), (i[c] = {}), Tt(t[c], n[c]), Tt(i[c], n[c]))
            : ((t[c] = n[c]), (i[c] = n[c]))
          : c.search(/on[A-Z]/) === 0 && typeof n[c] == 'function'
          ? (t.on[`${c[2].toLowerCase()}${c.substr(3)}`] = n[c])
          : (s[c] = n[c]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach(c => {
      t[c] === !0 && (t[c] = {}), t[c] === !1 && delete t[c];
    }),
    { params: t, passedParams: i, rest: s }
  );
}
function gl(n) {
  return new Je(n);
}
function vl(n, t) {
  let {
    el: i,
    nextEl: s,
    prevEl: l,
    paginationEl: f,
    scrollbarEl: c,
    swiper: m,
  } = n;
  cs(t) &&
    s &&
    l &&
    ((m.params.navigation.nextEl = s),
    (m.originalParams.navigation.nextEl = s),
    (m.params.navigation.prevEl = l),
    (m.originalParams.navigation.prevEl = l)),
    ps(t) &&
      f &&
      ((m.params.pagination.el = f), (m.originalParams.pagination.el = f)),
    hs(t) &&
      c &&
      ((m.params.scrollbar.el = c), (m.originalParams.scrollbar.el = c)),
    m.init(i);
}
function ms(n, t) {
  let i = t.slidesPerView;
  if (t.breakpoints) {
    const l = Je.prototype.getBreakpoint(t.breakpoints),
      f = l in t.breakpoints ? t.breakpoints[l] : void 0;
    f && f.slidesPerView && (i = f.slidesPerView);
  }
  let s = Math.ceil(parseFloat(t.loopedSlides || i, 10));
  return (s += t.loopAdditionalSlides), s > n.length && (s = n.length), s;
}
function ml(n, t, i) {
  const s = t.map(
    (v, y) => (
      v.props || (v.props = {}),
      (v.props.swiperRef = n),
      (v.props['data-swiper-slide-index'] = y),
      v
    )
  );
  function l(v, y, A) {
    return (
      v.props || (v.props = {}),
      ut(
        v.type,
        {
          ...v.props,
          key: `${v.key}-duplicate-${y}-${A}`,
          class: `${v.props.className || ''} ${i.slideDuplicateClass} ${
            v.props.class || ''
          }`,
        },
        v.children
      )
    );
  }
  if (i.loopFillGroupWithBlank) {
    const v = i.slidesPerGroup - (s.length % i.slidesPerGroup);
    if (v !== i.slidesPerGroup)
      for (let y = 0; y < v; y += 1) {
        const A = ut('div', { class: `${i.slideClass} ${i.slideBlankClass}` });
        s.push(A);
      }
  }
  i.slidesPerView === 'auto' && !i.loopedSlides && (i.loopedSlides = s.length);
  const f = ms(s, i),
    c = [],
    m = [];
  return (
    s.forEach((v, y) => {
      y < f && m.push(l(v, y, 'prepend')),
        y < s.length && y >= s.length - f && c.push(l(v, y, 'append'));
    }),
    n.value && (n.value.loopedSlides = f),
    [...c, ...s, ...m]
  );
}
function Al(n, t, i, s) {
  const l = [];
  if (!t) return l;
  const f = y => {
      l.indexOf(y) < 0 && l.push(y);
    },
    c = s.map(y => y.props && y.props.key),
    m = i.map(y => y.props && y.props.key);
  return (
    c.join('') !== m.join('') && l.push('children'),
    s.length !== i.length && l.push('children'),
    vs
      .filter(y => y[0] === '_')
      .map(y => y.replace(/_/, ''))
      .forEach(y => {
        if (y in n && y in t)
          if (_t(n[y]) && _t(t[y])) {
            const A = Object.keys(n[y]),
              C = Object.keys(t[y]);
            A.length !== C.length
              ? f(y)
              : (A.forEach(T => {
                  n[y][T] !== t[y][T] && f(y);
                }),
                C.forEach(T => {
                  n[y][T] !== t[y][T] && f(y);
                }));
          } else n[y] !== t[y] && f(y);
      }),
    l
  );
}
function Ci(n, t, i) {
  n === void 0 && (n = {});
  const s = [],
    l = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    },
    f = (c, m) => {
      !Array.isArray(c) ||
        c.forEach(v => {
          const y = typeof v.type == 'symbol';
          m === 'default' && (m = 'container-end'),
            y && v.children
              ? f(v.children, 'default')
              : v.type &&
                (v.type.name === 'SwiperSlide' ||
                  v.type.name === 'AsyncComponentWrapper')
              ? s.push(v)
              : l[m] && l[m].push(v);
        });
    };
  return (
    Object.keys(n).forEach(c => {
      if (typeof n[c] != 'function') return;
      const m = n[c]();
      f(m, c);
    }),
    (i.value = t.value),
    (t.value = s),
    { slides: s, slots: l }
  );
}
function yl(n) {
  let {
    swiper: t,
    slides: i,
    passedParams: s,
    changedParams: l,
    nextEl: f,
    prevEl: c,
    paginationEl: m,
    scrollbarEl: v,
  } = n;
  const y = l.filter(o => o !== 'children' && o !== 'direction'),
    {
      params: A,
      pagination: C,
      navigation: T,
      scrollbar: P,
      virtual: I,
      thumbs: _,
    } = t;
  let M, N, j, K, Q;
  l.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    A.thumbs &&
    !A.thumbs.swiper &&
    (M = !0),
    l.includes('controller') &&
      s.controller &&
      s.controller.control &&
      A.controller &&
      !A.controller.control &&
      (N = !0),
    l.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || m) &&
      (A.pagination || A.pagination === !1) &&
      C &&
      !C.el &&
      (j = !0),
    l.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || v) &&
      (A.scrollbar || A.scrollbar === !1) &&
      P &&
      !P.el &&
      (K = !0),
    l.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || c) &&
      (s.navigation.nextEl || f) &&
      (A.navigation || A.navigation === !1) &&
      T &&
      !T.prevEl &&
      !T.nextEl &&
      (Q = !0);
  const Ae = o => {
    !t[o] ||
      (t[o].destroy(),
      o === 'navigation'
        ? ((A[o].prevEl = void 0),
          (A[o].nextEl = void 0),
          (t[o].prevEl = void 0),
          (t[o].nextEl = void 0))
        : ((A[o].el = void 0), (t[o].el = void 0)));
  };
  y.forEach(o => {
    if (_t(A[o]) && _t(s[o])) Tt(A[o], s[o]);
    else {
      const ge = s[o];
      (ge === !0 || ge === !1) &&
      (o === 'navigation' || o === 'pagination' || o === 'scrollbar')
        ? ge === !1 && Ae(o)
        : (A[o] = s[o]);
    }
  }),
    l.includes('children') && I && A.virtual.enabled
      ? ((I.slides = i), I.update(!0))
      : l.includes('children') &&
        t.lazy &&
        t.params.lazy.enabled &&
        t.lazy.load(),
    M && _.init() && _.update(!0),
    N && (t.controller.control = A.controller.control),
    j && (m && (A.pagination.el = m), C.init(), C.render(), C.update()),
    K &&
      (v && (A.scrollbar.el = v), P.init(), P.updateSize(), P.setTranslate()),
    Q &&
      (f && (A.navigation.nextEl = f),
      c && (A.navigation.prevEl = c),
      T.init(),
      T.update()),
    l.includes('allowSlideNext') && (t.allowSlideNext = s.allowSlideNext),
    l.includes('allowSlidePrev') && (t.allowSlidePrev = s.allowSlidePrev),
    l.includes('direction') && t.changeDirection(s.direction, !1),
    t.update();
}
function wl(n) {
  !n ||
    n.destroyed ||
    !n.params.virtual ||
    (n.params.virtual && !n.params.virtual.enabled) ||
    (n.updateSlides(),
    n.updateProgress(),
    n.updateSlidesClasses(),
    n.lazy && n.params.lazy.enabled && n.lazy.load(),
    n.parallax &&
      n.params.parallax &&
      n.params.parallax.enabled &&
      n.parallax.setTranslate());
}
function Sl(n, t, i) {
  if (!i) return null;
  const s = n.value.isHorizontal()
    ? { [n.value.rtlTranslate ? 'right' : 'left']: `${i.offset}px` }
    : { top: `${i.offset}px` };
  return t
    .filter((l, f) => f >= i.from && f <= i.to)
    .map(
      l => (
        l.props || (l.props = {}),
        l.props.style || (l.props.style = {}),
        (l.props.swiperRef = n),
        (l.props.style = s),
        ut(l.type, { ...l.props }, l.children)
      )
    );
}
const Ti = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'imagesReady',
      'init',
      'keyPress',
      'lazyImageLoad',
      'lazyImageReady',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'zoomChange',
    ],
    setup(n, t) {
      let { slots: i, emit: s } = t;
      const { tag: l, wrapperTag: f } = n,
        c = se('swiper'),
        m = se(null),
        v = se(!1),
        y = se(!1),
        A = se(null),
        C = se(null),
        T = se(null),
        P = { value: [] },
        I = { value: [] },
        _ = se(null),
        M = se(null),
        N = se(null),
        j = se(null),
        { params: K, passedParams: Q } = Vr(n);
      Ci(i, P, I), (T.value = Q), (I.value = P.value);
      const Ae = () => {
        Ci(i, P, I), (v.value = !0);
      };
      if (
        ((K.onAny = function (ge) {
          for (
            var ee = arguments.length,
              be = new Array(ee > 1 ? ee - 1 : 0),
              Z = 1;
            Z < ee;
            Z++
          )
            be[Z - 1] = arguments[Z];
          s(ge, ...be);
        }),
        Object.assign(K.on, {
          _beforeBreakpoint: Ae,
          _containerClasses(ge, ee) {
            c.value = ee;
          },
        }),
        (C.value = gl(K)),
        (C.value.loopCreate = () => {}),
        (C.value.loopDestroy = () => {}),
        K.loop && (C.value.loopedSlides = ms(P.value, K)),
        C.value.virtual && C.value.params.virtual.enabled)
      ) {
        C.value.virtual.slides = P.value;
        const ge = {
          cache: !1,
          slides: P.value,
          renderExternal: ee => {
            m.value = ee;
          },
          renderExternalUpdate: !1,
        };
        Tt(C.value.params.virtual, ge), Tt(C.value.originalParams.virtual, ge);
      }
      ns(() => {
        !y.value && C.value && (C.value.emitSlidesClasses(), (y.value = !0));
        const { passedParams: ge } = Vr(n),
          ee = Al(ge, T.value, P.value, I.value);
        (T.value = ge),
          (ee.length || v.value) &&
            C.value &&
            !C.value.destroyed &&
            yl({
              swiper: C.value,
              slides: P.value,
              passedParams: ge,
              changedParams: ee,
              nextEl: _.value,
              prevEl: M.value,
              scrollbarEl: j.value,
              paginationEl: N.value,
            }),
          (v.value = !1);
      }),
        is('swiper', C),
        Ku(m, () => {
          lt(() => {
            wl(C.value);
          });
        }),
        yt(() => {
          !A.value ||
            (vl(
              {
                el: A.value,
                nextEl: _.value,
                prevEl: M.value,
                paginationEl: N.value,
                scrollbarEl: j.value,
                swiper: C.value,
              },
              K
            ),
            s('swiper', C.value));
        }),
        Di(() => {
          C.value && !C.value.destroyed && C.value.destroy(!0, !1);
        });
      function o(ge) {
        return K.virtual
          ? Sl(C, ge, m.value)
          : !K.loop || (C.value && C.value.destroyed)
          ? (ge.forEach(ee => {
              ee.props || (ee.props = {}), (ee.props.swiperRef = C);
            }),
            ge)
          : ml(C, ge, K);
      }
      return () => {
        const { slides: ge, slots: ee } = Ci(i, P, I);
        return ut(l, { ref: A, class: gs(c.value) }, [
          ee['container-start'],
          ut(f, { class: 'swiper-wrapper' }, [
            ee['wrapper-start'],
            o(ge),
            ee['wrapper-end'],
          ]),
          cs(n) && [
            ut('div', { ref: M, class: 'swiper-button-prev' }),
            ut('div', { ref: _, class: 'swiper-button-next' }),
          ],
          hs(n) && ut('div', { ref: j, class: 'swiper-scrollbar' }),
          ps(n) && ut('div', { ref: N, class: 'swiper-pagination' }),
          ee['container-end'],
        ]);
      };
    },
  },
  jn = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(n, t) {
      let { slots: i } = t,
        s = !1;
      const { swiperRef: l } = n,
        f = se(null),
        c = se('swiper-slide');
      function m(y, A, C) {
        A === f.value && (c.value = C);
      }
      yt(() => {
        !l.value || (l.value.on('_slideClass', m), (s = !0));
      }),
        Hu(() => {
          s || !l || !l.value || (l.value.on('_slideClass', m), (s = !0));
        }),
        ns(() => {
          !f.value ||
            !l ||
            !l.value ||
            (l.value.destroyed &&
              c.value !== 'swiper-slide' &&
              (c.value = 'swiper-slide'));
        }),
        Di(() => {
          !l || !l.value || l.value.off('_slideClass', m);
        });
      const v = xt(() => ({
        isActive:
          c.value.indexOf('swiper-slide-active') >= 0 ||
          c.value.indexOf('swiper-slide-duplicate-active') >= 0,
        isVisible: c.value.indexOf('swiper-slide-visible') >= 0,
        isDuplicate: c.value.indexOf('swiper-slide-duplicate') >= 0,
        isPrev:
          c.value.indexOf('swiper-slide-prev') >= 0 ||
          c.value.indexOf('swiper-slide-duplicate-prev') >= 0,
        isNext:
          c.value.indexOf('swiper-slide-next') >= 0 ||
          c.value.indexOf('swiper-slide-duplicate-next') >= 0,
      }));
      return (
        is('swiperSlide', v),
        () =>
          ut(
            n.tag,
            {
              class: gs(`${c.value}`),
              ref: f,
              'data-swiper-slide-index': n.virtualIndex,
            },
            n.zoom
              ? ut(
                  'div',
                  {
                    class: 'swiper-zoom-container',
                    'data-swiper-zoom':
                      typeof n.zoom == 'number' ? n.zoom : void 0,
                  },
                  i.default && i.default(v.value)
                )
              : i.default && i.default(v.value)
          )
      );
    },
  },
  xe = [
    {
      studentName: '',
      schoolName: '千年',
      desc: '以高超的科学技术为傲的实力学校，同时也是本次的主办方。本次的晄轮大祭也会从科学的论证上验证所有的可能性，并高效率，稳定的剑指胜利。能否不被各种各样的变数所影响，证明胜利的方程式吗？',
      leftImg: null,
      avatarImg: new URL('./public/1mss.1757adbf.png', self.location).href,
    },
    {
      studentName: '',
      schoolName: '圣三一',
      desc: '是基沃托斯最大的学校之一，以悠久的传统和规矩而自豪。尽管作为文静优雅的大小姐学校的形象在晄轮大祭中常常被小看，但是在艺术和武术两方面的坚实实力都不容小觑。也绝不能轻视在绝境中的大小姐们。',
      leftImg: null,
      avatarImg: new URL('./public/2trinity.ce67aaac.png', self.location).href,
    },
    {
      studentName: '',
      schoolName: '格黑娜',
      desc: '被以自由为名的混沌所支配的巨大学院。虽然所属学生们的纯粹的个人技能和运动神经都相当的高，但是学校里有很多不被规则所束缚，不在轨道的学生，因此唯一需要注意的可能是因为违反规则而被取消资格和合作上的危险，吧。',
      leftImg: null,
      avatarImg: new URL('./public/3gehena.61dfd3ec.png', self.location).href,
    },
    {
      studentName: '堇',
      schoolName:
        '千年科技学院',
      desc: '千年科技学院所属，在千年里十分罕见的肉体派“训练部”成员「乙花堇」。相传她是千年中最干劲十足的学生，也确实能看到她十分的活跃。可不要错过她使用最先端的科学技术所磨练出来的肌肉爆发的瞬间。在比赛开始前的采访中所说”世界上所有的问题都可以通过肌肉和运动来解决“。究竟是否能够将她的话付出实践吗？十分令人关注。',
      leftImg: new URL('./public/mss.c9cb2566.png', self.location).href,
      avatarImg: new URL('./public/4sumire.42c8800f.png', self.location).href,
    },
    {
      studentName: '鹤城',
      schoolName: '圣三一综合学院',
      desc: '属于圣三一综合学院的正义实现委员会的委员长「剑先 鹤城」，被称为『行走的战略兵器』，只要不陷入了无法控制的暴走状态，她那基沃托斯中屈指可数的实力在晄轮大祭中也能毫无遗憾的发挥出来吧。虽然斗胆进行了提前采访，但是非常抱歉的是，从采访中途开始我们就听不清她在说什么了，不得已只能作罢。(采访者注：虽然很可怕，但是其实是好人)',
      leftImg: new URL('./public/trinity.ce49100f.png', self.location).href,
      avatarImg: new URL('./public/5tsurugi.81bd11b1.png', self.location).href,
    },
    {
      studentName: '日奈',
      schoolName: '格黑娜学院',
      desc: '格黑娜学院所属，以基沃托斯中屈指可数的强者而所闻名的风纪委员会长「空崎 日奈」。超高水平的技能在个人竞技中会大放光彩不说，从那高超的指挥能力看来，可以预想到在团队竞技中也能毫无保留的发挥她的能力。提前采访被风纪委员会的行政官所回绝。有消息说她因为每天的繁重工作积攒了很多疲惫，不过格黑娜的顶梁柱的动向果然还是很令人关注。',
      leftImg: new URL('./public/gehena.5f2c5911.png', self.location).href,
      avatarImg: new URL('./public/6hina.f1c34326.png', self.location).href,
    },
    {
      studentName: '白子',
      schoolName: '阿拜多斯高等学校',
      desc: '阿拜多斯高等学校所属，对策委员会的重要队长「砂狼 白子」。虽然阿拜多斯的学生数处于相当不利的地位，但是她的身体能力可是非同寻常。几次拜访都由于她外出训练不在，提前采访未能实现，但是这份成功一定能在那天的体育场上成为焦点。（补充：据消息称她携带了反坦克导弹。）',
      leftImg: new URL('./public/abydos.59c421da.png', self.location).href,
      avatarImg: new URL('./public/7shiroko.09212e07.png', self.location).href,
    },
    {
      studentName: '宫子',
      schoolName: 'SRT特殊学园',
      desc: 'SRT特殊学园所属，RABBIT小队的「月雪 宫子」。SRT特殊学园已经被官方关闭，但是本次收到了夏莱推荐状而特别参战。当听到SRT的名字，果然还是会对其能力有很高的期待。由于事前在我们拜访的公园里设置了许多陷阱，提前采访未能实现，但是大家的目光都集中在了她身上，看到底能否发挥SRT真正的价值。',
      leftImg: new URL('./public/srt.58d0ea1a.png', self.location).href,
      avatarImg: new URL('./public/8miyako.5a3b06c4.png', self.location).href,
    },
    {
      studentName: '泉奈',
      schoolName: '百鬼夜行联合学院',
      desc: '百鬼夜行联合学院所属，忍术研究部的新入部员「久田 泉奈」。她所表演的各种多彩「忍法」已经是活动举办前各个地方所关注的焦点。在提前采访中“为了成为基沃托斯最强的忍者而在努力！在看着吗？满殿，月咏殿，主公!” 在比赛结束后，忍术研究部的名字会不会传遍整个基沃托斯呢？',
      leftImg: new URL('./public/hyakkiyako.7539bca2.png', self.location).href,
      avatarImg: new URL('./public/9izuna.0cc94810.png', self.location).href,
    },
    {
      studentName: '晴奈',
      schoolName: '格黑娜学园',
      desc: '格黑娜学园所属，美食研究会的部长「黑馆 晴奈」。被称为基沃托斯第一美食家，她的目的地到底是竞技场，还是竞技场周围的美食摊位？不论怎么说，所有目光集中在了为了美食不惜一切代价的她的动向上。提前采访中"当身体在不断的运动中享受了美好的时光，肚子也会变空。也就是说，体育祭也是通往美食之路的一步',
      leftImg: new URL('./public/gehena.5f2c5911.png', self.location).href,
      avatarImg: new URL('./public/10haruna.9d7ae525.png', self.location).href,
    },
    {
      studentName: '响',
      schoolName:
        '千年科技学院',
      desc: '千年科技学院所属，很多工匠大师们聚集的工程部的一年生「猫塚响」。 似乎本次并不作为选手参加，而是作为拉拉队队长参战的样子。提前采访中"应援用无人机和这套衣服都是自己制作的，虽然很害羞，但我会加油的"。看起来大家都无法把目光从她的制作物上移开呢。',
      leftImg: new URL('./public/mss.c9cb2566.png', self.location).href,
      avatarImg: new URL('./public/11hibiki.7f723c79.png', self.location).href,
    },
    {
      studentName: '芹娜',
      schoolName: '圣三一综合学园',
      desc: '圣三一综合学园所属，救护骑士团的「鹫见芹娜」。她并不是本次的选手，但是负责合同医疗本部的工作而引起了关注。提前采访中说到"不管是什么学校，如果收到了伤害的话请到合同医疗本部来。当天会很热的样子，一定要小心中暑呢！"。这里也借此机会感谢负责医疗服务的人们。',
      leftImg: new URL('./public/trinity.ce49100f.png', self.location).href,
      avatarImg: new URL('./public/12serina.b3e0222c.png', self.location).href,
    },
  ];
const Cl = n => (en('data-v-7629dc0d'), (n = n()), tn(), n),
  El = { class: 'zhumu' },
  bl = Cl(() =>
    U(
      'div',
      { class: 'zhumu_title', id: 'anchor5' },
      '\u6CE8\u76EE\u6821\u30FB\u6CE8\u76EE\u751F\u5F92',
      -1
    )
  ),
  Bl = { key: 0, class: 'swiper_contain' },
  kl = ['src'],
  Tl = { key: 1, class: 'swiper_contain' },
  xl = ['src'],
  Fl = { key: 2, class: 'z_info' },
  Dl = { class: 'info_text_wrap' },
  Ll = { key: 0, class: 'left' },
  Ol = { class: 'right_text' },
  Il = ['src'],
  Pl = { class: 'info_content' },
  Nl = { class: 'info_text' },
  Jl = { key: 3, class: 'z_info_pc' },
  Rl = ['src'],
  _l = { class: 'info_content' },
  Ul = { class: 'left' },
  ql = { class: 'info_text' },
  Ml = { key: 4, src: sa, alt: '', class: 'right_line', id: 'right_line_z1' },
  Vl = { key: 5, src: ua, alt: '', class: 'right_line', id: 'right_line_z1' },
  jl = { key: 6, src: aa, alt: '', class: 'left_line', id: 'left_line_z1' },
  Wl = { key: 7, src: oa, alt: '', class: 'left_line', id: 'left_line_z1' },
  Kl = dt({
    __name: 'zhumu',
    setup(n) {
      let t = se(0);
      xt(() => t.value > 0), xt(() => t.value < xe.length - 1);
      let i;
      const s = () => {
          i.slideNext();
        },
        l = () => {
          i.slidePrev();
        };
      let f = se(0),
        c = se(!1);
      (c = xt(() => f.value < 700)),
        Gt(() => {
          yn.on('width', C => {
            f.value = C.val;
          });
        }),
        Gt(() => {}),
        yt(() => {
          lt(() => {
            new Xe().createInspector('left_line_z1', 'left_line_ani'),
              new Xe().createInspector('right_line_z1', 'right_line_ani'),
              new Xe().createInspector('left_line_z2', 'left_line_ani'),
              new Xe().createInspector('right_line_z2', 'right_line_ani');
          });
        });
      let m = se({
          rotate: 0,
          stretch: -120,
          depth: 500,
          modifier: 1,
          slideShadows: !1,
        }),
        v = se({
          rotate: 0,
          stretch: '-140',
          depth: 2500,
          modifier: 1,
          slideShadows: !1,
        });
      const y = C => {
          i = C;
        },
        A = C => {
          t.value = C.realIndex;
        };
      return (C, T) => (
        z(),
        Y('div', El, [
          bl,
          q(c)
            ? (z(),
              Y('div', Bl, [
                Pe(
                  q(Ti),
                  {
                    'slides-per-view': 'auto',
                    modules: [q(Mr)],
                    effect: 'coverflow',
                    onSwiper: y,
                    onSlideChange: A,
                    coverflowEffect: q(m),
                    centeredSlides: !0,
                    loop: !0,
                    'looped-slides': 5,
                  },
                  {
                    default: Rt(() => [
                      (z(!0),
                      Y(
                        At,
                        null,
                        Bt(
                          q(xe),
                          (P, I) => (
                            z(),
                            Mn(
                              q(jn),
                              { key: I },
                              {
                                default: Rt(() => [
                                  U(
                                    'img',
                                    {
                                      src: P.avatarImg,
                                      alt: '',
                                      class: 'slide_img',
                                    },
                                    null,
                                    8,
                                    kl
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                      U('img', {
                        onClick: l,
                        class: 'leftS',
                        src: Or,
                        alt: '',
                      }),
                      U('img', {
                        onClick: s,
                        class: 'rightS',
                        src: Ir,
                        alt: '',
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modules', 'coverflowEffect']
                ),
              ]))
            : ce('v-if', !0),
          q(c)
            ? ce('v-if', !0)
            : (z(),
              Y('div', Tl, [
                Pe(
                  q(Ti),
                  {
                    'slides-per-view': 'auto',
                    modules: [q(Mr)],
                    effect: 'coverflow',
                    onSwiper: y,
                    onSlideChange: A,
                    coverflowEffect: q(v),
                    centeredSlides: !0,
                    loop: !0,
                  },
                  {
                    default: Rt(() => [
                      (z(!0),
                      Y(
                        At,
                        null,
                        Bt(
                          q(xe),
                          (P, I) => (
                            z(),
                            Mn(
                              q(jn),
                              { key: I, 'looped-slides': 7 },
                              {
                                default: Rt(() => [
                                  U(
                                    'img',
                                    {
                                      src: P.avatarImg,
                                      alt: '',
                                      class: 'slide_img',
                                    },
                                    null,
                                    8,
                                    xl
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                      U('img', {
                        onClick: l,
                        class: 'leftS',
                        src: Or,
                        alt: '',
                      }),
                      U('img', {
                        onClick: s,
                        class: 'rightS',
                        src: Ir,
                        alt: '',
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modules', 'coverflowEffect']
                ),
              ])),
          q(c)
            ? (z(),
              Y('div', Fl, [
                U(
                  'div',
                  {
                    class: bt([
                      'info_top',
                      { info_top_center: !q(xe)[q(t)].studentName },
                    ]),
                  },
                  [
                    U('div', Dl, [
                      q(xe)[q(t)].studentName
                        ? (z(), Y('div', Ll, $e(q(xe)[q(t)].studentName), 1))
                        : ce('v-if', !0),
                      U(
                        'div',
                        {
                          class: bt([
                            'right',
                            { right0: !q(xe)[q(t)].studentName },
                          ]),
                        },
                        [U('div', Ol, $e(q(xe)[q(t)].schoolName), 1)],
                        2
                      ),
                    ]),
                    q(xe)[q(t)].leftImg
                      ? (z(),
                        Y(
                          'img',
                          {
                            key: 0,
                            src: q(xe)[q(t)].leftImg,
                            alt: '',
                            class: 'info_img',
                          },
                          null,
                          8,
                          Il
                        ))
                      : ce('v-if', !0),
                  ],
                  2
                ),
                U('div', Pl, [
                  U('div', Nl, [
                    U(
                      'div',
                      {
                        class: bt([
                          'info_text_inner',
                          { info_wider: !q(xe)[q(t)].leftImg },
                        ]),
                      },
                      $e(q(xe)[q(t)].desc),
                      3
                    ),
                  ]),
                ]),
              ]))
            : ce('v-if', !0),
          q(c)
            ? ce('v-if', !0)
            : (z(),
              Y('div', Jl, [
                q(xe)[q(t)].leftImg
                  ? (z(),
                    Y(
                      'img',
                      {
                        key: 0,
                        class: 'left_img',
                        src: q(xe)[q(t)].leftImg,
                        alt: '',
                      },
                      null,
                      8,
                      Rl
                    ))
                  : ce('v-if', !0),
                U('div', _l, [
                  U(
                    'div',
                    {
                      class: bt([
                        'info_top',
                        { info_top_center: !q(xe)[q(t)].studentName },
                      ]),
                    },
                    [
                      U('div', Ul, $e(q(xe)[q(t)].studentName), 1),
                      ce(' <div class="mid">CV.\u5C0F\u5009\u552F</div>  '),
                      U(
                        'div',
                        {
                          class: bt([
                            'right',
                            { right0: !q(xe)[q(t)].studentName },
                          ]),
                        },
                        $e(q(xe)[q(t)].schoolName),
                        3
                      ),
                    ],
                    2
                  ),
                  U('div', ql, $e(q(xe)[q(t)].desc), 1),
                ]),
              ])),
          q(c) ? (z(), Y('img', Ml)) : ce('v-if', !0),
          q(c) ? ce('v-if', !0) : (z(), Y('img', Vl)),
          q(c) ? (z(), Y('img', jl)) : ce('v-if', !0),
          q(c) ? ce('v-if', !0) : (z(), Y('img', Wl)),
        ])
      );
    },
  });
var Hl = ft(Kl, [['__scopeId', 'data-v-7629dc0d']]),
  Ql = './public/c3.8ed32e90.png',
  zl = './public/cp1.cbe2c33f.png',
  Gl = './public/c2.64d0565c.png',
  Xl = './public/cp2.acda2485.png',
  Zl = './public/c1.5bbebda3.png',
  Yl = './public/cp3.84c7cb07.png',
  $l = './public/c4.c6939d3a.png',
  ef = './public/cp4.060595e1.png',
  tf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAABACAYAAAB7qyKHAAAFaElEQVR4nO3dvW8cVRSG8ceJE+c7BCfmL0MIEAJBgSigQFQICdEg0aSFDrpIVCgVVIgG0UAKREOFhCgSf8jEzredUMxecj07M3vXnvGd2Xl+0mo9s7vjoyjyq5k5e8/SyxsbSJI0AJeBNeAqcGs5czGSpHE6B6wC1yaPq5Ptq5PHtejn8NqpyWe/BV4xwCRJR3WKg+FTDqDVaN+1yfa5Q/6uv4B3AQwwSVJZHEbxz2vR9mq07/Ix1bUPvA5sgwEmSYvuAkXYvMR0+MRnRHFgncxS6WyfAT+HDQNMkoZjhfozohA+5XtKZ7JU2r6fgM/jHQaYJOVxgupLdWul7dVo38Uslea3BbxBcQnxfwaYJLXjEtOX5Jq67FaBpSyVDs87wN/lnQaYJE07S/0ZUV2X3ekslS6+r4Dvql4wwCQtumWmz3zWmL50F99TOp+lUpX9AXxY96IBJmlorjB9Sa6py+5KnjJ1RA+AVyfPlQwwSTmdp/4+UTmUwj7/bo3DR8DvTW/wP4KktpymunOu6cuwZ7NUqr67CXw5600GmKQqS0xfjqtbny6E0qUslWrR/AO8DTyb9UYDTBqHi6StTxfvP5GlUo3ZPsX3vTZT3myAScNzhrT16eLtlSyVSvP5Avgx9c0GmJTXSdLXpwuhdCFLpVK3fgE+necDBpjUrjBwb9b6dPGzNHb/UrTM783zIQNMqhcG7s1any7ef6rySJKavEcx52suBpjGIh64lzoF9rAD9ySl+xq4cZgPGmAaqqoW76YuuxfylCmpwZ/AB4f9sAGmPggD91K++Bqe+zpwT1KaxxT3vXYPewADTG2LB+6lToFdlIF7ktJ9DPx2lAMYYGoSD9xLnQI71oF7ktJ9D1w/6kEMsHEJA/fqlgKqavF24J6kNt0G3iJhqahZDLDhigfupU6BdeCepJyeAW9ShNiRGWD9EA/cS50C68A9SUNzHfihrYMZYN0IA/dSp8C+mKdMSTo2v1I0brTGAJttnoF74dl/V0l6bhd4jaJ1vjVj+0PrwD1JOn7vU3xpuVVDD7Cq8HHgniT1xw3gmy4O3KcAu0Da+nQO3JOk/nkMbEwem8AdYB34pKtf2FWArZC2Pl3c6ODAPUnqh2ccDKPwfLu0vUERUuvAznEXmRJgJ0hfn86Be5LUPzsUZ0TlUNqY7N+seO3IXzTu2jLFl8qapsA6cE+S+uMhz8NmPfo5Dp87pe1Wu//6YpmObq5JkmbaZzp8wiW5+FJd2LcB3MtSaQ/1qYlDkoZum4OX5OrOiMJjK0+Zi8EAk6Rq96k+I4q77MpnT3tZKh0pA0zSGDzhYNjEl+TquuweZKlUyQwwSUNU1eLd1GV3N0+Z6pIBJim3XarPiJq67J5mqVS9YoBJatMjDgZOHEB1XXaPslSqwTPAJNV5SnXnXFUohct3u1kq1SgZYNJ43CVtNYZ4v9RbBpg0TA9IW58uDqMnWSqVOmKASfntkbY+XdzocD9LpVKPGGBS+7ZIW58utH5v5ylTGjYDTGp2j7T16eKzpf0slUojY4BpTMLAvVnr08Vddg+zVCppJgNMQxUG7qWsTxfC6tgH7knqjgGmvtghbX26OJR6P3BPUncMMHUhDNybdUYUby/kwD1J3THANEsYuJeyPl0IKwfuSeqcATY+26StTxe67By4J6mXDLBhCwP36pYCquqyc+CepIVggPVHGLjXtBRQ+Z6SA/ckjZYB1p2qFu+mLjsH7knSHAywNLs0LwVU1WXnwD1J6tAYAywM3GtaCqjcZefAPUnqmaEH2DwD90JYOXBPkhZA3wLMgXuSpCRdBpgD9yRJnUkNMAfuSZJ6ZRm4iQP3JEkD8x+Aw/IDCj+7uwAAAABJRU5ErkJggg==',
  nf = './public/2-1.cf894963.png',
  rf =
    'data:image/png;base64,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',
  sf = './public/2-2.bb44a46a.png',
  uf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjcAAABhCAYAAAAqYIBtAAAACXBIWXMAAAsTAAALEwEAmpwYAAALnUlEQVR4nO3dX4hjZxnH8V9OMn93klk7M1tFRUGqFxYEFdE7UaTqhRJvtJXSWi+kQkvUglAKpYh/CnVbsNDeSHshrhWh0qv2qnhhqRetQi1IA1KRYndndtjuzCaZ/16cnMmb5JzkTHJynnOS7wfCzDmZJM+WZefX932f9y0oQd/450mSbwcAABDHqqQLktYl/b1kXAwAAIBrWdKapI32Y719vd5+bDjfB8/NtV/7R0nfJtwAAIBJmVN3MOkNJ2vOvY329fKIn/W2pB9IEuEGAADE5QYV9/sLzvWac281pbqOJH1X0jWJcAMAwKxakR9EblZ/MHFHUtwwUzSpdLhHJL0SXBBuAADIvwVFj6QEwaR3DcuiSaXJ+4ukX7g3CDcAAGSLp/Dpnws912vOvbJJpfa2Jd0pf1rqFOEGAIDJqqh/mmdQN9CapIJJpfnzfUn/7b1JuAEAIL4l9Y+aDOsGmjepdPo9LenPYU8QbgAAs6qk/mmeYYtrz5lUil5vSvpx1JOEGwDAtLhJw9uU3Smh99mUiTE1Jd3e/hqKcAMAyKJzit6NNmpxLb/TZsMDkt4Y9AP8RQAATNq8Bu+hEra4dsmkUmTdC5KeGvZDhBsAwFkU1D9iEjaS4i6urZhUimnzjqR7JA09pZtwAwCzrazo3WgvqH86aE3+PixAmo7k72dzNc4PE24AYHosavAeKmHdQAsmlQJn86ikl+P+MOEGALKpqOjdaKO6gVZMKgUm61VJD5/lBYQbAEjHeYXvRhvVDbRmUiWQLe/Jb/s+PMuLCDcAcHbLit6NNqobaM6kUiDf7pX09llfRLgBMOvmNHjTt7BuoGWTSoHZ8oykS6O8kHADYNqEtSkP6gZatSkTwABvSbp/1BcTbgBk2YoGb58f1g1UNKkUQFL25a+z2R31DQg3ANKyoOHb5/d2Ay2aVArA0oOSXh/nDQg3AEbhqT+YhI2kuAtuyyaVAsiTFyVdHPdNCDcAJH97/EHb54e1KRdMKgUwrS5LulsxjlcYhnADTJ8lxd/0Lbg/b1IpAPhOJN0lP+CMjXADZFtJg4NJ2JQQbcoA8uaipJeSejPCDZCumxS+G23U4trzJlUCQHpek7+IODGEG2B05xS9G23U4lralAGgY1fSHfLbvxNDuAF88xo8khK2uJY2ZQAYz33yN+xLFOEG06ig/mAybHEtbcoAkK5Lkp6dxBsTbpAHZUXvRntzz3UQWGhTBoBs2Je01X5clXRF0qakhyb1gYQbpG1RZ2tTXhdtygCQFSfqDirB18s911vyA8ympJ20iyTcYBxFRe9GG9UNdM6kUgBAmB35Iym9gWWrff9qyHNjb7I3aYQbuM4rfDfaqG6gm0yqBACEaakTRDad791gcqXnOtEupawg3EyvZUXvRhvVDcTfBwDIhiP1B5Ngmsed/gnubUm6YVJpBvHLLB/mNHgkJWwNy5JJpQCAMNfUPc0TNZISPLZNqpwShBsbYW3Kg7qBKjZlAgBCNBQ+kuJ2A/WOuhyaVDqjCDfjW9Hg7fPDuoE8k0oBAL0O1B1E3GmeqG6gpkmliI1w021Bw7fP7+0GWjCpFAAQJqxNeVA30HWbMjFJ0xxuPA3fPr93DcuKSaUAgDC7Ch9JGdQNdGxSKTIlT+Gmonibvrn3AQDZsKfuMOKGk6huoD2TSpF7eQk3v5d0u3URAABJ/uhIWIdPWGAJpoR2TSrFTMpDuLlLBBsAmKTrirdLrXsfyKysh5tbJD1pXQQA5EhT8c77cYPKgUmlwIQUjvYet64hVLVem5f0iqTPWNcCoNuyt6fVYlOVYlP/3tvQwUnW/z8ptw4V77wfd9Ftw6RSIEOy/C/Sz0WwASZuoXCocjuorBabKhebKhdbqrTvdT9aKntNFQt+Q8pfdz+ux/73deM/Qa5sK955P0H78jWTKoGcy2S4qdZrt0n6iXUdQN4UC8cqe34ICQsn5WJL5XaIqbSDzEJhtI1TrxxU9NTlLyf8J8iVG4p33o87ynJkUikwYzIXbqr12s2SnpVUMC4FMBeMoJSLTVW8Vt8IS8UZZVktNrXspdM5e6yCHn/3a7pxPDV7WO4r3nk/bjdQy6RSAENlKtxU67WC/GDzfuNSgMQtegcqe02dLzX8QOL1T/+U3emfYlOeTqzLDvXc1c/rX60PWJcR5UT9wWTYLrU7JpUCmIhMhRtJP5L0VesigGHmCkddoyqrxU5g6R1NKbfDytyI0z9Z82bzQ/rT9ufS/MgdxTvvxw0s2UyFAFKRmXBTrdc+LemX1nVg9hR00jWC0gkmfmAJ1rAEIaZSbGnJ27cu28Tu0aKeePc2HY8+a9xSvJEU93o2/2MDGFkmwk21XjsnfxfieetakH/L3n47qDSc0ZVWexFt47TjJwgs5WKTBV4xPXnlK9o6LAeXR4p/3k8QZG6kXDKAGZSJcCPpN5I+YV0Esme+cNg1kuKOrHStV3Gmg0oFGlIm4T976y/+bfdjP1O7G+j5W57YDp6r1mtmdQFAL/NwU63XviPpe9Z1YPL8NuXOOhV/NKVx2rYcrE0pe02tlhoqey0temycmhFvfmRh61vP3/JE07oQABjGNNxU67WPSnrasgaMbsXbU6XU6GpRDgJLbwtzpdTQSkptykhcU/75bgQbALlgFm6q9VpJ/jqbVasa0OG3KbdO16oE61GCwHI+WFwb3PNap7vUYuo9IOkN6yIAIC7LkZtHJH3B8POnVsltU/ZakWtV3BGW+SlpU0biXpD0lHURAHAWJuGmWq99UdJPLT47bwrSaUdPZx+V1unoSv+2+g0tz2ibMhL3jqR7xJ4xAHIm9XBTrdfWJP1OUjHtz86CJW/fCSedBbSdxbX9IywFfrcgfUeS7pTfGQUAuWIxcvNbSR80+NzEzRUOnbUpPQtpPfdeJ6jM0aaMfHhU0svWRQDAKFINN9V67YeSvpnmZ8bl6aTTihxyknKwl4o7wkKbMqbUq5Ieti4CAEaVWrip1mu3Snosrc9b9va6zvVxDyU8ve+1ukZVAOg9+W3frDAHkFuphJtqvbYk6Q+SlkZ5/ULhsC+YdG+r3+iMsrTbmWlTBkZyr6S3rYsAgHGkNXLza0mflIJdat2DCPunf8ru6EqxqQXalIE0PCPpknURADCuJMLNmqR152vw2JC0vnlYvvVXH37us0GAOccutUAWvSXpfusiACAJveFmRX5IuaBOSHFDywX1h5mBLd0bpR1tlHaSrRpAkvblr7PZtS4EAJJQkvQPdYLKomk1ACw8KOl16yIAICklSZ+yLgKAmRclXbQuAgCS5FkXAMDMZUl3i+MVAEwZwg0wm04k3SU/4ADAVCHcALPpoqSXrIsAgEkg3ACz5zX5i4gBYCpZHJwJwM6upDvkt38n5oVbC0m+HQCMhZEbYLbcJ3/DPgCYWoQbYHZckvSsdREAMGlMSwHTZ1/SVvtxVdIVSZuSHrIsCgDSQrgBsu1E3UEl+Hq553pLfoDZlMR5JwBmGuEGSNeO/JGU3sCy1b5/NeQ5NtkDgDMg3ACja6kTRDad791gcqXnOtEuJQBAP8IN4DtSfzAJpnnc6Z/g3pakGyaVAgAGItxgWl1T9zRP1EhK8Ng2qRIAkDjCDfKgofCRFLcbqHfU5dCkUgCAOcIN0nag7iDiTvNEdQM1TSoFAOQS4QbjCmtTHtQNdN2mTADArCDcwLWr8JGUQd1AxyaVAgAQgXAzvfbUHUbccBLVDbRnUikAAAki3OTDscI7fMICSzAltGtSKQAAxgg3Nq4r3i617n0AABAD4WZ8TcU778cNKgcmlQIAMAMIN90OFe+8H3fRbcOkUgAAEGraw8224p33E7QvXzOpEgAAJCZP4eaG4p33446yHJlUCgAAzFiFm33FO+/H7QZqmVQKAAByJYlwc6L+YDJsl9qdBD4XAACgT1i42VG8837cwHKSRrEAAADDlCR9Sd1BZd+0IgAAgDH8H6MZBkjRU8eQAAAAAElFTkSuQmCC',
  af = './public/2-3.d758e089.png',
  of =
    'data:image/png;base64,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',
  lf = './public/2-4.eac311b4.png',
  ff =
    'data:image/png;base64,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';
const df = { class: 'committee' },
  cf = rs(
    '<div class="commit_title" id="anchor3" data-v-578d714a>\u5B9F\u884C\u59D4\u54E1\u4F1A\u3088\u308A</div><div class="commit_desc" data-v-578d714a> \u69D8\u3005\u306A\u5B66\u6821\u304C\u5165\u308A\u4E71\u308C\u308B\u300C\u6644\u8F2A\u5927\u796D\u300D\u306B\u304A\u3044\u3066\u7AF6\u6280\u904B\u55B6\u3092\u5186\u6ED1\u306B\u304B\u3064\u516C\u6B63\u306B\u9032\u3081\u308B\u305F\u3081\u3001\u904B\u55B6\u3092\u62C5\u5F53\u3059\u308B\u5B66\u6821\u3068\u306F\u307E\u305F\u5225\u306E\u300C\u5B9F\u884C\u59D4\u54E1\u4F1A\u300D\u304C\u8A2D\u3051\u3089\u308C\u3066\u304A\u308A\u307E\u3059\u3002\u3053\u3061\u3089\u306F\u69D8\u3005\u306A\u5B66\u6821\u306E\u751F\u5F92\u304B\u3089\u6210\u308A\u7ACB\u3063\u3066\u304A\u308A\u3001\u516C\u6B63\u3055\u3068\u5B89\u5168\u6027\u306E\u305F\u3081\u306B\u6D3B\u52D5\u3059\u308B\u7D44\u7E54\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 </div><div class="avtar_list" data-v-578d714a><div class="avatar_item" data-v-578d714a><div class="avatar_icon_wrapper" data-v-578d714a><img src="' +
      Ql +
      '" alt="" class="avatar_icon" data-v-578d714a><img class="avatar_pop" src="' +
      zl +
      '" alt="" data-v-578d714a></div></div><div class="avatar_item" data-v-578d714a><div class="avatar_icon_wrapper" data-v-578d714a><img src="' +
      Gl +
      '" alt="" class="avatar_icon" data-v-578d714a><img class="avatar_pop" src="' +
      Xl +
      '" alt="" data-v-578d714a></div></div><div class="avatar_item" data-v-578d714a><div class="avatar_icon_wrapper" data-v-578d714a><img src="' +
      Zl +
      '" alt="" class="avatar_icon" data-v-578d714a><img class="avatar_pop" src="' +
      Yl +
      '" alt="" data-v-578d714a></div></div><div class="avatar_item" data-v-578d714a><div class="avatar_icon_wrapper" data-v-578d714a><img src="' +
      $l +
      '" alt="" class="avatar_icon" data-v-578d714a><img class="avatar_pop" src="' +
      ef +
      '" alt="" data-v-578d714a></div></div></div>',
    3
  ),
  pf = { key: 0, src: tf, alt: '', class: 'left_line', id: 'left_line2' },
  hf = { key: 1, src: nf, alt: '', class: 'left_line', id: 'left_line2' },
  gf = { key: 2, src: rf, alt: '', class: 'right_line', id: 'right_line2' },
  vf = { key: 3, src: sf, alt: '', class: 'right_line', id: 'right_line2' },
  mf = { key: 4, src: uf, alt: '', class: 'left_line_co3', id: 'left_line3' },
  Af = { key: 5, src: af, alt: '', class: 'left_line_co3', id: 'left_line3' },
  yf = { key: 6, src: of, alt: '', class: 'right_line_co4', id: 'right_line3' },
  wf = { key: 7, src: lf, alt: '', class: 'right_line_co4', id: 'right_line3' },
  Sf = { key: 8, src: ff, alt: '', class: 'mid_line' },
  Cf = dt({
    __name: 'committee',
    setup(n) {
      let t = se(0),
        i = se(!1);
      return (
        (i = xt(() => t.value < 700)),
        Gt(() => {
          yn.on('width', s => {
            t.value = s.val;
          });
        }),
        yt(() => {
          lt(() => {
            new Xe().createInspector('left_line2', 'left_line_ani'),
              new Xe().createInspector('right_line2', 'right_line_ani'),
              new Xe().createInspector('left_line3', 'left_line_ani'),
              new Xe().createInspector('right_line3', 'right_line_ani');
          });
        }),
        (s, l) => (
          z(),
          Y('div', df, [
            cf,
            q(i) ? (z(), Y('img', pf)) : ce('v-if', !0),
            q(i) ? ce('v-if', !0) : (z(), Y('img', hf)),
            q(i) ? (z(), Y('img', gf)) : ce('v-if', !0),
            q(i) ? ce('v-if', !0) : (z(), Y('img', vf)),
            q(i) ? (z(), Y('img', mf)) : ce('v-if', !0),
            q(i) ? ce('v-if', !0) : (z(), Y('img', Af)),
            q(i) ? (z(), Y('img', yf)) : ce('v-if', !0),
            q(i) ? ce('v-if', !0) : (z(), Y('img', wf)),
            q(i) ? (z(), Y('img', Sf)) : ce('v-if', !0),
          ])
        )
      );
    },
  });
var Ef = ft(Cf, [['__scopeId', 'data-v-578d714a']]),
  As = './public/logoTop.99a1bea3.png',
  ys =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAyCAYAAAD1CDOyAAACWklEQVRogdXasY8MURwH8I850VAo1Pwi/AFCp9BQKzgVRyESiVJULhGhEp3QEAWRaPwDCqLQXOIq4R/QikjkGieK3cntnZ2dNzNvZte3mex7sy+/zxZv3m+yu5ZXbvoPsxd/sAHFeHAfzuMGDs+nrqQcwnv8xA88xtJuBN6Nr/AQV/Fi6AprUgJi/HkPruNbgTsTE+Xkc1weqrqE7ARM5lyBY1MmlvDMYkBmAeBXgc8Vk4sAqQPAkwJ38b3ihnlCQj1gFa8KfMUZiwUJ2zebaVnFPba22E8WBxIaANhCMIKcNl9IaAhgOwLWzQ8SWgD4F8F8IKElgOkIhoWEDgCqEQwDCR0BzEbQLyRkAFCPoB9IyAQgDUFeSMgIIB1BHkjIDKAZgm6Q0AOA5gjaQUJPANohaAYJPQJojyAdsqZHAN0QpEEOzPh+ZwDdEdRDqpIFQB4EzSHZAORDMIKsGL3UmpU3MgLIiwg8SljzrMz9SC5EqN9Gy2TvR3IgQjqgTFZIV0SoB2xUjGeDdEGEtCfxST13iG0RIf0o0XuH2AYRmp+FeoU0RYT2h7neIE0QoftptBdIKiLkO05nh6QgQv5+ICukDhH6a2hSIVfqFpqFCD13ZNIgT9VAqhChf0CZzpBpiDAcoEwnyE5EGB5QpjVkEhHmByjTClIiQj3gtn4BZRpDCuzHW/WA+zkqTEwjSIFrODJjwaEBZVIhxwscnLHQvABlUiAXC3ysuGHegDK1r4MKvMbLibHfuGUxAGWqIJvG/yjYxCWcwDKO4sGQFSZmHafwweiH/oILWPsLD1XdqsHQPSgAAAAASUVORK5CYII=',
  bf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAvCAYAAAC4/HdSAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVRoge3au0pcURSA4c8zg4VvYSkoxFIspjOF7aRNn8Yg+BgWauEriKBlrH2CJIONVS4PoYgYtdijLGLvOnDWBwPDVGv/xVz2rIVPn/dgggOsYWQ4/uEKu7gcYxkXWMqcKskIH/ANqx2mhhkiWsK0y56iTzqc4TZ7kGS3OO/wG9v4icfMiRI8aufexq/x/MVLrCcN1Bv1nhFUjKBiBBUjqBhBxQgqRlAxgooRVIygYgQVI6gYwTg8X8VK1iCJrrV70NcYh9hJGyffEb522DLsELTzf+ywkT1JT2x0+JM9RU/87XCKWfYkyX7gZIw7bOKL9ofKYuJQ7+0e33GMu5dPkxvsp43UE/WlK6gYQcUIKkZQMYKKEVSMoGIEFSOoGEHFCCpGUDGClxgT7afsA54G9HjQ7jImtAvhWopt56+l2Llaiv1fLcU2b5ZiZ4a5FDszX4p9BvSubl4ev3+JAAAAAElFTkSuQmCC',
  Bf = './public/title.ad084c75.png',
  jr =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAxCAYAAACLfLrrAAAGoElEQVRogdXa2W9cZxkG8J/tGWdpabM0SbORmECaNBSSFihiKQi6gAAJISFFQoILbrnk3+A/AASVEBTKEoGgELGqC6E0tJQkpVvi1EmK07TNHscbF885mrHjGc+MZxL3kY4mznznzPuc793fr++rX/+2RYIB3Iwt2I73YC0GMYYzeAWHcQIXMDHPMwdRwVSlNzJ3hCHsxgewFeuxAlWM4xx24U68gOeKz0a4Fe/DJEbrifZjefF5sVhwPfAuIfBZfB4fxLJCjr66ddOYKmR7Ab/Hr/ASzhdrqrgJK/FxfBSH8EQ90VvwoLyJf+C/uNJ9XjOwRgjuFbJbCmHnQp+o9y24p7h3J36DP4sab8MefAR3YYmo+9l6omvwObGP7fie5qqxUCzDp/ENecH9bdw7IKq+GbeJPU8Un3eL+l/BI3gSwyXR/uKmHfgw3osRjOLNhbBpgEHZlb34jPZI1qMiKnq3qHa1+L8x7MN3cAxLK8WPrBJytxUL18mbruLRYnE3sQ1fw6eE9EJQNVPdh0WdH5HNugerK6L7q8TL1d+wpxCiWtz4ku7Y7NLi2Q9idReeV49LeA0vC6dv4g6cK4lWxeMOzLpxJ76FTfgpDlgY2X4JHbtFa7qNcXGmX5LQtApH8Gppo32zPusF24Avi8sewhOyu51gUN7wDgtX2UbP3yweF56WMPRkRYx4DJc1zjQ24Cvi1Tbhj3hVHNV4m4IMya7O1p5uYFlxncVBiRz7FQnDlATcUc3Vcol4t9txH/6GP0mGcrFFQUpHt1bnnnY+vIXf4uf4S/G3ckfPSmCdT+CqBPUtsrPb8Lzkn0fFEVxqcv9U8Zu9UFuSJj6NX+IP6viUNnpZPNVRScFayYF3CtHz+JfY7kEx/jOi0uOSSk4KSaI1l8Xmu403C1kOmbVp9YRGRR3L7KIVDEqI+ITY3v04KTs7LFXGGbxdPH+5+IGLokmznd9CMSX+5ursL+qJnsdjkjRsEFtsFUtld7cVf78lREfwhhrRAby/WN8LVCSpXzbXF+TN9hXC7S8EfkDy307e+kpJvnfIDk6qefSKEO32blKrcKZnf1EprrUSfybwPzxc/Psh8ZKdCDWgNyGkGcbFGV4T8iqFMOsluV4vFctJvC4quMb1F7hTXBafcE30KFV3ABtFXb+A07Kjg6IK7xSiF3Cq+JyBipq6npI8cZ143lIFemFLvcI5HDdHLO8XR3EK/ywWlVguxBdTX6kZpiWOnjRHKlumYVclUe9WKXYjcF78yjVqy8x8c1Ry1+evg1DdxqQkJyPmSBaYqZYXpKTZKHF0Va+l6yKuSur5ogYV2OwKYkSyo1+Lm36nYEw08T8aEJ3L0RzBj8S475NEolELcrHgrOzmCbXiYQbmInoej0uy8CK+KO3D5Wqp4mLCuMh5VJMmQKPQcVkt3ByW/uu9Upqt6KaUXcBRaWAPN1vUqMrvl/x3pXjjI8UDW+0kXE8cktbOG80WNdrRQZlbPCR1ZlUmXb0qrzrFOdG4wxqElRKNiJbDnA0y+CE15TV13g3EGP4q/mTOJKEejYhexVPSF7pL4upis81j0gD7eyuLm3XiLomR/0Bvh02dYFR6VAdE0+bFfC3H1/AzeXOdNq17gWdkNnqi1Rvmq0ymJUb9WJL9vTJFrrpx8fQVmQXt10YB0koJNi1ebUzi6sfwIekH3aQWpMs5Ti9xCj/E77RZZbVaa05L3/cY/o1PSjdvpXQNt0sbppdET8tO/kRieltot6iekBHEcTl7sF5mnLdK1dMrXMIv8F154W2jk+5BWclXJc7eobcl3QmZpTwsTuiaVmYraIfooGRHK2U6fq905veIrXYb49Ix2Ifv41kdkqR1ouvE2+4WR7RL2qC3y5St25iQOc6jatP2jkkSoptF9crzC+PFQwdlp1aLig5J9bJLb3awxHGZiD1WXCPdeGhFnMidcjZno/Rw+4XMquK6We1QRC/mmpNSGh6Xds4+Cz9GMAMVKW9OSyI/VFzLu/UDLWBC7O9x2cnnRFWbViPtoiJp3hWJgW9LIrBBTZ17Mcc8Ky/3tMTEp6QSOaxHR/PKw0enpNV5QGLiVqladktisFXUt2/W1QrqJ1zlyOCIhIqDktKNSgtnzn5PN1B63clCiAsynnhZKpYDYrebxMOW5w9WCPElakdF+wtBJ0TtxqSmLXevHHu8Lt304eJq57BHx2hWeI8Uwj0ru7xezi68WwivEFteKmRLolfFFC5KB+C02gT8pJjHeLHuep0g9X8UTKPd8OWZogAAAABJRU5ErkJggg==',
  Wr =
    'data:image/png;base64,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',
  kf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhQAAABjCAYAAADDwpm1AAAIeklEQVR4nO3dbWslZx3H8W+yudndJLvdZnfrG/Ad+BoEnyvSaqtUVBS8wRsEsYh4gyL0gSiKPqiCtVAURCxUUEQKIhXvEBFEoSpSdpNs0012N5tNNj6YTPfKnJk5c5Jz8p858/1ASM6cm/weLJsfM/O/rpl3rK8jSZI0oovAVeAy8Ke54DCSJCneeWAVuHL4dfnw8eXDryvJz/lz84fvfR54p4VCkqTpMs/RMlAsBKvJsSuHj88f83e9AnwQwEIhSVK7peUg/flq8ng1OXbxlHLtA+8CNsFCIUnSaVom++P/CINlID1jkBaIMyFJh/sC8Nv8gYVCkqTjWaT6jEFeBor3JJwNSTp+vwG+kh6wUEiSBLOUX1q4Wni8mhxbCUka7wbwONkljzdYKCRJ0+gCg5cQ6qYYVoGZkKTd8z7gv8WDFgpJUtudo/qMQdUUw0JI0un3HeCnZU9YKCRJp2mOwTMDVxm81JDek7AUklRFfwM+UfWkhUKSdBKXGLyEUDfFcCkmpk7oDvDo4fdSFgpJUm6J6vsMiiUhP+bfkX74FPDXuhf4D0GSptMC5ZMJdYsjnQtJqrb7GfDtYS+yUEhS+80wePmgan+FvCRcCEmqafM/4EngYNgLLRSSdPpWaLa/Qnp8NiSp+myfbL2JjSYvtlBI0smcpdn+CunjxZCk0mi+Bvy66YstFJL0wBma76+Ql4TlkKTSZP0O+Pwob7BQSJpmF2m2v0L6Xeq718lGRPdGeZOFQlJXnKfZ/grp8fmQpFK3fQh4ZdQ3WSgkRZin2f4K6U2L50OSSv3yDPDccd5ooZA0DmUjjXVTDA/FxJRU4x/AR4/7ZguFpKJlmi+ElH8/E5JU0rjskt03sX3cD7BQSNNtkWb7K6RTDGdDkkqK9Fngjyf5AAuF1B2zlF9aqJtiWAlJKqlLXgSePumHWCikOBeoXzq5bKRxJiSppGl1DXgvDZbWHsZCIY3HOeqXTi6bYlgISSpJmQPgPWSl4sQsFNKgOYYvnVycYlgKSSpJx/c08ItxfZiFQn1wifqlk4tF4eGYmJJ0av5AdiPm2Fgo1DVL1C+dXDbF4L9zSXpgG3iMbFR0bPyPVpEWGL50cnGK4VxIUkmaHh8hW8RqrCwUGqeyMlA3xXAhJqYk9dZzwPcn8cEWClVZptn+CulzsyFJJUlFu8D64dcGcB1YAz43qV9ooeiHRZrtr5DeuLgYklSSVHTA0XKQf79WeLxOVhrWgK3TDmmh6J5Zmu+vkN+TsBySVJJUZovsjEGxJKwfHt8oee7EC09NmoUi3gWa7a+QPidJaocdHvzxX0t+TsvA9cLjsU5XtIWFYrzO0Wx/hbQczIcklSQV7TNYBvJLCOmlhfzYOnArJGkLWSiqzdFsf4V01PF8SFJJUplNjl5CqDpjkH/diIk5HfpUKB6m2f4K+eWGh2JiSpJK3Kb8jEE6xVA8u7AXkrSnuloolmi2v0L63JmQpJKkonsc/eOfXkKommK4E5JUjbWhUCzQbH+F9J6EsyFJJUllykYa66YYbsbE1CSNu1DMMFgGqvZXyC83rIw5gyTp+LYpP2NQN8VwPySpWmVYoVih2RmD9LmZSYWVJI3kLkcLQFoIqqYY7oYkVefVFYpnyXYjkyTFu0/5ZEJZScgvN2yHJFUvVRWKJ7BMSNIk3aTZaonpcam1ygrFm4FvnXYQSeqwOzTbXyEtB/dCkkoTUiwUC8CPcO8HSf21R7P9FdIbF2+HJJVapFgovgy8JSKIJE3IDZrtr5CPOm7GxJS6LS0UbwU+GRVEkhq4RbP9FdKzCfshSaWeyQvFI8APcORT0unZpdn+CukUw05IUklDzZGViGeANwVnkdRdBwyWgWGrJW6FJJU0EXPAx4G3RQeR1Dk7wNuBl8lKwkFsHEmR5oCvRoeQ1EkfA16IDiGpHWbJRkUlaRQ/Ab4bHUJSe8xGB5DUOf8B3h8dQlK7WCgkjWIfeDfwWnQQSe1ioZA0ii8BL0WHkNQ+FgpJTb0EfDE6hKR2slBIauI14HFcdVJSBQuFpCY+APw7OoSk9rJQSBrme8CPo0NIajcLhaQ6fydbTVeSalkoJFW5CzwK3I4OIqn9LBSSqnwa+Et0CEndYKGQVObnwDejQ0jqDguFpKJXgSdx91BJI7BQSErdJ1tvYi06iKRusVBISn0d+FV0CEndY6GQlHsZeCo6hKRuslBIArgJPAbciw4iqZssFJIAPgz8KzqEpO6yUEj6IfBsdAhJ3WahkPrtn2RnJyTpROaiA0gKs0t238TWST/o+dXVk6eR1GmeoZD66yng99EhJE0HC4XUT78kW3NCksbCQiH1z3XgCVxaW9IYWSikfjkg26fj1eggkqaLhULql28AL0SHkDR9LBRSf/wZ+Ex0CEnTybFRqZv2gXVgI/l+/fDn9Pj64fENYDskqaResFBI7bBJtmV4sQysJT8XC4QktYaFQhq/25QXgo3k2BpHy4GbcknqNAuFVO8e1ZcQ0uPXk8e3Q5JKUiALhfqmeNmg7IxBek/C6zExJalbLBTqsm0GzxjkZSAvCcUCsR+SVJKmnIVCbXGX6ksIVVMMOyFJJUkDLBSahPsM3ncw7AZFRxolqcMsFGriJsPXOCgelyT1iIWif+7w4I//NZrdoOhIoySploWi2/aoP2NQdoOiI42SpLGzULTLDcpXRay6QXEzJqYkSUdZKCbnFtWrIpaNNK7jSKMkqaMsFM3sUn/GoGyKwZFGSVJv9LFQHDBYBobt1LgVklSSpI6YhkKxRfWqiGVTDOtkpUKSJI1J2wrFDs3OGKSPd0OSSpKkN0yyUOwzWAbSewzK7km4NcE8kiRpQkYpFJvUL51cnGK4MdakkiSpteaAFxm8z6BsimEvKKMkSWq5/wPWUn6Vk6b1kgAAAABJRU5ErkJggg==',
  Tf = './public/1-1.6e2e4eff.png',
  xf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYoAAABSCAYAAABKZJPmAAAGY0lEQVR4nO3dzWsdVQCG8SfNZ9OkhuajFhXFuqiCqKAuFFRQN+pCBN1UVyooiK4UdKPYjSJCu7DQihVqq/5rtim139+Ji8mYydyZO5ObmTlz7zw/CDczKTcvXZx3MvfMOWPr6+tIXbF2+2joCNIwmQKWJkKnkCQ1YgxYAhZTryup4/hrGdgLYFFI0nCaJxrMl9k6yC+yOfini2HXIL/IopCk8GbYHMzjwT89yO9PHU83Fc6ikKRqjdM7yGdd4ce3fRaBuSBJS7IoJKm/BXqv8JcS57Ju8YwUi0JSl8ySPdAvJs4l7/kvApNBkraIRSFpWE2Sfysnb1bPbJCkQ86ikNQWWVM3+83quS9MzO6xKCTVYY7eK/yiWT3jQZKqkEUhqcg0/R/QyprVMxMkqWphUUjdsoveQT7rCj/5Ye98kKRqDYtCGm576b8EQ9bUzbEgSTW0LAqpPXZT/gGt+PxUkKTqFItCqscE/Qf59G2fRWBPkKRSAYtCqsaTwAk2/xpYCBtHqo5FIe3cLPA38EToIFIdBlpyVtIWP2NJaIRZFNLOvAN8EjqEVCeLQhrcQ8CvoUNIdbMopMGMA2eAfaGDSHWbcLN5aSDfAC+FDiE1wb8opO17Efg2dAipKRaFtD0LwFlc6VQdYlFI23MSeDh0CKlJFoVU3kfAu6FDSE2zKKRyDgHHQoeQQrAopGLTwF+437I6yqKQiv0IPB06hBSKRSH19ybweegQUkgWhZTvAHAKd4RTx1kUUrYx4DTR3hJSp1kUUravgNdCh5DawKKQej0HfB86hNQWFoW01TzRVNip0EGktrAopK2OAwdDh5DaxKKQNh0G3g8dQmqbidABpAZNAovA0sbr8sbXEvAoUVFISrEoNMySg/5S4ms58f1i4txCmJjScLMo1BZzRIP6Cr2D/NLG+XQxuCeE1ACLQnWYZuugvp/eQT6+7RMfzwRJKqmQRaEiY/Re4RcN/vNBkkqqhUXRPfOUu72T/JlrHUkdZlEMtxmyP8BNDvIrqWMfJJO0LRZFe4yTPVMneR8/PaVzT5CkkjrFoqjPAtkzddJX+PHXvjAxJak/i6KcWbKv8OMBP+uev/+3kkZCFwezSbYO6slbOXmzenYHSSpJLTAKRZE1dbPfrJ69YWJK0nBqW1HMkX2F329WjwsbSlKN6i6KByhefyd5z3+65jySpHLWgQvAap1F8TFwssb3lySVdwVYBc5vvK6yUQQb584njuPXNajvL4rHgaM1vbckdd1NNgfzVeAcvYP8udTxrUF/WR1FMU20leRsDe8tSaPmHr2DfPoKP/5ZPPhfbTJgHUXxE/BUDe8rScPgEluv8ONBPh78k4UQv7Za1UXxFvBZxe8pSaFcJ3+Qz7vffydI0hpVWRQHgFO40qikdrrD1kG+zAe714MkbZmqimIX8AfRVFdJakL61k7RB7uXwsQcflUVxZfAqxW9l6TuuUo0qP9D+Q927wVJ2kFVFMXzwJEK3kfSaLhF/hV+3ge7N4MkVSk7LYq9wJ9EC+1JGj1rZN/iSc/RT07dvBIkqWqz06I4DhysIoikRlwm+yncvFk9F4iWclCH7aQoPgAOVxVE0rbdIP8KP29Wz+0gSTXUBi2Kx4Bfqgwiddxd8p/CzZvVcy1IUnXOIEUxRbREx3zFWaRRcpHsp3DzZvVcDBNTKjZIURwBnq06iNRi1yh3hZ/82d0gSaUabLcoXid6ZkIaVrfJX4Ihb1bPjSBJpZbYTlGsAKdxiQ61x/8bq1C8tn587nKQpNIQK1sUY8DvwP01ZpHijVXKrK0ff78WJKnUIWWL4gvgjTqDaOQkN1YpWls/Ph54YxVJ9SlTFM8AP9QdRK12j/yncPNm9TS6sYqk+hQVxR6iJTqmG8ii5vxL8dr66QKQ1FFFRXEMONREEA3sOuXX1o/Pj9zGKpLq068o3gM+bCqIgGgAL7u2fnzsxiqSapVXFI8AJxrMMaqy9sbt98GuG6tIap2sohgHzgILDWdpu6uUX1vfjVUkjYysovgOeKHhHE27Rfm19d1YRVKnpYviZeDrEEF2YI3eQT5vbf34nBurSFJJyaLYB5whuvUU0mXKr63vxiqSVLNkUfwGPFjx+9+g/Nr6bqwiSS0UF8WnwNsF//Yu5dfWj2f1uLGKJA25CaLZTa8QLfrXb1aPG6tIUgf9B7SU17KS76pRAAAAAElFTkSuQmCC',
  Ff =
    'data:image/png;base64,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',
  Df = './public/new.a9967033.png',
  Lf = './public/TOP.a4c373fe.png',
  Of = './public/sumire.b054af4c.gif',
  If =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  Oi = { exports: {} },
  ws = function (t, i) {
    return function () {
      for (var l = new Array(arguments.length), f = 0; f < l.length; f++)
        l[f] = arguments[f];
      return t.apply(i, l);
    };
  },
  Pf = ws,
  Ii = Object.prototype.toString,
  Pi = (function (n) {
    return function (t) {
      var i = Ii.call(t);
      return n[i] || (n[i] = i.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function Ut(n) {
  return (
    (n = n.toLowerCase()),
    function (i) {
      return Pi(i) === n;
    }
  );
}
function Ni(n) {
  return Array.isArray(n);
}
function Wn(n) {
  return typeof n == 'undefined';
}
function Nf(n) {
  return (
    n !== null &&
    !Wn(n) &&
    n.constructor !== null &&
    !Wn(n.constructor) &&
    typeof n.constructor.isBuffer == 'function' &&
    n.constructor.isBuffer(n)
  );
}
var Ss = Ut('ArrayBuffer');
function Jf(n) {
  var t;
  return (
    typeof ArrayBuffer != 'undefined' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(n))
      : (t = n && n.buffer && Ss(n.buffer)),
    t
  );
}
function Rf(n) {
  return typeof n == 'string';
}
function _f(n) {
  return typeof n == 'number';
}
function Cs(n) {
  return n !== null && typeof n == 'object';
}
function Un(n) {
  if (Pi(n) !== 'object') return !1;
  var t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
var Uf = Ut('Date'),
  qf = Ut('File'),
  Mf = Ut('Blob'),
  Vf = Ut('FileList');
function Ji(n) {
  return Ii.call(n) === '[object Function]';
}
function jf(n) {
  return Cs(n) && Ji(n.pipe);
}
function Wf(n) {
  var t = '[object FormData]';
  return (
    n &&
    ((typeof FormData == 'function' && n instanceof FormData) ||
      Ii.call(n) === t ||
      (Ji(n.toString) && n.toString() === t))
  );
}
var Kf = Ut('URLSearchParams');
function Hf(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, '');
}
function Qf() {
  return typeof navigator != 'undefined' &&
    (navigator.product === 'ReactNative' ||
      navigator.product === 'NativeScript' ||
      navigator.product === 'NS')
    ? !1
    : typeof window != 'undefined' && typeof document != 'undefined';
}
function Ri(n, t) {
  if (!(n === null || typeof n == 'undefined'))
    if ((typeof n != 'object' && (n = [n]), Ni(n)))
      for (var i = 0, s = n.length; i < s; i++) t.call(null, n[i], i, n);
    else
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && t.call(null, n[l], l, n);
}
function xi() {
  var n = {};
  function t(l, f) {
    Un(n[f]) && Un(l)
      ? (n[f] = xi(n[f], l))
      : Un(l)
      ? (n[f] = xi({}, l))
      : Ni(l)
      ? (n[f] = l.slice())
      : (n[f] = l);
  }
  for (var i = 0, s = arguments.length; i < s; i++) Ri(arguments[i], t);
  return n;
}
function zf(n, t, i) {
  return (
    Ri(t, function (l, f) {
      i && typeof l == 'function' ? (n[f] = Pf(l, i)) : (n[f] = l);
    }),
    n
  );
}
function Gf(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function Xf(n, t, i, s) {
  (n.prototype = Object.create(t.prototype, s)),
    (n.prototype.constructor = n),
    i && Object.assign(n.prototype, i);
}
function Zf(n, t, i) {
  var s,
    l,
    f,
    c = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(n), l = s.length; l-- > 0; )
      (f = s[l]), c[f] || ((t[f] = n[f]), (c[f] = !0));
    n = Object.getPrototypeOf(n);
  } while (n && (!i || i(n, t)) && n !== Object.prototype);
  return t;
}
function Yf(n, t, i) {
  (n = String(n)),
    (i === void 0 || i > n.length) && (i = n.length),
    (i -= t.length);
  var s = n.indexOf(t, i);
  return s !== -1 && s === i;
}
function $f(n) {
  if (!n) return null;
  var t = n.length;
  if (Wn(t)) return null;
  for (var i = new Array(t); t-- > 0; ) i[t] = n[t];
  return i;
}
var ed = (function (n) {
    return function (t) {
      return n && t instanceof n;
    };
  })(typeof Uint8Array != 'undefined' && Object.getPrototypeOf(Uint8Array)),
  Oe = {
    isArray: Ni,
    isArrayBuffer: Ss,
    isBuffer: Nf,
    isFormData: Wf,
    isArrayBufferView: Jf,
    isString: Rf,
    isNumber: _f,
    isObject: Cs,
    isPlainObject: Un,
    isUndefined: Wn,
    isDate: Uf,
    isFile: qf,
    isBlob: Mf,
    isFunction: Ji,
    isStream: jf,
    isURLSearchParams: Kf,
    isStandardBrowserEnv: Qf,
    forEach: Ri,
    merge: xi,
    extend: zf,
    trim: Hf,
    stripBOM: Gf,
    inherits: Xf,
    toFlatObject: Zf,
    kindOf: Pi,
    kindOfTest: Ut,
    endsWith: Yf,
    toArray: $f,
    isTypedArray: ed,
    isFileList: Vf,
  },
  Qt = Oe;
function Kr(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
var Es = function (t, i, s) {
    if (!i) return t;
    var l;
    if (s) l = s(i);
    else if (Qt.isURLSearchParams(i)) l = i.toString();
    else {
      var f = [];
      Qt.forEach(i, function (v, y) {
        v === null ||
          typeof v == 'undefined' ||
          (Qt.isArray(v) ? (y = y + '[]') : (v = [v]),
          Qt.forEach(v, function (C) {
            Qt.isDate(C)
              ? (C = C.toISOString())
              : Qt.isObject(C) && (C = JSON.stringify(C)),
              f.push(Kr(y) + '=' + Kr(C));
          }));
      }),
        (l = f.join('&'));
    }
    if (l) {
      var c = t.indexOf('#');
      c !== -1 && (t = t.slice(0, c)),
        (t += (t.indexOf('?') === -1 ? '?' : '&') + l);
    }
    return t;
  },
  td = Oe;
function Kn() {
  this.handlers = [];
}
Kn.prototype.use = function (t, i, s) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: i,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Kn.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Kn.prototype.forEach = function (t) {
  td.forEach(this.handlers, function (s) {
    s !== null && t(s);
  });
};
var nd = Kn,
  id = Oe,
  rd = function (t, i) {
    id.forEach(t, function (l, f) {
      f !== i &&
        f.toUpperCase() === i.toUpperCase() &&
        ((t[i] = l), delete t[f]);
    });
  },
  bs = Oe;
function Xt(n, t, i, s, l) {
  Error.call(this),
    (this.message = n),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    i && (this.config = i),
    s && (this.request = s),
    l && (this.response = l);
}
bs.inherits(Xt, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var Bs = Xt.prototype,
  ks = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
].forEach(function (n) {
  ks[n] = { value: n };
});
Object.defineProperties(Xt, ks);
Object.defineProperty(Bs, 'isAxiosError', { value: !0 });
Xt.from = function (n, t, i, s, l, f) {
  var c = Object.create(Bs);
  return (
    bs.toFlatObject(n, c, function (v) {
      return v !== Error.prototype;
    }),
    Xt.call(c, n.message, t, i, s, l),
    (c.name = n.name),
    f && Object.assign(c, f),
    c
  );
};
var nn = Xt,
  Ts = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  st = Oe;
function sd(n, t) {
  t = t || new FormData();
  var i = [];
  function s(f) {
    return f === null
      ? ''
      : st.isDate(f)
      ? f.toISOString()
      : st.isArrayBuffer(f) || st.isTypedArray(f)
      ? typeof Blob == 'function'
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function l(f, c) {
    if (st.isPlainObject(f) || st.isArray(f)) {
      if (i.indexOf(f) !== -1)
        throw Error('Circular reference detected in ' + c);
      i.push(f),
        st.forEach(f, function (v, y) {
          if (!st.isUndefined(v)) {
            var A = c ? c + '.' + y : y,
              C;
            if (v && !c && typeof v == 'object') {
              if (st.endsWith(y, '{}')) v = JSON.stringify(v);
              else if (st.endsWith(y, '[]') && (C = st.toArray(v))) {
                C.forEach(function (T) {
                  !st.isUndefined(T) && t.append(A, s(T));
                });
                return;
              }
            }
            l(v, A);
          }
        }),
        i.pop();
    } else t.append(c, s(f));
  }
  return l(n), t;
}
var xs = sd,
  Ei = nn,
  ud = function (t, i, s) {
    var l = s.config.validateStatus;
    !s.status || !l || l(s.status)
      ? t(s)
      : i(
          new Ei(
            'Request failed with status code ' + s.status,
            [Ei.ERR_BAD_REQUEST, Ei.ERR_BAD_RESPONSE][
              Math.floor(s.status / 100) - 4
            ],
            s.config,
            s.request,
            s
          )
        );
  },
  Rn = Oe,
  ad = Rn.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (i, s, l, f, c, m) {
            var v = [];
            v.push(i + '=' + encodeURIComponent(s)),
              Rn.isNumber(l) && v.push('expires=' + new Date(l).toGMTString()),
              Rn.isString(f) && v.push('path=' + f),
              Rn.isString(c) && v.push('domain=' + c),
              m === !0 && v.push('secure'),
              (document.cookie = v.join('; '));
          },
          read: function (i) {
            var s = document.cookie.match(
              new RegExp('(^|;\\s*)(' + i + ')=([^;]*)')
            );
            return s ? decodeURIComponent(s[3]) : null;
          },
          remove: function (i) {
            this.write(i, '', Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })(),
  od = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  ld = function (t, i) {
    return i ? t.replace(/\/+$/, '') + '/' + i.replace(/^\/+/, '') : t;
  },
  fd = od,
  dd = ld,
  Fs = function (t, i) {
    return t && !fd(i) ? dd(t, i) : i;
  },
  bi = Oe,
  cd = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ],
  pd = function (t) {
    var i = {},
      s,
      l,
      f;
    return (
      t &&
        bi.forEach(
          t.split(`
`),
          function (m) {
            if (
              ((f = m.indexOf(':')),
              (s = bi.trim(m.substr(0, f)).toLowerCase()),
              (l = bi.trim(m.substr(f + 1))),
              s)
            ) {
              if (i[s] && cd.indexOf(s) >= 0) return;
              s === 'set-cookie'
                ? (i[s] = (i[s] ? i[s] : []).concat([l]))
                : (i[s] = i[s] ? i[s] + ', ' + l : l);
            }
          }
        ),
      i
    );
  },
  Hr = Oe,
  hd = Hr.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          i = document.createElement('a'),
          s;
        function l(f) {
          var c = f;
          return (
            t && (i.setAttribute('href', c), (c = i.href)),
            i.setAttribute('href', c),
            {
              href: i.href,
              protocol: i.protocol ? i.protocol.replace(/:$/, '') : '',
              host: i.host,
              search: i.search ? i.search.replace(/^\?/, '') : '',
              hash: i.hash ? i.hash.replace(/^#/, '') : '',
              hostname: i.hostname,
              port: i.port,
              pathname:
                i.pathname.charAt(0) === '/' ? i.pathname : '/' + i.pathname,
            }
          );
        }
        return (
          (s = l(window.location.href)),
          function (c) {
            var m = Hr.isString(c) ? l(c) : c;
            return m.protocol === s.protocol && m.host === s.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Fi = nn,
  gd = Oe;
function Ds(n) {
  Fi.call(this, n == null ? 'canceled' : n, Fi.ERR_CANCELED),
    (this.name = 'CanceledError');
}
gd.inherits(Ds, Fi, { __CANCEL__: !0 });
var Hn = Ds,
  vd = function (t) {
    var i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (i && i[1]) || '';
  },
  vn = Oe,
  md = ud,
  Ad = ad,
  yd = Es,
  wd = Fs,
  Sd = pd,
  Cd = hd,
  Ed = Ts,
  mt = nn,
  bd = Hn,
  Bd = vd,
  Qr = function (t) {
    return new Promise(function (s, l) {
      var f = t.data,
        c = t.headers,
        m = t.responseType,
        v;
      function y() {
        t.cancelToken && t.cancelToken.unsubscribe(v),
          t.signal && t.signal.removeEventListener('abort', v);
      }
      vn.isFormData(f) && vn.isStandardBrowserEnv() && delete c['Content-Type'];
      var A = new XMLHttpRequest();
      if (t.auth) {
        var C = t.auth.username || '',
          T = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : '';
        c.Authorization = 'Basic ' + btoa(C + ':' + T);
      }
      var P = wd(t.baseURL, t.url);
      A.open(t.method.toUpperCase(), yd(P, t.params, t.paramsSerializer), !0),
        (A.timeout = t.timeout);
      function I() {
        if (!!A) {
          var N =
              'getAllResponseHeaders' in A
                ? Sd(A.getAllResponseHeaders())
                : null,
            j =
              !m || m === 'text' || m === 'json' ? A.responseText : A.response,
            K = {
              data: j,
              status: A.status,
              statusText: A.statusText,
              headers: N,
              config: t,
              request: A,
            };
          md(
            function (Ae) {
              s(Ae), y();
            },
            function (Ae) {
              l(Ae), y();
            },
            K
          ),
            (A = null);
        }
      }
      if (
        ('onloadend' in A
          ? (A.onloadend = I)
          : (A.onreadystatechange = function () {
              !A ||
                A.readyState !== 4 ||
                (A.status === 0 &&
                  !(A.responseURL && A.responseURL.indexOf('file:') === 0)) ||
                setTimeout(I);
            }),
        (A.onabort = function () {
          !A ||
            (l(new mt('Request aborted', mt.ECONNABORTED, t, A)), (A = null));
        }),
        (A.onerror = function () {
          l(new mt('Network Error', mt.ERR_NETWORK, t, A, A)), (A = null);
        }),
        (A.ontimeout = function () {
          var j = t.timeout
              ? 'timeout of ' + t.timeout + 'ms exceeded'
              : 'timeout exceeded',
            K = t.transitional || Ed;
          t.timeoutErrorMessage && (j = t.timeoutErrorMessage),
            l(
              new mt(
                j,
                K.clarifyTimeoutError ? mt.ETIMEDOUT : mt.ECONNABORTED,
                t,
                A
              )
            ),
            (A = null);
        }),
        vn.isStandardBrowserEnv())
      ) {
        var _ =
          (t.withCredentials || Cd(P)) && t.xsrfCookieName
            ? Ad.read(t.xsrfCookieName)
            : void 0;
        _ && (c[t.xsrfHeaderName] = _);
      }
      'setRequestHeader' in A &&
        vn.forEach(c, function (j, K) {
          typeof f == 'undefined' && K.toLowerCase() === 'content-type'
            ? delete c[K]
            : A.setRequestHeader(K, j);
        }),
        vn.isUndefined(t.withCredentials) ||
          (A.withCredentials = !!t.withCredentials),
        m && m !== 'json' && (A.responseType = t.responseType),
        typeof t.onDownloadProgress == 'function' &&
          A.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress == 'function' &&
          A.upload &&
          A.upload.addEventListener('progress', t.onUploadProgress),
        (t.cancelToken || t.signal) &&
          ((v = function (N) {
            !A ||
              (l(!N || (N && N.type) ? new bd() : N), A.abort(), (A = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(v),
          t.signal &&
            (t.signal.aborted ? v() : t.signal.addEventListener('abort', v))),
        f || (f = null);
      var M = Bd(P);
      if (M && ['http', 'https', 'file'].indexOf(M) === -1) {
        l(new mt('Unsupported protocol ' + M + ':', mt.ERR_BAD_REQUEST, t));
        return;
      }
      A.send(f);
    });
  },
  kd = null,
  Fe = Oe,
  zr = rd,
  Gr = nn,
  Td = Ts,
  xd = xs,
  Fd = { 'Content-Type': 'application/x-www-form-urlencoded' };
function Xr(n, t) {
  !Fe.isUndefined(n) &&
    Fe.isUndefined(n['Content-Type']) &&
    (n['Content-Type'] = t);
}
function Dd() {
  var n;
  return (
    (typeof XMLHttpRequest != 'undefined' ||
      (typeof process != 'undefined' &&
        Object.prototype.toString.call(process) === '[object process]')) &&
      (n = Qr),
    n
  );
}
function Ld(n, t, i) {
  if (Fe.isString(n))
    try {
      return (t || JSON.parse)(n), Fe.trim(n);
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (i || JSON.stringify)(n);
}
var Qn = {
  transitional: Td,
  adapter: Dd(),
  transformRequest: [
    function (t, i) {
      if (
        (zr(i, 'Accept'),
        zr(i, 'Content-Type'),
        Fe.isFormData(t) ||
          Fe.isArrayBuffer(t) ||
          Fe.isBuffer(t) ||
          Fe.isStream(t) ||
          Fe.isFile(t) ||
          Fe.isBlob(t))
      )
        return t;
      if (Fe.isArrayBufferView(t)) return t.buffer;
      if (Fe.isURLSearchParams(t))
        return (
          Xr(i, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString()
        );
      var s = Fe.isObject(t),
        l = i && i['Content-Type'],
        f;
      if ((f = Fe.isFileList(t)) || (s && l === 'multipart/form-data')) {
        var c = this.env && this.env.FormData;
        return xd(f ? { 'files[]': t } : t, c && new c());
      } else if (s || l === 'application/json')
        return Xr(i, 'application/json'), Ld(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var i = this.transitional || Qn.transitional,
        s = i && i.silentJSONParsing,
        l = i && i.forcedJSONParsing,
        f = !s && this.responseType === 'json';
      if (f || (l && Fe.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (c) {
          if (f)
            throw c.name === 'SyntaxError'
              ? Gr.from(c, Gr.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: kd },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
Fe.forEach(['delete', 'get', 'head'], function (t) {
  Qn.headers[t] = {};
});
Fe.forEach(['post', 'put', 'patch'], function (t) {
  Qn.headers[t] = Fe.merge(Fd);
});
var _i = Qn,
  Od = Oe,
  Id = _i,
  Pd = function (t, i, s) {
    var l = this || Id;
    return (
      Od.forEach(s, function (c) {
        t = c.call(l, t, i);
      }),
      t
    );
  },
  Ls = function (t) {
    return !!(t && t.__CANCEL__);
  },
  Zr = Oe,
  Bi = Pd,
  Nd = Ls,
  Jd = _i,
  Rd = Hn;
function ki(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Rd();
}
var _d = function (t) {
    ki(t),
      (t.headers = t.headers || {}),
      (t.data = Bi.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Zr.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      Zr.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (l) {
          delete t.headers[l];
        }
      );
    var i = t.adapter || Jd.adapter;
    return i(t).then(
      function (l) {
        return (
          ki(t),
          (l.data = Bi.call(t, l.data, l.headers, t.transformResponse)),
          l
        );
      },
      function (l) {
        return (
          Nd(l) ||
            (ki(t),
            l &&
              l.response &&
              (l.response.data = Bi.call(
                t,
                l.response.data,
                l.response.headers,
                t.transformResponse
              ))),
          Promise.reject(l)
        );
      }
    );
  },
  ze = Oe,
  Os = function (t, i) {
    i = i || {};
    var s = {};
    function l(A, C) {
      return ze.isPlainObject(A) && ze.isPlainObject(C)
        ? ze.merge(A, C)
        : ze.isPlainObject(C)
        ? ze.merge({}, C)
        : ze.isArray(C)
        ? C.slice()
        : C;
    }
    function f(A) {
      if (ze.isUndefined(i[A])) {
        if (!ze.isUndefined(t[A])) return l(void 0, t[A]);
      } else return l(t[A], i[A]);
    }
    function c(A) {
      if (!ze.isUndefined(i[A])) return l(void 0, i[A]);
    }
    function m(A) {
      if (ze.isUndefined(i[A])) {
        if (!ze.isUndefined(t[A])) return l(void 0, t[A]);
      } else return l(void 0, i[A]);
    }
    function v(A) {
      if (A in i) return l(t[A], i[A]);
      if (A in t) return l(void 0, t[A]);
    }
    var y = {
      url: c,
      method: c,
      data: c,
      baseURL: m,
      transformRequest: m,
      transformResponse: m,
      paramsSerializer: m,
      timeout: m,
      timeoutMessage: m,
      withCredentials: m,
      adapter: m,
      responseType: m,
      xsrfCookieName: m,
      xsrfHeaderName: m,
      onUploadProgress: m,
      onDownloadProgress: m,
      decompress: m,
      maxContentLength: m,
      maxBodyLength: m,
      beforeRedirect: m,
      transport: m,
      httpAgent: m,
      httpsAgent: m,
      cancelToken: m,
      socketPath: m,
      responseEncoding: m,
      validateStatus: v,
    };
    return (
      ze.forEach(Object.keys(t).concat(Object.keys(i)), function (C) {
        var T = y[C] || f,
          P = T(C);
        (ze.isUndefined(P) && T !== v) || (s[C] = P);
      }),
      s
    );
  },
  Is = { version: '0.27.2' },
  Ud = Is.version,
  Et = nn,
  Ui = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  function (n, t) {
    Ui[n] = function (s) {
      return typeof s === n || 'a' + (t < 1 ? 'n ' : ' ') + n;
    };
  }
);
var Yr = {};
Ui.transitional = function (t, i, s) {
  function l(f, c) {
    return (
      '[Axios v' +
      Ud +
      "] Transitional option '" +
      f +
      "'" +
      c +
      (s ? '. ' + s : '')
    );
  }
  return function (f, c, m) {
    if (t === !1)
      throw new Et(
        l(c, ' has been removed' + (i ? ' in ' + i : '')),
        Et.ERR_DEPRECATED
      );
    return (
      i &&
        !Yr[c] &&
        ((Yr[c] = !0),
        console.warn(
          l(
            c,
            ' has been deprecated since v' +
              i +
              ' and will be removed in the near future'
          )
        )),
      t ? t(f, c, m) : !0
    );
  };
};
function qd(n, t, i) {
  if (typeof n != 'object')
    throw new Et('options must be an object', Et.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(n), l = s.length; l-- > 0; ) {
    var f = s[l],
      c = t[f];
    if (c) {
      var m = n[f],
        v = m === void 0 || c(m, f, n);
      if (v !== !0)
        throw new Et('option ' + f + ' must be ' + v, Et.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new Et('Unknown option ' + f, Et.ERR_BAD_OPTION);
  }
}
var Md = { assertOptions: qd, validators: Ui },
  Ps = Oe,
  Vd = Es,
  $r = nd,
  es = _d,
  zn = Os,
  jd = Fs,
  Ns = Md,
  zt = Ns.validators;
function Zt(n) {
  (this.defaults = n),
    (this.interceptors = { request: new $r(), response: new $r() });
}
Zt.prototype.request = function (t, i) {
  typeof t == 'string' ? ((i = i || {}), (i.url = t)) : (i = t || {}),
    (i = zn(this.defaults, i)),
    i.method
      ? (i.method = i.method.toLowerCase())
      : this.defaults.method
      ? (i.method = this.defaults.method.toLowerCase())
      : (i.method = 'get');
  var s = i.transitional;
  s !== void 0 &&
    Ns.assertOptions(
      s,
      {
        silentJSONParsing: zt.transitional(zt.boolean),
        forcedJSONParsing: zt.transitional(zt.boolean),
        clarifyTimeoutError: zt.transitional(zt.boolean),
      },
      !1
    );
  var l = [],
    f = !0;
  this.interceptors.request.forEach(function (P) {
    (typeof P.runWhen == 'function' && P.runWhen(i) === !1) ||
      ((f = f && P.synchronous), l.unshift(P.fulfilled, P.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function (P) {
    c.push(P.fulfilled, P.rejected);
  });
  var m;
  if (!f) {
    var v = [es, void 0];
    for (
      Array.prototype.unshift.apply(v, l),
        v = v.concat(c),
        m = Promise.resolve(i);
      v.length;

    )
      m = m.then(v.shift(), v.shift());
    return m;
  }
  for (var y = i; l.length; ) {
    var A = l.shift(),
      C = l.shift();
    try {
      y = A(y);
    } catch (T) {
      C(T);
      break;
    }
  }
  try {
    m = es(y);
  } catch (T) {
    return Promise.reject(T);
  }
  for (; c.length; ) m = m.then(c.shift(), c.shift());
  return m;
};
Zt.prototype.getUri = function (t) {
  t = zn(this.defaults, t);
  var i = jd(t.baseURL, t.url);
  return Vd(i, t.params, t.paramsSerializer);
};
Ps.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Zt.prototype[t] = function (i, s) {
    return this.request(
      zn(s || {}, { method: t, url: i, data: (s || {}).data })
    );
  };
});
Ps.forEach(['post', 'put', 'patch'], function (t) {
  function i(s) {
    return function (f, c, m) {
      return this.request(
        zn(m || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: f,
          data: c,
        })
      );
    };
  }
  (Zt.prototype[t] = i()), (Zt.prototype[t + 'Form'] = i(!0));
});
var Wd = Zt,
  Kd = Hn;
function Yt(n) {
  if (typeof n != 'function')
    throw new TypeError('executor must be a function.');
  var t;
  this.promise = new Promise(function (l) {
    t = l;
  });
  var i = this;
  this.promise.then(function (s) {
    if (!!i._listeners) {
      var l,
        f = i._listeners.length;
      for (l = 0; l < f; l++) i._listeners[l](s);
      i._listeners = null;
    }
  }),
    (this.promise.then = function (s) {
      var l,
        f = new Promise(function (c) {
          i.subscribe(c), (l = c);
        }).then(s);
      return (
        (f.cancel = function () {
          i.unsubscribe(l);
        }),
        f
      );
    }),
    n(function (l) {
      i.reason || ((i.reason = new Kd(l)), t(i.reason));
    });
}
Yt.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};
Yt.prototype.subscribe = function (t) {
  if (this.reason) {
    t(this.reason);
    return;
  }
  this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
};
Yt.prototype.unsubscribe = function (t) {
  if (!!this._listeners) {
    var i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
};
Yt.source = function () {
  var t,
    i = new Yt(function (l) {
      t = l;
    });
  return { token: i, cancel: t };
};
var Hd = Yt,
  Qd = function (t) {
    return function (s) {
      return t.apply(null, s);
    };
  },
  zd = Oe,
  Gd = function (t) {
    return zd.isObject(t) && t.isAxiosError === !0;
  },
  ts = Oe,
  Xd = ws,
  qn = Wd,
  Zd = Os,
  Yd = _i;
function Js(n) {
  var t = new qn(n),
    i = Xd(qn.prototype.request, t);
  return (
    ts.extend(i, qn.prototype, t),
    ts.extend(i, t),
    (i.create = function (l) {
      return Js(Zd(n, l));
    }),
    i
  );
}
var Ve = Js(Yd);
Ve.Axios = qn;
Ve.CanceledError = Hn;
Ve.CancelToken = Hd;
Ve.isCancel = Ls;
Ve.VERSION = Is.version;
Ve.toFormData = xs;
Ve.AxiosError = nn;
Ve.Cancel = Ve.CanceledError;
Ve.all = function (t) {
  return Promise.all(t);
};
Ve.spread = Qd;
Ve.isAxiosError = Gd;
Oi.exports = Ve;
Oi.exports.default = Ve;
var $d = Oi.exports;
const $t = $d.create({ timeout: 1e4 });
$t.interceptors.request.use(
  n => n,
  n => Promise.reject(n)
);
let Rs = '/kourintaisai';
$t.defaults.baseURL = Rs;
$t.interceptors.response.use(
  n => n.data.data,
  n => (
    console.log('error', n),
    console.log('error.response', n.response),
    console.log('error.response.status', n.response.status),
    Promise.reject(n)
  )
);
const ec = { key: 0, class: 'new_modal' },
  tc = { class: 'modal_content' },
  nc = { class: 'modal_title' },
  ic = ['innerHTML'],
  rc = dt({
    __name: 'newModal',
    props: { content: Object },
    setup(n, { expose: t }) {
      const i = n;
      let s = se(!1);
      const l = () => {
          s.value = !0;
        },
        f = () => {
          s.value = !1;
        };
      return (
        t({ openModal: l }),
        (c, m) =>
          q(s) && n.content.content
            ? (z(),
              Y('div', ec, [
                U('img', { class: 'close', onClick: f, src: ys, alt: '' }),
                U('div', tc, [
                  U('div', nc, $e(n.content.title), 1),
                  U(
                    'div',
                    { class: 'modal_desc', innerHTML: n.content.content },
                    null,
                    8,
                    ic
                  ),
                ]),
              ]))
            : ce('v-if', !0)
      );
    },
  });
var sc = ft(rc, [['__scopeId', 'data-v-9cc3a912']]),
  _s = { exports: {} };
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */ (function (n) {
  (function (t, i) {
    n.exports = t.document
      ? i(t, !0)
      : function (s) {
          if (!s.document)
            throw new Error('jQuery requires a window with a document');
          return i(s);
        };
  })(typeof window != 'undefined' ? window : If, function (t, i) {
    var s = [],
      l = Object.getPrototypeOf,
      f = s.slice,
      c = s.flat
        ? function (e) {
            return s.flat.call(e);
          }
        : function (e) {
            return s.concat.apply([], e);
          },
      m = s.push,
      v = s.indexOf,
      y = {},
      A = y.toString,
      C = y.hasOwnProperty,
      T = C.toString,
      P = T.call(Object),
      I = {},
      _ = function (r) {
        return (
          typeof r == 'function' &&
          typeof r.nodeType != 'number' &&
          typeof r.item != 'function'
        );
      },
      M = function (r) {
        return r != null && r === r.window;
      },
      N = t.document,
      j = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function K(e, r, u) {
      u = u || N;
      var a,
        d,
        p = u.createElement('script');
      if (((p.text = e), r))
        for (a in j)
          (d = r[a] || (r.getAttribute && r.getAttribute(a))),
            d && p.setAttribute(a, d);
      u.head.appendChild(p).parentNode.removeChild(p);
    }
    function Q(e) {
      return e == null
        ? e + ''
        : typeof e == 'object' || typeof e == 'function'
        ? y[A.call(e)] || 'object'
        : typeof e;
    }
    var Ae = '3.6.0',
      o = function (e, r) {
        return new o.fn.init(e, r);
      };
    (o.fn = o.prototype =
      {
        jquery: Ae,
        constructor: o,
        length: 0,
        toArray: function () {
          return f.call(this);
        },
        get: function (e) {
          return e == null
            ? f.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var r = o.merge(this.constructor(), e);
          return (r.prevObject = this), r;
        },
        each: function (e) {
          return o.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            o.map(this, function (r, u) {
              return e.call(r, u, r);
            })
          );
        },
        slice: function () {
          return this.pushStack(f.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            o.grep(this, function (e, r) {
              return (r + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            o.grep(this, function (e, r) {
              return r % 2;
            })
          );
        },
        eq: function (e) {
          var r = this.length,
            u = +e + (e < 0 ? r : 0);
          return this.pushStack(u >= 0 && u < r ? [this[u]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: m,
        sort: s.sort,
        splice: s.splice,
      }),
      (o.extend = o.fn.extend =
        function () {
          var e,
            r,
            u,
            a,
            d,
            p,
            h = arguments[0] || {},
            S = 1,
            E = arguments.length,
            B = !1;
          for (
            typeof h == 'boolean' && ((B = h), (h = arguments[S] || {}), S++),
              typeof h != 'object' && !_(h) && (h = {}),
              S === E && ((h = this), S--);
            S < E;
            S++
          )
            if ((e = arguments[S]) != null)
              for (r in e)
                (a = e[r]),
                  !(r === '__proto__' || h === a) &&
                    (B && a && (o.isPlainObject(a) || (d = Array.isArray(a)))
                      ? ((u = h[r]),
                        d && !Array.isArray(u)
                          ? (p = [])
                          : !d && !o.isPlainObject(u)
                          ? (p = {})
                          : (p = u),
                        (d = !1),
                        (h[r] = o.extend(B, p, a)))
                      : a !== void 0 && (h[r] = a));
          return h;
        }),
      o.extend({
        expando: 'jQuery' + (Ae + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var r, u;
          return !e || A.call(e) !== '[object Object]'
            ? !1
            : ((r = l(e)),
              r
                ? ((u = C.call(r, 'constructor') && r.constructor),
                  typeof u == 'function' && T.call(u) === P)
                : !0);
        },
        isEmptyObject: function (e) {
          var r;
          for (r in e) return !1;
          return !0;
        },
        globalEval: function (e, r, u) {
          K(e, { nonce: r && r.nonce }, u);
        },
        each: function (e, r) {
          var u,
            a = 0;
          if (ge(e))
            for (u = e.length; a < u && r.call(e[a], a, e[a]) !== !1; a++);
          else for (a in e) if (r.call(e[a], a, e[a]) === !1) break;
          return e;
        },
        makeArray: function (e, r) {
          var u = r || [];
          return (
            e != null &&
              (ge(Object(e))
                ? o.merge(u, typeof e == 'string' ? [e] : e)
                : m.call(u, e)),
            u
          );
        },
        inArray: function (e, r, u) {
          return r == null ? -1 : v.call(r, e, u);
        },
        merge: function (e, r) {
          for (var u = +r.length, a = 0, d = e.length; a < u; a++)
            e[d++] = r[a];
          return (e.length = d), e;
        },
        grep: function (e, r, u) {
          for (var a, d = [], p = 0, h = e.length, S = !u; p < h; p++)
            (a = !r(e[p], p)), a !== S && d.push(e[p]);
          return d;
        },
        map: function (e, r, u) {
          var a,
            d,
            p = 0,
            h = [];
          if (ge(e))
            for (a = e.length; p < a; p++)
              (d = r(e[p], p, u)), d != null && h.push(d);
          else for (p in e) (d = r(e[p], p, u)), d != null && h.push(d);
          return c(h);
        },
        guid: 1,
        support: I,
      }),
      typeof Symbol == 'function' &&
        (o.fn[Symbol.iterator] = s[Symbol.iterator]),
      o.each(
        'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
          ' '
        ),
        function (e, r) {
          y['[object ' + r + ']'] = r.toLowerCase();
        }
      );
    function ge(e) {
      var r = !!e && 'length' in e && e.length,
        u = Q(e);
      return _(e) || M(e)
        ? !1
        : u === 'array' ||
            r === 0 ||
            (typeof r == 'number' && r > 0 && r - 1 in e);
    }
    var ee = (function (e) {
      var r,
        u,
        a,
        d,
        p,
        h,
        S,
        E,
        B,
        F,
        J,
        x,
        D,
        G,
        fe,
        X,
        ke,
        Be,
        We,
        ye = 'sizzle' + 1 * new Date(),
        le = e.document,
        qe = 0,
        ve = 0,
        Ee = Ln(),
        cn = Ln(),
        xn = Ln(),
        Ke = Ln(),
        Ot = function (g, w) {
          return g === w && (J = !0), 0;
        },
        It = {}.hasOwnProperty,
        Me = [],
        St = Me.pop,
        Ye = Me.push,
        Ct = Me.push,
        Sr = Me.slice,
        Pt = function (g, w) {
          for (var b = 0, L = g.length; b < L; b++) if (g[b] === w) return b;
          return -1;
        },
        li =
          'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        me = '[\\x20\\t\\r\\n\\f]',
        Nt =
          '(?:\\\\[\\da-fA-F]{1,6}' +
          me +
          '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
        Cr =
          '\\[' +
          me +
          '*(' +
          Nt +
          ')(?:' +
          me +
          '*([*^$|!~]?=)' +
          me +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          Nt +
          '))|)' +
          me +
          '*\\]',
        fi =
          ':(' +
          Nt +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          Cr +
          ')*)|.*)\\)|)',
        Lu = new RegExp(me + '+', 'g'),
        Fn = new RegExp(
          '^' + me + '+|((?:^|[^\\\\])(?:\\\\.)*)' + me + '+$',
          'g'
        ),
        Ou = new RegExp('^' + me + '*,' + me + '*'),
        Er = new RegExp('^' + me + '*([>+~]|' + me + ')' + me + '*'),
        Iu = new RegExp(me + '|>'),
        Pu = new RegExp(fi),
        Nu = new RegExp('^' + Nt + '$'),
        Dn = {
          ID: new RegExp('^#(' + Nt + ')'),
          CLASS: new RegExp('^\\.(' + Nt + ')'),
          TAG: new RegExp('^(' + Nt + '|[*])'),
          ATTR: new RegExp('^' + Cr),
          PSEUDO: new RegExp('^' + fi),
          CHILD: new RegExp(
            '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
              me +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              me +
              '*(?:([+-]|)' +
              me +
              '*(\\d+)|))' +
              me +
              '*\\)|)',
            'i'
          ),
          bool: new RegExp('^(?:' + li + ')$', 'i'),
          needsContext: new RegExp(
            '^' +
              me +
              '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
              me +
              '*((?:-\\d)?\\d*)' +
              me +
              '*\\)|)(?=[^-]|$)',
            'i'
          ),
        },
        Ju = /HTML$/i,
        Ru = /^(?:input|select|textarea|button)$/i,
        _u = /^h\d$/i,
        pn = /^[^{]+\{\s*\[native \w/,
        Uu = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        di = /[+~]/,
        gt = new RegExp(
          '\\\\[\\da-fA-F]{1,6}' + me + '?|\\\\([^\\r\\n\\f])',
          'g'
        ),
        vt = function (g, w) {
          var b = '0x' + g.slice(1) - 65536;
          return (
            w ||
            (b < 0
              ? String.fromCharCode(b + 65536)
              : String.fromCharCode((b >> 10) | 55296, (b & 1023) | 56320))
          );
        },
        br = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Br = function (g, w) {
          return w
            ? g === '\0'
              ? '\uFFFD'
              : g.slice(0, -1) +
                '\\' +
                g.charCodeAt(g.length - 1).toString(16) +
                ' '
            : '\\' + g;
        },
        kr = function () {
          x();
        },
        qu = In(
          function (g) {
            return g.disabled === !0 && g.nodeName.toLowerCase() === 'fieldset';
          },
          { dir: 'parentNode', next: 'legend' }
        );
      try {
        Ct.apply((Me = Sr.call(le.childNodes)), le.childNodes),
          Me[le.childNodes.length].nodeType;
      } catch {
        Ct = {
          apply: Me.length
            ? function (w, b) {
                Ye.apply(w, Sr.call(b));
              }
            : function (w, b) {
                for (var L = w.length, k = 0; (w[L++] = b[k++]); );
                w.length = L - 1;
              },
        };
      }
      function we(g, w, b, L) {
        var k,
          O,
          R,
          V,
          W,
          te,
          $,
          re = w && w.ownerDocument,
          pe = w ? w.nodeType : 9;
        if (
          ((b = b || []),
          typeof g != 'string' || !g || (pe !== 1 && pe !== 9 && pe !== 11))
        )
          return b;
        if (!L && (x(w), (w = w || D), fe)) {
          if (pe !== 11 && (W = Uu.exec(g)))
            if ((k = W[1])) {
              if (pe === 9)
                if ((R = w.getElementById(k))) {
                  if (R.id === k) return b.push(R), b;
                } else return b;
              else if (
                re &&
                (R = re.getElementById(k)) &&
                We(w, R) &&
                R.id === k
              )
                return b.push(R), b;
            } else {
              if (W[2]) return Ct.apply(b, w.getElementsByTagName(g)), b;
              if (
                (k = W[3]) &&
                u.getElementsByClassName &&
                w.getElementsByClassName
              )
                return Ct.apply(b, w.getElementsByClassName(k)), b;
            }
          if (
            u.qsa &&
            !Ke[g + ' '] &&
            (!X || !X.test(g)) &&
            (pe !== 1 || w.nodeName.toLowerCase() !== 'object')
          ) {
            if ((($ = g), (re = w), pe === 1 && (Iu.test(g) || Er.test(g)))) {
              for (
                re = (di.test(g) && pi(w.parentNode)) || w,
                  (re !== w || !u.scope) &&
                    ((V = w.getAttribute('id'))
                      ? (V = V.replace(br, Br))
                      : w.setAttribute('id', (V = ye))),
                  te = h(g),
                  O = te.length;
                O--;

              )
                te[O] = (V ? '#' + V : ':scope') + ' ' + On(te[O]);
              $ = te.join(',');
            }
            try {
              return Ct.apply(b, re.querySelectorAll($)), b;
            } catch {
              Ke(g, !0);
            } finally {
              V === ye && w.removeAttribute('id');
            }
          }
        }
        return E(g.replace(Fn, '$1'), w, b, L);
      }
      function Ln() {
        var g = [];
        function w(b, L) {
          return (
            g.push(b + ' ') > a.cacheLength && delete w[g.shift()],
            (w[b + ' '] = L)
          );
        }
        return w;
      }
      function it(g) {
        return (g[ye] = !0), g;
      }
      function rt(g) {
        var w = D.createElement('fieldset');
        try {
          return !!g(w);
        } catch {
          return !1;
        } finally {
          w.parentNode && w.parentNode.removeChild(w), (w = null);
        }
      }
      function ci(g, w) {
        for (var b = g.split('|'), L = b.length; L--; ) a.attrHandle[b[L]] = w;
      }
      function Tr(g, w) {
        var b = w && g,
          L =
            b &&
            g.nodeType === 1 &&
            w.nodeType === 1 &&
            g.sourceIndex - w.sourceIndex;
        if (L) return L;
        if (b) {
          for (; (b = b.nextSibling); ) if (b === w) return -1;
        }
        return g ? 1 : -1;
      }
      function Mu(g) {
        return function (w) {
          var b = w.nodeName.toLowerCase();
          return b === 'input' && w.type === g;
        };
      }
      function Vu(g) {
        return function (w) {
          var b = w.nodeName.toLowerCase();
          return (b === 'input' || b === 'button') && w.type === g;
        };
      }
      function xr(g) {
        return function (w) {
          return 'form' in w
            ? w.parentNode && w.disabled === !1
              ? 'label' in w
                ? 'label' in w.parentNode
                  ? w.parentNode.disabled === g
                  : w.disabled === g
                : w.isDisabled === g || (w.isDisabled !== !g && qu(w) === g)
              : w.disabled === g
            : 'label' in w
            ? w.disabled === g
            : !1;
        };
      }
      function Jt(g) {
        return it(function (w) {
          return (
            (w = +w),
            it(function (b, L) {
              for (var k, O = g([], b.length, w), R = O.length; R--; )
                b[(k = O[R])] && (b[k] = !(L[k] = b[k]));
            })
          );
        });
      }
      function pi(g) {
        return g && typeof g.getElementsByTagName != 'undefined' && g;
      }
      (u = we.support = {}),
        (p = we.isXML =
          function (g) {
            var w = g && g.namespaceURI,
              b = g && (g.ownerDocument || g).documentElement;
            return !Ju.test(w || (b && b.nodeName) || 'HTML');
          }),
        (x = we.setDocument =
          function (g) {
            var w,
              b,
              L = g ? g.ownerDocument || g : le;
            return (
              L == D ||
                L.nodeType !== 9 ||
                !L.documentElement ||
                ((D = L),
                (G = D.documentElement),
                (fe = !p(D)),
                le != D &&
                  (b = D.defaultView) &&
                  b.top !== b &&
                  (b.addEventListener
                    ? b.addEventListener('unload', kr, !1)
                    : b.attachEvent && b.attachEvent('onunload', kr)),
                (u.scope = rt(function (k) {
                  return (
                    G.appendChild(k).appendChild(D.createElement('div')),
                    typeof k.querySelectorAll != 'undefined' &&
                      !k.querySelectorAll(':scope fieldset div').length
                  );
                })),
                (u.attributes = rt(function (k) {
                  return (k.className = 'i'), !k.getAttribute('className');
                })),
                (u.getElementsByTagName = rt(function (k) {
                  return (
                    k.appendChild(D.createComment('')),
                    !k.getElementsByTagName('*').length
                  );
                })),
                (u.getElementsByClassName = pn.test(D.getElementsByClassName)),
                (u.getById = rt(function (k) {
                  return (
                    (G.appendChild(k).id = ye),
                    !D.getElementsByName || !D.getElementsByName(ye).length
                  );
                })),
                u.getById
                  ? ((a.filter.ID = function (k) {
                      var O = k.replace(gt, vt);
                      return function (R) {
                        return R.getAttribute('id') === O;
                      };
                    }),
                    (a.find.ID = function (k, O) {
                      if (typeof O.getElementById != 'undefined' && fe) {
                        var R = O.getElementById(k);
                        return R ? [R] : [];
                      }
                    }))
                  : ((a.filter.ID = function (k) {
                      var O = k.replace(gt, vt);
                      return function (R) {
                        var V =
                          typeof R.getAttributeNode != 'undefined' &&
                          R.getAttributeNode('id');
                        return V && V.value === O;
                      };
                    }),
                    (a.find.ID = function (k, O) {
                      if (typeof O.getElementById != 'undefined' && fe) {
                        var R,
                          V,
                          W,
                          te = O.getElementById(k);
                        if (te) {
                          if (
                            ((R = te.getAttributeNode('id')),
                            R && R.value === k)
                          )
                            return [te];
                          for (
                            W = O.getElementsByName(k), V = 0;
                            (te = W[V++]);

                          )
                            if (
                              ((R = te.getAttributeNode('id')),
                              R && R.value === k)
                            )
                              return [te];
                        }
                        return [];
                      }
                    })),
                (a.find.TAG = u.getElementsByTagName
                  ? function (k, O) {
                      if (typeof O.getElementsByTagName != 'undefined')
                        return O.getElementsByTagName(k);
                      if (u.qsa) return O.querySelectorAll(k);
                    }
                  : function (k, O) {
                      var R,
                        V = [],
                        W = 0,
                        te = O.getElementsByTagName(k);
                      if (k === '*') {
                        for (; (R = te[W++]); ) R.nodeType === 1 && V.push(R);
                        return V;
                      }
                      return te;
                    }),
                (a.find.CLASS =
                  u.getElementsByClassName &&
                  function (k, O) {
                    if (typeof O.getElementsByClassName != 'undefined' && fe)
                      return O.getElementsByClassName(k);
                  }),
                (ke = []),
                (X = []),
                (u.qsa = pn.test(D.querySelectorAll)) &&
                  (rt(function (k) {
                    var O;
                    (G.appendChild(k).innerHTML =
                      "<a id='" +
                      ye +
                      "'></a><select id='" +
                      ye +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      k.querySelectorAll("[msallowcapture^='']").length &&
                        X.push('[*^$]=' + me + `*(?:''|"")`),
                      k.querySelectorAll('[selected]').length ||
                        X.push('\\[' + me + '*(?:value|' + li + ')'),
                      k.querySelectorAll('[id~=' + ye + '-]').length ||
                        X.push('~='),
                      (O = D.createElement('input')),
                      O.setAttribute('name', ''),
                      k.appendChild(O),
                      k.querySelectorAll("[name='']").length ||
                        X.push(
                          '\\[' + me + '*name' + me + '*=' + me + `*(?:''|"")`
                        ),
                      k.querySelectorAll(':checked').length ||
                        X.push(':checked'),
                      k.querySelectorAll('a#' + ye + '+*').length ||
                        X.push('.#.+[+~]'),
                      k.querySelectorAll('\\\f'),
                      X.push('[\\r\\n\\f]');
                  }),
                  rt(function (k) {
                    k.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var O = D.createElement('input');
                    O.setAttribute('type', 'hidden'),
                      k.appendChild(O).setAttribute('name', 'D'),
                      k.querySelectorAll('[name=d]').length &&
                        X.push('name' + me + '*[*^$|!~]?='),
                      k.querySelectorAll(':enabled').length !== 2 &&
                        X.push(':enabled', ':disabled'),
                      (G.appendChild(k).disabled = !0),
                      k.querySelectorAll(':disabled').length !== 2 &&
                        X.push(':enabled', ':disabled'),
                      k.querySelectorAll('*,:x'),
                      X.push(',.*:');
                  })),
                (u.matchesSelector = pn.test(
                  (Be =
                    G.matches ||
                    G.webkitMatchesSelector ||
                    G.mozMatchesSelector ||
                    G.oMatchesSelector ||
                    G.msMatchesSelector)
                )) &&
                  rt(function (k) {
                    (u.disconnectedMatch = Be.call(k, '*')),
                      Be.call(k, "[s!='']:x"),
                      ke.push('!=', fi);
                  }),
                (X = X.length && new RegExp(X.join('|'))),
                (ke = ke.length && new RegExp(ke.join('|'))),
                (w = pn.test(G.compareDocumentPosition)),
                (We =
                  w || pn.test(G.contains)
                    ? function (k, O) {
                        var R = k.nodeType === 9 ? k.documentElement : k,
                          V = O && O.parentNode;
                        return (
                          k === V ||
                          !!(
                            V &&
                            V.nodeType === 1 &&
                            (R.contains
                              ? R.contains(V)
                              : k.compareDocumentPosition &&
                                k.compareDocumentPosition(V) & 16)
                          )
                        );
                      }
                    : function (k, O) {
                        if (O) {
                          for (; (O = O.parentNode); ) if (O === k) return !0;
                        }
                        return !1;
                      }),
                (Ot = w
                  ? function (k, O) {
                      if (k === O) return (J = !0), 0;
                      var R =
                        !k.compareDocumentPosition - !O.compareDocumentPosition;
                      return (
                        R ||
                        ((R =
                          (k.ownerDocument || k) == (O.ownerDocument || O)
                            ? k.compareDocumentPosition(O)
                            : 1),
                        R & 1 ||
                        (!u.sortDetached && O.compareDocumentPosition(k) === R)
                          ? k == D || (k.ownerDocument == le && We(le, k))
                            ? -1
                            : O == D || (O.ownerDocument == le && We(le, O))
                            ? 1
                            : F
                            ? Pt(F, k) - Pt(F, O)
                            : 0
                          : R & 4
                          ? -1
                          : 1)
                      );
                    }
                  : function (k, O) {
                      if (k === O) return (J = !0), 0;
                      var R,
                        V = 0,
                        W = k.parentNode,
                        te = O.parentNode,
                        $ = [k],
                        re = [O];
                      if (!W || !te)
                        return k == D
                          ? -1
                          : O == D
                          ? 1
                          : W
                          ? -1
                          : te
                          ? 1
                          : F
                          ? Pt(F, k) - Pt(F, O)
                          : 0;
                      if (W === te) return Tr(k, O);
                      for (R = k; (R = R.parentNode); ) $.unshift(R);
                      for (R = O; (R = R.parentNode); ) re.unshift(R);
                      for (; $[V] === re[V]; ) V++;
                      return V
                        ? Tr($[V], re[V])
                        : $[V] == le
                        ? -1
                        : re[V] == le
                        ? 1
                        : 0;
                    })),
              D
            );
          }),
        (we.matches = function (g, w) {
          return we(g, null, null, w);
        }),
        (we.matchesSelector = function (g, w) {
          if (
            (x(g),
            u.matchesSelector &&
              fe &&
              !Ke[w + ' '] &&
              (!ke || !ke.test(w)) &&
              (!X || !X.test(w)))
          )
            try {
              var b = Be.call(g, w);
              if (
                b ||
                u.disconnectedMatch ||
                (g.document && g.document.nodeType !== 11)
              )
                return b;
            } catch {
              Ke(w, !0);
            }
          return we(w, D, null, [g]).length > 0;
        }),
        (we.contains = function (g, w) {
          return (g.ownerDocument || g) != D && x(g), We(g, w);
        }),
        (we.attr = function (g, w) {
          (g.ownerDocument || g) != D && x(g);
          var b = a.attrHandle[w.toLowerCase()],
            L =
              b && It.call(a.attrHandle, w.toLowerCase())
                ? b(g, w, !fe)
                : void 0;
          return L !== void 0
            ? L
            : u.attributes || !fe
            ? g.getAttribute(w)
            : (L = g.getAttributeNode(w)) && L.specified
            ? L.value
            : null;
        }),
        (we.escape = function (g) {
          return (g + '').replace(br, Br);
        }),
        (we.error = function (g) {
          throw new Error('Syntax error, unrecognized expression: ' + g);
        }),
        (we.uniqueSort = function (g) {
          var w,
            b = [],
            L = 0,
            k = 0;
          if (
            ((J = !u.detectDuplicates),
            (F = !u.sortStable && g.slice(0)),
            g.sort(Ot),
            J)
          ) {
            for (; (w = g[k++]); ) w === g[k] && (L = b.push(k));
            for (; L--; ) g.splice(b[L], 1);
          }
          return (F = null), g;
        }),
        (d = we.getText =
          function (g) {
            var w,
              b = '',
              L = 0,
              k = g.nodeType;
            if (k) {
              if (k === 1 || k === 9 || k === 11) {
                if (typeof g.textContent == 'string') return g.textContent;
                for (g = g.firstChild; g; g = g.nextSibling) b += d(g);
              } else if (k === 3 || k === 4) return g.nodeValue;
            } else for (; (w = g[L++]); ) b += d(w);
            return b;
          }),
        (a = we.selectors =
          {
            cacheLength: 50,
            createPseudo: it,
            match: Dn,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (g) {
                return (
                  (g[1] = g[1].replace(gt, vt)),
                  (g[3] = (g[3] || g[4] || g[5] || '').replace(gt, vt)),
                  g[2] === '~=' && (g[3] = ' ' + g[3] + ' '),
                  g.slice(0, 4)
                );
              },
              CHILD: function (g) {
                return (
                  (g[1] = g[1].toLowerCase()),
                  g[1].slice(0, 3) === 'nth'
                    ? (g[3] || we.error(g[0]),
                      (g[4] = +(g[4]
                        ? g[5] + (g[6] || 1)
                        : 2 * (g[3] === 'even' || g[3] === 'odd'))),
                      (g[5] = +(g[7] + g[8] || g[3] === 'odd')))
                    : g[3] && we.error(g[0]),
                  g
                );
              },
              PSEUDO: function (g) {
                var w,
                  b = !g[6] && g[2];
                return Dn.CHILD.test(g[0])
                  ? null
                  : (g[3]
                      ? (g[2] = g[4] || g[5] || '')
                      : b &&
                        Pu.test(b) &&
                        (w = h(b, !0)) &&
                        (w = b.indexOf(')', b.length - w) - b.length) &&
                        ((g[0] = g[0].slice(0, w)), (g[2] = b.slice(0, w))),
                    g.slice(0, 3));
              },
            },
            filter: {
              TAG: function (g) {
                var w = g.replace(gt, vt).toLowerCase();
                return g === '*'
                  ? function () {
                      return !0;
                    }
                  : function (b) {
                      return b.nodeName && b.nodeName.toLowerCase() === w;
                    };
              },
              CLASS: function (g) {
                var w = Ee[g + ' '];
                return (
                  w ||
                  ((w = new RegExp('(^|' + me + ')' + g + '(' + me + '|$)')) &&
                    Ee(g, function (b) {
                      return w.test(
                        (typeof b.className == 'string' && b.className) ||
                          (typeof b.getAttribute != 'undefined' &&
                            b.getAttribute('class')) ||
                          ''
                      );
                    }))
                );
              },
              ATTR: function (g, w, b) {
                return function (L) {
                  var k = we.attr(L, g);
                  return k == null
                    ? w === '!='
                    : w
                    ? ((k += ''),
                      w === '='
                        ? k === b
                        : w === '!='
                        ? k !== b
                        : w === '^='
                        ? b && k.indexOf(b) === 0
                        : w === '*='
                        ? b && k.indexOf(b) > -1
                        : w === '$='
                        ? b && k.slice(-b.length) === b
                        : w === '~='
                        ? (' ' + k.replace(Lu, ' ') + ' ').indexOf(b) > -1
                        : w === '|='
                        ? k === b || k.slice(0, b.length + 1) === b + '-'
                        : !1)
                    : !0;
                };
              },
              CHILD: function (g, w, b, L, k) {
                var O = g.slice(0, 3) !== 'nth',
                  R = g.slice(-4) !== 'last',
                  V = w === 'of-type';
                return L === 1 && k === 0
                  ? function (W) {
                      return !!W.parentNode;
                    }
                  : function (W, te, $) {
                      var re,
                        pe,
                        Se,
                        ne,
                        Te,
                        Ie,
                        He = O !== R ? 'nextSibling' : 'previousSibling',
                        Ce = W.parentNode,
                        hn = V && W.nodeName.toLowerCase(),
                        gn = !$ && !V,
                        Qe = !1;
                      if (Ce) {
                        if (O) {
                          for (; He; ) {
                            for (ne = W; (ne = ne[He]); )
                              if (
                                V
                                  ? ne.nodeName.toLowerCase() === hn
                                  : ne.nodeType === 1
                              )
                                return !1;
                            Ie = He = g === 'only' && !Ie && 'nextSibling';
                          }
                          return !0;
                        }
                        if (
                          ((Ie = [R ? Ce.firstChild : Ce.lastChild]), R && gn)
                        ) {
                          for (
                            ne = Ce,
                              Se = ne[ye] || (ne[ye] = {}),
                              pe = Se[ne.uniqueID] || (Se[ne.uniqueID] = {}),
                              re = pe[g] || [],
                              Te = re[0] === qe && re[1],
                              Qe = Te && re[2],
                              ne = Te && Ce.childNodes[Te];
                            (ne =
                              (++Te && ne && ne[He]) ||
                              (Qe = Te = 0) ||
                              Ie.pop());

                          )
                            if (ne.nodeType === 1 && ++Qe && ne === W) {
                              pe[g] = [qe, Te, Qe];
                              break;
                            }
                        } else if (
                          (gn &&
                            ((ne = W),
                            (Se = ne[ye] || (ne[ye] = {})),
                            (pe = Se[ne.uniqueID] || (Se[ne.uniqueID] = {})),
                            (re = pe[g] || []),
                            (Te = re[0] === qe && re[1]),
                            (Qe = Te)),
                          Qe === !1)
                        )
                          for (
                            ;
                            (ne =
                              (++Te && ne && ne[He]) ||
                              (Qe = Te = 0) ||
                              Ie.pop()) &&
                            !(
                              (V
                                ? ne.nodeName.toLowerCase() === hn
                                : ne.nodeType === 1) &&
                              ++Qe &&
                              (gn &&
                                ((Se = ne[ye] || (ne[ye] = {})),
                                (pe =
                                  Se[ne.uniqueID] || (Se[ne.uniqueID] = {})),
                                (pe[g] = [qe, Qe])),
                              ne === W)
                            );

                          );
                        return (
                          (Qe -= k), Qe === L || (Qe % L === 0 && Qe / L >= 0)
                        );
                      }
                    };
              },
              PSEUDO: function (g, w) {
                var b,
                  L =
                    a.pseudos[g] ||
                    a.setFilters[g.toLowerCase()] ||
                    we.error('unsupported pseudo: ' + g);
                return L[ye]
                  ? L(w)
                  : L.length > 1
                  ? ((b = [g, g, '', w]),
                    a.setFilters.hasOwnProperty(g.toLowerCase())
                      ? it(function (k, O) {
                          for (var R, V = L(k, w), W = V.length; W--; )
                            (R = Pt(k, V[W])), (k[R] = !(O[R] = V[W]));
                        })
                      : function (k) {
                          return L(k, 0, b);
                        })
                  : L;
              },
            },
            pseudos: {
              not: it(function (g) {
                var w = [],
                  b = [],
                  L = S(g.replace(Fn, '$1'));
                return L[ye]
                  ? it(function (k, O, R, V) {
                      for (var W, te = L(k, null, V, []), $ = k.length; $--; )
                        (W = te[$]) && (k[$] = !(O[$] = W));
                    })
                  : function (k, O, R) {
                      return (
                        (w[0] = k), L(w, null, R, b), (w[0] = null), !b.pop()
                      );
                    };
              }),
              has: it(function (g) {
                return function (w) {
                  return we(g, w).length > 0;
                };
              }),
              contains: it(function (g) {
                return (
                  (g = g.replace(gt, vt)),
                  function (w) {
                    return (w.textContent || d(w)).indexOf(g) > -1;
                  }
                );
              }),
              lang: it(function (g) {
                return (
                  Nu.test(g || '') || we.error('unsupported lang: ' + g),
                  (g = g.replace(gt, vt).toLowerCase()),
                  function (w) {
                    var b;
                    do
                      if (
                        (b = fe
                          ? w.lang
                          : w.getAttribute('xml:lang') ||
                            w.getAttribute('lang'))
                      )
                        return (
                          (b = b.toLowerCase()),
                          b === g || b.indexOf(g + '-') === 0
                        );
                    while ((w = w.parentNode) && w.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (g) {
                var w = e.location && e.location.hash;
                return w && w.slice(1) === g.id;
              },
              root: function (g) {
                return g === G;
              },
              focus: function (g) {
                return (
                  g === D.activeElement &&
                  (!D.hasFocus || D.hasFocus()) &&
                  !!(g.type || g.href || ~g.tabIndex)
                );
              },
              enabled: xr(!1),
              disabled: xr(!0),
              checked: function (g) {
                var w = g.nodeName.toLowerCase();
                return (
                  (w === 'input' && !!g.checked) ||
                  (w === 'option' && !!g.selected)
                );
              },
              selected: function (g) {
                return (
                  g.parentNode && g.parentNode.selectedIndex, g.selected === !0
                );
              },
              empty: function (g) {
                for (g = g.firstChild; g; g = g.nextSibling)
                  if (g.nodeType < 6) return !1;
                return !0;
              },
              parent: function (g) {
                return !a.pseudos.empty(g);
              },
              header: function (g) {
                return _u.test(g.nodeName);
              },
              input: function (g) {
                return Ru.test(g.nodeName);
              },
              button: function (g) {
                var w = g.nodeName.toLowerCase();
                return (w === 'input' && g.type === 'button') || w === 'button';
              },
              text: function (g) {
                var w;
                return (
                  g.nodeName.toLowerCase() === 'input' &&
                  g.type === 'text' &&
                  ((w = g.getAttribute('type')) == null ||
                    w.toLowerCase() === 'text')
                );
              },
              first: Jt(function () {
                return [0];
              }),
              last: Jt(function (g, w) {
                return [w - 1];
              }),
              eq: Jt(function (g, w, b) {
                return [b < 0 ? b + w : b];
              }),
              even: Jt(function (g, w) {
                for (var b = 0; b < w; b += 2) g.push(b);
                return g;
              }),
              odd: Jt(function (g, w) {
                for (var b = 1; b < w; b += 2) g.push(b);
                return g;
              }),
              lt: Jt(function (g, w, b) {
                for (var L = b < 0 ? b + w : b > w ? w : b; --L >= 0; )
                  g.push(L);
                return g;
              }),
              gt: Jt(function (g, w, b) {
                for (var L = b < 0 ? b + w : b; ++L < w; ) g.push(L);
                return g;
              }),
            },
          }),
        (a.pseudos.nth = a.pseudos.eq);
      for (r in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        a.pseudos[r] = Mu(r);
      for (r in { submit: !0, reset: !0 }) a.pseudos[r] = Vu(r);
      function Fr() {}
      (Fr.prototype = a.filters = a.pseudos),
        (a.setFilters = new Fr()),
        (h = we.tokenize =
          function (g, w) {
            var b,
              L,
              k,
              O,
              R,
              V,
              W,
              te = cn[g + ' '];
            if (te) return w ? 0 : te.slice(0);
            for (R = g, V = [], W = a.preFilter; R; ) {
              (!b || (L = Ou.exec(R))) &&
                (L && (R = R.slice(L[0].length) || R), V.push((k = []))),
                (b = !1),
                (L = Er.exec(R)) &&
                  ((b = L.shift()),
                  k.push({ value: b, type: L[0].replace(Fn, ' ') }),
                  (R = R.slice(b.length)));
              for (O in a.filter)
                (L = Dn[O].exec(R)) &&
                  (!W[O] || (L = W[O](L))) &&
                  ((b = L.shift()),
                  k.push({ value: b, type: O, matches: L }),
                  (R = R.slice(b.length)));
              if (!b) break;
            }
            return w ? R.length : R ? we.error(g) : cn(g, V).slice(0);
          });
      function On(g) {
        for (var w = 0, b = g.length, L = ''; w < b; w++) L += g[w].value;
        return L;
      }
      function In(g, w, b) {
        var L = w.dir,
          k = w.next,
          O = k || L,
          R = b && O === 'parentNode',
          V = ve++;
        return w.first
          ? function (W, te, $) {
              for (; (W = W[L]); )
                if (W.nodeType === 1 || R) return g(W, te, $);
              return !1;
            }
          : function (W, te, $) {
              var re,
                pe,
                Se,
                ne = [qe, V];
              if ($) {
                for (; (W = W[L]); )
                  if ((W.nodeType === 1 || R) && g(W, te, $)) return !0;
              } else
                for (; (W = W[L]); )
                  if (W.nodeType === 1 || R)
                    if (
                      ((Se = W[ye] || (W[ye] = {})),
                      (pe = Se[W.uniqueID] || (Se[W.uniqueID] = {})),
                      k && k === W.nodeName.toLowerCase())
                    )
                      W = W[L] || W;
                    else {
                      if ((re = pe[O]) && re[0] === qe && re[1] === V)
                        return (ne[2] = re[2]);
                      if (((pe[O] = ne), (ne[2] = g(W, te, $)))) return !0;
                    }
              return !1;
            };
      }
      function hi(g) {
        return g.length > 1
          ? function (w, b, L) {
              for (var k = g.length; k--; ) if (!g[k](w, b, L)) return !1;
              return !0;
            }
          : g[0];
      }
      function ju(g, w, b) {
        for (var L = 0, k = w.length; L < k; L++) we(g, w[L], b);
        return b;
      }
      function Pn(g, w, b, L, k) {
        for (var O, R = [], V = 0, W = g.length, te = w != null; V < W; V++)
          (O = g[V]) && (!b || b(O, L, k)) && (R.push(O), te && w.push(V));
        return R;
      }
      function gi(g, w, b, L, k, O) {
        return (
          L && !L[ye] && (L = gi(L)),
          k && !k[ye] && (k = gi(k, O)),
          it(function (R, V, W, te) {
            var $,
              re,
              pe,
              Se = [],
              ne = [],
              Te = V.length,
              Ie = R || ju(w || '*', W.nodeType ? [W] : W, []),
              He = g && (R || !w) ? Pn(Ie, Se, g, W, te) : Ie,
              Ce = b ? (k || (R ? g : Te || L) ? [] : V) : He;
            if ((b && b(He, Ce, W, te), L))
              for ($ = Pn(Ce, ne), L($, [], W, te), re = $.length; re--; )
                (pe = $[re]) && (Ce[ne[re]] = !(He[ne[re]] = pe));
            if (R) {
              if (k || g) {
                if (k) {
                  for ($ = [], re = Ce.length; re--; )
                    (pe = Ce[re]) && $.push((He[re] = pe));
                  k(null, (Ce = []), $, te);
                }
                for (re = Ce.length; re--; )
                  (pe = Ce[re]) &&
                    ($ = k ? Pt(R, pe) : Se[re]) > -1 &&
                    (R[$] = !(V[$] = pe));
              }
            } else (Ce = Pn(Ce === V ? Ce.splice(Te, Ce.length) : Ce)), k ? k(null, V, Ce, te) : Ct.apply(V, Ce);
          })
        );
      }
      function vi(g) {
        for (
          var w,
            b,
            L,
            k = g.length,
            O = a.relative[g[0].type],
            R = O || a.relative[' '],
            V = O ? 1 : 0,
            W = In(
              function (re) {
                return re === w;
              },
              R,
              !0
            ),
            te = In(
              function (re) {
                return Pt(w, re) > -1;
              },
              R,
              !0
            ),
            $ = [
              function (re, pe, Se) {
                var ne =
                  (!O && (Se || pe !== B)) ||
                  ((w = pe).nodeType ? W(re, pe, Se) : te(re, pe, Se));
                return (w = null), ne;
              },
            ];
          V < k;
          V++
        )
          if ((b = a.relative[g[V].type])) $ = [In(hi($), b)];
          else {
            if (((b = a.filter[g[V].type].apply(null, g[V].matches)), b[ye])) {
              for (L = ++V; L < k && !a.relative[g[L].type]; L++);
              return gi(
                V > 1 && hi($),
                V > 1 &&
                  On(
                    g
                      .slice(0, V - 1)
                      .concat({ value: g[V - 2].type === ' ' ? '*' : '' })
                  ).replace(Fn, '$1'),
                b,
                V < L && vi(g.slice(V, L)),
                L < k && vi((g = g.slice(L))),
                L < k && On(g)
              );
            }
            $.push(b);
          }
        return hi($);
      }
      function Wu(g, w) {
        var b = w.length > 0,
          L = g.length > 0,
          k = function (O, R, V, W, te) {
            var $,
              re,
              pe,
              Se = 0,
              ne = '0',
              Te = O && [],
              Ie = [],
              He = B,
              Ce = O || (L && a.find.TAG('*', te)),
              hn = (qe += He == null ? 1 : Math.random() || 0.1),
              gn = Ce.length;
            for (
              te && (B = R == D || R || te);
              ne !== gn && ($ = Ce[ne]) != null;
              ne++
            ) {
              if (L && $) {
                for (
                  re = 0, !R && $.ownerDocument != D && (x($), (V = !fe));
                  (pe = g[re++]);

                )
                  if (pe($, R || D, V)) {
                    W.push($);
                    break;
                  }
                te && (qe = hn);
              }
              b && (($ = !pe && $) && Se--, O && Te.push($));
            }
            if (((Se += ne), b && ne !== Se)) {
              for (re = 0; (pe = w[re++]); ) pe(Te, Ie, R, V);
              if (O) {
                if (Se > 0)
                  for (; ne--; ) Te[ne] || Ie[ne] || (Ie[ne] = St.call(W));
                Ie = Pn(Ie);
              }
              Ct.apply(W, Ie),
                te &&
                  !O &&
                  Ie.length > 0 &&
                  Se + w.length > 1 &&
                  we.uniqueSort(W);
            }
            return te && ((qe = hn), (B = He)), Te;
          };
        return b ? it(k) : k;
      }
      return (
        (S = we.compile =
          function (g, w) {
            var b,
              L = [],
              k = [],
              O = xn[g + ' '];
            if (!O) {
              for (w || (w = h(g)), b = w.length; b--; )
                (O = vi(w[b])), O[ye] ? L.push(O) : k.push(O);
              (O = xn(g, Wu(k, L))), (O.selector = g);
            }
            return O;
          }),
        (E = we.select =
          function (g, w, b, L) {
            var k,
              O,
              R,
              V,
              W,
              te = typeof g == 'function' && g,
              $ = !L && h((g = te.selector || g));
            if (((b = b || []), $.length === 1)) {
              if (
                ((O = $[0] = $[0].slice(0)),
                O.length > 2 &&
                  (R = O[0]).type === 'ID' &&
                  w.nodeType === 9 &&
                  fe &&
                  a.relative[O[1].type])
              ) {
                if (
                  ((w = (a.find.ID(R.matches[0].replace(gt, vt), w) || [])[0]),
                  w)
                )
                  te && (w = w.parentNode);
                else return b;
                g = g.slice(O.shift().value.length);
              }
              for (
                k = Dn.needsContext.test(g) ? 0 : O.length;
                k-- && ((R = O[k]), !a.relative[(V = R.type)]);

              )
                if (
                  (W = a.find[V]) &&
                  (L = W(
                    R.matches[0].replace(gt, vt),
                    (di.test(O[0].type) && pi(w.parentNode)) || w
                  ))
                ) {
                  if ((O.splice(k, 1), (g = L.length && On(O)), !g))
                    return Ct.apply(b, L), b;
                  break;
                }
            }
            return (
              (te || S(g, $))(
                L,
                w,
                !fe,
                b,
                !w || (di.test(g) && pi(w.parentNode)) || w
              ),
              b
            );
          }),
        (u.sortStable = ye.split('').sort(Ot).join('') === ye),
        (u.detectDuplicates = !!J),
        x(),
        (u.sortDetached = rt(function (g) {
          return g.compareDocumentPosition(D.createElement('fieldset')) & 1;
        })),
        rt(function (g) {
          return (
            (g.innerHTML = "<a href='#'></a>"),
            g.firstChild.getAttribute('href') === '#'
          );
        }) ||
          ci('type|href|height|width', function (g, w, b) {
            if (!b)
              return g.getAttribute(w, w.toLowerCase() === 'type' ? 1 : 2);
          }),
        (!u.attributes ||
          !rt(function (g) {
            return (
              (g.innerHTML = '<input/>'),
              g.firstChild.setAttribute('value', ''),
              g.firstChild.getAttribute('value') === ''
            );
          })) &&
          ci('value', function (g, w, b) {
            if (!b && g.nodeName.toLowerCase() === 'input')
              return g.defaultValue;
          }),
        rt(function (g) {
          return g.getAttribute('disabled') == null;
        }) ||
          ci(li, function (g, w, b) {
            var L;
            if (!b)
              return g[w] === !0
                ? w.toLowerCase()
                : (L = g.getAttributeNode(w)) && L.specified
                ? L.value
                : null;
          }),
        we
      );
    })(t);
    (o.find = ee),
      (o.expr = ee.selectors),
      (o.expr[':'] = o.expr.pseudos),
      (o.uniqueSort = o.unique = ee.uniqueSort),
      (o.text = ee.getText),
      (o.isXMLDoc = ee.isXML),
      (o.contains = ee.contains),
      (o.escapeSelector = ee.escape);
    var be = function (e, r, u) {
        for (var a = [], d = u !== void 0; (e = e[r]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (d && o(e).is(u)) break;
            a.push(e);
          }
        return a;
      },
      Z = function (e, r) {
        for (var u = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== r && u.push(e);
        return u;
      },
      de = o.expr.match.needsContext;
    function ue(e, r) {
      return e.nodeName && e.nodeName.toLowerCase() === r.toLowerCase();
    }
    var Le = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function et(e, r, u) {
      return _(r)
        ? o.grep(e, function (a, d) {
            return !!r.call(a, d, a) !== u;
          })
        : r.nodeType
        ? o.grep(e, function (a) {
            return (a === r) !== u;
          })
        : typeof r != 'string'
        ? o.grep(e, function (a) {
            return v.call(r, a) > -1 !== u;
          })
        : o.filter(r, e, u);
    }
    (o.filter = function (e, r, u) {
      var a = r[0];
      return (
        u && (e = ':not(' + e + ')'),
        r.length === 1 && a.nodeType === 1
          ? o.find.matchesSelector(a, e)
            ? [a]
            : []
          : o.find.matches(
              e,
              o.grep(r, function (d) {
                return d.nodeType === 1;
              })
            )
      );
    }),
      o.fn.extend({
        find: function (e) {
          var r,
            u,
            a = this.length,
            d = this;
          if (typeof e != 'string')
            return this.pushStack(
              o(e).filter(function () {
                for (r = 0; r < a; r++) if (o.contains(d[r], this)) return !0;
              })
            );
          for (u = this.pushStack([]), r = 0; r < a; r++) o.find(e, d[r], u);
          return a > 1 ? o.uniqueSort(u) : u;
        },
        filter: function (e) {
          return this.pushStack(et(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(et(this, e || [], !0));
        },
        is: function (e) {
          return !!et(
            this,
            typeof e == 'string' && de.test(e) ? o(e) : e || [],
            !1
          ).length;
        },
      });
    var ct,
      at = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      tt = (o.fn.init = function (e, r, u) {
        var a, d;
        if (!e) return this;
        if (((u = u || ct), typeof e == 'string'))
          if (
            (e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
              ? (a = [null, e, null])
              : (a = at.exec(e)),
            a && (a[1] || !r))
          )
            if (a[1]) {
              if (
                ((r = r instanceof o ? r[0] : r),
                o.merge(
                  this,
                  o.parseHTML(
                    a[1],
                    r && r.nodeType ? r.ownerDocument || r : N,
                    !0
                  )
                ),
                Le.test(a[1]) && o.isPlainObject(r))
              )
                for (a in r) _(this[a]) ? this[a](r[a]) : this.attr(a, r[a]);
              return this;
            } else
              return (
                (d = N.getElementById(a[2])),
                d && ((this[0] = d), (this.length = 1)),
                this
              );
          else
            return !r || r.jquery
              ? (r || u).find(e)
              : this.constructor(r).find(e);
        else {
          if (e.nodeType) return (this[0] = e), (this.length = 1), this;
          if (_(e)) return u.ready !== void 0 ? u.ready(e) : e(o);
        }
        return o.makeArray(e, this);
      });
    (tt.prototype = o.fn), (ct = o(N));
    var qt = /^(?:parents|prev(?:Until|All))/,
      he = { children: !0, contents: !0, next: !0, prev: !0 };
    o.fn.extend({
      has: function (e) {
        var r = o(e, this),
          u = r.length;
        return this.filter(function () {
          for (var a = 0; a < u; a++) if (o.contains(this, r[a])) return !0;
        });
      },
      closest: function (e, r) {
        var u,
          a = 0,
          d = this.length,
          p = [],
          h = typeof e != 'string' && o(e);
        if (!de.test(e)) {
          for (; a < d; a++)
            for (u = this[a]; u && u !== r; u = u.parentNode)
              if (
                u.nodeType < 11 &&
                (h
                  ? h.index(u) > -1
                  : u.nodeType === 1 && o.find.matchesSelector(u, e))
              ) {
                p.push(u);
                break;
              }
        }
        return this.pushStack(p.length > 1 ? o.uniqueSort(p) : p);
      },
      index: function (e) {
        return e
          ? typeof e == 'string'
            ? v.call(o(e), this[0])
            : v.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, r) {
        return this.pushStack(o.uniqueSort(o.merge(this.get(), o(e, r))));
      },
      addBack: function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      },
    });
    function ae(e, r) {
      for (; (e = e[r]) && e.nodeType !== 1; );
      return e;
    }
    o.each(
      {
        parent: function (e) {
          var r = e.parentNode;
          return r && r.nodeType !== 11 ? r : null;
        },
        parents: function (e) {
          return be(e, 'parentNode');
        },
        parentsUntil: function (e, r, u) {
          return be(e, 'parentNode', u);
        },
        next: function (e) {
          return ae(e, 'nextSibling');
        },
        prev: function (e) {
          return ae(e, 'previousSibling');
        },
        nextAll: function (e) {
          return be(e, 'nextSibling');
        },
        prevAll: function (e) {
          return be(e, 'previousSibling');
        },
        nextUntil: function (e, r, u) {
          return be(e, 'nextSibling', u);
        },
        prevUntil: function (e, r, u) {
          return be(e, 'previousSibling', u);
        },
        siblings: function (e) {
          return Z((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Z(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument != null && l(e.contentDocument)
            ? e.contentDocument
            : (ue(e, 'template') && (e = e.content || e),
              o.merge([], e.childNodes));
        },
      },
      function (e, r) {
        o.fn[e] = function (u, a) {
          var d = o.map(this, r, u);
          return (
            e.slice(-5) !== 'Until' && (a = u),
            a && typeof a == 'string' && (d = o.filter(a, d)),
            this.length > 1 &&
              (he[e] || o.uniqueSort(d), qt.test(e) && d.reverse()),
            this.pushStack(d)
          );
        };
      }
    );
    var oe = /[^\x20\t\r\n\f]+/g;
    function je(e) {
      var r = {};
      return (
        o.each(e.match(oe) || [], function (u, a) {
          r[a] = !0;
        }),
        r
      );
    }
    o.Callbacks = function (e) {
      e = typeof e == 'string' ? je(e) : o.extend({}, e);
      var r,
        u,
        a,
        d,
        p = [],
        h = [],
        S = -1,
        E = function () {
          for (d = d || e.once, a = r = !0; h.length; S = -1)
            for (u = h.shift(); ++S < p.length; )
              p[S].apply(u[0], u[1]) === !1 &&
                e.stopOnFalse &&
                ((S = p.length), (u = !1));
          e.memory || (u = !1), (r = !1), d && (u ? (p = []) : (p = ''));
        },
        B = {
          add: function () {
            return (
              p &&
                (u && !r && ((S = p.length - 1), h.push(u)),
                (function F(J) {
                  o.each(J, function (x, D) {
                    _(D)
                      ? (!e.unique || !B.has(D)) && p.push(D)
                      : D && D.length && Q(D) !== 'string' && F(D);
                  });
                })(arguments),
                u && !r && E()),
              this
            );
          },
          remove: function () {
            return (
              o.each(arguments, function (F, J) {
                for (var x; (x = o.inArray(J, p, x)) > -1; )
                  p.splice(x, 1), x <= S && S--;
              }),
              this
            );
          },
          has: function (F) {
            return F ? o.inArray(F, p) > -1 : p.length > 0;
          },
          empty: function () {
            return p && (p = []), this;
          },
          disable: function () {
            return (d = h = []), (p = u = ''), this;
          },
          disabled: function () {
            return !p;
          },
          lock: function () {
            return (d = h = []), !u && !r && (p = u = ''), this;
          },
          locked: function () {
            return !!d;
          },
          fireWith: function (F, J) {
            return (
              d ||
                ((J = J || []),
                (J = [F, J.slice ? J.slice() : J]),
                h.push(J),
                r || E()),
              this
            );
          },
          fire: function () {
            return B.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!a;
          },
        };
      return B;
    };
    function wt(e) {
      return e;
    }
    function Sn(e) {
      throw e;
    }
    function Vi(e, r, u, a) {
      var d;
      try {
        e && _((d = e.promise))
          ? d.call(e).done(r).fail(u)
          : e && _((d = e.then))
          ? d.call(e, r, u)
          : r.apply(void 0, [e].slice(a));
      } catch (p) {
        u.apply(void 0, [p]);
      }
    }
    o.extend({
      Deferred: function (e) {
        var r = [
            [
              'notify',
              'progress',
              o.Callbacks('memory'),
              o.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              o.Callbacks('once memory'),
              o.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              o.Callbacks('once memory'),
              o.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          u = 'pending',
          a = {
            state: function () {
              return u;
            },
            always: function () {
              return d.done(arguments).fail(arguments), this;
            },
            catch: function (p) {
              return a.then(null, p);
            },
            pipe: function () {
              var p = arguments;
              return o
                .Deferred(function (h) {
                  o.each(r, function (S, E) {
                    var B = _(p[E[4]]) && p[E[4]];
                    d[E[1]](function () {
                      var F = B && B.apply(this, arguments);
                      F && _(F.promise)
                        ? F.promise()
                            .progress(h.notify)
                            .done(h.resolve)
                            .fail(h.reject)
                        : h[E[0] + 'With'](this, B ? [F] : arguments);
                    });
                  }),
                    (p = null);
                })
                .promise();
            },
            then: function (p, h, S) {
              var E = 0;
              function B(F, J, x, D) {
                return function () {
                  var G = this,
                    fe = arguments,
                    X = function () {
                      var Be, We;
                      if (!(F < E)) {
                        if (((Be = x.apply(G, fe)), Be === J.promise()))
                          throw new TypeError('Thenable self-resolution');
                        (We =
                          Be &&
                          (typeof Be == 'object' || typeof Be == 'function') &&
                          Be.then),
                          _(We)
                            ? D
                              ? We.call(Be, B(E, J, wt, D), B(E, J, Sn, D))
                              : (E++,
                                We.call(
                                  Be,
                                  B(E, J, wt, D),
                                  B(E, J, Sn, D),
                                  B(E, J, wt, J.notifyWith)
                                ))
                            : (x !== wt && ((G = void 0), (fe = [Be])),
                              (D || J.resolveWith)(G, fe));
                      }
                    },
                    ke = D
                      ? X
                      : function () {
                          try {
                            X();
                          } catch (Be) {
                            o.Deferred.exceptionHook &&
                              o.Deferred.exceptionHook(Be, ke.stackTrace),
                              F + 1 >= E &&
                                (x !== Sn && ((G = void 0), (fe = [Be])),
                                J.rejectWith(G, fe));
                          }
                        };
                  F
                    ? ke()
                    : (o.Deferred.getStackHook &&
                        (ke.stackTrace = o.Deferred.getStackHook()),
                      t.setTimeout(ke));
                };
              }
              return o
                .Deferred(function (F) {
                  r[0][3].add(B(0, F, _(S) ? S : wt, F.notifyWith)),
                    r[1][3].add(B(0, F, _(p) ? p : wt)),
                    r[2][3].add(B(0, F, _(h) ? h : Sn));
                })
                .promise();
            },
            promise: function (p) {
              return p != null ? o.extend(p, a) : a;
            },
          },
          d = {};
        return (
          o.each(r, function (p, h) {
            var S = h[2],
              E = h[5];
            (a[h[1]] = S.add),
              E &&
                S.add(
                  function () {
                    u = E;
                  },
                  r[3 - p][2].disable,
                  r[3 - p][3].disable,
                  r[0][2].lock,
                  r[0][3].lock
                ),
              S.add(h[3].fire),
              (d[h[0]] = function () {
                return (
                  d[h[0] + 'With'](this === d ? void 0 : this, arguments), this
                );
              }),
              (d[h[0] + 'With'] = S.fireWith);
          }),
          a.promise(d),
          e && e.call(d, d),
          d
        );
      },
      when: function (e) {
        var r = arguments.length,
          u = r,
          a = Array(u),
          d = f.call(arguments),
          p = o.Deferred(),
          h = function (S) {
            return function (E) {
              (a[S] = this),
                (d[S] = arguments.length > 1 ? f.call(arguments) : E),
                --r || p.resolveWith(a, d);
            };
          };
        if (
          r <= 1 &&
          (Vi(e, p.done(h(u)).resolve, p.reject, !r),
          p.state() === 'pending' || _(d[u] && d[u].then))
        )
          return p.then();
        for (; u--; ) Vi(d[u], h(u), p.reject);
        return p.promise();
      },
    });
    var qs = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (o.Deferred.exceptionHook = function (e, r) {
      t.console &&
        t.console.warn &&
        e &&
        qs.test(e.name) &&
        t.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, r);
    }),
      (o.readyException = function (e) {
        t.setTimeout(function () {
          throw e;
        });
      });
    var Gn = o.Deferred();
    (o.fn.ready = function (e) {
      return (
        Gn.then(e).catch(function (r) {
          o.readyException(r);
        }),
        this
      );
    }),
      o.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (e === !0 ? --o.readyWait : o.isReady) ||
            ((o.isReady = !0),
            !(e !== !0 && --o.readyWait > 0) && Gn.resolveWith(N, [o]));
        },
      }),
      (o.ready.then = Gn.then);
    function Cn() {
      N.removeEventListener('DOMContentLoaded', Cn),
        t.removeEventListener('load', Cn),
        o.ready();
    }
    N.readyState === 'complete' ||
    (N.readyState !== 'loading' && !N.documentElement.doScroll)
      ? t.setTimeout(o.ready)
      : (N.addEventListener('DOMContentLoaded', Cn),
        t.addEventListener('load', Cn));
    var pt = function (e, r, u, a, d, p, h) {
        var S = 0,
          E = e.length,
          B = u == null;
        if (Q(u) === 'object') {
          d = !0;
          for (S in u) pt(e, r, S, u[S], !0, p, h);
        } else if (
          a !== void 0 &&
          ((d = !0),
          _(a) || (h = !0),
          B &&
            (h
              ? (r.call(e, a), (r = null))
              : ((B = r),
                (r = function (F, J, x) {
                  return B.call(o(F), x);
                }))),
          r)
        )
          for (; S < E; S++) r(e[S], u, h ? a : a.call(e[S], S, r(e[S], u)));
        return d ? e : B ? r.call(e) : E ? r(e[0], u) : p;
      },
      Ms = /^-ms-/,
      Vs = /-([a-z])/g;
    function js(e, r) {
      return r.toUpperCase();
    }
    function ot(e) {
      return e.replace(Ms, 'ms-').replace(Vs, js);
    }
    var rn = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function sn() {
      this.expando = o.expando + sn.uid++;
    }
    (sn.uid = 1),
      (sn.prototype = {
        cache: function (e) {
          var r = e[this.expando];
          return (
            r ||
              ((r = {}),
              rn(e) &&
                (e.nodeType
                  ? (e[this.expando] = r)
                  : Object.defineProperty(e, this.expando, {
                      value: r,
                      configurable: !0,
                    }))),
            r
          );
        },
        set: function (e, r, u) {
          var a,
            d = this.cache(e);
          if (typeof r == 'string') d[ot(r)] = u;
          else for (a in r) d[ot(a)] = r[a];
          return d;
        },
        get: function (e, r) {
          return r === void 0
            ? this.cache(e)
            : e[this.expando] && e[this.expando][ot(r)];
        },
        access: function (e, r, u) {
          return r === void 0 || (r && typeof r == 'string' && u === void 0)
            ? this.get(e, r)
            : (this.set(e, r, u), u !== void 0 ? u : r);
        },
        remove: function (e, r) {
          var u,
            a = e[this.expando];
          if (a !== void 0) {
            if (r !== void 0)
              for (
                Array.isArray(r)
                  ? (r = r.map(ot))
                  : ((r = ot(r)), (r = (r in a) ? [r] : r.match(oe) || [])),
                  u = r.length;
                u--;

              )
                delete a[r[u]];
            (r === void 0 || o.isEmptyObject(a)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var r = e[this.expando];
          return r !== void 0 && !o.isEmptyObject(r);
        },
      });
    var ie = new sn(),
      Re = new sn(),
      Ws = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ks = /[A-Z]/g;
    function Hs(e) {
      return e === 'true'
        ? !0
        : e === 'false'
        ? !1
        : e === 'null'
        ? null
        : e === +e + ''
        ? +e
        : Ws.test(e)
        ? JSON.parse(e)
        : e;
    }
    function ji(e, r, u) {
      var a;
      if (u === void 0 && e.nodeType === 1)
        if (
          ((a = 'data-' + r.replace(Ks, '-$&').toLowerCase()),
          (u = e.getAttribute(a)),
          typeof u == 'string')
        ) {
          try {
            u = Hs(u);
          } catch {}
          Re.set(e, r, u);
        } else u = void 0;
      return u;
    }
    o.extend({
      hasData: function (e) {
        return Re.hasData(e) || ie.hasData(e);
      },
      data: function (e, r, u) {
        return Re.access(e, r, u);
      },
      removeData: function (e, r) {
        Re.remove(e, r);
      },
      _data: function (e, r, u) {
        return ie.access(e, r, u);
      },
      _removeData: function (e, r) {
        ie.remove(e, r);
      },
    }),
      o.fn.extend({
        data: function (e, r) {
          var u,
            a,
            d,
            p = this[0],
            h = p && p.attributes;
          if (e === void 0) {
            if (
              this.length &&
              ((d = Re.get(p)), p.nodeType === 1 && !ie.get(p, 'hasDataAttrs'))
            ) {
              for (u = h.length; u--; )
                h[u] &&
                  ((a = h[u].name),
                  a.indexOf('data-') === 0 &&
                    ((a = ot(a.slice(5))), ji(p, a, d[a])));
              ie.set(p, 'hasDataAttrs', !0);
            }
            return d;
          }
          return typeof e == 'object'
            ? this.each(function () {
                Re.set(this, e);
              })
            : pt(
                this,
                function (S) {
                  var E;
                  if (p && S === void 0)
                    return (
                      (E = Re.get(p, e)),
                      E !== void 0 || ((E = ji(p, e)), E !== void 0)
                        ? E
                        : void 0
                    );
                  this.each(function () {
                    Re.set(this, e, S);
                  });
                },
                null,
                r,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Re.remove(this, e);
          });
        },
      }),
      o.extend({
        queue: function (e, r, u) {
          var a;
          if (e)
            return (
              (r = (r || 'fx') + 'queue'),
              (a = ie.get(e, r)),
              u &&
                (!a || Array.isArray(u)
                  ? (a = ie.access(e, r, o.makeArray(u)))
                  : a.push(u)),
              a || []
            );
        },
        dequeue: function (e, r) {
          r = r || 'fx';
          var u = o.queue(e, r),
            a = u.length,
            d = u.shift(),
            p = o._queueHooks(e, r),
            h = function () {
              o.dequeue(e, r);
            };
          d === 'inprogress' && ((d = u.shift()), a--),
            d &&
              (r === 'fx' && u.unshift('inprogress'),
              delete p.stop,
              d.call(e, h, p)),
            !a && p && p.empty.fire();
        },
        _queueHooks: function (e, r) {
          var u = r + 'queueHooks';
          return (
            ie.get(e, u) ||
            ie.access(e, u, {
              empty: o.Callbacks('once memory').add(function () {
                ie.remove(e, [r + 'queue', u]);
              }),
            })
          );
        },
      }),
      o.fn.extend({
        queue: function (e, r) {
          var u = 2;
          return (
            typeof e != 'string' && ((r = e), (e = 'fx'), u--),
            arguments.length < u
              ? o.queue(this[0], e)
              : r === void 0
              ? this
              : this.each(function () {
                  var a = o.queue(this, e, r);
                  o._queueHooks(this, e),
                    e === 'fx' && a[0] !== 'inprogress' && o.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            o.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || 'fx', []);
        },
        promise: function (e, r) {
          var u,
            a = 1,
            d = o.Deferred(),
            p = this,
            h = this.length,
            S = function () {
              --a || d.resolveWith(p, [p]);
            };
          for (
            typeof e != 'string' && ((r = e), (e = void 0)), e = e || 'fx';
            h--;

          )
            (u = ie.get(p[h], e + 'queueHooks')),
              u && u.empty && (a++, u.empty.add(S));
          return S(), d.promise(r);
        },
      });
    var Wi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      un = new RegExp('^(?:([+-])=|)(' + Wi + ')([a-z%]*)$', 'i'),
      ht = ['Top', 'Right', 'Bottom', 'Left'],
      Ft = N.documentElement,
      Mt = function (e) {
        return o.contains(e.ownerDocument, e);
      },
      Qs = { composed: !0 };
    Ft.getRootNode &&
      (Mt = function (e) {
        return (
          o.contains(e.ownerDocument, e) ||
          e.getRootNode(Qs) === e.ownerDocument
        );
      });
    var En = function (e, r) {
      return (
        (e = r || e),
        e.style.display === 'none' ||
          (e.style.display === '' && Mt(e) && o.css(e, 'display') === 'none')
      );
    };
    function Ki(e, r, u, a) {
      var d,
        p,
        h = 20,
        S = a
          ? function () {
              return a.cur();
            }
          : function () {
              return o.css(e, r, '');
            },
        E = S(),
        B = (u && u[3]) || (o.cssNumber[r] ? '' : 'px'),
        F =
          e.nodeType &&
          (o.cssNumber[r] || (B !== 'px' && +E)) &&
          un.exec(o.css(e, r));
      if (F && F[3] !== B) {
        for (E = E / 2, B = B || F[3], F = +E || 1; h--; )
          o.style(e, r, F + B),
            (1 - p) * (1 - (p = S() / E || 0.5)) <= 0 && (h = 0),
            (F = F / p);
        (F = F * 2), o.style(e, r, F + B), (u = u || []);
      }
      return (
        u &&
          ((F = +F || +E || 0),
          (d = u[1] ? F + (u[1] + 1) * u[2] : +u[2]),
          a && ((a.unit = B), (a.start = F), (a.end = d))),
        d
      );
    }
    var Hi = {};
    function zs(e) {
      var r,
        u = e.ownerDocument,
        a = e.nodeName,
        d = Hi[a];
      return (
        d ||
        ((r = u.body.appendChild(u.createElement(a))),
        (d = o.css(r, 'display')),
        r.parentNode.removeChild(r),
        d === 'none' && (d = 'block'),
        (Hi[a] = d),
        d)
      );
    }
    function Vt(e, r) {
      for (var u, a, d = [], p = 0, h = e.length; p < h; p++)
        (a = e[p]),
          a.style &&
            ((u = a.style.display),
            r
              ? (u === 'none' &&
                  ((d[p] = ie.get(a, 'display') || null),
                  d[p] || (a.style.display = '')),
                a.style.display === '' && En(a) && (d[p] = zs(a)))
              : u !== 'none' && ((d[p] = 'none'), ie.set(a, 'display', u)));
      for (p = 0; p < h; p++) d[p] != null && (e[p].style.display = d[p]);
      return e;
    }
    o.fn.extend({
      show: function () {
        return Vt(this, !0);
      },
      hide: function () {
        return Vt(this);
      },
      toggle: function (e) {
        return typeof e == 'boolean'
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              En(this) ? o(this).show() : o(this).hide();
            });
      },
    });
    var an = /^(?:checkbox|radio)$/i,
      Qi = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      zi = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var e = N.createDocumentFragment(),
        r = e.appendChild(N.createElement('div')),
        u = N.createElement('input');
      u.setAttribute('type', 'radio'),
        u.setAttribute('checked', 'checked'),
        u.setAttribute('name', 't'),
        r.appendChild(u),
        (I.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (r.innerHTML = '<textarea>x</textarea>'),
        (I.noCloneChecked = !!r.cloneNode(!0).lastChild.defaultValue),
        (r.innerHTML = '<option></option>'),
        (I.option = !!r.lastChild);
    })();
    var Ze = {
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
    (Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead),
      (Ze.th = Ze.td),
      I.option ||
        (Ze.optgroup = Ze.option =
          [1, "<select multiple='multiple'>", '</select>']);
    function _e(e, r) {
      var u;
      return (
        typeof e.getElementsByTagName != 'undefined'
          ? (u = e.getElementsByTagName(r || '*'))
          : typeof e.querySelectorAll != 'undefined'
          ? (u = e.querySelectorAll(r || '*'))
          : (u = []),
        r === void 0 || (r && ue(e, r)) ? o.merge([e], u) : u
      );
    }
    function Xn(e, r) {
      for (var u = 0, a = e.length; u < a; u++)
        ie.set(e[u], 'globalEval', !r || ie.get(r[u], 'globalEval'));
    }
    var Gs = /<|&#?\w+;/;
    function Gi(e, r, u, a, d) {
      for (
        var p,
          h,
          S,
          E,
          B,
          F,
          J = r.createDocumentFragment(),
          x = [],
          D = 0,
          G = e.length;
        D < G;
        D++
      )
        if (((p = e[D]), p || p === 0))
          if (Q(p) === 'object') o.merge(x, p.nodeType ? [p] : p);
          else if (!Gs.test(p)) x.push(r.createTextNode(p));
          else {
            for (
              h = h || J.appendChild(r.createElement('div')),
                S = (Qi.exec(p) || ['', ''])[1].toLowerCase(),
                E = Ze[S] || Ze._default,
                h.innerHTML = E[1] + o.htmlPrefilter(p) + E[2],
                F = E[0];
              F--;

            )
              h = h.lastChild;
            o.merge(x, h.childNodes), (h = J.firstChild), (h.textContent = '');
          }
      for (J.textContent = '', D = 0; (p = x[D++]); ) {
        if (a && o.inArray(p, a) > -1) {
          d && d.push(p);
          continue;
        }
        if (((B = Mt(p)), (h = _e(J.appendChild(p), 'script')), B && Xn(h), u))
          for (F = 0; (p = h[F++]); ) zi.test(p.type || '') && u.push(p);
      }
      return J;
    }
    var Xi = /^([^.]*)(?:\.(.+)|)/;
    function jt() {
      return !0;
    }
    function Wt() {
      return !1;
    }
    function Xs(e, r) {
      return (e === Zs()) == (r === 'focus');
    }
    function Zs() {
      try {
        return N.activeElement;
      } catch {}
    }
    function Zn(e, r, u, a, d, p) {
      var h, S;
      if (typeof r == 'object') {
        typeof u != 'string' && ((a = a || u), (u = void 0));
        for (S in r) Zn(e, S, u, a, r[S], p);
        return e;
      }
      if (
        (a == null && d == null
          ? ((d = u), (a = u = void 0))
          : d == null &&
            (typeof u == 'string'
              ? ((d = a), (a = void 0))
              : ((d = a), (a = u), (u = void 0))),
        d === !1)
      )
        d = Wt;
      else if (!d) return e;
      return (
        p === 1 &&
          ((h = d),
          (d = function (E) {
            return o().off(E), h.apply(this, arguments);
          }),
          (d.guid = h.guid || (h.guid = o.guid++))),
        e.each(function () {
          o.event.add(this, r, d, a, u);
        })
      );
    }
    o.event = {
      global: {},
      add: function (e, r, u, a, d) {
        var p,
          h,
          S,
          E,
          B,
          F,
          J,
          x,
          D,
          G,
          fe,
          X = ie.get(e);
        if (!!rn(e))
          for (
            u.handler && ((p = u), (u = p.handler), (d = p.selector)),
              d && o.find.matchesSelector(Ft, d),
              u.guid || (u.guid = o.guid++),
              (E = X.events) || (E = X.events = Object.create(null)),
              (h = X.handle) ||
                (h = X.handle =
                  function (ke) {
                    return typeof o != 'undefined' &&
                      o.event.triggered !== ke.type
                      ? o.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              r = (r || '').match(oe) || [''],
              B = r.length;
            B--;

          )
            (S = Xi.exec(r[B]) || []),
              (D = fe = S[1]),
              (G = (S[2] || '').split('.').sort()),
              D &&
                ((J = o.event.special[D] || {}),
                (D = (d ? J.delegateType : J.bindType) || D),
                (J = o.event.special[D] || {}),
                (F = o.extend(
                  {
                    type: D,
                    origType: fe,
                    data: a,
                    handler: u,
                    guid: u.guid,
                    selector: d,
                    needsContext: d && o.expr.match.needsContext.test(d),
                    namespace: G.join('.'),
                  },
                  p
                )),
                (x = E[D]) ||
                  ((x = E[D] = []),
                  (x.delegateCount = 0),
                  (!J.setup || J.setup.call(e, a, G, h) === !1) &&
                    e.addEventListener &&
                    e.addEventListener(D, h)),
                J.add &&
                  (J.add.call(e, F),
                  F.handler.guid || (F.handler.guid = u.guid)),
                d ? x.splice(x.delegateCount++, 0, F) : x.push(F),
                (o.event.global[D] = !0));
      },
      remove: function (e, r, u, a, d) {
        var p,
          h,
          S,
          E,
          B,
          F,
          J,
          x,
          D,
          G,
          fe,
          X = ie.hasData(e) && ie.get(e);
        if (!(!X || !(E = X.events))) {
          for (r = (r || '').match(oe) || [''], B = r.length; B--; ) {
            if (
              ((S = Xi.exec(r[B]) || []),
              (D = fe = S[1]),
              (G = (S[2] || '').split('.').sort()),
              !D)
            ) {
              for (D in E) o.event.remove(e, D + r[B], u, a, !0);
              continue;
            }
            for (
              J = o.event.special[D] || {},
                D = (a ? J.delegateType : J.bindType) || D,
                x = E[D] || [],
                S =
                  S[2] &&
                  new RegExp('(^|\\.)' + G.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                h = p = x.length;
              p--;

            )
              (F = x[p]),
                (d || fe === F.origType) &&
                  (!u || u.guid === F.guid) &&
                  (!S || S.test(F.namespace)) &&
                  (!a || a === F.selector || (a === '**' && F.selector)) &&
                  (x.splice(p, 1),
                  F.selector && x.delegateCount--,
                  J.remove && J.remove.call(e, F));
            h &&
              !x.length &&
              ((!J.teardown || J.teardown.call(e, G, X.handle) === !1) &&
                o.removeEvent(e, D, X.handle),
              delete E[D]);
          }
          o.isEmptyObject(E) && ie.remove(e, 'handle events');
        }
      },
      dispatch: function (e) {
        var r,
          u,
          a,
          d,
          p,
          h,
          S = new Array(arguments.length),
          E = o.event.fix(e),
          B = (ie.get(this, 'events') || Object.create(null))[E.type] || [],
          F = o.event.special[E.type] || {};
        for (S[0] = E, r = 1; r < arguments.length; r++) S[r] = arguments[r];
        if (
          ((E.delegateTarget = this),
          !(F.preDispatch && F.preDispatch.call(this, E) === !1))
        ) {
          for (
            h = o.event.handlers.call(this, E, B), r = 0;
            (d = h[r++]) && !E.isPropagationStopped();

          )
            for (
              E.currentTarget = d.elem, u = 0;
              (p = d.handlers[u++]) && !E.isImmediatePropagationStopped();

            )
              (!E.rnamespace ||
                p.namespace === !1 ||
                E.rnamespace.test(p.namespace)) &&
                ((E.handleObj = p),
                (E.data = p.data),
                (a = (
                  (o.event.special[p.origType] || {}).handle || p.handler
                ).apply(d.elem, S)),
                a !== void 0 &&
                  (E.result = a) === !1 &&
                  (E.preventDefault(), E.stopPropagation()));
          return F.postDispatch && F.postDispatch.call(this, E), E.result;
        }
      },
      handlers: function (e, r) {
        var u,
          a,
          d,
          p,
          h,
          S = [],
          E = r.delegateCount,
          B = e.target;
        if (E && B.nodeType && !(e.type === 'click' && e.button >= 1)) {
          for (; B !== this; B = B.parentNode || this)
            if (
              B.nodeType === 1 &&
              !(e.type === 'click' && B.disabled === !0)
            ) {
              for (p = [], h = {}, u = 0; u < E; u++)
                (a = r[u]),
                  (d = a.selector + ' '),
                  h[d] === void 0 &&
                    (h[d] = a.needsContext
                      ? o(d, this).index(B) > -1
                      : o.find(d, this, null, [B]).length),
                  h[d] && p.push(a);
              p.length && S.push({ elem: B, handlers: p });
            }
        }
        return (
          (B = this),
          E < r.length && S.push({ elem: B, handlers: r.slice(E) }),
          S
        );
      },
      addProp: function (e, r) {
        Object.defineProperty(o.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: _(r)
            ? function () {
                if (this.originalEvent) return r(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (u) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: u,
            });
          },
        });
      },
      fix: function (e) {
        return e[o.expando] ? e : new o.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var r = this || e;
            return (
              an.test(r.type) &&
                r.click &&
                ue(r, 'input') &&
                bn(r, 'click', jt),
              !1
            );
          },
          trigger: function (e) {
            var r = this || e;
            return (
              an.test(r.type) && r.click && ue(r, 'input') && bn(r, 'click'), !0
            );
          },
          _default: function (e) {
            var r = e.target;
            return (
              (an.test(r.type) &&
                r.click &&
                ue(r, 'input') &&
                ie.get(r, 'click')) ||
              ue(r, 'a')
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== void 0 &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    };
    function bn(e, r, u) {
      if (!u) {
        ie.get(e, r) === void 0 && o.event.add(e, r, jt);
        return;
      }
      ie.set(e, r, !1),
        o.event.add(e, r, {
          namespace: !1,
          handler: function (a) {
            var d,
              p,
              h = ie.get(this, r);
            if (a.isTrigger & 1 && this[r]) {
              if (h.length)
                (o.event.special[r] || {}).delegateType && a.stopPropagation();
              else if (
                ((h = f.call(arguments)),
                ie.set(this, r, h),
                (d = u(this, r)),
                this[r](),
                (p = ie.get(this, r)),
                h !== p || d ? ie.set(this, r, !1) : (p = {}),
                h !== p)
              )
                return (
                  a.stopImmediatePropagation(), a.preventDefault(), p && p.value
                );
            } else
              h.length &&
                (ie.set(this, r, {
                  value: o.event.trigger(
                    o.extend(h[0], o.Event.prototype),
                    h.slice(1),
                    this
                  ),
                }),
                a.stopImmediatePropagation());
          },
        });
    }
    (o.removeEvent = function (e, r, u) {
      e.removeEventListener && e.removeEventListener(r, u);
    }),
      (o.Event = function (e, r) {
        if (!(this instanceof o.Event)) return new o.Event(e, r);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === void 0 && e.returnValue === !1)
                ? jt
                : Wt),
            (this.target =
              e.target && e.target.nodeType === 3
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          r && o.extend(this, r),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[o.expando] = !0);
      }),
      (o.Event.prototype = {
        constructor: o.Event,
        isDefaultPrevented: Wt,
        isPropagationStopped: Wt,
        isImmediatePropagationStopped: Wt,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = jt),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = jt),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = jt),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      o.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        o.event.addProp
      ),
      o.each({ focus: 'focusin', blur: 'focusout' }, function (e, r) {
        o.event.special[e] = {
          setup: function () {
            return bn(this, e, Xs), !1;
          },
          trigger: function () {
            return bn(this, e), !0;
          },
          _default: function () {
            return !0;
          },
          delegateType: r,
        };
      }),
      o.each(
        {
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
          pointerenter: 'pointerover',
          pointerleave: 'pointerout',
        },
        function (e, r) {
          o.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (u) {
              var a,
                d = this,
                p = u.relatedTarget,
                h = u.handleObj;
              return (
                (!p || (p !== d && !o.contains(d, p))) &&
                  ((u.type = h.origType),
                  (a = h.handler.apply(this, arguments)),
                  (u.type = r)),
                a
              );
            },
          };
        }
      ),
      o.fn.extend({
        on: function (e, r, u, a) {
          return Zn(this, e, r, u, a);
        },
        one: function (e, r, u, a) {
          return Zn(this, e, r, u, a, 1);
        },
        off: function (e, r, u) {
          var a, d;
          if (e && e.preventDefault && e.handleObj)
            return (
              (a = e.handleObj),
              o(e.delegateTarget).off(
                a.namespace ? a.origType + '.' + a.namespace : a.origType,
                a.selector,
                a.handler
              ),
              this
            );
          if (typeof e == 'object') {
            for (d in e) this.off(d, r, e[d]);
            return this;
          }
          return (
            (r === !1 || typeof r == 'function') && ((u = r), (r = void 0)),
            u === !1 && (u = Wt),
            this.each(function () {
              o.event.remove(this, e, u, r);
            })
          );
        },
      });
    var Ys = /<script|<style|<link/i,
      $s = /checked\s*(?:[^=]|=\s*.checked.)/i,
      eu = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Zi(e, r) {
      return (
        (ue(e, 'table') &&
          ue(r.nodeType !== 11 ? r : r.firstChild, 'tr') &&
          o(e).children('tbody')[0]) ||
        e
      );
    }
    function tu(e) {
      return (e.type = (e.getAttribute('type') !== null) + '/' + e.type), e;
    }
    function nu(e) {
      return (
        (e.type || '').slice(0, 5) === 'true/'
          ? (e.type = e.type.slice(5))
          : e.removeAttribute('type'),
        e
      );
    }
    function Yi(e, r) {
      var u, a, d, p, h, S, E;
      if (r.nodeType === 1) {
        if (ie.hasData(e) && ((p = ie.get(e)), (E = p.events), E)) {
          ie.remove(r, 'handle events');
          for (d in E)
            for (u = 0, a = E[d].length; u < a; u++) o.event.add(r, d, E[d][u]);
        }
        Re.hasData(e) &&
          ((h = Re.access(e)), (S = o.extend({}, h)), Re.set(r, S));
      }
    }
    function iu(e, r) {
      var u = r.nodeName.toLowerCase();
      u === 'input' && an.test(e.type)
        ? (r.checked = e.checked)
        : (u === 'input' || u === 'textarea') &&
          (r.defaultValue = e.defaultValue);
    }
    function Kt(e, r, u, a) {
      r = c(r);
      var d,
        p,
        h,
        S,
        E,
        B,
        F = 0,
        J = e.length,
        x = J - 1,
        D = r[0],
        G = _(D);
      if (G || (J > 1 && typeof D == 'string' && !I.checkClone && $s.test(D)))
        return e.each(function (fe) {
          var X = e.eq(fe);
          G && (r[0] = D.call(this, fe, X.html())), Kt(X, r, u, a);
        });
      if (
        J &&
        ((d = Gi(r, e[0].ownerDocument, !1, e, a)),
        (p = d.firstChild),
        d.childNodes.length === 1 && (d = p),
        p || a)
      ) {
        for (h = o.map(_e(d, 'script'), tu), S = h.length; F < J; F++)
          (E = d),
            F !== x &&
              ((E = o.clone(E, !0, !0)), S && o.merge(h, _e(E, 'script'))),
            u.call(e[F], E, F);
        if (S)
          for (
            B = h[h.length - 1].ownerDocument, o.map(h, nu), F = 0;
            F < S;
            F++
          )
            (E = h[F]),
              zi.test(E.type || '') &&
                !ie.access(E, 'globalEval') &&
                o.contains(B, E) &&
                (E.src && (E.type || '').toLowerCase() !== 'module'
                  ? o._evalUrl &&
                    !E.noModule &&
                    o._evalUrl(
                      E.src,
                      { nonce: E.nonce || E.getAttribute('nonce') },
                      B
                    )
                  : K(E.textContent.replace(eu, ''), E, B));
      }
      return e;
    }
    function $i(e, r, u) {
      for (var a, d = r ? o.filter(r, e) : e, p = 0; (a = d[p]) != null; p++)
        !u && a.nodeType === 1 && o.cleanData(_e(a)),
          a.parentNode &&
            (u && Mt(a) && Xn(_e(a, 'script')), a.parentNode.removeChild(a));
      return e;
    }
    o.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, r, u) {
        var a,
          d,
          p,
          h,
          S = e.cloneNode(!0),
          E = Mt(e);
        if (
          !I.noCloneChecked &&
          (e.nodeType === 1 || e.nodeType === 11) &&
          !o.isXMLDoc(e)
        )
          for (h = _e(S), p = _e(e), a = 0, d = p.length; a < d; a++)
            iu(p[a], h[a]);
        if (r)
          if (u)
            for (
              p = p || _e(e), h = h || _e(S), a = 0, d = p.length;
              a < d;
              a++
            )
              Yi(p[a], h[a]);
          else Yi(e, S);
        return (
          (h = _e(S, 'script')), h.length > 0 && Xn(h, !E && _e(e, 'script')), S
        );
      },
      cleanData: function (e) {
        for (
          var r, u, a, d = o.event.special, p = 0;
          (u = e[p]) !== void 0;
          p++
        )
          if (rn(u)) {
            if ((r = u[ie.expando])) {
              if (r.events)
                for (a in r.events)
                  d[a] ? o.event.remove(u, a) : o.removeEvent(u, a, r.handle);
              u[ie.expando] = void 0;
            }
            u[Re.expando] && (u[Re.expando] = void 0);
          }
      },
    }),
      o.fn.extend({
        detach: function (e) {
          return $i(this, e, !0);
        },
        remove: function (e) {
          return $i(this, e);
        },
        text: function (e) {
          return pt(
            this,
            function (r) {
              return r === void 0
                ? o.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = r);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return Kt(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var r = Zi(this, e);
              r.appendChild(e);
            }
          });
        },
        prepend: function () {
          return Kt(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var r = Zi(this, e);
              r.insertBefore(e, r.firstChild);
            }
          });
        },
        before: function () {
          return Kt(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Kt(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, r = 0; (e = this[r]) != null; r++)
            e.nodeType === 1 && (o.cleanData(_e(e, !1)), (e.textContent = ''));
          return this;
        },
        clone: function (e, r) {
          return (
            (e = e == null ? !1 : e),
            (r = r == null ? e : r),
            this.map(function () {
              return o.clone(this, e, r);
            })
          );
        },
        html: function (e) {
          return pt(
            this,
            function (r) {
              var u = this[0] || {},
                a = 0,
                d = this.length;
              if (r === void 0 && u.nodeType === 1) return u.innerHTML;
              if (
                typeof r == 'string' &&
                !Ys.test(r) &&
                !Ze[(Qi.exec(r) || ['', ''])[1].toLowerCase()]
              ) {
                r = o.htmlPrefilter(r);
                try {
                  for (; a < d; a++)
                    (u = this[a] || {}),
                      u.nodeType === 1 &&
                        (o.cleanData(_e(u, !1)), (u.innerHTML = r));
                  u = 0;
                } catch {}
              }
              u && this.empty().append(r);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return Kt(
            this,
            arguments,
            function (r) {
              var u = this.parentNode;
              o.inArray(this, e) < 0 &&
                (o.cleanData(_e(this)), u && u.replaceChild(r, this));
            },
            e
          );
        },
      }),
      o.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith',
        },
        function (e, r) {
          o.fn[e] = function (u) {
            for (var a, d = [], p = o(u), h = p.length - 1, S = 0; S <= h; S++)
              (a = S === h ? this : this.clone(!0)),
                o(p[S])[r](a),
                m.apply(d, a.get());
            return this.pushStack(d);
          };
        }
      );
    var Yn = new RegExp('^(' + Wi + ')(?!px)[a-z%]+$', 'i'),
      Bn = function (e) {
        var r = e.ownerDocument.defaultView;
        return (!r || !r.opener) && (r = t), r.getComputedStyle(e);
      },
      er = function (e, r, u) {
        var a,
          d,
          p = {};
        for (d in r) (p[d] = e.style[d]), (e.style[d] = r[d]);
        a = u.call(e);
        for (d in r) e.style[d] = p[d];
        return a;
      },
      ru = new RegExp(ht.join('|'), 'i');
    (function () {
      function e() {
        if (!!B) {
          (E.style.cssText =
            'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
            (B.style.cssText =
              'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
            Ft.appendChild(E).appendChild(B);
          var F = t.getComputedStyle(B);
          (u = F.top !== '1%'),
            (S = r(F.marginLeft) === 12),
            (B.style.right = '60%'),
            (p = r(F.right) === 36),
            (a = r(F.width) === 36),
            (B.style.position = 'absolute'),
            (d = r(B.offsetWidth / 3) === 12),
            Ft.removeChild(E),
            (B = null);
        }
      }
      function r(F) {
        return Math.round(parseFloat(F));
      }
      var u,
        a,
        d,
        p,
        h,
        S,
        E = N.createElement('div'),
        B = N.createElement('div');
      !B.style ||
        ((B.style.backgroundClip = 'content-box'),
        (B.cloneNode(!0).style.backgroundClip = ''),
        (I.clearCloneStyle = B.style.backgroundClip === 'content-box'),
        o.extend(I, {
          boxSizingReliable: function () {
            return e(), a;
          },
          pixelBoxStyles: function () {
            return e(), p;
          },
          pixelPosition: function () {
            return e(), u;
          },
          reliableMarginLeft: function () {
            return e(), S;
          },
          scrollboxSize: function () {
            return e(), d;
          },
          reliableTrDimensions: function () {
            var F, J, x, D;
            return (
              h == null &&
                ((F = N.createElement('table')),
                (J = N.createElement('tr')),
                (x = N.createElement('div')),
                (F.style.cssText =
                  'position:absolute;left:-11111px;border-collapse:separate'),
                (J.style.cssText = 'border:1px solid'),
                (J.style.height = '1px'),
                (x.style.height = '9px'),
                (x.style.display = 'block'),
                Ft.appendChild(F).appendChild(J).appendChild(x),
                (D = t.getComputedStyle(J)),
                (h =
                  parseInt(D.height, 10) +
                    parseInt(D.borderTopWidth, 10) +
                    parseInt(D.borderBottomWidth, 10) ===
                  J.offsetHeight),
                Ft.removeChild(F)),
              h
            );
          },
        }));
    })();
    function on(e, r, u) {
      var a,
        d,
        p,
        h,
        S = e.style;
      return (
        (u = u || Bn(e)),
        u &&
          ((h = u.getPropertyValue(r) || u[r]),
          h === '' && !Mt(e) && (h = o.style(e, r)),
          !I.pixelBoxStyles() &&
            Yn.test(h) &&
            ru.test(r) &&
            ((a = S.width),
            (d = S.minWidth),
            (p = S.maxWidth),
            (S.minWidth = S.maxWidth = S.width = h),
            (h = u.width),
            (S.width = a),
            (S.minWidth = d),
            (S.maxWidth = p))),
        h !== void 0 ? h + '' : h
      );
    }
    function tr(e, r) {
      return {
        get: function () {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = r).apply(this, arguments);
        },
      };
    }
    var nr = ['Webkit', 'Moz', 'ms'],
      ir = N.createElement('div').style,
      rr = {};
    function su(e) {
      for (var r = e[0].toUpperCase() + e.slice(1), u = nr.length; u--; )
        if (((e = nr[u] + r), e in ir)) return e;
    }
    function $n(e) {
      var r = o.cssProps[e] || rr[e];
      return r || (e in ir ? e : (rr[e] = su(e) || e));
    }
    var uu = /^(none|table(?!-c[ea]).+)/,
      sr = /^--/,
      au = { position: 'absolute', visibility: 'hidden', display: 'block' },
      ur = { letterSpacing: '0', fontWeight: '400' };
    function ar(e, r, u) {
      var a = un.exec(r);
      return a ? Math.max(0, a[2] - (u || 0)) + (a[3] || 'px') : r;
    }
    function ei(e, r, u, a, d, p) {
      var h = r === 'width' ? 1 : 0,
        S = 0,
        E = 0;
      if (u === (a ? 'border' : 'content')) return 0;
      for (; h < 4; h += 2)
        u === 'margin' && (E += o.css(e, u + ht[h], !0, d)),
          a
            ? (u === 'content' && (E -= o.css(e, 'padding' + ht[h], !0, d)),
              u !== 'margin' &&
                (E -= o.css(e, 'border' + ht[h] + 'Width', !0, d)))
            : ((E += o.css(e, 'padding' + ht[h], !0, d)),
              u !== 'padding'
                ? (E += o.css(e, 'border' + ht[h] + 'Width', !0, d))
                : (S += o.css(e, 'border' + ht[h] + 'Width', !0, d)));
      return (
        !a &&
          p >= 0 &&
          (E +=
            Math.max(
              0,
              Math.ceil(
                e['offset' + r[0].toUpperCase() + r.slice(1)] - p - E - S - 0.5
              )
            ) || 0),
        E
      );
    }
    function or(e, r, u) {
      var a = Bn(e),
        d = !I.boxSizingReliable() || u,
        p = d && o.css(e, 'boxSizing', !1, a) === 'border-box',
        h = p,
        S = on(e, r, a),
        E = 'offset' + r[0].toUpperCase() + r.slice(1);
      if (Yn.test(S)) {
        if (!u) return S;
        S = 'auto';
      }
      return (
        ((!I.boxSizingReliable() && p) ||
          (!I.reliableTrDimensions() && ue(e, 'tr')) ||
          S === 'auto' ||
          (!parseFloat(S) && o.css(e, 'display', !1, a) === 'inline')) &&
          e.getClientRects().length &&
          ((p = o.css(e, 'boxSizing', !1, a) === 'border-box'),
          (h = E in e),
          h && (S = e[E])),
        (S = parseFloat(S) || 0),
        S + ei(e, r, u || (p ? 'border' : 'content'), h, a, S) + 'px'
      );
    }
    o.extend({
      cssHooks: {
        opacity: {
          get: function (e, r) {
            if (r) {
              var u = on(e, 'opacity');
              return u === '' ? '1' : u;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, r, u, a) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var d,
            p,
            h,
            S = ot(r),
            E = sr.test(r),
            B = e.style;
          if (
            (E || (r = $n(S)),
            (h = o.cssHooks[r] || o.cssHooks[S]),
            u !== void 0)
          ) {
            if (
              ((p = typeof u),
              p === 'string' &&
                (d = un.exec(u)) &&
                d[1] &&
                ((u = Ki(e, r, d)), (p = 'number')),
              u == null || u !== u)
            )
              return;
            p === 'number' &&
              !E &&
              (u += (d && d[3]) || (o.cssNumber[S] ? '' : 'px')),
              !I.clearCloneStyle &&
                u === '' &&
                r.indexOf('background') === 0 &&
                (B[r] = 'inherit'),
              (!h || !('set' in h) || (u = h.set(e, u, a)) !== void 0) &&
                (E ? B.setProperty(r, u) : (B[r] = u));
          } else
            return h && 'get' in h && (d = h.get(e, !1, a)) !== void 0
              ? d
              : B[r];
        }
      },
      css: function (e, r, u, a) {
        var d,
          p,
          h,
          S = ot(r),
          E = sr.test(r);
        return (
          E || (r = $n(S)),
          (h = o.cssHooks[r] || o.cssHooks[S]),
          h && 'get' in h && (d = h.get(e, !0, u)),
          d === void 0 && (d = on(e, r, a)),
          d === 'normal' && r in ur && (d = ur[r]),
          u === '' || u
            ? ((p = parseFloat(d)), u === !0 || isFinite(p) ? p || 0 : d)
            : d
        );
      },
    }),
      o.each(['height', 'width'], function (e, r) {
        o.cssHooks[r] = {
          get: function (u, a, d) {
            if (a)
              return uu.test(o.css(u, 'display')) &&
                (!u.getClientRects().length || !u.getBoundingClientRect().width)
                ? er(u, au, function () {
                    return or(u, r, d);
                  })
                : or(u, r, d);
          },
          set: function (u, a, d) {
            var p,
              h = Bn(u),
              S = !I.scrollboxSize() && h.position === 'absolute',
              E = S || d,
              B = E && o.css(u, 'boxSizing', !1, h) === 'border-box',
              F = d ? ei(u, r, d, B, h) : 0;
            return (
              B &&
                S &&
                (F -= Math.ceil(
                  u['offset' + r[0].toUpperCase() + r.slice(1)] -
                    parseFloat(h[r]) -
                    ei(u, r, 'border', !1, h) -
                    0.5
                )),
              F &&
                (p = un.exec(a)) &&
                (p[3] || 'px') !== 'px' &&
                ((u.style[r] = a), (a = o.css(u, r))),
              ar(u, a, F)
            );
          },
        };
      }),
      (o.cssHooks.marginLeft = tr(I.reliableMarginLeft, function (e, r) {
        if (r)
          return (
            (parseFloat(on(e, 'marginLeft')) ||
              e.getBoundingClientRect().left -
                er(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + 'px'
          );
      })),
      o.each({ margin: '', padding: '', border: 'Width' }, function (e, r) {
        (o.cssHooks[e + r] = {
          expand: function (u) {
            for (
              var a = 0, d = {}, p = typeof u == 'string' ? u.split(' ') : [u];
              a < 4;
              a++
            )
              d[e + ht[a] + r] = p[a] || p[a - 2] || p[0];
            return d;
          },
        }),
          e !== 'margin' && (o.cssHooks[e + r].set = ar);
      }),
      o.fn.extend({
        css: function (e, r) {
          return pt(
            this,
            function (u, a, d) {
              var p,
                h,
                S = {},
                E = 0;
              if (Array.isArray(a)) {
                for (p = Bn(u), h = a.length; E < h; E++)
                  S[a[E]] = o.css(u, a[E], !1, p);
                return S;
              }
              return d !== void 0 ? o.style(u, a, d) : o.css(u, a);
            },
            e,
            r,
            arguments.length > 1
          );
        },
      });
    function Ue(e, r, u, a, d) {
      return new Ue.prototype.init(e, r, u, a, d);
    }
    (o.Tween = Ue),
      (Ue.prototype = {
        constructor: Ue,
        init: function (e, r, u, a, d, p) {
          (this.elem = e),
            (this.prop = u),
            (this.easing = d || o.easing._default),
            (this.options = r),
            (this.start = this.now = this.cur()),
            (this.end = a),
            (this.unit = p || (o.cssNumber[u] ? '' : 'px'));
        },
        cur: function () {
          var e = Ue.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ue.propHooks._default.get(this);
        },
        run: function (e) {
          var r,
            u = Ue.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = r =
                  o.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = r = e),
            (this.now = (this.end - this.start) * r + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            u && u.set ? u.set(this) : Ue.propHooks._default.set(this),
            this
          );
        },
      }),
      (Ue.prototype.init.prototype = Ue.prototype),
      (Ue.propHooks = {
        _default: {
          get: function (e) {
            var r;
            return e.elem.nodeType !== 1 ||
              (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
              ? e.elem[e.prop]
              : ((r = o.css(e.elem, e.prop, '')), !r || r === 'auto' ? 0 : r);
          },
          set: function (e) {
            o.fx.step[e.prop]
              ? o.fx.step[e.prop](e)
              : e.elem.nodeType === 1 &&
                (o.cssHooks[e.prop] || e.elem.style[$n(e.prop)] != null)
              ? o.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (Ue.propHooks.scrollTop = Ue.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (o.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing',
      }),
      (o.fx = Ue.prototype.init),
      (o.fx.step = {});
    var Ht,
      kn,
      ou = /^(?:toggle|show|hide)$/,
      lu = /queueHooks$/;
    function ti() {
      kn &&
        (N.hidden === !1 && t.requestAnimationFrame
          ? t.requestAnimationFrame(ti)
          : t.setTimeout(ti, o.fx.interval),
        o.fx.tick());
    }
    function lr() {
      return (
        t.setTimeout(function () {
          Ht = void 0;
        }),
        (Ht = Date.now())
      );
    }
    function Tn(e, r) {
      var u,
        a = 0,
        d = { height: e };
      for (r = r ? 1 : 0; a < 4; a += 2 - r)
        (u = ht[a]), (d['margin' + u] = d['padding' + u] = e);
      return r && (d.opacity = d.width = e), d;
    }
    function fr(e, r, u) {
      for (
        var a,
          d = (nt.tweeners[r] || []).concat(nt.tweeners['*']),
          p = 0,
          h = d.length;
        p < h;
        p++
      )
        if ((a = d[p].call(u, r, e))) return a;
    }
    function fu(e, r, u) {
      var a,
        d,
        p,
        h,
        S,
        E,
        B,
        F,
        J = 'width' in r || 'height' in r,
        x = this,
        D = {},
        G = e.style,
        fe = e.nodeType && En(e),
        X = ie.get(e, 'fxshow');
      u.queue ||
        ((h = o._queueHooks(e, 'fx')),
        h.unqueued == null &&
          ((h.unqueued = 0),
          (S = h.empty.fire),
          (h.empty.fire = function () {
            h.unqueued || S();
          })),
        h.unqueued++,
        x.always(function () {
          x.always(function () {
            h.unqueued--, o.queue(e, 'fx').length || h.empty.fire();
          });
        }));
      for (a in r)
        if (((d = r[a]), ou.test(d))) {
          if (
            (delete r[a],
            (p = p || d === 'toggle'),
            d === (fe ? 'hide' : 'show'))
          )
            if (d === 'show' && X && X[a] !== void 0) fe = !0;
            else continue;
          D[a] = (X && X[a]) || o.style(e, a);
        }
      if (((E = !o.isEmptyObject(r)), !(!E && o.isEmptyObject(D)))) {
        J &&
          e.nodeType === 1 &&
          ((u.overflow = [G.overflow, G.overflowX, G.overflowY]),
          (B = X && X.display),
          B == null && (B = ie.get(e, 'display')),
          (F = o.css(e, 'display')),
          F === 'none' &&
            (B
              ? (F = B)
              : (Vt([e], !0),
                (B = e.style.display || B),
                (F = o.css(e, 'display')),
                Vt([e]))),
          (F === 'inline' || (F === 'inline-block' && B != null)) &&
            o.css(e, 'float') === 'none' &&
            (E ||
              (x.done(function () {
                G.display = B;
              }),
              B == null && ((F = G.display), (B = F === 'none' ? '' : F))),
            (G.display = 'inline-block'))),
          u.overflow &&
            ((G.overflow = 'hidden'),
            x.always(function () {
              (G.overflow = u.overflow[0]),
                (G.overflowX = u.overflow[1]),
                (G.overflowY = u.overflow[2]);
            })),
          (E = !1);
        for (a in D)
          E ||
            (X
              ? 'hidden' in X && (fe = X.hidden)
              : (X = ie.access(e, 'fxshow', { display: B })),
            p && (X.hidden = !fe),
            fe && Vt([e], !0),
            x.done(function () {
              fe || Vt([e]), ie.remove(e, 'fxshow');
              for (a in D) o.style(e, a, D[a]);
            })),
            (E = fr(fe ? X[a] : 0, a, x)),
            a in X ||
              ((X[a] = E.start), fe && ((E.end = E.start), (E.start = 0)));
      }
    }
    function du(e, r) {
      var u, a, d, p, h;
      for (u in e)
        if (
          ((a = ot(u)),
          (d = r[a]),
          (p = e[u]),
          Array.isArray(p) && ((d = p[1]), (p = e[u] = p[0])),
          u !== a && ((e[a] = p), delete e[u]),
          (h = o.cssHooks[a]),
          h && 'expand' in h)
        ) {
          (p = h.expand(p)), delete e[a];
          for (u in p) u in e || ((e[u] = p[u]), (r[u] = d));
        } else r[a] = d;
    }
    function nt(e, r, u) {
      var a,
        d,
        p = 0,
        h = nt.prefilters.length,
        S = o.Deferred().always(function () {
          delete E.elem;
        }),
        E = function () {
          if (d) return !1;
          for (
            var J = Ht || lr(),
              x = Math.max(0, B.startTime + B.duration - J),
              D = x / B.duration || 0,
              G = 1 - D,
              fe = 0,
              X = B.tweens.length;
            fe < X;
            fe++
          )
            B.tweens[fe].run(G);
          return (
            S.notifyWith(e, [B, G, x]),
            G < 1 && X
              ? x
              : (X || S.notifyWith(e, [B, 1, 0]), S.resolveWith(e, [B]), !1)
          );
        },
        B = S.promise({
          elem: e,
          props: o.extend({}, r),
          opts: o.extend(
            !0,
            { specialEasing: {}, easing: o.easing._default },
            u
          ),
          originalProperties: r,
          originalOptions: u,
          startTime: Ht || lr(),
          duration: u.duration,
          tweens: [],
          createTween: function (J, x) {
            var D = o.Tween(
              e,
              B.opts,
              J,
              x,
              B.opts.specialEasing[J] || B.opts.easing
            );
            return B.tweens.push(D), D;
          },
          stop: function (J) {
            var x = 0,
              D = J ? B.tweens.length : 0;
            if (d) return this;
            for (d = !0; x < D; x++) B.tweens[x].run(1);
            return (
              J
                ? (S.notifyWith(e, [B, 1, 0]), S.resolveWith(e, [B, J]))
                : S.rejectWith(e, [B, J]),
              this
            );
          },
        }),
        F = B.props;
      for (du(F, B.opts.specialEasing); p < h; p++)
        if (((a = nt.prefilters[p].call(B, e, F, B.opts)), a))
          return (
            _(a.stop) &&
              (o._queueHooks(B.elem, B.opts.queue).stop = a.stop.bind(a)),
            a
          );
      return (
        o.map(F, fr, B),
        _(B.opts.start) && B.opts.start.call(e, B),
        B.progress(B.opts.progress)
          .done(B.opts.done, B.opts.complete)
          .fail(B.opts.fail)
          .always(B.opts.always),
        o.fx.timer(o.extend(E, { elem: e, anim: B, queue: B.opts.queue })),
        B
      );
    }
    (o.Animation = o.extend(nt, {
      tweeners: {
        '*': [
          function (e, r) {
            var u = this.createTween(e, r);
            return Ki(u.elem, e, un.exec(r), u), u;
          },
        ],
      },
      tweener: function (e, r) {
        _(e) ? ((r = e), (e = ['*'])) : (e = e.match(oe));
        for (var u, a = 0, d = e.length; a < d; a++)
          (u = e[a]),
            (nt.tweeners[u] = nt.tweeners[u] || []),
            nt.tweeners[u].unshift(r);
      },
      prefilters: [fu],
      prefilter: function (e, r) {
        r ? nt.prefilters.unshift(e) : nt.prefilters.push(e);
      },
    })),
      (o.speed = function (e, r, u) {
        var a =
          e && typeof e == 'object'
            ? o.extend({}, e)
            : {
                complete: u || (!u && r) || (_(e) && e),
                duration: e,
                easing: (u && r) || (r && !_(r) && r),
              };
        return (
          o.fx.off
            ? (a.duration = 0)
            : typeof a.duration != 'number' &&
              (a.duration in o.fx.speeds
                ? (a.duration = o.fx.speeds[a.duration])
                : (a.duration = o.fx.speeds._default)),
          (a.queue == null || a.queue === !0) && (a.queue = 'fx'),
          (a.old = a.complete),
          (a.complete = function () {
            _(a.old) && a.old.call(this), a.queue && o.dequeue(this, a.queue);
          }),
          a
        );
      }),
      o.fn.extend({
        fadeTo: function (e, r, u, a) {
          return this.filter(En)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: r }, e, u, a);
        },
        animate: function (e, r, u, a) {
          var d = o.isEmptyObject(e),
            p = o.speed(r, u, a),
            h = function () {
              var S = nt(this, o.extend({}, e), p);
              (d || ie.get(this, 'finish')) && S.stop(!0);
            };
          return (
            (h.finish = h),
            d || p.queue === !1 ? this.each(h) : this.queue(p.queue, h)
          );
        },
        stop: function (e, r, u) {
          var a = function (d) {
            var p = d.stop;
            delete d.stop, p(u);
          };
          return (
            typeof e != 'string' && ((u = r), (r = e), (e = void 0)),
            r && this.queue(e || 'fx', []),
            this.each(function () {
              var d = !0,
                p = e != null && e + 'queueHooks',
                h = o.timers,
                S = ie.get(this);
              if (p) S[p] && S[p].stop && a(S[p]);
              else for (p in S) S[p] && S[p].stop && lu.test(p) && a(S[p]);
              for (p = h.length; p--; )
                h[p].elem === this &&
                  (e == null || h[p].queue === e) &&
                  (h[p].anim.stop(u), (d = !1), h.splice(p, 1));
              (d || !u) && o.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || 'fx'),
            this.each(function () {
              var r,
                u = ie.get(this),
                a = u[e + 'queue'],
                d = u[e + 'queueHooks'],
                p = o.timers,
                h = a ? a.length : 0;
              for (
                u.finish = !0,
                  o.queue(this, e, []),
                  d && d.stop && d.stop.call(this, !0),
                  r = p.length;
                r--;

              )
                p[r].elem === this &&
                  p[r].queue === e &&
                  (p[r].anim.stop(!0), p.splice(r, 1));
              for (r = 0; r < h; r++)
                a[r] && a[r].finish && a[r].finish.call(this);
              delete u.finish;
            })
          );
        },
      }),
      o.each(['toggle', 'show', 'hide'], function (e, r) {
        var u = o.fn[r];
        o.fn[r] = function (a, d, p) {
          return a == null || typeof a == 'boolean'
            ? u.apply(this, arguments)
            : this.animate(Tn(r, !0), a, d, p);
        };
      }),
      o.each(
        {
          slideDown: Tn('show'),
          slideUp: Tn('hide'),
          slideToggle: Tn('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' },
        },
        function (e, r) {
          o.fn[e] = function (u, a, d) {
            return this.animate(r, u, a, d);
          };
        }
      ),
      (o.timers = []),
      (o.fx.tick = function () {
        var e,
          r = 0,
          u = o.timers;
        for (Ht = Date.now(); r < u.length; r++)
          (e = u[r]), !e() && u[r] === e && u.splice(r--, 1);
        u.length || o.fx.stop(), (Ht = void 0);
      }),
      (o.fx.timer = function (e) {
        o.timers.push(e), o.fx.start();
      }),
      (o.fx.interval = 13),
      (o.fx.start = function () {
        kn || ((kn = !0), ti());
      }),
      (o.fx.stop = function () {
        kn = null;
      }),
      (o.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (o.fn.delay = function (e, r) {
        return (
          (e = (o.fx && o.fx.speeds[e]) || e),
          (r = r || 'fx'),
          this.queue(r, function (u, a) {
            var d = t.setTimeout(u, e);
            a.stop = function () {
              t.clearTimeout(d);
            };
          })
        );
      }),
      (function () {
        var e = N.createElement('input'),
          r = N.createElement('select'),
          u = r.appendChild(N.createElement('option'));
        (e.type = 'checkbox'),
          (I.checkOn = e.value !== ''),
          (I.optSelected = u.selected),
          (e = N.createElement('input')),
          (e.value = 't'),
          (e.type = 'radio'),
          (I.radioValue = e.value === 't');
      })();
    var dr,
      ln = o.expr.attrHandle;
    o.fn.extend({
      attr: function (e, r) {
        return pt(this, o.attr, e, r, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          o.removeAttr(this, e);
        });
      },
    }),
      o.extend({
        attr: function (e, r, u) {
          var a,
            d,
            p = e.nodeType;
          if (!(p === 3 || p === 8 || p === 2)) {
            if (typeof e.getAttribute == 'undefined') return o.prop(e, r, u);
            if (
              ((p !== 1 || !o.isXMLDoc(e)) &&
                (d =
                  o.attrHooks[r.toLowerCase()] ||
                  (o.expr.match.bool.test(r) ? dr : void 0)),
              u !== void 0)
            ) {
              if (u === null) {
                o.removeAttr(e, r);
                return;
              }
              return d && 'set' in d && (a = d.set(e, u, r)) !== void 0
                ? a
                : (e.setAttribute(r, u + ''), u);
            }
            return d && 'get' in d && (a = d.get(e, r)) !== null
              ? a
              : ((a = o.find.attr(e, r)), a == null ? void 0 : a);
          }
        },
        attrHooks: {
          type: {
            set: function (e, r) {
              if (!I.radioValue && r === 'radio' && ue(e, 'input')) {
                var u = e.value;
                return e.setAttribute('type', r), u && (e.value = u), r;
              }
            },
          },
        },
        removeAttr: function (e, r) {
          var u,
            a = 0,
            d = r && r.match(oe);
          if (d && e.nodeType === 1)
            for (; (u = d[a++]); ) e.removeAttribute(u);
        },
      }),
      (dr = {
        set: function (e, r, u) {
          return r === !1 ? o.removeAttr(e, u) : e.setAttribute(u, u), u;
        },
      }),
      o.each(o.expr.match.bool.source.match(/\w+/g), function (e, r) {
        var u = ln[r] || o.find.attr;
        ln[r] = function (a, d, p) {
          var h,
            S,
            E = d.toLowerCase();
          return (
            p ||
              ((S = ln[E]),
              (ln[E] = h),
              (h = u(a, d, p) != null ? E : null),
              (ln[E] = S)),
            h
          );
        };
      });
    var cu = /^(?:input|select|textarea|button)$/i,
      pu = /^(?:a|area)$/i;
    o.fn.extend({
      prop: function (e, r) {
        return pt(this, o.prop, e, r, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[o.propFix[e] || e];
        });
      },
    }),
      o.extend({
        prop: function (e, r, u) {
          var a,
            d,
            p = e.nodeType;
          if (!(p === 3 || p === 8 || p === 2))
            return (
              (p !== 1 || !o.isXMLDoc(e)) &&
                ((r = o.propFix[r] || r), (d = o.propHooks[r])),
              u !== void 0
                ? d && 'set' in d && (a = d.set(e, u, r)) !== void 0
                  ? a
                  : (e[r] = u)
                : d && 'get' in d && (a = d.get(e, r)) !== null
                ? a
                : e[r]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var r = o.find.attr(e, 'tabindex');
              return r
                ? parseInt(r, 10)
                : cu.test(e.nodeName) || (pu.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: 'htmlFor', class: 'className' },
      }),
      I.optSelected ||
        (o.propHooks.selected = {
          get: function (e) {
            var r = e.parentNode;
            return r && r.parentNode && r.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var r = e.parentNode;
            r && (r.selectedIndex, r.parentNode && r.parentNode.selectedIndex);
          },
        }),
      o.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable',
        ],
        function () {
          o.propFix[this.toLowerCase()] = this;
        }
      );
    function Dt(e) {
      var r = e.match(oe) || [];
      return r.join(' ');
    }
    function Lt(e) {
      return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function ni(e) {
      return Array.isArray(e)
        ? e
        : typeof e == 'string'
        ? e.match(oe) || []
        : [];
    }
    o.fn.extend({
      addClass: function (e) {
        var r,
          u,
          a,
          d,
          p,
          h,
          S,
          E = 0;
        if (_(e))
          return this.each(function (B) {
            o(this).addClass(e.call(this, B, Lt(this)));
          });
        if (((r = ni(e)), r.length)) {
          for (; (u = this[E++]); )
            if (((d = Lt(u)), (a = u.nodeType === 1 && ' ' + Dt(d) + ' '), a)) {
              for (h = 0; (p = r[h++]); )
                a.indexOf(' ' + p + ' ') < 0 && (a += p + ' ');
              (S = Dt(a)), d !== S && u.setAttribute('class', S);
            }
        }
        return this;
      },
      removeClass: function (e) {
        var r,
          u,
          a,
          d,
          p,
          h,
          S,
          E = 0;
        if (_(e))
          return this.each(function (B) {
            o(this).removeClass(e.call(this, B, Lt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if (((r = ni(e)), r.length)) {
          for (; (u = this[E++]); )
            if (((d = Lt(u)), (a = u.nodeType === 1 && ' ' + Dt(d) + ' '), a)) {
              for (h = 0; (p = r[h++]); )
                for (; a.indexOf(' ' + p + ' ') > -1; )
                  a = a.replace(' ' + p + ' ', ' ');
              (S = Dt(a)), d !== S && u.setAttribute('class', S);
            }
        }
        return this;
      },
      toggleClass: function (e, r) {
        var u = typeof e,
          a = u === 'string' || Array.isArray(e);
        return typeof r == 'boolean' && a
          ? r
            ? this.addClass(e)
            : this.removeClass(e)
          : _(e)
          ? this.each(function (d) {
              o(this).toggleClass(e.call(this, d, Lt(this), r), r);
            })
          : this.each(function () {
              var d, p, h, S;
              if (a)
                for (p = 0, h = o(this), S = ni(e); (d = S[p++]); )
                  h.hasClass(d) ? h.removeClass(d) : h.addClass(d);
              else
                (e === void 0 || u === 'boolean') &&
                  ((d = Lt(this)),
                  d && ie.set(this, '__className__', d),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      d || e === !1 ? '' : ie.get(this, '__className__') || ''
                    ));
            });
      },
      hasClass: function (e) {
        var r,
          u,
          a = 0;
        for (r = ' ' + e + ' '; (u = this[a++]); )
          if (u.nodeType === 1 && (' ' + Dt(Lt(u)) + ' ').indexOf(r) > -1)
            return !0;
        return !1;
      },
    });
    var hu = /\r/g;
    o.fn.extend({
      val: function (e) {
        var r,
          u,
          a,
          d = this[0];
        return arguments.length
          ? ((a = _(e)),
            this.each(function (p) {
              var h;
              this.nodeType === 1 &&
                (a ? (h = e.call(this, p, o(this).val())) : (h = e),
                h == null
                  ? (h = '')
                  : typeof h == 'number'
                  ? (h += '')
                  : Array.isArray(h) &&
                    (h = o.map(h, function (S) {
                      return S == null ? '' : S + '';
                    })),
                (r =
                  o.valHooks[this.type] ||
                  o.valHooks[this.nodeName.toLowerCase()]),
                (!r || !('set' in r) || r.set(this, h, 'value') === void 0) &&
                  (this.value = h));
            }))
          : d
          ? ((r = o.valHooks[d.type] || o.valHooks[d.nodeName.toLowerCase()]),
            r && 'get' in r && (u = r.get(d, 'value')) !== void 0
              ? u
              : ((u = d.value),
                typeof u == 'string' ? u.replace(hu, '') : u == null ? '' : u))
          : void 0;
      },
    }),
      o.extend({
        valHooks: {
          option: {
            get: function (e) {
              var r = o.find.attr(e, 'value');
              return r != null ? r : Dt(o.text(e));
            },
          },
          select: {
            get: function (e) {
              var r,
                u,
                a,
                d = e.options,
                p = e.selectedIndex,
                h = e.type === 'select-one',
                S = h ? null : [],
                E = h ? p + 1 : d.length;
              for (p < 0 ? (a = E) : (a = h ? p : 0); a < E; a++)
                if (
                  ((u = d[a]),
                  (u.selected || a === p) &&
                    !u.disabled &&
                    (!u.parentNode.disabled || !ue(u.parentNode, 'optgroup')))
                ) {
                  if (((r = o(u).val()), h)) return r;
                  S.push(r);
                }
              return S;
            },
            set: function (e, r) {
              for (
                var u, a, d = e.options, p = o.makeArray(r), h = d.length;
                h--;

              )
                (a = d[h]),
                  (a.selected = o.inArray(o.valHooks.option.get(a), p) > -1) &&
                    (u = !0);
              return u || (e.selectedIndex = -1), p;
            },
          },
        },
      }),
      o.each(['radio', 'checkbox'], function () {
        (o.valHooks[this] = {
          set: function (e, r) {
            if (Array.isArray(r))
              return (e.checked = o.inArray(o(e).val(), r) > -1);
          },
        }),
          I.checkOn ||
            (o.valHooks[this].get = function (e) {
              return e.getAttribute('value') === null ? 'on' : e.value;
            });
      }),
      (I.focusin = 'onfocusin' in t);
    var cr = /^(?:focusinfocus|focusoutblur)$/,
      pr = function (e) {
        e.stopPropagation();
      };
    o.extend(o.event, {
      trigger: function (e, r, u, a) {
        var d,
          p,
          h,
          S,
          E,
          B,
          F,
          J,
          x = [u || N],
          D = C.call(e, 'type') ? e.type : e,
          G = C.call(e, 'namespace') ? e.namespace.split('.') : [];
        if (
          ((p = J = h = u = u || N),
          !(u.nodeType === 3 || u.nodeType === 8) &&
            !cr.test(D + o.event.triggered) &&
            (D.indexOf('.') > -1 &&
              ((G = D.split('.')), (D = G.shift()), G.sort()),
            (E = D.indexOf(':') < 0 && 'on' + D),
            (e = e[o.expando] ? e : new o.Event(D, typeof e == 'object' && e)),
            (e.isTrigger = a ? 2 : 3),
            (e.namespace = G.join('.')),
            (e.rnamespace = e.namespace
              ? new RegExp('(^|\\.)' + G.join('\\.(?:.*\\.|)') + '(\\.|$)')
              : null),
            (e.result = void 0),
            e.target || (e.target = u),
            (r = r == null ? [e] : o.makeArray(r, [e])),
            (F = o.event.special[D] || {}),
            !(!a && F.trigger && F.trigger.apply(u, r) === !1)))
        ) {
          if (!a && !F.noBubble && !M(u)) {
            for (
              S = F.delegateType || D, cr.test(S + D) || (p = p.parentNode);
              p;
              p = p.parentNode
            )
              x.push(p), (h = p);
            h === (u.ownerDocument || N) &&
              x.push(h.defaultView || h.parentWindow || t);
          }
          for (d = 0; (p = x[d++]) && !e.isPropagationStopped(); )
            (J = p),
              (e.type = d > 1 ? S : F.bindType || D),
              (B =
                (ie.get(p, 'events') || Object.create(null))[e.type] &&
                ie.get(p, 'handle')),
              B && B.apply(p, r),
              (B = E && p[E]),
              B &&
                B.apply &&
                rn(p) &&
                ((e.result = B.apply(p, r)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = D),
            !a &&
              !e.isDefaultPrevented() &&
              (!F._default || F._default.apply(x.pop(), r) === !1) &&
              rn(u) &&
              E &&
              _(u[D]) &&
              !M(u) &&
              ((h = u[E]),
              h && (u[E] = null),
              (o.event.triggered = D),
              e.isPropagationStopped() && J.addEventListener(D, pr),
              u[D](),
              e.isPropagationStopped() && J.removeEventListener(D, pr),
              (o.event.triggered = void 0),
              h && (u[E] = h)),
            e.result
          );
        }
      },
      simulate: function (e, r, u) {
        var a = o.extend(new o.Event(), u, { type: e, isSimulated: !0 });
        o.event.trigger(a, null, r);
      },
    }),
      o.fn.extend({
        trigger: function (e, r) {
          return this.each(function () {
            o.event.trigger(e, r, this);
          });
        },
        triggerHandler: function (e, r) {
          var u = this[0];
          if (u) return o.event.trigger(e, r, u, !0);
        },
      }),
      I.focusin ||
        o.each({ focus: 'focusin', blur: 'focusout' }, function (e, r) {
          var u = function (a) {
            o.event.simulate(r, a.target, o.event.fix(a));
          };
          o.event.special[r] = {
            setup: function () {
              var a = this.ownerDocument || this.document || this,
                d = ie.access(a, r);
              d || a.addEventListener(e, u, !0), ie.access(a, r, (d || 0) + 1);
            },
            teardown: function () {
              var a = this.ownerDocument || this.document || this,
                d = ie.access(a, r) - 1;
              d
                ? ie.access(a, r, d)
                : (a.removeEventListener(e, u, !0), ie.remove(a, r));
            },
          };
        });
    var fn = t.location,
      hr = { guid: Date.now() },
      ii = /\?/;
    o.parseXML = function (e) {
      var r, u;
      if (!e || typeof e != 'string') return null;
      try {
        r = new t.DOMParser().parseFromString(e, 'text/xml');
      } catch {}
      return (
        (u = r && r.getElementsByTagName('parsererror')[0]),
        (!r || u) &&
          o.error(
            'Invalid XML: ' +
              (u
                ? o.map(u.childNodes, function (a) {
                    return a.textContent;
                  }).join(`
`)
                : e)
          ),
        r
      );
    };
    var gu = /\[\]$/,
      gr = /\r?\n/g,
      vu = /^(?:submit|button|image|reset|file)$/i,
      mu = /^(?:input|select|textarea|keygen)/i;
    function ri(e, r, u, a) {
      var d;
      if (Array.isArray(r))
        o.each(r, function (p, h) {
          u || gu.test(e)
            ? a(e, h)
            : ri(
                e + '[' + (typeof h == 'object' && h != null ? p : '') + ']',
                h,
                u,
                a
              );
        });
      else if (!u && Q(r) === 'object')
        for (d in r) ri(e + '[' + d + ']', r[d], u, a);
      else a(e, r);
    }
    (o.param = function (e, r) {
      var u,
        a = [],
        d = function (p, h) {
          var S = _(h) ? h() : h;
          a[a.length] =
            encodeURIComponent(p) +
            '=' +
            encodeURIComponent(S == null ? '' : S);
        };
      if (e == null) return '';
      if (Array.isArray(e) || (e.jquery && !o.isPlainObject(e)))
        o.each(e, function () {
          d(this.name, this.value);
        });
      else for (u in e) ri(u, e[u], r, d);
      return a.join('&');
    }),
      o.fn.extend({
        serialize: function () {
          return o.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = o.prop(this, 'elements');
            return e ? o.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !o(this).is(':disabled') &&
                mu.test(this.nodeName) &&
                !vu.test(e) &&
                (this.checked || !an.test(e))
              );
            })
            .map(function (e, r) {
              var u = o(this).val();
              return u == null
                ? null
                : Array.isArray(u)
                ? o.map(u, function (a) {
                    return {
                      name: r.name,
                      value: a.replace(
                        gr,
                        `\r
`
                      ),
                    };
                  })
                : {
                    name: r.name,
                    value: u.replace(
                      gr,
                      `\r
`
                    ),
                  };
            })
            .get();
        },
      });
    var Au = /%20/g,
      yu = /#.*$/,
      wu = /([?&])_=[^&]*/,
      Su = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cu = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Eu = /^(?:GET|HEAD)$/,
      bu = /^\/\//,
      vr = {},
      si = {},
      mr = '*/'.concat('*'),
      ui = N.createElement('a');
    ui.href = fn.href;
    function Ar(e) {
      return function (r, u) {
        typeof r != 'string' && ((u = r), (r = '*'));
        var a,
          d = 0,
          p = r.toLowerCase().match(oe) || [];
        if (_(u))
          for (; (a = p[d++]); )
            a[0] === '+'
              ? ((a = a.slice(1) || '*'), (e[a] = e[a] || []).unshift(u))
              : (e[a] = e[a] || []).push(u);
      };
    }
    function yr(e, r, u, a) {
      var d = {},
        p = e === si;
      function h(S) {
        var E;
        return (
          (d[S] = !0),
          o.each(e[S] || [], function (B, F) {
            var J = F(r, u, a);
            if (typeof J == 'string' && !p && !d[J])
              return r.dataTypes.unshift(J), h(J), !1;
            if (p) return !(E = J);
          }),
          E
        );
      }
      return h(r.dataTypes[0]) || (!d['*'] && h('*'));
    }
    function ai(e, r) {
      var u,
        a,
        d = o.ajaxSettings.flatOptions || {};
      for (u in r) r[u] !== void 0 && ((d[u] ? e : a || (a = {}))[u] = r[u]);
      return a && o.extend(!0, e, a), e;
    }
    function Bu(e, r, u) {
      for (var a, d, p, h, S = e.contents, E = e.dataTypes; E[0] === '*'; )
        E.shift(),
          a === void 0 &&
            (a = e.mimeType || r.getResponseHeader('Content-Type'));
      if (a) {
        for (d in S)
          if (S[d] && S[d].test(a)) {
            E.unshift(d);
            break;
          }
      }
      if (E[0] in u) p = E[0];
      else {
        for (d in u) {
          if (!E[0] || e.converters[d + ' ' + E[0]]) {
            p = d;
            break;
          }
          h || (h = d);
        }
        p = p || h;
      }
      if (p) return p !== E[0] && E.unshift(p), u[p];
    }
    function ku(e, r, u, a) {
      var d,
        p,
        h,
        S,
        E,
        B = {},
        F = e.dataTypes.slice();
      if (F[1]) for (h in e.converters) B[h.toLowerCase()] = e.converters[h];
      for (p = F.shift(); p; )
        if (
          (e.responseFields[p] && (u[e.responseFields[p]] = r),
          !E && a && e.dataFilter && (r = e.dataFilter(r, e.dataType)),
          (E = p),
          (p = F.shift()),
          p)
        ) {
          if (p === '*') p = E;
          else if (E !== '*' && E !== p) {
            if (((h = B[E + ' ' + p] || B['* ' + p]), !h)) {
              for (d in B)
                if (
                  ((S = d.split(' ')),
                  S[1] === p && ((h = B[E + ' ' + S[0]] || B['* ' + S[0]]), h))
                ) {
                  h === !0
                    ? (h = B[d])
                    : B[d] !== !0 && ((p = S[0]), F.unshift(S[1]));
                  break;
                }
            }
            if (h !== !0)
              if (h && e.throws) r = h(r);
              else
                try {
                  r = h(r);
                } catch (J) {
                  return {
                    state: 'parsererror',
                    error: h ? J : 'No conversion from ' + E + ' to ' + p,
                  };
                }
          }
        }
      return { state: 'success', data: r };
    }
    o.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fn.href,
        type: 'GET',
        isLocal: Cu.test(fn.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': mr,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': o.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, r) {
        return r ? ai(ai(e, o.ajaxSettings), r) : ai(o.ajaxSettings, e);
      },
      ajaxPrefilter: Ar(vr),
      ajaxTransport: Ar(si),
      ajax: function (e, r) {
        typeof e == 'object' && ((r = e), (e = void 0)), (r = r || {});
        var u,
          a,
          d,
          p,
          h,
          S,
          E,
          B,
          F,
          J,
          x = o.ajaxSetup({}, r),
          D = x.context || x,
          G = x.context && (D.nodeType || D.jquery) ? o(D) : o.event,
          fe = o.Deferred(),
          X = o.Callbacks('once memory'),
          ke = x.statusCode || {},
          Be = {},
          We = {},
          ye = 'canceled',
          le = {
            readyState: 0,
            getResponseHeader: function (ve) {
              var Ee;
              if (E) {
                if (!p)
                  for (p = {}; (Ee = Su.exec(d)); )
                    p[Ee[1].toLowerCase() + ' '] = (
                      p[Ee[1].toLowerCase() + ' '] || []
                    ).concat(Ee[2]);
                Ee = p[ve.toLowerCase() + ' '];
              }
              return Ee == null ? null : Ee.join(', ');
            },
            getAllResponseHeaders: function () {
              return E ? d : null;
            },
            setRequestHeader: function (ve, Ee) {
              return (
                E == null &&
                  ((ve = We[ve.toLowerCase()] = We[ve.toLowerCase()] || ve),
                  (Be[ve] = Ee)),
                this
              );
            },
            overrideMimeType: function (ve) {
              return E == null && (x.mimeType = ve), this;
            },
            statusCode: function (ve) {
              var Ee;
              if (ve)
                if (E) le.always(ve[le.status]);
                else for (Ee in ve) ke[Ee] = [ke[Ee], ve[Ee]];
              return this;
            },
            abort: function (ve) {
              var Ee = ve || ye;
              return u && u.abort(Ee), qe(0, Ee), this;
            },
          };
        if (
          (fe.promise(le),
          (x.url = ((e || x.url || fn.href) + '').replace(
            bu,
            fn.protocol + '//'
          )),
          (x.type = r.method || r.type || x.method || x.type),
          (x.dataTypes = (x.dataType || '*').toLowerCase().match(oe) || ['']),
          x.crossDomain == null)
        ) {
          S = N.createElement('a');
          try {
            (S.href = x.url),
              (S.href = S.href),
              (x.crossDomain =
                ui.protocol + '//' + ui.host != S.protocol + '//' + S.host);
          } catch {
            x.crossDomain = !0;
          }
        }
        if (
          (x.data &&
            x.processData &&
            typeof x.data != 'string' &&
            (x.data = o.param(x.data, x.traditional)),
          yr(vr, x, r, le),
          E)
        )
          return le;
        (B = o.event && x.global),
          B && o.active++ === 0 && o.event.trigger('ajaxStart'),
          (x.type = x.type.toUpperCase()),
          (x.hasContent = !Eu.test(x.type)),
          (a = x.url.replace(yu, '')),
          x.hasContent
            ? x.data &&
              x.processData &&
              (x.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) === 0 &&
              (x.data = x.data.replace(Au, '+'))
            : ((J = x.url.slice(a.length)),
              x.data &&
                (x.processData || typeof x.data == 'string') &&
                ((a += (ii.test(a) ? '&' : '?') + x.data), delete x.data),
              x.cache === !1 &&
                ((a = a.replace(wu, '$1')),
                (J = (ii.test(a) ? '&' : '?') + '_=' + hr.guid++ + J)),
              (x.url = a + J)),
          x.ifModified &&
            (o.lastModified[a] &&
              le.setRequestHeader('If-Modified-Since', o.lastModified[a]),
            o.etag[a] && le.setRequestHeader('If-None-Match', o.etag[a])),
          ((x.data && x.hasContent && x.contentType !== !1) || r.contentType) &&
            le.setRequestHeader('Content-Type', x.contentType),
          le.setRequestHeader(
            'Accept',
            x.dataTypes[0] && x.accepts[x.dataTypes[0]]
              ? x.accepts[x.dataTypes[0]] +
                  (x.dataTypes[0] !== '*' ? ', ' + mr + '; q=0.01' : '')
              : x.accepts['*']
          );
        for (F in x.headers) le.setRequestHeader(F, x.headers[F]);
        if (x.beforeSend && (x.beforeSend.call(D, le, x) === !1 || E))
          return le.abort();
        if (
          ((ye = 'abort'),
          X.add(x.complete),
          le.done(x.success),
          le.fail(x.error),
          (u = yr(si, x, r, le)),
          !u)
        )
          qe(-1, 'No Transport');
        else {
          if (((le.readyState = 1), B && G.trigger('ajaxSend', [le, x]), E))
            return le;
          x.async &&
            x.timeout > 0 &&
            (h = t.setTimeout(function () {
              le.abort('timeout');
            }, x.timeout));
          try {
            (E = !1), u.send(Be, qe);
          } catch (ve) {
            if (E) throw ve;
            qe(-1, ve);
          }
        }
        function qe(ve, Ee, cn, xn) {
          var Ke,
            Ot,
            It,
            Me,
            St,
            Ye = Ee;
          E ||
            ((E = !0),
            h && t.clearTimeout(h),
            (u = void 0),
            (d = xn || ''),
            (le.readyState = ve > 0 ? 4 : 0),
            (Ke = (ve >= 200 && ve < 300) || ve === 304),
            cn && (Me = Bu(x, le, cn)),
            !Ke &&
              o.inArray('script', x.dataTypes) > -1 &&
              o.inArray('json', x.dataTypes) < 0 &&
              (x.converters['text script'] = function () {}),
            (Me = ku(x, Me, le, Ke)),
            Ke
              ? (x.ifModified &&
                  ((St = le.getResponseHeader('Last-Modified')),
                  St && (o.lastModified[a] = St),
                  (St = le.getResponseHeader('etag')),
                  St && (o.etag[a] = St)),
                ve === 204 || x.type === 'HEAD'
                  ? (Ye = 'nocontent')
                  : ve === 304
                  ? (Ye = 'notmodified')
                  : ((Ye = Me.state),
                    (Ot = Me.data),
                    (It = Me.error),
                    (Ke = !It)))
              : ((It = Ye),
                (ve || !Ye) && ((Ye = 'error'), ve < 0 && (ve = 0))),
            (le.status = ve),
            (le.statusText = (Ee || Ye) + ''),
            Ke
              ? fe.resolveWith(D, [Ot, Ye, le])
              : fe.rejectWith(D, [le, Ye, It]),
            le.statusCode(ke),
            (ke = void 0),
            B &&
              G.trigger(Ke ? 'ajaxSuccess' : 'ajaxError', [
                le,
                x,
                Ke ? Ot : It,
              ]),
            X.fireWith(D, [le, Ye]),
            B &&
              (G.trigger('ajaxComplete', [le, x]),
              --o.active || o.event.trigger('ajaxStop')));
        }
        return le;
      },
      getJSON: function (e, r, u) {
        return o.get(e, r, u, 'json');
      },
      getScript: function (e, r) {
        return o.get(e, void 0, r, 'script');
      },
    }),
      o.each(['get', 'post'], function (e, r) {
        o[r] = function (u, a, d, p) {
          return (
            _(a) && ((p = p || d), (d = a), (a = void 0)),
            o.ajax(
              o.extend(
                { url: u, type: r, dataType: p, data: a, success: d },
                o.isPlainObject(u) && u
              )
            )
          );
        };
      }),
      o.ajaxPrefilter(function (e) {
        var r;
        for (r in e.headers)
          r.toLowerCase() === 'content-type' &&
            (e.contentType = e.headers[r] || '');
      }),
      (o._evalUrl = function (e, r, u) {
        return o.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          converters: { 'text script': function () {} },
          dataFilter: function (a) {
            o.globalEval(a, r, u);
          },
        });
      }),
      o.fn.extend({
        wrapAll: function (e) {
          var r;
          return (
            this[0] &&
              (_(e) && (e = e.call(this[0])),
              (r = o(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && r.insertBefore(this[0]),
              r
                .map(function () {
                  for (var u = this; u.firstElementChild; )
                    u = u.firstElementChild;
                  return u;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return _(e)
            ? this.each(function (r) {
                o(this).wrapInner(e.call(this, r));
              })
            : this.each(function () {
                var r = o(this),
                  u = r.contents();
                u.length ? u.wrapAll(e) : r.append(e);
              });
        },
        wrap: function (e) {
          var r = _(e);
          return this.each(function (u) {
            o(this).wrapAll(r ? e.call(this, u) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not('body')
              .each(function () {
                o(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (o.expr.pseudos.hidden = function (e) {
        return !o.expr.pseudos.visible(e);
      }),
      (o.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (o.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch {}
      });
    var Tu = { 0: 200, 1223: 204 },
      dn = o.ajaxSettings.xhr();
    (I.cors = !!dn && 'withCredentials' in dn),
      (I.ajax = dn = !!dn),
      o.ajaxTransport(function (e) {
        var r, u;
        if (I.cors || (dn && !e.crossDomain))
          return {
            send: function (a, d) {
              var p,
                h = e.xhr();
              if (
                (h.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (p in e.xhrFields) h[p] = e.xhrFields[p];
              e.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(e.mimeType),
                !e.crossDomain &&
                  !a['X-Requested-With'] &&
                  (a['X-Requested-With'] = 'XMLHttpRequest');
              for (p in a) h.setRequestHeader(p, a[p]);
              (r = function (S) {
                return function () {
                  r &&
                    ((r =
                      u =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.ontimeout =
                      h.onreadystatechange =
                        null),
                    S === 'abort'
                      ? h.abort()
                      : S === 'error'
                      ? typeof h.status != 'number'
                        ? d(0, 'error')
                        : d(h.status, h.statusText)
                      : d(
                          Tu[h.status] || h.status,
                          h.statusText,
                          (h.responseType || 'text') !== 'text' ||
                            typeof h.responseText != 'string'
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = r()),
                (u = h.onerror = h.ontimeout = r('error')),
                h.onabort !== void 0
                  ? (h.onabort = u)
                  : (h.onreadystatechange = function () {
                      h.readyState === 4 &&
                        t.setTimeout(function () {
                          r && u();
                        });
                    }),
                (r = r('abort'));
              try {
                h.send((e.hasContent && e.data) || null);
              } catch (S) {
                if (r) throw S;
              }
            },
            abort: function () {
              r && r();
            },
          };
      }),
      o.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      o.ajaxSetup({
        accepts: {
          script:
            'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (e) {
            return o.globalEval(e), e;
          },
        },
      }),
      o.ajaxPrefilter('script', function (e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = 'GET');
      }),
      o.ajaxTransport('script', function (e) {
        if (e.crossDomain || e.scriptAttrs) {
          var r, u;
          return {
            send: function (a, d) {
              (r = o('<script>')
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (u = function (p) {
                    r.remove(),
                      (u = null),
                      p && d(p.type === 'error' ? 404 : 200, p.type);
                  })
                )),
                N.head.appendChild(r[0]);
            },
            abort: function () {
              u && u();
            },
          };
        }
      });
    var wr = [],
      oi = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var e = wr.pop() || o.expando + '_' + hr.guid++;
        return (this[e] = !0), e;
      },
    }),
      o.ajaxPrefilter('json jsonp', function (e, r, u) {
        var a,
          d,
          p,
          h =
            e.jsonp !== !1 &&
            (oi.test(e.url)
              ? 'url'
              : typeof e.data == 'string' &&
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) === 0 &&
                oi.test(e.data) &&
                'data');
        if (h || e.dataTypes[0] === 'jsonp')
          return (
            (a = e.jsonpCallback =
              _(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            h
              ? (e[h] = e[h].replace(oi, '$1' + a))
              : e.jsonp !== !1 &&
                (e.url += (ii.test(e.url) ? '&' : '?') + e.jsonp + '=' + a),
            (e.converters['script json'] = function () {
              return p || o.error(a + ' was not called'), p[0];
            }),
            (e.dataTypes[0] = 'json'),
            (d = t[a]),
            (t[a] = function () {
              p = arguments;
            }),
            u.always(function () {
              d === void 0 ? o(t).removeProp(a) : (t[a] = d),
                e[a] && ((e.jsonpCallback = r.jsonpCallback), wr.push(a)),
                p && _(d) && d(p[0]),
                (p = d = void 0);
            }),
            'script'
          );
      }),
      (I.createHTMLDocument = (function () {
        var e = N.implementation.createHTMLDocument('').body;
        return (
          (e.innerHTML = '<form></form><form></form>'),
          e.childNodes.length === 2
        );
      })()),
      (o.parseHTML = function (e, r, u) {
        if (typeof e != 'string') return [];
        typeof r == 'boolean' && ((u = r), (r = !1));
        var a, d, p;
        return (
          r ||
            (I.createHTMLDocument
              ? ((r = N.implementation.createHTMLDocument('')),
                (a = r.createElement('base')),
                (a.href = N.location.href),
                r.head.appendChild(a))
              : (r = N)),
          (d = Le.exec(e)),
          (p = !u && []),
          d
            ? [r.createElement(d[1])]
            : ((d = Gi([e], r, p)),
              p && p.length && o(p).remove(),
              o.merge([], d.childNodes))
        );
      }),
      (o.fn.load = function (e, r, u) {
        var a,
          d,
          p,
          h = this,
          S = e.indexOf(' ');
        return (
          S > -1 && ((a = Dt(e.slice(S))), (e = e.slice(0, S))),
          _(r)
            ? ((u = r), (r = void 0))
            : r && typeof r == 'object' && (d = 'POST'),
          h.length > 0 &&
            o
              .ajax({ url: e, type: d || 'GET', dataType: 'html', data: r })
              .done(function (E) {
                (p = arguments),
                  h.html(a ? o('<div>').append(o.parseHTML(E)).find(a) : E);
              })
              .always(
                u &&
                  function (E, B) {
                    h.each(function () {
                      u.apply(this, p || [E.responseText, B, E]);
                    });
                  }
              ),
          this
        );
      }),
      (o.expr.pseudos.animated = function (e) {
        return o.grep(o.timers, function (r) {
          return e === r.elem;
        }).length;
      }),
      (o.offset = {
        setOffset: function (e, r, u) {
          var a,
            d,
            p,
            h,
            S,
            E,
            B,
            F = o.css(e, 'position'),
            J = o(e),
            x = {};
          F === 'static' && (e.style.position = 'relative'),
            (S = J.offset()),
            (p = o.css(e, 'top')),
            (E = o.css(e, 'left')),
            (B =
              (F === 'absolute' || F === 'fixed') &&
              (p + E).indexOf('auto') > -1),
            B
              ? ((a = J.position()), (h = a.top), (d = a.left))
              : ((h = parseFloat(p) || 0), (d = parseFloat(E) || 0)),
            _(r) && (r = r.call(e, u, o.extend({}, S))),
            r.top != null && (x.top = r.top - S.top + h),
            r.left != null && (x.left = r.left - S.left + d),
            'using' in r ? r.using.call(e, x) : J.css(x);
        },
      }),
      o.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === void 0
              ? this
              : this.each(function (d) {
                  o.offset.setOffset(this, e, d);
                });
          var r,
            u,
            a = this[0];
          if (!!a)
            return a.getClientRects().length
              ? ((r = a.getBoundingClientRect()),
                (u = a.ownerDocument.defaultView),
                { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (!!this[0]) {
            var e,
              r,
              u,
              a = this[0],
              d = { top: 0, left: 0 };
            if (o.css(a, 'position') === 'fixed') r = a.getBoundingClientRect();
            else {
              for (
                r = this.offset(),
                  u = a.ownerDocument,
                  e = a.offsetParent || u.documentElement;
                e &&
                (e === u.body || e === u.documentElement) &&
                o.css(e, 'position') === 'static';

              )
                e = e.parentNode;
              e &&
                e !== a &&
                e.nodeType === 1 &&
                ((d = o(e).offset()),
                (d.top += o.css(e, 'borderTopWidth', !0)),
                (d.left += o.css(e, 'borderLeftWidth', !0)));
            }
            return {
              top: r.top - d.top - o.css(a, 'marginTop', !0),
              left: r.left - d.left - o.css(a, 'marginLeft', !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && o.css(e, 'position') === 'static';

            )
              e = e.offsetParent;
            return e || Ft;
          });
        },
      }),
      o.each(
        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
        function (e, r) {
          var u = r === 'pageYOffset';
          o.fn[e] = function (a) {
            return pt(
              this,
              function (d, p, h) {
                var S;
                if (
                  (M(d) ? (S = d) : d.nodeType === 9 && (S = d.defaultView),
                  h === void 0)
                )
                  return S ? S[r] : d[p];
                S
                  ? S.scrollTo(u ? S.pageXOffset : h, u ? h : S.pageYOffset)
                  : (d[p] = h);
              },
              e,
              a,
              arguments.length
            );
          };
        }
      ),
      o.each(['top', 'left'], function (e, r) {
        o.cssHooks[r] = tr(I.pixelPosition, function (u, a) {
          if (a)
            return (a = on(u, r)), Yn.test(a) ? o(u).position()[r] + 'px' : a;
        });
      }),
      o.each({ Height: 'height', Width: 'width' }, function (e, r) {
        o.each(
          { padding: 'inner' + e, content: r, '': 'outer' + e },
          function (u, a) {
            o.fn[a] = function (d, p) {
              var h = arguments.length && (u || typeof d != 'boolean'),
                S = u || (d === !0 || p === !0 ? 'margin' : 'border');
              return pt(
                this,
                function (E, B, F) {
                  var J;
                  return M(E)
                    ? a.indexOf('outer') === 0
                      ? E['inner' + e]
                      : E.document.documentElement['client' + e]
                    : E.nodeType === 9
                    ? ((J = E.documentElement),
                      Math.max(
                        E.body['scroll' + e],
                        J['scroll' + e],
                        E.body['offset' + e],
                        J['offset' + e],
                        J['client' + e]
                      ))
                    : F === void 0
                    ? o.css(E, B, S)
                    : o.style(E, B, F, S);
                },
                r,
                h ? d : void 0,
                h
              );
            };
          }
        );
      }),
      o.each(
        [
          'ajaxStart',
          'ajaxStop',
          'ajaxComplete',
          'ajaxError',
          'ajaxSuccess',
          'ajaxSend',
        ],
        function (e, r) {
          o.fn[r] = function (u) {
            return this.on(r, u);
          };
        }
      ),
      o.fn.extend({
        bind: function (e, r, u) {
          return this.on(e, null, r, u);
        },
        unbind: function (e, r) {
          return this.off(e, null, r);
        },
        delegate: function (e, r, u, a) {
          return this.on(r, e, u, a);
        },
        undelegate: function (e, r, u) {
          return arguments.length === 1
            ? this.off(e, '**')
            : this.off(r, e || '**', u);
        },
        hover: function (e, r) {
          return this.mouseenter(e).mouseleave(r || e);
        },
      }),
      o.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (e, r) {
          o.fn[r] = function (u, a) {
            return arguments.length > 0
              ? this.on(r, null, u, a)
              : this.trigger(r);
          };
        }
      );
    var xu = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (o.proxy = function (e, r) {
      var u, a, d;
      if ((typeof r == 'string' && ((u = e[r]), (r = e), (e = u)), !!_(e)))
        return (
          (a = f.call(arguments, 2)),
          (d = function () {
            return e.apply(r || this, a.concat(f.call(arguments)));
          }),
          (d.guid = e.guid = e.guid || o.guid++),
          d
        );
    }),
      (o.holdReady = function (e) {
        e ? o.readyWait++ : o.ready(!0);
      }),
      (o.isArray = Array.isArray),
      (o.parseJSON = JSON.parse),
      (o.nodeName = ue),
      (o.isFunction = _),
      (o.isWindow = M),
      (o.camelCase = ot),
      (o.type = Q),
      (o.now = Date.now),
      (o.isNumeric = function (e) {
        var r = o.type(e);
        return (r === 'number' || r === 'string') && !isNaN(e - parseFloat(e));
      }),
      (o.trim = function (e) {
        return e == null ? '' : (e + '').replace(xu, '');
      });
    var Fu = t.jQuery,
      Du = t.$;
    return (
      (o.noConflict = function (e) {
        return (
          t.$ === o && (t.$ = Du), e && t.jQuery === o && (t.jQuery = Fu), o
        );
      }),
      typeof i == 'undefined' && (t.jQuery = t.$ = o),
      o
    );
  });
})(_s);
var uc = _s.exports;
const Us = n => (en('data-v-21e28708'), (n = n()), tn(), n),
  ac = { class: 'home_top_wrap' },
  oc = { key: 0, src: As, alt: '', class: 'top_logo_t' },
  lc = { key: 1, class: 'navM', id: 'nav' },
  fc = Us(() => U('img', { class: 'title', src: Bf, alt: '' }, null, -1)),
  dc = { key: 2, class: 'navP', id: 'nav' },
  cc = ['src'],
  pc = ['src'],
  hc = { class: 'blue_bg' },
  gc = { key: 0, src: kf, class: 'left_line', id: 'left_line_1' },
  vc = { key: 1, src: Tf, class: 'left_line', id: 'left_line_1' },
  mc = { key: 2, src: xf, class: 'right_line', id: 'right_line_1' },
  Ac = { key: 3, src: Ff, class: 'right_line', id: 'right_line_1' },
  yc = { key: 4, src: As, alt: '', class: 'top_logo' },
  wc = { class: 'news' },
  Sc = Us(() =>
    U(
      'div',
      { class: 'news_top_title', id: 'anchor1' },
      '\u30CB\u30E5\u30FC\u30B9',
      -1
    )
  ),
  Cc = ['onClick'],
  Ec = { key: 0, class: 'news_icon', src: Df, alt: '' },
  bc = { class: 'news_title' },
  Bc = { class: 'new_desc' },
  kc = { class: 'point_list' },
  Tc = ['onClick'],
  xc = dt({
    __name: 'homeTop',
    setup(n) {
      let t,
        i = se(!1),
        s = se(0),
        l = se(0),
        f = se(!1),
        c = se(!1),
        m = se([]),
        v = se({}),
        y = se({}),
        A = 15,
        C = 1,
        T,
        P = se({ delay: 2e3, disableOnInteraction: !1 });
      const I = () => {
          c.value = !c.value;
        },
        _ = () => {
          let he = document.documentElement;
          (l.value =
            self.innerWidth ||
            (he && he.offsetWidth) ||
            document.body.offsetWidth),
            yn.emit('width', { val: l.value });
        };
      f = xt(() => l.value < 600);
      const M = () => {
          window.open('https://bluearchive.jp/kourintaisai/game01/');
        },
        N = he => {
          T.slideToLoop(he);
        },
        j = he => {
          T = he;
        },
        K = he => {
          s.value = he.realIndex;
        },
        Q = he => {
          var oe;
          let ae = uc(`#anchor${he}`).offset().top;
          (t =
            ((oe = document.getElementById('nav')) == null
              ? void 0
              : oe.offsetHeight) || 0),
            f.value
              ? lt(() => {
                  window.scrollTo({
                    behavior: 'smooth',
                    top: (ae || 0) - t - 20,
                  });
                })
              : lt(() => {
                  window.scrollTo({
                    behavior: 'smooth',
                    top: (ae || 0) - t - 50,
                  });
                });
        },
        Ae = o(() => {
          let he =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          if (f.value && he > 500) {
            i.value = !0;
            return;
          } else if (f.value && he < 500) {
            i.value = !1;
            return;
          }
          !f.value && he > 1200
            ? (i.value = !0)
            : !f.value && he < 1200 && (i.value = !1);
        }, 100);
      function o(he, ae) {
        let oe;
        return function () {
          oe ||
            (oe = setTimeout(() => {
              (oe = null), he.apply(this, arguments);
            }, ae));
        };
      }
      const ge = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        ee = {
          you: 'https://www.youtube.com/watch?v=N8g9B0zEXpM',
          twi: 'https://twitter.com/Blue_ArchiveJP',
        },
        be = he => {
          window.open(ee[he]);
        };
      let Z;
      const de = async () => {
        Z ||
          (Z = setTimeout(async () => {
            let he = y.value.scrollHeight,
              ae = y.value.scrollTop,
              oe = y.value.clientHeight;
            oe + ae + 20 >= he && ((C += 1), await Le()), (Z = null);
          }, 100));
      };
      let ue = !1;
      const Le = async () => {
        if (ue) return;
        let he;
        if (((he = await $t.get(`/api/news/list_${C}.json`)), he.rows.length))
          m.value = m.value.concat(he.rows);
        else {
          ue = !0;
          return;
        }
      };
      Gt(() => {
        Le();
      }),
        yt(() => {
          _(),
            window.addEventListener('scroll', () => {
              c.value = !1;
            }),
            window.addEventListener('resize', _),
            window.addEventListener('scroll', Ae),
            lt(() => {
              new Xe().createInspector('left_line_1', 'left_line_ani'),
                new Xe().createInspector('right_line_1', 'right_line_ani');
            });
        }),
        Di(() => {
          window.removeEventListener('scroll', Ae);
        });
      const et = async he => {
          let ae = await $t.get(`/api/news/detail_${he}.json`);
          lt(() => {
            v.value = ae.news;
          });
        },
        ct = se(null),
        at = async he => {
          await et(he),
            setTimeout(() => {
              ct.value.openModal();
            }, 100);
        };
      _n([
        {
          title:
            '\u30D7\u30EC\u30BC\u30F3\u30C8\u306E\u53D7\u3051\u53D6\u308A\u306B\u3064\u3044\u3066',
          desc: '\u5F8C\u65E5\u3001\u5148\u751F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30E1\u30FC\u30EB\u306B\u3066\u304A\u9001\u308A\u3044\u3002',
        },
        {
          title:
            '\u30D7\u30EC\u30BC\u30F3\u30C8\u306E\u53D7\u3051\u53D6\u308A\u306B\u3064\u3044\u3066',
          desc: '\u5F8C\u65E5\u3001\u5148\u751F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30E1\u30FC\u30EB\u306B\u3066\u304A\u9001\u308A\u3044\u3002',
        },
        {
          title:
            '\u30D7\u30EC\u30BC\u30F3\u30C8\u306E\u53D7\u3051\u53D6\u308A\u306B\u3064\u3044\u3066',
          desc: '\u5F8C\u65E5\u3001\u5148\u751F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30E1\u30FC\u30EB\u306B\u3066\u304A\u9001\u308A\u3044\u3002',
        },
        {
          title:
            '\u30D7\u30EC\u30BC\u30F3\u30C8\u306E\u53D7\u3051\u53D6\u308A\u306B\u3064\u3044\u3066',
          desc: '\u5F8C\u65E5\u3001\u5148\u751F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30E1\u30FC\u30EB\u306B\u3066\u304A\u9001\u308A\u3044\u3002',
        },
        {
          title:
            '\u30D7\u30EC\u30BC\u30F3\u30C8\u306E\u53D7\u3051\u53D6\u308A\u306B\u3064\u3044\u3066',
          desc: '\u5F8C\u65E5\u3001\u5148\u751F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30E1\u30FC\u30EB\u306B\u3066\u304A\u9001\u308A\u3044\u3002',
        },
      ]);
      const tt = _n([
          new URL('public/zu1.8833cd72.png', self.location).href,
          new URL('public/zu2.9b9638f7.png', self.location).href,
          new URL('public/zu3.6ec10586.png', self.location).href,
          new URL('public/zu4.06591408.png', self.location).href,
          new URL('public/zu5.2e8045d9.png', self.location).href,
        ]),
        qt = _n([
          new URL('public/zu1.8833cd72.png', self.location).href,
          new URL('public/zu2.9b9638f7.png', self.location).href,
          new URL('public/zu3.6ec10586.png', self.location).href,
          new URL('public/zu4.06591408.png', self.location).href,
          new URL('public/zu5.2e8045d9.png', self.location).href,
        ]);
      return (he, ae) => (
        z(),
        Y('div', ac, [
          q(f) ? ce('v-if', !0) : (z(), Y('img', oc)),
          q(f)
            ? (z(),
              Y('div', lc, [
                Dr(
                  U(
                    'img',
                    { onClick: I, class: 'x', src: ys, alt: '' },
                    null,
                    512
                  ),
                  [[Lr, q(c)]]
                ),
                Dr(
                  U(
                    'img',
                    { onClick: I, src: bf, alt: '', class: 'menu' },
                    null,
                    512
                  ),
                  [[Lr, !q(c)]]
                ),
                fc,
                U('img', {
                  class: 'twi',
                  onClick: ae[0] || (ae[0] = oe => be('twi')),
                  src: jr,
                  alt: '',
                }),
                U('img', {
                  class: 'you',
                  onClick: ae[1] || (ae[1] = oe => be('you')),
                  src: Wr,
                  alt: '',
                }),
                U(
                  'ul',
                  { class: bt(['title_list', { list_active: q(c) }]) },
                  [
                    U(
                      'li',
                      {
                        class: 'title_item',
                        onClick: ae[2] || (ae[2] = oe => Q(1)),
                      },
                      '\u30CB\u30E5\u30FC\u30B9'
                    ),
                    U(
                      'li',
                      {
                        class: 'title_item',
                        onClick: ae[3] || (ae[3] = oe => Q(2)),
                      },
                      '\u6644\u8F2A\u5927\u796D\u3068\u306F'
                    ),
                    U(
                      'li',
                      {
                        class: 'title_item',
                        onClick: ae[4] || (ae[4] = oe => Q(3)),
                      },
                      '\u5B9F\u884C\u59D4\u54E1\u4F1A\u3088\u308A'
                    ),
                    U(
                      'li',
                      {
                        class: 'title_item',
                        onClick: ae[5] || (ae[5] = oe => Q(4)),
                      },
                      '\u30D7\u30ED\u30B0\u30E9\u30E0'
                    ),
                    U(
                      'li',
                      {
                        class: 'title_item',
                        onClick: ae[6] || (ae[6] = oe => Q(5)),
                      },
                      '\u6CE8\u76EE\u6821\u30FB\u6CE8\u76EE\u751F\u5F92'
                    ),
                    ce(
                      ' <li class="title_item" @click="toAnchor(6)">\u7269\u8CA9\u60C5\u5831</li> '
                    ),
                  ],
                  2
                ),
              ]))
            : (z(),
              Y('div', dc, [
                U(
                  'div',
                  { onClick: ae[7] || (ae[7] = oe => Q(1)), class: 'nav_item' },
                  '\u30CB\u30E5\u30FC\u30B9'
                ),
                U(
                  'div',
                  { onClick: ae[8] || (ae[8] = oe => Q(2)), class: 'nav_item' },
                  '\u6644\u8F2A\u5927\u796D\u3068\u306F'
                ),
                U(
                  'div',
                  { onClick: ae[9] || (ae[9] = oe => Q(3)), class: 'nav_item' },
                  '\u5B9F\u884C\u59D4\u54E1\u4F1A\u3088\u308A'
                ),
                U(
                  'div',
                  {
                    onClick: ae[10] || (ae[10] = oe => Q(4)),
                    class: 'nav_item',
                  },
                  '\u30D7\u30ED\u30B0\u30E9\u30E0'
                ),
                U(
                  'div',
                  {
                    onClick: ae[11] || (ae[11] = oe => Q(5)),
                    class: 'nav_item',
                  },
                  '\u6CE8\u76EE\u6821\u30FB\u6CE8\u76EE\u751F\u5F92'
                ),
                ce(
                  ' <div @click="toAnchor(6)" class="nav_item">\u7269\u8CA9\u60C5\u5831</div> '
                ),
                U('img', {
                  class: 'twi',
                  onClick: ae[12] || (ae[12] = oe => be('twi')),
                  src: jr,
                  alt: '',
                }),
                U('img', {
                  class: 'you',
                  onClick: ae[13] || (ae[13] = oe => be('you')),
                  src: Wr,
                  alt: '',
                }),
              ])),
          Pe(
            q(Ti),
            {
              'slides-per-view': 1,
              modules: [q(cl)],
              onSwiper: j,
              onSlideChange: K,
              autoplay: q(P),
              loop: !0,
            },
            {
              default: Rt(() => [
                q(f)
                  ? (z(!0),
                    Y(
                      At,
                      { key: 0 },
                      Bt(
                        tt,
                        (oe, je) => (
                          z(),
                          Mn(
                            q(jn),
                            { key: je },
                            {
                              default: Rt(() => [
                                U(
                                  'img',
                                  { class: 'bg_img', src: oe, alt: '' },
                                  null,
                                  8,
                                  cc
                                ),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    ))
                  : ce('v-if', !0),
                q(f)
                  ? ce('v-if', !0)
                  : (z(!0),
                    Y(
                      At,
                      { key: 1 },
                      Bt(
                        qt,
                        (oe, je) => (
                          z(),
                          Mn(
                            q(jn),
                            { key: je },
                            {
                              default: Rt(() => [
                                U(
                                  'img',
                                  { class: 'bg_img', src: oe, alt: '' },
                                  null,
                                  8,
                                  pc
                                ),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
              ]),
              _: 1,
            },
            8,
            ['modules', 'autoplay']
          ),
          U('div', hc, [
            q(f) ? (z(), Y('img', gc)) : ce('v-if', !0),
            q(f) ? ce('v-if', !0) : (z(), Y('img', vc)),
            q(f) ? (z(), Y('img', mc)) : ce('v-if', !0),
            q(f) ? ce('v-if', !0) : (z(), Y('img', Ac)),
            q(f) ? (z(), Y('img', yc)) : ce('v-if', !0),
            U('div', wc, [
              Sc,
              U(
                'div',
                {
                  class: 'news_list',
                  onScroll: de,
                  ref_key: 'homeNews',
                  ref: y,
                },
                [
                  (z(!0),
                  Y(
                    At,
                    null,
                    Bt(
                      q(m),
                      (oe, je) => (
                        z(),
                        Y(
                          'div',
                          {
                            class: 'news_item',
                            onClick: wt => at(oe.id),
                            key: je,
                          },
                          [
                            Date.now() - oe.publishTime < 1728e5
                              ? (z(), Y('img', Ec))
                              : ce('v-if', !0),
                            U('div', bc, $e(oe.title), 1),
                            U('div', Bc, $e(oe.description), 1),
                          ],
                          8,
                          Cc
                        )
                      )
                    ),
                    128
                  )),
                ],
                544
              ),
            ]),
            Pe(sc, { ref_key: 'newsModal', ref: ct, content: q(v) }, null, 8, [
              'content',
            ]),
          ]),
          U('div', kc, [
            (z(!0),
            Y(
              At,
              null,
              Bt(
                tt.length,
                (oe, je) => (
                  z(),
                  Y(
                    'div',
                    {
                      onClick: wt => N(je),
                      class: bt(['point_item', { ac_item: q(s) === je }]),
                      key: je,
                    },
                    null,
                    10,
                    Tc
                  )
                )
              ),
              128
            )),
          ]),
          U('img', { class: 'toTop', onClick: ge, src: Lf, alt: '' }),
          U('img', { onClick: M, src: Of, alt: '', class: 'game_img' }),
        ])
      );
    },
  });
var Fc = ft(xc, [['__scopeId', 'data-v-21e28708']]),
  Dc = './public/daji_title.cdceaf29.png';
const Lc = { class: 'flower_center' },
  Oc = ['src'],
  Ic = ['src'],
  Pc = ['src'],
  Nc = ['src'],
  Jc = ['src'],
  Rc = ['src'],
  _c = ['src'],
  Uc = ['src'],
  qc = dt({
    __name: 'flower',
    props: ['color'],
    setup(n) {
      const t = se(null),
        i = se(null),
        s = se(null),
        l = se(null),
        f = se(null),
        c = se(null),
        m = se(null),
        v = se(null),
        y = se(null),
        A = {
          blue: new URL(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABGCAYAAACZrlevAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVRogd2aTXLCMAxGH5neqMfqjaAzXVEuQ27DmumCiiHBSfwjyXa+VSkzsV4lv4KTw9fP/Qp8ss+MA3CqXYVhTgNwBm61KzHIDTgP8kPlYixyAW7D/4vvmpUY5QgggFdgrFeLekYeTE9A2JdsniyvgHuRzcQpw9IbHefCS6OG2Zt7kM3x9cUcsHfZPOUimQNC37J5qz0E2Ktsgg4JAfYqm4lcJCFA6FM2x9AvlwB7k82bXCRLgNCXbBZrXQPsRTarzlgD7EU2QblI1gChjzENykWyBTjStmwW5SLZAoS2u7hZWwxgq7KJckQMYKuyWZWLJAYQ2hzTVblIYgFbk82mXCSxgNBWF6NrSQFsRTZJTkgBbEU2vyT8oVMAoY0xTaohFbC2bKLlIkkFhLpdTF47B7CWbLIckANYSzZJcpHkAEKdMc1aMxfQWzbJcpHkAoJvF7PXKgH0kk3Rni8B9JJNllwkJYDgM6ZFa5QCWssmWy6SUkCw7WLxtTUArWSjssc1AK1kUyQXiQYg2IypyjW1ALVlUywXiRYg6HZR7VqagFqyUd3TmoBahanIRaIJCDqjpSosbcBSOajJRaINCGUPMKj/u7EAzJWNyQcGC8DcQlXlIrEAhLxRM/nQbgWYKgt1uUisACFNNmZfuSwBY2VjevRhCRhbuOnhlSUgxI2e6YN/1oBb8jCTi8QaENY7ZH4q5wG4tMdczlU9AJdAXE7GPQAhPIouTxV7Ac5lYi4XiRcgTDvmdmfKE1D2nOsd4g+vhZiCud3j9wSEx2gePBf8A79/qCkT7YCLAAAAAElFTkSuQmCC',
            self.location
          ).href,
          yellow: new URL(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABGCAYAAACZrlevAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVRogd2aTXLCMAxGH5neqCfrdaBbymXIbdi3C6oMCU7iH0m2861KmYn1KvkVnJx+71934JNjZhyAS+0qDHMZgCvwqF2JQR7AdZAfKhdjkRvwGP5ffNesxChnAAG8A2O9WtQz8mSaAOFYsplYXgGPIpuZU4a1NzrOjZdGDYs3jyCb8+uLJWDvspnkIlkCQt+yeas9BNirbIIOCQH2KpuZXCQhQOhTNufQL9cAe5PNm1wka4DQl2xWa90C7EU2m87YAuxFNkG5SLYAoY8xDcpFsgc40rZsVuUi2QOEtru4W1sMYKuyiXJEDGCrstmUiyQGENoc0025SGIBW5PNrlwksYDQVheja0kBbEU2SU5IAWxFNj8k/KFTAKGNMU2qIRWwtmyi5SJJBYS6XUxeOwewlmyyHJADWEs2SXKR5ABCnTHNWjMX0Fs2yXKR5AKCbxez1yoB9JJN0Z4vAfSSTZZcJCWA4DOmRWuUAlrLJlsuklJAsO1i8bU1AK1ko7LHNQCtZFMkF4kGINiMqco1tQC1ZVMsF4kWIOh2Ue1amoBaslHd05qAWoWpyEWiCQg6o6UqLG3AUjmoyUWiDQhlDzCo/7uxAMyVjckHBgvA3EJV5SKxAIS8UTP50G4FmCoLdblIrAAhTTZmX7ksAWNlY3r0YQkYW7jp4ZUlIMSNnumDf9aAe/Iwk4vEGhC2O2R+KucBuLbHXM5VPQDXQFxOxj0AITyKLk8VewEuZWIuF4kXIMw75nZnyhNQ9pzrHeIPr4WYg7nd4/cEhOdonjwX/ANAM6hd+dG1mAAAAABJRU5ErkJggg==',
            self.location
          ).href,
          qin: new URL(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABGCAYAAACZrlevAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVRogd2ayXHCQBBFHyofnYDjcDaEBr5ikkFx+KIjAfgATQnQMkt3z4z+iaVK049uPWCk3X4YLsA320zfAcfSVRjm2AEn4Fq6EoNcgVMnDwoXY5EzcO3uT35KVmKUA4AAXoC+XC3q6bkxPQBhW7J5sIwBtyKbJ6d0c280nDOjRnUvb25BNofxk1fA1mXzkIvkFRDals1b7VOArcpm0iFTgK3K5kkukilAaFM2h6kX5wBbk82bXCRzgNCWbGZrXQJsRTaLzlgCbEU2k3KRLAFCG2M6KRfJGmBP3bKZlYtkDRDq7uJqbSGAtcomyBEhgLXKZlEukhBAqHNMF+UiCQWsTTarcpGEAkJdXQyuJQawFtlEOSEGsBbZ/BLxQccAQh1jGlVDLGBp2QTLRRILCGW7GL12CmAp2SQ5IAWwlGyi5CJJAYQyY5q0Ziqgt2yi5SJJBQTfLiavlQPoJZuscz4H0Es2SXKR5ACCz5hmrZELaC2bZLlIcgHBtovZx9YAtJKNyjmuAWglmyy5SDQAwWZMVY6pBagtm2y5SLQAQbeLasfSBNSSjeo5rQmoVZiKXCSagKAzWqrC0gbMlYOaXCTagJB3A4P6140FYKpsTH4wWACmFqoqF4kFIKSNmsmPdivAWFmoy0ViBQhxsjH7y2UJGCob060PS8DQwk03rywBIWz0TG/8swZck4eZXCTWgLDcIfNdOQ/AuXPMZV/VA3AOxGVn3AMQpkfR5a5iL8BXmZjLReIFCM8dc7sytdsPg9dan8Df/fEXTpfBPzwWuWcsG7dr/J6AcBvNneeC//OOqVI3/GSUAAAAAElFTkSuQmCC',
            self.location
          ).href,
          green: new URL(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABGCAYAAACZrlevAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVRogd2aTXLCMAxGH5leo6foZTvQLeUy5CxsOEAXVAwJTuIfSbbzrUqZifUq+RWcHL5vn1fgi31mHIBT7SoMcxqAM3CvXYlB7sB5kB8qF2ORC3Af/l/81KzEKEcAAbwCY71a1DPyYHoCwr5k82R5BdyLbCZOGZbe6DgXXho1zN7cg2yOry/mgL3L5ikXyRwQ+pbNW+0hwF5lE3RICLBX2UzkIgkBQp+yOYZ+uQTYm2ze5CJZAoS+ZLNY6xpgL7JZdcYaYC+yCcpFsgYIfYxpUC6SLcCRtmWzKBfJFiC03cXN2mIAW5VNlCNiAFuVzapcJDGA0OaYrspFEgvYmmw25SKJBYS2uhhdSwpgK7JJckIKYCuy+SXhD50CCG2MaVINqYC1ZRMtF0kqINTtYvLaOYC1ZJPlgBzAWrJJkoskBxDqjGnWmrmA3rJJloskFxB8u5i9Vgmgl2yK9nwJoJdssuQiKQEEnzEtWqMU0Fo22XKRlAKCbReLr60BaCUblT2uAWglmyK5SDQAwWZMVa6pBagtm2K5SLQAQbeLatfSBNSSjeqe1gTUKkxFLhJNQNAZLVVhaQOWykFNLhJtQCh7gEH9340FYK5sTD4wWADmFqoqF4kFIOSNmsmHdivAVFmoy0ViBQhpsjH7ymUJGCsb06MPS8DYwk0PrywBIW70TB/8swbckoeZXCTWgLDeIfNTOQ/ApT3mcq7qAbgE4nIy7gEI4VF0earYC3AuE3O5SLwAYdoxtztTnoCy51zvEH94LcQUzO0evycgPEbz4LngH7eVp8W7hAJcAAAAAElFTkSuQmCC',
            self.location
          ).href,
        },
        C = _n([i, s, l, f, c, m, v, y]);
      return (
        yt(() => {
          lt(() => {
            new Xe().createInspector('', '', 'flower', t.value, () => {
              C.forEach((T, P) => {
                var I, _;
                T &&
                  ((_ =
                    (I = T == null ? void 0 : T.value) == null
                      ? void 0
                      : I.classList) == null ||
                    _.add(`tri${P + 1}Boom`));
              });
            });
          });
        }),
        (T, P) => (
          z(),
          Y(
            'div',
            { class: 'flower_contain', ref_key: 'flower_contain', ref: t },
            [
              ce(` <div class="ball">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
    </div> `),
              U('div', Lc, [
                U(
                  'img',
                  {
                    class: 'tri tr1',
                    ref_key: 'tr1',
                    ref: i,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Oc
                ),
                U(
                  'img',
                  {
                    class: 'tri tr2',
                    ref_key: 'tr2',
                    ref: s,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Ic
                ),
                U(
                  'img',
                  {
                    class: 'tri tr3',
                    ref_key: 'tr3',
                    ref: l,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Pc
                ),
                U(
                  'img',
                  {
                    class: 'tri tr4',
                    ref_key: 'tr4',
                    ref: f,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Nc
                ),
                U(
                  'img',
                  {
                    class: 'tri tr5',
                    ref_key: 'tr5',
                    ref: c,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Jc
                ),
                U(
                  'img',
                  {
                    class: 'tri tr6',
                    ref_key: 'tr6',
                    ref: m,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Rc
                ),
                U(
                  'img',
                  {
                    class: 'tri tr7',
                    ref_key: 'tr7',
                    ref: v,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  _c
                ),
                U(
                  'img',
                  {
                    class: 'tri tr8',
                    ref_key: 'tr8',
                    ref: y,
                    src: A[n.color],
                    alt: '',
                  },
                  null,
                  8,
                  Uc
                ),
              ]),
            ],
            512
          )
        )
      );
    },
  });
var mn = ft(qc, [['__scopeId', 'data-v-181a03ec']]);
const qi = n => (en('data-v-372ef78e'), (n = n()), tn(), n),
  Mc = { class: 'daji_wrapper' },
  Vc = rs(
    '<img class="daji_title" id="anchor2" src="' +
      Dc +
      '" alt="" data-v-372ef78e><div class="article" data-v-372ef78e><div class="article_title" data-v-372ef78e>概要</div><div class="title_bar yellow" data-v-372ef78e></div><div class="article_text" data-v-372ef78e> 基沃托斯大运动会——通称「晄轮大祭」，是由联邦学生会「行政委员会」所主导，2年1次举办，基沃托斯最大级别的体育祭。每个学校轮流担当主要运营，运营校有很大的自由裁量权，每个学校的技术与文化都会得到强烈的体现，如同博览会一样。今年的运营学校是「千年科学学校」。 </div></div>',
    2
  ),
  jc = { class: 'article' },
  Wc = qi(() =>
    U('div', { class: 'article_title' }, '理念', -1)
  ),
  Kc = qi(() => U('div', { class: 'title_bar purple' }, null, -1)),
  Hc = qi(() =>
    U(
      'div',
      { class: 'article_text' },
      ' 「晄轮大祭」基于「通过运动学习并成长」的理念，是一个让学生们跨越学校的界限互相交流的祭典。我们期待着在公正的规则下，学生们向自身的界限和可能性挑战，并为学校间的交流做出贡献。作为全体学生们共同享受，共同参与的祭典，希望各位学生们都提出新的建议或积极的参与。',
      -1
    )
  ),
  Qc = dt({
    __name: 'daji',
    setup(n) {
      return (t, i) => (
        z(),
        Y('div', Mc, [
          Vc,
          U('div', jc, [
            Wc,
            Kc,
            Hc,
            Pe(mn, { class: 'greenFlower', color: 'green' }),
            Pe(mn, { class: 'blueFlower', color: 'blue' }),
          ]),
        ])
      );
    },
  });
var zc = ft(Qc, [['__scopeId', 'data-v-372ef78e']]);
const Mi = n => (en('data-v-5145fff9'), (n = n()), tn(), n),
  Gc = { class: 'coming_soon' },
  Xc = Mi(() =>
    U(
      'div',
      { class: 'coming_title', id: 'anchor4' },
      ' 项目 ',
      -1
    )
  ),
  Zc = { class: 'coming_item' },
  Yc = { class: 'item_img_wrapper' },
  $c = ['src'],
  ep = ['src'],
  tp = { class: 'item_content' },
  np = { class: 'content_title_wrapper' },
  ip = { class: 'content_title' },
  rp = { key: 0, class: 'title_text' },
  sp = { key: 1, class: 'title_text' },
  up = { class: 'content_desc' },
  ap = ['onClick'],
  op = Mi(() => U('div', { class: 'btn_text' }, 'MORE', -1)),
  lp = Mi(() => U('div', { class: 'arr' }, null, -1)),
  fp = [op, lp],
  dp = dt({
    __name: 'comingSoon',
    setup(n) {
      let t = se(0),
        i = se(!1),
        s = se([]),
        l = se(0),
        f = se(0);
      (i = xt(() => t.value < 700)),
        Gt(() => {
          yn.on('width', y => {
            t.value = y.val;
          });
        });
      const c = async () => {
        try {
          let y = await $t.get('/api/program/list.json');
          (s.value = y.rows), (f.value = y.count);
        } catch (y) {
          console.log('error123123', y);
        }
      };
      let m = se(-1);
      const v = (y, A) => {
        console.log('rul', A), window.open(A, '_blank');
      };
      return (
        yt(async () => {
          try {
            await c(), (l.value = f.value - Number(s.value.length));
          } catch (y) {
            console.log('error', y);
          }
        }),
        (y, A) => (
          z(),
          Y('div', Gc, [
            Xc,
            (z(!0),
            Y(
              At,
              null,
              Bt(q(l), C => (z(), Y('div', Zc, 'Coming Soon'))),
              256
            )),
            (z(!0),
            Y(
              At,
              null,
              Bt(
                q(s),
                (C, T) => (
                  z(),
                  Y('div', { class: 'list_item_wrapper', key: T }, [
                    U(
                      'div',
                      { class: bt(['list_item', { ac_item: q(m) === T }]) },
                      [
                        U('div', Yc, [
                          U(
                            'img',
                            { src: C.pc, alt: '', class: 'item_img' },
                            null,
                            8,
                            $c
                          ),
                          U(
                            'img',
                            {
                              src: C.mobile,
                              alt: '',
                              class: 'item_img_mobile',
                            },
                            null,
                            8,
                            ep
                          ),
                        ]),
                        U('div', tp, [
                          U('div', np, [
                            U('div', ip, [
                              q(i)
                                ? (z(), Y('div', rp, $e(C.title), 1))
                                : ce('v-if', !0),
                              q(i)
                                ? ce('v-if', !0)
                                : (z(), Y('div', sp, $e(C.title), 1)),
                            ]),
                          ]),
                          U('div', up, $e(C.description), 1),
                          C.link
                            ? (z(),
                              Y(
                                'div',
                                {
                                  key: 0,
                                  class: 'more_btn',
                                  onClick: P => v(T, C.link),
                                },
                                fp,
                                8,
                                ap
                              ))
                            : ce('v-if', !0),
                        ]),
                      ],
                      2
                    ),
                  ])
                )
              ),
              128
            )),
            Pe(mn, { class: 'blueF', color: 'blue' }),
            Pe(mn, { class: 'greenF', color: 'green' }),
            Pe(mn, { class: 'qingF', color: 'qin' }),
          ])
        )
      );
    },
  });
var cp = ft(dp, [['__scopeId', 'data-v-5145fff9']]);
const pp = { class: 'home_wrap' },
  hp = dt({
    __name: 'Home',
    setup(n) {
      let t = se(null);
      return (
        yt(() => {
          lt(() => {
            localStorage.getItem('ba_ja_end_show') ||
              (t.value?.open(), localStorage.setItem('ba_ja_end_show', 'true'));
          });
        }),
        (i, s) => (
          z(),
          Y('div', pp, [
            Pe(Fc),
            Pe(zc),
            Pe(Ef),
            Pe(cp),
            Pe(Hl),
            Pe(ra),
            Pe($u),
            ce(' <EndModal ref="endModal" /> '),
          ])
        )
      );
    },
  });
var vp = ft(hp, [['__scopeId', 'data-v-2787f9ad']]);
export { vp as default };
