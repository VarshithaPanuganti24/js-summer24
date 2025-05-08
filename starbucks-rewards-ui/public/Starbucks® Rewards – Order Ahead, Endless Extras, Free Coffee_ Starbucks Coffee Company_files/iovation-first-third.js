/*
 Copyright(c) 2024 TransUnion LLC. All Rights Reserved. 80808bae-d4c3-47ac-9929-5d77264d823c
*/
(function () {
  (function D() {
    function x(a, e) {
      var f = {},
        d;
      for (d = a.length - 1; -1 < d; d--)
        0 < d
          ? (f[d] = (function () {
              var k = d;
              return function () {
                return y(a[k], f[k + 1], e);
              };
            })())
          : y(a[d], f[d + 1], e);
    }
    function y(a, e, f) {
      var d = document.createElement('script'),
        k = z((c[f] && c[f].staticVer && c[f].staticVer + '/') || a[1]);
      a[0] = a[0].replace('##version##', k);
      var h = a[0].split('?')[0].split('/'),
        q = h[h.length - 1].split('.')[0];
      w.test(a[1]) &&
        k !== a[1] &&
        g('loader: Overriding configured version with staticVer.');
      d.setAttribute('src', a[0]);
      d && d.addEventListener
        ? d.addEventListener('error', function () {
            b[f + '_' + q + '_load_failure'] = 'true';
          })
        : d.attachEvent &&
          d.attachEvent('onerror', function () {
            b[f + '_' + q + '_load_failure'] = 'true';
          });
      e && (d.onload = e);
      document.getElementsByTagName('head')[0].appendChild(d);
    }
    function g(a) {
      if ('function' === typeof c.trace_handler)
        try {
          var e = c.trace_handler(a);
        } catch (f) {
          e = !1;
        }
      return e;
    }
    function l(a, e) {
      var f = null !== a && void 0 !== a;
      return !f ||
        ('1' !== a.toString() && 'true' !== a.toString().toLowerCase())
        ? !f || ('0' !== a.toString() && 'false' !== a.toString().toLowerCase())
          ? 'boolean' === typeof e
            ? e
            : !1
          : !1
        : !0;
    }
    function z(a) {
      g('********** version before replace: ' + a + ' **********');
      g('localNamespace[ "url_dots_to_dashes" ]: ' + b.url_dots_to_dashes);
      g('numericVersionPattern.test( output ): ' + w.test(a));
      b.url_dots_to_dashes && w.test(a) && (a = a.replace(/\./g, '-'));
      g('version after replace: ' + a);
      return a;
    }
    var p = window,
      A = p.io_global_object_name || 'IGLOO',
      c = (p[A] = p[A] || {}),
      b = (c.loader = c.loader || {}),
      r = [],
      t = [],
      w = /^[0-9]{1,3}(\.[0-9]{1,3}){2}\/$/;
    if (b.loaderMain)
      return (
        g(
          "loader: Loader script has already run, try reducing the number of places it's being included."
        ),
        !1
      );
    b.loaderMain = D;
    b.loaderVer = '5.8.1';
    (function () {
      for (
        var a = l(b.tp, !0),
          e = l(b.fp_static, !0),
          f = l(b.fp_dyn, !0),
          d = l(b.enable_legacy_compatibility),
          k = l(b.tp_split),
          h = b.tp_host;
        h && '/' === h.charAt(h.length - 1);

      )
        h = h.slice(0, -1);
      var q = h || 'https://mpsnare.iesnare.com',
        u = void 0 !== b.uri_hook ? b.uri_hook + '/' : '/iojs/',
        B = b.subkey ? p.encodeURIComponent(b.subkey) + '/' : '';
      h = b.tp_resource || 'wdp.js';
      var m = b.tp_host ? '&tp_host=' + p.encodeURIComponent(b.tp_host) : '',
        v = b.fp_static_override_uri,
        E = v ? '&fp_static_uri=' + p.encodeURIComponent(v) : '',
        C = l(b.enable_ip, !0),
        n = (b.version || 'versionOrAliasIsRequired') + '/';
      b.tp_host = q;
      m =
        '?loaderVer=' +
        b.loaderVer +
        '&compat=' +
        d +
        '&tp=' +
        a +
        '&tp_split=' +
        k +
        m +
        '&fp_static=' +
        e +
        '&fp_dyn=' +
        f +
        E +
        (C ? '' : '&enable_ip=' + C);
      a ||
        e ||
        g(
          'loader: Not currently configured to load fp_static or tp script(s).'
        );
      c.fp &&
        c.fp.staticVer &&
        c.fp.staticVer + '/' !== n &&
        ((n = z(c.fp.staticVer + '/')),
        g(
          'loader: Configured version replaced with that from pre-loaded static script.'
        ));
      e || (c.fp && c.fp.staticMain)
        ? ((u = (u + '##version##' + B).replace(/\/\//g, '/')),
          e &&
            (c.fp && c.fp.staticMain
              ? d &&
                !c.fp.preCompatMain &&
                g(
                  'loader: enable_legacy_compatibility on, but included static does not have the compat wrapper.'
                )
              : v
                ? r.push([v, ''])
                : r.push([u + 'static_wdp.js' + m, n])),
          !f || (c.fp && c.fp.dynMain)
            ? c.fp &&
              c.fp.dynMain &&
              g(
                "loader: First party dynamic script has already been loaded, disable fp_dyn or make sure you're not manually including the dynamic file separately."
              )
            : r.push([u + 'dyn_wdp.js' + m, n]))
        : l(b.fp_dyn) &&
          g(
            'loader: Invalid Config, first party dynamic script set to load without static.'
          );
      a &&
        (c.io && c.io.staticMain
          ? g('loader: Third party script has already been loaded.')
          : ((a = q + '/##version##' + B),
            k
              ? (t.push([a + 'static_wdp.js' + m, n]),
                t.push([a + 'dyn_wdp.js' + m, n]),
                b.tp_resource &&
                  g(
                    'loader: Invalid Config: both tp_resource and tp_split set. Ignoring tp_resource.'
                  ))
              : t.push([a + h + m, n])));
    })();
    x(r, 'fp');
    x(t, 'io');
  })();
}).call(this);
