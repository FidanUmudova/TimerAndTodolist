//timer
let timerPart = document.getElementById('timer');
let startButton = document.getElementById('start');
let endButton = document.getElementById('end');
let resetButton = document.getElementById('reset')

let seconds = 0;
let interval;
//start button
startButton.addEventListener('click' , function(){
    if(!interval){
        interval = setInterval(()=>{
            seconds++;
            timerPart.textContent = `${seconds} saniyə`;
        },1000);
    }
})
//stop button
endButton.addEventListener('click', function(){
    clearInterval(interval);
    interval=null;
})
//reset button
resetButton.addEventListener('click',function(){
        clearInterval(interval);
        interval = null;
        seconds = 0;
        timerPart.textContent = '0 saniyə';
})



//todoList
let enterInput = document.getElementById('enter')
let addButton = document.getElementById('add')
let taskList = document.getElementById('addList')

addButton.addEventListener('click',function(){
    if(enterInput.value.trim()!==""){
        let li = document.createElement('li');
        li.textContent = enterInput.value;
        taskList.appendChild(li);
        enterInput.value ="";
    }
})