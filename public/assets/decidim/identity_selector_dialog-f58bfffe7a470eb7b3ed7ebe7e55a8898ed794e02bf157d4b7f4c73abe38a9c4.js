"use strict";$(document).ready(function(){var e=$("#select-identity-button"),t=null,i=$("#user-identities");i.length&&(t=i.data("reveal-identities-url"),e.click(function(){$.ajax(t).done(function(t){i.html(t).foundation("open"),e.trigger("ajax:success")})}))}),$(document).ready(function(){$("#select-identity-button").on("ajax:success",function(){$("#user-identities ul.reveal__list li").each(function(e,t){var i=$(t);i.on("click",function(){var e=i.data("method"),t=null;t="POST"===e?"create_url":"destroy_url",$.ajax({url:i.data(t),method:e,dataType:"script",success:function(){i.hasClass("selected")?(i.removeClass("selected"),i.find(".icon--circle-check").addClass("invisible"),i.data("method","POST")):(i.addClass("selected"),i.find(".icon--circle-check").removeClass("invisible"),i.data("method","DELETE"))}})})})})});