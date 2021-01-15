'use strict';

console.log('hello universe');

//write 5 "yes or no" questions. Must accept yes or no or y or n IN ANY CASE 

var userName = prompt('Hello, what is your name?');
alert('Hello ' +userName + ', nice to meet you.');

var quetion1 = prompt("Do I have a middle name?").toLowerCase();

if(question1 === 'yes' || question1 === 'y'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var quetion2 = prompt("Do I drive a sedan?").toLowerCase();

if(question2 === 'yes' || question1 === 'y'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var quetion3 = prompt("Do I have a dog?").toLowerCase();

if(question3 === 'yes' || question1 === 'y'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var quetion4 = prompt("Do I have a cat?").toLowerCase();

if(question4 === 'yes' || question1 === 'y'){
 // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var quetion5 = prompt("Do I have children?").toLowerCase();

if(question5 === 'no' || question1 === 'n'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)