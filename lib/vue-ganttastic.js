import A from "dayjs";
import { inject as ue, computed as R, defineComponent as Q, openBlock as O, createElementBlock as M, Fragment as ee, renderList as te, unref as C, normalizeStyle as L, renderSlot as S, createElementVNode as G, toDisplayString as q, createTextVNode as ne, createCommentVNode as V, toRefs as re, ref as Y, watch as ce, nextTick as Le, createBlock as J, Teleport as et, createVNode as Be, Transition as tt, withCtx as N, getCurrentScope as nt, onScopeDispose as rt, getCurrentInstance as at, onMounted as Se, useSlots as ot, provide as le, normalizeClass as be, withModifiers as it, mergeProps as st, TransitionGroup as lt } from "vue";
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ye = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    var r = "day";
    return function(n, p, u) {
      var c = function(t) {
        return t.add(4 - t.isoWeekday(), r);
      }, o = p.prototype;
      o.isoWeekYear = function() {
        return c(this).year();
      }, o.isoWeek = function(t) {
        if (!this.$utils().u(t))
          return this.add(7 * (t - this.isoWeek()), r);
        var a, f, d, m, x = c(this), g = (a = this.isoWeekYear(), f = this.$u, d = (f ? u.utc : u)().year(a).startOf("year"), m = 4 - d.isoWeekday(), d.isoWeekday() > 4 && (m += 7), d.add(m, r));
        return x.diff(g, "week") + 1;
      }, o.isoWeekday = function(t) {
        return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
      };
      var i = o.startOf;
      o.startOf = function(t, a) {
        var f = this.$utils(), d = !!f.u(a) || a;
        return f.p(t) === "isoweek" ? d ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : i.bind(this)(t, a);
      };
    };
  });
})(Ye);
const ut = Ye.exports;
var Ge = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(p, u) {
        return this.isSame(p, u) || this.isBefore(p, u);
      };
    };
  });
})(Ge);
const ct = Ge.exports;
var Ie = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(p, u) {
        return this.isSame(p, u) || this.isAfter(p, u);
      };
    };
  });
})(Ie);
const dt = Ie.exports;
var Re = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    return function(r, n, p) {
      n.prototype.isBetween = function(u, c, o, i) {
        var t = p(u), a = p(c), f = (i = i || "()")[0] === "(", d = i[1] === ")";
        return (f ? this.isAfter(t, o) : !this.isBefore(t, o)) && (d ? this.isBefore(a, o) : !this.isAfter(a, o)) || (f ? this.isBefore(t, o) : !this.isAfter(t, o)) && (d ? this.isAfter(a, o) : !this.isBefore(a, o));
      };
    };
  });
})(Re);
const ft = Re.exports;
var He = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    var r = "week", n = "year";
    return function(p, u, c) {
      var o = u.prototype;
      o.week = function(i) {
        if (i === void 0 && (i = null), i !== null)
          return this.add(7 * (i - this.week()), "day");
        var t = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var a = c(this).startOf(n).add(1, n).date(t), f = c(this).endOf(r);
          if (a.isBefore(f))
            return 1;
        }
        var d = c(this).startOf(n).date(t).startOf(r).subtract(1, "millisecond"), m = this.diff(d, r, !0);
        return m < 0 ? c(this).startOf("week").week() : Math.ceil(m);
      }, o.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(He);
const gt = He.exports;
var Ae = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    return function(r, n, p) {
      var u = n.prototype, c = u.format;
      p.en.ordinal = function(o) {
        var i = ["th", "st", "nd", "rd"], t = o % 100;
        return "[" + o + (i[(t - 20) % 10] || i[t] || i[0]) + "]";
      }, u.format = function(o) {
        var i = this, t = this.$locale();
        if (!this.isValid())
          return c.bind(this)(o);
        var a = this.$utils(), f = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(d) {
          switch (d) {
            case "Q":
              return Math.ceil((i.$M + 1) / 3);
            case "Do":
              return t.ordinal(i.$D);
            case "gggg":
              return i.weekYear();
            case "GGGG":
              return i.isoWeekYear();
            case "wo":
              return t.ordinal(i.week(), "W");
            case "w":
            case "ww":
              return a.s(i.week(), d === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return a.s(i.isoWeek(), d === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return a.s(String(i.$H === 0 ? 24 : i.$H), d === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(i.$d.getTime() / 1e3);
            case "x":
              return i.$d.getTime();
            case "z":
              return "[" + i.offsetName() + "]";
            case "zzz":
              return "[" + i.offsetName("long") + "]";
            default:
              return d;
          }
        });
        return c.bind(this)(f);
      };
    };
  });
})(Ae);
const ht = Ae.exports;
var We = { exports: {} };
(function(e, s) {
  (function(r, n) {
    e.exports = n();
  })(K, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, p = /\d\d/, u = /\d\d?/, c = /\d*[^-_:/,()\s\d]+/, o = {}, i = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, t = function(g) {
      return function(h) {
        this[g] = +h;
      };
    }, a = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(h) {
        if (!h || h === "Z")
          return 0;
        var _ = h.match(/([+-]|\d\d)/g), v = 60 * _[1] + (+_[2] || 0);
        return v === 0 ? 0 : _[0] === "+" ? -v : v;
      }(g);
    }], f = function(g) {
      var h = o[g];
      return h && (h.indexOf ? h : h.s.concat(h.f));
    }, d = function(g, h) {
      var _, v = o.meridiem;
      if (v) {
        for (var b = 1; b <= 24; b += 1)
          if (g.indexOf(v(b, 0, h)) > -1) {
            _ = b > 12;
            break;
          }
      } else
        _ = g === (h ? "pm" : "PM");
      return _;
    }, m = { A: [c, function(g) {
      this.afternoon = d(g, !1);
    }], a: [c, function(g) {
      this.afternoon = d(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [p, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [u, t("seconds")], ss: [u, t("seconds")], m: [u, t("minutes")], mm: [u, t("minutes")], H: [u, t("hours")], h: [u, t("hours")], HH: [u, t("hours")], hh: [u, t("hours")], D: [u, t("day")], DD: [p, t("day")], Do: [c, function(g) {
      var h = o.ordinal, _ = g.match(/\d+/);
      if (this.day = _[0], h)
        for (var v = 1; v <= 31; v += 1)
          h(v).replace(/\[|\]/g, "") === g && (this.day = v);
    }], M: [u, t("month")], MM: [p, t("month")], MMM: [c, function(g) {
      var h = f("months"), _ = (f("monthsShort") || h.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(g) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], MMMM: [c, function(g) {
      var h = f("months").indexOf(g) + 1;
      if (h < 1)
        throw new Error();
      this.month = h % 12 || h;
    }], Y: [/[+-]?\d+/, t("year")], YY: [p, function(g) {
      this.year = i(g);
    }], YYYY: [/\d{4}/, t("year")], Z: a, ZZ: a };
    function x(g) {
      var h, _;
      h = g, _ = o && o.formats;
      for (var v = (g = h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, D, T) {
        var $ = T && T.toUpperCase();
        return D || _[T] || r[T] || _[$].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, W, j) {
          return W || j.slice(1);
        });
      })).match(n), b = v.length, B = 0; B < b; B += 1) {
        var l = v[B], w = m[l], y = w && w[0], k = w && w[1];
        v[B] = k ? { regex: y, parser: k } : l.replace(/^\[|\]$/g, "");
      }
      return function(E) {
        for (var D = {}, T = 0, $ = 0; T < b; T += 1) {
          var I = v[T];
          if (typeof I == "string")
            $ += I.length;
          else {
            var W = I.regex, j = I.parser, z = E.slice($), U = W.exec(z)[0];
            j.call(D, U), E = E.replace(U, "");
          }
        }
        return function(F) {
          var P = F.afternoon;
          if (P !== void 0) {
            var Z = F.hours;
            P ? Z < 12 && (F.hours += 12) : Z === 12 && (F.hours = 0), delete F.afternoon;
          }
        }(D), D;
      };
    }
    return function(g, h, _) {
      _.p.customParseFormat = !0, g && g.parseTwoDigitYear && (i = g.parseTwoDigitYear);
      var v = h.prototype, b = v.parse;
      v.parse = function(B) {
        var l = B.date, w = B.utc, y = B.args;
        this.$u = w;
        var k = y[1];
        if (typeof k == "string") {
          var E = y[2] === !0, D = y[3] === !0, T = E || D, $ = y[2];
          D && ($ = y[2]), o = this.$locale(), !E && $ && (o = _.Ls[$]), this.$d = function(z, U, F) {
            try {
              if (["x", "X"].indexOf(U) > -1)
                return new Date((U === "X" ? 1e3 : 1) * z);
              var P = x(U)(z), Z = P.year, ie = P.month, Qe = P.day, Xe = P.hours, Ke = P.minutes, Ze = P.seconds, Je = P.milliseconds, ke = P.zone, fe = new Date(), ge = Qe || (Z || ie ? 1 : fe.getDate()), he = Z || fe.getFullYear(), se = 0;
              Z && !ie || (se = ie > 0 ? ie - 1 : fe.getMonth());
              var me = Xe || 0, pe = Ke || 0, ve = Ze || 0, ye = Je || 0;
              return ke ? new Date(Date.UTC(he, se, ge, me, pe, ve, ye + 60 * ke.offset * 1e3)) : F ? new Date(Date.UTC(he, se, ge, me, pe, ve, ye)) : new Date(he, se, ge, me, pe, ve, ye);
            } catch {
              return new Date("");
            }
          }(l, k, w), this.init(), $ && $ !== !0 && (this.$L = this.locale($).$L), T && l != this.format(k) && (this.$d = new Date("")), o = {};
        } else if (k instanceof Array)
          for (var I = k.length, W = 1; W <= I; W += 1) {
            y[1] = k[W - 1];
            var j = _.apply(this, y);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            W === I && (this.$d = new Date(""));
          }
        else
          b.call(this, B);
      };
    };
  });
})(We);
const mt = We.exports, Fe = Symbol("CHART_ROWS_KEY"), Pe = Symbol("CONFIG_KEY"), je = Symbol("EMIT_BAR_EVENT_KEY"), ze = Symbol("BAR_CONTAINER_KEY");
function H() {
  const e = ue(Pe);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const Ue = "YYYY-MM-DD HH:mm";
function ae(e = H()) {
  const { chartStart: s, chartEnd: r, barStart: n, barEnd: p, dateFormat: u } = e, c = R(() => i(s.value)), o = R(() => i(r.value)), i = (a, f) => {
    let d;
    if (f !== void 0 && typeof a != "string" && !(a instanceof Date) && (d = f === "start" ? a[n.value] : a[p.value]), typeof a == "string")
      d = a;
    else if (a instanceof Date)
      return A(a);
    const m = u.value || Ue;
    return A(d, m, !0);
  };
  return {
    chartStartDayjs: c,
    chartEndDayjs: o,
    toDayjs: i,
    format: (a, f) => f === !1 ? a instanceof Date ? a : A(a).toDate() : (typeof a == "string" || a instanceof Date ? i(a) : a).format(f)
  };
}
function Ne() {
  const { precision: e } = H(), { chartStartDayjs: s, chartEndDayjs: r } = ae(), n = R(() => {
    switch (e == null ? void 0 : e.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "date":
      case "week":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'"
        );
    }
  }), p = R(() => {
    switch (e.value) {
      case "date":
        return "day";
      case "week":
        return "isoWeek";
      default:
        return e.value;
    }
  }), u = {
    hour: "HH",
    date: "DD.MMM",
    day: "DD.MMM",
    week: "SWW",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: R(() => {
      const o = [], i = [], t = r.value.diff(s.value, "minutes", !0), a = n.value, f = p.value;
      let d = s.value, m = s.value;
      for (; m.isSameOrBefore(r.value); ) {
        const x = m.endOf(f), h = x.isAfter(r.value) ? r.value.diff(m, "minutes", !0) / t * 100 : x.diff(m, "minutes", !0) / t * 100;
        i.push({
          label: m.format(u[e == null ? void 0 : e.value]),
          value: String(m),
          date: m.toDate(),
          width: String(h) + "%"
        }), m = x.add(1, f === "isoWeek" ? "week" : f).startOf(f);
      }
      for (; d.isSameOrBefore(r.value); ) {
        const x = d.endOf(a), h = x.isAfter(r.value) ? r.value.diff(d, "minutes", !0) / t * 100 : x.diff(d, "minutes", !0) / t * 100;
        o.push({
          label: d.format(u[a]),
          value: String(d),
          date: d.toDate(),
          width: String(h) + "%"
        }), d = x.add(1, a).startOf(a);
      }
      return { upperUnits: o, lowerUnits: i };
    })
  };
}
const pt = { class: "g-grid-container" }, vt = /* @__PURE__ */ Q({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(e) {
    const { colors: s } = H(), { timeaxisUnits: r } = Ne();
    return (n, p) => (O(), M("div", pt, [
      (O(!0), M(ee, null, te(C(r).lowerUnits, ({ label: u, value: c, width: o }) => {
        var i;
        return O(), M("div", {
          key: u,
          class: "g-grid-line",
          style: L({
            width: o,
            background: (i = n.highlightedUnits) != null && i.includes(Number(c)) ? C(s).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
function _e() {
  const e = ue(Fe);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
const yt = { class: "g-label-column-rows" }, bt = /* @__PURE__ */ Q({
  __name: "GGanttLabelColumn",
  setup(e) {
    const { font: s, colors: r, labelColumnTitle: n, rowHeight: p } = H(), u = _e();
    return (c, o) => (O(), M("div", {
      class: "g-label-column",
      style: L({ fontFamily: C(s), color: C(r).text })
    }, [
      S(c.$slots, "label-column-title", {}, () => [
        G("div", {
          class: "g-label-column-header",
          style: L({ background: C(r).primary })
        }, q(C(n)), 5)
      ]),
      G("div", yt, [
        (O(!0), M(ee, null, te(C(u)(), ({ label: i, bars: t }, a) => (O(), M("div", {
          key: `${i}_${a}`,
          class: "g-label-column-row",
          style: L({
            background: a % 2 === 0 ? C(r).ternary : C(r).quartenary,
            height: `${C(p)}px`
          })
        }, [
          S(c.$slots, "label-column-row", {
            label: i,
            bars: t
          }, () => [
            G("span", null, q(i), 1)
          ])
        ], 4))), 128))
      ])
    ], 4));
  }
});
const wt = { class: "g-timeaxis" }, xt = { class: "g-timeunits-container" }, Bt = { class: "g-timeunits-container" }, _t = /* @__PURE__ */ Q({
  __name: "GGanttTimeaxis",
  setup(e) {
    const { precision: s, colors: r } = H(), { timeaxisUnits: n } = Ne();
    return (p, u) => (O(), M("div", wt, [
      G("div", xt, [
        (O(!0), M(ee, null, te(C(n).upperUnits, ({ label: c, value: o, date: i, width: t }, a) => (O(), M("div", {
          key: c,
          class: "g-upper-timeunit",
          style: L({
            background: a % 2 === 0 ? C(r).primary : C(r).secondary,
            color: C(r).text,
            width: t
          })
        }, [
          S(p.$slots, "upper-timeunit", {
            label: c,
            value: o,
            date: i
          }, () => [
            ne(q(c), 1)
          ])
        ], 4))), 128))
      ]),
      G("div", Bt, [
        (O(!0), M(ee, null, te(C(n).lowerUnits, ({ label: c, value: o, date: i, width: t }, a) => (O(), M("div", {
          key: c,
          class: "g-timeunit",
          style: L({
            background: a % 2 === 0 ? C(r).ternary : C(r).quartenary,
            color: C(r).text,
            flexDirection: C(s) === "hour" ? "column" : "row",
            alignItems: C(s) === "hour" ? "" : "center",
            width: t
          })
        }, [
          S(p.$slots, "timeunit", {
            label: c,
            value: o,
            date: i
          }, () => [
            ne(q(c), 1)
          ]),
          C(s) === "hour" ? (O(), M("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: L({ background: C(r).text })
          }, null, 4)) : V("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const kt = "cadetblue", Ct = /* @__PURE__ */ Q({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(e) {
    const s = e, r = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      date: "DD. MMMM YYYY",
      month: "DD. MMMM YYYY",
      week: "DD. MMMM YYYY (WW)"
    }, { bar: n } = re(s), { precision: p, font: u, barStart: c, barEnd: o, rowHeight: i } = H(), t = Y("0px"), a = Y("0px");
    ce(
      () => s.bar,
      async () => {
        var l;
        await Le();
        const h = ((l = n == null ? void 0 : n.value) == null ? void 0 : l.ganttBarConfig.id) || "";
        if (!h)
          return;
        const _ = document.getElementById(h), { top: v, left: b } = (_ == null ? void 0 : _.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, B = Math.max(b, 10);
        t.value = `${v + i.value - 10}px`, a.value = `${B}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const f = R(() => {
      var h, _;
      return ((_ = (h = n == null ? void 0 : n.value) == null ? void 0 : h.ganttBarConfig.style) == null ? void 0 : _.background) || kt;
    }), { toDayjs: d } = ae(), m = R(() => {
      var h;
      return (h = n.value) == null ? void 0 : h[c.value];
    }), x = R(() => {
      var h;
      return (h = n.value) == null ? void 0 : h[o.value];
    }), g = R(() => {
      if (!(n != null && n.value))
        return "";
      const h = r[p.value], _ = d(m.value).format(h), v = d(x.value).format(h);
      return `${_} \u2013 ${v}`;
    });
    return (h, _) => (O(), J(et, { to: "body" }, [
      Be(tt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: N(() => [
          h.modelValue ? (O(), M("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: L({
              top: t.value,
              left: a.value,
              fontFamily: C(u)
            })
          }, [
            G("div", {
              class: "g-gantt-tooltip-color-dot",
              style: L({ background: f.value })
            }, null, 4),
            S(h.$slots, "default", {
              bar: C(n),
              barStart: m.value,
              barEnd: x.value
            }, () => [
              ne(q(g.value), 1)
            ])
          ], 4)) : V("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function de(e = H()) {
  const { dateFormat: s, chartSize: r } = e, { chartStartDayjs: n, chartEndDayjs: p, toDayjs: u, format: c } = ae(e), o = R(() => p.value.diff(n.value, "minutes"));
  return {
    mapTimeToPosition: (a) => {
      const f = r.width.value || 0, d = u(a).diff(n.value, "minutes", !0);
      return Math.ceil(d / o.value * f);
    },
    mapPositionToTime: (a) => {
      const f = r.width.value || 0, d = a / f * o.value;
      return c(n.value.add(d, "minutes"), s.value);
    }
  };
}
const Et = /* @__PURE__ */ Q({
  __name: "GGanttCurrentTime",
  setup(e) {
    const { mapTimeToPosition: s } = de(), r = Y(A()), { colors: n, dateFormat: p, currentTimeLabel: u } = H(), c = R(() => {
      const o = p.value || "YYYY-MM-DD HH:mm";
      return s(A(r.value, o).format(o));
    });
    return (o, i) => (O(), M("div", {
      class: "g-grid-current-time",
      style: L({
        left: `${c.value}px`
      })
    }, [
      G("div", {
        class: "g-grid-current-time-marker",
        style: L({
          border: `1px dashed ${C(n).markerCurrentTime}`
        })
      }, null, 4),
      G("span", {
        class: "g-grid-current-time-text",
        style: L({ color: C(n).markerCurrentTime })
      }, [
        S(o.$slots, "current-time-label", {}, () => [
          ne(q(C(u)), 1)
        ])
      ], 4)
    ], 4));
  }
});
var Ce;
const oe = typeof window < "u";
oe && ((Ce = window == null ? void 0 : window.navigator) == null ? void 0 : Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ot(e) {
  return typeof e == "function" ? e() : C(e);
}
function Dt(e) {
  return e;
}
function Tt(e) {
  return nt() ? (rt(e), !0) : !1;
}
function Mt(e, s = !0) {
  at() ? Se(e) : s ? e() : Le(e);
}
function Ve(e) {
  var s;
  const r = Ot(e);
  return (s = r == null ? void 0 : r.$el) != null ? s : r;
}
const $t = oe ? window : void 0;
oe && window.document;
oe && window.navigator;
oe && window.location;
function Lt(e, s = !1) {
  const r = Y(), n = () => r.value = Boolean(e());
  return n(), Mt(n, s), r;
}
const we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xe = "__vueuse_ssr_handlers__";
we[xe] = we[xe] || {};
we[xe];
var Ee = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, Yt = Object.prototype.propertyIsEnumerable, Gt = (e, s) => {
  var r = {};
  for (var n in e)
    St.call(e, n) && s.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Ee)
    for (var n of Ee(e))
      s.indexOf(n) < 0 && Yt.call(e, n) && (r[n] = e[n]);
  return r;
};
function It(e, s, r = {}) {
  const n = r, { window: p = $t } = n, u = Gt(n, ["window"]);
  let c;
  const o = Lt(() => p && "ResizeObserver" in p), i = () => {
    c && (c.disconnect(), c = void 0);
  }, t = ce(() => Ve(e), (f) => {
    i(), o.value && p && f && (c = new ResizeObserver(s), c.observe(f, u));
  }, { immediate: !0, flush: "post" }), a = () => {
    i(), t();
  };
  return Tt(a), {
    isSupported: o,
    stop: a
  };
}
function Rt(e, s = { width: 0, height: 0 }, r = {}) {
  const n = Y(s.width), p = Y(s.height);
  return It(e, ([u]) => {
    n.value = u.contentRect.width, p.value = u.contentRect.height;
  }, r), ce(() => Ve(e), (u) => {
    n.value = u ? s.width : 0, p.value = u ? s.height : 0;
  }), {
    width: n,
    height: p
  };
}
var Oe;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Oe || (Oe = {}));
var Ht = Object.defineProperty, De = Object.getOwnPropertySymbols, At = Object.prototype.hasOwnProperty, Wt = Object.prototype.propertyIsEnumerable, Te = (e, s, r) => s in e ? Ht(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[s] = r, Ft = (e, s) => {
  for (var r in s || (s = {}))
    At.call(s, r) && Te(e, r, s[r]);
  if (De)
    for (var r of De(s))
      Wt.call(s, r) && Te(e, r, s[r]);
  return e;
};
const Pt = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Ft({
  linear: Dt
}, Pt);
const Me = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgba(204, 216, 219, 0.5)",
    markerCurrentTime: "#000",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgba(230, 221, 202, 0.5)",
    markerCurrentTime: "#000",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgba(159, 160, 161, 0.5)",
    markerCurrentTime: "#fff",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgba(110, 165, 196, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgba(193, 202, 214, 0.5)",
    markerCurrentTime: "#000",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgba(179, 162, 127, 0.5)",
    markerCurrentTime: "#fff",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    markerCurrentTime: "#000",
    text: "white",
    background: "white"
  }
}, jt = { class: "g-gantt-rows-container" }, zt = /* @__PURE__ */ Q({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    currentTime: { type: Boolean },
    currentTimeLabel: { default: "" },
    dateFormat: { type: [String, Boolean], default: Ue },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedUnits: { default: () => [] },
    font: { default: "inherit" },
    labelColumnTitle: { default: "" },
    labelColumnWidth: { default: "150px" }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(e, { emit: s }) {
    const r = e, { width: n, font: p, colorScheme: u } = re(r), c = ot(), o = R(
      () => typeof u.value != "string" ? u.value : Me[u.value] || Me.default
    ), i = () => {
      var B;
      const v = (B = c.default) == null ? void 0 : B.call(c), b = [];
      return v && v.forEach((l) => {
        var w;
        if ((w = l.props) != null && w.bars) {
          const { label: y, bars: k } = l.props;
          b.push({ label: y, bars: k });
        } else
          Array.isArray(l.children) && l.children.forEach((y) => {
            var E;
            const k = y;
            if ((E = k == null ? void 0 : k.props) != null && E.bars) {
              const { label: D, bars: T } = k.props;
              b.push({ label: D, bars: T });
            }
          });
      }), b;
    }, t = Y(!1), a = Y(!1), f = Y(void 0);
    let d;
    const m = (v) => {
      d && clearTimeout(d), d = setTimeout(() => {
        t.value = !0;
      }, 800), f.value = v;
    }, x = () => {
      clearTimeout(d), t.value = !1;
    }, g = (v, b, B, l) => {
      switch (v.type) {
        case "click":
          s("click-bar", { bar: b, e: v, datetime: B });
          break;
        case "mousedown":
          s("mousedown-bar", { bar: b, e: v, datetime: B });
          break;
        case "mouseup":
          s("mouseup-bar", { bar: b, e: v, datetime: B });
          break;
        case "dblclick":
          s("dblclick-bar", { bar: b, e: v, datetime: B });
          break;
        case "mouseenter":
          m(b), s("mouseenter-bar", { bar: b, e: v });
          break;
        case "mouseleave":
          x(), s("mouseleave-bar", { bar: b, e: v });
          break;
        case "dragstart":
          a.value = !0, s("dragstart-bar", { bar: b, e: v });
          break;
        case "drag":
          s("drag-bar", { bar: b, e: v });
          break;
        case "dragend":
          a.value = !1, s("dragend-bar", { bar: b, e: v, movedBars: l });
          break;
        case "contextmenu":
          s("contextmenu-bar", { bar: b, e: v, datetime: B });
          break;
      }
    }, h = Y(null), _ = Rt(h);
    return le(Fe, i), le(Pe, {
      ...re(r),
      colors: o,
      chartSize: _
    }), le(je, g), (v, b) => (O(), M("div", null, [
      G("div", {
        class: be([{ "labels-in-column": !!v.labelColumnTitle }])
      }, [
        v.labelColumnTitle ? (O(), J(bt, {
          key: 0,
          style: L({
            width: v.labelColumnWidth
          })
        }, {
          "label-column-title": N(() => [
            S(v.$slots, "label-column-title")
          ]),
          "label-column-row": N(({ label: B, bars: l }) => [
            S(v.$slots, "label-column-row", {
              label: B,
              bars: l
            })
          ]),
          _: 3
        }, 8, ["style"])) : V("", !0),
        G("div", {
          ref_key: "ganttChart",
          ref: h,
          class: be(["g-gantt-chart", { "with-column": v.labelColumnTitle }]),
          style: L({ width: C(n), background: o.value.background, fontFamily: C(p) })
        }, [
          v.hideTimeaxis ? V("", !0) : (O(), J(_t, { key: 0 }, {
            "upper-timeunit": N(({ label: B, value: l, date: w }) => [
              S(v.$slots, "upper-timeunit", {
                label: B,
                value: l,
                date: w
              })
            ]),
            timeunit: N(({ label: B, value: l, date: w }) => [
              S(v.$slots, "timeunit", {
                label: B,
                value: l,
                date: w
              })
            ]),
            _: 3
          })),
          v.grid ? (O(), J(vt, {
            key: 1,
            "highlighted-units": v.highlightedUnits
          }, null, 8, ["highlighted-units"])) : V("", !0),
          v.currentTime ? (O(), J(Et, { key: 2 }, {
            "current-time-label": N(() => [
              S(v.$slots, "current-time-label")
            ]),
            _: 3
          })) : V("", !0),
          G("div", jt, [
            S(v.$slots, "default")
          ])
        ], 6)
      ], 2),
      Be(Ct, {
        "model-value": t.value || a.value,
        bar: f.value
      }, {
        default: N(() => [
          S(v.$slots, "bar-tooltip", { bar: f.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ]));
  }
});
function $e(e, s = () => null, r = () => null, n = H()) {
  const { barStart: p, barEnd: u, pushOnOverlap: c } = n, o = Y(!1);
  let i = 0, t;
  const { mapPositionToTime: a } = de(n), { toDayjs: f } = ae(n), d = (b) => {
    const B = document.getElementById(e.ganttBarConfig.id);
    if (!B)
      return;
    switch (i = b.clientX - (B.getBoundingClientRect().left || 0), b.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", t = g;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", t = h;
        break;
      default:
        t = x;
    }
    o.value = !0, window.addEventListener("mousemove", t), window.addEventListener("mouseup", v);
  }, m = () => {
    var l;
    const b = document.getElementById(e.ganttBarConfig.id), B = (l = b == null ? void 0 : b.closest(".g-gantt-row-bars-container")) == null ? void 0 : l.getBoundingClientRect();
    return { barElement: b, barContainer: B };
  }, x = (b) => {
    const { barElement: B, barContainer: l } = m();
    if (!B || !l)
      return;
    const w = B.getBoundingClientRect().width, y = b.clientX - l.left - i, k = y + w;
    _(y, k) || (e[p.value] = a(y), e[u.value] = a(k), s(b, e));
  }, g = (b) => {
    const { barElement: B, barContainer: l } = m();
    if (!B || !l)
      return;
    const w = b.clientX - l.left, y = a(w);
    f(y).isSameOrAfter(f(e, "end")) || (e[p.value] = y, s(b, e));
  }, h = (b) => {
    const { barElement: B, barContainer: l } = m();
    if (!B || !l)
      return;
    const w = b.clientX - l.left, y = a(w);
    f(y).isSameOrBefore(f(e, "start")) || (e[u.value] = y, s(b, e));
  }, _ = (b, B) => {
    if (!c.value)
      return !1;
    const l = e.ganttBarConfig.dragLimitLeft, w = e.ganttBarConfig.dragLimitRight;
    return b && l != null && b < l || B && w != null && B > w;
  }, v = (b) => {
    o.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", v), r(b, e);
  };
  return {
    isDragging: o,
    initDrag: d
  };
}
function qe() {
  const e = ue(je);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
function Ut() {
  const e = H(), s = _e(), r = qe(), { pushOnOverlap: n, barStart: p, barEnd: u, noOverlap: c, dateFormat: o } = e, i = /* @__PURE__ */ new Map(), { toDayjs: t, format: a } = ae(), f = (l, w) => {
    const { initDrag: y } = $e(l, m, v, e);
    r({ ...w, type: "dragstart" }, l), y(w), b(l);
  }, d = (l, w) => {
    const y = l.ganttBarConfig.bundle;
    y != null && (s().forEach((k) => {
      k.bars.forEach((E) => {
        if (E.ganttBarConfig.bundle === y) {
          const D = E === l ? v : () => null, { initDrag: T } = $e(E, m, D, e);
          T(w), b(E);
        }
      });
    }), r({ ...w, type: "dragstart" }, l));
  }, m = (l, w) => {
    r({ ...l, type: "drag" }, w), x(w);
  }, x = (l) => {
    if (!(n != null && n.value))
      return;
    let w = l, { overlapBar: y, overlapType: k } = g(w);
    for (; y; ) {
      b(y);
      const E = t(w[p.value]), D = t(w[u.value]), T = t(y[p.value]), $ = t(y[u.value]);
      let I;
      switch (k) {
        case "left":
          I = $.diff(E, "minutes", !0), y[u.value] = a(w[p.value], o.value), y[p.value] = a(
            T.subtract(I, "minutes"),
            o.value
          );
          break;
        case "right":
          I = D.diff(T, "minutes", !0), y[p.value] = a(D, o.value), y[u.value] = a(
            $.add(I, "minutes"),
            o.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (k === "left" || k === "right") && h(y, I, k), w = y, { overlapBar: y, overlapType: k } = g(y);
    }
  }, g = (l) => {
    var W, j;
    let w, y, k;
    const E = (j = (W = s().find((z) => z.bars.includes(l))) == null ? void 0 : W.bars) != null ? j : [], D = t(l[p.value]), T = t(l[u.value]);
    return { overlapBar: E.find((z) => {
      if (z === l)
        return !1;
      const U = t(z[p.value]), F = t(z[u.value]);
      return w = D.isBetween(U, F), y = T.isBetween(U, F), k = U.isBetween(D, T) || F.isBetween(D, T), w || y || k;
    }), overlapType: w ? "left" : y ? "right" : k ? "between" : null };
  }, h = (l, w, y) => {
    b(l), l.ganttBarConfig.bundle && s().forEach((k) => {
      k.bars.forEach((E) => {
        E.ganttBarConfig.bundle === l.ganttBarConfig.bundle && E !== l && (b(E), _(E, w, y));
      });
    });
  }, _ = (l, w, y) => {
    switch (y) {
      case "left":
        l[p.value] = a(
          t(l, "start").subtract(w, "minutes"),
          o.value
        ), l[u.value] = a(
          t(l, "end").subtract(w, "minutes"),
          o.value
        );
        break;
      case "right":
        l[p.value] = a(
          t(l, "start").add(w, "minutes"),
          o.value
        ), l[u.value] = a(t(l, "end").add(w, "minutes"), o.value);
    }
    x(l);
  }, v = (l, w) => {
    B();
    const y = {
      ...l,
      type: "dragend"
    };
    r(y, w, void 0, new Map(i)), i.clear();
  }, b = (l) => {
    if (!i.has(l)) {
      const w = l[p.value], y = l[u.value];
      i.set(l, { oldStart: w, oldEnd: y });
    }
  }, B = () => {
    if (n.value || !c.value)
      return;
    let l = !1;
    i.forEach((w, y) => {
      const { overlapBar: k } = g(y);
      k != null && (l = !0);
    }), l && i.forEach(({ oldStart: w, oldEnd: y }, k) => {
      k[p.value] = w, k[u.value] = y;
    });
  };
  return {
    initDragOfBar: f,
    initDragOfBundle: d
  };
}
function Nt() {
  const { pushOnOverlap: e } = H(), s = _e(), r = (c) => {
    const o = [];
    return c != null && s().forEach((i) => {
      i.bars.forEach((t) => {
        t.ganttBarConfig.bundle === c && o.push(t);
      });
    }), o;
  }, n = (c) => {
    if (!e.value || c.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const i of ["left", "right"]) {
      const t = i, { gapDistanceSoFar: a, bundleBarsAndGapDist: f } = p(
        c,
        0,
        t
      );
      let d = a;
      const m = f;
      if (!m)
        continue;
      for (let g = 0; g < m.length; g++) {
        const h = m[g].bar, _ = m[g].gapDistance;
        r(h.ganttBarConfig.bundle).filter(
          (b) => b !== h
        ).forEach((b) => {
          const B = p(b, _, t), l = B.gapDistanceSoFar, w = B.bundleBarsAndGapDist;
          l != null && (!d || l < d) && (d = l), w.forEach((y) => {
            m.find((k) => k.bar === y.bar) || m.push(y);
          });
        });
      }
      const x = document.getElementById(c.ganttBarConfig.id);
      d != null && t === "left" ? c.ganttBarConfig.dragLimitLeft = x.offsetLeft - d : d != null && t === "right" && (c.ganttBarConfig.dragLimitRight = x.offsetLeft + x.offsetWidth + d);
    }
    r(c.ganttBarConfig.bundle).forEach((i) => {
      i.ganttBarConfig.dragLimitLeft = c.ganttBarConfig.dragLimitLeft, i.ganttBarConfig.dragLimitRight = c.ganttBarConfig.dragLimitRight;
    });
  }, p = (c, o = 0, i) => {
    const t = c.ganttBarConfig.bundle ? [{ bar: c, gapDistance: o }] : [];
    let a = c, f = u(a, i);
    if (i === "left")
      for (; f; ) {
        const d = document.getElementById(a.ganttBarConfig.id), m = document.getElementById(f.ganttBarConfig.id), x = m.offsetLeft + m.offsetWidth;
        if (o += d.offsetLeft - x, f.ganttBarConfig.immobile)
          return { gapDistanceSoFar: o, bundleBarsAndGapDist: t };
        f.ganttBarConfig.bundle && t.push({
          bar: f,
          gapDistance: o
        }), a = f, f = u(f, "left");
      }
    if (i === "right")
      for (; f; ) {
        const d = document.getElementById(a.ganttBarConfig.id), m = document.getElementById(f.ganttBarConfig.id), x = d.offsetLeft + d.offsetWidth;
        if (o += m.offsetLeft - x, f.ganttBarConfig.immobile)
          return { gapDistanceSoFar: o, bundleBarsAndGapDist: t };
        f.ganttBarConfig.bundle && t.push({
          bar: f,
          gapDistance: o
        }), a = f, f = u(f, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: t };
  }, u = (c, o) => {
    var f, d;
    const i = document.getElementById(c.ganttBarConfig.id), t = (d = (f = s().find((m) => m.bars.includes(c))) == null ? void 0 : f.bars) != null ? d : [];
    let a = [];
    return o === "left" ? a = t.filter((m) => {
      const x = document.getElementById(m.ganttBarConfig.id);
      return x && x.offsetLeft < i.offsetLeft && m.ganttBarConfig.pushOnOverlap !== !1;
    }) : a = t.filter((m) => {
      const x = document.getElementById(m.ganttBarConfig.id);
      return x && x.offsetLeft > i.offsetLeft && m.ganttBarConfig.pushOnOverlap !== !1;
    }), a.length > 0 ? a.reduce((m, x) => {
      const g = document.getElementById(m.ganttBarConfig.id), h = document.getElementById(x.ganttBarConfig.id), _ = Math.abs(g.offsetLeft - i.offsetLeft), v = Math.abs(h.offsetLeft - i.offsetLeft);
      return _ < v ? m : x;
    }, a[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: n
  };
}
const Vt = ["id"], qt = { class: "g-gantt-bar-label" }, Qt = ["innerHTML"], Xt = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-left" }, null, -1), Kt = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-right" }, null, -1), Zt = /* @__PURE__ */ Q({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    const s = e, r = qe(), n = H(), { rowHeight: p } = n, { bar: u } = re(s), { mapTimeToPosition: c, mapPositionToTime: o } = de(), { initDragOfBar: i, initDragOfBundle: t } = Ut(), { setDragLimitsOfGanttBar: a } = Nt(), f = Y(!1), d = R(() => u.value.ganttBarConfig);
    function m(E) {
      d.value.bundle != null ? t(u.value, E) : i(u.value, E), f.value = !0;
    }
    const x = () => {
      a(u.value), !d.value.immobile && (window.addEventListener("mousemove", m, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", m), f.value = !1;
        },
        { once: !0 }
      ));
    }, g = ue(ze), h = (E) => {
      var $;
      E.preventDefault(), E.type === "mousedown" && x();
      const D = ($ = g == null ? void 0 : g.value) == null ? void 0 : $.getBoundingClientRect();
      if (!D)
        return;
      const T = o(E.clientX - D.left);
      r(E, u.value, T);
    }, { barStart: _, barEnd: v, width: b, chartStart: B, chartEnd: l, chartSize: w } = n, y = Y(0), k = Y(0);
    return Se(() => {
      ce(
        [u, b, B, l, w.width],
        () => {
          y.value = c(u.value[_.value]), k.value = c(u.value[v.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (E, D) => (O(), M("div", {
      id: d.value.id,
      class: be(["g-gantt-bar", d.value.class || ""]),
      style: L({
        ...d.value.style,
        position: "absolute",
        top: `${C(p) * 0.1}px`,
        left: `${y.value}px`,
        width: `${k.value - y.value}px`,
        height: `${C(p) * 0.8}px`,
        zIndex: f.value ? 3 : 2
      }),
      onMousedown: h,
      onClick: h,
      onDblclick: h,
      onMouseenter: h,
      onMouseleave: h,
      onContextmenu: h
    }, [
      G("div", qt, [
        S(E.$slots, "default", { bar: C(u) }, () => [
          G("div", null, q(d.value.label || ""), 1),
          d.value.html ? (O(), M("div", {
            key: 0,
            innerHTML: d.value.html
          }, null, 8, Qt)) : V("", !0)
        ])
      ]),
      d.value.hasHandles ? (O(), M(ee, { key: 0 }, [
        Xt,
        Kt
      ], 64)) : V("", !0)
    ], 46, Vt));
  }
});
const Jt = /* @__PURE__ */ Q({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: s }) {
    const r = e, { rowHeight: n, colors: p, labelColumnTitle: u } = H(), { highlightOnHover: c } = re(r), o = Y(!1), i = R(() => ({
      height: `${n.value}px`,
      background: (c == null ? void 0 : c.value) && o.value ? p.value.hoverHighlight : null
    })), { mapPositionToTime: t } = de(), a = Y(null);
    le(ze, a);
    const f = (m) => {
      var _;
      const x = (_ = a.value) == null ? void 0 : _.getBoundingClientRect();
      if (!x) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const g = m.clientX - x.left, h = t(g);
      s("drop", { e: m, datetime: h });
    }, d = (m) => !m || /^\s*$/.test(m);
    return (m, x) => (O(), M("div", {
      class: "g-gantt-row",
      style: L(i.value),
      onDragover: x[0] || (x[0] = it((g) => o.value = !0, ["prevent"])),
      onDragleave: x[1] || (x[1] = (g) => o.value = !1),
      onDrop: x[2] || (x[2] = (g) => f(g)),
      onMouseover: x[3] || (x[3] = (g) => o.value = !0),
      onMouseleave: x[4] || (x[4] = (g) => o.value = !1)
    }, [
      !d(m.label) && !C(u) ? (O(), M("div", {
        key: 0,
        class: "g-gantt-row-label",
        style: L({ background: C(p).primary, color: C(p).text })
      }, [
        S(m.$slots, "label", {}, () => [
          ne(q(m.label), 1)
        ])
      ], 4)) : V("", !0),
      G("div", st({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, m.$attrs), [
        Be(lt, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: N(() => [
            (O(!0), M(ee, null, te(m.bars, (g) => (O(), J(Zt, {
              key: g.ganttBarConfig.id,
              bar: g
            }, {
              default: N(() => [
                S(m.$slots, "bar-label", { bar: g })
              ]),
              _: 2
            }, 1032, ["bar"]))), 128))
          ]),
          _: 3
        })
      ], 16)
    ], 36));
  }
});
function en() {
  A.extend(ct), A.extend(dt), A.extend(ft), A.extend(mt), A.extend(gt), A.extend(ut), A.extend(ht);
}
const an = {
  install(e, s) {
    en(), e.component("GGanttChart", zt), e.component("GGanttRow", Jt);
  }
};
function X(e, s = "top") {
  if (!e || typeof document > "u")
    return;
  const r = document.head, n = document.createElement("style");
  s === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.appendChild(document.createTextNode(e));
}
X(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  border-radius: 5px;
}
.with-column {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.g-gantt-rows-container {
  position: relative;
}
.labels-in-column {
  display: flex;
  flex-direction: row;
}
`, "top");
X(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`, "top");
X(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`, "top");
X(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`, "top");
X(`
.g-label-column {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(64, 64, 64);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-size: 0.9em;
}
.g-label-column-header {
  width: 100%;
  height: 80px;
  min-height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
}
.g-label-column-rows {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
}
.g-label-column-row {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.1rem 0.3rem;
  overflow: hidden;
  white-space: normal;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.g-label-column-row:last-child {
  border-bottom-left-radius: 5px;
}
`, "top");
X(`
.g-grid-current-time {
  position: absolute;
  height: 100%;
  display: flex;
  z-index: 5;
}
.g-grid-current-time-marker {
  width: 0px;
  height: calc(100% - 2px);
  display: flex;
}
.g-grid-current-time-text {
  font-size: x-small;
}
`, "top");
X(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`, "top");
X(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 4;
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`, "top");
export {
  zt as GGanttChart,
  Jt as GGanttRow,
  an as default,
  en as extendDayjs,
  an as ganttastic
};
