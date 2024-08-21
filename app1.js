document.addEventListener("keypress",
function(event)
{
    let press=event.code;
    let btn=event.key;
    console.log(btn);
    keyPress(press,btn);

})

function keyPress(key,aud)
{   
    let acces=document.getElementById(key);
    let audio=document.getElementById(aud);
    audio.pause();
    acces.classList.add("pressed");
    setTimeout(function()
    {
        acces.classList.remove("pressed");
        audio.currentTime=0;
        audio.play();
        
    },300);
}