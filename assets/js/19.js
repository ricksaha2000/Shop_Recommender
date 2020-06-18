$(function () {
    $(document).scroll(function () {
        var $nav = $(".hihi");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});




$(document).ready(function () {

            /************** Navigation Scripts **************/

            // Shrink nav on scroll

            $(window).scroll(function () {
                if ($(window).scrollTop() > 10) {
                    $('nav').addClass('shrink-nav');
                } else {
                    $('nav').removeClass('shrink-nav');
                }
            });

            // Mobile Toggle Control

            $('.mobile-toggle').click(function () {
                $('nav').toggleClass('open-nav');
            });

            $('.has-dropdown').click(function () {
                if ($('.mobile-toggle').is(":visible")) {
                    if ($(this).children('.subnav').hasClass('open-nav')) {
                        $(this).children('.subnav').removeClass('open-nav');
                    } else {
                        $('.subnav').removeClass('open-nav');
                        $(this).children('.subnav').addClass('open-nav');
                    }
                }
            });


            // Inner links

            $('.inner-link').smoothScroll({
                speed: 900,
                offset: -68
            });

            // Disable default behaviour on href='#' links

            $('a').click(function () {
                if ($(this).attr('href') === '#') {
                    return false;
                }
            });

            /************** Slider Scripts **************/

            // Initialize Sliders

            $('.hero-slider').flexslider({
                start: function () {
                    $('.slides li').each(function () {
                        $(this).find('.animated').addClass('animatedd fadeInUp');
                    });
                },
                before: function () {
                    $('.slides li').each(function () {
                        $(this).find('.animated').removeClass('animatedd fadeInUp');
                    });
                },
                after: function () {
                    $('.slides li').each(function () {
                        $(this).find('.animated').addClass('animated fadeInUp');
                    });
                }
            });

            $('.testimonials-slider').flexslider({
                directionNav: false
            });

            $('.slider').flexslider({});

            $('.clients-slider').flexslider({
                animation: "slide",
                minItems: 1,
                maxItems: 5,
                itemWidth: 50,
                itemMargin: 0,
                move: 1,
                directionNav: false,
                controlNav: false
            });

            $('.work-carousel').flexslider({
                animation: "slide",
                minItems: 3,
                maxItems: 3,
                itemWidth: 350,
                itemMargin: 0,
                move: 1,
                controlNav: false
            });



            // Adjust slide height for .slider-fullscreen sliders

            $('.slider-fullscreen .slides li').each(function () {
                $(this).css('height', $(window).height());
            });

            $('.slides li').each(function () {

                // Append background-image <img>'s as li item CSS background for better responsive performance

                if ($(this).children('.background-image').length) {
                    var imgSrc = jQuery(this).children('.background-image').attr('src');
                    jQuery(this).css('background', 'url("' + imgSrc + '")');
                    jQuery(this).children('.background-image').remove();
                    $(this).css('background-position', '50% 0%');
                    // Check if the slider has a color scheme attached, if so, apply it to the slider nav

                }

                // Center Slide Content vertically

                if ($('.overlay-nav').length && !$('nav').hasClass('nav-transparent')) {
                    $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2) + $('.overlay-nav').height());
                } else {
                    $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2));
                }

            });

            $(window).resize(function () {

                $('.slides li').each(function () {
                    if ($('.overlay-nav').length && !$('nav').hasClass('nav-transparent')) {
                        $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2) + $('.overlay-nav').height());
                    } else {
                        $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2));
                    }

                });
            });



            // Adjust the slide heights for fullscreen slider class

            $('.slider-fullscreen .slides li').each(function () {
                $(this).css('height', $(window).height());
            });

            $(window).resize(function () {
                $('.slider-fullscreen .slides li').each(function () {
                    $(this).css('height', $(window).height());
                });
            });

            /************** Divider Scripts **************/

            $('.divider-background').each(function () {

                // Append background-image <img>'s as li item CSS background for better responsive performance

                if ($(this).children('.background-image').length) {
                    var imgSrc = jQuery(this).children('.background-image').attr('src');
                    jQuery(this).css('background', 'url("' + imgSrc + '")');
                    jQuery(this).children('.background-image').remove();
                    $(this).css('background-position', '50% 0%');
                    // Check if the slider has a color scheme attached, if so, apply it to the slider nav

                }

            });

            // Give the header some extra padding to compensate for the overlay menu

            if ($('header').length && $('.overlay-nav').length) {
                //if(!$('nav').hasClass('nav-transparent')){
                var padAmount = parseInt($('header').css('padding-top')) + $('.overlay-nav').outerHeight() - 8;
                $('header').css('padding-top', padAmount);
                //}
            }

            // If there is no header or hero slider at the top of the page, pad the first section

            if ($('nav').length && !$('nav').next().hasClass('hero-slider') && !$('nav').next().is('header')) {
                $('.pad-first').removeClass('pad-first');
                $('nav').next().addClass('pad-first');
            }

            /************** Fullscreen Elements Scripts **************/

            $('.fullscreen-element').each(function () {
                $(this).css('height', $(window).height());
                var padTop = $(window).height() / 2 - $(this).children('.row').height();
                $(this).children('.row').css('padding-top', padTop);
            });


            /************** Accordion Scripts **************/

            $('.panel-holder').click(function () {

                $(this).closest('.accordion').find('.panel-holder').removeClass('active-panel');
                $(this).addClass('active-panel');

            });

            /************** Tabs Scripts **************/

            $('.tabs-holder li').click(function () {
                var tabID = $(this).attr('data-tab-id');
                $(this).closest('.tabbed-content').find('.tabs-holder li').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.tabbed-content').find('.content-holder').children('.tab-content').removeClass('active').siblings('.tab-content[data-tab-id=' + tabID + ']').addClass('active');
            });

            /************** Feature Selector Scripts **************/

            $('.feature-selector-tabs li').click(function () {
                var tabID = $(this).attr('data-feature-id');
                $(this).closest('.feature-selector-holder').find('.feature-selector-tabs li').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.feature-selector-holder').find('.feature-selector-content').children('li').removeClass('active').siblings('li[data-feature-id=' + tabID + ']').addClass('active');
                $('.feature-selector-content').css('height', $('.feature-selector-content').find('.active').height());
            });

            $('.feature-selector-content').css('height', $('.feature-selector-content').find('.active').height());

            /************** Video Dividers Scripts **************/









            /**
             * Lightbox v2.7.1
             * by Lokesh Dhakar - http://lokeshdhakar.com/projects/lightbox2/
             *
             * @license http://creativecommons.org/licenses/by/2.5/
             * - Free for use in both personal and commercial projects
             * - Attribution requires leaving author name, author link, and the license info intact
             */
            (function () {
                var a = jQuery,
                    b = function () {
                        function a() {
                            this.fadeDuration = 500, this.fitImagesInViewport = !0, this.resizeDuration = 700, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !1
                        }
                        return a.prototype.albumLabel = function (a, b) {
                            return "Image " + a + " of " + b
                        }, a
                    }(),
                    c = function () {
                        function b(a) {
                            this.options = a, this.album = [], this.currentImageIndex = void 0, this.init()
                        }
                        return b.prototype.init = function () {
                            this.enable(), this.build()
                        }, b.prototype.enable = function () {
                            var b = this;
                            a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) {
                                return b.start(a(c.currentTarget)), !1
                            })
                        }, b.prototype.build = function () {
                            var b = this;
                            a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function () {
                                return b.end(), !1
                            }), this.$lightbox.hide().on("click", function (c) {
                                return "lightbox" === a(c.target).attr("id") && b.end(), !1
                            }), this.$outerContainer.on("click", function (c) {
                                return "lightbox" === a(c.target).attr("id") && b.end(), !1
                            }), this.$lightbox.find(".lb-prev").on("click", function () {
                                return b.changeImage(0 === b.currentImageIndex ? b.album.length - 1 : b.currentImageIndex - 1), !1
                            }), this.$lightbox.find(".lb-next").on("click", function () {
                                return b.changeImage(b.currentImageIndex === b.album.length - 1 ? 0 : b.currentImageIndex + 1), !1
                            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
                                return b.end(), !1
                            })
                        }, b.prototype.start = function (b) {
                            function c(a) {
                                d.album.push({
                                    link: a.attr("href"),
                                    title: a.attr("data-title") || a.attr("title")
                                })
                            }
                            var d = this,
                                e = a(window);
                            e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
                                visibility: "hidden"
                            }), this.sizeOverlay(), this.album = [];
                            var f, g = 0,
                                h = b.attr("data-lightbox");
                            if (h) {
                                f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
                                for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
                            } else if ("lightbox" === b.attr("rel")) c(b);
                            else {
                                f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
                                for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
                            }
                            var k = e.scrollTop() + this.options.positionFromTop,
                                l = e.scrollLeft();
                            this.$lightbox.css({
                                top: k + "px",
                                left: l + "px"
                            }).fadeIn(this.options.fadeDuration), this.changeImage(g)
                        }, b.prototype.changeImage = function (b) {
                            var c = this;
                            this.disableKeyboardNav();
                            var d = this.$lightbox.find(".lb-image");
                            this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
                            var e = new Image;
                            e.onload = function () {
                                var f, g, h, i, j, k, l;
                                d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 120, (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height())
                            }, e.src = this.album[b].link, this.currentImageIndex = b
                        }, b.prototype.sizeOverlay = function () {
                            this.$overlay.width(a(window).width()).height(a(document).height())
                        }, b.prototype.sizeContainer = function (a, b) {
                            function c() {
                                d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage()
                            }
                            var d = this,
                                e = this.$outerContainer.outerWidth(),
                                f = this.$outerContainer.outerHeight(),
                                g = a + this.containerLeftPadding + this.containerRightPadding,
                                h = b + this.containerTopPadding + this.containerBottomPadding;
                            e !== g || f !== h ? this.$outerContainer.animate({
                                width: g,
                                height: h
                            }, this.options.resizeDuration, "swing", function () {
                                c()
                            }) : c()
                        }, b.prototype.showImage = function () {
                            this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
                        }, b.prototype.updateNav = function () {
                            var a = !1;
                            try {
                                document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
                            } catch (b) {}
                            this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
                        }, b.prototype.updateDetails = function () {
                            var b = this;
                            "undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function () {
                                location.href = a(this).attr("href")
                            }), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
                                return b.sizeOverlay()
                            })
                        }, b.prototype.preloadNeighboringImages = function () {
                            if (this.album.length > this.currentImageIndex + 1) {
                                var a = new Image;
                                a.src = this.album[this.currentImageIndex + 1].link
                            }
                            if (this.currentImageIndex > 0) {
                                var b = new Image;
                                b.src = this.album[this.currentImageIndex - 1].link
                            }
                        }, b.prototype.enableKeyboardNav = function () {
                            a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
                        }, b.prototype.disableKeyboardNav = function () {
                            a(document).off(".keyboard")
                        }, b.prototype.keyboardAction = function (a) {
                            var b = 27,
                                c = 37,
                                d = 39,
                                e = a.keyCode,
                                f = String.fromCharCode(e).toLowerCase();
                            e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
                        }, b.prototype.end = function () {
                            this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
                                visibility: "visible"
                            })
                        }, b
                    }();
                a(function () {
                    {
                        var a = new b;
                        new c(a)
                    }
                })
            }).call(this);
            //# sourceMappingURL=lightbox.min.map






            (function (e) {
                e.flexslider = function (t, n) {
                    var r = e(t);
                    r.vars = e.extend({}, e.flexslider.defaults, n);
                    var i = r.vars.namespace,
                        s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                        o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
                        u = "click touchend MSPointerUp",
                        a = "",
                        f, l = r.vars.direction === "vertical",
                        c = r.vars.reverse,
                        h = r.vars.itemWidth > 0,
                        p = r.vars.animation === "fade",
                        d = r.vars.asNavFor !== "",
                        v = {},
                        m = true;
                    e.data(t, "flexslider", r);
                    v = {
                        init: function () {
                            r.animating = false;
                            r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
                            if (isNaN(r.currentSlide)) r.currentSlide = 0;
                            r.animatingTo = r.currentSlide;
                            r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                            r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                            r.slides = e(r.vars.selector, r);
                            r.container = e(r.containerSelector, r);
                            r.count = r.slides.length;
                            r.syncExists = e(r.vars.sync).length > 0;
                            if (r.vars.animation === "slide") r.vars.animation = "swing";
                            r.prop = l ? "top" : "marginLeft";
                            r.args = {};
                            r.manualPause = false;
                            r.stopped = false;
                            r.started = false;
                            r.startTimeout = null;
                            r.transitions = !r.vars.video && !p && r.vars.useCSS && function () {
                                var e = document.createElement("div"),
                                    t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                for (var n in t) {
                                    if (e.style[t[n]] !== undefined) {
                                        r.pfx = t[n].replace("Perspective", "").toLowerCase();
                                        r.prop = "-" + r.pfx + "-transform";
                                        return true
                                    }
                                }
                                return false
                            }();
                            if (r.vars.controlsContainer !== "") r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer);
                            if (r.vars.manualControls !== "") r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls);
                            if (r.vars.randomize) {
                                r.slides.sort(function () {
                                    return Math.round(Math.random()) - .5
                                });
                                r.container.empty().append(r.slides)
                            }
                            r.doMath();
                            r.setup("init");
                            if (r.vars.controlNav) v.controlNav.setup();
                            if (r.vars.directionNav) v.directionNav.setup();
                            if (r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard)) {
                                e(document).bind("keyup", function (e) {
                                    var t = e.keyCode;
                                    if (!r.animating && (t === 39 || t === 37)) {
                                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : false;
                                        r.flexAnimate(n, r.vars.pauseOnAction)
                                    }
                                })
                            }
                            if (r.vars.mousewheel) {
                                r.bind("mousewheel", function (e, t, n, i) {
                                    e.preventDefault();
                                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                                    r.flexAnimate(s, r.vars.pauseOnAction)
                                })
                            }
                            if (r.vars.pausePlay) v.pausePlay.setup();
                            if (r.vars.slideshow && r.vars.pauseInvisible) v.pauseInvisible.init();
                            if (r.vars.slideshow) {
                                if (r.vars.pauseOnHover) {
                                    r.hover(function () {
                                        if (!r.manualPlay && !r.manualPause) r.pause()
                                    }, function () {
                                        if (!r.manualPause && !r.manualPlay && !r.stopped) r.play()
                                    })
                                }
                                if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) {
                                    r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
                                }
                            }
                            if (d) v.asNav.setup();
                            if (o && r.vars.touch) v.touch();
                            if (!p || p && r.vars.smoothHeight) e(window).bind("resize orientationchange focus", v.resize);
                            r.find("img").attr("draggable", "false");
                            setTimeout(function () {
                                r.vars.start(r)
                            }, 200)
                        },
                        asNav: {
                            setup: function () {
                                r.asNav = true;
                                r.animatingTo = Math.floor(r.currentSlide / r.move);
                                r.currentItem = r.currentSlide;
                                r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
                                if (!s) {
                                    r.slides.on(u, function (t) {
                                        t.preventDefault();
                                        var n = e(this),
                                            s = n.index();
                                        var o = n.offset().left - e(r).scrollLeft();
                                        if (o <= 0 && n.hasClass(i + "active-slide")) {
                                            r.flexAnimate(r.getTarget("prev"), true)
                                        } else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
                                            r.direction = r.currentItem < s ? "next" : "prev";
                                            r.flexAnimate(s, r.vars.pauseOnAction, false, true, true)
                                        }
                                    })
                                } else {
                                    t._slider = r;
                                    r.slides.each(function () {
                                        var t = this;
                                        t._gesture = new MSGesture;
                                        t._gesture.target = t;
                                        t.addEventListener("MSPointerDown", function (e) {
                                            e.preventDefault();
                                            if (e.currentTarget._gesture) e.currentTarget._gesture.addPointer(e.pointerId)
                                        }, false);
                                        t.addEventListener("MSGestureTap", function (t) {
                                            t.preventDefault();
                                            var n = e(this),
                                                i = n.index();
                                            if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                                r.direction = r.currentItem < i ? "next" : "prev";
                                                r.flexAnimate(i, r.vars.pauseOnAction, false, true, true)
                                            }
                                        })
                                    })
                                }
                            }
                        },
                        controlNav: {
                            setup: function () {
                                if (!r.manualControls) {
                                    v.controlNav.setupPaging()
                                } else {
                                    v.controlNav.setupManual()
                                }
                            },
                            setupPaging: function () {
                                var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                                    n = 1,
                                    s, o;
                                r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
                                if (r.pagingCount > 1) {
                                    for (var f = 0; f < r.pagingCount; f++) {
                                        o = r.slides.eq(f);
                                        s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
                                        if ("thumbnails" === r.vars.controlNav && true === r.vars.thumbCaptions) {
                                            var l = o.attr("data-thumbcaption");
                                            if ("" != l && undefined != l) s += '<span class="' + i + 'caption">' + l + "</span>"
                                        }
                                        r.controlNavScaffold.append("<li>" + s + "</li>");
                                        n++
                                    }
                                }
                                r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                                v.controlNav.set();
                                v.controlNav.active();
                                r.controlNavScaffold.delegate("a, img", u, function (t) {
                                    t.preventDefault();
                                    if (a === "" || a === t.type) {
                                        var n = e(this),
                                            s = r.controlNav.index(n);
                                        if (!n.hasClass(i + "active")) {
                                            r.direction = s > r.currentSlide ? "next" : "prev";
                                            r.flexAnimate(s, r.vars.pauseOnAction)
                                        }
                                    }
                                    if (a === "") {
                                        a = t.type
                                    }
                                    v.setToClearWatchedEvent()
                                })
                            },
                            setupManual: function () {
                                r.controlNav = r.manualControls;
                                v.controlNav.active();
                                r.controlNav.bind(u, function (t) {
                                    t.preventDefault();
                                    if (a === "" || a === t.type) {
                                        var n = e(this),
                                            s = r.controlNav.index(n);
                                        if (!n.hasClass(i + "active")) {
                                            s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                                            r.flexAnimate(s, r.vars.pauseOnAction)
                                        }
                                    }
                                    if (a === "") {
                                        a = t.type
                                    }
                                    v.setToClearWatchedEvent()
                                })
                            },
                            set: function () {
                                var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
                                r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                            },
                            active: function () {
                                r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
                            },
                            update: function (t, n) {
                                if (r.pagingCount > 1 && t === "add") {
                                    r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>"))
                                } else if (r.pagingCount === 1) {
                                    r.controlNavScaffold.find("li").remove()
                                } else {
                                    r.controlNav.eq(n).closest("li").remove()
                                }
                                v.controlNav.set();
                                r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
                            }
                        },
                        directionNav: {
                            setup: function () {
                                var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                                if (r.controlsContainer) {
                                    e(r.controlsContainer).append(t);
                                    r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
                                } else {
                                    r.append(t);
                                    r.directionNav = e("." + i + "direction-nav li a", r)
                                }
                                v.directionNav.update();
                                r.directionNav.bind(u, function (t) {
                                    t.preventDefault();
                                    var n;
                                    if (a === "" || a === t.type) {
                                        n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
                                        r.flexAnimate(n, r.vars.pauseOnAction)
                                    }
                                    if (a === "") {
                                        a = t.type
                                    }
                                    v.setToClearWatchedEvent()
                                })
                            },
                            update: function () {
                                var e = i + "disabled";
                                if (r.pagingCount === 1) {
                                    r.directionNav.addClass(e).attr("tabindex", "-1")
                                } else if (!r.vars.animationLoop) {
                                    if (r.animatingTo === 0) {
                                        r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1")
                                    } else if (r.animatingTo === r.last) {
                                        r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1")
                                    } else {
                                        r.directionNav.removeClass(e).removeAttr("tabindex")
                                    }
                                } else {
                                    r.directionNav.removeClass(e).removeAttr("tabindex")
                                }
                            }
                        },
                        pausePlay: {
                            setup: function () {
                                var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
                                if (r.controlsContainer) {
                                    r.controlsContainer.append(t);
                                    r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
                                } else {
                                    r.append(t);
                                    r.pausePlay = e("." + i + "pauseplay a", r)
                                }
                                v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
                                r.pausePlay.bind(u, function (t) {
                                    t.preventDefault();
                                    if (a === "" || a === t.type) {
                                        if (e(this).hasClass(i + "pause")) {
                                            r.manualPause = true;
                                            r.manualPlay = false;
                                            r.pause()
                                        } else {
                                            r.manualPause = false;
                                            r.manualPlay = true;
                                            r.play()
                                        }
                                    }
                                    if (a === "") {
                                        a = t.type
                                    }
                                    v.setToClearWatchedEvent()
                                })
                            },
                            update: function (e) {
                                e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
                            }
                        },
                        touch: function () {
                            var e, n, i, o, u, a, f, d, v, m = false,
                                g = 0,
                                y = 0,
                                b = 0;
                            if (!s) {
                                d = function (t) {
                                    g = t.touches[0].pageX;
                                    y = t.touches[0].pageY;
                                    u = l ? e - y : e - g;
                                    m = l ? Math.abs(u) < Math.abs(g - n) : Math.abs(u) < Math.abs(y - n);
                                    var s = 500;
                                    if (!m || Number(new Date) - a > s) {
                                        t.preventDefault();
                                        if (!p && r.transitions) {
                                            if (!r.vars.animationLoop) {
                                                u = u / (r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1)
                                            }
                                            r.setProps(i + u, "setTouch")
                                        }
                                    }
                                };
                                v = function (s) {
                                    t.removeEventListener("touchmove", d, false);
                                    if (r.animatingTo === r.currentSlide && !m && !(u === null)) {
                                        var f = c ? -u : u,
                                            l = f > 0 ? r.getTarget("next") : r.getTarget("prev");
                                        if (r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(f) > 50 || Math.abs(f) > o / 2)) {
                                            r.flexAnimate(l, r.vars.pauseOnAction)
                                        } else {
                                            if (!p) r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, true)
                                        }
                                    }
                                    t.removeEventListener("touchend", v, false);
                                    e = null;
                                    n = null;
                                    u = null;
                                    i = null
                                };
                                f = function (s) {
                                    if (r.animating) {
                                        s.preventDefault()
                                    } else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
                                        r.pause();
                                        o = l ? r.h : r.w;
                                        a = Number(new Date);
                                        g = s.touches[0].pageX;
                                        y = s.touches[0].pageY;
                                        i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
                                        e = l ? y : g;
                                        n = l ? g : y;
                                        t.addEventListener("touchmove", d, false);
                                        t.addEventListener("touchend", v, false)
                                    }
                                };
                                t.addEventListener("touchstart", f, false)
                            } else {
                                t.style.msTouchAction = "none";
                                t._gesture = new MSGesture;
                                t._gesture.target = t;
                                t.addEventListener("MSPointerDown", w, false);
                                t._slider = r;
                                t.addEventListener("MSGestureChange", E, false);
                                t.addEventListener("MSGestureEnd", S, false);

                                function w(e) {
                                    e.stopPropagation();
                                    if (r.animating) {
                                        e.preventDefault()
                                    } else {
                                        r.pause();
                                        t._gesture.addPointer(e.pointerId);
                                        b = 0;
                                        o = l ? r.h : r.w;
                                        a = Number(new Date);
                                        i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o
                                    }
                                }

                                function E(e) {
                                    e.stopPropagation();
                                    var n = e.target._slider;
                                    if (!n) {
                                        return
                                    }
                                    var r = -e.translationX,
                                        s = -e.translationY;
                                    b = b + (l ? s : r);
                                    u = b;
                                    m = l ? Math.abs(b) < Math.abs(-r) : Math.abs(b) < Math.abs(-s);
                                    if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                                        setImmediate(function () {
                                            t._gesture.stop()
                                        });
                                        return
                                    }
                                    if (!m || Number(new Date) - a > 500) {
                                        e.preventDefault();
                                        if (!p && n.transitions) {
                                            if (!n.vars.animationLoop) {
                                                u = b / (n.currentSlide === 0 && b < 0 || n.currentSlide === n.last && b > 0 ? Math.abs(b) / o + 2 : 1)
                                            }
                                            n.setProps(i + u, "setTouch")
                                        }
                                    }
                                }

                                function S(t) {
                                    t.stopPropagation();
                                    var r = t.target._slider;
                                    if (!r) {
                                        return
                                    }
                                    if (r.animatingTo === r.currentSlide && !m && !(u === null)) {
                                        var s = c ? -u : u,
                                            f = s > 0 ? r.getTarget("next") : r.getTarget("prev");
                                        if (r.canAdvance(f) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2)) {
                                            r.flexAnimate(f, r.vars.pauseOnAction)
                                        } else {
                                            if (!p) r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, true)
                                        }
                                    }
                                    e = null;
                                    n = null;
                                    u = null;
                                    i = null;
                                    b = 0
                                }
                            }
                        },
                        resize: function () {
                            if (!r.animating && r.is(":visible")) {
                                if (!h) r.doMath();
                                if (p) {
                                    v.smoothHeight()
                                } else if (h) {
                                    r.slides.width(r.computedW);
                                    r.update(r.pagingCount);
                                    r.setProps()
                                } else if (l) {
                                    r.viewport.height(r.h);
                                    r.setProps(r.h, "setTotal")
                                } else {
                                    if (r.vars.smoothHeight) v.smoothHeight();
                                    r.newSlides.width(r.computedW);
                                    r.setProps(r.computedW, "setTotal")
                                }
                            }
                        },
                        smoothHeight: function (e) {
                            if (!l || p) {
                                var t = p ? r : r.viewport;
                                e ? t.animate({
                                    height: r.slides.eq(r.animatingTo).height()
                                }, e) : t.height(r.slides.eq(r.animatingTo).height())
                            }
                        },
                        sync: function (t) {
                            var n = e(r.vars.sync).data("flexslider"),
                                i = r.animatingTo;
                            switch (t) {
                                case "animate":
                                    n.flexAnimate(i, r.vars.pauseOnAction, false, true);
                                    break;
                                case "play":
                                    if (!n.playing && !n.asNav) {
                                        n.play()
                                    }
                                    break;
                                case "pause":
                                    n.pause();
                                    break
                            }
                        },
                        uniqueID: function (t) {
                            t.find("[id]").each(function () {
                                var t = e(this);
                                t.attr("id", t.attr("id") + "_clone")
                            });
                            return t
                        },
                        pauseInvisible: {
                            visProp: null,
                            init: function () {
                                var e = ["webkit", "moz", "ms", "o"];
                                if ("hidden" in document) return "hidden";
                                for (var t = 0; t < e.length; t++) {
                                    if (e[t] + "Hidden" in document) v.pauseInvisible.visProp = e[t] + "Hidden"
                                }
                                if (v.pauseInvisible.visProp) {
                                    var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                                    document.addEventListener(n, function () {
                                        if (v.pauseInvisible.isHidden()) {
                                            if (r.startTimeout) clearTimeout(r.startTimeout);
                                            else r.pause()
                                        } else {
                                            if (r.started) r.play();
                                            else r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                                        }
                                    })
                                }
                            },
                            isHidden: function () {
                                return document[v.pauseInvisible.visProp] || false
                            }
                        },
                        setToClearWatchedEvent: function () {
                            clearTimeout(f);
                            f = setTimeout(function () {
                                a = ""
                            }, 3e3)
                        }
                    };
                    r.flexAnimate = function (t, n, s, u, a) {
                        if (!r.vars.animationLoop && t !== r.currentSlide) {
                            r.direction = t > r.currentSlide ? "next" : "prev"
                        }
                        if (d && r.pagingCount === 1) r.direction = r.currentItem < t ? "next" : "prev";
                        if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
                            if (d && u) {
                                var f = e(r.vars.asNavFor).data("flexslider");
                                r.atEnd = t === 0 || t === r.count - 1;
                                f.flexAnimate(t, true, false, true, a);
                                r.direction = r.currentItem < t ? "next" : "prev";
                                f.direction = r.direction;
                                if (Math.ceil((t + 1) / r.visible) - 1 !== r.currentSlide && t !== 0) {
                                    r.currentItem = t;
                                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                                    t = Math.floor(t / r.visible)
                                } else {
                                    r.currentItem = t;
                                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                                    return false
                                }
                            }
                            r.animating = true;
                            r.animatingTo = t;
                            if (n) r.pause();
                            r.vars.before(r);
                            if (r.syncExists && !a) v.sync("animate");
                            if (r.vars.controlNav) v.controlNav.active();
                            if (!h) r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                            r.atEnd = t === 0 || t === r.last;
                            if (r.vars.directionNav) v.directionNav.update();
                            if (t === r.last) {
                                r.vars.end(r);
                                if (!r.vars.animationLoop) r.pause()
                            }
                            if (!p) {
                                var m = l ? r.slides.filter(":first").height() : r.computedW,
                                    g, y, b;
                                if (h) {
                                    g = r.vars.itemMargin;
                                    b = (r.itemW + g) * r.move * r.animatingTo;
                                    y = b > r.limit && r.visible !== 1 ? r.limit : b
                                } else if (r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next") {
                                    y = c ? (r.count + r.cloneOffset) * m : 0
                                } else if (r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev") {
                                    y = c ? 0 : (r.count + 1) * m
                                } else {
                                    y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m
                                }
                                r.setProps(y, "", r.vars.animationSpeed);
                                if (r.transitions) {
                                    if (!r.vars.animationLoop || !r.atEnd) {
                                        r.animating = false;
                                        r.currentSlide = r.animatingTo
                                    }
                                    r.container.unbind("webkitTransitionEnd transitionend");
                                    r.container.bind("webkitTransitionEnd transitionend", function () {
                                        r.wrapup(m)
                                    })
                                } else {
                                    r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
                                        r.wrapup(m)
                                    })
                                }
                            } else {
                                if (!o) {
                                    r.slides.eq(r.currentSlide).css({
                                        zIndex: 1
                                    }).animate({
                                        opacity: 0
                                    }, r.vars.animationSpeed, r.vars.easing);
                                    r.slides.eq(t).css({
                                        zIndex: 2
                                    }).animate({
                                        opacity: 1
                                    }, r.vars.animationSpeed, r.vars.easing, r.wrapup)
                                } else {
                                    r.slides.eq(r.currentSlide).css({
                                        opacity: 0,
                                        zIndex: 1
                                    });
                                    r.slides.eq(t).css({
                                        opacity: 1,
                                        zIndex: 2
                                    });
                                    r.wrapup(m)
                                }
                            }
                            if (r.vars.smoothHeight) v.smoothHeight(r.vars.animationSpeed)
                        }
                    };
                    r.wrapup = function (e) {
                        if (!p && !h) {
                            if (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop) {
                                r.setProps(e, "jumpEnd")
                            } else if (r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop) {
                                r.setProps(e, "jumpStart")
                            }
                        }
                        r.animating = false;
                        r.currentSlide = r.animatingTo;
                        r.vars.after(r)
                    };
                    r.animateSlides = function () {
                        if (!r.animating && m) r.flexAnimate(r.getTarget("next"))
                    };
                    r.pause = function () {
                        clearInterval(r.animatedSlides);
                        r.animatedSlides = null;
                        r.playing = false;
                        if (r.vars.pausePlay) v.pausePlay.update("play");
                        if (r.syncExists) v.sync("pause")
                    };
                    r.play = function () {
                        if (r.playing) clearInterval(r.animatedSlides);
                        r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
                        r.started = r.playing = true;
                        if (r.vars.pausePlay) v.pausePlay.update("pause");
                        if (r.syncExists) v.sync("play")
                    };
                    r.stop = function () {
                        r.pause();
                        r.stopped = true
                    };
                    r.canAdvance = function (e, t) {
                        var n = d ? r.pagingCount - 1 : r.last;
                        return t ? true : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? true : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? false : e === r.currentSlide && !d ? false : r.vars.animationLoop ? true : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? false : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? false : true
                    };
                    r.getTarget = function (e) {
                        r.direction = e;
                        if (e === "next") {
                            return r.currentSlide === r.last ? 0 : r.currentSlide + 1
                        } else {
                            return r.currentSlide === 0 ? r.last : r.currentSlide - 1
                        }
                    };
                    r.setProps = function (e, t, n) {
                        var i = function () {
                            var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                                i = function () {
                                    if (h) {
                                        return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n
                                    } else {
                                        switch (t) {
                                            case "setTotal":
                                                return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                                            case "setTouch":
                                                return c ? e : e;
                                            case "jumpEnd":
                                                return c ? e : r.count * e;
                                            case "jumpStart":
                                                return c ? r.count * e : e;
                                            default:
                                                return e
                                        }
                                    }
                                }();
                            return i * -1 + "px"
                        }();
                        if (r.transitions) {
                            i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
                            n = n !== undefined ? n / 1e3 + "s" : "0s";
                            r.container.css("-" + r.pfx + "-transition-duration", n);
                            r.container.css("transition-duration", n)
                        }
                        r.args[r.prop] = i;
                        if (r.transitions || n === undefined) r.container.css(r.args);
                        r.container.css("transform", i)
                    };
                    r.setup = function (t) {
                        if (!p) {
                            var n, s;
                            if (t === "init") {
                                r.viewport = e('<div class="' + i + 'viewport"></div>').css({
                                    overflow: "hidden",
                                    position: "relative"
                                }).appendTo(r).append(r.container);
                                r.cloneCount = 0;
                                r.cloneOffset = 0;
                                if (c) {
                                    s = e.makeArray(r.slides).reverse();
                                    r.slides = e(s);
                                    r.container.empty().append(r.slides)
                                }
                            }
                            if (r.vars.animationLoop && !h) {
                                r.cloneCount = 2;
                                r.cloneOffset = 1;
                                if (t !== "init") r.container.find(".clone").remove();
                                r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
                                v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
                                v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)
                            }
                            r.newSlides = e(r.vars.selector, r);
                            n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                            if (l && !h) {
                                r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                                setTimeout(function () {
                                    r.newSlides.css({
                                        display: "block"
                                    });
                                    r.doMath();
                                    r.viewport.height(r.h);
                                    r.setProps(n * r.h, "init")
                                }, t === "init" ? 100 : 0)
                            } else {
                                r.container.width((r.count + r.cloneCount) * 200 + "%");
                                r.setProps(n * r.computedW, "init");
                                setTimeout(function () {
                                    r.doMath();
                                    r.newSlides.css({
                                        width: r.computedW,
                                        "float": "left",
                                        display: "block"
                                    });
                                    if (r.vars.smoothHeight) v.smoothHeight()
                                }, t === "init" ? 100 : 0)
                            }
                        } else {
                            r.slides.css({
                                width: "100%",
                                "float": "left",
                                marginRight: "-100%",
                                position: "relative"
                            });
                            if (t === "init") {
                                if (!o) {
                                    r.slides.css({
                                        opacity: 0,
                                        display: "block",
                                        zIndex: 1
                                    }).eq(r.currentSlide).css({
                                        zIndex: 2
                                    }).animate({
                                        opacity: 1
                                    }, r.vars.animationSpeed, r.vars.easing)
                                } else {
                                    r.slides.css({
                                        opacity: 0,
                                        display: "block",
                                        webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                                        zIndex: 1
                                    }).eq(r.currentSlide).css({
                                        opacity: 1,
                                        zIndex: 2
                                    })
                                }
                            }
                            if (r.vars.smoothHeight) v.smoothHeight()
                        }
                        if (!h) r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
                        r.vars.init(r)
                    };
                    r.doMath = function () {
                        var e = r.slides.first(),
                            t = r.vars.itemMargin,
                            n = r.vars.minItems,
                            i = r.vars.maxItems;
                        r.w = r.viewport === undefined ? r.width() : r.viewport.width();
                        r.h = e.height();
                        r.boxPadding = e.outerWidth() - e.width();
                        if (h) {
                            r.itemT = r.vars.itemWidth + t;
                            r.minW = n ? n * r.itemT : r.w;
                            r.maxW = i ? i * r.itemT - t : r.w;
                            r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
                            r.visible = Math.floor(r.w / r.itemW);
                            r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
                            r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                            r.last = r.pagingCount - 1;
                            r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
                        } else {
                            r.itemW = r.w;
                            r.pagingCount = r.count;
                            r.last = r.count - 1
                        }
                        r.computedW = r.itemW - r.boxPadding
                    };
                    r.update = function (e, t) {
                        r.doMath();
                        if (!h) {
                            if (e < r.currentSlide) {
                                r.currentSlide += 1
                            } else if (e <= r.currentSlide && e !== 0) {
                                r.currentSlide -= 1
                            }
                            r.animatingTo = r.currentSlide
                        }
                        if (r.vars.controlNav && !r.manualControls) {
                            if (t === "add" && !h || r.pagingCount > r.controlNav.length) {
                                v.controlNav.update("add")
                            } else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
                                if (h && r.currentSlide > r.last) {
                                    r.currentSlide -= 1;
                                    r.animatingTo -= 1
                                }
                                v.controlNav.update("remove", r.last)
                            }
                        }
                        if (r.vars.directionNav) v.directionNav.update()
                    };
                    r.addSlide = function (t, n) {
                        var i = e(t);
                        r.count += 1;
                        r.last = r.count - 1;
                        if (l && c) {
                            n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i)
                        } else {
                            n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i)
                        }
                        r.update(n, "add");
                        r.slides = e(r.vars.selector + ":not(.clone)", r);
                        r.setup();
                        r.vars.added(r)
                    };
                    r.removeSlide = function (t) {
                        var n = isNaN(t) ? r.slides.index(e(t)) : t;
                        r.count -= 1;
                        r.last = r.count - 1;
                        if (isNaN(t)) {
                            e(t, r.slides).remove()
                        } else {
                            l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove()
                        }
                        r.doMath();
                        r.update(n, "remove");
                        r.slides = e(r.vars.selector + ":not(.clone)", r);
                        r.setup();
                        r.vars.removed(r)
                    };
                    v.init()
                };
                e(window).blur(function (e) {
                    focused = false
                }).focus(function (e) {
                    focused = true
                });
                e.flexslider.defaults = {
                    namespace: "flex-",
                    selector: ".slides > li",
                    animation: "fade",
                    easing: "swing",
                    direction: "horizontal",
                    reverse: false,
                    animationLoop: true,
                    smoothHeight: false,
                    startAt: 0,
                    slideshow: true,
                    slideshowSpeed: 7e3,
                    animationSpeed: 600,
                    initDelay: 0,
                    randomize: false,
                    thumbCaptions: false,
                    pauseOnAction: true,
                    pauseOnHover: false,
                    pauseInvisible: true,
                    useCSS: true,
                    touch: true,
                    video: false,
                    controlNav: true,
                    directionNav: true,
                    prevText: "Previous",
                    nextText: "Next",
                    keyboard: true,
                    multipleKeyboard: false,
                    mousewheel: false,
                    pausePlay: false,
                    pauseText: "Pause",
                    playText: "Play",
                    controlsContainer: "",
                    manualControls: "",
                    sync: "",
                    asNavFor: "",
                    itemWidth: 0,
                    itemMargin: 0,
                    minItems: 1,
                    maxItems: 0,
                    move: 0,
                    allowOneSlide: true,
                    start: function () {},
                    before: function () {},
                    after: function () {},
                    end: function () {},
                    added: function () {},
                    removed: function () {},
                    init: function () {}
                };
                e.fn.flexslider = function (t) {
                    if (t === undefined) t = {};
                    if (typeof t === "object") {
                        return this.each(function () {
                            var n = e(this),
                                r = t.selector ? t.selector : ".slides > li",
                                i = n.find(r);
                            if (i.length === 1 && t.allowOneSlide === true || i.length === 0) {
                                i.fadeIn(400);
                                if (t.start) t.start(n)
                            } else if (n.data("flexslider") === undefined) {
                                new e.flexslider(this, t)
                            }
                        })
                    } else {
                        var n = e(this).data("flexslider");
                        switch (t) {
                            case "play":
                                n.play();
                                break;
                            case "pause":
                                n.pause();
                                break;
                            case "stop":
                                n.stop();
                                break;
                            case "next":
                                n.flexAnimate(n.getTarget("next"), true);
                                break;
                            case "prev":
                            case "previous":
                                n.flexAnimate(n.getTarget("prev"), true);
                                break;
                            default:
                                if (typeof t === "number") n.flexAnimate(t, true)
                        }
                    }
                }
            })(jQuery)
