let title = "javascriptが使えました";
alert(title);

// $(function() {
//   $('#slider').slick({
//       dots: true,
//       autoplay: true,
//       autoplaySpeed: 4000,
//   });
// });
$(document).on('turbolinks:load', function () {
  $("#slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
});