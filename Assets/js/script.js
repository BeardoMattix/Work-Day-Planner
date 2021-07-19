var currentDay = document.querySelector(".currentDay");
var saveButton = document.querySelector("#save");
var description = document.querySelector(".description");

// Display current date and time and increment timer by 1 second.
var update = function () {
  today = moment();
  $("#currentDay").text(today.format("dddd MMM Do YYYY h:mm a"));
};
$(document).ready(function () {
  today = $("#currentDay");
  update();
  setInterval(update);
}, 1000);

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  function timeTracking() {
    //get current number of hours.
    var timeNow = moment().hour();

    // this loops over the time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // Adding CSS styles based on the time indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  // This is how information stored in local storage is accessed. 
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeTracking();
});
