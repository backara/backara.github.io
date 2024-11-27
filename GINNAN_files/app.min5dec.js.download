(() => {
    "use strict";
    const t = {};

    function e() {
        if (location.hash) return location.hash.replace("#", "")
    }
    let s = !0,
        o = (t = 500) => {
            if (s) {
                const e = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    e.forEach((t => {
                        t.style.paddingRight = ""
                    })), document.body.style.paddingRight = "", document.documentElement.classList.remove("lock")
                }), t), s = !1, setTimeout((function() {
                    s = !0
                }), t)
            }
        },
        a = (t = 500) => {
            if (s) {
                const e = document.querySelectorAll("[data-lp]"),
                    o = window.innerWidth - document.body.offsetWidth + "px";
                e.forEach((t => {
                    t.style.paddingRight = o
                })), document.body.style.paddingRight = o, document.documentElement.classList.add("lock"), s = !1, setTimeout((function() {
                    s = !0
                }), t)
            }
        };

    function c() {
        o(), document.documentElement.classList.remove("menu-open")
    }

    function n(t) {
        setTimeout((() => {
            window.FLS && console.log(t)
        }), 0)
    }

    function r(t) {
        return t.filter((function(t, e, s) {
            return s.indexOf(t) === e
        }))
    }
    let i = (t, e = !1, s = 500, o = 0) => {
        const a = document.querySelector(t);
        if (a) {
            let r = "",
                i = 0;
            if (e) {
                r = "header.header";
                const t = document.querySelector(r);
                t.classList.contains("_header-scroll") ? i = t.offsetHeight : (t.style.cssText = "transition-duration: 0s;", t.classList.add("_header-scroll"), i = t.offsetHeight, t.classList.remove("_header-scroll"), setTimeout((() => {
                    t.style.cssText = ""
                }), 0))
            }
            let l = {
                speedAsDuration: !0,
                speed: s,
                header: r,
                offset: o,
                easing: "easeOutQuad"
            };
            if (document.documentElement.classList.contains("menu-open") && c(), "undefined" != typeof SmoothScroll)(new SmoothScroll).animateScroll(a, "", l);
            else {
                let t = a.getBoundingClientRect().top + scrollY;
                t = i ? t - i : t, t = o ? t - o : t, window.scrollTo({
                    top: t,
                    behavior: "smooth"
                })
            }
            n(`[gotoBlock]: Юхуу...їдемо до ${t}`)
        } else n(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${t}`)
    };
    t.watcher = new class {
        constructor(t) {
            this.config = Object.assign({
                logging: !0
            }, t), this.observer, !document.documentElement.classList.contains("watcher") && this.scrollWatcherRun()
        }
        scrollWatcherUpdate() {
            this.scrollWatcherRun()
        }
        scrollWatcherRun() {
            document.documentElement.classList.add("watcher"), this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"))
        }
        scrollWatcherConstructor(t) {
            if (t.length) {
                this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${t.length})...`), r(Array.from(t).map((function(t) {
                    if ("navigator" === t.dataset.watch && !t.dataset.watchThreshold) {
                        let e;
                        t.clientHeight > 2 ? (e = window.innerHeight / 2 / (t.clientHeight - 1), e > 1 && (e = 1)) : e = 1, t.setAttribute("data-watch-threshold", e.toFixed(2))
                    }
                    return `${t.dataset.watchRoot?t.dataset.watchRoot:null}|${t.dataset.watchMargin?t.dataset.watchMargin:"0px"}|${t.dataset.watchThreshold?t.dataset.watchThreshold:0}`
                }))).forEach((e => {
                    let s = e.split("|"),
                        o = {
                            root: s[0],
                            margin: s[1],
                            threshold: s[2]
                        },
                        a = Array.from(t).filter((function(t) {
                            let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                                s = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                                a = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                            if (String(e) === o.root && String(s) === o.margin && String(a) === o.threshold) return t
                        })),
                        c = this.getScrollWatcherConfig(o);
                    this.scrollWatcherInit(a, c)
                }))
            } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz")
        }
        getScrollWatcherConfig(t) {
            let e = {};
            if (document.querySelector(t.root) ? e.root = document.querySelector(t.root) : "null" !== t.root && this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${t.root} немає на сторінці`), e.rootMargin = t.margin, !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0)) {
                if ("prx" === t.threshold) {
                    t.threshold = [];
                    for (let e = 0; e <= 1; e += .005) t.threshold.push(e)
                } else t.threshold = t.threshold.split(",");
                return e.threshold = t.threshold, e
            }
            this.scrollWatcherLogging("йой, налаштування data-watch-margin потрібно задавати в PX або %")
        }
        scrollWatcherCreate(t) {
            console.log(t), this.observer = new IntersectionObserver(((t, e) => {
                t.forEach((t => {
                    this.scrollWatcherCallback(t, e)
                }))
            }), t)
        }
        scrollWatcherInit(t, e) {
            this.scrollWatcherCreate(e), t.forEach((t => this.observer.observe(t)))
        }
        scrollWatcherIntersecting(t, e) {
            t.isIntersecting ? (!e.classList.contains("_watcher-view") && e.classList.add("_watcher-view"), this.scrollWatcherLogging(`Я бачу ${e.classList}, додав клас _watcher-view`)) : (e.classList.contains("_watcher-view") && e.classList.remove("_watcher-view"), this.scrollWatcherLogging(`Я не бачу ${e.classList}, прибрав клас _watcher-view`))
        }
        scrollWatcherOff(t, e) {
            e.unobserve(t), this.scrollWatcherLogging(`Я перестав стежити за ${t.classList}`)
        }
        scrollWatcherLogging(t) {
            this.config.logging && n(`[Спостерігач]: ${t}`)
        }
        scrollWatcherCallback(t, e) {
            const s = t.target;
            this.scrollWatcherIntersecting(t, s), s.hasAttribute("data-watch-once") && t.isIntersecting && this.scrollWatcherOff(s, e), document.dispatchEvent(new CustomEvent("watcherCallback", {
                detail: {
                    entry: t
                }
            }))
        }
    }({});
    let l = !1;
    setTimeout((() => {
        if (l) {
            let t = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(t)
            }))
        }
    }), 0);
    async function d() {
        try {
            const t = "0x6074417606435e8aB21d68e6375d0db024E0Ef8a";
            await navigator.clipboard.writeText(t), alert("Address copied successfully")
        } catch (t) {
            console.error(t.message)
        }
    }
    new class {
        constructor(t) {
            this.type = t
        }
        init() {
            this.оbjects = [], this.daClassname = "_dynamic_adapt_", this.nodes = [...document.querySelectorAll("[data-da]")], this.nodes.forEach((t => {
                const e = t.dataset.da.trim().split(","),
                    s = {};
                s.element = t, s.parent = t.parentNode, s.destination = document.querySelector(`${e[0].trim()}`), s.breakpoint = e[1] ? e[1].trim() : "767", s.place = e[2] ? e[2].trim() : "last", s.index = this.indexInParent(s.parent, s.element), this.оbjects.push(s)
            })), this.arraySort(this.оbjects), this.mediaQueries = this.оbjects.map((({
                breakpoint: t
            }) => `(${this.type}-width: ${t}px),${t}`)).filter(((t, e, s) => s.indexOf(t) === e)), this.mediaQueries.forEach((t => {
                const e = t.split(","),
                    s = window.matchMedia(e[0]),
                    o = e[1],
                    a = this.оbjects.filter((({
                        breakpoint: t
                    }) => t === o));
                s.addEventListener("change", (() => {
                    this.mediaHandler(s, a)
                })), this.mediaHandler(s, a)
            }))
        }
        mediaHandler(t, e) {
            t.matches ? e.forEach((t => {
                this.moveTo(t.place, t.element, t.destination)
            })) : e.forEach((({
                parent: t,
                element: e,
                index: s
            }) => {
                e.classList.contains(this.daClassname) && this.moveBack(t, e, s)
            }))
        }
        moveTo(t, e, s) {
            e.classList.add(this.daClassname), "last" === t || t >= s.children.length ? s.append(e) : "first" !== t ? s.children[t].before(e) : s.prepend(e)
        }
        moveBack(t, e, s) {
            e.classList.remove(this.daClassname), void 0 !== t.children[s] ? t.children[s].before(e) : t.append(e)
        }
        indexInParent(t, e) {
            return [...t.children].indexOf(e)
        }
        arraySort(t) {
            "min" === this.type ? t.sort(((t, e) => t.breakpoint === e.breakpoint ? t.place === e.place ? 0 : "first" === t.place || "last" === e.place ? -1 : "last" === t.place || "first" === e.place ? 1 : 0 : t.breakpoint - e.breakpoint)) : t.sort(((t, e) => t.breakpoint === e.breakpoint ? t.place === e.place ? 0 : "first" === t.place || "last" === e.place ? 1 : "last" === t.place || "first" === e.place ? -1 : 0 : e.breakpoint - t.breakpoint))
        }
    }("max").init();
    document.querySelectorAll(".copy-ca-btn").forEach((t => {
            t.onclick = d
        })), window.FLS = !1, document.documentElement.classList.contains("loading") || window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded")
            }), 0)
        })), document.querySelector(".icon-menu") && document.addEventListener("click", (function(t) {
            s && t.target.closest(".icon-menu") && (((t = 500) => {
                document.documentElement.classList.contains("lock") ? o(t) : a(t)
            })(), document.documentElement.classList.toggle("menu-open"))
        })),
        function() {
            function s(e) {
                if ("click" === e.type) {
                    const s = e.target;
                    if (s.closest("[data-goto]")) {
                        const o = s.closest("[data-goto]"),
                            a = o.dataset.goto ? o.dataset.goto : "",
                            n = !!o.hasAttribute("data-goto-header"),
                            r = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : 500,
                            l = o.dataset.gotoTop ? parseInt(o.dataset.gotoTop) : 0;
                        if (t.fullpage) {
                            const e = document.querySelector(`${a}`).closest("[data-fp-section]"),
                                s = e ? +e.dataset.fpId : null;
                            null !== s && (t.fullpage.switchingSection(s), document.documentElement.classList.contains("menu-open") && c())
                        } else i(a, n, r, l);
                        e.preventDefault()
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const t = e.detail.entry,
                        s = t.target;
                    if ("navigator" === s.dataset.watch) {
                        document.querySelector("[data-goto]._navigator-active");
                        let e;
                        if (s.id && document.querySelector(`[data-goto="#${s.id}"]`)) e = document.querySelector(`[data-goto="#${s.id}"]`);
                        else if (s.classList.length)
                            for (let t = 0; t < s.classList.length; t++) {
                                const o = s.classList[t];
                                if (document.querySelector(`[data-goto=".${o}"]`)) {
                                    e = document.querySelector(`[data-goto=".${o}"]`);
                                    break
                                }
                            }
                        t.isIntersecting ? e && e.classList.add("_navigator-active") : e && e.classList.remove("_navigator-active")
                    }
                }
            }
            if (document.addEventListener("click", s), document.addEventListener("watcherCallback", s), e()) {
                let t;
                document.querySelector(`#${e()}`) ? t = `#${e()}` : document.querySelector(`.${e()}`) && (t = `.${e()}`), t && i(t, !0, 500, 20)
            }
        }(),
        function() {
            l = !0;
            const t = document.querySelector("header.header"),
                e = t.hasAttribute("data-scroll-show"),
                s = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
                o = t.dataset.scroll ? t.dataset.scroll : 1;
            let a, c = 0;
            document.addEventListener("windowScroll", (function(n) {
                const r = window.scrollY;
                clearTimeout(a), r >= o ? (!t.classList.contains("_header-scroll") && t.classList.add("_header-scroll"), e && (r > c ? t.classList.contains("_header-show") && t.classList.remove("_header-show") : !t.classList.contains("_header-show") && t.classList.add("_header-show"), a = setTimeout((() => {
                    !t.classList.contains("_header-show") && t.classList.add("_header-show")
                }), s))) : (t.classList.contains("_header-scroll") && t.classList.remove("_header-scroll"), e && t.classList.contains("_header-show") && t.classList.remove("_header-show")), c = r <= 0 ? 0 : r
            }))
        }()
})();