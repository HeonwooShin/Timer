const addHour = document.getElementById('+h'),
    subHour = document.getElementById('-h'),
    addMin = document.getElementById('+m'),
    subMin = document.getElementById('-m'),
    addSec = document.getElementById('+s'),
    subSec = document.getElementById('-s'),

    clock = document.querySelector('h1'),

    init = document.querySelector('.init'),
    start = document.querySelector('.start'),
    stopbtn = document.querySelector('.stop'),

    background = document.querySelector('body');

const sound = new Audio('alarm.mp3');

let hour = 0, min = 0, sec = 0;  

addHour.addEventListener('click', function() {
    if(hour >= 23){
    hour = 0;
    } else {
        hour += 1;
    }
    changeClock();
});
subHour.addEventListener('click', function() {
    if(hour > 0){
        hour -= 1;
    } else {
        hour = 23;
    } 
    changeClock();
});
addMin.addEventListener('click', function() {
    if(min >= 59){
        min = 0;
        } else {
            min += 1;
        }
    changeClock();
});
subMin.addEventListener('click', function() {
    if(min > 0){
        min -= 1;
    } else {
        min = 59;
    }
    changeClock();
});
addSec.addEventListener('click', function() {
    if(sec >= 59){
        sec = 0;
        } else {
            sec += 1;
        }
    changeClock();
});
subSec.addEventListener('click', function() {
    if(sec > 0){
        sec -= 1;
    } else {
        sec = 59;
    }
    changeClock();
});

function changeClock() {
    clock.innerText = `${hour < 10 ? `0${hour}`: hour}:${min < 10 ? `0${min}`: min}:${sec < 10 ? `0${sec}`: sec}`;
}

start.addEventListener('click', function() {
    time = hour*3600 + min*60 + sec;
    background.style.backgroundColor = '#00CDD1';
    
    if (time > 0 & stopbtn.classList.contains('hidden')) {
        
        start.classList.add('hidden');
        stopbtn.classList.remove('hidden');
        
        const Interval = setInterval(timerRun, 1000);
        
            function timerRun() {
                time = time - 1;
                
                
                if (time == 0) {
                    clearInterval(Interval);
                    start.classList.remove('hidden');
                    stopbtn.classList.add('hidden');
                    
                    background.style.backgroundColor = '#E0007C';
                    sound.play()
                }
                
                hour = parseInt(time / 3600);
                min = parseInt((time - hour * 3600) / 60);
                sec = time % 60;
                
                stopbtn.addEventListener('click', function(){
                    clearInterval(Interval);
                    start.classList.remove('hidden');
                    stopbtn.classList.add('hidden');
                })
                
                changeClock();
            }
            
            init.addEventListener('click', function() {
                hour = 0, min = 0, sec = 0;
                clearInterval(Interval);
                changeClock();
                start.classList.remove('hidden');
                stopbtn.classList.add('hidden');
            });
        }
});
