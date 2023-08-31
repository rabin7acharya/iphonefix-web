$(document).ready(function () {
  //   $("button").click(function () {
  //     alert("jQuery is working!");
  //   });
  $(".fa-bars").click(function () {
    $(".ham-menu").slideToggle();
  });

  $(".fa-xmark").click(function () {
    $(".ham-menu").slideToggle();
  });

  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");

    var tabIndex = $(this).index();
    $(".content").removeClass("active");
    $(".content:eq(" + tabIndex + ")").addClass("active");
  });

  // Set the initial active tab and content
  $(".tab:first").addClass("active");
  $(".content:first").addClass("active");

  //   const slideContainer = $(".slider");
  //   const slides = slideContainer.find(".slide");
  //   const leftBtn = $(".left-btn");
  //   const rightBtn = $(".right-btn");

  //   let currentIndex = 0;

  //   // Function to go to the next slide
  //   function goToNextSlide() {
  //     slides.eq(currentIndex).removeClass("active");
  //     currentIndex = (currentIndex + 1) % slides.length;
  //     slides.eq(currentIndex).addClass("active");
  //   }

  //   // Function to go to the previous slide
  //   function goToPreviousSlide() {
  //     slides.eq(currentIndex).removeClass("active");
  //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  //     slides.eq(currentIndex).addClass("active");
  //   }

  //   // Attach click event handlers to navigation buttons
  //   leftBtn.click(goToPreviousSlide);
  //   rightBtn.click(goToNextSlide);

  //tabbed pane
  //   $(".tab").click(function () {
  //     $(".tab").removeClass("active");
  //     $(this).addClass("active");

  //     var tabIndex = $(this).index();
  //     $(".content").removeClass("active");
  //     $(".content:eq(" + tabIndex + ")").addClass("active");
  //   });

  //   // Set the initial active tab and content
  //   $(".tab:first").addClass("active");
  //   $(".content:first").addClass("active");
});
