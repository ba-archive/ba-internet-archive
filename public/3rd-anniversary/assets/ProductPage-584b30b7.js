import { i as U, a as W, b as q } from './image14-b1e190f7.js';
import {
  u as $,
  F as C,
  l as D,
  a as E,
  f as F,
  C as H,
  y as M,
  w as N,
  D as P,
  m as S,
  j as T,
  x as V,
  A as X,
  q as _,
  i as c,
  v as d,
  s as f,
  r as g,
  B as k,
  g as o,
  k as t,
  _ as z,
} from './index-ad126f05.js';

const R =
    './assets/image1-2fdc1e45.png',
  I =
    './assets/image2-203108f7.png',
  K =
    './assets/image3-897bd8d8.png',
  O =
    './assets/image4-375cb2be.png',
  Q =
    './assets/image5-bcfbac20.png',
  G =
    './assets/image6-9806af62.png',
  J =
    './assets/image7-b8225c72.png',
  Y =
    './assets/image8-321f6df1.png',
  Z =
    './assets/image9-da46336c.png',
  x =
    './assets/image10-99f45adb.png',
  ee =
    './assets/image11-881dd848.png',
  te =
    './assets/image12-abc7760e.png',
  se =
    './assets/image13-bb022291.png',
  ie =
    './assets/image15-a69f3c82.png',
  ae =
    './assets/image16-f207bf0f.png',
  re =
    './assets/image17-f11fb54c.png',
  ne =
    './assets/image18-df90674d.png',
  oe =
    './assets/image21-46d0c509.png',
  ce =
    './assets/image22-8c58f394.png',
  pe =
    './assets/image23-9cec3246.png',
  de =
    './assets/image25-57847167.png',
  le =
    './assets/image26-2c211848.png',
  me =
    './assets/image27-3fc28ab5.png',
  ue =
    './assets/image28-11170707.png',
  he =
    './assets/image29-14811491.png',
  be =
    './assets/image30-430e4d7d.png',
  ge =
    './assets/image31-5e4fd7dc.png',
  _e =
    './assets/image32-15b15da0.png',
  ye =
    './assets/image33-86a9ac48.png',
  ve =
    './assets/image34-1fc3cd0f.png',
  fe =
    './assets/image35-bdd3b7bb.png',
  we =
    './assets/image36-d99dcfe7.png',
  je =
    './assets/image37-cd28d437.png',
  Le = F({
    name: 'CommodityDialog',
    props: { openVisible: Boolean, list: Array, index: Number },
    setup(e, { emit: i }) {
      return (
        k(),
        {
          prev: () => {
            i('update', 'prev');
          },
          next: () => {
            i('update', 'next');
          },
          close: () => {
            i('close');
          },
          redirectToProduct: () => {
            if (e.list && e.list[e.index] && e.list[e.index].link) {
              const a = e.list[e.index].link;
              window.open(a, '_blank');
            }
          },
        }
      );
    },
  });
const Ce = { class: 'CommodityDialog' },
  $e = { class: 'dialog_content flex justify-between items-center' },
  Fe = { class: 'left' },
  ke = ['src'],
  ze = { class: 'right' },
  Te = { class: 'date' },
  Ae = { class: 'name' },
  Be = { class: 'price' },
  De = t('span', null, '（税込）', -1),
  Ve = { class: 'intro' },
  Xe = ['innerHTML'],
  Pe = { key: 0, class: 'buy-button-container' },
  Ne = { key: 1 },
  Ee = t('span', null, 'サイズ： ', -1),
  Me = ['innerHTML'],
  He = { key: 2 },
  Se = t('span', null, '素材： ', -1),
  qe = { key: 3, style: { color: '#F87673' } },
  Ue = t('span', null, '購入制限： ', -1),
  We = t('i', { class: 'iconfont icon-guanbi' }, null, -1),
  Re = [We],
  Ie = t('i', { class: 'iconfont icon-xianxingjiantou' }, null, -1),
  Ke = [Ie],
  Oe = t('i', { class: 'iconfont icon-xianxingjiantou' }, null, -1),
  Qe = [Oe];
function Ge(e, i, n, u, l, h) {
  const a = T('a-modal');
  return (
    o(),
    c('div', Ce, [
      D(
        a,
        {
          open: e.openVisible,
          'onUpdate:open': i[4] || (i[4] = s => (e.openVisible = s)),
          centered: '',
          wrapClassName: 'commodity-dialog',
          footer: null,
          closable: !1,
        },
        {
          default: V(() => [
            t('div', $e, [
              t('div', Fe, [
                t('div', null, [
                  t('img', { src: e.list[e.index].image }, null, 8, ke),
                ]),
              ]),
              t('div', ze, [
                t('div', Te, 'FES.' + d(e.list[e.index].date), 1),
                t('div', Ae, d(e.list[e.index].name), 1),
                t('div', Be, [
                  f('￥ ' + d(e.list[e.index].price) + ' ', 1),
                  De,
                ]),
                t('div', Ve, [
                  t('div', { innerHTML: e.list[e.index].intro }, null, 8, Xe),
                ]),
                e.list[e.index].link
                  ? (o(),
                    c('div', Pe, [
                      t(
                        'button',
                        {
                          class: 'buy-button cursor_hover',
                          onClick:
                            i[0] ||
                            (i[0] = (...s) =>
                              e.redirectToProduct && e.redirectToProduct(...s)),
                        },
                        ' 購入へ '
                      ),
                    ]))
                  : _('', !0),
                e.list[e.index].size
                  ? (o(),
                    c('p', Ne, [
                      Ee,
                      t(
                        'div',
                        { innerHTML: e.list[e.index].size },
                        null,
                        8,
                        Me
                      ),
                    ]))
                  : _('', !0),
                e.list[e.index].material
                  ? (o(), c('p', He, [Se, f(d(e.list[e.index].material), 1)]))
                  : _('', !0),
                e.list[e.index].restrict
                  ? (o(), c('p', qe, [Ue, f(d(e.list[e.index].restrict), 1)]))
                  : _('', !0),
              ]),
            ]),
            t(
              'div',
              {
                class: 'close cursor_hover',
                onClick: i[1] || (i[1] = (...s) => e.close && e.close(...s)),
              },
              Re
            ),
            t(
              'div',
              {
                class: 'prev',
                onClick: i[2] || (i[2] = (...s) => e.prev && e.prev(...s)),
              },
              Ke
            ),
            t(
              'div',
              {
                class: 'next',
                onClick: i[3] || (i[3] = (...s) => e.next && e.next(...s)),
              },
              Qe
            ),
          ]),
          _: 1,
        },
        8,
        ['open']
      ),
    ])
  );
}
const Je = z(Le, [['render', Ge]]),
  Ye = F({
    name: 'ProductPage',
    components: { CommodityDialog: Je },
    setup() {
      const e = X(),
        i = k(),
        n = g(0),
        u = g(!1),
        l = g(1),
        h = P([
          { label: 'すべて', type: 'all' },
          { label: '雑貨', type: 'other' },
          { label: 'バッグ', type: 'bag' },
          { label: 'Tシャツ', type: 'shirt' },
        ]),
        a = g([]),
        s = g([
          {
            id: 1,
            type: 'other',
            image: se,
            name: 'セリフステッカーセット',
            price: '800',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 2,
            type: 'other',
            image: q,
            name: 'Blue Archive 3rd Anniversary ブロマイド',
            price: '500',
            intro: '8枚セット<br>事後通販の情報は後日公開予定です。',
            size: 'L判',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 3,
            type: 'other',
            image: ie,
            name: 'ゆる総力戦ボスふせん（9種セット）',
            price: '1,000',
            intro: '事後通販の情報は後日公開予定です。',
            size: '台紙：約W150×H150mm<br>付箋：約W40×H40mm',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 4,
            type: 'other',
            image: ae,
            name: 'アイマスク（全知）',
            price: '1,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 5,
            type: 'other',
            image: re,
            name: 'アイマスク（コハル）',
            price: '2,200',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 6,
            type: 'other',
            image: ne,
            name: '2wayネックピロー（ペロロ・ウェーブキャット）',
            price: '4,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 8,
            type: 'other',
            image: U,
            name: 'ゲヘナ学園 給食部トラック ミニチュアカー',
            price: '5,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 9,
            type: 'other',
            image: oe,
            name: 'ブルアカふぇす！～3きゅーべりーまっち、先生♪～ マグカップ',
            price: '1,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 10,
            type: 'other',
            image: ce,
            name: 'シロコ モチーフマフラー',
            price: '4,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 11,
            type: 'other',
            image: pe,
            name: '封筒型ポーチ',
            price: '2,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 12,
            type: 'other',
            image: W,
            name: 'アリスのロボットキーホルダー',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 13,
            type: 'bag',
            image: de,
            name: 'ゲヘナ公式サコッシュ',
            price: '2,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 14,
            type: 'bag',
            image: le,
            name: 'トリニティ公式サコッシュ',
            price: '2,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 15,
            type: 'bag',
            image: me,
            name: 'アビドス公式サコッシュ',
            price: '2,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 16,
            type: 'bag',
            image: ue,
            name: 'ミレニアム公式サコッシュ※再販',
            price: '2,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 17,
            type: 'bag',
            image: he,
            name: 'エコバッグセット',
            price: '2,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 18,
            type: 'other',
            image: be,
            name: '先生のお仕事セット',
            price: '2,500',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 19,
            type: 'other',
            image: ge,
            name: '給食部プレート',
            price: '2,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 20,
            type: 'other',
            image: _e,
            name: 'アロナ＆プラナのアクリルブロック',
            price: '5,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 21,
            type: 'other',
            image: ye,
            name: 'アロナ＆プラナのモバイルバッテリー',
            price: '4,500',
            intro:
              'Type-C対応<br>事後通販の情報は後日公開予定です。<br><br>※最大出力2.1A、バッテリー容量10000ｍAh',
            size: '約W67×H134×D15mm',
            material: 'ABS 他',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 22,
            type: 'other',
            image: ve,
            name: 'アロナ＆プラナのタペストリー',
            price: '3,300',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'B2',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 23,
            type: 'shirt',
            image: fe,
            name: 'ブルアカふぇす！～3きゅーべりーまっち、先生♪～ Tシャツ（白）',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'M～XL',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 24,
            type: 'shirt',
            image: we,
            name: 'ブルアカふぇす！～3きゅーべりーまっち、先生♪～ Tシャツ（黒）',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'M～XL',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 25,
            type: 'other',
            image: je,
            name: 'ブルアカふぇす！～3きゅーべりーまっち、先生♪～ アクリルプレート',
            price: '2,000',
            intro: '事後通販の情報は後日公開予定です。',
            restrict: 'お1人様1会計あたり3点',
          },
          {
            id: 26,
            type: 'shirt',
            image: R,
            name: 'ブルアカふぇす！学園Ｔシャツ (アビドス)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 27,
            type: 'shirt',
            image: I,
            name: 'ブルアカふぇす！学園Ｔシャツ (ミレニアム)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 28,
            type: 'shirt',
            image: K,
            name: 'ブルアカふぇす！学園Ｔシャツ (トリニティ)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 29,
            type: 'shirt',
            image: O,
            name: 'ブルアカふぇす！学園Ｔシャツ (ゲヘナ)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 30,
            type: 'shirt',
            image: Q,
            name: 'ブルアカふぇす！学園Ｔシャツ (アリウス)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 31,
            type: 'shirt',
            image: G,
            name: 'ブルアカふぇす！学園Ｔシャツ (百鬼夜行)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 32,
            type: 'shirt',
            image: J,
            name: 'ブルアカふぇす！学園Ｔシャツ (山海経)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 33,
            type: 'shirt',
            image: Y,
            name: 'ブルアカふぇす！学園Ｔシャツ (SRT)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 34,
            type: 'shirt',
            image: Z,
            name: 'ブルアカふぇす！学園Ｔシャツ (ヴァルキューレ)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 35,
            type: 'shirt',
            image: x,
            name: 'ブルアカふぇす！学園Ｔシャツ (レッドウインター)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 36,
            type: 'shirt',
            image: ee,
            name: 'ブルアカふぇす！学園Ｔシャツ (連邦生徒会)',
            price: '3,500',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'L～XL',
            material: '本体：綿100% 　リブ部分：綿95%、ポリウレタン5%',
          },
          {
            id: 37,
            type: 'other',
            image: te,
            name: 'カチューシャ(シロコ)',
            price: '1,650',
            intro: '事後通販の情報は後日公開予定です。',
            size: 'W220 × H170mm',
            material: 'ABS、ポリエステル',
          },
        ]);
      N(
        () => e.query,
        (r, y) => {
          var L;
          if (r.id) {
            let b = s.value.filter(p => p.id === Number(r.id));
            h.forEach((p, j) => {
              p.type === b[0].type && (l.value = j + 1);
            }),
              (a.value = s.value.filter(p => p.type === b[0].type)),
              a.value.forEach((p, j) => {
                p.id === Number(r.id) && (n.value = j);
              }),
              (u.value = !0);
            let v = { tab: l.value };
            i.replace({ query: v });
          } else {
            let b = { tab: (r == null ? void 0 : r.tab) || 1 };
            (l.value = Number(b.tab)), i.replace({ query: b });
            let v =
              (L = h[(r == null ? void 0 : r.tab) - 1]) == null
                ? void 0
                : L.type;
            a.value = v === 'all' ? s.value : s.value.filter(p => p.type === v);
          }
        },
        { deep: !1, immediate: !0 }
      );
      const m = (r, y) => {
          i.replace({ query: { tab: y + 1 } });
        },
        w = (r, y) => {
          (u.value = !0), (n.value = y);
        },
        A = r => {
          r === 'prev'
            ? n.value
              ? n.value--
              : (n.value = a.value.length - 1)
            : n.value === a.value.length - 1
              ? (n.value = 0)
              : n.value++;
        },
        B = () => {
          a.value = [...a.value, ...a.value];
        };
      return (
        E(() => {
          document.documentElement.scrollTop = 0;
        }),
        {
          productIndex: n,
          openVisible: u,
          activeKey: l,
          typeList: h,
          showList: a,
          productList: s,
          cutTab: m,
          toDetails: w,
          commodityUpDate: A,
          evenMore: B,
        }
      );
    },
  }),
  Ze =
    './assets/yostar2-f9e56db2.png';
const xe = { class: 'ProductPage' },
  et = H(
    '<div class="product-page_banner"><div class="name">グッズ</div><div class="image"><a href="https://shop.yostar.co.jp/products/list?category_id=MTExODQ2ODc=" target="_blank"><img src="' +
      Ze +
      '"></a></div></div>',
    1
  ),
  tt = { class: 'tabs' },
  st = { class: 'tabs-nav flex items-center' },
  it = ['onClick'],
  at = { class: 'tabs-holder' },
  rt = t('div', { class: 'tabs-role' }, null, -1),
  nt = { class: 'tabs-content container row' },
  ot = ['onClick'],
  ct = { class: 'image' },
  pt = ['src'],
  dt = { class: 'name_price' },
  lt = { class: 'name' },
  mt = { class: 'price flex items-end' },
  ut = t('span', null, '（税込）', -1);
function ht(e, i, n, u, l, h) {
  const a = T('CommodityDialog');
  return (
    o(),
    c('div', xe, [
      et,
      t('div', tt, [
        t('div', st, [
          (o(!0),
          c(
            C,
            null,
            $(
              e.typeList,
              (s, m) => (
                o(),
                c(
                  'div',
                  {
                    class: S(
                      `tabs-tab cursor_hover ${
                        e.activeKey === Number(m + 1) ? 'tabs-tab-active' : ''
                      }`
                    ),
                    key: m,
                    onClick: w => e.cutTab(s, m),
                  },
                  [t('span', null, d(s.label), 1)],
                  10,
                  it
                )
              )
            ),
            128
          )),
        ]),
        t('div', at, [
          rt,
          t('div', nt, [
            (o(!0),
            c(
              C,
              null,
              $(
                e.showList,
                (s, m) => (
                  o(),
                  c(
                    'div',
                    {
                      class: 'tabs_item cursor_hover',
                      key: s.id,
                      onClick: w => e.toDetails(s, m),
                    },
                    [
                      t('div', ct, [t('img', { src: s.image }, null, 8, pt)]),
                      t('div', dt, [
                        t('div', lt, d(s.name), 1),
                        t('div', mt, [f(' ￥ ' + d(s.price) + ' ', 1), ut]),
                      ]),
                    ],
                    8,
                    ot
                  )
                )
              ),
              128
            )),
          ]),
        ]),
      ]),
      e.openVisible
        ? (o(),
          M(
            a,
            {
              key: 0,
              openVisible: e.openVisible,
              list: e.showList,
              index: e.productIndex,
              onUpdate: e.commodityUpDate,
              onClose:
                i[0] ||
                (i[0] = () => {
                  e.openVisible = !1;
                }),
            },
            null,
            8,
            ['openVisible', 'list', 'index', 'onUpdate']
          ))
        : _('', !0),
    ])
  );
}
const _t = z(Ye, [['render', ht]]);
export { _t as default };
