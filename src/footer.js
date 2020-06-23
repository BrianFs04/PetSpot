$(document).ready(function () {
  // Initiate the footer
  siteFooter();
  //Take the windows size
  $(window).resize(function () {
    siteFooter();
  });

  function siteFooter() {
    //Create a variable that gives the style class to site content
    var siteContent = $("#site-content");
    //Create a variable that gives the style class to footer
    var siteFooter = $("#site-footer");
    //Create a variable that gives the height of the footer
    var siteFooterHeight = siteFooter.height();
    // this margin bottom is hte form to show the footer behind the site
    siteContent.css({
      "margin-bottom": siteFooterHeight + 50,
    });
  }
});
