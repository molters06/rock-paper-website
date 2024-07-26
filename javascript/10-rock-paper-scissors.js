
let score = 
  JSON.parse(localStorage.getItem('score')) ||
  {
    wins : 0,
   loses : 0,
    ties : 0
  };
   
  //updateElement();

let isAutoPlaying = false ; 
let intervalId ;

function autoPlay(){
if(!isAutoPlaying){
  intervalId = setInterval(function() {
    const playerMove= pickcomputerMove();
   playGame(playerMove);

  },1000);
  isAutoPlaying = true;
}else{
     clearInterval(intervalId);
     isAutoPlaying = false; 
}
}


 
function playGame(playerMove)
{
 
  const computerMove =    pickcomputerMove();
  let result = '';
if(playerMove === 'rock')
{
  if(computerMove === 'rock')
  { 
    result = 'Tie' ;
  }        
else if(computerMove === 'paper')
{
  result = 'you lose' ;
}
else if(computerMove === 'scissors')
{
  result  = 'you win' ;
}
}

else if(playerMove === 'paper')
{
  if(computerMove === 'rock')
  { 
    result = 'you win' ;
  }        
else if(computerMove === 'paper')
{
  result = 'Tie' ;
}
else if(computerMove === 'scissors')
{
  result  = 'you lose' ;
}
}


if(playerMove === 'scissors')
{
  if(computerMove === 'rock')
  { 
    result = 'you lose' ;
  }        
else if(computerMove === 'paper')
{
  result = 'you win' ;
}
else if(computerMove === 'scissors')
{
  result  = 'Tie' ;
}
}
 if(result === 'you win')
 {
  score.wins +=1; 
 }
 else if(result === 'you lose')
 {
  score.loses += 1; 
 }
 else if(result === 'Tie')
 {
  score.ties += 1;
 }

 localStorage.setItem('score',JSON.stringify(score) );

 // for result 


 updateElement();
 document.querySelector('.js-result')
  .innerHTML =  result;

  // for moves

  document.querySelector('.js-moves')
  .innerHTML =  `you
 
  
  <img src="thumbnail/${playerMove}-emoji.png" class ="dev1">
   <img src = "thumbnail/${computerMove}-emoji.png" class="dev1">computer  ` ;
 }
  

// for showcasing the scorecard on webpage
function updateElement(){
  document.querySelector('.js-score1').innerHTML = `wins: ${score.wins} , loses: ${score.loses}, ties: ${score.ties}`;


}


  function pickcomputerMove()
  {
     
    const randomNumber = Math.random();

 let computerMove = '';

if(randomNumber > 0 && randomNumber < 1/2 )
{
  computerMove = 'rock';
}
else if(randomNumber >= 1/2 && randomNumber < 2/3 )
{
  computerMove = 'paper' ;
}
else if(randomNumber >= 2/3 && randomNumber < 1 )
{
  computerMove = 'scissors' ;
}
return computerMove;
  }