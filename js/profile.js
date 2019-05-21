/* eslint-env browser */
/* eslint-disable no-console */

// Open box to add new event
function openAddEventBox() {
    
    var profileContainer = document.querySelector('.profile-container');
    profileContainer.innerHTML += `
    <div class="add-event-box">
        <input id="add-event-description" type="text" placeholder="Description">
        <input id="add-event-location" type="text" placeholder="Location">
        <input id="add-event-day" type="text" placeholder="Day of Week">
        <input id="add-event-start" type="time" placeholder="Start Time">
        <input id="add-event-end" type="time" placeholder="End Time">
        <button id="add-event-button">Add Event</button>
    </div>
    `;
}

document.querySelector('.create-new-event').onclick = openAddEventBox;






/* Actually add the event once user has entered all data

    ***ASSUMING PERFECTLY FORMATTED INPUTS (e.g. One of the weekdays correctly spelled 
    for "Day of Week", only events starting and ending on the hour)**** 
    
*/
function addEvent() {

    // ul container offset to position event element on calendar relative to ul
    var ulOffset = document.querySelector('.schedule_time ul').getBoundingClientRect()['top']-15;
    
    // Collect event details
    var eventDescription = $('#add-event-description').val();
    var eventLocation = $('#add-event-location').val();
    var eventDay = $('#add-event-day').val();
    var eventStart = $('#add-event-start').val();
    var eventEnd = $('#add-event-end').val();

    
    // Variables to store coordinates of the event element to place it properly on calendar
    var eventElementL;
    var eventElementR;
    var eventElementTop;
    var eventElementBottom;
    var eventElementHeight;
    
    
    
    // Create map of day elements and their coordinates on screen
    var days = $('.calendar_day ul').children();
    var dayToCoord = {'Monday': "", 
                      'Tuesday': "", 
                      'Wednesday': "", 
                      'Thursday': "", 
                      'Friday': ""};
    
    // Go through day elements and update map with proper coordinates
    for (day of days) {
        var dayName = day.children[0].innerHTML;
        dayToCoord[dayName] = day.getBoundingClientRect();        
    }
    
    
    
    
    // Set the new event's left/right to the left/right property of the corresponding day
    eventElementL = dayToCoord[eventDay]['left'];
    eventElementR = dayToCoord[eventDay]['right'];
        
    
    
    // Create map of time slot elements and their coordinates on screen 
    var timeSlots = $('.schedule_time ul').children();
    var timeToCoord = {'08:00': "", 
                       '09:00': "", 
                       '10:00': "", 
                       '11:00': "", 
                       '12:00': "", 
                       '13:00': "", 
                       '14:00': "", 
                       '15:00': "", 
                       '16:00': "", 
                       '17:00': "", 
                       '18:00': "", 
                       '19:00': "", 
                       '20:00': "", 
                       '21:00': "", 
                       '22:00': ""};
    
    // Go through time slot elements and update map with proper coordinates
    for (var timeSlot of timeSlots) {
        var time = timeSlot.children[0].innerHTML;
        timeToCoord[time] = timeSlot.getBoundingClientRect();
    }

    
    // Set the new event's top, bottom, height to start & end at the correct lines on calendar
    eventElementTop = timeToCoord[eventStart]['bottom'] - (timeToCoord[eventStart]['height'] / 2) - ulOffset;
    eventElementBottom = timeToCoord[eventEnd]['top'] + (timeToCoord[eventEnd]['height'] / 2) - ulOffset;
    eventElementHeight = eventElementBottom - eventElementTop;

    
    // Create the new element
    var eventElement = 
        `<div class="event-element" style="top:${eventElementTop};bottom:${eventElementBottom};left:${eventElementL};right:${eventElementR};width:77px;height:${eventElementHeight};z-index:10;font-size:10px;position:absolute;background-color:purple;">
            <a style="float:right;margin-right:3px;color:white;text-decoration:underline;" class="remove-event-link">x</a>
            <span class="event-element-description">${eventDescription}</span>
            <span class="event-element-location">${eventLocation}</span>
        </div>`;
    
    // Insert the newly created element
    document.querySelector('.schedule_time ul').insertAdjacentHTML("beforebegin", eventElement);      
    
    //Reset Input Fields
    $('#add-event-description').val("");
    $('#add-event-location').val("");
    $('#add-event-day').val("");
    $('#add-event-start').val("");
    $('#add-event-end').val("");
    
    
}

$(document).ready(function() {
   $(document).on("click", "#add-event-button", addEvent);
});






/* Add ability to remove an event that is on the calendar */
$(document).ready(function() {
   $(document).on("click", ".remove-event-link", function () {
       console.log("removed!");
       $(this).parent(".event-element").remove();  
   });
});











