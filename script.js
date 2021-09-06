var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//having issues with this function. getting an error
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
    })
    //function to convert the am/pm format to a 24hr clock. Separates the number from the am/pm label, makes the code not need to recognize am/pm difference
    function timeCoversion(time){
       
        var number = time.substring(0, time.length -2);
        var amPm = time.substring(time.length -2);
        var newTime = parseInt(number); 
        if (amPm === "am") {
            return newTime;
        
        } else if (amPm ==="pm" && newTime ===12) {
            return newTime;
        } else {
            return newTime + 12; 
        }

    }
    //hour blocks change color depending on if past, present, future of current time. 
    function timeTracker() {

        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var id = $(this).attr("id")
           var blockTime = timeCoversion(id);
            console.log(timeNow);
            console.log(blockTime);
           if (blockTime < timeNow) {
               $(this).addClass("past");
               $(this).removeClass("future");
               $(this).removeClass("present");
               
           }

           else if (blockTime === timeNow) {
               $(this).removeClass("past");
               $(this).removeClass("future");
               $(this).addClass("present");
            }

            else {
               $(this).removeClass("past");
               $(this).addClass("future");
               $(this).removeClass("present");
            }
        })
    }
    //stores text input for hour blocks
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
    $("#6pm .description").val(localStorage.getItem("6pm"));

    timeTracker();

})