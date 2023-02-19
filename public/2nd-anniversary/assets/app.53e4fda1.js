(function (e) {
  function t(t) {
    for (
      var o, i, a = t[0], s = t[1], c = t[2], u = 0, d = [];
      u < a.length;
      u++
    )
      (i = a[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
        (r[i] = 0);
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    m && m(t);
    while (d.length) d.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], o = !0, i = 1; i < n.length; i++) {
        var a = n[i];
        0 !== r[a] && (o = !1);
      }
      o && (l.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var o = {},
    i = { app: 0 },
    r = { app: 0 },
    l = [];
  // e: js filename
  function a(e) {
    return (
      s.p + '/assets/' + e + '.' + { 'chunk-d03f50b6': '2466e6ca' }[e] + '.js'
    );
  }
  function s(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = { 'chunk-d03f50b6': 1 };
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        n[e] &&
        t.push(
          (i[e] = new Promise(function (t, n) {
            for (
              var o =
                  '/assets/' +
                  e +
                  '.' +
                  { 'chunk-d03f50b6': '82eca37c' }[e] +
                  '.css',
                r = s.p + o,
                l = document.getElementsByTagName('link'),
                a = 0;
              a < l.length;
              a++
            ) {
              var c = l[a],
                u = c.getAttribute('data-href') || c.getAttribute('href');
              if ('stylesheet' === c.rel && (u === o || u === r)) return t();
            }
            var d = document.getElementsByTagName('style');
            for (a = 0; a < d.length; a++) {
              (c = d[a]), (u = c.getAttribute('data-href'));
              if (u === o || u === r) return t();
            }
            var m = document.createElement('link');
            (m.rel = 'stylesheet'),
              (m.type = 'text/css'),
              (m.onload = t),
              (m.onerror = function (t) {
                var o = (t && t.target && t.target.src) || r,
                  l = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + o + ')'
                  );
                (l.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (l.request = o),
                  delete i[e],
                  m.parentNode.removeChild(m),
                  n(l);
              }),
              (m.href = r);
            var f = document.getElementsByTagName('head')[0];
            f.appendChild(m);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var o = r[e];
    if (0 !== o)
      if (o) t.push(o[2]);
      else {
        var l = new Promise(function (t, n) {
          o = r[e] = [t, n];
        });
        t.push((o[2] = l));
        var c,
          u = document.createElement('script');
        (u.charset = 'utf-8'),
          (u.timeout = 120),
          s.nc && u.setAttribute('nonce', s.nc),
          (u.src = a(e));
        var d = new Error();
        c = function (t) {
          (u.onerror = u.onload = null), clearTimeout(m);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var o = t && ('load' === t.type ? 'missing' : t.type),
                i = t && t.target && t.target.src;
              (d.message =
                'Loading chunk ' + e + ' failed.\n(' + o + ': ' + i + ')'),
                (d.name = 'ChunkLoadError'),
                (d.type = o),
                (d.request = i),
                n[1](d);
            }
            r[e] = void 0;
          }
        };
        var m = setTimeout(function () {
          c({ type: 'timeout', target: u });
        }, 12e4);
        (u.onerror = u.onload = c), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = o),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          s.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/2nd-anniversary/'),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    u = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var d = 0; d < c.length; d++) t(c[d]);
  var m = u;
  l.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('56d7');
  },
  '151f': function (e, t, n) {},
  '275b': function (e, t, n) {
    'use strict';
    n('151f');
  },
  '56d7': function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n('2b0e'),
      i = function () {
        var e = this,
          t = e._self._c;
        return t(
          'div',
          { attrs: { id: 'app' } },
          [t('Nav'), t('router-view'), t('supporting-base')],
          1
        );
      },
      r = [],
      l = function () {
        var e = this;
        e._self._c;
        return e._m(0);
      },
      a = [
        function () {
          var e = this,
            t = e._self._c;
          return t('div', { staticClass: 'supporting_base' }, [
            t('img', { staticClass: 'light', attrs: { src: n('b448') } }),
          ]);
        },
      ],
      s = {
        name: 'SupportingBase',
        data() {
          return {};
        },
      },
      c = s,
      u = (n('a4af'), n('2877')),
      d = Object(u['a'])(c, l, a, !1, null, null, null),
      m = d.exports,
      f = function () {
        var e = this,
          t = e._self._c;
        return t('div', { staticClass: 'Nav' }, [
          e.isPC
            ? t('div', { staticClass: 'pc row justify-between items-center' }, [
                e._m(0),
                t(
                  'ul',
                  { staticClass: 'row justify-center items-center' },
                  [
                    e._l(e.navList, function (n, o) {
                      return t(
                        'li',
                        {
                          key: o,
                          class:
                            'nav_item ' +
                            (e.activeName === n.name ? 'is-active' : ''),
                          on: { click: t => e.clickItem(t, n, o) },
                        },
                        [
                          n.children
                            ? t(
                                'el-dropdown',
                                { attrs: { placement: 'top' } },
                                [
                                  t(
                                    'span',
                                    { staticClass: 'el-dropdown-link' },
                                    [e._v(' ' + e._s(n.name) + ' ')]
                                  ),
                                  t(
                                    'el-dropdown-menu',
                                    {
                                      staticClass: 'model_name',
                                      attrs: { slot: 'dropdown' },
                                      slot: 'dropdown',
                                    },
                                    e._l(n.children, function (n) {
                                      return t(
                                        'el-dropdown-item',
                                        {
                                          key: n.modelName,
                                          class:
                                            e.modelActiveName === n.modelName
                                              ? 'is-active'
                                              : '',
                                          nativeOn: {
                                            click: function (t) {
                                              return e.$_modelName(n, o);
                                            },
                                          },
                                        },
                                        [e._v(' ' + e._s(n.name) + ' ')]
                                      );
                                    }),
                                    1
                                  ),
                                ],
                                1
                              )
                            : t('div', [e._v(' ' + e._s(n.name) + ' ')]),
                        ],
                        1
                      );
                    }),
                    e.liL
                      ? t('div', {
                          staticClass: 'light',
                          style: `width: ${e.liW}px; left: ${e.liL}px`,
                        })
                      : e._e(),
                    e._l(e.twitterYoutube, function (n) {
                      return t(
                        'li',
                        {
                          key: n.icon,
                          staticClass: 'iconfont twitter_youtube',
                          on: {
                            click: function (t) {
                              return e.$_twitterYoutube(n.url);
                            },
                          },
                        },
                        [t('i', { class: n.icon })]
                      );
                    }),
                  ],
                  2
                ),
              ])
            : t('div', { staticClass: 'mobile' }, [
                t('div', { staticClass: 'row justify-between items-center' }, [
                  t('div', { staticClass: 'mobile_left row items-center' }, [
                    t(
                      'div',
                      { staticClass: 'row justify-center items-center' },
                      [
                        t('i', {
                          class:
                            'iconfont ' +
                            (e.showMobileMenu ? 'icon-guanbi' : 'icon-caidan'),
                          on: { click: e.$_showMobileMenu },
                        }),
                      ]
                    ),
                    t('img', {
                      staticClass: 'logo',
                      attrs: { src: n('9b19') },
                    }),
                  ]),
                  t(
                    'div',
                    { staticClass: 'mobile_right row items-center' },
                    e._l(e.twitterYoutube, function (n) {
                      return t('i', {
                        key: n.icon,
                        class: 'iconfont ' + n.icon,
                        on: {
                          click: function (t) {
                            return e.$_twitterYoutube(n.url);
                          },
                        },
                      });
                    }),
                    0
                  ),
                ]),
                e.showMobileMenu
                  ? t(
                      'ul',
                      { staticClass: 'mobile_menu flex items-center' },
                      e._l(e.navList, function (n, o) {
                        return t(
                          'li',
                          {
                            key: o,
                            class:
                              'nav_item ' +
                              (e.activeName === n.name ? 'is-active' : ''),
                            on: { click: t => e.clickItem(t, n, o) },
                          },
                          [
                            n.children
                              ? t(
                                  'el-dropdown',
                                  {
                                    attrs: {
                                      'hide-on-click': !1,
                                      trigger: 'click',
                                      placement: 'top',
                                    },
                                  },
                                  [
                                    t(
                                      'span',
                                      { staticClass: 'el-dropdown-link' },
                                      [e._v(' ' + e._s(n.name) + ' ')]
                                    ),
                                    t(
                                      'el-dropdown-menu',
                                      {
                                        staticClass: 'mobile-model_name',
                                        attrs: { slot: 'dropdown' },
                                        slot: 'dropdown',
                                      },
                                      e._l(n.children, function (n) {
                                        return t(
                                          'el-dropdown-item',
                                          {
                                            key: n.modelName,
                                            class:
                                              e.modelActiveName === n.modelName
                                                ? 'is-active'
                                                : '',
                                            nativeOn: {
                                              click: function (t) {
                                                return e.$_modelName(n, o);
                                              },
                                            },
                                          },
                                          [e._v(' ' + e._s(n.name) + ' ')]
                                        );
                                      }),
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : t('div', [e._v(' ' + e._s(n.name) + ' ')]),
                          ],
                          1
                        );
                      }),
                      0
                    )
                  : e._e(),
              ]),
        ]);
      },
      p = [
        function () {
          var e = this,
            t = e._self._c;
          return t('div', { staticClass: 'logo' }, [
            t('img', { attrs: { src: n('9b19') } }),
          ]);
        },
      ],
      h = {
        name: 'Nav',
        data() {
          return {
            isPC: !0,
            showMobileMenu: !1,
            activeName: null,
            modelActiveName: null,
            isScroll: !0,
            liW: null,
            liL: null,
            navList: [
              {
                name: 'Campaign',
                children: [
                  { name: '札幌雪祭', modelName: 'SnowFestival' },
                  { name: '秋叶原印章收集', modelName: 'JackAkiba' },
                  { name: 'PASELA联动', modelName: 'Pasera' },
                  { name: 'Atre联动', modelName: 'AtreCollabo' },
                  { name: '电器街祭', modelName: 'ElectricTownFestival' },
                  {
                    name: 'Animate联动',
                    modelName: 'AnimateCollaboration',
                  },
                  { name: '同人创作征集', modelName: 'FanartRecruitment' },
                ],
              },
              { name: 'Animation' },
              { name: 'Goods' },
              { name: 'Event' },
            ],
            twitterYoutube: [
              {
                icon: 'icon-twitter',
                url: 'https://twitter.com/Blue_ArchiveJP',
              },
              {
                icon: 'icon-youtube',
                url: 'https://www.youtube.com/@BlueArchive_JP',
              },
            ],
          };
        },
        methods: {
          clickItem(e, t, n) {
            if (document.body.offsetWidth <= 800 && 'Campaign' === t.name)
              return;
            this.isScroll = !1;
            let o = document.querySelectorAll('li.nav_item')[n];
            (this.activeName = t.name),
              (this.liL = o.offsetLeft),
              (this.liW = o.clientWidth),
              window.scrollTo({
                top:
                  document.querySelectorAll('.menu_active')[n].offsetTop -
                  document.querySelector('.Nav').clientHeight -
                  100,
                behavior: 'smooth',
              }),
              setTimeout(() => {
                this.isScroll = !0;
              }, 1e3);
          },
          navItemTop(e) {
            let t = document.querySelectorAll('.menu_active')[e];
            // return t.offsetTop;
          },
          mobileMenuItemTop(e) {
            let t = document.querySelector('.' + e);
            return t.offsetTop;
          },
          liLW(e) {
            let t = document.querySelectorAll('li.nav_item')[e];
            t &&
              ((this.activeName = this.navList[e].name),
              (this.liL = t.offsetLeft),
              (this.liW = t.clientWidth));
          },
          handleScroll() {
            let e =
                document.documentElement.clientHeight ||
                document.body.clientHeight,
              t = document.documentElement.scrollTop || document.body.scrollTop,
              n = this.navItemTop(1),
              o = this.navItemTop(2),
              i = this.navItemTop(3),
              r = this.navItemTop(4);
            t < n - e / 2
              ? this.liLW(0)
              : t < o - e / 2
              ? this.liLW(1)
              : t < i - e / 2
              ? (this.liLW(2),
                this.navList[2].children.forEach(n => {
                  t > this.mobileMenuItemTop(n.modelName) - e / 2 &&
                    (this.modelActiveName = n.modelName);
                }))
              : t < r - e / 2
              ? this.liLW(3)
              : this.liLW(4);
          },
          $_modelName(e, t) {
            this.isScroll = !1;
            let n = document.querySelectorAll('li.nav_item')[t];
            (this.liL = n.offsetLeft),
              (this.liW = n.clientWidth),
              (this.modelActiveName = e.modelName),
              window.scrollTo({
                top:
                  document.querySelector('.' + e.modelName).offsetTop -
                  document.querySelector('.Nav').clientHeight -
                  100,
                behavior: 'smooth',
              }),
              setTimeout(() => {
                this.isScroll = !0;
              }, 1e3);
          },
          $_twitterYoutube(e) {
            console.log(e), window.open(e, 'blank');
          },
          $_showMobileMenu() {
            (this.showMobileMenu = !this.showMobileMenu), this.handleScroll();
          },
        },
        mounted() {
          window.addEventListener('scroll', () => {
            this.isScroll && this.handleScroll();
          }),
            (this.isPC = document.body.offsetWidth > 800),
            window.addEventListener('resize', () => {
              (this.isPC = document.body.offsetWidth > 782),
                this.handleScroll();
            });
        },
      },
      v = h,
      b = (n('6a44'), Object(u['a'])(v, f, p, !1, null, null, null)),
      w = b.exports,
      g = { name: 'App', components: { Nav: w, SupportingBase: m } },
      _ = g,
      y = (n('275b'), Object(u['a'])(_, i, r, !1, null, null, null)),
      N = y.exports,
      k = n('8c4f');
    const C = [
      {
        path: '/',
        name: 'Home',
        component: () => n.e('chunk-d03f50b6').then(n.bind(null, 'bc13')),
      },
    ];
    var S = C;
    o['default'].use(k['a']);
    const L = k['a'].prototype.push;
    k['a'].prototype.push = function (e) {
      return L.call(this, e).catch(e => e);
    };
    const T = new k['a']({ routes: S });
    var A = T,
      M = n('5502');
    o['default'].use(M['a']);
    var j = new M['a'].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      }),
      E = n('5c96'),
      O = n.n(E);
    n('0fae'), n('5ddf'), n('56f2'), n('f600'), n('8df9'), n('d619');
    (o['default'].config.productionTip = !1),
      o['default'].use(O.a),
      (o['default'].prototype.$loading = function (e) {
        const t = E['Loading'].service({
          lock: !0,
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)',
          target: e,
        });
        return t;
      }),
      new o['default']({ router: A, store: j, render: e => e(N) }).$mount(
        '#app'
      );
  },
  '56f2': function (e, t, n) {},
  '5ddf': function (e, t, n) {},
  '61a2': function (e, t, n) {},
  6528: function (e, t, n) {},
  '6a44': function (e, t, n) {
    'use strict';
    n('6528');
  },
  '8df9': function (e, t, n) {},
  '9b19': function (e, t, n) {
    e.exports = n.p + 'img/logo.1b872cbe.svg';
  },
  a4af: function (e, t, n) {
    'use strict';
    n('61a2');
  },
  b448: function (e, t, n) {
    e.exports = n.p + 'img/light.2b46dfb4.png';
  },
  d619: function (e, t) {
    (function () {
      let e = document.documentElement;
      function t() {
        e.style.fontSize = e.getBoundingClientRect().width / 100 + 'px';
      }
      window.addEventListener('resize', t), t();
    })();
  },
  f600: function (e, t, n) {},
});
//# sourceMappingURL=app.53e4fda1.js.map
