$(function () {
    $(".slider-rooms").slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: true,
                },
            },
        ],
    });
    $(".slider-reviews").slick({
        arrows: false,
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    infinite: false,
                    variableWidth: true
                },
            },

            {
                breakpoint: 1199,
                settings: {
                    arrows: true,
                    infinite: false,
                    variableWidth: true
                },
            },
        ],
    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top }, 1500);
        return false;
    });

    $("select").each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children("option").length;

        $this.addClass("select-hidden");
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next("div.select-styled");
        $styledSelect.text($this.children("option").eq(0).text());

        var $list = $("<ul />", {
            class: "select-options",
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $("<li />", {
                text: $this.children("option").eq(i).text(),
                rel: $this.children("option").eq(i).val(),
            }).appendTo($list);
        }

        var $listItems = $list.children("li");
        $(".select-options li:first-child").addClass("active-item");
        // $('.select-options li:nth-child(odd)').addClass('icon-up-arrow');
        // $('.select-options li:nth-child(even)').addClass('icon-down-arrow');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $("div.select-styled.active")
                .not(this)
                .each(function () {
                    $(this)
                        .removeClass("active")
                        .next("ul.select-options")
                        .hide();
                });
            $(this).toggleClass("active").next("ul.select-options").toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass("active");
            $this.val($(this).attr("rel"));
            console.dir(this);
            $("li").removeClass("active-item");
            $(this).addClass("active-item");
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass("active");
            $list.hide();
        });
    });

    $(".button-sorting").click(function () {
        $(".modal-sorting").fadeIn();
        $(".overlay-sorting").fadeIn();
        $("body").addClass("popup-opened");
    });

    $(".icon-close").click(function () {
        $(".modal-sorting").fadeOut();
        $(".overlay-sorting").fadeOut();
        $("body").removeClass("popup-opened");
    });

    $(".overlay-sorting").on('click', function (e) {
        var popup = $(".sorting-content");
        var width = $(window).width();
        // console.log(width);
        // debugger;
        if (e.target != popup[0] && popup.has(e.target).length === 0 && width < 1200  ) {
            $(".modal-sorting").fadeOut();
            $(".overlay-sorting").fadeOut();
            $("body").removeClass("popup-opened");
        }
    });

    $(".button-reserv").click(function () {
        $(".modal-reserv").fadeIn();
        $(".overlay-reserv").fadeIn();
        $("body").addClass("popup-opened");
    });

    $(".icon-close").click(function () {
        $(".modal-reserv").fadeOut();
        $(".overlay-reserv").fadeOut();
        $("body").removeClass("popup-opened");
    });

    $(".button-send").click(function () {
        $(".modal-reserv").fadeOut();
        $(".overlay-reserv").fadeOut();
        $("body").removeClass("popup-opened");
    });

    $(".overlay-reserv").on('click', function (e) {
        var popup = $(".reserv-content");
        var width = $(window).width();
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $(".modal-reserv").fadeOut();
            $(".overlay-reserv").fadeOut();
            $("body").removeClass("popup-opened");
        }
    })

    // $(document).mouseup(function (e) {
    //     var popup = $(".reserv-content");
    //     var width = $(window).width();
    //     // console.log(width);
    //     if (e.target != popup[0] && popup.has(e.target).length === 0 && popup[0].contains(e.target)) {
    //         $(".modal-reserv").fadeOut();
    //         $(".overlay-reserv").fadeOut();
    //         $("body").removeClass("popup-opened");
    //     }
    // });

    $(".button-send").click(function () {
        $(".modal-request").fadeIn();
        $(".overlay-request").fadeIn();
        $("body").addClass("popup-opened");
    });

    $(".button-ok").click(function () {
        $(".modal-request").fadeOut();
        $(".overlay-request").fadeOut();
        $("body").removeClass("popup-opened");
    });

    $(".icon-close").click(function () {
        $(".modal-request").fadeOut();
        $(".overlay-request").fadeOut();
        $("body").removeClass("popup-opened");
    });

    $(".overlay-request").on('click', function (e) {
        var popup = $(".request-content");
        var width = $(window).width();
        // console.log(width);
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $(".modal-request").fadeOut();
            $(".overlay-request").fadeOut();
            $("body").removeClass("popup-opened");
        }
    });

    // const inputs = document.querySelectorAll('input[type=checkbox]');
    // const button = document.querySelector('input[type=submit]');

    $("input[type=checkbox]").on("click", function () {
        if ($(this).is(":checked")) {
            $("input[type=submit]").addClass("active-submit");
        } else {
            $("input[type=submit]").removeClass("active-submit");
        }
    });

    $(".header-burger").click(function (event) {
        $(".header-burger,.nav").toggleClass("active-burger");
    });

    var win = $(window),
        doc = $("html"),
        resizeClass = "resize-active",
        flag,
        timer;
    var removeClassHandler = function () {
        flag = false;
        doc.removeClass(resizeClass);
    };
    var resizeHandler = function () {
        if (!flag) {
            flag = true;
            doc.addClass(resizeClass);
        }
        clearTimeout(timer);
        timer = setTimeout(removeClassHandler, 500);
    };

    win.on("resize orientationchange", resizeHandler);

    $('#date-from, #date-to').dateDropper();
});
