// var set = document.getElementById("setTimer");
// var start = document.getElementById("start");
// var stop = document.getElementById("stop");
// var reset = document.getElementById("reset");

var time_left;
var paused = false;
var countdown;



function setTimer() {
    var days = parseInt(document.getElementById("daysIn").value, 10) || 0;
    var hours = parseInt(document.getElementById("hoursIn").value, 10) || 0;
    var mins = parseInt(document.getElementById("minsIn").value, 10) || 0;
    var secs = parseInt(document.getElementById("secsIn").value, 10) || 0;

    time_left = secs + (mins * 60) + (hours * 3600) + (days * 86400);

    display(time_left);
}

function display(seconds)
{
    var days = Math.floor(seconds/86400);
    var hours = Math.floor((seconds % 86400)/3600);
    var mins = Math.floor((seconds % 3600)/60);
    var secs = Math.floor(seconds % 60);
    
    document.getElementById("days").textContent = String(days).padStart(2,'0');
    document.getElementById("hours").textContent = String(hours).padStart(2,'0');
    document.getElementById("mins").textContent = String(mins).padStart(2,'0');
    document.getElementById("secs").textContent = String(secs).padStart(2,'0');
}

function start() {
    
    if(time_left == undefined)
        setTimer();

    paused = false;

    if(countdown) //&& !paused
        return;

    countdown = setInterval(() => 
    {
        if(time_left <= 0)
        {
            clearInterval(countdown);
            countdown = null;
            return;
        }
        if(! paused)
        {
            time_left--;
            display(time_left);
        }
    }, 1000)     
}
/*function start() {
    if(!countdown)
    {
        paused = false;
        countdown = setInterval(() => 
        {
            if(time_left > 0 && !paused)
            {
                time_left--;
                display(time_left);
            }
            else
            {
                clearInterval(countdown);
                countdown = null;
                return;
            }
        }, 1000)
    } 
}*/

function stop() {
    paused = true;
}

function reset() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    time_left = 0;
    display(time_left);
}