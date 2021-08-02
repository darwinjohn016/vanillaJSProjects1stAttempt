const btns = document.querySelectorAll('.btn-bx button');
const appendSeconds = document.querySelector('.seconds');
const appendMilliSeconds = document.querySelector('.milliseconds');

btns.forEach((elem,index) =>
{
    elem.addEventListener('click', e=>
    {
        if(index === 0) startTimer();
        if(index === 1) stopTimer();
        if(index === 2) resetTimer();
    })
})

let interval = null;
let milliseconds = 0;
let seconds = 0;
let boolean = false;

function startTimer()
{   
    if(boolean === true) return;

    interval = setInterval(() => {
        milliseconds++;
        if(milliseconds === 100) seconds++;
        if(milliseconds >= 100) milliseconds=0;

        milliseconds < 10 ? appendMilliSeconds.textContent = "0" + milliseconds
        : appendMilliSeconds.textContent = milliseconds;

        seconds < 10 ? appendSeconds.textContent = "0" + seconds
        : appendSeconds.textContent = seconds;

    }, 10);

    boolean = true;
}


function stopTimer()
{
    clearInterval(interval);
    boolean = false;
}

function resetTimer()
{
    clearInterval(interval);
    milliSeconds = 0;
    seconds = 0;
    appendMilliSeconds.textContent = "00";
    appendSeconds.textContent = "00";
    boolean = false;
}















