const dayE1=document.getElementById("days");
const hourE1=document.getElementById("hours");
const minE1=document.getElementById("mins");
const secE1=document.getElementById("seconds");

const newYears = "1 Jan 2022";
function countDown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate-currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours=Math.floor(totalSeconds / 3600) % 24;
    const mins=Math.floor(totalSeconds / 60) % 60;
    const seconds =Math.floor(totalSeconds) % 60;
    console.log(days,hours,mins);
    dayE1.innerHTML = days;
    hourE1.innerHTML = formatTime(hours);
    minE1.innerHTML = formatTime(mins);
    secE1.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? "0"+time : time;
}
countDown();
setInterval(countDown,1000);