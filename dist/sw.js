if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js');
      let r = Promise.resolve();
      return (
        s[e] ||
          (r = new Promise(async r => {
            if ('document' in self) {
              const s = document.createElement('script');
              (s.src = e), document.head.appendChild(s), (s.onload = r);
            } else importScripts(e), r();
          })),
        r.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then(e => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(r) };
  self.define = (r, t, i) => {
    s[r] ||
      (s[r] = Promise.resolve().then(() => {
        let s = {};
        const n = { uri: location.origin + r.slice(1) };
        return Promise.all(
          t.map(r => {
            switch (r) {
              case 'exports':
                return s;
              case 'module':
                return n;
              default:
                return e(r);
            }
          })
        ).then(e => {
          const r = i(...e);
          return s.default || (s.default = r), s;
        });
      }));
  };
}
define('./sw.js', ['./workbox-a1d34bd3'], function (e) {
  'use strict';
  e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '06504abc.js', revision: 'dd115d54e53dea1aa128f2e99d0b743a' },
        { url: 'index.html', revision: '0c1f38e527f1b14fbb9522958046175e' },
      ],
      {}
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('/index.html'))
    ),
    e.registerRoute('polyfills/*.js', new e.CacheFirst(), 'GET');
});
//# sourceMappingURL=sw.js.map
