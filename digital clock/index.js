const digitalClock = document.querySelector('.digital-clock');

setInterval(() => {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let meridian = "AM";

    if(hours > 11)
    {
        hours = hours - 12;
        meridian = "PM";
    }

    hours < 10 ? hours = "0" + hours : hours = hours;
    minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds = seconds;

    digitalClock.textContent = hours + ":" + minutes + ":" + seconds + " " + meridian;

}, 1000);







