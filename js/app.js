'use strict';

console.log('hello universe');

//write 5 "yes or no" questions. Must accept yes or no or y or n IN ANY CASE 
var score = 0;
var userName = prompt('Hello, what is your name?');
alert('Hello ' +userName + ', nice to meet you.');



function qOne(){
  var question1 = prompt('Do I have a middle name?').toLowerCase();

  if(question1 === 'no' || question1 === 'n') {
    // console.log('good');
    alert('correct');
    score++;
  } else{
    alert('incorrect');
  }
}
qOne();


function qTwo(){
  var question2 = prompt('Do I drive a sedan?').toLowerCase();

  if(question2 === 'no' || question2 === 'n'){
    // console.log('good');
    alert('correct');
    score++;
  } else{
    alert('incorrect');
  }
}
qTwo();


function qThree(){
  var question3 = prompt('Do I have a dog?').toLowerCase();

  if(question3 === 'yes' || question3 === 'y'){
    // console.log('good');
    alert('correct');
    score++;
  } else{
    alert('incorrect');
  }
}
qThree();


function qFour(){
  var question4 = prompt('Do I have a cat?').toLowerCase();

  if(question4 === 'yes' || question4 === 'y') {
    // console.log('good');
    alert('correct');
    score++;
  } else{
    alert('incorrect');
  }
}
qFour();


function qFive(){
  var question5 = prompt('Do I have children?').toLowerCase();

  if(question5 === 'no' || question5 === 'n'){
    // console.log('good');
    alert('correct');
    score++;
  } else{
    alert('incorrect');
  }
}
qFive();


function qSix(){
  var question6 = prompt('Pick a number between 1 and 20.');
  var triesLeft = 4;
  var rightAnswer = 17;
  var i;
  for (i = 0; i < 5; i++){
    if(question6 === rightAnswer) {
      alert('correct');
      score++;
      break;
    } else if(question6 < rightAnswer){
      alert('wrong, too low, you have'+ triesLeft + ' attempts left.');
    }
    else if(question6 > rightAnswer) {
      alert('wrong, too high, you have'+ triesLeft + ' attempts left.');
    }
    alert('Out of guesses, ${rightAnswer} was the right answer.');
  }
}
qSix();




function qSeven(){
  var question7 = prompt('Pick a number between 1 and 50. There are multiple answers.');
  var multiNum = [5,39,33,26,10];
  var attemptsLeft = 6;

  for (var i = 0; i < 7; i++){
    for(var j = 0; j < 5; j++){
      if(question7 === multiNum[j] && attemptsLeft !== 0){
        score++;
        break;
      } else if(question7 !== multiNum[j] && attemptsLeft !== 0){
        attemptsLeft--;
        alert('wrong, you have ' + attemptsLeft +' attempts left.');
      }
    }
    alert('correct numbers are: ');
    for (var h = 0; h < 5; h++){
      alert(multiNum[h]);
    }
    alert('you answered ' + score + ' out of 7 questions correctly.');
  }
}
qSeven();


alert('Alright, ' +userName + ' , til next time.');
