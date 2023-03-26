// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeEl = document.getElementById('currentDay');
var currentDay = dayjs();
var currentHour = dayjs().format('H');

var hour9El = document.getElementById('9');
var hour10El = document.getElementById('10');
var hour11El = document.getElementById('11');
var hour12El = document.getElementById('12');
var hour13El = document.getElementById('13');
var hour14El = document.getElementById('14');
var hour15El = document.getElementById('15');
var hour16El = document.getElementById('16');
var hour17El = document.getElementById('17');
var arrayDayHours = [hour9El, hour10El, hour11El, hour12El, hour13El,
  hour14El, hour15El, hour16El, hour17El]

var hour9 = parseInt(hour9El.id);

// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })

function saveTaskDescription() {
  var timeBlock = this.parentElement;
  var timeSlotId = timeBlock.id;
  var taskDescription = timeBlock.children[1].value;
  localStorage.setItem(timeSlotId, taskDescription);
};

$(document).ready(function () {

  timeEl.textContent = currentDay.format('dddd, MMMM D, YYYY');

  console.log(currentDay);
  console.log(currentHour);

  for (i = 0; i < arrayDayHours.length; i++) {
    var taskTimeBlock = arrayDayHours[i];
    setTaskDescriptionForTimeBlock(taskTimeBlock);
    if (taskTimeBlock.id === currentHour) {
      $(taskTimeBlock).addClass("present");
      console.log("present time works")
    } else if (parseInt(taskTimeBlock.id) < currentHour) {
      console.log('it works');
      $(taskTimeBlock).addClass("past");
    } else {
      $(taskTimeBlock).addClass("future");
    }
  }

  function setTaskDescriptionForTimeBlock(taskTimeBlock) {

    var taskDescription = localStorage.getItem(taskTimeBlock.id);
    var taskTextArea = taskTimeBlock.children[1];
    taskTextArea.textContent = taskDescription;
  }

  $(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

  });

  document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', saveTaskDescription)
  });

  // function () {
  //   // localStorage.setItem("this.id", "this.firstChildElement.textContent")
  //   localStorage.setItem(this.id, this.children[1]);
  // })

});