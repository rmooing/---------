$(function() {
    $("#search").click(function() {
        $("#search_box").toggleClass("hidden");
    });

    $("button").click(function() {
        $(".center").toggle();
        $(".save button").toggle();
    });
    $('.multiple_slider1').bxSlider({
        speed: 1100,
        moveSlides: 6,
        maxSlides: 6,
        minSlides: 6,
        pager: false,
        slideWidth: 1110,
        slideMargin: 6,
        controls: true,
        nextSelector: '#cate1_right_btn',
        prevSelector: '#cate1_left_btn',
        nextText: '<i class="fa-solid fa-angle-right s1_right"></i>',
        prevText: '<i class="fa-solid fa-angle-left s1_left"></i>',
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    $('.multiple_slider2').bxSlider({
        speed: 1100,
        moveSlides: 3,
        maxSlides: 3,
        minSlides: 3,
        pager: false,
        slideWidth: 1110,
        slideMargin: 6,
        nextSelector: '#cate2_right_btn',
        prevSelector: '#cate2_left_btn',
        nextText: '<i class="fa-solid fa-angle-right s2_right"></i>',
        prevText: '<i class="fa-solid fa-angle-left s2_left"></i>',
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    $('.multiple_slider1_1').bxSlider({
        speed: 500,
        moveSlides: 6,
        maxSlides: 6,
        minSlides: 6,
        pager: false,
        slideWidth: 1110,
        slideMargin: 6,
        nextSelector: '#cate1_1_right_btn',
        prevSelector: '#cate1_1_left_btn',
        nextText: '<i class="fa-solid fa-angle-right s1-1_right"></i>',
        prevText: '<i class="fa-solid fa-angle-left s1-1_left"></i>',
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });
    $('.multiple_slider1_2').bxSlider({
        speed: 500,
        moveSlides: 6,
        maxSlides: 6,
        minSlides: 6,
        pager: false,
        slideWidth: 1110,
        slideMargin: 6,
        nextSelector: '#cate1_2_right_btn',
        prevSelector: '#cate1_2_left_btn',
        nextText: '<i class="fa-solid fa-angle-right s1-2_right"></i>',
        prevText: '<i class="fa-solid fa-angle-left s1-2_left"></i>',
        infiniteLoop: false,
        hideControlOnEnd: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    $('.multiple_slider2_1').bxSlider({
        speed: 1100,
        moveSlides: 3,
        maxSlides: 3,
        minSlides: 3,
        pager: false,
        slideWidth: 1110,
        slideMargin: 6,
        nextSelector: '#cate2_1_right_btn',
        prevSelector: '#cate2_1_left_btn',
        nextText: '<i class="fa-solid fa-angle-right s2-1_right"></i>',
        prevText: '<i class="fa-solid fa-angle-left s2-1_left"></i>',
        infiniteLoop: false,
        hideControlOnEnd: true,        
        touchEnabled : (navigator.maxTouchPoints > 0)
    });


    $(".s1_right").click(function () {
        $("#cate1_left_btn").show();
        $("#cate1_right_btn").hide();
    });
    $(".s1_left").click(function () {
        $("#cate1_left_btn").hide();
        $("#cate1_right_btn").show();
    });

    $(".s2_right").click(function () {
        $("#cate2_left_btn").show();
        $("#cate2_right_btn").hide();
    });
    $(".s2_left").click(function () {
        $("#cate2_left_btn").hide();
        $("#cate2_right_btn").show();
    });

    $(".s1-1_right").click(function () {
        $("#cate1_1_left_btn").show();
        $("#cate1_1_right_btn").hide();
    });
    $(".s1-1_left").click(function () {
        $("#cate1_1_left_btn").hide();
        $("#cate1_1_right_btn").show();
    });

    $(".s2-1_right").click(function () {
        $("#cate2_1_left_btn").show();
        $("#cate2_1_right_btn").hide();
    });
    $(".s2-1_left").click(function () {
        $("#cate2_1_left_btn").hide();
        $("#cate2_1_right_btn").show();
    });

    $(".s1-2_right").click(function () {
        $("#cate1_2_left_btn").show();
        $("#cate1_2_right_btn").hide();
    });
    $(".s1-2_left").click(function () {
        $("#cate1_2_left_btn").hide();
        $("#cate1_2_right_btn").show();
    });

    $(".s1-3_right").click(function () {
        $("#cate1_3_left_btn").show();
        $("#cate1_3_right_btn").hide();
    });
    $(".s1-3_left").click(function () {
        $("#cate1_3_left_btn").hide();
        $("#cate1_3_right_btn").show();
    });

});

