/*************************************************************************
TripBuddy.sg (c) 2015. All rights reserved.
*************************************************************************/

// jQuery to Collapse Navbar on Scroll:
$(window).scroll(function () {
    if ($(".navbar").offset().top > 70) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


// jQuery to Add More Textboxes for Includes/Excludes
$(function () {
    $('#addIncludes').click(function () {
        var li = $('.includes-arr li:first').clone().appendTo($('.includes-arr'));

        // empty the value if something is already filled in the cloned copy
        li.children('input').val('');

        // disable button if its the 10th that was added
        if ($('.includes-arr').children().length == 10) {
            $(this).attr('disabled', true);
        }
    });
});

$(function () {
    $('#addExcludes').click(function () {
        var li = $('.excludes-arr li:first').clone().appendTo($('.excludes-arr'));

        // empty the value if something is already filled in the cloned copy
        li.children('input').val('');

        // disable button if its the 10th that was added
        if ($('.excludes-arr').children().length == 10) {
            $(this).attr('disabled', true);
        }
    });
});


// JavaScript for Anchor Link Scroll Animations:
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});