
const secs = document.querySelector('.timer__seconds');
const mins = document.querySelector('.timer__minutes');
const start = document.querySelector('.start');

let timer = 0;
let timerInterval;

function countdownTimer() {
    sound.play();
    timerInterval = setInterval(function () {
        timer += 1 / 60;
      let secsVal = Math.floor(timer) - Math.floor(timer/60) * 60;
       let minsVal = Math.floor(timer/60);
       
        secs.innerHTML = secsVal < 10 ? "0" + secVal.toString() : secsVal;
        mins.innerHTML = minsVal < 10 ? "0" + minsVal.toString() : minsVal;
        
    }, 1000/60);
    

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


