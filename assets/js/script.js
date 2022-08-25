var dateDisplayE1 = $('#date-display');
var textDisplayE1 = $('text-display');
var textDataE1 = $('$text-data')
var blockTime = $('time-block')

function displayDate() {
    var todayDate = moment().format('ddd, MMM Do YYYY');
    dateDisplayE1.text(todayDate);
}

// function printTextData(text) {
//     var 
// }

function saveDataFormSubmit(event) {
    event.preventDefault();

  var text = textDataE1.val().trim()
    console.log("Appointment Added to localstorage")
  
  printTextData(text);
  }


    function timeTracker() {
        var present = moment().hour();
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < present) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === present) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        }
    
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
    $("#hour18 .description").val(localStorage.getItem("hour18"));

saveData.on('submit', saveDataFormSubmit);
textDataE1.on('click', save);
    timeTracker();
    // $('.saveBtn').on('click', storeData);

