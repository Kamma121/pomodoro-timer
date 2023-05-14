const startBtn = document.getElementById("startTimerBtn");
const time = document.querySelector(".time");
const status = document.querySelector(".status");

function updateTimer() {
    let minutes = Number(document.getElementById("timerInput").value);
    let seconds = 0;

    let appLogic = new Promise((resolve) => {
        status.innerHTML = "Focus time";
        let focusId = setInterval(() => {
            if (minutes || seconds) {
                seconds--;
                if (seconds < 0) {
                    minutes--;
                    seconds = 59;
                }
                time.innerHTML = `${minutes}:${pad(seconds)}`;
            } else {
                clearInterval(focusId);
                resolve("Break time");
            }
        }, 1000);
    });
    appLogic.then((res) => {
        status.innerHTML = res.toString();
        minutes = Number(document.getElementById("breakInput").value);
        seconds = 0;
        let breakId = setInterval(() => {
            if (minutes || seconds) {
                seconds--;
                if (seconds < 0) {
                    minutes--;
                    seconds = 59;
                }
                time.innerHTML = `${minutes}:${pad(seconds)}`;
            } else {
                clearInterval(breakId);
                status.innerHTML = "Session ended! Congratulations"
            }
        }, 1000);
    });


}


function pad(value) {
    return value.toString().padStart(2, "0");
}

startBtn.addEventListener("click", updateTimer);