$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $(".cat-showing").fadeToggle();
    $(".cat-hidden").fadeToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

});
