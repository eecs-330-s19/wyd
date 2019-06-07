/*global $*/
/* eslint-env browser */
/* eslint-disable no-console */

function showScheduleOverlap() {
    
    var vis = $('.personal-schedule-event').css("visibility");
    
    if (vis==="hidden") {
        $('.personal-schedule-event').css("visibility", "visible");
    } else if (vis==="visible") {
        $('.personal-schedule-event').css("visibility", "hidden");
    }
    
}

document.querySelector('.overlap-button').onclick = showScheduleOverlap;
$('.overlap-button').click(function(){
  $(this).toggleClass('clicked');
});

function showMutualFree() {
    
    var vis = $('.mutual-availability').css("visibility");
    
    if (vis==="hidden") {
        $('.mutual-availability').css("visibility", "visible");
    } else if (vis==="visible") {
        $('.mutual-availability').css("visibility", "hidden");
    }
    
}

document.querySelector('.mutual-button').onclick = showMutualFree;
$('.mutual-button').click(function(){
  $(this).toggleClass('clicked');
});

