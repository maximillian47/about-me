'use strict';

console.log('hello universe');

//write 5 "yes or no" questions. Must accept yes or no or y or n IN ANY CASE 

var userName = prompt('Hello, what is your name?');
alert('Hello ' +userName + ', nice to meet you.');

var question1 = prompt("Do I have a middle name?").toLowerCase();

if(question1 === 'yes' || question1 === 'y'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var question2 = prompt("Do I drive a sedan?").toLowerCase();

if(question2 === 'yes' || question1 === 'y'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var question3 = prompt("Do I have a dog?").toLowerCase();

if(question3 === 'yes' || question1 === 'y'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var question4 = prompt("Do I have a cat?").toLowerCase();

if(question4 === 'yes' || question1 === 'y'){
 // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)

var question5 = prompt("Do I have children?").toLowerCase();

if(question5 === 'no' || question1 === 'n'){
  // console.log('good');
  alert('correct');
} else(
  alert('incorrect')
)