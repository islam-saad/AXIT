$(function() {
    'use strict';
    $(window).scroll(function() {
        // window.console.log($('.navbar').height());
        // window.console.log($(window).scrollTop());
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    //deal with taps 
    $('.tap-switch li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs .tabs-content div').hide();
        $('.' + $(this).data('class')).show();
    });
});