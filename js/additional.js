$(function(){
var $menu = $("nav").children();
$menu.animate({bottom: "50%"}, 1500);

$("nav ul li").on("mouseover", function(){
  $(this).effect("shake", {times: 2, distance: 5}, 300);
});
// $("nav").children().animate({left: "20%"}, 1000);
// $("nav > ul:nth-child(1)").animate({top: "20%"}, 500);
// $("nav > ul:nth-child(2)").animate({top: "20%"}, 750);
// $("nav > ul:nth-child(3)").animate({top: "20%"}, 1000);
});
