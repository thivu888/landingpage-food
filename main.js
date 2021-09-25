$("#slide-header").slick({
  // Infinity: true,
  // dots: true,
  // autoplay: true,
});

$(".content-products").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
});

$(".list-img-noi-bat").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
});

$(".menu-toggle").click(() => {
  $(".navbar").addClass("active");
  $(".backdrop").addClass("active");
});
$("#close-nav").click(() => {
  $(".navbar").removeClass("active");
  $(".backdrop").removeClass("active");
});
$(".backdrop").click(() => {
  $(".navbar").removeClass("active");
  $(".backdrop").removeClass("active");
});

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    console.log("lon hon");
    $(".back-to-top").show();
  } else {
    console.log("nho hon");
    $(".back-to-top").hide();
  }
};
$(".back-to-top").click(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
