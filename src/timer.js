
const hour = document.querySelector('.timer__hours');
const mins = document.querySelector('.timer__minutes');
const secs = document.querySelector('.timer__seconds');
const start = document.querySelector('.start');

let timer = 0;
let timerInterval;

function countdownTimer() {
    sound.play();
    timerInterval = setInterval(function () {
        timer += 1 / 60;
        secsVal = Math.floor((timer - Math.floor(timer)) * 100);
        minsVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
        hourVal = Math.floor(timer / 60);
        secs.innerHTML = secsVal < 10 ? "0" + secVal.toString() : secsVal;
        mins.innerHTML = mins < 10 ? "0" + mins.toString() : mins;
        hour.innerHTML = hourVal < 10 ? "0" + hourVal.toString() : hourVal;
    }, 1000);
    

    function stop() {
        clearInterval(timerInterval);
    }
}    


export const getStart = start.addEventListener("click", event => {
    sound.play();
    event.preventDefault();
    countdownTimer();
    
});



let sound = new Howl({
    src: ["./src/sound/sound.mp3"],
});


