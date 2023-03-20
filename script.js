let count = 10;
const  countdown = document.getElementById("count");
const  countdownInterval = setInterval(function() {
    if (count >= 0) {
        countdown.innerHTML =  + count + " seconds" + " reload";
        count--;
    }
}, 1000);
