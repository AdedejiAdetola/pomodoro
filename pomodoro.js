var start = document.getElementById("start");
var wk_sec = document.getElementById("wk_sec");
var wk_min = document.getElementById("wk_min");
var brk_min = document.getElementById("brk_min");
var brk_sec = document.getElementById("brk_sec");
var pmd_cycle = document.getElementById("pmd_cycle");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause")



function startButton() {
    if (wk_sec.innerText != 0) {
        wk_sec.innerText--;}
    else if (wk_sec.innerText == 0 && wk_min.innerText != 0) {
        wk_sec.innerText = 59;
        wk_min.innerText--;}
    

    

    if (wk_sec.innerText == 0 && wk_min.innerText == 0) {
        if (brk_sec.innerText == 0 && brk_min.innerText !=0) {
            brk_sec.innerText =59;
            brk_min.innerText--;
        }
        else if (brk_sec != 0) {
            brk_sec.innerText--;
        }
    }


    
    if (brk_sec.innerText == 0 && brk_min.innerText == 0) {
        pmd_cycle.innerText++;
        wk_min.innerText = 25;
        wk_sec.innerText = "00";
        brk_min.innerText = 5;
        brk_sec.innerText = "00";

    }
}

var starter;
start.addEventListener("click", function() {
    if (starter === undefined){
        starter = setInterval(startButton,1000)
    }
    else {
        alert("Time is running");
    }
})

reset.addEventListener("click", function() {
    wk_min.innerText = 25;
    wk_sec.innerText = "00";
    brk_min.innerText = 5;
    brk_sec.innerText = "00";
    pmd_cycle.innerText= 0;
    pauseInterval()
    starter = undefined; 
})

pause.addEventListener("click",function() {
    pauseInterval()
    starter = undefined;
})

function pauseInterval(){
    clearInterval(starter);
}



