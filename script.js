let countdownDays = 369;
let countdownHours = 23;
let countdownMinutes = 59;
let countdownSeconds = 59;

function updateCountdown() {
    if (countdownDays === 0 && countdownHours === 0 && countdownMinutes === 0 && countdownSeconds === 0) {
        document.querySelector('.countdown-timer').innerHTML = "<h3>Event Started!</h3>";
        return;
    }

   
    document.getElementById("days").innerText = countdownDays.toString().padStart(2, "0");
    document.getElementById("hours").innerText = countdownHours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = countdownMinutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = countdownSeconds.toString().padStart(2, "0");


    countdownSeconds--;
    if (countdownSeconds < 0) {
        countdownSeconds = 59;
        countdownMinutes--;
    }
    if (countdownMinutes < 0) {
        countdownMinutes = 59;
        countdownHours--;
    }
    if (countdownHours < 0) {
        countdownHours = 23;
        countdownDays--;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();