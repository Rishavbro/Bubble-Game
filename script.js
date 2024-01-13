
let div = document.querySelector("#pbtm");
let timer = 60;
let score = 0;
let hitrn = 0;

div.addEventListener("click",function(e) {
console.log(e.target.textContent);
let clickedNumber = Number(e.target.textContent);

if(clickedNumber == hitrn){
    increaseScore();
     removeBubble();
    makeBubble();
   getNewHit();
}
})

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble(){
    for(let i = 1; i <= 168; i++){
        let rn = Math.floor(Math.random()*10);
    let div1 = document.createElement("div");
    div1.classList.add("bubble");
    div.appendChild(div1);
    div1.innerHTML = `${rn}`;
    div1.style.color = "white";

    }
}

function removeBubble(){
    div.innerHTML = "";
}

function runTimer(){
   let timeInterval =  setInterval(function(){
        if(timer > 0){
            timer --;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(timeInterval);
            div.innerHTML = `<h1>Game Over: Your score was ${score} </h1>`;
        }
    },1000)
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

console.log("Hello World");

makeBubble();
runTimer();
getNewHit();



