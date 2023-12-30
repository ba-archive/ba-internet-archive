import { b as An, i as In, a as kn } from './image14-b1e190f7.js';
import {
  C as $n,
  o as $t,
  j as B,
  e as C,
  c as Cn,
  n as En,
  F,
  q as H,
  r as I,
  E as It,
  h as K,
  z as Ke,
  J as Ln,
  A as Lt,
  G as Mn,
  p as Mt,
  H as On,
  b as Ot,
  I as Pn,
  t as Pt,
  x as Q,
  g as S,
  w as Tn,
  u as W,
  _ as X,
  f as Y,
  B as Ze,
  D as ct,
  v as k,
  y as ke,
  k as p,
  s as q,
  m as te,
  a as ve,
  i as w,
  d as xn,
  l as z,
} from './index-ad126f05.js';

var _n = Object.defineProperty,
  yn = Object.defineProperties;
var bn = Object.getOwnPropertyDescriptors;
var lt = Object.getOwnPropertySymbols;
var Sn = Object.prototype.hasOwnProperty,
  wn = Object.prototype.propertyIsEnumerable;
var Te = Math.pow,
  dt = (e, n, t) =>
    n in e
      ? _n(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t),
  Re = (e, n) => {
    for (var t in n || (n = {})) Sn.call(n, t) && dt(e, t, n[t]);
    if (lt) for (var t of lt(n)) wn.call(n, t) && dt(e, t, n[t]);
    return e;
  },
  ut = (e, n) => yn(e, bn(n));

function ft(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  );
}
function Je(e = {}, n = {}) {
  Object.keys(n).forEach(t => {
    typeof e[t] == 'undefined'
      ? (e[t] = n[t])
      : ft(n[t]) && ft(e[t]) && Object.keys(n[t]).length > 0 && Je(e[t], n[t]);
  });
}
const kt = {
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
function V() {
  const e = typeof document != 'undefined' ? document : {};
  return Je(e, kt), e;
}
const Dn = {
  document: kt,
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
  requestAnimationFrame(e) {
    return typeof setTimeout == 'undefined' ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout != 'undefined' && clearTimeout(e);
  },
};
function R() {
  const e = typeof window != 'undefined' ? window : {};
  return Je(e, Dn), e;
}
function Nn(e) {
  const n = e.__proto__;
  Object.defineProperty(e, '__proto__', {
    get() {
      return n;
    },
    set(t) {
      n.__proto__ = t;
    },
  });
}
class oe extends Array {
  constructor(n) {
    typeof n == 'number' ? super(n) : (super(...(n || [])), Nn(this));
  }
}
function Ce(e = []) {
  const n = [];
  return (
    e.forEach(t => {
      Array.isArray(t) ? n.push(...Ce(t)) : n.push(t);
    }),
    n
  );
}
function At(e, n) {
  return Array.prototype.filter.call(e, n);
}
function Bn(e) {
  const n = [];
  for (let t = 0; t < e.length; t += 1) n.indexOf(e[t]) === -1 && n.push(e[t]);
  return n;
}
function jn(e, n) {
  if (typeof e != 'string') return [e];
  const t = [],
    i = n.querySelectorAll(e);
  for (let s = 0; s < i.length; s += 1) t.push(i[s]);
  return t;
}
function T(e, n) {
  const t = R(),
    i = V();
  let s = [];
  if (!n && e instanceof oe) return e;
  if (!e) return new oe(s);
  if (typeof e == 'string') {
    const a = e.trim();
    if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
      let o = 'div';
      a.indexOf('<li') === 0 && (o = 'ul'),
        a.indexOf('<tr') === 0 && (o = 'tbody'),
        (a.indexOf('<td') === 0 || a.indexOf('<th') === 0) && (o = 'tr'),
        a.indexOf('<tbody') === 0 && (o = 'table'),
        a.indexOf('<option') === 0 && (o = 'select');
      const l = i.createElement(o);
      l.innerHTML = a;
      for (let r = 0; r < l.childNodes.length; r += 1) s.push(l.childNodes[r]);
    } else s = jn(e.trim(), n || i);
  } else if (e.nodeType || e === t || e === i) s.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof oe) return e;
    s = e;
  }
  return new oe(Bn(s));
}
T.fn = oe.prototype;
function Fn(...e) {
  const n = Ce(e.map(t => t.split(' ')));
  return (
    this.forEach(t => {
      t.classList.add(...n);
    }),
    this
  );
}
function Rn(...e) {
  const n = Ce(e.map(t => t.split(' ')));
  return (
    this.forEach(t => {
      t.classList.remove(...n);
    }),
    this
  );
}
function zn(...e) {
  const n = Ce(e.map(t => t.split(' ')));
  this.forEach(t => {
    n.forEach(i => {
      t.classList.toggle(i);
    });
  });
}
function Hn(...e) {
  const n = Ce(e.map(t => t.split(' ')));
  return (
    At(this, t => n.filter(i => t.classList.contains(i)).length > 0).length > 0
  );
}
function Wn(e, n) {
  if (arguments.length === 1 && typeof e == 'string')
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(e, n);
    else for (const i in e) (this[t][i] = e[i]), this[t].setAttribute(i, e[i]);
  return this;
}
function Vn(e) {
  for (let n = 0; n < this.length; n += 1) this[n].removeAttribute(e);
  return this;
}
function Gn(e) {
  for (let n = 0; n < this.length; n += 1) this[n].style.transform = e;
  return this;
}
function Yn(e) {
  for (let n = 0; n < this.length; n += 1)
    this[n].style.transitionDuration = typeof e != 'string' ? `${e}ms` : e;
  return this;
}
function Xn(...e) {
  let [n, t, i, s] = e;
  typeof e[1] == 'function' && (([n, i, s] = e), (t = void 0)), s || (s = !1);
  function a(d) {
    const u = d.target;
    if (!u) return;
    const c = d.target.dom7EventData || [];
    if ((c.indexOf(d) < 0 && c.unshift(d), T(u).is(t))) i.apply(u, c);
    else {
      const f = T(u).parents();
      for (let m = 0; m < f.length; m += 1) T(f[m]).is(t) && i.apply(f[m], c);
    }
  }
  function o(d) {
    const u = d && d.target ? d.target.dom7EventData || [] : [];
    u.indexOf(d) < 0 && u.unshift(d), i.apply(this, u);
  }
  const l = n.split(' ');
  let r;
  for (let d = 0; d < this.length; d += 1) {
    const u = this[d];
    if (t)
      for (r = 0; r < l.length; r += 1) {
        const c = l[r];
        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
          u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []),
          u.dom7LiveListeners[c].push({ listener: i, proxyListener: a }),
          u.addEventListener(c, a, s);
      }
    else
      for (r = 0; r < l.length; r += 1) {
        const c = l[r];
        u.dom7Listeners || (u.dom7Listeners = {}),
          u.dom7Listeners[c] || (u.dom7Listeners[c] = []),
          u.dom7Listeners[c].push({ listener: i, proxyListener: o }),
          u.addEventListener(c, o, s);
      }
  }
  return this;
}
function qn(...e) {
  let [n, t, i, s] = e;
  typeof e[1] == 'function' && (([n, i, s] = e), (t = void 0)), s || (s = !1);
  const a = n.split(' ');
  for (let o = 0; o < a.length; o += 1) {
    const l = a[o];
    for (let r = 0; r < this.length; r += 1) {
      const d = this[r];
      let u;
      if (
        (!t && d.dom7Listeners
          ? (u = d.dom7Listeners[l])
          : t && d.dom7LiveListeners && (u = d.dom7LiveListeners[l]),
        u && u.length)
      )
        for (let c = u.length - 1; c >= 0; c -= 1) {
          const f = u[c];
          (i && f.listener === i) ||
          (i &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === i)
            ? (d.removeEventListener(l, f.proxyListener, s), u.splice(c, 1))
            : i ||
              (d.removeEventListener(l, f.proxyListener, s), u.splice(c, 1));
        }
    }
  }
  return this;
}
function Un(...e) {
  const n = R(),
    t = e[0].split(' '),
    i = e[1];
  for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    for (let o = 0; o < this.length; o += 1) {
      const l = this[o];
      if (n.CustomEvent) {
        const r = new n.CustomEvent(a, {
          detail: i,
          bubbles: !0,
          cancelable: !0,
        });
        (l.dom7EventData = e.filter((d, u) => u > 0)),
          l.dispatchEvent(r),
          (l.dom7EventData = []),
          delete l.dom7EventData;
      }
    }
  }
  return this;
}
function Kn(e) {
  const n = this;
  function t(i) {
    i.target === this && (e.call(this, i), n.off('transitionend', t));
  }
  return e && n.on('transitionend', t), this;
}
function Qn(e) {
  if (this.length > 0) {
    if (e) {
      const n = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(n.getPropertyValue('margin-right')) +
        parseFloat(n.getPropertyValue('margin-left'))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function Zn(e) {
  if (this.length > 0) {
    if (e) {
      const n = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(n.getPropertyValue('margin-top')) +
        parseFloat(n.getPropertyValue('margin-bottom'))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Jn() {
  if (this.length > 0) {
    const e = R(),
      n = V(),
      t = this[0],
      i = t.getBoundingClientRect(),
      s = n.body,
      a = t.clientTop || s.clientTop || 0,
      o = t.clientLeft || s.clientLeft || 0,
      l = t === e ? e.scrollY : t.scrollTop,
      r = t === e ? e.scrollX : t.scrollLeft;
    return { top: i.top + l - a, left: i.left + r - o };
  }
  return null;
}
function ei() {
  const e = R();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function ti(e, n) {
  const t = R();
  let i;
  if (arguments.length === 1)
    if (typeof e == 'string') {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (i = 0; i < this.length; i += 1)
        for (const s in e) this[i].style[s] = e[s];
      return this;
    }
  if (arguments.length === 2 && typeof e == 'string') {
    for (i = 0; i < this.length; i += 1) this[i].style[e] = n;
    return this;
  }
  return this;
}
function ni(e) {
  return e
    ? (this.forEach((n, t) => {
        e.apply(n, [n, t]);
      }),
      this)
    : this;
}
function ii(e) {
  const n = At(this, e);
  return T(n);
}
function si(e) {
  if (typeof e == 'undefined') return this[0] ? this[0].innerHTML : null;
  for (let n = 0; n < this.length; n += 1) this[n].innerHTML = e;
  return this;
}
function ai(e) {
  if (typeof e == 'undefined')
    return this[0] ? this[0].textContent.trim() : null;
  for (let n = 0; n < this.length; n += 1) this[n].textContent = e;
  return this;
}
function ri(e) {
  const n = R(),
    t = V(),
    i = this[0];
  let s, a;
  if (!i || typeof e == 'undefined') return !1;
  if (typeof e == 'string') {
    if (i.matches) return i.matches(e);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
    if (i.msMatchesSelector) return i.msMatchesSelector(e);
    for (s = T(e), a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
    return !1;
  }
  if (e === t) return i === t;
  if (e === n) return i === n;
  if (e.nodeType || e instanceof oe) {
    for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1)
      if (s[a] === i) return !0;
    return !1;
  }
  return !1;
}
function oi() {
  let e = this[0],
    n;
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (n += 1);
    return n;
  }
}
function li(e) {
  if (typeof e == 'undefined') return this;
  const n = this.length;
  if (e > n - 1) return T([]);
  if (e < 0) {
    const t = n + e;
    return t < 0 ? T([]) : T([this[t]]);
  }
  return T([this[e]]);
}
function di(...e) {
  let n;
  const t = V();
  for (let i = 0; i < e.length; i += 1) {
    n = e[i];
    for (let s = 0; s < this.length; s += 1)
      if (typeof n == 'string') {
        const a = t.createElement('div');
        for (a.innerHTML = n; a.firstChild; ) this[s].appendChild(a.firstChild);
      } else if (n instanceof oe)
        for (let a = 0; a < n.length; a += 1) this[s].appendChild(n[a]);
      else this[s].appendChild(n);
  }
  return this;
}
function ui(e) {
  const n = V();
  let t, i;
  for (t = 0; t < this.length; t += 1)
    if (typeof e == 'string') {
      const s = n.createElement('div');
      for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
        this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
    } else if (e instanceof oe)
      for (i = 0; i < e.length; i += 1)
        this[t].insertBefore(e[i], this[t].childNodes[0]);
    else this[t].insertBefore(e, this[t].childNodes[0]);
  return this;
}
function ci(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e)
        ? T([this[0].nextElementSibling])
        : T([])
      : this[0].nextElementSibling
        ? T([this[0].nextElementSibling])
        : T([])
    : T([]);
}
function fi(e) {
  const n = [];
  let t = this[0];
  if (!t) return T([]);
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    e ? T(i).is(e) && n.push(i) : n.push(i), (t = i);
  }
  return T(n);
}
function pi(e) {
  if (this.length > 0) {
    const n = this[0];
    return e
      ? n.previousElementSibling && T(n.previousElementSibling).is(e)
        ? T([n.previousElementSibling])
        : T([])
      : n.previousElementSibling
        ? T([n.previousElementSibling])
        : T([]);
  }
  return T([]);
}
function hi(e) {
  const n = [];
  let t = this[0];
  if (!t) return T([]);
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    e ? T(i).is(e) && n.push(i) : n.push(i), (t = i);
  }
  return T(n);
}
function mi(e) {
  const n = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (e
        ? T(this[t].parentNode).is(e) && n.push(this[t].parentNode)
        : n.push(this[t].parentNode));
  return T(n);
}
function vi(e) {
  const n = [];
  for (let t = 0; t < this.length; t += 1) {
    let i = this[t].parentNode;
    for (; i; ) e ? T(i).is(e) && n.push(i) : n.push(i), (i = i.parentNode);
  }
  return T(n);
}
function gi(e) {
  let n = this;
  return typeof e == 'undefined'
    ? T([])
    : (n.is(e) || (n = n.parents(e).eq(0)), n);
}
function _i(e) {
  const n = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].querySelectorAll(e);
    for (let s = 0; s < i.length; s += 1) n.push(i[s]);
  }
  return T(n);
}
function yi(e) {
  const n = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].children;
    for (let s = 0; s < i.length; s += 1) (!e || T(i[s]).is(e)) && n.push(i[s]);
  }
  return T(n);
}
function bi() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const pt = {
  addClass: Fn,
  removeClass: Rn,
  hasClass: Hn,
  toggleClass: zn,
  attr: Wn,
  removeAttr: Vn,
  transform: Gn,
  transition: Yn,
  on: Xn,
  off: qn,
  trigger: Un,
  transitionEnd: Kn,
  outerWidth: Qn,
  outerHeight: Zn,
  styles: ei,
  offset: Jn,
  css: ti,
  each: ni,
  html: si,
  text: ai,
  is: ri,
  index: oi,
  eq: li,
  append: di,
  prepend: ui,
  next: ci,
  nextAll: fi,
  prev: pi,
  prevAll: hi,
  parent: mi,
  parents: vi,
  closest: gi,
  find: _i,
  children: yi,
  filter: ii,
  remove: bi,
};
Object.keys(pt).forEach(e => {
  Object.defineProperty(T.fn, e, { value: pt[e], writable: !0 });
});
function Si(e) {
  const n = e;
  Object.keys(n).forEach(t => {
    try {
      n[t] = null;
    } catch (i) {}
    try {
      delete n[t];
    } catch (i) {}
  });
}
function _e(e, n = 0) {
  return setTimeout(e, n);
}
function ne() {
  return Date.now();
}
function wi(e) {
  const n = R();
  let t;
  return (
    n.getComputedStyle && (t = n.getComputedStyle(e, null)),
    !t && e.currentStyle && (t = e.currentStyle),
    t || (t = e.style),
    t
  );
}
function Ti(e, n = 'x') {
  const t = R();
  let i, s, a;
  const o = wi(e);
  return (
    t.WebKitCSSMatrix
      ? ((s = o.transform || o.webkitTransform),
        s.split(',').length > 6 &&
          (s = s
            .split(', ')
            .map(l => l.replace(',', '.'))
            .join(', ')),
        (a = new t.WebKitCSSMatrix(s === 'none' ? '' : s)))
      : ((a =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (i = a.toString().split(','))),
    n === 'x' &&
      (t.WebKitCSSMatrix
        ? (s = a.m41)
        : i.length === 16
          ? (s = parseFloat(i[12]))
          : (s = parseFloat(i[4]))),
    n === 'y' &&
      (t.WebKitCSSMatrix
        ? (s = a.m42)
        : i.length === 16
          ? (s = parseFloat(i[13]))
          : (s = parseFloat(i[5]))),
    s || 0
  );
}
function Oe(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  );
}
function Ei(e) {
  return typeof window != 'undefined' &&
    typeof window.HTMLElement != 'undefined'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function U(...e) {
  const n = Object(e[0]),
    t = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < e.length; i += 1) {
    const s = e[i];
    if (s != null && !Ei(s)) {
      const a = Object.keys(Object(s)).filter(o => t.indexOf(o) < 0);
      for (let o = 0, l = a.length; o < l; o += 1) {
        const r = a[o],
          d = Object.getOwnPropertyDescriptor(s, r);
        d !== void 0 &&
          d.enumerable &&
          (Oe(n[r]) && Oe(s[r])
            ? s[r].__swiper__
              ? (n[r] = s[r])
              : U(n[r], s[r])
            : !Oe(n[r]) && Oe(s[r])
              ? ((n[r] = {}), s[r].__swiper__ ? (n[r] = s[r]) : U(n[r], s[r]))
              : (n[r] = s[r]));
      }
    }
  }
  return n;
}
function Pe(e, n, t) {
  e.style.setProperty(n, t);
}
function Dt({ swiper: e, targetPosition: n, side: t }) {
  const i = R(),
    s = -e.translate;
  let a = null,
    o;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = 'none'),
    i.cancelAnimationFrame(e.cssModeFrameID);
  const r = n > s ? 'next' : 'prev',
    d = (c, f) => (r === 'next' && c >= f) || (r === 'prev' && c <= f),
    u = () => {
      (o = new Date().getTime()), a === null && (a = o);
      const c = Math.max(Math.min((o - a) / l, 1), 0),
        f = 0.5 - Math.cos(c * Math.PI) / 2;
      let m = s + f * (n - s);
      if ((d(m, n) && (m = n), e.wrapperEl.scrollTo({ [t]: m }), d(m, n))) {
        (e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [t]: m });
          }),
          i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(u);
    };
  u();
}
let ze;
function Ci() {
  const e = R(),
    n = V();
  return {
    smoothScroll:
      n.documentElement && 'scrollBehavior' in n.documentElement.style,
    touch: !!(
      'ontouchstart' in e ||
      (e.DocumentTouch && n instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let i = !1;
      try {
        const s = Object.defineProperty({}, 'passive', {
          get() {
            i = !0;
          },
        });
        e.addEventListener('testPassiveListener', null, s);
      } catch (s) {}
      return i;
    })(),
    gestures: (function () {
      return 'ongesturestart' in e;
    })(),
  };
}
function Nt() {
  return ze || (ze = Ci()), ze;
}
let He;
function xi({ userAgent: e } = {}) {
  const n = Nt(),
    t = R(),
    i = t.navigator.platform,
    s = e || t.navigator.userAgent,
    a = { ios: !1, android: !1 },
    o = t.screen.width,
    l = t.screen.height,
    r = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = s.match(/(iPad).*OS\s([\d_]+)/);
  const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    c = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = i === 'Win32';
  let m = i === 'MacIntel';
  const h = [
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
    !d &&
      m &&
      n.touch &&
      h.indexOf(`${o}x${l}`) >= 0 &&
      ((d = s.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, '13_0_0']),
      (m = !1)),
    r && !f && ((a.os = 'android'), (a.android = !0)),
    (d || c || u) && ((a.os = 'ios'), (a.ios = !0)),
    a
  );
}
function $i(e = {}) {
  return He || (He = xi(e)), He;
}
let We;
function Mi() {
  const e = R();
  function n() {
    const t = e.navigator.userAgent.toLowerCase();
    return (
      t.indexOf('safari') >= 0 &&
      t.indexOf('chrome') < 0 &&
      t.indexOf('android') < 0
    );
  }
  return {
    isSafari: n(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function Oi() {
  return We || (We = Mi()), We;
}
function Pi({ swiper: e, on: n, emit: t }) {
  const i = R();
  let s = null,
    a = null;
  const o = () => {
      !e || e.destroyed || !e.initialized || (t('beforeResize'), t('resize'));
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver(u => {
          a = i.requestAnimationFrame(() => {
            const { width: c, height: f } = e;
            let m = c,
              h = f;
            u.forEach(({ contentBoxSize: b, contentRect: _, target: g }) => {
              (g && g !== e.el) ||
                ((m = _ ? _.width : (b[0] || b).inlineSize),
                (h = _ ? _.height : (b[0] || b).blockSize));
            }),
              (m !== c || h !== f) && o();
          });
        })),
        s.observe(e.el));
    },
    r = () => {
      a && i.cancelAnimationFrame(a),
        s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
    },
    d = () => {
      !e || e.destroyed || !e.initialized || t('orientationchange');
    };
  n('init', () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver != 'undefined') {
      l();
      return;
    }
    i.addEventListener('resize', o), i.addEventListener('orientationchange', d);
  }),
    n('destroy', () => {
      r(),
        i.removeEventListener('resize', o),
        i.removeEventListener('orientationchange', d);
    });
}
function Li({ swiper: e, extendParams: n, on: t, emit: i }) {
  const s = [],
    a = R(),
    o = (d, u = {}) => {
      const c = a.MutationObserver || a.WebkitMutationObserver,
        f = new c(m => {
          if (m.length === 1) {
            i('observerUpdate', m[0]);
            return;
          }
          const h = function () {
            i('observerUpdate', m[0]);
          };
          a.requestAnimationFrame
            ? a.requestAnimationFrame(h)
            : a.setTimeout(h, 0);
        });
      f.observe(d, {
        attributes: typeof u.attributes == 'undefined' ? !0 : u.attributes,
        childList: typeof u.childList == 'undefined' ? !0 : u.childList,
        characterData:
          typeof u.characterData == 'undefined' ? !0 : u.characterData,
      }),
        s.push(f);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = e.$el.parents();
          for (let u = 0; u < d.length; u += 1) o(d[u]);
        }
        o(e.$el[0], { childList: e.params.observeSlideChildren }),
          o(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    r = () => {
      s.forEach(d => {
        d.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t('init', l),
    t('destroy', r);
}
const Ii = {
  on(e, n, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof n != 'function') return i;
    const s = t ? 'unshift' : 'push';
    return (
      e.split(' ').forEach(a => {
        i.eventsListeners[a] || (i.eventsListeners[a] = []),
          i.eventsListeners[a][s](n);
      }),
      i
    );
  },
  once(e, n, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof n != 'function') return i;
    function s(...a) {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy, n.apply(i, a);
    }
    return (s.__emitterProxy = n), i.on(e, s, t);
  },
  onAny(e, n) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != 'function') return t;
    const i = n ? 'unshift' : 'push';
    return t.eventsAnyListeners.indexOf(e) < 0 && t.eventsAnyListeners[i](e), t;
  },
  offAny(e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsAnyListeners) return n;
    const t = n.eventsAnyListeners.indexOf(e);
    return t >= 0 && n.eventsAnyListeners.splice(t, 1), n;
  },
  off(e, n) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        e.split(' ').forEach(i => {
          typeof n == 'undefined'
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((s, a) => {
                (s === n || (s.__emitterProxy && s.__emitterProxy === n)) &&
                  t.eventsListeners[i].splice(a, 1);
              });
        }),
      t
    );
  },
  emit(...e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
    let t, i, s;
    return (
      typeof e[0] == 'string' || Array.isArray(e[0])
        ? ((t = e[0]), (i = e.slice(1, e.length)), (s = n))
        : ((t = e[0].events), (i = e[0].data), (s = e[0].context || n)),
      i.unshift(s),
      (Array.isArray(t) ? t : t.split(' ')).forEach(o => {
        n.eventsAnyListeners &&
          n.eventsAnyListeners.length &&
          n.eventsAnyListeners.forEach(l => {
            l.apply(s, [o, ...i]);
          }),
          n.eventsListeners &&
            n.eventsListeners[o] &&
            n.eventsListeners[o].forEach(l => {
              l.apply(s, i);
            });
      }),
      n
    );
  },
};
function ki() {
  const e = this;
  let n, t;
  const i = e.$el;
  typeof e.params.width != 'undefined' && e.params.width !== null
    ? (n = e.params.width)
    : (n = i[0].clientWidth),
    typeof e.params.height != 'undefined' && e.params.height !== null
      ? (t = e.params.height)
      : (t = i[0].clientHeight),
    !((n === 0 && e.isHorizontal()) || (t === 0 && e.isVertical())) &&
      ((n =
        n -
        parseInt(i.css('padding-left') || 0, 10) -
        parseInt(i.css('padding-right') || 0, 10)),
      (t =
        t -
        parseInt(i.css('padding-top') || 0, 10) -
        parseInt(i.css('padding-bottom') || 0, 10)),
      Number.isNaN(n) && (n = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(e, {
        width: n,
        height: t,
        size: e.isHorizontal() ? n : t,
      }));
}
function Ai() {
  const e = this;
  function n($) {
    return e.isHorizontal()
      ? $
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[$];
  }
  function t($, E) {
    return parseFloat($.getPropertyValue(n(E)) || 0);
  }
  const i = e.params,
    { $wrapperEl: s, size: a, rtlTranslate: o, wrongRTL: l } = e,
    r = e.virtual && i.virtual.enabled,
    d = r ? e.virtual.slides.length : e.slides.length,
    u = s.children(`.${e.params.slideClass}`),
    c = r ? e.virtual.slides.length : u.length;
  let f = [];
  const m = [],
    h = [];
  let b = i.slidesOffsetBefore;
  typeof b == 'function' && (b = i.slidesOffsetBefore.call(e));
  let _ = i.slidesOffsetAfter;
  typeof _ == 'function' && (_ = i.slidesOffsetAfter.call(e));
  const g = e.snapGrid.length,
    v = e.slidesGrid.length;
  let y = i.spaceBetween,
    P = -b,
    M = 0,
    N = 0;
  if (typeof a == 'undefined') return;
  typeof y == 'string' &&
    y.indexOf('%') >= 0 &&
    (y = (parseFloat(y.replace('%', '')) / 100) * a),
    (e.virtualSize = -y),
    o
      ? u.css({ marginLeft: '', marginBottom: '', marginTop: '' })
      : u.css({ marginRight: '', marginBottom: '', marginTop: '' }),
    i.centeredSlides &&
      i.cssMode &&
      (Pe(e.wrapperEl, '--swiper-centered-offset-before', ''),
      Pe(e.wrapperEl, '--swiper-centered-offset-after', ''));
  const O = i.grid && i.grid.rows > 1 && e.grid;
  O && e.grid.initSlides(c);
  let x;
  const A =
    i.slidesPerView === 'auto' &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      $ => typeof i.breakpoints[$].slidesPerView != 'undefined'
    ).length > 0;
  for (let $ = 0; $ < c; $ += 1) {
    x = 0;
    const E = u.eq($);
    if ((O && e.grid.updateSlide($, E, c, n), E.css('display') !== 'none')) {
      if (i.slidesPerView === 'auto') {
        A && (u[$].style[n('width')] = '');
        const L = getComputedStyle(E[0]),
          G = E[0].style.transform,
          be = E[0].style.webkitTransform;
        if (
          (G && (E[0].style.transform = 'none'),
          be && (E[0].style.webkitTransform = 'none'),
          i.roundLengths)
        )
          x = e.isHorizontal() ? E.outerWidth(!0) : E.outerHeight(!0);
        else {
          const $e = t(L, 'width'),
            Se = t(L, 'padding-left'),
            Me = t(L, 'padding-right'),
            we = t(L, 'margin-left'),
            rt = t(L, 'margin-right'),
            ot = L.getPropertyValue('box-sizing');
          if (ot && ot === 'border-box') x = $e + we + rt;
          else {
            const { clientWidth: vn, offsetWidth: gn } = E[0];
            x = $e + Se + Me + we + rt + (gn - vn);
          }
        }
        G && (E[0].style.transform = G),
          be && (E[0].style.webkitTransform = be),
          i.roundLengths && (x = Math.floor(x));
      } else
        (x = (a - (i.slidesPerView - 1) * y) / i.slidesPerView),
          i.roundLengths && (x = Math.floor(x)),
          u[$] && (u[$].style[n('width')] = `${x}px`);
      u[$] && (u[$].swiperSlideSize = x),
        h.push(x),
        i.centeredSlides
          ? ((P = P + x / 2 + M / 2 + y),
            M === 0 && $ !== 0 && (P = P - a / 2 - y),
            $ === 0 && (P = P - a / 2 - y),
            Math.abs(P) < 1 / 1e3 && (P = 0),
            i.roundLengths && (P = Math.floor(P)),
            N % i.slidesPerGroup === 0 && f.push(P),
            m.push(P))
          : (i.roundLengths && (P = Math.floor(P)),
            (N - Math.min(e.params.slidesPerGroupSkip, N)) %
              e.params.slidesPerGroup ===
              0 && f.push(P),
            m.push(P),
            (P = P + x + y)),
        (e.virtualSize += x + y),
        (M = x),
        (N += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + _),
    o &&
      l &&
      (i.effect === 'slide' || i.effect === 'coverflow') &&
      s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
    i.setWrapperSize &&
      s.css({ [n('width')]: `${e.virtualSize + i.spaceBetween}px` }),
    O && e.grid.updateWrapperSize(x, f, n),
    !i.centeredSlides)
  ) {
    const $ = [];
    for (let E = 0; E < f.length; E += 1) {
      let L = f[E];
      i.roundLengths && (L = Math.floor(L)),
        f[E] <= e.virtualSize - a && $.push(L);
    }
    (f = $),
      Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - a);
  }
  if ((f.length === 0 && (f = [0]), i.spaceBetween !== 0)) {
    const $ = e.isHorizontal() && o ? 'marginLeft' : n('marginRight');
    u.filter((E, L) => (i.cssMode ? L !== u.length - 1 : !0)).css({
      [$]: `${y}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let $ = 0;
    h.forEach(L => {
      $ += L + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      ($ -= i.spaceBetween);
    const E = $ - a;
    f = f.map(L => (L < 0 ? -b : L > E ? E + _ : L));
  }
  if (i.centerInsufficientSlides) {
    let $ = 0;
    if (
      (h.forEach(E => {
        $ += E + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      ($ -= i.spaceBetween),
      $ < a)
    ) {
      const E = (a - $) / 2;
      f.forEach((L, G) => {
        f[G] = L - E;
      }),
        m.forEach((L, G) => {
          m[G] = L + E;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: f,
      slidesGrid: m,
      slidesSizesGrid: h,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    Pe(e.wrapperEl, '--swiper-centered-offset-before', `${-f[0]}px`),
      Pe(
        e.wrapperEl,
        '--swiper-centered-offset-after',
        `${e.size / 2 - h[h.length - 1] / 2}px`
      );
    const $ = -e.snapGrid[0],
      E = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map(L => L + $)),
      (e.slidesGrid = e.slidesGrid.map(L => L + E));
  }
  if (
    (c !== d && e.emit('slidesLengthChange'),
    f.length !== g &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    m.length !== v && e.emit('slidesGridLengthChange'),
    i.watchSlidesProgress && e.updateSlidesOffset(),
    !r && !i.cssMode && (i.effect === 'slide' || i.effect === 'fade'))
  ) {
    const $ = `${i.containerModifierClass}backface-hidden`,
      E = e.$el.hasClass($);
    c <= i.maxBackfaceHiddenSlides
      ? E || e.$el.addClass($)
      : E && e.$el.removeClass($);
  }
}
function Di(e) {
  const n = this,
    t = [],
    i = n.virtual && n.params.virtual.enabled;
  let s = 0,
    a;
  typeof e == 'number'
    ? n.setTransition(e)
    : e === !0 && n.setTransition(n.params.speed);
  const o = l =>
    i
      ? n.slides.filter(
          r => parseInt(r.getAttribute('data-swiper-slide-index'), 10) === l
        )[0]
      : n.slides.eq(l)[0];
  if (n.params.slidesPerView !== 'auto' && n.params.slidesPerView > 1)
    if (n.params.centeredSlides)
      (n.visibleSlides || T([])).each(l => {
        t.push(l);
      });
    else
      for (a = 0; a < Math.ceil(n.params.slidesPerView); a += 1) {
        const l = n.activeIndex + a;
        if (l > n.slides.length && !i) break;
        t.push(o(l));
      }
  else t.push(o(n.activeIndex));
  for (a = 0; a < t.length; a += 1)
    if (typeof t[a] != 'undefined') {
      const l = t[a].offsetHeight;
      s = l > s ? l : s;
    }
  (s || s === 0) && n.$wrapperEl.css('height', `${s}px`);
}
function Ni() {
  const e = this,
    n = e.slides;
  for (let t = 0; t < n.length; t += 1)
    n[t].swiperSlideOffset = e.isHorizontal()
      ? n[t].offsetLeft
      : n[t].offsetTop;
}
function Bi(e = (this && this.translate) || 0) {
  const n = this,
    t = n.params,
    { slides: i, rtlTranslate: s, snapGrid: a } = n;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset == 'undefined' && n.updateSlidesOffset();
  let o = -e;
  s && (o = e),
    i.removeClass(t.slideVisibleClass),
    (n.visibleSlidesIndexes = []),
    (n.visibleSlides = []);
  for (let l = 0; l < i.length; l += 1) {
    const r = i[l];
    let d = r.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
    const u =
        (o + (t.centeredSlides ? n.minTranslate() : 0) - d) /
        (r.swiperSlideSize + t.spaceBetween),
      c =
        (o - a[0] + (t.centeredSlides ? n.minTranslate() : 0) - d) /
        (r.swiperSlideSize + t.spaceBetween),
      f = -(o - d),
      m = f + n.slidesSizesGrid[l];
    ((f >= 0 && f < n.size - 1) ||
      (m > 1 && m <= n.size) ||
      (f <= 0 && m >= n.size)) &&
      (n.visibleSlides.push(r),
      n.visibleSlidesIndexes.push(l),
      i.eq(l).addClass(t.slideVisibleClass)),
      (r.progress = s ? -u : u),
      (r.originalProgress = s ? -c : c);
  }
  n.visibleSlides = T(n.visibleSlides);
}
function ji(e) {
  const n = this;
  if (typeof e == 'undefined') {
    const d = n.rtlTranslate ? -1 : 1;
    e = (n && n.translate && n.translate * d) || 0;
  }
  const t = n.params,
    i = n.maxTranslate() - n.minTranslate();
  let { progress: s, isBeginning: a, isEnd: o } = n;
  const l = a,
    r = o;
  i === 0
    ? ((s = 0), (a = !0), (o = !0))
    : ((s = (e - n.minTranslate()) / i), (a = s <= 0), (o = s >= 1)),
    Object.assign(n, { progress: s, isBeginning: a, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      n.updateSlidesProgress(e),
    a && !l && n.emit('reachBeginning toEdge'),
    o && !r && n.emit('reachEnd toEdge'),
    ((l && !a) || (r && !o)) && n.emit('fromEdge'),
    n.emit('progress', s);
}
function Fi() {
  const e = this,
    { slides: n, params: t, $wrapperEl: i, activeIndex: s, realIndex: a } = e,
    o = e.virtual && t.virtual.enabled;
  n.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let l;
  o
    ? (l = e.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${s}"]`
      ))
    : (l = n.eq(s)),
    l.addClass(t.slideActiveClass),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
            )
            .addClass(t.slideDuplicateActiveClass)
        : i
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
            )
            .addClass(t.slideDuplicateActiveClass));
  let r = l.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && r.length === 0 && ((r = n.eq(0)), r.addClass(t.slideNextClass));
  let d = l.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && d.length === 0 && ((d = n.eq(-1)), d.addClass(t.slidePrevClass)),
    t.loop &&
      (r.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${r.attr(
                'data-swiper-slide-index'
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${r.attr('data-swiper-slide-index')}"]`
            )
            .addClass(t.slideDuplicateNextClass),
      d.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${d.attr(
                'data-swiper-slide-index'
              )}"]`
            )
            .addClass(t.slideDuplicatePrevClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${d.attr('data-swiper-slide-index')}"]`
            )
            .addClass(t.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function Ri(e) {
  const n = this,
    t = n.rtlTranslate ? n.translate : -n.translate,
    {
      slidesGrid: i,
      snapGrid: s,
      params: a,
      activeIndex: o,
      realIndex: l,
      snapIndex: r,
    } = n;
  let d = e,
    u;
  if (typeof d == 'undefined') {
    for (let f = 0; f < i.length; f += 1)
      typeof i[f + 1] != 'undefined'
        ? t >= i[f] && t < i[f + 1] - (i[f + 1] - i[f]) / 2
          ? (d = f)
          : t >= i[f] && t < i[f + 1] && (d = f + 1)
        : t >= i[f] && (d = f);
    a.normalizeSlideIndex && (d < 0 || typeof d == 'undefined') && (d = 0);
  }
  if (s.indexOf(t) >= 0) u = s.indexOf(t);
  else {
    const f = Math.min(a.slidesPerGroupSkip, d);
    u = f + Math.floor((d - f) / a.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), d === o)) {
    u !== r && ((n.snapIndex = u), n.emit('snapIndexChange'));
    return;
  }
  const c = parseInt(n.slides.eq(d).attr('data-swiper-slide-index') || d, 10);
  Object.assign(n, {
    snapIndex: u,
    realIndex: c,
    previousIndex: o,
    activeIndex: d,
  }),
    n.emit('activeIndexChange'),
    n.emit('snapIndexChange'),
    l !== c && n.emit('realIndexChange'),
    (n.initialized || n.params.runCallbacksOnInit) && n.emit('slideChange');
}
function zi(e) {
  const n = this,
    t = n.params,
    i = T(e).closest(`.${t.slideClass}`)[0];
  let s = !1,
    a;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        (s = !0), (a = o);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(T(i).attr('data-swiper-slide-index'), 10))
        : (n.clickedIndex = a);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
const Hi = {
  updateSize: ki,
  updateSlides: Ai,
  updateAutoHeight: Di,
  updateSlidesOffset: Ni,
  updateSlidesProgress: Bi,
  updateProgress: ji,
  updateSlidesClasses: Fi,
  updateActiveIndex: Ri,
  updateClickedSlide: zi,
};
function Wi(e = this.isHorizontal() ? 'x' : 'y') {
  const n = this,
    { params: t, rtlTranslate: i, translate: s, $wrapperEl: a } = n;
  if (t.virtualTranslate) return i ? -s : s;
  if (t.cssMode) return s;
  let o = Ti(a[0], e);
  return i && (o = -o), o || 0;
}
function Vi(e, n) {
  const t = this,
    {
      rtlTranslate: i,
      params: s,
      $wrapperEl: a,
      wrapperEl: o,
      progress: l,
    } = t;
  let r = 0,
    d = 0;
  const u = 0;
  t.isHorizontal() ? (r = i ? -e : e) : (d = e),
    s.roundLengths && ((r = Math.floor(r)), (d = Math.floor(d))),
    s.cssMode
      ? (o[t.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = t.isHorizontal()
          ? -r
          : -d)
      : s.virtualTranslate ||
        a.transform(`translate3d(${r}px, ${d}px, ${u}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? r : d);
  let c;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? (c = 0) : (c = (e - t.minTranslate()) / f),
    c !== l && t.updateProgress(e),
    t.emit('setTranslate', t.translate, n);
}
function Gi() {
  return -this.snapGrid[0];
}
function Yi() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Xi(e = 0, n = this.params.speed, t = !0, i = !0, s) {
  const a = this,
    { params: o, wrapperEl: l } = a;
  if (a.animating && o.preventInteractionOnTransition) return !1;
  const r = a.minTranslate(),
    d = a.maxTranslate();
  let u;
  if (
    (i && e > r ? (u = r) : i && e < d ? (u = d) : (u = e),
    a.updateProgress(u),
    o.cssMode)
  ) {
    const c = a.isHorizontal();
    if (n === 0) l[c ? 'scrollLeft' : 'scrollTop'] = -u;
    else {
      if (!a.support.smoothScroll)
        return (
          Dt({ swiper: a, targetPosition: -u, side: c ? 'left' : 'top' }), !0
        );
      l.scrollTo({ [c ? 'left' : 'top']: -u, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    n === 0
      ? (a.setTransition(0),
        a.setTranslate(u),
        t && (a.emit('beforeTransitionStart', n, s), a.emit('transitionEnd')))
      : (a.setTransition(n),
        a.setTranslate(u),
        t && (a.emit('beforeTransitionStart', n, s), a.emit('transitionStart')),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (f) {
              !a ||
                a.destroyed ||
                (f.target === this &&
                  (a.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  t && a.emit('transitionEnd')));
            }),
          a.$wrapperEl[0].addEventListener(
            'transitionend',
            a.onTranslateToWrapperTransitionEnd
          ),
          a.$wrapperEl[0].addEventListener(
            'webkitTransitionEnd',
            a.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const qi = {
  getTranslate: Wi,
  setTranslate: Vi,
  minTranslate: Gi,
  maxTranslate: Yi,
  translateTo: Xi,
};
function Ui(e, n) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(e), t.emit('setTransition', e, n);
}
function Bt({ swiper: e, runCallbacks: n, direction: t, step: i }) {
  const { activeIndex: s, previousIndex: a } = e;
  let o = t;
  if (
    (o || (s > a ? (o = 'next') : s < a ? (o = 'prev') : (o = 'reset')),
    e.emit(`transition${i}`),
    n && s !== a)
  ) {
    if (o === 'reset') {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`),
      o === 'next'
        ? e.emit(`slideNextTransition${i}`)
        : e.emit(`slidePrevTransition${i}`);
  }
}
function Ki(e = !0, n) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    Bt({ swiper: t, runCallbacks: e, direction: n, step: 'Start' }));
}
function Qi(e = !0, n) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      Bt({ swiper: t, runCallbacks: e, direction: n, step: 'End' }));
}
const Zi = { setTransition: Ui, transitionStart: Ki, transitionEnd: Qi };
function Ji(e = 0, n = this.params.speed, t = !0, i, s) {
  if (typeof e != 'number' && typeof e != 'string')
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == 'string') {
    const y = parseInt(e, 10);
    if (!isFinite(y))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = y;
  }
  const a = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: r,
    slidesGrid: d,
    previousIndex: u,
    activeIndex: c,
    rtlTranslate: f,
    wrapperEl: m,
    enabled: h,
  } = a;
  if ((a.animating && l.preventInteractionOnTransition) || (!h && !i && !s))
    return !1;
  const b = Math.min(a.params.slidesPerGroupSkip, o);
  let _ = b + Math.floor((o - b) / a.params.slidesPerGroup);
  _ >= r.length && (_ = r.length - 1);
  const g = -r[_];
  if (l.normalizeSlideIndex)
    for (let y = 0; y < d.length; y += 1) {
      const P = -Math.floor(g * 100),
        M = Math.floor(d[y] * 100),
        N = Math.floor(d[y + 1] * 100);
      typeof d[y + 1] != 'undefined'
        ? P >= M && P < N - (N - M) / 2
          ? (o = y)
          : P >= M && P < N && (o = y + 1)
        : P >= M && (o = y);
    }
  if (
    a.initialized &&
    o !== c &&
    ((!a.allowSlideNext && g < a.translate && g < a.minTranslate()) ||
      (!a.allowSlidePrev &&
        g > a.translate &&
        g > a.maxTranslate() &&
        (c || 0) !== o))
  )
    return !1;
  o !== (u || 0) && t && a.emit('beforeSlideChangeStart'), a.updateProgress(g);
  let v;
  if (
    (o > c ? (v = 'next') : o < c ? (v = 'prev') : (v = 'reset'),
    (f && -g === a.translate) || (!f && g === a.translate))
  )
    return (
      a.updateActiveIndex(o),
      l.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      l.effect !== 'slide' && a.setTranslate(g),
      v !== 'reset' && (a.transitionStart(t, v), a.transitionEnd(t, v)),
      !1
    );
  if (l.cssMode) {
    const y = a.isHorizontal(),
      P = f ? g : -g;
    if (n === 0) {
      const M = a.virtual && a.params.virtual.enabled;
      M &&
        ((a.wrapperEl.style.scrollSnapType = 'none'),
        (a._immediateVirtual = !0)),
        (m[y ? 'scrollLeft' : 'scrollTop'] = P),
        M &&
          requestAnimationFrame(() => {
            (a.wrapperEl.style.scrollSnapType = ''),
              (a._swiperImmediateVirtual = !1);
          });
    } else {
      if (!a.support.smoothScroll)
        return (
          Dt({ swiper: a, targetPosition: P, side: y ? 'left' : 'top' }), !0
        );
      m.scrollTo({ [y ? 'left' : 'top']: P, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    a.setTransition(n),
    a.setTranslate(g),
    a.updateActiveIndex(o),
    a.updateSlidesClasses(),
    a.emit('beforeTransitionStart', n, i),
    a.transitionStart(t, v),
    n === 0
      ? a.transitionEnd(t, v)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (P) {
            !a ||
              a.destroyed ||
              (P.target === this &&
                (a.$wrapperEl[0].removeEventListener(
                  'transitionend',
                  a.onSlideToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].removeEventListener(
                  'webkitTransitionEnd',
                  a.onSlideToWrapperTransitionEnd
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(t, v)));
          }),
        a.$wrapperEl[0].addEventListener(
          'transitionend',
          a.onSlideToWrapperTransitionEnd
        ),
        a.$wrapperEl[0].addEventListener(
          'webkitTransitionEnd',
          a.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function es(e = 0, n = this.params.speed, t = !0, i) {
  if (typeof e == 'string') {
    const o = parseInt(e, 10);
    if (!isFinite(o))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = o;
  }
  const s = this;
  let a = e;
  return s.params.loop && (a += s.loopedSlides), s.slideTo(a, n, t, i);
}
function ts(e = this.params.speed, n = !0, t) {
  const i = this,
    { animating: s, enabled: a, params: o } = i;
  if (!a) return i;
  let l = o.slidesPerGroup;
  o.slidesPerView === 'auto' &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (l = Math.max(i.slidesPerViewDynamic('current', !0), 1));
  const r = i.activeIndex < o.slidesPerGroupSkip ? 1 : l;
  if (o.loop) {
    if (s && o.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  return o.rewind && i.isEnd
    ? i.slideTo(0, e, n, t)
    : i.slideTo(i.activeIndex + r, e, n, t);
}
function ns(e = this.params.speed, n = !0, t) {
  const i = this,
    {
      params: s,
      animating: a,
      snapGrid: o,
      slidesGrid: l,
      rtlTranslate: r,
      enabled: d,
    } = i;
  if (!d) return i;
  if (s.loop) {
    if (a && s.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  const u = r ? i.translate : -i.translate;
  function c(_) {
    return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
  }
  const f = c(u),
    m = o.map(_ => c(_));
  let h = o[m.indexOf(f) - 1];
  if (typeof h == 'undefined' && s.cssMode) {
    let _;
    o.forEach((g, v) => {
      f >= g && (_ = v);
    }),
      typeof _ != 'undefined' && (h = o[_ > 0 ? _ - 1 : _]);
  }
  let b = 0;
  if (
    (typeof h != 'undefined' &&
      ((b = l.indexOf(h)),
      b < 0 && (b = i.activeIndex - 1),
      s.slidesPerView === 'auto' &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((b = b - i.slidesPerViewDynamic('previous', !0) + 1),
        (b = Math.max(b, 0)))),
    s.rewind && i.isBeginning)
  ) {
    const _ =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(_, e, n, t);
  }
  return i.slideTo(b, e, n, t);
}
function is(e = this.params.speed, n = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, e, n, t);
}
function ss(e = this.params.speed, n = !0, t, i = 0.5) {
  const s = this;
  let a = s.activeIndex;
  const o = Math.min(s.params.slidesPerGroupSkip, a),
    l = o + Math.floor((a - o) / s.params.slidesPerGroup),
    r = s.rtlTranslate ? s.translate : -s.translate;
  if (r >= s.snapGrid[l]) {
    const d = s.snapGrid[l],
      u = s.snapGrid[l + 1];
    r - d > (u - d) * i && (a += s.params.slidesPerGroup);
  } else {
    const d = s.snapGrid[l - 1],
      u = s.snapGrid[l];
    r - d <= (u - d) * i && (a -= s.params.slidesPerGroup);
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, s.slidesGrid.length - 1)),
    s.slideTo(a, e, n, t)
  );
}
function as() {
  const e = this,
    { params: n, $wrapperEl: t } = e,
    i = n.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : n.slidesPerView;
  let s = e.clickedIndex,
    a;
  if (n.loop) {
    if (e.animating) return;
    (a = parseInt(T(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
      n.centeredSlides
        ? s < e.loopedSlides - i / 2 ||
          s > e.slides.length - e.loopedSlides + i / 2
          ? (e.loopFix(),
            (s = t
              .children(
                `.${n.slideClass}[data-swiper-slide-index="${a}"]:not(.${n.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            _e(() => {
              e.slideTo(s);
            }))
          : e.slideTo(s)
        : s > e.slides.length - i
          ? (e.loopFix(),
            (s = t
              .children(
                `.${n.slideClass}[data-swiper-slide-index="${a}"]:not(.${n.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            _e(() => {
              e.slideTo(s);
            }))
          : e.slideTo(s);
  } else e.slideTo(s);
}
const rs = {
  slideTo: Ji,
  slideToLoop: es,
  slideNext: ts,
  slidePrev: ns,
  slideReset: is,
  slideToClosest: ss,
  slideToClickedSlide: as,
};
function os() {
  const e = this,
    n = V(),
    { params: t, $wrapperEl: i } = e,
    s = i.children().length > 0 ? T(i.children()[0].parentNode) : i;
  s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let a = s.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const r = t.slidesPerGroup - (a.length % t.slidesPerGroup);
    if (r !== t.slidesPerGroup) {
      for (let d = 0; d < r; d += 1) {
        const u = T(n.createElement('div')).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        s.append(u);
      }
      a = s.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === 'auto' && !t.loopedSlides && (t.loopedSlides = a.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(t.loopedSlides || t.slidesPerView, 10)
    )),
    (e.loopedSlides += t.loopAdditionalSlides),
    e.loopedSlides > a.length &&
      e.params.loopedSlidesLimit &&
      (e.loopedSlides = a.length);
  const o = [],
    l = [];
  a.each((r, d) => {
    T(r).attr('data-swiper-slide-index', d);
  });
  for (let r = 0; r < e.loopedSlides; r += 1) {
    const d = r - Math.floor(r / a.length) * a.length;
    l.push(a.eq(d)[0]), o.unshift(a.eq(a.length - d - 1)[0]);
  }
  for (let r = 0; r < l.length; r += 1)
    s.append(T(l[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let r = o.length - 1; r >= 0; r -= 1)
    s.prepend(T(o[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function ls() {
  const e = this;
  e.emit('beforeLoopFix');
  const {
    activeIndex: n,
    slides: t,
    loopedSlides: i,
    allowSlidePrev: s,
    allowSlideNext: a,
    snapGrid: o,
    rtlTranslate: l,
  } = e;
  let r;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const u = -o[n] - e.getTranslate();
  n < i
    ? ((r = t.length - i * 3 + n),
      (r += i),
      e.slideTo(r, 0, !1, !0) &&
        u !== 0 &&
        e.setTranslate((l ? -e.translate : e.translate) - u))
    : n >= t.length - i &&
      ((r = -t.length + n + i),
      (r += i),
      e.slideTo(r, 0, !1, !0) &&
        u !== 0 &&
        e.setTranslate((l ? -e.translate : e.translate) - u)),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = a),
    e.emit('loopFix');
}
function ds() {
  const e = this,
    { $wrapperEl: n, params: t, slides: i } = e;
  n
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    i.removeAttr('data-swiper-slide-index');
}
const us = { loopCreate: os, loopFix: ls, loopDestroy: ds };
function cs(e) {
  const n = this;
  if (
    n.support.touch ||
    !n.params.simulateTouch ||
    (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode
  )
    return;
  const t = n.params.touchEventsTarget === 'container' ? n.el : n.wrapperEl;
  (t.style.cursor = 'move'), (t.style.cursor = e ? 'grabbing' : 'grab');
}
function fs() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = '');
}
const ps = { setGrabCursor: cs, unsetGrabCursor: fs };
function hs(e, n = this) {
  function t(i) {
    if (!i || i === V() || i === R()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(e);
    return !s && !i.getRootNode ? null : s || t(i.getRootNode().host);
  }
  return t(n);
}
function ms(e) {
  const n = this,
    t = V(),
    i = R(),
    s = n.touchEventsData,
    { params: a, touches: o, enabled: l } = n;
  if (!l || (n.animating && a.preventInteractionOnTransition)) return;
  !n.animating && a.cssMode && a.loop && n.loopFix();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let d = T(r.target);
  if (
    (a.touchEventsTarget === 'wrapper' && !d.closest(n.wrapperEl).length) ||
    ((s.isTouchEvent = r.type === 'touchstart'),
    !s.isTouchEvent && 'which' in r && r.which === 3) ||
    (!s.isTouchEvent && 'button' in r && r.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return;
  const u = !!a.noSwipingClass && a.noSwipingClass !== '',
    c = e.composedPath ? e.composedPath() : e.path;
  u && r.target && r.target.shadowRoot && c && (d = T(c[0]));
  const f = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    m = !!(r.target && r.target.shadowRoot);
  if (a.noSwiping && (m ? hs(f, d[0]) : d.closest(f)[0])) {
    n.allowClick = !0;
    return;
  }
  if (a.swipeHandler && !d.closest(a.swipeHandler)[0]) return;
  (o.currentX = r.type === 'touchstart' ? r.targetTouches[0].pageX : r.pageX),
    (o.currentY = r.type === 'touchstart' ? r.targetTouches[0].pageY : r.pageY);
  const h = o.currentX,
    b = o.currentY,
    _ = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
    g = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
  if (_ && (h <= g || h >= i.innerWidth - g))
    if (_ === 'prevent') e.preventDefault();
    else return;
  if (
    (Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = h),
    (o.startY = b),
    (s.touchStartTime = ne()),
    (n.allowClick = !0),
    n.updateSize(),
    (n.swipeDirection = void 0),
    a.threshold > 0 && (s.allowThresholdMove = !1),
    r.type !== 'touchstart')
  ) {
    let v = !0;
    d.is(s.focusableElements) &&
      ((v = !1), d[0].nodeName === 'SELECT' && (s.isTouched = !1)),
      t.activeElement &&
        T(t.activeElement).is(s.focusableElements) &&
        t.activeElement !== d[0] &&
        t.activeElement.blur();
    const y = v && n.allowTouchMove && a.touchStartPreventDefault;
    (a.touchStartForcePreventDefault || y) &&
      !d[0].isContentEditable &&
      r.preventDefault();
  }
  n.params.freeMode &&
    n.params.freeMode.enabled &&
    n.freeMode &&
    n.animating &&
    !a.cssMode &&
    n.freeMode.onTouchStart(),
    n.emit('touchStart', r);
}
function vs(e) {
  const n = V(),
    t = this,
    i = t.touchEventsData,
    { params: s, touches: a, rtlTranslate: o, enabled: l } = t;
  if (!l) return;
  let r = e;
  if ((r.originalEvent && (r = r.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit('touchMoveOpposite', r);
    return;
  }
  if (i.isTouchEvent && r.type !== 'touchmove') return;
  const d =
      r.type === 'touchmove' &&
      r.targetTouches &&
      (r.targetTouches[0] || r.changedTouches[0]),
    u = r.type === 'touchmove' ? d.pageX : r.pageX,
    c = r.type === 'touchmove' ? d.pageY : r.pageY;
  if (r.preventedByNestedSwiper) {
    (a.startX = u), (a.startY = c);
    return;
  }
  if (!t.allowTouchMove) {
    T(r.target).is(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(a, { startX: u, startY: c, currentX: u, currentY: c }),
        (i.touchStartTime = ne()));
    return;
  }
  if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
    if (t.isVertical()) {
      if (
        (c < a.startY && t.translate <= t.maxTranslate()) ||
        (c > a.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (u < a.startX && t.translate <= t.maxTranslate()) ||
      (u > a.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    i.isTouchEvent &&
    n.activeElement &&
    r.target === n.activeElement &&
    T(r.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit('touchMove', r),
    r.targetTouches && r.targetTouches.length > 1)
  )
    return;
  (a.currentX = u), (a.currentY = c);
  const f = a.currentX - a.startX,
    m = a.currentY - a.startY;
  if (t.params.threshold && Math.sqrt(Te(f, 2) + Te(m, 2)) < t.params.threshold)
    return;
  if (typeof i.isScrolling == 'undefined') {
    let g;
    (t.isHorizontal() && a.currentY === a.startY) ||
    (t.isVertical() && a.currentX === a.startX)
      ? (i.isScrolling = !1)
      : f * f + m * m >= 25 &&
        ((g = (Math.atan2(Math.abs(m), Math.abs(f)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? g > s.touchAngle
          : 90 - g > s.touchAngle));
  }
  if (
    (i.isScrolling && t.emit('touchMoveOpposite', r),
    typeof i.startMoving == 'undefined' &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (i.startMoving = !0),
    i.isScrolling)
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (t.allowClick = !1),
    !s.cssMode && r.cancelable && r.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && r.stopPropagation(),
    i.isMoved ||
      (s.loop && !s.cssMode && t.loopFix(),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
      (i.allowMomentumBounce = !1),
      s.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit('sliderFirstMove', r)),
    t.emit('sliderMove', r),
    (i.isMoved = !0);
  let h = t.isHorizontal() ? f : m;
  (a.diff = h),
    (h *= s.touchRatio),
    o && (h = -h),
    (t.swipeDirection = h > 0 ? 'prev' : 'next'),
    (i.currentTranslate = h + i.startTranslate);
  let b = !0,
    _ = s.resistanceRatio;
  if (
    (s.touchReleaseOnEdges && (_ = 0),
    h > 0 && i.currentTranslate > t.minTranslate()
      ? ((b = !1),
        s.resistance &&
          (i.currentTranslate =
            t.minTranslate() -
            1 +
            Te(-t.minTranslate() + i.startTranslate + h, _)))
      : h < 0 &&
        i.currentTranslate < t.maxTranslate() &&
        ((b = !1),
        s.resistance &&
          (i.currentTranslate =
            t.maxTranslate() +
            1 -
            Te(t.maxTranslate() - i.startTranslate - h, _))),
    b && (r.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === 'next' &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === 'prev' &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(h) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (i.currentTranslate = i.startTranslate),
          (a.diff = t.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && t.freeMode) ||
      s.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
function gs(e) {
  const n = this,
    t = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: a, slidesGrid: o, enabled: l } = n;
  if (!l) return;
  let r = e;
  if (
    (r.originalEvent && (r = r.originalEvent),
    t.allowTouchCallbacks && n.emit('touchEnd', r),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && i.grabCursor && n.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  i.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
    n.setGrabCursor(!1);
  const d = ne(),
    u = d - t.touchStartTime;
  if (n.allowClick) {
    const v = r.path || (r.composedPath && r.composedPath());
    n.updateClickedSlide((v && v[0]) || r.target),
      n.emit('tap click', r),
      u < 300 &&
        d - t.lastClickTime < 300 &&
        n.emit('doubleTap doubleClick', r);
  }
  if (
    ((t.lastClickTime = ne()),
    _e(() => {
      n.destroyed || (n.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !n.swipeDirection ||
      s.diff === 0 ||
      t.currentTranslate === t.startTranslate)
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let c;
  if (
    (i.followFinger
      ? (c = a ? n.translate : -n.translate)
      : (c = -t.currentTranslate),
    i.cssMode)
  )
    return;
  if (n.params.freeMode && i.freeMode.enabled) {
    n.freeMode.onTouchEnd({ currentPos: c });
    return;
  }
  let f = 0,
    m = n.slidesSizesGrid[0];
  for (
    let v = 0;
    v < o.length;
    v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const y = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[v + y] != 'undefined'
      ? c >= o[v] && c < o[v + y] && ((f = v), (m = o[v + y] - o[v]))
      : c >= o[v] && ((f = v), (m = o[o.length - 1] - o[o.length - 2]));
  }
  let h = null,
    b = null;
  i.rewind &&
    (n.isBeginning
      ? (b =
          n.params.virtual && n.params.virtual.enabled && n.virtual
            ? n.virtual.slides.length - 1
            : n.slides.length - 1)
      : n.isEnd && (h = 0));
  const _ = (c - o[f]) / m,
    g = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (u > i.longSwipesMs) {
    if (!i.longSwipes) {
      n.slideTo(n.activeIndex);
      return;
    }
    n.swipeDirection === 'next' &&
      (_ >= i.longSwipesRatio
        ? n.slideTo(i.rewind && n.isEnd ? h : f + g)
        : n.slideTo(f)),
      n.swipeDirection === 'prev' &&
        (_ > 1 - i.longSwipesRatio
          ? n.slideTo(f + g)
          : b !== null && _ < 0 && Math.abs(_) > i.longSwipesRatio
            ? n.slideTo(b)
            : n.slideTo(f));
  } else {
    if (!i.shortSwipes) {
      n.slideTo(n.activeIndex);
      return;
    }
    n.navigation &&
    (r.target === n.navigation.nextEl || r.target === n.navigation.prevEl)
      ? r.target === n.navigation.nextEl
        ? n.slideTo(f + g)
        : n.slideTo(f)
      : (n.swipeDirection === 'next' && n.slideTo(h !== null ? h : f + g),
        n.swipeDirection === 'prev' && n.slideTo(b !== null ? b : f));
  }
}
function ht() {
  const e = this,
    { params: n, el: t } = e;
  if (t && t.offsetWidth === 0) return;
  n.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: s, snapGrid: a } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (n.slidesPerView === 'auto' || n.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = i),
    e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
}
function _s(e) {
  const n = this;
  n.enabled &&
    (n.allowClick ||
      (n.params.preventClicks && e.preventDefault(),
      n.params.preventClicksPropagation &&
        n.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function ys() {
  const e = this,
    { wrapperEl: n, rtlTranslate: t, enabled: i } = e;
  if (!i) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -n.scrollLeft)
      : (e.translate = -n.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let s;
  const a = e.maxTranslate() - e.minTranslate();
  a === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / a),
    s !== e.progress && e.updateProgress(t ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1);
}
let mt = !1;
function bs() {}
const jt = (e, n) => {
  const t = V(),
    {
      params: i,
      touchEvents: s,
      el: a,
      wrapperEl: o,
      device: l,
      support: r,
    } = e,
    d = !!i.nested,
    u = n === 'on' ? 'addEventListener' : 'removeEventListener',
    c = n;
  if (!r.touch)
    a[u](s.start, e.onTouchStart, !1),
      t[u](s.move, e.onTouchMove, d),
      t[u](s.end, e.onTouchEnd, !1);
  else {
    const f =
      s.start === 'touchstart' && r.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    a[u](s.start, e.onTouchStart, f),
      a[u](
        s.move,
        e.onTouchMove,
        r.passiveListener ? { passive: !1, capture: d } : d
      ),
      a[u](s.end, e.onTouchEnd, f),
      s.cancel && a[u](s.cancel, e.onTouchEnd, f);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    a[u]('click', e.onClick, !0),
    i.cssMode && o[u]('scroll', e.onScroll),
    i.updateOnWindowResize
      ? e[c](
          l.ios || l.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          ht,
          !0
        )
      : e[c]('observerUpdate', ht, !0);
};
function Ss() {
  const e = this,
    n = V(),
    { params: t, support: i } = e;
  (e.onTouchStart = ms.bind(e)),
    (e.onTouchMove = vs.bind(e)),
    (e.onTouchEnd = gs.bind(e)),
    t.cssMode && (e.onScroll = ys.bind(e)),
    (e.onClick = _s.bind(e)),
    i.touch && !mt && (n.addEventListener('touchstart', bs), (mt = !0)),
    jt(e, 'on');
}
function ws() {
  jt(this, 'off');
}
const Ts = { attachEvents: Ss, detachEvents: ws },
  vt = (e, n) => e.grid && n.grid && n.grid.rows > 1;
function Es() {
  const e = this,
    {
      activeIndex: n,
      initialized: t,
      loopedSlides: i = 0,
      params: s,
      $el: a,
    } = e,
    o = s.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const d = (l in o ? o[l] : void 0) || e.originalParams,
    u = vt(e, s),
    c = vt(e, d),
    f = s.enabled;
  u && !c
    ? (a.removeClass(
        `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (a.addClass(`${s.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === 'column') ||
        (!d.grid.fill && s.grid.fill === 'column')) &&
        a.addClass(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach(_ => {
      const g = s[_] && s[_].enabled,
        v = d[_] && d[_].enabled;
      g && !v && e[_].disable(), !g && v && e[_].enable();
    });
  const m = d.direction && d.direction !== s.direction,
    h = s.loop && (d.slidesPerView !== s.slidesPerView || m);
  m && t && e.changeDirection(), U(e.params, d);
  const b = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !b ? e.disable() : !f && b && e.enable(),
    (e.currentBreakpoint = l),
    e.emit('_beforeBreakpoint', d),
    h &&
      t &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(n - i + e.loopedSlides, 0, !1)),
    e.emit('breakpoint', d);
}
function Cs(e, n = 'window', t) {
  if (!e || (n === 'container' && !t)) return;
  let i = !1;
  const s = R(),
    a = n === 'window' ? s.innerHeight : t.clientHeight,
    o = Object.keys(e).map(l => {
      if (typeof l == 'string' && l.indexOf('@') === 0) {
        const r = parseFloat(l.substr(1));
        return { value: a * r, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, r) => parseInt(l.value, 10) - parseInt(r.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: r, value: d } = o[l];
    n === 'window'
      ? s.matchMedia(`(min-width: ${d}px)`).matches && (i = r)
      : d <= t.clientWidth && (i = r);
  }
  return i || 'max';
}
const xs = { setBreakpoint: Es, getBreakpoint: Cs };
function $s(e, n) {
  const t = [];
  return (
    e.forEach(i => {
      typeof i == 'object'
        ? Object.keys(i).forEach(s => {
            i[s] && t.push(n + s);
          })
        : typeof i == 'string' && t.push(n + i);
    }),
    t
  );
}
function Ms() {
  const e = this,
    { classNames: n, params: t, rtl: i, $el: s, device: a, support: o } = e,
    l = $s(
      [
        'initialized',
        t.direction,
        { 'pointer-events': !o.touch },
        { 'free-mode': e.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          'grid-column': t.grid && t.grid.rows > 1 && t.grid.fill === 'column',
        },
        { android: a.android },
        { ios: a.ios },
        { 'css-mode': t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { 'watch-progress': t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  n.push(...l), s.addClass([...n].join(' ')), e.emitContainerClasses();
}
function Os() {
  const e = this,
    { $el: n, classNames: t } = e;
  n.removeClass(t.join(' ')), e.emitContainerClasses();
}
const Ps = { addClasses: Ms, removeClasses: Os };
function Ls(e, n, t, i, s, a) {
  const o = R();
  let l;
  function r() {
    a && a();
  }
  !T(e).parent('picture')[0] && (!e.complete || !s) && n
    ? ((l = new o.Image()),
      (l.onload = r),
      (l.onerror = r),
      i && (l.sizes = i),
      t && (l.srcset = t),
      n && (l.src = n))
    : r();
}
function Is() {
  const e = this;
  e.imagesToLoad = e.$el.find('img');
  function n() {
    typeof e == 'undefined' ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
  }
  for (let t = 0; t < e.imagesToLoad.length; t += 1) {
    const i = e.imagesToLoad[t];
    e.loadImage(
      i,
      i.currentSrc || i.getAttribute('src'),
      i.srcset || i.getAttribute('srcset'),
      i.sizes || i.getAttribute('sizes'),
      !0,
      n
    );
  }
}
const ks = { loadImage: Ls, preloadImages: Is };
function As() {
  const e = this,
    { isLocked: n, params: t } = e,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const s = e.slides.length - 1,
      a = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
    e.isLocked = e.size > a;
  } else e.isLocked = e.snapGrid.length === 1;
  t.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    t.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    n && n !== e.isLocked && (e.isEnd = !1),
    n !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
const Ds = { checkOverflow: As },
  gt = {
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
    loopedSlidesLimit: !0,
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
function Ns(e, n) {
  return function (i = {}) {
    const s = Object.keys(i)[0],
      a = i[s];
    if (typeof a != 'object' || a === null) {
      U(n, i);
      return;
    }
    if (
      (['navigation', 'pagination', 'scrollbar'].indexOf(s) >= 0 &&
        e[s] === !0 &&
        (e[s] = { auto: !0 }),
      !(s in e && 'enabled' in a))
    ) {
      U(n, i);
      return;
    }
    e[s] === !0 && (e[s] = { enabled: !0 }),
      typeof e[s] == 'object' && !('enabled' in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      U(n, i);
  };
}
const Ve = {
    eventsEmitter: Ii,
    update: Hi,
    translate: qi,
    transition: Zi,
    slide: rs,
    loop: us,
    grabCursor: ps,
    events: Ts,
    breakpoints: xs,
    checkOverflow: Ds,
    classes: Ps,
    images: ks,
  },
  Ge = {};
let fe = class se {
  constructor(...n) {
    let t, i;
    if (
      (n.length === 1 &&
      n[0].constructor &&
      Object.prototype.toString.call(n[0]).slice(8, -1) === 'Object'
        ? (i = n[0])
        : ([t, i] = n),
      i || (i = {}),
      (i = U({}, i)),
      t && !i.el && (i.el = t),
      i.el && T(i.el).length > 1)
    ) {
      const l = [];
      return (
        T(i.el).each(r => {
          const d = U({}, i, { el: r });
          l.push(new se(d));
        }),
        l
      );
    }
    const s = this;
    (s.__swiper__ = !0),
      (s.support = Nt()),
      (s.device = $i({ userAgent: i.userAgent })),
      (s.browser = Oi()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
    const a = {};
    s.modules.forEach(l => {
      l({
        swiper: s,
        extendParams: Ns(i, a),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s),
      });
    });
    const o = U({}, gt, a);
    return (
      (s.params = U({}, o, Ge, i)),
      (s.originalParams = U({}, s.params)),
      (s.passedParams = U({}, i)),
      s.params &&
        s.params.on &&
        Object.keys(s.params.on).forEach(l => {
          s.on(l, s.params.on[l]);
        }),
      s.params && s.params.onAny && s.onAny(s.params.onAny),
      (s.$ = T),
      Object.assign(s, {
        enabled: s.params.enabled,
        el: t,
        classNames: [],
        slides: T(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return s.params.direction === 'horizontal';
        },
        isVertical() {
          return s.params.direction === 'vertical';
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
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        touchEvents: (function () {
          const r = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
            d = ['pointerdown', 'pointermove', 'pointerup'];
          return (
            (s.touchEventsTouch = {
              start: r[0],
              move: r[1],
              end: r[2],
              cancel: r[3],
            }),
            (s.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
            s.support.touch || !s.params.simulateTouch
              ? s.touchEventsTouch
              : s.touchEventsDesktop
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
          focusableElements: s.params.focusableElements,
          lastClickTime: ne(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: s.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      s.emit('_swiper'),
      s.params.init && s.init(),
      s
    );
  }
  enable() {
    const n = this;
    n.enabled ||
      ((n.enabled = !0),
      n.params.grabCursor && n.setGrabCursor(),
      n.emit('enable'));
  }
  disable() {
    const n = this;
    n.enabled &&
      ((n.enabled = !1),
      n.params.grabCursor && n.unsetGrabCursor(),
      n.emit('disable'));
  }
  setProgress(n, t) {
    const i = this;
    n = Math.min(Math.max(n, 0), 1);
    const s = i.minTranslate(),
      o = (i.maxTranslate() - s) * n + s;
    i.translateTo(o, typeof t == 'undefined' ? 0 : t),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const n = this;
    if (!n.params._emitClasses || !n.el) return;
    const t = n.el.className
      .split(' ')
      .filter(
        i =>
          i.indexOf('swiper') === 0 ||
          i.indexOf(n.params.containerModifierClass) === 0
      );
    n.emit('_containerClasses', t.join(' '));
  }
  getSlideClasses(n) {
    const t = this;
    return t.destroyed
      ? ''
      : n.className
          .split(' ')
          .filter(
            i =>
              i.indexOf('swiper-slide') === 0 ||
              i.indexOf(t.params.slideClass) === 0
          )
          .join(' ');
  }
  emitSlidesClasses() {
    const n = this;
    if (!n.params._emitClasses || !n.el) return;
    const t = [];
    n.slides.each(i => {
      const s = n.getSlideClasses(i);
      t.push({ slideEl: i, classNames: s }), n.emit('_slideClass', i, s);
    }),
      n.emit('_slideClasses', t);
  }
  slidesPerViewDynamic(n = 'current', t = !1) {
    const i = this,
      {
        params: s,
        slides: a,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: r,
        activeIndex: d,
      } = i;
    let u = 1;
    if (s.centeredSlides) {
      let c = a[d].swiperSlideSize,
        f;
      for (let m = d + 1; m < a.length; m += 1)
        a[m] &&
          !f &&
          ((c += a[m].swiperSlideSize), (u += 1), c > r && (f = !0));
      for (let m = d - 1; m >= 0; m -= 1)
        a[m] &&
          !f &&
          ((c += a[m].swiperSlideSize), (u += 1), c > r && (f = !0));
    } else if (n === 'current')
      for (let c = d + 1; c < a.length; c += 1)
        (t ? o[c] + l[c] - o[d] < r : o[c] - o[d] < r) && (u += 1);
    else for (let c = d - 1; c >= 0; c -= 1) o[d] - o[c] < r && (u += 1);
    return u;
  }
  update() {
    const n = this;
    if (!n || n.destroyed) return;
    const { snapGrid: t, params: i } = n;
    i.breakpoints && n.setBreakpoint(),
      n.updateSize(),
      n.updateSlides(),
      n.updateProgress(),
      n.updateSlidesClasses();
    function s() {
      const o = n.rtlTranslate ? n.translate * -1 : n.translate,
        l = Math.min(Math.max(o, n.maxTranslate()), n.minTranslate());
      n.setTranslate(l), n.updateActiveIndex(), n.updateSlidesClasses();
    }
    let a;
    n.params.freeMode && n.params.freeMode.enabled
      ? (s(), n.params.autoHeight && n.updateAutoHeight())
      : ((n.params.slidesPerView === 'auto' || n.params.slidesPerView > 1) &&
        n.isEnd &&
        !n.params.centeredSlides
          ? (a = n.slideTo(n.slides.length - 1, 0, !1, !0))
          : (a = n.slideTo(n.activeIndex, 0, !1, !0)),
        a || s()),
      i.watchOverflow && t !== n.snapGrid && n.checkOverflow(),
      n.emit('update');
  }
  changeDirection(n, t = !0) {
    const i = this,
      s = i.params.direction;
    return (
      n || (n = s === 'horizontal' ? 'vertical' : 'horizontal'),
      n === s ||
        (n !== 'horizontal' && n !== 'vertical') ||
        (i.$el
          .removeClass(`${i.params.containerModifierClass}${s}`)
          .addClass(`${i.params.containerModifierClass}${n}`),
        i.emitContainerClasses(),
        (i.params.direction = n),
        i.slides.each(a => {
          n === 'vertical' ? (a.style.width = '') : (a.style.height = '');
        }),
        i.emit('changeDirection'),
        t && i.update()),
      i
    );
  }
  changeLanguageDirection(n) {
    const t = this;
    (t.rtl && n === 'rtl') ||
      (!t.rtl && n === 'ltr') ||
      ((t.rtl = n === 'rtl'),
      (t.rtlTranslate = t.params.direction === 'horizontal' && t.rtl),
      t.rtl
        ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = 'rtl'))
        : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = 'ltr')),
      t.update());
  }
  mount(n) {
    const t = this;
    if (t.mounted) return !0;
    const i = T(n || t.params.el);
    if (((n = i[0]), !n)) return !1;
    n.swiper = t;
    const s = () =>
      `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let o = (() => {
      if (n && n.shadowRoot && n.shadowRoot.querySelector) {
        const l = T(n.shadowRoot.querySelector(s()));
        return (l.children = r => i.children(r)), l;
      }
      return i.children ? i.children(s()) : T(i).children(s());
    })();
    if (o.length === 0 && t.params.createElements) {
      const r = V().createElement('div');
      (o = T(r)),
        (r.className = t.params.wrapperClass),
        i.append(r),
        i.children(`.${t.params.slideClass}`).each(d => {
          o.append(d);
        });
    }
    return (
      Object.assign(t, {
        $el: i,
        el: n,
        $wrapperEl: o,
        wrapperEl: o[0],
        mounted: !0,
        rtl: n.dir.toLowerCase() === 'rtl' || i.css('direction') === 'rtl',
        rtlTranslate:
          t.params.direction === 'horizontal' &&
          (n.dir.toLowerCase() === 'rtl' || i.css('direction') === 'rtl'),
        wrongRTL: o.css('display') === '-webkit-box',
      }),
      !0
    );
  }
  init(n) {
    const t = this;
    return (
      t.initialized ||
        t.mount(n) === !1 ||
        (t.emit('beforeInit'),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.params.loop && t.loopCreate(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.preloadImages && t.preloadImages(),
        t.params.loop
          ? t.slideTo(
              t.params.initialSlide + t.loopedSlides,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.attachEvents(),
        (t.initialized = !0),
        t.emit('init'),
        t.emit('afterInit')),
      t
    );
  }
  destroy(n = !0, t = !0) {
    const i = this,
      { params: s, $el: a, $wrapperEl: o, slides: l } = i;
    return (
      typeof i.params == 'undefined' ||
        i.destroyed ||
        (i.emit('beforeDestroy'),
        (i.initialized = !1),
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        t &&
          (i.removeClasses(),
          a.removeAttr('style'),
          o.removeAttr('style'),
          l &&
            l.length &&
            l
              .removeClass(
                [
                  s.slideVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass,
                ].join(' ')
              )
              .removeAttr('style')
              .removeAttr('data-swiper-slide-index')),
        i.emit('destroy'),
        Object.keys(i.eventsListeners).forEach(r => {
          i.off(r);
        }),
        n !== !1 && ((i.$el[0].swiper = null), Si(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(n) {
    U(Ge, n);
  }
  static get extendedDefaults() {
    return Ge;
  }
  static get defaults() {
    return gt;
  }
  static installModule(n) {
    se.prototype.__modules__ || (se.prototype.__modules__ = []);
    const t = se.prototype.__modules__;
    typeof n == 'function' && t.indexOf(n) < 0 && t.push(n);
  }
  static use(n) {
    return Array.isArray(n)
      ? (n.forEach(t => se.installModule(t)), se)
      : (se.installModule(n), se);
  }
};
Object.keys(Ve).forEach(e => {
  Object.keys(Ve[e]).forEach(n => {
    fe.prototype[n] = Ve[e][n];
  });
});
fe.use([Pi, Li]);
function Bs({ swiper: e, extendParams: n, on: t, emit: i }) {
  const s = R();
  n({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let a,
    o = ne(),
    l;
  const r = [];
  function d(v) {
    let N = 0,
      O = 0,
      x = 0,
      A = 0;
    return (
      'detail' in v && (O = v.detail),
      'wheelDelta' in v && (O = -v.wheelDelta / 120),
      'wheelDeltaY' in v && (O = -v.wheelDeltaY / 120),
      'wheelDeltaX' in v && (N = -v.wheelDeltaX / 120),
      'axis' in v && v.axis === v.HORIZONTAL_AXIS && ((N = O), (O = 0)),
      (x = N * 10),
      (A = O * 10),
      'deltaY' in v && (A = v.deltaY),
      'deltaX' in v && (x = v.deltaX),
      v.shiftKey && !x && ((x = A), (A = 0)),
      (x || A) &&
        v.deltaMode &&
        (v.deltaMode === 1 ? ((x *= 40), (A *= 40)) : ((x *= 800), (A *= 800))),
      x && !N && (N = x < 1 ? -1 : 1),
      A && !O && (O = A < 1 ? -1 : 1),
      { spinX: N, spinY: O, pixelX: x, pixelY: A }
    );
  }
  function u() {
    e.enabled && (e.mouseEntered = !0);
  }
  function c() {
    e.enabled && (e.mouseEntered = !1);
  }
  function f(v) {
    return (e.params.mousewheel.thresholdDelta &&
      v.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        ne() - o < e.params.mousewheel.thresholdTime)
      ? !1
      : v.delta >= 6 && ne() - o < 60
        ? !0
        : (v.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), i('scroll', v.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), i('scroll', v.raw)),
          (o = new s.Date().getTime()),
          !1);
  }
  function m(v) {
    const y = e.params.mousewheel;
    if (v.direction < 0) {
      if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
    return !1;
  }
  function h(v) {
    let y = v,
      P = !0;
    if (!e.enabled) return;
    const M = e.params.mousewheel;
    e.params.cssMode && y.preventDefault();
    let N = e.$el;
    if (
      (e.params.mousewheel.eventsTarget !== 'container' &&
        (N = T(e.params.mousewheel.eventsTarget)),
      !e.mouseEntered && !N[0].contains(y.target) && !M.releaseOnEdges)
    )
      return !0;
    y.originalEvent && (y = y.originalEvent);
    let O = 0;
    const x = e.rtlTranslate ? -1 : 1,
      A = d(y);
    if (M.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(A.pixelX) > Math.abs(A.pixelY)) O = -A.pixelX * x;
        else return !0;
      else if (Math.abs(A.pixelY) > Math.abs(A.pixelX)) O = -A.pixelY;
      else return !0;
    else
      O = Math.abs(A.pixelX) > Math.abs(A.pixelY) ? -A.pixelX * x : -A.pixelY;
    if (O === 0) return !0;
    M.invert && (O = -O);
    let $ = e.getTranslate() + O * M.sensitivity;
    if (
      ($ >= e.minTranslate() && ($ = e.minTranslate()),
      $ <= e.maxTranslate() && ($ = e.maxTranslate()),
      (P = e.params.loop
        ? !0
        : !($ === e.minTranslate() || $ === e.maxTranslate())),
      P && e.params.nested && y.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const E = {
        time: ne(),
        delta: Math.abs(O),
        direction: Math.sign(O),
        raw: v,
      };
      r.length >= 2 && r.shift();
      const L = r.length ? r[r.length - 1] : void 0;
      if (
        (r.push(E),
        L
          ? (E.direction !== L.direction ||
              E.delta > L.delta ||
              E.time > L.time + 150) &&
            f(E)
          : f(E),
        m(E))
      )
        return !0;
    } else {
      const E = { time: ne(), delta: Math.abs(O), direction: Math.sign(O) },
        L =
          l &&
          E.time < l.time + 500 &&
          E.delta <= l.delta &&
          E.direction === l.direction;
      if (!L) {
        (l = void 0), e.params.loop && e.loopFix();
        let G = e.getTranslate() + O * M.sensitivity;
        const be = e.isBeginning,
          $e = e.isEnd;
        if (
          (G >= e.minTranslate() && (G = e.minTranslate()),
          G <= e.maxTranslate() && (G = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(G),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!be && e.isBeginning) || (!$e && e.isEnd)) &&
            e.updateSlidesClasses(),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(a), (a = void 0), r.length >= 15 && r.shift();
          const Se = r.length ? r[r.length - 1] : void 0,
            Me = r[0];
          if (
            (r.push(E),
            Se && (E.delta > Se.delta || E.direction !== Se.direction))
          )
            r.splice(0);
          else if (
            r.length >= 15 &&
            E.time - Me.time < 500 &&
            Me.delta - E.delta >= 1 &&
            E.delta <= 6
          ) {
            const we = O > 0 ? 0.8 : 0.2;
            (l = E),
              r.splice(0),
              (a = _e(() => {
                e.slideToClosest(e.params.speed, !0, void 0, we);
              }, 0));
          }
          a ||
            (a = _e(() => {
              (l = E),
                r.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (L || i('scroll', y),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          G === e.minTranslate() || G === e.maxTranslate())
        )
          return !0;
      }
    }
    return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
  }
  function b(v) {
    let y = e.$el;
    e.params.mousewheel.eventsTarget !== 'container' &&
      (y = T(e.params.mousewheel.eventsTarget)),
      y[v]('mouseenter', u),
      y[v]('mouseleave', c),
      y[v]('wheel', h);
  }
  function _() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener('wheel', h), !0)
      : e.mousewheel.enabled
        ? !1
        : (b('on'), (e.mousewheel.enabled = !0), !0);
  }
  function g() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, h), !0)
      : e.mousewheel.enabled
        ? (b('off'), (e.mousewheel.enabled = !1), !0)
        : !1;
  }
  t('init', () => {
    !e.params.mousewheel.enabled && e.params.cssMode && g(),
      e.params.mousewheel.enabled && _();
  }),
    t('destroy', () => {
      e.params.cssMode && _(), e.mousewheel.enabled && g();
    }),
    Object.assign(e.mousewheel, { enable: _, disable: g });
}
function js({ swiper: e, extendParams: n, on: t, emit: i }) {
  let s;
  (e.autoplay = { running: !1, paused: !1 }),
    n({
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
  function a() {
    if (!e.size) {
      (e.autoplay.running = !1), (e.autoplay.paused = !1);
      return;
    }
    const b = e.slides.eq(e.activeIndex);
    let _ = e.params.autoplay.delay;
    b.attr('data-swiper-autoplay') &&
      (_ = b.attr('data-swiper-autoplay') || e.params.autoplay.delay),
      clearTimeout(s),
      (s = _e(() => {
        let g;
        e.params.autoplay.reverseDirection
          ? e.params.loop
            ? (e.loopFix(),
              (g = e.slidePrev(e.params.speed, !0, !0)),
              i('autoplay'))
            : e.isBeginning
              ? e.params.autoplay.stopOnLastSlide
                ? l()
                : ((g = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                  i('autoplay'))
              : ((g = e.slidePrev(e.params.speed, !0, !0)), i('autoplay'))
          : e.params.loop
            ? (e.loopFix(),
              (g = e.slideNext(e.params.speed, !0, !0)),
              i('autoplay'))
            : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? l()
                : ((g = e.slideTo(0, e.params.speed, !0, !0)), i('autoplay'))
              : ((g = e.slideNext(e.params.speed, !0, !0)), i('autoplay')),
          ((e.params.cssMode && e.autoplay.running) || g === !1) && a();
      }, _));
  }
  function o() {
    return typeof s != 'undefined' || e.autoplay.running
      ? !1
      : ((e.autoplay.running = !0), i('autoplayStart'), a(), !0);
  }
  function l() {
    return !e.autoplay.running || typeof s == 'undefined'
      ? !1
      : (s && (clearTimeout(s), (s = void 0)),
        (e.autoplay.running = !1),
        i('autoplayStop'),
        !0);
  }
  function r(b) {
    e.autoplay.running &&
      (e.autoplay.paused ||
        (s && clearTimeout(s),
        (e.autoplay.paused = !0),
        b === 0 || !e.params.autoplay.waitForTransition
          ? ((e.autoplay.paused = !1), a())
          : ['transitionend', 'webkitTransitionEnd'].forEach(_ => {
              e.$wrapperEl[0].addEventListener(_, u);
            })));
  }
  function d() {
    const b = V();
    b.visibilityState === 'hidden' && e.autoplay.running && r(),
      b.visibilityState === 'visible' &&
        e.autoplay.paused &&
        (a(), (e.autoplay.paused = !1));
  }
  function u(b) {
    !e ||
      e.destroyed ||
      !e.$wrapperEl ||
      (b.target === e.$wrapperEl[0] &&
        (['transitionend', 'webkitTransitionEnd'].forEach(_ => {
          e.$wrapperEl[0].removeEventListener(_, u);
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? a() : l()));
  }
  function c() {
    e.params.autoplay.disableOnInteraction ? l() : (i('autoplayPause'), r()),
      ['transitionend', 'webkitTransitionEnd'].forEach(b => {
        e.$wrapperEl[0].removeEventListener(b, u);
      });
  }
  function f() {
    e.params.autoplay.disableOnInteraction ||
      ((e.autoplay.paused = !1), i('autoplayResume'), a());
  }
  function m() {
    e.params.autoplay.pauseOnMouseEnter &&
      (e.$el.on('mouseenter', c), e.$el.on('mouseleave', f));
  }
  function h() {
    e.$el.off('mouseenter', c), e.$el.off('mouseleave', f);
  }
  t('init', () => {
    e.params.autoplay.enabled &&
      (o(), V().addEventListener('visibilitychange', d), m());
  }),
    t('beforeTransitionStart', (b, _, g) => {
      e.autoplay.running &&
        (g || !e.params.autoplay.disableOnInteraction
          ? e.autoplay.pause(_)
          : l());
    }),
    t('sliderFirstMove', () => {
      e.autoplay.running &&
        (e.params.autoplay.disableOnInteraction ? l() : r());
    }),
    t('touchEnd', () => {
      e.params.cssMode &&
        e.autoplay.paused &&
        !e.params.autoplay.disableOnInteraction &&
        a();
    }),
    t('destroy', () => {
      h(),
        e.autoplay.running && l(),
        V().removeEventListener('visibilitychange', d);
    }),
    Object.assign(e.autoplay, { pause: r, run: a, start: o, stop: l });
}
function me(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  );
}
function le(e, n) {
  const t = ['__proto__', 'constructor', 'prototype'];
  Object.keys(n)
    .filter(i => t.indexOf(i) < 0)
    .forEach(i => {
      typeof e[i] == 'undefined'
        ? (e[i] = n[i])
        : me(n[i]) && me(e[i]) && Object.keys(n[i]).length > 0
          ? n[i].__swiper__
            ? (e[i] = n[i])
            : le(e[i], n[i])
          : (e[i] = n[i]);
    });
}
function Ft(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl == 'undefined' &&
    typeof e.navigation.prevEl == 'undefined'
  );
}
function Rt(e = {}) {
  return e.pagination && typeof e.pagination.el == 'undefined';
}
function zt(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el == 'undefined';
}
function Ht(e = '') {
  const n = e
      .split(' ')
      .map(i => i.trim())
      .filter(i => !!i),
    t = [];
  return (
    n.forEach(i => {
      t.indexOf(i) < 0 && t.push(i);
    }),
    t.join(' ')
  );
}
const Wt = [
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
  '_loopedSlidesLimit',
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
function _t(e = {}, n = !0) {
  const t = { on: {} },
    i = {},
    s = {};
  le(t, fe.defaults),
    le(t, fe.extendedDefaults),
    (t._emitClasses = !0),
    (t.init = !1);
  const a = {},
    o = Wt.map(r => r.replace(/_/, '')),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach(r => {
      typeof e[r] != 'undefined' &&
        (o.indexOf(r) >= 0
          ? me(e[r])
            ? ((t[r] = {}), (s[r] = {}), le(t[r], e[r]), le(s[r], e[r]))
            : ((t[r] = e[r]), (s[r] = e[r]))
          : r.search(/on[A-Z]/) === 0 && typeof e[r] == 'function'
            ? n
              ? (i[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
              : (t.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
            : (a[r] = e[r]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach(r => {
      t[r] === !0 && (t[r] = {}), t[r] === !1 && delete t[r];
    }),
    { params: t, passedParams: s, rest: a, events: i }
  );
}
function Fs(
  { el: e, nextEl: n, prevEl: t, paginationEl: i, scrollbarEl: s, swiper: a },
  o
) {
  Ft(o) &&
    n &&
    t &&
    ((a.params.navigation.nextEl = n),
    (a.originalParams.navigation.nextEl = n),
    (a.params.navigation.prevEl = t),
    (a.originalParams.navigation.prevEl = t)),
    Rt(o) &&
      i &&
      ((a.params.pagination.el = i), (a.originalParams.pagination.el = i)),
    zt(o) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(e);
}
const Vt = (e, n) => {
  let t = n.slidesPerView;
  if (n.breakpoints) {
    const s = fe.prototype.getBreakpoint(n.breakpoints),
      a = s in n.breakpoints ? n.breakpoints[s] : void 0;
    a && a.slidesPerView && (t = a.slidesPerView);
  }
  let i = Math.ceil(parseFloat(n.loopedSlides || t, 10));
  return (
    (i += n.loopAdditionalSlides),
    i > e.length && n.loopedSlidesLimit && (i = e.length),
    i
  );
};
function Rs(e, n, t) {
  const i = n.map(
    (r, d) => (
      r.props || (r.props = {}),
      (r.props.swiperRef = e),
      (r.props['data-swiper-slide-index'] = d),
      r
    )
  );
  function s(r, d, u) {
    return (
      r.props || (r.props = {}),
      K(
        r.type,
        ut(Re({}, r.props), {
          key: `${r.key}-duplicate-${d}-${u}`,
          class: `${r.props.className || ''} ${t.slideDuplicateClass} ${
            r.props.class || ''
          }`,
        }),
        r.children
      )
    );
  }
  if (t.loopFillGroupWithBlank) {
    const r = t.slidesPerGroup - (i.length % t.slidesPerGroup);
    if (r !== t.slidesPerGroup)
      for (let d = 0; d < r; d += 1) {
        const u = K('div', { class: `${t.slideClass} ${t.slideBlankClass}` });
        i.push(u);
      }
  }
  t.slidesPerView === 'auto' && !t.loopedSlides && (t.loopedSlides = i.length);
  const a = Vt(i, t),
    o = [],
    l = [];
  for (let r = 0; r < a; r += 1) {
    const d = r - Math.floor(r / i.length) * i.length;
    l.push(s(i[d], r, 'append')),
      o.unshift(s(i[i.length - d - 1], r, 'prepend'));
  }
  return e.value && (e.value.loopedSlides = a), [...o, ...i, ...l];
}
function zs(e, n, t, i, s) {
  const a = [];
  if (!n) return a;
  const o = r => {
    a.indexOf(r) < 0 && a.push(r);
  };
  if (t && i) {
    const r = i.map(s),
      d = t.map(s);
    r.join('') !== d.join('') && o('children'),
      i.length !== t.length && o('children');
  }
  return (
    Wt.filter(r => r[0] === '_')
      .map(r => r.replace(/_/, ''))
      .forEach(r => {
        if (r in e && r in n)
          if (me(e[r]) && me(n[r])) {
            const d = Object.keys(e[r]),
              u = Object.keys(n[r]);
            d.length !== u.length
              ? o(r)
              : (d.forEach(c => {
                  e[r][c] !== n[r][c] && o(r);
                }),
                u.forEach(c => {
                  e[r][c] !== n[r][c] && o(r);
                }));
          } else e[r] !== n[r] && o(r);
      }),
    a
  );
}
function Ye(e, n, t) {
  e === void 0 && (e = {});
  const i = [],
    s = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    },
    a = (o, l) => {
      Array.isArray(o) &&
        o.forEach(r => {
          const d = typeof r.type == 'symbol';
          l === 'default' && (l = 'container-end'),
            d && r.children
              ? a(r.children, 'default')
              : r.type &&
                  (r.type.name === 'SwiperSlide' ||
                    r.type.name === 'AsyncComponentWrapper')
                ? i.push(r)
                : s[l] && s[l].push(r);
        });
    };
  return (
    Object.keys(e).forEach(o => {
      if (typeof e[o] != 'function') return;
      const l = e[o]();
      a(l, o);
    }),
    (t.value = n.value),
    (n.value = i),
    { slides: i, slots: s }
  );
}
function Hs({
  swiper: e,
  slides: n,
  passedParams: t,
  changedParams: i,
  nextEl: s,
  prevEl: a,
  scrollbarEl: o,
  paginationEl: l,
}) {
  const r = i.filter(M => M !== 'children' && M !== 'direction'),
    {
      params: d,
      pagination: u,
      navigation: c,
      scrollbar: f,
      virtual: m,
      thumbs: h,
    } = e;
  let b, _, g, v, y;
  i.includes('thumbs') &&
    t.thumbs &&
    t.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (b = !0),
    i.includes('controller') &&
      t.controller &&
      t.controller.control &&
      d.controller &&
      !d.controller.control &&
      (_ = !0),
    i.includes('pagination') &&
      t.pagination &&
      (t.pagination.el || l) &&
      (d.pagination || d.pagination === !1) &&
      u &&
      !u.el &&
      (g = !0),
    i.includes('scrollbar') &&
      t.scrollbar &&
      (t.scrollbar.el || o) &&
      (d.scrollbar || d.scrollbar === !1) &&
      f &&
      !f.el &&
      (v = !0),
    i.includes('navigation') &&
      t.navigation &&
      (t.navigation.prevEl || a) &&
      (t.navigation.nextEl || s) &&
      (d.navigation || d.navigation === !1) &&
      c &&
      !c.prevEl &&
      !c.nextEl &&
      (y = !0);
  const P = M => {
    e[M] &&
      (e[M].destroy(),
      M === 'navigation'
        ? ((d[M].prevEl = void 0),
          (d[M].nextEl = void 0),
          (e[M].prevEl = void 0),
          (e[M].nextEl = void 0))
        : ((d[M].el = void 0), (e[M].el = void 0)));
  };
  r.forEach(M => {
    if (me(d[M]) && me(t[M])) le(d[M], t[M]);
    else {
      const N = t[M];
      (N === !0 || N === !1) &&
      (M === 'navigation' || M === 'pagination' || M === 'scrollbar')
        ? N === !1 && P(M)
        : (d[M] = t[M]);
    }
  }),
    r.includes('controller') &&
      !_ &&
      e.controller &&
      e.controller.control &&
      d.controller &&
      d.controller.control &&
      (e.controller.control = d.controller.control),
    i.includes('children') && n && m && d.virtual.enabled
      ? ((m.slides = n), m.update(!0))
      : i.includes('children') &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    b && h.init() && h.update(!0),
    _ && (e.controller.control = d.controller.control),
    g && (l && (d.pagination.el = l), u.init(), u.render(), u.update()),
    v &&
      (o && (d.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()),
    y &&
      (s && (d.navigation.nextEl = s),
      a && (d.navigation.prevEl = a),
      c.init(),
      c.update()),
    i.includes('allowSlideNext') && (e.allowSlideNext = t.allowSlideNext),
    i.includes('allowSlidePrev') && (e.allowSlidePrev = t.allowSlidePrev),
    i.includes('direction') && e.changeDirection(t.direction, !1),
    e.update();
}
function Ws(e, n, t) {
  if (!t) return null;
  const i = e.value.isHorizontal()
    ? { [e.value.rtlTranslate ? 'right' : 'left']: `${t.offset}px` }
    : { top: `${t.offset}px` };
  return n
    .filter((s, a) => a >= t.from && a <= t.to)
    .map(
      s => (
        s.props || (s.props = {}),
        s.props.style || (s.props.style = {}),
        (s.props.swiperRef = e),
        (s.props.style = i),
        K(s.type, Re({}, s.props), s.children)
      )
    );
}
const Vs = e => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.lazy && e.params.lazy.enabled && e.lazy.load(),
      e.parallax &&
        e.params.parallax &&
        e.params.parallax.enabled &&
        e.parallax.setTranslate());
  },
  Gt = {
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
      loopedSlidesLimit: { type: Boolean, default: !0 },
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
      'navigationPrev',
      'navigationNext',
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
      'virtualUpdate',
      'zoomChange',
    ],
    setup(e, n) {
      let { slots: t, emit: i } = n;
      const { tag: s, wrapperTag: a } = e,
        o = I('swiper'),
        l = I(null),
        r = I(!1),
        d = I(!1),
        u = I(null),
        c = I(null),
        f = I(null),
        m = { value: [] },
        h = { value: [] },
        b = I(null),
        _ = I(null),
        g = I(null),
        v = I(null),
        { params: y, passedParams: P } = _t(e, !1);
      Ye(t, m, h), (f.value = P), (h.value = m.value);
      const M = () => {
        Ye(t, m, h), (r.value = !0);
      };
      if (
        ((y.onAny = function (O) {
          for (
            var x = arguments.length, A = new Array(x > 1 ? x - 1 : 0), $ = 1;
            $ < x;
            $++
          )
            A[$ - 1] = arguments[$];
          i(O, ...A);
        }),
        Object.assign(y.on, {
          _beforeBreakpoint: M,
          _containerClasses(O, x) {
            o.value = x;
          },
        }),
        (c.value = new fe(y)),
        (c.value.loopCreate = () => {}),
        (c.value.loopDestroy = () => {}),
        y.loop && (c.value.loopedSlides = Vt(m.value, y)),
        c.value.virtual && c.value.params.virtual.enabled)
      ) {
        c.value.virtual.slides = m.value;
        const O = {
          cache: !1,
          slides: m.value,
          renderExternal: x => {
            l.value = x;
          },
          renderExternalUpdate: !1,
        };
        le(c.value.params.virtual, O), le(c.value.originalParams.virtual, O);
      }
      $t(() => {
        !d.value && c.value && (c.value.emitSlidesClasses(), (d.value = !0));
        const { passedParams: O } = _t(e, !1),
          x = zs(O, f.value, m.value, h.value, A => A.props && A.props.key);
        (f.value = O),
          (x.length || r.value) &&
            c.value &&
            !c.value.destroyed &&
            Hs({
              swiper: c.value,
              slides: m.value,
              passedParams: O,
              changedParams: x,
              nextEl: b.value,
              prevEl: _.value,
              scrollbarEl: v.value,
              paginationEl: g.value,
            }),
          (r.value = !1);
      }),
        Mt('swiper', c),
        Tn(l, () => {
          En(() => {
            Vs(c.value);
          });
        }),
        ve(() => {
          u.value &&
            (Fs(
              {
                el: u.value,
                nextEl: b.value,
                prevEl: _.value,
                paginationEl: g.value,
                scrollbarEl: v.value,
                swiper: c.value,
              },
              y
            ),
            i('swiper', c.value));
        }),
        Ot(() => {
          c.value && !c.value.destroyed && c.value.destroy(!0, !1);
        });
      function N(O) {
        return y.virtual
          ? Ws(c, O, l.value)
          : !y.loop || (c.value && c.value.destroyed)
            ? (O.forEach(x => {
                x.props || (x.props = {}), (x.props.swiperRef = c);
              }),
              O)
            : Rs(c, O, y);
      }
      return () => {
        const { slides: O, slots: x } = Ye(t, m, h);
        return K(s, { ref: u, class: Ht(o.value) }, [
          x['container-start'],
          K(a, { class: 'swiper-wrapper' }, [
            x['wrapper-start'],
            N(O),
            x['wrapper-end'],
          ]),
          Ft(e) && [
            K('div', { ref: _, class: 'swiper-button-prev' }),
            K('div', { ref: b, class: 'swiper-button-next' }),
          ],
          zt(e) && K('div', { ref: v, class: 'swiper-scrollbar' }),
          Rt(e) && K('div', { ref: g, class: 'swiper-pagination' }),
          x['container-end'],
        ]);
      };
    },
  },
  Yt = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, n) {
      let { slots: t } = n,
        i = !1;
      const { swiperRef: s } = e,
        a = I(null),
        o = I('swiper-slide');
      function l(d, u, c) {
        u === a.value && (o.value = c);
      }
      ve(() => {
        !s || !s.value || (s.value.on('_slideClass', l), (i = !0));
      }),
        Cn(() => {
          i || !s || !s.value || (s.value.on('_slideClass', l), (i = !0));
        }),
        $t(() => {
          !a.value ||
            !s ||
            !s.value ||
            (s.value.destroyed &&
              o.value !== 'swiper-slide' &&
              (o.value = 'swiper-slide'));
        }),
        Ot(() => {
          !s || !s.value || s.value.off('_slideClass', l);
        });
      const r = xn(() => ({
        isActive:
          o.value.indexOf('swiper-slide-active') >= 0 ||
          o.value.indexOf('swiper-slide-duplicate-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isDuplicate: o.value.indexOf('swiper-slide-duplicate') >= 0,
        isPrev:
          o.value.indexOf('swiper-slide-prev') >= 0 ||
          o.value.indexOf('swiper-slide-duplicate-prev') >= 0,
        isNext:
          o.value.indexOf('swiper-slide-next') >= 0 ||
          o.value.indexOf('swiper-slide-duplicate-next') >= 0,
      }));
      return (
        Mt('swiperSlide', r),
        () =>
          K(
            e.tag,
            {
              class: Ht(`${o.value}`),
              ref: a,
              'data-swiper-slide-index': e.virtualIndex,
            },
            e.zoom
              ? K(
                  'div',
                  {
                    class: 'swiper-zoom-container',
                    'data-swiper-zoom':
                      typeof e.zoom == 'number' ? e.zoom : void 0,
                  },
                  t.default && t.default(r.value)
                )
              : t.default && t.default(r.value)
          )
      );
    },
  };
var j = {},
  De = {};
Object.defineProperty(De, '__esModule', { value: !0 });
De.default = { opacity: 1, color: [], resize: !0 };
var Ne = {};
Object.defineProperty(Ne, '__esModule', { value: !0 });
var Xt = {
  linear: function (e, n, t, i) {
    return t + (i - t) * e;
  },
  swing: function (e, n, t, i, s) {
    return Xt.easeInOutQuad(e, n, t, i, s);
  },
  easeInOutQuad: function (e, n, t, i, s) {
    return (n /= s / 2) < 1
      ? (i / 2) * n * n + t
      : (-i / 2) * (--n * (n - 2) - 1) + t;
  },
};
Ne.default = Xt;
var Be = {},
  J = {},
  D = {},
  ie = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.EVENT_NAMES_SNOW =
      e.EVENT_NAMES_WAVE_LOADING =
      e.EVENT_NAMES =
      e.regExp =
      e.isRuntimeSupported =
      e.isIE8 =
      e.defaultCanvasHeight =
      e.defaultCanvasWidth =
      e.objectCtorString =
      e.funcToString =
      e.orientationSupport =
      e.doublePi =
      e.piBy180 =
        void 0),
    (e.piBy180 = Math.PI / 180),
    (e.doublePi = Math.PI * 2),
    (e.orientationSupport = !!window.DeviceOrientationEvent),
    (e.funcToString = Function.prototype.toString),
    (e.objectCtorString = e.funcToString.call(Object)),
    (e.defaultCanvasWidth = 485),
    (e.defaultCanvasHeight = 300),
    (e.isIE8 = /msie\s8.0/i.test(navigator.userAgent)),
    (e.isRuntimeSupported = !!Object.defineProperty && !e.isIE8),
    (e.regExp = {
      trimAll: /\s/g,
      http: /^(https?:\/\/|\/\/)/i,
      shapeStar: /^star(:\d+:\d+(\.\d+)?)?$/,
      imageBase64: /^data:image\/(png|jpe?g|gif|svg\+xml);base64,/,
    }),
    (function (n) {
      (n.DESTROY = 'DESTROY'), (n.RESIZE = 'RESIZE');
    })(e.EVENT_NAMES || (e.EVENT_NAMES = {})),
    (function (n) {
      (n.PROGRESS = 'PROGRESS'), (n.FINISHED = 'FINISHED');
    })(e.EVENT_NAMES_WAVE_LOADING || (e.EVENT_NAMES_WAVE_LOADING = {})),
    (function (n) {
      n.FINISHED = 'FINISHED';
    })(e.EVENT_NAMES_SNOW || (e.EVENT_NAMES_SNOW = {}));
})(ie);
Object.defineProperty(D, '__esModule', { value: !0 });
D.isElement =
  D.isNil =
  D.isNull =
  D.isUndefined =
  D.isBoolean =
  D.isNumber =
  D.isString =
  D.isPlainObject =
  D.isArray =
  D.isFunction =
  D.typeChecking =
    void 0;
var yt = ie;
function et(e, n) {
  return Object.prototype.toString.call(e) === n;
}
D.typeChecking = et;
function Gs(e) {
  return et(e, '[object Function]');
}
D.isFunction = Gs;
function Ys(e) {
  return Array.isArray(e);
}
D.isArray = Ys;
function Xs(e) {
  if (!et(e, '[object Object]')) return !1;
  var n = Object.getPrototypeOf(e);
  if (n === null) return !0;
  var t = Object.hasOwnProperty.call(n, 'constructor') && n.constructor;
  return (
    typeof t == 'function' &&
    t instanceof t &&
    yt.funcToString.call(t) === yt.objectCtorString
  );
}
D.isPlainObject = Xs;
function qs(e) {
  return typeof e == 'string';
}
D.isString = qs;
function Us(e) {
  return typeof e == 'number';
}
D.isNumber = Us;
function Ks(e) {
  return typeof e == 'boolean';
}
D.isBoolean = Ks;
function qt(e) {
  return e === void 0;
}
D.isUndefined = qt;
function Ut(e) {
  return e === null;
}
D.isNull = Ut;
function Qs(e) {
  return qt(e) || Ut(e);
}
D.isNil = Qs;
function Zs(e) {
  return !!(e && e.nodeType === 1);
}
D.isElement = Zs;
var de = {},
  Z = {};
Object.defineProperty(Z, '__esModule', { value: !0 });
Z.upperFirst = Z.trimAll = Z.toFixed = Z.pInt = void 0;
var Js = ie;
function ea(e, n) {
  return n === void 0 && (n = 10), parseInt(e, n);
}
Z.pInt = ea;
function ta(e, n) {
  return n === void 0 && (n = 0), parseFloat(Number(e).toFixed(n));
}
Z.toFixed = ta;
function na(e) {
  return e.replace(Js.regExp.trimAll, '');
}
Z.trimAll = na;
function ia(e) {
  return e[0].toUpperCase() + e.substring(1);
}
Z.upperFirst = ia;
Object.defineProperty(de, '__esModule', { value: !0 });
de.observeElementRemoved = de.offset = de.getNumberValueOfStyle = void 0;
var Kt = D,
  sa = Z;
function aa(e, n) {
  var t = window.getComputedStyle(e)[n];
  if (Kt.isString(t)) {
    var i = t.match(/\d+/);
    if (i) return sa.pInt(i[0]);
  }
}
de.getNumberValueOfStyle = aa;
function ra(e) {
  var n = e.getBoundingClientRect();
  return { left: window.pageXOffset + n.left, top: window.pageYOffset + n.top };
}
de.offset = ra;
de.observeElementRemoved = (function () {
  var e = window.MutationObserver || window.WebKitMutationObserver,
    n = function (s, a) {
      if (s === a) return !0;
      if (Kt.isElement(s)) {
        for (var o = s.children, l = o.length; l--; ) if (n(o[l], a)) return !0;
      }
      return !1;
    },
    t = function (s, a) {
      var o = new e(function (l, r) {
        for (var d = l.length; d--; )
          for (var u = l[d].removedNodes, c = u.length; c--; )
            if (n(u[c], s)) return r.disconnect(), a();
      });
      o.observe(document, { childList: !0, subtree: !0 });
    },
    i = function (s, a) {
      var o = function (l) {
        n(l.target, s) &&
          (document.removeEventListener('DOMNodeRemoved', o), a());
      };
      document.addEventListener('DOMNodeRemoved', o);
    };
  return e ? t : i;
})();
var ue = {};
Object.defineProperty(ue, '__esModule', { value: !0 });
ue.calcQuantity = ue.radiansToDegrees = ue.degreesToRadians = void 0;
var Qt = ie;
function oa(e) {
  return e * Qt.piBy180;
}
ue.degreesToRadians = oa;
function la(e) {
  return e / Qt.piBy180;
}
ue.radiansToDegrees = la;
function da(e, n) {
  return e > 0 && e < 1 ? e * n : e;
}
ue.calcQuantity = da;
var ye = {};
Object.defineProperty(ye, '__esModule', { value: !0 });
ye.loadImage = ye.merge = void 0;
var bt = D;
function Zt() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e.length, i = e[0] || {}, s = 0; s < t; s++)
    for (var a in e[s]) {
      var o = e[s][a],
        l = Array.isArray(o);
      if (l || bt.isPlainObject(o)) {
        var r = i[a];
        l
          ? (r = Array.isArray(r) ? r : [])
          : (r = bt.isPlainObject(r) ? r : {}),
          (i[a] = Zt(r, o));
      } else i[a] = o;
    }
  return i;
}
ye.merge = Zt;
function Ee(e, n, t) {
  if (Ee.cachedImages[e]) {
    n(Ee.cachedImages[e]);
    return;
  }
  var i = 0;
  (function s() {
    var a = new Image();
    a.addEventListener('load', function () {
      (Ee.cachedImages[e] = a), n(a);
    }),
      a.addEventListener('error', function (o) {
        i++, t == null || t(o, i), i <= 3 && s();
      }),
      (a.crossOrigin = 'Anonymous'),
      (a.src = e);
  })();
}
ye.loadImage = Ee;
Ee.cachedImages = {};
var ce = {};
Object.defineProperty(ce, '__esModule', { value: !0 });
ce.randomColor = ce.randomSpeed = ce.randomInRange = void 0;
function Jt(e, n) {
  return e === n ? e : Math.random() * (e - n) + n;
}
ce.randomInRange = Jt;
function ua(e, n) {
  return (Jt(e, n) || e) * (Math.random() > 0.5 ? 1 : -1);
}
ce.randomSpeed = ua;
function ca() {
  return '#' + Math.random().toString(16).slice(-6);
}
ce.randomColor = ca;
(function (e) {
  var n =
      (C && C.__createBinding) ||
      (Object.create
        ? function (i, s, a, o) {
            o === void 0 && (o = a),
              Object.defineProperty(i, o, {
                enumerable: !0,
                get: function () {
                  return s[a];
                },
              });
          }
        : function (i, s, a, o) {
            o === void 0 && (o = a), (i[o] = s[a]);
          }),
    t =
      (C && C.__exportStar) ||
      function (i, s) {
        for (var a in i)
          a !== 'default' &&
            !Object.prototype.hasOwnProperty.call(s, a) &&
            n(s, i, a);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    t(D, e),
    t(de, e),
    t(ue, e),
    t(ye, e),
    t(ce, e),
    t(Z, e);
})(J);
Object.defineProperty(Be, '__esModule', { value: !0 });
var fa = J,
  pa = (function () {
    function e() {
      this.listenerMap = {};
    }
    return (
      (e.prototype.on = function (n) {
        for (var t = [], i = 1; i < arguments.length; i++)
          t[i - 1] = arguments[i];
        this.listenerMap[n] || (this.listenerMap[n] = []);
        for (var s = 0, a = t; s < a.length; s++) {
          var o = a[s];
          fa.isFunction(o) && this.listenerMap[n].push(o);
        }
        return this;
      }),
      (e.prototype.off = function (n, t) {
        if (!n) return (this.listenerMap = {}), this;
        if (!t) return (this.listenerMap[n] = []), this;
        var i = this.listenerMap[n],
          s = i.indexOf(t);
        return s !== -1 && i.splice(s, 1), this;
      }),
      (e.prototype.trigger = function (n) {
        for (var t = [], i = 1; i < arguments.length; i++)
          t[i - 1] = arguments[i];
        var s = this.listenerMap[n];
        return (
          Array.isArray(s) &&
            s.forEach(function (a) {
              a.apply(void 0, t);
            }),
          this
        );
      }),
      e
    );
  })();
Be.default = pa;
var tt = {},
  xe = {};
window.requestAnimationFrame = (function (e) {
  return (
    e.requestAnimationFrame ||
    e.webkitRequestAnimationFrame ||
    e.mozRequestAnimationFrame ||
    function (n) {
      return e.setTimeout(n, 1e3 / 60);
    }
  );
})(window);
Math.hypot ||
  (Math.hypot = function () {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    for (var t = 0, i = 0, s = !1, a = 0; a < arguments.length; ++a) {
      var o = Math.abs(Number(e[a]));
      o === 1 / 0 && (s = !0),
        o > t && ((i *= (t / o) * (t / o)), (t = o)),
        (i += o === 0 && t === 0 ? 0 : (o / t) * (o / t));
    }
    return s ? 1 / 0 : t === 1 / 0 ? 1 / 0 : t * Math.sqrt(i);
  });
var St =
    (C && C.__spreadArray) ||
    function (e, n) {
      for (var t = 0, i = n.length, s = e.length; t < i; t++, s++) e[s] = n[t];
      return e;
    },
  en =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(xe, '__esModule', { value: !0 });
var ha = en(De),
  he = ie,
  ma = en(Be),
  ae = J,
  va = (function () {
    function e(n, t, i) {
      (this.elements = []),
        (this.isCanvasRemoved = !1),
        (this.isPaused = !1),
        (this.eventEmitter = new ma.default()),
        (this.isRunningSupported = !1),
        he.isRuntimeSupported &&
          ((this.container = ae.isElement(t) ? t : document.querySelector(t)),
          (this.isRunningSupported = !!this.container),
          this.container &&
            ((this.options = ae.merge({}, ha.default, n, i)),
            (this.canvas = document.createElement('canvas')),
            (this.ctx = this.canvas.getContext('2d')),
            (this.container.innerHTML = ''),
            this.container.appendChild(this.canvas),
            (this.getColor = this.makeColorMethod())));
    }
    return (
      (e.prototype.bootstrap = function () {
        this.isRunningSupported &&
          (this.setCanvasDimension(),
          this.observeCanvasRemoved(),
          this.resizeEvent(),
          this.init(),
          this.draw());
      }),
      (e.prototype.clearCanvasAndSetGlobalAttrs = function () {
        var n = this,
          t = n.ctx,
          i = n.canvasWidth,
          s = n.canvasHeight;
        t.clearRect(0, 0, i, s), (t.globalAlpha = this.options.opacity);
      }),
      (e.prototype.makeColorMethod = function () {
        var n = this.options.color,
          t = Array.isArray(n) ? n.length : 0;
        return ae.isString(n)
          ? function () {
              return n;
            }
          : t === 0
            ? ae.randomColor
            : function () {
                return n[Math.floor(Math.random() * t)];
              };
      }),
      (e.prototype.setCanvasDimension = function () {
        var n = window.devicePixelRatio,
          t =
            ae.getNumberValueOfStyle(this.container, 'width') ||
            he.defaultCanvasWidth,
          i =
            ae.getNumberValueOfStyle(this.container, 'height') ||
            he.defaultCanvasHeight;
        (this.canvasWidth = t),
          (this.canvasHeight = i),
          (this.canvas.width = t * n),
          (this.canvas.height = i * n),
          (this.canvas.style.width = t + 'px'),
          (this.canvas.style.height = i + 'px'),
          this.ctx.scale(n, n);
      }),
      (e.prototype.observeCanvasRemoved = function () {
        var n = this;
        ae.observeElementRemoved(this.canvas, function () {
          (n.isCanvasRemoved = !0),
            n.resizeHandler &&
              window.removeEventListener('resize', n.resizeHandler),
            n.eventEmitter.trigger(he.EVENT_NAMES.DESTROY),
            n.eventEmitter.off();
        });
      }),
      (e.prototype.requestAnimationFrame = function () {
        !this.isPaused &&
          !this.isCanvasRemoved &&
          window.requestAnimationFrame(this.draw.bind(this));
      }),
      (e.prototype.resizeEvent = function () {
        var n = this;
        this.options.resize &&
          ((this.resizeHandler = function () {
            var t = n.canvasWidth,
              i = n.canvasHeight;
            n.setCanvasDimension();
            var s = n.canvasWidth / t,
              a = n.canvasHeight / i;
            n.elements.forEach(function (o) {
              ae.isPlainObject(o) && ((o.x *= s), (o.y *= a));
            }),
              n.eventEmitter.trigger(he.EVENT_NAMES.RESIZE, s, a),
              n.isPaused && n.draw();
          }),
          window.addEventListener('resize', this.resizeHandler));
      }),
      (e.prototype.pause = function () {
        this.isRunningSupported &&
          !this.isCanvasRemoved &&
          !this.isPaused &&
          (this.isPaused = !0);
      }),
      (e.prototype.open = function () {
        this.isRunningSupported &&
          !this.isCanvasRemoved &&
          this.isPaused &&
          ((this.isPaused = !1), this.draw());
      }),
      (e.prototype.onDestroy = function () {
        for (var n, t = [], i = 0; i < arguments.length; i++)
          t[i] = arguments[i];
        return (
          (n = this.eventEmitter).on.apply(n, St([he.EVENT_NAMES.DESTROY], t)),
          this
        );
      }),
      (e.prototype.onResize = function () {
        for (var n, t = [], i = 0; i < arguments.length; i++)
          t[i] = arguments[i];
        return (
          (n = this.eventEmitter).on.apply(n, St([he.EVENT_NAMES.RESIZE], t)),
          this
        );
      }),
      e
    );
  })();
xe.default = va;
var ga =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  _a =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(tt, '__esModule', { value: !0 });
var ya = _a(xe),
  ge = J,
  ba = (function (e) {
    ga(n, e);
    function n(t, i) {
      var s = e.call(this, n.defaultConfig, t, i) || this;
      return (s.specificAngles = [-180, -90, 0, 90, 180]), s.bootstrap(), s;
    }
    return (
      (n.prototype.init = function () {
        this.createLines(this.options.num), this.createLinesOnClick();
      }),
      (n.prototype.createLines = function (t, i) {
        for (
          var s = this.options,
            a = s.maxWidth,
            o = s.minWidth,
            l = s.maxSpeed,
            r = s.minSpeed,
            d = s.maxDegree,
            u = s.minDegree;
          t--;

        )
          this.elements.push({
            x: i != null ? i : Math.random() * this.canvasWidth,
            width: ge.randomInRange(a, o),
            color: this.getColor(),
            speed: ge.randomSpeed(l, r),
            degree: ge.toFixed(ge.randomInRange(d, u) % 180),
          });
      }),
      (n.prototype.createLinesOnClick = function () {
        var t = this;
        if (this.options.createOnClick) {
          var i = function (s) {
            if (!t.isPaused) {
              var a = s.pageX - ge.offset(t.canvas).left;
              t.createLines(t.options.numberOfCreations, a);
            }
          };
          this.canvas.addEventListener('click', i),
            this.onDestroy(function () {
              t.canvas.removeEventListener('click', i);
            });
        }
      }),
      (n.prototype.draw = function () {
        var t = this,
          i = this,
          s = i.ctx,
          a = i.canvasWidth,
          o = i.canvasHeight,
          l = this.options,
          r = l.removeOnOverflow,
          d = l.overflowCompensation,
          u = l.reservedLines;
        this.clearCanvasAndSetGlobalAttrs();
        var c = Math.hypot(a, o),
          f = c * 10,
          m = Math.max(0, d);
        this.elements.forEach(function (h, b) {
          var _ = ge.degreesToRadians(-h.degree),
            g = 0;
          t.specificAngles.includes(h.degree) ||
            (g = Math.abs(t.canvasHeight / 2 / Math.tan(_))),
            s.save(),
            s.beginPath(),
            s.translate(h.x, t.canvasHeight / 2),
            s.rotate(_),
            s.moveTo(-f, 0),
            s.lineTo(f, 0),
            (s.lineWidth = h.width),
            (s.strokeStyle = h.color),
            s.stroke(),
            s.closePath(),
            s.restore(),
            t.isPaused || (h.x += h.speed);
          var v = !1,
            y = !1;
          h.x + g + h.width + m < 0
            ? ((v = !0), (y = !0))
            : h.x > t.canvasWidth + g + h.width + m && (v = !0),
            v &&
              (r && t.elements.length > u
                ? t.elements.splice(b, 1)
                : (h.speed = Math.abs(h.speed) * (y ? 1 : -1)));
        }),
          this.requestAnimationFrame();
      }),
      (n.defaultConfig = {
        num: 6,
        maxWidth: 2,
        minWidth: 1,
        maxSpeed: 3,
        minSpeed: 1,
        maxDegree: 90,
        minDegree: 80,
        createOnClick: !0,
        numberOfCreations: 3,
        removeOnOverflow: !0,
        overflowCompensation: 20,
        reservedLines: 6,
      }),
      n
    );
  })(ya.default);
tt.default = ba;
var nt = {},
  je = {},
  Sa =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  wa =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(je, '__esModule', { value: !0 });
var Ta = wa(xe),
  Ie = ie,
  Qe = J,
  Ea = ['circle', 'triangle', 'star', 'image'];
function wt(e) {
  if (Qe.isString(e)) {
    if (e === 'circle' || e === 'triangle') return { type: e };
    if (Ie.regExp.shapeStar.test(e)) {
      var n = e.split(':');
      return {
        type: 'star',
        sides: Number(n[1]) || 5,
        dent: Number(n[2]) || 0.5,
      };
    }
    if (Ie.regExp.http.test(e) || Ie.regExp.imageBase64.test(e)) {
      var t = { type: 'image', isImageLoaded: !1 };
      return (
        Qe.loadImage(e, function (i) {
          (t.isImageLoaded = !0), (t.source = i);
        }),
        t
      );
    }
    console.warn('Shape value of ' + e + ' is invalid.');
  }
  try {
    if (
      e instanceof HTMLImageElement ||
      e instanceof SVGImageElement ||
      e instanceof HTMLVideoElement ||
      e instanceof HTMLCanvasElement ||
      e instanceof ImageBitmap ||
      e instanceof OffscreenCanvas
    )
      return { type: 'image', isImageLoaded: !0, source: e };
  } catch (i) {
    console.warn(
      'Your browser does not support [CanvasImageSource](https://developer.mozilla.org/en-US/docs/Web/API/CanvasImageSource), please upgrade it.'
    );
  }
  return { type: 'image', isImageLoaded: !1 };
}
function Tt(e, n, t, i, s, a) {
  e.translate(n, t), e.moveTo(0, 0 - i);
  for (var o = 0; o < s; o++)
    e.rotate(Math.PI / s),
      e.lineTo(0, 0 - i * a),
      e.rotate(Math.PI / s),
      e.lineTo(0, 0 - i);
}
var Ca = (function (e) {
  Sa(n, e);
  function n() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (n.prototype.getShapeData = function () {
      var t = this.options.shape,
        i = { type: 'circle' };
      if (!t) return i;
      if (Qe.isArray(t)) {
        var s = t.length;
        if (s) {
          var a = t[Math.floor(Math.random() * s)];
          return wt(a);
        }
        return i;
      }
      return wt(t);
    }),
    (n.prototype.drawShape = function (t) {
      var i = t.shape,
        s = i.type,
        a = i.isImageLoaded,
        o = i.source,
        l = i.sides,
        r = i.dent;
      if (Ea.indexOf(s) !== -1) {
        if ((this.ctx.save(), s === 'image')) {
          if (a) {
            var d = t.r * 2;
            this.ctx.drawImage(
              o,
              0,
              0,
              (o == null ? void 0 : o.width) || d,
              (o == null ? void 0 : o.height) || d,
              t.x - t.r,
              t.y - t.r,
              d,
              d
            );
          }
        } else {
          switch ((this.ctx.beginPath(), t.shape.type)) {
            case 'circle':
              this.ctx.arc(t.x, t.y, t.r, 0, Ie.doublePi);
              break;
            case 'triangle':
              Tt(this.ctx, t.x, t.y, t.r, 3, 0.5);
              break;
            case 'star':
              Tt(this.ctx, t.x, t.y, t.r, l, r);
              break;
          }
          (this.ctx.fillStyle = t.color), this.ctx.fill();
        }
        this.ctx.restore();
      }
    }),
    n
  );
})(Ta.default);
je.default = Ca;
var xa =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  Ae =
    (C && C.__assign) ||
    function () {
      return (
        (Ae =
          Object.assign ||
          function (e) {
            for (var n, t = 1, i = arguments.length; t < i; t++) {
              n = arguments[t];
              for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
            }
            return e;
          }),
        Ae.apply(this, arguments)
      );
    },
  $a =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(nt, '__esModule', { value: !0 });
var Ma = ie,
  Oa = $a(je),
  ee = J,
  Pa = (function (e) {
    xa(n, e);
    function n(t, i) {
      var s = e.call(this, n.defaultConfig, t, i) || this;
      return (s.mouseX = 0), (s.mouseY = 0), s.bootstrap(), s;
    }
    return (
      (n.prototype.init = function () {
        this.ownResizeEvent(),
          this.optionsNormalize(),
          this.options.range > 0 &&
            ((this.positionX = Math.random() * this.canvasWidth),
            (this.positionY = Math.random() * this.canvasHeight),
            this.defineLineShape(),
            this.positionEvent()),
          (this.mouseX = this.mouseY = 0),
          this.parallaxEvent(),
          this.createDots();
      }),
      (n.prototype.optionsNormalize = function () {
        var t = this,
          i = t.canvasWidth,
          s = t.options,
          a = ['num', 'proximity', 'range'];
        a.forEach(function (o) {
          s[o] = ee.pInt(ee.calcQuantity(s[o], i));
        }),
          !ee.isElement(s.eventElem) &&
            s.eventElem !== document &&
            (s.eventElem = this.canvas);
      }),
      (n.prototype.defineLineShape = function () {
        var t = this,
          i = this.options,
          s = i.proximity,
          a = i.range,
          o = i.lineShape;
        switch (o) {
          case 'cube':
            this.lineShapeMaker = function (l, r, d, u, c) {
              var f = t,
                m = f.positionX,
                h = f.positionY;
              Math.abs(l - d) <= s &&
                Math.abs(r - u) <= s &&
                Math.abs(l - m) <= a &&
                Math.abs(r - h) <= a &&
                Math.abs(d - m) <= a &&
                Math.abs(u - h) <= a &&
                c();
            };
            break;
          default:
            this.lineShapeMaker = function (l, r, d, u, c) {
              var f = t,
                m = f.positionX,
                h = f.positionY;
              Math.abs(l - d) <= s &&
                Math.abs(r - u) <= s &&
                ((Math.abs(l - m) <= a && Math.abs(r - h) <= a) ||
                  (Math.abs(d - m) <= a && Math.abs(u - h) <= a)) &&
                c();
            };
        }
      }),
      (n.prototype.createDots = function () {
        for (
          var t = this,
            i = t.canvasWidth,
            s = t.canvasHeight,
            a = t.getColor,
            o = this.options,
            l = o.maxR,
            r = o.minR,
            d = o.maxSpeed,
            u = o.minSpeed,
            c = o.parallaxLayer,
            f = c.length,
            m = this.options.num;
          m--;

        ) {
          var h = ee.randomInRange(l, r);
          this.elements.push({
            r: h,
            x: ee.randomInRange(i - h, h),
            y: ee.randomInRange(s - h, h),
            vx: ee.randomSpeed(d, u),
            vy: ee.randomSpeed(d, u),
            color: a(),
            shape: this.getShapeData(),
            parallaxLayer: c[Math.floor(Math.random() * f)],
            parallaxOffsetX: 0,
            parallaxOffsetY: 0,
          });
        }
      }),
      (n.prototype.draw = function () {
        var t = this,
          i = this.ctx,
          s = this.options.lineWidth;
        this.clearCanvasAndSetGlobalAttrs(),
          (i.lineWidth = s),
          this.updateXY(),
          this.elements.forEach(function (a) {
            var o = a.x,
              l = a.y,
              r = a.parallaxOffsetX,
              d = a.parallaxOffsetY;
            t.drawShape(Ae(Ae({}, a), { x: o + r, y: l + d }));
          }),
          this.connectDots(),
          this.requestAnimationFrame();
      }),
      (n.prototype.connectDots = function () {
        if (!(this.options.range <= 0)) {
          var t = this,
            i = t.elements,
            s = t.ctx,
            a = t.lineShapeMaker,
            o = i.length;
          i.forEach(function (l, r) {
            for (
              var d = l.x + l.parallaxOffsetX,
                u = l.y + l.parallaxOffsetY,
                c = function () {
                  var f = i[r],
                    m = f.x + f.parallaxOffsetX,
                    h = f.y + f.parallaxOffsetY;
                  a == null ||
                    a(d, u, m, h, function () {
                      s.save(),
                        s.beginPath(),
                        s.moveTo(d, u),
                        s.lineTo(m, h),
                        (s.strokeStyle = l.color),
                        s.stroke(),
                        s.restore();
                    });
                };
              ++r < o;

            )
              c();
          });
        }
      }),
      (n.prototype.updateXY = function () {
        var t = this,
          i = t.isPaused,
          s = t.mouseX,
          a = t.mouseY,
          o = t.canvasWidth,
          l = t.canvasHeight,
          r = this.options,
          d = r.parallax,
          u = r.parallaxStrength;
        i ||
          this.elements.forEach(function (c) {
            if (d) {
              var f = u * c.parallaxLayer;
              (c.parallaxOffsetX += (s / f - c.parallaxOffsetX) / 10),
                (c.parallaxOffsetY += (a / f - c.parallaxOffsetY) / 10);
            }
            (c.x += c.vx), (c.y += c.vy);
            var m = c.r,
              h = c.parallaxOffsetX,
              b = c.parallaxOffsetY,
              _ = c.x,
              g = c.y;
            (_ += h),
              (g += b),
              _ + m >= o
                ? (c.vx = -Math.abs(c.vx))
                : _ - m <= 0 && (c.vx = Math.abs(c.vx)),
              g + m >= l
                ? (c.vy = -Math.abs(c.vy))
                : g - m <= 0 && (c.vy = Math.abs(c.vy));
          });
      }),
      (n.prototype.getEventElemOffset = function () {
        var t = this.options.eventElem;
        return t === document ? null : ee.offset(t);
      }),
      (n.prototype.eventProxy = function (t, i) {
        var s = this,
          a = this.options.eventElem,
          o;
        Ma.orientationSupport &&
          ((o = function (r) {
            s.isPaused ||
              ee.isNull(r.beta) ||
              i(Math.min(Math.max(r.beta, -90), 90), r.gamma);
          }),
          window.addEventListener('deviceorientation', o));
        var l = function (r) {
          if (!s.isPaused) {
            var d = r.pageX,
              u = r.pageY,
              c = s.getEventElemOffset();
            c && ((d -= c.left), (u -= c.top)), t(d, u);
          }
        };
        a.addEventListener('mousemove', l),
          this.onDestroy(function () {
            window.removeEventListener('deviceorientation', o),
              a.removeEventListener('mousemove', l);
          });
      }),
      (n.prototype.positionEvent = function () {
        var t = this,
          i = this.options.range;
        (i > this.canvasWidth && i > this.canvasHeight) ||
          this.eventProxy(
            function (s, a) {
              (t.positionX = s), (t.positionY = a);
            },
            function (s, a) {
              (t.positionX = (-(a - 90) / 180) * t.canvasWidth),
                (t.positionY = (-(s - 90) / 180) * t.canvasHeight);
            }
          );
      }),
      (n.prototype.parallaxEvent = function () {
        var t = this;
        this.options.parallax &&
          this.eventProxy(
            function (i, s) {
              (t.mouseX = i - t.canvasWidth / 2),
                (t.mouseY = s - t.canvasHeight / 2);
            },
            function (i, s) {
              (t.mouseX = (-s * t.canvasWidth) / 180),
                (t.mouseY = (-i * t.canvasHeight) / 180);
            }
          );
      }),
      (n.prototype.ownResizeEvent = function () {
        var t = this;
        this.onResize(function (i, s) {
          t.options.range > 0 &&
            ((t.positionX *= i),
            (t.positionY *= s),
            (t.mouseX *= i),
            (t.mouseY *= s));
        });
      }),
      (n.defaultConfig = {
        num: 0.12,
        maxR: 2.4,
        minR: 0.6,
        maxSpeed: 1,
        minSpeed: 0.1,
        proximity: 0.2,
        range: 0.2,
        lineWidth: 0.2,
        lineShape: 'spider',
        eventElem: null,
        parallax: !1,
        parallaxLayer: [1, 2, 3],
        parallaxStrength: 3,
      }),
      n
    );
  })(Oa.default);
nt.default = Pa;
var it = {},
  La =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  Ia =
    (C && C.__spreadArray) ||
    function (e, n) {
      for (var t = 0, i = n.length, s = e.length; t < i; t++, s++) e[s] = n[t];
      return e;
    },
  ka =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(it, '__esModule', { value: !0 });
var Aa = ka(je),
  Xe = J,
  Et = ie,
  Da = (function (e) {
    La(n, e);
    function n(t, i) {
      var s = e.call(this, n.defaultConfig, t, i) || this;
      return (s.startTime = Date.now()), (s.isFinished = !1), s.bootstrap(), s;
    }
    return (
      (n.prototype.init = function () {
        this.createSnowflakes();
      }),
      (n.prototype.createSnowflake = function () {
        var t = this.options,
          i = t.maxR,
          s = t.minR,
          a = t.maxSpeed,
          o = t.minSpeed,
          l = Xe.randomInRange(i, s);
        return {
          r: l,
          x: Math.random() * this.canvasWidth,
          y: -l,
          vx: Xe.randomSpeed(a, o),
          vy: Math.abs(l * Xe.randomSpeed(a, o)),
          color: this.getColor(),
          swingAt: Date.now(),
          shape: this.getShapeData(),
        };
      }),
      (n.prototype.createSnowflakes = function () {
        for (
          var t = Math.max(0, Math.ceil(Math.random() * this.options.num));
          t--;

        )
          this.elements.push(this.createSnowflake());
      }),
      (n.prototype.draw = function () {
        var t = this,
          i = this,
          s = i.canvasWidth,
          a = i.canvasHeight,
          o = i.isPaused,
          l = this.options,
          r = l.maxR,
          d = l.swing,
          u = l.swingInterval,
          c = l.swingProbability,
          f = l.duration;
        if (
          (this.clearCanvasAndSetGlobalAttrs(),
          this.elements.forEach(function (h, b, _) {
            var g = h.x,
              v = h.y,
              y = h.r;
            t.drawShape(h),
              !o &&
                ((h.x += h.vx),
                (h.y += h.vy),
                d &&
                  Date.now() - h.swingAt > u &&
                  Math.random() < (y / r) * c &&
                  ((h.swingAt = Date.now()), (h.vx *= -1)),
                g + y < 0 || g - y > s
                  ? f
                    ? _.splice(b, 1)
                    : _.splice(b, 1, t.createSnowflake())
                  : v - y > a && _.splice(b, 1));
          }),
          !o)
        ) {
          var m = f ? Date.now() - this.startTime > f : !1;
          !m && Math.random() > 0.9 && this.createSnowflakes(),
            this.elements.length
              ? this.requestAnimationFrame()
              : ((this.isFinished = !0),
                this.eventEmitter.trigger(Et.EVENT_NAMES_SNOW.FINISHED));
        }
      }),
      (n.prototype.fallAgain = function () {
        this.isRunningSupported &&
          !this.isCanvasRemoved &&
          !this.isPaused &&
          this.isFinished &&
          ((this.isFinished = !1),
          (this.startTime = Date.now()),
          this.createSnowflakes(),
          this.draw());
      }),
      (n.prototype.onFinished = function () {
        for (var t, i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        return (
          (t = this.eventEmitter).on.apply(
            t,
            Ia([Et.EVENT_NAMES_SNOW.FINISHED], i)
          ),
          this
        );
      }),
      (n.defaultConfig = {
        num: 6,
        color: '#fff',
        maxR: 6.5,
        minR: 0.5,
        maxSpeed: 0.6,
        minSpeed: 0.1,
        swing: !0,
        swingInterval: 2e3,
        swingProbability: 0.06,
      }),
      n
    );
  })(Aa.default);
it.default = Da;
var Fe = {},
  st = {},
  Na =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  Ba =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(st, '__esModule', { value: !0 });
var ja = Ba(xe),
  qe = J,
  Fa = (function (e) {
    Na(n, e);
    function n() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (t.completedMap = {}), t;
    }
    return (
      (n.prototype.loadMaskImage = function () {
        var t = this,
          i = this.options.mask;
        if (i)
          if (qe.isString(i)) {
            if (this.completedMap[i]) {
              this.maskImage = this.completedMap[i];
              return;
            }
            qe.loadImage(i, function (s) {
              (t.completedMap[i] = s), (t.maskImage = s);
            });
          } else this.maskImage = i;
      }),
      (n.prototype.renderMaskMode = function (t) {
        if (!this.maskImage) {
          t();
          return;
        }
        var i = this.options.maskMode || 'normal';
        this.ctx.save(), this['mode' + qe.upperFirst(i)](t), this.ctx.restore();
      }),
      (n.prototype.modeNormal = function (t) {
        this.drawMaskImage(),
          (this.ctx.globalCompositeOperation = 'source-atop'),
          t();
      }),
      (n.prototype.modeGhost = function (t) {
        this.ctx.save(),
          (this.ctx.filter = 'grayscale(100%)'),
          this.drawMaskImage(),
          this.ctx.restore(),
          (this.ctx.globalCompositeOperation = 'source-atop'),
          t(),
          this.ctx.clip(),
          this.drawMaskImage();
      }),
      (n.prototype.drawMaskImage = function () {
        if (this.maskImage) {
          var t = this,
            i = t.ctx,
            s = t.canvasWidth,
            a = t.canvasHeight,
            o = t.maskImage,
            l = o.width,
            r = o.height,
            d = l / r,
            u = l > s ? s : l,
            c = r > a ? a : r;
          l > r ? (c = u / d) : (u = c * d);
          var f = (s - u) / 2,
            m = (a - c) / 2;
          i.drawImage(o, 0, 0, l, r, f, m, u, c);
        }
      }),
      n
    );
  })(ja.default);
st.default = Fa;
var Ra =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  Ct =
    (C && C.__spreadArray) ||
    function (e, n) {
      for (var t = 0, i = n.length, s = e.length; t < i; t++, s++) e[s] = n[t];
      return e;
    },
  za =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Fe, '__esModule', { value: !0 });
var Ha = ie,
  Wa = za(st),
  re = J,
  tn = [
    'fill',
    'fillColor',
    'line',
    'lineColor',
    'lineWidth',
    'offsetLeft',
    'offsetTop',
    'crestHeight',
    'speed',
  ],
  Va = ['opacity', 'mask', 'maskMode'],
  Ga = Ct(Ct([], tn), ['crestCount']),
  Ya = (function (e) {
    Ra(n, e);
    function n(t, i) {
      var s = e.call(this, n.defaultConfig, t, i) || this;
      return (s.waveLength = []), s.bootstrap(), s;
    }
    return (
      (n.prototype.init = function () {
        this.ownResizeEvent(),
          this.optionsNormalize(),
          this.loadMaskImage(),
          this.createDots();
      }),
      (n.prototype.optionsNormalize = function () {
        var t = this;
        Ga.forEach(function (i) {
          for (
            var s = t.options.num,
              a = t.options[i],
              o = [],
              l = i === 'offsetLeft' ? t.canvasWidth : t.canvasHeight;
            s--;

          ) {
            var r = Array.isArray(a) ? a[s] : a;
            (o[s] = re.isUndefined(r)
              ? t.getOptionDefaultValue(i)
              : n.getOptionProcessedValue(i, r, l)),
              i === 'crestCount' && (t.waveLength[s] = t.canvasWidth / o[s]);
          }
          t.options[i] = o;
        });
      }),
      (n.prototype.getOptionDefaultValue = function (t) {
        var i = this,
          s = i.canvasWidth,
          a = i.canvasHeight;
        switch (t) {
          case 'lineColor':
          case 'fillColor':
            return re.randomColor();
          case 'lineWidth':
            return re.randomInRange(2, 0.2);
          case 'offsetLeft':
            return Math.random() * s;
          case 'offsetTop':
          case 'crestHeight':
            return Math.random() * a;
          case 'crestCount':
            return re.randomInRange(s / 2, 1);
          case 'speed':
            return re.randomInRange(0.4, 0.1);
          case 'fill':
            return !1;
          case 'line':
            return !0;
        }
      }),
      (n.getOptionProcessedValue = function (t, i, s) {
        return t === 'offsetTop' || t === 'offsetLeft' || t === 'crestHeight'
          ? re.calcQuantity(i, s)
          : i;
      }),
      (n.prototype.createDots = function () {
        for (
          var t = this,
            i = t.canvasWidth,
            s = t.waveLength,
            a = this.options.num;
          a--;

        ) {
          for (var o = [], l = Ha.doublePi / s[a], r = 0; r <= i; r++)
            o.push({ x: r, y: r * l });
          this.elements[a] = o;
        }
      }),
      (n.prototype.draw = function () {
        var t = this;
        this.clearCanvasAndSetGlobalAttrs(),
          this.renderMaskMode(function () {
            t.drawWaves();
          }),
          this.requestAnimationFrame();
      }),
      (n.prototype.drawWaves = function () {
        var t = this,
          i = t.ctx,
          s = t.canvasWidth,
          a = t.canvasHeight,
          o = t.isPaused,
          l = this.options;
        this.elements.forEach(function (r, d) {
          var u = l.crestHeight[d],
            c = l.offsetLeft[d],
            f = l.offsetTop[d],
            m = l.speed[d];
          i.save(),
            i.beginPath(),
            r.forEach(function (h, b) {
              i[b ? 'lineTo' : 'moveTo'](h.x, u * Math.sin(h.y + c) + f),
                !o && (h.y -= m);
            }),
            l.fill[d] &&
              (i.lineTo(s, a),
              i.lineTo(0, a),
              i.closePath(),
              (i.fillStyle = l.fillColor[d]),
              i.fill()),
            l.line[d] &&
              ((i.lineWidth = l.lineWidth[d]),
              (i.strokeStyle = l.lineColor[d]),
              i.stroke()),
            i.restore();
        });
      }),
      (n.prototype.ownResizeEvent = function () {
        var t = this,
          i = ['offsetLeft', 'offsetTop', 'crestHeight'],
          s = this.options;
        this.onResize(function (a, o) {
          i.forEach(function (l) {
            var r = l === 'offsetLeft' ? a : o;
            s[l].forEach(function (d, u, c) {
              c[u] = d * r;
            });
          }),
            t.elements.forEach(function (l) {
              l.forEach(function (r) {
                (r.x *= a), (r.y *= o);
              });
            });
        });
      }),
      (n.prototype.updateComplexOptions = function (t, i) {
        if (i) {
          var s = t === 'offsetLeft' ? this.canvasWidth : this.canvasHeight,
            a = this.options,
            o = Array.isArray(i);
          a[t].forEach(function (l, r, d) {
            var u = o ? i[r] : i;
            (u = n.getOptionProcessedValue(t, u, s)),
              re.isUndefined(u) && (u = l),
              (d[r] = u);
          });
        }
      }),
      (n.prototype.updatePlainOptions = function (t, i) {
        (this.options[t] = i), t === 'mask' && this.loadMaskImage();
      }),
      (n.prototype.setOptions = function (t) {
        if (!(!this.isRunningSupported || !re.isPlainObject(t)))
          for (var i in t)
            Object.hasOwnProperty.call(t, i) &&
              (Va.indexOf(i) !== -1
                ? this.updatePlainOptions(i, t[i])
                : tn.indexOf(i) !== -1 && this.updateComplexOptions(i, t[i]));
      }),
      (n.defaultConfig = {
        num: 3,
        fill: !1,
        fillColor: [],
        line: !0,
        lineColor: [],
        lineWidth: [],
        offsetLeft: [],
        offsetTop: [],
        crestHeight: [],
        crestCount: [],
        speed: [],
      }),
      n
    );
  })(Wa.default);
Fe.default = Ya;
var at = {},
  Xa =
    (C && C.__extends) ||
    (function () {
      var e = function (n, t) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, s) {
                i.__proto__ = s;
              }) ||
            function (i, s) {
              for (var a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
            }),
          e(n, t)
        );
      };
      return function (n, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        e(n, t);
        function i() {
          this.constructor = n;
        }
        n.prototype =
          t === null
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i());
      };
    })(),
  xt =
    (C && C.__spreadArray) ||
    function (e, n) {
      for (var t = 0, i = n.length, s = e.length; t < i; t++, s++) e[s] = n[t];
      return e;
    },
  nn =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(at, '__esModule', { value: !0 });
var Le = ie,
  qa = nn(Ne),
  Ue = J,
  Ua = nn(Fe),
  Ka = ['font', 'textColor', 'textFormatter', 'borderRadius'],
  Qa = (function (e) {
    Xa(n, e);
    function n(t, i) {
      var s = e.call(this, t, Ue.merge({}, n.defaultConfig, i)) || this;
      return (
        (s.progress = 0),
        (s.isCompletedImmediately = !1),
        (s.fastStepValue = 1),
        s
      );
    }
    return (
      (n.prototype.init = function () {
        (this.halfCH = this.canvasHeight / 2),
          this.setOffsetTop(this.canvasHeight),
          this.setCanvasStyle(),
          this.ownResizeEvent(),
          this.optionsNormalize(),
          this.loadMaskImage(),
          this.createDots(),
          this.waveLoadingResizeEvent();
      }),
      (n.prototype.setOffsetTop = function (t) {
        var i = this.options.offsetTop;
        Array.isArray(i)
          ? i.forEach(function (s, a, o) {
              o[a] = t;
            })
          : (this.options.offsetTop = t);
      }),
      (n.prototype.setCanvasStyle = function () {
        this.canvas.style.borderRadius = this.options.borderRadius;
      }),
      (n.prototype.draw = function () {
        this.calcProgress(),
          this.progress < 100
            ? (this.mainDrawing(), this.requestAnimationFrame())
            : ((this.progress = 100),
              this.mainDrawing(),
              this.eventEmitter.trigger(Le.EVENT_NAMES_WAVE_LOADING.FINISHED));
      }),
      (n.prototype.mainDrawing = function () {
        var t = this;
        this.eventEmitter.trigger(
          Le.EVENT_NAMES_WAVE_LOADING.PROGRESS,
          this.progress
        ),
          this.calcOffsetTop(),
          this.clearCanvasAndSetGlobalAttrs(),
          this.renderMaskMode(function () {
            t.drawWaves();
          }),
          this.drawText();
      }),
      (n.prototype.drawText = function () {
        var t = this,
          i = t.ctx,
          s = t.canvasWidth,
          a = t.halfCH,
          o = t.progress,
          l = this.options,
          r = l.font,
          d = l.textFormatter,
          u = l.textColor;
        if (!(!Ue.isString(d) || !d)) {
          var c = d.replace(/%d/g, String(Math.floor(o)));
          i.save(), (i.font = r);
          var f = i.measureText(c).width,
            m = (s - f) / 2;
          (i.textBaseline = 'middle'),
            (i.fillStyle = u),
            (i.font = r),
            i.fillText(c, m, a),
            i.restore();
        }
      }),
      (n.prototype.calcProgress = function () {
        if (this.isCompletedImmediately) {
          (this.progress += this.fastStepValue), (this.fastStepValue += 0.5);
          return;
        }
        if (!(this.progress >= n.progressThreshold)) {
          this.startTime || (this.startTime = Date.now());
          var t = Date.now() - this.startTime,
            i = t / this.options.duration;
          i <= 1 &&
            ((this.progress = qa.default[this.options.easing](
              i,
              t,
              0,
              100,
              this.options.duration
            )),
            this.progress + 0.9 >= n.progressThreshold &&
              (this.progress = n.progressThreshold));
        }
      }),
      (n.prototype.calcOffsetTop = function () {
        if (
          !(
            !this.isCompletedImmediately && this.progress >= n.progressThreshold
          )
        ) {
          var t = Math.max.apply(Math, this.options.crestHeight),
            i =
              this.progress === 100
                ? -t
                : Math.ceil(
                    ((100 - this.progress) / 100) * this.canvasHeight + t
                  );
          this.setOffsetTop(i);
        }
      }),
      (n.prototype.waveLoadingResizeEvent = function () {
        var t = this;
        this.onResize(function () {
          (t.halfCH = t.canvasHeight / 2), t.progress === 100 && t.draw();
        });
      }),
      (n.prototype.setOptions = function (t) {
        if (!(!this.isRunningSupported || !Ue.isPlainObject(t))) {
          e.prototype.setOptions.call(this, t);
          for (var i in t)
            if (Object.hasOwnProperty.call(t, i) && Ka.indexOf(i) !== -1) {
              var s = t[i];
              (this.options[i] = s),
                i === 'borderRadius' && this.setCanvasStyle();
            }
        }
      }),
      (n.prototype.done = function () {
        this.isRunningSupported &&
          !this.isCompletedImmediately &&
          (this.isCompletedImmediately = !0);
      }),
      (n.prototype.onProgress = function () {
        for (var t, i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        return (
          (t = this.eventEmitter).on.apply(
            t,
            xt([Le.EVENT_NAMES_WAVE_LOADING.PROGRESS], i)
          ),
          this
        );
      }),
      (n.prototype.onFinished = function () {
        for (var t, i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        return (
          (t = this.eventEmitter).on.apply(
            t,
            xt([Le.EVENT_NAMES_WAVE_LOADING.FINISHED], i)
          ),
          this
        );
      }),
      (n.defaultConfig = {
        num: 1,
        font: 'normal 400 16px Arial',
        textColor: '#333',
        textFormatter: 'loading...%d%',
        fill: !0,
        line: !1,
        fillColor: '#27C9E5',
        borderRadius: '50%',
        offsetLeft: 0,
        crestHeight: 4,
        crestCount: 1,
        speed: 0.3,
        duration: 5e3,
        easing: 'swing',
      }),
      (n.progressThreshold = 99.99),
      n
    );
  })(Ua.default);
at.default = Qa;
var Za =
    (C && C.__createBinding) ||
    (Object.create
      ? function (e, n, t, i) {
          i === void 0 && (i = t),
            Object.defineProperty(e, i, {
              enumerable: !0,
              get: function () {
                return n[t];
              },
            });
        }
      : function (e, n, t, i) {
          i === void 0 && (i = t), (e[i] = n[t]);
        }),
  Ja =
    (C && C.__setModuleDefault) ||
    (Object.create
      ? function (e, n) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: n });
        }
      : function (e, n) {
          e.default = n;
        }),
  er =
    (C && C.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var n = {};
      if (e != null)
        for (var t in e)
          t !== 'default' &&
            Object.prototype.hasOwnProperty.call(e, t) &&
            Za(n, e, t);
      return Ja(n, e), n;
    },
  pe =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(j, '__esModule', { value: !0 });
j.WaveLoading =
  j.Wave =
  j.utils =
  cn =
  j.Snow =
  j.Particle =
  j.Line =
  j.Events =
  j.easing =
  j.commonConfig =
    void 0;
var sn = pe(De);
j.commonConfig = sn.default;
var an = pe(Ne);
j.easing = an.default;
var rn = pe(Be);
j.Events = rn.default;
var on = er(J);
j.utils = on;
var ln = pe(tt);
j.Line = ln.default;
var dn = pe(nt);
j.Particle = dn.default;
var un = pe(it),
  cn = (j.Snow = un.default),
  fn = pe(Fe);
j.Wave = fn.default;
var pn = pe(at);
j.WaveLoading = pn.default;
j.default = {
  Line: ln.default,
  Particle: dn.default,
  Snow: un.default,
  Wave: fn.default,
  WaveLoading: pn.default,
  commonConfig: sn.default,
  easing: an.default,
  Events: rn.default,
  utils: on,
};
const tr = Y({
  name: 'TrianglePage',
  setup() {
    return (
      ve(() => {
        new cn('#TrianglePage', {
          opacity: 1,
          num: 3,
          maxR: 20,
          minR: 5,
          maxSpeed: 0.5,
          minSpeed: 0.1,
          swing: !0,
          color: [
            '#ff99c8',
            '#fcf6bd',
            '#d0f4de',
            '#e4c1f9',
            '#a9def9',
            '#caf0f8',
            '#ffd6ff',
          ],
          shape: ['triangle'],
          resize: !0,
        });
      }),
      {}
    );
  },
});
const nr = { id: 'TrianglePage' };
function ir(e, n, t, i, s, a) {
  return S(), w('div', nr);
}
const sr = X(tr, [['render', ir]]),
  ar = Y({
    name: 'WavePage',
    components: { TrianglePage: sr },
    props: { scrollTop: Number },
    setup() {
      const e = I();
      I();
      const n = I(100),
        t = I(),
        i = I({}),
        s = () => {
          (i.value.seconds = 0),
            (i.value.t = 0),
            (t.value = document.getElementById('waveCanvas'));
          let d = t.value;
          (d.width = document.documentElement.clientWidth),
            (d.height = 150),
            (d.contextCache = d.getContext('2d')),
            a();
        },
        a = () => {
          o(t.value, '#39C0FF'),
            (i.value.seconds = i.value.seconds + 0.01),
            (i.value.t = i.value.seconds * Math.PI),
            setTimeout(a, 50);
        },
        o = (d, u) => {
          d.contextCache.clearRect(0, 0, d.width, d.height),
            l(d, u, 1, t.value.width > 750 ? 3.5 : 2, 100);
        },
        l = (d, u, c, f, m) => {
          let h = d.contextCache;
          (h.fillStyle = u),
            (h.globalAlpha = c),
            h.beginPath(),
            r(d, i.value.t / 0.5, f, m),
            h.lineTo(d.width, d.height),
            h.lineTo(0, d.height),
            h.closePath(),
            h.fill();
        },
        r = (d, u, c, f) => {
          let m = Math.floor(d.height / 2),
            h = 0,
            b = d.contextCache,
            _ = u,
            g = Math.sin(_) / c;
          b.moveTo(h, n.value * g + m);
          let v;
          for (v = h; v <= d.width + 10; v += 10)
            (_ = u + (-h + v) / n.value / c),
              (g = Math.sin(_ - f) / 2.2),
              b.lineTo(v, n.value * g + m);
        };
      return (
        ve(() => {
          s(),
            (e.value = document.documentElement.clientHeight),
            window.addEventListener('resize', () => {
              (t.value.width = document.documentElement.clientWidth),
                (e.value = document.documentElement.clientHeight);
            });
        }),
        { fixedBackgroundTop: e }
      );
    },
  });
const rr = { class: 'WavePage' },
  or = p('canvas', { id: 'waveCanvas' }, null, -1),
  lr = p('div', { class: 'image' }, null, -1),
  dr = { class: 'triangle' };
function ur(e, n, t, i, s, a) {
  const o = B('triangle-page');
  return (
    S(),
    w('div', rr, [
      or,
      p(
        'div',
        {
          class: te(
            `fixed_background ${
              e.scrollTop >= e.fixedBackgroundTop ? 'positionFixed' : ''
            }`
          ),
        },
        [lr, p('div', dr, [z(o)])],
        2
      ),
    ])
  );
}
const cr = X(ar, [['render', ur]]),
  fr = Y({ name: 'VenueInformation', props: { kvVenueInformation: Boolean } });
const pr = { key: 0, class: 'venue-information flex items-center' },
  hr = p(
    'div',
    { id: 'targetS' },
    [
      p('div', { class: 'venue flex items-center' }, [
        p('span', null, '幕張メッセ'),
        p('span', null, '国際展示場9～11ホール'),
      ]),
    ],
    -1
  ),
  mr = p(
    'div',
    { class: 'days' },
    [
      p('div', null, [
        p('p', null, 'DAY 1'),
        q(' 1月20日 '),
        p('span', null, '(土)'),
      ]),
      p('div', null, [
        p('p', null, 'DAY 2'),
        q(' 1月21日 '),
        p('span', null, '(日)'),
      ]),
    ],
    -1
  ),
  vr = [hr, mr];
function gr(e, n, t, i, s, a) {
  return e.kvVenueInformation ? H('', !0) : (S(), w('div', pr, vr));
}
const hn = X(fr, [['render', gr]]),
  _r = Y({
    name: 'KV',
    components: { VenueInformation: hn, WavePage: cr },
    props: { isPC: Boolean, kvVenueInformation: Boolean },
    setup() {
      const e = I(),
        n = I(0);
      let t = !1;
      const i = () => {
        (n.value =
          document.documentElement.scrollTop || document.body.scrollTop),
          (t = !1);
      };
      return (
        ve(() => {
          var a;
          (e.value =
            window.innerHeight -
            ((a = document.getElementById('lo_image')) == null
              ? void 0
              : a.offsetTop) +
            45),
            window.addEventListener('scroll', () => {
              t || (window.requestAnimationFrame(i), (t = !0));
            });
        }),
        {
          currTop: e,
          scrollTop: n,
          scrollToTarget: () => {
            const a = document.getElementById('targetS');
            a && a.scrollIntoView({ behavior: 'smooth' });
          },
        }
      );
    },
  }),
  yr =
    './kv-a066cf20.png',
  mn =
    './lo-82304b19.png';
const br = { class: 'kv' },
  Sr = { key: 0, class: 'kv_image' },
  wr = p('img', { src: yr }, null, -1),
  Tr = [wr],
  Er = { key: 1, class: 'kv_image kv_image_mobile' },
  Cr = { key: 2, class: 'logo' },
  xr = p('img', { src: Pt }, null, -1),
  $r = [xr],
  Mr = p('img', { src: mn }, null, -1),
  Or = [Mr],
  Pr = { class: 'wave' },
  Lr = p('div', null, [p('i', { class: 'iconfont icon-arrow_big' })], -1),
  Ir = p('div', null, [p('i', { class: 'iconfont icon-arrow_big' })], -1),
  kr = [Lr, Ir];
function Ar(e, n, t, i, s, a) {
  const o = B('wave-page'),
    l = B('venue-information');
  return (
    S(),
    w('div', br, [
      e.isPC ? (S(), w('div', Sr, Tr)) : (S(), w('div', Er)),
      e.isPC ? H('', !0) : (S(), w('div', Cr, $r)),
      p(
        'div',
        {
          class: te(
            `lo_image ${e.scrollTop >= e.currTop ? 'lo_image_absolute' : ''}`
          ),
          id: 'lo_image',
        },
        Or,
        2
      ),
      p('div', Pr, [z(o, { scrollTop: e.scrollTop }, null, 8, ['scrollTop'])]),
      !e.isPC && e.scrollTop === 0
        ? (S(),
          w(
            'div',
            {
              key: 3,
              class: 'icon-jian_tou',
              onClick:
                n[0] ||
                (n[0] = (...r) => e.scrollToTarget && e.scrollToTarget(...r)),
            },
            kr
          ))
        : H('', !0),
      z(l, { kvVenueInformation: e.kvVenueInformation }, null, 8, [
        'kvVenueInformation',
      ]),
    ])
  );
}
const Dr = X(_r, [['render', Ar]]),
  Nr = Y({
    name: 'Summary',
    data() {
      return {
        intro: `「蔚蓝档案」将于2024年2月4日（日）迎来三周年纪念。
      <br>为了纪念这一重要的日子，我们将于2024年1月20日（星期六）・21日（星期日）举办现场活动
      <br>「蔚蓝档案！～三周年纪念，老师♪～」
      <br>让我们一起来庆祝「蔚蓝档案」三周年吧！`,
        activity: [
          {
            title: '開催内容',
            intro: '展示、アトラクション、ステージ、グッズ販売など',
          },
          {
            title: '会場',
            intro:
              '幕張メッセ 国際展示場 展示ホール9～11<br> （〒261-8550 千葉県千葉市美浜区中瀬2-1）',
          },
        ],
      };
    },
    setup() {
      return {
        googleMap: () => {
          window.open('https://maps.app.goo.gl/q4LvQUX5U6icDQjA9', '_blank');
        },
      };
    },
  }),
  Br =
    '/title-10c9493e.png';
const jr = { id: 'Summary', class: 'Summary ba-three_card card_p' },
  Fr = p('div', { class: 'ba-three_title' }, [p('img', { src: Br })], -1),
  Rr = ['innerHTML'],
  zr = { class: 'activity' },
  Hr = { class: 'ba-three_subhead' },
  Wr = ['innerHTML'],
  Vr = { class: 'google_map' },
  Gr = p(
    'li',
    null,
    [
      p('div', { class: 'ba-three_subhead' }, '日時'),
      p('span', null, 'DAY1　2024年1月20日（土）9:00～18:00'),
      p('span', null, 'DAY2　2024年1月21日（日）9:00～18:00'),
      p('div', { class: 'ba-three_annotation' }, '※両日とも最終入場は17:30'),
    ],
    -1
  );
function Yr(e, n, t, i, s, a) {
  return (
    S(),
    w('div', jr, [
      Fr,
      p('div', { class: 'intro', innerHTML: e.intro }, null, 8, Rr),
      p('div', zr, [
        p('ul', null, [
          (S(!0),
          w(
            F,
            null,
            W(
              e.activity,
              (o, l) => (
                S(),
                w('li', { key: l }, [
                  p('div', Hr, k(o.title), 1),
                  p('span', { innerHTML: o.intro }, null, 8, Wr),
                ])
              )
            ),
            128
          )),
          p('div', Vr, [
            p(
              'div',
              {
                class: 'cursor_hover hoverUpAnime',
                onClick:
                  n[0] || (n[0] = (...o) => e.googleMap && e.googleMap(...o)),
              },
              'Google Map'
            ),
          ]),
          Gr,
        ]),
      ]),
    ])
  );
}
const Xr = X(Nr, [['render', Yr]]),
  qr =
    './program1-27a75bf5.png',
  Ur =
    './program2-d0ce7ecd.png',
  Kr =
    './program3-a9435284.png',
  Qr =
    './program4-01af5395.png',
  Zr =
    './map-9619a45a.pdf',
  Jr =
    './foodmenu-53c1819d.pdf',
  eo = Y({
    name: 'Program',
    data() {
      return {
        activeKey: 1,
        programList: [
          {
            header: 'ブルアカふぇす！シアター',
            content:
              '様々な特別映像コンテンツを放映する大型ビジョンを設置します。<br>一部ステージの放映もおこないます。',
          },
          {
            header: '総力戦ボスバルーン',
            content:
              '「ビナー」「ケセド」「シロ＆クロ」「ヒエロニムス」「KAITEN FX Mk.0」「ペロロジラ」<br>「ホド」「ゴズ」「グレゴリオ」の巨大バルーンを展示します。',
          },
          {
            header: '巨大ペロロ',
            content:
              '今年もやってきた！全高約5m 「ペロロ」の巨大バルーンを展示します。',
          },
          {
            header: '偉大なるチェリノ像',
            content: '全高約5m 「チェリノ像」の巨大バルーンを展示します。 ',
            annotation: '※クーデターを起こして倒そうとしないでください。',
          },
          {
            header: 'VR「先生、ちょっとお時間いただけますか？」',
            content: 'ユウカさんたちと一緒に過ごす日常をVRで体験できます。',
            annotation: `※体験には入場券とは別に「お時間あげるよ券」が必要となります。<br>
                        ※体験はチケット1枚につき1回までとさせていただきます。<br>
                        ※ヘッドセットとヘッドホンを装着するため、髪型やメイクなどに影響が出る場合があります。<br>
                        ※機材の持込はご遠慮ください。<br>
                        ※VR機器を使用するため、12歳以下のお客様の参加はお断りさせていただきます。<br>
                        ※本施策の体験時間は、約3分ほどになります。`,
          },
          {
            header: 'アロナねぶた',
            content:
              '「青森ねぶた祭」に出陣した、とてもかわいい「アロナねぶた」を展示します。',
          },
          {
            header: '関係者からのわっぴ～☆なメッセージ',
            content:
              '「ブルーアーカイブ」に関わる方々からのお祝いメッセージなどを展示します。',
          },
          {
            header: 'スタンディパネル展示',
            content:
              'イベント開催時点で実装されている全生徒のスタンディパネルを展示します。',
            annotation: '※一部コラボ生徒は対象外となります。',
          },
          {
            header: '描き下ろしパネル展示',
            content:
              '総勢30名のイラストレーターによって描き下ろされたイラストのパネルを展示します。',
          },
          {
            header: 'IDカード掲示板',
            content: 'フレンドを募集しあえるIDカード掲示板を設置します。',
            annotation: `※IDカードは会場内にご用意がございますが、オリジナルのIDカードをご持参いただくことも可能です。<br>
                       ※オリジナルのIDカードは名刺サイズ（55×91mm）に限ります。`,
          },
          {
            header: 'フォトスポット',
            content:
              '記念写真が撮影できるフォトスポット「対策委員会の部室」「ゲーム開発部の部室」「便利屋68オフィス」「子ウサギ公園」「私たちの、青春の物語を！！」を設置します。<br>イベントの思い出の写真を撮影できます。<br>さらに「私たちの、青春の物語を！！」では、撮影スタッフが常駐しております。<br>ヒフミさんのマネをしてみるのもアリかも…！？',
          },
          {
            header: '先生メッセージボード',
            content:
              '先生がメッセージやイラストを記入できるメッセージボードを設置します。',
          },
          {
            header: 'ブルアカ メモリアル',
            content:
              'メインストーリー、イベントストーリーなど「ブルーアーカイブ」の3年間を振り返ることができる展示を<br>実施します。<br>先生のブルアカライフを振り返ってみませんか？',
          },
          {
            header: '先生！お写真いいですか？',
            image: qr,
            content:
              '生徒さん1人を選んで、<br>一緒に写真撮影ができます！<br>たくさんの生徒さんが先生と2ショットを<br>撮りたがってますよ！',
            annotation: `※イベント開催時点で公開済みの生徒が対象となります。<br>
                       ※撮影した写真は記念にお持ち帰りいただけます。<br>
                       ※整理券制でのご案内となります。<br>
                       ※体験はおひとり1日1回までとなります。`,
          },
          {
            header: 'モモフレンズレース',
            image: Ur,
            content:
              'ペロロさんたちモモフレンズが1位を目指して猛ダッシュ！？<br>参加者全員にノベルティをプレゼント！<br>さらに、レースで1位になるキャラクターを<br>的中させると、特別なノベルティを<br>プレゼント！',
          },
          {
            header: 'ご主人様！ビンゴやろ～♪',
            content:
              'バニーガール姿のC＆Cの生徒さんたちとビンゴが楽しめます！<br>参加者全員にノベルティをプレゼント！さらに、見事ビンゴになった先生には、ビンゴ賞をプレゼント！',
            annotation:
              '※混雑状況により整理券制でのご案内となる場合がございます。',
          },
          {
            header: '先生も模擬テスト受けてください！',
            content:
              '  補習授業部の生徒さんと一緒に模擬テスト（◯✕問題）を受けましょう！<br>先生は何問連続で正解できますか？<br>参加者全員にノベルティをプレゼント！',
            annotation: `※混雑状況により整理券制でのご案内となる場合がございます。<br>
                       ※えっちな問題は禁止！`,
          },
          {
            header: '休憩所',
            headerDEL: '修行所',
            content:
              '飲食もできる休憩スペースをご用意します。<br>生徒さんの寝息が聞こえるかも…？',
          },
          {
            header: 'フード＆ドリンクコーナー',
            image: Kr,
            pdfLink: Jr,
            content:
              '各学園をモチーフにしたフード＆ドリンク（全10品）を販売します。<br>1商品につきオリジナルコースターを1枚プレゼント！<br>先生、いっぱい食べて、いっぱい飲んでくださいね！',
            annotation: `※コースターの絵柄は全5種類となります。<br>
                       ※コースターの絵柄はランダム配布となります。<br>
                       ※コースターの絵柄は選べません。<br>
                       ※販売時間は9:00 ～ 16:30になります。`,
          },
          {
            header: '楽しんでますか、先生？',
            content:
              '3Dの生徒さんたちが会場の各地で先生に話しかけてくれますよ！<br>お話を聞いてあげてくださいね！',
          },
          {
            header: 'スペシャルステージ',
            content:
              '会場内のステージにて様々なステージプログラムを実施します。<br>ステージプログラムは公式YouTube・X(旧Twitter)でも配信予定です。',
            annotation: `※会場内には座席と立ち見エリアをご用意いたします。一部プログラムの座席は事前抽選制でのご案内となります。<br>
                       ※各日のステージプログラムの詳細についてはステージページをご確認ください。`,
          },
          {
            header: 'エンジェル24',
            content:
              'ブルアカふぇす！オリジナルグッズを会場にて販売いたします。<br>グッズは事後通販も実施予定です。',
            annotation: `※整理券制でのご案内となります。<br>
                       ※会場限定商品と一部商品を除き、事後通販を実施予定です。<br>
                       　詳細はグッズページにてご確認ください。`,
          },
          {
            header: 'カプセルトイコーナー',
            image: Qr,
            content:
              '会場内のガチャマシンを回して購入できるグッズをご用意します。<br>価格：1回500円(税込)<br>商品内容：ミニキャラアクリルキーホルダー(全10種)',
            annotation: `※お一人様1度につき5回までとさせていただきます。<br>
                       ※混雑状況により整理券制でのご案内となる場合がございます。`,
          },
          {
            header: 'コスプレイヤー撮影会',
            content:
              ' シロコさん、ホシノさん、セリカさん、ヒフミさん、サオリさん、ユウカさん、アルさん、イズナさん、<br>カンナさん、ルミさん、シグレさん、ミヤコさんの衣装を着用したコスプレイヤーが登場！<br>撮影会を実施します。',
            annotation: '※内容やスケジュールは会場にてご確認ください。',
          },
          {
            header: '着ぐるみ撮影会',
            content:
              'アロナ、プラナちゃん、ペロロさんの着ぐるみが会場内に登場！<br>撮影会も実施予定です。<br>いっぱいお写真撮ってくださいね！',
          },
          {
            header: 'キヴォトス・クイズラリー<br>〜生徒をたずねて三千里〜',
            content:
              '会場内に設置されたQRコードを読み込んで<br>謎解きに挑戦！<br>見事正解した先生にはノベルティをプレゼント！',
            annotation: '※各日で内容・正解は異なります。',
          },
        ],
      };
    },
    computed: {
      formattedIndex() {
        return e => {
          const n = e + 1;
          return n > 9 ? String(n) : '0' + n;
        };
      },
      formatHeaderText() {
        return e => e.replace(/\n/g, '<br>');
      },
    },
    methods: {
      mapOpen() {
        window.open(Zr, '_blank');
      },
      openPDF(e) {
        window.open(e, '_blank');
      },
      formattedIndex(e) {
        return e > 9 ? '' : '0' + (e + 1);
      },
    },
  }),
  to =
    '/title-0d8e1080.png',
  no =
    './map-375a60f7.png';
const io = { id: 'Program', class: 'Program ba-three_card card_p' },
  so = p('div', { class: 'ba-three_title' }, [p('img', { src: to })], -1),
  ao = p('img', { src: no }, null, -1),
  ro = [ao],
  oo = p('i', { class: 'iconfont icon-tianchongjiantou' }, null, -1),
  lo = { class: 's-style' },
  uo = ['innerHTML'],
  co = { class: 'flex items-center' },
  fo = ['onClick'],
  po = ['src'],
  ho = { key: 0, class: 'item_left' },
  mo = ['src'],
  vo = { class: 'item_right' },
  go = ['innerHTML'],
  _o = ['innerHTML'];
function yo(e, n, t, i, s, a) {
  const o = B('a-collapse-panel'),
    l = B('a-collapse');
  return (
    S(),
    w('div', io, [
      so,
      p(
        'div',
        {
          class: 'program_banner bnt cursor_hover hoverUpAnime',
          onClick: n[0] || (n[0] = (...r) => e.mapOpen && e.mapOpen(...r)),
        },
        ro
      ),
      z(
        l,
        {
          activeKey: e.activeKey,
          'onUpdate:activeKey': n[1] || (n[1] = r => (e.activeKey = r)),
          ghost: '',
          class: 'collapse_two',
        },
        {
          expandIcon: Q(({ isActive: r }) => [oo]),
          default: Q(() => [
            (S(!0),
            w(
              F,
              null,
              W(
                e.programList,
                (r, d) => (
                  S(),
                  ke(
                    o,
                    { key: d + 1 },
                    {
                      header: Q(() => [
                        p('span', null, k(e.formattedIndex(d)), 1),
                        p('s', lo, k(r.headerDEL), 1),
                        p('span', { innerHTML: r.header }, null, 8, uo),
                      ]),
                      default: Q(() => [
                        p('div', co, [
                          r.image && r.pdfLink
                            ? (S(),
                              w(
                                'a',
                                {
                                  key: 0,
                                  class: 'item_left cursor_hover hoverUpAnime',
                                  onClick: u => e.openPDF(r.pdfLink),
                                },
                                [
                                  p(
                                    'img',
                                    { src: r.image, alt: 'Image' },
                                    null,
                                    8,
                                    po
                                  ),
                                ],
                                8,
                                fo
                              ))
                            : (S(),
                              w(
                                F,
                                { key: 1 },
                                [
                                  r.image
                                    ? (S(),
                                      w('div', ho, [
                                        p(
                                          'img',
                                          { src: r.image, alt: 'Image' },
                                          null,
                                          8,
                                          mo
                                        ),
                                      ]))
                                    : H('', !0),
                                ],
                                64
                              )),
                          p('div', vo, [
                            p('div', { innerHTML: r.content }, null, 8, go),
                            r.annotation
                              ? (S(),
                                w(
                                  'span',
                                  { key: 0, innerHTML: r.annotation },
                                  null,
                                  8,
                                  _o
                                ))
                              : H('', !0),
                          ]),
                        ]),
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
        ['activeKey']
      ),
    ])
  );
}
const bo = X(eo, [['render', yo]]),
  So = Y({
    name: 'Stage',
    props: { isPC: Boolean },
    data() {
      return {
        timeList: [
          '10:00',
          '10:15',
          '10:30',
          '10:45',
          '11:00',
          '11:15',
          '11:30',
          '11:45',
          '12:00',
          '12:15',
          '12:30',
          '12:45',
          '13:00',
          '13:15',
          '13:30',
          '13:45',
          '14:00',
          '14:15',
          '14:30',
          '14:45',
          '15:00',
          '15:15',
          '15:30',
          '15:45',
          '16:00',
          '16:15',
          '16:30',
          '16:45',
          '17:00',
          '17:15',
          '17:30',
          '17:45',
          '18:00',
        ],
        stageTable: [
          [
            {
              time: '10:00 ~ 11:00',
              name: 'ブルアカふぇす！すたーと！',
              type: [
                '坂巻学(MC)',
                '愛原ありさ',
                '乾夏寧',
                '貝原怜奈',
                '後藤彩佐',
                '白砂沙帆',
                '鷲見友美ジェナ',
                '高川みな',
                '市来光弘',
                '高塚智人',
              ],
              intro: 'ブルアカふぇす！の開催を記念したオープニングステージ！',
              hint: '当日自由席',
            },
            { placeholder: !0 },
            {
              time: '11:30 ~ 13:00',
              name: 'みんなで振り返ろう！ブルアカすとーりー！',
              type: [
                '坂巻学(MC)',
                '石上静香',
                '乾夏寧',
                '貝原怜奈',
                '後藤彩佐',
                '白砂沙帆',
                '田中美海',
                '種田梨沙',
                '寺澤百花',
                '友永朱音',
                '本渡楓',
                '三浦千幸',
              ],
              intro:
                'メインストーリーVol.1～Vol.4と最終編の内容<br/>をみんなで振り返ります！',
              zhuyi:
                '※このプログラムではメインストーリー最終編までのネタバレが<br/>含まれる可能性がございます。あらかじめご了承ください。',
              hint: '当日自由席',
            },
            { placeholder: !0 },
            {
              time: '13:45 ~ 15:15',
              name: 'ブルアカふぇす！スペシャルDJステージ！Day1',
              type: ['ミツキヨ', 'KARUT', 'Nor'],
              intro:
                '「ブルーアーカイブ」のゲーム内BGMを作曲している3名の作曲家による、ブルアカの楽曲のみで構成されたスペシャルDJステージ！',
              hint: '指定席（事前抽選の当選者のみ）　',
            },
            { placeholder: !0 },
            {
              time: '16:00 ~ 18:00',
              name: 'ブルアカらいぶ！さーどあにばSP！Day1',
              type: [
                '坂巻学(MC)',
                '愛原ありさ',
                '石上静香',
                '石飛恵里花',
                '乾夏寧',
                '貝原怜奈',
                '後藤彩佐',
                '白砂沙帆',
                '鷲見友美ジェナ',
                '高川みな',
                '寺澤百花',
                '市来光弘',
                '高塚智人',
              ],
              intro: '3周年に関するゲーム外の最新情報を中心にお届け！',
              hint: '当日自由席　',
            },
          ],
          [
            {
              time: '10:00 ~ 11:30',
              name: '計算通り完璧ー♪数字から見るブルーアーカイブ！',
              type: [
                '坂巻学(MC)',
                '愛原ありさ',
                '石飛恵里花',
                '乾夏寧',
                '後藤彩佐',
                '白砂沙帆',
                '鷲見友美ジェナ',
                '春花らん',
                '市来光弘',
                '高塚智人',
              ],
              intro:
                'さまざまなデータからブルアカの3年間を振り返るコーナー！<br>＆<br>会場の様子を生中継でお届けします！',
              hint: '当日自由席',
            },
            {
              time: '11:50 ~ 13:00',
              name: '先生、僕たちにもお時間いただけますか？<br>＆ブルアカ開発潜入レポート！',
              type: ['坂巻学(MC)', '市来光弘', '高塚智人', '赤羽根健治'],
              intro:
                'ブルアカ大好きな男性声優たちがお届けする、<br>ブルアカ愛溢れるトークステージ！<br>＆<br>「ブルーアーカイブ」の開発をおこなう<br>NEXON Games社に潜入して、開発現場の最前線をレポート！',
              hint: '当日自由席',
            },
            { placeholder: !0 },
            {
              time: '13:45 ~ 15:15',
              name: 'ブルアカふぇす！スペシャルDJステージ！Day2',
              type: ['ミツキヨ', 'KARUT', 'Nor'],
              intro:
                '「ブルーアーカイブ」のゲーム内BGMを作曲している3名の作曲家による、ブルアカの楽曲のみで構成されたスペシャルDJステージ！',
              hint: '指定席（事前抽選の当選者のみ）',
            },
            { placeholder: !0 },
            {
              time: '16:00 ~ 18:00',
              name: 'ブルアカらいぶ！さーどあにばSP！Day2',
              type: [
                '坂巻学(MC)',
                '愛原ありさ',
                '石上静香',
                '乾夏寧',
                '貝原怜奈',
                '後藤彩佐',
                '白砂沙帆',
                '鷲見友美ジェナ',
                '春花らん',
                '市来光弘',
                '高塚智人',
              ],
              intro: '3周年に関するゲーム内外の最新情報をお届けします！',
              hint: '指定席（事前抽選の当選者のみ）　',
            },
          ],
        ],
      };
    },
    setup(e) {
      const n = I(1);
      return {
        currDay: n,
        YouTube: s => {},
        cutDay: s => {
          e.isPC || (n.value = s);
        },
      };
    },
  }),
  wo =
    './title-2df2153b.png';
const To = { id: 'Stage', class: 'Stage container' },
  Eo = p('div', { class: 'title' }, [p('img', { src: wo })], -1),
  Co = { class: 'time-table' },
  xo = ['onClick'],
  $o = { class: 'flex' },
  Mo = { class: 'time-list' },
  Oo = { class: 'stage-table flex' },
  Po = { key: 0 },
  Lo = { class: 'time' },
  Io = ['innerHTML'],
  ko = { class: 'type' },
  Ao = p('div', null, '出演者', -1),
  Do = { class: 'row' },
  No = ['innerHTML'],
  Bo = ['innerHTML'],
  jo = ['innerHTML'],
  Fo = { class: 'hint' },
  Ro = p('span', null, '【座席観覧】：', -1);
function zo(e, n, t, i, s, a) {
  return (
    S(),
    w('div', To, [
      Eo,
      p('div', Co, [
        (S(),
        w(
          F,
          null,
          W(2, o =>
            p(
              'div',
              {
                onClick: l => e.cutDay(o),
                class: te(
                  `day${o} ${e.isPC ? '' : `${e.currDay === o ? '' : 'dayOn'}`}`
                ),
              },
              [p('span', null, 'Day ' + k(o), 1)],
              10,
              xo
            )
          ),
          64
        )),
        p('div', $o, [
          p('ul', Mo, [
            (S(!0),
            w(
              F,
              null,
              W(e.timeList, o => (S(), w('li', { key: o }, k(o), 1))),
              128
            )),
          ]),
          p('div', Oo, [
            (S(!0),
            w(
              F,
              null,
              W(
                e.stageTable,
                (o, l) => (
                  S(),
                  w(
                    'div',
                    {
                      class: te(`stage-table_col col${l + 1}`),
                      style: Ke(
                        `${
                          e.isPC
                            ? ''
                            : `display: ${
                                e.currDay === l + 1 ? 'block' : 'none'
                              }`
                        }`
                      ),
                      key: l,
                    },
                    [
                      (S(!0),
                      w(
                        F,
                        null,
                        W(
                          o,
                          (r, d) => (
                            S(),
                            w('div', { class: 'stage-table_item', key: d }, [
                              r != null && r.placeholder
                                ? H('', !0)
                                : (S(),
                                  w('div', Po, [
                                    p('div', Lo, k(r.time), 1),
                                    p(
                                      'div',
                                      { class: 'name', innerHTML: r.name },
                                      null,
                                      8,
                                      Io
                                    ),
                                    p('div', ko, [
                                      Ao,
                                      p('div', Do, [
                                        (S(!0),
                                        w(
                                          F,
                                          null,
                                          W(
                                            r.type,
                                            u => (
                                              S(),
                                              w('span', null, [
                                                p(
                                                  'span',
                                                  {
                                                    class: te({
                                                      small: u.length > 6,
                                                    }),
                                                    innerHTML: u,
                                                  },
                                                  null,
                                                  10,
                                                  No
                                                ),
                                              ])
                                            )
                                          ),
                                          256
                                        )),
                                      ]),
                                    ]),
                                    p(
                                      'div',
                                      { class: 'intro', innerHTML: r.intro },
                                      null,
                                      8,
                                      Bo
                                    ),
                                    p(
                                      'div',
                                      { class: 'zhuyi', innerHTML: r.zhuyi },
                                      null,
                                      8,
                                      jo
                                    ),
                                    p('div', Fo, [Ro, q(' ' + k(r.hint), 1)]),
                                  ])),
                            ])
                          )
                        ),
                        128
                      )),
                    ],
                    6
                  )
                )
              ),
              128
            )),
          ]),
        ]),
      ]),
    ])
  );
}
const Ho = X(So, [['render', zo]]),
  Wo =
    './cast1-ffd3dabf.png',
  Vo =
    './cast2-5e31f1d3.png',
  Go =
    './cast3-5bacf680.png',
  Yo =
    './cast4-07bc97c3.png',
  Xo =
    './cast5-2ad4e8c3.png',
  qo =
    './cast6-69cb7464.png',
  Uo =
    './cast7-84ebf84c.png',
  Ko =
    './cast8-59978858.png',
  Qo =
    './cast9-ea881328.png',
  Zo =
    './cast10-cbdc8a84.png',
  Jo =
    './cast11-7256302d.png',
  el =
    './cast12-9ea92c6d.png',
  tl =
    './cast13-94aeebde.png',
  nl =
    './cast14-07099599.png',
  il =
    './cast15-bee73ab2.png',
  sl =
    './cast16-71f37314.png',
  al =
    './cast17-3ef78ece.png',
  rl =
    './cast18-cd14a0e9.png',
  ol =
    './cast19-01ccb442.png',
  ll =
    './cast20-923f2fc2.png',
  dl =
    './cast21-218ca0cd.png',
  ul =
    './cast22-43fac92c.png',
  cl =
    './cast23-aaf422cf.png',
  fl = Y({
    name: 'Role',
    data() {
      return {
        roleList: [
          { image: il, name: '愛原 ありさ' },
          { image: Qo, name: '石上 静香' },
          { image: dl, name: '石飛 恵里花' },
          { image: Ko, name: '乾 夏寧' },
          { image: nl, name: '貝原 怜奈' },
          { image: Xo, name: '後藤 彩佐' },
          { image: sl, name: '鷲見 友美ジェナ' },
          { image: Yo, name: '白砂 沙帆' },
          { image: Zo, name: '高川 みな' },
          { image: cl, name: '田中 美海' },
          { image: al, name: '種田 梨沙' },
          { image: qo, name: '寺澤 百花' },
          { image: rl, name: '友永 朱音' },
          { image: Uo, name: '春花 らん' },
          { image: ol, name: '本渡 楓' },
          { image: ul, name: '三浦 千幸' },
          { image: Wo, name: '坂巻 学' },
          { image: Vo, name: '市来 光弘' },
          { image: Go, name: '高塚 智人' },
          { image: ll, name: '赤羽根 健治' },
          { image: tl, name: 'ミツキヨ' },
          { image: el, name: 'KARUT' },
          { image: Jo, name: 'Nor' },
        ],
      };
    },
  }),
  pl =
    './title-3778fc44.png';
const hl = { id: 'Role', class: 'Role ba-three_card' },
  ml = p('div', { class: 'ba-three_title' }, [p('img', { src: pl })], -1),
  vl = { class: 'role-content' },
  gl = { class: 'row' },
  _l = { class: 'item_top' },
  yl = ['src'],
  bl = { class: 'name' },
  Sl = p('div', { class: 'ba-three_annotation' }, '※順不同/敬称略', -1);
function wl(e, n, t, i, s, a) {
  return (
    S(),
    w('div', hl, [
      ml,
      p('div', vl, [
        p('ul', gl, [
          (S(!0),
          w(
            F,
            null,
            W(
              e.roleList,
              (o, l) => (
                S(),
                w('li', { key: l }, [
                  p('div', _l, [
                    p('div', null, [p('img', { src: o.image }, null, 8, yl)]),
                  ]),
                  p('div', bl, k(o.name), 1),
                ])
              )
            ),
            128
          )),
        ]),
        Sl,
      ]),
    ])
  );
}
const Tl = X(fl, [['render', wl]]),
  El = Y({
    name: 'Ticket',
    props: { isPC: Boolean },
    data() {
      return {
        ticketList: [
          {
            title: '入場券',
            activity: '一般先着',
            price: '5,000',
            gratis: !1,
            apply: '2023/12/20(水)20:00 ～ なくなり次第終了',
            start: '公演日の3日前より発券可能',
            notice: [
              '※お一人様、1公演につき4枚までお申込み可能です。',
              '※入場は、ファストチケットをお持ちの方がご入場した後、先着順でのご入場となります。',
            ],
            path: 'https://eplus.jp/bluearchive-fes/',
          },
          {
            title: 'お時間あげるよ券',
            activity: 'VR施策参加券',
            price: '1,000',
            gratis: !1,
            apply: '2023/12/20(水)20:00～2024/1/9(火)23:59',
            announce: '2024/1/12(金)13:00以降',
            pay: '2024/1/12(金)13:00～1/14(日)21:00',
            start: '公演日の3日前より発券可能',
            notice: [
              '※お時間あげるよ券のみでは会場内に入場することができません。',
              '　必ず入場券もお申込みください。',
              '　お時間あげるよ券のみで当選することはございません。',
              '※お時間あげるよ券は入場券をお申し込みされたご本人様がお申込みください。',
              '　同行者様からのお申込みは無効になります。',
              '※入場券をお申込みされた公演日と、同じ公演日である必要があります',
              '※入場券とお時間あげるよ券で登録する同行者様のお名前は、',
              '　同じお名前である必要があります。',
              '※入場券をお申込みされた枚数以上で、お時間あげるよ券をお申込みされた場合は無効となります。',
              '※VR機器を使用するため、12歳以下のお客様の参加はお断りさせていただきます。',
            ],
            path: 'https://eplus.jp/bluearchive-fes/vr/',
          },
          {
            title: 'ステージ着席観覧券',
            price: '無料',
            gratis: !0,
            apply: '2023/11/28(火)20:00～12/4(月)23:59',
            announce: '2023/12/7(木)13:00以降',
            start: '公演日の3日前より発券可能',
            notice: [
              '※ステージ着席観覧券のみでは会場へ入場することができません。',
              '　入場券をご購入された方のみ、ステージ観覧券をお申込みください。',
              '※入場券をお申込みされたご本人様がお申込みください。',
              '　同行者様からのお申込みは無効になります。',
              '※ご購入された入場券の枚数と、同じ枚数でお申込みください。',
              '　枚数が異なる場合は無効となります。',
              '※ご購入された入場券の公演日と、同じ公演日のステージ観覧券をお申込みください。',
              '　公演日が異なる場合は無効となります。',
            ],
            path: 'https://eplus.jp/bluearchive-fes/stage/',
          },
          {
            title: 'ファストチケット',
            price: '1,000',
            gratis: !1,
            apply: '2023/12/7(木)20:00～12/13(水)23:59',
            announce: '2023/12/16(土)13:00以降',
            pay: '2023/12/16(土)13:00～12/18(月)21:00',
            start: '公演日の3日前より発券可能',
            notice: [
              '※ファストチケットのみでは会場へ入場することができません。',
              '　入場券をご購入された方のみ、ファストチケットお申込みが有効となります。',
              '※入場券をお申込みされたご本人様がお申込みください。',
              '　同行者様からのお申込みは無効になります。',
              '※ご購入された入場券の公演日と、同じ公演日のファストチケットをお申込みください。',
              '　公演日が異なる場合は無効となります。',
              '※入場券をお申込みされた枚数以上で、ファストチケットをお申込みされた場合は無効となります。',
              '※入場は、チケットに記載の整理番号順でのご案内となります。',
            ],
            path: 'https://eplus.jp/bluearchive-fes/fast/',
          },
        ],
      };
    },
    setup(e) {
      return {
        toTicketItem: t => {
          open(t.path);
        },
      };
    },
  }),
  Cl =
    './title-1061fe62.png';
const xl = { id: 'Ticket', class: 'Ticket ba-three_card' },
  $l = { class: 'card_p' },
  Ml = p('div', { class: 'ba-three_title' }, [p('img', { src: Cl })], -1),
  Ol = ['onClick'],
  Pl = { class: 'ticket_item cursor_hover flex items-center' },
  Ll = { class: 'left' },
  Il = { class: 'item-title flex items-end' },
  kl = { key: 0 },
  Al = { class: 'price flex items-end justify-center' },
  Dl = { key: 0 },
  Nl = { key: 1, class: 'item-p' },
  Bl = { key: 0 },
  jl = { key: 1 },
  Fl = { key: 2, class: 'ba-three_annotation' },
  Rl = p(
    'div',
    { class: 'right' },
    [p('span', null, '販売サイト'), p('i', { class: 'iconfont icon-ticket' })],
    -1
  ),
  zl = { key: 0, class: 'item-p' },
  Hl = { key: 0 },
  Wl = { key: 1 },
  Vl = { key: 2, class: 'ba-three_annotation' },
  Gl = { class: 'notice' },
  Yl = p('div', null, '注意事項', -1);
function Xl(e, n, t, i, s, a) {
  return (
    S(),
    w('div', xl, [
      p('div', $l, [
        Ml,
        p('ul', null, [
          (S(!0),
          w(
            F,
            null,
            W(
              e.ticketList,
              (o, l) => (
                S(),
                w(
                  'li',
                  { key: l, onClick: r => e.toTicketItem(o) },
                  [
                    p('div', Pl, [
                      p('div', Ll, [
                        p('div', Il, k(o.title), 1),
                        o.activity
                          ? (S(), w('span', kl, '(' + k(o.activity) + ')', 1))
                          : H('', !0),
                        p('div', Al, [
                          p('div', null, k(o.price), 1),
                          o.gratis
                            ? H('', !0)
                            : (S(), w('span', Dl, '円（税込）')),
                        ]),
                        e.isPC
                          ? (S(),
                            w('div', Nl, [
                              p('p', null, [
                                q('申込期間 :'),
                                p('span', null, k(o.apply), 1),
                              ]),
                              o != null && o.announce
                                ? (S(),
                                  w('p', Bl, [
                                    q('当落発表 :'),
                                    p('span', null, k(o.announce), 1),
                                  ]))
                                : H('', !0),
                              o != null && o.pay
                                ? (S(),
                                  w('p', jl, [
                                    q('入金期間 :'),
                                    p('span', null, k(o.pay), 1),
                                  ]))
                                : H('', !0),
                              o != null && o.annotation
                                ? (S(), w('p', Fl, k(o.annotation), 1))
                                : H('', !0),
                              p('p', null, [
                                q('発券開始 :'),
                                p('span', null, k(o.start), 1),
                              ]),
                            ]))
                          : H('', !0),
                      ]),
                      Rl,
                    ]),
                    e.isPC
                      ? H('', !0)
                      : (S(),
                        w('div', zl, [
                          p('p', null, [
                            q('申込期間 :'),
                            p('span', null, k(o.apply), 1),
                          ]),
                          o != null && o.announce
                            ? (S(),
                              w('p', Hl, [
                                q('当落発表 :'),
                                p('span', null, k(o.announce), 1),
                              ]))
                            : H('', !0),
                          o != null && o.pay
                            ? (S(),
                              w('p', Wl, [
                                q('入金期間 :'),
                                p('span', null, k(o.pay), 1),
                              ]))
                            : H('', !0),
                          o != null && o.annotation
                            ? (S(), w('p', Vl, k(o.annotation), 1))
                            : H('', !0),
                          p('p', null, [
                            q('発券開始 :'),
                            p('span', null, k(o.start), 1),
                          ]),
                        ])),
                    p('div', Gl, [
                      Yl,
                      (S(!0),
                      w(
                        F,
                        null,
                        W(
                          o.notice,
                          (r, d) => (S(), w('span', { key: d }, k(r), 1))
                        ),
                        128
                      )),
                    ]),
                  ],
                  8,
                  Ol
                )
              )
            ),
            128
          )),
        ]),
      ]),
    ])
  );
}
const ql = X(El, [['render', Xl]]),
  Ul =
    './image1-e0be3310.jpg',
  Kl = Y({
    name: 'TipsPage',
    props: { isPC: Boolean },
    methods: {
      showModal(e) {
        const n = document.createElement('div');
        n.classList.add('modal'),
          (n.innerHTML = `<div class="modal-content"><img src="${e}" alt="放大图片"></div>`),
          document.body.appendChild(n),
          (n.onclick = () => {
            n.remove();
          });
      },
      formatContent(e) {
        return e.replace(
          /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g,
          '<a href="mailto:$1">$1</a>'
        );
      },
    },
    data() {
      return {
        activeKey: 1,
        tipsList: [
          {
            header: 'イベント全体について',
            content: [
              '・天災、不慮の事故など、そのほかやむを得ない事情により、',
              '　イベントやステージの公演内容・出演者等が予告なく変更・中止となる可能性がございます。',
              '　あらかじめご了承ください。',
              '・天候や交通機関の遅れにより、会場にたどり着けない場合や到着が遅れて希望のイベントに間に合わない場合でも、',
              '　主催者は一切責任を負いません。',
              '・ご来場に関わる費用は、すべて来場者の負担となります。',
              '・ご来場の際は公共交通機関をご利用ください。イベント専用駐車場はございません。',
              '・会場および会場付近では、他のお客様や近隣の方のご迷惑となるような行為はお控えください。',
              '・車いすなど、ご来場に付き添いが必要と判断される場合は必ず介助者同伴の上、ご来場ください。',
              '　（介助者も入場券は必要です）',
              '・会場内に手荷物預かり所はございません。',
              '・イベントの進行を妨げる行為や他のお客様にご迷惑が及ぶ行為を発見した場合は、即時ご退場いただきます。',
              '・会場内ではスタッフの指示に従ってください。スタッフの指示に従わない場合には、ご退場していただく場合がございます。',
              '・万が一、スタッフの指示に従わず、事故、事件などが発生した場合、主催者側は一切の責任を負いかねます。',
              '・他人に迷惑となる行為（会場内を走る・押し合うなどの行為、列への割り込み、トイレ・通路での着替え、',
              '　大人数でのスペース占拠、物を振り回す、など）や、物品の持ち込みはできません。',
              '・事故や混乱防止のため、通路での座り込みなどはスタッフからお声がけさせて頂くことがございます。',
              '・お客様同士のトラブルが発生した場合、すべて当事者間において処理・解決していただくものとし、',
              '　主催者側は一切の責任を負いかねます。',
              '・不審物・不審者を見かけた場合は、お近くのスタッフまでお知らせください。',
              '・会場内では各種取材・生放送を行うため、会場内のお客さまも映り込む場合があります。',
              '・撮影された写真や動画は主催者による広告物、掲載物、映像などに使用される可能性もございます。',
              '　あらかじめご了承ください。',
              '・すべてのステージ・プログラム・展示内容はやむを得ない事情でプログラムの内容・出演者・開演時間を',
              '　変更・中止する場合があります。なお、変更・中止に際し、チケットの払い戻しは行いません。',
            ],
          },
          {
            header: 'ご入場について',
            content: [
              '・ご入場についてはチケットが必要です。チケットをお持ちでない場合は入場できません。',
              '・当日はご本人様確認をさせていただく場合がございます。顔写真付き身分証明書、',
              '　または顔写真入りの学生証をご準備の上、ご来場ください。',
              '　（顔写真付き身分証明書：免許証、パスポート、在留カード、障がい者手帳、顔写真付きクレジットカード、',
              '　顔写真付き住民基本台帳カード、マイナンバーカード）',
              '・未就学児のご入場については、同伴される保護者1名様につき、未就学児1名様までご入場いただけます。',
              '・未就学児への入場特典及び、景品等のお渡しはございませんので、あらかじめご了承ください。',
              '・当日会場は大変な混雑が予想されますので、保護者の方はお子様から目を離さないようお願いいたします。',
              '・未就学児のみでの入場はできません。保護者の方が同伴の上、ご来場いただくようお願いいたします。',
              '・小学生以上のご参加は可能ですが、各都道府県の条例に違反しない時間帯のご参加となるようご注意ください。',
              '　また、未成年の方は必ず保護者の許可を得た上でご来場ください。',
              '・車いすなど、ご来場の際に付き添いが必要と判断される場合は、必ず介助者同伴のうえ、ご来場ください。',
              '　また、ご案内をスムーズに行えますよう恐れ入りますが、当日、受付スタッフまでお声がけください。',
              '・当日の状況により、入場にお時間を要する場合もございます。',
              '・ペットを連れてのご入場はお断りいたします。',
              '・本イベントは再入場可能となります。',
              '・お客様の安全を目的とした手荷物検査を入場時に実施いたします。',
              '　入場までにお時間がかかる場合もございます。',
              '　お時間には余裕をもってご来場いただきますようお願いいたします。',
              '・基本的な持ち込み禁止物は、下記をご参照ください。',
              '　また、持ち込み禁止と判断された場合は持ち込み禁止物をお預かりさせていただきます。',
              '　なお、スタッフの指示に従っていただけない場合は、ご入場をお断りさせていただく場合がございます。',
              '＜持ち込み禁止物＞',
              '  　①刀剣類、銃器類',
              '  　　※コスプレにて使用する模造武器に関しては、130cm以上のものは持込禁止です',
              '  　②刃物類（はさみ、カミソリ、カッター、ナイフ 等）',
              '  　　※はさみ、カミソリで、刃渡り5.5㎝未満の場合は規則の対象ではありません',
              '  　③毒物・薬物・その他有害物質',
              '  　④火器類、発煙筒、爆竹、花火、爆発物、火薬、照明弾、油類、その他危険物',
              '  　⑤ビン・カン類',
              '  　　※ペットボトルなどの液体入りの容器については、中身を確認させていただく場合がございます。',
              '  　⑥酒類',
              '  　⑦30cm以上を超えるサイリウム・ペンライト',
              '  　　※市販製品より光量を増した改造品、および市販品であってもそれに類する誘導灯やその他の照明器具・光源製品',
              '  　⑧乗ることが出来るもの（自転車、ローラーブレード、ローラースケート、スケートボードなど）',
              '  　⑨ドローン・ラジコン',
              '  　⑩その他主催者が危険と判断する物',
              '  　　※持ち込み禁止物は今後内容が予告なく変更・追加される場合がございます。',
              '・開場前は屋外でお待ちいただく場合がございます。',
              '　雨天でも屋外に並んでいただく場合がございますので、あらかじめ雨具など各自でご用意ください。',
              '・障がい者割引はございません。',
              '　また、障がい者専用の入場口は設けておりません。車椅子の方も含めて一般の方と同様ご入場ください。',
              '・徹夜、始発前からの入場待ち等は禁止とさせていただきます。',
              '　該当する行為によりトラブルが発生した場合、主催者は一切の責任を負いません。',
            ],
          },
          {
            header: 'チケットについて',
            content: [
              '・チケット1枚につき、お客様1名様のみご入場いただけます。',
              '　1月20日(土)の入場券、21日(日)の入場券と分かれております。',
              '・入場券は、お客様1名様で4枚までお申し込み可能となります。',
              '・電子チケットのみの発行となり、紙チケットの発行は行いません。',
              '・当日券の販売はございません。',
              '・入場券の転売や譲渡は固くお断りいたします。該当する行為が発覚した場合は法的措置を取らせていただくことや、',
              '　今後のイベントへの参加をお断りすることがございます。',
              '・入場券の紛失、盗難などがあった場合など、いかなる場合においても再発行はいたしません。',
              '・リセールはございません。予めご了承ください。',
              '・お客様都合での払戻しは一切承ることができません。',
            ],
          },
          {
            header: 'ステージについて',
            content: [
              '・入場券をお持ちの方はどなたでも観覧可能なステージです。',
              ' 　着席でご観覧になりたい場合は、当日先着順でのご案内となります。',
              ' 　立ち見スペースのご用意もありますが、スペースには限りがございます。',
              ' 　※一部、事前抽選制のプログラムがございますので、詳細はステージ概要欄をご確認ください。',
              '・プログラムごとにお客様の入れ替えを行います。',
              '・客席には車椅子専用のスペースを設置します。場所等は入場の際に係員にお尋ねください。',
              '・当日の混雑状況により整理券を配布する場合がございます。',
              '　また、待機列の形成を中断・中止する場合がございます。',
              '・演出、照明、お客様の安全や視界の妨げになるものの使用は禁止です。',
              '　発覚した際はスタッフがお声がけさせていただきます。',
              '・ステージでの録音・撮影等は一切禁止です。',
              '　そのような行為が発見された場合、退場をお願いする場合がございます。',
            ],
          },
          {
            header: 'グッズについて',
            content: [
              '・グッズは入場券をお持ちの方のみご購入いただけます。',
              '・クレジットカード、電子マネー、QRコード決済等、利用可能です。',
              '　利用可能項目については、以下ご参照ください。',
              { image: Ul },
              '・商品によっては売り切れとなる場合がございます。各商品は1日目、2日目ともに販売いたします。',
              '・商品によっては購入制限が決まっております。購入制限数以上はお買い求めいただけません。',
              '・転売目的でのご購入はご遠慮ください。',
              '・年末年始の物流の都合上、会場で販売する一部のグッズが変更され、通販のみとなる可能性があります。',
              '・当日の混雑状況により整理券を配布する場合がございます。また、待機列の形成を中断・中止する場合がございます。',
              '・お買い求めいただいた商品の内容や数量、お釣りの金額などは必ずその場でご確認ください。',
              '　物販エリア退出後の不備などは対応いたしかねます。',
              '・グッズの完売状況などに関しては、X(旧Twitter)アカウント「Yostar情報局」（＠yostarjp_info）より発信いたします。',
              '・会場限定商品と一部商品を除き、事後通販を実施予定です。詳細はグッズ概要をご確認ください。',
            ],
          },
          {
            header: '取材について',
            content: [
              '取材をご希望の方は',
              '<a href>info_bluearchivefes2024@yostar.co.jp</a>',
              'までお問い合わせください。',
            ],
          },
          {
            header: 'その他',
            content: [
              '・会場内のアトラクションは、当日の混雑状況により整理券を配布する場合がございます。',
              '　また、待機列の形成を中断・中止する場合がございます。',
              '・会場内で配布予定の各種ノベルティについては、数量に限りがございます。',
              '　なくなり次第配布終了とさせていただきます。',
              '・入場特典はいかなる場合においても再配布はいたしません。',
              '・入場特典や各種ノベルティの転売や譲渡は固くお断りいたします。',
              '・プレゼントやフラワースタンド（祝い花）については受け付けておりません。',
              '・一部の展示品や映像およびステージの撮影はできません。',
              '　なお、撮影禁止物の撮影を発見した場合は、データの消去をさせていただき、',
              '　悪質な場合は機材の没収をさせていただく場合がございます。',
              '・飲酒してのご入場、及び会場内へのアルコール類の持ち込み、場内での飲酒は禁止です。',
              '・出演者の入り待ち、出待ちは禁止です。',
            ],
          },
        ],
      };
    },
  }),
  Ql =
    './title-8b44dce0.png',
  Zl =
    './title_m-6589482b.png';
const Jl = { id: 'TipsPage', class: 'TipsPage ba-three_card card_p' },
  ed = { class: 'ba-three_title' },
  td = { key: 0, src: Ql },
  nd = { key: 1, src: Zl },
  id = p('i', { class: 'iconfont icon-tianchongjiantou' }, null, -1),
  sd = ['innerHTML'],
  ad = ['onClick', 'src'];
function rd(e, n, t, i, s, a) {
  const o = B('a-collapse-panel'),
    l = B('a-collapse');
  return (
    S(),
    w('div', Jl, [
      p('div', ed, [e.isPC ? (S(), w('img', td)) : (S(), w('img', nd))]),
      z(
        l,
        {
          activeKey: e.activeKey,
          'onUpdate:activeKey': n[0] || (n[0] = r => (e.activeKey = r)),
          ghost: '',
          class: 'collapse_two',
        },
        {
          expandIcon: Q(({ isActive: r }) => [id]),
          default: Q(() => [
            (S(!0),
            w(
              F,
              null,
              W(
                e.tipsList,
                (r, d) => (
                  S(),
                  ke(
                    o,
                    { key: d + 1, header: r.header },
                    {
                      default: Q(() => [
                        (S(!0),
                        w(
                          F,
                          null,
                          W(
                            r.content,
                            (u, c) => (
                              S(),
                              w('p', { key: c }, [
                                u.image
                                  ? (S(),
                                    w(
                                      'img',
                                      {
                                        key: 1,
                                        onClick: f => e.showModal(u.image),
                                        src: u.image,
                                      },
                                      null,
                                      8,
                                      ad
                                    ))
                                  : (S(),
                                    w(
                                      'span',
                                      { key: 0, innerHTML: e.formatContent(u) },
                                      null,
                                      8,
                                      sd
                                    )),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['header']
                  )
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ['activeKey']
      ),
    ])
  );
}
const od = X(Kl, [['render', rd]]);
fe.use([js]);
const ld = Y({
  name: 'LanternSlideP',
  props: { isPC: Boolean },
  components: { Swiper: Gt, SwiperSlide: Yt },
  data() {
    return {
      commodityList: [
        {
          id: 8,
          type: 'other',
          image: In,
          name: 'ゲヘナ学園 給食部トラック ミニチュアカー',
          price: '5,000',
          intro: '事後通販の情報は後日公開予定です。',
        },
        {
          id: 12,
          type: 'other',
          image: kn,
          name: 'アリスのロボットキーホルダー',
          price: '3,500',
          intro: '事後通販の情報は後日公開予定です。',
        },
        {
          id: 2,
          type: 'other',
          image: An,
          name: 'Blue Archive 3rd Anniversary ブロマイド',
          price: '500',
          intro: '事後通販の情報は後日公開予定です。',
        },
      ],
    };
  },
  setup() {
    Lt();
    const e = Ze(),
      n = I(0);
    return {
      currIndex: n,
      toCommodityDetails: s => {
        e.push(`/product?id=${s.id}`);
      },
      slideChangeTransitionStart: s => {
        n.value = s == null ? void 0 : s.realIndex;
      },
    };
  },
});
const dd = { class: 'LanternSlide' },
  ud = { key: 0, class: 'LanternSlideP' },
  cd = { class: 'slide_image' },
  fd = ['src'],
  pd = { class: 'slide_title flex items-center justify-between' },
  hd = { class: 'name' },
  md = { class: 'price flex items-end' },
  vd = p('span', null, '（税込）', -1),
  gd = { class: 'slide_details' },
  _d = { class: 'name' },
  yd = { class: 'intro' },
  bd = { class: 'price flex items-end' },
  Sd = p('span', null, '（税込）', -1),
  wd = ['onClick'],
  Td = p('div', null, '詳細の表示', -1),
  Ed = [Td],
  Cd = { key: 1, class: 'LanternSlideM' },
  xd = { class: 'slide_image' },
  $d = ['src'],
  Md = { key: 0, class: 'slide_title' },
  Od = { class: 'name' },
  Pd = { class: 'price flex items-end' },
  Ld = p('span', null, '（税込）', -1),
  Id = { class: 'slide_item_details' },
  kd = { class: 'intro' };
function Ad(e, n, t, i, s, a) {
  const o = B('swiper-slide'),
    l = B('swiper');
  return (
    S(),
    w('div', dd, [
      e.isPC
        ? (S(),
          w('div', ud, [
            z(
              l,
              {
                'slides-per-view': '3',
                'space-between': 34,
                loop: '',
                speed: 1e3,
                centeredSlides: '',
                autoplay: {
                  delay: 2e3,
                  disableOnInteraction: !1,
                  pauseOnMouseEnter: !0,
                },
              },
              {
                default: Q(() => [
                  (S(!0),
                  w(
                    F,
                    null,
                    W(
                      e.commodityList,
                      r => (
                        S(),
                        ke(
                          o,
                          { key: r.id },
                          {
                            default: Q(() => [
                              p('div', cd, [
                                p(
                                  'img',
                                  { src: r.image, alt: '商品图片' },
                                  null,
                                  8,
                                  fd
                                ),
                              ]),
                              p('div', pd, [
                                p('div', hd, k(r.name), 1),
                                p('div', md, [
                                  q(' ￥ ' + k(r.price) + ' ', 1),
                                  vd,
                                ]),
                              ]),
                              p('div', gd, [
                                p('div', _d, k(r.name), 1),
                                p('div', yd, k(r.intro), 1),
                                p('div', bd, [
                                  q(' ￥ ' + k(r.price) + ' ', 1),
                                  Sd,
                                ]),
                                p(
                                  'div',
                                  {
                                    class: 'bnt cursor_hover',
                                    onClick: d => e.toCommodityDetails(r),
                                  },
                                  Ed,
                                  8,
                                  wd
                                ),
                              ]),
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
              }
            ),
          ]))
        : (S(),
          w('div', Cd, [
            z(
              l,
              {
                class: 'swiper-no-swiping',
                'slides-per-view': '5',
                loop: '',
                centeredSlides: '',
                direction: 'vertical',
                speed: 1e3,
                autoplay: {
                  delay: 3e3,
                  disableOnInteraction: !1,
                  pauseOnMouseEnter: !0,
                  reverseDirection: !0,
                },
                onSlideChangeTransitionStart: e.slideChangeTransitionStart,
              },
              {
                default: Q(() => [
                  (S(!0),
                  w(
                    F,
                    null,
                    W(
                      e.commodityList,
                      (r, d) => (
                        S(),
                        ke(
                          o,
                          { key: r.id },
                          {
                            default: Q(() => [
                              p('div', xd, [
                                p(
                                  'img',
                                  { src: r.image, alt: '商品图片' },
                                  null,
                                  8,
                                  $d
                                ),
                              ]),
                              e.currIndex === d
                                ? (S(),
                                  w('div', Md, [
                                    p('div', Od, k(r.name), 1),
                                    p('div', Pd, [
                                      q(' ￥ ' + k(r.price) + ' ', 1),
                                      Ld,
                                    ]),
                                  ]))
                                : H('', !0),
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
              ['onSlideChangeTransitionStart']
            ),
            p('div', Id, [
              p('div', kd, k(e.commodityList[e.currIndex].intro), 1),
              p(
                'div',
                {
                  class: 'bnt',
                  onClick:
                    n[0] ||
                    (n[0] = r =>
                      e.toCommodityDetails(e.commodityList[e.currIndex])),
                },
                '詳細の表示'
              ),
            ]),
          ])),
    ])
  );
}
const Dd = X(ld, [['render', Ad]]),
  Nd = Y({
    name: 'Commodity',
    props: { isPC: Boolean },
    components: { LanternSlide: Dd },
    setup() {
      const e = Ze();
      return {
        toProduct: () => {
          e.push('/product');
        },
      };
    },
  }),
  Bd =
    './title-a0a0b1e1.png',
  jd =
    './yostar1-66d8898e.png',
  Fd =
    './image38-81cd15b1.png',
  Rd =
    './elf-40adffdf.png';
const zd = { id: 'Commodity', class: 'Commodity ba-three_card' },
  Hd = $n(
    '<div class="ba-three_title"><img src="' +
      Bd +
      '"><div class="yostar"><a href="https://shop.yostar.co.jp/products/list?category_id=MTExODQ2ODc=" target="_blank"><img src="' +
      jd +
      '"></a></div></div>',
    1
  ),
  Wd = { class: 'content' },
  Vd = p(
    'div',
    { class: 'additional-content' },
    [
      p('p', null, '会場内でグッズお買い上げにつき1点ショッパーをプレゼント！'),
      p('img', { src: Fd, alt: 'Additional Image', class: 'additional-image' }),
    ],
    -1
  ),
  Gd = { class: 'commodity_bottom flex justify-center' },
  Yd = p('div', { class: 'elf' }, [p('img', { src: Rd })], -1);
function Xd(e, n, t, i, s, a) {
  const o = B('LanternSlide');
  return (
    S(),
    w('div', zd, [
      Hd,
      p('div', Wd, [z(o, { isPC: e.isPC }, null, 8, ['isPC'])]),
      Vd,
      p('div', Gd, [
        p(
          'div',
          {
            class: 'bnt cursor_hover hoverUpAnime',
            onClick:
              n[0] || (n[0] = (...l) => e.toProduct && e.toProduct(...l)),
          },
          '全ての商品'
        ),
        Yd,
      ]),
    ])
  );
}
const qd = X(Nd, [['render', Xd]]),
  Ud = Y({
    name: 'Nav',
    props: { pcNavShow: { type: Boolean, default: !0 } },
    setup(e, { emit: n }) {
      const t = I(!0),
        i = I(!1),
        s = I(!1),
        a = I({ form: 0, to: 0 }),
        o = ct([
          { icon: 'icon-x', url: 'https://twitter.com/Blue_ArchiveJP' },
          {
            icon: 'icon-youtube',
            url: 'https://www.youtube.com/@BlueArchive_JP',
          },
        ]),
        l = ct([
          { label: '活动概要', ID: 'Summary', top: 0 },
          { label: '特别节目', ID: 'Program', top: 0 },
          { label: '节目安排', ID: 'Stage', top: 0 },
          { label: '嘉宾', ID: 'Role', top: 0 },
          { label: '门票', ID: 'Ticket', top: 0 },
          { label: '周边', ID: 'Commodity', top: 0 },
          { label: '注意事项', ID: 'TipsPage', top: 0 },
        ]),
        r = I(!1),
        d = () => {
          i.value = !i.value;
        },
        u = () => {
          l.forEach((g, v) => {
            let y = document.getElementById(g.ID);
            g.top = (y == null ? void 0 : y.offsetTop) - 100;
          });
        },
        c = g => {
          u(), window.scrollTo({ top: g.top, behavior: 'smooth' });
        },
        f = g => {
          window.open(g, 'blank');
        },
        m = () => {
          (r.value = !r.value), n('kvVenueInformation', r.value);
        },
        h = () => {
          let g = document.body.offsetWidth;
          (t.value = !(g <= 750)), u();
        },
        b = () => {
          let g = document.documentElement.scrollTop;
          (a.value.to = g),
            (s.value = g > -110),
            l.forEach((v, y) => {
              g >= v.top && (a.value.form = l[y].top);
            }),
            t.value &&
              (g > _ && g > 500
                ? (document.querySelector('.pc').classList.remove('DownMove'),
                  document.querySelector('.pc').classList.add('UpMove'))
                : (document.querySelector('.pc').classList.remove('UpMove'),
                  document.querySelector('.pc').classList.add('DownMove'))),
            (_ = g);
        };
      let _ = 0;
      return (
        ve(() => {
          setTimeout(() => {
            u(), (a.value.to = document.documentElement.scrollTop);
          }, 1e3),
            (t.value = !(document.body.offsetWidth <= 750)),
            window.addEventListener('resize', h),
            window.addEventListener('scroll', b);
        }),
        It(() => {
          window.removeEventListener('resize', h),
            window.removeEventListener('scroll', b);
        }),
        {
          isPC: t,
          isNavList: i,
          scrollTop: a,
          pcNavShow: s,
          twitterYoutube: o,
          NavList: l,
          mobileNavShow: r,
          onNavList: d,
          navTarget: c,
          TwitterYoutube: f,
          showMobileNav: m,
        }
      );
    },
  });
const Kd = { class: 'Nav' },
  Qd = { key: 0 },
  Zd = { class: 'pc flex justify-between items-center' },
  Jd = p('div', { class: 'logo' }, [p('img', { src: Pt })], -1),
  eu = { class: 'flex items-center justify-end' },
  tu = ['onClick'],
  nu = ['onClick'],
  iu = p('div', { class: 'logo' }, [p('img', { src: mn })], -1),
  su = ['onClick'];
function au(e, n, t, i, s, a) {
  return (
    S(),
    w('div', Kd, [
      e.isPC
        ? (S(),
          w('div', Qd, [
            Mn(
              p(
                'div',
                Zd,
                [
                  Jd,
                  p('ul', eu, [
                    (S(!0),
                    w(
                      F,
                      null,
                      W(
                        e.NavList,
                        o => (
                          S(),
                          w(
                            'li',
                            {
                              key: o.label,
                              onClick: l => e.navTarget(o),
                              class: te(
                                `li_item cursor_hover text-capitalize ${
                                  e.scrollTop.to >= o.top &&
                                  e.scrollTop.form <= o.top
                                    ? 'active'
                                    : ''
                                }`
                              ),
                            },
                            k(o.label),
                            11,
                            tu
                          )
                        )
                      ),
                      128
                    )),
                    (S(!0),
                    w(
                      F,
                      null,
                      W(
                        e.twitterYoutube,
                        o => (
                          S(),
                          w(
                            'li',
                            {
                              key: o.icon,
                              class: 'iconfont twitter_youtube cursor_hover',
                              onClick: l => e.TwitterYoutube(o.url),
                            },
                            [p('i', { class: te(o.icon) }, null, 2)],
                            8,
                            nu
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                512
              ),
              [[On, e.pcNavShow]]
            ),
          ]))
        : (S(),
          w(
            'div',
            {
              key: 1,
              class: te(
                `mobile ${e.mobileNavShow ? 'mobile-show' : 'mobile-hide'} `
              ),
            },
            [
              iu,
              p('ul', null, [
                (S(!0),
                w(
                  F,
                  null,
                  W(
                    e.NavList,
                    o => (
                      S(),
                      w(
                        'li',
                        {
                          key: o.label,
                          onClick: l => e.navTarget(o),
                          class: te(
                            `li_item cursor_hover ${
                              e.scrollTop.to >= o.top &&
                              e.scrollTop.form <= o.top
                                ? 'active'
                                : ''
                            }`
                          ),
                        },
                        k(o.label),
                        11,
                        su
                      )
                    )
                  ),
                  128
                )),
              ]),
              p(
                'div',
                {
                  class: 'icon_bnt cursor_hover',
                  onClick:
                    n[0] ||
                    (n[0] = (...o) => e.showMobileNav && e.showMobileNav(...o)),
                },
                [
                  p(
                    'i',
                    {
                      class: te(
                        `iconfont ${
                          e.mobileNavShow ? 'icon-shouqi' : 'icon-caidan1'
                        }`
                      ),
                    },
                    null,
                    2
                  ),
                ]
              ),
            ],
            2
          )),
    ])
  );
}
const ru = X(Ud, [['render', au]]),
  ou = Y({
    name: 'TicketPerimeter',
    props: { scrollTop: Number },
    setup() {
      const e = I(!1),
        n = Ze();
      return {
        finished: e,
        toNavigate: s => {
          s === 'Perimeter' && n.push('/product');
        },
        toSkip: s => {
          s === 'Ticket' && open('https://eplus.jp/bluearchive-fes/');
        },
      };
    },
  }),
  lu =
    './ticket-1a487817.png',
  du =
    './perimeter-619fd28b.png';
const uu = { style: { animation: 'floatGif 3s infinite' } },
  cu = p('img', { src: lu }, null, -1),
  fu = [cu],
  pu = { style: { animation: 'floatGif 3s infinite' } },
  hu = p('img', { src: du }, null, -1),
  mu = [hu];
function vu(e, n, t, i, s, a) {
  return (
    S(),
    w(
      F,
      null,
      [
        p(
          'div',
          {
            class: 'TicketPerimeter cursor_hover',
            style: Ke(
              `animation: ${
                e.scrollTop ? 'TicketPerimeterUp' : 'TicketPerimeterDown'
              } 1s forwards;`
            ),
          },
          [
            p('div', uu, [
              p(
                'div',
                { onClick: n[0] || (n[0] = o => e.toSkip('Ticket')) },
                fu
              ),
            ]),
          ],
          4
        ),
        p(
          'div',
          {
            class: 'ShopPerimeter cursor_hover',
            style: Ke(
              `animation: ${
                e.scrollTop ? 'TicketPerimeterUp' : 'TicketPerimeterDown'
              } 1s forwards;`
            ),
          },
          [
            p('div', pu, [
              p(
                'div',
                { onClick: n[1] || (n[1] = o => e.toNavigate('Perimeter')) },
                mu
              ),
            ]),
          ],
          4
        ),
      ],
      64
    )
  );
}
const gu = X(ou, [['render', vu]]);
fe.use([Bs]);
const _u = Y({
  name: 'home',
  components: {
    VenueInformation: hn,
    TicketPerimeter: gu,
    BackTop: Pn,
    Footer: Ln,
    Swiper: Gt,
    SwiperSlide: Yt,
    Nav: ru,
    Commodity: qd,
    TipsPage: od,
    Ticket: ql,
    Role: Tl,
    Stage: Ho,
    Program: bo,
    Summary: Xr,
    KV: Dr,
  },
  setup() {
    Lt();
    const e = I(!0);
    I(!0);
    const n = I(),
      t = I(),
      i = I(),
      s = d => {
        i.value = d;
      },
      a = () => {
        let d = document.body.offsetWidth;
        (e.value = !(d <= 750)),
          (t.value = document.documentElement.clientHeight);
      },
      o = () => {
        n.value = document.documentElement.scrollTop;
      },
      l = d => {
        d.touches[0].clientY;
      },
      r = d => {
        d.changedTouches[0].clientY;
      };
    return (
      ve(() => {
        (n.value = document.documentElement.scrollTop),
          (t.value = document.documentElement.clientHeight),
          (e.value = !(document.body.offsetWidth <= 750)),
          window.addEventListener('resize', a),
          window.addEventListener('scroll', o),
          window.addEventListener('touchstart', l),
          window.addEventListener('touchmove', r);
      }),
      It(() => {
        window.removeEventListener('resize', a),
          window.removeEventListener('scroll', o),
          window.removeEventListener('touchstart', l),
          window.removeEventListener('touchmove', r);
      }),
      { isPC: e, scrollTop: n, kvVenueInformation: i, kvVenueInformationFn: s }
    );
  },
});
const yu = { class: 'home', id: 'home' };
function bu(e, n, t, i, s, a) {
  const o = B('Nav'),
    l = B('KV'),
    r = B('Summary'),
    d = B('Program'),
    u = B('Stage'),
    c = B('Role'),
    f = B('Ticket'),
    m = B('Commodity'),
    h = B('tips-page'),
    b = B('ticket-perimeter');
  return (
    S(),
    w('div', yu, [
      z(o, { onKvVenueInformation: e.kvVenueInformationFn }, null, 8, [
        'onKvVenueInformation',
      ]),
      z(
        l,
        { isPC: e.isPC, kvVenueInformation: e.kvVenueInformation },
        null,
        8,
        ['isPC', 'kvVenueInformation']
      ),
      z(r),
      z(d),
      z(u, { isPC: e.isPC }, null, 8, ['isPC']),
      z(c),
      z(f, { isPC: e.isPC }, null, 8, ['isPC']),
      z(m, { isPC: e.isPC }, null, 8, ['isPC']),
      z(h, { isPC: e.isPC }, null, 8, ['isPC']),
      z(b, { scrollTop: e.scrollTop }, null, 8, ['scrollTop']),
    ])
  );
}
const Eu = X(_u, [['render', bu]]);
export { Eu as default };
