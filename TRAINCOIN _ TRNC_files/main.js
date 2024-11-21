// $(".accordion-btn").click(function () {
//      $(this).parents(".faq-card").toggleClass("faq-show");
// });
$(".accordion-btn").on('click', function (e) {
     $(".faq-card.faq-show").removeClass('faq-show');
     $(this).parents('.faq-card').addClass('faq-show');
     e.preventDefault();
});

var swiper = new Swiper(".mySwiper", {
     loop: true,
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },
});


// $(".navbar-toggler").click(function () {
//      setInterval(function () {
//           $('.nav-train').addClass("train-hide")
//      }, 3940);
// });

// $("#cross").click(function () {
//      $('.nav-train').removeClass("train-hide")
// });


let interval = null;

document.querySelector(".navbar-toggler").addEventListener("click", () => {
     interval = setInterval(function () {
          document.querySelector('.nav-train').classList.add("train-hide")
     }, 3940);
})


document.querySelector("#cross").addEventListener("click", () => {
     document.querySelector('.nav-train').classList.remove("train-hide")
     clearInterval(interval)
});
