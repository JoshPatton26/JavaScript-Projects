const newYears = '1 Jan 2025'

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const seconds = Math.round(((newYearsDate - currentDate) / 1000));
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours/ 24);

    const sec = document.getElementById("seconds")
    sec.textContent = (padStart(seconds % 60))

    const min = document.getElementById("minutes")
    min.textContent = (padStart(minutes % 60))

    const hr = document.getElementById("hours")
    hr.textContent = (padStart(hours % 24))

    const day = document.getElementById("days")
    day.textContent = (days % 365)

    console.log(seconds)
    console.log(minutes)
    console.log(hours)
    console.log(days)
}

function padStart(val) {
    // padStart(): takes in a string and allows you to give padding. In this instance, it is giving the extra 0's that will be in front the value is if it still single digit
    return String(val).padStart(2, "0")
}

countdown();

setInterval(countdown, 1000)