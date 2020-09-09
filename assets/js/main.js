$(document).ready(function () {
  // Scroll to top
  $(".toTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //   Fixed scroll button
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".toTop").css("display", "block");
    } else {
      $(".toTop").css("display", "none");
    }

    if ($(window).scrollTop() >= 800) {
      $(".flag").addClass("sticky");
    } else {
      $(".flag").removeClass("sticky");
    }
  });

  $(".client__container").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".client .prev",
    nextArrow: ".client .next",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          settings: {
            arrows: false,
          },
        },
      },
    ],
  });

  //NEWS
  $(".news__container").flipster({
    autoplay: 2000,
    loop: true,
    start: "center",
    style: "flat",
    nav: true,
  });

  // $(window).resize(function () {
  //   var width = $(window).width();
  //   if (width < 768) {
  //     $(window).unbind("scroll");
  //     $(".flag").removeClass("sticky");
  //   } else {
  //     // $(".flag").addClass("sticky");
  //     $(window).bind("scroll");
  //     if ($(window).scrollTop() >= 800) {
  //       $(".flag").addClass("sticky");
  //     } else {
  //       $(".flag").removeClass("sticky");
  //     }
  //   }
  // });

  $(".hamburger").change(function () {
    if ($(".category__right").css("display") === "none") {
      $(".category__right").display = "flex";
    } else {
      $(".category__right").display = "none";
    }
  });
});

const hamburger_checkbox = document.getElementById("hamburger");
const cateRight = document.querySelector(".category__right");

hamburger_checkbox.addEventListener("change", function () {
  cateRight.classList.toggle("active");
});
