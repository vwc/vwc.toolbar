/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

(function ($) {
    $(document).ready(function () {
        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
            // it's not realistic to think we can deal with all the bugs
            // of IE 6 and lower. Fortunately, all this is just progressive
            // enhancement.
            return;
        }
        // cmsview login form
        $('a.popoverLogin').prepOverlay(
            {
                subtype: 'ajax',
                filter: common_content_filter,
                formselector: 'form#login_form',
                noform: 'redirect',
                redirect: function (overlay, responseText) {
                    var href = location.href;
                    if (href.search(/pwreset_finish$/) >= 0) {
                        return href.slice(0, href.length-14) + 'logged_in';
                    } else {
                        // look to see if there has been a server redirect
                        var newTarget = $("<div>").html(responseText).find("base").attr("href"); 
                        if ($.trim(newTarget) && newTarget !== location.href) { 
                            return newTarget; 
                        }
                        // if not, simply reload
                        return href;
                    }
                }
            }
        );
    });
}(jQuery));