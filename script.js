let count = 10;
const  countdown = document.getElementById("countdown");
const  countdownInterval = setInterval(function() {
    if (count > 0) {
        countdown.innerHTML =  + count + " seconds" + " reload";
        count--;
    } else {
        clearInterval(countdownInterval);
        countdown.innerHTML = "reloading";
    }
}, 1000);