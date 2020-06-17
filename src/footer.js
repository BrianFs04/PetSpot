$(document).ready(function () {
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function () {
    siteFooter();
  });

  function siteFooter() {
    var siteContent = $("#site-content");

    var siteFooter = $("#site-footer");
    var siteFooterHeight = siteFooter.height();

    siteContent.css({
      "margin-bottom": siteFooterHeight + 50,
    });
  }
});
