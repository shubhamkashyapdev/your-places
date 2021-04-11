(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [4],
  {
    312: function (e, t, n) {},
    313: function (e, t, n) {},
    314: function (e, t, n) {},
    315: function (e, t, n) {},
    322: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(53),
        a = n.n(c),
        r = n(54),
        s = n(11),
        o = n(0),
        i = n(55),
        u = (n(312), n(8)),
        l = (n(12), n(313), n(314), n(1)),
        d = function (e) {
          return Object(l.jsx)("div", {
            className: "avatar ".concat(e.className),
            style: e.style,
            children: Object(l.jsx)("img", {
              src: e.image,
              alt: e.alt,
              style: { width: e.width, height: e.width },
            }),
          });
        },
        j = n(66),
        b = (n(56), n(17)),
        h = n(57),
        f =
          (n(48),
          function (e) {
            var t = e.item,
              n = t._id,
              c = t.name,
              a = t.image,
              r = t.places;
            return Object(l.jsx)(o.Fragment, {
              children: Object(l.jsx)("li", {
                className: "user-item",
                children: Object(l.jsx)(j.a, {
                  className: "user-item__content",
                  children: Object(l.jsxs)(u.b, {
                    to: "/".concat(n, "/places"),
                    children: [
                      Object(l.jsx)("div", {
                        className: "user-item__image",
                        children: Object(l.jsx)(d, {
                          image: ""
                            .concat(
                              "https://traveller-shubhamwebdesign.herokuapp.com",
                              "/"
                            )
                            .concat(a),
                          alt: c,
                        }),
                      }),
                      Object(l.jsxs)("div", {
                        className: "user-item__info",
                        children: [
                          Object(l.jsx)("h2", { children: c }),
                          Object(l.jsxs)("h3", {
                            children: [
                              r.length,
                              " ",
                              1 === r.length ? "Place" : "Places",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        x =
          (n(315),
          function (e) {
            var t = e.users;
            return 0 === t.length
              ? Object(l.jsx)("div", {
                  children: Object(l.jsx)(j.a, {
                    children: Object(l.jsx)("h2", {
                      style: { textAlign: "center" },
                      children: " No User Found!! ",
                    }),
                  }),
                })
              : Object(l.jsx)("ul", {
                  className: "users-list",
                  children: t.map(function (e) {
                    return Object(l.jsx)(f, { item: e }, e._id);
                  }),
                });
          });
      t.default = function (e) {
        var t = Object(o.useState)([]),
          n = Object(s.a)(t, 2),
          c = n[0],
          u = n[1],
          d = Object(i.a)(),
          j = d.isLoading,
          f = d.error,
          m = d.sendRequest,
          O = d.clearError;
        return (
          Object(o.useEffect)(
            function () {
              (function () {
                var e = Object(r.a)(
                  a.a.mark(function e() {
                    var t;
                    return a.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                m(
                                  "".concat(
                                    "https://traveller-shubhamwebdesign.herokuapp.com/api",
                                    "/users"
                                  ),
                                  "get"
                                )
                              );
                            case 3:
                              (t = e.sent), u(t), (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.error(
                                  e.t0 ||
                                    "failed to fetch the users from database."
                                );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [m]
          ),
          Object(l.jsxs)(o.Fragment, {
            children: [
              Object(l.jsx)(h.a, { error: f, onClear: O }),
              Object(l.jsxs)("div", {
                children: [
                  j &&
                    Object(l.jsxs)("div", {
                      className: "center",
                      children: [Object(l.jsx)(b.a, {}), " "],
                    }),
                  c && !j && Object(l.jsx)(x, { users: c }),
                ],
              }),
            ],
          })
        );
      };
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
        u = n.n(i),
        l = (n(72), n(12)),
        d = function () {
          var e = Object(o.useContext)(l.a).token,
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
            x = { headers: { "x-auth-token": e } };
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
                              return (e.next = 6), u.a.post(t, c, f);
                            case 6:
                              (r = e.sent), (e.next = 29);
                              break;
                            case 9:
                              if ("get" !== n) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 12), u.a.get(t);
                            case 12:
                              (r = e.sent), (e.next = 29);
                              break;
                            case 15:
                              if ("patch" !== n) {
                                e.next = 21;
                                break;
                              }
                              return (e.next = 18), u.a.patch(t, c, f);
                            case 18:
                              (r = e.sent), (e.next = 29);
                              break;
                            case 21:
                              if ("delete" !== n) {
                                e.next = 28;
                                break;
                              }
                              return (e.next = 24), u.a.delete(t, x);
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
        u = (n(60), n(1)),
        l = function (e) {
          var t = e.className,
            n = e.style,
            c = e.headerClass,
            a = e.header,
            r = e.onSubmit,
            s = e.contentClass,
            i = e.footerClass,
            l = e.footer,
            d = e.children,
            j = Object(u.jsxs)("div", {
              className: "modal ".concat(t),
              style: { style: n },
              children: [
                Object(u.jsx)("header", {
                  className: "modal__header ".concat(c),
                  children: Object(u.jsxs)("h2", { children: [" ", a, " "] }),
                }),
                Object(u.jsxs)("form", {
                  onSubmit:
                    r ||
                    function (e) {
                      return e.preventDefault();
                    },
                  children: [
                    Object(u.jsx)("div", {
                      className: "modal__content ".concat(s),
                      children: d,
                    }),
                    Object(u.jsx)("footer", {
                      className: "modal__footer ".concat(i),
                      children: l,
                    }),
                  ],
                }),
              ],
            });
          return o.a.createPortal(j, document.getElementById("modal-hook"));
        };
      t.a = function (e) {
        return Object(u.jsxs)(a.Fragment, {
          children: [
            e.show && Object(u.jsx)(i.a, { onClick: e.onCancel }),
            Object(u.jsx)(r.a, {
              in: e.show,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 200,
              classNames: "modal",
              children: Object(u.jsx)(l, Object(c.a)({}, e)),
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
//# sourceMappingURL=4.a31562fc.chunk.js.map
