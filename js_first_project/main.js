let time = 0;
let scoreA = 0;
let scoreB = 0;

const timerElement = document.getElementById('timerTime');
const scoreAElement = document.getElementById('scoreZoneA');
const scoreBElement = document.getElementById('scoreZoneB');
const startTimerButton = document.getElementById("startTimerButton");
const resetTimerButton = document.getElementById("resetTimerButton");
const resetScoreButton = document.getElementById('resetScoreButton');

function timerIncrement() {
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    // ternary operators (IF minutes lower than 10 THEN "0" + minutes ELSE minutes)
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.innerText = `${minutes}:${seconds}`;
    time ++;
};

startTimerButton.addEventListener('click', function() {
    if (time === 0) {
        time = 1;
        incrementTime = setInterval(timerIncrement, 1000);
    }
});

resetTimerButton.addEventListener('click', function() {
    clearInterval(incrementTime);
    timerElement.innerText = '00:00';
    time = 0;
});

resetScoreButton.addEventListener('click', function(){
    scoreA = 0;
    scoreB = 0;
    scoreAElement.innerText = scoreA;
    scoreBElement.innerText = scoreA;
})

scoreAElement.addEventListener('click', function(){
    scoreA ++;
    scoreAElement.innerText = scoreA ;
});

scoreBElement.addEventListener('click', function(){
    scoreB ++;
    scoreBElement.innerText = scoreB;
});
