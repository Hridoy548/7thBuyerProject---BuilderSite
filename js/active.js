/* Navbar */
$(document).ready(function(){ 
    $(".extra_for__dropdown").click(function(){
    $(".dropdown_ul").toggleClass("dropdown_ul__blocker");
    $(".dropdown_ul").toggleClass("animate__animated");
    $(".dropdown_ul").toggleClass("animate__backInLeft");
    $(".highhter_li").toggleClass("highhter_li__closer");
  });
});