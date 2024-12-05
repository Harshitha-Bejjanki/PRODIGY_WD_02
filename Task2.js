



let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let lapTimes = [];

const displayElement = document.getElementById('display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');
const lapTimesElement = document.getElementById('lap-times');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        displayTime();
    }, 1000);
}

function pauseStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    pauseStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapTimes = [];
    displayTime();
    lapTimesElement.innerHTML = '';
}

function recordLap() {
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    lapTimes.push(lapTime);
    const lapTimeElement = document.createElement('li');
    lapTimeElement.textContent = `Lap ${lapTimes.length}: ${lapTime}`;
    lapTimesElement.appendChild(lapTimeElement);
}

function displayTime() {
    displayElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(time) {
    return time.toString().padStart(2, '0');
}
