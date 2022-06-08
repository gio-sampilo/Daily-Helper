
// Used moment to generate clock tracking month day and year
$("#currentDay").text(moment().format('dddd, MMM Do YYYY'));

// Confirms document is ready upon load
$(document).ready(function () {

//Save button for items
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //Sets local storage items
        localStorage.setItem(time, text);
    })


//Confirms time and sets corresponding container background
    function keepTrack() {
        var currentTime = moment().hour();


        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            
            if (timeBlock < currentTime) {
                // $(this).removeClass("future");
                // $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock > currentTime) {
                // $(this).removeClass("past");
                // $(this).removeClass("future");
                $(this).addClass("future");
            }
            else {
                // $(this).removeClass("present");
                // $(this).removeClass("past");
                $(this).addClass("present");

            }
        })
    }

    //Getting item from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));

    keepTrack();

})

