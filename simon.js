let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let btns=["red","yellow","blue","green"];
let h3=document.querySelector("h3");

document.addEventListener("keypress",
    function()
    {
        if(started==false)
            {
                started=true;
                 
               levelUp();
            }
        
        
    }
);

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash")
    },800);
}

function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randInd= Math.floor(Math.random() * 4);
    let randCol= btns[randInd];
    let randBtn= document.querySelector(`.${randCol}`);
    gameseq.push(randCol);
    console.log(gameseq);
    btnFlash(randBtn);
}
 function reset(){
    level=0;
    started=false;
    gameseq=[];
    userseq=[];
    h3.innerText="Press any key to start the game";
 }
function check(ind){
 
 if(gameseq[ind]==userseq[ind]) {
    if(gameseq.length==userseq.length){
       setTimeout(levelUp,1000);
    }
}
    else
    {
        h3.innerText=`Game Over,Your score is ${level} Press any key to reset the game`;
        document.addEventListener("keypress",reset)
           
    }
    
}
function btnPress() {
    let btn=this;
    btnFlash(btn);
    let col=btn.getAttribute("id");
    userseq.push(col);
    console.log(userseq);
    check(userseq.length-1);
}

let allBtn=document.querySelectorAll(".btn")
for(allbtns of allBtn)
    {
        allbtns.addEventListener("click",btnPress);
    }






