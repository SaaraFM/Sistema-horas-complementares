import * as zt from './utils';

const InputDate = ({ value, setValue }) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(false);
    setValue(currentDate);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => {
          setMode('time'); 
          setShow(true);
        }}
      >
        <Text style={styles.inputText}>
          {formatTime(value)}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={value}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

//////

(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) s(p);
  new MutationObserver((p) => {
    for (const E of p)
      if (E.type === "childList")
        for (const O of E.addedNodes)
          O.tagName === "LINK" && O.rel === "modulepreload" && s(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(p) {
    const E = {};
    return (
      p.integrity && (E.integrity = p.integrity),
      p.referrerPolicy && (E.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : p.crossOrigin === "anonymous"
        ? (E.credentials = "omit")
        : (E.credentials = "same-origin"),
      E
    );
  }
  function s(p) {
    if (p.ep) return;
    p.ep = !0;
    const E = m(p);
    fetch(p.href, E);
  }
})();
function B0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default")
    ? c.default
    : c;
}
var hf = { exports: {} },
  Hu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function G0() {
  if (Md) return Hu;
  Md = 1;
  var c = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function m(s, p, E) {
    var O = null;
    if (
      (E !== void 0 && (O = "" + E),
      p.key !== void 0 && (O = "" + p.key),
      "key" in p)
    ) {
      E = {};
      for (var H in p) H !== "key" && (E[H] = p[H]);
    } else E = p;
    return (
      (p = E.ref),
      { $$typeof: c, type: s, key: O, ref: p !== void 0 ? p : null, props: E }
    );
  }
  return (Hu.Fragment = o), (Hu.jsx = m), (Hu.jsxs = m), Hu;
}
var _d;
function Y0() {
  return _d || ((_d = 1), (hf.exports = G0())), hf.exports;
}
var U = Y0(),
  vf = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function w0() {
  if (Od) return I;
  Od = 1;
  var c = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    p = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    Q = Symbol.iterator;
  function K(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (Q && d[Q]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var ht = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    et = Object.assign,
    ft = {};
  function vt(d, N, q) {
    (this.props = d),
      (this.context = N),
      (this.refs = ft),
      (this.updater = q || ht);
  }
  (vt.prototype.isReactComponent = {}),
    (vt.prototype.setState = function (d, N) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, d, N, "setState");
    }),
    (vt.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    });
  function jt() {}
  jt.prototype = vt.prototype;
  function kt(d, N, q) {
    (this.props = d),
      (this.context = N),
      (this.refs = ft),
      (this.updater = q || ht);
  }
  var L = (kt.prototype = new jt());
  (L.constructor = kt), et(L, vt.prototype), (L.isPureReactComponent = !0);
  var F = Array.isArray,
    Z = { H: null, A: null, T: null, S: null, V: null },
    yt = Object.prototype.hasOwnProperty;
  function st(d, N, q, j, B, ut) {
    return (
      (q = ut.ref),
      { $$typeof: c, type: d, key: N, ref: q !== void 0 ? q : null, props: ut }
    );
  }
  function X(d, N) {
    return st(d.type, N, void 0, void 0, void 0, d.props);
  }
  function zt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === c;
  }
  function El(d) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (q) {
        return N[q];
      })
    );
  }
  var Jt = /\/+/g;
  function Rt(d, N) {
    return typeof d == "object" && d !== null && d.key != null
      ? El("" + d.key)
      : N.toString(36);
  }
  function Ol() {}
  function Tl(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Ol, Ol)
            : ((d.status = "pending"),
              d.then(
                function (N) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = N));
                },
                function (N) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = N));
                }
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function _t(d, N, q, j, B) {
    var ut = typeof d;
    (ut === "undefined" || ut === "boolean") && (d = null);
    var W = !1;
    if (d === null) W = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case c:
            case o:
              W = !0;
              break;
            case R:
              return (W = d._init), _t(W(d._payload), N, q, j, B);
          }
      }
    if (W)
      return (
        (B = B(d)),
        (W = j === "" ? "." + Rt(d, 0) : j),
        F(B)
          ? ((q = ""),
            W != null && (q = W.replace(Jt, "$&/") + "/"),
            _t(B, N, q, "", function (ul) {
              return ul;
            }))
          : B != null &&
            (zt(B) &&
              (B = X(
                B,
                q +
                  (B.key == null || (d && d.key === B.key)
                    ? ""
                    : ("" + B.key).replace(Jt, "$&/") + "/") +
                  W
              )),
            N.push(B)),
        1
      );
    W = 0;
    var rt = j === "" ? "." : j + ":";
    if (F(d))
      for (var At = 0; At < d.length; At++)
        (j = d[At]), (ut = rt + Rt(j, At)), (W += _t(j, N, q, ut, B));
    else if (((At = K(d)), typeof At == "function"))
      for (d = At.call(d), At = 0; !(j = d.next()).done; )
        (j = j.value), (ut = rt + Rt(j, At++)), (W += _t(j, N, q, ut, B));
    else if (ut === "object") {
      if (typeof d.then == "function") return _t(Tl(d), N, q, j, B);
      throw (
        ((N = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return W;
  }
  function T(d, N, q) {
    if (d == null) return d;
    var j = [],
      B = 0;
    return (
      _t(d, j, "", "", function (ut) {
        return N.call(q, ut, B++);
      }),
      j
    );
  }
  function C(d) {
    if (d._status === -1) {
      var N = d._result;
      (N = N()),
        N.then(
          function (q) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = q));
          },
          function (q) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = q));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = N));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var D =
    typeof reportError == "function"
      ? reportError
      : function (d) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof d == "object" &&
                d !== null &&
                typeof d.message == "string"
                  ? String(d.message)
                  : String(d),
              error: d,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", d);
            return;
          }
          console.error(d);
        };
  function mt() {}
  return (
    (I.Children = {
      map: T,
      forEach: function (d, N, q) {
        T(
          d,
          function () {
            N.apply(this, arguments);
          },
          q
        );
      },
      count: function (d) {
        var N = 0;
        return (
          T(d, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (d) {
        return (
          T(d, function (N) {
            return N;
          }) || []
        );
      },
      only: function (d) {
        if (!zt(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    }),
    (I.Component = vt),
    (I.Fragment = m),
    (I.Profiler = p),
    (I.PureComponent = kt),
    (I.StrictMode = s),
    (I.Suspense = A),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return Z.H.useMemoCache(d);
      },
    }),
    (I.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (I.cloneElement = function (d, N, q) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + "."
        );
      var j = et({}, d.props),
        B = d.key,
        ut = void 0;
      if (N != null)
        for (W in (N.ref !== void 0 && (ut = void 0),
        N.key !== void 0 && (B = "" + N.key),
        N))
          !yt.call(N, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && N.ref === void 0) ||
            (j[W] = N[W]);
      var W = arguments.length - 2;
      if (W === 1) j.children = q;
      else if (1 < W) {
        for (var rt = Array(W), At = 0; At < W; At++)
          rt[At] = arguments[At + 2];
        j.children = rt;
      }
      return st(d.type, B, void 0, void 0, ut, j);
    }),
    (I.createContext = function (d) {
      return (
        (d = {
          $$typeof: O,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: E, _context: d }),
        d
      );
    }),
    (I.createElement = function (d, N, q) {
      var j,
        B = {},
        ut = null;
      if (N != null)
        for (j in (N.key !== void 0 && (ut = "" + N.key), N))
          yt.call(N, j) &&
            j !== "key" &&
            j !== "__self" &&
            j !== "__source" &&
            (B[j] = N[j]);
      var W = arguments.length - 2;
      if (W === 1) B.children = q;
      else if (1 < W) {
        for (var rt = Array(W), At = 0; At < W; At++)
          rt[At] = arguments[At + 2];
        B.children = rt;
      }
      if (d && d.defaultProps)
        for (j in ((W = d.defaultProps), W)) B[j] === void 0 && (B[j] = W[j]);
      return st(d, ut, void 0, void 0, null, B);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (d) {
      return { $$typeof: H, render: d };
    }),
    (I.isValidElement = zt),
    (I.lazy = function (d) {
      return { $$typeof: R, _payload: { _status: -1, _result: d }, _init: C };
    }),
    (I.memo = function (d, N) {
      return { $$typeof: b, type: d, compare: N === void 0 ? null : N };
    }),
    (I.startTransition = function (d) {
      var N = Z.T,
        q = {};
      Z.T = q;
      try {
        var j = d(),
          B = Z.S;
        B !== null && B(q, j),
          typeof j == "object" &&
            j !== null &&
            typeof j.then == "function" &&
            j.then(mt, D);
      } catch (ut) {
        D(ut);
      } finally {
        Z.T = N;
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (I.use = function (d) {
      return Z.H.use(d);
    }),
    (I.useActionState = function (d, N, q) {
      return Z.H.useActionState(d, N, q);
    }),
    (I.useCallback = function (d, N) {
      return Z.H.useCallback(d, N);
    }),
    (I.useContext = function (d) {
      return Z.H.useContext(d);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (d, N) {
      return Z.H.useDeferredValue(d, N);
    }),
    (I.useEffect = function (d, N, q) {
      var j = Z.H;
      if (typeof q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return j.useEffect(d, N);
    }),
    (I.useId = function () {
      return Z.H.useId();
    }),
    (I.useImperativeHandle = function (d, N, q) {
      return Z.H.useImperativeHandle(d, N, q);
    }),
    (I.useInsertionEffect = function (d, N) {
      return Z.H.useInsertionEffect(d, N);
    }),
    (I.useLayoutEffect = function (d, N) {
      return Z.H.useLayoutEffect(d, N);
    }),
    (I.useMemo = function (d, N) {
      return Z.H.useMemo(d, N);
    }),
    (I.useOptimistic = function (d, N) {
      return Z.H.useOptimistic(d, N);
    }),
    (I.useReducer = function (d, N, q) {
      return Z.H.useReducer(d, N, q);
    }),
    (I.useRef = function (d) {
      return Z.H.useRef(d);
    }),
    (I.useState = function (d) {
      return Z.H.useState(d);
    }),
    (I.useSyncExternalStore = function (d, N, q) {
      return Z.H.useSyncExternalStore(d, N, q);
    }),
    (I.useTransition = function () {
      return Z.H.useTransition();
    }),
    (I.version = "19.1.0"),
    I
  );
}
var Nd;
function Mf() {
  return Nd || ((Nd = 1), (vf.exports = w0())), vf.exports;
}
var P = Mf();
const X0 = B0(P);
var yf = { exports: {} },
  Uu = {},
  gf = { exports: {} },
  pf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function Q0() {
  return (
    Dd ||
      ((Dd = 1),
      (function (c) {
        function o(T, C) {
          var D = T.length;
          T.push(C);
          t: for (; 0 < D; ) {
            var mt = (D - 1) >>> 1,
              d = T[mt];
            if (0 < p(d, C)) (T[mt] = C), (T[D] = d), (D = mt);
            else break t;
          }
        }
        function m(T) {
          return T.length === 0 ? null : T[0];
        }
        function s(T) {
          if (T.length === 0) return null;
          var C = T[0],
            D = T.pop();
          if (D !== C) {
            T[0] = D;
            t: for (var mt = 0, d = T.length, N = d >>> 1; mt < N; ) {
              var q = 2 * (mt + 1) - 1,
                j = T[q],
                B = q + 1,
                ut = T[B];
              if (0 > p(j, D))
                B < d && 0 > p(ut, j)
                  ? ((T[mt] = ut), (T[B] = D), (mt = B))
                  : ((T[mt] = j), (T[q] = D), (mt = q));
              else if (B < d && 0 > p(ut, D))
                (T[mt] = ut), (T[B] = D), (mt = B);
              else break t;
            }
          }
          return C;
        }
        function p(T, C) {
          var D = T.sortIndex - C.sortIndex;
          return D !== 0 ? D : T.id - C.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var E = performance;
          c.unstable_now = function () {
            return E.now();
          };
        } else {
          var O = Date,
            H = O.now();
          c.unstable_now = function () {
            return O.now() - H;
          };
        }
        var A = [],
          b = [],
          R = 1,
          Q = null,
          K = 3,
          ht = !1,
          et = !1,
          ft = !1,
          vt = !1,
          jt = typeof setTimeout == "function" ? setTimeout : null,
          kt = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function F(T) {
          for (var C = m(b); C !== null; ) {
            if (C.callback === null) s(b);
            else if (C.startTime <= T)
              s(b), (C.sortIndex = C.expirationTime), o(A, C);
            else break;
            C = m(b);
          }
        }
        function Z(T) {
          if (((ft = !1), F(T), !et))
            if (m(A) !== null) (et = !0), yt || ((yt = !0), Rt());
            else {
              var C = m(b);
              C !== null && _t(Z, C.startTime - T);
            }
        }
        var yt = !1,
          st = -1,
          X = 5,
          zt = -1;
        function El() {
          return vt ? !0 : !(c.unstable_now() - zt < X);
        }
        function Jt() {
          if (((vt = !1), yt)) {
            var T = c.unstable_now();
            zt = T;
            var C = !0;
            try {
              t: {
                (et = !1), ft && ((ft = !1), kt(st), (st = -1)), (ht = !0);
                var D = K;
                try {
                  l: {
                    for (
                      F(T), Q = m(A);
                      Q !== null && !(Q.expirationTime > T && El());

                    ) {
                      var mt = Q.callback;
                      if (typeof mt == "function") {
                        (Q.callback = null), (K = Q.priorityLevel);
                        var d = mt(Q.expirationTime <= T);
                        if (((T = c.unstable_now()), typeof d == "function")) {
                          (Q.callback = d), F(T), (C = !0);
                          break l;
                        }
                        Q === m(A) && s(A), F(T);
                      } else s(A);
                      Q = m(A);
                    }
                    if (Q !== null) C = !0;
                    else {
                      var N = m(b);
                      N !== null && _t(Z, N.startTime - T), (C = !1);
                    }
                  }
                  break t;
                } finally {
                  (Q = null), (K = D), (ht = !1);
                }
                C = void 0;
              }
            } finally {
              C ? Rt() : (yt = !1);
            }
          }
        }
        var Rt;
        if (typeof L == "function")
          Rt = function () {
            L(Jt);
          };
        else if (typeof MessageChannel < "u") {
          var Ol = new MessageChannel(),
            Tl = Ol.port2;
          (Ol.port1.onmessage = Jt),
            (Rt = function () {
              Tl.postMessage(null);
            });
        } else
          Rt = function () {
            jt(Jt, 0);
          };
        function _t(T, C) {
          st = jt(function () {
            T(c.unstable_now());
          }, C);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (T) {
            T.callback = null;
          }),
          (c.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (X = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return K;
          }),
          (c.unstable_next = function (T) {
            switch (K) {
              case 1:
              case 2:
              case 3:
                var C = 3;
                break;
              default:
                C = K;
            }
            var D = K;
            K = C;
            try {
              return T();
            } finally {
              K = D;
            }
          }),
          (c.unstable_requestPaint = function () {
            vt = !0;
          }),
          (c.unstable_runWithPriority = function (T, C) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                T = 3;
            }
            var D = K;
            K = T;
            try {
              return C();
            } finally {
              K = D;
            }
          }),
          (c.unstable_scheduleCallback = function (T, C, D) {
            var mt = c.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? mt + D : mt))
                : (D = mt),
              T)
            ) {
              case 1:
                var d = -1;
                break;
              case 2:
                d = 250;
                break;
              case 5:
                d = 1073741823;
                break;
              case 4:
                d = 1e4;
                break;
              default:
                d = 5e3;
            }
            return (
              (d = D + d),
              (T = {
                id: R++,
                callback: C,
                priorityLevel: T,
                startTime: D,
                expirationTime: d,
                sortIndex: -1,
              }),
              D > mt
                ? ((T.sortIndex = D),
                  o(b, T),
                  m(A) === null &&
                    T === m(b) &&
                    (ft ? (kt(st), (st = -1)) : (ft = !0), _t(Z, D - mt)))
                : ((T.sortIndex = d),
                  o(A, T),
                  et || ht || ((et = !0), yt || ((yt = !0), Rt()))),
              T
            );
          }),
          (c.unstable_shouldYield = El),
          (c.unstable_wrapCallback = function (T) {
            var C = K;
            return function () {
              var D = K;
              K = C;
              try {
                return T.apply(this, arguments);
              } finally {
                K = D;
              }
            };
          });
      })(pf)),
    pf
  );
}
var Rd;
function V0() {
  return Rd || ((Rd = 1), (gf.exports = Q0())), gf.exports;
}
var bf = { exports: {} },
  Ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd;
function Z0() {
  if (Hd) return Ft;
  Hd = 1;
  var c = Mf();
  function o(A) {
    var b = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        b += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      A +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function m() {}
  var s = {
      d: {
        f: m,
        r: function () {
          throw Error(o(522));
        },
        D: m,
        C: m,
        L: m,
        m,
        X: m,
        S: m,
        M: m,
      },
      p: 0,
      findDOMNode: null,
    },
    p = Symbol.for("react.portal");
  function E(A, b, R) {
    var Q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: p,
      key: Q == null ? null : "" + Q,
      children: A,
      containerInfo: b,
      implementation: R,
    };
  }
  var O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(A, b) {
    if (A === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Ft.createPortal = function (A, b) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(o(299));
      return E(A, b, null, R);
    }),
    (Ft.flushSync = function (A) {
      var b = O.T,
        R = s.p;
      try {
        if (((O.T = null), (s.p = 2), A)) return A();
      } finally {
        (O.T = b), (s.p = R), s.d.f();
      }
    }),
    (Ft.preconnect = function (A, b) {
      typeof A == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        s.d.C(A, b));
    }),
    (Ft.prefetchDNS = function (A) {
      typeof A == "string" && s.d.D(A);
    }),
    (Ft.preinit = function (A, b) {
      if (typeof A == "string" && b && typeof b.as == "string") {
        var R = b.as,
          Q = H(R, b.crossOrigin),
          K = typeof b.integrity == "string" ? b.integrity : void 0,
          ht = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        R === "style"
          ? s.d.S(A, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: Q,
              integrity: K,
              fetchPriority: ht,
            })
          : R === "script" &&
            s.d.X(A, {
              crossOrigin: Q,
              integrity: K,
              fetchPriority: ht,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Ft.preinitModule = function (A, b) {
      if (typeof A == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var R = H(b.as, b.crossOrigin);
            s.d.M(A, {
              crossOrigin: R,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && s.d.M(A);
    }),
    (Ft.preload = function (A, b) {
      if (
        typeof A == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var R = b.as,
          Q = H(R, b.crossOrigin);
        s.d.L(A, R, {
          crossOrigin: Q,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Ft.preloadModule = function (A, b) {
      if (typeof A == "string")
        if (b) {
          var R = H(b.as, b.crossOrigin);
          s.d.m(A, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: R,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else s.d.m(A);
    }),
    (Ft.requestFormReset = function (A) {
      s.d.r(A);
    }),
    (Ft.unstable_batchedUpdates = function (A, b) {
      return A(b);
    }),
    (Ft.useFormState = function (A, b, R) {
      return O.H.useFormState(A, b, R);
    }),
    (Ft.useFormStatus = function () {
      return O.H.useHostTransitionStatus();
    }),
    (Ft.version = "19.1.0"),
    Ft
  );
}
var Ud;
function Jd() {
  if (Ud) return bf.exports;
  Ud = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), (bf.exports = Z0()), bf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function L0() {
  if (jd) return Uu;
  jd = 1;
  var c = V0(),
    o = Mf(),
    m = Jd();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function p(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function E(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do (l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return);
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function O(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function H(t) {
    if (E(t) !== t) throw Error(s(188));
  }
  function A(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = E(t)), l === null)) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return H(u), t;
          if (n === a) return H(u), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === e) {
            (i = !0), (e = u), (a = n);
            break;
          }
          if (f === a) {
            (i = !0), (a = u), (e = n);
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === e) {
              (i = !0), (e = n), (a = u);
              break;
            }
            if (f === a) {
              (i = !0), (a = n), (e = u);
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function b(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = b(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign,
    Q = Symbol.for("react.element"),
    K = Symbol.for("react.transitional.element"),
    ht = Symbol.for("react.portal"),
    et = Symbol.for("react.fragment"),
    ft = Symbol.for("react.strict_mode"),
    vt = Symbol.for("react.profiler"),
    jt = Symbol.for("react.provider"),
    kt = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    yt = Symbol.for("react.suspense_list"),
    st = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    zt = Symbol.for("react.activity"),
    El = Symbol.for("react.memo_cache_sentinel"),
    Jt = Symbol.iterator;
  function Rt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Jt && t[Jt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ol = Symbol.for("react.client.reference");
  function Tl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ol ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case et:
        return "Fragment";
      case vt:
        return "Profiler";
      case ft:
        return "StrictMode";
      case Z:
        return "Suspense";
      case yt:
        return "SuspenseList";
      case zt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ht:
          return "Portal";
        case L:
          return (t.displayName || "Context") + ".Provider";
        case kt:
          return (t._context.displayName || "Context") + ".Consumer";
        case F:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case st:
          return (
            (l = t.displayName || null), l !== null ? l : Tl(t.type) || "Memo"
          );
        case X:
          (l = t._payload), (t = t._init);
          try {
            return Tl(t(l));
          } catch {}
      }
    return null;
  }
  var _t = Array.isArray,
    T = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    mt = [],
    d = -1;
  function N(t) {
    return { current: t };
  }
  function q(t) {
    0 > d || ((t.current = mt[d]), (mt[d] = null), d--);
  }
  function j(t, l) {
    d++, (mt[d] = t.current), (t.current = l);
  }
  var B = N(null),
    ut = N(null),
    W = N(null),
    rt = N(null);
  function At(t, l) {
    switch ((j(W, l), j(ut, t), j(B, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? td(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          (l = td(l)), (t = ld(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    q(B), j(B, t);
  }
  function ul() {
    q(B), q(ut), q(W);
  }
  function Pl(t) {
    t.memoizedState !== null && j(rt, t);
    var l = B.current,
      e = ld(l, t.type);
    l !== e && (j(ut, t), j(B, e));
  }
  function Il(t) {
    ut.current === t && (q(B), q(ut)),
      rt.current === t && (q(rt), (_u._currentValue = D));
  }
  var te = Object.prototype.hasOwnProperty,
    ti = c.unstable_scheduleCallback,
    li = c.unstable_cancelCallback,
    vm = c.unstable_shouldYield,
    ym = c.unstable_requestPaint,
    Nl = c.unstable_now,
    gm = c.unstable_getCurrentPriorityLevel,
    Uf = c.unstable_ImmediatePriority,
    jf = c.unstable_UserBlockingPriority,
    qu = c.unstable_NormalPriority,
    pm = c.unstable_LowPriority,
    Cf = c.unstable_IdlePriority,
    bm = c.log,
    Sm = c.unstable_setDisableYieldValue,
    Ca = null,
    nl = null;
  function le(t) {
    if (
      (typeof bm == "function" && Sm(t),
      nl && typeof nl.setStrictMode == "function")
    )
      try {
        nl.setStrictMode(Ca, t);
      } catch {}
  }
  var il = Math.clz32 ? Math.clz32 : Em,
    xm = Math.log,
    Am = Math.LN2;
  function Em(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((xm(t) / Am) | 0)) | 0;
  }
  var Bu = 256,
    Gu = 4194304;
  function _e(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (u = _e(a))
            : ((i &= f),
              i !== 0
                ? (u = _e(i))
                : e || ((e = f & ~t), e !== 0 && (u = _e(e)))))
        : ((f = a & ~n),
          f !== 0
            ? (u = _e(f))
            : i !== 0
            ? (u = _e(i))
            : e || ((e = a & ~t), e !== 0 && (u = _e(e)))),
      u === 0
        ? 0
        : l !== 0 &&
          l !== u &&
          (l & n) === 0 &&
          ((n = u & -u),
          (e = l & -l),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? l
        : u
    );
  }
  function qa(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Tm(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qf() {
    var t = Bu;
    return (Bu <<= 1), (Bu & 4194048) === 0 && (Bu = 256), t;
  }
  function Bf() {
    var t = Gu;
    return (Gu <<= 1), (Gu & 62914560) === 0 && (Gu = 4194304), t;
  }
  function ei(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ba(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function zm(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var f = t.entanglements,
      r = t.expirationTimes,
      g = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var z = 31 - il(e),
        _ = 1 << z;
      (f[z] = 0), (r[z] = -1);
      var S = g[z];
      if (S !== null)
        for (g[z] = null, z = 0; z < S.length; z++) {
          var x = S[z];
          x !== null && (x.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Gf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function Gf(t, l, e) {
    (t.pendingLanes |= l), (t.suspendedLanes &= ~l);
    var a = 31 - il(l);
    (t.entangledLanes |= l),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function Yf(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var a = 31 - il(e),
        u = 1 << a;
      (u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u);
    }
  }
  function ai(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ui(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function wf() {
    var t = C.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Sd(t.type));
  }
  function Mm(t, l) {
    var e = C.p;
    try {
      return (C.p = t), l();
    } finally {
      C.p = e;
    }
  }
  var ee = Math.random().toString(36).slice(2),
    $t = "__reactFiber$" + ee,
    It = "__reactProps$" + ee,
    ke = "__reactContainer$" + ee,
    ni = "__reactEvents$" + ee,
    _m = "__reactListeners$" + ee,
    Om = "__reactHandles$" + ee,
    Xf = "__reactResources$" + ee,
    Ga = "__reactMarker$" + ee;
  function ii(t) {
    delete t[$t], delete t[It], delete t[ni], delete t[_m], delete t[Om];
  }
  function Je(t) {
    var l = t[$t];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[ke] || e[$t])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = nd(t); t !== null; ) {
            if ((e = t[$t])) return e;
            t = nd(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function $e(t) {
    if ((t = t[$t] || t[ke])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ya(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function We(t) {
    var l = t[Xf];
    return (
      l ||
        (l = t[Xf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function wt(t) {
    t[Ga] = !0;
  }
  var Qf = new Set(),
    Vf = {};
  function Oe(t, l) {
    Fe(t, l), Fe(t + "Capture", l);
  }
  function Fe(t, l) {
    for (Vf[t] = l, t = 0; t < l.length; t++) Qf.add(l[t]);
  }
  var Nm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Zf = {},
    Lf = {};
  function Dm(t) {
    return te.call(Lf, t)
      ? !0
      : te.call(Zf, t)
      ? !1
      : Nm.test(t)
      ? (Lf[t] = !0)
      : ((Zf[t] = !0), !1);
  }
  function wu(t, l, e) {
    if (Dm(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Xu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Cl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var ci, Kf;
  function Pe(t) {
    if (ci === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        (ci = (l && l[1]) || ""),
          (Kf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ci +
      t +
      Kf
    );
  }
  var fi = !1;
  function si(t, l) {
    if (!t || fi) return "";
    fi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (x) {
                  var S = x;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (x) {
                  S = x;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                S = x;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (x) {
            if (x && S && typeof x.stack == "string") return [x.stack, S.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var r = i.split(`
`),
          g = f.split(`
`);
        for (
          u = a = 0;
          a < r.length && !r[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < g.length && !g[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === r.length || u === g.length)
          for (
            a = r.length - 1, u = g.length - 1;
            1 <= a && 0 <= u && r[a] !== g[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (r[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || r[a] !== g[u])) {
                  var z =
                    `
` + r[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (fi = !1), (Error.prepareStackTrace = e);
    }
    return (e = t ? t.displayName || t.name : "") ? Pe(e) : "";
  }
  function Rm(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(t.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return si(t.type, !1);
      case 11:
        return si(t.type.render, !1);
      case 1:
        return si(t.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function kf(t) {
    try {
      var l = "";
      do (l += Rm(t)), (t = t.return);
      while (t);
      return l;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function hl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Jf(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function Hm(t) {
    var l = Jf(t) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
      a = "" + t[l];
    if (
      !t.hasOwnProperty(l) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (a = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[l];
          },
        }
      );
    }
  }
  function Qu(t) {
    t._valueTracker || (t._valueTracker = Hm(t));
  }
  function $f(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      a = "";
    return (
      t && (a = Jf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Vu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Um = /[\n"\\]/g;
  function vl(t) {
    return t.replace(Um, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function ri(t, l, e, a, u, n, i, f) {
    (t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + hl(l))
          : t.value !== "" + hl(l) && (t.value = "" + hl(l))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      l != null
        ? oi(t, i, hl(l))
        : e != null
        ? oi(t, i, hl(e))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.name = "" + hl(f))
        : t.removeAttribute("name");
  }
  function Wf(t, l, e, a, u, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (e = e != null ? "" + hl(e) : ""),
        (l = l != null ? "" + hl(l) : e),
        f || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = f ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i);
  }
  function oi(t, l, e) {
    (l === "number" && Vu(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function Ie(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {};
      for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        (u = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== u && (t[e].selected = u),
          u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + hl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Ff(t, l, e) {
    if (
      l != null &&
      ((l = "" + hl(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + hl(e) : "";
  }
  function Pf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (_t(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (l = e);
    }
    (e = hl(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== "" && a !== null && (t.value = a);
  }
  function ta(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var jm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function If(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? t.setProperty(l, "")
        : l === "float"
        ? (t.cssFloat = "")
        : (t[l] = "")
      : a
      ? t.setProperty(l, e)
      : typeof e != "number" || e === 0 || jm.has(l)
      ? l === "float"
        ? (t.cssFloat = e)
        : (t[l] = ("" + e).trim())
      : (t[l] = e + "px");
  }
  function ts(t, l, e) {
    if (l != null && typeof l != "object") throw Error(s(62));
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in l)
        (a = l[u]), l.hasOwnProperty(u) && e[u] !== a && If(t, u, a);
    } else for (var n in l) l.hasOwnProperty(n) && If(t, n, l[n]);
  }
  function di(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Cm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    qm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zu(t) {
    return qm.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var mi = null;
  function hi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var la = null,
    ea = null;
  function ls(t) {
    var l = $e(t);
    if (l && (t = l.stateNode)) {
      var e = t[It] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (ri(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + vl("" + l) + '"][type="radio"]'
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[It] || null;
                if (!u) throw Error(s(90));
                ri(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              (a = e[l]), a.form === t.form && $f(a);
          }
          break t;
        case "textarea":
          Ff(t, e.value, e.defaultValue);
          break t;
        case "select":
          (l = e.value), l != null && Ie(t, !!e.multiple, l, !1);
      }
    }
  }
  var vi = !1;
  function es(t, l, e) {
    if (vi) return t(l, e);
    vi = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (
        ((vi = !1),
        (la !== null || ea !== null) &&
          (Dn(), la && ((l = la), (t = ea), (ea = la = null), ls(l), t)))
      )
        for (l = 0; l < t.length; l++) ls(t[l]);
    }
  }
  function wa(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[It] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(s(231, l, typeof e));
    return e;
  }
  var ql = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    yi = !1;
  if (ql)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function () {
          yi = !0;
        },
      }),
        window.addEventListener("test", Xa, Xa),
        window.removeEventListener("test", Xa, Xa);
    } catch {
      yi = !1;
    }
  var ae = null,
    gi = null,
    Lu = null;
  function as() {
    if (Lu) return Lu;
    var t,
      l = gi,
      e = l.length,
      a,
      u = "value" in ae ? ae.value : ae.textContent,
      n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++);
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
    return (Lu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ku(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ku() {
    return !0;
  }
  function us() {
    return !1;
  }
  function tl(t) {
    function l(e, a, u, n, i) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var f in t)
        t.hasOwnProperty(f) && ((e = t[f]), (this[f] = e ? e(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? ku
          : us),
        (this.isPropagationStopped = us),
        this
      );
    }
    return (
      R(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = ku));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = ku));
        },
        persist: function () {},
        isPersistent: ku,
      }),
      l
    );
  }
  var Ne = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ju = tl(Ne),
    Qa = R({}, Ne, { view: 0, detail: 0 }),
    Bm = tl(Qa),
    pi,
    bi,
    Va,
    $u = R({}, Qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Va &&
              (Va && t.type === "mousemove"
                ? ((pi = t.screenX - Va.screenX), (bi = t.screenY - Va.screenY))
                : (bi = pi = 0),
              (Va = t)),
            pi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : bi;
      },
    }),
    ns = tl($u),
    Gm = R({}, $u, { dataTransfer: 0 }),
    Ym = tl(Gm),
    wm = R({}, Qa, { relatedTarget: 0 }),
    Si = tl(wm),
    Xm = R({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qm = tl(Xm),
    Vm = R({}, Ne, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Zm = tl(Vm),
    Lm = R({}, Ne, { data: 0 }),
    is = tl(Lm),
    Km = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    km = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $m(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = Jm[t])
      ? !!l[t]
      : !1;
  }
  function xi() {
    return $m;
  }
  var Wm = R({}, Qa, {
      key: function (t) {
        if (t.key) {
          var l = Km[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Ku(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? km[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xi,
      charCode: function (t) {
        return t.type === "keypress" ? Ku(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ku(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Fm = tl(Wm),
    Pm = R({}, $u, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    cs = tl(Pm),
    Im = R({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xi,
    }),
    th = tl(Im),
    lh = R({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eh = tl(lh),
    ah = R({}, $u, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    uh = tl(ah),
    nh = R({}, Ne, { newState: 0, oldState: 0 }),
    ih = tl(nh),
    ch = [9, 13, 27, 32],
    Ai = ql && "CompositionEvent" in window,
    Za = null;
  ql && "documentMode" in document && (Za = document.documentMode);
  var fh = ql && "TextEvent" in window && !Za,
    fs = ql && (!Ai || (Za && 8 < Za && 11 >= Za)),
    ss = " ",
    rs = !1;
  function os(t, l) {
    switch (t) {
      case "keyup":
        return ch.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ds(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var aa = !1;
  function sh(t, l) {
    switch (t) {
      case "compositionend":
        return ds(l);
      case "keypress":
        return l.which !== 32 ? null : ((rs = !0), ss);
      case "textInput":
        return (t = l.data), t === ss && rs ? null : t;
      default:
        return null;
    }
  }
  function rh(t, l) {
    if (aa)
      return t === "compositionend" || (!Ai && os(t, l))
        ? ((t = as()), (Lu = gi = ae = null), (aa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return fs && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var oh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ms(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!oh[t.type] : l === "textarea";
  }
  function hs(t, l, e, a) {
    la ? (ea ? ea.push(a) : (ea = [a])) : (la = a),
      (l = qn(l, "onChange")),
      0 < l.length &&
        ((e = new Ju("onChange", "change", null, e, a)),
        t.push({ event: e, listeners: l }));
  }
  var La = null,
    Ka = null;
  function dh(t) {
    $o(t, 0);
  }
  function Wu(t) {
    var l = Ya(t);
    if ($f(l)) return t;
  }
  function vs(t, l) {
    if (t === "change") return l;
  }
  var ys = !1;
  if (ql) {
    var Ei;
    if (ql) {
      var Ti = "oninput" in document;
      if (!Ti) {
        var gs = document.createElement("div");
        gs.setAttribute("oninput", "return;"),
          (Ti = typeof gs.oninput == "function");
      }
      Ei = Ti;
    } else Ei = !1;
    ys = Ei && (!document.documentMode || 9 < document.documentMode);
  }
  function ps() {
    La && (La.detachEvent("onpropertychange", bs), (Ka = La = null));
  }
  function bs(t) {
    if (t.propertyName === "value" && Wu(Ka)) {
      var l = [];
      hs(l, Ka, t, hi(t)), es(dh, l);
    }
  }
  function mh(t, l, e) {
    t === "focusin"
      ? (ps(), (La = l), (Ka = e), La.attachEvent("onpropertychange", bs))
      : t === "focusout" && ps();
  }
  function hh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wu(Ka);
  }
  function vh(t, l) {
    if (t === "click") return Wu(l);
  }
  function yh(t, l) {
    if (t === "input" || t === "change") return Wu(l);
  }
  function gh(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var cl = typeof Object.is == "function" ? Object.is : gh;
  function ka(t, l) {
    if (cl(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!te.call(l, u) || !cl(t[u], l[u])) return !1;
    }
    return !0;
  }
  function Ss(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function xs(t, l) {
    var e = Ss(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l))
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Ss(e);
    }
  }
  function As(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
        ? !1
        : l && l.nodeType === 3
        ? As(t, l.parentNode)
        : "contains" in t
        ? t.contains(l)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(l) & 16)
        : !1
      : !1;
  }
  function Es(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Vu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Vu(t.document);
    }
    return l;
  }
  function zi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var ph = ql && "documentMode" in document && 11 >= document.documentMode,
    ua = null,
    Mi = null,
    Ja = null,
    _i = !1;
  function Ts(t, l, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    _i ||
      ua == null ||
      ua !== Vu(a) ||
      ((a = ua),
      "selectionStart" in a && zi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ja && ka(Ja, a)) ||
        ((Ja = a),
        (a = qn(Mi, "onSelect")),
        0 < a.length &&
          ((l = new Ju("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = ua))));
  }
  function De(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var na = {
      animationend: De("Animation", "AnimationEnd"),
      animationiteration: De("Animation", "AnimationIteration"),
      animationstart: De("Animation", "AnimationStart"),
      transitionrun: De("Transition", "TransitionRun"),
      transitionstart: De("Transition", "TransitionStart"),
      transitioncancel: De("Transition", "TransitionCancel"),
      transitionend: De("Transition", "TransitionEnd"),
    },
    Oi = {},
    zs = {};
  ql &&
    ((zs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete na.animationend.animation,
      delete na.animationiteration.animation,
      delete na.animationstart.animation),
    "TransitionEvent" in window || delete na.transitionend.transition);
  function Re(t) {
    if (Oi[t]) return Oi[t];
    if (!na[t]) return t;
    var l = na[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in zs) return (Oi[t] = l[e]);
    return t;
  }
  var Ms = Re("animationend"),
    _s = Re("animationiteration"),
    Os = Re("animationstart"),
    bh = Re("transitionrun"),
    Sh = Re("transitionstart"),
    xh = Re("transitioncancel"),
    Ns = Re("transitionend"),
    Ds = new Map(),
    Ni =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ni.push("scrollEnd");
  function zl(t, l) {
    Ds.set(t, l), Oe(l, [t]);
  }
  var Rs = new WeakMap();
  function yl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Rs.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: kf(l) }), Rs.set(t, l), l);
    }
    return { value: t, source: l, stack: kf(l) };
  }
  var gl = [],
    ia = 0,
    Di = 0;
  function Fu() {
    for (var t = ia, l = (Di = ia = 0); l < t; ) {
      var e = gl[l];
      gl[l++] = null;
      var a = gl[l];
      gl[l++] = null;
      var u = gl[l];
      gl[l++] = null;
      var n = gl[l];
      if (((gl[l++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u);
      }
      n !== 0 && Hs(e, u, n);
    }
  }
  function Pu(t, l, e, a) {
    (gl[ia++] = t),
      (gl[ia++] = l),
      (gl[ia++] = e),
      (gl[ia++] = a),
      (Di |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Ri(t, l, e, a) {
    return Pu(t, l, e, a), Iu(t);
  }
  function ca(t, l) {
    return Pu(t, null, null, l), Iu(t);
  }
  function Hs(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - il(e)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        n)
      : null;
  }
  function Iu(t) {
    if (50 < bu) throw ((bu = 0), (Bc = null), Error(s(185)));
    for (var l = t.return; l !== null; ) (t = l), (l = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function Ah(t, l, e, a) {
    (this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function fl(t, l, e, a) {
    return new Ah(t, l, e, a);
  }
  function Hi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Bl(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = fl(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function Us(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function tn(t, l, e, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == "function")) Hi(t) && (i = 1);
    else if (typeof t == "string")
      i = T0(t, e, B.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case zt:
          return (t = fl(31, e, l, u)), (t.elementType = zt), (t.lanes = n), t;
        case et:
          return He(e.children, u, n, l);
        case ft:
          (i = 8), (u |= 24);
          break;
        case vt:
          return (
            (t = fl(12, e, l, u | 2)), (t.elementType = vt), (t.lanes = n), t
          );
        case Z:
          return (t = fl(13, e, l, u)), (t.elementType = Z), (t.lanes = n), t;
        case yt:
          return (t = fl(19, e, l, u)), (t.elementType = yt), (t.lanes = n), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case jt:
              case L:
                i = 10;
                break t;
              case kt:
                i = 9;
                break t;
              case F:
                i = 11;
                break t;
              case st:
                i = 14;
                break t;
              case X:
                (i = 16), (a = null);
                break t;
            }
          (i = 29),
            (e = Error(s(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (l = fl(i, e, l, u)), (l.elementType = t), (l.type = a), (l.lanes = n), l
    );
  }
  function He(t, l, e, a) {
    return (t = fl(7, t, a, l)), (t.lanes = e), t;
  }
  function Ui(t, l, e) {
    return (t = fl(6, t, null, l)), (t.lanes = e), t;
  }
  function ji(t, l, e) {
    return (
      (l = fl(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var sa = [],
    ra = 0,
    ln = null,
    en = 0,
    pl = [],
    bl = 0,
    Ue = null,
    Gl = 1,
    Yl = "";
  function je(t, l) {
    (sa[ra++] = en), (sa[ra++] = ln), (ln = t), (en = l);
  }
  function js(t, l, e) {
    (pl[bl++] = Gl), (pl[bl++] = Yl), (pl[bl++] = Ue), (Ue = t);
    var a = Gl;
    t = Yl;
    var u = 32 - il(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - il(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Gl = (1 << (32 - il(l) + u)) | (e << u) | a),
        (Yl = n + t);
    } else (Gl = (1 << n) | (e << u) | a), (Yl = t);
  }
  function Ci(t) {
    t.return !== null && (je(t, 1), js(t, 1, 0));
  }
  function qi(t) {
    for (; t === ln; )
      (ln = sa[--ra]), (sa[ra] = null), (en = sa[--ra]), (sa[ra] = null);
    for (; t === Ue; )
      (Ue = pl[--bl]),
        (pl[bl] = null),
        (Yl = pl[--bl]),
        (pl[bl] = null),
        (Gl = pl[--bl]),
        (pl[bl] = null);
  }
  var Pt = null,
    Nt = null,
    dt = !1,
    Ce = null,
    Dl = !1,
    Bi = Error(s(519));
  function qe(t) {
    var l = Error(s(418, ""));
    throw (Fa(yl(l, t)), Bi);
  }
  function Cs(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps;
    switch (((l[$t] = t), (l[It] = a), e)) {
      case "dialog":
        it("cancel", l), it("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < xu.length; e++) it(xu[e], l);
        break;
      case "source":
        it("error", l);
        break;
      case "img":
      case "image":
      case "link":
        it("error", l), it("load", l);
        break;
      case "details":
        it("toggle", l);
        break;
      case "input":
        it("invalid", l),
          Wf(
            l,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Qu(l);
        break;
      case "select":
        it("invalid", l);
        break;
      case "textarea":
        it("invalid", l), Pf(l, a.value, a.defaultValue, a.children), Qu(l);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Io(l.textContent, e)
        ? (a.popover != null && (it("beforetoggle", l), it("toggle", l)),
          a.onScroll != null && it("scroll", l),
          a.onScrollEnd != null && it("scrollend", l),
          a.onClick != null && (l.onclick = Bn),
          (l = !0))
        : (l = !1),
      l || qe(t);
  }
  function qs(t) {
    for (Pt = t.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 13:
          Dl = !1;
          return;
        case 27:
        case 3:
          Dl = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function $a(t) {
    if (t !== Pt) return !1;
    if (!dt) return qs(t), (dt = !0), !1;
    var l = t.tag,
      e;
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || Ic(t.type, t.memoizedProps))),
        (e = !e)),
      e && Nt && qe(t),
      qs(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                Nt = _l(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        Nt = null;
      }
    } else
      l === 27
        ? ((l = Nt), be(t.type) ? ((t = af), (af = null), (Nt = t)) : (Nt = l))
        : (Nt = Pt ? _l(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Wa() {
    (Nt = Pt = null), (dt = !1);
  }
  function Bs() {
    var t = Ce;
    return (
      t !== null &&
        (al === null ? (al = t) : al.push.apply(al, t), (Ce = null)),
      t
    );
  }
  function Fa(t) {
    Ce === null ? (Ce = [t]) : Ce.push(t);
  }
  var Gi = N(null),
    Be = null,
    wl = null;
  function ue(t, l, e) {
    j(Gi, l._currentValue), (l._currentValue = e);
  }
  function Xl(t) {
    (t._currentValue = Gi.current), q(Gi);
  }
  function Yi(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function wi(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var r = 0; r < l.length; r++)
            if (f.context === l[r]) {
              (n.lanes |= e),
                (f = n.alternate),
                f !== null && (f.lanes |= e),
                Yi(n.return, e, t),
                a || (i = null);
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341));
        (i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Yi(i, e, t),
          (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function Pa(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type;
          cl(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (u === rt.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(_u) : (t = [_u]));
      }
      u = u.return;
    }
    t !== null && wi(l, t, e, a), (l.flags |= 262144);
  }
  function an(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!cl(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ge(t) {
    (Be = t),
      (wl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return Gs(Be, t);
  }
  function un(t, l) {
    return Be === null && Ge(t), Gs(t, l);
  }
  function Gs(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), wl === null)) {
      if (t === null) throw Error(s(308));
      (wl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else wl = wl.next = l;
    return e;
  }
  var Eh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                });
            };
          },
    Th = c.unstable_scheduleCallback,
    zh = c.unstable_NormalPriority,
    Bt = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xi() {
    return { controller: new Eh(), data: new Map(), refCount: 0 };
  }
  function Ia(t) {
    t.refCount--,
      t.refCount === 0 &&
        Th(zh, function () {
          t.controller.abort();
        });
  }
  var tu = null,
    Qi = 0,
    oa = 0,
    da = null;
  function Mh(t, l) {
    if (tu === null) {
      var e = (tu = []);
      (Qi = 0),
        (oa = Zc()),
        (da = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Qi++, l.then(Ys, Ys), l;
  }
  function Ys() {
    if (--Qi === 0 && tu !== null) {
      da !== null && (da.status = "fulfilled");
      var t = tu;
      (tu = null), (oa = 0), (da = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function _h(t, l) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = l);
          for (var u = 0; u < e.length; u++) (0, e[u])(l);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var ws = T.S;
  T.S = function (t, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Mh(t, l),
      ws !== null && ws(t, l);
  };
  var Ye = N(null);
  function Vi() {
    var t = Ye.current;
    return t !== null ? t : Tt.pooledCache;
  }
  function nn(t, l) {
    l === null ? j(Ye, Ye.current) : j(Ye, l.pool);
  }
  function Xs() {
    var t = Vi();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var lu = Error(s(460)),
    Qs = Error(s(474)),
    cn = Error(s(542)),
    Zi = { then: function () {} };
  function Vs(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fn() {}
  function Zs(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(fn, fn), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), Ks(t), t);
      default:
        if (typeof l.status == "string") l.then(fn, fn);
        else {
          if (((t = Tt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = l),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), Ks(t), t);
        }
        throw ((eu = l), lu);
    }
  }
  var eu = null;
  function Ls() {
    if (eu === null) throw Error(s(459));
    var t = eu;
    return (eu = null), t;
  }
  function Ks(t) {
    if (t === lu || t === cn) throw Error(s(483));
  }
  var ne = !1;
  function Li(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ki(t, l) {
    (t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ie(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ce(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (gt & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (a.pending = l),
        (l = Iu(t)),
        Hs(t, null, e),
        l
      );
    }
    return Pu(t, a, l, e), Iu(t);
  }
  function au(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
    ) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), Yf(t, e);
    }
  }
  function ki(t, l) {
    var e = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = e);
      return;
    }
    (t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l);
  }
  var Ji = !1;
  function uu() {
    if (Ji) {
      var t = da;
      if (t !== null) throw t;
    }
  }
  function nu(t, l, e, a) {
    Ji = !1;
    var u = t.updateQueue;
    ne = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var r = f,
        g = r.next;
      (r.next = null), i === null ? (n = g) : (i.next = g), (i = r);
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (f = z.lastBaseUpdate),
        f !== i &&
          (f === null ? (z.firstBaseUpdate = g) : (f.next = g),
          (z.lastBaseUpdate = r)));
    }
    if (n !== null) {
      var _ = u.baseState;
      (i = 0), (z = g = r = null), (f = n);
      do {
        var S = f.lane & -536870913,
          x = S !== f.lane;
        if (x ? (ct & S) === S : (a & S) === S) {
          S !== 0 && S === oa && (Ji = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var $ = t,
              k = f;
            S = l;
            var xt = e;
            switch (k.tag) {
              case 1:
                if ((($ = k.payload), typeof $ == "function")) {
                  _ = $.call(xt, _, S);
                  break t;
                }
                _ = $;
                break t;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = k.payload),
                  (S = typeof $ == "function" ? $.call(xt, _, S) : $),
                  S == null)
                )
                  break t;
                _ = R({}, _, S);
                break t;
              case 2:
                ne = !0;
            }
          }
          (S = f.callback),
            S !== null &&
              ((t.flags |= 64),
              x && (t.flags |= 8192),
              (x = u.callbacks),
              x === null ? (u.callbacks = [S]) : x.push(S));
        } else
          (x = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            z === null ? ((g = z = x), (r = _)) : (z = z.next = x),
            (i |= S);
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          (x = f),
            (f = x.next),
            (x.next = null),
            (u.lastBaseUpdate = x),
            (u.shared.pending = null);
        }
      } while (!0);
      z === null && (r = _),
        (u.baseState = r),
        (u.firstBaseUpdate = g),
        (u.lastBaseUpdate = z),
        n === null && (u.shared.lanes = 0),
        (ve |= i),
        (t.lanes = i),
        (t.memoizedState = _);
    }
  }
  function ks(t, l) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(l);
  }
  function Js(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) ks(e[t], l);
  }
  var ma = N(null),
    sn = N(0);
  function $s(t, l) {
    (t = Jl), j(sn, t), j(ma, l), (Jl = t | l.baseLanes);
  }
  function $i() {
    j(sn, Jl), j(ma, ma.current);
  }
  function Wi() {
    (Jl = sn.current), q(ma), q(sn);
  }
  var fe = 0,
    tt = null,
    bt = null,
    Ct = null,
    rn = !1,
    ha = !1,
    we = !1,
    on = 0,
    iu = 0,
    va = null,
    Oh = 0;
  function Ht() {
    throw Error(s(321));
  }
  function Fi(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!cl(t[e], l[e])) return !1;
    return !0;
  }
  function Pi(t, l, e, a, u, n) {
    return (
      (fe = n),
      (tt = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (T.H = t === null || t.memoizedState === null ? Hr : Ur),
      (we = !1),
      (n = e(a, u)),
      (we = !1),
      ha && (n = Fs(l, e, a, u)),
      Ws(t),
      n
    );
  }
  function Ws(t) {
    T.H = gn;
    var l = bt !== null && bt.next !== null;
    if (((fe = 0), (Ct = bt = tt = null), (rn = !1), (iu = 0), (va = null), l))
      throw Error(s(300));
    t === null ||
      Xt ||
      ((t = t.dependencies), t !== null && an(t) && (Xt = !0));
  }
  function Fs(t, l, e, a) {
    tt = t;
    var u = 0;
    do {
      if ((ha && (va = null), (iu = 0), (ha = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Ct = bt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (T.H = Ch), (n = l(e, a));
    } while (ha);
    return n;
  }
  function Nh() {
    var t = T.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? cu(l) : l),
      (t = t.useState()[0]),
      (bt !== null ? bt.memoizedState : null) !== t && (tt.flags |= 1024),
      l
    );
  }
  function Ii() {
    var t = on !== 0;
    return (on = 0), t;
  }
  function tc(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function lc(t) {
    if (rn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      rn = !1;
    }
    (fe = 0), (Ct = bt = tt = null), (ha = !1), (iu = on = 0), (va = null);
  }
  function ll() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ct === null ? (tt.memoizedState = Ct = t) : (Ct = Ct.next = t), Ct;
  }
  function qt() {
    if (bt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var l = Ct === null ? tt.memoizedState : Ct.next;
    if (l !== null) (Ct = l), (bt = t);
    else {
      if (t === null)
        throw tt.alternate === null ? Error(s(467)) : Error(s(310));
      (bt = t),
        (t = {
          memoizedState: bt.memoizedState,
          baseState: bt.baseState,
          baseQueue: bt.baseQueue,
          queue: bt.queue,
          next: null,
        }),
        Ct === null ? (tt.memoizedState = Ct = t) : (Ct = Ct.next = t);
    }
    return Ct;
  }
  function ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cu(t) {
    var l = iu;
    return (
      (iu += 1),
      va === null && (va = []),
      (t = Zs(va, t, l)),
      (l = tt),
      (Ct === null ? l.memoizedState : Ct.next) === null &&
        ((l = l.alternate),
        (T.H = l === null || l.memoizedState === null ? Hr : Ur)),
      t
    );
  }
  function dn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return cu(t);
      if (t.$$typeof === L) return Wt(t);
    }
    throw Error(s(438, String(t)));
  }
  function ac(t) {
    var l = null,
      e = tt.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = tt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = ec()), (tt.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = El;
    return l.index++, e;
  }
  function Ql(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function mn(t) {
    var l = qt();
    return uc(l, bt, t);
  }
  function uc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (l.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      l = u.next;
      var f = (i = null),
        r = null,
        g = l,
        z = !1;
      do {
        var _ = g.lane & -536870913;
        if (_ !== g.lane ? (ct & _) === _ : (fe & _) === _) {
          var S = g.revertLane;
          if (S === 0)
            r !== null &&
              (r = r.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null,
                }),
              _ === oa && (z = !0);
          else if ((fe & S) === S) {
            (g = g.next), S === oa && (z = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
              r === null ? ((f = r = _), (i = n)) : (r = r.next = _),
              (tt.lanes |= S),
              (ve |= S);
          (_ = g.action),
            we && e(n, _),
            (n = g.hasEagerState ? g.eagerState : e(n, _));
        } else
          (S = {
            lane: _,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          }),
            r === null ? ((f = r = S), (i = n)) : (r = r.next = S),
            (tt.lanes |= _),
            (ve |= _);
        g = g.next;
      } while (g !== null && g !== l);
      if (
        (r === null ? (i = n) : (r.next = f),
        !cl(n, t.memoizedState) && ((Xt = !0), z && ((e = da), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = r),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function nc(t) {
    var l = qt(),
      e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch,
      u = e.pending,
      n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do (n = t(n, i.action)), (i = i.next);
      while (i !== u);
      cl(n, l.memoizedState) || (Xt = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function Ps(t, l, e) {
    var a = tt,
      u = qt(),
      n = dt;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var i = !cl((bt || u).memoizedState, e);
    i && ((u.memoizedState = e), (Xt = !0)), (u = u.queue);
    var f = lr.bind(null, a, u, t);
    if (
      (fu(2048, 8, f, [t]),
      u.getSnapshot !== l || i || (Ct !== null && Ct.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, hn(), tr.bind(null, a, u, e, l), null),
        Tt === null)
      )
        throw Error(s(349));
      n || (fe & 124) !== 0 || Is(a, l, e);
    }
    return e;
  }
  function Is(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = tt.updateQueue),
      l === null
        ? ((l = ec()), (tt.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t));
  }
  function tr(t, l, e, a) {
    (l.value = e), (l.getSnapshot = a), er(l) && ar(t);
  }
  function lr(t, l, e) {
    return e(function () {
      er(l) && ar(t);
    });
  }
  function er(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !cl(t, e);
    } catch {
      return !0;
    }
  }
  function ar(t) {
    var l = ca(t, 2);
    l !== null && ml(l, t, 2);
  }
  function ic(t) {
    var l = ll();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), we)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ql,
        lastRenderedState: t,
      }),
      l
    );
  }
  function ur(t, l, e, a) {
    return (t.baseState = e), uc(t, bt, typeof a == "function" ? a : Ql);
  }
  function Dh(t, l, e, a, u) {
    if (yn(t)) throw Error(s(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      T.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), nr(l, n))
          : ((n.next = e.next), (l.pending = e.next = n));
    }
  }
  function nr(t, l) {
    var e = l.action,
      a = l.payload,
      u = t.state;
    if (l.isTransition) {
      var n = T.T,
        i = {};
      T.T = i;
      try {
        var f = e(u, a),
          r = T.S;
        r !== null && r(i, f), ir(t, l, f);
      } catch (g) {
        cc(t, l, g);
      } finally {
        T.T = n;
      }
    } else
      try {
        (n = e(u, a)), ir(t, l, n);
      } catch (g) {
        cc(t, l, g);
      }
  }
  function ir(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            cr(t, l, a);
          },
          function (a) {
            return cc(t, l, a);
          }
        )
      : cr(t, l, e);
  }
  function cr(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      fr(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), nr(t, e)));
  }
  function cc(t, l, e) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (l.status = "rejected"), (l.reason = e), fr(l), (l = l.next);
      while (l !== a);
    }
    t.action = null;
  }
  function fr(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function sr(t, l) {
    return l;
  }
  function rr(t, l) {
    if (dt) {
      var e = Tt.formState;
      if (e !== null) {
        t: {
          var a = tt;
          if (dt) {
            if (Nt) {
              l: {
                for (var u = Nt, n = Dl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = _l(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (Nt = _l(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            qe(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return (
      (e = ll()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sr,
        lastRenderedState: l,
      }),
      (e.queue = a),
      (e = Nr.bind(null, tt, a)),
      (a.dispatch = e),
      (a = ic(!1)),
      (n = dc.bind(null, tt, !1, a.queue)),
      (a = ll()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (e = Dh.bind(null, tt, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    );
  }
  function or(t) {
    var l = qt();
    return dr(l, bt, t);
  }
  function dr(t, l, e) {
    if (
      ((l = uc(t, l, sr)[0]),
      (t = mn(Ql)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var a = cu(l);
      } catch (i) {
        throw i === lu ? cn : i;
      }
    else a = l;
    l = qt();
    var u = l.queue,
      n = u.dispatch;
    return (
      e !== l.memoizedState &&
        ((tt.flags |= 2048), ya(9, hn(), Rh.bind(null, u, e), null)),
      [a, n, t]
    );
  }
  function Rh(t, l) {
    t.action = l;
  }
  function mr(t) {
    var l = qt(),
      e = bt;
    if (e !== null) return dr(l, e, t);
    qt(), (l = l.memoizedState), (e = qt());
    var a = e.queue.dispatch;
    return (e.memoizedState = t), [l, a, !1];
  }
  function ya(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = tt.updateQueue),
      l === null && ((l = ec()), (tt.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    );
  }
  function hn() {
    return { destroy: void 0, resource: void 0 };
  }
  function hr() {
    return qt().memoizedState;
  }
  function vn(t, l, e, a) {
    var u = ll();
    (a = a === void 0 ? null : a),
      (tt.flags |= t),
      (u.memoizedState = ya(1 | l, hn(), e, a));
  }
  function fu(t, l, e, a) {
    var u = qt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    bt !== null && a !== null && Fi(a, bt.memoizedState.deps)
      ? (u.memoizedState = ya(l, n, e, a))
      : ((tt.flags |= t), (u.memoizedState = ya(1 | l, n, e, a)));
  }
  function vr(t, l) {
    vn(8390656, 8, t, l);
  }
  function yr(t, l) {
    fu(2048, 8, t, l);
  }
  function gr(t, l) {
    return fu(4, 2, t, l);
  }
  function pr(t, l) {
    return fu(4, 4, t, l);
  }
  function br(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function Sr(t, l, e) {
    (e = e != null ? e.concat([t]) : null), fu(4, 4, br.bind(null, l, t), e);
  }
  function fc() {}
  function xr(t, l) {
    var e = qt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Fi(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
  }
  function Ar(t, l) {
    var e = qt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Fi(l, a[1])) return a[0];
    if (((a = t()), we)) {
      le(!0);
      try {
        t();
      } finally {
        le(!1);
      }
    }
    return (e.memoizedState = [a, l]), a;
  }
  function sc(t, l, e) {
    return e === void 0 || (fe & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = Mo()), (tt.lanes |= t), (ve |= t), e);
  }
  function Er(t, l, e, a) {
    return cl(e, l)
      ? e
      : ma.current !== null
      ? ((t = sc(t, e, a)), cl(t, l) || (Xt = !0), t)
      : (fe & 42) === 0
      ? ((Xt = !0), (t.memoizedState = e))
      : ((t = Mo()), (tt.lanes |= t), (ve |= t), l);
  }
  function Tr(t, l, e, a, u) {
    var n = C.p;
    C.p = n !== 0 && 8 > n ? n : 8;
    var i = T.T,
      f = {};
    (T.T = f), dc(t, !1, l, e);
    try {
      var r = u(),
        g = T.S;
      if (
        (g !== null && g(f, r),
        r !== null && typeof r == "object" && typeof r.then == "function")
      ) {
        var z = _h(r, a);
        su(t, l, z, dl(t));
      } else su(t, l, a, dl(t));
    } catch (_) {
      su(t, l, { then: function () {}, status: "rejected", reason: _ }, dl());
    } finally {
      (C.p = n), (T.T = i);
    }
  }
  function Hh() {}
  function rc(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476));
    var u = zr(t).queue;
    Tr(
      t,
      u,
      l,
      D,
      e === null
        ? Hh
        : function () {
            return Mr(t), e(a);
          }
    );
  }
  function zr(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ql,
        lastRenderedState: D,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ql,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function Mr(t) {
    var l = zr(t).next.queue;
    su(t, l, {}, dl());
  }
  function oc() {
    return Wt(_u);
  }
  function _r() {
    return qt().memoizedState;
  }
  function Or() {
    return qt().memoizedState;
  }
  function Uh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = dl();
          t = ie(e);
          var a = ce(l, t, e);
          a !== null && (ml(a, l, e), au(a, l, e)),
            (l = { cache: Xi() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function jh(t, l, e) {
    var a = dl();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yn(t)
        ? Dr(l, e)
        : ((e = Ri(t, l, e, a)), e !== null && (ml(e, t, a), Rr(e, l, a)));
  }
  function Nr(t, l, e) {
    var a = dl();
    su(t, l, e, a);
  }
  function su(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yn(t)) Dr(l, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            f = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = f), cl(f, i)))
            return Pu(t, l, u, 0), Tt === null && Fu(), !1;
        } catch {
        } finally {
        }
      if (((e = Ri(t, l, u, a)), e !== null))
        return ml(e, t, a), Rr(e, l, a), !0;
    }
    return !1;
  }
  function dc(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Zc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yn(t))
    ) {
      if (l) throw Error(s(479));
    } else (l = Ri(t, e, a, 2)), l !== null && ml(l, t, 2);
  }
  function yn(t) {
    var l = t.alternate;
    return t === tt || (l !== null && l === tt);
  }
  function Dr(t, l) {
    ha = rn = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function Rr(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), Yf(t, e);
    }
  }
  var gn = {
      readContext: Wt,
      use: dn,
      useCallback: Ht,
      useContext: Ht,
      useEffect: Ht,
      useImperativeHandle: Ht,
      useLayoutEffect: Ht,
      useInsertionEffect: Ht,
      useMemo: Ht,
      useReducer: Ht,
      useRef: Ht,
      useState: Ht,
      useDebugValue: Ht,
      useDeferredValue: Ht,
      useTransition: Ht,
      useSyncExternalStore: Ht,
      useId: Ht,
      useHostTransitionStatus: Ht,
      useFormState: Ht,
      useActionState: Ht,
      useOptimistic: Ht,
      useMemoCache: Ht,
      useCacheRefresh: Ht,
    },
    Hr = {
      readContext: Wt,
      use: dn,
      useCallback: function (t, l) {
        return (ll().memoizedState = [t, l === void 0 ? null : l]), t;
      },
      useContext: Wt,
      useEffect: vr,
      useImperativeHandle: function (t, l, e) {
        (e = e != null ? e.concat([t]) : null),
          vn(4194308, 4, br.bind(null, l, t), e);
      },
      useLayoutEffect: function (t, l) {
        return vn(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        vn(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var e = ll();
        l = l === void 0 ? null : l;
        var a = t();
        if (we) {
          le(!0);
          try {
            t();
          } finally {
            le(!1);
          }
        }
        return (e.memoizedState = [a, l]), a;
      },
      useReducer: function (t, l, e) {
        var a = ll();
        if (e !== void 0) {
          var u = e(l);
          if (we) {
            le(!0);
            try {
              e(l);
            } finally {
              le(!1);
            }
          }
        } else u = l;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = jh.bind(null, tt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = ll();
        return (t = { current: t }), (l.memoizedState = t);
      },
      useState: function (t) {
        t = ic(t);
        var l = t.queue,
          e = Nr.bind(null, tt, l);
        return (l.dispatch = e), [t.memoizedState, e];
      },
      useDebugValue: fc,
      useDeferredValue: function (t, l) {
        var e = ll();
        return sc(e, t, l);
      },
      useTransition: function () {
        var t = ic(!1);
        return (
          (t = Tr.bind(null, tt, t.queue, !0, !1)),
          (ll().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, e) {
        var a = tt,
          u = ll();
        if (dt) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (((e = l()), Tt === null)) throw Error(s(349));
          (ct & 124) !== 0 || Is(a, l, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: l };
        return (
          (u.queue = n),
          vr(lr.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          ya(9, hn(), tr.bind(null, a, n, e, l), null),
          e
        );
      },
      useId: function () {
        var t = ll(),
          l = Tt.identifierPrefix;
        if (dt) {
          var e = Yl,
            a = Gl;
          (e = (a & ~(1 << (32 - il(a) - 1))).toString(32) + e),
            (l = "«" + l + "R" + e),
            (e = on++),
            0 < e && (l += "H" + e.toString(32)),
            (l += "»");
        } else (e = Oh++), (l = "«" + l + "r" + e.toString(32) + "»");
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: oc,
      useFormState: rr,
      useActionState: rr,
      useOptimistic: function (t) {
        var l = ll();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = e),
          (l = dc.bind(null, tt, !0, e)),
          (e.dispatch = l),
          [t, l]
        );
      },
      useMemoCache: ac,
      useCacheRefresh: function () {
        return (ll().memoizedState = Uh.bind(null, tt));
      },
    },
    Ur = {
      readContext: Wt,
      use: dn,
      useCallback: xr,
      useContext: Wt,
      useEffect: yr,
      useImperativeHandle: Sr,
      useInsertionEffect: gr,
      useLayoutEffect: pr,
      useMemo: Ar,
      useReducer: mn,
      useRef: hr,
      useState: function () {
        return mn(Ql);
      },
      useDebugValue: fc,
      useDeferredValue: function (t, l) {
        var e = qt();
        return Er(e, bt.memoizedState, t, l);
      },
      useTransition: function () {
        var t = mn(Ql)[0],
          l = qt().memoizedState;
        return [typeof t == "boolean" ? t : cu(t), l];
      },
      useSyncExternalStore: Ps,
      useId: _r,
      useHostTransitionStatus: oc,
      useFormState: or,
      useActionState: or,
      useOptimistic: function (t, l) {
        var e = qt();
        return ur(e, bt, t, l);
      },
      useMemoCache: ac,
      useCacheRefresh: Or,
    },
    Ch = {
      readContext: Wt,
      use: dn,
      useCallback: xr,
      useContext: Wt,
      useEffect: yr,
      useImperativeHandle: Sr,
      useInsertionEffect: gr,
      useLayoutEffect: pr,
      useMemo: Ar,
      useReducer: nc,
      useRef: hr,
      useState: function () {
        return nc(Ql);
      },
      useDebugValue: fc,
      useDeferredValue: function (t, l) {
        var e = qt();
        return bt === null ? sc(e, t, l) : Er(e, bt.memoizedState, t, l);
      },
      useTransition: function () {
        var t = nc(Ql)[0],
          l = qt().memoizedState;
        return [typeof t == "boolean" ? t : cu(t), l];
      },
      useSyncExternalStore: Ps,
      useId: _r,
      useHostTransitionStatus: oc,
      useFormState: mr,
      useActionState: mr,
      useOptimistic: function (t, l) {
        var e = qt();
        return bt !== null
          ? ur(e, bt, t, l)
          : ((e.baseState = t), [t, e.queue.dispatch]);
      },
      useMemoCache: ac,
      useCacheRefresh: Or,
    },
    ga = null,
    ru = 0;
  function pn(t) {
    var l = ru;
    return (ru += 1), ga === null && (ga = []), Zs(ga, t, l);
  }
  function ou(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function bn(t, l) {
    throw l.$$typeof === Q
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t
          )
        ));
  }
  function jr(t) {
    var l = t._init;
    return l(t._payload);
  }
  function Cr(t) {
    function l(v, h) {
      if (t) {
        var y = v.deletions;
        y === null ? ((v.deletions = [h]), (v.flags |= 16)) : y.push(h);
      }
    }
    function e(v, h) {
      if (!t) return null;
      for (; h !== null; ) l(v, h), (h = h.sibling);
      return null;
    }
    function a(v) {
      for (var h = new Map(); v !== null; )
        v.key !== null ? h.set(v.key, v) : h.set(v.index, v), (v = v.sibling);
      return h;
    }
    function u(v, h) {
      return (v = Bl(v, h)), (v.index = 0), (v.sibling = null), v;
    }
    function n(v, h, y) {
      return (
        (v.index = y),
        t
          ? ((y = v.alternate),
            y !== null
              ? ((y = y.index), y < h ? ((v.flags |= 67108866), h) : y)
              : ((v.flags |= 67108866), h))
          : ((v.flags |= 1048576), h)
      );
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, h, y, M) {
      return h === null || h.tag !== 6
        ? ((h = Ui(y, v.mode, M)), (h.return = v), h)
        : ((h = u(h, y)), (h.return = v), h);
    }
    function r(v, h, y, M) {
      var G = y.type;
      return G === et
        ? z(v, h, y.props.children, M, y.key)
        : h !== null &&
          (h.elementType === G ||
            (typeof G == "object" &&
              G !== null &&
              G.$$typeof === X &&
              jr(G) === h.type))
        ? ((h = u(h, y.props)), ou(h, y), (h.return = v), h)
        : ((h = tn(y.type, y.key, y.props, null, v.mode, M)),
          ou(h, y),
          (h.return = v),
          h);
    }
    function g(v, h, y, M) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== y.containerInfo ||
        h.stateNode.implementation !== y.implementation
        ? ((h = ji(y, v.mode, M)), (h.return = v), h)
        : ((h = u(h, y.children || [])), (h.return = v), h);
    }
    function z(v, h, y, M, G) {
      return h === null || h.tag !== 7
        ? ((h = He(y, v.mode, M, G)), (h.return = v), h)
        : ((h = u(h, y)), (h.return = v), h);
    }
    function _(v, h, y) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return (h = Ui("" + h, v.mode, y)), (h.return = v), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case K:
            return (
              (y = tn(h.type, h.key, h.props, null, v.mode, y)),
              ou(y, h),
              (y.return = v),
              y
            );
          case ht:
            return (h = ji(h, v.mode, y)), (h.return = v), h;
          case X:
            var M = h._init;
            return (h = M(h._payload)), _(v, h, y);
        }
        if (_t(h) || Rt(h))
          return (h = He(h, v.mode, y, null)), (h.return = v), h;
        if (typeof h.then == "function") return _(v, pn(h), y);
        if (h.$$typeof === L) return _(v, un(v, h), y);
        bn(v, h);
      }
      return null;
    }
    function S(v, h, y, M) {
      var G = h !== null ? h.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return G !== null ? null : f(v, h, "" + y, M);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case K:
            return y.key === G ? r(v, h, y, M) : null;
          case ht:
            return y.key === G ? g(v, h, y, M) : null;
          case X:
            return (G = y._init), (y = G(y._payload)), S(v, h, y, M);
        }
        if (_t(y) || Rt(y)) return G !== null ? null : z(v, h, y, M, null);
        if (typeof y.then == "function") return S(v, h, pn(y), M);
        if (y.$$typeof === L) return S(v, h, un(v, y), M);
        bn(v, y);
      }
      return null;
    }
    function x(v, h, y, M, G) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (v = v.get(y) || null), f(h, v, "" + M, G);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case K:
            return (
              (v = v.get(M.key === null ? y : M.key) || null), r(h, v, M, G)
            );
          case ht:
            return (
              (v = v.get(M.key === null ? y : M.key) || null), g(h, v, M, G)
            );
          case X:
            var at = M._init;
            return (M = at(M._payload)), x(v, h, y, M, G);
        }
        if (_t(M) || Rt(M)) return (v = v.get(y) || null), z(h, v, M, G, null);
        if (typeof M.then == "function") return x(v, h, y, pn(M), G);
        if (M.$$typeof === L) return x(v, h, y, un(h, M), G);
        bn(h, M);
      }
      return null;
    }
    function $(v, h, y, M) {
      for (
        var G = null, at = null, V = h, J = (h = 0), Vt = null;
        V !== null && J < y.length;
        J++
      ) {
        V.index > J ? ((Vt = V), (V = null)) : (Vt = V.sibling);
        var ot = S(v, V, y[J], M);
        if (ot === null) {
          V === null && (V = Vt);
          break;
        }
        t && V && ot.alternate === null && l(v, V),
          (h = n(ot, h, J)),
          at === null ? (G = ot) : (at.sibling = ot),
          (at = ot),
          (V = Vt);
      }
      if (J === y.length) return e(v, V), dt && je(v, J), G;
      if (V === null) {
        for (; J < y.length; J++)
          (V = _(v, y[J], M)),
            V !== null &&
              ((h = n(V, h, J)),
              at === null ? (G = V) : (at.sibling = V),
              (at = V));
        return dt && je(v, J), G;
      }
      for (V = a(V); J < y.length; J++)
        (Vt = x(V, v, J, y[J], M)),
          Vt !== null &&
            (t &&
              Vt.alternate !== null &&
              V.delete(Vt.key === null ? J : Vt.key),
            (h = n(Vt, h, J)),
            at === null ? (G = Vt) : (at.sibling = Vt),
            (at = Vt));
      return (
        t &&
          V.forEach(function (Te) {
            return l(v, Te);
          }),
        dt && je(v, J),
        G
      );
    }
    function k(v, h, y, M) {
      if (y == null) throw Error(s(151));
      for (
        var G = null, at = null, V = h, J = (h = 0), Vt = null, ot = y.next();
        V !== null && !ot.done;
        J++, ot = y.next()
      ) {
        V.index > J ? ((Vt = V), (V = null)) : (Vt = V.sibling);
        var Te = S(v, V, ot.value, M);
        if (Te === null) {
          V === null && (V = Vt);
          break;
        }
        t && V && Te.alternate === null && l(v, V),
          (h = n(Te, h, J)),
          at === null ? (G = Te) : (at.sibling = Te),
          (at = Te),
          (V = Vt);
      }
      if (ot.done) return e(v, V), dt && je(v, J), G;
      if (V === null) {
        for (; !ot.done; J++, ot = y.next())
          (ot = _(v, ot.value, M)),
            ot !== null &&
              ((h = n(ot, h, J)),
              at === null ? (G = ot) : (at.sibling = ot),
              (at = ot));
        return dt && je(v, J), G;
      }
      for (V = a(V); !ot.done; J++, ot = y.next())
        (ot = x(V, v, J, ot.value, M)),
          ot !== null &&
            (t &&
              ot.alternate !== null &&
              V.delete(ot.key === null ? J : ot.key),
            (h = n(ot, h, J)),
            at === null ? (G = ot) : (at.sibling = ot),
            (at = ot));
      return (
        t &&
          V.forEach(function (q0) {
            return l(v, q0);
          }),
        dt && je(v, J),
        G
      );
    }
    function xt(v, h, y, M) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === et &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case K:
            t: {
              for (var G = y.key; h !== null; ) {
                if (h.key === G) {
                  if (((G = y.type), G === et)) {
                    if (h.tag === 7) {
                      e(v, h.sibling),
                        (M = u(h, y.props.children)),
                        (M.return = v),
                        (v = M);
                      break t;
                    }
                  } else if (
                    h.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === X &&
                      jr(G) === h.type)
                  ) {
                    e(v, h.sibling),
                      (M = u(h, y.props)),
                      ou(M, y),
                      (M.return = v),
                      (v = M);
                    break t;
                  }
                  e(v, h);
                  break;
                } else l(v, h);
                h = h.sibling;
              }
              y.type === et
                ? ((M = He(y.props.children, v.mode, M, y.key)),
                  (M.return = v),
                  (v = M))
                : ((M = tn(y.type, y.key, y.props, null, v.mode, M)),
                  ou(M, y),
                  (M.return = v),
                  (v = M));
            }
            return i(v);
          case ht:
            t: {
              for (G = y.key; h !== null; ) {
                if (h.key === G)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === y.containerInfo &&
                    h.stateNode.implementation === y.implementation
                  ) {
                    e(v, h.sibling),
                      (M = u(h, y.children || [])),
                      (M.return = v),
                      (v = M);
                    break t;
                  } else {
                    e(v, h);
                    break;
                  }
                else l(v, h);
                h = h.sibling;
              }
              (M = ji(y, v.mode, M)), (M.return = v), (v = M);
            }
            return i(v);
          case X:
            return (G = y._init), (y = G(y._payload)), xt(v, h, y, M);
        }
        if (_t(y)) return $(v, h, y, M);
        if (Rt(y)) {
          if (((G = Rt(y)), typeof G != "function")) throw Error(s(150));
          return (y = G.call(y)), k(v, h, y, M);
        }
        if (typeof y.then == "function") return xt(v, h, pn(y), M);
        if (y.$$typeof === L) return xt(v, h, un(v, y), M);
        bn(v, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          h !== null && h.tag === 6
            ? (e(v, h.sibling), (M = u(h, y)), (M.return = v), (v = M))
            : (e(v, h), (M = Ui(y, v.mode, M)), (M.return = v), (v = M)),
          i(v))
        : e(v, h);
    }
    return function (v, h, y, M) {
      try {
        ru = 0;
        var G = xt(v, h, y, M);
        return (ga = null), G;
      } catch (V) {
        if (V === lu || V === cn) throw V;
        var at = fl(29, V, null, v.mode);
        return (at.lanes = M), (at.return = v), at;
      } finally {
      }
    };
  }
  var pa = Cr(!0),
    qr = Cr(!1),
    Sl = N(null),
    Rl = null;
  function se(t) {
    var l = t.alternate;
    j(Gt, Gt.current & 1),
      j(Sl, t),
      Rl === null &&
        (l === null || ma.current !== null || l.memoizedState !== null) &&
        (Rl = t);
  }
  function Br(t) {
    if (t.tag === 22) {
      if ((j(Gt, Gt.current), j(Sl, t), Rl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Rl = t);
      }
    } else re();
  }
  function re() {
    j(Gt, Gt.current), j(Sl, Sl.current);
  }
  function Vl(t) {
    q(Sl), Rl === t && (Rl = null), q(Gt);
  }
  var Gt = N(0);
  function Sn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || ef(e))
        )
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
    return null;
  }
  function mc(t, l, e, a) {
    (l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : R({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var hc = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var a = dl(),
        u = ie(a);
      (u.payload = l),
        e != null && (u.callback = e),
        (l = ce(t, u, a)),
        l !== null && (ml(l, t, a), au(l, t, a));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var a = dl(),
        u = ie(a);
      (u.tag = 1),
        (u.payload = l),
        e != null && (u.callback = e),
        (l = ce(t, u, a)),
        l !== null && (ml(l, t, a), au(l, t, a));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = dl(),
        a = ie(e);
      (a.tag = 2),
        l != null && (a.callback = l),
        (l = ce(t, a, e)),
        l !== null && (ml(l, t, e), au(l, t, e));
    },
  };
  function Gr(t, l, e, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, i)
        : l.prototype && l.prototype.isPureReactComponent
        ? !ka(e, a) || !ka(u, n)
        : !0
    );
  }
  function Yr(t, l, e, a) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && hc.enqueueReplaceState(l, l.state, null);
  }
  function Xe(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = R({}, e));
      for (var u in t) e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  var xn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function wr(t) {
    xn(t);
  }
  function Xr(t) {
    console.error(t);
  }
  function Qr(t) {
    xn(t);
  }
  function An(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Vr(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function vc(t, l, e) {
    return (
      (e = ie(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        An(t, l);
      }),
      e
    );
  }
  function Zr(t) {
    return (t = ie(t)), (t.tag = 3), t;
  }
  function Lr(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          Vr(l, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Vr(l, e, a),
          typeof u != "function" &&
            (ye === null ? (ye = new Set([this])) : ye.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function qh(t, l, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && Pa(l, e, u, !0),
        (e = Sl.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              Rl === null ? Yc() : e.alternate === null && Dt === 0 && (Dt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Zi
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  Xc(t, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Zi
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  Xc(t, a, u)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return Xc(t, a, u), Yc(), !1;
    }
    if (dt)
      return (
        (l = Sl.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            a !== Bi && ((t = Error(s(422), { cause: a })), Fa(yl(t, e))))
          : (a !== Bi && ((l = Error(s(423), { cause: a })), Fa(yl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = yl(a, e)),
            (u = vc(t.stateNode, a, u)),
            ki(t, u),
            Dt !== 4 && (Dt = 2)),
        !1
      );
    var n = Error(s(520), { cause: a });
    if (
      ((n = yl(n, e)),
      pu === null ? (pu = [n]) : pu.push(n),
      Dt !== 4 && (Dt = 2),
      l === null)
    )
      return !0;
    (a = yl(a, e)), (e = l);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = u & -u),
            (e.lanes |= t),
            (t = vc(e.stateNode, a, t)),
            ki(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ye === null || !ye.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Zr(u)),
              Lr(u, t, e, a),
              ki(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Kr = Error(s(461)),
    Xt = !1;
  function Zt(t, l, e, a) {
    l.child = t === null ? qr(l, null, e, a) : pa(l, t.child, e, a);
  }
  function kr(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      Ge(l),
      (a = Pi(t, l, e, i, n, u)),
      (f = Ii()),
      t !== null && !Xt
        ? (tc(t, l, u), Zl(t, l, u))
        : (dt && f && Ci(l), (l.flags |= 1), Zt(t, l, a, u), l.child)
    );
  }
  function Jr(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Hi(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), $r(t, l, n, a, u))
        : ((t = tn(e.type, null, a, l, l.mode, u)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !Ec(t, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : ka), e(i, a) && t.ref === l.ref)
      )
        return Zl(t, l, u);
    }
    return (
      (l.flags |= 1),
      (t = Bl(n, a)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function $r(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (ka(n, a) && t.ref === l.ref)
        if (((Xt = !1), (l.pendingProps = a = n), Ec(t, u)))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else return (l.lanes = t.lanes), Zl(t, l, u);
    }
    return yc(t, l, e, a, u);
  }
  function Wr(t, l, e) {
    var a = l.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | e : e), t !== null)) {
          for (u = l.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          l.childLanes = n & ~a;
        } else (l.childLanes = 0), (l.child = null);
        return Fr(t, l, a, e);
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && nn(l, n !== null ? n.cachePool : null),
          n !== null ? $s(l, n) : $i(),
          Br(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          Fr(t, l, n !== null ? n.baseLanes | e : e, e)
        );
    } else
      n !== null
        ? (nn(l, n.cachePool), $s(l, n), re(), (l.memoizedState = null))
        : (t !== null && nn(l, null), $i(), re());
    return Zt(t, l, u, e), l.child;
  }
  function Fr(t, l, e, a) {
    var u = Vi();
    return (
      (u = u === null ? null : { parent: Bt._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: e, cachePool: u }),
      t !== null && nn(l, null),
      $i(),
      Br(l),
      t !== null && Pa(t, l, a, !0),
      null
    );
  }
  function En(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function yc(t, l, e, a, u) {
    return (
      Ge(l),
      (e = Pi(t, l, e, a, void 0, u)),
      (a = Ii()),
      t !== null && !Xt
        ? (tc(t, l, u), Zl(t, l, u))
        : (dt && a && Ci(l), (l.flags |= 1), Zt(t, l, e, u), l.child)
    );
  }
  function Pr(t, l, e, a, u, n) {
    return (
      Ge(l),
      (l.updateQueue = null),
      (e = Fs(l, a, e, u)),
      Ws(t),
      (a = Ii()),
      t !== null && !Xt
        ? (tc(t, l, n), Zl(t, l, n))
        : (dt && a && Ci(l), (l.flags |= 1), Zt(t, l, e, n), l.child)
    );
  }
  function Ir(t, l, e, a, u) {
    if ((Ge(l), l.stateNode === null)) {
      var n = fa,
        i = e.contextType;
      typeof i == "object" && i !== null && (n = Wt(i)),
        (n = new e(a, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = hc),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = a),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Li(l),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Wt(i) : fa),
        (n.state = l.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (mc(l, e, i, a), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && hc.enqueueReplaceState(n, n.state, null),
          nu(l, a, n, u),
          uu(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps,
        r = Xe(e, f);
      n.props = r;
      var g = n.context,
        z = e.contextType;
      (i = fa), typeof z == "object" && z !== null && (i = Wt(z));
      var _ = e.getDerivedStateFromProps;
      (z =
        typeof _ == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = l.pendingProps !== f),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || g !== i) && Yr(l, n, a, i)),
        (ne = !1);
      var S = l.memoizedState;
      (n.state = S),
        nu(l, a, n, u),
        uu(),
        (g = l.memoizedState),
        f || S !== g || ne
          ? (typeof _ == "function" && (mc(l, e, _, a), (g = l.memoizedState)),
            (r = ne || Gr(l, e, r, a, S, g, i))
              ? (z ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = g)),
            (n.props = a),
            (n.state = g),
            (n.context = i),
            (a = r))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (a = !1));
    } else {
      (n = l.stateNode),
        Ki(t, l),
        (i = l.memoizedProps),
        (z = Xe(e, i)),
        (n.props = z),
        (_ = l.pendingProps),
        (S = n.context),
        (g = e.contextType),
        (r = fa),
        typeof g == "object" && g !== null && (r = Wt(g)),
        (f = e.getDerivedStateFromProps),
        (g =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== _ || S !== r) && Yr(l, n, a, r)),
        (ne = !1),
        (S = l.memoizedState),
        (n.state = S),
        nu(l, a, n, u),
        uu();
      var x = l.memoizedState;
      i !== _ ||
      S !== x ||
      ne ||
      (t !== null && t.dependencies !== null && an(t.dependencies))
        ? (typeof f == "function" && (mc(l, e, f, a), (x = l.memoizedState)),
          (z =
            ne ||
            Gr(l, e, z, a, S, x, r) ||
            (t !== null && t.dependencies !== null && an(t.dependencies)))
            ? (g ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, x, r),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, x, r)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = x)),
          (n.props = a),
          (n.state = x),
          (n.context = r),
          (a = z))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      En(t, l),
      (a = (l.flags & 128) !== 0),
      n || a
        ? ((n = l.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = pa(l, t.child, null, u)),
              (l.child = pa(l, null, e, u)))
            : Zt(t, l, e, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Zl(t, l, u)),
      t
    );
  }
  function to(t, l, e, a) {
    return Wa(), (l.flags |= 256), Zt(t, l, e, a), l.child;
  }
  var gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function pc(t) {
    return { baseLanes: t, cachePool: Xs() };
  }
  function bc(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= xl), t;
  }
  function lo(t, l, e) {
    var a = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (dt) {
        if ((u ? se(l) : re(), dt)) {
          var f = Nt,
            r;
          if ((r = f)) {
            t: {
              for (r = f, f = Dl; r.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (((r = _l(r.nextSibling)), r === null)) {
                  f = null;
                  break t;
                }
              }
              f = r;
            }
            f !== null
              ? ((l.memoizedState = {
                  dehydrated: f,
                  treeContext: Ue !== null ? { id: Gl, overflow: Yl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = fl(18, null, null, 0)),
                (r.stateNode = f),
                (r.return = l),
                (l.child = r),
                (Pt = l),
                (Nt = null),
                (r = !0))
              : (r = !1);
          }
          r || qe(l);
        }
        if (
          ((f = l.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return ef(f) ? (l.lanes = 32) : (l.lanes = 536870912), null;
        Vl(l);
      }
      return (
        (f = a.children),
        (a = a.fallback),
        u
          ? (re(),
            (u = l.mode),
            (f = Tn({ mode: "hidden", children: f }, u)),
            (a = He(a, u, e, null)),
            (f.return = l),
            (a.return = l),
            (f.sibling = a),
            (l.child = f),
            (u = l.child),
            (u.memoizedState = pc(e)),
            (u.childLanes = bc(t, i, e)),
            (l.memoizedState = gc),
            a)
          : (se(l), Sc(l, f))
      );
    }
    if (
      ((r = t.memoizedState), r !== null && ((f = r.dehydrated), f !== null))
    ) {
      if (n)
        l.flags & 256
          ? (se(l), (l.flags &= -257), (l = xc(t, l, e)))
          : l.memoizedState !== null
          ? (re(), (l.child = t.child), (l.flags |= 128), (l = null))
          : (re(),
            (u = a.fallback),
            (f = l.mode),
            (a = Tn({ mode: "visible", children: a.children }, f)),
            (u = He(u, f, e, null)),
            (u.flags |= 2),
            (a.return = l),
            (u.return = l),
            (a.sibling = u),
            (l.child = a),
            pa(l, t.child, null, e),
            (a = l.child),
            (a.memoizedState = pc(e)),
            (a.childLanes = bc(t, i, e)),
            (l.memoizedState = gc),
            (l = u));
      else if ((se(l), ef(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var g = i.dgst;
        (i = g),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = i),
          Fa({ value: a, source: null, stack: null }),
          (l = xc(t, l, e));
      } else if (
        (Xt || Pa(t, l, e, !1), (i = (e & t.childLanes) !== 0), Xt || i)
      ) {
        if (
          ((i = Tt),
          i !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : ai(a)),
            (a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== r.retryLane))
        )
          throw ((r.retryLane = a), ca(t, a), ml(i, t, a), Kr);
        f.data === "$?" || Yc(), (l = xc(t, l, e));
      } else
        f.data === "$?"
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = r.treeContext),
            (Nt = _l(f.nextSibling)),
            (Pt = l),
            (dt = !0),
            (Ce = null),
            (Dl = !1),
            t !== null &&
              ((pl[bl++] = Gl),
              (pl[bl++] = Yl),
              (pl[bl++] = Ue),
              (Gl = t.id),
              (Yl = t.overflow),
              (Ue = l)),
            (l = Sc(l, a.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (re(),
        (u = a.fallback),
        (f = l.mode),
        (r = t.child),
        (g = r.sibling),
        (a = Bl(r, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = r.subtreeFlags & 65011712),
        g !== null ? (u = Bl(g, u)) : ((u = He(u, f, e, null)), (u.flags |= 2)),
        (u.return = l),
        (a.return = l),
        (a.sibling = u),
        (l.child = a),
        (a = u),
        (u = l.child),
        (f = t.child.memoizedState),
        f === null
          ? (f = pc(e))
          : ((r = f.cachePool),
            r !== null
              ? ((g = Bt._currentValue),
                (r = r.parent !== g ? { parent: g, pool: g } : r))
              : (r = Xs()),
            (f = { baseLanes: f.baseLanes | e, cachePool: r })),
        (u.memoizedState = f),
        (u.childLanes = bc(t, i, e)),
        (l.memoizedState = gc),
        a)
      : (se(l),
        (e = t.child),
        (t = e.sibling),
        (e = Bl(e, { mode: "visible", children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function Sc(t, l) {
    return (
      (l = Tn({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function Tn(t, l) {
    return (
      (t = fl(22, t, null, l)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function xc(t, l, e) {
    return (
      pa(l, t.child, null, e),
      (t = Sc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function eo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Yi(t.return, l, e);
  }
  function Ac(t, l, e, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u));
  }
  function ao(t, l, e) {
    var a = l.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Zt(t, l, a.children, e), (a = Gt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (l.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && eo(t, e, l);
          else if (t.tag === 19) eo(t, e, l);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((j(Gt, a), u)) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          (t = e.alternate),
            t !== null && Sn(t) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = l.child), (l.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          Ac(l, !1, u, e, n);
        break;
      case "backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Sn(t) === null)) {
            l.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = e), (e = u), (u = t);
        }
        Ac(l, !0, e, null, n);
        break;
      case "together":
        Ac(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Zl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (ve |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((Pa(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(s(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Bl(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;

      )
        (t = t.sibling),
          (e = e.sibling = Bl(t, t.pendingProps)),
          (e.return = l);
      e.sibling = null;
    }
    return l.child;
  }
  function Ec(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && an(t)));
  }
  function Bh(t, l, e) {
    switch (l.tag) {
      case 3:
        At(l, l.stateNode.containerInfo),
          ue(l, Bt, t.memoizedState.cache),
          Wa();
        break;
      case 27:
      case 5:
        Pl(l);
        break;
      case 4:
        At(l, l.stateNode.containerInfo);
        break;
      case 10:
        ue(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (se(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
            ? lo(t, l, e)
            : (se(l), (t = Zl(t, l, e)), t !== null ? t.sibling : null);
        se(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (Pa(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          u)
        ) {
          if (a) return ao(t, l, e);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          j(Gt, Gt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), Wr(t, l, e);
      case 24:
        ue(l, Bt, t.memoizedState.cache);
    }
    return Zl(t, l, e);
  }
  function uo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) Xt = !0;
      else {
        if (!Ec(t, e) && (l.flags & 128) === 0) return (Xt = !1), Bh(t, l, e);
        Xt = (t.flags & 131072) !== 0;
      }
    else (Xt = !1), dt && (l.flags & 1048576) !== 0 && js(l, en, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType,
            u = a._init;
          if (((a = u(a._payload)), (l.type = a), typeof a == "function"))
            Hi(a)
              ? ((t = Xe(a, t)), (l.tag = 1), (l = Ir(null, l, a, t, e)))
              : ((l.tag = 0), (l = yc(null, l, a, t, e)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === F)) {
                (l.tag = 11), (l = kr(null, l, a, t, e));
                break t;
              } else if (u === st) {
                (l.tag = 14), (l = Jr(null, l, a, t, e));
                break t;
              }
            }
            throw ((l = Tl(a) || a), Error(s(306, l, "")));
          }
        }
        return l;
      case 0:
        return yc(t, l, l.type, l.pendingProps, e);
      case 1:
        return (a = l.type), (u = Xe(a, l.pendingProps)), Ir(t, l, a, u, e);
      case 3:
        t: {
          if ((At(l, l.stateNode.containerInfo), t === null))
            throw Error(s(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), Ki(t, l), nu(l, a, null, e);
          var i = l.memoizedState;
          if (
            ((a = i.cache),
            ue(l, Bt, a),
            a !== n.cache && wi(l, [Bt], e, !0),
            uu(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = to(t, l, a, e);
              break t;
            } else if (a !== u) {
              (u = yl(Error(s(424)), l)), Fa(u), (l = to(t, l, a, e));
              break t;
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Nt = _l(t.firstChild),
                  Pt = l,
                  dt = !0,
                  Ce = null,
                  Dl = !0,
                  e = qr(l, null, a, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Wa(), a === u)) {
              l = Zl(t, l, e);
              break t;
            }
            Zt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          En(t, l),
          t === null
            ? (e = sd(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : dt ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = Gn(W.current).createElement(e)),
                (a[$t] = l),
                (a[It] = t),
                Kt(a, e, t),
                wt(a),
                (l.stateNode = a))
            : (l.memoizedState = sd(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Pl(l),
          t === null &&
            dt &&
            ((a = l.stateNode = id(l.type, l.pendingProps, W.current)),
            (Pt = l),
            (Dl = !0),
            (u = Nt),
            be(l.type) ? ((af = u), (Nt = _l(a.firstChild))) : (Nt = u)),
          Zt(t, l, l.pendingProps.children, e),
          En(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            dt &&
            ((u = a = Nt) &&
              ((a = o0(a, l.type, l.pendingProps, Dl)),
              a !== null
                ? ((l.stateNode = a),
                  (Pt = l),
                  (Nt = _l(a.firstChild)),
                  (Dl = !1),
                  (u = !0))
                : (u = !1)),
            u || qe(l)),
          Pl(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          Ic(u, n) ? (a = null) : i !== null && Ic(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Pi(t, l, Nh, null, null, e)), (_u._currentValue = u)),
          En(t, l),
          Zt(t, l, a, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            dt &&
            ((t = e = Nt) &&
              ((e = d0(e, l.pendingProps, Dl)),
              e !== null
                ? ((l.stateNode = e), (Pt = l), (Nt = null), (t = !0))
                : (t = !1)),
            t || qe(l)),
          null
        );
      case 13:
        return lo(t, l, e);
      case 4:
        return (
          At(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = pa(l, null, a, e)) : Zt(t, l, a, e),
          l.child
        );
      case 11:
        return kr(t, l, l.type, l.pendingProps, e);
      case 7:
        return Zt(t, l, l.pendingProps, e), l.child;
      case 8:
        return Zt(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Zt(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return (
          (a = l.pendingProps),
          ue(l, l.type, a.value),
          Zt(t, l, a.children, e),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (a = l.pendingProps.children),
          Ge(l),
          (u = Wt(u)),
          (a = a(u)),
          (l.flags |= 1),
          Zt(t, l, a, e),
          l.child
        );
      case 14:
        return Jr(t, l, l.type, l.pendingProps, e);
      case 15:
        return $r(t, l, l.type, l.pendingProps, e);
      case 19:
        return ao(t, l, e);
      case 31:
        return (
          (a = l.pendingProps),
          (e = l.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((e = Tn(a, e)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e))
            : ((e = Bl(t.child, a)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e)),
          l
        );
      case 22:
        return Wr(t, l, e);
      case 24:
        return (
          Ge(l),
          (a = Wt(Bt)),
          t === null
            ? ((u = Vi()),
              u === null &&
                ((u = Tt),
                (n = Xi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (l.memoizedState = { parent: a, cache: u }),
              Li(l),
              ue(l, Bt, u))
            : ((t.lanes & e) !== 0 && (Ki(t, l), nu(l, null, null, e), uu()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  ue(l, Bt, a))
                : ((a = n.cache),
                  ue(l, Bt, a),
                  a !== u.cache && wi(l, [Bt], e, !0))),
          Zt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Ll(t) {
    t.flags |= 4;
  }
  function no(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !hd(l))) {
      if (
        ((l = Sl.current),
        l !== null &&
          ((ct & 4194048) === ct
            ? Rl !== null
            : ((ct & 62914560) !== ct && (ct & 536870912) === 0) || l !== Rl))
      )
        throw ((eu = Zi), Qs);
      t.flags |= 8192;
    }
  }
  function zn(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? Bf() : 536870912), (t.lanes |= l), (Aa |= l));
  }
  function du(t, l) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), (l = l.sibling);
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ot(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = e), l;
  }
  function Gh(t, l, e) {
    var a = l.pendingProps;
    switch ((qi(l), l.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(l), null;
      case 1:
        return Ot(l), null;
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          Xl(Bt),
          ul(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            ($a(l)
              ? Ll(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Bs())),
          Ot(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (Ll(l),
              e !== null ? (Ot(l), no(l, e)) : (Ot(l), (l.flags &= -16777217)))
            : e
            ? e !== t.memoizedState
              ? (Ll(l), Ot(l), no(l, e))
              : (Ot(l), (l.flags &= -16777217))
            : (t.memoizedProps !== a && Ll(l), Ot(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        Il(l), (e = W.current);
        var u = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== a && Ll(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return Ot(l), null;
          }
          (t = B.current),
            $a(l) ? Cs(l) : ((t = id(u, a, e)), (l.stateNode = t), Ll(l));
        }
        return Ot(l), null;
      case 5:
        if ((Il(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== a && Ll(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return Ot(l), null;
          }
          if (((t = B.current), $a(l))) Cs(l);
          else {
            switch (((u = Gn(W.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(e, { is: a.is })
                        : u.createElement(e);
                }
            }
            (t[$t] = l), (t[It] = a);
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            l.stateNode = t;
            t: switch ((Kt(t, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ll(l);
          }
        }
        return Ot(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Ll(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(s(166));
          if (((t = W.current), $a(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (a = null),
              (u = Pt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[$t] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Io(t.nodeValue, e)
              )),
              t || qe(l);
          } else (t = Gn(t).createTextNode(a)), (t[$t] = l), (l.stateNode = t);
        }
        return Ot(l), null;
      case 13:
        if (
          ((a = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = $a(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[$t] = l;
            } else
              Wa(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Ot(l), (u = !1);
          } else
            (u = Bs()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return l.flags & 256 ? (Vl(l), l) : (Vl(l), null);
        }
        if ((Vl(l), (l.flags & 128) !== 0)) return (l.lanes = e), l;
        if (
          ((e = a !== null), (t = t !== null && t.memoizedState !== null), e)
        ) {
          (a = l.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          e !== t && e && (l.child.flags |= 8192),
          zn(l, l.updateQueue),
          Ot(l),
          null
        );
      case 4:
        return ul(), t === null && Jc(l.stateNode.containerInfo), Ot(l), null;
      case 10:
        return Xl(l.type), Ot(l), null;
      case 19:
        if ((q(Gt), (u = l.memoizedState), u === null)) return Ot(l), null;
        if (((a = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) du(u, !1);
          else {
            if (Dt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = Sn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      du(u, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      zn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    Us(e, t), (e = e.sibling);
                  return j(Gt, (Gt.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Nl() > On &&
              ((l.flags |= 128), (a = !0), du(u, !1), (l.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Sn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                zn(l, t),
                du(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !dt)
              )
                return Ot(l), null;
            } else
              2 * Nl() - u.renderingStartTime > On &&
                e !== 536870912 &&
                ((l.flags |= 128), (a = !0), du(u, !1), (l.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = Nl()),
            (l.sibling = null),
            (t = Gt.current),
            j(Gt, a ? (t & 1) | 2 : t & 1),
            l)
          : (Ot(l), null);
      case 22:
      case 23:
        return (
          Vl(l),
          Wi(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (Ot(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Ot(l),
          (e = l.updateQueue),
          e !== null && zn(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && q(Ye),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Xl(Bt),
          Ot(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function Yh(t, l) {
    switch ((qi(l), l.tag)) {
      case 1:
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          Xl(Bt),
          ul(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Il(l), null;
      case 13:
        if (
          (Vl(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(s(340));
          Wa();
        }
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return q(Gt), null;
      case 4:
        return ul(), null;
      case 10:
        return Xl(l.type), null;
      case 22:
      case 23:
        return (
          Vl(l),
          Wi(),
          t !== null && q(Ye),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return Xl(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function io(t, l) {
    switch ((qi(l), l.tag)) {
      case 3:
        Xl(Bt), ul();
        break;
      case 26:
      case 27:
      case 5:
        Il(l);
        break;
      case 4:
        ul();
        break;
      case 13:
        Vl(l);
        break;
      case 19:
        q(Gt);
        break;
      case 10:
        Xl(l.type);
        break;
      case 22:
      case 23:
        Vl(l), Wi(), t !== null && q(Ye);
        break;
      case 24:
        Xl(Bt);
    }
  }
  function mu(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            (a = n()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      Et(l, l.return, f);
    }
  }
  function oe(t, l, e) {
    try {
      var a = l.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              (i.destroy = void 0), (u = l);
              var r = e,
                g = f;
              try {
                g();
              } catch (z) {
                Et(u, r, z);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (z) {
      Et(l, l.return, z);
    }
  }
  function co(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Js(l, e);
      } catch (a) {
        Et(t, t.return, a);
      }
    }
  }
  function fo(t, l, e) {
    (e.props = Xe(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      Et(t, l, a);
    }
  }
  function hu(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      Et(t, l, u);
    }
  }
  function Hl(t, l) {
    var e = t.ref,
      a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          Et(t, l, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          Et(t, l, u);
        }
      else e.current = null;
  }
  function so(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      Et(t, t.return, u);
    }
  }
  function Tc(t, l, e) {
    try {
      var a = t.stateNode;
      i0(a, t.type, e, l), (a[It] = l);
    } catch (u) {
      Et(t, t.return, u);
    }
  }
  function ro(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && be(t.type)) ||
      t.tag === 4
    );
  }
  function zc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ro(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && be(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Mc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(t, l)
          : ((l =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Bn));
    else if (
      a !== 4 &&
      (a === 27 && be(t.type) && ((e = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for (Mc(t, l, e), t = t.sibling; t !== null; )
        Mc(t, l, e), (t = t.sibling);
  }
  function Mn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && be(t.type) && (e = t.stateNode), (t = t.child), t !== null)
    )
      for (Mn(t, l, e), t = t.sibling; t !== null; )
        Mn(t, l, e), (t = t.sibling);
  }
  function oo(t) {
    var l = t.stateNode,
      e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Kt(l, a, e), (l[$t] = t), (l[It] = e);
    } catch (n) {
      Et(t, t.return, n);
    }
  }
  var Kl = !1,
    Ut = !1,
    _c = !1,
    mo = typeof WeakSet == "function" ? WeakSet : Set,
    Qt = null;
  function wh(t, l) {
    if (((t = t.containerInfo), (Fc = Zn), (t = Es(t)), zi(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0,
              f = -1,
              r = -1,
              g = 0,
              z = 0,
              _ = t,
              S = null;
            l: for (;;) {
              for (
                var x;
                _ !== e || (u !== 0 && _.nodeType !== 3) || (f = i + u),
                  _ !== n || (a !== 0 && _.nodeType !== 3) || (r = i + a),
                  _.nodeType === 3 && (i += _.nodeValue.length),
                  (x = _.firstChild) !== null;

              )
                (S = _), (_ = x);
              for (;;) {
                if (_ === t) break l;
                if (
                  (S === e && ++g === u && (f = i),
                  S === n && ++z === a && (r = i),
                  (x = _.nextSibling) !== null)
                )
                  break;
                (_ = S), (S = _.parentNode);
              }
              _ = x;
            }
            e = f === -1 || r === -1 ? null : { start: f, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Pc = { focusedElem: t, selectionRange: e }, Zn = !1, Qt = l;
      Qt !== null;

    )
      if (
        ((l = Qt), (t = l.child), (l.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = l), (Qt = t);
      else
        for (; Qt !== null; ) {
          switch (((l = Qt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (e = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var $ = Xe(e.type, u, e.elementType === e.type);
                  (t = a.getSnapshotBeforeUpdate($, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (k) {
                  Et(e, e.return, k);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  lf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (Qt = t);
            break;
          }
          Qt = l.return;
        }
  }
  function ho(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        de(t, e), a & 4 && mu(5, e);
        break;
      case 1:
        if ((de(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              Et(e, e.return, i);
            }
          else {
            var u = Xe(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              Et(e, e.return, i);
            }
          }
        a & 64 && co(e), a & 512 && hu(e, e.return);
        break;
      case 3:
        if ((de(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Js(t, l);
          } catch (i) {
            Et(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && oo(e);
      case 26:
      case 5:
        de(t, e), l === null && a & 4 && so(e), a & 512 && hu(e, e.return);
        break;
      case 12:
        de(t, e);
        break;
      case 13:
        de(t, e),
          a & 4 && go(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((e = $h.bind(null, e)), m0(t, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Kl), !a)) {
          (l = (l !== null && l.memoizedState !== null) || Ut), (u = Kl);
          var n = Ut;
          (Kl = a),
            (Ut = l) && !n ? me(t, e, (e.subtreeFlags & 8772) !== 0) : de(t, e),
            (Kl = u),
            (Ut = n);
        }
        break;
      case 30:
        break;
      default:
        de(t, e);
    }
  }
  function vo(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), vo(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && ii(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Mt = null,
    el = !1;
  function kl(t, l, e) {
    for (e = e.child; e !== null; ) yo(t, l, e), (e = e.sibling);
  }
  function yo(t, l, e) {
    if (nl && typeof nl.onCommitFiberUnmount == "function")
      try {
        nl.onCommitFiberUnmount(Ca, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Ut || Hl(e, l),
          kl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Ut || Hl(e, l);
        var a = Mt,
          u = el;
        be(e.type) && ((Mt = e.stateNode), (el = !1)),
          kl(t, l, e),
          Eu(e.stateNode),
          (Mt = a),
          (el = u);
        break;
      case 5:
        Ut || Hl(e, l);
      case 6:
        if (
          ((a = Mt),
          (u = el),
          (Mt = null),
          kl(t, l, e),
          (Mt = a),
          (el = u),
          Mt !== null)
        )
          if (el)
            try {
              (Mt.nodeType === 9
                ? Mt.body
                : Mt.nodeName === "HTML"
                ? Mt.ownerDocument.body
                : Mt
              ).removeChild(e.stateNode);
            } catch (n) {
              Et(e, l, n);
            }
          else
            try {
              Mt.removeChild(e.stateNode);
            } catch (n) {
              Et(e, l, n);
            }
        break;
      case 18:
        Mt !== null &&
          (el
            ? ((t = Mt),
              ud(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                e.stateNode
              ),
              Ru(t))
            : ud(Mt, e.stateNode));
        break;
      case 4:
        (a = Mt),
          (u = el),
          (Mt = e.stateNode.containerInfo),
          (el = !0),
          kl(t, l, e),
          (Mt = a),
          (el = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ut || oe(2, e, l), Ut || oe(4, e, l), kl(t, l, e);
        break;
      case 1:
        Ut ||
          (Hl(e, l),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && fo(e, l, a)),
          kl(t, l, e);
        break;
      case 21:
        kl(t, l, e);
        break;
      case 22:
        (Ut = (a = Ut) || e.memoizedState !== null), kl(t, l, e), (Ut = a);
        break;
      default:
        kl(t, l, e);
    }
  }
  function go(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ru(t);
      } catch (e) {
        Et(l, l.return, e);
      }
  }
  function Xh(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new mo()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new mo()),
          l
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Oc(t, l) {
    var e = Xh(t);
    l.forEach(function (a) {
      var u = Wh.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function sl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = t,
          i = l,
          f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (be(f.type)) {
                (Mt = f.stateNode), (el = !1);
                break t;
              }
              break;
            case 5:
              (Mt = f.stateNode), (el = !1);
              break t;
            case 3:
            case 4:
              (Mt = f.stateNode.containerInfo), (el = !0);
              break t;
          }
          f = f.return;
        }
        if (Mt === null) throw Error(s(160));
        yo(n, i, u),
          (Mt = null),
          (el = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) po(l, t), (l = l.sibling);
  }
  var Ml = null;
  function po(t, l) {
    var e = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        sl(l, t),
          rl(t),
          a & 4 && (oe(3, t, t.return), mu(3, t), oe(5, t, t.return));
        break;
      case 1:
        sl(l, t),
          rl(t),
          a & 512 && (Ut || e === null || Hl(e, e.return)),
          a & 64 &&
            Kl &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = Ml;
        if (
          (sl(l, t),
          rl(t),
          a & 512 && (Ut || e === null || Hl(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (e = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  l: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ga] ||
                          n[$t] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Kt(n, a, e),
                        (n[$t] = t),
                        wt(n),
                        (a = n);
                      break t;
                    case "link":
                      var i = dd("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        Kt(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = dd("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        Kt(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (n[$t] = t), wt(n), (a = n);
                }
                t.stateNode = a;
              } else md(u, t.type, t.stateNode);
            else t.stateNode = od(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? md(u, t.type, t.stateNode)
                  : od(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Tc(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        sl(l, t),
          rl(t),
          a & 512 && (Ut || e === null || Hl(e, e.return)),
          e !== null && a & 4 && Tc(t, t.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (sl(l, t),
          rl(t),
          a & 512 && (Ut || e === null || Hl(e, e.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            ta(u, "");
          } catch (x) {
            Et(t, t.return, x);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Tc(t, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (_c = !0);
        break;
      case 6:
        if ((sl(l, t), rl(t), a & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (a = t.memoizedProps), (e = t.stateNode);
          try {
            e.nodeValue = a;
          } catch (x) {
            Et(t, t.return, x);
          }
        }
        break;
      case 3:
        if (
          ((Xn = null),
          (u = Ml),
          (Ml = Yn(l.containerInfo)),
          sl(l, t),
          (Ml = u),
          rl(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ru(l.containerInfo);
          } catch (x) {
            Et(t, t.return, x);
          }
        _c && ((_c = !1), bo(t));
        break;
      case 4:
        (a = Ml),
          (Ml = Yn(t.stateNode.containerInfo)),
          sl(l, t),
          rl(t),
          (Ml = a);
        break;
      case 12:
        sl(l, t), rl(t);
        break;
      case 13:
        sl(l, t),
          rl(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (jc = Nl()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Oc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null,
          g = Kl,
          z = Ut;
        if (
          ((Kl = g || u),
          (Ut = z || r),
          sl(l, t),
          (Ut = z),
          (Kl = g),
          rl(t),
          a & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (e === null || r || Kl || Ut || Qe(t)),
              e = null,
              l = t;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                r = e = l;
                try {
                  if (((n = r.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    f = r.stateNode;
                    var _ = r.memoizedProps.style,
                      S =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    f.style.display =
                      S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (x) {
                  Et(r, r.return, x);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                r = l;
                try {
                  r.stateNode.nodeValue = u ? "" : r.memoizedProps;
                } catch (x) {
                  Et(r, r.return, x);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), (l = l.return);
            }
            e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), Oc(t, e))));
        break;
      case 19:
        sl(l, t),
          rl(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Oc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        sl(l, t), rl(t);
    }
  }
  function rl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (ro(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = zc(t);
            Mn(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ta(i, ""), (e.flags &= -33));
            var f = zc(t);
            Mn(t, f, i);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo,
              g = zc(t);
            Mc(t, g, r);
            break;
          default:
            throw Error(s(161));
        }
      } catch (z) {
        Et(t, t.return, z);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function bo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        bo(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function de(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) ho(t, l.alternate, l), (l = l.sibling);
  }
  function Qe(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oe(4, l, l.return), Qe(l);
          break;
        case 1:
          Hl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && fo(l, l.return, e),
            Qe(l);
          break;
        case 27:
          Eu(l.stateNode);
        case 26:
        case 5:
          Hl(l, l.return), Qe(l);
          break;
        case 22:
          l.memoizedState === null && Qe(l);
          break;
        case 30:
          Qe(l);
          break;
        default:
          Qe(l);
      }
      t = t.sibling;
    }
  }
  function me(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate,
        u = t,
        n = l,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          me(u, n, e), mu(4, n);
          break;
        case 1:
          if (
            (me(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (g) {
              Et(a, a.return, g);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode;
            try {
              var r = u.shared.hiddenCallbacks;
              if (r !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < r.length; u++)
                  ks(r[u], f);
            } catch (g) {
              Et(a, a.return, g);
            }
          }
          e && i & 64 && co(n), hu(n, n.return);
          break;
        case 27:
          oo(n);
        case 26:
        case 5:
          me(u, n, e), e && a === null && i & 4 && so(n), hu(n, n.return);
          break;
        case 12:
          me(u, n, e);
          break;
        case 13:
          me(u, n, e), e && i & 4 && go(u, n);
          break;
        case 22:
          n.memoizedState === null && me(u, n, e), hu(n, n.return);
          break;
        case 30:
          break;
        default:
          me(u, n, e);
      }
      l = l.sibling;
    }
  }
  function Nc(t, l) {
    var e = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Ia(e));
  }
  function Dc(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Ia(t));
  }
  function Ul(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) So(t, l, e, a), (l = l.sibling);
  }
  function So(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ul(t, l, e, a), u & 2048 && mu(9, l);
        break;
      case 1:
        Ul(t, l, e, a);
        break;
      case 3:
        Ul(t, l, e, a),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Ia(t)));
        break;
      case 12:
        if (u & 2048) {
          Ul(t, l, e, a), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (r) {
            Et(l, l.return, r);
          }
        } else Ul(t, l, e, a);
        break;
      case 13:
        Ul(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? Ul(t, l, e, a)
              : vu(t, l)
            : n._visibility & 2
            ? Ul(t, l, e, a)
            : ((n._visibility |= 2),
              ba(t, l, e, a, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && Nc(i, l);
        break;
      case 24:
        Ul(t, l, e, a), u & 2048 && Dc(l.alternate, l);
        break;
      default:
        Ul(t, l, e, a);
    }
  }
  function ba(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        i = l,
        f = e,
        r = a,
        g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ba(n, i, f, r, u), mu(8, i);
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          i.memoizedState !== null
            ? z._visibility & 2
              ? ba(n, i, f, r, u)
              : vu(n, i)
            : ((z._visibility |= 2), ba(n, i, f, r, u)),
            u && g & 2048 && Nc(i.alternate, i);
          break;
        case 24:
          ba(n, i, f, r, u), u && g & 2048 && Dc(i.alternate, i);
          break;
        default:
          ba(n, i, f, r, u);
      }
      l = l.sibling;
    }
  }
  function vu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          a = l,
          u = a.flags;
        switch (a.tag) {
          case 22:
            vu(e, a), u & 2048 && Nc(a.alternate, a);
            break;
          case 24:
            vu(e, a), u & 2048 && Dc(a.alternate, a);
            break;
          default:
            vu(e, a);
        }
        l = l.sibling;
      }
  }
  var yu = 8192;
  function Sa(t) {
    if (t.subtreeFlags & yu)
      for (t = t.child; t !== null; ) xo(t), (t = t.sibling);
  }
  function xo(t) {
    switch (t.tag) {
      case 26:
        Sa(t),
          t.flags & yu &&
            t.memoizedState !== null &&
            M0(Ml, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Sa(t);
        break;
      case 3:
      case 4:
        var l = Ml;
        (Ml = Yn(t.stateNode.containerInfo)), Sa(t), (Ml = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = yu), (yu = 16777216), Sa(t), (yu = l))
            : Sa(t));
        break;
      default:
        Sa(t);
    }
  }
  function Ao(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do (l = t.sibling), (t.sibling = null), (t = l);
      while (t !== null);
    }
  }
  function gu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (Qt = a), To(a, t);
        }
      Ao(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Eo(t), (t = t.sibling);
  }
  function Eo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gu(t), t.flags & 2048 && oe(9, t, t.return);
        break;
      case 3:
        gu(t);
        break;
      case 12:
        gu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), _n(t))
          : gu(t);
        break;
      default:
        gu(t);
    }
  }
  function _n(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (Qt = a), To(a, t);
        }
      Ao(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          oe(8, l, l.return), _n(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), _n(l));
          break;
        default:
          _n(l);
      }
      t = t.sibling;
    }
  }
  function To(t, l) {
    for (; Qt !== null; ) {
      var e = Qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Qt = a);
      else
        t: for (e = t; Qt !== null; ) {
          a = Qt;
          var u = a.sibling,
            n = a.return;
          if ((vo(a), a === e)) {
            Qt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (Qt = u);
            break t;
          }
          Qt = n;
        }
    }
  }
  var Qh = {
      getCacheForType: function (t) {
        var l = Wt(Bt),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    Vh = typeof WeakMap == "function" ? WeakMap : Map,
    gt = 0,
    Tt = null,
    nt = null,
    ct = 0,
    pt = 0,
    ol = null,
    he = !1,
    xa = !1,
    Rc = !1,
    Jl = 0,
    Dt = 0,
    ve = 0,
    Ve = 0,
    Hc = 0,
    xl = 0,
    Aa = 0,
    pu = null,
    al = null,
    Uc = !1,
    jc = 0,
    On = 1 / 0,
    Nn = null,
    ye = null,
    Lt = 0,
    ge = null,
    Ea = null,
    Ta = 0,
    Cc = 0,
    qc = null,
    zo = null,
    bu = 0,
    Bc = null;
  function dl() {
    if ((gt & 2) !== 0 && ct !== 0) return ct & -ct;
    if (T.T !== null) {
      var t = oa;
      return t !== 0 ? t : Zc();
    }
    return wf();
  }
  function Mo() {
    xl === 0 && (xl = (ct & 536870912) === 0 || dt ? qf() : 536870912);
    var t = Sl.current;
    return t !== null && (t.flags |= 32), xl;
  }
  function ml(t, l, e) {
    ((t === Tt && (pt === 2 || pt === 9)) || t.cancelPendingCommit !== null) &&
      (za(t, 0), pe(t, ct, xl, !1)),
      Ba(t, e),
      ((gt & 2) === 0 || t !== Tt) &&
        (t === Tt &&
          ((gt & 2) === 0 && (Ve |= e), Dt === 4 && pe(t, ct, xl, !1)),
        jl(t));
  }
  function _o(t, l, e) {
    if ((gt & 6) !== 0) throw Error(s(327));
    var a = (!e && (l & 124) === 0 && (l & t.expiredLanes) === 0) || qa(t, l),
      u = a ? Kh(t, l) : wc(t, l, !0),
      n = a;
    do {
      if (u === 0) {
        xa && !a && pe(t, l, 0, !1);
        break;
      } else {
        if (((e = t.current.alternate), n && !Zh(e))) {
          (u = wc(t, l, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              u = pu;
              var r = f.current.memoizedState.isDehydrated;
              if ((r && (za(f, i).flags |= 256), (i = wc(f, i, !1)), i !== 2)) {
                if (Rc && !r) {
                  (f.errorRecoveryDisabledLanes |= n), (Ve |= n), (u = 4);
                  break t;
                }
                (n = al),
                  (al = u),
                  n !== null && (al === null ? (al = n) : al.push.apply(al, n));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          za(t, 0), pe(t, l, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              pe(a, l, xl, !he);
              break t;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && ((u = jc + 300 - Nl()), 10 < u)) {
            if ((pe(a, l, xl, !he), Yu(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = ed(
              Oo.bind(null, a, e, al, Nn, Uc, l, xl, Ve, Aa, he, n, 2, -0, 0),
              u
            );
            break t;
          }
          Oo(a, e, al, Nn, Uc, l, xl, Ve, Aa, he, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    jl(t);
  }
  function Oo(t, l, e, a, u, n, i, f, r, g, z, _, S, x) {
    if (
      ((t.timeoutHandle = -1),
      (_ = l.subtreeFlags),
      (_ & 8192 || (_ & 16785408) === 16785408) &&
        ((Mu = { stylesheets: null, count: 0, unsuspend: z0 }),
        xo(l),
        (_ = _0()),
        _ !== null))
    ) {
      (t.cancelPendingCommit = _(
        Co.bind(null, t, l, n, e, a, u, i, f, r, z, 1, S, x)
      )),
        pe(t, n, i, !g);
      return;
    }
    Co(t, l, n, e, a, u, i, f, r);
  }
  function Zh(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!cl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        (e.return = l), (l = e);
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    return !0;
  }
  function pe(t, l, e, a) {
    (l &= ~Hc),
      (l &= ~Ve),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes);
    for (var u = l; 0 < u; ) {
      var n = 31 - il(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    e !== 0 && Gf(t, e, l);
  }
  function Dn() {
    return (gt & 6) === 0 ? (Su(0), !1) : !0;
  }
  function Gc() {
    if (nt !== null) {
      if (pt === 0) var t = nt.return;
      else (t = nt), (wl = Be = null), lc(t), (ga = null), (ru = 0), (t = nt);
      for (; t !== null; ) io(t.alternate, t), (t = t.return);
      nt = null;
    }
  }
  function za(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), f0(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      Gc(),
      (Tt = t),
      (nt = e = Bl(t.current, null)),
      (ct = l),
      (pt = 0),
      (ol = null),
      (he = !1),
      (xa = qa(t, l)),
      (Rc = !1),
      (Aa = xl = Hc = Ve = ve = Dt = 0),
      (al = pu = null),
      (Uc = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - il(a),
          n = 1 << u;
        (l |= t[u]), (a &= ~n);
      }
    return (Jl = l), Fu(), e;
  }
  function No(t, l) {
    (tt = null),
      (T.H = gn),
      l === lu || l === cn
        ? ((l = Ls()), (pt = 3))
        : l === Qs
        ? ((l = Ls()), (pt = 4))
        : (pt =
            l === Kr
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (ol = l),
      nt === null && ((Dt = 1), An(t, yl(l, t.current)));
  }
  function Do() {
    var t = T.H;
    return (T.H = gn), t === null ? gn : t;
  }
  function Ro() {
    var t = T.A;
    return (T.A = Qh), t;
  }
  function Yc() {
    (Dt = 4),
      he || ((ct & 4194048) !== ct && Sl.current !== null) || (xa = !0),
      ((ve & 134217727) === 0 && (Ve & 134217727) === 0) ||
        Tt === null ||
        pe(Tt, ct, xl, !1);
  }
  function wc(t, l, e) {
    var a = gt;
    gt |= 2;
    var u = Do(),
      n = Ro();
    (Tt !== t || ct !== l) && ((Nn = null), za(t, l)), (l = !1);
    var i = Dt;
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          var f = nt,
            r = ol;
          switch (pt) {
            case 8:
              Gc(), (i = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Sl.current === null && (l = !0);
              var g = pt;
              if (((pt = 0), (ol = null), Ma(t, f, r, g), e && xa)) {
                i = 0;
                break t;
              }
              break;
            default:
              (g = pt), (pt = 0), (ol = null), Ma(t, f, r, g);
          }
        }
        Lh(), (i = Dt);
        break;
      } catch (z) {
        No(t, z);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (wl = Be = null),
      (gt = a),
      (T.H = u),
      (T.A = n),
      nt === null && ((Tt = null), (ct = 0), Fu()),
      i
    );
  }
  function Lh() {
    for (; nt !== null; ) Ho(nt);
  }
  function Kh(t, l) {
    var e = gt;
    gt |= 2;
    var a = Do(),
      u = Ro();
    Tt !== t || ct !== l
      ? ((Nn = null), (On = Nl() + 500), za(t, l))
      : (xa = qa(t, l));
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          l = nt;
          var n = ol;
          l: switch (pt) {
            case 1:
              (pt = 0), (ol = null), Ma(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Vs(n)) {
                (pt = 0), (ol = null), Uo(l);
                break;
              }
              (l = function () {
                (pt !== 2 && pt !== 9) || Tt !== t || (pt = 7), jl(t);
              }),
                n.then(l, l);
              break t;
            case 3:
              pt = 7;
              break t;
            case 4:
              pt = 5;
              break t;
            case 7:
              Vs(n)
                ? ((pt = 0), (ol = null), Uo(l))
                : ((pt = 0), (ol = null), Ma(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (nt.tag) {
                case 26:
                  i = nt.memoizedState;
                case 5:
                case 27:
                  var f = nt;
                  if (!i || hd(i)) {
                    (pt = 0), (ol = null);
                    var r = f.sibling;
                    if (r !== null) nt = r;
                    else {
                      var g = f.return;
                      g !== null ? ((nt = g), Rn(g)) : (nt = null);
                    }
                    break l;
                  }
              }
              (pt = 0), (ol = null), Ma(t, l, n, 5);
              break;
            case 6:
              (pt = 0), (ol = null), Ma(t, l, n, 6);
              break;
            case 8:
              Gc(), (Dt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        kh();
        break;
      } catch (z) {
        No(t, z);
      }
    while (!0);
    return (
      (wl = Be = null),
      (T.H = a),
      (T.A = u),
      (gt = e),
      nt !== null ? 0 : ((Tt = null), (ct = 0), Fu(), Dt)
    );
  }
  function kh() {
    for (; nt !== null && !vm(); ) Ho(nt);
  }
  function Ho(t) {
    var l = uo(t.alternate, t, Jl);
    (t.memoizedProps = t.pendingProps), l === null ? Rn(t) : (nt = l);
  }
  function Uo(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Pr(e, l, l.pendingProps, l.type, void 0, ct);
        break;
      case 11:
        l = Pr(e, l, l.pendingProps, l.type.render, l.ref, ct);
        break;
      case 5:
        lc(l);
      default:
        io(e, l), (l = nt = Us(l, Jl)), (l = uo(e, l, Jl));
    }
    (t.memoizedProps = t.pendingProps), l === null ? Rn(t) : (nt = l);
  }
  function Ma(t, l, e, a) {
    (wl = Be = null), lc(l), (ga = null), (ru = 0);
    var u = l.return;
    try {
      if (qh(t, u, l, e, ct)) {
        (Dt = 1), An(t, yl(e, t.current)), (nt = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((nt = u), n);
      (Dt = 1), An(t, yl(e, t.current)), (nt = null);
      return;
    }
    l.flags & 32768
      ? (dt || a === 1
          ? (t = !0)
          : xa || (ct & 536870912) !== 0
          ? (t = !1)
          : ((he = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Sl.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        jo(l, t))
      : Rn(l);
  }
  function Rn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        jo(l, he);
        return;
      }
      t = l.return;
      var e = Gh(l.alternate, l, Jl);
      if (e !== null) {
        nt = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        nt = l;
        return;
      }
      nt = l = t;
    } while (l !== null);
    Dt === 0 && (Dt = 5);
  }
  function jo(t, l) {
    do {
      var e = Yh(t.alternate, t);
      if (e !== null) {
        (e.flags &= 32767), (nt = e);
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        nt = t;
        return;
      }
      nt = t = e;
    } while (t !== null);
    (Dt = 6), (nt = null);
  }
  function Co(t, l, e, a, u, n, i, f, r) {
    t.cancelPendingCommit = null;
    do Hn();
    while (Lt !== 0);
    if ((gt & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Di),
        zm(t, e, n, i, f, r),
        t === Tt && ((nt = Tt = null), (ct = 0)),
        (Ea = l),
        (ge = t),
        (Ta = e),
        (Cc = n),
        (qc = u),
        (zo = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Fh(qu, function () {
              return wo(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = T.T), (T.T = null), (u = C.p), (C.p = 2), (i = gt), (gt |= 4);
        try {
          wh(t, l, e);
        } finally {
          (gt = i), (C.p = u), (T.T = a);
        }
      }
      (Lt = 1), qo(), Bo(), Go();
    }
  }
  function qo() {
    if (Lt === 1) {
      Lt = 0;
      var t = ge,
        l = Ea,
        e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        (e = T.T), (T.T = null);
        var a = C.p;
        C.p = 2;
        var u = gt;
        gt |= 4;
        try {
          po(l, t);
          var n = Pc,
            i = Es(t.containerInfo),
            f = n.focusedElem,
            r = n.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            As(f.ownerDocument.documentElement, f)
          ) {
            if (r !== null && zi(f)) {
              var g = r.start,
                z = r.end;
              if ((z === void 0 && (z = g), "selectionStart" in f))
                (f.selectionStart = g),
                  (f.selectionEnd = Math.min(z, f.value.length));
              else {
                var _ = f.ownerDocument || document,
                  S = (_ && _.defaultView) || window;
                if (S.getSelection) {
                  var x = S.getSelection(),
                    $ = f.textContent.length,
                    k = Math.min(r.start, $),
                    xt = r.end === void 0 ? k : Math.min(r.end, $);
                  !x.extend && k > xt && ((i = xt), (xt = k), (k = i));
                  var v = xs(f, k),
                    h = xs(f, xt);
                  if (
                    v &&
                    h &&
                    (x.rangeCount !== 1 ||
                      x.anchorNode !== v.node ||
                      x.anchorOffset !== v.offset ||
                      x.focusNode !== h.node ||
                      x.focusOffset !== h.offset)
                  ) {
                    var y = _.createRange();
                    y.setStart(v.node, v.offset),
                      x.removeAllRanges(),
                      k > xt
                        ? (x.addRange(y), x.extend(h.node, h.offset))
                        : (y.setEnd(h.node, h.offset), x.addRange(y));
                  }
                }
              }
            }
            for (_ = [], x = f; (x = x.parentNode); )
              x.nodeType === 1 &&
                _.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < _.length;
              f++
            ) {
              var M = _[f];
              (M.element.scrollLeft = M.left), (M.element.scrollTop = M.top);
            }
          }
          (Zn = !!Fc), (Pc = Fc = null);
        } finally {
          (gt = u), (C.p = a), (T.T = e);
        }
      }
      (t.current = l), (Lt = 2);
    }
  }
  function Bo() {
    if (Lt === 2) {
      Lt = 0;
      var t = ge,
        l = Ea,
        e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        (e = T.T), (T.T = null);
        var a = C.p;
        C.p = 2;
        var u = gt;
        gt |= 4;
        try {
          ho(t, l.alternate, l);
        } finally {
          (gt = u), (C.p = a), (T.T = e);
        }
      }
      Lt = 3;
    }
  }
  function Go() {
    if (Lt === 4 || Lt === 3) {
      (Lt = 0), ym();
      var t = ge,
        l = Ea,
        e = Ta,
        a = zo;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Lt = 5)
        : ((Lt = 0), (Ea = ge = null), Yo(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (ye = null),
        ui(e),
        (l = l.stateNode),
        nl && typeof nl.onCommitFiberRoot == "function")
      )
        try {
          nl.onCommitFiberRoot(Ca, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (l = T.T), (u = C.p), (C.p = 2), (T.T = null);
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (T.T = l), (C.p = u);
        }
      }
      (Ta & 3) !== 0 && Hn(),
        jl(t),
        (u = t.pendingLanes),
        (e & 4194090) !== 0 && (u & 42) !== 0
          ? t === Bc
            ? bu++
            : ((bu = 0), (Bc = t))
          : (bu = 0),
        Su(0);
    }
  }
  function Yo(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Ia(l)));
  }
  function Hn(t) {
    return qo(), Bo(), Go(), wo();
  }
  function wo() {
    if (Lt !== 5) return !1;
    var t = ge,
      l = Cc;
    Cc = 0;
    var e = ui(Ta),
      a = T.T,
      u = C.p;
    try {
      (C.p = 32 > e ? 32 : e), (T.T = null), (e = qc), (qc = null);
      var n = ge,
        i = Ta;
      if (((Lt = 0), (Ea = ge = null), (Ta = 0), (gt & 6) !== 0))
        throw Error(s(331));
      var f = gt;
      if (
        ((gt |= 4),
        Eo(n.current),
        So(n, n.current, i, e),
        (gt = f),
        Su(0, !1),
        nl && typeof nl.onPostCommitFiberRoot == "function")
      )
        try {
          nl.onPostCommitFiberRoot(Ca, n);
        } catch {}
      return !0;
    } finally {
      (C.p = u), (T.T = a), Yo(t, l);
    }
  }
  function Xo(t, l, e) {
    (l = yl(e, l)),
      (l = vc(t.stateNode, l, 2)),
      (t = ce(t, l, 2)),
      t !== null && (Ba(t, 2), jl(t));
  }
  function Et(t, l, e) {
    if (t.tag === 3) Xo(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Xo(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ye === null || !ye.has(a)))
          ) {
            (t = yl(e, t)),
              (e = Zr(2)),
              (a = ce(l, e, 2)),
              a !== null && (Lr(e, a, l, t), Ba(a, 2), jl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Xc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Vh();
      var u = new Set();
      a.set(l, u);
    } else (u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u));
    u.has(e) ||
      ((Rc = !0), u.add(e), (t = Jh.bind(null, t, l, e)), l.then(t, t));
  }
  function Jh(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      Tt === t &&
        (ct & e) === e &&
        (Dt === 4 || (Dt === 3 && (ct & 62914560) === ct && 300 > Nl() - jc)
          ? (gt & 2) === 0 && za(t, 0)
          : (Hc |= e),
        Aa === ct && (Aa = 0)),
      jl(t);
  }
  function Qo(t, l) {
    l === 0 && (l = Bf()), (t = ca(t, l)), t !== null && (Ba(t, l), jl(t));
  }
  function $h(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), Qo(t, e);
  }
  function Wh(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(l), Qo(t, e);
  }
  function Fh(t, l) {
    return ti(t, l);
  }
  var Un = null,
    _a = null,
    Qc = !1,
    jn = !1,
    Vc = !1,
    Ze = 0;
  function jl(t) {
    t !== _a &&
      t.next === null &&
      (_a === null ? (Un = _a = t) : (_a = _a.next = t)),
      (jn = !0),
      Qc || ((Qc = !0), Ih());
  }
  function Su(t, l) {
    if (!Vc && jn) {
      Vc = !0;
      do
        for (var e = !1, a = Un; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              (n = (1 << (31 - il(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), Ko(a, n));
          } else
            (n = ct),
              (n = Yu(
                a,
                a === Tt ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || qa(a, n) || ((e = !0), Ko(a, n));
          a = a.next;
        }
      while (e);
      Vc = !1;
    }
  }
  function Ph() {
    Vo();
  }
  function Vo() {
    jn = Qc = !1;
    var t = 0;
    Ze !== 0 && (c0() && (t = Ze), (Ze = 0));
    for (var l = Nl(), e = null, a = Un; a !== null; ) {
      var u = a.next,
        n = Zo(a, l);
      n === 0
        ? ((a.next = null),
          e === null ? (Un = u) : (e.next = u),
          u === null && (_a = e))
        : ((e = a), (t !== 0 || (n & 3) !== 0) && (jn = !0)),
        (a = u);
    }
    Su(t);
  }
  function Zo(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - il(n),
        f = 1 << i,
        r = u[i];
      r === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = Tm(f, l))
        : r <= l && (t.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((l = Tt),
      (e = ct),
      (e = Yu(
        t,
        t === l ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      e === 0 ||
        (t === l && (pt === 2 || pt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && li(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || qa(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((a !== null && li(a), ui(e))) {
        case 2:
        case 8:
          e = jf;
          break;
        case 32:
          e = qu;
          break;
        case 268435456:
          e = Cf;
          break;
        default:
          e = qu;
      }
      return (
        (a = Lo.bind(null, t)),
        (e = ti(e, a)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      a !== null && a !== null && li(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Lo(t, l) {
    if (Lt !== 0 && Lt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var e = t.callbackNode;
    if (Hn() && t.callbackNode !== e) return null;
    var a = ct;
    return (
      (a = Yu(
        t,
        t === Tt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (_o(t, a, l),
          Zo(t, Nl()),
          t.callbackNode != null && t.callbackNode === e
            ? Lo.bind(null, t)
            : null)
    );
  }
  function Ko(t, l) {
    if (Hn()) return null;
    _o(t, l, !0);
  }
  function Ih() {
    s0(function () {
      (gt & 6) !== 0 ? ti(Uf, Ph) : Vo();
    });
  }
  function Zc() {
    return Ze === 0 && (Ze = qf()), Ze;
  }
  function ko(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Zu("" + t);
  }
  function Jo(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function t0(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = ko((u[It] || null).action),
        i = a.submitter;
      i &&
        ((l = (l = i[It] || null)
          ? ko(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var f = new Ju("action", "action", null, a, u);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ze !== 0) {
                  var r = i ? Jo(u, i) : new FormData(u);
                  rc(
                    e,
                    { pending: !0, data: r, method: u.method, action: n },
                    null,
                    r
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (r = i ? Jo(u, i) : new FormData(u)),
                  rc(
                    e,
                    { pending: !0, data: r, method: u.method, action: n },
                    n,
                    r
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Lc = 0; Lc < Ni.length; Lc++) {
    var Kc = Ni[Lc],
      l0 = Kc.toLowerCase(),
      e0 = Kc[0].toUpperCase() + Kc.slice(1);
    zl(l0, "on" + e0);
  }
  zl(Ms, "onAnimationEnd"),
    zl(_s, "onAnimationIteration"),
    zl(Os, "onAnimationStart"),
    zl("dblclick", "onDoubleClick"),
    zl("focusin", "onFocus"),
    zl("focusout", "onBlur"),
    zl(bh, "onTransitionRun"),
    zl(Sh, "onTransitionStart"),
    zl(xh, "onTransitionCancel"),
    zl(Ns, "onTransitionEnd"),
    Fe("onMouseEnter", ["mouseout", "mouseover"]),
    Fe("onMouseLeave", ["mouseout", "mouseover"]),
    Fe("onPointerEnter", ["pointerout", "pointerover"]),
    Fe("onPointerLeave", ["pointerout", "pointerover"]),
    Oe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Oe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var xu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    a0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(xu)
    );
  function $o(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              r = f.instance,
              g = f.currentTarget;
            if (((f = f.listener), r !== n && u.isPropagationStopped()))
              break t;
            (n = f), (u.currentTarget = g);
            try {
              n(u);
            } catch (z) {
              xn(z);
            }
            (u.currentTarget = null), (n = r);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (r = f.instance),
              (g = f.currentTarget),
              (f = f.listener),
              r !== n && u.isPropagationStopped())
            )
              break t;
            (n = f), (u.currentTarget = g);
            try {
              n(u);
            } catch (z) {
              xn(z);
            }
            (u.currentTarget = null), (n = r);
          }
      }
    }
  }
  function it(t, l) {
    var e = l[ni];
    e === void 0 && (e = l[ni] = new Set());
    var a = t + "__bubble";
    e.has(a) || (Wo(l, t, 2, !1), e.add(a));
  }
  function kc(t, l, e) {
    var a = 0;
    l && (a |= 4), Wo(e, t, a, l);
  }
  var Cn = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(t) {
    if (!t[Cn]) {
      (t[Cn] = !0),
        Qf.forEach(function (e) {
          e !== "selectionchange" && (a0.has(e) || kc(e, !1, t), kc(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Cn] || ((l[Cn] = !0), kc("selectionchange", !1, l));
    }
  }
  function Wo(t, l, e, a) {
    switch (Sd(l)) {
      case 2:
        var u = D0;
        break;
      case 8:
        u = R0;
        break;
      default:
        u = sf;
    }
    (e = u.bind(null, l, e, t)),
      (u = void 0),
      !yi ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: u })
          : t.addEventListener(l, e, !0)
        : u !== void 0
        ? t.addEventListener(l, e, { passive: u })
        : t.addEventListener(l, e, !1);
  }
  function $c(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Je(f)), i === null)) return;
            if (((r = i.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
              a = n = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    es(function () {
      var g = n,
        z = hi(e),
        _ = [];
      t: {
        var S = Ds.get(t);
        if (S !== void 0) {
          var x = Ju,
            $ = t;
          switch (t) {
            case "keypress":
              if (Ku(e) === 0) break t;
            case "keydown":
            case "keyup":
              x = Fm;
              break;
            case "focusin":
              ($ = "focus"), (x = Si);
              break;
            case "focusout":
              ($ = "blur"), (x = Si);
              break;
            case "beforeblur":
            case "afterblur":
              x = Si;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = ns;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Ym;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = th;
              break;
            case Ms:
            case _s:
            case Os:
              x = Qm;
              break;
            case Ns:
              x = eh;
              break;
            case "scroll":
            case "scrollend":
              x = Bm;
              break;
            case "wheel":
              x = uh;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Zm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = cs;
              break;
            case "toggle":
            case "beforetoggle":
              x = ih;
          }
          var k = (l & 4) !== 0,
            xt = !k && (t === "scroll" || t === "scrollend"),
            v = k ? (S !== null ? S + "Capture" : null) : S;
          k = [];
          for (var h = g, y; h !== null; ) {
            var M = h;
            if (
              ((y = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                y === null ||
                v === null ||
                ((M = wa(h, v)), M != null && k.push(Au(h, M, y))),
              xt)
            )
              break;
            h = h.return;
          }
          0 < k.length &&
            ((S = new x(S, $, null, e, z)), _.push({ event: S, listeners: k }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((S = t === "mouseover" || t === "pointerover"),
            (x = t === "mouseout" || t === "pointerout"),
            S &&
              e !== mi &&
              ($ = e.relatedTarget || e.fromElement) &&
              (Je($) || $[ke]))
          )
            break t;
          if (
            (x || S) &&
            ((S =
              z.window === z
                ? z
                : (S = z.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            x
              ? (($ = e.relatedTarget || e.toElement),
                (x = g),
                ($ = $ ? Je($) : null),
                $ !== null &&
                  ((xt = E($)),
                  (k = $.tag),
                  $ !== xt || (k !== 5 && k !== 27 && k !== 6)) &&
                  ($ = null))
              : ((x = null), ($ = g)),
            x !== $)
          ) {
            if (
              ((k = ns),
              (M = "onMouseLeave"),
              (v = "onMouseEnter"),
              (h = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((k = cs),
                (M = "onPointerLeave"),
                (v = "onPointerEnter"),
                (h = "pointer")),
              (xt = x == null ? S : Ya(x)),
              (y = $ == null ? S : Ya($)),
              (S = new k(M, h + "leave", x, e, z)),
              (S.target = xt),
              (S.relatedTarget = y),
              (M = null),
              Je(z) === g &&
                ((k = new k(v, h + "enter", $, e, z)),
                (k.target = y),
                (k.relatedTarget = xt),
                (M = k)),
              (xt = M),
              x && $)
            )
              l: {
                for (k = x, v = $, h = 0, y = k; y; y = Oa(y)) h++;
                for (y = 0, M = v; M; M = Oa(M)) y++;
                for (; 0 < h - y; ) (k = Oa(k)), h--;
                for (; 0 < y - h; ) (v = Oa(v)), y--;
                for (; h--; ) {
                  if (k === v || (v !== null && k === v.alternate)) break l;
                  (k = Oa(k)), (v = Oa(v));
                }
                k = null;
              }
            else k = null;
            x !== null && Fo(_, S, x, k, !1),
              $ !== null && xt !== null && Fo(_, xt, $, k, !0);
          }
        }
        t: {
          if (
            ((S = g ? Ya(g) : window),
            (x = S.nodeName && S.nodeName.toLowerCase()),
            x === "select" || (x === "input" && S.type === "file"))
          )
            var G = vs;
          else if (ms(S))
            if (ys) G = yh;
            else {
              G = hh;
              var at = mh;
            }
          else
            (x = S.nodeName),
              !x ||
              x.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? g && di(g.elementType) && (G = vs)
                : (G = vh);
          if (G && (G = G(t, g))) {
            hs(_, G, e, z);
            break t;
          }
          at && at(t, S, g),
            t === "focusout" &&
              g &&
              S.type === "number" &&
              g.memoizedProps.value != null &&
              oi(S, "number", S.value);
        }
        switch (((at = g ? Ya(g) : window), t)) {
          case "focusin":
            (ms(at) || at.contentEditable === "true") &&
              ((ua = at), (Mi = g), (Ja = null));
            break;
          case "focusout":
            Ja = Mi = ua = null;
            break;
          case "mousedown":
            _i = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_i = !1), Ts(_, e, z);
            break;
          case "selectionchange":
            if (ph) break;
          case "keydown":
          case "keyup":
            Ts(_, e, z);
        }
        var V;
        if (Ai)
          t: {
            switch (t) {
              case "compositionstart":
                var J = "onCompositionStart";
                break t;
              case "compositionend":
                J = "onCompositionEnd";
                break t;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break t;
            }
            J = void 0;
          }
        else
          aa
            ? os(t, e) && (J = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (J = "onCompositionStart");
        J &&
          (fs &&
            e.locale !== "ko" &&
            (aa || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && aa && (V = as())
              : ((ae = z),
                (gi = "value" in ae ? ae.value : ae.textContent),
                (aa = !0))),
          (at = qn(g, J)),
          0 < at.length &&
            ((J = new is(J, t, null, e, z)),
            _.push({ event: J, listeners: at }),
            V ? (J.data = V) : ((V = ds(e)), V !== null && (J.data = V)))),
          (V = fh ? sh(t, e) : rh(t, e)) &&
            ((J = qn(g, "onBeforeInput")),
            0 < J.length &&
              ((at = new is("onBeforeInput", "beforeinput", null, e, z)),
              _.push({ event: at, listeners: J }),
              (at.data = V))),
          t0(_, t, g, e, z);
      }
      $o(_, l);
    });
  }
  function Au(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function qn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = wa(t, e)),
          u != null && a.unshift(Au(t, u, n)),
          (u = wa(t, l)),
          u != null && a.push(Au(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Oa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fo(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        r = f.alternate,
        g = f.stateNode;
      if (((f = f.tag), r !== null && r === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        g === null ||
        ((r = g),
        u
          ? ((g = wa(e, n)), g != null && i.unshift(Au(e, g, r)))
          : u || ((g = wa(e, n)), g != null && i.push(Au(e, g, r)))),
        (e = e.return);
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var u0 = /\r\n?/g,
    n0 = /\u0000|\uFFFD/g;
  function Po(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        u0,
        `
`
      )
      .replace(n0, "");
  }
  function Io(t, l) {
    return (l = Po(l)), Po(t) === l;
  }
  function Bn() {}
  function St(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? l === "body" || (l === "textarea" && a === "") || ta(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            l !== "body" &&
            ta(t, "" + a);
        break;
      case "className":
        Xu(t, "class", a);
        break;
      case "tabIndex":
        Xu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xu(t, e, a);
        break;
      case "style":
        ts(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Xu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        (a = Zu("" + a)), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (l !== "input" && St(t, l, "name", u.name, u, null),
                St(t, l, "formEncType", u.formEncType, u, null),
                St(t, l, "formMethod", u.formMethod, u, null),
                St(t, l, "formTarget", u.formTarget, u, null))
              : (St(t, l, "encType", u.encType, u, null),
                St(t, l, "method", u.method, u, null),
                St(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        (a = Zu("" + a)), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Bn);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (e = Zu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "" + a)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a);
        break;
      case "popover":
        it("beforetoggle", t), it("toggle", t), wu(t, "popover", a);
        break;
      case "xlinkActuate":
        Cl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Cl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Cl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Cl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Cl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Cl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Cl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Cl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Cl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        wu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Cm.get(e) || e), wu(t, e, a));
    }
  }
  function Wc(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        ts(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ta(t, a)
          : (typeof a == "number" || typeof a == "bigint") && ta(t, "" + a);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Vf.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (l = e.slice(2, u ? e.length - 7 : void 0)),
              (n = t[It] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && t.removeEventListener(l, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, u);
              break t;
            }
            e in t
              ? (t[e] = a)
              : a === !0
              ? t.setAttribute(e, "")
              : wu(t, e, a);
          }
    }
  }
  function Kt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        it("error", t), it("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  St(t, l, n, i, e, null);
              }
          }
        u && St(t, l, "srcSet", e.srcSet, e, null),
          a && St(t, l, "src", e.src, e, null);
        return;
      case "input":
        it("invalid", t);
        var f = (n = i = u = null),
          r = null,
          g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null)
              switch (a) {
                case "name":
                  u = z;
                  break;
                case "type":
                  i = z;
                  break;
                case "checked":
                  r = z;
                  break;
                case "defaultChecked":
                  g = z;
                  break;
                case "value":
                  n = z;
                  break;
                case "defaultValue":
                  f = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(s(137, l));
                  break;
                default:
                  St(t, l, a, z, e, null);
              }
          }
        Wf(t, n, f, r, g, i, u, !1), Qu(t);
        return;
      case "select":
        it("invalid", t), (a = i = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((f = e[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                St(t, l, u, f, e, null);
            }
        (l = n),
          (e = i),
          (t.multiple = !!a),
          l != null ? Ie(t, !!a, l, !1) : e != null && Ie(t, !!a, e, !0);
        return;
      case "textarea":
        it("invalid", t), (n = u = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                St(t, l, i, f, e, null);
            }
        Pf(t, a, u, n), Qu(t);
        return;
      case "option":
        for (r in e)
          if (e.hasOwnProperty(r) && ((a = e[r]), a != null))
            switch (r) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                St(t, l, r, a, e, null);
            }
        return;
      case "dialog":
        it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xu.length; a++) it(xu[a], t);
        break;
      case "image":
        it("error", t), it("load", t);
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", t), it("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in e)
          if (e.hasOwnProperty(g) && ((a = e[g]), a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                St(t, l, g, a, e, null);
            }
        return;
      default:
        if (di(l)) {
          for (z in e)
            e.hasOwnProperty(z) &&
              ((a = e[z]), a !== void 0 && Wc(t, l, z, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && St(t, l, f, a, e, null));
  }
  function i0(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          f = null,
          r = null,
          g = null,
          z = null;
        for (x in e) {
          var _ = e[x];
          if (e.hasOwnProperty(x) && _ != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = _;
              default:
                a.hasOwnProperty(x) || St(t, l, x, null, a, _);
            }
        }
        for (var S in a) {
          var x = a[S];
          if (((_ = e[S]), a.hasOwnProperty(S) && (x != null || _ != null)))
            switch (S) {
              case "type":
                n = x;
                break;
              case "name":
                u = x;
                break;
              case "checked":
                g = x;
                break;
              case "defaultChecked":
                z = x;
                break;
              case "value":
                i = x;
                break;
              case "defaultValue":
                f = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(s(137, l));
                break;
              default:
                x !== _ && St(t, l, S, x, a, _);
            }
        }
        ri(t, i, f, r, g, z, n, u);
        return;
      case "select":
        x = i = f = S = null;
        for (n in e)
          if (((r = e[n]), e.hasOwnProperty(n) && r != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                x = r;
              default:
                a.hasOwnProperty(n) || St(t, l, n, null, a, r);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (r = e[u]),
            a.hasOwnProperty(u) && (n != null || r != null))
          )
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== r && St(t, l, u, n, a, r);
            }
        (l = f),
          (e = i),
          (a = x),
          S != null
            ? Ie(t, !!e, S, !1)
            : !!a != !!e &&
              (l != null ? Ie(t, !!e, l, !0) : Ie(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        x = S = null;
        for (f in e)
          if (
            ((u = e[f]),
            e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, l, f, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                x = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && St(t, l, i, u, a, n);
            }
        Ff(t, S, x);
        return;
      case "option":
        for (var $ in e)
          if (
            ((S = e[$]),
            e.hasOwnProperty($) && S != null && !a.hasOwnProperty($))
          )
            switch ($) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(t, l, $, null, a, S);
            }
        for (r in a)
          if (
            ((S = a[r]),
            (x = e[r]),
            a.hasOwnProperty(r) && S !== x && (S != null || x != null))
          )
            switch (r) {
              case "selected":
                t.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                St(t, l, r, S, a, x);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var k in e)
          (S = e[k]),
            e.hasOwnProperty(k) &&
              S != null &&
              !a.hasOwnProperty(k) &&
              St(t, l, k, null, a, S);
        for (g in a)
          if (
            ((S = a[g]),
            (x = e[g]),
            a.hasOwnProperty(g) && S !== x && (S != null || x != null))
          )
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(s(137, l));
                break;
              default:
                St(t, l, g, S, a, x);
            }
        return;
      default:
        if (di(l)) {
          for (var xt in e)
            (S = e[xt]),
              e.hasOwnProperty(xt) &&
                S !== void 0 &&
                !a.hasOwnProperty(xt) &&
                Wc(t, l, xt, void 0, a, S);
          for (z in a)
            (S = a[z]),
              (x = e[z]),
              !a.hasOwnProperty(z) ||
                S === x ||
                (S === void 0 && x === void 0) ||
                Wc(t, l, z, S, a, x);
          return;
        }
    }
    for (var v in e)
      (S = e[v]),
        e.hasOwnProperty(v) &&
          S != null &&
          !a.hasOwnProperty(v) &&
          St(t, l, v, null, a, S);
    for (_ in a)
      (S = a[_]),
        (x = e[_]),
        !a.hasOwnProperty(_) ||
          S === x ||
          (S == null && x == null) ||
          St(t, l, _, S, a, x);
  }
  var Fc = null,
    Pc = null;
  function Gn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function td(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ld(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Ic(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tf = null;
  function c0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === tf
        ? !1
        : ((tf = t), !0)
      : ((tf = null), !1);
  }
  var ed = typeof setTimeout == "function" ? setTimeout : void 0,
    f0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ad = typeof Promise == "function" ? Promise : void 0,
    s0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ad < "u"
        ? function (t) {
            return ad.resolve(null).then(t).catch(r0);
          }
        : ed;
  function r0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function be(t) {
    return t === "head";
  }
  function ud(t, l) {
    var e = l,
      a = 0,
      u = 0;
    do {
      var n = e.nextSibling;
      if ((t.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var i = t.ownerDocument;
            if ((e & 1 && Eu(i.documentElement), e & 2 && Eu(i.body), e & 4))
              for (e = i.head, Eu(e), i = e.firstChild; i; ) {
                var f = i.nextSibling,
                  r = i.nodeName;
                i[Ga] ||
                  r === "SCRIPT" ||
                  r === "STYLE" ||
                  (r === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(i),
                  (i = f);
              }
          }
          if (u === 0) {
            t.removeChild(n), Ru(l);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? u++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = n;
    } while (e);
    Ru(l);
  }
  function lf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lf(e), ii(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function o0(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ga])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = _l(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function d0(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = _l(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ef(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function m0(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete") l();
    else {
      var a = function () {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function _l(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
        )
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var af = null;
  function nd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function id(t, l, e) {
    switch (((l = Gn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Eu(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    ii(t);
  }
  var Al = new Map(),
    cd = new Set();
  function Yn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var $l = C.d;
  C.d = { f: h0, r: v0, D: y0, C: g0, L: p0, m: b0, X: x0, S: S0, M: A0 };
  function h0() {
    var t = $l.f(),
      l = Dn();
    return t || l;
  }
  function v0(t) {
    var l = $e(t);
    l !== null && l.tag === 5 && l.type === "form" ? Mr(l) : $l.r(t);
  }
  var Na = typeof document > "u" ? null : document;
  function fd(t, l, e) {
    var a = Na;
    if (a && typeof l == "string" && l) {
      var u = vl(l);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        cd.has(u) ||
          (cd.add(u),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(u) === null &&
            ((l = a.createElement("link")),
            Kt(l, "link", t),
            wt(l),
            a.head.appendChild(l)));
    }
  }
  function y0(t) {
    $l.D(t), fd("dns-prefetch", t, null);
  }
  function g0(t, l) {
    $l.C(t, l), fd("preconnect", t, l);
  }
  function p0(t, l, e) {
    $l.L(t, l, e);
    var a = Na;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + vl(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + vl(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + vl(e.imageSizes) + '"]'))
        : (u += '[href="' + vl(t) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = Da(t);
          break;
        case "script":
          n = Ra(t);
      }
      Al.has(n) ||
        ((t = R(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e
        )),
        Al.set(n, t),
        a.querySelector(u) !== null ||
          (l === "style" && a.querySelector(Tu(n))) ||
          (l === "script" && a.querySelector(zu(n))) ||
          ((l = a.createElement("link")),
          Kt(l, "link", t),
          wt(l),
          a.head.appendChild(l)));
    }
  }
  function b0(t, l) {
    $l.m(t, l);
    var e = Na;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + vl(a) + '"][href="' + vl(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ra(t);
      }
      if (
        !Al.has(n) &&
        ((t = R({ rel: "modulepreload", href: t }, l)),
        Al.set(n, t),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(zu(n))) return;
        }
        (a = e.createElement("link")),
          Kt(a, "link", t),
          wt(a),
          e.head.appendChild(a);
      }
    }
  }
  function S0(t, l, e) {
    $l.S(t, l, e);
    var a = Na;
    if (a && t) {
      var u = We(a).hoistableStyles,
        n = Da(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(Tu(n)))) f.loading = 5;
        else {
          (t = R({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = Al.get(n)) && uf(t, e);
          var r = (i = a.createElement("link"));
          wt(r),
            Kt(r, "link", t),
            (r._p = new Promise(function (g, z) {
              (r.onload = g), (r.onerror = z);
            })),
            r.addEventListener("load", function () {
              f.loading |= 1;
            }),
            r.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            wn(i, l, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: f }),
          u.set(n, i);
      }
    }
  }
  function x0(t, l) {
    $l.X(t, l);
    var e = Na;
    if (e && t) {
      var a = We(e).hoistableScripts,
        u = Ra(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(zu(u))),
        n ||
          ((t = R({ src: t, async: !0 }, l)),
          (l = Al.get(u)) && nf(t, l),
          (n = e.createElement("script")),
          wt(n),
          Kt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function A0(t, l) {
    $l.M(t, l);
    var e = Na;
    if (e && t) {
      var a = We(e).hoistableScripts,
        u = Ra(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(zu(u))),
        n ||
          ((t = R({ src: t, async: !0, type: "module" }, l)),
          (l = Al.get(u)) && nf(t, l),
          (n = e.createElement("script")),
          wt(n),
          Kt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function sd(t, l, e, a) {
    var u = (u = W.current) ? Yn(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Da(e.href)),
            (e = We(u).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Da(e.href);
          var n = We(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(Tu(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              Al.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Al.set(t, e),
                n || E0(u, t, e, i.state))),
            l && a === null)
          )
            throw Error(s(528, ""));
          return i;
        }
        if (l && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = Ra(e)),
              (e = We(u).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Da(t) {
    return 'href="' + vl(t) + '"';
  }
  function Tu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rd(t) {
    return R({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function E0(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (a.loading = 1)
      : ((l = t.createElement("link")),
        (a.preload = l),
        l.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Kt(l, "link", e),
        wt(l),
        t.head.appendChild(l));
  }
  function Ra(t) {
    return '[src="' + vl(t) + '"]';
  }
  function zu(t) {
    return "script[async]" + t;
  }
  function od(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + vl(e.href) + '"]');
          if (a) return (l.instance = a), wt(a), a;
          var u = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            wt(a),
            Kt(a, "style", u),
            wn(a, e.precedence, t),
            (l.instance = a)
          );
        case "stylesheet":
          u = Da(e.href);
          var n = t.querySelector(Tu(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), wt(n), n;
          (a = rd(e)),
            (u = Al.get(u)) && uf(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            wt(n);
          var i = n;
          return (
            (i._p = new Promise(function (f, r) {
              (i.onload = f), (i.onerror = r);
            })),
            Kt(n, "link", a),
            (l.state.loading |= 4),
            wn(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = Ra(e.src)),
            (u = t.querySelector(zu(n)))
              ? ((l.instance = u), wt(u), u)
              : ((a = e),
                (u = Al.get(n)) && ((a = R({}, e)), nf(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                wt(u),
                Kt(u, "link", a),
                t.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), wn(a, e.precedence, t));
    return l.instance;
  }
  function wn(t, l, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === l) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function uf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function nf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var Xn = null;
  function dd(t, l, e) {
    if (Xn === null) {
      var a = new Map(),
        u = (Xn = new Map());
      u.set(e, a);
    } else (u = Xn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), e = e.getElementsByTagName(t), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ga] ||
          n[$t] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function md(t, l, e) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null
      );
  }
  function T0(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled), typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function hd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Mu = null;
  function z0() {}
  function M0(t, l, e) {
    if (Mu === null) throw Error(s(475));
    var a = Mu;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Da(e.href),
          n = t.querySelector(Tu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Qn.bind(a)), t.then(a, a)),
            (l.state.loading |= 4),
            (l.instance = n),
            wt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = rd(e)),
          (u = Al.get(u)) && uf(e, u),
          (n = n.createElement("link")),
          wt(n);
        var i = n;
        (i._p = new Promise(function (f, r) {
          (i.onload = f), (i.onerror = r);
        })),
          Kt(n, "link", e),
          (l.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (a.count++,
          (l = Qn.bind(a)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function _0() {
    if (Mu === null) throw Error(s(475));
    var t = Mu;
    return (
      t.stylesheets && t.count === 0 && cf(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && cf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Qn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) cf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Vn = null;
  function cf(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Vn = new Map()),
        l.forEach(O0, t),
        (Vn = null),
        Qn.call(t));
  }
  function O0(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Vn.get(t);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Vn.set(t, e);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (u = l.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Qn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var _u = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: D,
    _currentValue2: D,
    _threadCount: 0,
  };
  function N0(t, l, e, a, u, n, i, f) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ei(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ei(0)),
      (this.hiddenUpdates = ei(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function vd(t, l, e, a, u, n, i, f, r, g, z, _) {
    return (
      (t = new N0(t, l, e, i, f, r, g, _)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = fl(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = Xi()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
      Li(n),
      t
    );
  }
  function yd(t) {
    return t ? ((t = fa), t) : fa;
  }
  function gd(t, l, e, a, u, n) {
    (u = yd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ie(l)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = ce(t, a, l)),
      e !== null && (ml(e, t, l), au(e, t, l));
  }
  function pd(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function ff(t, l) {
    pd(t, l), (t = t.alternate) && pd(t, l);
  }
  function bd(t) {
    if (t.tag === 13) {
      var l = ca(t, 67108864);
      l !== null && ml(l, t, 67108864), ff(t, 67108864);
    }
  }
  var Zn = !0;
  function D0(t, l, e, a) {
    var u = T.T;
    T.T = null;
    var n = C.p;
    try {
      (C.p = 2), sf(t, l, e, a);
    } finally {
      (C.p = n), (T.T = u);
    }
  }
  function R0(t, l, e, a) {
    var u = T.T;
    T.T = null;
    var n = C.p;
    try {
      (C.p = 8), sf(t, l, e, a);
    } finally {
      (C.p = n), (T.T = u);
    }
  }
  function sf(t, l, e, a) {
    if (Zn) {
      var u = rf(a);
      if (u === null) $c(t, l, a, Ln, e), xd(t, a);
      else if (U0(u, t, l, e, a)) a.stopPropagation();
      else if ((xd(t, a), l & 4 && -1 < H0.indexOf(t))) {
        for (; u !== null; ) {
          var n = $e(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = _e(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var r = 1 << (31 - il(i));
                      (f.entanglements[1] |= r), (i &= ~r);
                    }
                    jl(n), (gt & 6) === 0 && ((On = Nl() + 500), Su(0));
                  }
                }
                break;
              case 13:
                (f = ca(n, 2)), f !== null && ml(f, n, 2), Dn(), ff(n, 2);
            }
          if (((n = rf(a)), n === null && $c(t, l, a, Ln, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else $c(t, l, a, null, e);
    }
  }
  function rf(t) {
    return (t = hi(t)), of(t);
  }
  var Ln = null;
  function of(t) {
    if (((Ln = null), (t = Je(t)), t !== null)) {
      var l = E(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = O(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return (Ln = t), null;
  }
  function Sd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (gm()) {
          case Uf:
            return 2;
          case jf:
            return 8;
          case qu:
          case pm:
            return 32;
          case Cf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1,
    Se = null,
    xe = null,
    Ae = null,
    Ou = new Map(),
    Nu = new Map(),
    Ee = [],
    H0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function xd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Se = null;
        break;
      case "dragenter":
      case "dragleave":
        xe = null;
        break;
      case "mouseover":
      case "mouseout":
        Ae = null;
        break;
      case "pointerover":
      case "pointerout":
        Ou.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nu.delete(l.pointerId);
    }
  }
  function Du(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = $e(l)), l !== null && bd(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t);
  }
  function U0(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return (Se = Du(Se, t, l, e, a, u)), !0;
      case "dragenter":
        return (xe = Du(xe, t, l, e, a, u)), !0;
      case "mouseover":
        return (Ae = Du(Ae, t, l, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ou.set(n, Du(Ou.get(n) || null, t, l, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), Nu.set(n, Du(Nu.get(n) || null, t, l, e, a, u)), !0
        );
    }
    return !1;
  }
  function Ad(t) {
    var l = Je(t.target);
    if (l !== null) {
      var e = E(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = O(e)), l !== null)) {
            (t.blockedOn = l),
              Mm(t.priority, function () {
                if (e.tag === 13) {
                  var a = dl();
                  a = ai(a);
                  var u = ca(e, a);
                  u !== null && ml(u, e, a), ff(e, a);
                }
              });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Kn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = rf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        (mi = a), e.target.dispatchEvent(a), (mi = null);
      } else return (l = $e(e)), l !== null && bd(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function Ed(t, l, e) {
    Kn(t) && e.delete(l);
  }
  function j0() {
    (df = !1),
      Se !== null && Kn(Se) && (Se = null),
      xe !== null && Kn(xe) && (xe = null),
      Ae !== null && Kn(Ae) && (Ae = null),
      Ou.forEach(Ed),
      Nu.forEach(Ed);
  }
  function kn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      df ||
        ((df = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, j0)));
  }
  var Jn = null;
  function Td(t) {
    Jn !== t &&
      ((Jn = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Jn === t && (Jn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            u = t[l + 2];
          if (typeof a != "function") {
            if (of(a || e) === null) continue;
            break;
          }
          var n = $e(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            rc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Ru(t) {
    function l(r) {
      return kn(r, t);
    }
    Se !== null && kn(Se, t),
      xe !== null && kn(xe, t),
      Ae !== null && kn(Ae, t),
      Ou.forEach(l),
      Nu.forEach(l);
    for (var e = 0; e < Ee.length; e++) {
      var a = Ee[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ee.length && ((e = Ee[0]), e.blockedOn === null); )
      Ad(e), e.blockedOn === null && Ee.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[It] || null;
        if (typeof n == "function") i || Td(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[It] || null))) f = i.formAction;
            else if (of(u) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            Td(e);
        }
      }
  }
  function mf(t) {
    this._internalRoot = t;
  }
  ($n.prototype.render = mf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(s(409));
      var e = l.current,
        a = dl();
      gd(e, a, t, l, null, null);
    }),
    ($n.prototype.unmount = mf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          gd(t.current, 2, null, t, null, null), Dn(), (l[ke] = null);
        }
      });
  function $n(t) {
    this._internalRoot = t;
  }
  $n.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = wf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Ee.length && l !== 0 && l < Ee[e].priority; e++);
      Ee.splice(e, 0, t), e === 0 && Ad(t);
    }
  };
  var zd = o.version;
  if (zd !== "19.1.0") throw Error(s(527, zd, "19.1.0"));
  C.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = A(l)),
      (t = t !== null ? b(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var C0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wn.isDisabled && Wn.supportsFiber)
      try {
        (Ca = Wn.inject(C0)), (nl = Wn);
      } catch {}
  }
  return (
    (Uu.createRoot = function (t, l) {
      if (!p(t)) throw Error(s(299));
      var e = !1,
        a = "",
        u = wr,
        n = Xr,
        i = Qr,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (f = l.unstable_transitionCallbacks)),
        (l = vd(t, 1, !1, null, null, e, a, u, n, i, f, null)),
        (t[ke] = l.current),
        Jc(t),
        new mf(l)
      );
    }),
    (Uu.hydrateRoot = function (t, l, e) {
      if (!p(t)) throw Error(s(299));
      var a = !1,
        u = "",
        n = wr,
        i = Xr,
        f = Qr,
        r = null,
        g = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (r = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (g = e.formState)),
        (l = vd(t, 1, !0, l, e ?? null, a, u, n, i, f, r, g)),
        (l.context = yd(null)),
        (e = l.current),
        (a = dl()),
        (a = ai(a)),
        (u = ie(a)),
        (u.callback = null),
        ce(e, u, a),
        (e = a),
        (l.current.lanes = e),
        Ba(l, e),
        jl(l),
        (t[ke] = l.current),
        Jc(t),
        new $n(l)
      );
    }),
    (Uu.version = "19.1.0"),
    Uu
  );
}
var Cd;
function K0() {
  if (Cd) return yf.exports;
  Cd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), (yf.exports = L0()), yf.exports;
}
var k0 = K0();
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $0 = (c) =>
    c.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, m, s) =>
      s ? s.toUpperCase() : m.toLowerCase()
    ),
  qd = (c) => {
    const o = $0(c);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  $d = (...c) =>
    c
      .filter((o, m, s) => !!o && o.trim() !== "" && s.indexOf(o) === m)
      .join(" ")
      .trim(),
  W0 = (c) => {
    for (const o in c)
      if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var F0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P0 = P.forwardRef(
  (
    {
      color: c = "currentColor",
      size: o = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: s,
      className: p = "",
      children: E,
      iconNode: O,
      ...H
    },
    A
  ) =>
    P.createElement(
      "svg",
      {
        ref: A,
        ...F0,
        width: o,
        height: o,
        stroke: c,
        strokeWidth: s ? (Number(m) * 24) / Number(o) : m,
        className: $d("lucide", p),
        ...(!E && !W0(H) && { "aria-hidden": "true" }),
        ...H,
      },
      [
        ...O.map(([b, R]) => P.createElement(b, R)),
        ...(Array.isArray(E) ? E : [E]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ke = (c, o) => {
  const m = P.forwardRef(({ className: s, ...p }, E) =>
    P.createElement(P0, {
      ref: E,
      iconNode: o,
      className: $d(`lucide-${J0(qd(c))}`, `lucide-${c}`, s),
      ...p,
    })
  );
  return (m.displayName = qd(c)), m;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I0 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  tv = Ke("circle-alert", I0);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  ev = Ke("download", lv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  uv = Ke("file-text", av);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nv = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  Bd = Ke("graduation-cap", nv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iv = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  cv = Ke("plus", iv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ],
  sv = Ke("trash-2", fv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rv = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  ov = Ke("upload", rv);
function Gd(c, o) {
  if (typeof c == "function") return c(o);
  c != null && (c.current = o);
}
function dv(...c) {
  return (o) => {
    let m = !1;
    const s = c.map((p) => {
      const E = Gd(p, o);
      return !m && typeof E == "function" && (m = !0), E;
    });
    if (m)
      return () => {
        for (let p = 0; p < s.length; p++) {
          const E = s[p];
          typeof E == "function" ? E() : Gd(c[p], null);
        }
      };
  };
}
function mv(...c) {
  return P.useCallback(dv(...c), c);
}
function Wd(c) {
  const o = vv(c),
    m = P.forwardRef((s, p) => {
      const { children: E, ...O } = s,
        H = P.Children.toArray(E),
        A = H.find(gv);
      if (A) {
        const b = A.props.children,
          R = H.map((Q) =>
            Q === A
              ? P.Children.count(b) > 1
                ? P.Children.only(null)
                : P.isValidElement(b)
                ? b.props.children
                : null
              : Q
          );
        return U.jsx(o, {
          ...O,
          ref: p,
          children: P.isValidElement(b) ? P.cloneElement(b, void 0, R) : null,
        });
      }
      return U.jsx(o, { ...O, ref: p, children: E });
    });
  return (m.displayName = `${c}.Slot`), m;
}
var hv = Wd("Slot");
function vv(c) {
  const o = P.forwardRef((m, s) => {
    const { children: p, ...E } = m,
      O = P.isValidElement(p) ? bv(p) : void 0,
      H = mv(O, s);
    if (P.isValidElement(p)) {
      const A = pv(E, p.props);
      return p.type !== P.Fragment && (A.ref = H), P.cloneElement(p, A);
    }
    return P.Children.count(p) > 1 ? P.Children.only(null) : null;
  });
  return (o.displayName = `${c}.SlotClone`), o;
}
var yv = Symbol("radix.slottable");
function gv(c) {
  return (
    P.isValidElement(c) &&
    typeof c.type == "function" &&
    "__radixId" in c.type &&
    c.type.__radixId === yv
  );
}
function pv(c, o) {
  const m = { ...o };
  for (const s in o) {
    const p = c[s],
      E = o[s];
    /^on[A-Z]/.test(s)
      ? p && E
        ? (m[s] = (...H) => {
            const A = E(...H);
            return p(...H), A;
          })
        : p && (m[s] = p)
      : s === "style"
      ? (m[s] = { ...p, ...E })
      : s === "className" && (m[s] = [p, E].filter(Boolean).join(" "));
  }
  return { ...c, ...m };
}
function bv(c) {
  var s, p;
  let o =
      (s = Object.getOwnPropertyDescriptor(c.props, "ref")) == null
        ? void 0
        : s.get,
    m = o && "isReactWarning" in o && o.isReactWarning;
  return m
    ? c.ref
    : ((o =
        (p = Object.getOwnPropertyDescriptor(c, "ref")) == null
          ? void 0
          : p.get),
      (m = o && "isReactWarning" in o && o.isReactWarning),
      m ? c.props.ref : c.props.ref || c.ref);
}
function Fd(c) {
  var o,
    m,
    s = "";
  if (typeof c == "string" || typeof c == "number") s += c;
  else if (typeof c == "object")
    if (Array.isArray(c)) {
      var p = c.length;
      for (o = 0; o < p; o++)
        c[o] && (m = Fd(c[o])) && (s && (s += " "), (s += m));
    } else for (m in c) c[m] && (s && (s += " "), (s += m));
  return s;
}
function Pd() {
  for (var c, o, m = 0, s = "", p = arguments.length; m < p; m++)
    (c = arguments[m]) && (o = Fd(c)) && (s && (s += " "), (s += o));
  return s;
}
const Yd = (c) => (typeof c == "boolean" ? `${c}` : c === 0 ? "0" : c),
  wd = Pd,
  Id = (c, o) => (m) => {
    var s;
    if ((o == null ? void 0 : o.variants) == null)
      return wd(
        c,
        m == null ? void 0 : m.class,
        m == null ? void 0 : m.className
      );
    const { variants: p, defaultVariants: E } = o,
      O = Object.keys(p).map((b) => {
        const R = m == null ? void 0 : m[b],
          Q = E == null ? void 0 : E[b];
        if (R === null) return null;
        const K = Yd(R) || Yd(Q);
        return p[b][K];
      }),
      H =
        m &&
        Object.entries(m).reduce((b, R) => {
          let [Q, K] = R;
          return K === void 0 || (b[Q] = K), b;
        }, {}),
      A =
        o == null || (s = o.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((b, R) => {
              let { class: Q, className: K, ...ht } = R;
              return Object.entries(ht).every((et) => {
                let [ft, vt] = et;
                return Array.isArray(vt)
                  ? vt.includes({ ...E, ...H }[ft])
                  : { ...E, ...H }[ft] === vt;
              })
                ? [...b, Q, K]
                : b;
            }, []);
    return wd(
      c,
      O,
      A,
      m == null ? void 0 : m.class,
      m == null ? void 0 : m.className
    );
  },
  _f = "-",
  Sv = (c) => {
    const o = Av(c),
      { conflictingClassGroups: m, conflictingClassGroupModifiers: s } = c;
    return {
      getClassGroupId: (O) => {
        const H = O.split(_f);
        return H[0] === "" && H.length !== 1 && H.shift(), tm(H, o) || xv(O);
      },
      getConflictingClassGroupIds: (O, H) => {
        const A = m[O] || [];
        return H && s[O] ? [...A, ...s[O]] : A;
      },
    };
  },
  tm = (c, o) => {
    var O;
    if (c.length === 0) return o.classGroupId;
    const m = c[0],
      s = o.nextPart.get(m),
      p = s ? tm(c.slice(1), s) : void 0;
    if (p) return p;
    if (o.validators.length === 0) return;
    const E = c.join(_f);
    return (O = o.validators.find(({ validator: H }) => H(E))) == null
      ? void 0
      : O.classGroupId;
  },
  Xd = /^\[(.+)\]$/,
  xv = (c) => {
    if (Xd.test(c)) {
      const o = Xd.exec(c)[1],
        m = o == null ? void 0 : o.substring(0, o.indexOf(":"));
      if (m) return "arbitrary.." + m;
    }
  },
  Av = (c) => {
    const { theme: o, classGroups: m } = c,
      s = { nextPart: new Map(), validators: [] };
    for (const p in m) Af(m[p], s, p, o);
    return s;
  },
  Af = (c, o, m, s) => {
    c.forEach((p) => {
      if (typeof p == "string") {
        const E = p === "" ? o : Qd(o, p);
        E.classGroupId = m;
        return;
      }
      if (typeof p == "function") {
        if (Ev(p)) {
          Af(p(s), o, m, s);
          return;
        }
        o.validators.push({ validator: p, classGroupId: m });
        return;
      }
      Object.entries(p).forEach(([E, O]) => {
        Af(O, Qd(o, E), m, s);
      });
    });
  },
  Qd = (c, o) => {
    let m = c;
    return (
      o.split(_f).forEach((s) => {
        m.nextPart.has(s) ||
          m.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (m = m.nextPart.get(s));
      }),
      m
    );
  },
  Ev = (c) => c.isThemeGetter,
  Tv = (c) => {
    if (c < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      m = new Map(),
      s = new Map();
    const p = (E, O) => {
      m.set(E, O), o++, o > c && ((o = 0), (s = m), (m = new Map()));
    };
    return {
      get(E) {
        let O = m.get(E);
        if (O !== void 0) return O;
        if ((O = s.get(E)) !== void 0) return p(E, O), O;
      },
      set(E, O) {
        m.has(E) ? m.set(E, O) : p(E, O);
      },
    };
  },
  Ef = "!",
  Tf = ":",
  zv = Tf.length,
  Mv = (c) => {
    const { prefix: o, experimentalParseClassName: m } = c;
    let s = (p) => {
      const E = [];
      let O = 0,
        H = 0,
        A = 0,
        b;
      for (let et = 0; et < p.length; et++) {
        let ft = p[et];
        if (O === 0 && H === 0) {
          if (ft === Tf) {
            E.push(p.slice(A, et)), (A = et + zv);
            continue;
          }
          if (ft === "/") {
            b = et;
            continue;
          }
        }
        ft === "["
          ? O++
          : ft === "]"
          ? O--
          : ft === "("
          ? H++
          : ft === ")" && H--;
      }
      const R = E.length === 0 ? p : p.substring(A),
        Q = _v(R),
        K = Q !== R,
        ht = b && b > A ? b - A : void 0;
      return {
        modifiers: E,
        hasImportantModifier: K,
        baseClassName: Q,
        maybePostfixModifierPosition: ht,
      };
    };
    if (o) {
      const p = o + Tf,
        E = s;
      s = (O) =>
        O.startsWith(p)
          ? E(O.substring(p.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: O,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (m) {
      const p = s;
      s = (E) => m({ className: E, parseClassName: p });
    }
    return s;
  },
  _v = (c) =>
    c.endsWith(Ef)
      ? c.substring(0, c.length - 1)
      : c.startsWith(Ef)
      ? c.substring(1)
      : c,
  Ov = (c) => {
    const o = Object.fromEntries(c.orderSensitiveModifiers.map((s) => [s, !0]));
    return (s) => {
      if (s.length <= 1) return s;
      const p = [];
      let E = [];
      return (
        s.forEach((O) => {
          O[0] === "[" || o[O] ? (p.push(...E.sort(), O), (E = [])) : E.push(O);
        }),
        p.push(...E.sort()),
        p
      );
    };
  },
  Nv = (c) => ({
    cache: Tv(c.cacheSize),
    parseClassName: Mv(c),
    sortModifiers: Ov(c),
    ...Sv(c),
  }),
  Dv = /\s+/,
  Rv = (c, o) => {
    const {
        parseClassName: m,
        getClassGroupId: s,
        getConflictingClassGroupIds: p,
        sortModifiers: E,
      } = o,
      O = [],
      H = c.trim().split(Dv);
    let A = "";
    for (let b = H.length - 1; b >= 0; b -= 1) {
      const R = H[b],
        {
          isExternal: Q,
          modifiers: K,
          hasImportantModifier: ht,
          baseClassName: et,
          maybePostfixModifierPosition: ft,
        } = m(R);
      if (Q) {
        A = R + (A.length > 0 ? " " + A : A);
        continue;
      }
      let vt = !!ft,
        jt = s(vt ? et.substring(0, ft) : et);
      if (!jt) {
        if (!vt) {
          A = R + (A.length > 0 ? " " + A : A);
          continue;
        }
        if (((jt = s(et)), !jt)) {
          A = R + (A.length > 0 ? " " + A : A);
          continue;
        }
        vt = !1;
      }
      const kt = E(K).join(":"),
        L = ht ? kt + Ef : kt,
        F = L + jt;
      if (O.includes(F)) continue;
      O.push(F);
      const Z = p(jt, vt);
      for (let yt = 0; yt < Z.length; ++yt) {
        const st = Z[yt];
        O.push(L + st);
      }
      A = R + (A.length > 0 ? " " + A : A);
    }
    return A;
  };
function Hv() {
  let c = 0,
    o,
    m,
    s = "";
  for (; c < arguments.length; )
    (o = arguments[c++]) && (m = lm(o)) && (s && (s += " "), (s += m));
  return s;
}
const lm = (c) => {
  if (typeof c == "string") return c;
  let o,
    m = "";
  for (let s = 0; s < c.length; s++)
    c[s] && (o = lm(c[s])) && (m && (m += " "), (m += o));
  return m;
};
function Uv(c, ...o) {
  let m,
    s,
    p,
    E = O;
  function O(A) {
    const b = o.reduce((R, Q) => Q(R), c());
    return (m = Nv(b)), (s = m.cache.get), (p = m.cache.set), (E = H), H(A);
  }
  function H(A) {
    const b = s(A);
    if (b) return b;
    const R = Rv(A, m);
    return p(A, R), R;
  }
  return function () {
    return E(Hv.apply(null, arguments));
  };
}
const Yt = (c) => {
    const o = (m) => m[c] || [];
    return (o.isThemeGetter = !0), o;
  },
  em = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  am = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  jv = /^\d+\/\d+$/,
  Cv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  qv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Bv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Gv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Yv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ha = (c) => jv.test(c),
  lt = (c) => !!c && !Number.isNaN(Number(c)),
  ze = (c) => !!c && Number.isInteger(Number(c)),
  Sf = (c) => c.endsWith("%") && lt(c.slice(0, -1)),
  Wl = (c) => Cv.test(c),
  wv = () => !0,
  Xv = (c) => qv.test(c) && !Bv.test(c),
  um = () => !1,
  Qv = (c) => Gv.test(c),
  Vv = (c) => Yv.test(c),
  Zv = (c) => !Y(c) && !w(c),
  Lv = (c) => Ua(c, cm, um),
  Y = (c) => em.test(c),
  Le = (c) => Ua(c, fm, Xv),
  xf = (c) => Ua(c, Wv, lt),
  Vd = (c) => Ua(c, nm, um),
  Kv = (c) => Ua(c, im, Vv),
  Fn = (c) => Ua(c, sm, Qv),
  w = (c) => am.test(c),
  ju = (c) => ja(c, fm),
  kv = (c) => ja(c, Fv),
  Zd = (c) => ja(c, nm),
  Jv = (c) => ja(c, cm),
  $v = (c) => ja(c, im),
  Pn = (c) => ja(c, sm, !0),
  Ua = (c, o, m) => {
    const s = em.exec(c);
    return s ? (s[1] ? o(s[1]) : m(s[2])) : !1;
  },
  ja = (c, o, m = !1) => {
    const s = am.exec(c);
    return s ? (s[1] ? o(s[1]) : m) : !1;
  },
  nm = (c) => c === "position" || c === "percentage",
  im = (c) => c === "image" || c === "url",
  cm = (c) => c === "length" || c === "size" || c === "bg-size",
  fm = (c) => c === "length",
  Wv = (c) => c === "number",
  Fv = (c) => c === "family-name",
  sm = (c) => c === "shadow",
  Pv = () => {
    const c = Yt("color"),
      o = Yt("font"),
      m = Yt("text"),
      s = Yt("font-weight"),
      p = Yt("tracking"),
      E = Yt("leading"),
      O = Yt("breakpoint"),
      H = Yt("container"),
      A = Yt("spacing"),
      b = Yt("radius"),
      R = Yt("shadow"),
      Q = Yt("inset-shadow"),
      K = Yt("text-shadow"),
      ht = Yt("drop-shadow"),
      et = Yt("blur"),
      ft = Yt("perspective"),
      vt = Yt("aspect"),
      jt = Yt("ease"),
      kt = Yt("animate"),
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      Z = () => [...F(), w, Y],
      yt = () => ["auto", "hidden", "clip", "visible", "scroll"],
      st = () => ["auto", "contain", "none"],
      X = () => [w, Y, A],
      zt = () => [Ha, "full", "auto", ...X()],
      El = () => [ze, "none", "subgrid", w, Y],
      Jt = () => ["auto", { span: ["full", ze, w, Y] }, ze, w, Y],
      Rt = () => [ze, "auto", w, Y],
      Ol = () => ["auto", "min", "max", "fr", w, Y],
      Tl = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      _t = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      T = () => ["auto", ...X()],
      C = () => [
        Ha,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      D = () => [c, w, Y],
      mt = () => [...F(), Zd, Vd, { position: [w, Y] }],
      d = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      N = () => ["auto", "cover", "contain", Jv, Lv, { size: [w, Y] }],
      q = () => [Sf, ju, Le],
      j = () => ["", "none", "full", b, w, Y],
      B = () => ["", lt, ju, Le],
      ut = () => ["solid", "dashed", "dotted", "double"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      rt = () => [lt, Sf, Zd, Vd],
      At = () => ["", "none", et, w, Y],
      ul = () => ["none", lt, w, Y],
      Pl = () => ["none", lt, w, Y],
      Il = () => [lt, w, Y],
      te = () => [Ha, "full", ...X()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Wl],
        breakpoint: [Wl],
        color: [wv],
        container: [Wl],
        "drop-shadow": [Wl],
        ease: ["in", "out", "in-out"],
        font: [Zv],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Wl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Wl],
        shadow: [Wl],
        spacing: ["px", lt],
        text: [Wl],
        "text-shadow": [Wl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ha, Y, w, vt] }],
        container: ["container"],
        columns: [{ columns: [lt, Y, w, H] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: Z() }],
        overflow: [{ overflow: yt() }],
        "overflow-x": [{ "overflow-x": yt() }],
        "overflow-y": [{ "overflow-y": yt() }],
        overscroll: [{ overscroll: st() }],
        "overscroll-x": [{ "overscroll-x": st() }],
        "overscroll-y": [{ "overscroll-y": st() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: zt() }],
        "inset-x": [{ "inset-x": zt() }],
        "inset-y": [{ "inset-y": zt() }],
        start: [{ start: zt() }],
        end: [{ end: zt() }],
        top: [{ top: zt() }],
        right: [{ right: zt() }],
        bottom: [{ bottom: zt() }],
        left: [{ left: zt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ze, "auto", w, Y] }],
        basis: [{ basis: [Ha, "full", "auto", H, ...X()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [lt, Ha, "auto", "initial", "none", Y] }],
        grow: [{ grow: ["", lt, w, Y] }],
        shrink: [{ shrink: ["", lt, w, Y] }],
        order: [{ order: [ze, "first", "last", "none", w, Y] }],
        "grid-cols": [{ "grid-cols": El() }],
        "col-start-end": [{ col: Jt() }],
        "col-start": [{ "col-start": Rt() }],
        "col-end": [{ "col-end": Rt() }],
        "grid-rows": [{ "grid-rows": El() }],
        "row-start-end": [{ row: Jt() }],
        "row-start": [{ "row-start": Rt() }],
        "row-end": [{ "row-end": Rt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Ol() }],
        "auto-rows": [{ "auto-rows": Ol() }],
        gap: [{ gap: X() }],
        "gap-x": [{ "gap-x": X() }],
        "gap-y": [{ "gap-y": X() }],
        "justify-content": [{ justify: [...Tl(), "normal"] }],
        "justify-items": [{ "justify-items": [..._t(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ..._t()] }],
        "align-content": [{ content: ["normal", ...Tl()] }],
        "align-items": [{ items: [..._t(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ..._t(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Tl() }],
        "place-items": [{ "place-items": [..._t(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ..._t()] }],
        p: [{ p: X() }],
        px: [{ px: X() }],
        py: [{ py: X() }],
        ps: [{ ps: X() }],
        pe: [{ pe: X() }],
        pt: [{ pt: X() }],
        pr: [{ pr: X() }],
        pb: [{ pb: X() }],
        pl: [{ pl: X() }],
        m: [{ m: T() }],
        mx: [{ mx: T() }],
        my: [{ my: T() }],
        ms: [{ ms: T() }],
        me: [{ me: T() }],
        mt: [{ mt: T() }],
        mr: [{ mr: T() }],
        mb: [{ mb: T() }],
        ml: [{ ml: T() }],
        "space-x": [{ "space-x": X() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": X() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: C() }],
        w: [{ w: [H, "screen", ...C()] }],
        "min-w": [{ "min-w": [H, "screen", "none", ...C()] }],
        "max-w": [
          { "max-w": [H, "screen", "none", "prose", { screen: [O] }, ...C()] },
        ],
        h: [{ h: ["screen", "lh", ...C()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...C()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...C()] }],
        "font-size": [{ text: ["base", m, ju, Le] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, w, xf] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Sf,
              Y,
            ],
          },
        ],
        "font-family": [{ font: [kv, Y, o] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [p, w, Y] }],
        "line-clamp": [{ "line-clamp": [lt, "none", w, xf] }],
        leading: [{ leading: [E, ...X()] }],
        "list-image": [{ "list-image": ["none", w, Y] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", w, Y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: D() }],
        "text-color": [{ text: D() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ut(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [lt, "from-font", "auto", w, Le] },
        ],
        "text-decoration-color": [{ decoration: D() }],
        "underline-offset": [{ "underline-offset": [lt, "auto", w, Y] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              w,
              Y,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", w, Y] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: mt() }],
        "bg-repeat": [{ bg: d() }],
        "bg-size": [{ bg: N() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ze,
                  w,
                  Y,
                ],
                radial: ["", w, Y],
                conic: [ze, w, Y],
              },
              $v,
              Kv,
            ],
          },
        ],
        "bg-color": [{ bg: D() }],
        "gradient-from-pos": [{ from: q() }],
        "gradient-via-pos": [{ via: q() }],
        "gradient-to-pos": [{ to: q() }],
        "gradient-from": [{ from: D() }],
        "gradient-via": [{ via: D() }],
        "gradient-to": [{ to: D() }],
        rounded: [{ rounded: j() }],
        "rounded-s": [{ "rounded-s": j() }],
        "rounded-e": [{ "rounded-e": j() }],
        "rounded-t": [{ "rounded-t": j() }],
        "rounded-r": [{ "rounded-r": j() }],
        "rounded-b": [{ "rounded-b": j() }],
        "rounded-l": [{ "rounded-l": j() }],
        "rounded-ss": [{ "rounded-ss": j() }],
        "rounded-se": [{ "rounded-se": j() }],
        "rounded-ee": [{ "rounded-ee": j() }],
        "rounded-es": [{ "rounded-es": j() }],
        "rounded-tl": [{ "rounded-tl": j() }],
        "rounded-tr": [{ "rounded-tr": j() }],
        "rounded-br": [{ "rounded-br": j() }],
        "rounded-bl": [{ "rounded-bl": j() }],
        "border-w": [{ border: B() }],
        "border-w-x": [{ "border-x": B() }],
        "border-w-y": [{ "border-y": B() }],
        "border-w-s": [{ "border-s": B() }],
        "border-w-e": [{ "border-e": B() }],
        "border-w-t": [{ "border-t": B() }],
        "border-w-r": [{ "border-r": B() }],
        "border-w-b": [{ "border-b": B() }],
        "border-w-l": [{ "border-l": B() }],
        "divide-x": [{ "divide-x": B() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": B() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ut(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ut(), "hidden", "none"] }],
        "border-color": [{ border: D() }],
        "border-color-x": [{ "border-x": D() }],
        "border-color-y": [{ "border-y": D() }],
        "border-color-s": [{ "border-s": D() }],
        "border-color-e": [{ "border-e": D() }],
        "border-color-t": [{ "border-t": D() }],
        "border-color-r": [{ "border-r": D() }],
        "border-color-b": [{ "border-b": D() }],
        "border-color-l": [{ "border-l": D() }],
        "divide-color": [{ divide: D() }],
        "outline-style": [{ outline: [...ut(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [lt, w, Y] }],
        "outline-w": [{ outline: ["", lt, ju, Le] }],
        "outline-color": [{ outline: D() }],
        shadow: [{ shadow: ["", "none", R, Pn, Fn] }],
        "shadow-color": [{ shadow: D() }],
        "inset-shadow": [{ "inset-shadow": ["none", Q, Pn, Fn] }],
        "inset-shadow-color": [{ "inset-shadow": D() }],
        "ring-w": [{ ring: B() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: D() }],
        "ring-offset-w": [{ "ring-offset": [lt, Le] }],
        "ring-offset-color": [{ "ring-offset": D() }],
        "inset-ring-w": [{ "inset-ring": B() }],
        "inset-ring-color": [{ "inset-ring": D() }],
        "text-shadow": [{ "text-shadow": ["none", K, Pn, Fn] }],
        "text-shadow-color": [{ "text-shadow": D() }],
        opacity: [{ opacity: [lt, w, Y] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": W() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [lt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": rt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": rt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
        "mask-image-t-from-pos": [{ "mask-t-from": rt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": rt() }],
        "mask-image-t-from-color": [{ "mask-t-from": D() }],
        "mask-image-t-to-color": [{ "mask-t-to": D() }],
        "mask-image-r-from-pos": [{ "mask-r-from": rt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": rt() }],
        "mask-image-r-from-color": [{ "mask-r-from": D() }],
        "mask-image-r-to-color": [{ "mask-r-to": D() }],
        "mask-image-b-from-pos": [{ "mask-b-from": rt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": rt() }],
        "mask-image-b-from-color": [{ "mask-b-from": D() }],
        "mask-image-b-to-color": [{ "mask-b-to": D() }],
        "mask-image-l-from-pos": [{ "mask-l-from": rt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": rt() }],
        "mask-image-l-from-color": [{ "mask-l-from": D() }],
        "mask-image-l-to-color": [{ "mask-l-to": D() }],
        "mask-image-x-from-pos": [{ "mask-x-from": rt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": rt() }],
        "mask-image-x-from-color": [{ "mask-x-from": D() }],
        "mask-image-x-to-color": [{ "mask-x-to": D() }],
        "mask-image-y-from-pos": [{ "mask-y-from": rt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": rt() }],
        "mask-image-y-from-color": [{ "mask-y-from": D() }],
        "mask-image-y-to-color": [{ "mask-y-to": D() }],
        "mask-image-radial": [{ "mask-radial": [w, Y] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": rt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": rt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": D() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": D() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": F() }],
        "mask-image-conic-pos": [{ "mask-conic": [lt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": rt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": rt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": D() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": D() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: mt() }],
        "mask-repeat": [{ mask: d() }],
        "mask-size": [{ mask: N() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", w, Y] }],
        filter: [{ filter: ["", "none", w, Y] }],
        blur: [{ blur: At() }],
        brightness: [{ brightness: [lt, w, Y] }],
        contrast: [{ contrast: [lt, w, Y] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ht, Pn, Fn] }],
        "drop-shadow-color": [{ "drop-shadow": D() }],
        grayscale: [{ grayscale: ["", lt, w, Y] }],
        "hue-rotate": [{ "hue-rotate": [lt, w, Y] }],
        invert: [{ invert: ["", lt, w, Y] }],
        saturate: [{ saturate: [lt, w, Y] }],
        sepia: [{ sepia: ["", lt, w, Y] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", w, Y] }],
        "backdrop-blur": [{ "backdrop-blur": At() }],
        "backdrop-brightness": [{ "backdrop-brightness": [lt, w, Y] }],
        "backdrop-contrast": [{ "backdrop-contrast": [lt, w, Y] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", lt, w, Y] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [lt, w, Y] }],
        "backdrop-invert": [{ "backdrop-invert": ["", lt, w, Y] }],
        "backdrop-opacity": [{ "backdrop-opacity": [lt, w, Y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [lt, w, Y] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", lt, w, Y] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": X() }],
        "border-spacing-x": [{ "border-spacing-x": X() }],
        "border-spacing-y": [{ "border-spacing-y": X() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              w,
              Y,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [lt, "initial", w, Y] }],
        ease: [{ ease: ["linear", "initial", jt, w, Y] }],
        delay: [{ delay: [lt, w, Y] }],
        animate: [{ animate: ["none", kt, w, Y] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [ft, w, Y] }],
        "perspective-origin": [{ "perspective-origin": Z() }],
        rotate: [{ rotate: ul() }],
        "rotate-x": [{ "rotate-x": ul() }],
        "rotate-y": [{ "rotate-y": ul() }],
        "rotate-z": [{ "rotate-z": ul() }],
        scale: [{ scale: Pl() }],
        "scale-x": [{ "scale-x": Pl() }],
        "scale-y": [{ "scale-y": Pl() }],
        "scale-z": [{ "scale-z": Pl() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Il() }],
        "skew-x": [{ "skew-x": Il() }],
        "skew-y": [{ "skew-y": Il() }],
        transform: [{ transform: [w, Y, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Z() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: te() }],
        "translate-x": [{ "translate-x": te() }],
        "translate-y": [{ "translate-y": te() }],
        "translate-z": [{ "translate-z": te() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: D() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: D() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              w,
              Y,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", w, Y] },
        ],
        fill: [{ fill: ["none", ...D()] }],
        "stroke-w": [{ stroke: [lt, ju, Le, xf] }],
        stroke: [{ stroke: ["none", ...D()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Iv = Uv(Pv);
function Fl(...c) {
  return Iv(Pd(c));
}
const ty = Id(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function zf({ className: c, variant: o, size: m, asChild: s = !1, ...p }) {
  const E = s ? hv : "button";
  return U.jsx(E, {
    "data-slot": "button",
    className: Fl(ty({ variant: o, size: m, className: c })),
    ...p,
  });
}
function Cu({ className: c, ...o }) {
  return U.jsx("div", {
    "data-slot": "card",
    className: Fl(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      c
    ),
    ...o,
  });
}
function Of({ className: c, ...o }) {
  return U.jsx("div", {
    "data-slot": "card-header",
    className: Fl(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      c
    ),
    ...o,
  });
}
function Nf({ className: c, ...o }) {
  return U.jsx("div", {
    "data-slot": "card-title",
    className: Fl("leading-none font-semibold", c),
    ...o,
  });
}
function Df({ className: c, ...o }) {
  return U.jsx("div", {
    "data-slot": "card-content",
    className: Fl("px-6", c),
    ...o,
  });
}
const ly = Id(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function ey({ className: c, variant: o, ...m }) {
  return U.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: Fl(ly({ variant: o }), c),
    ...m,
  });
}
function ay({ className: c, ...o }) {
  return U.jsx("div", {
    "data-slot": "alert-description",
    className: Fl(
      "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
      c
    ),
    ...o,
  });
}
function uy(c, o = []) {
  let m = [];
  function s(E, O) {
    const H = P.createContext(O),
      A = m.length;
    m = [...m, O];
    const b = (Q) => {
      var jt;
      const { scope: K, children: ht, ...et } = Q,
        ft = ((jt = K == null ? void 0 : K[c]) == null ? void 0 : jt[A]) || H,
        vt = P.useMemo(() => et, Object.values(et));
      return U.jsx(ft.Provider, { value: vt, children: ht });
    };
    b.displayName = E + "Provider";
    function R(Q, K) {
      var ft;
      const ht =
          ((ft = K == null ? void 0 : K[c]) == null ? void 0 : ft[A]) || H,
        et = P.useContext(ht);
      if (et) return et;
      if (O !== void 0) return O;
      throw new Error(`\`${Q}\` must be used within \`${E}\``);
    }
    return [b, R];
  }
  const p = () => {
    const E = m.map((O) => P.createContext(O));
    return function (H) {
      const A = (H == null ? void 0 : H[c]) || E;
      return P.useMemo(() => ({ [`__scope${c}`]: { ...H, [c]: A } }), [H, A]);
    };
  };
  return (p.scopeName = c), [s, ny(p, ...o)];
}
function ny(...c) {
  const o = c[0];
  if (c.length === 1) return o;
  const m = () => {
    const s = c.map((p) => ({ useScope: p(), scopeName: p.scopeName }));
    return function (E) {
      const O = s.reduce((H, { useScope: A, scopeName: b }) => {
        const Q = A(E)[`__scope${b}`];
        return { ...H, ...Q };
      }, {});
      return P.useMemo(() => ({ [`__scope${o.scopeName}`]: O }), [O]);
    };
  };
  return (m.scopeName = o.scopeName), m;
}
Jd();
var iy = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  rm = iy.reduce((c, o) => {
    const m = Wd(`Primitive.${o}`),
      s = P.forwardRef((p, E) => {
        const { asChild: O, ...H } = p,
          A = O ? m : o;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          U.jsx(A, { ...H, ref: E })
        );
      });
    return (s.displayName = `Primitive.${o}`), { ...c, [o]: s };
  }, {}),
  Rf = "Progress",
  Hf = 100,
  [cy, Ty] = uy(Rf),
  [fy, sy] = cy(Rf),
  om = P.forwardRef((c, o) => {
    const {
      __scopeProgress: m,
      value: s = null,
      max: p,
      getValueLabel: E = ry,
      ...O
    } = c;
    (p || p === 0) && !Ld(p) && console.error(oy(`${p}`, "Progress"));
    const H = Ld(p) ? p : Hf;
    s !== null && !Kd(s, H) && console.error(dy(`${s}`, "Progress"));
    const A = Kd(s, H) ? s : null,
      b = In(A) ? E(A, H) : void 0;
    return U.jsx(fy, {
      scope: m,
      value: A,
      max: H,
      children: U.jsx(rm.div, {
        "aria-valuemax": H,
        "aria-valuemin": 0,
        "aria-valuenow": In(A) ? A : void 0,
        "aria-valuetext": b,
        role: "progressbar",
        "data-state": hm(A, H),
        "data-value": A ?? void 0,
        "data-max": H,
        ...O,
        ref: o,
      }),
    });
  });
om.displayName = Rf;
var dm = "ProgressIndicator",
  mm = P.forwardRef((c, o) => {
    const { __scopeProgress: m, ...s } = c,
      p = sy(dm, m);
    return U.jsx(rm.div, {
      "data-state": hm(p.value, p.max),
      "data-value": p.value ?? void 0,
      "data-max": p.max,
      ...s,
      ref: o,
    });
  });
mm.displayName = dm;
function ry(c, o) {
  return `${Math.round((c / o) * 100)}%`;
}
function hm(c, o) {
  return c == null ? "indeterminate" : c === o ? "complete" : "loading";
}
function In(c) {
  return typeof c == "number";
}
function Ld(c) {
  return In(c) && !isNaN(c) && c > 0;
}
function Kd(c, o) {
  return In(c) && !isNaN(c) && c <= o && c >= 0;
}
function oy(c, o) {
  return `Invalid prop \`max\` of value \`${c}\` supplied to \`${o}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Hf}\`.`;
}
function dy(c, o) {
  return `Invalid prop \`value\` of value \`${c}\` supplied to \`${o}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Hf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var my = om,
  hy = mm;
function vy({ className: c, value: o, ...m }) {
  return U.jsx(my, {
    "data-slot": "progress",
    className: Fl(
      "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
      c
    ),
    ...m,
    children: U.jsx(hy, {
      "data-slot": "progress-indicator",
      className: "bg-primary h-full w-full flex-1 transition-all",
      style: { transform: `translateX(-${100 - (o || 0)}%)` },
    }),
  });
}
function yy({ onFileDrop: c, subcategoryId: o, categoryId: m, className: s }) {
  const [p, E] = X0.useState(!1),
    O = P.useCallback((R) => {
      R.preventDefault(), E(!0);
    }, []),
    H = P.useCallback((R) => {
      R.preventDefault(), E(!1);
    }, []),
    A = P.useCallback(
      (R) => {
        R.preventDefault(), E(!1);
        const Q = Array.from(R.dataTransfer.files).filter(
          (K) => K.type === "application/pdf"
        );
        Q.length > 0 && c(Q, o, m);
      },
      [c, o, m]
    ),
    b = P.useCallback(
      (R) => {
        const Q = Array.from(R.target.files || []).filter(
          (K) => K.type === "application/pdf"
        );
        Q.length > 0 && c(Q, o, m);
      },
      [c, o, m]
    );
  return U.jsxs(Cu, {
    className: `p-4 border-2 border-dashed transition-colors cursor-pointer ${
      p
        ? "border-primary bg-primary/5"
        : "border-border hover:border-primary/50"
    } ${s}`,
    onDragOver: O,
    onDragLeave: H,
    onDrop: A,
    children: [
      U.jsx("input", {
        type: "file",
        multiple: !0,
        accept: ".pdf",
        onChange: b,
        className: "hidden",
        id: `file-input-${o}`,
      }),
      U.jsxs("label", {
        htmlFor: `file-input-${o}`,
        className:
          "flex flex-col items-center justify-center gap-2 cursor-pointer",
        children: [
          U.jsx(ov, { className: "h-8 w-8 text-muted-foreground" }),
          U.jsxs("div", {
            className: "text-center",
            children: [
              U.jsx("p", {
                className: "text-sm",
                children: "Arraste arquivos PDF aqui ou clique para selecionar",
              }),
              U.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Apenas arquivos PDF são aceitos",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gy({ className: c, type: o, ...m }) {
  return U.jsx("input", {
    type: o,
    "data-slot": "input",
    className: Fl(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      c
    ),
    ...m,
  });
}
function py({ files: c, onHoursChange: o, onRemoveFile: m }) {
  return c.length === 0
    ? null
    : U.jsx("div", {
        className: "space-y-2",
        children: c.map((s) =>
          U.jsx(
            Cu,
            {
              className: "p-3",
              children: U.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  U.jsx(uv, {
                    className: "h-5 w-5 text-muted-foreground flex-shrink-0",
                  }),
                  U.jsx("div", {
                    className: "flex-1 min-w-0",
                    children: U.jsx("p", {
                      className: "text-sm truncate",
                      children: s.name,
                    }),
                  }),
                  U.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      U.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          U.jsx(gy, {
                            type: "number",
                            placeholder: "Horas",
                            min: "0",
                            step: "0.5",
                            value: s.inputHours || "",
                            onChange: (p) => o(s.id, Number(p.target.value)),
                            className: "w-20 h-8 text-xs",
                          }),
                          s.calculatedHours > 0 &&
                            U.jsxs("span", {
                              className:
                                "text-xs text-muted-foreground text-center",
                              children: ["= ", s.calculatedHours, "h"],
                            }),
                        ],
                      }),
                      U.jsx(zf, {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => m(s.id),
                        className: "h-8 w-8 p-0",
                        children: U.jsx(sv, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                ],
              }),
            },
            s.id
          )
        ),
      });
}
function by({
  subcategory: c,
  categoryId: o,
  files: m,
  onFileDrop: s,
  onHoursChange: p,
  onRemoveFile: E,
}) {
  const O = m.reduce((A, b) => A + b.calculatedHours, 0),
    H = Math.min((O / c.maxHours) * 100, 100);
  return U.jsxs(Cu, {
    children: [
      U.jsxs(Of, {
        className: "pb-3",
        children: [
          U.jsx(Nf, { className: "text-lg", children: c.title }),
          U.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: c.description,
          }),
          U.jsxs("div", {
            className: "space-y-2",
            children: [
              U.jsxs("div", {
                className: "flex justify-between text-sm",
                children: [
                  U.jsx("span", { children: "Progresso:" }),
                  U.jsxs("span", { children: [O, "h / ", c.maxHours, "h"] }),
                ],
              }),
              U.jsx(vy, { value: H, className: "h-2" }),
              U.jsxs("p", {
                className: "text-xs text-muted-foreground text-right",
                children: [H.toFixed(1), "% concluído"],
              }),
            ],
          }),
        ],
      }),
      U.jsxs(Df, {
        className: "space-y-4",
        children: [
          U.jsx(yy, { onFileDrop: s, subcategoryId: c.id, categoryId: o }),
          U.jsx(py, { files: m, onHoursChange: p, onRemoveFile: E }),
        ],
      }),
    ],
  });
}
function Sy({
  category: c,
  files: o,
  onFileDrop: m,
  onHoursChange: s,
  onRemoveFile: p,
}) {
  const E = o.filter((A) => A.categoryId === c.id),
    O = E.reduce((A, b) => A + b.calculatedHours, 0),
    H = c.subcategories.reduce((A, b) => A + b.maxHours, 0);
  return U.jsxs(Cu, {
    className: "mb-8",
    children: [
      U.jsxs(Of, {
        children: [
          U.jsx(Nf, { className: "text-xl", children: c.title }),
          U.jsxs("div", {
            className: "flex justify-between text-sm text-muted-foreground",
            children: [
              U.jsx("span", { children: "Total da categoria:" }),
              U.jsxs("span", { children: [O, "h / ", H, "h"] }),
            ],
          }),
        ],
      }),
      U.jsx(Df, {
        className: "space-y-6",
        children: c.subcategories.map((A) => {
          const b = E.filter((R) => R.subcategoryId === A.id);
          return U.jsx(
            by,
            {
              subcategory: A,
              categoryId: c.id,
              files: b,
              onFileDrop: m,
              onHoursChange: s,
              onRemoveFile: p,
            },
            A.id
          );
        }),
      }),
    ],
  });
}
const xy = [
    {
      id: "grupo1",
      title: "Grupo I – Atividades de iniciação à docência e pesquisa",
      subcategories: [
        {
          id: "monitoria",
          title: "Exercício de monitoria",
          description: "100 horas-aula",
          maxHours: 100,
          calculateHours: (c) => Math.min(c, 100),
        },
        {
          id: "pesquisa",
          title: "Participação em pesquisas e projetos institucionais",
          description: "100 horas-aula (até 50 h/semestre por atividade)",
          maxHours: 100,
          calculateHours: (c) => Math.min(c, 100),
        },
      ],
    },
    {
      id: "grupo2",
      title:
        "Grupo II – Congressos, seminários, conferências e outras atividades assistidas",
      subcategories: [
        {
          id: "congressos",
          title: "Congressos, Seminários, conferências (+ 3h)",
          description: "Serão computados 50% da carga horária total do evento",
          maxHours: 50,
          calculateHours: (c) => Math.min(c * 0.5, 50),
        },
        {
          id: "palestras",
          title: "Seminários, conferências e palestras (- 3h)",
          description: "01 hora-aula por evento",
          maxHours: 50,
          calculateHours: (c) => Math.min(c, 50),
        },
        {
          id: "defesas",
          title: "Defesas de dissertação/tese assistidas",
          description: "02 horas-aula por defesa",
          maxHours: 10,
          calculateHours: (c) => Math.min(c * 2, 10),
        },
        {
          id: "monografias",
          title: "Apresentação de monografias/TCC assistidas",
          description: "01 hora por apresentação",
          maxHours: 10,
          calculateHours: (c) => Math.min(c, 10),
        },
        {
          id: "visitas",
          title: "Visitas técnicas coordenadas",
          description: "Até 05 horas-aula por visita",
          maxHours: 30,
          calculateHours: (c) => Math.min(c * 5, 30),
        },
      ],
    },
    {
      id: "grupo3",
      title:
        "Grupo III – Publicações e apresentação de trabalhos em eventos científicos",
      subcategories: [
        {
          id: "artigos-referee",
          title: "Artigos em revistas com referee",
          description: "40 horas-aula por artigo, 20 horas-aula por aluno",
          maxHours: 120,
          calculateHours: (c) => Math.min(c * 20, 120),
        },
        {
          id: "artigos-sem-referee",
          title: "Artigos em revistas sem referee",
          description: "Até 20 horas-aula por artigo, 20 horas-aula por aluno",
          maxHours: 100,
          calculateHours: (c) => Math.min(c * 20, 100),
        },
        {
          id: "apresentacoes",
          title: "Apresentação de trabalhos em eventos",
          description: "30 pontos por trabalho, 30 horas-aula cada um",
          maxHours: 120,
          calculateHours: (c) => Math.min(c * 30, 120),
        },
        {
          id: "concursos",
          title: "Participação em concursos, exposições e mostras",
          description: "10 horas-aula por participação",
          maxHours: 50,
          calculateHours: (c) => Math.min(c * 10, 50),
        },
      ],
    },
    {
      id: "grupo4",
      title: "Grupo IV – Vivência profissional complementar",
      subcategories: [
        {
          id: "estagio-nao-curricular",
          title: "Estágio não curricular",
          description: "40 horas-aula, 20h/semanais por mínimo 4 meses",
          maxHours: 80,
          calculateHours: (c) => Math.min(c, 80),
        },
        {
          id: "empresa-junior",
          title: "Estágio em Empresa Júnior/Incubadora",
          description: "Até 40 horas-aula, 20h/semanais por mínimo 4 meses",
          maxHours: 80,
          calculateHours: (c) => Math.min(c, 80),
        },
        {
          id: "projetos-sociais",
          title: "Participação em projetos sociais",
          description: "Até 30 horas-aula por semestre de participação",
          maxHours: 60,
          calculateHours: (c) => Math.min(c * 30, 60),
        },
        {
          id: "atividade-profissional",
          title: "Atividade profissional específica na área",
          description: "Até 40 horas-aula, mínimo de 4 meses",
          maxHours: 80,
          calculateHours: (c) => Math.min(c, 80),
        },
        {
          id: "representacao-estudantil",
          title: "Participação em entidade de representação estudantil",
          description: "10 horas-aula por período mínimo de 6 meses",
          maxHours: 40,
          calculateHours: (c) => Math.min(c * 10, 40),
        },
        {
          id: "outras-vivencias",
          title: "Outras atividades de vivência profissional",
          description: "A critério da Diretoria Acadêmica",
          maxHours: 80,
          calculateHours: (c) => Math.min(c, 80),
        },
      ],
    },
    {
      id: "grupo5",
      title: "Grupo V – Cursos de formação complementar",
      subcategories: [
        {
          id: "cursos-ufsc",
          title: "Cursos UFSC na área do curso",
          description:
            "Serão computados 80% da carga horária até 50 horas-aula",
          maxHours: 80,
          calculateHours: (c) => Math.min(c * 0.8, 80),
        },
        {
          id: "cursos-externos-area",
          title: "Cursos externos na área do curso",
          description: "Serão computados até 50% da carga horária total",
          maxHours: 80,
          calculateHours: (c) => Math.min(c * 0.5, 80),
        },
        {
          id: "cursos-externos-outras",
          title: "Cursos externos fora da área",
          description: "Serão computados até 30% da carga horária total",
          maxHours: 80,
          calculateHours: (c) => Math.min(c * 0.3, 80),
        },
      ],
    },
  ],
  kd = "/api";
class Ay {
  async request(o, m = {}) {
    const s = `${kd}${o}`,
      p = {
        headers: { "Content-Type": "application/json", ...m.headers },
        ...m,
      };
    try {
      const E = await fetch(s, p),
        O = await E.json();
      if (!E.ok) throw new Error(O.error || "Erro na requisição");
      return O;
    } catch (E) {
      throw (console.error("Erro na API:", E), E);
    }
  }
  async getCategories() {
    return this.request("/categories");
  }
  async createProject(o, m = "") {
    return this.request("/projects", {
      method: "POST",
      body: JSON.stringify({ name: o, description: m }),
    });
  }
  async getProject(o) {
    return this.request(`/projects/${o}`);
  }
  async getProjectFiles(o) {
    return this.request(`/projects/${o}/files`);
  }
  async getProjectSummary(o) {
    return this.request(`/projects/${o}/summary`);
  }
  async uploadFile(o, m, s, p, E = 0) {
    const O = new FormData();
    return (
      O.append("file", m),
      O.append("category_id", s),
      O.append("subcategory_id", p),
      O.append("input_hours", E.toString()),
      this.request(`/projects/${o}/upload`, {
        method: "POST",
        headers: {},
        body: O,
      })
    );
  }
  async updateFileHours(o, m) {
    return this.request(`/files/${o}/hours`, {
      method: "PUT",
      body: JSON.stringify({ input_hours: m }),
    });
  }
  async deleteFile(o) {
    return this.request(`/files/${o}`, { method: "DELETE" });
  }
  async calculateHours(o, m) {
    return this.request("/calculate-hours", {
      method: "POST",
      body: JSON.stringify({ input_hours: o, subcategory_id: m }),
    });
  }
  getDownloadUrl(o) {
    return `${kd}/projects/${o}/download`;
  }
  async healthCheck() {
    return this.request("/health");
  }
}
const Me = new Ay();
function Ey() {
  const [c, o] = P.useState([]),
    [m, s] = P.useState(null),
    [p, E] = P.useState(!1),
    [O, H] = P.useState(null),
    [A, b] = P.useState(xy);
  P.useEffect(() => {
    R(), Q();
  }, []);
  const R = async () => {
      try {
        E(!0);
        const L = `Projeto ${new Date().toLocaleDateString(
            "pt-BR"
          )} ${new Date().toLocaleTimeString("pt-BR")}`,
          F = await Me.createProject(L, "Projeto de horas complementares");
        s(F.data), await K(F.data.project_id);
      } catch (L) {
        H("Erro ao inicializar projeto: " + L.message);
      } finally {
        E(!1);
      }
    },
    Q = async () => {
      try {
        const L = await Me.getCategories();
        L.success && b(L.data);
      } catch (L) {
        console.warn(
          "Usando categorias locais devido a erro na API:",
          L.message
        );
      }
    },
    K = async (L) => {
      try {
        const F = await Me.getProjectFiles(L);
        F.success &&
          o(
            F.data.map((Z) => ({
              id: Z.id.toString(),
              file: null,
              subcategoryId: Z.subcategory_id,
              categoryId: Z.category_id,
              inputHours: Z.input_hours,
              calculatedHours: Z.calculated_hours,
              name: Z.file_name,
              serverPath: Z.file_path,
            }))
          );
      } catch (F) {
        H("Erro ao carregar arquivos: " + F.message);
      }
    },
    ht = P.useCallback(
      async (L, F, Z) => {
        if (!m) {
          H("Nenhum projeto ativo");
          return;
        }
        E(!0), H(null);
        try {
          for (const yt of L) {
            const st = await Me.uploadFile(m.project_id, yt, Z, F, 0);
            if (st.success) {
              const X = {
                id: st.data.file_id.toString(),
                file: null,
                subcategoryId: F,
                categoryId: Z,
                inputHours: st.data.input_hours,
                calculatedHours: st.data.calculated_hours,
                name: st.data.filename,
                serverPath: null,
              };
              o((zt) => [...zt, X]);
            }
          }
        } catch (yt) {
          H("Erro ao fazer upload: " + yt.message);
        } finally {
          E(!1);
        }
      },
      [m]
    ),
    et = P.useCallback(
      async (L, F) => {
        if (m)
          try {
            (await Me.updateFileHours(parseInt(L), F)).success &&
              o((yt) =>
                yt.map((st) => {
                  if (st.id !== L) return st;
                  const X = A.find((Jt) => Jt.id === st.categoryId),
                    zt =
                      X == null
                        ? void 0
                        : X.subcategories.find(
                            (Jt) => Jt.id === st.subcategoryId
                          );
                  if (!zt) return st;
                  const El = zt.calculateHours(F);
                  return { ...st, inputHours: F, calculatedHours: El };
                })
              );
          } catch (Z) {
            H("Erro ao atualizar horas: " + Z.message);
          }
      },
      [m, A]
    ),
    ft = P.useCallback(
      async (L) => {
        if (m)
          try {
            (await Me.deleteFile(parseInt(L))).success &&
              o((Z) => Z.filter((yt) => yt.id !== L));
          } catch (F) {
            H("Erro ao remover arquivo: " + F.message);
          }
      },
      [m]
    ),
    vt = async () => {
      if (!m) {
        H("Nenhum projeto ativo");
        return;
      }
      try {
        const L = Me.getDownloadUrl(m.project_id),
          F = document.createElement("a");
        (F.href = L),
          (F.download = `Atividades_Complementares_${m.name}.zip`),
          document.body.appendChild(F),
          F.click(),
          document.body.removeChild(F);
      } catch (L) {
        H("Erro ao baixar arquivo: " + L.message);
      }
    },
    jt = async () => {
      try {
        E(!0);
        const L = `Novo Projeto ${new Date().toLocaleDateString(
            "pt-BR"
          )} ${new Date().toLocaleTimeString("pt-BR")}`,
          F = await Me.createProject(L, "Novo projeto de horas complementares");
        s(F.data), o([]), H(null);
      } catch (L) {
        H("Erro ao criar novo projeto: " + L.message);
      } finally {
        E(!1);
      }
    },
    kt = c.reduce((L, F) => L + F.calculatedHours, 0);
  return p && !m
    ? U.jsx("div", {
        className:
          "min-h-screen bg-background flex items-center justify-center",
        children: U.jsxs("div", {
          className: "text-center",
          children: [
            U.jsx(Bd, {
              className: "h-12 w-12 text-primary mx-auto mb-4 animate-spin",
            }),
            U.jsx("p", {
              className: "text-muted-foreground",
              children: "Carregando sistema...",
            }),
          ],
        }),
      })
    : U.jsx("div", {
        className: "min-h-screen bg-background",
        children: U.jsxs("div", {
          className: "container mx-auto px-4 py-8",
          children: [
            U.jsxs("div", {
              className: "text-center mb-8",
              children: [
                U.jsxs("div", {
                  className: "flex items-center justify-center gap-3 mb-4",
                  children: [
                    U.jsx(Bd, { className: "h-8 w-8 text-primary" }),
                    U.jsx("h1", {
                      className: "text-3xl",
                      children: "Sistema de Horas Complementares",
                    }),
                  ],
                }),
                U.jsx("p", {
                  className: "text-muted-foreground max-w-2xl mx-auto",
                  children:
                    "Organize seus documentos de atividades complementares, calcule automaticamente as horas e gere um arquivo compactado com tudo organizado por categoria.",
                }),
                m &&
                  U.jsxs("div", {
                    className: "mt-4 flex items-center justify-center gap-4",
                    children: [
                      U.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                          "Projeto atual: ",
                          U.jsx("span", {
                            className: "font-medium",
                            children: m.name,
                          }),
                        ],
                      }),
                      U.jsxs(zf, {
                        variant: "outline",
                        size: "sm",
                        onClick: jt,
                        disabled: p,
                        children: [
                          U.jsx(cv, { className: "h-4 w-4 mr-2" }),
                          "Novo Projeto",
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            O &&
              U.jsxs(ey, {
                className: "mb-6",
                variant: "destructive",
                children: [
                  U.jsx(tv, { className: "h-4 w-4" }),
                  U.jsx(ay, { children: O }),
                ],
              }),
            U.jsxs(Cu, {
              className: "mb-8",
              children: [
                U.jsx(Of, {
                  children: U.jsx(Nf, {
                    className: "text-center",
                    children: "Resumo Geral",
                  }),
                }),
                U.jsx(Df, {
                  children: U.jsxs("div", {
                    className: "text-center",
                    children: [
                      U.jsxs("div", {
                        className: "text-4xl mb-2",
                        children: [kt, "h"],
                      }),
                      U.jsx("div", {
                        className: "text-muted-foreground",
                        children: "Total de Horas Complementares",
                      }),
                      U.jsx("div", {
                        className: "mt-4",
                        children: U.jsxs(zf, {
                          onClick: vt,
                          disabled: c.length === 0 || p,
                          className: "gap-2",
                          children: [
                            U.jsx(ev, { className: "h-4 w-4" }),
                            "Baixar Arquivo Organizado (.zip)",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            U.jsx("div", {
              className: "space-y-8",
              children: A.map((L) =>
                U.jsx(
                  Sy,
                  {
                    category: L,
                    files: c,
                    onFileDrop: ht,
                    onHoursChange: et,
                    onRemoveFile: ft,
                  },
                  L.id
                )
              ),
            }),
            U.jsxs("div", {
              className: "text-center mt-12 text-muted-foreground",
              children: [
                U.jsx("p", {
                  className: "text-sm",
                  children:
                    "Sistema desenvolvido para facilitar a organização de atividades complementares acadêmicas.",
                }),
                m &&
                  U.jsxs("p", {
                    className: "text-xs mt-2",
                    children: [
                      "Projeto ID: ",
                      m.project_id,
                      " | Total de arquivos: ",
                      c.length,
                    ],
                  }),
              ],
            }),
          ],
        }),
      });
}
k0.createRoot(document.getElementById("root")).render(
  U.jsx(P.StrictMode, { children: U.jsx(Ey, {}) })
);
