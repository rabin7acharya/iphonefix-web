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

  $(".mega-dropdown-wrapper").hover(
    function () {
      //change its sibling's css
      $(this).siblings().css("background-color", "#081c15");
      $(this).siblings().css("color", "#fff");
    },

    function () {
      // Reset the sibling's CSS when the mouse leaves
      $(this).siblings().css("background-color", "initial");
      $(this).siblings().css("color", "initial");
    }
  );
});
