(jQuery)(document).ready(function ($) {
    "use strict";
    /* Responsive menu*/
    if ($("#mp-menu").length > 0)
        new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('sys_btn_toogle_menu'), {dockSide: "right"});

    // Heading large	

    $(window).on('load resize', function () {
        $(".decription-override").each(function () {
            $(this).css("margin-top", -$(this).outerHeight() / 2);
        })
    });




    //=============== IF IE 8 ===================
    var rex = new RegExp("MSIE 8.0");
    var trueIE = rex.test(navigator.userAgent);

    if (trueIE) {
        jQuery('#mp-menu').hide();
        // jQuery('.md-slide').find('LI').children('IMG').css({
        // 	top: '0px',
        // 	left: '0px'
        // });
        jQuery('.content-slide .home-content').css({
            left: '24%',
            top: '25%'
        });
    }


    /*IF IE 9*/
    var rex = new RegExp("MSIE 9.0");
    var trueIE = rex.test(navigator.userAgent);

    var flag_show = false;
    if (trueIE) {


        $(".mp-menu").hide();
        $(".has-sub .mp-level").hide();
        //  Show menu
        $(".btn-toogle-res-menu").click(function (ev) {
            ev.stopPropagation();
            $(".mp-menu").toggle("drop", {direction: "right"}, 300);
        });
        // Show sub-menu
        $(".has-sub").click(function (event) {
            event.stopPropagation();
            $(this).children(".mp-level").show("slide", {direction: "right"}, 300);
        })
        // Close sub-menu
        $('.mp-back').click(function () {
            $(this).parent().hide("slide", {direction: "right"}, 300);
        })
        // 
        $('.mp-menu').click(function (event) {
            event.stopPropagation();
        })

    }

    /*END IE 9*/


    if ($('embed').length || $('iframe').length) {

        $.each($('iframe, embed'), function () {
            $(this).addClass('embed-responsive-item').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
        });
    }

    $.each($('.list-article').find('.pull-left'), function () {
        if ($(this).children().length == 0) {
            var $mediaBody = $(this).siblings('.media-body');
            $mediaBody.css('width', '100%');
        }

    });

    $('#main-menu').children('li').addClass('nav-list-item');

    var desktopMenu = function () {

        var $windowsWidth = parseInt($(window).width()),
                flag = false;

        $.each($('.sub-menu'), function () {
            var self = $(this),
                    $menuDropDownOffsetLeft = parseInt(self.offset().left),
                    $menuDropDownWidth = parseInt(self.outerWidth());

            // If Offset > windows
            if (($menuDropDownWidth + $menuDropDownOffsetLeft) > $windowsWidth) {
                flag = true;
            }

        });

        if (flag) {
            $('.nav-list-item > .sub-menu').addClass('menu-left');
        } else {
            $('.nav-list-item > .sub-menu').removeClass('menu-left');
        }

    };

    desktopMenu();
    $(window).resize(function () {
        desktopMenu();
    });

    var imgSrc = $('.bg-contact > img').attr('src');
    if ($('.bg-contact > img').length) {
        $('.bg-contact').css('background-image', 'url(' + imgSrc + ')');
    }

    if ($('.order_details.bacs_details').children().length == 0) {
        $('.order_details.bacs_details').remove();
    }
    // Slider of Testimonial
    if ($('.awe_testimonial_widget').length)
    {
        $('.awe_testimonial_widget').bxSlider({
            auto: true,
            mode: 'fade',
            speed: 10,
            pager: false,
            controls: false,
            responsive: true

        });
    }

//    $("#arrival-date, #departure-date, #s_arrival-date, #s_departure-date").datepicker({
//        dateFormat: 'mm/dd/yy',
//        constrainInput: true,
//        minDate: 0,
//    });
//    

    

    if ($('#md-news-deal').length) {

        $( '#md-news-deal' ).imagesLoaded( function() {
            $('#md-news-deal').masonry({
                itemSelector: '.media-center',
                columnWidth: '.md-news-deal .media',
                animationOptions: {
                    duration: 400
                },
                isFitWidth: true
            });
        });

//        $("#md-news-deal").imagesLoaded(function () {
//            var newdeal = document.querySelector('#md-news-deal');
//            var msnry = new Masonry(newdeal, {
//                itemSelector: '.media-center',
//                columnWidth: '.md-news-deal .media',
//                isFitWidth: true
//            });
//        });

        $("#load-more").bind("click", function (event) {
            event.preventDefault();
            var button = $(this);
            var page = button.attr('data-page');
            var max = button.attr('data-max');
            var page_new = parseInt(button.attr('data-page')) + 1;
            button.attr('data-page', page_new);
            if (max > page) {
            } else {
                $("#load-more").fadeOut();
            }
            $.ajax({
                type: "post",
                url: ajax_object.ajax_url,
                data: {
                    action: 'awe_load_more_masonry',
                    paged: page,
                },
                success: function (response)
                {
                    var obj = JSON.parse(response);
                    var data = $(obj['content']).filter("article.media-center");
                    $("#md-news-deal").append(data);
                    //$("#md-news-deal").imagesLoaded(msnry.appended(res));
                    $('#md-news-deal').imagesLoaded(function () {
                        $('#md-news-deal').masonry('appended', data);
                    });
                    button.attr('data-max', obj['max_page']);
                }
            });

        });

        $('.view-content').masonry({
            itemSelector: '.views-row'
        });
    }

    $('.js_subcr').on("click", function (e) {
        e.preventDefault();
        $.post(
                ajax_object.ajax_url,
                {
                    action: 'awe_subscribe',
                    // send the nonce along with the request
                    subscribeNonce: ajax_object.subscribeNonce,
                    email: $("input.js_email").val()
                },
        function (response) {
            var data = JSON.parse(response);
            if (data.type == 'error')
            {
                $(".subscribe-status").html(data.msg).fadeIn();
            }
            else {
                $(".subscribe-status").html(data.msg).fadeIn();
            }
        }
        );
        return false;
    })
    if ($('.popup-gmaps').length)
    {
        $('.popup-gmaps').magnificPopupMap();
    }
    if ($('.awe_magnific_popup').length)
    {
        $('.awe_magnific_popup').each(function () {


            $(this).magnificPopup({
                type: 'image',
                delegate: 'a',
                overflowY: 'scroll',
                fixedContentPos: false,
                fixedBgPos: false,
                closeBtnInside: true,
                midClick: true,
                removalDelay: 600,
                mainClass: 'awe-mfp-lightbox',
                menu: {
                    enabled: true,
                    navigateByImgClick: true,
                    // preload: [0,2] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                }

            });
        })
    }

    // Day price popup
    if ( $('.awe-view-day-price').length ) {
        $('.awe-view-day-price').each(function() {
            $(this).magnificPopup({
                type: 'inline',
                midClick: true
            });
        });
    }

});

