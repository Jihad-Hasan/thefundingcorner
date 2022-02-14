document.querySelector(".ham-menu ").addEventListener('click', function () {
    document.querySelector(".mobile-menu-list").classList.toggle("open");
});

jQuery(function ($) {

    $(".active").css("display", "block");
    $(".accordion-content").css("display", "none");
  
    $(".accordion-title").click(function () {
  
      $(".accordion-title").not(this).removeClass("open");
  
      $(".accordion-title").not(this).next().slideUp(300);
  
      $(this).toggleClass("open");
  
      $(this).next().slideToggle(300);
    });
  });
 
  document.querySelector(".box-description").addEventListener("click",function(){
    document.querySelector(".accordion-body").style.display="block";
  })