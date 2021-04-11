(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [8],
  {
    316: function (e, t, n) {},
    317: function (e, t, n) {},
    323: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "UserPlaces", function () {
          return p;
        });
      var c = n(53),
        a = n.n(c),
        r = n(54),
        s = n(11),
        o = n(0),
        i = n(55),
        l = n(57),
        u = n(17),
        d = n(2),
        j = n(66),
        b = n(12),
        h = n(48),
        f = n(56),
        O = (n(316), n(1)),
        x = function (e) {
          var t = e.item,
            n = t._id,
            c = t.image,
            d = t.title,
            x = t.description,
            m = t.address,
            p = t.creator,
            v = e.onDelete,
            k = Object(i.a)(),
            g = k.isLoading,
            C = k.error,
            N = k.sendRequest,
            _ = k.clearError,
            w = Object(o.useContext)(b.a),
            y = w.isLoggedIn,
            E = w.userId,
            D = Object(o.useState)(!1),
            S = Object(s.a)(D, 2),
            I = S[0],
            L = S[1],
            P = function () {
              return L(!1);
            },
            F = Object(o.useState)(!1),
            T = Object(s.a)(F, 2),
            q = T[0],
            A = T[1],
            z = (function () {
              var e = Object(r.a)(
                a.a.mark(function e() {
                  var t;
                  return a.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              A(!1),
                              (e.prev = 1),
                              (e.next = 4),
                              N("/api/places/".concat(n), "delete")
                            );
                          case 4:
                            (t = e.sent), console.log(t), v(n), (e.next = 11);
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(1));
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(O.jsxs)(o.Fragment, {
            children: [
              Object(O.jsx)(l.a, { error: C, onClear: _ }),
              Object(O.jsx)(f.a, {
                show: I,
                onCancel: P,
                header: m,
                contentClass: "place-item__modal-content",
                footerClass: "place-item__modal-actions",
                footer: Object(O.jsx)(h.a, { onClick: P, children: " CLOSE " }),
                children: Object(O.jsx)("div", {
                  className: "map-conteiner",
                  children: Object(O.jsx)("h2", {
                    children: " Map is left to render :( ",
                  }),
                }),
              }),
              Object(O.jsx)(f.a, {
                show: q,
                header: "Are You Sure",
                footerClass: "place-item__modal-actions",
                footer: Object(O.jsxs)(o.Fragment, {
                  children: [
                    Object(O.jsx)(h.a, {
                      inverse: !0,
                      onClick: function () {
                        A(!1);
                      },
                      children: "Cancel",
                    }),
                    Object(O.jsx)(h.a, {
                      danger: !0,
                      onClick: z,
                      children: "Delete",
                    }),
                  ],
                }),
                children: Object(O.jsx)("p", {
                  children:
                    "Do You Want To Proceed And Delete This Place. This Can't Be Undone Later!!",
                }),
              }),
              Object(O.jsx)("li", {
                className: "place-item",
                children: Object(O.jsxs)(j.a, {
                  className: "place-item__content",
                  children: [
                    Object(O.jsx)("div", {
                      className: "place-item__image",
                      children: Object(O.jsx)("img", {
                        src: ""
                          .concat(
                            "https://traveller-shubhamwebdesign.herokuapp.com",
                            "/"
                          )
                          .concat(c),
                        alt: d,
                      }),
                    }),
                    Object(O.jsxs)("div", {
                      className: "place-item__info",
                      children: [
                        Object(O.jsx)("h2", { children: d }),
                        Object(O.jsx)("h3", { children: m }),
                        Object(O.jsx)("p", { children: x }),
                      ],
                    }),
                    Object(O.jsxs)("div", {
                      className: "place-item__actions",
                      children: [
                        Object(O.jsx)(h.a, {
                          inverse: !0,
                          onClick: function () {
                            return L(!0);
                          },
                          children: "VIEW ON MAP",
                        }),
                        y &&
                          E === p &&
                          Object(O.jsxs)(o.Fragment, {
                            children: [
                              Object(O.jsx)(h.a, {
                                to: "/places/".concat(n),
                                children: "EDIT",
                              }),
                              g
                                ? Object(O.jsx)("div", {
                                    className: "center",
                                    children: Object(O.jsx)(u.a, {
                                      asOverlay: !0,
                                    }),
                                  })
                                : Object(O.jsx)(h.a, {
                                    danger: !0,
                                    onClick: function () {
                                      A(!0);
                                    },
                                    children: "DELETE",
                                  }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        m =
          (n(317),
          Object(d.h)(function (e) {
            var t = e.items,
              n = e.onDelete,
              c = e.match,
              a = t.filter(function (e) {
                return e.creator === c.params.userId;
              });
            return 0 === a.length
              ? Object(O.jsx)("div", {
                  className: "place-list center",
                  children: Object(O.jsxs)(j.a, {
                    children: [
                      Object(O.jsx)("h2", {
                        children: "No Places Found. Create One!!",
                      }),
                      Object(O.jsx)(h.a, {
                        to: "/places/new",
                        type: "submit",
                        children: "Share Place",
                      }),
                    ],
                  }),
                })
              : Object(O.jsx)("ul", {
                  className: "place-list",
                  children: a.map(function (e) {
                    return Object(O.jsx)(x, { item: e, onDelete: n }, e._id);
                  }),
                });
          })),
        p = function (e) {
          var t = Object(o.useState)([]),
            n = Object(s.a)(t, 2),
            c = n[0],
            d = n[1],
            j = Object(i.a)(),
            b = j.isLoading,
            h = j.error,
            f = j.sendRequest,
            x = j.clearError,
            p = e.match.params.userId;
          Object(o.useEffect)(function () {
            (function () {
              var e = Object(r.a)(
                a.a.mark(function e() {
                  var t;
                  return a.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            f(
                              ""
                                .concat(
                                  "https://traveller-shubhamwebdesign.herokuapp.com/api",
                                  "/places/user/"
                                )
                                .concat(p),
                              "get"
                            )
                          );
                        case 2:
                          (t = e.sent), d(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          return Object(O.jsxs)(o.Fragment, {
            children: [
              Object(O.jsx)(l.a, { error: h, onClear: x }),
              b &&
                Object(O.jsxs)("div", {
                  className: "center",
                  children: [Object(O.jsx)(u.a, {}), " "],
                }),
              !b &&
                c &&
                Object(O.jsx)(m, {
                  items: c,
                  onDelete: function (e) {
                    d(function (t) {
                      return t.filter(function (t) {
                        return t._id !== e;
                      });
                    });
                  },
                }),
            ],
          });
        };
      t.default = p;
    },
    48: function (e, t, n) {
      "use strict";
      n(0);
      var c = n(8),
        a = (n(61), n(1));
      t.a = function (e) {
        return e.href
          ? Object(a.jsx)("a", {
              className: "button button--"
                .concat(e.size || "default", " ")
                .concat(e.inverse && "button--inverse", " ")
                .concat(e.danger && "button--danger"),
              href: e.href,
              children: e.children,
            })
          : e.to
          ? Object(a.jsx)(c.b, {
              to: e.to,
              exact: e.exact,
              className: "button button--"
                .concat(e.size || "default", " ")
                .concat(e.inverse && "button--inverse", " ")
                .concat(e.danger && "button--danger"),
              children: e.children,
            })
          : Object(a.jsx)("button", {
              className: "button button--"
                .concat(e.size || "default", " ")
                .concat(e.inverse && "button--inverse", " ")
                .concat(e.danger && "button--danger"),
              type: e.type,
              onClick: e.onClick,
              disabled: e.disabled,
              children: e.children,
            });
      };
    },
    55: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var c = n(53),
        a = n.n(c),
        r = n(54),
        s = n(11),
        o = n(0),
        i = n(71),
        l = n.n(i),
        u = (n(72), n(12)),
        d = function () {
          var e = Object(o.useContext)(u.a).token,
            t = Object(o.useState)(!1),
            n = Object(s.a)(t, 2),
            c = n[0],
            i = n[1],
            d = Object(o.useState)(""),
            j = Object(s.a)(d, 2),
            b = j[0],
            h = j[1],
            f = {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": e,
              },
            },
            O = { headers: { "x-auth-token": e } };
          return {
            isLoading: c,
            error: b,
            sendRequest: Object(o.useCallback)(
              (function () {
                var e = Object(r.a)(
                  a.a.mark(function e(t, n) {
                    var c,
                      r,
                      s = arguments;
                    return a.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((c =
                                  s.length > 2 && void 0 !== s[2]
                                    ? s[2]
                                    : null),
                                i(!0),
                                (e.prev = 2),
                                "post" !== n)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 6), l.a.post(t, c, f);
                            case 6:
                              (r = e.sent), (e.next = 29);
                              break;
                            case 9:
                              if ("get" !== n) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 12), l.a.get(t);
                            case 12:
                              (r = e.sent), (e.next = 29);
                              break;
                            case 15:
                              if ("patch" !== n) {
                                e.next = 21;
                                break;
                              }
                              return (e.next = 18), l.a.patch(t, c, f);
                            case 18:
                              (r = e.sent), (e.next = 29);
                              break;
                            case 21:
                              if ("delete" !== n) {
                                e.next = 28;
                                break;
                              }
                              return (e.next = 24), l.a.delete(t, O);
                            case 24:
                              (r = e.sent), console.log(r), (e.next = 29);
                              break;
                            case 28:
                              console.log("no request match");
                            case 29:
                              return i(!1), e.abrupt("return", r.data);
                            case 33:
                              throw (
                                ((e.prev = 33),
                                (e.t0 = e.catch(2)),
                                console.error(e.t0.response.data),
                                i(!1),
                                h(e.t0.response.data.message),
                                e.t0.response.data)
                              );
                            case 39:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 33]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            clearError: function () {
              h(null);
            },
          };
        };
    },
    56: function (e, t, n) {
      "use strict";
      var c = n(52),
        a = n(0),
        r = n(43),
        s = n(9),
        o = n.n(s),
        i = n(18),
        l = (n(60), n(1)),
        u = function (e) {
          var t = e.className,
            n = e.style,
            c = e.headerClass,
            a = e.header,
            r = e.onSubmit,
            s = e.contentClass,
            i = e.footerClass,
            u = e.footer,
            d = e.children,
            j = Object(l.jsxs)("div", {
              className: "modal ".concat(t),
              style: { style: n },
              children: [
                Object(l.jsx)("header", {
                  className: "modal__header ".concat(c),
                  children: Object(l.jsxs)("h2", { children: [" ", a, " "] }),
                }),
                Object(l.jsxs)("form", {
                  onSubmit:
                    r ||
                    function (e) {
                      return e.preventDefault();
                    },
                  children: [
                    Object(l.jsx)("div", {
                      className: "modal__content ".concat(s),
                      children: d,
                    }),
                    Object(l.jsx)("footer", {
                      className: "modal__footer ".concat(i),
                      children: u,
                    }),
                  ],
                }),
              ],
            });
          return o.a.createPortal(j, document.getElementById("modal-hook"));
        };
      t.a = function (e) {
        return Object(l.jsxs)(a.Fragment, {
          children: [
            e.show && Object(l.jsx)(i.a, { onClick: e.onCancel }),
            Object(l.jsx)(r.a, {
              in: e.show,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 200,
              classNames: "modal",
              children: Object(l.jsx)(u, Object(c.a)({}, e)),
            }),
          ],
        });
      };
    },
    57: function (e, t, n) {
      "use strict";
      n(0);
      var c = n(56),
        a = n(48),
        r = n(1);
      t.a = function (e) {
        return Object(r.jsx)(c.a, {
          onCancel: e.onClear,
          header: "An Error Occurred!",
          show: !!e.error,
          footer: Object(r.jsx)(a.a, { onClick: e.onClear, children: "Okay" }),
          children: Object(r.jsx)("p", { children: e.error }),
        });
      };
    },
    60: function (e, t, n) {},
    61: function (e, t, n) {},
    66: function (e, t, n) {
      "use strict";
      n(0), n(93);
      var c = n(1);
      t.a = function (e) {
        return Object(c.jsx)("div", {
          className: "card ".concat(e.className),
          style: e.style,
          children: e.children,
        });
      };
    },
    76: function (e, t) {},
    77: function (e, t) {},
    80: function (e, t) {},
    81: function (e, t) {},
    83: function (e, t) {},
    84: function (e, t) {},
    85: function (e, t) {},
    86: function (e, t) {},
    87: function (e, t) {},
    89: function (e, t) {},
    91: function (e, t) {},
    92: function (e, t) {},
    93: function (e, t, n) {},
  },
]);
//# sourceMappingURL=8.17bff250.chunk.js.map
