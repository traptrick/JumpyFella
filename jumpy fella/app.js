var player = document.querySelector("#player");
var hurdle = document.querySelector("#hurdle");
var score = document.querySelector(".score");
var count=0;

var jumpSound = new Audio;
jumpSound.src = "audio/jumpsound.mp3";
jumpSound.volume = 0.1;

var gameover = new Audio;
gameover.src = "audio/gameover.mp3";

var theme = new Audio;
theme.src = "audio/theme.mp3";


document.addEventListener('keydown' , function(event){
    if(event.keyCode == 32)
    {  
        if(player.classList != "animation"){
             player.classList.add("animation");
        }
       setTimeout(function(){
           player.classList.remove("animation");
       },500)

       count+=10;
       score.innerHTML = "Score : "+ count;

       theme.play();
       jumpSound.play();
    }

});


var gameOver = setInterval(() => {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var hurdleLeft = parseInt(window.getComputedStyle(hurdle).getPropertyValue("left"));

    if( hurdleLeft<50 && hurdleLeft>0 && playerTop>=370 )
    {  
            theme.pause();
            gameover.play();

        alert("Game Over, Your SCORE was " + count + ",  Refresh the Browser by pressing F5 to play again");
    }

}, 10);
