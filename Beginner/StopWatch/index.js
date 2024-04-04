
let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(val) {
    // padStart(): takes in a string and allows you to give padding. In this instance, it is giving the extra 0's that will be in front the value is if it still single digit
    return String(val).padStart(2, "0")
}

function setTime() {
    const min = Math.floor(secondsElapsed / 60) 
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(min)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++
    setTime()
}
function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}