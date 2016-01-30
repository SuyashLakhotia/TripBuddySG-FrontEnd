/*************************************************************************
TripBuddy.sg (c) 2016. All rights reserved.
*************************************************************************/

jQuery(document).ready(function () {
    jQuery('.legal-pills a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show & Hide Tabs:
        jQuery('.legal-content ' + currentAttrValue).show().siblings().hide();

        // Change .active Tab:
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});