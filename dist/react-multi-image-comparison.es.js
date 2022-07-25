import fr, { useRef as Me, useState as ce, useEffect as Re } from "react";
var re = { exports: {} }, we = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function kr() {
  if (Ze)
    return M;
  Ze = 1;
  var o = typeof Symbol == "function" && Symbol.for, W = o ? Symbol.for("react.element") : 60103, O = o ? Symbol.for("react.portal") : 60106, v = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, u = o ? Symbol.for("react.profiler") : 60114, C = o ? Symbol.for("react.provider") : 60109, c = o ? Symbol.for("react.context") : 60110, d = o ? Symbol.for("react.async_mode") : 60111, l = o ? Symbol.for("react.concurrent_mode") : 60111, f = o ? Symbol.for("react.forward_ref") : 60112, p = o ? Symbol.for("react.suspense") : 60113, j = o ? Symbol.for("react.suspense_list") : 60120, L = o ? Symbol.for("react.memo") : 60115, z = o ? Symbol.for("react.lazy") : 60116, Y = o ? Symbol.for("react.block") : 60121, b = o ? Symbol.for("react.fundamental") : 60117, R = o ? Symbol.for("react.responder") : 60118, E = o ? Symbol.for("react.scope") : 60119;
  function N(t) {
    if (typeof t == "object" && t !== null) {
      var U = t.$$typeof;
      switch (U) {
        case W:
          switch (t = t.type, t) {
            case d:
            case l:
            case v:
            case u:
            case S:
            case p:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case c:
                case f:
                case z:
                case L:
                case C:
                  return t;
                default:
                  return U;
              }
          }
        case O:
          return U;
      }
    }
  }
  function $(t) {
    return N(t) === l;
  }
  return M.AsyncMode = d, M.ConcurrentMode = l, M.ContextConsumer = c, M.ContextProvider = C, M.Element = W, M.ForwardRef = f, M.Fragment = v, M.Lazy = z, M.Memo = L, M.Portal = O, M.Profiler = u, M.StrictMode = S, M.Suspense = p, M.isAsyncMode = function(t) {
    return $(t) || N(t) === d;
  }, M.isConcurrentMode = $, M.isContextConsumer = function(t) {
    return N(t) === c;
  }, M.isContextProvider = function(t) {
    return N(t) === C;
  }, M.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === W;
  }, M.isForwardRef = function(t) {
    return N(t) === f;
  }, M.isFragment = function(t) {
    return N(t) === v;
  }, M.isLazy = function(t) {
    return N(t) === z;
  }, M.isMemo = function(t) {
    return N(t) === L;
  }, M.isPortal = function(t) {
    return N(t) === O;
  }, M.isProfiler = function(t) {
    return N(t) === u;
  }, M.isStrictMode = function(t) {
    return N(t) === S;
  }, M.isSuspense = function(t) {
    return N(t) === p;
  }, M.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === v || t === l || t === u || t === S || t === p || t === j || typeof t == "object" && t !== null && (t.$$typeof === z || t.$$typeof === L || t.$$typeof === C || t.$$typeof === c || t.$$typeof === f || t.$$typeof === b || t.$$typeof === R || t.$$typeof === E || t.$$typeof === Y);
  }, M.typeOf = N, M;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Mr() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, W = o ? Symbol.for("react.element") : 60103, O = o ? Symbol.for("react.portal") : 60106, v = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, u = o ? Symbol.for("react.profiler") : 60114, C = o ? Symbol.for("react.provider") : 60109, c = o ? Symbol.for("react.context") : 60110, d = o ? Symbol.for("react.async_mode") : 60111, l = o ? Symbol.for("react.concurrent_mode") : 60111, f = o ? Symbol.for("react.forward_ref") : 60112, p = o ? Symbol.for("react.suspense") : 60113, j = o ? Symbol.for("react.suspense_list") : 60120, L = o ? Symbol.for("react.memo") : 60115, z = o ? Symbol.for("react.lazy") : 60116, Y = o ? Symbol.for("react.block") : 60121, b = o ? Symbol.for("react.fundamental") : 60117, R = o ? Symbol.for("react.responder") : 60118, E = o ? Symbol.for("react.scope") : 60119;
    function N(i) {
      return typeof i == "string" || typeof i == "function" || i === v || i === l || i === u || i === S || i === p || i === j || typeof i == "object" && i !== null && (i.$$typeof === z || i.$$typeof === L || i.$$typeof === C || i.$$typeof === c || i.$$typeof === f || i.$$typeof === b || i.$$typeof === R || i.$$typeof === E || i.$$typeof === Y);
    }
    function $(i) {
      if (typeof i == "object" && i !== null) {
        var Q = i.$$typeof;
        switch (Q) {
          case W:
            var ve = i.type;
            switch (ve) {
              case d:
              case l:
              case v:
              case u:
              case S:
              case p:
                return ve;
              default:
                var ue = ve && ve.$$typeof;
                switch (ue) {
                  case c:
                  case f:
                  case z:
                  case L:
                  case C:
                    return ue;
                  default:
                    return Q;
                }
            }
          case O:
            return Q;
        }
      }
    }
    var t = d, U = l, te = c, J = C, ie = W, be = f, fe = v, le = z, K = L, G = O, oe = u, Z = S, ne = p, se = !1;
    function de(i) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(i) || $(i) === d;
    }
    function n(i) {
      return $(i) === l;
    }
    function s(i) {
      return $(i) === c;
    }
    function _(i) {
      return $(i) === C;
    }
    function T(i) {
      return typeof i == "object" && i !== null && i.$$typeof === W;
    }
    function h(i) {
      return $(i) === f;
    }
    function A(i) {
      return $(i) === v;
    }
    function m(i) {
      return $(i) === z;
    }
    function g(i) {
      return $(i) === L;
    }
    function P(i) {
      return $(i) === O;
    }
    function D(i) {
      return $(i) === u;
    }
    function x(i) {
      return $(i) === S;
    }
    function H(i) {
      return $(i) === p;
    }
    F.AsyncMode = t, F.ConcurrentMode = U, F.ContextConsumer = te, F.ContextProvider = J, F.Element = ie, F.ForwardRef = be, F.Fragment = fe, F.Lazy = le, F.Memo = K, F.Portal = G, F.Profiler = oe, F.StrictMode = Z, F.Suspense = ne, F.isAsyncMode = de, F.isConcurrentMode = n, F.isContextConsumer = s, F.isContextProvider = _, F.isElement = T, F.isForwardRef = h, F.isFragment = A, F.isLazy = m, F.isMemo = g, F.isPortal = P, F.isProfiler = D, F.isStrictMode = x, F.isSuspense = H, F.isValidElementType = N, F.typeOf = $;
  }()), F;
}
var er;
function lr() {
  return er || (er = 1, function(o) {
    process.env.NODE_ENV === "production" ? o.exports = kr() : o.exports = Mr();
  }(we)), we.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var je, rr;
function Fr() {
  if (rr)
    return je;
  rr = 1;
  var o = Object.getOwnPropertySymbols, W = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
  function v(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function S() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var C = {}, c = 0; c < 10; c++)
        C["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(C).map(function(f) {
        return C[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return je = S() ? Object.assign : function(u, C) {
    for (var c, d = v(u), l, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var p in c)
        W.call(c, p) && (d[p] = c[p]);
      if (o) {
        l = o(c);
        for (var j = 0; j < l.length; j++)
          O.call(c, l[j]) && (d[l[j]] = c[l[j]]);
      }
    }
    return d;
  }, je;
}
var Ae, tr;
function Fe() {
  if (tr)
    return Ae;
  tr = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = o, Ae;
}
var Ie, nr;
function dr() {
  return nr || (nr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var $e, or;
function Lr() {
  if (or)
    return $e;
  or = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var W = Fe(), O = {}, v = dr();
    o = function(u) {
      var C = "Warning: " + u;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function S(u, C, c, d, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in u)
        if (v(u, f)) {
          var p;
          try {
            if (typeof u[f] != "function") {
              var j = Error(
                (d || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw j.name = "Invariant Violation", j;
            }
            p = u[f](C, f, d, c, null, W);
          } catch (z) {
            p = z;
          }
          if (p && !(p instanceof Error) && o(
            (d || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in O)) {
            O[p.message] = !0;
            var L = l ? l() : "";
            o(
              "Failed " + c + " type: " + p.message + (L != null ? L : "")
            );
          }
        }
    }
  }
  return S.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (O = {});
  }, $e = S, $e;
}
var De, ar;
function Wr() {
  if (ar)
    return De;
  ar = 1;
  var o = lr(), W = Fr(), O = Fe(), v = dr(), S = Lr(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function C() {
    return null;
  }
  return De = function(c, d) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(n) {
      var s = n && (l && n[l] || n[f]);
      if (typeof s == "function")
        return s;
    }
    var j = "<<anonymous>>", L = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: E(),
      arrayOf: N,
      element: $(),
      elementType: t(),
      instanceOf: U,
      node: be(),
      objectOf: J,
      oneOf: te,
      oneOfType: ie,
      shape: le,
      exact: K
    };
    function z(n, s) {
      return n === s ? n !== 0 || 1 / n === 1 / s : n !== n && s !== s;
    }
    function Y(n, s) {
      this.message = n, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    Y.prototype = Error.prototype;
    function b(n) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, _ = 0;
      function T(A, m, g, P, D, x, H) {
        if (P = P || j, x = x || g, H !== O) {
          if (d) {
            var i = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw i.name = "Invariant Violation", i;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = P + ":" + g;
            !s[Q] && _ < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + x + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[Q] = !0, _++);
          }
        }
        return m[g] == null ? A ? m[g] === null ? new Y("The " + D + " `" + x + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new Y("The " + D + " `" + x + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : n(m, g, P, D, x);
      }
      var h = T.bind(null, !1);
      return h.isRequired = T.bind(null, !0), h;
    }
    function R(n) {
      function s(_, T, h, A, m, g) {
        var P = _[T], D = Z(P);
        if (D !== n) {
          var x = ne(P);
          return new Y(
            "Invalid " + A + " `" + m + "` of type " + ("`" + x + "` supplied to `" + h + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return b(s);
    }
    function E() {
      return b(C);
    }
    function N(n) {
      function s(_, T, h, A, m) {
        if (typeof n != "function")
          return new Y("Property `" + m + "` of component `" + h + "` has invalid PropType notation inside arrayOf.");
        var g = _[T];
        if (!Array.isArray(g)) {
          var P = Z(g);
          return new Y("Invalid " + A + " `" + m + "` of type " + ("`" + P + "` supplied to `" + h + "`, expected an array."));
        }
        for (var D = 0; D < g.length; D++) {
          var x = n(g, D, h, A, m + "[" + D + "]", O);
          if (x instanceof Error)
            return x;
        }
        return null;
      }
      return b(s);
    }
    function $() {
      function n(s, _, T, h, A) {
        var m = s[_];
        if (!c(m)) {
          var g = Z(m);
          return new Y("Invalid " + h + " `" + A + "` of type " + ("`" + g + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(n);
    }
    function t() {
      function n(s, _, T, h, A) {
        var m = s[_];
        if (!o.isValidElementType(m)) {
          var g = Z(m);
          return new Y("Invalid " + h + " `" + A + "` of type " + ("`" + g + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(n);
    }
    function U(n) {
      function s(_, T, h, A, m) {
        if (!(_[T] instanceof n)) {
          var g = n.name || j, P = de(_[T]);
          return new Y("Invalid " + A + " `" + m + "` of type " + ("`" + P + "` supplied to `" + h + "`, expected ") + ("instance of `" + g + "`."));
        }
        return null;
      }
      return b(s);
    }
    function te(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), C;
      function s(_, T, h, A, m) {
        for (var g = _[T], P = 0; P < n.length; P++)
          if (z(g, n[P]))
            return null;
        var D = JSON.stringify(n, function(H, i) {
          var Q = ne(i);
          return Q === "symbol" ? String(i) : i;
        });
        return new Y("Invalid " + A + " `" + m + "` of value `" + String(g) + "` " + ("supplied to `" + h + "`, expected one of " + D + "."));
      }
      return b(s);
    }
    function J(n) {
      function s(_, T, h, A, m) {
        if (typeof n != "function")
          return new Y("Property `" + m + "` of component `" + h + "` has invalid PropType notation inside objectOf.");
        var g = _[T], P = Z(g);
        if (P !== "object")
          return new Y("Invalid " + A + " `" + m + "` of type " + ("`" + P + "` supplied to `" + h + "`, expected an object."));
        for (var D in g)
          if (v(g, D)) {
            var x = n(g, D, h, A, m + "." + D, O);
            if (x instanceof Error)
              return x;
          }
        return null;
      }
      return b(s);
    }
    function ie(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), C;
      for (var s = 0; s < n.length; s++) {
        var _ = n[s];
        if (typeof _ != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(_) + " at index " + s + "."
          ), C;
      }
      function T(h, A, m, g, P) {
        for (var D = [], x = 0; x < n.length; x++) {
          var H = n[x], i = H(h, A, m, g, P, O);
          if (i == null)
            return null;
          i.data && v(i.data, "expectedType") && D.push(i.data.expectedType);
        }
        var Q = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new Y("Invalid " + g + " `" + P + "` supplied to " + ("`" + m + "`" + Q + "."));
      }
      return b(T);
    }
    function be() {
      function n(s, _, T, h, A) {
        return G(s[_]) ? null : new Y("Invalid " + h + " `" + A + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return b(n);
    }
    function fe(n, s, _, T, h) {
      return new Y(
        (n || "React class") + ": " + s + " type `" + _ + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + h + "`."
      );
    }
    function le(n) {
      function s(_, T, h, A, m) {
        var g = _[T], P = Z(g);
        if (P !== "object")
          return new Y("Invalid " + A + " `" + m + "` of type `" + P + "` " + ("supplied to `" + h + "`, expected `object`."));
        for (var D in n) {
          var x = n[D];
          if (typeof x != "function")
            return fe(h, A, m, D, ne(x));
          var H = x(g, D, h, A, m + "." + D, O);
          if (H)
            return H;
        }
        return null;
      }
      return b(s);
    }
    function K(n) {
      function s(_, T, h, A, m) {
        var g = _[T], P = Z(g);
        if (P !== "object")
          return new Y("Invalid " + A + " `" + m + "` of type `" + P + "` " + ("supplied to `" + h + "`, expected `object`."));
        var D = W({}, _[T], n);
        for (var x in D) {
          var H = n[x];
          if (v(n, x) && typeof H != "function")
            return fe(h, A, m, x, ne(H));
          if (!H)
            return new Y(
              "Invalid " + A + " `" + m + "` key `" + x + "` supplied to `" + h + "`.\nBad object: " + JSON.stringify(_[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var i = H(g, x, h, A, m + "." + x, O);
          if (i)
            return i;
        }
        return null;
      }
      return b(s);
    }
    function G(n) {
      switch (typeof n) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !n;
        case "object":
          if (Array.isArray(n))
            return n.every(G);
          if (n === null || c(n))
            return !0;
          var s = p(n);
          if (s) {
            var _ = s.call(n), T;
            if (s !== n.entries) {
              for (; !(T = _.next()).done; )
                if (!G(T.value))
                  return !1;
            } else
              for (; !(T = _.next()).done; ) {
                var h = T.value;
                if (h && !G(h[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(n, s) {
      return n === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function Z(n) {
      var s = typeof n;
      return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : oe(s, n) ? "symbol" : s;
    }
    function ne(n) {
      if (typeof n > "u" || n === null)
        return "" + n;
      var s = Z(n);
      if (s === "object") {
        if (n instanceof Date)
          return "date";
        if (n instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function se(n) {
      var s = ne(n);
      switch (s) {
        case "array":
        case "object":
          return "an " + s;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + s;
        default:
          return s;
      }
    }
    function de(n) {
      return !n.constructor || !n.constructor.name ? j : n.constructor.name;
    }
    return L.checkPropTypes = S, L.resetWarningCache = S.resetWarningCache, L.PropTypes = L, L;
  }, De;
}
var ke, ir;
function Yr() {
  if (ir)
    return ke;
  ir = 1;
  var o = Fe();
  function W() {
  }
  function O() {
  }
  return O.resetWarningCache = W, ke = function() {
    function v(C, c, d, l, f, p) {
      if (p !== o) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    v.isRequired = v;
    function S() {
      return v;
    }
    var u = {
      array: v,
      bigint: v,
      bool: v,
      func: v,
      number: v,
      object: v,
      string: v,
      symbol: v,
      any: v,
      arrayOf: S,
      element: v,
      elementType: v,
      instanceOf: S,
      node: v,
      objectOf: S,
      oneOf: S,
      oneOfType: S,
      shape: S,
      exact: S,
      checkPropTypes: O,
      resetWarningCache: W
    };
    return u.PropTypes = u, u;
  }, ke;
}
if (process.env.NODE_ENV !== "production") {
  var qr = lr(), Ur = !0;
  re.exports = Wr()(qr.isElement, Ur);
} else
  re.exports = Yr()();
var Le = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Nr() {
  if (sr)
    return Ee;
  sr = 1;
  var o = fr, W = Symbol.for("react.element"), O = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, S = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(c, d, l) {
    var f, p = {}, j = null, L = null;
    l !== void 0 && (j = "" + l), d.key !== void 0 && (j = "" + d.key), d.ref !== void 0 && (L = d.ref);
    for (f in d)
      v.call(d, f) && !u.hasOwnProperty(f) && (p[f] = d[f]);
    if (c && c.defaultProps)
      for (f in d = c.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: W, type: c, key: j, ref: L, props: p, _owner: S.current };
  }
  return Ee.Fragment = O, Ee.jsx = C, Ee.jsxs = C, Ee;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function zr() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var o = fr, W = Symbol.for("react.element"), O = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z = Symbol.iterator, Y = "@@iterator";
    function b(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var R = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), y = 1; y < r; y++)
          a[y - 1] = arguments[y];
        N("error", e, a);
      }
    }
    function N(e, r, a) {
      {
        var y = R.ReactDebugCurrentFrame, k = y.getStackAddendum();
        k !== "" && (r += "%s", a = a.concat([k]));
        var q = a.map(function(I) {
          return String(I);
        });
        q.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, q);
      }
    }
    var $ = !1, t = !1, U = !1, te = !1, J = !1, ie;
    ie = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === u || J || e === S || e === l || e === f || te || e === L || $ || t || U || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === p || e.$$typeof === C || e.$$typeof === c || e.$$typeof === d || e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function fe(e, r, a) {
      var y = e.displayName;
      if (y)
        return y;
      var k = r.displayName || r.name || "";
      return k !== "" ? a + "(" + k + ")" : a;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case O:
          return "Portal";
        case u:
          return "Profiler";
        case S:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return le(r) + ".Consumer";
          case C:
            var a = e;
            return le(a._context) + ".Provider";
          case d:
            return fe(e, e.render, "ForwardRef");
          case p:
            var y = e.displayName || null;
            return y !== null ? y : K(e.type) || "Memo";
          case j: {
            var k = e, q = k._payload, I = k._init;
            try {
              return K(I(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, oe = 0, Z, ne, se, de, n, s, _;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function h() {
      {
        if (oe === 0) {
          Z = console.log, ne = console.info, se = console.warn, de = console.error, n = console.group, s = console.groupCollapsed, _ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        oe++;
      }
    }
    function A() {
      {
        if (oe--, oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: Z
            }),
            info: G({}, e, {
              value: ne
            }),
            warn: G({}, e, {
              value: se
            }),
            error: G({}, e, {
              value: de
            }),
            group: G({}, e, {
              value: n
            }),
            groupCollapsed: G({}, e, {
              value: s
            }),
            groupEnd: G({}, e, {
              value: _
            })
          });
        }
        oe < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = R.ReactCurrentDispatcher, g;
    function P(e, r, a) {
      {
        if (g === void 0)
          try {
            throw Error();
          } catch (k) {
            var y = k.stack.trim().match(/\n( *(at )?)/);
            g = y && y[1] || "";
          }
        return `
` + g + e;
      }
    }
    var D = !1, x;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      x = new H();
    }
    function i(e, r) {
      if (!e || D)
        return "";
      {
        var a = x.get(e);
        if (a !== void 0)
          return a;
      }
      var y;
      D = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = m.current, m.current = null, h();
      try {
        if (r) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ae) {
              y = ae;
            }
            Reflect.construct(e, [], I);
          } else {
            try {
              I.call();
            } catch (ae) {
              y = ae;
            }
            e.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            y = ae;
          }
          e();
        }
      } catch (ae) {
        if (ae && y && typeof ae.stack == "string") {
          for (var w = ae.stack.split(`
`), X = y.stack.split(`
`), V = w.length - 1, B = X.length - 1; V >= 1 && B >= 0 && w[V] !== X[B]; )
            B--;
          for (; V >= 1 && B >= 0; V--, B--)
            if (w[V] !== X[B]) {
              if (V !== 1 || B !== 1)
                do
                  if (V--, B--, B < 0 || w[V] !== X[B]) {
                    var ee = `
` + w[V].replace(" at new ", " at ");
                    return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), typeof e == "function" && x.set(e, ee), ee;
                  }
                while (V >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        D = !1, m.current = q, A(), Error.prepareStackTrace = k;
      }
      var ye = e ? e.displayName || e.name : "", Ke = ye ? P(ye) : "";
      return typeof e == "function" && x.set(e, Ke), Ke;
    }
    function Q(e, r, a) {
      return i(e, !1);
    }
    function ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return i(e, ve(e));
      if (typeof e == "string")
        return P(e);
      switch (e) {
        case l:
          return P("Suspense");
        case f:
          return P("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Q(e.render);
          case p:
            return ue(e.type, r, a);
          case j: {
            var y = e, k = y._payload, q = y._init;
            try {
              return ue(q(k), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, We = {}, Ye = R.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var r = e._owner, a = ue(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(a);
      } else
        Ye.setExtraStackFrame(null);
    }
    function yr(e, r, a, y, k) {
      {
        var q = Function.call.bind(Te);
        for (var I in e)
          if (q(e, I)) {
            var w = void 0;
            try {
              if (typeof e[I] != "function") {
                var X = Error((y || "React class") + ": " + a + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              w = e[I](r, I, y, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              w = V;
            }
            w && !(w instanceof Error) && (_e(k), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", a, I, typeof w), _e(null)), w instanceof Error && !(w.message in We) && (We[w.message] = !0, _e(k), E("Failed %s type: %s", a, w.message), _e(null));
          }
      }
    }
    var hr = Array.isArray;
    function Oe(e) {
      return hr(e);
    }
    function br(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function mr(e) {
      try {
        return qe(e), !1;
      } catch {
        return !0;
      }
    }
    function qe(e) {
      return "" + e;
    }
    function Ue(e) {
      if (mr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), qe(e);
    }
    var me = R.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, ze, Se;
    Se = {};
    function gr(e) {
      if (Te.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Rr(e) {
      if (Te.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Tr(e, r) {
      if (typeof e.ref == "string" && me.current && r && me.current.stateNode !== r) {
        var a = K(me.current.type);
        Se[a] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(me.current.type), e.ref), Se[a] = !0);
      }
    }
    function _r(e, r) {
      {
        var a = function() {
          Ne || (Ne = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Or(e, r) {
      {
        var a = function() {
          ze || (ze = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Sr = function(e, r, a, y, k, q, I) {
      var w = {
        $$typeof: W,
        type: e,
        key: r,
        ref: a,
        props: I,
        _owner: q
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Pr(e, r, a, y, k) {
      {
        var q, I = {}, w = null, X = null;
        a !== void 0 && (Ue(a), w = "" + a), Rr(r) && (Ue(r.key), w = "" + r.key), gr(r) && (X = r.ref, Tr(r, k));
        for (q in r)
          Te.call(r, q) && !Er.hasOwnProperty(q) && (I[q] = r[q]);
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (q in V)
            I[q] === void 0 && (I[q] = V[q]);
        }
        if (w || X) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && _r(I, B), X && Or(I, B);
        }
        return Sr(e, w, X, k, y, me.current, I);
      }
    }
    var Pe = R.ReactCurrentOwner, Ve = R.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, a = ue(e.type, e._source, r ? r.type : null);
        Ve.setExtraStackFrame(a);
      } else
        Ve.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === W;
    }
    function Be() {
      {
        if (Pe.current) {
          var e = K(Pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var He = {};
    function Cr(e) {
      {
        var r = Be();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Cr(r);
        if (He[a])
          return;
        He[a] = !0;
        var y = "";
        e && e._owner && e._owner !== Pe.current && (y = " It was passed a child from " + K(e._owner.type) + "."), pe(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, y), pe(null);
      }
    }
    function Xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var a = 0; a < e.length; a++) {
            var y = e[a];
            Ce(y) && Je(y, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var k = b(e);
          if (typeof k == "function" && k !== e.entries)
            for (var q = k.call(e), I; !(I = q.next()).done; )
              Ce(I.value) && Je(I.value, r);
        }
      }
    }
    function wr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === p))
          a = r.propTypes;
        else
          return;
        if (a) {
          var y = K(r);
          yr(a, e.props, "prop", y, e);
        } else if (r.PropTypes !== void 0 && !xe) {
          xe = !0;
          var k = K(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var y = r[a];
          if (y !== "children" && y !== "key") {
            pe(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    function Ge(e, r, a, y, k, q) {
      {
        var I = be(e);
        if (!I) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = xr(k);
          X ? w += X : w += Be();
          var V;
          e === null ? V = "null" : Oe(e) ? V = "array" : e !== void 0 && e.$$typeof === W ? (V = "<" + (K(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : V = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, w);
        }
        var B = Pr(e, r, a, k, q);
        if (B == null)
          return B;
        if (I) {
          var ee = r.children;
          if (ee !== void 0)
            if (y)
              if (Oe(ee)) {
                for (var ye = 0; ye < ee.length; ye++)
                  Xe(ee[ye], e);
                Object.freeze && Object.freeze(ee);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(ee, e);
        }
        return e === v ? jr(B) : wr(B), B;
      }
    }
    function Ar(e, r, a) {
      return Ge(e, r, a, !0);
    }
    function Ir(e, r, a) {
      return Ge(e, r, a, !1);
    }
    var $r = Ir, Dr = Ar;
    ge.Fragment = v, ge.jsx = $r, ge.jsxs = Dr;
  }()), ge;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = Nr() : o.exports = zr();
})(Le);
const he = Le.exports.jsx, cr = Le.exports.jsxs;
function vr({
  totalWidth: o,
  totalHeight: W,
  totalImages: O,
  zIndex: v,
  listWidths: S,
  setListWidths: u,
  updateDesc: C
}) {
  const c = Array.from({
    length: O - 1
  }, ($, t) => o / O * (t + 1) - 15), d = Me([]), [l, f] = ce(null), [p, j] = ce(c), [L, z] = ce(Array(O - 1).fill(0));
  Re(() => (document.addEventListener("pointermove", E), document.addEventListener("pointerup", b), document.addEventListener("touchend", b), document.addEventListener("touchmove", E), () => {
    document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", b), document.removeEventListener("touchend", b), document.removeEventListener("touchmove", E);
  }));
  const Y = ($, t) => {
    f(t), z(Object.assign([], L, {
      [t]: $.pageX - d.current[t].offsetLeft
    }));
  }, b = ($) => {
    f(null);
  }, R = ($, t) => {
    f(t), z(Object.assign([], L, {
      [t]: $.pageX - d.current[t].offsetLeft
    }));
  }, E = ($) => {
    if (l !== null) {
      let t = d.current[l];
      const U = Math.min(Math.max($.touches ? $.touches[0].clientX : $.clientX - L[l], 0 - t.clientWidth / 2), o - t.clientWidth / 2);
      u(Object.assign([], S, {
        [l]: U + t.clientWidth / 2
      })), j(Object.assign([], p, {
        [l]: U
      })), p.forEach((te, J) => {
        l > J && t.offsetLeft <= te && (j(Object.assign([], p, {
          [J]: U - 3
        })), u(Object.assign([], S, {
          [J]: U + 15
        }))), l < J && t.offsetLeft >= te && (j(Object.assign([], p, {
          [J]: U + 3
        })), u(Object.assign([], S, {
          [J]: U + 15
        })));
      }), C(p);
    }
  }, N = ($) => {
    const t = 30 / W * 100, te = 0.5 * t, J = t + te, ie = (O - 1) * J;
    return 50 + ie / 2 - $ * J;
  };
  return Re(() => {
    j(c);
  }, [o, W]), /* @__PURE__ */ he("div", {
    className: "handles",
    children: Array(O - 1).fill(0).map(($, t) => /* @__PURE__ */ he("div", {
      ref: (U) => d.current[t] = U,
      onPointerDown: (U) => Y(U, t),
      onTouchStart: (U) => R(U, t),
      className: "handle",
      style: {
        zIndex: O - 2 * t + v,
        left: `${p[t]}px`,
        top: `${N(t)}%`
      }
    }, t))
  });
}
vr.propTypes = {
  totalWidth: re.exports.number.isRequired,
  totalHeight: re.exports.number.isRequired,
  totalImages: re.exports.number.isRequired,
  zIndex: re.exports.number.isRequired,
  listWidths: re.exports.array.isRequired,
  setListWidths: re.exports.func.isRequired,
  updateDesc: re.exports.func
};
function pr({
  imagePaths: o,
  imageDescs: W,
  zIndex: O
}) {
  const v = Me([]), S = Me(null), [u, C] = ce(Array(o.length).fill(0)), [c, d] = ce([]), [l, f] = ce(0), [p, j] = ce(0), L = Array.from({
    length: o.length
  }, (b, R) => l / o.length * (R + 1)), z = (b) => {
    C(u.map((R, E) => Y(E, b)));
  }, Y = (b, R) => {
    const E = v.current[b].clientWidth;
    return b === 0 ? c[b] / 2 - E / 2 : o.length - 1 === b ? (c[b] + R[b - 1]) / 2 - E / 2 : (R[b - 1] + R[b]) / 2 - E / 4;
  };
  return Re(() => {
    const b = S.current, R = new ResizeObserver(([E, ...N]) => {
      f(E.target.getBoundingClientRect().width), j(E.target.getBoundingClientRect().height);
    });
    return R.observe(b), () => R.disconnect();
  }, []), Re(() => {
    let b = u.map((R, E) => l / o.length * (2 * E + 1) * 0.5 - v.current[E].clientWidth / 2);
    C(b);
  }, [l]), Re(() => {
    d(L);
  }, [l]), /* @__PURE__ */ cr("div", {
    style: {
      position: "relative"
    },
    children: [/* @__PURE__ */ he("ul", {
      className: "rmic",
      ref: S,
      children: o.map((b, R) => /* @__PURE__ */ cr("li", {
        style: {
          zIndex: o.length - (2 * R + 1) + O,
          width: `${c[R]}px`
        },
        children: [/* @__PURE__ */ he("img", {
          src: b,
          alt: "Alt",
          style: {
            width: l
          }
        }), W.length > 0 && /* @__PURE__ */ he("span", {
          ref: (E) => v.current[R] = E,
          style: {
            left: `${u[R]}px`
          },
          children: W[R]
        })]
      }, R))
    }), /* @__PURE__ */ he(vr, {
      totalWidth: l,
      totalHeight: p,
      listWidths: c,
      setListWidths: d,
      updateDesc: z,
      totalImages: o.length,
      zIndex: O
    })]
  });
}
pr.defaultProps = {
  zIndex: 100,
  imageDescs: []
};
pr.propTypes = {
  imagePaths: re.exports.array.isRequired,
  imageDescs: re.exports.array,
  zIndex: re.exports.number
};
export {
  pr as ReactMultiImageComparison
};
//# sourceMappingURL=react-multi-image-comparison.es.js.map
