window.addEventListener('load',init)

//Globals
let time=6;
let score=0;
let isPlaying;
//DoM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const seconds = document.querySelector('#seconds');
const scoreDisplay = document.querySelector('#score');
const messageDisplay = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
 
const words = [
    'xoxo',
    'bible',
    'lucy',
    'scary',
    'frightened',
    'object',
    'kit kat',
    'cloths',
    'pages',
    'sweet',
    'veronica',
    'lost',
    'wire',
    'ankitha',
    'diary',
    'lamb',
    'scale',
    'photo',
    'Food',
    'Medicine',
    'Chart',
    'Chandler',
    'geology',
    'phone',
    'keyboard',
    'Calculator',
    'Laptop',
    'Wifi',
    'Jithin',
    'Gokul',
    'Amalash'

];
 //initialize game
 function init()
 {
     
     showWord(words);
     wordInput.addEventListener('input',startMatch);
     setInterval(countdown,1000);
     setInterval(checkStatus, 50);
 }
 function showWord(words)
 {
     const randIndex = Math.floor(Math.random() * words.length);
     currentWord.innerHTML = words[randIndex];
 }
 function startMatch()
 {
    if(matchWords())
    {
     isPlaying = true;
     time=6;
     showWord(words);
     wordInput.value='';
     score++;
 }
 if(score===-1)
 {
     scoreDisplay.innerHTML=0;
 }
 else
 {
     scoreDisplay.innerHTML=score;
 }
scoreDisplay.innerHTML=score;
}
 function matchWords()
 {
     if(wordInput.value===currentWord.innerHTML)
     {
         message.innerHTML='correct!!!!'
         return true;
     }
     else{
      message.innerHTML='INCORRECT'
      return false;
     }

    }


 function countdown(){
     if(time > 0)
     {
         time--;
     }
     else if (time===0)
     {
         isPlaying=false;
        
     }
     timeDisplay.innerHTML=time;
 }
 function checkStatus()
 {
     if(!isPlaying &&time===0)
     {
         message.innerHTML = 'Game Over!!!!';
         score=-1;
     }
 }