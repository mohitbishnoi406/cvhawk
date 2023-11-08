setTimeout(function () {
    once: true, $(".preloader_bg").fadeToggle();
  }, 1700);

//   navbar
let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menuicon");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    nav.classList.toggle("nav-bg")
    nav.classList.toggle("nav-2")
    span1.classList.toggle("nav1")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    document.body.classList.toggle("overflow-hidden")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})

finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        span1.classList.toggle("nav1")
        nav.classList.toggle("nav-bg")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        document.body.classList.toggle("overflow-hidden")
    })
});
// backtotop-button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-top");

    // Show the button when the user scrolls down 200px from the top
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Scroll back to the top when the button is clicked
    button.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
})

$('.elp-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
});



$('.client-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev-btn",
    nextArrow: ".nxt-btn",
});
$('.slick-3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev-btn-1",
    nextArrow: ".nxt-btn-1", 
});