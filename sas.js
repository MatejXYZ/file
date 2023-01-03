!(function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var r = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.d = function (t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 20));
})({
  0: function (t, e, i) {
    "use strict";
    var n =
        (this && this.__awaiter) ||
        function (t, e, i, n) {
          function r(t) {
            return t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                });
          }
          return new (i || (i = Promise))(function (i, a) {
            function o(t) {
              try {
                l(n.next(t));
              } catch (t) {
                a(t);
              }
            }
            function s(t) {
              try {
                l(n.throw(t));
              } catch (t) {
                a(t);
              }
            }
            function l(t) {
              t.done ? i(t.value) : r(t.value).then(o, s);
            }
            l((n = n.apply(t, e || [])).next());
          });
        },
      r =
        (this && this.__generator) ||
        function (t, e) {
          function i(t) {
            return function (e) {
              return n([t, e]);
            };
          }
          function n(i) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; l; )
              try {
                if (
                  ((r = 1),
                  a &&
                    (o =
                      2 & i[0]
                        ? a.return
                        : i[0]
                        ? a.throw || ((o = a.return) && o.call(a), 0)
                        : a.next) &&
                    !(o = o.call(a, i[1])).done)
                )
                  return o;
                switch (((a = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return l.label++, { value: i[1], done: !1 };
                  case 5:
                    l.label++, (a = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      ((o = l.trys),
                      !(o = o.length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0]))
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      l.label = i[1];
                      break;
                    }
                    if (6 === i[0] && l.label < o[1]) {
                      (l.label = o[1]), (o = i);
                      break;
                    }
                    if (o && l.label < o[2]) {
                      (l.label = o[2]), l.ops.push(i);
                      break;
                    }
                    o[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                i = e.call(t, l);
              } catch (t) {
                (i = [6, t]), (a = 0);
              } finally {
                r = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          }
          var r,
            a,
            o,
            s,
            l = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: i(0), throw: i(1), return: i(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.Global = void 0);
    var a = (function () {
      function t(t) {
        var e = this;
        if (
          (void 0 === t && (t = !1),
          (this.d = document),
          (this.w = window),
          (this.logOn = !1),
          (this.isReady = !1),
          (this.friendlyIframe = null),
          !t)
        ) {
          var i = this.getIeVersion(navigator.userAgent);
          if (
            (!!i || window.frameElement) &&
            void 0 !== window.inDapIF &&
            window.inDapIF
          ) {
            this.log("FIF mode");
            var n = this.getTopWindow();
            (this.w = n.currentWindow),
              (this.d = this.w.document),
              (this.friendlyIframe = n.currentFrame);
          }
        }
        this.docReady(function () {
          return (e.isReady = !0);
        });
      }
      return (
        (t.prototype.addElement = function (t, e, i) {
          var n = this.d.createElement(t);
          for (var r in i) i.hasOwnProperty(r) && n.setAttribute(r, i[r]);
          return e.appendChild(n), n;
        }),
        (t.prototype.addEvent = function (t, e, i) {
          t &&
            e &&
            i &&
            (t.addEventListener
              ? t.addEventListener(e, i, !1)
              : t.attachEvent && t.attachEvent("on" + e, i));
        }),
        (t.prototype.log = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this.logOn && console.log(arguments);
        }),
        (t.prototype.docReady = function (t, e, i) {
          var n = this;
          void 0 === e && (e = this.w), void 0 === i && (i = this.d);
          var r = function () {
            n.log("ready"),
              i.removeEventListener("DOMContentLoaded", r, !1),
              e.removeEventListener("load", r, !1),
              t();
          };
          "complete" === i.readyState
            ? setTimeout(t)
            : (i.addEventListener("DOMContentLoaded", r, !1),
              e.addEventListener("load", r, !1));
        }),
        (t.prototype.winReady = function (t, e, i) {
          var n = this;
          void 0 === e && (e = this.w), void 0 === i && (i = this.d);
          var r = function () {
            n.log("window loaded"), e.removeEventListener("load", r, !1), t();
          };
          e.addEventListener("load", r, !1);
        }),
        (t.prototype.tracking = function (t) {
          if (t) {
            new Image().src = t;
          }
        }),
        (t.prototype.isChild = function (t, e) {
          if (e)
            for (var i = e.parentNode; null != i; ) {
              if (i === t) return !0;
              i = i.parentNode;
            }
          return !1;
        }),
        (t.prototype.getElementVisibility = function (t) {
          var e = t.getBoundingClientRect(),
            i = (e.right - e.left) * (e.bottom - e.top);
          if (0 === i) return 0;
          var n = Math.max(
              0,
              Math.min(e.bottom, this.w.innerHeight) - Math.max(0, e.top)
            ),
            r = Math.max(
              0,
              Math.min(e.right, this.w.innerWidth) - Math.max(0, e.left)
            );
          return Math.round((n * r * 100) / i);
        }),
        (t.prototype.checkTabVisibility = function (t, e) {
          var i = this,
            n = function () {
              var t = ["webkit", "moz", "ms", "o"];
              if ("hidden" in i.d) return "hidden";
              for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e];
                if (r + "Hidden" in document) return r + "Hidden";
              }
              return null;
            },
            r = function () {
              var t = n();
              return !!t && i.d[t];
            },
            a = n();
          if (a) {
            var o = a.replace(/[H|h]idden/, "") + "visibilitychange";
            this.addEvent(this.d, o, function () {
              r() ? e() : t();
            });
          }
        }),
        (t.prototype.getIosVersion = function () {
          if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [
              parseInt(t[1], 10),
              parseInt(t[2], 10),
              parseInt(t[3] || "0", 10),
            ];
          }
        }),
        (t.prototype.isExternal = function (t, e) {
          var i = this.getDomain(e);
          return -1 === t.indexOf(i);
        }),
        (t.prototype.getDomain = function (t) {
          var e = t;
          if (null != t) {
            var i = t.split(".").reverse();
            null != i && i.length > 1 && (e = i[1] + "." + i[0]);
          }
          return e;
        }),
        (t.prototype.offsetTop = function (t) {
          var e = 0;
          do {
            isNaN(t.offsetTop) || (e += t.offsetTop), (t = t.offsetParent);
          } while (t);
          return e;
        }),
        (t.prototype.getPageHeight = function () {
          var t = this.d.body,
            e = this.d.documentElement;
          return Math.max(
            t.scrollHeight,
            t.offsetHeight,
            e.clientHeight,
            e.scrollHeight,
            e.offsetHeight
          );
        }),
        (t.prototype.getIeVersion = function (t) {
          t = t || navigator.userAgent;
          var e = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(t);
          return e ? parseInt(e[2], 10) : void 0;
        }),
        (t.prototype.offset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this.w.pageYOffset || this.d.documentElement.scrollTop;
          return {
            top: e.top + i,
            bottom: e.bottom + i,
            left: e.left,
            right: e.right,
          };
        }),
        (t.prototype.removeElement = function (t) {
          t && t.parentNode.removeChild(t);
        }),
        (t.prototype.triggerCustomEvent = function (t, e, i, n) {
          if (
            (void 0 === i && (i = null),
            void 0 === n && (n = { width: null, height: null }),
            t.length)
          ) {
            var r;
            this.d.createEvent
              ? ((r = this.d.createEvent("HTMLEvents")), r.initEvent(t, !0, !0))
              : ((r = this.d.createEventObject()), (r.eventType = t)),
              (r.eventName = t),
              null !== i && (r.videoDuration = i),
              null !== n.width && null !== n.height && (r.creativeSize = n),
              (r.formatId = e),
              this.d.createEvent
                ? this.w.dispatchEvent(r)
                : this.w.fireEvent("on" + r.eventType, r);
          }
        }),
        (t.prototype.getTopWindow = function () {
          for (
            var t = 5,
              e = window,
              i = this.getIeVersion(navigator.userAgent)
                ? null
                : window.frameElement;
            t--;

          )
            try {
              e.parent &&
                e.parent.document &&
                ((i = e.frameElement), (e = e.parent) === e.parent && (t = 0));
            } catch (t) {
              this.log("getTopWindow error", t);
            }
          return { currentWindow: e, currentFrame: i };
        }),
        (t.prototype.isAMP = function () {
          return this.w.context
            ? "AMP-AD" === this.w.context.tagName
            : this.w.name.indexOf('"tagName":"AMP-AD"') > -1;
        }),
        (t.prototype.isMobile = function () {
          return "ontouchstart" in this.w;
        }),
        (t.prototype.getJson = function (t) {
          return n(this, void 0, void 0, function () {
            var e, i, n;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, fetch(t)];
                case 1:
                  (e = r.sent()), (r.label = 2);
                case 2:
                  return r.trys.push([2, 4, , 5]), (i = e), [4, e.json()];
                case 3:
                  return (i.parsedBody = r.sent()), [3, 5];
                case 4:
                  throw (
                    ((n = r.sent()),
                    new Error(
                      "Smart Sitebar Template: JSON parsing error, " + n
                    ))
                  );
                case 5:
                  if (!e.ok)
                    throw new Error(
                      "Smart Sitebar Template: JSON parsing error, " +
                        e.statusText
                    );
                  return [2, e];
              }
            });
          });
        }),
        t
      );
    })();
    e.Global = a;
  },
  2: function (t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function () {
        var t = function (e, i) {
          return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(e, i);
        };
        return function (e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ViewabilityCore = void 0);
    var r = i(0),
      a = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.counterId = 0),
            (e.hasFocus = !0),
            (e.isSafeFrame = !1),
            (e.isAMPFrame = !1),
            (e.isAmpVisSub = !1),
            (e.integration = 0),
            (e.timeCounter = 0),
            (e.resultLayer = null),
            (e.playingCreativeId = -1),
            (e.pixels = {}),
            (e.threshold = []),
            (e.elVis = 0),
            (e.isIOSupported = !1),
            (e.IOCallbackCalled = !1),
            e.addEvent(e.w, "focus", function () {
              return (e.hasFocus = !0);
            }),
            e.addEvent(e.w, "blur", function () {
              return document.activeElement && window.self === window.top
                ? (e.hasFocus = !0)
                : (e.hasFocus = !1);
            }),
            e.addEvent(e.d, "visibilitychange", function () {
              e.d.hidden ? (e.hasFocus = !1) : e.checkCurrentState();
            }),
            e
          );
        }
        return (
          n(e, t),
          (e.prototype.videoHandler = function (t, e) {
            var i = [
                "start",
                "AdStarted",
                "AdPlaying",
                "resume",
                "play",
                "playing",
              ],
              n = ["complete", "skip", "AdSkipped", "AdStopped"];
            n
              .concat([
                "pause",
                "AdPaused",
                "abort",
                "emptied",
                "ended",
                "error",
                "seeked",
                "seeking",
              ])
              .indexOf(t) > -1
              ? (this.playingCreativeId = -1)
              : i.indexOf(t) > -1 &&
                ((this.playingCreativeId = e),
                void 0 !== this.intersectionObserverCallback &&
                  0 !== Object.keys(this.pixels).length &&
                  this.intersectionObserverCallback(
                    this.lastIntersectionObserverEntry
                  )),
              n.indexOf(t) > -1 && this.executePixels(e, "notviewable");
          }),
          (e.prototype.updateCreativePixels = function (t, e) {
            return (
              this.log("updateCreativePixels"),
              (this.IOCallbackCalled = !1),
              void 0 !== this.intersectionObserverCallback &&
                this.intersectionObserverCallback(
                  this.lastIntersectionObserverEntry
                ),
              (this.pixels[t] = e)
            );
          }),
          (e.prototype.start = function (t, e, i) {
            var n = this;
            this.log("start", t, e, i),
              (this.isIOSupported = this.isIntersectionObserverSupport());
            var r = this.checkElementStatus(t),
              a = r.measurable;
            if (((t = r.element), (this.pixels = e), !t))
              throw new Error(
                'Smart Viewability: passed element to measure is not valid and its value is "' +
                  t +
                  '"'
              );
            var o = this.mergeOptions(i, t);
            if (
              (o.videoIntegration ||
                (this.playingCreativeId = Object.keys(e)[0]
                  ? Number(Object.keys(e)[0])
                  : 1),
              (this.integration = o.videoIntegration),
              o.logMessages && (this.logOn = !0),
              o.testLayer && (this.resultLayer = this.addInfoLayer()),
              i && i.threshold)
            ) {
              this.threshold = i.threshold;
              this.threshold.forEach(function (t, e) {
                (t.lastSent = 0),
                  "function" != typeof t.aboveCallback &&
                    (t.aboveCallback = function () {
                      return console.log();
                    }),
                  "function" != typeof t.belowCallback &&
                    (t.belowCallback = function () {
                      return console.log();
                    });
              });
            }
            t.id || (t.id = "sas_" + new Date().getTime() + "rnd"),
              this.isIOSupported
                ? this.initIntersactionObserver(t, o)
                : (this.counterId = this.w.setInterval(function () {
                    return n.checkElement(t, o, a);
                  }, 100)),
              window.addEventListener("beforeunload", function () {
                n.executePixels(n.playingCreativeId, "notviewable");
              });
          }),
          (e.prototype.checkCurrentState = function () {
            (this.hasFocus = !0),
              void 0 === this.intersectionObserverCallback ||
                this.IOCallbackCalled ||
                this.intersectionObserverCallback(
                  this.lastIntersectionObserverEntry
                );
          }),
          (e.prototype.initIntersactionObserver = function (t, e) {
            var i,
              n,
              r = this;
            this.intersectionObserverCallback = function (a) {
              (r.lastIntersectionObserverEntry = a),
                a &&
                  a.forEach(function (a) {
                    r.checkThreshold(100 * a.intersectionRatio),
                      100 * a.intersectionRatio >= e.area &&
                      r.playingCreativeId > -1
                        ? (n = r.w.setTimeout(function () {
                            r.hasFocus &&
                              ((r.IOCallbackCalled = !0),
                              r.triggerViewableEvent(e),
                              r.integration < 2 && i.unobserve(t));
                          }, 1e3 * e.delay))
                        : clearTimeout(n);
                  });
            };
            var a = { threshold: e.area / 100 };
            this.hasFocus &&
              ((i = new this.w.IntersectionObserver(
                this.intersectionObserverCallback,
                a
              )),
              i.observe(t));
          }),
          (e.prototype.checkElement = function (t, e, i) {
            if (
              (this.log("checkElement", t, e),
              i || this.executePixels(this.playingCreativeId, "undetermined"),
              !this.d.getElementById(t.id))
            )
              return (
                window.clearInterval(this.counterId),
                void this.log(
                  "backup exit - in the meantime someone could remove / close the ad",
                  t
                )
              );
            this.isAMPFrame
              ? this.w.context && !this.isAmpVisSub && this.subscribeAmpVis()
              : this.isSafeFrame
              ? (this.elVis = Math.round(this.w.$sf.ext.inViewPercentage()))
              : (this.elVis = this.getVisibilityPercent(t, e)),
              this.log("Element visibility " + this.elVis + "%"),
              this.playingCreativeId > -1 &&
              this.hasFocus &&
              this.elVis >= e.area
                ? ++this.timeCounter >= 10 * e.delay &&
                  this.triggerViewableEvent(e)
                : (this.timeCounter = 0),
              this.checkThreshold(this.elVis);
          }),
          (e.prototype.triggerViewableEvent = function (t) {
            this.log(
              "Element visible more than " +
                t.area +
                "% for " +
                Math.round(this.timeCounter / 10) +
                " seconds"
            ),
              this.executePixels(this.playingCreativeId, "viewable"),
              this.executeViewCallback(t),
              t.testLayer && (this.resultLayer.innerHTML = "&#10004;");
          }),
          (e.prototype.executeViewCallback = function (t) {
            t.viewCallback &&
              (t.viewCallback(),
              (t.viewCallback = null),
              this.log("View callback function called"));
          }),
          (e.prototype.checkElementStatus = function (t) {
            var e = { measurable: !0, element: t };
            if (!t || window.self === window.top || this.w.self === this.w.top)
              return this.log("No iframe detected"), e;
            this.log("Iframe detected");
            var i = this.getTopWindow();
            return (
              (this.w = i.currentWindow),
              (this.d = this.w.document),
              (e.element = null === i.currentFrame ? t : i.currentFrame),
              i.currentWindow.$sf && i.currentWindow.$sf.ext
                ? (this.log("SafeFrame detected"),
                  (e.element = e.element || t),
                  (this.isSafeFrame = !0))
                : void 0 !== window.inDapIF && window.inDapIF
                ? (this.log("Friendly iframe detected"), (e.element = t))
                : i.currentWindow === window.top
                ? this.log("Secured iframe detected")
                : this.isAMP()
                ? (this.log("AMP iframe detected"), (this.isAMPFrame = !0))
                : (this.log("Cross-domain iframe detected"),
                  this.isIOSupported || ((e.element = t), (e.measurable = !1))),
              e
            );
          }),
          (e.prototype.area = function (t) {
            var e = t.getBoundingClientRect();
            return (e.right - e.left) * (e.bottom - e.top);
          }),
          (e.prototype.addInfoLayer = function () {
            var t = this.addElement("div", document.body, {
              id: "testLayer_" + Math.round(1e5 * Math.random()),
              style:
                "width:60px;height:30px;position:fixed;top:0;right:0;background-color:yellow;\n\t\t\tcolor:blue;font-size:20px;text-align:center;padding-top:5px;z-index:99999;",
            });
            return (t.innerHTML = "0%"), t;
          }),
          (e.prototype.checkThreshold = function (t) {
            for (var e = 0, i = this.threshold; e < i.length; e++) {
              var n = i[e];
              n.area > t && n.lastSent <= 0
                ? (n.belowCallback(), (n.lastSent = 1))
                : n.area <= t &&
                  n.lastSent >= 0 &&
                  (n.aboveCallback(), (n.lastSent = -1));
            }
          }),
          (e.prototype.mergeOptions = function (t, e) {
            var i = {
              area: t && t.area ? t.area : 50,
              testLayer: !(!t || !t.testLayer) && t.testLayer,
              logMessages: !(!t || !t.logMessages) && t.logMessages,
              videoIntegration:
                t && t.videoIntegration ? t.videoIntegration : 0,
              threshold: t && t.threshold ? t.threshold : [],
              viewCallback: t && t.viewCallback ? t.viewCallback : null,
            };
            return (
              t && t.delay
                ? (i.delay = t.delay)
                : (i.delay = i.videoIntegration ? 2 : 1),
              !this.isMobile() &&
                0 === i.videoIntegration &&
                e.clientHeight * e.clientWidth > 242500 &&
                (i.area = 30),
              i
            );
          }),
          (e.prototype.executePixels = function (t, e) {
            var i = !1;
            if (this.pixels[t] && this.pixels[t][e]) {
              for (var n = 0, r = this.pixels[t][e]; n < r.length; n++) {
                var a = r[n];
                this.tracking(a);
              }
              (i = !0),
                delete this.pixels[t],
                (this.playingCreativeId = -1),
                this.integration < 2 && this.w.clearInterval(this.counterId);
            }
            return this.isAmpVisSub && this.ampListen(), i;
          }),
          (e.prototype.getVisibilityPercent = function (t, e) {
            var i = this.area(t);
            if (0 === i) return 0;
            var n = t.getBoundingClientRect(),
              r = Math.max(
                0,
                Math.min(n.bottom, this.w.innerHeight) - Math.max(0, n.top)
              ),
              a = Math.max(
                0,
                Math.min(n.right, this.w.innerWidth) - Math.max(0, n.left)
              ),
              o = Math.round((r * a * 100) / i);
            return (
              e.testLayer &&
                (n.top < 0
                  ? ((this.resultLayer.style.top = "auto"),
                    (this.resultLayer.style.bottom = "0px"))
                  : ((this.resultLayer.style.top = "0px"),
                    (this.resultLayer.style.bottom = "auto")),
                (this.resultLayer.innerHTML = o + "%")),
              o
            );
          }),
          (e.prototype.subscribeAmpVis = function () {
            var t = this;
            (this.isAmpVisSub = !0),
              (this.ampListen = this.w.context.observeIntersection(function (
                e
              ) {
                e.forEach(function (e) {
                  t.elVis = 100 * e.intersectionRatio;
                });
              }));
          }),
          (e.prototype.isIntersectionObserverSupport = function () {
            return (
              "IntersectionObserver" in this.w &&
              "IntersectionObserverEntry" in this.w
            );
          }),
          e
        );
      })(r.Global);
    e.ViewabilityCore = a;
  },
  20: function (t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function () {
        var t = function (e, i) {
          return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(e, i);
        };
        return function (e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EasyNativeAd = void 0);
    var r = i(4),
      a = (function (t) {
        function e(e) {
          var i = t.call(this, e) || this;
          return (i.c = e), i;
        }
        return (
          n(e, t),
          (e.prototype.prepareParams = function (t) {
            this.log("Prepare params");
            var e, i;
            if (this.c.creative.width && this.c.creative.height) {
              var n = this.c.creative.width / this.c.creative.height;
              this.log(
                "Values from bid response, width: " +
                  this.c.creative.width +
                  "px height: " +
                  this.c.creative.height +
                  "px"
              ),
                this.c.creative.width > t.width && t.width
                  ? ((e = t.width - 20), (i = e / n))
                  : this.c.creative.height > t.height && t.height
                  ? ((i = t.height - 20), (e = n * i))
                  : ((e = this.c.creative.width), (i = this.c.creative.height));
            } else
              this.log("there were no width and height in bid response"),
                this.log(
                  "Values from template form, width: " +
                    this.c.userParams.nativeImageMinWidth +
                    "px \n\t\t\theight=" +
                    this.c.userParams.nativeImageMinHeight
                ),
                (e = this.c.userParams.nativeImageMinWidth),
                (i = this.c.userParams.nativeImageMinHeight);
            return { width: e, height: i };
          }),
          (e.prototype.limitString = function (t, e) {
            return t.length > e ? t.substring(0, e - 3) + "..." : t;
          }),
          (e.prototype.trackImp = function (t) {
            for (var e = 0, i = t; e < i.length; e++) {
              var n = i[e];
              n && this.tracking(n);
            }
          }),
          (e.prototype.renderAd = function () {
            var t,
              e = this;
            if (
              (this.log("render"),
              (this.adPlacement = this.getPlacement(this.c.tagId)),
              this.log(this.adPlacement),
              "ad placement" !== this.c.adPosition.selectedPosition)
            ) {
              var i = this.findPlaceForAd(this.c.adPosition);
              if ((this.log("parent", i), !i))
                return void this.log("no place for ad");
              i.insertBefore(this.adPlacement, i.firstChild);
            }
            var n = this.adPlacement.clientWidth,
              r = {
                width: this.c.userParams.formatWidth,
                height: this.c.userParams.formatHeight,
              };
            if (this.c.userParams.formatHeight && this.c.userParams.formatWidth)
              (r.width = this.c.userParams.formatWidth),
                (r.height = this.c.userParams.formatHeight);
            else if (-1 !== this.c.userParams.maxWidth.indexOf("%")) {
              var a = Number(this.c.userParams.maxWidth.replace("%", ""));
              r.width = Math.floor((a / 100) * n);
            } else
              r.width = Number(this.c.userParams.maxWidth.replace("px", ""));
            var o = this.prepareParams(r);
            this.addMyCss(o, r);
            var s = this.addElement("div", this.adPlacement, {
                id: "sas_container_" + this.c.insertionId,
              }),
              l = this.addElement("a", s, {
                href: this.c.creative.clickUrl,
                target: "_blank",
              }),
              d =
                (this.addElement("img", l, {
                  id: "sas_img_" + this.c.insertionId,
                  src: this.c.creative.url,
                  alt: this.c.creative.alt,
                }),
                this.addElement("div", l, {
                  id: "sas_info_" + this.c.insertionId,
                }));
            (this.addElement("span", d, {
              id: "sas_title_" + this.c.insertionId,
            }).innerHTML = this.limitString(
              this.c.userParams.title,
              this.c.userParams.nativeTitleMaxLength
            )),
              (this.addElement("span", d, {
                id: "sas_data_" + this.c.insertionId,
              }).innerHTML = this.limitString(
                this.c.userParams.data,
                this.c.userParams.nativeDataMaxLength
              )),
              (this.addElement("span", l, {
                id: "sas_sponsor-label_" + this.c.insertionId,
              }).innerHTML = this.c.userParams.sponsorLabel),
              (this.addElement("span", l, {
                id: "sas_text_overlay_" + this.c.insertionId,
              }).innerHTML = this.c.userParams.textOverlay),
              this.c.userParams.privacyUrl &&
                this.addPrivacyLink(this.c.userParams.privacyUrl, s);
            var h = new Date().getTime();
            this.viewability.init(
              s,
              ((t = {}),
              (t[this.c.creative.id] = {
                viewable: [this.prepareTrackingUrl("viewcount", h)],
                undetermined: [this.prepareTrackingUrl("viewUndetermined", h)],
              }),
              t),
              {}
            ),
              (function () {
                for (
                  var t = s.getElementsByTagName("a"),
                    i = 0,
                    n = Object.keys(t);
                  i < n.length;
                  i++
                ) {
                  var r = n[i];
                  e.addEvent(t[r], "click", function () {
                    for (var t = 0, i = e.c.clickTrackers; t < i.length; t++) {
                      var n = i[t];
                      e.tracking(e.c.creative.creativeClickCountPixelUrl),
                        e.tracking(n);
                    }
                  });
                }
              })();
          }),
          (e.prototype.addMyCss = function (t, e) {
            this.log("Add my css");
            var i,
              n = !1;
            t.width + 40 >= 0.5 * e.width
              ? ((i = "100%"), (n = !0))
              : (i = e.width - t.width - 35 + "px"),
              this.addCss(
                "\n\t\t\t#sas_container_" +
                  this.c.insertionId +
                  " {  \n\t\t\t\tdisplay:block;\n\t\t\t\tbackground-color: #" +
                  this.c.userParams.backgroundColor +
                  ";\n\t\t\t\tpadding: 10px;\n\t\t\t\tfloat: left;\n\t\t\t\tposition: relative;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tmax-width: " +
                  (this.c.userParams.formatWidth
                    ? "none"
                    : this.c.userParams.maxWidth) +
                  ";\n\t\t\t\twidth: " +
                  e.width +
                  "px;\n\t\t\t\theight: " +
                  (e.height ? e.height + "px" : "auto") +
                  ";\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t#sas_container_" +
                  this.c.insertionId +
                  ":hover {\n\t\t\t\t" +
                  this.createMultiBrowserCss(
                    "box-shadow: inset 0 0 " +
                      t.width +
                      "px " +
                      t.height +
                      "px rgba(255, 255, 255, 0.1)"
                  ) +
                  ";\n\t\t\t}\n\t\t\t#sas_container_" +
                  this.c.insertionId +
                  " a {\n\t\t\t\tdisplay: block;\n\t\t\t\theight: " +
                  t.height +
                  "px;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t#sas_img_" +
                  this.c.insertionId +
                  "{\t\n\t\t\t\twidth: " +
                  t.width +
                  "px;\n\t\t\t\theight: " +
                  t.height +
                  "px;\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-right: 10px;\n\t\t\t}\n\t\t\t#sas_info_" +
                  this.c.insertionId +
                  " {\n\t\t\t\tfloat: left;\n\t\t\t\twidth: " +
                  i +
                  ";\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t#sas_title_" +
                  this.c.insertionId +
                  " {\n\t\t\t\twidth: 100%;\n\t\t\t\tfloat: left;\n\t\t\t\tfont-size: " +
                  this.c.userParams.fontSize +
                  ";\n\t\t\t\tcolor: #" +
                  this.c.userParams.titleColor +
                  ";\n\t\t\t\tmargin: " +
                  (n ? 10 : 0) +
                  "px 0px 0px 0px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t#sas_data_" +
                  this.c.insertionId +
                  " {\n\t\t\t\tmargin: 0px;\n\t\t\t\twidth: 100%;\n\t\t\t\tfloat: left;\n\t\t\t\tcolor: #" +
                  this.c.userParams.descrColor +
                  ";\n\t\t\t\ttext-align: justify;\n\t\t\t}\n\t\t\t#sas_sponsor-label_" +
                  this.c.insertionId +
                  " {\n\t\t\t\tcolor: #" +
                  this.c.userParams.sponsorLabelColor +
                  ";\n\t\t\t\tfloat: " +
                  (n ? "left" : "none") +
                  ";\n\t\t\t\twidth: " +
                  (n ? "100%" : "auto") +
                  ";\n\t\t\t\ttext-align: right;\n\t\t\t\tmargin: 0;\n\t\t\t\tposition: " +
                  (n ? "static" : "absolute") +
                  ";\n\t\t\t\tbottom: " +
                  (n ? "0" : "10") +
                  "px;\n\t\t\t\tright: " +
                  (n ? "0" : "10") +
                  "px;\n\t\t\t}\n\t\t\t#sas_privacy_" +
                  this.c.insertionId +
                  ' {\n\t\t\t\tbackground: url("//ced-ns.sascdn.com/diff/templates/js/adplayer/oba_icon_retina.png");\n\t\t\t\tbackground-size: 100%;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 15px;\n\t\t\t\theight: 15px;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 1px;\n\t\t\t\ttop: 1px;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t'
              );
          }),
          (e.prototype.init = function () {
            var t = this;
            this.executeCustomScripts(
              this.c.customScript,
              [this.c.creative],
              this.c.isAsync,
              this.c.tagId
            ),
              "ad placement" === this.c.adPosition.selectedPosition
                ? this.renderAd()
                : this.docReady(function () {
                    return t.renderAd();
                  }),
              this.trackImp(this.c.impUrls),
              this.c.eventTrackers &&
                this.trackEvents(JSON.parse(this.c.eventTrackers));
          }),
          (e.prototype.addPrivacyLink = function (t, e) {
            var i = document.createElement("a");
            (i.id = "sas_privacy_" + this.c.insertionId),
              i.setAttribute("href", t),
              i.setAttribute("target", "_blank"),
              e.firstChild.appendChild(i);
          }),
          (e.prototype.trackEvents = function (t) {
            var e = this;
            t.forEach(function (t) {
              if (e.isEventTrackerValid(t))
                if (1 === t.method) e.tracking(t.url);
                else if (2 === t.method) {
                  var i = document.createElement("script");
                  (i.src = t.url), e.d.getElementById(e.c.tagId).appendChild(i);
                }
            });
          }),
          (e.prototype.isEventTrackerValid = function (t) {
            return !!(t.event && 1 === t.event && t.method && t.url);
          }),
          e
        );
      })(r.SasAd);
    (e.EasyNativeAd = a), (window.EasyNativeAd = a);
  },
  3: function (t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function () {
        var t = function (e, i) {
          return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(e, i);
        };
        return function (e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Viewability = void 0);
    var r = i(2),
      a = (function (t) {
        function e() {
          return t.call(this) || this;
        }
        return (
          n(e, t),
          (e.prototype.init = function (t, e, i) {
            this.log("init"), this.start(t, e, i);
          }),
          e
        );
      })(r.ViewabilityCore);
    (e.Viewability = a), (window.Viewability = a);
  },
  4: function (t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function () {
        var t = function (e, i) {
          return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(e, i);
        };
        return function (e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.SasAd = void 0);
    var r = i(0),
      a = i(3),
      o =
        (window.sas,
        (function (t) {
          function e(e, i) {
            void 0 === i && (i = !1);
            var n = t.call(this, i) || this;
            return (
              (n.c = e),
              (n.isFlash = !1),
              (n.closed = !1),
              (n.iCustomScriptExecuted = !1),
              (n.animationSpeed = { none: 0, slow: 2, medium: 1.4, fast: 0.7 }),
              (n.buttonSize = { small: 1, normal: 1.5, big: 2 }),
              (n.lastClicked = 0),
              (n.ifrContainer = null),
              (n.overIframe = !1),
              document.getElementById(e.tagId) ||
                document.write('<div id="' + e.tagId + '"></div>'),
              (n.isFlash = n.hasFlash()),
              n.c.filePath &&
                ((n.closeButtonUrl = n.c.filePath + "images/close-retina.png"),
                (n.closeButtonUrl2 = n.c.filePath + "images/close_54x54.png"),
                (n.closeButtonUrl3 =
                  n.c.filePath + "images/close-without-padding.png"),
                (n.expandButtonUrl = n.c.filePath + "images/expand_54x54.png")),
              (n.viewability = new a.Viewability()),
              n
            );
          }
          return (
            n(e, t),
            (e.prototype.calculateDimensions = function (t, e, i, n) {
              var r,
                a = this.getRatio(t, e),
                o = this.getParentWidth(i);
              -1 !== n.indexOf("px!")
                ? (r = Number(n.replace("px!", "")))
                : (r =
                    -1 !== n.indexOf("%")
                      ? Math.round((Number(n.replace("%", "")) / 100) * o)
                      : Number(n.replace("px", ""))) > o && (r = o);
              var s = Math.round(r / a);
              return (
                this.log(
                  "calculateDimensions, input: " +
                    t +
                    ", " +
                    e +
                    ", output: " +
                    r +
                    ", " +
                    s
                ),
                { height: s, width: r }
              );
            }),
            (e.prototype.addCss = function (t) {
              var e = this.d.createElement("style");
              (e.type = "text/css"),
                e.styleSheet
                  ? (e.styleSheet.cssText = t)
                  : e.appendChild(this.d.createTextNode(t)),
                this.d.getElementsByTagName("head")[0].appendChild(e);
            }),
            (e.prototype.whichTransitionEvent = function () {
              var t = this.d.createElement("fakeelement"),
                e = {
                  transition: "transitionend",
                  OTransition: "oTransitionEnd",
                  MozTransition: "transitionend",
                  WebkitTransition: "webkitTransitionEnd",
                };
              for (var i in e) if (void 0 !== t.style[i]) return e[i];
            }),
            (e.prototype.addImage = function (t) {
              var e = "";
              if ("" !== t.url) {
                "" !== t.oryginalClickUrl &&
                  (e +=
                    '<a href="' +
                    t.clickUrl +
                    '" target="' +
                    ("_blank" === t.clickTarget ? "_blank" : "_self") +
                    '" >');
                var i = t.alt ? t.alt : "";
                (e +=
                  '<img\n\t\t\t\tid="img_' +
                  t.id +
                  '"\n\t\t\t\tsrc="' +
                  t.url +
                  '"\n\t\t\t\twidth="' +
                  t.width +
                  '"\n\t\t\t\tborder="0"\n\t\t\t\theight="' +
                  t.height +
                  '"\n\t\t\t\talt="' +
                  i +
                  '" />'),
                  "" !== t.oryginalClickUrl && (e += "</a>");
              }
              return e;
            }),
            (e.prototype.flash = function (t, e, i, n) {
              this.log("flash");
              var r = "";
              for (var a in t)
                t.hasOwnProperty(a) &&
                  (r += '<param name="' + a + '" value="' + t[a] + '" />');
              return (
                '<object type="application/x-shockwave-flash"\n\t\t\t\t\tname="' +
                e +
                '"\n\t\t\t\t\tid="' +
                e +
                '"\n\t\t\t\t\twidth="' +
                i +
                '"\n\t\t\t\t\theight="' +
                n +
                '"\n\t\t\t\t\tdata="' +
                t.movie +
                '">' +
                r +
                "\n\t\t\t\t</object>"
              );
            }),
            (e.prototype.addCreative = function (t, e, i, n, r, a, o, s, l, d) {
              var h = this;
              void 0 === i && (i = !1),
                void 0 === n && (n = ""),
                void 0 === r && (r = !0),
                void 0 === s && (s = !1),
                void 0 === l && (l = !0),
                this.log("addCreative", t, e, i, n, r, s, l, d);
              var c = t.agencyCode;
              n &&
                !this.iCustomScriptExecuted &&
                ((c += n), (this.iCustomScriptExecuted = !0));
              var u = 0 !== t.width || s ? t.width : "100%",
                p = 0 !== t.height || s ? t.height : "100%",
                f = this.c.tagId;
              if (0 === t.type) {
                var m,
                  g = this.w,
                  v = this.d;
                if (null === d || void 0 === d ? void 0 : d.isSafeFrame)
                  if (window.$sf) this.addSafeFrame(e.id, u, p, c, g, v, a, o);
                  else {
                    var y = document.createElement("script");
                    (y.onload = function () {
                      return h.addSafeFrame(e.id, u, p, c, g, v, a, o);
                    }),
                      (y.src =
                        "//ced-ns.sascdn.com/safeframe/safeframe-api/base_host.js"),
                      this.d.head.appendChild(y);
                  }
                else
                  (m = this.addElement("iframe", e, {
                    src: "about:blank",
                    width: u,
                    height: p,
                    frameBorder: "0",
                    allow: "autoplay;fullscreen;",
                    scrolling: "no",
                    marginheight: "0",
                    marginwidth: "0",
                    id: f + "_iframe",
                  })),
                    (g = m.contentWindow || m),
                    (v = m.contentWindow.document),
                    v.open("text/html", "replace"),
                    v.write(
                      "\n\t\t\t\t\t<!DOCTYPE html>\n\t\t\t\t\t<head>\n\t\t\t\t\t\t<script>var inDapIF = " +
                        i +
                        "</script>\n\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t" +
                        (l
                          ? "\n\t\t\t\t\t\t\t\thtml, body {\n\t\t\t\t\t\t\t\t\twidth: " +
                            ("number" == typeof u ? u.toString() + "px" : u) +
                            ";\n\t\t\t\t\t\t\t\t\theight: " +
                            ("number" == typeof p ? p.toString() + "px" : p) +
                            ";\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
                          : "") +
                        "\n\t\t\t\t\t\t\tbody {\n\t\t\t\t\t\t\t\tpadding:0;\n\t\t\t\t\t\t\t\tmargin:0 auto;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</style>\n\t\t\t\t\t</head>\n\t\t\t\t\t<body>\n\t\t\t\t\t\t" +
                        c +
                        "\n\t\t\t\t\t</body>\n\t\t\t\t\t</html>\n\t\t\t\t"
                    ),
                    v.close(),
                    (this.ifrContainer = m),
                    a && (this.log("iframe ready"), a(g, v)),
                    o &&
                      this.winReady(
                        function () {
                          h.log("iframe load"), o(g, v, m);
                        },
                        g,
                        v
                      );
              } else if (4 === t.type) {
                var b = 0,
                  w =
                    t.url +
                    (t.url.indexOf("?") < 0 ? "?" : "&") +
                    "sasfid=" +
                    t.id;
                if (t.clickUrlArray)
                  for (var x = 0, I = t.clickUrlArray; x < I.length; x++) {
                    var C = I[x];
                    w +=
                      "&clicktag" +
                      (b++ ? b : "") +
                      "=" +
                      encodeURIComponent(C);
                  }
                this.addElement("iframe", e, {
                  src: w,
                  width: u,
                  height: p,
                  frameBorder: "0",
                  allow: "autoplay;fullscreen;",
                  scrolling: "no",
                  marginheight: "0",
                  marginwidth: "0",
                  id: f + "_iframe",
                }),
                  this.addEvent(this.w, "message", function (e) {
                    if (e.data && t.id === Number(e.data)) {
                      var i = { clickUrls: t.clickUrlArray, isSmart: !0 };
                      e.source.postMessage(JSON.stringify(i), "*");
                    }
                  });
              } else e.innerHTML = this.addImage(t);
              if (t.type && c)
                if (r || this.isReady) {
                  var k = this.addElement("iframe", e, {
                      src: "about:blank",
                      frameBorder: 0,
                      allow: "autoplay;fullscreen;",
                      scrolling: "no",
                      marginheight: 0,
                      marginwidth: 0,
                      style:
                        "width:1px;height:0px;visibility:hidden;position:absolute;top:0",
                    }),
                    P = k.contentWindow.document;
                  P.open("text/html", "replace"),
                    P.write(
                      '\n\t\t\t\t\t<!DOCTYPE html>\n\t\t\t\t\t\t<head></head>\n\t\t\t\t\t\t<body style="padding:0;margin:0 auto">' +
                        c +
                        "</body>\n\t\t\t\t\t</html>\n\t\t\t\t"
                    ),
                    P.close();
                } else document.write(c);
            }),
            (e.prototype.getPlacement = function (t) {
              var e = this.d.getElementById(t);
              return (
                this.friendlyIframe &&
                  (this.friendlyIframe.setAttribute(
                    "style",
                    "width:1px; height:1px;position:absolute;"
                  ),
                  this.friendlyIframe.setAttribute(
                    "allow",
                    "autoplay;fullscreen;"
                  ),
                  e ||
                    ((e = this.d.createElement("DIV")),
                    e.setAttribute("id", t),
                    this.friendlyIframe.parentNode.insertBefore(
                      e,
                      this.friendlyIframe
                    ))),
                this.log("adPlacement", e),
                e
              );
            }),
            (e.prototype.hasFlash = function () {
              try {
                if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                  return !0;
              } catch (t) {
                if (
                  navigator &&
                  navigator.mimeTypes &&
                  void 0 !==
                    navigator.mimeTypes["application/x-shockwave-flash"] &&
                  navigator.mimeTypes["application/x-shockwave-flash"]
                    .enabledPlugin
                )
                  return !0;
              }
              return !1;
            }),
            (e.prototype.stopEvent = function (t) {
              return (
                t || (t = window.event),
                (t.cancelBubble = !0),
                (t.returnValue = !1),
                t.stopPropagation && t.stopPropagation(),
                t.preventDefault && t.preventDefault(),
                !1
              );
            }),
            (e.prototype.prepareTrackingUrl = function (t, e, i) {
              var n = this.c.statisticTracking;
              return (
                this.c.baseUrl +
                "/track/action?sid=" +
                this.c.sessionId +
                "&pid=" +
                this.c.pageId +
                "&iid=" +
                this.c.insertionId +
                "&fmtid=" +
                this.c.formatId +
                "&cid=" +
                this.c.creative.id +
                "&key=" +
                t +
                this.validateParam("vit", n.videoIntegrationType) +
                this.validateParam("vct", n.videoClientTechnology) +
                this.validateParam("vrn", n.videoRevisionNumber) +
                (n.rtbbid
                  ? "&rtb=1&rtbbid=" +
                    n.rtbbid +
                    "&rtbet=" +
                    n.rtbet +
                    "&rtblt=" +
                    n.rtblt +
                    "&rtbnid=" +
                    n.rtbnid +
                    "&rtbh=" +
                    n.rtbh
                  : "") +
                "&" +
                (i ? "ec=" + i + "&" : "") +
                "ts=" +
                e
              );
            }),
            (e.prototype.createMultiBrowserCss = function (t) {
              return (
                "-moz-" +
                t +
                ";-webkit-" +
                t +
                ";-ms-" +
                t +
                ";-o-" +
                t +
                ";" +
                t +
                ";"
              );
            }),
            (e.prototype.executeCustomScripts = function (t, e, i, n) {
              this.log("executeCustomScripts", t, e, i, n);
              for (var r = t, a = 0, o = e; a < o.length; a++) {
                var s = o[a];
                0 !== s.type && (r += s.agencyCode);
              }
              if (i) {
                if (r.replace(/\r\n/gm, "")) {
                  var l = document.createElement("iframe");
                  l.src = "about:blank";
                  var d =
                    "width:1px;height:0;visibility:hidden;display:block;border-width:0;";
                  l.setAttribute("style", d),
                    l.setAttribute(
                      "id",
                      "sasCustomScript_" + this.c.insertionId
                    ),
                    l.setAttribute("allow", "autoplay;fullscreen;"),
                    (l.style.cssText = d),
                    (function (t, e) {
                      var i = document.getElementById(t);
                      if ("string" == typeof e) {
                        var n = document.createElement("div");
                        (n.innerHTML = e), (e = n);
                      }
                      i.appendChild(e);
                    })(n, l);
                  var h = l.contentWindow.document;
                  h.open("text/html", "replace"),
                    h.write(
                      "<!DOCTYPE html><head></head><body>" +
                        r +
                        "</body></html>"
                    ),
                    h.close();
                }
              } else document.write(r);
            }),
            (e.prototype.findPlaceForAd = function (t) {
              this.log("findPlaceForAd", t);
              var e,
                i,
                n = [],
                r = this.d.createElement("div");
              (r.id = "sas_intextContainer_" + this.c.insertionId),
                (n = t.idNames.split(";")),
                "" === n[n.length - 1] && n.splice(n.length - 1, 1);
              for (var a = 0, o = n; a < o.length; a++) {
                switch (
                  ((i = o[a].replace(/^\s+|\s+$/g, "")), t.selectedPosition)
                ) {
                  case "paragraph by id":
                    e = this.d.getElementById(i);
                    break;
                  case "paragraph by class name":
                    (e = this.d.getElementsByClassName(i)),
                      e.length && (e = e[0]);
                    break;
                  case "paragraph by item prop":
                    for (
                      var s = this.d.getElementsByTagName("*"),
                        l = 0,
                        d = s.length;
                      l < d;
                      l++
                    ) {
                      var h = s[l];
                      if (h.getAttribute("itemprop") === i) {
                        e = h;
                        break;
                      }
                    }
                    break;
                  case "specified element by id":
                    e = this.d.getElementById(i);
                    break;
                  case "specified element by class name":
                    (e = this.d.getElementsByClassName(i)),
                      e.length && (e = e[0]);
                }
                if (
                  ("specified element by id" === t.selectedPosition ||
                    "specified element by class name" === t.selectedPosition) &&
                  e &&
                  e.tagName
                )
                  return e;
                if (e && e.tagName) {
                  var c = e.getElementsByTagName(t.paragraphType);
                  if ("automatic" === t.positionInParagraph) {
                    if (0 !== c.length && c.length < 100)
                      for (var u = c.length - 1; u >= 0; u--) {
                        var p = this.getElementVisibility(c[u]);
                        if (
                          (this.log(
                            "checkElementVisibility for element number " + u,
                            c[u],
                            p
                          ),
                          (p > 0 && p < 100) || 0 === u)
                        )
                          return (
                            c[u].parentNode.insertBefore(r, c[u].nextSibling), r
                          );
                      }
                  } else if (
                    "specified paragraph" === t.positionInParagraph &&
                    0 !== t.paragraphNumber
                  ) {
                    if (0 !== c.length && c.length < 100) {
                      for (var f = 0; f <= c.length - 1; f++)
                        t.paragraphNumber > 0 && f === t.paragraphNumber - 1
                          ? c[f].parentNode.insertBefore(r, c[f].nextSibling)
                          : t.paragraphNumber > c.length && e.appendChild(r);
                      return r;
                    }
                  } else {
                    if ("bottom" === t.positionInParagraph)
                      return e.appendChild(r), r;
                    if ("top" === t.positionInParagraph)
                      return (
                        e.firstChild
                          ? e.insertBefore(r, e.firstChild)
                          : e.appendChild(r),
                        r
                      );
                  }
                }
              }
              return this.log("show anyway"), this.findPlaceForAdAuto();
            }),
            (e.prototype.getAdPlacement = function (t) {
              var e = null;
              switch (t.selectedPosition) {
                case "automatic":
                  e = this.findPlaceForAdAuto();
                  break;
                case "ad placement":
                  e = this.getPlacement(this.c.tagId);
                  break;
                default:
                  e = this.findPlaceForAd(t);
              }
              return e;
            }),
            (e.prototype.getWholeText = function (t) {
              for (var e = "", i = t.childNodes.length, n = 0; n < i; n++) {
                var r = t.childNodes[n];
                8 !== r.nodeType &&
                  (e += 1 !== r.nodeType ? r.nodeValue : this.getWholeText(r));
              }
              return e;
            }),
            (e.prototype.findPlaceForAdAuto = function () {
              this.log("findPlaceForAdAuto");
              var t = [],
                e = [],
                i = [],
                n = [
                  "SCRIPT",
                  "STYLE",
                  "TITLE",
                  "LABEL",
                  "HEADER",
                  "H2",
                  "LI",
                  "A",
                  "UL",
                  "FORM",
                  "FIGURE",
                  "NOSCRIPT",
                  "IFRAME",
                ],
                r = ["fixed", "absolute"],
                a = this.d.body.getElementsByTagName("*"),
                o = this.d.body,
                s = this.d.documentElement,
                l = Math.max(
                  o.scrollHeight,
                  o.offsetHeight,
                  s.clientHeight,
                  s.scrollHeight,
                  s.offsetHeight
                ),
                d = this.d.createElement("div");
              d.id = "sas_intextContainer_" + this.c.insertionId;
              for (var h = 0, c = a; h < c.length; h++) {
                var u = c[h],
                  p = Math.round(
                    u.parentNode.childElementCount +
                      u.parentNode.clientHeight +
                      u.parentNode.clientHeight +
                      u.parentNode.offsetTop
                  );
                if (!(n.indexOf(u.tagName) > -1 || p <= 10)) {
                  var f = void 0;
                  u.firstChild &&
                    3 === u.firstChild.nodeType &&
                    u.firstChild.length > 150 &&
                    u.parentNode.offsetTop > 300 &&
                    ((f = {
                      node: u.firstChild,
                      length: u.firstChild.length,
                      parent: u.parentNode,
                      value: u.firstChild.data,
                      parentOffset: u.parentNode.offsetTop,
                    }),
                    t[p] || (t[p] = []),
                    t[p].push(f)),
                    u.clientWidth >= 300 &&
                      u.clientHeight > 100 &&
                      u.parentNode.clientHeight > 1.5 * u.clientHeight &&
                      u.parentNode.offsetTop > 300 &&
                      u.offsetTop < 0.75 * l &&
                      "hidden" !==
                        this.w
                          .getComputedStyle(u.parentNode, null)
                          .getPropertyValue("overflow") &&
                      -1 ===
                        r.indexOf(
                          this.w
                            .getComputedStyle(u.parentNode, null)
                            .getPropertyValue("position")
                        ) &&
                      ((f = {
                        node: u,
                        parent: u.parentNode,
                        parentWidth: u.parentNode.clientWidth,
                        parentId: p,
                        offsetTop: u.parentNode.offsetTop,
                      }),
                      e[p] || (e[p] = []),
                      e[p].push(f)),
                    u.clientWidth >= 300 &&
                      u.clientHeight > 100 &&
                      u.offsetTop > 0.75 * this.w.innerHeight &&
                      u.offsetTop < Math.max(0.5 * l, this.w.innerHeight) &&
                      -1 ===
                        r.indexOf(
                          this.w
                            .getComputedStyle(u, null)
                            .getPropertyValue("position")
                        ) &&
                      ((f = {
                        node: u,
                        width: u.clientWidth,
                        height: u.clientHeight,
                        offsetTop: u.offsetTop,
                      }),
                      i.push(f));
                }
              }
              if (
                (t.sort(function (t, e) {
                  return e.length - t.length;
                }),
                this.log("article page", t),
                t[0] && t[0].length > 2)
              ) {
                var m = t[0][0].parent,
                  g = this.getWholeText(m).length;
                this.log("articleParentLength", g);
                for (
                  var v = m.childNodes, y = 0, b = 0, w = 0;
                  w < v.length;
                  w++
                )
                  if (
                    (this.log("sum", y),
                    (y += this.getWholeText(v[w]).length) > g / 3)
                  ) {
                    this.log("break", y, g / 3), (b = w);
                    break;
                  }
                return (
                  this.log("whichChild", b),
                  this.log("articleChildren", v),
                  m.insertBefore(d, v[b]),
                  d
                );
              }
              this.log("home page or short article", e),
                e.sort(function (t, e) {
                  return (
                    t[0].offsetTop - e[0].offsetTop ||
                    e[0].parentWidth - t[0].parentWidth
                  );
                }),
                this.log(e);
              for (var x = 0, I = e; x < I.length; x++) {
                var C = I[x];
                if (C && C.length > 1)
                  return (
                    this.log("div collection with the same parent", e[C]),
                    C[0].parent.insertBefore(d, C[1].node),
                    d
                  );
              }
              return (
                this.log("other2", i),
                i.length
                  ? (i.sort(function (t, e) {
                      return e.width - t.width || t.offsetTop - e.offsetTop;
                    }),
                    this.log("other2", i),
                    i[0].node.insertBefore(d, i[0].node.firstChild),
                    d)
                  : null
              );
            }),
            (e.prototype.buildTestContent = function (t) {
              this.addCss(
                "\n\t\t\t#iframeMob_" +
                  this.c.insertionId +
                  "{\n\t\t\t\twidth:330px;\n\t\t\t\theight:580px;\n\t\t\t\tposition:absolute;\n\t\t\t\ttop:88px;\n\t\t\t\tleft:46px;\n\t\t\t}\n\t\t\t#iframeDiv_" +
                  this.c.insertionId +
                  "{\n\t\t\t\tmargin:20px auto 0;\n\t\t\t\tposition:relative;\n\t\t\t\twidth:416px;\n\t\t\t\theight:742px;\n\t\t\t\tbackground-image:url(http://gallery.smartadserver.com/demo_mobile/image/Phone_Hybrid.png);\n\t\t\t}\n\t\t\ttable img{\n\t\t\t\tdisplay:none;\n\t\t\t}\n\t\t"
              );
              var e =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum ullamcorper orci et e\n\t\tleifend. Morbi a magna ac dolor porta condimentum. ut, commodo a enim. Nulla ac dui vel odio rutrum rh tellu\n\t\ts. Quisque euismod mattis massa. Integer laoreet sapien quis eros eleifend auctor. Aenean faucibus augue nec\n\t\t dolor congue posuere. Aliquam et massa tellus. Sed commodo, orci dictum porta scelerisque, risus neque vulp\n\t\t utate enim, sit amet fermentum dui velit ac erat. Aenean faucibus augue nec dolor congue posuere. Aliquam e\n\t\t t massa tellus. Sed commodo, orci dictum porta scelerisque, risus neque vulputate enim, sit amet fermentum\n\t\t dui velit ac erat.";
              e =
                "<" + t.paragraphType + ">" + e + "</" + t.paragraphType + ">";
              for (var i = "<div>" + e + "</div>", n = "", r = 0; r < 4; r++)
                n += e;
              e = n;
              for (var a = "", o = 0; o < 2; o++) a += i;
              (i = a),
                "ad placement" === t.selectedPosition &&
                  ((t.selectedPosition = "specified element by id"),
                  (t.idNames = this.c.tagId));
              var s;
              s =
                "paragraph by id" === t.selectedPosition ||
                "specified element by id" === t.selectedPosition
                  ? "id"
                  : "class";
              var l = [];
              (l = t.idNames.split(";")),
                "" === l[l.length - 1] && l.splice(l.length - 1, 1);
              var d =
                '<img src="http://www.saspreview.com/images/preview-dog.png" width="330" alt="" /><h1>This is\n\t\t an example of article</h1>';
              "specified element by id" === t.selectedPosition ||
              "specified element by class name" === t.selectedPosition
                ? (d += i + "<div " + s + '="' + l[0] + '"></div>' + i)
                : (d += "<div " + s + '="' + l[0] + '">' + e + "</div>");
              var h = this.addElement("div", this.d.body, {
                  id: "iframeDiv_" + this.c.insertionId,
                }),
                c = this.addElement("iframe", h, {
                  src: "about:blank",
                  width: 330,
                  height: 590,
                  frameBorder: "0",
                  allow: "autoplay;fullscreen;",
                  scrolling: "yes",
                  marginheight: "0",
                  marginwidth: "0",
                  id: "iframeMob_" + this.c.insertionId,
                }),
                u = c.contentWindow || c,
                p = c.contentDocument || c.contentWindow.document;
              p.open("text/html", "replace"),
                p.write(
                  '<!DOCTYPE html><head></head><body style="padding:0;margin:0">' +
                    d +
                    "</body></html>"
                ),
                p.close(),
                (this.viewability.d = this.d = p),
                (this.viewability.w = this.w = u);
            }),
            (e.prototype.initViewability = function (t, e) {
              var i;
              this.viewability.init(
                t,
                ((i = {}),
                (i[this.c.creative.id] = {
                  viewable: [
                    this.prepareTrackingUrl("viewcount", this.c.sessionId),
                  ],
                  undetermined: [
                    this.prepareTrackingUrl(
                      "viewUndetermined",
                      this.c.sessionId
                    ),
                  ],
                }),
                i),
                e
              );
            }),
            (e.prototype.getDataFromCustomScript = function (t) {
              this.log("getDataFromCustomScript", t);
              var e = this.d.getElementById(
                  "sasCustomScript_" + this.c.insertionId
                ),
                i = document.getElementById(
                  "sasCustomScript_" + this.c.insertionId
                ),
                n = e || i,
                r = null;
              if (this.c.isAsync && n) {
                r = (n.contentWindow || n)[t];
              } else r = window[t];
              return r;
            }),
            (e.prototype.getParentWidth = function (t) {
              for (; t && t.parentNode; ) {
                if (t.parentElement && t.parentElement.clientWidth > 0)
                  return t.parentElement.clientWidth;
                t = t.parentNode;
              }
              return 0;
            }),
            (e.prototype.getRatio = function (t, e) {
              var i = 1.78;
              return t && e && (i = Math.round((t / e) * 100) / 100), i;
            }),
            (e.prototype.addOba = function (t, e, i) {
              var n = this;
              this.log("addOba");
              var r = 2 === t ? "top-left" : "top-right";
              window.sas.utils.loadLinkCdn(
                "diff/templates/js/adplayer/adplayer.css"
              ),
                window.sas.utils.loadScriptCdn(
                  [
                    "diff/templates/js/adplayer/adplayer.js",
                    "diff/templates/js/adplayer/latest/adplayer.sas.js",
                  ],
                  {
                    onLoad: function () {
                      n.w.$ADP &&
                        (window.$ADP.sas.addOba(
                          i,
                          !1,
                          r,
                          n.c.sessionId,
                          n.c.sessionId
                        ),
                        (e.style.width = n.c.creative.width + "px"));
                    },
                  }
                );
            }),
            (e.prototype.myIframeReady = function (t, e, i, n, r) {
              var a = this;
              void 0 === n && (n = !1), void 0 === r && (r = !1);
              var o = t.document;
              if (
                (n || this.initViewability(e, i),
                this.c.statisticTracking.rtbbid && !r)
              ) {
                this.addEvent(o, "click", function (t) {
                  a.logRtbClick(a.c.creative.creativeClickCountPixelUrl, t);
                });
                var s = o.getElementsByTagName("iframe"),
                  l = s.length;
                if (!l) return;
                this.overIframe = !1;
                for (var d = 0; d < l; d++) {
                  var h = s[d];
                  (h.onmouseover = function () {
                    a.overIframe = !0;
                  }),
                    (h.onmouseout = function () {
                      (a.overIframe = !1), a.w.focus();
                    }),
                    this.addEvent(this.w, "blur", function (t) {
                      a.overIframe &&
                        a.logRtbClick(
                          a.c.creative.creativeClickCountPixelUrl,
                          t
                        );
                    });
                }
              }
            }),
            (e.prototype.logRtbClick = function (t, e) {
              var i = new Date().getTime(),
                n = this.lastClicked,
                r = this.checkIfObaClicked(e);
              return (
                i - n > 100 &&
                !r &&
                (this.log("logRtbClick", e),
                (new Image().src = t + "&rnd=" + i),
                (this.lastClicked = i),
                !0)
              );
            }),
            (e.prototype.checkIfObaClicked = function (t) {
              var e = "svg" === t.target.tagName,
                i = "path" === t.target.tagName,
                n = t.target.clientWidth,
                r = t.target.clientHeight,
                a = t.target.parentElement,
                o = e && n < 20 && r < 20,
                s =
                  i &&
                  "svg" === a.tagName &&
                  a.clientWidth < 20 &&
                  a.clientHeight < 20,
                l = "abgcp" === t.target.id && n < 50 && r < 50;
              return o || s || l;
            }),
            (e.prototype.validateParam = function (t, e) {
              return e ? "&" + t + "=" + e : "";
            }),
            (e.prototype.addSafeFrame = function (t, e, i, n, r, a, o, s) {
              var l = this;
              this.log("addSafeFrame", t, e, i, n);
              new window.$sf.host.Config({
                renderFile:
                  "//ced-ns.sascdn.com/safeframe/safeframe-api/frame.html",
                onEndPosRender: function () {
                  (l.ifrContainer = document.getElementById(t)),
                    s &&
                      (l.log("iframe load"),
                      s(r, a, document.getElementById(t)));
                },
                onStartPosRender: function () {
                  o && (l.log("iframe ready"), o(r, a));
                },
              }),
                new window.$sf.host.PosConfig({ id: t, w: e, h: i, dest: t });
              window.$sf.host.render(new window.$sf.host.Position(t, n));
            }),
            e
          );
        })(r.Global));
    e.SasAd = o;
  },
});
