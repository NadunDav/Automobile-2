// Common JS CODE
function Time() {
    var date = new Date();
    var hour = date.getHours();
    var Min = date.getMinutes();
    var sec = date.getSeconds();
    var period = "AM";
    if (hour == 0) {
        hour = 12;
        period = "AM";
    }

    if (hour == 12) {
        period = "PM";
    }

    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    if (Min < 10) {
        Min = "0" + Min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    var time = hour + ":" + Min + ":" + sec + "-" + period;
    document.getElementById("display").innerHTML = time;
    setTimeout(Time, 1000)
}
Time();