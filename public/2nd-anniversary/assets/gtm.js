// Copyright 2012 Google Inc. All rights reserved.
(function() {

  var data = {
    'resource': {
      'version': '43',

      'macros': [{ 'function': '__e' }, {
        'function': '__u',
        'vtp_component': 'URL',
        'vtp_enableMultiQueryKeys': false,
        'vtp_enableIgnoreEmptyQueryParam': false,
      }, {
        'function': '__u',
        'vtp_enableMultiQueryKeys': false,
        'vtp_enableIgnoreEmptyQueryParam': false,
      }, { 'function': '__v', 'vtp_name': 'gtm.elementUrl', 'vtp_dataLayerVersion': 1 }, {
        'function': '__v',
        'vtp_name': 'gtm.triggers',
        'vtp_dataLayerVersion': 2,
        'vtp_setDefaultValue': true,
        'vtp_defaultValue': '',
      }, { 'function': '__v', 'vtp_name': 'gtm.elementClasses', 'vtp_dataLayerVersion': 1 }, {
        'function': '__aev',
        'vtp_setDefaultValue': false,
        'vtp_varType': 'ATTRIBUTE',
        'vtp_attribute': 'alt',
      }, { 'function': '__d', 'vtp_elementSelector': 'style', 'vtp_selectorType': 'CSS' }, {
        'function': '__u',
        'vtp_component': 'HOST',
        'vtp_enableMultiQueryKeys': false,
        'vtp_enableIgnoreEmptyQueryParam': false,
      }, {
        'function': '__u',
        'vtp_component': 'PATH',
        'vtp_enableMultiQueryKeys': false,
        'vtp_enableIgnoreEmptyQueryParam': false,
      }, { 'function': '__f', 'vtp_component': 'URL' }, { 'function': '__e' }, {
        'function': '__v',
        'vtp_name': 'gtm.element',
        'vtp_dataLayerVersion': 1,
      }, { 'function': '__v', 'vtp_name': 'gtm.elementId', 'vtp_dataLayerVersion': 1 }, {
        'function': '__v',
        'vtp_name': 'gtm.elementTarget',
        'vtp_dataLayerVersion': 1,
      }, { 'function': '__aev', 'vtp_varType': 'TEXT' }],
      'tags': [{
        'function': '__ua',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_overrideGaSettings': true,
        'vtp_trackType': 'TRACK_PAGEVIEW',
        'vtp_trackingId': 'UA-123405339-9',
        'vtp_enableRecaptchaOption': false,
        'vtp_enableUaRlsa': false,
        'vtp_enableUseInternalVersion': false,
        'vtp_enableFirebaseCampaignData': true,
        'vtp_enableGA4Schema': true,
        'tag_id': 3,
      }, {
        'function': '__twitter_website_tag',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_event_type': 'PageView',
        'vtp_twitter_pixel_id': 'o56jw',
        'tag_id': 5,
      }, {
        'function': '__twitter_website_tag',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_event_type': 'PageView',
        'vtp_twitter_pixel_id': 'o56jw',
        'tag_id': 8,
      }, {
        'function': '__sp',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_enableConversionLinker': true,
        'vtp_enableDynamicRemarketing': false,
        'vtp_conversionCookiePrefix': '_gcl',
        'vtp_conversionId': '607194386',
        'vtp_customParamsFormat': 'NONE',
        'vtp_rdp': false,
        'vtp_enableOgtRmktParams': true,
        'vtp_enableUserId': true,
        'vtp_url': ['macro', 2],
        'vtp_enableRdpCheckbox': true,
        'vtp_enableConversionLinkingSettings': true,
        'tag_id': 26,
      }, {
        'function': '__sp',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_enableConversionLinker': true,
        'vtp_enableDynamicRemarketing': false,
        'vtp_conversionCookiePrefix': '_gcl',
        'vtp_conversionId': '607194386',
        'vtp_customParamsFormat': 'NONE',
        'vtp_rdp': false,
        'vtp_enableOgtRmktParams': true,
        'vtp_enableUserId': true,
        'vtp_url': ['macro', 2],
        'vtp_enableRdpCheckbox': true,
        'vtp_enableConversionLinkingSettings': true,
        'tag_id': 29,
      }, {
        'function': '__lcl',
        'vtp_waitForTags': true,
        'vtp_checkValidation': false,
        'vtp_waitForTagsTimeout': '2000',
        'vtp_uniqueTriggerId': '31941184_10',
        'tag_id': 30,
      }, {
        'function': '__lcl',
        'vtp_waitForTags': true,
        'vtp_checkValidation': false,
        'vtp_waitForTagsTimeout': '10000',
        'vtp_uniqueTriggerId': '31941184_11',
        'tag_id': 31,
      }, {
        'function': '__lcl',
        'vtp_waitForTags': true,
        'vtp_checkValidation': false,
        'vtp_waitForTagsTimeout': '10000',
        'vtp_uniqueTriggerId': '31941184_12',
        'tag_id': 32,
      }, { 'function': '__cl', 'tag_id': 33 }, {
        'function': '__lcl',
        'vtp_waitForTags': true,
        'vtp_checkValidation': false,
        'vtp_waitForTagsTimeout': '2000',
        'vtp_uniqueTriggerId': '31941184_15',
        'tag_id': 34,
      }, {
        'function': '__lcl',
        'vtp_waitForTags': true,
        'vtp_checkValidation': false,
        'vtp_waitForTagsTimeout': '10000',
        'vtp_uniqueTriggerId': '31941184_16',
        'tag_id': 35,
      }, {
        'function': '__lcl',
        'vtp_waitForTags': true,
        'vtp_checkValidation': false,
        'vtp_waitForTagsTimeout': '10000',
        'vtp_uniqueTriggerId': '31941184_18',
        'tag_id': 36,
      }, {
        'function': '__html',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_html': '\n\u003Cscript src="\/\/platform.twitter.com\/oct.js" type="text\/javascript"\u003E\u003C\/script\u003E\n\u003Cscript type="text\/javascript"\u003Etwttr.conversion.trackPid("o58u2",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o58u2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="\/\/t.co\/i\/adsct?txn_id=o58u2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C\/noscript\u003E\n',
        'vtp_supportDocumentWrite': true,
        'vtp_enableIframeMode': false,
        'vtp_enableEditJsMacroBehavior': false,
        'vtp_usePostscribe': true,
        'tag_id': 9,
      }, {
        'function': '__html',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_html': '\n\u003Cscript src="\/\/platform.twitter.com\/oct.js" type="text\/javascript"\u003E\u003C\/script\u003E\n\u003Cscript type="text\/javascript"\u003Etwttr.conversion.trackPid("o58u2",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o58u2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="\/\/t.co\/i\/adsct?txn_id=o58u2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C\/noscript\u003E\n',
        'vtp_supportDocumentWrite': true,
        'vtp_enableIframeMode': false,
        'vtp_enableEditJsMacroBehavior': false,
        'vtp_usePostscribe': true,
        'tag_id': 17,
      }, {
        'function': '__html',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_html': '\n\u003Cscript src="\/\/platform.twitter.com\/oct.js" type="text\/javascript"\u003E\u003C\/script\u003E\n\u003Cscript type="text\/javascript"\u003Etwttr.conversion.trackPid("o58vp",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o58vp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="\/\/t.co\/i\/adsct?txn_id=o58vp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C\/noscript\u003E\n',
        'vtp_supportDocumentWrite': true,
        'vtp_enableIframeMode': false,
        'vtp_enableEditJsMacroBehavior': false,
        'vtp_usePostscribe': true,
        'tag_id': 19,
      }, {
        'function': '__html',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_html': '\n\u003Cscript src="\/\/platform.twitter.com\/oct.js" type="text\/javascript"\u003E\u003C\/script\u003E\n\u003Cscript type="text\/javascript"\u003Etwttr.conversion.trackPid("o5ci5",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o5ci5\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="\/\/t.co\/i\/adsct?txn_id=o5ci5\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C\/noscript\u003E\n',
        'vtp_supportDocumentWrite': true,
        'vtp_enableIframeMode': false,
        'vtp_enableEditJsMacroBehavior': false,
        'vtp_usePostscribe': true,
        'tag_id': 22,
      }, {
        'function': '__html',
        'metadata': ['map'],
        'once_per_event': true,
        'vtp_html': '\n\u003Cscript src="\/\/static.ads-twitter.com\/oct.js" type="text\/javascript"\u003E\u003C\/script\u003E\n\u003Cscript type="text\/javascript"\u003Etwttr.conversion.trackPid("o7ggc",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o7ggc\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="\/\/t.co\/i\/adsct?txn_id=o7ggc\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C\/noscript\u003E\n',
        'vtp_supportDocumentWrite': true,
        'vtp_enableIframeMode': false,
        'vtp_enableEditJsMacroBehavior': false,
        'vtp_usePostscribe': true,
        'tag_id': 24,
      }],
      'predicates': [{ 'function': '_eq', 'arg0': ['macro', 0], 'arg1': 'gtm.js' }, {
        'function': '_cn',
        'arg0': ['macro', 1],
        'arg1': 'bluearchive.jp',
      }, { 'function': '_cn', 'arg0': ['macro', 1], 'arg1': 'bluearchive.jp\/preregistration' }, {
        'function': '_cn',
        'arg0': ['macro', 1],
        'arg1': 'bluearchive-anime',
      }, { 'function': '_cn', 'arg0': ['macro', 3], 'arg1': 'twitter.com\/Blue_ArchiveJP' }, {
        'function': '_eq',
        'arg0': ['macro', 0],
        'arg1': 'gtm.linkClick',
      }, { 'function': '_re', 'arg0': ['macro', 4], 'arg1': '(^$|((^|,)31941184_10($|,)))' }, {
        'function': '_cn',
        'arg0': ['macro', 3],
        'arg1': 'yoyaku-top10.jp\/u\/a\/MzEwNTc',
      }, { 'function': '_re', 'arg0': ['macro', 4], 'arg1': '(^$|((^|,)31941184_11($|,)))' }, {
        'function': '_cn',
        'arg0': ['macro', 5],
        'arg1': 'affirm',
      }, { 'function': '_eq', 'arg0': ['macro', 0], 'arg1': 'gtm.click' }, {
        'function': '_cn',
        'arg0': ['macro', 3],
        'arg1': 'yoyaku-top10.jp\/u\/a\/MzEwNTg',
      }, { 'function': '_re', 'arg0': ['macro', 4], 'arg1': '(^$|((^|,)31941184_16($|,)))' }, {
        'function': '_cn',
        'arg0': ['macro', 3],
        'arg1': 'lin.ee\/6bBaDTS',
      }, { 'function': '_re', 'arg0': ['macro', 4], 'arg1': '(^$|((^|,)31941184_18($|,)))' }, {
        'function': '_cn',
        'arg0': ['macro', 1],
        'arg1': 'bluearchive.jp\/ninmei',
      }, { 'function': '_cn', 'arg0': ['macro', 1], 'arg1': 'kivotostest.com' }],
      'rules': [[['if', 0], ['add', 0, 4, 8]], [['if', 0, 1], ['add', 1]], [['if', 0, 2], ['add', 2, 5, 6, 7, 9, 10, 11]], [['if', 0, 3], ['add', 3]], [['if', 4, 5, 6], ['add', 12]], [['if', 5, 7, 8], ['add', 12]], [['if', 9, 10], ['add', 12]], [['if', 5, 11, 12], ['add', 12]], [['if', 5, 13, 14], ['add', 13, 14]], [['if', 0, 15], ['add', 15]], [['if', 0, 16], ['add', 16]]],
    },
    'runtime': [[50, '__twitter_website_tag', [46, 'a'], [50, 'h', [46], [41, 'k'], [3, 'k', ['c', 'twq']], [22, [15, 'k'], [46, [36, [15, 'k']]]], ['g', 'twq', [51, '', [7], [52, 'm', ['c', 'twq.exe.apply']], [22, [15, 'm'], [46, ['b', 'twq.exe.apply', [45], [15, 'arguments']]], [46, ['b', 'twq.queue.push', [15, 'arguments']]]]], true], ['g', 'twq.version', '1', true], ['g', 'twq.queue', [7], true], [52, 'l', [51, '', [7]]], ['d', 'https://static.ads-twitter.com/uwt.js', [15, 'l'], [15, 'l'], 'twitter_website_tag'], [36, ['c', 'twq']]], [52, 'b', ['require', 'callInWindow']], [52, 'c', ['require', 'copyFromWindow']], [52, 'd', ['require', 'injectScript']], [52, 'e', ['require', 'makeString']], [52, 'f', ['require', 'makeTableMap']], [52, 'g', ['require', 'setInWindow']], [41, 'i'], [3, 'i', ['h']], ['i', 'init', ['e', [17, [15, 'a'], 'twitter_pixel_id']]], [52, 'j', ['f', [30, [17, [15, 'a'], 'event_parameters'], [7]], 'param_table_key_column', 'param_table_value_column']], [22, [1, [15, 'j'], [2, [15, 'j'], 'hasOwnProperty', [7, 'content_ids']]], [46, [53, [41, 'k'], [3, 'k', [16, [15, 'j'], 'content_ids']], [3, 'k', [2, [2, [15, 'k'], 'split', [7, '"']], 'join', [7, '\'']]], [41, 'l'], [3, 'l', [2, [2, [15, 'k'], 'slice', [7, [2, [15, 'k'], 'indexOf', [7, '[']], [2, [15, 'k'], 'indexOf', [7, ']']]]], 'split', [7, ',']]], [3, 'l', [2, [15, 'l'], 'map', [7, [51, '', [7, 'm'], [36, [30, [16, [2, [15, 'm'], 'split', [7, '\'']], 1], '']]]]]], [43, [15, 'j'], 'content_ids', [15, 'l']]]]], ['i', 'track', ['e', [17, [15, 'a'], 'event_type']], [15, 'j']], [2, [15, 'a'], 'gtmOnSuccess', [7]]]]
    ,
    'permissions': {
      '__twitter_website_tag': {
        'access_globals': {
          'keys': [{
            'key': 'twq',
            'read': true,
            'write': true,
            'execute': true,
          }, { 'key': 'twq.exe', 'read': true, 'write': true, 'execute': true }, {
            'key': 'twq.queue',
            'read': true,
            'write': true,
            'execute': true,
          }, { 'key': 'twq.queue.push', 'read': true, 'write': true, 'execute': true }, {
            'key': 'twq.version',
            'read': true,
            'write': true,
            'execute': false,
          }, { 'key': 'twq.exe.apply', 'read': true, 'write': true, 'execute': true }],
        }, 'inject_script': { 'urls': ['https:\/\/static.ads-twitter.com\/uwt.js'] },
      },
    }

    ,
    'security_groups': {
      'nonGoogleScripts': ['__twitter_website_tag'],
    },


  };

  (function() {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var C = this || self, D = function(n, v) {
      var w = n.split('.'), q = C;
      w[0] in q || 'undefined' == typeof q.execScript || q.execScript('var ' + w[0]);
      for (var t; w.length && (t = w.shift());) w.length || void 0 === v ? q = q[t] && q[t] !== Object.prototype[t] ? q[t] : q[t] = {} : q[t] = v;
    };/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var E, F = function() {
    };
    (function() {
      function n(h, m) {
        h = h || '';
        m = m || {};
        for (var y in v) v.hasOwnProperty(y) && (m.N && (m['fix_' + y] = !0), m.G = m.G || m['fix_' + y]);
        var z = {
          comment: /^\x3c!--/,
          endTag: /^<\//,
          atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
          startTag: /^</,
          chars: /^[^<]/,
        }, e = {
          comment: function() {
            var a = h.indexOf('--\x3e');
            if (0 <= a) return { content: h.substr(4, a), length: a + 3 };
          }, endTag: function() {
            var a = h.match(q);
            if (a) return { tagName: a[1], length: a[0].length };
          }, atomicTag: function() {
            var a = e.startTag();
            if (a) {
              var b = h.slice(a.length);
              if (b.match(new RegExp('</\\s*' + a.tagName + '\\s*>', 'i'))) {
                var c = b.match(new RegExp('([\\s\\S]*?)</\\s*' + a.tagName + '\\s*>', 'i'));
                if (c) return { tagName: a.tagName, g: a.g, content: c[1], length: c[0].length + a.length };
              }
            }
          }, startTag: function() {
            var a = h.match(w);
            if (a) {
              var b = {};
              a[2].replace(t, function(c, d, k, g, r) {
                var u = k || g || r || B.test(d) && d || null, l = document.createElement('div');
                l.innerHTML = u;
                b[d] = l.textContent || l.innerText || u;
              });
              return { tagName: a[1], g: b, s: !!a[3], length: a[0].length };
            }
          }, chars: function() {
            var a = h.indexOf('<');
            return { length: 0 <= a ? a : h.length };
          },
        }, f = function() {
          for (var a in z) if (z[a].test(h)) {
            var b = e[a]();
            return b ? (b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null;
          }
        };
        m.G && function() {
          var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
            b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, c = [];
          c.H = function() {
            return this[this.length - 1];
          };
          c.v = function(l) {
            var p = this.H();
            return p && p.tagName && p.tagName.toUpperCase() === l.toUpperCase();
          };
          c.V = function(l) {
            for (var p =
              0, x; x = this[p]; p++) if (x.tagName === l) return !0;
            return !1;
          };
          var d = function(l) {
            l && 'startTag' === l.type && (l.s = a.test(l.tagName) || l.s);
            return l;
          }, k = f, g = function() {
            h = '</' + c.pop().tagName + '>' + h;
          }, r = {
            startTag: function(l) {
              var p = l.tagName;
              'TR' === p.toUpperCase() && c.v('TABLE') ? (h = '<TBODY>' + h, u()) : m.oa && b.test(p) && c.V(p) ? c.v(p) ? g() : (h = '</' + l.tagName + '>' + h, u()) : l.s || c.push(l);
            }, endTag: function(l) {
              c.H() ? m.W && !c.v(l.tagName) ? g() : c.pop() : m.W && (k(), u());
            },
          }, u = function() {
            var l = h, p = d(k());
            h = l;
            if (p && r[p.type]) r[p.type](p);
          };
          f = function() {
            u();
            return d(k());
          };
        }();
        return {
          append: function(a) {
            h += a;
          }, ea: f, sa: function(a) {
            for (var b; (b = f()) && (!a[b.type] || !1 !== a[b.type](b));) ;
          }, clear: function() {
            var a = h;
            h = '';
            return a;
          }, ta: function() {
            return h;
          }, stack: [],
        };
      }

      var v = function() {
          var h = {}, m = this.document.createElement('div');
          m.innerHTML = '<P><I></P></I>';
          h.va = '<P><I></P></I>' !== m.innerHTML;
          m.innerHTML = '<P><i><P></P></i></P>';
          h.ua = 2 === m.childNodes.length;
          return h;
        }(), w = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
        t = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
        B = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
      n.supports = v;
      for (var A in v) ;
      E = n;
    })();
    (function() {
      function n() {
      }

      function v(e) {
        return void 0 !== e && null !== e;
      }

      function w(e, f, a) {
        var b, c = e && e.length || 0;
        for (b = 0; b < c; b++) f.call(a, e[b], b);
      }

      function q(e, f, a) {
        for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b]);
      }

      function t(e, f) {
        q(f, function(a, b) {
          e[a] = b;
        });
        return e;
      }

      function B(e, f) {
        e = e || {};
        q(f, function(a, b) {
          v(e[a]) || (e[a] = b);
        });
        return e;
      }

      function A(e) {
        try {
          return y.call(e);
        } catch (a) {
          var f = [];
          w(e, function(b) {
            f.push(b);
          });
          return f;
        }
      }

      var h = {
        J: n, K: n, L: n, M: n, O: n, P: function(e) {
          return e;
        }, done: n, error: function(e) {
          throw e;
        }, fa: !1,
      }, m = this;
      if (!m.postscribe) {
        var y = Array.prototype.slice, z = function() {
          function e(a, b, c) {
            var d = 'data-ps-' + b;
            if (2 === arguments.length) {
              var k = a.getAttribute(d);
              return v(k) ? String(k) : k;
            }
            v(c) && '' !== c ? a.setAttribute(d, c) : a.removeAttribute(d);
          }

          function f(a, b) {
            var c = a.ownerDocument;
            t(this, {
              root: a,
              options: b,
              l: c.defaultView || c.parentWindow,
              i: c,
              o: E('', { N: !0 }),
              u: [a],
              B: '',
              C: c.createElement(a.nodeName),
              j: [],
              h: [],
            });
            e(this.C, 'proxyof', 0);
          }

          f.prototype.write = function() {
            [].push.apply(this.h, arguments);
            for (var a; !this.m &&
            this.h.length;) a = this.h.shift(), 'function' === typeof a ? this.U(a) : this.D(a);
          };
          f.prototype.U = function(a) {
            var b = { type: 'function', value: a.name || a.toString() };
            this.A(b);
            a.call(this.l, this.i);
            this.I(b);
          };
          f.prototype.D = function(a) {
            this.o.append(a);
            for (var b, c = [], d, k; (b = this.o.ea()) && !(d = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(k = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);) c.push(b);
            this.ka(c);
            d && this.X(b);
            k && this.Y(b);
          };
          f.prototype.ka = function(a) {
            var b = this.R(a);
            b.F && (b.Z = this.B + b.F, this.B += b.proxy, this.C.innerHTML = b.Z, this.ia());
          };
          f.prototype.R = function(a) {
            var b = this.u.length, c = [], d = [], k = [];
            w(a, function(g) {
              c.push(g.text);
              if (g.g) {
                if (!/^noscript$/i.test(g.tagName)) {
                  var r = b++;
                  d.push(g.text.replace(/(\/?>)/, ' data-ps-id=' + r + ' $1'));
                  'ps-script' !== g.g.id && 'ps-style' !== g.g.id && k.push('atomicTag' === g.type ? '' : '<' + g.tagName + ' data-ps-proxyof=' + r + (g.s ? ' />' : '>'));
                }
              } else d.push(g.text), k.push('endTag' === g.type ? g.text : '');
            });
            return { wa: a, raw: c.join(''), F: d.join(''), proxy: k.join('') };
          };
          f.prototype.ia = function() {
            for (var a, b = [this.C]; v(a = b.shift());) {
              var c = 1 === a.nodeType;
              if (!c || !e(a, 'proxyof')) {
                c && (this.u[e(a, 'id')] = a, e(a, 'id', null));
                var d = a.parentNode && e(a.parentNode, 'proxyof');
                d && this.u[d].appendChild(a);
              }
              b.unshift.apply(b, A(a.childNodes));
            }
          };
          f.prototype.X = function(a) {
            var b = this.o.clear();
            b && this.h.unshift(b);
            a.src = a.g.src || a.g.ma;
            a.src && this.j.length ? this.m = a : this.A(a);
            var c = this;
            this.ja(a, function() {
              c.I(a);
            });
          };
          f.prototype.Y = function(a) {
            var b = this.o.clear();
            b && this.h.unshift(b);
            a.type =
              a.g.type || a.g.TYPE || 'text/css';
            this.la(a);
            b && this.write();
          };
          f.prototype.la = function(a) {
            var b = this.T(a);
            this.ba(b);
            a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.i.createTextNode(a.content)));
          };
          f.prototype.T = function(a) {
            var b = this.i.createElement(a.tagName);
            b.setAttribute('type', a.type);
            q(a.g, function(c, d) {
              b.setAttribute(c, d);
            });
            return b;
          };
          f.prototype.ba = function(a) {
            this.D('<span id="ps-style"/>');
            var b = this.i.getElementById('ps-style');
            b.parentNode.replaceChild(a,
              b);
          };
          f.prototype.A = function(a) {
            a.ca = this.h;
            this.h = [];
            this.j.unshift(a);
          };
          f.prototype.I = function(a) {
            a !== this.j[0] ? this.options.error({ message: 'Bad script nesting or script finished twice' }) : (this.j.shift(), this.write.apply(this, a.ca), !this.j.length && this.m && (this.A(this.m), this.m = null));
          };
          f.prototype.ja = function(a, b) {
            var c = this.S(a), d = this.ha(c), k = this.options.J;
            a.src && (c.src = a.src, this.ga(c, d ? k : function() {
              b();
              k();
            }));
            try {
              this.aa(c), a.src && !d || b();
            } catch (g) {
              this.options.error(g), b();
            }
          };
          f.prototype.S = function(a) {
            var b =
              this.i.createElement(a.tagName);
            q(a.g, function(c, d) {
              b.setAttribute(c, d);
            });
            a.content && (b.text = a.content);
            return b;
          };
          f.prototype.aa = function(a) {
            this.D('<span id="ps-script"/>');
            var b = this.i.getElementById('ps-script');
            b.parentNode.replaceChild(a, b);
          };
          f.prototype.ga = function(a, b) {
            function c() {
              a = a.onload = a.onreadystatechange = a.onerror = null;
            }

            var d = this.options.error;
            t(a, {
              onload: function() {
                c();
                b();
              }, onreadystatechange: function() {
                /^(loaded|complete)$/.test(a.readyState) && (c(), b());
              }, onerror: function() {
                var k =
                  { message: 'remote script failed ' + a.src };
                c();
                d(k);
                b();
              },
            });
          };
          f.prototype.ha = function(a) {
            return !/^script$/i.test(a.nodeName) || !!(this.options.fa && a.src && a.hasAttribute('async'));
          };
          return f;
        }();
        m.postscribe = function() {
          function e() {
            var d = b.shift(), k;
            d && (k = d[d.length - 1], k.K(), d.stream = f.apply(null, d), k.L());
          }

          function f(d, k, g) {
            function r(x) {
              x = g.P(x);
              c.write(x);
              g.M(x);
            }

            c = new z(d, g);
            c.id = a++;
            c.name = g.name || c.id;
            var u = d.ownerDocument, l = { close: u.close, open: u.open, write: u.write, writeln: u.writeln };
            t(u, {
              close: n, open: n,
              write: function() {
                return r(A(arguments).join(''));
              }, writeln: function() {
                return r(A(arguments).join('') + '\n');
              },
            });
            var p = c.l.onerror || n;
            c.l.onerror = function(x, G, H) {
              g.error({ qa: x + ' - ' + G + ':' + H });
              p.apply(c.l, arguments);
            };
            c.write(k, function() {
              t(u, l);
              c.l.onerror = p;
              g.done();
              c = null;
              e();
            });
            return c;
          }

          var a = 0, b = [], c = null;
          return t(function(d, k, g) {
            'function' === typeof g && (g = { done: g });
            g = B(g, h);
            d = /^#/.test(d) ? m.document.getElementById(d.substr(1)) : d.pa ? d[0] : d;
            var r = [d, k, g];
            d.da = {
              cancel: function() {
                r.stream ? r.stream.abort() :
                  r[1] = n;
              },
            };
            g.O(r);
            b.push(r);
            c || e();
            return d.da;
          }, { streams: {}, ra: b, na: z });
        }();
        F = m.postscribe;
      }
    })();
    D('google_tag_manager_external.postscribe.installPostscribe', function() {
      var n = window.google_tag_manager;
      n && (n.postscribe || (n.postscribe = window.postscribe || F));
    });
    D('google_tag_manager_external.postscribe.getPostscribe', function() {
      return window.google_tag_manager.postscribe;
    });
  }).call(this);
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var da, ea = function(a) {
    var b = 0;
    return function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }, fa = function(a) {
    return a.raw = a;
  }, ha = 'function' == typeof Object.create ? Object.create : function(a) {
    var b = function() {
    };
    b.prototype = a;
    return new b;
  }, ia;
  if ('function' == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf; else {
    var ja;
    a:{
      var ka = { a: !0 }, ma = {};
      try {
        ma.__proto__ = ka;
        ja = ma.a;
        break a;
      } catch (a) {
      }
      ja = !1;
    }
    ia = ja ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
      return a;
    } : null;
  }
  var na = ia, pa = function(a, b) {
    a.prototype = ha(b.prototype);
    a.prototype.constructor = a;
    if (na) na(a, b); else for (var c in b) if ('prototype' != c) if (Object.defineProperties) {
      var d = Object.getOwnPropertyDescriptor(b, c);
      d && Object.defineProperty(a, c, d);
    } else a[c] = b[c];
    a.Kl = b.prototype;
  }, qa = this || self, ra = function(a) {
    return a;
  };
  var sa = function(a, b) {
    this.h = a;
    this.B = b;
  };
  var ta = function(a) {
    return 'number' === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || 'string' === typeof a && '-' !== a[0] && a === '' + parseInt(a, 10);
  }, ua = function() {
    this.D = {};
    this.F = !1;
    this.N = {};
  }, va = function(a, b) {
    var c = [], d;
    for (d in a.D) if (a.D.hasOwnProperty(d)) switch (d = d.substr(5), b) {
      case 1:
        c.push(d);
        break;
      case 2:
        c.push(a.get(d));
        break;
      case 3:
        c.push([d, a.get(d)]);
    }
    return c;
  };
  ua.prototype.get = function(a) {
    return this.D['dust.' + a];
  };
  ua.prototype.set = function(a, b) {
    this.F || (a = 'dust.' + a, this.N.hasOwnProperty(a) || (this.D[a] = b));
  };
  ua.prototype.has = function(a) {
    return this.D.hasOwnProperty('dust.' + a);
  };
  var wa = function(a, b) {
    b = 'dust.' + b;
    a.F || a.N.hasOwnProperty(b) || delete a.D[b];
  };
  ua.prototype.Qb = function() {
    this.F = !0;
  };
  ua.prototype.He = function() {
    return this.F;
  };
  var xa = function(a) {
    this.B = new ua;
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (ta(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]));
  };
  da = xa.prototype;
  da.toString = function(a) {
    if (a && 0 <= a.indexOf(this)) return '';
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d ? b.push('') : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString());
    }
    return b.join(',');
  };
  da.set = function(a, b) {
    if (!this.D) if ('length' === a) {
      if (!ta(b)) throw Error('RangeError: Length property must be a valid integer.');
      this.h.length = Number(b);
    } else ta(a) ? this.h[Number(a)] = b : this.B.set(a, b);
  };
  da.get = function(a) {
    return 'length' === a ? this.length() : ta(a) ? this.h[Number(a)] : this.B.get(a);
  };
  da.length = function() {
    return this.h.length;
  };
  da.Pb = function() {
    for (var a = va(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + '');
    return new xa(a);
  };
  var ya = function(a, b) {
    ta(b) ? delete a.h[Number(b)] : wa(a.B, b);
  };
  da = xa.prototype;
  da.pop = function() {
    return this.h.pop();
  };
  da.push = function(a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  da.shift = function() {
    return this.h.shift();
  };
  da.splice = function(a, b, c) {
    return new xa(this.h.splice.apply(this.h, arguments));
  };
  da.unshift = function(a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  da.has = function(a) {
    return ta(a) && this.h.hasOwnProperty(a) || this.B.has(a);
  };
  da.Qb = function() {
    this.D = !0;
    Object.freeze(this.h);
    this.B.Qb();
  };
  da.He = function() {
    return this.D;
  };
  var za = function() {
    this.quota = {};
  };
  za.prototype.reset = function() {
    this.quota = {};
  };
  var Aa = function(a, b) {
    this.U = a;
    this.N = function(c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.B = new ua;
    this.h = this.F = void 0;
  };
  Aa.prototype.add = function(a, b) {
    Ba(this, a, b, !1);
  };
  var Ba = function(a, b, c, d) {
    if (!a.B.He()) if (d) {
      var e = a.B;
      e.set(b, c);
      e.N['dust.' + b] = !0;
    } else a.B.set(b, c);
  };
  Aa.prototype.set = function(a, b) {
    this.B.He() || (!this.B.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.B.set(a, b));
  };
  Aa.prototype.get = function(a) {
    return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0;
  };
  Aa.prototype.has = function(a) {
    return !!this.B.has(a) || !(!this.D || !this.D.has(a));
  };
  var Ca = function(a) {
    var b = new Aa(a.U, a);
    a.F && (b.F = a.F);
    b.N = a.N;
    b.h = a.h;
    return b;
  };
  var Da = function() {
    }, Ea = function(a) {
      return 'function' === typeof a;
    }, k = function(a) {
      return 'string' === typeof a;
    }, Ga = function(a) {
      return 'number' === typeof a && !isNaN(a);
    }, Ia = Array.isArray, Ka = function(a, b) {
      if (a && Ia(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    }, La = function(a, b) {
      if (!Ga(a) || !Ga(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    }, Na = function(a, b) {
      for (var c = new Ma, d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    }, m = function(a,
      b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    }, Oa = function(a) {
      return !!a && ('[object Arguments]' === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, 'callee'));
    }, Pa = function(a) {
      return Math.round(Number(a)) || 0;
    }, Qa = function(a) {
      return 'false' === String(a).toLowerCase() ? !1 : !!a;
    }, Ra = function(a) {
      var b = [];
      if (Ia(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    }, Sa = function(a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    }, Ta = function() {
      return new Date(Date.now());
    },
    Ua = function() {
      return Ta().getTime();
    }, Ma = function() {
      this.prefix = 'gtm.';
      this.values = {};
    };
  Ma.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b;
  };
  Ma.prototype.get = function(a) {
    return this.values[this.prefix + a];
  };
  var Va = function(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }, Xa = function(a) {
    var b = a;
    return function() {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {
        }
      }
    };
  }, Ya = function(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }, Za = function(a) {
    for (var b in a) if (a.hasOwnProperty(b)) return !0;
    return !1;
  }, $a = function(a, b) {
    for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }, bb = function(a, b) {
    var c = z;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (0 <=
        b.indexOf(d)) return;
    }
    return d;
  }, cb = function(a, b) {
    for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }, db = /^\w{1,9}$/, eb = function(a, b) {
    a = a || {};
    b = b || ',';
    var c = [];
    m(a, function(d, e) {
      db.test(d) && e && c.push(d);
    });
    return c.join(b);
  }, fb = function(a, b) {
    function c() {
      ++d === b && (e(), e = null, c.done = !0);
    }

    var d = 0, e = a;
    c.done = !1;
    return c;
  };
  var gb = function(a, b) {
    ua.call(this);
    this.U = a;
    this.eb = b;
  };
  pa(gb, ua);
  gb.prototype.toString = function() {
    return this.U;
  };
  gb.prototype.Pb = function() {
    return new xa(va(this, 1));
  };
  gb.prototype.h = function(a, b) {
    return this.eb.apply(new hb(this, a), Array.prototype.slice.call(arguments, 1));
  };
  gb.prototype.B = function(a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {
    }
  };
  var jb = function(a, b) {
    for (var c, d = 0; d < b.length && !(c = ib(a, b[d]), c instanceof sa); d++) ;
    return c;
  }, ib = function(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!(c && c instanceof gb)) throw Error('Attempting to execute non-function ' + b[0] + '.');
      return c.h.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }, hb = function(a, b) {
    this.B = a;
    this.h = b;
  }, E = function(a, b) {
    return Ia(b) ? ib(a.h, b) : b;
  }, F = function(a) {
    return a.B.U;
  };
  var kb = function() {
    ua.call(this);
  };
  pa(kb, ua);
  kb.prototype.Pb = function() {
    return new xa(va(this, 1));
  };
  var lb = {
    map: function(a) {
      for (var b = new kb, c = 0; c < arguments.length - 1; c += 2) {
        var d = E(this, arguments[c]) + '', e = E(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    }, list: function(a) {
      for (var b = new xa, c = 0; c < arguments.length; c++) {
        var d = E(this, arguments[c]);
        b.push(d);
      }
      return b;
    }, fn: function(a, b, c) {
      var d = this.h, e = E(this, b);
      if (!(e instanceof xa)) throw Error('Error: non-List value given for Fn argument names.');
      var f = Array.prototype.slice.call(arguments, 2);
      return new gb(a, function() {
        return function(g) {
          var h = Ca(d);
          void 0 ===
          h.h && (h.h = this.h.h);
          for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++) if (l[n] = E(this, l[n]), l[n] instanceof sa) return l[n];
          for (var p = e.get('length'), q = 0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
          h.add('arguments', new xa(l));
          var r = jb(h, f);
          if (r instanceof sa) return 'return' === r.h ? r.B : r;
        };
      }());
    }, control: function(a, b) {
      return new sa(a, E(this, b));
    }, undefined: function() {
    },
  };
  var mb = function() {
    this.D = new za;
    this.h = new Aa(this.D);
  }, nb = function(a, b, c) {
    var d = new gb(b, c);
    d.Qb();
    a.h.set(b, d);
  }, ob = function(a, b, c) {
    lb.hasOwnProperty(b) && nb(a, c || b, lb[b]);
  };
  mb.prototype.execute = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.B(c);
  };
  mb.prototype.B = function(a) {
    for (var b, c = 0; c < arguments.length; c++) b = ib(this.h, arguments[c]);
    return b;
  };
  mb.prototype.F = function(a, b) {
    var c = Ca(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = ib(c, arguments[e]);
    return d;
  };

  function pb() {
    for (var a = qb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }

  function rb() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
  }

  var qb, sb;

  function tb(a) {
    qb = qb || rb();
    sb = sb || pb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0, l = f >> 2, n = (f & 3) << 4 | g >> 4, p = (g & 15) << 2 | h >> 6, q = h & 63;
      e || (q = 64, d || (p = 64));
      b.push(qb[l], qb[n], qb[p], qb[q]);
    }
    return b.join('');
  }

  function ub(a) {
    function b(l) {
      for (; d < a.length;) {
        var n = a.charAt(d++), p = sb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n);
      }
      return l;
    }

    qb = qb || rb();
    sb = sb || pb();
    for (var c = '', d = 0; ;) {
      var e = b(-1), f = b(0), g = b(64), h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)));
    }
  }var vb = {}, wb = function(a, b) {
    vb[a] = vb[a] || [];
    vb[a][b] = !0;
  }, xb = function() {
    delete vb.GA4_EVENT;
  }, yb = function(a) {
    var b = vb[a];
    if (!b || 0 === b.length) return '';
    for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
    0 < d && c.push(String.fromCharCode(d));
    return tb(c.join('')).replace(/\.+$/, '');
  };
  var zb = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function(a, b) {
    if ('string' === typeof a) return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var Ab, Bb = function() {
    if (void 0 === Ab) {
      var a = null, b = qa.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy('goog#html', { createHTML: ra, createScript: ra, createScriptURL: ra });
        } catch (c) {
          qa.console && qa.console.error(c.message);
        }
        Ab = a;
      } else Ab = a;
    }
    return Ab;
  };
  var Db = function(a, b) {
    this.h = b === Cb ? a : '';
  };
  Db.prototype.toString = function() {
    return this.h + '';
  };
  var Eb = function(a) {
    return a instanceof Db && a.constructor === Db ? a.h : 'type_error:TrustedResourceUrl';
  }, Cb = {}, Fb = function(a) {
    var b = a, c = Bb(), d = c ? c.createScriptURL(b) : b;
    return new Db(d, Cb);
  };
  var Gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function Hb() {
    var a = qa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return '';
  }

  function Ib(a) {
    return -1 != Hb().indexOf(a);
  }

  function Jb() {
    return Ib('Firefox') || Ib('FxiOS');
  }

  function Kb() {
    return (Ib('Chrome') || Ib('CriOS')) && !Ib('Edge') || Ib('Silk');
  }var Lb = {}, Mb = function(a, b) {
    this.h = b === Lb ? a : '';
  };
  Mb.prototype.toString = function() {
    return this.h.toString();
  };/*

 SPDX-License-Identifier: Apache-2.0
*/
  var Nb = {};
  var Ob = function() {
  }, Pb = function(a) {
    this.h = a;
  };
  pa(Pb, Ob);
  Pb.prototype.toString = function() {
    return this.h;
  };

  function Qb(a, b) {
    if (void 0 !== a.tagName) {
      if ('script' === a.tagName.toLowerCase()) throw Error('');
      if ('style' === a.tagName.toLowerCase()) throw Error('');
    }
    a.innerHTML = b instanceof Mb && b.constructor === Mb ? b.h : 'type_error:SafeHtml';
  }

  function Rb(a, b) {
    var c = [new Pb(Sb[0].toLowerCase(), Nb)];
    if (0 === c.length) throw Error('');
    var d = c.map(function(f) {
      var g;
      if (f instanceof Pb) g = f.h; else throw Error('');
      return g;
    }), e = b.toLowerCase();
    if (d.every(function(f) {
      return 0 !== e.indexOf(f);
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, 'true');
  }

  function Tb(a) {
    var b = a = Ub(a), c = Bb(), d = c ? c.createHTML(b) : b;
    return new Mb(d, Lb);
  }

  function Ub(a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a;
  }var Vb = {}, z = window, I = document, Wb = navigator, Xb = I.currentScript && I.currentScript.src,
    Yb = function(a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    }, Zb = function(a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
        a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b());
      });
    }, $b = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    ac = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

  function bc(a, b, c) {
    b && m(b, function(d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }

  var cc = function(a, b, c, d, e) {
    var f = I.createElement('script');
    bc(f, d, $b);
    f.type = 'text/javascript';
    f.async = !0;
    var g;
    g = Fb(Ub(a));
    f.src = Eb(g);
    var h, l, n,
      p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, 'script[nonce]');
    (h = p ? p.nonce || p.getAttribute('nonce') || '' : '') && f.setAttribute('nonce', h);
    Zb(f, b);
    c && (f.onerror = c);
    if (e) e.appendChild(f); else {
      var q = I.getElementsByTagName('script')[0] || I.body || I.head;
      q.parentNode.insertBefore(f, q);
    }
    return f;
  }, dc = function() {
    if (Xb) {
      var a =
        Xb.toLowerCase();
      if (0 === a.indexOf('https://')) return 2;
      if (0 === a.indexOf('http://')) return 3;
    }
    return 1;
  }, ec = function(a, b, c, d, e) {
    var f;
    f = void 0 === f ? !0 : f;
    var g = e, h = !1;
    g || (g = I.createElement('iframe'), h = !0);
    bc(g, c, ac);
    d && m(d, function(n, p) {
      g.dataset[n] = p;
    });
    f && (g.height = '0', g.width = '0', g.style.display = 'none', g.style.visibility = 'hidden');
    if (h) {
      var l = I.body && I.body.lastChild || I.body || I.head;
      l.parentNode.insertBefore(g, l);
    }
    Zb(g, b);
    void 0 !== a && (g.src = a);
    return g;
  }, fc = function(a, b, c) {
    var d = new Image(1, 1);
    d.onload =
      function() {
        d.onload = null;
        b && b();
      };
    d.onerror = function() {
      d.onerror = null;
      c && c();
    };
    d.src = a;
  }, gc = function(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent('on' + b, c);
  }, hc = function(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent('on' + b, c);
  }, J = function(a) {
    z.setTimeout(a, 0);
  }, ic = function(a, b) {
    return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
  }, jc = function(a) {
    var b = a.innerText || a.textContent || '';
    b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
      ''));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
    return b;
  }, kc = function(a) {
    var b = I.createElement('div');
    Qb(b, Tb('A<div>' + a + '</div>'));
    b = b.lastChild;
    for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
    return c;
  }, lc = function(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }, mc = function(a) {
    var b;
    try {
      b = Wb.sendBeacon && Wb.sendBeacon(a);
    } catch (c) {
      wb('TAGGING', 15);
    }
    b || fc(a);
  }, nc = function(a,
    b) {
    var c = a[b];
    c && 'string' === typeof c.animVal && (c = c.animVal);
    return c;
  }, oc = function() {
    var a = z.performance;
    if (a && Ea(a.now)) return a.now();
  }, pc = function() {
    return z.performance || void 0;
  };
  var qc = function(a, b) {
    return E(this, a) && E(this, b);
  }, rc = function(a, b) {
    return E(this, a) === E(this, b);
  }, sc = function(a, b) {
    return E(this, a) || E(this, b);
  }, tc = function(a, b) {
    a = E(this, a);
    b = E(this, b);
    return -1 < String(a).indexOf(String(b));
  }, uc = function(a, b) {
    a = String(E(this, a));
    b = String(E(this, b));
    return a.substring(0, b.length) === b;
  }, vc = function(a, b) {
    a = E(this, a);
    b = E(this, b);
    switch (a) {
      case 'pageLocation':
        var c = z.location.href;
        b instanceof kb && b.get('stripProtocol') && (c = c.replace(/^https?:\/\//, ''));
        return c;
    }
  };
  var yc = function() {
    this.h = new mb;
    wc(this);
  };
  yc.prototype.execute = function(a) {
    return this.h.B(a);
  };
  var wc = function(a) {
    ob(a.h, 'map');
    var b = function(c, d) {
      nb(a.h, c, d);
    };
    b('and', qc);
    b('contains', tc);
    b('equals', rc);
    b('or', sc);
    b('startsWith', uc);
    b('variable', vc);
  };
  var zc = function(a) {
    if (a instanceof zc) return a;
    this.Ra = a;
  };
  zc.prototype.toString = function() {
    return String(this.Ra);
  };
  var Bc = function(a) {
    ua.call(this);
    this.h = a;
    this.set('then', Ac(this));
    this.set('catch', Ac(this, !0));
    this.set('finally', Ac(this, !1, !0));
  };
  pa(Bc, kb);
  var Ac = function(a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new gb('', function(d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof gb || (d = void 0);
      e instanceof gb || (e = void 0);
      var f = Ca(this.h), g = function(l) {
        return function(n) {
          return c ? (l.h(f), a.h) : l.h(f, n);
        };
      }, h = a.h.then(d && g(d), e && g(e));
      return new Bc(h);
    });
  };/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Cc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Dc = function(a) {
    if (null == a) return String(a);
    var b = Cc.exec(Object.prototype.toString.call(Object(a)));
    return b ? b[1].toLowerCase() : 'object';
  }, Ec = function(a, b) {
    return Object.prototype.hasOwnProperty.call(Object(a), b);
  }, Fc = function(a) {
    if (!a || 'object' != Dc(a) || a.nodeType || a == a.window) return !1;
    try {
      if (a.constructor && !Ec(a, 'constructor') && !Ec(a.constructor.prototype, 'isPrototypeOf')) return !1;
    } catch (c) {
      return !1;
    }
    for (var b in a) ;
    return void 0 ===
      b || Ec(a, b);
  }, K = function(a, b) {
    var c = b || ('array' == Dc(a) ? [] : {}), d;
    for (d in a) if (Ec(a, d)) {
      var e = a[d];
      'array' == Dc(e) ? ('array' != Dc(c[d]) && (c[d] = []), c[d] = K(e, c[d])) : Fc(e) ? (Fc(c[d]) || (c[d] = {}), c[d] = K(e, c[d])) : c[d] = e;
    }
    return c;
  };
  var Hc = function(a, b, c) {
    var d = [], e = [], f = function(h, l) {
      for (var n = va(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]));
    }, g = function(h) {
      var l = d.indexOf(h);
      if (-1 < l) return e[l];
      if (h instanceof xa) {
        var n = [];
        d.push(h);
        e.push(n);
        for (var p = h.Pb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
        return n;
      }
      if (h instanceof Bc) return h.h;
      if (h instanceof kb) {
        var r = {};
        d.push(h);
        e.push(r);
        f(h, r);
        return r;
      }
      if (h instanceof gb) {
        var u = function() {
          for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Gc(v[w],
            b, c);
          var y = new Aa(b ? b.U : new za);
          b && (y.h = b.h);
          return g(h.h.apply(h, [y].concat(v)));
        };
        d.push(h);
        e.push(u);
        f(h, u);
        return u;
      }
      var t = !1;
      switch (c) {
        case 1:
          t = !0;
          break;
        case 2:
          t = !1;
          break;
        case 3:
          t = !1;
          break;
        default:
      }
      if (h instanceof zc && t) return h.Ra;
      switch (typeof h) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
          return h;
        case 'object':
          if (null === h) return null;
      }
    };
    return g(a);
  }, Gc = function(a,
    b, c) {
    var d = [], e = [], f = function(h, l) {
      for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]));
    }, g = function(h) {
      var l = d.indexOf(h);
      if (-1 < l) return e[l];
      if (Ia(h) || Oa(h)) {
        var n = new xa([]);
        d.push(h);
        e.push(n);
        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
        return n;
      }
      if (Fc(h)) {
        var q = new kb;
        d.push(h);
        e.push(q);
        f(h, q);
        return q;
      }
      if ('function' === typeof h) {
        var r = new gb('', function(x) {
          for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = Hc(E(this, A[B]), b, c);
          return g((0, this.h.N)(h, h, A));
        });
        d.push(h);
        e.push(r);
        f(h, r);
        return r;
      }
      var w = typeof h;
      if (null === h || 'string' === w || 'number' === w || 'boolean' === w) return h;
      var y = !1;
      switch (c) {
        case 1:
          y =
            !0;
          break;
        case 2:
          y = !1;
          break;
        default:
      }
      if (void 0 !== h && y) return new zc(h);
    };
    return g(a);
  };
  var Ic = function(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }, Jc = function(a) {
    if (void 0 === a || Ia(a) || Fc(a)) return !0;
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'function':
        return !0;
    }
    return !1;
  };
  var Kc = {
    supportedMethods: 'concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString'.split(' '),
    concat: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof xa) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g)); else c.push(arguments[e]);
      return new xa(c);
    },
    every: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() &&
      d < c; d++) if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new xa(d);
    },
    forEach: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function(a, b) {
      return this.has(b);
    },
    indexOf: function(a, b, c) {
      var d = this.length(), e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++) if (this.has(f) &&
        this.get(f) === b) return f;
      return -1;
    },
    join: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function(a, b, c) {
      var d = this.length(), e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new xa(d);
    },
    pop: function() {
      return this.pop();
    },
    push: function(a, b) {
      return this.push.apply(this,
        Array.prototype.slice.call(arguments, 1));
    },
    reduce: function(a, b, c) {
      var d = this.length(), e, f = 0;
      if (void 0 !== c) e = c; else {
        if (0 === d) throw Error('TypeError: Reduce on List with no elements.');
        for (var g = 0; g < d; g++) if (this.has(g)) {
          e = this.get(g);
          f = g + 1;
          break;
        }
        if (g === d) throw Error('TypeError: Reduce on List with no elements.');
      }
      for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function(a, b, c) {
      var d = this.length(), e, f = d - 1;
      if (void 0 !== c) e = c; else {
        if (0 === d) throw Error('TypeError: ReduceRight on List with no elements.');
        for (var g = 1; g <= d; g++) if (this.has(d - g)) {
          e = this.get(d - g);
          f = d - (g + 1);
          break;
        }
        if (g > d) throw Error('TypeError: ReduceRight on List with no elements.');
      }
      for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function() {
      for (var a = Ic(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
      return this;
    },
    shift: function() {
      return this.shift();
    },
    slice: function(a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ?
        Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new xa(e);
    },
    some: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function(a, b) {
      var c = Ic(this);
      void 0 === b ? c.sort() : c.sort(function(e, f) {
        return Number(b.h(a, e, f));
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
      return this;
    },
    splice: function(a, b, c, d) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments,
        1, arguments.length - 1));
    },
    toString: function() {
      return this.toString();
    },
    unshift: function(a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var Lc = 'charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim'.split(' '),
    Mc = new sa('break'), Nc = new sa('continue'), Oc = function(a, b) {
      return E(this, a) + E(this, b);
    }, Pc = function(a, b) {
      return E(this, a) && E(this, b);
    }, Qc = function(a, b, c) {
      a = E(this, a);
      b = E(this, b);
      c = E(this, c);
      if (!(c instanceof xa)) throw Error('Error: Non-List argument given to Apply instruction.');
      if (null === a || void 0 === a) throw Error('TypeError: Can\'t read property ' +
        b + ' of ' + a + '.');
      var d = 'number' === typeof a;
      if ('boolean' === typeof a || d) {
        if ('toString' === b) {
          if (d && c.length()) {
            var e = Hc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {
            }
          }
          return a.toString();
        }
        throw Error('TypeError: ' + a + '.' + b + ' is not a function.');
      }
      if ('string' === typeof a) {
        if (0 <= Lc.indexOf(b)) {
          var f = Hc(c);
          return Gc(a[b].apply(a, f), this.h);
        }
        throw Error('TypeError: ' + b + ' is not a function');
      }
      if (a instanceof xa) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof gb) {
            var h = Ic(c);
            h.unshift(this.h);
            return g.h.apply(g, h);
          }
          throw Error('TypeError: ' +
            b + ' is not a function');
        }
        if (0 <= Kc.supportedMethods.indexOf(b)) {
          var l = Ic(c);
          l.unshift(this.h);
          return Kc[b].apply(a, l);
        }
      }
      if (a instanceof gb || a instanceof kb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof gb) {
            var p = Ic(c);
            p.unshift(this.h);
            return n.h.apply(n, p);
          }
          throw Error('TypeError: ' + b + ' is not a function');
        }
        if ('toString' === b) return a instanceof gb ? a.U : a.toString();
        if ('hasOwnProperty' === b) return a.has.apply(a, Ic(c));
      }
      if (a instanceof zc && 'toString' === b) return a.toString();
      throw Error('TypeError: Object has no \'' +
        b + '\' property.');
    }, Rc = function(a, b) {
      a = E(this, a);
      if ('string' !== typeof a) throw Error('Invalid key name given for assignment.');
      var c = this.h;
      if (!c.has(a)) throw Error('Attempting to assign to undefined value ' + b);
      var d = E(this, b);
      c.set(a, d);
      return d;
    }, Sc = function(a) {
      var b = Ca(this.h), c = jb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof sa) return c;
    }, Tc = function() {
      return Mc;
    }, Uc = function(a) {
      for (var b = E(this, a), c = 0; c < b.length; c++) {
        var d = E(this, b[c]);
        if (d instanceof sa) return d;
      }
    }, Vc = function(a) {
      for (var b =
        this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ('string' === typeof d) {
          var e = E(this, arguments[c + 1]);
          Ba(b, d, e, !0);
        }
      }
    }, Wc = function() {
      return Nc;
    }, Xc = function(a, b, c) {
      var d = new xa;
      b = E(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.h.add(a, E(this, f));
    }, Yc = function(a, b) {
      return E(this, a) / E(this, b);
    }, Zc = function(a, b) {
      a = E(this, a);
      b = E(this, b);
      var c = a instanceof zc, d = b instanceof zc;
      return c || d ? c && d ? a.Ra == b.Ra : !1 : a ==
        b;
    }, $c = function(a) {
      for (var b, c = 0; c < arguments.length; c++) b = E(this, arguments[c]);
      return b;
    };

  function ad(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)), g = jb(f, d);
      if (g instanceof sa) {
        if ('break' === g.h) break;
        if ('return' === g.h) return g;
      }
    }
  }

  function bd(a, b, c) {
    if ('string' === typeof b) return ad(a, function() {
      return b.length;
    }, function(f) {
      return f;
    }, c);
    if (b instanceof kb || b instanceof xa || b instanceof gb) {
      var d = b.Pb(), e = d.length();
      return ad(a, function() {
        return e;
      }, function(f) {
        return d.get(f);
      }, c);
    }
  }

  var cd = function(a, b, c) {
    a = E(this, a);
    b = E(this, b);
    c = E(this, c);
    var d = this.h;
    return bd(function(e) {
      d.set(a, e);
      return d;
    }, b, c);
  }, dd = function(a, b, c) {
    a = E(this, a);
    b = E(this, b);
    c = E(this, c);
    var d = this.h;
    return bd(function(e) {
      var f = Ca(d);
      Ba(f, a, e, !0);
      return f;
    }, b, c);
  }, ed = function(a, b, c) {
    a = E(this, a);
    b = E(this, b);
    c = E(this, c);
    var d = this.h;
    return bd(function(e) {
      var f = Ca(d);
      f.add(a, e);
      return f;
    }, b, c);
  }, gd = function(a, b, c) {
    a = E(this, a);
    b = E(this, b);
    c = E(this, c);
    var d = this.h;
    return fd(function(e) {
      d.set(a, e);
      return d;
    }, b, c);
  }, hd =
    function(a, b, c) {
      a = E(this, a);
      b = E(this, b);
      c = E(this, c);
      var d = this.h;
      return fd(function(e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    }, id = function(a, b, c) {
    a = E(this, a);
    b = E(this, b);
    c = E(this, c);
    var d = this.h;
    return fd(function(e) {
      var f = Ca(d);
      f.add(a, e);
      return f;
    }, b, c);
  };

  function fd(a, b, c) {
    if ('string' === typeof b) return ad(a, function() {
      return b.length;
    }, function(d) {
      return b[d];
    }, c);
    if (b instanceof xa) return ad(a, function() {
      return b.length();
    }, function(d) {
      return b.get(d);
    }, c);
    throw new TypeError('The value is not iterable.');
  }

  var jd = function(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }

    var f = E(this, a);
    if (!(f instanceof xa)) throw Error('TypeError: Non-List argument given to ForLet instruction.');
    var g = this.h;
    d = E(this, d);
    var h = Ca(g);
    for (e(g, h); ib(h, b);) {
      var l = jb(h, d);
      if (l instanceof sa) {
        if ('break' === l.h) break;
        if ('return' === l.h) return l;
      }
      var n = Ca(g);
      e(h, n);
      ib(n, c);
      h = n;
    }
  }, kd = function(a) {
    a = E(this, a);
    var b = this.h, c = !1;
    if (c && !b.has(a)) throw new ReferenceError(a + ' is not defined.');
    return b.get(a);
  }, ld = function(a, b) {
    var c;
    a = E(this, a);
    b = E(this, b);
    if (void 0 === a || null === a) throw Error('TypeError: cannot access property of ' + a + '.');
    if (a instanceof kb || a instanceof xa || a instanceof gb) c = a.get(b); else if ('string' === typeof a) 'length' === b ? c = a.length : ta(b) && (c = a[b]); else if (a instanceof zc) return;
    return c;
  }, md = function(a, b) {
    return E(this, a) > E(this,
      b);
  }, nd = function(a, b) {
    return E(this, a) >= E(this, b);
  }, od = function(a, b) {
    a = E(this, a);
    b = E(this, b);
    a instanceof zc && (a = a.Ra);
    b instanceof zc && (b = b.Ra);
    return a === b;
  }, pd = function(a, b) {
    return !od.call(this, a, b);
  }, qd = function(a, b, c) {
    var d = [];
    E(this, a) ? d = E(this, b) : c && (d = E(this, c));
    var e = jb(this.h, d);
    if (e instanceof sa) return e;
  }, rd = function(a, b) {
    return E(this, a) < E(this, b);
  }, sd = function(a, b) {
    return E(this, a) <= E(this, b);
  }, td = function(a, b) {
    return E(this, a) % E(this, b);
  }, ud = function(a, b) {
    return E(this, a) * E(this, b);
  }, vd = function(a) {
    return -E(this,
      a);
  }, wd = function(a) {
    return !E(this, a);
  }, xd = function(a, b) {
    return !Zc.call(this, a, b);
  }, yd = function() {
    return null;
  }, zd = function(a, b) {
    return E(this, a) || E(this, b);
  }, Ad = function(a, b) {
    var c = E(this, a);
    E(this, b);
    return c;
  }, Bd = function(a) {
    return E(this, a);
  }, Cd = function(a) {
    return Array.prototype.slice.apply(arguments);
  }, Dd = function(a) {
    return new sa('return', E(this, a));
  }, Ed = function(a, b, c) {
    a = E(this, a);
    b = E(this, b);
    c = E(this, c);
    if (null === a || void 0 === a) throw Error('TypeError: Can\'t set property ' + b + ' of ' + a + '.');
    (a instanceof
      gb || a instanceof xa || a instanceof kb) && a.set(b, c);
    return c;
  }, Fd = function(a, b) {
    return E(this, a) - E(this, b);
  }, Gd = function(a, b, c) {
    a = E(this, a);
    var d = E(this, b), e = E(this, c);
    if (!Ia(d) || !Ia(e)) throw Error('Error: Malformed switch instruction.');
    for (var f, g = !1, h = 0; h < d.length; h++) if (g || a === E(this, d[h])) if (f = E(this, e[h]), f instanceof sa) {
      var l = f.h;
      if ('break' === l) return;
      if ('return' === l || 'continue' === l) return f;
    } else g = !0;
    if (e.length === d.length + 1 && (f = E(this, e[e.length - 1]), f instanceof sa && ('return' === f.h || 'continue' ===
      f.h))) return f;
  }, Hd = function(a, b, c) {
    return E(this, a) ? E(this, b) : E(this, c);
  }, Id = function(a) {
    a = E(this, a);
    return a instanceof gb ? 'function' : typeof a;
  }, Jd = function(a) {
    for (var b = this.h, c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      'string' !== typeof d || b.add(d, void 0);
    }
  }, Kd = function(a, b, c, d) {
    var e = E(this, d);
    if (E(this, c)) {
      var f = jb(this.h, e);
      if (f instanceof sa) {
        if ('break' === f.h) return;
        if ('return' === f.h) return f;
      }
    }
    for (; E(this, a);) {
      var g = jb(this.h, e);
      if (g instanceof sa) {
        if ('break' === g.h) break;
        if ('return' === g.h) return g;
      }
      E(this,
        b);
    }
  }, Ld = function(a) {
    return ~Number(E(this, a));
  }, Pd = function(a, b) {
    return Number(E(this, a)) << Number(E(this, b));
  }, Qd = function(a, b) {
    return Number(E(this, a)) >> Number(E(this, b));
  }, Rd = function(a, b) {
    return Number(E(this, a)) >>> Number(E(this, b));
  }, Sd = function(a, b) {
    return Number(E(this, a)) & Number(E(this, b));
  }, Td = function(a, b) {
    return Number(E(this, a)) ^ Number(E(this, b));
  }, Ud = function(a, b) {
    return Number(E(this, a)) | Number(E(this, b));
  };
  var Wd = function() {
    this.h = new mb;
    Vd(this);
  };
  Wd.prototype.execute = function(a) {
    return Xd(this.h.B(a));
  };
  var Yd = function(a, b, c) {
    return Xd(a.h.F(b, c));
  }, Vd = function(a) {
    var b = function(d, e) {
      ob(a.h, d, String(e));
    };
    b('control', 49);
    b('fn', 51);
    b('list', 7);
    b('map', 8);
    b('undefined', 44);
    var c = function(d, e) {
      nb(a.h, String(d), e);
    };
    c(0, Oc);
    c(1, Pc);
    c(2, Qc);
    c(3, Rc);
    c(53, Sc);
    c(4, Tc);
    c(5, Uc);
    c(52, Vc);
    c(6, Wc);
    c(9, Uc);
    c(50, Xc);
    c(10, Yc);
    c(12, Zc);
    c(13, $c);
    c(47, cd);
    c(54, dd);
    c(55, ed);
    c(63, jd);
    c(64, gd);
    c(65, hd);
    c(66, id);
    c(15, kd);
    c(16, ld);
    c(17, ld);
    c(18, md);
    c(19, nd);
    c(20, od);
    c(21, pd);
    c(22, qd);
    c(23, rd);
    c(24, sd);
    c(25, td);
    c(26, ud);
    c(27,
      vd);
    c(28, wd);
    c(29, xd);
    c(45, yd);
    c(30, zd);
    c(32, Ad);
    c(33, Ad);
    c(34, Bd);
    c(35, Bd);
    c(46, Cd);
    c(36, Dd);
    c(43, Ed);
    c(37, Fd);
    c(38, Gd);
    c(39, Hd);
    c(40, Id);
    c(41, Jd);
    c(42, Kd);
    c(58, Ld);
    c(57, Pd);
    c(60, Qd);
    c(61, Rd);
    c(56, Sd);
    c(62, Td);
    c(59, Ud);
  };

  function Xd(a) {
    if (a instanceof sa || a instanceof gb || a instanceof xa || a instanceof kb || a instanceof zc || null === a || void 0 === a || 'string' === typeof a || 'number' === typeof a || 'boolean' === typeof a) return a;
  }var Zd = function() {
    var a = function(b) {
      return {
        toString: function() {
          return b;
        },
      };
    };
    return {
      Mi: a('consent'),
      Fg: a('convert_case_to'),
      Gg: a('convert_false_to'),
      Hg: a('convert_null_to'),
      Ig: a('convert_true_to'),
      Jg: a('convert_undefined_to'),
      yl: a('debug_mode_metadata'),
      Wa: a('function'),
      Cf: a('instance_name'),
      Bj: a('live_only'),
      Cj: a('malware_disabled'),
      Dj: a('metadata'),
      Gj: a('original_activity_id'),
      Cl: a('original_vendor_template_id'),
      Bl: a('once_on_load'),
      Fj: a('once_per_event'),
      Kh: a('once_per_load'),
      El: a('priority_override'),
      Fl: a('respected_consent_types'),
      Oh: a('setup_tags'),
      Bb: a('tag_id'),
      Th: a('teardown_tags'),
    };
  }();
  var ue;
  var ve = [], we = [], xe = [], ye = [], ze = [], Ae = {}, Be, Ce, Fe = function() {
    var a = Ee;
    Ce = Ce || a;
  }, Ge, He = function(a, b) {
    var c = {};
    c['function'] = '__' + a;
    for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d]);
    return c;
  }, Ie = function(a, b) {
    var c = a['function'], d = b && b.event;
    if (!c) throw Error('Error: No function name given for function call.');
    var e = Ae[c], f = {}, g;
    for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf('vtp_') && (e && d && d.Yh && d.Yh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
    e && d && d.Xh && (f.vtp_gtmCachedValues = d.Xh);
    if (b) {
      if (null ==
        b.name) {
        var h;
        a:{
          var l = b.index;
          if (null == l) h = ''; else {
            var n;
            switch (b.type) {
              case 2:
                n = ve[l];
                break;
              case 1:
                n = ye[l];
                break;
              default:
                h = '';
                break a;
            }
            var p = n && n[Zd.Cf];
            h = p ? String(p) : '';
          }
        }
        b.name = h;
      }
      e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name);
    }
    return void 0 !== e ? e(f) : ue(c, f, b);
  }, Ke = function(a, b, c) {
    c = c || [];
    var d = {}, e;
    for (e in a) a.hasOwnProperty(e) && (d[e] = Je(a[e], b, c));
    return d;
  }, Je = function(a, b, c) {
    if (Ia(a)) {
      var d;
      switch (a[0]) {
        case 'function_id':
          return a[1];
        case 'list':
          d = [];
          for (var e = 1; e < a.length; e++) d.push(Je(a[e],
            b, c));
          return d;
        case 'macro':
          var f = a[1];
          if (c[f]) return;
          var g = ve[f];
          if (!g || b.Zf(g)) return;
          c[f] = !0;
          var h = String(g[Zd.Cf]);
          try {
            var l = Ke(g, b, c);
            l.vtp_gtmEventId = b.id;
            b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
            d = Ie(l, { event: b, index: f, type: 2, name: h });
            Ge && (d = Ge.Tj(d, l));
          } catch (x) {
            b.ji && b.ji(x, Number(f), h), d = !1;
          }
          c[f] = !1;
          return d;
        case 'map':
          d = {};
          for (var n = 1; n < a.length; n += 2) d[Je(a[n], b, c)] = Je(a[n + 1], b, c);
          return d;
        case 'template':
          d = [];
          for (var p = !1, q = 1; q < a.length; q++) {
            var r = Je(a[q], b, c);
            Ce && (p = p || r === Ce.se);
            d.push(r);
          }
          return Ce && p ? Ce.Vj(d) : d.join('');
        case 'escape':
          d = Je(a[1], b, c);
          if (Ce && Ia(a[1]) && 'macro' === a[1][0] && Ce.xk(a)) return Ce.Qk(d);
          d = String(d);
          for (var u = 2; u < a.length; u++) $d[a[u]] && (d = $d[a[u]](d));
          return d;
        case 'tag':
          var t = a[1];
          if (!ye[t]) throw Error('Unable to resolve tag reference ' + t + '.');
          return d = { di: a[2], index: t };
        case 'zb':
          var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
          v['function'] = a[1];
          var w = Le(v, b, c), y = !!a[4];
          return y || 2 !== w ? y !== (1 === w) : null;
        default:
          throw Error('Attempting to expand unknown Value type: ' +
            a[0] + '.');
      }
    }
    return a;
  }, Le = function(a, b, c) {
    try {
      return Be(Ke(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  };
  var Me = function(a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    'stack' in d && (this.stack = d.stack);
    this.B = a;
    this.h = c;
  };
  pa(Me, Error);

  function Ne(a, b) {
    if (Ia(a)) {
      Object.defineProperty(a, 'context', { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Ne(a[c], b[c]);
    }
  }var Oe = function(a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    'stack' in c && (this.stack = c.stack);
    this.Mk = a;
    this.B = b;
    this.h = [];
  };
  pa(Oe, Error);
  var Qe = function() {
    return function(a, b) {
      a instanceof Oe || (a = new Oe(a, Pe));
      b && a.h.push(b);
      throw a;
    };
  };

  function Pe(a) {
    if (!a.length) return a;
    a.push({ id: 'main', line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }var Te = function(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }

    for (var c = [], d = [], e = Re(a), f = 0; f < we.length; f++) {
      var g = we[f], h = Se(g, e);
      if (h) {
        for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
        b(g.block || []);
      } else null === h && b(g.block || []);
    }
    for (var p = [], q = 0; q < ye.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }, Se = function(a, b) {
    for (var c = a['if'] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (0 === e) return !1;
      if (2 === e) return null;
    }
    for (var f =
      a.unless || [], g = 0; g < f.length; g++) {
      var h = b(f[g]);
      if (2 === h) return null;
      if (1 === h) return !1;
    }
    return !0;
  }, Re = function(a) {
    var b = [];
    return function(c) {
      void 0 === b[c] && (b[c] = Le(xe[c], a));
      return b[c];
    };
  };
  var Ue = {
    Tj: function(a, b) {
      b[Zd.Fg] && 'string' === typeof a && (a = 1 == b[Zd.Fg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Zd.Hg) && null === a && (a = b[Zd.Hg]);
      b.hasOwnProperty(Zd.Jg) && void 0 === a && (a = b[Zd.Jg]);
      b.hasOwnProperty(Zd.Ig) && !0 === a && (a = b[Zd.Ig]);
      b.hasOwnProperty(Zd.Gg) && !1 === a && (a = b[Zd.Gg]);
      return a;
    },
  };
  var Ve = function() {
    this.h = {};
  };

  function We(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0, g = 'A policy function denied the permission request';
      try {
        f = a[e].call(void 0, b, c, d), g += '.';
      } catch (h) {
        g = 'string' === typeof h ? g + (': ' + h) : h instanceof Error ? g + (': ' + h.message) : g + '.';
      }
      if (!f) throw new Me(c, d, g);
    }
  }

  function Xe(a, b, c) {
    return function() {
      var d = arguments[0];
      if (d) {
        var e = a.h[d], f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          We(e, b, d, g);
          We(f, b, d, g);
        }
      }
    };
  }var $e = function() {
    var a = data.permissions || {}, b = L.H, c = this;
    this.B = new Ve;
    this.h = {};
    var d = {}, e = Xe(this.B, b, function() {
      var f = arguments[0];
      return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
    });
    m(a, function(f, g) {
      var h = {};
      m(g, function(l, n) {
        var p = Ye(l, n);
        h[l] = p.assert;
        d[l] || (d[l] = p.ba);
      });
      c.h[f] = function(l, n) {
        var p = h[l];
        if (!p) throw Ze(l, {}, 'The requested permission ' + l + ' is not configured.');
        var q = Array.prototype.slice.call(arguments, 0);
        p.apply(void 0, q);
        e.apply(void 0, q);
      };
    });
  }, bf =
    function(a) {
      return af.h[a] || function() {
      };
    };

  function Ye(a, b) {
    var c = He(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ze;
    try {
      return Ie(c);
    } catch (d) {
      return {
        assert: function(e) {
          throw new Me(e, {}, 'Permission ' + e + ' is unknown.');
        }, ba: function() {
          for (var e = {}, f = 0; f < arguments.length; ++f) e['arg' + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }

  function Ze(a, b, c) {
    return new Me(a, b, c);
  }var cf = !1;
  var df = {};
  df.xl = Qa('');
  df.Yj = Qa('');
  var ef = cf, ff = df.Yj, gf = df.xl;
  var yf = /:[0-9]+$/, zf = /^\d+\.fls\.doubleclick\.net$/, Af = function(a, b, c, d) {
      for (var e = [], f = a.split('&'), g = 0; g < f.length; g++) {
        var h = f[g].split('=');
        if (decodeURIComponent(h[0]).replace(/\+/g, ' ') === b) {
          var l = h.slice(1).join('=');
          if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, ' ');
          e.push(d ? l : decodeURIComponent(l).replace(/\+/g, ' '));
        }
      }
      return c ? e : void 0;
    }, Df = function(a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ('protocol' === b || 'port' === b) a.protocol = Bf(a.protocol) || Bf(z.location.protocol);
      'port' === b ? a.port =
        String(Number(a.hostname ? a.port : z.location.port) || ('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : '')) : 'host' === b && (a.hostname = (a.hostname || z.location.hostname).replace(yf, '').toLowerCase());
      return Cf(a, b, c, d, e);
    }, Cf = function(a, b, c, d, e) {
      var f, g = Bf(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'url_no_fragment':
          f = Ef(a);
          break;
        case 'protocol':
          f = g;
          break;
        case 'host':
          f = a.hostname.replace(yf, '').toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case 'port':
          f =
            String(Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : ''));
          break;
        case 'path':
          a.pathname || a.hostname || wb('TAGGING', 1);
          f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var l = f.split('/');
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = '');
          f = l.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = Af(f, e, !1));
          break;
        case 'extension':
          var n = a.pathname.split('.');
          f = 1 < n.length ? n[n.length - 1] : '';
          f = f.split('/')[0];
          break;
        case 'fragment':
          f = a.hash.replace('#', '');
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Bf = function(a) {
      return a ? a.replace(':', '').toLowerCase() : '';
    }, Ef = function(a) {
      var b = '';
      if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    }, Ff = function(a) {
      var b = I.createElement('a');
      a && (b.href = a);
      var c = b.pathname;
      '/' !== c[0] && (a || wb('TAGGING', 1), c = '/' + c);
      var d = b.hostname.replace(yf, '');
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    }, Gf = function(a) {
      function b(n) {
        var p = n.split('=')[0];
        return 0 > d.indexOf(p) ? n :
          p + '=0';
      }

      function c(n) {
        return n.split('&').map(b).filter(function(p) {
          return void 0 !== p;
        }).join('&');
      }

      var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '), e = Ff(a), f = a.split(/[?#]/)[0],
        g = e.search, h = e.hash;
      '?' === g[0] && (g = g.substring(1));
      '#' === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      '' !== g && (g = '?' + g);
      '' !== h && (h = '#' + h);
      var l = '' + f + g + h;
      '/' === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    }, Hf = function(a) {
      var b = Ff(z.location.href), c = Df(b, 'host', !1);
      if (c && c.match(zf)) {
        var d = Df(b,
          'path').split(a + '=');
        if (1 < d.length) return d[1].split(';')[0].split('?')[0];
      }
    };
  var If = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'];

  function Jf(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }

  var Kf = new Ma;

  function Lf(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
      var e = String(b) + d, f = Kf.get(e);
      f || (f = new RegExp(b, d), Kf.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }

  function Mf(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }

  function Nf(a, b) {
    return String(a) === String(b);
  }

  function Of(a, b) {
    return Number(a) >= Number(b);
  }

  function Pf(a, b) {
    return Number(a) <= Number(b);
  }

  function Sf(a, b) {
    return Number(a) > Number(b);
  }

  function Tf(a, b) {
    return Number(a) < Number(b);
  }

  function Uf(a, b) {
    return 0 === String(a).indexOf(String(b));
  }

  function Vf(a, b) {
    function c(g) {
      var h = Ff(g), l = Df(h, 'protocol'), n = Df(h, 'host', !0), p = Df(h, 'port'),
        q = Df(h, 'path').toLowerCase().replace(/\/$/, '');
      if (void 0 === l || 'http' === l && '80' === p || 'https' === l && '443' === p) l = 'web', p = 'default';
      return [l, n, p, q];
    }

    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  var Wf = function(a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    }, Xf = function(a, b) {
      var c = '*' === b.charAt(b.length - 1) || '/' === b || '/*' === b;
      Wf(b, '/*') && (b = b.slice(0, -2));
      Wf(b, '?') && (b = b.slice(0, -1));
      var d = b.split('*');
      if (!c && 1 === d.length) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (-1 === e || 0 === f && 0 !== e) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var h = d[d.length - 1];
      return a.lastIndexOf(h) === a.length - h.length;
    }, Yf = /^[a-z0-9-]+$/i, Zf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
    ag = function(a, b) {
      var c;
      if (!(c = !$f(a))) {
        var d;
        a:{
          var e = a.hostname.split('.');
          if (2 > e.length) d = !1; else {
            for (var f = 0; f < e.length; f++) if (!Yf.exec(e[f])) {
              d = !1;
              break a;
            }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var h;
        var l = a, n = b[g];
        if (!Zf.exec(n)) throw Error('Invalid Wildcard');
        var p = n.slice(8), q = p.slice(0, p.indexOf('/')), r;
        var u = l.hostname, t = q;
        if (0 !== t.indexOf('*.')) r = u.toLowerCase() === t.toLowerCase(); else {
          t = t.slice(2);
          var v = u.toLowerCase().indexOf(t.toLowerCase());
          r = -1 === v ? !1 : u.length === t.length ?
            !0 : u.length !== t.length + v ? !1 : '.' === u[v - 1];
        }
        if (r) {
          var w = p.slice(p.indexOf('/'));
          h = Xf(l.pathname + l.search, w) ? !0 : !1;
        } else h = !1;
        if (h) return !0;
      }
      return !1;
    }, $f = function(a) {
      return 'https:' === a.protocol && (!a.port || '443' === a.port);
    };
  var bg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

  function cg(a, b) {
    return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[a << 2 | b];
  }var dg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    eg = { Fn: 'function', DustMap: 'Object', List: 'Array' }, M = function(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = dg.exec(b[d]);
        if (!e) throw Error('Internal Error in ' + a);
        var f = e[1], g = '!' === e[2], h = e[3], l = c[d];
        if (null == l) {
          if (g) throw Error('Error in ' + a + '. Required argument ' + f + ' not supplied.');
        } else if ('*' !== h) {
          var n = typeof l;
          l instanceof gb ? n = 'Fn' : l instanceof xa ? n = 'List' : l instanceof kb ? n = 'DustMap' : l instanceof zc && (n = 'OpaqueValue');
          if (n != h) throw Error('Error in ' + a + '. Argument ' + f + ' has type ' + (eg[n] || n) + ', which does not match required type ' + (eg[h] || h) + '.');
        }
      }
    };

  function fg(a) {
    return '' + a;
  }

  function gg(a, b) {
    var c = [];
    return c;
  }var hg = function(a, b) {
    var c = new gb(a, function() {
      for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = E(this, d[e]);
      return b.apply(this, d);
    });
    c.Qb();
    return c;
  }, ig = function(a, b) {
    var c = new kb, d;
    for (d in b) if (b.hasOwnProperty(d)) {
      var e = b[d];
      Ea(e) ? c.set(d, hg(a + '_' + d, e)) : (Ga(e) || k(e) || 'boolean' === typeof e) && c.set(d, e);
    }
    c.Qb();
    return c;
  };
  var jg = function(a, b) {
    M(F(this), ['apiName:!string', 'message:?string'], arguments);
    var c = {}, d = new kb;
    return d = ig('AssertApiSubject', c);
  };
  var kg = function(a, b) {
    M(F(this), ['actual:?*', 'message:?string'], arguments);
    if (a instanceof Bc) throw Error('Argument actual cannot have type Promise. Assertions on asynchronous code aren\'t supported.');
    var c = {}, d = new kb;
    return d = ig('AssertThatSubject', c);
  };

  function lg(a) {
    return function() {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Hc(arguments[d], c));
      return Gc(a.apply(null, b));
    };
  }

  var ng = function() {
    for (var a = Math, b = mg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = lg(a[e].bind(a)));
    }
    return c;
  };
  var og = function(a) {
    var b;
    return b;
  };
  var pg = function(a) {
    var b;
    return b;
  };
  var qg = function(a) {
    return encodeURI(a);
  };
  var rg = function(a) {
    return encodeURIComponent(a);
  };

  function sg(a, b) {
    var c = !1;
    return c;
  }

  sg.P = 'internal.evaluateBooleanExpression';
  var xg = function(a) {
    M(F(this), ['message:?string'], arguments);
  };
  var yg = function(a, b) {
    M(F(this), ['min:!number', 'max:!number'], arguments);
    return La(a, b);
  };
  var P = function(a, b, c) {
    var d = a.h.h;
    if (!d) throw Error('Missing program state.');
    d.Rj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var zg = function() {
    P(this, 'read_container_data');
    var a = new kb;
    a.set('containerId', 'GTM-55K5P45');
    a.set('version', '43');
    a.set('environmentName', '');
    a.set('debugMode', ef);
    a.set('previewMode', gf);
    a.set('environmentMode', ff);
    a.Qb();
    return a;
  };
  var Ag = function() {
    return (new Date).getTime();
  };
  var Bg = function(a) {
    if (null === a) return 'null';
    if (a instanceof xa) return 'array';
    if (a instanceof gb) return 'function';
    if (a instanceof zc) {
      a = a.Ra;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Cg = function(a) {
    function b(c) {
      return function(d) {
        try {
          return c(d);
        } catch (e) {
          (ef || gf) && a.call(this, e.message);
        }
      };
    }

    return {
      parse: b(function(c) {
        return Gc(JSON.parse(c));
      }), stringify: b(function(c) {
        return JSON.stringify(Hc(c));
      }),
    };
  };
  var Dg = function(a) {
    return Pa(Hc(a, this.h));
  };
  var Eg = function(a) {
    return Number(Hc(a, this.h));
  };
  var Fg = function(a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a.toString();
  };
  var Gg = function(a, b, c) {
    var d = null, e = !1;
    M(F(this), ['tableObj:!List', 'keyColumnName:!string', 'valueColumnName:!string'], arguments);
    d = new kb;
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof kb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0);
    }
    return e ? d : null;
  };
  var mg = 'floor ceil round max min abs pow sqrt'.split(' ');
  var Hg = function() {
    var a = {};
    return {
      kk: function(b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      }, nl: function(b, c) {
        a[b] = c;
      }, reset: function() {
        a = {};
      },
    };
  }, Ig = function(a, b) {
    return function() {
      var c = Array.prototype.slice.call(arguments, 0);
      c.unshift(b);
      return gb.prototype.h.apply(a, c);
    };
  }, Jg = function(a, b) {
    M(F(this), ['apiName:!string', 'mock:?*'], arguments);
  };
  var Kg = {};
  Kg.keys = function(a) {
    return new xa;
  };
  Kg.values = function(a) {
    return new xa;
  };
  Kg.entries = function(a) {
    return new xa;
  };
  Kg.freeze = function(a) {
    return a;
  };
  Kg.delete = function(a, b) {
    return !1;
  };
  var Mg = function() {
    this.h = {};
    this.B = {};
  };
  Mg.prototype.get = function(a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  Mg.prototype.add = function(a, b, c) {
    if (this.h.hasOwnProperty(a)) throw'Attempting to add a function which already exists: ' + a + '.';
    if (this.B.hasOwnProperty(a)) throw'Attempting to add an API with an existing private API name: ' + a + '.';
    this.h[a] = c ? void 0 : Ea(b) ? hg(a, b) : ig(a, b);
  };

  function Ng(a, b) {
    var c = void 0;
    return c;
  }

  function Og() {
    var a = {};
    return a;
  }var Qg = function(a) {
    return Pg ? I.querySelectorAll(a) : null;
  }, Rg = function(a, b) {
    if (!Pg) return null;
    if (Element.prototype.closest) try {
      return a.closest(b);
    } catch (e) {
      return null;
    }
    var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
      d = a;
    if (!I.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (null !== d && 1 === d.nodeType);
    return null;
  }, Sg = !1;
  if (I.querySelectorAll) try {
    var Tg = I.querySelectorAll(':root');
    Tg && 1 == Tg.length && Tg[0] == I.documentElement && (Sg = !0);
  } catch (a) {
  }
  var Pg = Sg;
  var Q = function(a) {
    wb('GTM', a);
  };
  var Ug = function(a) {
      return null == a ? '' : k(a) ? Sa(String(a)) : 'e0';
    }, Wg = function(a) {
      return a.replace(Vg, '');
    }, Yg = function(a) {
      return Xg(a.replace(/\s/g, ''));
    }, Xg = function(a) {
      return Sa(a.replace(Zg, '').toLowerCase());
    }, ah = function(a) {
      a = a.replace(/[\s-()/.]/g, '');
      '+' !== a.charAt(0) && (a = '+' + a);
      return $g.test(a) ? a : 'e0';
    }, ch = function(a) {
      var b = a.toLowerCase().split('@');
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
        c = c + '@' + b[1];
        if (bh.test(c)) return c;
      }
      return 'e0';
    }, fh = function(a,
      b) {
      window.Promise || b([]);
      Promise.all(a.map(function(c) {
        return c.value && -1 !== dh.indexOf(c.name) ? eh(c.value).then(function(d) {
          c.value = d;
        }) : Promise.resolve();
      })).then(function() {
        b(a);
      }).catch(function() {
        b([]);
      });
    }, eh = function(a) {
      if ('' === a || 'e0' === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (gh.test(a)) return Promise.resolve(a);
        try {
          var b = hh(a);
          return z.crypto.subtle.digest('SHA-256', b).then(function(c) {
            var d = Array.from(new Uint8Array(c)).map(function(e) {
              return String.fromCharCode(e);
            }).join('');
            return z.btoa(d).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
          }).catch(function() {
            return 'e2';
          });
        } catch (c) {
          return Promise.resolve('e2');
        }
      } else return Promise.resolve('e1');
    }, hh = function(a) {
      var b;
      if (z.TextEncoder) b = (new TextEncoder('utf-8')).encode(a); else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
            e >> 6 & 63, 128 | e & 63));
        }
        b = new Uint8Array(c);
      }
      return b;
    }, Zg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, bh = /^\S+@\S+\.\S+$/, $g = /^\+\d{10,15}$/, Vg = /[.~]/g,
    ih = /^[0-9A-Za-z_-]{43}$/, gh = /^[0-9A-Fa-f]{64}$/, jh = {},
    kh = (jh.email = 'em', jh.phone_number = 'pn', jh.first_name = 'fn', jh.last_name = 'ln', jh.street = 'sa', jh.city = 'ct', jh.region = 'rg', jh.country = 'co', jh.postal_code = 'pc', jh.error_code = 'ec', jh),
    lh = {},
    mh = (lh.email = 'sha256_email_address', lh.phone_number = 'sha256_phone_number', lh.first_name = 'sha256_first_name', lh.last_name =
      'sha256_last_name', lh.street = 'sha256_street', lh), nh = function(a, b) {
      function c(u, t, v, w) {
        var y = Ug(u);
        '' !== y && (gh.test(y) ? l.push({ name: t, value: y, index: w }) : l.push({ name: t, value: v(y), index: w }));
      }

      function d(u, t) {
        var v = u;
        if (k(v) || Ia(v)) {
          v = Ia(u) ? u : [u];
          for (var w = 0; w < v.length; ++w) {
            var y = Ug(v[w]), x = gh.test(y);
            t && !x && Q(89);
            !t && x && Q(88);
          }
        }
      }

      function e(u, t) {
        var v = u[t];
        d(v, !1);
        var w = mh[t];
        u.hasOwnProperty(w) && (u.hasOwnProperty(t) && Q(90), v = u[w], d(v, !0));
        return v;
      }

      function f(u, t, v) {
        var w = e(u, t);
        w = Ia(w) ? w : [w];
        for (var y =
          0; y < w.length; ++y) c(w[y], t, v);
      }

      function g(u, t, v, w) {
        var y = e(u, t);
        c(y, t, v, w);
      }

      function h(u) {
        return function(t) {
          Q(64);
          return u(t);
        };
      }

      var l = [];
      if ('https:' === z.location.protocol) {
        f(a, 'email', ch);
        f(a, 'phone_number', ah);
        f(a, 'first_name', h(Yg));
        f(a, 'last_name', h(Yg));
        var n = a.home_address || {};
        f(n, 'street', h(Xg));
        f(n, 'city', h(Xg));
        f(n, 'postal_code', h(Wg));
        f(n, 'region', h(Xg));
        f(n, 'country', h(Wg));
        var p = a.address || {};
        p = Ia(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, 'first_name', Yg, q);
          g(r, 'last_name', Yg, q);
          g(r, 'street', Xg, q);
          g(r, 'city', Xg, q);
          g(r, 'postal_code', Wg, q);
          g(r, 'region', Xg, q);
          g(r, 'country', Wg, q);
        }
        fh(l, b);
      } else l.push({ name: 'error_code', value: 'e3', index: void 0 }), b(l);
    }, oh = function(a, b) {
      nh(a, function(c) {
        for (var d = ['tv.1'], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name, h = c[f].value, l = c[f].index, n = kh[g];
          n && h && (-1 === dh.indexOf(g) || /^e\d+$/.test(h) || ih.test(h) || gh.test(h)) && (void 0 !== l && (n += l), d.push(n + '.' + h), e++);
        }
        1 === c.length && 'error_code' === c[0].name && (e = 0);
        b(encodeURIComponent(d.join('~')), e);
      });
    }, ph = function(a) {
      if (z.Promise) try {
        return new Promise(function(b) {
          oh(a,
            function(c, d) {
              b({ mg: c, Pk: d });
            });
        });
      } catch (b) {
      }
    }, dh = Object.freeze(['email', 'phone_number', 'first_name', 'last_name', 'street']);
  var T = {
      g: {
        K: 'ad_storage',
        W: 'analytics_storage',
        Re: 'region',
        Bg: 'consent_updated',
        Se: 'wait_for_update',
        Qi: 'app_remove',
        Ri: 'app_store_refund',
        Si: 'app_store_subscription_cancel',
        Ti: 'app_store_subscription_convert',
        Ui: 'app_store_subscription_renew',
        Kg: 'add_payment_info',
        Lg: 'add_shipping_info',
        Gc: 'add_to_cart',
        Hc: 'remove_from_cart',
        Mg: 'view_cart',
        Yb: 'begin_checkout',
        Ic: 'select_item',
        Gb: 'view_item_list',
        Zb: 'select_promotion',
        Hb: 'view_promotion',
        Ha: 'purchase',
        Jc: 'refund',
        Ia: 'view_item',
        Ng: 'add_to_wishlist',
        Vi: 'first_open',
        Wi: 'first_visit',
        Ea: 'gtag.config',
        Ja: 'gtag.get',
        Xi: 'in_app_purchase',
        Kc: 'page_view',
        Yi: 'session_start',
        Xe: 'user_engagement',
        ac: 'gclid',
        oa: 'ads_data_redaction',
        da: 'allow_ad_personalization_signals',
        Ye: 'allow_custom_scripts',
        Zi: 'allow_display_features',
        Nd: 'allow_enhanced_conversions',
        Ib: 'allow_google_signals',
        Fa: 'allow_interest_groups',
        Od: 'auid',
        aj: 'auto_detection_enabled',
        Jb: 'aw_remarketing',
        Ze: 'aw_remarketing_only',
        Pd: 'discount',
        Qd: 'aw_feed_country',
        Rd: 'aw_feed_language',
        ja: 'items',
        Sd: 'aw_merchant_id',
        Og: 'aw_basket_type',
        Td: 'campaign_content',
        Ud: 'campaign_id',
        Vd: 'campaign_medium',
        Wd: 'campaign_name',
        Lc: 'campaign',
        Xd: 'campaign_source',
        Yd: 'campaign_term',
        ub: 'client_id',
        bj: 'content_group',
        cj: 'content_type',
        Ka: 'conversion_cookie_prefix',
        Mc: 'conversion_id',
        ya: 'conversion_linker',
        Nc: 'conversion_api',
        vb: 'cookie_domain',
        Sa: 'cookie_expires',
        wb: 'cookie_flags',
        Oc: 'cookie_name',
        af: 'cookie_path',
        ib: 'cookie_prefix',
        bc: 'cookie_update',
        Pc: 'country',
        sa: 'currency',
        Zd: 'customer_lifetime_value',
        Qc: 'custom_map',
        dj: 'debug_mode',
        fa: 'developer_id',
        ej: 'disable_merchant_reported_purchases',
        fj: 'dc_custom_params',
        gj: 'dc_natural_search',
        bf: 'dynamic_event_settings',
        ij: 'affiliation',
        Pg: 'checkout_option',
        Qg: 'checkout_step',
        jj: 'coupon',
        cf: 'item_list_name',
        df: 'list_name',
        kj: 'promotions',
        ae: 'shipping',
        Rg: 'tax',
        be: 'engagement_time_msec',
        Rc: 'enhanced_client_id',
        Sc: 'enhanced_conversions',
        Sg: 'enhanced_conversions_automatic_settings',
        ce: 'estimated_delivery_date',
        ef: 'euid_logged_in_state',
        cc: 'event_callback',
        fc: 'event_developer_id_string',
        Tg: 'event',
        de: 'event_settings',
        ee: 'event_timeout',
        lj: 'experiments',
        ff: 'firebase_id',
        fe: 'first_party_collection',
        he: '_x_20',
        Kb: '_x_19',
        Ug: 'fledge',
        Vg: 'flight_error_code',
        Wg: 'flight_error_message',
        Xg: 'gac_gclid',
        ie: 'gac_wbraid',
        Yg: 'gac_wbraid_multiple_conversions',
        hf: 'ga_restrict_domain',
        jf: 'ga_temp_client_id',
        Zg: 'gdpr_applies',
        ah: 'geo_granularity',
        xb: 'value_callback',
        jb: 'value_key',
        zl: 'google_ono',
        kb: 'google_signals',
        Tc: 'google_tld',
        je: 'groups',
        bh: 'gsa_experiment_id',
        dh: 'iframe_state',
        ke: 'ignore_referrer',
        kf: 'internal_traffic_results',
        me: 'is_legacy_loaded',
        eh: 'is_passthrough',
        Ta: 'language',
        lf: 'legacy_developer_id_string',
        za: 'linker',
        ic: 'accept_incoming',
        Lb: 'decorate_forms',
        V: 'domains',
        jc: 'url_position',
        fh: 'method',
        Uc: 'new_customer',
        gh: 'non_interaction',
        mj: 'optimize_id',
        hh: 'page_hostname',
        Vc: 'page_path',
        Ua: 'page_referrer',
        kc: 'page_title',
        ih: 'passengers',
        jh: 'phone_conversion_callback',
        nj: 'phone_conversion_country_code',
        kh: 'phone_conversion_css_class',
        oj: 'phone_conversion_ids',
        lh: 'phone_conversion_number',
        mh: 'phone_conversion_options',
        nh: 'quantity',
        Wc: 'redact_device_info',
        nf: 'redact_enhanced_user_id',
        pj: 'redact_ga_client_id',
        qj: 'redact_user_id',
        ne: 'referral_exclusion_definition',
        Mb: 'restricted_data_processing',
        rj: 'retoken',
        oh: 'screen_name',
        Nb: 'screen_resolution',
        sj: 'search_term',
        Ma: 'send_page_view',
        Ob: 'send_to',
        Xc: 'session_duration',
        oe: 'session_engaged',
        pf: 'session_engaged_time',
        yb: 'session_id',
        pe: 'session_number',
        Yc: 'delivery_postal_code',
        qh: 'temporary_client_id',
        tj: 'tracking_id',
        qf: 'traffic_type',
        Va: 'transaction_id',
        va: 'transport_url',
        rh: 'trip_type',
        Zc: 'update',
        zb: 'url_passthrough',
        rf: '_user_agent_architecture',
        sf: '_user_agent_bitness',
        tf: '_user_agent_full_version_list',
        uf: '_user_agent_mobile',
        vf: '_user_agent_model',
        wf: '_user_agent_platform',
        xf: '_user_agent_platform_version',
        sh: '_user_agent_wait',
        yf: '_user_agent_wow64',
        wa: 'user_data',
        th: 'user_data_auto_latency',
        uh: 'user_data_auto_meta',
        vh: 'user_data_auto_multi',
        wh: 'user_data_auto_selectors',
        xh: 'user_data_auto_status',
        yh: 'user_data_mode',
        zf: 'user_data_settings',
        Aa: 'user_id',
        Na: 'user_properties',
        zh: 'us_privacy_string',
        qa: 'value',
        qe: 'wbraid',
        Ah: 'wbraid_multiple_conversions',
        Gh: '_host_name',
        Hh: '_in_page_command',
        Ih: '_is_passthrough_cid',
        Jh: 'non_personalized_ads',
        ed: '_sst_parameters',
        hb: 'conversion_label',
        La: 'page_location',
        hc: 'global_developer_id_string',
        ph: 'tc_privacy_string',
      },
    }, qh = {},
    rh = Object.freeze((qh[T.g.da] = 1, qh[T.g.Nd] = 1, qh[T.g.Ib] = 1, qh[T.g.ja] = 1, qh[T.g.vb] = 1, qh[T.g.Sa] = 1, qh[T.g.wb] = 1, qh[T.g.Oc] = 1, qh[T.g.af] = 1, qh[T.g.ib] = 1, qh[T.g.bc] =
      1, qh[T.g.Qc] = 1, qh[T.g.fa] = 1, qh[T.g.bf] = 1, qh[T.g.cc] = 1, qh[T.g.de] = 1, qh[T.g.ee] = 1, qh[T.g.fe] = 1, qh[T.g.hf] = 1, qh[T.g.kb] = 1, qh[T.g.Tc] = 1, qh[T.g.je] = 1, qh[T.g.kf] = 1, qh[T.g.me] = 1, qh[T.g.za] = 1, qh[T.g.nf] = 1, qh[T.g.ne] = 1, qh[T.g.Mb] = 1, qh[T.g.Ma] = 1, qh[T.g.Ob] = 1, qh[T.g.Xc] = 1, qh[T.g.pf] = 1, qh[T.g.Yc] = 1, qh[T.g.va] = 1, qh[T.g.Zc] = 1, qh[T.g.zf] = 1, qh[T.g.Na] = 1, qh[T.g.ed] = 1, qh));
  Object.freeze([T.g.La, T.g.Ua, T.g.kc, T.g.Ta, T.g.oh, T.g.Aa, T.g.ff, T.g.bj]);
  var sh = {},
    th = Object.freeze((sh[T.g.Qi] = 1, sh[T.g.Ri] = 1, sh[T.g.Si] = 1, sh[T.g.Ti] = 1, sh[T.g.Ui] = 1, sh[T.g.Vi] = 1, sh[T.g.Wi] = 1, sh[T.g.Xi] = 1, sh[T.g.Yi] = 1, sh[T.g.Xe] = 1, sh)),
    uh = {},
    vh = Object.freeze((uh[T.g.Kg] = 1, uh[T.g.Lg] = 1, uh[T.g.Gc] = 1, uh[T.g.Hc] = 1, uh[T.g.Mg] = 1, uh[T.g.Yb] = 1, uh[T.g.Ic] = 1, uh[T.g.Gb] = 1, uh[T.g.Zb] = 1, uh[T.g.Hb] = 1, uh[T.g.Ha] = 1, uh[T.g.Jc] = 1, uh[T.g.Ia] = 1, uh[T.g.Ng] = 1, uh)),
    wh = Object.freeze([T.g.da, T.g.Ib, T.g.bc]), xh = Object.freeze([].concat(wh)),
    yh = Object.freeze([T.g.Sa, T.g.ee, T.g.Xc, T.g.pf, T.g.be]),
    zh = Object.freeze([].concat(yh)), Ah = {}, Bh = (Ah[T.g.K] = '1', Ah[T.g.W] = '2', Ah), Ch = {},
    Dh = Object.freeze((Ch[T.g.da] = 1, Ch[T.g.Nd] = 1, Ch[T.g.Fa] = 1, Ch[T.g.Jb] = 1, Ch[T.g.Ze] = 1, Ch[T.g.Pd] = 1, Ch[T.g.Qd] = 1, Ch[T.g.Rd] = 1, Ch[T.g.ja] = 1, Ch[T.g.Sd] = 1, Ch[T.g.Ka] = 1, Ch[T.g.ya] = 1, Ch[T.g.vb] = 1, Ch[T.g.Sa] = 1, Ch[T.g.wb] = 1, Ch[T.g.ib] = 1, Ch[T.g.sa] = 1, Ch[T.g.Zd] = 1, Ch[T.g.fa] = 1, Ch[T.g.ej] = 1, Ch[T.g.Sc] = 1, Ch[T.g.ce] = 1, Ch[T.g.ff] = 1, Ch[T.g.fe] = 1, Ch[T.g.me] = 1, Ch[T.g.Ta] = 1, Ch[T.g.Uc] = 1, Ch[T.g.La] = 1, Ch[T.g.Ua] = 1, Ch[T.g.jh] = 1, Ch[T.g.kh] = 1,
      Ch[T.g.lh] = 1, Ch[T.g.mh] = 1, Ch[T.g.Mb] = 1, Ch[T.g.Ma] = 1, Ch[T.g.Ob] = 1, Ch[T.g.Yc] = 1, Ch[T.g.Va] = 1, Ch[T.g.va] = 1, Ch[T.g.Zc] = 1, Ch[T.g.zb] = 1, Ch[T.g.wa] = 1, Ch[T.g.Aa] = 1, Ch[T.g.qa] = 1, Ch));
  Object.freeze(T.g);
  var Eh = {}, Fh = z.google_tag_manager = z.google_tag_manager || {}, Nh = Math.random();
  Eh.oc = '3280';
  Eh.dd = Number('0') || 0;
  Eh.ka = 'dataLayer';
  Eh.Oi = 'ChEIgJadnwYQ5Jmv0JHFo56/ARIkALZwGlGBKFCpErmej8mTn9Fz+DIVcmTjhEIgLf6cl4qZDruoGgLKOw\x3d\x3d';
  var Oh = {
    __cl: !0,
    __ecl: !0,
    __ehl: !0,
    __evl: !0,
    __fal: !0,
    __fil: !0,
    __fsl: !0,
    __hl: !0,
    __jel: !0,
    __lcl: !0,
    __sdl: !0,
    __tl: !0,
    __ytl: !0,
  }, Ph = { __paused: !0, __tg: !0 }, Qh;
  for (Qh in Oh) Oh.hasOwnProperty(Qh) && (Ph[Qh] = !0);
  var Rh = Qa(''), Sh, Th = !1;
  Sh = Th;
  var Uh, Vh = !1;
  Uh = Vh;
  var Wh, Xh = !1;
  Wh = Xh;
  var Yh, Zh = !1;
  Yh = Zh;
  Eh.Md = 'www.googletagmanager.com';
  var $h = '' + Eh.Md + (Sh ? '/gtag/js' : '/gtm.js'), ai = null, bi = null, ci = {}, di = {}, ei = {},
    fi = function() {
      var a = Fh.sequence || 1;
      Fh.sequence = a + 1;
      return a;
    };
  Eh.Ni = '';
  var gi = '';
  Eh.we = gi;
  var hi = new Ma, ii = {}, ji = {}, mi = {
    name: Eh.ka, set: function(a, b) {
      K(cb(a, b), ii);
      ki();
    }, get: function(a) {
      return li(a, 2);
    }, reset: function() {
      hi = new Ma;
      ii = {};
      ki();
    },
  }, li = function(a, b) {
    return 2 != b ? hi.get(a) : ni(a);
  }, ni = function(a, b) {
    var c = a.split('.');
    b = b || [];
    for (var d = ii, e = 0; e < c.length; e++) {
      if (null === d) return !1;
      if (void 0 === d) break;
      d = d[c[e]];
      if (-1 !== b.indexOf(d)) return;
    }
    return d;
  }, oi = function(a, b) {
    ji.hasOwnProperty(a) || (hi.set(a, b), K(cb(a, b), ii), ki());
  }, pi = function() {
    for (var a = ['gtm.allowlist', 'gtm.blocklist', 'gtm.whitelist',
      'gtm.blacklist', 'tagTypeBlacklist'], b = 0; b < a.length; b++) {
      var c = a[b], d = li(c, 1);
      if (Ia(d) || Fc(d)) d = K(d);
      ji[c] = d;
    }
  }, ki = function(a) {
    m(ji, function(b, c) {
      hi.set(b, c);
      K(cb(b), ii);
      K(cb(b, c), ii);
      a && delete ji[b];
    });
  }, qi = function(a, b) {
    var c, d = 1 !== (void 0 === b ? 2 : b) ? ni(a) : hi.get(a);
    'array' === Dc(d) || 'object' === Dc(d) ? c = K(d) : c = d;
    return c;
  };
  var ri, si = !1;

  function ti() {
    si = !0;
    ri = ri || {};
  }

  var ui = function(a) {
    si || ti();
    return ri[a];
  };
  var vi = function() {
    var a = z.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }, wi = function(a) {
    if (I.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
    var c = z.getComputedStyle(a, null);
    if ('hidden' === c.visibility) return !0;
    for (var d = a, e = c; d;) {
      if ('none' === e.display) return !0;
      var f = e.opacity, g = e.filter;
      if (g) {
        var h = g.indexOf('opacity(');
        0 <= h && (g = g.substring(h + 8, g.indexOf(')', h)), '%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
          f));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  };
  var Fi = {};
  var Hi = function(a, b, c) {
    if (a) {
      var d = a.element, e = { cb: a.cb, tagName: d.tagName, type: 1 };
      b && (e.querySelector = Gi(d));
      c && (e.isVisible = !wi(d));
      return e;
    }
  }, Ki = function(a) {
    if (0 != a.length) {
      var b;
      b = Ii(a, function(c) {
        return !Ji.test(c.cb);
      });
      b = Ii(b, function(c) {
        return 'INPUT' === c.element.tagName.toUpperCase();
      });
      b = Ii(b, function(c) {
        return !wi(c.element);
      });
      return b[0];
    }
  }, Ii = function(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }, Gi = function(a) {
    var b;
    if (a === I.body) b = 'body'; else {
      var c;
      if (a.id) c = '#' + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a:{
            var f = a.parentElement;
            if (f) {
              for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                e = g + 1;
                break a;
              }
              e = -1;
            } else e = 1;
          }
          d = Gi(a.parentElement) + '>:nth-child(' + e + ')';
        } else d = '';
        c = d;
      }
      b = c;
    }
    return b;
  }, Li = !0, Mi = !1;
  Fi.Ki = 'true';
  var Ni = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, Oi = /@(gmail|googlemail)\./i, Ji = /support|noreply/i,
    Pi = 'SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA'.split(' '), Qi = ['BR'], Ri = {}, Si = function(a) {
      a = a || { wc: !0, xc: !0 };
      a.nb = a.nb || { email: !0, phone: !0, address: !0 };
      var b, c = a, d = !!c.wc + '.' + !!c.xc;
      c && c.kd && c.kd.length && (d += '.' + c.kd.join('.'));
      c && c.nb && (d += '.' + c.nb.email + '.' + c.nb.phone + '.' + c.nb.address);
      b = d;
      var e = Ri[b];
      if (e && 200 > Ua() - e.timestamp) return e.result;
      var f;
      var g = [], h = I.body;
      if (h) {
        for (var l = h.querySelectorAll('*'),
          n = 0; n < l.length && 1E4 > n; n++) {
          var p = l[n];
          if (!(0 <= Pi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
            for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++) if (!(0 <= Qi.indexOf(p.children[r].tagName.toUpperCase()))) {
              q = !0;
              break;
            }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1E4 < l.length ? '2' : '1' };
      } else f = { elements: g, status: '4' };
      var u = f, t = u.status, v = [], w;
      if (a.nb && a.nb.email) {
        for (var y = u.elements, x = [], A = 0; A < y.length; A++) {
          var B = y[A], C = B.textContent;
          'INPUT' === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var D = C.match(Ni);
            if (D) {
              var H = D[0], G;
              if (z.location) {
                var N = Cf(z.location, 'host', !0);
                G = 0 <= H.toLowerCase().indexOf(N);
              } else G = !1;
              G || x.push({ element: B, cb: H });
            }
          }
        }
        var R = a && a.kd;
        if (R && 0 !== R.length) {
          for (var aa = [], oa = 0; oa < x.length; oa++) {
            for (var O = !0, S = 0; S < R.length; S++) {
              var la = R[S];
              if (la && Rg(x[oa].element, la)) {
                O = !1;
                break;
              }
            }
            O && aa.push(x[oa]);
          }
          v = aa;
        } else v = x;
        w = Ki(v);
        10 < x.length && (t = '3');
      }
      var ca = [];
      !a.xi && w && (v = [w]);
      for (var ba = 0; ba < v.length; ba++) ca.push(Hi(v[ba], a.wc, a.xc));
      var Fa = {
        elements: ca.slice(0, 10), pg: Hi(w,
          a.wc, a.xc), status: t,
      };
      Ri[b] = { timestamp: Ua(), result: Fa };
      return Fa;
    }, Ti = function(a) {
      return a.tagName + ':' + a.isVisible + ':' + a.cb.length + ':' + Oi.test(a.cb);
    };
  var Ui = function(a, b, c) {
    if (!c) return !1;
    var d = c.selector_type, e = String(c.value), f;
    if ('js_variable' === d) {
      e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
      for (var g = e.split(','), h = 0; h < g.length; h++) {
        var l = g[h].trim();
        if (l) {
          if (0 === l.indexOf('dataLayer.')) f = li(l.substring(10)); else {
            var n = l.split('.');
            f = z[n.shift()];
            for (var p = 0; p < n.length; p++) f = f && f[n[p]];
          }
          if (void 0 !== f) break;
        }
      }
    } else if ('css_selector' === d && Pg) {
      var q = Qg(e);
      if (q && 0 < q.length) {
        f = [];
        for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(jc(q[r]) ||
          Sa(q[r].value));
        f = 1 === f.length ? f[0] : f;
      }
    }
    return f ? (a[b] = f, !0) : !1;
  }, Vi = function(a) {
    if (a) {
      var b = {}, c = !1;
      c = Ui(b, 'email', a.email) || c;
      c = Ui(b, 'phone_number', a.phone) || c;
      b.address = [];
      for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
        var f = {};
        c = Ui(f, 'first_name', d[e].first_name) || c;
        c = Ui(f, 'last_name', d[e].last_name) || c;
        c = Ui(f, 'street', d[e].street) || c;
        c = Ui(f, 'city', d[e].city) || c;
        c = Ui(f, 'region', d[e].region) || c;
        c = Ui(f, 'country', d[e].country) || c;
        c = Ui(f, 'postal_code', d[e].postal_code) || c;
        b.address.push(f);
      }
      return c ?
        b : void 0;
    }
  }, Wi = function(a) {
    return a.D[T.g.zf];
  }, Xi = function(a) {
    var b = U(a, T.g.Sc) || {}, c = !1;
    m(b, function(d, e) {
      var f = e.enhanced_conversions_mode;
      if ('automatic' === f || 'manual' === f) c = !0;
    });
    return c;
  }, Yi = function(a) {
    if (!Fc(a)) return !1;
    var b = a.mode;
    return 'auto_detect' === b || 'selectors' === b || 'code' === b || !!a.enable_code;
  }, Zi = function(a) {
    if (a) {
      if ('selectors' === a.mode || Fc(a.selectors)) return Vi(a.selectors);
      if ('auto_detect' === a.mode || Fc(a.auto_detect)) {
        var b;
        var c = a.auto_detect;
        if (c) {
          var d = Si({
            wc: !1, xc: !1, kd: c.exclude_element_selectors,
            nb: { email: !!c.email, phone: !!c.phone, address: !!c.address },
          }).elements, e = {};
          if (0 < d.length) for (var f = 0; f < d.length; f++) {
            var g = d[f];
            if (1 === g.type) {
              e.email = g.cb;
              break;
            }
          }
          b = e;
        } else b = void 0;
        return b;
      }
    }
  };
  var $i = function(a) {
    var b = a && a[T.g.Sg];
    return b && b[T.g.aj];
  }, aj = function() {
    return -1 !== Wb.userAgent.toLowerCase().indexOf('firefox');
  }, bj = function(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date ? b.push('' + d.estimated_delivery_date) :
          b.push('');
      }
      return b.join(',');
    }
  };
  var cj = { Mf: 'JP', si: 'JP-34' };
  var dj = new function(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var ej = function(a) {
    ej[' '](a);
    return a;
  };
  ej[' '] = function() {
  };
  var gj = function() {
    var a = fj, b = 'Xf';
    if (a.Xf && a.hasOwnProperty(b)) return a.Xf;
    var c = new a;
    return a.Xf = c;
  };
  var fj = function() {
    var a = {};
    this.h = function() {
      var b = dj.h, c = dj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function() {
      a[dj.h] = !0;
    };
  };
  var hj = [];

  function ij() {
    var a = Yb('google_tag_data', {});
    a.ics || (a.ics = {
      entries: {},
      set: jj,
      update: kj,
      addListener: lj,
      notifyListeners: mj,
      active: !1,
      usedDefault: !1,
      usedUpdate: !1,
      accessedDefault: !1,
      accessedAny: !1,
      wasSetLate: !1,
    });
    return a.ics;
  }

  function jj(a, b, c, d, e, f) {
    var g = ij();
    g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries, l = h[a] || {}, n = l.region, p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = { region: p, initial: 'granted' === b, update: l.update, quiet: q };
        if ('' !== d || !1 !== l.initial) h[a] = r;
        q && z.setTimeout(function() {
          h[a] === r && r.quiet && (r.quiet = !1, nj(a), mj(), wb('TAGGING',
            2));
        }, f);
      }
    }
  }

  function kj(a, b) {
    var c = ij();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = oj(c, a), e = c.entries, f = e[a] = e[a] || {};
      f.update = 'granted' === b;
      var g = oj(c, a);
      f.quiet ? (f.quiet = !1, nj(a)) : g !== d && nj(a);
    }
  }

  function lj(a, b) {
    hj.push({ Lf: a, ek: b });
  }

  function nj(a) {
    for (var b = 0; b < hj.length; ++b) {
      var c = hj[b];
      Ia(c.Lf) && -1 !== c.Lf.indexOf(a) && (c.ni = !0);
    }
  }

  function mj(a, b) {
    for (var c = 0; c < hj.length; ++c) {
      var d = hj[c];
      if (d.ni) {
        d.ni = !1;
        try {
          d.ek({ consentEventId: a, consentPriorityId: b });
        } catch (e) {
        }
      }
    }
  }

  function oj(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }

  var pj = function(a) {
    var b = ij();
    b.accessedAny = !0;
    return oj(b, a);
  }, qj = function(a) {
    var b = ij();
    b.accessedDefault = !0;
    return (b.entries[a] || {}).initial;
  }, rj = function(a) {
    var b = ij();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }, sj = function() {
    if (!gj().h()) return !1;
    var a = ij();
    a.accessedAny = !0;
    return a.active;
  }, tj = function() {
    var a = ij();
    a.accessedDefault = !0;
    return a.usedDefault;
  }, uj = function(a, b) {
    ij().addListener(a, b);
  }, vj = function(a, b) {
    ij().notifyListeners(a, b);
  }, wj = function(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!rj(b[e])) return !0;
      return !1;
    }

    if (c()) {
      var d = !1;
      uj(b, function(e) {
        d || c() || (d = !0, a(e));
      });
    } else a({});
  }, xj = function(a, b) {
    function c() {
      for (var f = [], g = 0; g < d.length; g++) {
        var h = d[g];
        !1 === pj(h) || e[h] || (f.push(h), e[h] = !0);
      }
      return f;
    }

    var d = k(b) ? [b] : b, e = {};
    c().length !== d.length && uj(d, function(f) {
      var g = c();
      0 < g.length && (f.Lf = g, a(f));
    });
  };

  function yj() {
  }

  function zj() {
  }

  function Aj(a) {
    for (var b = [], c = 0; c < Bj.length; c++) {
      var d = a(Bj[c]);
      b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
    }
    return b.join('');
  }

  var Bj = [T.g.K, T.g.W], Cj = function(a) {
    var b = a[T.g.Re];
    b && Q(40);
    var c = a[T.g.Se];
    c && Q(41);
    for (var d = Ia(b) ? b : [b], e = { Cc: 0 }; e.Cc < d.length; e = { Cc: e.Cc }, ++e.Cc) m(a, function(f) {
      return function(g, h) {
        if (g !== T.g.Re && g !== T.g.Se) {
          var l = d[f.Cc], n = cj.Mf, p = cj.si;
          ij().set(g, h, l, n, p, c);
        }
      };
    }(e));
  }, Dj = function(a, b) {
    m(a, function(c, d) {
      ij().update(c, d);
    });
    vj(b.eventId, b.priorityId);
  }, Ej = function(a) {
    var b = pj(a);
    return void 0 != b ? b : !0;
  }, Fj = function() {
    return 'G1' + Aj(pj);
  }, Gj = function(a, b) {
    uj(a, b);
  }, Hj = function(a, b) {
    xj(a, b);
  }, Ij = function(a,
    b) {
    wj(a, b);
  };
  var Jj = function(a) {
    var b = 1, c, d, e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var Kj = function(a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var g = e[f].split('='), h = g[0].replace(/^\s*|\s*$/g, '');
      if (h && h == a) {
        var l = g.slice(1).join('=').replace(/^\s*|\s*$/g, '');
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var Lj = function(a, b) {
    var c = function() {
    };
    c.prototype = a.prototype;
    var d = new c;
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
  }, Mj = function(a) {
    var b = a;
    return function() {
      if (b) {
        var c = b;
        b = null;
        c();
      }
    };
  };

  function Nj(a) {
    return 'null' !== a.origin;
  }var Qj = function(a, b, c, d) {
    return Oj(d) ? Kj(a, String(b || Pj()), c) : [];
  }, Tj = function(a, b, c, d, e) {
    if (Oj(e)) {
      var f = Rj(a, d, e);
      if (1 === f.length) return f[0].id;
      if (0 !== f.length) {
        f = Sj(f, function(g) {
          return g.Ce;
        }, b);
        if (1 === f.length) return f[0].id;
        f = Sj(f, function(g) {
          return g.yd;
        }, c);
        return f[0] ? f[0].id : void 0;
      }
    }
  };

  function Uj(a, b, c, d) {
    var e = Pj(), f = window;
    Nj(f) && (f.document.cookie = a);
    var g = Pj();
    return e != g || void 0 != c && 0 <= Qj(b, g, !1, d).indexOf(c);
  }

  var Yj = function(a, b, c, d) {
    function e(w, y, x) {
      if (null == x) return delete h[y], w;
      h[y] = x;
      return w + '; ' + y + '=' + x;
    }

    function f(w, y) {
      if (null == y) return delete h[y], w;
      h[y] = !0;
      return w + '; ' + y;
    }

    if (!Oj(c.qb)) return 2;
    var g;
    void 0 == b ? g = a + '=deleted; expires=' + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Vj(b), g = a + '=' + b);
    var h = {};
    g = e(g, 'path', c.path);
    var l;
    c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = '' + c.expires);
    g = e(g, 'expires', l);
    g = e(g, 'max-age', c.Ik);
    g = e(g, 'samesite',
      c.al);
    c.fl && (g = f(g, 'secure'));
    var n = c.domain;
    if (n && 'auto' === n.toLowerCase()) {
      for (var p = Wj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var t = 'none' !== p[u] ? p[u] : void 0, v = e(g, 'domain', t);
        v = f(v, c.flags);
        try {
          d && d(a, h);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Xj(t, c.path) && Uj(v, a, b, c.qb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && 'none' !== n.toLowerCase() && (g = e(g, 'domain', n));
    g = f(g, c.flags);
    d && d(a, h);
    return Xj(n, c.path) ? 1 : Uj(g, a, b, c.qb) ? 0 : 1;
  }, Zj = function(a, b, c) {
    null == c.path && (c.path = '/');
    c.domain || (c.domain = 'auto');
    return Yj(a,
      b, c);
  };

  function Sj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g], l = b(h);
      l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }

  function Rj(a, b, c) {
    for (var d = [], e = Qj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split('.'), h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var l = g.shift();
        l && (l = l.split('-'), d.push({ id: g.join('.'), Ce: 1 * l[0] || 1, yd: 1 * l[1] || 1 }));
      }
    }
    return d;
  }

  var Vj = function(a) {
    a && 1200 < a.length && (a = a.substring(0, 1200));
    return a;
  }, ak = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, bk = /(^|\.)doubleclick\.net$/i, Xj = function(a, b) {
    return bk.test(window.document.location.hostname) || '/' === b && ak.test(a);
  }, Pj = function() {
    return Nj(window) ? window.document.cookie : '';
  }, Wj = function() {
    var a = [], b = window.document.location.hostname.split('.');
    if (4 === b.length) {
      var c = b[b.length - 1];
      if (parseInt(c, 10).toString() === c) return ['none'];
    }
    for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
    var e = window.document.location.hostname;
    bk.test(e) || ak.test(e) || a.push('none');
    return a;
  }, Oj = function(a) {
    if (!gj().h() || !a || !sj()) return !0;
    if (!rj(a)) return !1;
    var b = pj(a);
    return null == b ? !0 : !!b;
  };
  var ck = function(a) {
    var b = Math.round(2147483647 * Math.random());
    return a ? String(b ^ Jj(a) & 2147483647) : String(b);
  }, dk = function(a) {
    return [ck(a), Math.round(Ua() / 1E3)].join('.');
  }, gk = function(a, b, c, d, e) {
    var f = ek(b);
    return Tj(a, f, fk(c), d, e);
  }, hk = function(a, b, c, d) {
    var e = '' + ek(c), f = fk(d);
    1 < f && (e += '-' + f);
    return [b, e, a].join('.');
  }, ek = function(a) {
    if (!a) return 1;
    a = 0 === a.indexOf('.') ? a.substr(1) : a;
    return a.split('.').length;
  }, fk = function(a) {
    if (!a || '/' === a) return 1;
    '/' !== a[0] && (a = '/' + a);
    '/' !== a[a.length - 1] && (a += '/');
    return a.split('/').length -
      1;
  };

  function ik(a, b, c, d) {
    var e, f = Number(null != a.Db ? a.Db : void 0);
    0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
    return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, qb: d };
  }var jk;
  var nk = function() {
    var a = kk, b = lk, c = mk(), d = function(g) {
      a(g.target || g.srcElement || {});
    }, e = function(g) {
      b(g.target || g.srcElement || {});
    };
    if (!c.init) {
      gc(I, 'mousedown', d);
      gc(I, 'keyup', d);
      gc(I, 'submit', e);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function() {
        b(this);
        f.call(this);
      };
      c.init = !0;
    }
  }, ok = function(a, b, c, d, e) {
    var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
    mk().decorators.push(f);
  }, pk = function(a, b, c) {
    for (var d = mk().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g =
        d[f], h;
      if (h = !c || g.forms) a:{
        var l = g.domains, n = a, p = !!g.sameHost;
        if (l && (p || n !== I.location.hostname)) for (var q = 0; q < l.length; q++) if (l[q] instanceof RegExp) {
          if (l[q].test(n)) {
            h = !0;
            break a;
          }
        } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
          h = !0;
          break a;
        }
        h = !1;
      }
      if (h) {
        var r = g.placement;
        void 0 == r && (r = g.fragment ? 2 : 1);
        r === b && Ya(e, g.callback());
      }
    }
    return e;
  };

  function mk() {
    var a = Yb('google_tag_data', {}), b = a.gl;
    b && b.decorators || (b = { decorators: [] }, a.gl = b);
    return b;
  }var qk = /(.*?)\*(.*?)\*(.*)/, rk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    sk = /^(?:www\.|m\.|amp\.)+/, tk = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function uk(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
  }

  var wk = function(a) {
    var b = [], c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      void 0 !== d && d === d && null !== d && '[object Object]' !== d.toString() && (b.push(c), b.push(tb(String(d))));
    }
    var e = b.join('*');
    return ['1', vk(e), e].join('*');
  };

  function vk(a, b) {
    var c = [Wb.userAgent, (new Date).getTimezoneOffset(), Wb.userLanguage || Wb.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join('*'),
      d;
    if (!(d = jk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    jk = d;
    for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ jk[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }

  function xk() {
    return function(a) {
      var b = Ff(z.location.href), c = b.search.replace('?', ''), d = Af(c, '_gl', !1, !0) || '';
      a.query = yk(d) || {};
      var e = Df(b, 'fragment').match(uk('_gl'));
      a.fragment = yk(e && e[3] || '') || {};
    };
  }

  function zk(a, b) {
    var c = uk(a).exec(b), d = b;
    if (c) {
      var e = c[2], f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }

  var Ak = function(a, b) {
    b || (b = '_gl');
    var c = tk.exec(a);
    if (!c) return '';
    var d = c[1], e = zk(b, (c[2] || '').slice(1)), f = zk(b, (c[3] || '').slice(1));
    e.length && (e = '?' + e);
    f.length && (f = '#' + f);
    return '' + d + e + f;
  }, Bk = function(a) {
    var b = xk(), c = mk();
    c.data || (c.data = { query: {}, fragment: {} }, b(c.data));
    var d = {}, e = c.data;
    e && (Ya(d, e.query), a && Ya(d, e.fragment));
    return d;
  }, yk = function(a) {
    try {
      var b = Ck(a, 3);
      if (void 0 !== b) {
        for (var c = {}, d = b ? b.split('*') : [], e = 0; e + 1 < d.length; e += 2) {
          var f = d[e], g = ub(d[e + 1]);
          c[f] = g;
        }
        wb('TAGGING', 6);
        return c;
      }
    } catch (h) {
      wb('TAGGING',
        8);
    }
  };

  function Ck(a, b) {
    if (a) {
      var c;
      a:{
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = qk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && '1' === g[1]) {
        var h = g[3], l;
        a:{
          for (var n = g[2], p = 0; p < b; ++p) if (n === vk(h, p)) {
            l = !0;
            break a;
          }
          l = !1;
        }
        if (l) return h;
        wb('TAGGING', 7);
      }
    }
  }

  function Dk(a, b, c, d) {
    function e(p) {
      p = zk(a, p);
      var q = p.charAt(p.length - 1);
      p && '&' !== q && (p += '&');
      return p + n;
    }

    d = void 0 === d ? !1 : d;
    var f = tk.exec(c);
    if (!f) return '';
    var g = f[1], h = f[2] || '', l = f[3] || '', n = a + '=' + b;
    d ? l = '#' + e(l.substring(1)) : h = '?' + e(h.substring(1));
    return '' + g + h + l;
  }

  function Ek(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase(), d = pk(b, 1, c), e = pk(b, 2, c), f = pk(b, 3, c);
    if (Za(d)) {
      var g = wk(d);
      c ? Fk('_gl', g, a) : Gk('_gl', g, a, !1);
    }
    if (!c && Za(e)) {
      var h = wk(e);
      Gk('_gl', h, a, !0);
    }
    for (var l in f) if (f.hasOwnProperty(l)) a:{
      var n = l, p = f[l], q = a;
      if (q.tagName) {
        if ('a' === q.tagName.toLowerCase()) {
          Gk(n, p, q);
          break a;
        }
        if ('form' === q.tagName.toLowerCase()) {
          Fk(n, p, q);
          break a;
        }
      }
      'string' == typeof q && Dk(n, p, q);
    }
  }

  function Gk(a, b, c, d) {
    if (c.href) {
      var e = Dk(a, b, c.href, void 0 === d ? !1 : d);
      Gb.test(e) && (c.href = e);
    }
  }

  function Fk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || '').toLowerCase();
      if ('get' === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute('value', b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = I.createElement('input');
          l.setAttribute('type', 'hidden');
          l.setAttribute('name', a);
          l.setAttribute('value', b);
          c.appendChild(l);
        }
      } else if ('post' === d) {
        var n = Dk(a, b, c.action);
        Gb.test(n) && (c.action = n);
      }
    }
  }

  function kk(a) {
    try {
      var b;
      a:{
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        'http:' !== f && 'https:' !== f || Ek(e, e.hostname);
      }
    } catch (g) {
    }
  }

  function lk(a) {
    try {
      if (a.action) {
        var b = Df(Ff(a.action), 'host');
        Ek(a, b);
      }
    } catch (c) {
    }
  }

  var Hk = function(a, b, c, d) {
    nk();
    ok(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
  }, Ik = function(a, b) {
    nk();
    ok(a, [Cf(z.location, 'host', !0)], b, !0, !0);
  }, Jk = function() {
    var a = I.location.hostname, b = rk.exec(I.referrer);
    if (!b) return !1;
    var c = b[2], d = b[1], e = '';
    if (c) {
      var f = c.split('/'), g = f[1];
      e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (0 === d.indexOf('xn--')) return !1;
      e = d.replace(/-/g, '.').replace(/\.\./g, '-');
    }
    var h = a.replace(sk, ''), l = e.replace(sk, ''), n;
    if (!(n = h === l)) {
      var p = '.' + l;
      n = h.substring(h.length - p.length,
        h.length) === p;
    }
    return n;
  }, Kk = function(a, b) {
    return !1 === a ? !1 : a || b || Jk();
  };
  var Lk = {}, Mk = function(a) {
    return void 0 == Lk[a] ? !1 : Lk[a];
  };
  var Nk = ['1'], Ok = {}, Pk = {}, Uk = function(a, b) {
    b = void 0 === b ? !0 : b;
    var c = Qk(a.prefix);
    if (!Ok[c]) if (Rk(c, a.path, a.domain)) {
      if (Mk('enable_auid_cross_domain')) {
        var d = Pk[Qk(a.prefix)];
        Sk(a, d ? d.id : void 0, d ? d.fg : void 0);
      }
    } else {
      if (Mk('enable_auid_fl_iframe')) {
        var e = Hf('auiddc');
        if (e) {
          wb('TAGGING', 17);
          Ok[c] = e;
          return;
        }
      }
      if (b) {
        var f = Qk(a.prefix), g = dk();
        if (0 === Tk(f, g, a)) {
          var h = Yb('google_tag_data', {});
          h._gcl_au || (h._gcl_au = g);
        }
        Rk(c, a.path, a.domain);
      }
    }
  };

  function Sk(a, b, c) {
    var d = Qk(a.prefix), e = Ok[d];
    if (e) {
      var f = e.split('.');
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + '.' + b + '.' + (c ? c : Math.floor(Ua() / 1E3)));
          Tk(d, h, a, 1E3 * g);
        }
      }
    }
  }

  function Tk(a, b, c, d) {
    var e = hk(b, '1', c.domain, c.path), f = ik(c, d);
    f.qb = 'ad_storage';
    return Zj(a, e, f);
  }

  function Rk(a, b, c) {
    var d = gk(a, b, c, Nk, 'ad_storage');
    if (!d) return !1;
    Vk(a, d);
    return !0;
  }

  function Vk(a, b) {
    var c = b.split('.');
    5 === c.length ? (Ok[a] = c.slice(0, 2).join('.'), Pk[a] = {
      id: c.slice(2, 4).join('.'),
      fg: Number(c[4]) || 0,
    }) : 3 === c.length ? Pk[a] = { id: c.slice(0, 2).join('.'), fg: Number(c[2]) || 0 } : Ok[a] = b;
  }

  function Qk(a) {
    return (a || '_gcl') + '_au';
  }

  function Wk(a) {
    sj() || a();
    wj(function() {
      pj('ad_storage') && a();
      xj(a, 'ad_storage');
    }, ['ad_storage']);
  }

  function Xk(a) {
    var b = Bk(!0), c = Qk(a.prefix);
    Wk(function() {
      var d = b[c];
      if (d) {
        Vk(c, d);
        var e = 1E3 * Number(Ok[c].split('.')[1]);
        if (e) {
          wb('TAGGING', 16);
          var f = ik(a, e);
          f.qb = 'ad_storage';
          var g = hk(d, '1', a.domain, a.path);
          Zj(c, g, f);
        }
      }
    });
  }

  function Yk(a, b, c, d) {
    d = d || {};
    var e = function() {
      var f = Qk(d.prefix), g = {}, h = gk(f, d.path, d.domain, Nk, 'ad_storage');
      if (!h) return g;
      g[f] = h;
      return g;
    };
    Wk(function() {
      Hk(e, a, b, c);
    });
  }var Zk = [];
  Zk[7] = !0;
  Zk[9] = !0;
  Zk[27] = !0;
  Zk[11] = !0;
  Zk[13] = !0;
  Zk[15] = !0;
  Zk[25] = !0;
  Zk[36] = !0;
  Zk[38] = !0;
  Zk[43] = !0;
  Zk[45] = !0;
  a:{
    for (var $k, al, bl = 0; $k === al;) if ($k = Math.floor(2 * Math.random()), al = Math.floor(2 * Math.random()), bl++, 20 < bl) break a;
    $k ? Zk[46] = !0 : Zk[47] = !0;
  }
  Zk[52] = !0;
  Zk[57] = !0;
  Zk[58] = !0;
  Zk[60] = !0;
  Zk[61] = !0;
  Zk[65] = !0;

  Zk[68] = !0;
  Zk[69] = !0;
  Zk[72] = !0;
  Zk[76] = !0;
  Zk[77] = !0;
  var V = function(a) {
    return !!Zk[a];
  };
  var cl = function() {
    Fh.dedupe_gclid || (Fh.dedupe_gclid = '' + dk());
    return Fh.dedupe_gclid;
  };
  var dl = function() {
    var a = !1;
    return a;
  };
  var L = { H: 'GTM-55K5P45', fb: '31941184' }, el = { li: 'GTM-55K5P45', mi: 'GTM-55K5P45' };
  L.Df = Qa('');
  var fl = function() {
    return el.li ? el.li.split('|') : [L.H];
  }, gl = function() {
    return el.mi ? el.mi.split('|') : [];
  }, hl = function() {
    this.container = {};
    this.destination = {};
    this.canonical = {};
  }, jl = function() {
    for (var a = il(), b = fl(), c = 0; c < b.length; c++) {
      var d = a.container[b[c]];
      !d || Ga(d) ? a.container[b[c]] = { state: 2 } : d.state = 2;
    }
    for (var e = gl(), f = 0; f < e.length; f++) {
      var g = a.destination[e[f]];
      g && 0 === g.state && Q(93);
      g ? g.state = 2 : a.destination[e[f]] = { state: 2 };
    }
    a.canonical[L.fb] = 2;
  }, kl = function(a) {
    return !!il().container[a];
  }, ll = function() {
    var a =
      il().container, b;
    for (b in a) if (a.hasOwnProperty(b)) {
      var c = a[b];
      if (Ga(c)) {
        if (1 === c) return !0;
      } else if (1 === c.state) return !0;
    }
    return !1;
  }, Dl = function() {
    var a = {};
    m(il().destination, function(b, c) {
      0 === c.state && (a[b] = c);
    });
    return a;
  };

  function il() {
    var a = Fh.tidr;
    a || (a = new hl, Fh.tidr = a);
    return a;
  }

  var El = { '': 'n', UA: 'u', AW: 'a', DC: 'd', G: 'e', GF: 'f', GT: 't', HA: 'h', MC: 'm', GTM: 'g', OPT: 'o' },
    Fl = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 }, Gl = function(a) {
      var b = L.H.split('-'), c = b[0].toUpperCase();
      if (V(45)) {
        var d = {};
        d.Wj = L.H;
        d.Xk = Eh.dd;
        d.Zk = Eh.oc;
        d.Gk = L.Df ? 2 : 1;
        Sh ? (d.Me = Fl[c], d.Me || (d.Me = 0)) : d.Me = Yh ? 13 : 10;
        Wh ? d.hg = 1 : dl() ? d.hg = 2 : d.hg = 3;
        var e;
        var f = d.Me, g = d.hg;
        void 0 === f ? e = '' : (g || (g = 0), e = '' + cg(1, 1) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[f << 2 | g]);
        var h = d.Gl, l = 4 + e + (h ? '' + cg(2,
          1) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[h] : ''), n, p = d.Zk;
        n = p && bg.test(p) ? '' + cg(3, 2) + p : '';
        var q, r = d.Xk;
        q = r ? '' + cg(4, 1) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[r] : '';
        var u;
        var t = d.Wj;
        if (t && a) {
          var v = t.split('-'), w = v[0].toUpperCase();
          if ('GTM' !== w && 'OPT' !== w) u = ''; else {
            var y = v[1];
            u = '' + cg(5, 3) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[1 + y.length] + (d.Gk || 0) + y;
          }
        } else u = '';
        return l + n + q + u;
      }
      var x = El[c] || 'i', A = a && 'GTM' === c ? b[1] : 'OPT' ===
      c ? b[1] : '', B = 'w';
      Sh && (B = dl() ? 's' : 'o');
      Uh ? ('w' === B && (B = 'x'), 'o' === B && (B = 'q')) : Wh ? ('w' === B && (B = 'y'), 'o' === B && (B = 'r')) : Yh && (B = 'z');
      return '2' + B + x + (4 === Eh.oc.length ? Eh.oc.slice(1) : Eh.oc) + A;
    };

  function Hl(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }var Il = function(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };

  function Jl() {
    return Ib('iPhone') && !Ib('iPod') && !Ib('iPad');
  }

  function Kl() {
    Jl() || Ib('iPad') || Ib('iPod');
  }Ib('Opera');
  Ib('Trident') || Ib('MSIE');
  Ib('Edge');
  !Ib('Gecko') || -1 != Hb().toLowerCase().indexOf('webkit') && !Ib('Edge') || Ib('Trident') || Ib('MSIE') || Ib('Edge');
  -1 != Hb().toLowerCase().indexOf('webkit') && !Ib('Edge') && Ib('Mobile');
  Ib('Macintosh');
  Ib('Windows');
  Ib('Linux') || Ib('CrOS');
  var Ll = qa.navigator || null;
  Ll && (Ll.appVersion || '').indexOf('X11');
  Ib('Android');
  Jl();
  Ib('iPad');
  Ib('iPod');
  Kl();
  Hb().toLowerCase().indexOf('kaios');
  var Ml = function(a, b, c, d) {
    for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
      var g = a.charCodeAt(e - 1);
      if (38 == g || 63 == g) {
        var h = a.charCodeAt(e + f);
        if (!h || 61 == h || 38 == h || 35 == h) return e;
      }
      e += f + 1;
    }
    return -1;
  }, Nl = /#|$/, Ol = function(a, b) {
    var c = a.search(Nl), d = Ml(a, 0, b, c);
    if (0 > d) return null;
    var e = a.indexOf('&', d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '));
  }, Pl = /[?&]($|#)/, Ql = function(a, b, c) {
    for (var d, e = a.search(Nl), f = 0, g, h = []; 0 <= (g = Ml(a, f, b, e));) h.push(a.substring(f,
      g)), f = Math.min(a.indexOf('&', g) + 1 || e, e);
    h.push(a.slice(f));
    d = h.join('').replace(Pl, '$1');
    var l, n = null != c ? '=' + encodeURIComponent(String(c)) : '';
    var p = b + n;
    if (p) {
      var q, r = d.indexOf('#');
      0 > r && (r = d.length);
      var u = d.indexOf('?'), t;
      0 > u || u > r ? (u = r, t = '') : t = d.substring(u + 1, r);
      q = [d.slice(0, u), t, d.slice(r)];
      var v = q[1];
      q[1] = p ? v ? v + '&' + p : p : v;
      l = q[0] + (q[1] ? '?' + q[1] : '') + q[2];
    } else l = d;
    return l;
  };
  var Rl = function(a, b) {
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };

  function Sl(a) {
    if (!a || !I.head) return null;
    var b = Tl('META');
    I.head.appendChild(b);
    b.httpEquiv = 'origin-trial';
    b.content = a;
    return b;
  }

  var Ul = function() {
    if (z.top == z) return 0;
    var a = z.location.ancestorOrigins;
    if (a) return a[a.length - 1] == z.location.origin ? 1 : 2;
    var b;
    var c = z.top;
    try {
      var d;
      if (d = !!c && null != c.location.href) b:{
        try {
          ej(c.foo);
          d = !0;
          break b;
        } catch (e) {
        }
        d = !1;
      }
      b = d;
    } catch (e) {
      b = !1;
    }
    return b ? 1 : 2;
  }, Tl = function(a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
  };

  function Vl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Tl('IMG', a.document);
    if (c) {
      var f = function() {
        if (c) {
          var g = a.google_image_requests, h = zb(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener('load', f, !1);
        e.removeEventListener && e.removeEventListener('error', f, !1);
      };
      Il(e, 'load', f);
      Il(e, 'error', f);
    }
    d && (e.attributionsrc = '');
    e.src = b;
    a.google_image_requests.push(e);
  }

  var Xl = function(a) {
    var b;
    b = void 0 === b ? !1 : b;
    var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe';
    Rl(a, function(d, e) {
      d && (c += '&' + e + '=' + encodeURIComponent(d));
    });
    Wl(c, b);
  }, Wl = function(a, b) {
    var c = window, d;
    b = void 0 === b ? !1 : b;
    d = void 0 === d ? !1 : d;
    if (c.fetch) {
      var e = { keepalive: !0, credentials: 'include', redirect: 'follow', method: 'get', mode: 'no-cors' };
      d && (e.mode = 'cors', e.headers = { 'Attribution-Reporting-Eligible': 'event-source' });
      c.fetch(a, e);
    } else Vl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
  };
  var Yl = function() {
  };
  var Zl = function(a) {
    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
  }, $l = function(a, b) {
    b = void 0 === b ? {} : b;
    this.B = a;
    this.h = null;
    this.N = {};
    this.eb = 0;
    var c;
    this.U = null != (c = b.rl) ? c : 500;
    var d;
    this.F = null != (d = b.Hl) ? d : !1;
    this.D = null;
  };
  pa($l, Yl);
  $l.prototype.addEventListener = function(a) {
    var b = this, c = { internalBlockOnErrors: this.F }, d = Mj(function() {
      return a(c);
    }), e = 0;
    -1 !== this.U && (e = setTimeout(function() {
      c.tcString = 'tcunavailable';
      c.internalErrorState = 1;
      d();
    }, this.U));
    var f = function(g, h) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = Zl(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = 'tcunavailable', h || (c.internalErrorState = 3))) : (c.tcString = 'tcunavailable', c.internalErrorState = 3);
      a(c);
    };
    try {
      am(this, 'addEventListener', f);
    } catch (g) {
      c.tcString =
        'tcunavailable', c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  $l.prototype.removeEventListener = function(a) {
    a && a.listenerId && am(this, 'removeEventListener', null, a.listenerId);
  };
  var cm = function(a, b, c) {
    var d;
    d = void 0 === d ? '755' : d;
    var e;
    a:{
      if (a.publisher && a.publisher.restrictions) {
        var f = a.publisher.restrictions[b];
        if (void 0 !== f) {
          e = f[void 0 === d ? '755' : d];
          break a;
        }
      }
      e = void 0;
    }
    var g = e;
    if (0 === g) return !1;
    var h = c;
    2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
    var l;
    if (0 === h) if (a.purpose && a.vendor) {
      var n = bm(a.vendor.consents, void 0 === d ? '755' : d);
      l = n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC ? !0 : n && bm(a.purpose.consents, b);
    } else l = !0; else l = 1 === h ? a.purpose && a.vendor ? bm(a.purpose.legitimateInterests,
      b) && bm(a.vendor.legitimateInterests, void 0 === d ? '755' : d) : !0 : !0;
    return l;
  }, bm = function(a, b) {
    return !(!a || !a[b]);
  }, am = function(a, b, c, d) {
    c || (c = function() {
    });
    if ('function' === typeof a.B.__tcfapi) {
      var e = a.B.__tcfapi;
      e(b, 2, c, d);
    } else if (dm(a)) {
      em(a);
      var f = ++a.eb;
      a.N[f] = c;
      if (a.h) {
        var g = {};
        a.h.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), '*');
      }
    } else c({}, !1);
  }, dm = function(a) {
    if (a.h) return a.h;
    var b;
    a:{
      for (var c = a.B, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames.__tcfapiLocator);
        } catch (h) {
          e =
            !1;
        }
        if (e) {
          b = c;
          break a;
        }
        var f;
        b:{
          try {
            var g = c.parent;
            if (g && g != c) {
              f = g;
              break b;
            }
          } catch (h) {
          }
          f = null;
        }
        if (!(c = f)) break;
      }
      b = null;
    }
    a.h = b;
    return a.h;
  }, em = function(a) {
    a.D || (a.D = function(b) {
      try {
        var c;
        c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
        a.N[c.callId](c.returnValue, c.success);
      } catch (d) {
      }
    }, Il(a.B, 'message', a.D));
  }, fm = function(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Zl(a));
    return 'error' === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
      (Xl({ e: String(a.internalErrorState) }), !1) : !0 : 'loaded' !== a.cmpStatus || 'tcloaded' !== a.eventStatus && 'useractioncomplete' !== a.eventStatus ? !1 : !0;
  };
  var gm = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 }, hm = Hl('', 500);

  function im() {
    var a = Fh.tcf || {};
    return Fh.tcf = a;
  }

  var mm = function() {
    var a = im(), b = new $l(z, { rl: -1 });
    if (!0 === z.gtag_enable_tcf_support && !a.active && ('function' === typeof z.__tcfapi || 'function' === typeof b.B.__tcfapi || null != dm(b))) {
      a.active = !0;
      a.Ie = {};
      jm();
      a.tcString = 'tcunavailable';
      try {
        b.addEventListener(function(c) {
          if (0 !== c.internalErrorState) km(a), lm(a); else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {}, f;
              for (f in gm) gm.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if ('tcloaded' === c.eventStatus || 'useractioncomplete' ===
              c.eventStatus || 'cmpuishown' === c.eventStatus) {
              var g = {}, h;
              for (h in gm) if (gm.hasOwnProperty(h)) if ('1' === h) {
                var l, n = c, p = !0;
                p = void 0 === p ? !1 : p;
                l = fm(n) ? !1 === n.gdprApplies || 'tcunavailable' === n.tcString || void 0 === n.gdprApplies && !p || 'string' !== typeof n.tcString || !n.tcString.length ? !0 : cm(n, '1', 0) : !1;
                g['1'] = l;
              } else g[h] = cm(c, h, gm[h]);
              d = g;
            }
            d && (a.tcString = c.tcString || 'tcempty', a.Ie = d, lm(a));
          }
        });
      } catch (c) {
        km(a), lm(a);
      }
    }
  };

  function km(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
  }

  function jm() {
    var a = {}, b = (a.ad_storage = 'denied', a.wait_for_update = hm, a);
    Cj(b);
  }

  function lm(a) {
    var b = {}, c = (b.ad_storage = a.Ie['1'] ? 'granted' : 'denied', b);
    Dj(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: nm() });
  }

  var nm = function() {
    var a = im();
    return a.active ? a.tcString || '' : '';
  }, om = function() {
    var a = im();
    return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? '1' : '0' : '';
  }, pm = function(a) {
    if (!gm.hasOwnProperty(String(a))) return !0;
    var b = im();
    return b.active && b.Ie ? !!b.Ie[String(a)] : !0;
  };
  var qm = function(a) {
    var b = String(a[Zd.Wa] || '').replace(/_/g, '');
    0 === b.indexOf('cvt') && (b = 'cvt');
    return b;
  };
  var rm = ['L', 'S', 'Y'], sm = ['S', 'E'], tm = { sampleRate: '0.005000', Ii: '', Hi: Number('5'), Gi: Number('') },
    um = 0 <= I.location.search.indexOf('?gtm_latency=') || 0 <= I.location.search.indexOf('&gtm_latency='), vm;
  if (!(vm = um)) {
    var wm = Math.random(), xm = tm.sampleRate;
    vm = wm < xm;
  }
  var ym = vm, zm = 'https://www.googletagmanager.com/a?id=' + L.H + '&cv=43',
    Am = { label: L.H + ' Container', children: [{ label: 'Initialization', children: [] }] };

  function Bm() {
    return [zm, '&v=3&t=t', '&pid=' + La(), '&rv=' + Eh.oc].join('');
  }

  var Cm = Bm();

  function Dm() {
    Cm = Bm();
  }

  var Em = {}, Fm = '', Gm = '', Hm = '', Im = '', Jm = [], Km = '', Lm = {}, Mm = !1, Nm = {}, Om = {}, Pm = {},
    Qm = '', Rm = void 0, Sm = {}, Tm = {}, Um = void 0, Vm = 5;
  0 < tm.Hi && (Vm = tm.Hi);
  var Wm = function(a, b) {
    for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
    return {
      yk: function() {
        return c < a ? !1 : Ua() - d[c % a] < b;
      }, Uk: function() {
        var f = c++ % a;
        d[f] = Ua();
      },
    };
  }(Vm, 1E3), Xm = 1E3, Ym = '';

  function Zm(a) {
    var b = Rm;
    if (void 0 === b) return '';
    var c = yb('GTM'), d = yb('TAGGING'), e = yb('HEALTH'), f = Cm, g = Em[b] ? '' : '&es=1', h = Sm[b], l = $m(b),
      n = an(), p = Fm, q = Gm, r = Qm, u = bn(a), t = Hm, v = Im, w;
    return [f, g, h, l, c ? '&u=' + c : '', d ? '&ut=' + d : '', e ? '&h=' + e : '', n, p, q, r, u, t, v, w, Km ? '&dl=' + encodeURIComponent(Km) : '', 0 < Jm.length ? '&tdp=' + Jm.join('.') : '', Eh.dd ?
      '&x=' + Eh.dd : '', '&z=0'].join('');
  }

  function dn() {
    Um && (z.clearTimeout(Um), Um = void 0);
    if (void 0 !== Rm && (!Em[Rm] || Fm || Gm)) if (Tm[Rm] || Wm.yk() || 0 >= Xm--) Q(1), Tm[Rm] = !0; else {
      Wm.Uk();
      var a = Zm(!0);
      fc(a);
      if (Im || Km && 0 < Jm.length) {
        var b = a.replace('/a?', '/td?');
        fc(b);
      }
      Em[Rm] = !0;
      Km = Im = Hm = Qm = Gm = Fm = '';
      Jm = [];
    }
  }

  function en() {
    Um || (Um = z.setTimeout(dn, 500));
  }

  function fn(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : '*';
  }

  function gn() {
    2022 <= Zm().length && dn();
  }

  function an() {
    return '&tc=' + ye.filter(function(a) {
      return a;
    }).length;
  }

  var jn = function(a, b) {
    if (ym && !Tm[a] && Rm !== a) {
      dn();
      Rm = a;
      Hm = Fm = '';
      Sm[a] = '&e=' + fn(b) + '&eid=' + a;
      en();
    }
  }, kn = function(a, b, c, d) {
    if (ym && b) {
      var e = qm(b), f = c + e;
      if (!Tm[a]) {
        a !== Rm && (dn(), Rm = a);
        Fm = Fm ? Fm + '.' + f : '&tr=' + f;
        var g = b['function'];
        if (!g) throw Error('Error: No function name given for function call.');
        var h = (Ae[g] ? '1' : '2') + e;
        Hm = Hm ? Hm + '.' + h : '&ti=' + h;
        en();
        gn();
      }
    }
  }, ln = function(a, b, c) {
    if (ym && a && a[Zd.Bb]) {
      var d = b + '.' + a[Zd.Bb];
      Pm[d] = c;
      'html' == qm(a) && Ym == d && (Fm += ':' + Math.floor(c));
    }
  };

  function bn(a) {
  }

  function $m(a) {
  }

  var sn = function(a, b, c) {
    if (ym && void 0 !== a && !Tm[a]) {
      a !== Rm && (dn(), Rm = a);
      var d = c + b;
      Gm = Gm ? Gm + '.' + d : '&epr=' + d;
      en();
      gn();
    }
  }, tn = function(a, b, c) {
  }, cn = void 0;
  var un = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  Jb();
  Jl() || Ib('iPod');
  Ib('iPad');
  !Ib('Android') || Kb() || Jb() || Ib('Opera') || Ib('Silk');
  Kb();
  !Ib('Safari') || Kb() || Ib('Coast') || Ib('Opera') || Ib('Edge') || Ib('Edg/') || Ib('OPR') || Jb() || Ib('Silk') || Ib('Android') || Kl();
  var vn = {}, wn = null, xn = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      255 < e && (b[c++] = e & 255, e >>= 8);
      b[c++] = e;
    }
    var f = 4;
    void 0 === f && (f = 0);
    if (!wn) {
      wn = {};
      for (var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), h = ['+/=', '+/', '-_=', '-_.', '-_'], l = 0; 5 > l; l++) {
        var n = g.concat(h[l].split(''));
        vn[l] = n;
        for (var p = 0; p < n.length; p++) {
          var q = n[p];
          void 0 === wn[q] && (wn[q] = p);
        }
      }
    }
    for (var r = vn[f], u = Array(Math.floor(b.length / 3)), t = r[64] || '', v = 0, w = 0; v < b.length - 2; v += 3) {
      var y = b[v],
        x = b[v + 1], A = b[v + 2], B = r[y >> 2], C = r[(y & 3) << 4 | x >> 4], D = r[(x & 15) << 2 | A >> 6],
        H = r[A & 63];
      u[w++] = '' + B + C + D + H;
    }
    var G = 0, N = t;
    switch (b.length - v) {
      case 2:
        G = b[v + 1], N = r[(G & 15) << 2] || t;
      case 1:
        var R = b[v];
        u[w] = '' + r[R >> 2] + r[(R & 3) << 4 | G >> 4] + N + t;
    }
    return u.join('');
  };
  var yn = 'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(' ');

  function zn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }

  function An() {
    var a = z.google_tag_data, b;
    if (null != a && a.uach) {
      var c = a.uach, d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }

  function Bn() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }

  function Cn(a) {
    var b, c;
    return 'function' === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }

  function Dn() {
    var a = z;
    if (!Cn(a)) return null;
    var b = zn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(yn).then(function(d) {
      null != b.uach || (b.uach = d);
      return d;
    });
    return b.uach_promise = c;
  }
  var En, Fn = function() {
    if (Cn(z) && (En = Ua(), !Bn())) {
      var a = Dn();
      a && (a.then(function() {
        Q(95);
      }), a.catch(function() {
        Q(96);
      }));
    }
  }, Hn = function(a) {
    var b = Gn.wl, c = function(g, h) {
      try {
        a(g, h);
      } catch (l) {
      }
    }, d = An();
    if (d) c(d); else {
      var e = Bn();
      if (e) {
        b =
          Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
        var f = z.setTimeout(function() {
          c.vd || (c.vd = !0, Q(106), c(null, Error('Timeout')));
        }, b);
        e.then(function(g) {
          c.vd || (c.vd = !0, Q(104), z.clearTimeout(f), c(g));
        }).catch(function(g) {
          c.vd || (c.vd = !0, Q(105), z.clearTimeout(f), c(null, g));
        });
      } else c(null);
    }
  }, In = function(a, b) {
    a && (b.C[T.g.rf] = a.architecture, b.C[T.g.sf] = a.bitness, a.fullVersionList && (b.C[T.g.tf] = a.fullVersionList.map(function(c) {
      return encodeURIComponent(c.brand || '') + ';' + encodeURIComponent(c.version || '');
    }).join('|')),
      b.C[T.g.uf] = a.mobile ? '1' : '0', b.C[T.g.vf] = a.model, b.C[T.g.wf] = a.platform, b.C[T.g.xf] = a.platformVersion, b.C[T.g.yf] = a.wow64 ? '1' : '0');
  };
  var Jn = function(a) {
    for (var b = [], c = I.cookie.split(';'), d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({ yg: f[1], value: f[2], timestamp: Number(f[2].split('.')[1]) || 0 });
    }
    b.sort(function(g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };

  function Kn(a, b) {
    var c = Jn(a), d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split('.');
      if (!('1' !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].yg] || (d[c[e].yg] = []);
        var g = { version: f[0], timestamp: 1E3 * Number(f[1]), ia: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].yg].push(g);
      }
    }
    return d;
  }var Ln = /^\w+$/, Mn = /^[\w-]+$/, Nn = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp', gb: '_gb' },
    On = function() {
      if (!gj().h() || !sj()) return !0;
      var a = pj('ad_storage');
      return null == a ? !0 : !!a;
    }, Pn = function(a, b) {
      rj('ad_storage') ? On() ? a() : xj(a, 'ad_storage') : b ? wb('TAGGING', 3) : wj(function() {
        Pn(a, !0);
      }, ['ad_storage']);
    }, Rn = function(a) {
      return Qn(a).map(function(b) {
        return b.ia;
      });
    }, Qn = function(a) {
      var b = [];
      if (!Nj(z) || !I.cookie) return b;
      var c = Qj(a, I.cookie, void 0, 'ad_storage');
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d =
        { Hd: d.Hd }, e++) {
        var f = Sn(c[e]);
        if (null != f) {
          var g = f, h = g.version;
          d.Hd = g.ia;
          var l = g.timestamp, n = g.labels, p = Ka(b, function(q) {
            return function(r) {
              return r.ia === q.Hd;
            };
          }(d));
          p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Tn(p.labels, n || [])) : b.push({
            version: h,
            ia: d.Hd,
            timestamp: l,
            labels: n,
          });
        }
      }
      b.sort(function(q, r) {
        return r.timestamp - q.timestamp;
      });
      return Un(b);
    };

  function Tn(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }

  function Vn(a) {
    return a && 'string' == typeof a && a.match(Ln) ? a : '_gcl';
  }

  var Xn = function() {
    var a = Ff(z.location.href), b = Df(a, 'query', !1, void 0, 'gclid'), c = Df(a, 'query', !1, void 0, 'gclsrc'),
      d = Df(a, 'query', !1, void 0, 'wbraid'), e = Df(a, 'query', !1, void 0, 'dclid');
    if (!b || !c || !d) {
      var f = a.hash.replace('#', '');
      b = b || Af(f, 'gclid', !1);
      c = c || Af(f, 'gclsrc', !1);
      d = d || Af(f, 'wbraid', !1);
    }
    return Wn(b, c, e, d);
  }, Wn = function(a, b, c, d) {
    var e = {}, f = function(g, h) {
      e[h] || (e[h] = []);
      e[h].push(g);
    };
    e.gclid = a;
    e.gclsrc = b;
    e.dclid = c;
    void 0 !== d && Mn.test(d) && (e.gbraid = d, f(d, 'gb'));
    if (void 0 !== a && a.match(Mn)) switch (b) {
      case void 0:
        f(a,
          'aw');
        break;
      case 'aw.ds':
        f(a, 'aw');
        f(a, 'dc');
        break;
      case 'ds':
        f(a, 'dc');
        break;
      case '3p.ds':
        f(a, 'dc');
        break;
      case 'gf':
        f(a, 'gf');
        break;
      case 'ha':
        f(a, 'ha');
    }
    c && f(c, 'dc');
    return e;
  }, Zn = function(a) {
    var b = Xn();
    Pn(function() {
      Yn(b, !1, a);
    });
  };

  function Yn(a, b, c, d, e) {
    function f(w, y) {
      var x = $n(w, g);
      x && (Zj(x, y, h), l = !0);
    }

    c = c || {};
    e = e || [];
    var g = Vn(c.prefix);
    d = d || Ua();
    var h = ik(c, d, !0);
    h.qb = 'ad_storage';
    var l = !1, n = Math.round(d / 1E3), p = function(w) {
      var y = ['GCL', n, w];
      0 < e.length && y.push(e.join('.'));
      return y.join('.');
    };
    a.aw && f('aw', p(a.aw[0]));
    a.dc && f('dc', p(a.dc[0]));
    a.gf && f('gf', p(a.gf[0]));
    a.ha && f('ha', p(a.ha[0]));
    a.gp && f('gp', p(a.gp[0]));
    if (!l && a.gb) {
      var q = a.gb[0], r = $n('gb', g), u = !1;
      if (!b) for (var t = Qn(r), v = 0; v < t.length; v++) t[v].ia === q && t[v].labels &&
      0 < t[v].labels.length && (u = !0);
      u || f('gb', p(q));
    }
  }

  var bo = function(a, b) {
    var c = Bk(!0);
    Pn(function() {
      for (var d = Vn(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (void 0 !== Nn[f]) {
          var g = $n(f, d), h = c[g];
          if (h) {
            var l = Math.min(ao(h), Ua()), n;
            b:{
              var p = l;
              if (Nj(z)) for (var q = Qj(g, I.cookie, void 0, 'ad_storage'), r = 0; r < q.length; ++r) if (ao(q[r]) > p) {
                n = !0;
                break b;
              }
              n = !1;
            }
            if (!n) {
              var u = ik(b, l, !0);
              u.qb = 'ad_storage';
              Zj(g, h, u);
            }
          }
        }
      }
      Yn(Wn(c.gclid, c.gclsrc), !1, b);
    });
  }, $n = function(a, b) {
    var c = Nn[a];
    if (void 0 !== c) return b + c;
  }, ao = function(a) {
    return 0 !== co(a.split('.')).length ? 1E3 * (Number(a.split('.')[1]) ||
      0) : 0;
  };

  function Sn(a) {
    var b = co(a.split('.'));
    return 0 === b.length ? null : { version: b[0], ia: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) };
  }

  function co(a) {
    return 3 > a.length || 'GCL' !== a[0] && '1' !== a[0] || !/^\d+$/.test(a[1]) || !Mn.test(a[2]) ? [] : a;
  }

  var eo = function(a, b, c, d, e) {
    if (Ia(b) && Nj(z)) {
      var f = Vn(e), g = function() {
        for (var h = {}, l = 0; l < a.length; ++l) {
          var n = $n(a[l], f);
          if (n) {
            var p = Qj(n, I.cookie, void 0, 'ad_storage');
            p.length && (h[n] = p.sort()[p.length - 1]);
          }
        }
        return h;
      };
      Pn(function() {
        Hk(g, b, c, d);
      });
    }
  }, Un = function(a) {
    return a.filter(function(b) {
      return Mn.test(b.ia);
    });
  }, fo = function(a, b) {
    if (Nj(z)) {
      for (var c = Vn(b.prefix), d = {}, e = 0; e < a.length; e++) Nn[a[e]] && (d[a[e]] = Nn[a[e]]);
      Pn(function() {
        m(d, function(f, g) {
          var h = Qj(c + g, I.cookie, void 0, 'ad_storage');
          h.sort(function(u,
            t) {
            return ao(t) - ao(u);
          });
          if (h.length) {
            var l = h[0], n = ao(l), p = 0 !== co(l.split('.')).length ? l.split('.').slice(3) : [], q = {}, r;
            r = 0 !== co(l.split('.')).length ? l.split('.')[2] : void 0;
            q[f] = [r];
            Yn(q, !0, b, n, p);
          }
        });
      });
    }
  };

  function go(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }

  var ho = function(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }

    if (sj()) {
      var c = Xn();
      if (go(c, a)) {
        var d = {};
        b(d, 'gclid', c.gclid);
        b(d, 'dclid', c.dclid);
        b(d, 'gclsrc', c.gclsrc);
        b(d, 'wbraid', c.gbraid);
        Ik(function() {
          return d;
        }, 3);
        Ik(function() {
          var e = {};
          return e._up = '1', e;
        }, 1);
      }
    }
  }, io = function(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!On()) return e;
    var f = Qn(a);
    if (!f.length) return e;
    for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
    if (d) return e;
    if (1 !== e[0]) {
      var h = f[0], l = f[0].timestamp, n = [h.version, Math.round(l /
        1E3), h.ia].concat(h.labels || [], [b]).join('.'), p = ik(c, l, !0);
      p.qb = 'ad_storage';
      Zj(a, n, p);
    }
    return e;
  };

  function jo(a, b) {
    var c = Vn(b), d = $n(a, c);
    if (!d) return 0;
    for (var e = Qn(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }

  function ko(a) {
    var b = 0, c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }

  var lo = function(a) {
    var b = Math.max(jo('aw', a), ko(On() ? Kn() : {}));
    return Math.max(jo('gb', a), ko(On() ? Kn('_gac_gb', !0) : {})) > b;
  };
  var mo = function(a, b) {
    var c = a && !Ej(T.g.K);
    return b && c ? '0' : b;
  }, po = function(a) {
    function b(t) {
      var v;
      Fh.reported_gclid || (Fh.reported_gclid = {});
      v = Fh.reported_gclid;
      var w, y = g;
      w = !g || sj() && !Ej(T.g.K) ? l + (t ? 'gcu' : 'gcs') : l + '.' + (f.prefix || '_gcl') + (t ? 'gcu' : 'gcs');
      if (!v[w]) {
        v[w] = !0;
        var x = [], A = {}, B = function(oa, O) {
          O && (x.push(oa + '=' + encodeURIComponent(O)), A[oa] = !0);
        }, C = 'https://www.google.com';
        if (sj()) {
          var D = Ej(T.g.K);
          B('gcs', Fj());
          t && B('gcu', '1');
          tj() && B('gcd', 'G1' + Aj(qj));
          B('rnd', cl());
          if ((!l || n && 'aw.ds' !== n) && Ej(T.g.K)) {
            var H = Rn('_gcl_aw');
            B('gclaw', H.join('.'));
          }
          B('url', String(z.location).split(/[?#]/)[0]);
          B('dclid', mo(d, p));
          D || (C = 'https://pagead2.googlesyndication.com');
        }
        B('gdpr_consent', nm());
        B('gdpr', om());
        '1' === Bk(!1)._up && B('gtm_up', '1');
        B('gclid', mo(d, l));
        B('gclsrc', n);
        if (!(A.gclid || A.dclid || A.gclaw) && (B('gbraid', mo(d, q)), !A.gbraid && sj() && Ej(T.g.K))) {
          var G = Rn('_gcl_gb');
          0 < G.length && B('gclgb', G.join('.'));
        }
        B('gtm',
          Gl(!e));
        g && Ej(T.g.K) && (Uk(f || {}), y && B('auid', Ok[Qk(f.prefix)] || ''));
        oo || a.ci && B('did', a.ci);
        a.Vf && B('gdid', a.Vf);
        a.Rf && B('edid', a.Rf);
        var N = V(64) ? An() : null;
        if (N) {
          var R = function(oa, O) {
            x.push(oa + '=' + encodeURIComponent(O));
            A[oa] = !0;
          };
          R('uaa', N.architecture);
          R('uab', N.bitness);
          N.fullVersionList && R('uafvl', N.fullVersionList.map(function(oa) {
            return encodeURIComponent(oa.brand || '') + ';' + encodeURIComponent(oa.version || '');
          }).join('|'));
          R('uam', N.model);
          R('uap', N.platform);
          R('uapv', N.platformVersion);
          R('uaw',
            N.wow64 ? '1' : '0');
        }
        var aa = C + '/pagead/landing?' + x.join('&');
        mc(aa);
      }
    }

    var c = !!a.Kf, d = !!a.Le, e = a.ca, f = void 0 === a.uc ? {} : a.uc, g = void 0 === a.Ge ? !0 : a.Ge, h = Xn(),
      l = h.gclid || '', n = h.gclsrc, p = h.dclid || '', q = h.gbraid || '',
      r = !c && ((!l || n && 'aw.ds' !== n ? !1 : !0) || q), u = sj();
    if (r || u) u ? Ij(function() {
      b();
      Ej(T.g.K) || Hj(function(t) {
        return b(!0, t.consentEventId, t.consentPriorityId);
      }, T.g.K);
    }, [T.g.K]) : b();
  }, no = function(a) {
    var b = String(z.location).split(/[?#]/)[0], c = Eh.Oi || z._CONSENT_MODE_SALT;
    return a ? c ? String(Jj(b + a + c)) : '0' : '';
  }, oo =
    !1;
  var qo = /[A-Z]+/, ro = /\s/, so = function(a) {
    if (k(a)) {
      a = Sa(a);
      var b = a.indexOf('-');
      if (!(0 > b)) {
        var c = a.substring(0, b);
        if (qo.test(c)) {
          for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++) if (!d[e] || ro.test(d[e]) && ('AW' !== c || 1 !== e)) return;
          return { id: a, prefix: c, X: c + '-' + d[0], O: d };
        }
      }
    }
  }, uo = function(a) {
    for (var b = {}, c = 0; c < a.length; ++c) {
      var d = so(a[c]);
      d && (b[d.id] = d);
    }
    to(b);
    var e = [];
    m(b, function(f, g) {
      e.push(g);
    });
    return e;
  };

  function to(a) {
    var b = [], c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      'AW' === d.prefix && d.O[1] && b.push(d.X);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }var vo = function(a, b, c, d) {
    var e = dc(), f;
    if (1 === e) a:{
      var g = $h;
      g = g.toLowerCase();
      for (var h = 'https://' + g, l = 'http://' + g, n = 1, p = I.getElementsByTagName('script'), q = 0; q < p.length && 100 > q; q++) {
        var r = p[q].src;
        if (r) {
          r = r.toLowerCase();
          if (0 === r.indexOf(l)) {
            f = 3;
            break a;
          }
          1 === n && 0 === r.indexOf(h) && (n = 2);
        }
      }
      f = n;
    } else f = e;
    return (2 === f || d || 'http:' != z.location.protocol ? a : b) + c;
  };
  var xo = function(a, b, c) {
      if (z[a.functionName]) return b.kg && J(b.kg), z[a.functionName];
      var d = wo();
      z[a.functionName] = d;
      if (a.ze) for (var e = 0; e < a.ze.length; e++) z[a.ze[e]] = z[a.ze[e]] || wo();
      a.Fe && void 0 === z[a.Fe] && (z[a.Fe] = c);
      cc(vo('https://', 'http://', a.wg), b.kg, b.Lk);
      return d;
    }, wo = function() {
      var a = function() {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    }, yo = { functionName: '_googWcmImpl', Fe: '_googWcmAk', wg: 'www.gstatic.com/wcm/loader.js' },
    zo = { functionName: '_gaPhoneImpl', Fe: 'ga_wpid', wg: 'www.gstatic.com/gaphone/loader.js' },
    Ao = { Li: '', Ij: '5' }, Bo = {
      functionName: '_googCallTrackingImpl',
      ze: [zo.functionName, yo.functionName],
      wg: 'www.gstatic.com/call-tracking/call-tracking_' + (Ao.Li || Ao.Ij) + '.js',
    }, Co = {}, Do = function(a, b, c, d) {
      Q(22);
      if (c) {
        d = d || {};
        var e = xo(yo, d, a), f = { ak: a, cl: b };
        void 0 === d.pb && (f.autoreplace = c);
        e(2, d.pb, f, c, 0, Ta(), d.options);
      }
    }, Eo = function(a, b, c, d) {
      Q(21);
      if (b && c) {
        d = d || {};
        for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Ta() }, f = 0; f < a.length; f++) {
          var g = a[f];
          Co[g.id] ||
          (g && 'AW' === g.prefix && !e.adData && 2 <= g.O.length ? (e.adData = {
            ak: g.O[0],
            cl: g.O[1],
          }, Co[g.id] = !0) : g && 'UA' === g.prefix && !e.gaData && (e.gaData = { gaWpid: g.X }, Co[g.id] = !0));
        }
        (e.gaData || e.adData) && xo(Bo, d)(d.pb, e, d.options);
      }
    }, Fo = function() {
      var a = !1;
      return a;
    }, Go = function(a, b) {
      if (a) if (dl()) {
      } else {
        if (k(a)) {
          var c =
            so(a);
          if (!c) return;
          a = c;
        }
        var d = void 0, e = !1, f = U(b, T.g.oj);
        if (f && Ia(f)) {
          d = [];
          for (var g = 0; g < f.length; g++) {
            var h = so(f[g]);
            h && (d.push(h), (a.id === h.id || a.id === a.X && a.X === h.X) && (e = !0));
          }
        }
        if (!d || e) {
          var l = U(b, T.g.lh), n;
          if (l) {
            Ia(l) ? n = l : n = [l];
            var p = U(b, T.g.jh), q = U(b, T.g.kh), r = U(b, T.g.mh), u = U(b, T.g.nj), t = p || q, v = 1;
            'UA' !== a.prefix || d || (v = 5);
            for (var w = 0; w < n.length; w++) if (w < v) if (d) Eo(d, n[w], u, {
              pb: t,
              options: r,
            }); else if ('AW' === a.prefix && a.O[1]) Fo() ? Eo([a], n[w], u || 'US', {
              pb: t,
              options: r,
            }) : Do(a.O[0], a.O[1], n[w], { pb: t, options: r });
            else if ('UA' === a.prefix) if (Fo()) Eo([a], n[w], u || 'US', { pb: t }); else {
              var y = a.X, x = n[w], A = { pb: t };
              Q(23);
              if (x) {
                A = A || {};
                var B = xo(zo, A, y), C = {};
                void 0 !== A.pb ? C.receiver = A.pb : C.replace = x;
                C.ga_wpid = y;
                C.destination = x;
                B(2, Ta(), C);
              }
            }
          }
        }
      }
    };
  var Ho = function(a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.C = {};
    this.metadata = K(c.eventMetadata || {});
    this.M = !1;
  }, Io = function(a, b, c) {
    var d = U(a.s, b);
    void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c);
  }, Jo = function(a, b, c) {
    var d = ui(a.target.X);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };

  function Ko(a) {
    return {
      getDestinationId: function() {
        return a.target.X;
      }, getEventName: function() {
        return a.eventName;
      }, setEventName: function(b) {
        return void (a.eventName = b);
      }, getHitData: function(b) {
        return a.C[b];
      }, setHitData: function(b, c) {
        return void (a.C[b] = c);
      }, setHitDataIfNotDefined: function(b, c) {
        void 0 === a.C[b] && (a.C[b] = c);
      }, copyToHitData: function(b, c) {
        Io(a, b, c);
      }, getMetadata: function(b) {
        return a.metadata[b];
      }, setMetadata: function(b, c) {
        return void (a.metadata[b] = c);
      }, abort: function() {
        return void (a.M = !0);
      }, getProcessedEvent: function() {
        return a;
      },
      getFromEventContext: function(b) {
        return U(a.s, b);
      },
    };
  }var Mo = function(a) {
    var b = Lo[a.target.X];
    if (!a.M && b) for (var c = Ko(a), d = 0; d < b.length; ++d) {
      try {
        b[d](c);
      } catch (e) {
        a.M = !0;
      }
      if (a.M) break;
    }
  }, No = function(a, b) {
    var c = Lo[a];
    c || (c = Lo[a] = []);
    c.push(b);
  }, Lo = {};
  var Qo = function(a) {
    a = a || {};
    var b;
    if (!sj() || pj(Oo)) {
      (b = Po(a)) || (b = dk());
      var c = a, d = Qk(c.prefix);
      Sk(c, b);
      delete Ok[d];
      delete Pk[d];
      Rk(d, c.path, c.domain);
      return Po(a);
    }
  }, Po = function(a) {
    if (!sj() || pj(Oo)) {
      a = a || {};
      Uk(a, !1);
      var b = Pk[Qk(Vn(a.prefix))];
      if (b && !(18E5 < Ua() - 1E3 * b.fg)) {
        var c = b.id, d = c.split('.');
        if (2 === d.length && !(864E5 < Ua() - 1E3 * (Number(d[1]) || 0))) return c;
      }
    }
  }, Oo = T.g.K;
  var Ro = function(a) {
      var b = [];
      m(a, function(c, d) {
        d = Un(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ia);
        e.length && b.push(c + ':' + e.join(','));
      });
      return b.join(';');
    }, To = function(a, b, c) {
      if ('aw' === a || 'dc' === a || 'gb' === a) {
        var d = Hf('gcl' + a);
        if (d) return d.split('.');
      }
      var e = Vn(b);
      if ('_gcl' == e) {
        c = void 0 === c ? !0 : c;
        var f = !Ej(So) && c, g;
        g = Xn()[a] || [];
        if (0 < g.length) return f ? ['0'] : g;
      }
      var h = $n(a, e);
      return h ? Rn(h) : [];
    }, Uo = function(a, b) {
      rj(So) ? Ej(So) ? a() : xj(a, So) : b ? Q(42) : Ij(function() {
        Uo(a, !0);
      }, [So]);
    }, So = T.g.K, Vo = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Wo = function(a, b) {
      return To('aw', a, b);
    }, Xo = function(a, b) {
      return To('dc', a, b);
    }, Yo = function(a) {
      var b = Hf('gac');
      return b ? !Ej(So) && a ? '0' : decodeURIComponent(b) : Ro(On() ? Kn() : {});
    }, Zo = function(a) {
      var b = Hf('gacgb');
      return b ? !Ej(So) && a ? '0' : decodeURIComponent(b) : Ro(On() ? Kn('_gac_gb', !0) : {});
    }, $o = function(a) {
      var b = Xn(), c = [], d = b.gclid, e = b.dclid, f = b.gclsrc || 'aw';
      !d || 'aw.ds' !== f && 'aw' !== f && 'ds' !== f || c.push({ ia: d, od: f });
      e && c.push({ ia: e, od: 'ds' });
      0 === c.length && b.gbraid && c.push({ ia: b.gbraid, od: 'gb' });
      V(77) && 0 === c.length &&
      'aw.ds' === f && c.push({ ia: '', od: 'aw.ds' });
      Uo(function() {
        Uk(a);
        var g = Ok[Qk(a.prefix)];
        if (g) {
          var h = ['auid=' + g];
          if (V(15)) {
            var l = I.referrer ? Df(Ff(I.referrer), 'host') : '';
            0 === c.length && Vo.test(l) && c.push({ ia: '', od: '' });
            if (0 === c.length) return;
            l && h.push('ref=' + encodeURIComponent(l));
            var n = 1 === Ul() ? z.top.location.href : z.location.href;
            n = n.replace(/[\?#].*$/, '');
            h.push('url=' + encodeURIComponent(n));
            h.push('tft=' + Ua());
            var p = oc();
            void 0 !== p && h.push('tfd=' + Math.round(p));
            if (V(76)) {
              var q = Ul();
              h.push('frm=' + q);
            }
          }
          if (0 <
            c.length) for (var r = Fh.joined_auid = Fh.joined_auid || {}, u = 0; u < c.length; u++) {
            var t = c[u], v = t.ia, w = t.od, y = (a.prefix || '_gcl') + '.' + w + '.' + v;
            if (!r[y]) {
              var x = 'https://adservice.google.com/pagead/regclk?' + h.join('&');
              '' !== v ? x = 'gb' === w ? x + '&wbraid=' + v : x + '&gclid=' + v + '&gclsrc=' + w : 'aw.ds' === w && (x += '&gclsrc=aw.ds');
              mc(x);
              r[y] = !0;
            }
          }
        }
      });
    }, ap = function(a) {
      return Hf('gclaw') || Hf('gac') || 0 < (Xn().aw || []).length ? !1 : 0 < (Xn().gb || []).length ? !0 : lo(a);
    };
  var bp = function(a, b, c, d, e, f, g, h, l, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.N = d;
      this.B = e;
      this.F = f;
      this.U = g;
      this.D = h;
      this.eventMetadata = l;
      this.aa = n;
      this.Z = p;
      this.J = q;
    }, U = function(a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.N[b]) return a.N[b];
      if (void 0 !== a.B[b]) return a.B[b];
      ym && cp(a, a.F[b], a.U[b]) && (Q(71), Q(79));
      return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c;
    }, dp = function(a) {
      function b(g) {
        for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1;
      }

      var c = {};
      b(a.h);
      b(a.N);
      b(a.B);
      b(a.F);
      if (ym) for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
        var f = d[e];
        if ('event' !== f && 'gtm' !== f && 'tagTypeBlacklist' !== f && !c.hasOwnProperty(f)) {
          Q(71);
          Q(80);
          break;
        }
      }
      return Object.keys(c);
    }, ep = function(a, b, c) {
      function d(l) {
        Fc(l) && m(l, function(n, p) {
          f = !0;
          e[n] = p;
        });
      }

      var e = {}, f = !1;
      c && 1 !== c || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.N[b]));
      c && 2 !== c || d(a.h[b]);
      if (ym) {
        var g = f, h = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.D[b]), d(a.U[b]), d(a.B[b]), d(a.N[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || cp(a, e, h)) Q(71), Q(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    fp = function(a) {
      var b = [T.g.Lc, T.g.Td, T.g.Ud, T.g.Vd, T.g.Wd, T.g.Xd, T.g.Yd], c = {}, d = !1, e = function(h) {
        for (var l = 0; l < b.length; l++) void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0);
        return d;
      };
      if (e(a.h) || e(a.N) || e(a.B)) return c;
      e(a.F);
      if (ym) {
        var f = c, g = d;
        c = {};
        d = !1;
        e(a.U);
        cp(a, c, f) && (Q(71), Q(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.D);
      return c;
    }, cp = function(a, b, c) {
      if (!ym) return !1;
      try {
        if (b === c) return !1;
        var d = Dc(b);
        if (d !== Dc(c) || !(Fc(b) && Fc(c) || 'array' === d)) return !0;
        if ('array' === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (cp(a,
            b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || cp(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        Q(72);
      }
      return !1;
    }, gp = function(a, b) {
      this.wj = a;
      this.xj = b;
      this.F = {};
      this.Eh = {};
      this.h = {};
      this.N = {};
      this.B = {};
      this.bd = {};
      this.D = {};
      this.Fc = function() {
      };
      this.eb = function() {
      };
      this.U = !1;
    }, hp = function(a, b) {
      a.F = b;
      return a;
    }, ip = function(a, b) {
      a.Eh = b;
      return a;
    }, jp = function(a, b) {
      a.h = b;
      return a;
    }, kp = function(a, b) {
      a.N = b;
      return a;
    }, lp = function(a, b) {
      a.B = b;
      return a;
    }, mp = function(a,
      b) {
      a.bd = b;
      return a;
    }, np = function(a, b) {
      a.D = b || {};
      return a;
    }, op = function(a, b) {
      a.Fc = b;
      return a;
    }, pp = function(a, b) {
      a.eb = b;
      return a;
    }, qp = function(a) {
      a.U = !0;
      return a;
    }, rp = function(a) {
      return new bp(a.wj, a.xj, a.F, a.Eh, a.h, a.N, a.B, a.bd, a.D, a.Fc, a.eb, a.U);
    };
  var tp = function(a, b) {
    var c = a.ii, d = a.Ci;
    a.Zh && (Kk(c[T.g.ic], !!c[T.g.V]) && (bo(sp, b), V(73) && Xk(b)), Zn(b), fo(sp, b), $o(b));
    c[T.g.V] && (eo(sp, c[T.g.V], c[T.g.jc], !!c[T.g.Lb], b.prefix), V(73) && Yk(c[T.g.V], c[T.g.jc], !!c[T.g.Lb], b));
    d && ho(sp);
  }, up = function(a, b, c, d) {
    var e = a.Fi, f = a.callback, g = a.ki;
    if ('function' === typeof f) if (e === T.g.ac && void 0 === g) {
      var h = d(b.prefix, c);
      0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
    } else e === T.g.Od ? (Q(65), Uk(b, !1), f(Ok[Qk(b.prefix)])) : f(g);
  }, sp = ['aw', 'dc', 'gb'];
  var vp = function() {
    var a = Wb && Wb.userAgent || '';
    if (0 > a.indexOf('Safari') || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || '';
    if ('' === b) return !1;
    for (var c = ['14', '1', '1'], d = b.split('.'), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] != c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };

  function wp() {
    return 'attribution-reporting';
  }

  function xp(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }var yp = !1;

  function zp() {
    if (xp('join-ad-interest-group') && Ea(Wb.joinAdInterestGroup)) return !0;
    yp || (Sl('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), yp = !0);
    return xp('join-ad-interest-group') && Ea(Wb.joinAdInterestGroup);
  }

  function Ap(a, b) {
    var c = void 0;
    try {
      c = I.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {
    }
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ua() - d) {
        wb('TAGGING', 9);
        return;
      }
    } else try {
      if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        wb('TAGGING', 10);
        return;
      }
    } catch (e) {
    }
    ec(a, void 0, { allow: 'join-ad-interest-group' }, { taggingId: b, loadTime: Ua() }, c);
  }

  function Bp() {
    return V(60) ? 'https://td.doubleclick.net' : 'https://googleads.g.doubleclick.net';
  }var Cp = RegExp('^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$'),
    Dp = /^~?[\w-]+(?:\.~?[\w-]+)*$/, Ep = /^\d+\.fls\.doubleclick\.net$/, Fp = /;gac=([^;?]+)/, Gp = /;gacgb=([^;?]+)/,
    Hp = /;gclaw=([^;?]+)/, Ip = /;gclgb=([^;?]+)/;

  function Jp(a, b) {
    if (Ep.test(I.location.host)) {
      var c = I.location.href.match(b);
      return c && 2 == c.length && c[1].match(Cp) ? decodeURIComponent(c[1]) : '';
    }
    var d = [], e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ia);
      d.push(e + ':' + f.join(','));
    }
    return 0 < d.length ? d.join(';') : '';
  }

  var Kp = function(a, b, c) {
    var d = On() ? Kn('_gac_gb', !0) : {}, e = [], f = !1, g;
    for (g in d) {
      var h = io('_gac_gb_' + g, a, b, c);
      f = f || 0 !== h.length && h.some(function(l) {
        return 1 === l;
      });
      e.push(g + ':' + h.join(','));
    }
    return { hk: f ? e.join(';') : '', gk: Jp(d, Gp) };
  };

  function Lp(a, b, c) {
    if (Ep.test(I.location.host)) {
      var d = I.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Dp)) return [{ ia: d[1] }];
    } else return Qn((a || '_gcl') + b);
    return [];
  }

  var Mp = function(a) {
    return Lp(a, '_aw', Hp).map(function(b) {
      return b.ia;
    }).join('.');
  }, Np = function(a) {
    return Lp(a, '_gb', Ip).map(function(b) {
      return b.ia;
    }).join('.');
  }, Op = function(a, b) {
    var c = io((b && b.prefix || '_gcl') + '_gb', a, b);
    return 0 === c.length || c.every(function(d) {
      return 0 === d;
    }) ? '' : c.join('.');
  };
  var Pp = function() {
    if (Ea(z.__uspapi)) {
      var a = '';
      try {
        z.__uspapi('getUSPData', 1, function(b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d);
          }
        });
      } catch (b) {
      }
      return a;
    }
  };
  var Qp = function() {
      var a = I.title;
      if (void 0 == a || '' == a) return '';
      var b = function(d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c));) c--;
      return decodeURIComponent(a.substr(0, c));
    }, Rp = function(a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    }, Sp = function(a, b) {
      Ia(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    }, Tp = function(a) {
      var b = a.target.O[0];
      if (b) {
        a.C[T.g.Mc] = b;
        var c = a.target.O[1];
        c && (a.C[T.g.hb] = c);
      } else a.M = !0;
    }, Up =
      function(a) {
        if (Sp(a, ['conversion', 'remarketing', 'user_data_lead', 'user_data_web'])) {
          var b = a.C[T.g.hb], c = !0 === U(a.s, T.g.Ze);
          c && (a.metadata.remarketing_only = !0);
          switch (a.metadata.hit_type) {
            case 'conversion':
              !c && b && Rp(a);
              aj() && (a.metadata.is_gcp_conversion = !0);
              break;
            case 'user_data_lead':
            case 'user_data_web':
              !c && b && (a.M = !0);
              break;
            case 'remarketing':
              !c && b || Rp(a);
          }
          a.C[T.g.Gh] = a.metadata.is_gcp_conversion ? 'www.google.com' : 'www.googleadservices.com';
        }
      }, Vp = function(a) {
      Sp(a, ['conversion', 'remarketing']);
    }, Wp =
      function(a) {
        if (Sp(a, ['conversion', 'remarketing'])) {
          var b = Ul();
          a.C[T.g.dh] = b;
          var c = U(a.s, T.g.La);
          c || (c = 1 === b ? z.top.location.href : z.location.href);
          var d = a.C, e = T.g.La, f;
          if (null != c) {
            var g = String(c).substring(0, 512), h = g.indexOf('#');
            f = -1 == h ? g : g.substring(0, h);
          } else f = '';
          d[e] = f;
          Io(a, T.g.Ua, I.referrer);
          a.C[T.g.kc] = Qp();
          Io(a, T.g.Ta);
          var l = vi();
          a.C[T.g.Nb] = l.width + 'x' + l.height;
        }
      }, Xp = function(a) {
      Sp(a, ['conversion', 'remarketing']) && (Io(a, T.g.Va), Io(a, T.g.qa), Io(a, T.g.sa), 'remarketing' === a.metadata.hit_type && Io(a,
        T.g.Aa));
    }, Yp = function(a) {
      if (V(13)) if (!Cn(z)) Q(87); else if (void 0 !== En) {
        Q(85);
        var b = An();
        b ? In(b, a) : Q(86);
      }
    }, $p = function(a) {
      Sp(a, ['conversion']) && (!0 === z._gtmpcm || vp() ? a.C[T.g.Nc] = '2' : V(7) && (Zp || xp(wp()) || (Sl('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Zp = !0), xp(wp()) && (a.C[T.g.Nc] = '1')));
    }, aq = function(a) {
      Sp(a, ['conversion', 'remarketing']) && V(9) && Ej(T.g.K) && !1 !== U(a.s, T.g.Fa) && !1 !== U(a.s, T.g.da) && !1 !== U(a.s, T.g.Jb) && !1 !== U(a.s, T.g.Ma) && zp() && (a.C[T.g.Ug] = '1', a.metadata.send_fledge_experiment =
        !0);
    }, bq = function(a) {
      var b = function(d) {
        return U(a.s, d);
      };
      a.metadata.conversion_linker_enabled = !1 !== b(T.g.ya);
      var c = { prefix: b(T.g.Ka) || b(T.g.ib), domain: b(T.g.vb), Db: b(T.g.Sa), flags: b(T.g.wb) };
      a.metadata.cookie_options = c;
      a.metadata.redact_ads_data = null != b(T.g.oa) && !1 !== b(T.g.oa);
      a.metadata.allow_ad_personalization = !1 !== b(T.g.da);
    }, cq = function(a) {
      if (Jo(a, 'ccd_add_1p_data', !1) && Ej(T.g.K)) {
        var b = Wi(a.s);
        if (Yi(b)) {
          if (b.enable_code) {
            var c = U(a.s, T.g.wa);
            if (Fc(c) || null === c) a.metadata.user_data_from_code = c;
          }
          Fc(b.selectors) &&
          (a.metadata.user_data_from_manual = Vi(b.selectors));
        }
      }
    }, dq = function(a) {
      var b = !a.metadata.send_user_data_hit && Sp(a, ['conversion', 'user_data_web']),
        c = !Jo(a, 'ccd_add_1p_data', !1) && Sp(a, 'user_data_lead');
      if ((b || c) && Ej(T.g.K)) {
        var d = 'conversion' === a.metadata.hit_type, e = a.s, f = void 0, g = U(e, T.g.wa);
        if (d) {
          var h = (U(e, T.g.Sc) || {})[a.C[T.g.hb]];
          if (!0 === U(e, T.g.Nd) || h) {
            var l;
            var n;
            if (h) b:{
              switch (h.enhanced_conversions_mode) {
                case 'manual':
                  if (g && Fc(g)) {
                    n = g;
                    break b;
                  }
                  var p = h.enhanced_conversions_manual_var;
                  n = void 0 !==
                  p ? p : z.enhanced_conversion_data;
                  break b;
                case 'automatic':
                  n = Vi(h[T.g.Sg]);
                  break b;
              }
              n = void 0;
            } else n = z.enhanced_conversion_data;
            var q = n, r = (h || {}).enhanced_conversions_mode, u;
            if (q) {
              if ('manual' === r) switch (q._tag_mode) {
                case 'CODE':
                  u = 'c';
                  break;
                case 'AUTO':
                  u = 'a';
                  break;
                case 'MANUAL':
                  u = 'm';
                  break;
                default:
                  u = 'c';
              } else u = 'automatic' === r ? $i(h) ? 'a' : 'm' : 'c';
              l = { cb: q, Ei: u };
            } else l = { cb: q, Ei: void 0 };
            var t = l, v = t.Ei;
            f = t.cb;
            a.C[T.g.yh] = v;
          }
        } else {
          if (a.metadata.is_config_command || !a.s.J && !Xi(a.s)) return;
          Yi(Wi(a.s)) && null !== g && (Fc(g) ?
            f = g : f = Zi(Wi(a.s)), f && Rp(a));
        }
        a.metadata.user_data = f;
      }
    }, eq = function(a) {
      Sp(a, ['conversion', 'remarketing']) && (a.s.J ? 'conversion' !== a.metadata.hit_type && a.eventName && (a.C[T.g.Tg] = a.eventName) : a.C[T.g.Tg] = a.eventName, m(a.s.h, function(b, c) {
        Dh[b.split('.')[0]] || (a.C[b] = c);
      }));
    }, fq = function(a) {
      if (a.eventName === T.g.Ea && (a.metadata.is_config_command = !0, Sp(a, 'conversion') && (a.metadata.speculative = !0), !Sp(a, 'remarketing') || !1 !== U(a.s, T.g.Jb) && !1 !== U(a.s, T.g.Ma) || (a.metadata.speculative = !0), Sp(a, 'landing_page'))) {
        var b =
            U(a.s, T.g.bc), c = U(a.s, T.g.za) || {}, d = U(a.s, T.g.zb), e = a.metadata.conversion_linker_enabled,
          f = a.metadata.cookie_options;
        tp({ Zh: e, Uj: b, ii: c, Ci: d }, f);
        Go(a.target, a.s);
        po({
          Kf: !1,
          Le: a.metadata.redact_ads_data,
          ca: a.target.id,
          eventId: a.s.eventId,
          priorityId: a.s.priorityId,
          uc: e ? f : void 0,
          Ge: e,
          ci: a.C[T.g.lf],
          Vf: a.C[T.g.hc],
          Rf: a.C[T.g.fc],
        });
        a.M = !0;
      }
    }, gq = function(a) {
      if (!Jo(a, 'hasPreAutoPiiCcdRule', !1)) {
        var b = V(50);
        if ((!V(49) || b || a.s.J) && Sp(a, 'conversion') && Ej(T.g.K)) {
          var c = (U(a.s, T.g.Sc) || {})[a.C[T.g.hb]], d = a.C[T.g.Mc],
            e;
          if (!(e = $i(c))) if ('false' !== Fi.Ki && Li) if (Mi) e = !0; else {
            var f = ui('AW-' + d);
            e = !!f && !!f.preAutoPii;
          } else e = !1;
          if (e) {
            var g = Ua(), h = Si({ wc: !0, xc: !0, xi: !0 });
            if (0 !== h.elements.length) {
              for (var l = [], n = 0; n < h.elements.length; ++n) {
                var p = h.elements[n];
                l.push(p.querySelector + '*' + Ti(p) + '*' + p.type);
              }
              a.C[T.g.vh] = l.join('~');
              var q = h.pg;
              q && (a.C[T.g.wh] = q.querySelector, a.C[T.g.uh] = Ti(q));
              a.C[T.g.th] = String(Ua() - g);
              a.C[T.g.xh] = h.status;
            }
          }
        }
      }
    }, hq = function(a) {
      if (a.eventName === T.g.Ja && !a.s.J) {
        if (!a.metadata.consent_updated && Sp(a,
          'conversion')) {
          var b = U(a.s, T.g.xb);
          if ('function' !== typeof b) return;
          var c = String(U(a.s, T.g.jb)), d = a.C[c], e = U(a.s, c);
          c === T.g.ac || c === T.g.Od ? up({
            Fi: c,
            callback: b,
            ki: e,
          }, a.metadata.cookie_options, a.metadata.redact_ads_data, Wo) : b(d || e);
        }
        a.M = !0;
      }
    }, iq = function(a) {
      if (Sp(a, 'conversion') && Ej(T.g.K) && (a.C[T.g.qe] || a.C[T.g.ie])) {
        var b = a.C[T.g.hb], c = K(a.metadata.cookie_options), d = Vn(c.prefix);
        c.prefix = '_gcl' === d ? '' : d;
        if (a.C[T.g.qe]) {
          var e = Op(b, c);
          e && (a.C[T.g.Ah] = e);
        }
        if (a.C[T.g.ie]) {
          var f = Kp(b, c).hk;
          f && (a.C[T.g.Yg] =
            f);
        }
      }
    }, jq = function(a) {
      var b = V(4), c = a.s, d, e, f;
      if (!b) {
        var g = ep(c, T.g.fa);
        d = eb(Fc(g) ? g : {});
      }
      var h = ep(c, T.g.fa, 1), l = ep(c, T.g.fa, 2);
      e = eb(Fc(h) ? h : {}, '.');
      f = eb(Fc(l) ? l : {}, '.');
      b || (a.C[T.g.lf] = d);
      a.C[T.g.hc] = e;
      a.C[T.g.fc] = f;
    }, kq = function(a) {
      if (Sp(a, ['conversion', 'remarketing'])) {
        var b = 'conversion' === a.metadata.hit_type;
        b && a.eventName !== T.g.Ha || (Io(a, T.g.ja), b && (Io(a, T.g.Sd), Io(a, T.g.Qd), Io(a, T.g.Rd), Io(a, T.g.Pd), a.C[T.g.Og] = a.eventName));
      }
    }, lq = function(a) {
      if (Sp(a, ['conversion', 'remarketing'])) {
        var b = a.s, c = U(b,
          T.g.Mb);
        if (!0 === c || !1 === c) a.C[T.g.Mb] = c;
        var d = U(b, T.g.da);
        if (!0 === d || !1 === d) a.C[T.g.Jh] = !d;
        !1 === d && Sp(a, 'remarketing') && (a.M = !0);
      }
    }, mq = function(a) {
      Sp(a, 'conversion') && (Io(a, T.g.Uc), Io(a, T.g.Zd), Io(a, T.g.Yc), Io(a, T.g.ce), Io(a, T.g.Pc), Io(a, T.g.ae));
    }, nq = function(a) {
      Mo(a);
    }, oq = function(a) {
      if (Sp(a, ['conversion', 'remarketing']) && z.__gsaExp && z.__gsaExp.id) {
        var b = z.__gsaExp.id;
        if (Ea(b)) try {
          var c = Number(b());
          isNaN(c) || (a.C[T.g.bh] = c);
        } catch (d) {
        }
      }
    },
    pq = function(a) {
      if (Sp(a, ['conversion', 'remarketing'])) {
        var b = Pp();
        void 0 !== b && (a.C[T.g.zh] = b || 'error');
        var c = om();
        c && (a.C[T.g.Zg] = c);
        var d = nm();
        d && (a.C[T.g.ph] = d);
      }
    }, qq = function(a) {
      Sp(a, ['conversion']) && '1' === Bk(!1)._up && (a.C[T.g.eh] = !0);
    }, rq = function(a) {
      Sp(a, ['conversion']) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !Ej(T.g.K));
    }, sq = function(a) {
      if (Sp(a, ['conversion', 'user_data_lead', 'user_data_web']) && Ej(T.g.K) && a.metadata.conversion_linker_enabled) {
        var b = a.metadata.cookie_options, c =
          Vn(b.prefix);
        '_gcl' === c && (c = '');
        var d = c;
        if (Ep.test(I.location.host) ? Hp.test(I.location.href) || Fp.test(I.location.href) : !lo(d)) {
          var e = Mp(c);
          e && (a.C[T.g.ac] = e);
          if (!c) {
            var f = Jp(On() ? Kn() : {}, Fp);
            f && (a.C[T.g.Xg] = f);
          }
        } else {
          var g = Np(c);
          g && (a.C[T.g.qe] = g);
          if (!c) {
            var h = a.C[T.g.hb];
            b = K(b);
            b.prefix = c;
            var l = Kp(h, b, !0).gk;
            l && (a.C[T.g.ie] = l);
          }
        }
      }
    }, tq = function(a) {
      if (Sp(a, ['conversion', 'remarketing', 'user_data_lead', 'user_data_web']) && a.metadata.conversion_linker_enabled && Ej(T.g.K)) {
        var b = !V(3);
        if ('remarketing' !== a.metadata.hit_type ||
          b) {
          var c = a.metadata.cookie_options;
          Uk(c, 'conversion' === a.metadata.hit_type && a.eventName !== T.g.Ja);
          a.C[T.g.Od] = Ok[Qk(c.prefix)];
        }
      }
    }, uq = function(a) {
      if (Sp(a, ['conversion'])) {
        var b = Po(a.metadata.cookie_options);
        if (b && !a.C[T.g.Va]) {
          var c = dk(a.C[T.g.hb]);
          a.C[T.g.Va] = c;
        }
        b && (a.C[T.g.yb] = b, a.metadata.send_ccm_parallel_ping = !0);
      }
    }, vq = function(a) {
      var b = !Ej(T.g.K);
      switch (a.metadata.hit_type) {
        case 'user_data_lead':
        case 'user_data_web':
          a.M = !(!b && !a.metadata.consent_updated);
          break;
        case 'remarketing':
          a.M = b;
          break;
        case 'conversion':
          a.metadata.consent_updated &&
          (a.C[T.g.Bg] = !0);
      }
    }, wq = function(a) {
      Sp(a, ['conversion']) && a.s.eventMetadata.is_external_event && (a.C[T.g.Hh] = !0);
    }, xq = function(a) {
      var b;
      if ('gtag.config' !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
        case 'user_data_web':
          b = 97;
          Rp(a);
          break;
        case 'user_data_lead':
          b = 98;
          Rp(a);
          break;
        case 'conversion':
          b = 99;
      }
      !a.metadata.speculative && b && Q(b);
      !0 === a.metadata.speculative && (a.M = !0);
    }, Zp = !1;
  var yq = function(a) {
    if (Ej(T.g.K)) return a;
    a = a.replace(/&url=([^&#]+)/, function(b, c) {
      var d = Gf(decodeURIComponent(c));
      return '&url=' + encodeURIComponent(d);
    });
    return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
      var d = Gf(decodeURIComponent(c));
      return '&ref=' + encodeURIComponent(d);
    });
  };
  var zq = {
    I: {
      Ag: 'ads_conversion_hit',
      Te: 'container_execute_start',
      Dg: 'container_setup_end',
      Ue: 'container_setup_start',
      Cg: 'container_execute_end',
      Eg: 'container_yield_end',
      Ve: 'container_yield_start',
      Bh: 'event_execute_end',
      Ch: 'event_setup_end',
      ad: 'event_setup_start',
      Dh: 'ga4_conversion_hit',
      nc: 'page_load',
      Dl: 'pageview',
      Ab: 'snippet_load',
      Ph: 'tag_callback_error',
      Qh: 'tag_callback_failure',
      Rh: 'tag_callback_success',
      Sh: 'tag_execute_end',
      qc: 'tag_execute_start',
    },
  };
  var Aq = !1, Bq = 'L S Y E TC HTC'.split(' '), Cq = ['S', 'E'], Dq = ['TS', 'TE'];
  var $q = function(a, b, c, d, e, f) {
    var g = {};
    return g;
  }, ar = function(a) {
    var b = !1;
    return b;
  }, br = function(a, b) {
  }, cr = function() {
    var a = {};
    return a;
  }, Tq = function() {
    var a = {};
    return a;
  }, dr = function() {
  }, er = function(a, b, c) {
  }, fr = function(a) {
    pc() && pc().mark(L.H + '_' + a + '_start');
  }, gr = function(a) {
    if (pc()) {
      var b = pc(), c = L.H + '_' +
        a + '_start', d = L.H + '_' + a + '_duration';
      b.measure(d, c);
      var e = pc().getEntriesByName(d)[0];
      b.clearMarks(c);
      b.clearMeasures(d);
      var f = Fh._p || {};
      void 0 === f[a] && (f[a] = e.duration, Fh._p = f);
      return e.duration;
    }
  }, hr = function() {
    var a = $q('PAGEVIEW');
    if (Lq(a.lb, 'mark')[0]) {
      var b = pc();
      b.clearMarks(a.lb);
      b.clearMeasures('GTM-' + zq.I.nc + ':to:PAGEVIEW');
    }
    var c = $q(zq.I.nc);
    ar(a) && br(a, c);
  };
  var ir = function(a, b) {
    var c = z, d, e = c.GooglebQhCsO;
    e || (e = {}, c.GooglebQhCsO = e);
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var jr = function(a, b) {
    var c = Ol(a, 'fmt');
    if (b) {
      var d = Ol(a, 'random'), e = Ol(a, 'label') || '';
      if (!d) return !1;
      var f = xn(decodeURIComponent(e.replace(/\+/g, ' ')) + ':' + decodeURIComponent(d.replace(/\+/g, ' ')));
      if (!ir(f, b)) return !1;
    }
    c && 4 != c && (a = Ql(a, 'rfmt', c));
    var g = Ql(a, 'fmt', 4);
    cc(g, function() {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, void 0, I.getElementsByTagName('script')[0].parentElement || void 0);
    return !0;
  };
  var kr = function(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c], e = void 0;
        if (d.hasOwnProperty('google_business_vertical')) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || (f.google_business_vertical = e, f);
        } else e = '', b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e], h;
        for (h in d) 'google_business_vertical' !== h && (h in g || (g[h] = []), g[h].push(d[h]));
      }
      return Object.keys(b).map(function(l) {
        return b[l];
      });
    }, lr = function(a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push((e.id =
            d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e));
        }
      }
      return b;
    }, mr = function(a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && b.push({
          item_id: d.id,
          quantity: d.quantity,
          value: d.price,
          start_date: d.start_date,
          end_date: d.end_date,
        });
      }
      return b;
    }, or = function(a) {
      if (!a) return '';
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c], e = [];
        d && (e.push(nr(d.value)), e.push(nr(d.quantity)),
          e.push(nr(d.item_id)), e.push(nr(d.start_date)), e.push(nr(d.end_date)), b.push('(' + e.join('*') + ')'));
      }
      return 0 < b.length ? b.join('') : '';
    }, nr = function(a) {
      return 'number' !== typeof a && 'string' !== typeof a ? '' : a.toString();
    }, qr = function(a, b) {
      var c = pr(b);
      return '' + a + (a && c ? ';' : '') + c;
    }, pr = function(a) {
      if (!a || 'object' !== typeof a || 'function' === typeof a.join) return '';
      var b = [];
      m(a, function(c, d) {
        var e, f;
        if (Ia(d)) {
          for (var g = [], h = 0; h < d.length; ++h) {
            var l = rr(d[h]);
            void 0 != l && g.push(l);
          }
          f = 0 !== g.length ? g.join(',') : void 0;
        } else f =
          rr(d);
        e = f;
        var n = rr(c);
        n && void 0 != e && b.push(n + '=' + e);
      });
      return b.join(';');
    }, rr = function(a) {
      var b = typeof a;
      if (null != a && 'object' !== b && 'function' !== b) return String(a).replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/=/g, '\\=');
    }, sr = function(a, b) {
      var c = [], d = function(f, g) {
        null != g && '' !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + '=' + encodeURIComponent(g)));
      }, e = a.metadata.hit_type;
      'conversion' !== e && 'remarketing' !== e || d('random', a.metadata.event_start_timestamp_ms);
      m(b, d);
      return c.join('&');
    }, tr = function(a, b) {
      var c =
          a.metadata.hit_type, d = a.C[T.g.Mc], e = Ej(T.g.K), f = [], g, h = a.s.aa, l, n = dl() ? 2 : 3, p = 0,
        q = function(w) {
          f.push(w);
          w.ab && p++;
        };
      switch (c) {
        case 'conversion':
          l = 'pagead/conversion';
          var r = '';
          e ? a.metadata.is_gcp_conversion ? (g = 'https://www.google.com/', l = 'pagead/1p-conversion') : g = 'https://www.googleadservices.com/' : g = 'https://pagead2.googlesyndication.com/';
          a.metadata.is_gcp_conversion && (r = '&gcp=1&sscte=1&ct_cookie_present=1');
          q({ ob: '' + g + l + '/' + d + '/?' + sr(a, b) + r, format: n, ab: !0 });
          a.metadata.send_ccm_parallel_ping && q({
            ob: '' +
              g + 'ccm/conversion/' + d + '/?' + sr(a, b) + r, format: 2, ab: !0,
          });
          a.metadata.is_gcp_conversion && (r = '&gcp=1&ct_cookie_present=1', q({
            ob: '' + (e ? 'https://googleads.g.doubleclick.net/' : g) + 'pagead/viewthroughconversion/' + d + '/?' + sr(a, b) + r,
            format: n,
            ab: !0,
          }));
          break;
        case 'remarketing':
          var u = b.data || '', t = kr(lr(a.C[T.g.ja]));
          if (t.length) {
            for (var v = 0; v < t.length; v++) b.data = qr(u, t[v]), q({
              ob: 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/' + d + '/?' + sr(a, b),
              format: n,
              ab: !0,
            }), a.metadata.send_fledge_experiment && q({
              ob: Bp() +
                '/td/rul/' + d + '?' + sr(a, b), format: 4, ab: !1,
            }), a.metadata.event_start_timestamp_ms += 1;
            a.metadata.send_fledge_experiment = !1;
          } else q({
            ob: 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/' + d + '/?' + sr(a, b),
            format: n,
            ab: !0,
          });
          break;
        case 'user_data_lead':
          q({ ob: 'https://google.com/pagead/form-data/' + d + '?' + sr(a, b), format: 1, ab: !0 });
          break;
        case 'user_data_web':
          q({ ob: 'https://google.com/ccm/form-data/' + d + '?' + sr(a, b), format: 1, ab: !0 });
      }
      1 < f.length && Ea(a.s.aa) && (h = fb(a.s.aa, p));
      dl() || 'conversion' !== c && 'remarketing' !==
      c || !a.metadata.send_fledge_experiment || q({ ob: Bp() + '/td/rul/' + d + '?' + sr(a, b), format: 4, ab: !1 });
      return { aa: h, sk: f };
    }, ur = function(a, b, c, d, e) {
      if (V(70)) {
        var f = $q(zq.I.Ag, L.fb, c.s.eventId, void 0, c.eventName);
        ar(f) && br(f);
      }
      var g = function() {
        e && e();
      };
      switch (b) {
        case 1:
          mc(a);
          e && e();
          break;
        case 2:
          fc(a, g);
          break;
        case 3:
          var h = !1;
          try {
            h = jr(a, g);
          } catch (p) {
            h = !1;
          }
          h || ur(a, 2, c, d, g);
          break;
        case 4:
          var l = 'AW-' + c.C[T.g.Mc], n = c.C[T.g.hb];
          n && (l = l + '/' + n);
          Ap(a, l);
      }
    }, vr = {}, wr = (vr[T.g.Bg] = 'gcu', vr[T.g.ac] = 'gclaw', vr[T.g.Od] = 'auid', vr[T.g.Pd] =
      'dscnt', vr[T.g.Qd] = 'fcntr', vr[T.g.Rd] = 'flng', vr[T.g.Sd] = 'mid', vr[T.g.Og] = 'bttype', vr[T.g.hb] = 'label', vr[T.g.Nc] = 'capi', vr[T.g.sa] = 'currency_code', vr[T.g.Zd] = 'vdltv', vr[T.g.dj] = '_dbg', vr[T.g.ce] = 'oedeld', vr[T.g.fc] = 'edid', vr[T.g.Ug] = 'fledge', vr[T.g.Xg] = 'gac', vr[T.g.ie] = 'gacgb', vr[T.g.Yg] = 'gacmcov', vr[T.g.Zg] = 'gdpr', vr[T.g.hc] = 'gdid', vr[T.g.bh] = 'gsaexp', vr[T.g.dh] = 'frm', vr[T.g.eh] = 'gtm_up', vr[T.g.lf] = 'did', vr[T.g.Uc] = void 0, vr[T.g.La] = 'url', vr[T.g.Ua] = 'ref', vr[T.g.kc] = 'tiba', vr[T.g.Mb] = 'rdp', vr[T.g.yb] =
      'ecsid', vr[T.g.Yc] = 'delopc', vr[T.g.ph] = 'gdpr_consent', vr[T.g.Va] = 'oid', vr[T.g.th] = 'ec_lat', vr[T.g.uh] = 'ec_meta', vr[T.g.vh] = 'ec_m', vr[T.g.wh] = 'ec_sel', vr[T.g.xh] = 'ec_s', vr[T.g.yh] = 'ec_mode', vr[T.g.Aa] = 'userId', vr[T.g.zh] = 'us_privacy', vr[T.g.qa] = 'value', vr[T.g.qe] = 'gclgb', vr[T.g.Ah] = 'mcov', vr[T.g.Gh] = 'hn', vr[T.g.Hh] = 'gtm_ee', vr[T.g.Jh] = 'npa', vr[T.g.Mc] = null, vr[T.g.Nb] = null, vr[T.g.Ta] = null, vr[T.g.ja] = null, vr),
    yr = function(a) {
      xr(a, function(b) {
        for (var c = tr(a, b), d = c.aa, e = c.sk, f = 0; f < e.length; f++) {
          var g = e[f],
            h = g.ob, l = g.format, n = g.ab, p = a.metadata.redact_ads_data ? yq(h) : h;
          ur(p, l, a, b, n ? d : void 0);
        }
      });
    }, xr = function(a, b) {
      var c = a.metadata.hit_type, d = {}, e = {}, f = [], g = a.metadata.event_start_timestamp_ms;
      if ('conversion' === c || 'remarketing' === c) d.cv = '11', d.fst = g, d.fmt = 3, d.bg = 'ffffff', d.guid = 'ON', d.async = '1';
      d.gtm = Gl();
      sj() && 'remarketing' !== c && (d.gcs = Fj(), tj() && (d.gcd = 'G1' + Aj(qj)));
      if (a.C[T.g.Nb]) {
        var h = a.C[T.g.Nb].split('x');
        2 === h.length && (d.u_w = h[0], d.u_h = h[1]);
      }
      if (a.C[T.g.Ta]) {
        var l = a.C[T.g.Ta];
        2 === l.length ? d.hl = l : 5 ===
          l.length && (d.hl = l.substring(0, 2), d.gl = l.substring(3, 5));
      }
      V(13) && (wr[T.g.rf] = 'uaa', wr[T.g.sf] = 'uab', wr[T.g.tf] = 'uafvl', wr[T.g.uf] = 'uamb', wr[T.g.vf] = 'uam', wr[T.g.wf] = 'uap', wr[T.g.xf] = 'uapv', wr[T.g.yf] = 'uaw');
      m(a.C, function(t, v) {
        if (wr.hasOwnProperty(t)) {
          var w = wr[t];
          w && (d[w] = v);
        } else e[t] = v;
      });
      var n = a.C[T.g.Uc];
      void 0 != n && '' !== n && (d.vdnc = String(n));
      var p = a.C[T.g.ae];
      void 0 !== p && (d.shf = p);
      var q = a.C[T.g.Pc];
      void 0 !== q && (d.delc = q);
      d.data = pr(e);
      var r = a.C[T.g.ja];
      r && 'conversion' === c && (d.iedeld = bj(r), d.item = or(mr(r)));
      if (('conversion' === c || 'user_data_lead' === c || 'user_data_web' === c) && a.metadata.user_data && (!V(68) || Ej(T.g.K))) {
        var u = ph(a.metadata.user_data);
        u && f.push(u.then(function(t) {
          d.em = t.mg;
          if ('user_data_web' === c && 0 < t.Pk) {
            var v = Qo(a.metadata.cookie_options);
            d.ecsid = v;
          }
        }));
      }
      if (f.length) try {
        Promise.all(f).then(function() {
          b(d);
        });
        return;
      } catch (t) {
      }
      b(d);
    };
  var zr = function() {
    this.h = {};
  }, Ar = function(a, b, c) {
    null != c && (a.h[b] = c);
  }, Br = function(a) {
    return Object.keys(a.h).map(function(b) {
      return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b]);
    }).join('&');
  }, Dr = function(a, b, c, d) {
    if (!sj()) {
      Cr(a, b, c, d);
      return;
    }
    Ij(function() {
      Ej(T.g.K) ? Cr(a, b, c, d) : d && d();
    }, [T.g.K]);
  };
  var Er = function(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = {
        gclgb: function() {
          return To('gb', b, c).join('.');
        }, gacgb: function() {
          return Zo(c);
        }, gclaw: function() {
          return Wo(b, c).join('.');
        }, gac: function() {
          return Yo(c);
        },
      }, e = ap(b), f = e ? 'gclgb' : 'gclaw', g = e ? 'gacgb' : 'gac', h = d[g], l = (0, d[f])(),
      n = '_gcl' !== b ? '' : h();
    l && Ar(a, f, l);
    n && Ar(a, g, n);
  }, Cr = function(a, b, c, d) {
    c = c || {};
    var e = c.uc || {}, f = new zr;
    oh(b, function(g, h) {
      Ar(f, 'em', g);
      Ar(f, 'gtm', Gl());
      sj() && (Ar(f, 'gcs', Fj()), Ar(f, 'gcd', 'G1' + Aj(qj)));
      Er(f, Vn(e.prefix), c.Le);
      Ar(f, 'auid', Ok[Qk(e.prefix)]);
      if (0 < h) {
        var l = Qo(e);
        Ar(f, 'ecsid', l);
      }
      var n = Br(f);
      mc('https://google.com/pagead/form-data/' + a + '?' + n);
      mc('https://google.com/ccm/form-data/' + a + '?' + n);
      d && d();
    });
  };

  function Fr(a, b) {
    if (a) {
      var c = '' + a;
      0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ff('' + c + b).href;
    }
  }

  function Gr() {
    return !!Eh.we && 'SGTM_TOKEN' !== Eh.we.split('@@').join('');
  }var Ir = function(a, b, c, d) {
    if (!Hr() && !kl(a)) {
      var e = c ? '/gtag/js' : '/gtm.js', f = '?id=' + encodeURIComponent(a) + '&l=' + Eh.ka,
        g = 0 === a.indexOf('GTM-');
      g || (f += '&cx=c');
      var h = Gr();
      h && (f += '&sign=' + Eh.we);
      var l = Uh || Wh ? Fr(b, e + f) : void 0;
      if (!l) {
        var n = Eh.Md + e;
        h && Xb && g && (n = Xb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0]);
        l = vo('https://', 'http://', n + f);
      }
      il().container[a] = { state: 1, context: d };
      cc(l);
    }
  }, Jr = function(a, b, c) {
    var d;
    if (d = !Hr()) {
      var e = il().destination[a];
      d = !(e && e.state);
    }
    if (d) if (ll()) il().destination[a] = {
      state: 0,
      transportUrl: b, context: c,
    }, Q(91); else {
      var f = '/gtag/destination?id=' + encodeURIComponent(a) + '&l=' + Eh.ka + '&cx=c';
      Gr() && (f += '&sign=' + Eh.we);
      var g = Uh || Wh ? Fr(b, f) : void 0;
      g || (g = vo('https://', 'http://', Eh.Md + f));
      il().destination[a] = { state: 1, context: c };
      cc(g);
    }
  };

  function Hr() {
    if (dl()) {
      return !0;
    }
    return !1;
  }var Kr = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Lr = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes'],
      customScripts: ['html', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes'],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    }, Mr = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: ['customPixels', 'customScripts', 'html', 'nonGoogleScripts', 'nonGoogleIframes'],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    }, Nr = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(' '),
    Qr = function(a) {
      var b = li('gtm.allowlist') || li('gtm.whitelist');
      b && Q(9);
      Sh && (b = ['google', 'gtagfl', 'lcl', 'zone']);
      Or() && (Sh ?
        Q(116) : Q(117), Pr && (b = [], window.console && window.console.log && window.console.log('GTM blocked. See go/13687728.')));
      var c = b && $a(Ra(b), Lr), d = li('gtm.blocklist') || li('gtm.blacklist');
      d || (d = li('tagTypeBlacklist')) && Q(3);
      d ? Q(8) : d = [];
      Or() && (d = Ra(d), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
      0 <= Ra(d).indexOf('google') && Q(2);
      var e = d && $a(Ra(d), Mr), f = {};
      return function(g) {
        var h = g && g[Zd.Wa];
        if (!h || 'string' != typeof h) return !0;
        h = h.replace(/^_*/, '');
        if (void 0 !== f[h]) return f[h];
        var l = di[h] ||
          [], n = a(h, l);
        if (b) {
          var p;
          if (p = n) a:{
            if (0 > c.indexOf(h)) if (l && 0 < l.length) for (var q = 0; q < l.length; q++) {
              if (0 > c.indexOf(l[q])) {
                Q(11);
                p = !1;
                break a;
              }
            } else {
              p = !1;
              break a;
            }
            p = !0;
          }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) r = u; else {
            var t = Na(e, l || []);
            t && Q(10);
            r = t;
          }
        }
        var v = !n || r;
        v || !(0 <= l.indexOf('sandboxedScripts')) || c && -1 !== c.indexOf('sandboxedScripts') || (v = Na(e, Nr));
        return f[h] = v;
      };
    }, Pr = !1;
  var Or = function() {
    return Kr.test(z.location && z.location.hostname);
  };
  var Rr = { initialized: 11, complete: 12, interactive: 13 }, Sr = {}, Tr = Object.freeze((Sr[T.g.Ma] = !0, Sr)),
    Ur = 0 <= I.location.search.indexOf('?gtm_diagnostics=') || 0 <= I.location.search.indexOf('&gtm_diagnostics='),
    Wr = function(a, b, c) {
      if (ym && 'config' === a && !(1 < so(b).O.length)) {
        var d, e = Yb('google_tag_data', {});
        e.td || (e.td = {});
        d = e.td;
        var f = K(c.F);
        K(c.h, f);
        var g = [], h;
        for (h in d) {
          var l = Vr(d[h], f);
          l.length && (Ur && console.log(l), g.push(h));
        }
        if (g.length) {
          if (g.length) {
            var n = b + '*' + g.join('.');
            Im = Im ? Im + '!' + n : '&tdc=' + n;
          }
          wb('TAGGING',
            Rr[I.readyState] || 14);
        }
        d[b] = f;
      }
    };

  function Xr(a, b) {
    var c = {}, d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }

  function Vr(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? '' : d;
    if (a === b) return [];
    var e = function(q, r) {
      var u = r[q];
      return void 0 === u ? Tr[q] : u;
    }, f;
    for (f in Xr(a, b)) {
      var g = (d ? d + '.' : '') + f, h = e(f, a), l = e(f, b), n = 'object' === Dc(h) || 'array' === Dc(h),
        p = 'object' === Dc(l) || 'array' === Dc(l);
      if (n && p) Vr(h, l, c, g); else if (n || p || h !== l) c[g] = !0;
    }
    return Object.keys(c);
  }var Yr = !1, Zr = 0, $r = [];

  function as(a) {
    if (!Yr) {
      var b = I.createEventObject, c = 'complete' == I.readyState, d = 'interactive' == I.readyState;
      if (!a || 'readystatechange' != a.type || c || !b && d) {
        Yr = !0;
        for (var e = 0; e < $r.length; e++) J($r[e]);
      }
      $r.push = function() {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }

  function bs() {
    if (!Yr && 140 > Zr) {
      Zr++;
      try {
        I.documentElement.doScroll('left'), as();
      } catch (a) {
        z.setTimeout(bs, 50);
      }
    }
  }

  var cs = function(a) {
    Yr ? a() : $r.push(a);
  };
  var es = function(a, b, c) {
    return { entityType: a, indexInOriginContainer: b, nameInOriginContainer: c, originContainerId: L.H };
  };
  var gs = function(a, b) {
    this.h = !1;
    this.F = [];
    this.N = { tags: [] };
    this.U = !1;
    this.B = this.D = 0;
    fs(this, a, b);
  }, hs = function(a, b, c, d) {
    if (Ph.hasOwnProperty(b) || '__zone' === b) return -1;
    var e = {};
    Fc(d) && (e = K(d, e));
    e.id = c;
    e.status = 'timeout';
    return a.N.tags.push(e) - 1;
  }, is = function(a, b, c, d) {
    var e = a.N.tags[b];
    e && (e.status = c, e.executionTime = d);
  }, js = function(a) {
    if (!a.h) {
      for (var b = a.F, c = 0; c < b.length; c++) b[c]();
      a.h = !0;
      a.F.length = 0;
    }
  }, fs = function(a, b, c) {
    void 0 !== b && a.ye(b);
    c && z.setTimeout(function() {
      return js(a);
    }, Number(c));
  };
  gs.prototype.ye = function(a) {
    var b = this, c = Xa(function() {
      return J(function() {
        a(L.H, b.N);
      });
    });
    this.h ? c() : this.F.push(c);
  };
  var ks = function(a) {
    a.D++;
    return Xa(function() {
      a.B++;
      a.U && a.B >= a.D && js(a);
    });
  }, ls = function(a) {
    a.U = !0;
    a.B >= a.D && js(a);
  };
  var ms = {}, ns = function() {
    return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
  }, os = !1;
  var ps = function(a) {
    z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || 'ga');
    var b = z.GoogleAnalyticsObject;
    if (z[b]) z.hasOwnProperty(b); else {
      var c = function() {
        c.q = c.q || [];
        c.q.push(arguments);
      };
      c.l = Number(Ta());
      z[b] = c;
    }
    return z[b];
  }, qs = function(a) {
    if (sj()) {
      var b = ns();
      b(a + 'require', 'linker');
      b(a + 'linker:passthrough', !0);
    }
  };

  function rs() {
    return z.GoogleAnalyticsObject || 'ga';
  }

  var ss = function(a) {
  }, ts = function(a, b) {
    return function() {
      var c = ns(), d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get('sendHitTask');
        d.set('sendHitTask', function(f) {
          var g = f.get('hitPayload'), h = f.get('hitCallback'), l = 0 > g.indexOf('&tid=' + b);
          l && (f.set('hitPayload', g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0), f.set('hitCallback', void 0, !0));
          e(f);
          l && (f.set('hitPayload',
            g, !0), f.set('hitCallback', h, !0), f.set('_x_19', void 0, !0), e(f));
        });
      }
    };
  };

  function ys(a, b, c, d) {
    var e = ye[a], f = zs(a, b, c, d);
    if (!f) return null;
    var g = Je(e[Zd.Oh], c, []);
    if (g && g.length) {
      var h = g[0];
      f = ys(h.index, { aa: f, Z: 1 === h.di ? b.terminate : f, terminate: b.terminate }, c, d);
    }
    return f;
  }

  function zs(a, b, c, d) {
    function e() {
      if (f[Zd.Cj]) h(); else {
        var w = Ke(f, c, []), y = w[Zd.Mi];
        if (null != y) for (var x = 0; x < y.length; x++) if (!Ej(y[x])) {
          h();
          return;
        }
        var A = hs(c.Cb, String(f[Zd.Wa]), Number(f[Zd.Bb]), w[Zd.Dj]), B = !1;
        w.vtp_gtmOnSuccess = function() {
          if (!B) {
            B = !0;
            var G = Ua() - H;
            kn(c.id, ye[a], '5', G);
            is(c.Cb, A, 'success', G);
            V(70) && er(c, f, zq.I.Rh);
            g();
          }
        };
        w.vtp_gtmOnFailure = function() {
          if (!B) {
            B = !0;
            var G = Ua() - H;
            kn(c.id, ye[a], '6', G);
            is(c.Cb, A, 'failure', G);
            V(70) && er(c, f, zq.I.Qh);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId =
          c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        kn(c.id, f, '1');
        var C = function() {
          var G = Ua() - H;
          kn(c.id, f, '7', G);
          is(c.Cb, A, 'exception', G);
          V(70) && er(c, f, zq.I.Ph);
          B || (B = !0, h());
        };
        if (V(70)) {
          var D = $q(zq.I.qc, L.H, c.id, Number(f[Zd.Bb]), c.name, qm(f));
          ar(D);
        }
        var H = Ua();
        try {
          Ie(w, { event: c, index: a, type: 1 });
        } catch (G) {
          C(G);
        }
        V(70) && er(c, f, zq.I.Sh);
      }
    }

    var f = ye[a], g = b.aa, h = b.Z, l = b.terminate;
    if (c.Zf(f)) return null;
    var n = Je(f[Zd.Th], c, []);
    if (n && n.length) {
      var p = n[0], q = ys(p.index, { aa: g, Z: h, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.di ? l : q;
    }
    if (f[Zd.Kh] || f[Zd.Fj]) {
      var r = f[Zd.Kh] ? ze : c.ol, u = g, t = h;
      if (!r[a]) {
        e = Xa(e);
        var v = As(a, r, e);
        g =
          v.aa;
        h = v.Z;
      }
      return function() {
        r[a](u, t);
      };
    }
    return e;
  }

  function As(a, b, c) {
    var d = [], e = [];
    b[a] = Bs(d, e, c);
    return {
      aa: function() {
        b[a] = Cs;
        for (var f = 0; f < d.length; f++) d[f]();
      }, Z: function() {
        b[a] = Ds;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }

  function Bs(a, b, c) {
    return function(d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }

  function Cs(a) {
    a();
  }

  function Ds(a, b) {
    b();
  }var Fs = function(a, b) {
    return 1 === arguments.length ? Es('set', a) : Es('set', a, b);
  }, Gs = function(a, b) {
    return 1 === arguments.length ? Es('config', a) : Es('config', a, b);
  }, Hs = function(a, b, c) {
    c = c || {};
    c[T.g.Ob] = a;
    return Es('event', b, c);
  };

  function Es(a) {
    return arguments;
  }

  var Is = function() {
    this.h = [];
    this.B = [];
  };
  Is.prototype.enqueue = function(a, b, c) {
    var d = this.h.length + 1;
    a['gtm.uniqueEventId'] = b;
    a['gtm.priorityId'] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = { message: a, notBeforeEventId: b, priorityId: d, messageContext: c };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++) try {
      this.B[f](e);
    } catch (g) {
    }
  };
  Is.prototype.listen = function(a) {
    this.B.push(a);
  };
  Is.prototype.get = function() {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b], d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  Is.prototype.prune = function(a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Ks = function(a, b, c) {
    Js().enqueue(a, b, c);
  }, Ms = function() {
    var a = Ls;
    Js().listen(a);
  };

  function Js() {
    var a = Fh.mb;
    a || (a = new Is, Fh.mb = a);
    return a;
  }

  var Us = function(a) {
    var b = Fh.zones;
    return b ? b.getIsAllowedFn(fl(), a) : function() {
      return !0;
    };
  }, Vs = function(a) {
    var b = Fh.zones;
    return b ? b.isActive(fl(), a) : !0;
  };
  var Ys = function(a, b) {
    for (var c = [], d = 0; d < ye.length; d++) if (a[d]) {
      var e = ye[d];
      var f = ks(b.Cb);
      try {
        var g = ys(d, { aa: f, Z: f, terminate: f }, b, d);
        if (g) {
          var h = c, l = h.push, n = d, p = e['function'];
          if (!p) throw'Error: No function name given for function call.';
          var q = Ae[p];
          l.call(h, { Ai: n, oi: q ? q.priorityOverride || 0 : 0, execute: g });
        } else Ws(d, b), f();
      } catch (u) {
        f();
      }
    }
    c.sort(Xs);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };

  function Xs(a, b) {
    var c, d = b.oi, e = a.oi;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c; else {
      var g = a.Ai, h = b.Ai;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }

  function Ws(a, b) {
    if (ym) {
      var c = function(d) {
        var e = b.Zf(ye[d]) ? '3' : '4', f = Je(ye[d][Zd.Oh], b, []);
        f && f.length && c(f[0].index);
        kn(b.id, ye[d], e);
        var g = Je(ye[d][Zd.Th], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }

  var qt = !1, Zs;
  var Jt = function(a) {
    var b = Ua(), c = a['gtm.uniqueEventId'], d = a['gtm.priorityId'], e = a.event;
    if (V(70)) {
      var f = $q(zq.I.ad, L.H, c, void 0, e);
      ar(f);
    }
    if ('gtm.js' === e) {
      if (qt) return !1;
      qt = !0;
    }
    var l, n = !1;
    if (Vs(c)) l = Us(c); else {
      if ('gtm.js' !== e && 'gtm.init' !== e && 'gtm.init_consent' !== e) return !1;
      n = !0;
      l = Us(Number.MAX_SAFE_INTEGER);
    }
    jn(c,
      e);
    var p = a.eventCallback, q = a.eventTimeout, r = {
      id: c, priorityId: d, name: e, Zf: Qr(l), ol: [], ji: function() {
        Q(6);
        wb('HEALTH', 0);
      }, Xh: Ft(), Yh: Gt(c), Cb: new gs(function() {
        if (V(70)) {
          var x = $q(zq.I.Bh, L.H, c, void 0, e);
          if (ar(x)) {
            var A = $q(zq.I.ad, L.H, c, void 0, e);
            br(x, A);
          }
          if ('gtm.load' === e) {
            var B = $q(zq.I.Cg, L.H);
            if (ar(B)) {
              var C = $q(zq.I.Te, L.H);
              br(B, C);
            }
            dr();
          }
        }
        p && p.apply(p, [].slice.call(arguments, 0));
      }, q),
    }, u = Te(r);
    n && (u = Ht(u));
    if (V(70)) {
      var t = $q(zq.I.Ch, L.H, c, void 0, e);
      if (ar(t)) {
        var v = $q(zq.I.ad, L.H, c, void 0, e);
        br(t, v);
      }
    }
    var w = Ys(u, r), y = !1;
    ls(r.Cb);
    'gtm.js' !== e && 'gtm.sync' !== e || ss(L.H);
    return It(u, w) || y;
  };

  function Gt(a) {
    return function(b) {
      ym && (Jc(b) || tn(a, 'input', b));
    };
  }

  function Ft() {
    var a = {};
    a.event = qi('event', 1);
    a.ecommerce = qi('ecommerce', 1);
    a.gtm = qi('gtm');
    a.eventModel = qi('eventModel');
    return a;
  }

  function Ht(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(ye[c][Zd.Wa]);
      if (Oh[d] || void 0 !== ye[c][Zd.Gj] || ei[d]) b[c] = !0;
      V(58) || 0 !== ye[c][Zd.Wa].indexOf('__ccd') && 0 !== ye[c][Zd.Wa].indexOf('__ogt') && '__set_product_settings' !== ye[c][Zd.Wa] || (b[c] = !0);
    }
    return b;
  }

  function It(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && ye[c] && !Ph[String(ye[c][Zd.Wa])]) return !0;
    return !1;
  }

  var Lt = function(a, b, c, d) {
    Kt.push('event', [b, a], c, d);
  }, Mt = function(a, b, c, d) {
    Kt.push('get', [a, b], c, d);
  }, Nt = function() {
    this.status = 1;
    this.N = {};
    this.h = {};
    this.B = {};
    this.U = null;
    this.F = {};
    this.D = !1;
  }, Ot = function(a, b, c, d) {
    var e = Ua();
    this.type = a;
    this.B = e;
    this.ca = b || '';
    this.h = c;
    this.messageContext = d;
  }, Pt = function() {
    this.B = {};
    this.D = {};
    this.h = [];
  }, Qt = function(a, b) {
    var c = so(b);
    return a.B[c.X] = a.B[c.X] || new Nt;
  }, Rt = function(a, b, c, d) {
    if (d.ca) {
      var e = Qt(a, d.ca), f = e.U;
      if (f) {
        var g = K(c), h = K(e.N[d.ca]), l = K(e.F), n = K(e.h),
          p = K(a.D), q = {};
        if (ym) try {
          q = K(ii);
        } catch (v) {
          Q(72);
        }
        var r = so(d.ca).prefix, u = function(v) {
            sn(d.messageContext.eventId, r, v);
            var w = g[T.g.cc];
            w && J(w);
          },
          t = rp(pp(op(np(lp(kp(mp(jp(ip(hp(new gp(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
            if (u) {
              var v = u;
              u = void 0;
              v('2');
            }
          }), function() {
            if (u) {
              var v = u;
              u = void 0;
              v('3');
            }
          }));
        try {
          sn(d.messageContext.eventId, r, '1'), Wr(d.type, d.ca, t), f(d.ca, b, d.B, t);
        } catch (v) {
          sn(d.messageContext.eventId, r, '4');
        }
      }
    }
  };
  Pt.prototype.register = function(a, b, c) {
    var d = Qt(this, a);
    3 !== d.status && (d.U = b, d.status = 3, c && (K(d.h, c), d.h = c), this.flush());
  };
  Pt.prototype.push = function(a, b, c, d) {
    if (void 0 !== c) {
      if (!so(c)) return;
      if (c) {
        var e = so(c);
        e && 1 === Qt(this, c).status && (Qt(this, c).status = 2, this.push('require', [{}], e.X, {}));
      }
      Qt(this, c).D && (d.deferrable = !1);
    }
    this.h.push(new Ot(a, c, b, d));
    d.deferrable || this.flush();
  };
  Pt.prototype.flush = function(a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      var f = this.h[0];
      if (f.messageContext.deferrable) !f.ca || Qt(this, f.ca).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift(); else {
        var g = void 0;
        switch (f.type) {
          case 'require':
            g = Qt(this, f.ca);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case 'set':
            m(f.h[0], function(r, u) {
              K(cb(r, u), b.D);
            });
            break;
          case 'config':
            g = Qt(this, f.ca);
            e.rb = {};
            m(f.h[0], function(r) {
              return function(u, t) {
                K(cb(u, t), r.rb);
              };
            }(e));
            var h = !!e.rb[T.g.Zc];
            delete e.rb[T.g.Zc];
            var l = so(f.ca), n = l.X === l.id;
            h || (n ? g.F = {} : g.N[f.ca] = {});
            g.D && h || Rt(this, T.g.Ea, e.rb, f);
            g.D = !0;
            n ? K(e.rb, g.F) : (K(e.rb, g.N[f.ca]), Q(70));
            d = !0;
            break;
          case 'event':
            g = Qt(this, f.ca);
            e.Gd = {};
            m(f.h[0], function(r) {
              return function(u, t) {
                K(cb(u, t), r.Gd);
              };
            }(e));
            Rt(this, f.h[1], e.Gd, f);
            break;
          case 'get':
            g = Qt(this, f.ca);
            var p = {}, q = (p[T.g.jb] = f.h[0], p[T.g.xb] = f.h[1], p);
            Rt(this, T.g.Ja, q, f);
        }
        this.h.shift();
        St(this, f);
      }
      e = { rb: e.rb, Gd: e.Gd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var St = function(a, b) {
    if ('require' !== b.type) if (b.ca) for (var c = Qt(a, b.ca).B[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
      var f = a.B[e];
      if (f && f.B) for (var g = f.B[b.type] || [], h = 0; h < g.length; h++) g[h]();
    }
  }, Tt = function(a, b) {
    var c = Kt, d = K(b);
    K(Qt(c, a).h, d);
    Qt(c, a).h = d;
  }, Kt = new Pt;
  var af;
  var Ut = {}, Vt = {}, Wt = function(a) {
    for (var b = [], c = [], d = {}, e = 0; e < a.length; d = { Ld: d.Ld, Id: d.Id }, e++) {
      var f = a[e];
      if (0 <= f.indexOf('-')) d.Ld = so(f), d.Ld && (Ka(gl(), function(p) {
        return function(q) {
          return p.Ld.X === q;
        };
      }(d)) ? b.push(f) : c.push(f)); else {
        var g = Ut[f] || [];
        d.Id = {};
        g.forEach(function(p) {
          return function(q) {
            return p.Id[q] = !0;
          };
        }(d));
        for (var h = fl(), l = 0; l < h.length; l++) if (d.Id[h[l]]) {
          b = b.concat(gl());
          break;
        }
        var n = Vt[f] || [];
        n.length && (b = b.concat(n));
      }
    }
    return { Hk: b, Kk: c };
  }, Xt = function(a) {
    m(Ut, function(b, c) {
      var d = c.indexOf(a);
      0 <= d && c.splice(d, 1);
    });
  }, Yt = function(a) {
    m(Vt, function(b, c) {
      var d = c.indexOf(a);
      0 <= d && c.splice(d, 1);
    });
  };
  var Zt = 'HA GF G UA AW DC MC'.split(' '), $t = !1, au = !1;

  function bu(a, b) {
    a.hasOwnProperty('gtm.uniqueEventId') || Object.defineProperty(a, 'gtm.uniqueEventId', { value: fi() });
    b.eventId = a['gtm.uniqueEventId'];
    b.priorityId = a['gtm.priorityId'];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }

  var cu = {
    config: function(a, b) {
      var c = bu(a, b);
      if (!(2 > a.length) && k(a[1])) {
        var d = {};
        if (2 < a.length) {
          if (void 0 != a[2] && !Fc(a[2]) || 3 < a.length) return;
          d = a[2];
        }
        var e = so(a[1]);
        if (e) {
          jn(c.eventId, 'gtag.config');
          var f = e.X, g = e.id !== f;
          if (g ? -1 === gl().indexOf(f) : -1 === fl().indexOf(f)) {
            if (!V(61) || !d[T.g.me]) {
              var h = d[T.g.va] || Kt.D[T.g.va];
              g ? Jr(f, h, { source: 2, fromContainerExecution: b.fromContainerExecution }) : Ir(f, h, !0, {
                source: 2,
                fromContainerExecution: b.fromContainerExecution,
              });
            }
          } else {
            if (Rh && !g && !d[T.g.Zc]) {
              var l = au;
              au = !0;
              if (l) return;
            }
            $t || Q(43);
            if (!b.noTargetGroup) if (g) {
              Yt(e.id);
              var n = e.id, p = d[T.g.je] || 'default';
              p = String(p).split(',');
              for (var q = 0; q < p.length; q++) {
                var r = Vt[p[q]] || [];
                Vt[p[q]] = r;
                0 > r.indexOf(n) && r.push(n);
              }
            } else {
              Xt(e.id);
              var u = e.id, t = d[T.g.je] || 'default';
              t = t.toString().split(',');
              for (var v = 0; v < t.length; v++) {
                var w = Ut[t[v]] || [];
                Ut[t[v]] = w;
                0 > w.indexOf(u) && w.push(u);
              }
            }
            delete d[T.g.je];
            var y = b.eventMetadata || {};
            y.hasOwnProperty('is_external_event') || (y.is_external_event = !b.fromContainerExecution);
            b.eventMetadata =
              y;
            delete d[T.g.cc];
            for (var x = g ? [e.id] : gl(), A = 0; A < x.length; A++) {
              var B = K(b);
              Kt.push('config', [d], x[A], B);
            }
          }
        }
      }
    }, consent: function(a, b) {
      if (3 === a.length) {
        Q(39);
        var c = bu(a, b), d = a[1];
        'default' === d ? Cj(a[2]) : 'update' === d && Dj(a[2], c);
      }
    }, event: function(a, b) {
      var c = a[1];
      if (!(2 > a.length) && k(c)) {
        var d;
        if (2 < a.length) {
          if (!Fc(a[2]) && void 0 != a[2] || 3 < a.length) return;
          d = a[2];
        }
        var e = d, f = {}, g = (f.event = c, f);
        e && (g.eventModel = K(e), e[T.g.cc] && (g.eventCallback = e[T.g.cc]), e[T.g.ee] && (g.eventTimeout = e[T.g.ee]));
        var h = bu(a, b), l = h.eventId,
          n = h.priorityId;
        g['gtm.uniqueEventId'] = l;
        n && (g['gtm.priorityId'] = n);
        if ('optimize.callback' === c) return g.eventModel = g.eventModel || {}, g;
        var p;
        var q = d, r = q && q[T.g.Ob];
        void 0 === r && (r = li(T.g.Ob, 2), void 0 === r && (r = 'default'));
        if (k(r) || Ia(r)) {
          var u = r.toString().replace(/\s+/g, '').split(','), t = Wt(u), v = t.Hk, w = t.Kk;
          if (w.length) for (var y = q && q[T.g.va] || Kt.D[T.g.va], x = 0; x < w.length; x++) {
            var A = so(w[x]);
            A && Jr(A.X, y, { source: 3, fromContainerExecution: b.fromContainerExecution });
          }
          p = uo(v);
        } else p = void 0;
        var B = p;
        if (B) {
          jn(l,
            c);
          for (var C = [], D = 0; D < B.length; D++) {
            var H = B[D], G = K(b);
            if (-1 !== Zt.indexOf(H.prefix)) {
              var N = K(d), R = G.eventMetadata || {};
              R.hasOwnProperty('is_external_event') || (R.is_external_event = !G.fromContainerExecution);
              G.eventMetadata = R;
              delete N[T.g.cc];
              Lt(c, N, H.id, G);
            }
            C.push(H.id);
          }
          g.eventModel = g.eventModel || {};
          0 < B.length ? g.eventModel[T.g.Ob] = C.join() : delete g.eventModel[T.g.Ob];
          $t || Q(43);
          return b.noGtmEvent ? void 0 : g;
        }
      }
    }, get: function(a, b) {
      Q(53);
      if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
        var c = so(a[1]), d = String(a[2]),
          e = a[3];
        if (c) {
          $t || Q(43);
          var f = Kt.D[T.g.va];
          if (!Ka(gl(), function(h) {
            return c.X === h;
          })) Jr(c.X, f, {
            source: 4,
            fromContainerExecution: b.fromContainerExecution,
          }); else if (-1 !== Zt.indexOf(c.prefix)) {
            bu(a, b);
            var g = {};
            yj(K((g[T.g.jb] = d, g[T.g.xb] = e, g)));
            Mt(d, function(h) {
              J(function() {
                return e(h);
              });
            }, c.id, b);
          }
        }
      }
    }, js: function(a, b) {
      if (2 == a.length && a[1].getTime) {
        $t = !0;
        var c = bu(a, b), d = c.eventId, e = c.priorityId, f = {};
        return f.event = 'gtm.js', f['gtm.start'] = a[1].getTime(), f['gtm.uniqueEventId'] = d, f['gtm.priorityId'] = e, f;
      }
    }, policy: function(a) {
      if (3 ===
        a.length && k(a[1]) && Ea(a[2])) {
        var b = a[1], c = a[2], d = af.B;
        d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
        if (Q(74), 'all' === a[1]) {
          Q(75);
          var e = !1;
          try {
            e = a[2](L.H, 'unknown', {});
          } catch (f) {
          }
          e || Q(76);
        }
      } else {
        Q(73);
      }
    }, set: function(a, b) {
      var c;
      2 == a.length && Fc(a[1]) ? c = K(a[1]) : 3 == a.length && k(a[1]) &&
        (c = {}, Fc(a[2]) || Ia(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
      if (c) {
        var d = bu(a, b), e = d.eventId, f = d.priorityId;
        K(c);
        var g = K(c);
        Kt.push('set', [g], void 0, b);
        c['gtm.uniqueEventId'] = e;
        f && (c['gtm.priorityId'] = f);
        V(30) && delete c.event;
        b.overwriteModelFields = !0;
        return c;
      }
    },
  }, du = { policy: !0 };
  var eu = function(a) {
    var b = z[Eh.ka].hide;
    if (b && void 0 !== b[a] && b.end) {
      b[a] = !1;
      var c = !0, d;
      for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
        c = !1;
        break;
      }
      c && (b.end(), b.end = null);
    }
  }, fu = function(a) {
    var b = z[Eh.ka], c = b && b.hide;
    c && c.end && (c[a] = !0);
  };
  var gu = !1, hu = [];

  function iu() {
    if (!gu) {
      gu = !0;
      for (var a = 0; a < hu.length; a++) J(hu[a]);
    }
  }

  var ju = function(a) {
    gu ? J(a) : hu.push(a);
  };
  var Au = function(a) {
    if (zu(a)) return a;
    this.Ra = a;
  };
  Au.prototype.getUntrustedMessageValue = function() {
    return this.Ra;
  };
  var zu = function(a) {
    return !a || 'object' !== Dc(a) || Fc(a) ? !1 : 'getUntrustedMessageValue' in a;
  };
  Au.prototype.getUntrustedMessageValue = Au.prototype.getUntrustedMessageValue;
  var Bu = 0, Cu = {}, Du = [], Eu = [], Fu = !1, Gu = !1;

  function Hu(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }

  var Iu = function(a) {
    return z[Eh.ka].push(a);
  }, Ju = function(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return Iu(a);
  }, Ku = function(a, b) {
    var c = Fh[Eh.ka], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0;
    b && (g = z.setTimeout(function() {
      f || (f = !0, a());
      g = void 0;
    }, b));
    return function() {
      ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0));
    };
  };

  function Lu(a, b) {
    var c = a._clear || b.overwriteModelFields;
    m(a, function(e, f) {
      '_clear' !== e && (c && oi(e), oi(e, f));
    });
    ai || (ai = a['gtm.start']);
    var d = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    'number' !== typeof d && (d = fi(), a['gtm.uniqueEventId'] = d, oi('gtm.uniqueEventId', d));
    return Jt(a);
  }

  function Mu(a) {
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (Oa(a)) {
      var b = a[0];
      if ('config' === b || 'event' === b || 'js' === b || 'get' === b) return !0;
    }
    return !1;
  }

  function Nu() {
    var a;
    if (Eu.length) a = Eu.shift(); else if (Du.length) a = Du.shift(); else return;
    var b;
    var c = a;
    if (Fu || !Mu(c.message)) b = c; else {
      Fu = !0;
      var d = c.message['gtm.uniqueEventId'];
      'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = fi());
      var e = {}, f = {
          message: (e.event = 'gtm.init_consent', e['gtm.uniqueEventId'] = d - 2, e),
          messageContext: { eventId: d - 2 },
        }, g = {},
        h = { message: (g.event = 'gtm.init', g['gtm.uniqueEventId'] = d - 1, g), messageContext: { eventId: d - 1 } };
      Du.unshift(h, c);
      if (ym && L.H) {
        var l;
        if (L.Df) {
          var n = L.H, p = il().destination[n];
          l = p && p.context;
        } else {
          var q = L.H, r = il().container[q];
          l = r && r.context;
        }
        var u = l, t, v = Ff(z.location.href);
        t = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution, y = u && u.source, x = L.H, A = L.fb, B = L.Df;
        Km || (Km = t);
        Jm.push(x + ';' + A + ';' + (w ? 1 : 0) + ';' + (y || 0) + ';' + (B ? 1 : 0));
      }
      b = f;
    }
    return b;
  }

  function Ou() {
    for (var a = !1, b; !Gu && (b = Nu());) {
      Gu = !0;
      delete ii.eventModel;
      ki();
      var c = b, d = c.message, e = c.messageContext;
      if (null == d) Gu = !1; else {
        e.fromContainerExecution && pi();
        try {
          if (Ea(d)) try {
            d.call(mi);
          } catch (y) {
          } else if (Ia(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split('.'), h = g.pop(), l = f.slice(1), n = li(g.join('.'), 2);
              if (null != n) try {
                n[h].apply(n, l);
              } catch (y) {
              }
            }
          } else {
            var p = void 0, q = !1;
            if (Oa(d)) {
              a:{
                if (d.length &&
                  k(d[0])) {
                  var r = cu[d[0]];
                  if (r && (!e.fromContainerExecution || !du[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && 'set' === d[0] && !!p.event) && Q(101);
            } else p = d;
            if (p) {
              var u = Lu(p, e);
              a = u || a;
              q && u && Q(113);
            }
          }
        } finally {
          e.fromContainerExecution && ki(!0);
          var t = d['gtm.uniqueEventId'];
          if ('number' === typeof t) {
            for (var v = Cu[String(t)] || [], w = 0; w < v.length; w++) Eu.push(Pu(v[w]));
            v.length && Eu.sort(Hu);
            delete Cu[String(t)];
            t > Bu && (Bu = t);
          }
          Gu = !1;
        }
      }
    }
    return !a;
  }

  function Qu() {
    if (V(70)) {
      var b = $q(zq.I.Te, L.H);
      ar(b);
      if (Ru()) {
        var c = $q(zq.I.Eg, L.H);
        if (ar(c)) {
          var d = $q(zq.I.Ve, L.H);
          br(c, d);
        }
      }
    }
    var e = Ou();
    try {
      eu(L.H);
    } catch (f) {
    }
    return e;
  }

  function Ls(a) {
    if (Bu < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Cu[b] = Cu[b] || [];
      Cu[b].push(a);
    } else Eu.push(Pu(a)), Eu.sort(Hu), J(function() {
      Gu || Ou();
    });
  }

  function Pu(a) {
    return { message: a.message, messageContext: a.messageContext };
  }

  var Su = function() {
    function a(g) {
      var h = {};
      if (zu(g)) {
        var l = g;
        g = zu(l) ? l.getUntrustedMessageValue() : void 0;
        h.fromContainerExecution = !0;
      }
      return { message: g, messageContext: h };
    }

    var b = Yb(Eh.ka, []), c = Fh[Eh.ka] = Fh[Eh.ka] || {};
    !0 === c.pruned && Q(83);
    Cu = Js().get();
    Ms();
    cs(function() {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var g = {};
        b.push((g.event = 'gtm.dom', g));
      }
    });
    ju(function() {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var g = {};
        b.push((g.event = 'gtm.load', g));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function() {
      var g;
      if (0 < Fh.SANDBOXED_JS_SEMAPHORE) {
        g =
          [];
        for (var h = 0; h < arguments.length; h++) g[h] = new Au(arguments[h]);
      } else g = [].slice.call(arguments, 0);
      var l = g.map(function(r) {
        return a(r);
      });
      Du.push.apply(Du, l);
      var n = d.apply(b, g), p = Math.max(100, Number('1000') || 300);
      if (this.length > p) for (Q(4), c.pruned = !0; this.length > p;) this.shift();
      var q = 'boolean' !== typeof n || n;
      return Ou() && q;
    };
    var e = b.slice(0).map(function(g) {
      return a(g);
    });
    Du.push.apply(Du, e);
    if (Ru()) {
      if (V(70)) {
        var f = $q(zq.I.Ve, L.H);
        ar(f);
      }
      J(Qu);
    }
  }, Ru = function() {
    var a = !0;
    return a;
  };

  function Tu(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a), c = Ua();
    return b < c + 3E5 && b > c - 9E5;
  }

  function Uu(a) {
    return a && 0 === a.indexOf('pending:') ? Tu(a.substr(8)) : !1;
  }var Ee = {};
  Ee.se = String('undefined');
  var Vu = function(a) {
    this.h = function(b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Ee.se ? b : a[d]);
      return c.join('');
    };
  };
  Vu.prototype.toString = function() {
    return this.h('undefined');
  };
  Vu.prototype.valueOf = Vu.prototype.toString;
  Ee.Jj = Vu;
  Ee.Ef = {};
  Ee.Vj = function(a) {
    return new Vu(a);
  };
  var Wu = {};
  Ee.Vk = function(a, b) {
    var c = fi();
    Wu[c] = [a, b];
    return c;
  };
  Ee.ai = function(a) {
    var b = a ? 0 : 1;
    return function(c) {
      var d = Wu[c];
      if (d && 'function' === typeof d[b]) d[b]();
      Wu[c] = void 0;
    };
  };
  Ee.xk = function(a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
      b || 8 === a[d], c = c || 16 === a[d];
    return b && c;
  };
  Ee.Qk = function(a) {
    if (a === Ee.se) return a;
    var b = fi();
    Ee.Ef[b] = a;
    return 'google_tag_manager["' + L.H + '"].macro(' + b + ')';
  };
  Ee.Jk = function(a, b, c) {
    a instanceof Ee.Jj && (a = a.h(Ee.Vk(b, c)), b = Da);
    return { tk: a, aa: b };
  };
  var Xu = function(a, b, c) {
    var d = {
      event: b,
      'gtm.element': a,
      'gtm.elementClasses': nc(a, 'className'),
      'gtm.elementId': a['for'] || ic(a, 'id') || '',
      'gtm.elementTarget': a.formTarget || nc(a, 'target') || '',
    };
    c && (d['gtm.triggers'] = c.join(','));
    d['gtm.elementUrl'] = (a.attributes && a.attributes.formaction ? a.formAction : '') || a.action || nc(a, 'href') || a.src || a.code || a.codebase || '';
    return d;
  }, Yu = function(a) {
    Fh.hasOwnProperty('autoEventsSettings') || (Fh.autoEventsSettings = {});
    var b = Fh.autoEventsSettings;
    b.hasOwnProperty(a) || (b[a] =
      {});
    return b[a];
  }, Zu = function(a, b, c) {
    Yu(a)[b] = c;
  }, $u = function(a, b, c, d) {
    var e = Yu(a), f = Va(e, b, d);
    e[b] = c(f);
  }, av = function(a, b, c) {
    var d = Yu(a);
    return Va(d, b, c);
  }, bv = function(a) {
    return 'string' === typeof a ? a : String(fi());
  };
  var vv = z.clearTimeout, wv = z.setTimeout, W = function(a, b, c, d) {
      if (dl()) {
        b && J(b);
      } else return cc(a, b, c, d);
    }, xv = function() {
      return new Date;
    }, yv = function() {
      return z.location.href;
    }, zv = function(a) {
      return Df(Ff(a), 'fragment');
    }, Av = function(a) {
      return Ef(Ff(a));
    }, Bv = function(a, b) {
      return li(a, b || 2);
    }, Cv = function(a, b, c) {
      return b ? Ju(a, b, c) : Iu(a);
    }, Dv = function(a, b) {
      z[a] = b;
    }, X = function(a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    Ev = function(a, b, c) {
      return Qj(a, b, void 0 === c ? !0 : !!c);
    }, Fv = function(a, b, c) {
      return 0 === Zj(a, b, c);
    }, Gv = function(a, b) {
      if (dl()) {
        b && J(b);
      } else ec(a, b);
    }, Hv = function(a) {
      return !!av(a, 'init', !1);
    }, Iv = function(a) {
      Zu(a, 'init', !0);
    }, Jv = function(a, b, c) {
      ym && (Jc(a) || tn(c, b, a));
    };

  var Kv = Ee.Jk;

  function gw(a) {
    return hw(a) ? 1 : 0;
  }

  function hw(a) {
    var b = a.arg0, c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = K(a, {});
        K({ arg1: c[d], any_of: void 0 }, e);
        if (gw(e)) return !0;
      }
      return !1;
    }
    switch (a['function']) {
      case '_cn':
        return Mf(b, c);
      case '_css':
        var f;
        a:{
          if (b) try {
            for (var g = 0; g < If.length; g++) {
              var h = If[g];
              if (b[h]) {
                f = b[h](c);
                break a;
              }
            }
          } catch (l) {
          }
          f = !1;
        }
        return f;
      case '_ew':
        return Jf(b, c);
      case '_eq':
        return Nf(b, c);
      case '_ge':
        return Of(b, c);
      case '_gt':
        return Sf(b, c);
      case '_lc':
        return 0 <= String(b).split(',').indexOf(String(c));
      case '_le':
        return Pf(b, c);
      case '_lt':
        return Tf(b, c);
      case '_re':
        return Lf(b, c, a.ignore_case);
      case '_sw':
        return Uf(b, c);
      case '_um':
        return Vf(b, c);
    }
    return !1;
  }

  function iw(a, b) {
    var c = this;
  }

  iw.R = 'addConsentListener';
  var jw;
  var kw = function(a) {
    for (var b = 0; b < a.length; ++b) if (jw) try {
      a[b]();
    } catch (c) {
      Q(77);
    } else a[b]();
  };

  function lw(a, b, c) {
    var d = this, e;
    return e;
  }

  lw.P = 'internal.addDataLayerEventListener';

  function mw(a, b, c) {
  }

  mw.R = 'addDocumentEventListener';

  function nw(a, b, c, d) {
  }

  nw.R = 'addElementEventListener';

  function ow(a) {
  }

  ow.R = 'addEventCallback';

  function sw(a) {
  }

  sw.P = 'internal.addFormAbandonmentListener';
  var tw = {}, uw = [], vw = {}, ww = 0, xw = 0;

  function Ew(a, b) {
  }

  Ew.P = 'internal.addFormInteractionListener';

  function Lw(a, b) {
  }

  Lw.P = 'internal.addFormSubmitListener';

  function Qw(a) {
  }

  Qw.P = 'internal.addGaSendListener';
  var Rw = {}, Sw = [];
  var Zw = function(a, b) {
  };
  Zw.P = 'internal.addHistoryChangeListener';

  function $w(a, b, c) {
  }

  $w.R = 'addWindowEventListener';

  function ax(a, b) {
    return !0;
  }

  ax.R = 'aliasInWindow';

  function bx(a, b, c) {
  }

  bx.P = 'internal.appendRemoteConfigParameter';

  function cx() {
    var a = 2;
    return a;
  }

  function dx(a, b) {
    var c;
    M(F(this), ['path:!string'], [a]);
    P(this, 'access_globals', 'execute', a);
    for (var d = a.split('.'), e = z, f = e[d[0]], g = 1; f && g < d.length; g++) if (e = f, f = f[d[g]], e === z || e === I) return;
    if ('function' !== Dc(f)) return;
    for (var h = cx(), l = [], n = 1; n < arguments.length; n++) l.push(Hc(arguments[n], this.h, h));
    var p = (0, this.h.N)(f, e, l);
    c = Gc(p, this.h, h);
    void 0 === c && void 0 !== p && Q(45);
    return c;
  }

  dx.R = 'callInWindow';

  function ex(a) {
  }

  ex.R = 'callLater';

  function fx(a) {
  }

  fx.P = 'callOnDomReady';

  function gx(a) {
  }

  gx.P = 'callOnWindowLoad';

  function hx(a) {
    var b;
    return b;
  }

  hx.P = 'internal.computeGtmParameter';

  function ix(a, b) {
    var c;
    var d = Gc(c, this.h, cx());
    void 0 === d && void 0 !== c && Q(45);
    return d;
  }

  ix.R = 'copyFromDataLayer';

  function jx(a) {
    var b;
    M(F(this), ['path:!string'], arguments);
    P(this, 'access_globals', 'read', a);
    var c = a.split('.'), d = bb(c, [z, I]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = Gc(e, this.h, cx());
    void 0 === b && void 0 !== e && Q(45);
    return b;
  }

  jx.R = 'copyFromWindow';

  function kx(a, b) {
    var c;
    return c;
  }

  kx.P = 'internal.copyPreHit';

  function lx(a, b) {
    var c = null, d = cx();
    return Gc(c, this.h, d);
  }

  lx.R = 'createArgumentsQueue';

  function mx(a) {
    var b;
    return Gc(b, this.h,
      cx());
  }

  mx.R = 'createQueue';
  var nx = {}, ox = [], px = {}, qx = 0, rx = 0;

  function xx(a, b) {
    var c = this;
    return b;
  }

  xx.P = 'internal.enableAutoEventOnFormInteraction';

  function Cx(a, b) {
    var c = this;
    return b;
  }

  Cx.P = 'internal.enableAutoEventOnFormSubmit';

  function Hx() {
    var a = this;
  }

  Hx.P = 'internal.enableAutoEventOnGaSend';
  var Ix = {}, Jx = [];

  function Qx(a, b) {
    var c = this;
    return b;
  }

  Qx.P = 'internal.enableAutoEventOnHistoryChange';

  function Ux(a, b) {
    var c = this;
    return b;
  }

  Ux.P = 'internal.enableAutoEventOnLinkClick';
  var Vx, Wx;

  function ey(a, b) {
    var c = this;
    return b;
  }

  ey.P = 'internal.enableAutoEventOnScroll';
  var Sb = fa(['data-gtm-yt-inspected-']), fy = ['www.youtube.com', 'www.youtube-nocookie.com'], gy, hy = !1;

  function ry(a, b) {
    var c = this;
    return b;
  }

  ry.P = 'internal.enableAutoEventOnYouTubeActivity';
  var sy;

  function ty(a) {
    var b = !1;
    return b;
  }

  ty.P = 'internal.evaluateMatchingRules';

  function Dy(a, b) {
    var c = !1;
    return c;
  }

  Dy.P = 'internal.evaluatePredicates';
  var Ey = function(a) {
    var b;
    return b;
  };

  function Fy(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }

  Fy.R = 'getCookieValues';

  function Gy() {
    return cj.Mf;
  }

  Gy.P = 'internal.getCountryCode';

  function Hy() {
    var a = [];
    return Gc(a);
  }

  Hy.P = 'internal.getDestinationIds';

  function Iy(a) {
    var b = null;
    return b;
  }

  Iy.R = 'getElementById';
  var Jy = {};
  Jy.enableAdsHistoryChangeEvents = V(36);
  Jy.enableAlwaysSendFormStart = V(38);
  Jy.enableCcdEmForm = V(82);
  Jy.enableCcdEnhancedMeasurement = V(41);
  Jy.enableCcdEventBlocking = V(40);
  Jy.enableCcdEventEditingAndCreation = V(26);
  Jy.enableCcdGaConversions = V(39);
  Jy.enableCcdPreAutoPiiDetection = V(49);
  Jy.enableCcdUserData = V(16);
  Jy.enableEesPagePath = V(43);
  Jy.enableEuidAutoMode = V(37);
  Jy.enableGa4OnoRemarketing = V(34);
  Jy.enableGaGamWindowSet = V(67);
  Jy.includeQueryInEesPagePath = V(57);
  Jy.autoPiiEligible = !0;

  function Ky() {
    return Gc(Jy);
  }

  Ky.P = 'internal.getFlags';

  function Ly(a, b) {
    var c;
    return c;
  }

  Ly.P = 'internal.getProductSettingsParameter';

  function My(a, b) {
    var c;
    return c;
  }

  My.R = 'getQueryParameters';

  function Ny(a, b) {
    var c;
    return c;
  }

  Ny.R = 'getReferrerQueryParameters';

  function Oy(a) {
    var b = '';
    return b;
  }

  Oy.R = 'getReferrerUrl';

  function Py() {
    return cj.si;
  }

  Py.P = 'internal.getRegionCode';

  function Qy(a, b) {
    var c;
    return c;
  }

  Qy.P = 'internal.getRemoteConfigParameter';

  function Ry(a) {
    var b = '';
    return b;
  }

  Ry.R = 'getUrl';

  function Sy() {
    P(this, 'get_user_agent');
    return Wb.userAgent;
  }

  Sy.R = 'getUserAgent';

  function Ty(a) {
    if (!a) return {};
    var b = a.dk;
    return es(b.type, b.index, b.name);
  }

  function Uy(a) {
    return a ? { originatingEntity: Ty(a) } : {};
  }

  function Wy(a, b) {
  }

  Wy.R = 'gtagSet';

  function Xy(a, b) {
  }

  Xy.R = 'injectHiddenIframe';
  var Yy = {};
  var Zy = function(a, b, c, d, e, f) {
    f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [[c], [d]], cc(a, function() {
      for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
      g.push = function(l) {
        J(l);
        return 0;
      };
    }, function() {
      for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
      e[f] = null;
    }, b)) : cc(a, c, d, b);
  };

  function $y(a, b, c, d) {
    if (!dl()) {
      M(F(this), ['url:!string', 'onSuccess:?Fn', 'onFailure:?Fn', 'cacheToken:?string'], arguments);
      P(this, 'inject_script', a);
      var e = this.h;
      Zy(a, void 0, function() {
        b && b.B(e);
      }, function() {
        c && c.B(e);
      }, Yy, d);
    }
  }

  var az = Object.freeze({ dl: 1, id: 1 }), bz = {};

  function cz(a, b, c, d) {
  }

  $y.R = 'injectScript';
  cz.P = 'internal.injectScript';

  function dz(a) {
    var b = !0;
    return b;
  }

  dz.R = 'isConsentGranted';
  var ez = function() {
    var a = Cg(function(b) {
      this.h.h.log('error', b);
    });
    a.R = 'JSON';
    return a;
  };
  var fz = function() {
    return !1;
  }, gz = {
    getItem: function(a) {
      var b = null;
      return b;
    }, setItem: function(a,
      b) {
      return !1;
    }, removeItem: function(a) {
    },
  };
  var hz = ['textContent', 'value', 'tagName', 'children', 'childElementCount'];

  function iz(a) {
    var b;
    return b;
  }

  iz.P = 'internal.locateUserData';

  function kz() {
  }

  kz.R = 'logToConsole';

  function lz(a) {
    var b = void 0;
    return b;
  }

  lz.R = 'parseUrl';

  function mz(a) {
  }

  mz.P = 'internal.processAsNewEvent';

  function nz(a, b) {
    var c = !1;
    return c;
  }

  nz.R = 'queryPermission';

  function oz() {
    var a = '';
    return a;
  }

  oz.R = 'readCharacterSet';

  function pz() {
    var a = '';
    return a;
  }

  pz.R = 'readTitle';

  function qz(a, b) {
    var c = this;
  }

  qz.P = 'internal.registerCcdCallback';
  var rz = Object.freeze(['config', 'event', 'get', 'set']);

  function sz(a, b, c) {
  }

  sz.P = 'internal.registerGtagCommandListener';

  function tz(a, b) {
    var c = !1;
    return c;
  }

  tz.P = 'internal.removeDataLayerEventListener';

  function uz() {
  }

  uz.R = 'resetDataLayer';

  function Jz() {
    return z.gaGlobal = z.gaGlobal || {};
  }

  var Kz = function() {
    var a = Jz();
    a.hid = a.hid || La();
    return a.hid;
  }, Lz = function(a, b) {
    var c = Jz();
    if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
  };
  var gA = function() {
    var a = !0;
    pm(7) && pm(9) && pm(10) || (a = !1);
    return a;
  }, hA = function() {
    var a = !0;
    pm(3) && pm(4) || (a = !1);
    return a;
  };
  var KA = window, LA = document, MA = function(a) {
    var b = KA._gaUserPrefs;
    if (b && b.ioo && b.ioo() || a && !0 === KA['ga-disable-' + a]) return !0;
    try {
      var c = KA.external;
      if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
    } catch (f) {
    }
    for (var d = Kj('AMP_TOKEN', String(LA.cookie), !0), e = 0; e < d.length; e++) if ('$OPT_OUT' == d[e]) return !0;
    return LA.getElementById('__gaOptOutExtension') ? !0 : !1;
  };

  function UA(a) {
    m(a, function(c) {
      '_' === c.charAt(0) && delete a[c];
    });
    var b = a[T.g.Na] || {};
    m(b, function(c) {
      '_' === c.charAt(0) && delete b[c];
    });
  }var dB = function(a, b) {
  };

  function cB(a, b) {
    var c = function() {
    };
    return c;
  }

  function eB(a, b, c) {
  }
  var fB = function(a, b) {
    var c;
    c = b ? [pq, qq, sq, cq, gq, uq, hq, tq, nq, dq, xq, iq, rq, aq, vq, Yp] : [bq, Tp, eq, Up, Vp, Wp, Xp, jq, kq, mq, oq, fq, lq, $p, wq];
    for (var d = 0; d < c.length && (c[d](a), !a.M); d++) ;
  }, gB = function(a, b, c, d) {
    var e = new Ho(b, c, d);
    e.metadata.hit_type = a;
    e.metadata.speculative = !0;
    e.metadata.event_start_timestamp_ms = Ua();
    e.metadata.speculative_in_message = d.eventMetadata.speculative;
    return e;
  }, hB = function(a) {
    var b = a.indexOf('/'), c = 3 <= b, d = a.substring(3, c ? b : a.length);
    return {
      id: a, prefix: 'AW', X: 'AW-' + d, O: [d, c ? a.substring(b +
        1) : void 0],
    };
  }, iB = function(a, b, c, d) {
    function e() {
      for (var q = 0; q < g.length; q++) {
        var r = g[q];
        r.M || (fB(g[q], !0), r.metadata.speculative || r.M || yr(r));
      }
    }

    var f = so(a);
    !f && d.J && (f = hB(a));
    if (f) {
      var g = [];
      if (d.eventMetadata.hit_type_override) {
        var h = d.eventMetadata.hit_type_override;
        Array.isArray(h) || (h = [h]);
        for (var l = 0; l < h.length; l++) {
          var n = gB(h[l], f, b, d);
          n.metadata.speculative = !1;
          g.push(n);
        }
      } else b === T.g.Ea && g.push(gB('landing_page', f, b, d)), g.push(gB('conversion', f, b, d)), g.push(gB('user_data_lead', f, b, d)), g.push(gB('user_data_web',
        f, b, d)), g.push(gB('remarketing', f, b, d));
      for (var p = 0; p < g.length; p++) fB(g[p], !1);
      wj(function() {
        for (var q = [], r = [], u = 0; u < g.length; u++) {
          var t = g[u];
          q.push(t.M);
          r.push(t.metadata.speculative);
        }
        e();
        pj(T.g.K) || xj(function(v) {
          for (var w = v.consentEventId, y = v.consentPriorityId, x = 0; x < g.length; x++) {
            var A = g[x];
            A.metadata.consent_updated = !0;
            A.metadata.speculative = r[x];
            A.metadata.event_start_timestamp_ms = Ua();
            A.M = q[x];
            A.metadata.consent_event_id = w;
            A.metadata.consent_priority_id = y;
          }
          e();
        }, [T.g.K]);
      }, [T.g.K]);
    }
  };
  var kB = function() {
    var a = Fh.floc;
    if (a) {
      var b = a.ts, c = a.floc;
      if (b && c && 1E3 > Ua() - b) return Promise.resolve(c);
    }
    try {
      return Promise.race([I.interestCohort().then(function(d) {
        Fh.floc = { ts: Ua(), floc: d };
        return d;
      }), new Promise(function(d) {
        z.setTimeout(function() {
          return d();
        }, jB);
      })]).catch(function() {
      });
    } catch (d) {
    }
  }, jB = Number('200'), lB = !1;
  var NB = function(a, b) {
    if (!b.J) {
      var c = U(b, T.g.jb), d = U(b, T.g.xb), e = U(b, c);
      if (void 0 === e) {
        var f = void 0;
        KB.hasOwnProperty(c) ? f = KB[c] : LB.hasOwnProperty(c) && (f = LB[c]);
        1 === f && (f = MB(c));
        k(f) ? ns()(function() {
          var g = ns().getByName(a).get(f);
          d(g);
        }) : d(void 0);
      } else d(e);
    }
  }, OB = function(a, b) {
    var c = a[T.g.jc], d = b + '.', e = a[T.g.V] || '', f = void 0 === c ? !!a.use_anchor : 'fragment' === c,
      g = !!a[T.g.Lb];
    e = String(e).replace(/\s+/g, '').split(',');
    var h = ns();
    h(d + 'require', 'linker');
    h(d + 'linker:autoLink', e, f, g);
  }, SB = function(a, b, c) {
    if (sj() &&
      (!c.J || !PB[a])) {
      var d = !Ej(T.g.W), e = function(f) {
        var g, h, l = ns(), n = QB(b, '', c), p, q = n.createOnlyFields._useUp;
        if (c.J || RB(b, n.createOnlyFields)) {
          c.J && (g = 'gtm' + fi(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
          l(function() {
            var u = l.getByName(b);
            u && (p = u.get('clientId'));
            c.J || l.remove(b);
          });
          l('create', a, c.J ? h : n.createOnlyFields);
          d &&
          Ej(T.g.W) && (d = !1, l(function() {
            var u = ns().getByName(c.J ? g : b);
            !u || u.get('clientId') == p && q || (c.J ? (n.fieldsToSet['&gcu'] = '1', n.fieldsToSet['&gcut'] = Bh[f]) : (n.fieldsToSend['&gcu'] = '1', n.fieldsToSend['&gcut'] = Bh[f]), u.set(n.fieldsToSet), c.J ? u.send('pageview') : u.send('pageview', n.fieldsToSend));
          }));
          c.J && l(function() {
            l.remove(g);
          });
        }
      };
      Hj(function() {
        return e(T.g.W);
      }, T.g.W);
      Hj(function() {
        return e(T.g.K);
      }, T.g.K);
      c.J && (PB[a] = !0);
    }
  }, TB = function(a, b) {
    Gr() && b && (a[T.g.Kb] = b);
  }, bC = function(a, b, c) {
    function d() {
      var G = U(c,
        T.g.Qc);
      h(function() {
        if (!c.J && Fc(G)) {
          var N = t.fieldsToSend, R = l().getByName(n), aa;
          for (aa in G) if (G.hasOwnProperty(aa) && /^(dimension|metric)\d+$/.test(aa) && void 0 != G[aa]) {
            var oa = R.get(MB(G[aa]));
            UB(N, aa, oa);
          }
        }
      });
    }

    function e() {
      if (t.displayfeatures) {
        var G = '_dc_gtm_' + f.replace(/[^A-Za-z0-9-]/g, '');
        p('require', 'displayfeatures', void 0, { cookieName: G });
      }
    }

    var f = a, g = 'https://www.google-analytics.com/analytics.js', h = c.J ? ps(U(c, 'gaFunctionName')) : ps();
    if (Ea(h)) {
      var l = ns, n;
      c.J ? n = U(c, 'name') || U(c, 'gtmTrackerName') :
        n = 'gtag_' + f.split('-').join('_');
      var p = function(G) {
        var N = [].slice.call(arguments, 0);
        N[0] = n ? n + '.' + N[0] : '' + N[0];
        h.apply(window, N);
      }, q = function(G) {
        var N = function(la, ca) {
          for (var ba = 0; ca && ba < ca.length; ba++) p(la, ca[ba]);
        }, R = c.J, aa = R ? VB(t) : WB(b, c);
        if (aa) {
          var oa = {};
          TB(oa, G);
          p('require', 'ec', 'ec.js', oa);
          R && aa.Nf && p('set', '&cu', aa.Nf);
          var O = aa.action;
          if (R || 'impressions' === O) if (N('ec:addImpression', aa.hi), !R) return;
          if ('promo_click' === O || 'promo_view' === O || R && aa.Ad) {
            var S = aa.Ad;
            N('ec:addPromo', S);
            if (S && 0 < S.length &&
              'promo_click' === O) {
              R ? p('ec:setAction', O, aa.Xa) : p('ec:setAction', O);
              return;
            }
            if (!R) return;
          }
          'promo_view' !== O && 'impressions' !== O && (N('ec:addProduct', aa.Sb), p('ec:setAction', O, aa.Xa));
        }
      }, r = function(G) {
        if (G) {
          var N = {};
          if (Fc(G)) for (var R in XB) XB.hasOwnProperty(R) && YB(XB[R], R, G[R], N);
          TB(N, y);
          p('require', 'linkid', N);
        }
      }, u = function() {
        if (dl()) {
        } else {
          var G = U(c, T.g.mj);
          G && (p('require', G, { dataLayer: Eh.ka }), p('require', 'render'));
        }
      }, t = QB(n,
        b, c), v = function(G, N, R) {
        R && (N = '' + N);
        t.fieldsToSend[G] = N;
      };
      !c.J && RB(n, t.createOnlyFields) && (h(function() {
        l() && l().remove(n);
      }), ZB[n] = !1);
      h('create', f, t.createOnlyFields);
      if (t.createOnlyFields[T.g.Kb] && !c.J) {
        var w = Uh || Wh ? Fr(t.createOnlyFields[T.g.Kb], '/analytics.js') : void 0;
        w && (g = w);
      }
      var y = c.J ? t.fieldsToSet[T.g.Kb] : t.createOnlyFields[T.g.Kb];
      if (y) {
        var x = c.J ? t.fieldsToSet[T.g.he] : t.createOnlyFields[T.g.he];
        x && !ZB[n] && (ZB[n] = !0, h(ts(n, x)));
      }
      c.J ? t.enableRecaptcha && p('require', 'recaptcha', 'recaptcha.js') : (d(),
        r(t.linkAttribution));
      var A = t[T.g.za];
      A && A[T.g.V] && OB(A, n);
      p('set', t.fieldsToSet);
      if (c.J) {
        if (t.enableLinkId) {
          var B = {};
          TB(B, y);
          p('require', 'linkid', 'linkid.js', B);
        }
        sj() && SB(f, n, c);
      }
      if (b === T.g.Kc) if (c.J) {
        e();
        if (t.remarketingLists) {
          var C = '_dc_gtm_' + f.replace(/[^A-Za-z0-9-]/g, '');
          p('require', 'adfeatures', { cookieName: C });
        }
        q(y);
        p('send', 'pageview');
        t.createOnlyFields._useUp && qs(n + '.');
      } else u(), p('send', 'pageview', t.fieldsToSend); else b === T.g.Ea ? (u(), Go(f, c), U(c, T.g.zb) && (ho(['aw', 'dc']), qs(n + '.')), 0 != t.sendPageView &&
      p('send', 'pageview', t.fieldsToSend), SB(f, n, c)) : b === T.g.Ja ? NB(n, c) : 'screen_view' === b ? p('send', 'screenview', t.fieldsToSend) : 'timing_complete' === b ? (t.fieldsToSend.hitType = 'timing', v('timingCategory', t.eventCategory, !0), c.J ? v('timingVar', t.timingVar, !0) : v('timingVar', t.name, !0), v('timingValue', Pa(t.value)), void 0 !== t.eventLabel && v('timingLabel', t.eventLabel, !0), p('send', t.fieldsToSend)) : 'exception' === b ? p('send', 'exception', t.fieldsToSend) : '' === b && c.J || ('track_social' === b && c.J ? (t.fieldsToSend.hitType =
        'social', v('socialNetwork', t.socialNetwork, !0), v('socialAction', t.socialAction, !0), v('socialTarget', t.socialTarget, !0)) : ((c.J || $B[b]) && q(y), c.J && e(), t.fieldsToSend.hitType = 'event', v('eventCategory', t.eventCategory, !0), v('eventAction', t.eventAction || b, !0), void 0 !== t.eventLabel && v('eventLabel', t.eventLabel, !0), void 0 !== t.value && v('eventValue', Pa(t.value))), p('send', t.fieldsToSend));
      if (!aC && !c.J) {
        aC = !0;
        var D = function() {
          c.Z();
        }, H = function() {
          l().loaded || D();
        };
        dl() ? J(H) : cc(g, H, D);
      }
    } else J(c.Z);
  }, cC = function(a,
    b, c, d) {
    Ij(function() {
      bC(a, b, d);
    }, [T.g.W, T.g.K]);
  }, eC = function(a) {
    function b(e) {
      function f(h, l) {
        for (var n = 0; n < l.length; n++) {
          var p = l[n];
          if (e[p]) {
            g[h] = e[p];
            break;
          }
        }
      }

      var g = K(e);
      f('id', ['id', 'item_id', 'promotion_id']);
      f('name', ['name', 'item_name', 'promotion_name']);
      f('brand', ['brand', 'item_brand']);
      f('variant', ['variant', 'item_variant']);
      f('list', ['list_name', 'item_list_name']);
      f('position', ['list_position', 'creative_slot', 'index']);
      (function() {
        if (e.category) g.category = e.category; else {
          for (var h = '', l = 0; l <
          dC.length; l++) void 0 !== e[dC[l]] && (h && (h += '/'), h += e[dC[l]]);
          h && (g.category = h);
        }
      })();
      f('listPosition', ['list_position']);
      f('creative', ['creative_name']);
      f('list', ['list_name']);
      f('position', ['list_position', 'creative_slot']);
      return g;
    }

    for (var c = [], d = 0; a && d < a.length; d++) a[d] && Fc(a[d]) && c.push(b(a[d]));
    return c.length ? c : void 0;
  }, fC = function(a) {
    return Ej(a);
  }, gC = !1;
  var aC, ZB = {}, PB = {}, hC = {}, KB = Object.freeze((hC.client_storage =
      'storage', hC.sample_rate = 1, hC.site_speed_sample_rate = 1, hC.store_gac = 1, hC.use_amp_client_id = 1, hC[T.g.ub] = 1, hC[T.g.ya] = 'storeGac', hC[T.g.vb] = 1, hC[T.g.Sa] = 1, hC[T.g.wb] = 1, hC[T.g.Oc] = 1, hC[T.g.af] = 1, hC[T.g.bc] = 1, hC)),
    iC = {},
    jC = Object.freeze((iC._cs = 1, iC._useUp = 1, iC.allowAnchor = 1, iC.allowLinker = 1, iC.alwaysSendReferrer = 1, iC.clientId = 1, iC.cookieDomain = 1, iC.cookieExpires = 1, iC.cookieFlags = 1, iC.cookieName = 1, iC.cookiePath = 1, iC.cookieUpdate = 1, iC.legacyCookieDomain = 1, iC.legacyHistoryImport = 1, iC.name = 1, iC.sampleRate =
      1, iC.siteSpeedSampleRate = 1, iC.storage = 1, iC.storeGac = 1, iC.useAmpClientId = 1, iC._cd2l = 1, iC)),
    kC = Object.freeze({ anonymize_ip: 1 }), lC = {}, LB = Object.freeze((lC.campaign = {
      content: 'campaignContent',
      id: 'campaignId',
      medium: 'campaignMedium',
      name: 'campaignName',
      source: 'campaignSource',
      term: 'campaignKeyword',
    }, lC.app_id = 1, lC.app_installer_id = 1, lC.app_name = 1, lC.app_version = 1, lC.description = 'exDescription', lC.fatal = 'exFatal', lC.language = 1, lC.page_hostname = 'hostname', lC.transport_type = 'transport', lC[T.g.sa] = 'currencyCode',
      lC[T.g.gh] = 1, lC[T.g.La] = 'location', lC[T.g.Vc] = 'page', lC[T.g.Ua] = 'referrer', lC[T.g.kc] = 'title', lC[T.g.oh] = 1, lC[T.g.Aa] = 1, lC)),
    mC = {},
    nC = Object.freeze((mC.content_id = 1, mC.event_action = 1, mC.event_category = 1, mC.event_label = 1, mC.link_attribution = 1, mC.name = 1, mC[T.g.za] = 1, mC[T.g.fh] = 1, mC[T.g.Ma] = 1, mC[T.g.qa] = 1, mC)),
    oC = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }), dC = Object.freeze(['item_category', 'item_category2', 'item_category3', 'item_category4', 'item_category5']),
    pC = {}, XB = Object.freeze((pC.levels = 1, pC[T.g.Sa] = 'duration', pC[T.g.Oc] = 1, pC)), qC = {},
    rC = Object.freeze((qC.anonymize_ip = 1, qC.fatal = 1, qC.send_page_view = 1, qC.store_gac = 1, qC.use_amp_client_id = 1, qC[T.g.ya] = 1, qC[T.g.gh] = 1, qC)),
    YB = function(a, b, c, d) {
      if (void 0 !== c) if (rC[b] && (c = Qa(c)), 'anonymize_ip' !== b || c || (c = void 0), 1 === a) d[MB(b)] = c; else if (k(a)) d[a] =
        c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    }, MB = function(a) {
      return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
        return b[1].toUpperCase();
      }) : a;
    }, sC = {},
    $B = Object.freeze((sC.checkout_progress = 1, sC.select_content = 1, sC.set_checkout_option = 1, sC[T.g.Gc] = 1, sC[T.g.Hc] = 1, sC[T.g.Yb] = 1, sC[T.g.Ic] = 1, sC[T.g.Gb] = 1, sC[T.g.Zb] = 1, sC[T.g.Hb] = 1, sC[T.g.Ha] = 1, sC[T.g.Jc] = 1, sC[T.g.Ia] = 1, sC)),
    tC = {},
    uC = Object.freeze((tC.checkout_progress = 1, tC.set_checkout_option = 1, tC[T.g.Kg] = 1, tC[T.g.Lg] = 1, tC[T.g.Gc] =
      1, tC[T.g.Hc] = 1, tC[T.g.Mg] = 1, tC[T.g.Yb] = 1, tC[T.g.Ha] = 1, tC[T.g.Jc] = 1, tC[T.g.Ng] = 1, tC)), vC = {},
    wC = Object.freeze((vC.generate_lead = 1, vC.login = 1, vC.search = 1, vC.select_content = 1, vC.share = 1, vC.sign_up = 1, vC.view_search_results = 1, vC[T.g.Ic] = 1, vC[T.g.Gb] = 1, vC[T.g.Zb] = 1, vC[T.g.Hb] = 1, vC[T.g.Ia] = 1, vC)),
    xC = function(a) {
      var b = 'general';
      uC[a] ? b = 'ecommerce' : wC[a] ? b = 'engagement' : 'exception' === a && (b = 'error');
      return b;
    }, yC = {}, zC = Object.freeze((yC.view_search_results = 1, yC[T.g.Gb] = 1, yC[T.g.Hb] = 1, yC[T.g.Ia] = 1, yC)),
    UB = function(a,
      b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    }, AC = function(a) {
      if (Ia(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id, f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + '.' + String(f));
          }
        }
        return 0 < b.length ? b.join('!') : void 0;
      }
    }, QB = function(a, b, c) {
      var d = function(N) {
        return U(c, N);
      }, e = {}, f = {}, g = {}, h = {}, l = AC(d(T.g.lj));
      !c.J && l && UB(f, 'exp', l);
      g['&gtm'] = Gl(!0);
      V(69) && !c.J && (g._no_slc = !0);
      sj() && (h._cs = fC);
      var n = d(T.g.Qc);
      if (!c.J && Fc(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) &&
        void 0 != n[p]) {
        var q = d(String(n[p]));
        void 0 !== q && UB(f, p, q);
      }
      for (var r = dp(c), u = 0; u < r.length; ++u) {
        var t = r[u];
        if (c.J) {
          var v = d(t);
          oC.hasOwnProperty(t) ? e[t] = v : jC.hasOwnProperty(t) ? h[t] = v : g[t] = v;
        } else {
          var w = void 0;
          w = t !== T.g.fa ? d(t) : ep(c, t);
          if (nC.hasOwnProperty(t)) YB(nC[t], t, w, e); else if (kC.hasOwnProperty(t)) YB(kC[t], t, w, g); else if (LB.hasOwnProperty(t)) YB(LB[t], t, w, f); else if (KB.hasOwnProperty(t)) YB(KB[t], t, w, h); else if (/^(dimension|metric|content_group)\d+$/.test(t)) YB(1, t, w, f); else if (t === T.g.fa) {
            if (!gC) {
              var y =
                eb(w);
              y && (f['&did'] = y);
            }
            var x = void 0, A = void 0;
            b === T.g.Ea ? x = eb(ep(c, t), '.') : (x = eb(ep(c, t, 1), '.'), A = eb(ep(c, t, 2), '.'));
            x && (f['&gdid'] = x);
            A && (f['&edid'] = A);
          } else t === T.g.ib && 0 > r.indexOf(T.g.Oc) && (h.cookieName = w + '_ga');
        }
      }
      !1 !== d(T.g.Zi) && !1 !== d(T.g.Ib) && gA() || (g.allowAdFeatures = !1);
      !1 !== d(T.g.da) && hA() || (g.allowAdPersonalizationSignals = !1);
      !c.J && d(T.g.zb) && (h._useUp = !0);
      if (c.J) {
        h.name = h.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function() {
          Ea(B) && B();
          c.aa();
        };
      } else {
        UB(h, 'cookieDomain', 'auto');
        UB(g, 'forceSSL', !0);
        UB(e, 'eventCategory', xC(b));
        zC[b] && UB(f, 'nonInteraction', !0);
        'login' === b || 'sign_up' === b || 'share' === b ? UB(e, 'eventLabel', d(T.g.fh)) : 'search' === b || 'view_search_results' === b ? UB(e, 'eventLabel', d(T.g.sj)) : 'select_content' === b && UB(e, 'eventLabel', d(T.g.cj));
        var C = e[T.g.za] || {}, D = C[T.g.ic];
        D || 0 != D && C[T.g.V] ? h.allowLinker = !0 : !1 === D && UB(h, 'useAmpClientId', !1);
        f.hitCallback = c.aa;
        h.name = a;
      }
      sj() && (g['&gcs'] = Fj(), Ej(T.g.W) || (h.storage = 'none'), Ej(T.g.K) || (g.allowAdFeatures = !1, h.storeGac = !1));
      var H =
        d(T.g.va) || d(T.g.Kb), G = d(T.g.he);
      H && (c.J || (h[T.g.Kb] = H), h._cd2l = !0);
      G && !c.J && (h[T.g.he] = G);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    }, VB = function(a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Nf = b.currencyCode);
      if (b.impressions) {
        c.action = 'impressions';
        var d = b.impressions;
        c.hi = 'impressions' === b.translateIfKeyEquals ? eC(d) : d;
      }
      if (b.promoView) {
        c.action = 'promo_view';
        var e = b.promoView.promotions;
        c.Ad = 'promoView' === b.translateIfKeyEquals ? eC(e) : e;
      }
      if (b.promoClick) {
        c.action =
          'promo_click';
        var f = b.promoClick.promotions;
        c.Ad = 'promoClick' === b.translateIfKeyEquals ? eC(f) : f;
        c.Xa = b.promoClick.actionField;
        return c;
      }
      for (var g in b) if (b.hasOwnProperty(g) && 'translateIfKeyEquals' !== g && 'impressions' !== g && 'promoView' !== g && 'promoClick' !== g && 'currencyCode' !== g) {
        c.action = g;
        var h = b[g].products;
        c.Sb = 'products' === b.translateIfKeyEquals ? eC(h) : h;
        c.Xa = b[g].actionField;
        break;
      }
      return Object.keys(c).length ? c : null;
    }, WB = function(a, b) {
      function c(t) {
        return {
          id: d(T.g.Va), affiliation: d(T.g.ij), revenue: d(T.g.qa),
          tax: d(T.g.Rg), shipping: d(T.g.ae), coupon: d(T.g.jj), list: d(T.g.df) || d(T.g.cf) || t,
        };
      }

      for (var d = function(t) {
        return U(b, t);
      }, e = d(T.g.ja), f, g = 0; e && g < e.length && !(f = e[g][T.g.df] || e[g][T.g.cf]); g++) ;
      var h = d(T.g.Qc);
      if (Fc(h)) for (var l = 0; e && l < e.length; ++l) {
        var n = e[l], p;
        for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && UB(n, p, n[h[p]]);
      }
      var q = null, r = d(T.g.kj);
      if (a === T.g.Ha || a === T.g.Jc) q = { action: a, Xa: c(), Sb: eC(e) }; else if (a === T.g.Gc) q = {
        action: 'add',
        Xa: c(),
        Sb: eC(e),
      }; else if (a === T.g.Hc) q =
        { action: 'remove', Xa: c(), Sb: eC(e) }; else if (a === T.g.Ia) q = {
        action: 'detail',
        Xa: c(f),
        Sb: eC(e),
      }; else if (a === T.g.Gb) q = {
        action: 'impressions',
        hi: eC(e),
      }; else if (a === T.g.Hb) q = {
        action: 'promo_view',
        Ad: eC(r) || eC(e),
      }; else if ('select_content' === a && r && 0 < r.length || a === T.g.Zb) q = {
        action: 'promo_click',
        Ad: eC(r) || eC(e),
      }; else if ('select_content' === a || a === T.g.Ic) q = {
        action: 'click',
        Xa: { list: d(T.g.df) || d(T.g.cf) || f },
        Sb: eC(e),
      }; else if (a === T.g.Yb || 'checkout_progress' === a) {
        var u = { step: a === T.g.Yb ? 1 : d(T.g.Qg), option: d(T.g.Pg) };
        q =
          { action: 'checkout', Sb: eC(e), Xa: K(c(), u) };
      } else 'set_checkout_option' === a && (q = {
        action: 'checkout_option',
        Xa: { step: d(T.g.Qg), option: d(T.g.Pg) },
      });
      q && (q.Nf = d(T.g.sa));
      return q;
    }, BC = {}, RB = function(a, b) {
      var c = BC[a];
      BC[a] = K(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var CC = cB;

  function EC(a, b, c, d) {
  }

  EC.P = 'internal.sendGtagEvent';

  function FC(a, b, c) {
  }

  FC.R = 'sendPixel';

  function GC(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }

  GC.R = 'setCookie';

  function HC(a) {
    M(F(this), ['consentSettings:!DustMap'], arguments);
    for (var b = a.Pb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e === T.g.Re || V(17) && e === T.g.Se || P(this, 'access_consent', e, 'write');
    }
    var f = this.h.h, g = f.eventId, h = Uy(f), l = Es('consent', 'default', Hc(a));
    Ks(l, g, h);
  }

  HC.R = 'setDefaultConsentState';

  function IC(a, b, c) {
    M(F(this), ['path:!string', 'value:?*', 'overrideExisting:?boolean'], arguments);
    P(this, 'access_globals', 'readwrite', a);
    var d = a.split('.'), e = bb(d, [z, I]), f = d.pop();
    if (e && (void 0 === e[f] || c)) return e[f] = Hc(b, this.h, cx()), !0;
    return !1;
  }

  IC.R = 'setInWindow';

  function JC(a, b, c) {
  }

  JC.P = 'internal.setProductSettingsParameter';

  function KC(a, b, c) {
  }

  KC.P = 'internal.setRemoteConfigParameter';

  function LC(a, b, c, d) {
    var e = this;
  }

  LC.R = 'sha256';

  function MC(a, b, c) {
  }

  MC.P = 'internal.sortRemoteConfigParameters';
  var NC = {}, OC = {};
  NC.R = 'templateStorage';
  NC.getItem = function(a) {
    var b = null;
    return b;
  };
  NC.setItem = function(a, b) {
  };
  NC.removeItem = function(a) {
  };
  NC.clear = function() {
  };
  var PC = function(a) {
    var b;
    return b;
  };

  function QC(a) {
    M(F(this), ['consentSettings:!DustMap'], arguments);
    var b = Hc(a), c;
    for (c in b) b.hasOwnProperty(c) && P(this, 'access_consent', c, 'write');
    var d = this.h.h;
    Ks(Es('consent', 'update', b), d.eventId, Uy(d));
  }

  QC.R = 'updateConsentState';
  var RC = function() {
    var a = new Mg, b = function(d) {
      var e = d.P;
      if (a.B.hasOwnProperty(e)) throw'Attempting to add a private function which already exists: ' + e + '.';
      if (a.h.hasOwnProperty(e)) throw'Attempting to add a private function with an existing API name: ' + e + '.';
      a.B[e] = Ea(d) ? hg(e, d) : ig(e, d);
    }, c = function(d) {
      return a.add(d.R, d);
    };
    c(iw);
    c(ow);
    c(ax);
    c(dx);
    c(ex);
    c(ix);
    c(jx);
    c(lx);
    c(ez());
    c(mx);
    c(Fy);
    c(My);
    c(Ny);
    c(Oy);
    c(Ry);
    c(Wy);
    c(Xy);
    c($y);
    c(dz);
    c(kz);
    c(lz);
    c(nz);
    c(oz);
    c(pz);
    c(FC);
    c(GC);
    c(HC);
    c(IC);
    c(LC);
    c(NC);
    c(QC);
    a.add('Math', ng());
    a.add('Object', Kg);
    a.add('TestHelper', Og());
    a.add('assertApi', jg);
    a.add('assertThat', kg);
    a.add('decodeUri', og);
    a.add('decodeUriComponent', pg);
    a.add('encodeUri', qg);
    a.add('encodeUriComponent', rg);
    a.add('fail', xg);
    a.add('generateRandom', yg);
    a.add('getContainerVersion', zg);
    a.add('getTimestamp', Ag);
    a.add('getTimestampMillis', Ag);
    a.add('getType', Bg);
    a.add('makeInteger', Dg);
    a.add('makeNumber', Eg);
    a.add('makeString', Fg);
    a.add('makeTableMap', Gg);
    a.add('mock', Jg);
    a.add('fromBase64',
      Ey, !('atob' in z));
    a.add('localStorage', gz, !fz());
    a.add('toBase64', PC, !('btoa' in z));
    b(lw);
    b(Ew);
    b(Lw);
    b(Qw);
    b(Zw);
    b(bx);
    b(gx);
    b(kx);
    b(xx);
    b(Cx);
    b(Hx);
    b(Qx);
    b(Ux);
    b(ey);
    b(ry);
    b(sg);
    b(ty);
    b(Gy);
    b(Hy);
    b(Ky);
    b(Ly);
    b(Py);
    b(Qy);
    b(cz);
    b(iz);
    b(mz);
    b(qz);
    b(sz);
    b(tz);
    b(EC);
    b(JC);
    b(KC);
    b(MC);
    return function(d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this); else {
        var f;
        if (f = a.B.hasOwnProperty(d)) {
          var g = !1, h = this.h.h;
          if (h) {
            var l = h.pd();
            if (l) {
              0 !== l.indexOf('__cvt_') && (g = !0);
            }
          }
          f =
            g;
        }
        if (f) {
          var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
          e = n;
        } else throw Error(d + ' is not a valid API name.');
      }
      return e;
    };
  };
  var SC = function() {
    return !1;
  }, TC = function() {
    var a = {};
    return function(b, c, d) {
    };
  };
  var UC;

  function VC() {
    var a = UC;
    return function(b, c, d) {
      var e = d && d.event;
      WC(c);
      var f = new kb;
      m(c, function(q, r) {
        var u = Gc(r);
        void 0 === u && void 0 !== r && Q(44);
        f.set(q, u);
      });
      a.h.h.F = Qe();
      var g = {
        Rj: bf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        ye: void 0 !== e ? function(q) {
          return e.Cb.ye(q);
        } : void 0,
        pd: function() {
          return b;
        },
        log: function() {
        },
        dk: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (SC()) {
        var h = TC(), l = void 0, n = void 0;
        g.Qa = {
          xg: [], fd: {}, Ya: function(q, r, u) {
            1 === r && (l = q);
            7 === r && (n =
              u);
            h(q, r, u);
          }, ig: Hg(),
        };
        g.log = function(q, r) {
          if (l) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(l, 4, { level: q, source: n, message: u });
          }
        };
      }
      var p = Yd(a, g, [b, f]);
      a.h.h.F = void 0;
      p instanceof sa && 'return' === p.h && (p = p.B);
      return Hc(p);
    };
  }

  function WC(a) {
    var b = a.gtmOnSuccess, c = a.gtmOnFailure;
    Ea(b) && (a.gtmOnSuccess = function() {
      J(b);
    });
    Ea(c) && (a.gtmOnFailure = function() {
      J(c);
    });
  }

  function XC() {
    UC.h.h.N = function(a, b, c) {
      Fh.SANDBOXED_JS_SEMAPHORE = Fh.SANDBOXED_JS_SEMAPHORE || 0;
      Fh.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Fh.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }

  function YC(a) {
    void 0 !== a && m(a, function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, '');
        di[e] = di[e] || [];
        di[e].push(b);
      }
    });
  }var ZC = encodeURI, Y = encodeURIComponent, $C = function(a, b, c) {
    fc(a, b, c);
  }, aD = function(a, b) {
    if (!a) return !1;
    var c = Df(Ff(a), 'host');
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && '.' != e.charAt(0) && (f--, e = '.' + e);
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  }, bD = function(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
    a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
    return e ? d : null;
  };
  var Z = { m: {} };

  Z.m.d = ['google'], function() {
    (function(a) {
      Z.__d = a;
      Z.__d.o = 'd';
      Z.__d.isVendorTemplate = !0;
      Z.__d.priorityOverride = 0;
      Z.__d.isInfrastructure = !1;
    })(function(a) {
      var b = null, c = null, d = a.vtp_attributeName;
      if ('CSS' == a.vtp_selectorType) try {
        var e = Qg(a.vtp_elementSelector);
        e && 0 < e.length && (b = e[0]);
      } catch (f) {
        b = null;
      } else b = I.getElementById(a.vtp_elementId);
      b && (d ? c = function() {
        if (b instanceof HTMLInputElement) {
          var f = b;
          if ('value' === d) return f.value;
          if ('checked' === d && ('radio' === f.type || 'checkbox' === f.type)) return f.checked;
        }
        return ic(b,
          d);
      }() : c = jc(b));
      return Sa(String(b && c));
    });
  }();
  Z.m.e = ['google'], function() {
    (function(a) {
      Z.__e = a;
      Z.__e.o = 'e';
      Z.__e.isVendorTemplate = !0;
      Z.__e.priorityOverride = 0;
      Z.__e.isInfrastructure = !1;
    })(function(a) {
      return String(a.vtp_gtmCachedValues.event);
    });
  }();
  Z.m.f = ['google'], function() {
    (function(a) {
      Z.__f = a;
      Z.__f.o = 'f';
      Z.__f.isVendorTemplate = !0;
      Z.__f.priorityOverride = 0;
      Z.__f.isInfrastructure = !1;
    })(function(a) {
      var b = Bv('gtm.referrer', 1) || I.referrer;
      return b ? a.vtp_component && 'URL' != a.vtp_component ? Df(Ff(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Av(String(b)) : String(b);
    });
  }();
  Z.m.cl = ['google'], function() {
    function a(b) {
      var c = b.target;
      if (c) {
        var d = Xu(c, 'gtm.click');
        Cv(d);
      }
    }

    (function(b) {
      Z.__cl = b;
      Z.__cl.o = 'cl';
      Z.__cl.isVendorTemplate = !0;
      Z.__cl.priorityOverride = 0;
      Z.__cl.isInfrastructure = !1;
    })(function(b) {
      if (!Hv('cl')) {
        var c = X('document');
        gc(c, 'click', a, !0);
        Iv('cl');
      }
      J(b.vtp_gtmOnSuccess);
    });
  }();
  Z.m.access_globals = ['google'], function() {
    function a(b, c, d) {
      var e = { key: d, read: !1, write: !1, execute: !1 };
      switch (c) {
        case 'read':
          e.read = !0;
          break;
        case 'write':
          e.write = !0;
          break;
        case 'readwrite':
          e.read = e.write = !0;
          break;
        case 'execute':
          e.execute = !0;
          break;
        default:
          throw Error('Invalid ' + b + ' request ' + c);
      }
      return e;
    }

    (function(b) {
      Z.__access_globals = b;
      Z.__access_globals.o = 'access_globals';
      Z.__access_globals.isVendorTemplate = !0;
      Z.__access_globals.priorityOverride = 0;
      Z.__access_globals.isInfrastructure = !1;
    })(function(b) {
      for (var c =
        b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
        var l = c[h], n = l.key;
        l.read && e.push(n);
        l.write && f.push(n);
        l.execute && g.push(n);
      }
      return {
        assert: function(p, q, r) {
          if (!k(r)) throw d(p, {}, 'Key must be a string.');
          if ('read' === q) {
            if (-1 < e.indexOf(r)) return;
          } else if ('write' === q) {
            if (-1 < f.indexOf(r)) return;
          } else if ('readwrite' === q) {
            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
          } else if ('execute' === q) {
            if (-1 < g.indexOf(r)) return;
          } else throw d(p, {}, 'Operation must be either \'read\', \'write\', or \'execute\', was ' +
            q);
          throw d(p, {}, 'Prohibited ' + q + ' on global variable: ' + r + '.');
        }, ba: a,
      };
    });
  }();
  Z.m.u = ['google'], function() {
    var a = function(b) {
      return {
        toString: function() {
          return b;
        },
      };
    };
    (function(b) {
      Z.__u = b;
      Z.__u.o = 'u';
      Z.__u.isVendorTemplate = !0;
      Z.__u.priorityOverride = 0;
      Z.__u.isInfrastructure = !1;
    })(function(b) {
      var c;
      c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Bv('gtm.url', 1)) || yv();
      var d = b[a('vtp_component')];
      if (!d || 'URL' == d) return Av(String(c));
      var e = Ff(String(c)), f;
      if ('QUERY' === d) a:{
        var g = b[a('vtp_multiQueryKeys').toString()], h = b[a('vtp_queryKey').toString()] || '',
          l = b[a('vtp_ignoreEmptyQueryParam').toString()],
          n;
        g ? Ia(h) ? n = h : n = String(h).replace(/\s+/g, '').split(',') : n = [String(h)];
        for (var p = 0; p < n.length; p++) {
          var q = Df(e, 'QUERY', void 0, void 0, n[p]);
          if (void 0 != q && (!l || '' !== q)) {
            f = q;
            break a;
          }
        }
        f = void 0;
      } else f = Df(e, d, 'HOST' == d ? b[a('vtp_stripWww')] : void 0, 'PATH' == d ? b[a('vtp_defaultPages')] : void 0);
      return f;
    });
  }();
  Z.m.v = ['google'], function() {
    (function(a) {
      Z.__v = a;
      Z.__v.o = 'v';
      Z.__v.isVendorTemplate = !0;
      Z.__v.priorityOverride = 0;
      Z.__v.isInfrastructure = !1;
    })(function(a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = Bv(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
      Jv(d, 'v', a.vtp_gtmEventId);
      return d;
    });
  }();


  Z.m.aev = ['google'], function() {
    function a(r, u, t, v, w) {
      w || (w = 'element');
      var y = u + '.' + t, x;
      if (n.hasOwnProperty(y)) x = n[y]; else {
        var A = r[w];
        if (A && (x = v(A), n[y] = x, p.push(y), 35 < p.length)) {
          var B = p.shift();
          delete n[B];
        }
      }
      return x;
    }

    function b(r, u, t) {
      var v = r[q[u]];
      return void 0 !== v ? v : t;
    }

    function c(r, u) {
      if (!r) return !1;
      var t = d(yv());
      Ia(u) || (u = String(u || '').replace(/\s+/g, '').split(','));
      for (var v = [t], w = 0; w < u.length; w++) {
        var y = u[w];
        if (y.hasOwnProperty('is_regex')) if (y.is_regex) try {
          y = new RegExp(y.domain);
        } catch (B) {
          continue;
        } else y =
          y.domain;
        var x = d(r);
        if (y instanceof RegExp) {
          if (y.test(x)) return !1;
        } else {
          var A = y;
          if (0 != A.length) {
            if (0 <= x.indexOf(A)) return !1;
            v.push(d(A));
          }
        }
      }
      return !aD(r, v);
    }

    function d(r) {
      l.test(r) || (r = 'http://' + r);
      return Df(Ff(r), 'HOST', !0);
    }

    function e(r, u, t, v) {
      switch (r) {
        case 'SUBMIT_TEXT':
          return a(u, t, 'FORM.' + r, f, 'formSubmitElement') || v;
        case 'LENGTH':
          var w = a(u, t, 'FORM.' + r, g);
          return void 0 === w ? v : w;
        case 'INTERACTED_FIELD_ID':
          return h(u, 'id', v);
        case 'INTERACTED_FIELD_NAME':
          return h(u, 'name', v);
        case 'INTERACTED_FIELD_TYPE':
          return h(u,
            'type', v);
        case 'INTERACTED_FIELD_POSITION':
          var y = u.interactedFormFieldPosition;
          return void 0 === y ? v : y;
        case 'INTERACT_SEQUENCE_NUMBER':
          var x = u.interactSequenceNumber;
          return void 0 === x ? v : x;
        default:
          return v;
      }
    }

    function f(r) {
      switch (r.tagName.toLowerCase()) {
        case 'input':
          return ic(r, 'value');
        case 'button':
          return jc(r);
        default:
          return null;
      }
    }

    function g(r) {
      if ('form' === r.tagName.toLowerCase() && r.elements) {
        for (var u = 0, t = 0; t < r.elements.length; t++) ev(r.elements[t]) && u++;
        return u;
      }
    }

    function h(r, u, t) {
      var v = r.interactedFormField;
      return v && ic(v, u) || t;
    }

    var l = /^https?:\/\//i, n = {}, p = [], q = {
      ATTRIBUTE: 'elementAttribute',
      CLASSES: 'elementClasses',
      ELEMENT: 'element',
      ID: 'elementId',
      HISTORY_CHANGE_SOURCE: 'historyChangeSource',
      HISTORY_NEW_STATE: 'newHistoryState',
      HISTORY_NEW_URL_FRAGMENT: 'newUrlFragment',
      HISTORY_OLD_STATE: 'oldHistoryState',
      HISTORY_OLD_URL_FRAGMENT: 'oldUrlFragment',
      TARGET: 'elementTarget',
    };
    (function(r) {
      Z.__aev = r;
      Z.__aev.o = 'aev';
      Z.__aev.isVendorTemplate = !0;
      Z.__aev.priorityOverride = 0;
      Z.__aev.isInfrastructure = !1;
    })(function(r) {
      var u =
        r.vtp_gtmEventId, t = r.vtp_defaultValue, v = r.vtp_varType, w = r.vtp_gtmCachedValues.gtm;
      switch (v) {
        case 'TAG_NAME':
          var y = w.element;
          return y && y.tagName || t;
        case 'TEXT':
          return a(w, u, v, jc) || t;
        case 'URL':
          var x;
          a:{
            var A = String(w.elementUrl || t || ''), B = Ff(A), C = String(r.vtp_component || 'URL');
            switch (C) {
              case 'URL':
                x = A;
                break a;
              case 'IS_OUTBOUND':
                x = c(A, r.vtp_affiliatedDomains);
                break a;
              default:
                x = Df(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey);
            }
          }
          return x;
        case 'ATTRIBUTE':
          var D;
          if (void 0 === r.vtp_attribute) D = b(w,
            v, t); else {
            var H = w.element;
            D = H && ic(H, r.vtp_attribute) || t || '';
          }
          return D;
        case 'MD':
          var G = r.vtp_mdValue, N = a(w, u, 'MD', qv);
          return G && N ? tv(N, G) || t : N || t;
        case 'FORM':
          return e(String(r.vtp_component || 'SUBMIT_TEXT'), w, u, t);
        default:
          var R = b(w, v, t);
          Jv(R, 'aev', r.vtp_gtmEventId);
          return R;
      }
    });
  }();


  Z.m.lcl = [], function() {
    function a() {
      var c = X('document'), d = 0, e = function(f) {
        var g = f.target;
        if (g && 3 !== f.which && !(f.ag || f.timeStamp && f.timeStamp === d)) {
          d = f.timeStamp;
          g = lc(g, ['a', 'area'], 100);
          if (!g) return f.returnValue;
          var h = f.defaultPrevented || !1 === f.returnValue, l = av('lcl', h ? 'nv.mwt' : 'mwt', 0), n;
          n = h ? av('lcl', 'nv.ids', []) : av('lcl', 'ids', []);
          if (n.length) {
            var p = Xu(g, 'gtm.linkClick', n);
            if (b(f, g, c) && !h && l && g.href) {
              var q = !!Ka(String(nc(g, 'rel') || '').split(' '), function(v) {
                  return 'noreferrer' === v.toLowerCase();
                }),
                r = X((nc(g, 'target') || '_self').substring(1)), u = !0, t = Ku(function() {
                  var v;
                  if (v = u && r) {
                    var w;
                    a:if (q) {
                      var y;
                      try {
                        y = new MouseEvent(f.type, { bubbles: !0 });
                      } catch (x) {
                        if (!c.createEvent) {
                          w = !1;
                          break a;
                        }
                        y = c.createEvent('MouseEvents');
                        y.initEvent(f.type, !0, !0);
                      }
                      y.ag = !0;
                      f.target.dispatchEvent(y);
                      w = !0;
                    } else w = !1;
                    v = !w;
                  }
                  v && (r.location.href = nc(g, 'href'));
                }, l);
              if (Cv(p, t, l)) u = !1; else return f.preventDefault && f.preventDefault(), f.returnValue = !1;
            } else Cv(p, function() {
            }, l || 2E3);
            return !0;
          }
        }
      };
      gc(c, 'click', e, !1);
      gc(c, 'auxclick', e, !1);
    }

    function b(c, d, e) {
      if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
      var f = nc(d, 'href'), g = f.indexOf('#'), h = nc(d, 'target');
      if (h && '_self' !== h && '_parent' !== h && '_top' !== h || 0 === g) return !1;
      if (0 < g) {
        var l = Av(f), n = Av(e.location);
        return l !== n;
      }
      return !0;
    }

    (function(c) {
      Z.__lcl = c;
      Z.__lcl.o = 'lcl';
      Z.__lcl.isVendorTemplate = !0;
      Z.__lcl.priorityOverride = 0;
      Z.__lcl.isInfrastructure = !1;
    })(function(c) {
      var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
        e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
        f = Number(c.vtp_waitForTagsTimeout);
      if (!f || 0 >= f) f = 2E3;
      var g = c.vtp_uniqueTriggerId || '0';
      if (d) {
        var h = function(n) {
          return Math.max(f, n);
        };
        $u('lcl', 'mwt', h, 0);
        e || $u('lcl', 'nv.mwt', h, 0);
      }
      var l = function(n) {
        n.push(g);
        return n;
      };
      $u('lcl', 'ids', l, []);
      e || $u('lcl', 'nv.ids', l, []);
      Hv('lcl') || (a(), Iv('lcl'));
      J(c.vtp_gtmOnSuccess);
    });
  }();


  Z.m.sp = ['google'], function() {
    (function(a) {
      Z.__sp = a;
      Z.__sp.o = 'sp';
      Z.__sp.isVendorTemplate = !0;
      Z.__sp.priorityOverride = 0;
      Z.__sp.isInfrastructure = !1;
    })(function(a) {
      var b, c = {};
      'DATA_LAYER' == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : 'USER_SPECIFIED' == a.vtp_customParamsFormat && (c = bD(a.vtp_customParams, 'key', 'value'));
      b = Fc(c) ? c : {};
      b[T.g.Ze] = !0;
      if (a.vtp_enableConversionLinkingSettings) {
        var d = !a.hasOwnProperty('vtp_enableConversionLinker') || !!a.vtp_enableConversionLinker;
        b[T.g.Ka] = a.vtp_conversionCookiePrefix;
        b[T.g.ya] = d;
      }
      a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[T.g.qa] = a.vtp_eventValue), a.vtp_eventItems && (b[T.g.ja] = a.vtp_eventItems));
      a.vtp_rdp && (b[T.g.Mb] = !0);
      a.vtp_userId && (b[T.g.Aa] = a.vtp_userId);
      b[T.g.Fa] = Bv(T.g.Fa), b[T.g.da] = Bv(T.g.da), b[T.g.Jb] = Bv(T.g.Jb), b[T.g.Ma] = Bv(T.g.Ma);
      var e = rp(qp(pp(op(hp(new gp(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure))),
        f = 'AW-' + a.vtp_conversionId;
      a.vtp_conversionLabel && (f += '/' + a.vtp_conversionLabel);
      e.eventMetadata.hit_type_override = 'remarketing';
      iB(f, a.vtp_eventName || '', Date.now(), e);
    });
  }();


  Z.m.ua = ['google'], function() {
    function a(l, n) {
      for (var p in l) if (!h[p] && l.hasOwnProperty(p)) {
        var q = g[p] ? Qa(l[p]) : l[p];
        'anonymizeIp' != p || q || (q = void 0);
        n[p] = q;
      }
    }

    function b(l) {
      var n = {};
      l.vtp_gaSettings && K(bD(l.vtp_gaSettings.vtp_fieldsToSet, 'fieldName', 'value'), n);
      K(bD(l.vtp_fieldsToSet, 'fieldName', 'value'), n);
      Qa(n.urlPassthrough) && (n._useUp = !0);
      l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
      return n;
    }

    function c(l, n) {
      return void 0 === n ? n : l(n);
    }

    function d(l, n, p) {
    }

    function e(l, n) {
      if (!f) {
        var p = l.vtp_useDebugVersion ? 'u/analytics_debug.js' : 'analytics.js';
        l.vtp_useInternalVersion && !l.vtp_useDebugVersion && (p = 'internal/' + p);
        f = !0;
        var q = l.vtp_gtmOnFailure, r = Uh || Wh ? Fr(n._x_19, '/analytics.js') : void 0,
          u = vo('https:', 'http:', '//www.google-analytics.com/' + p, n && !!n.forceSSL);
        W('analytics.js' === p && r ? r : u, function() {
          var t = ns();
          t && t.loaded || q();
        }, q);
      }
    }

    var f, g = {
      allowAnchor: !0,
      allowLinker: !0,
      alwaysSendReferrer: !0,
      anonymizeIp: !0,
      cookieUpdate: !0,
      exFatal: !0,
      forceSSL: !0,
      javaEnabled: !0,
      legacyHistoryImport: !0,
      nonInteraction: !0,
      useAmpClientId: !0,
      useBeacon: !0,
      storeGac: !0,
      allowAdFeatures: !0,
      allowAdPersonalizationSignals: !0,
      _cd2l: !0,
    }, h = { urlPassthrough: !0 };
    (function(l) {
      Z.__ua = l;
      Z.__ua.o = 'ua';
      Z.__ua.isVendorTemplate = !0;
      Z.__ua.priorityOverride = 0;
      Z.__ua.isInfrastructure = !1;
    })(function(l) {
      function n() {
        if (l.vtp_doubleClick || 'DISPLAY_FEATURES' == l.vtp_advertisingFeaturesType) v.displayfeatures =
          !0;
      }

      var p = {}, q = {}, r = {};
      if (l.vtp_gaSettings) {
        var u = l.vtp_gaSettings;
        K(bD(u.vtp_contentGroup, 'index', 'group'), p);
        K(bD(u.vtp_dimension, 'index', 'dimension'), q);
        K(bD(u.vtp_metric, 'index', 'metric'), r);
        var t = K(u);
        t.vtp_fieldsToSet = void 0;
        t.vtp_contentGroup = void 0;
        t.vtp_dimension = void 0;
        t.vtp_metric = void 0;
        l = K(l, t);
      }
      K(bD(l.vtp_contentGroup, 'index', 'group'), p);
      K(bD(l.vtp_dimension, 'index', 'dimension'), q);
      K(bD(l.vtp_metric, 'index', 'metric'), r);
      var v = b(l), w = String(l.vtp_trackingId || ''), y = '', x = '', A = '';
      l.vtp_setTrackerName &&
      'string' == typeof l.vtp_trackerName ? '' !== l.vtp_trackerName && (A = l.vtp_trackerName, x = A + '.') : (A = 'gtm' + fi(), x = A + '.');
      var B = function(ca, ba) {
        for (var Fa in ba) ba.hasOwnProperty(Fa) && (v[ca + Fa] = ba[Fa]);
      };
      B('contentGroup', p);
      B('dimension', q);
      B('metric', r);
      l.vtp_enableEcommerce && (y = l.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(l, v, y));
      if ('TRACK_EVENT' === l.vtp_trackType) y = 'track_event', n(), v.eventCategory = String(l.vtp_eventCategory), v.eventAction = String(l.vtp_eventAction), v.eventLabel = c(String, l.vtp_eventLabel),
        v.value = c(Pa, l.vtp_eventValue); else if ('TRACK_PAGEVIEW' == l.vtp_trackType) {
        if (y = T.g.Kc, n(), 'DISPLAY_FEATURES_WITH_REMARKETING_LISTS' == l.vtp_advertisingFeaturesType && (v.remarketingLists = !0), l.vtp_autoLinkDomains) {
          var C = {};
          C[T.g.V] = l.vtp_autoLinkDomains;
          C.use_anchor = l.vtp_useHashAutoLink;
          C[T.g.Lb] = l.vtp_decorateFormsAutoLink;
          v[T.g.za] = C;
        }
      } else 'TRACK_SOCIAL' === l.vtp_trackType ? (y = 'track_social', v.socialNetwork = String(l.vtp_socialNetwork), v.socialAction = String(l.vtp_socialAction), v.socialTarget = String(l.vtp_socialActionTarget)) :
        'TRACK_TIMING' == l.vtp_trackType && (y = 'timing_complete', v.eventCategory = String(l.vtp_timingCategory), v.timingVar = String(l.vtp_timingVar), v.value = Pa(l.vtp_timingValue), v.eventLabel = c(String, l.vtp_timingLabel));
      l.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
      l.vtp_enableLinkId && (v.enableLinkId = !0);
      var D = {};
      a(v, D);
      v.name || (D.gtmTrackerName = A);
      D.gaFunctionName = l.vtp_functionName;
      void 0 !== l.vtp_nonInteraction && (D.nonInteraction = l.vtp_nonInteraction);
      var H = rp(qp(pp(op(hp(new gp(l.vtp_gtmEventId, l.vtp_gtmPriorityId),
        D), l.vtp_gtmOnSuccess), l.vtp_gtmOnFailure)));
      cC(w, y, Date.now(), H);
      var G = ps(l.vtp_functionName);
      if (Ea(G)) {
        var N = function(ca) {
          var ba = [].slice.call(arguments, 0);
          ba[0] = x + ba[0];
          G.apply(window, ba);
        };
        if ('TRACK_TRANSACTION' == l.vtp_trackType) {
        } else if ('DECORATE_LINK' == l.vtp_trackType) {
        } else if ('DECORATE_FORM' == l.vtp_trackType) {
        } else if ('TRACK_DATA' == l.vtp_trackType) {
        }
        e(l, v);
      } else J(l.vtp_gtmOnFailure);
    });
  }();
  Z.m.inject_script = ['google'], function() {
    function a(b, c) {
      return { url: c };
    }

    (function(b) {
      Z.__inject_script = b;
      Z.__inject_script.o = 'inject_script';
      Z.__inject_script.isVendorTemplate = !0;
      Z.__inject_script.priorityOverride = 0;
      Z.__inject_script.isInfrastructure = !1;
    })(function(b) {
      var c = b.vtp_urls || [], d = b.vtp_createPermissionError;
      return {
        assert: function(e, f) {
          if (!k(f)) throw d(e, {}, 'Script URL must be a string.');
          try {
            if (ag(Ff(f), c)) return;
          } catch (g) {
            throw d(e, {}, 'Invalid script URL filter.');
          }
          throw d(e, {}, 'Prohibited script URL: ' +
            f);
        }, ba: a,
      };
    });
  }();


  Z.m.html = ['customScripts'], function() {
    function a(d, e, f, g) {
      return function() {
        try {
          if (0 < e.length) {
            var h = e.shift(), l = a(d, e, f, g);
            if ('SCRIPT' == String(h.nodeName).toUpperCase() && 'text/gtmscript' == h.type) {
              var n = I.createElement('script');
              n.async = !1;
              n.type = 'text/javascript';
              n.id = h.id;
              n.text = h.text || h.textContent || h.innerHTML || '';
              h.charset && (n.charset = h.charset);
              var p = h.getAttribute('data-gtmsrc');
              p && (n.src = p, Zb(n, l));
              d.insertBefore(n, null);
              p || l();
            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf('<script')) {
              for (var q =
                []; h.firstChild;) q.push(h.removeChild(h.firstChild));
              d.insertBefore(h, null);
              a(h, q, l, g)();
            } else d.insertBefore(h, null), l();
          } else f();
        } catch (r) {
          J(g);
        }
      };
    }

    function b(d) {
      if (I.body) {
        var e = d.vtp_gtmOnFailure, f = Kv(d.vtp_html, d.vtp_gtmOnSuccess, e), g = f.tk, h = f.aa;
        if (d.vtp_useIframe) {
        } else d.vtp_supportDocumentWrite ? c(g, h, e) : a(I.body, kc(g), h, e)();
      } else wv(function() {
        b(d);
      }, 200);
    }

    var c = function(d, e, f) {
      cs(function() {
        var g = google_tag_manager_external.postscribe.getPostscribe(), h = { done: e }, l = I.createElement('div');
        l.style.display = 'none';
        l.style.visibility = 'hidden';
        I.body.appendChild(l);
        try {
          g(l, d, h);
        } catch (n) {
          J(f);
        }
      });
    };
    Z.__html = b;
    Z.__html.o =
      'html';
    Z.__html.isVendorTemplate = !0;
    Z.__html.priorityOverride = 0;
    Z.__html.isInfrastructure = !1;
  }();


  var tE = {};
  tE.macro = function(a) {
    if (Ee.Ef.hasOwnProperty(a)) return Ee.Ef[a];
  }, tE.onHtmlSuccess = Ee.ai(!0), tE.onHtmlFailure = Ee.ai(!1);
  tE.dataLayer = mi;
  tE.callback = function(a) {
    ci.hasOwnProperty(a) && Ea(ci[a]) && ci[a]();
    delete ci[a];
  };
  tE.bootstrap = 0;
  tE._spx = !1;

  function uE() {
    Fh[L.H] = Fh[L.H] || tE;
    L.fb && (Fh['ctid_' + L.fb] = tE);
    jl();
    ll() || m(Dl(), function(a, b) {
      Jr(a, b.transportUrl, b.context);
      Q(92);
    });
    Ya(di, Z.m);
    Fe();
    Ge = Ue;
  }

  (function(a) {
    function b() {
      l = I.documentElement.getAttribute('data-tag-assistant-present');
      Tu(l) && (h = g.uj);
    }

    if (!z['__TAGGY_INSTALLED']) {
      var c = !1;
      if (I.referrer) {
        var d = Ff(I.referrer);
        c = 'cct.google' === Cf(d, 'host');
      }
      if (!c) {
        var e = Qj('googTaggyReferrer');
        c = e.length && e[0].length;
      }
      c && (z['__TAGGY_INSTALLED'] = !0, cc('https://cct.google/taggy/agent.js'));
    }
    if (Yh) a(); else {
      var f = function(t) {
          var v = 'GTM', w = 'GTM';
          Sh ? (v = 'OGT', w = 'GTAG') : Yh && (w = v = 'OPT');
          var y = z['google.tagmanager.debugui2.queue'];
          y || (y = [],
            z['google.tagmanager.debugui2.queue'] = y, cc('https://' + Eh.Md + '/debug/bootstrap?id=' + L.H + '&src=' + w + '&cond=' + t + '&gtm=' + Gl()));
          var x = {
            messageType: 'CONTAINER_STARTING',
            data: { scriptSource: Xb, containerProduct: v, debug: !1, id: L.H, isGte: Rh },
          };
          x.data.resume = function() {
            a();
          };
          Eh.Ni && (x.data.initialPublish = !0);
          y.push(x);
        }, g = { Al: 1, vj: 2, Hj: 3, Pi: 4, uj: 5 }, h = void 0, l = void 0,
        n = Df(z.location, 'query', !1, void 0, 'gtm_debug');
      Tu(n) && (h = g.vj);
      if (!h && I.referrer) {
        var p = Ff(I.referrer);
        'tagassistant.google.com' === Cf(p, 'host') && (h = g.Hj);
      }
      if (!h) {
        var q =
          Qj('__TAG_ASSISTANT');
        q.length && q[0].length && (h = g.Pi);
      }
      h || b();
      if (!h && Uu(l)) {
        var r = function() {
          if (u) return !0;
          u = !0;
          b();
          h && Xb ? f(h) : a();
        }, u = !1;
        gc(I, 'TADebugSignal', function() {
          r();
        }, !1);
        z.setTimeout(function() {
          r();
        }, 200);
      } else h && Xb ? f(h) : a();
    }
  })(function() {
    var a = !1;
    a && fr('INIT');
    if (V(70)) {
      var b =
        $q(zq.I.Ue, L.H);
      ar(b);
    }
    gj().B();
    mm();
    if (L.fb ? Fh['ctid_' + L.fb] : Fh[L.H]) {
      var c = Fh.zones;
      c && c.unregisterChild(fl());
    } else {
      (V(11) || V(13) || V(55) || V(48)) && Fn();
      for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) ve.push(e[f]);
      for (var g = d.tags || [], h = 0; h < g.length; h++) ye.push(g[h]);
      for (var l = d.predicates || [], n = 0; n < l.length; n++) xe.push(l[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var r = p[q], u = {}, t = 0; t < r.length; t++) u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
        we.push(u);
      }
      Ae = Z;
      Be = gw;
      af = new $e;
      var v = data.sandboxed_scripts, w = data.security_groups, y = data.infra, x = data.runtime || [],
        A = data.runtime_lines;
      UC = new Wd;
      XC();
      ue = VC();
      var B = UC, C = RC();
      nb(B.h, 'require', C);
      for (var D = 0; D < x.length; D++) {
        var H = x[D];
        if (!Ia(H) || 3 > H.length) {
          if (0 === H.length) continue;
          break;
        }
        A && A[D] && A[D].length && Ne(H, A[D]);
        UC.execute(H);
      }
      if (void 0 !== v) for (var G = ['sandboxedScripts'],
        N = 0; N < v.length; N++) {
        var R = v[N].replace(/^_*/, '');
        di[R] = G;
      }
      YC(w);
      if (void 0 !== y) for (var aa = 0; aa < y.length; aa++) ei[y[aa]] = !0;
      uE();
      Su();
      Yr = !1;
      Zr = 0;
      if ('interactive' == I.readyState && !I.createEventObject || 'complete' == I.readyState) as(); else {
        gc(I, 'DOMContentLoaded', as);
        gc(I, 'readystatechange', as);
        if (I.createEventObject && I.documentElement.doScroll) {
          var oa = !0;
          try {
            oa = !z.frameElement;
          } catch (Wa) {
          }
          oa && bs();
        }
        gc(z, 'load', as);
      }
      gu = !1;
      'complete' === I.readyState ? iu() : gc(z, 'load', iu);
      ym && z.setInterval(Dm, 864E5);
      google_tag_manager_external.postscribe.installPostscribe();
      V(46) && (Q(111), wb('HEALTH', 1));
      V(47) && (Q(112), wb('HEALTH', 2));
      bi =
        Ua();
      tE.bootstrap = bi;
      if (a) {
        var ca = gr('INIT');
      }
      if (V(70)) {
        var ba = $q(zq.I.Dg, L.H);
        if (ar(ba)) {
          var Fa = $q(zq.I.Ue, L.H);
          br(ba, Fa);
        }
      }
    }
  });

})();
