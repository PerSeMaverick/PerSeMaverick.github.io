// const a = 5;
// const b = 56;
// let myName ='nico';

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(myName + a);

// myName = 'nicolas';

// console.log(myName);
// ===============================================
// const a = true;
// const b = false;
// const amIFat = null;
// let somthing;
// console.log(a);
// console.log(b);
// console.log(somthing, amIFat);

// ======================list==========================
// const days =['mon', 'Tue', 'Wed', 'Thu', 'fri', 'sat'];

// // get item from array
// console.log(days);

// // add item to array
// days.push('sun');
// console.log(days);
// ====================================================
// const player = {
//     name: 'nico',
//     point: 10,
//     fat: true,
// };

// console.log(player);
// player.lastName = 'nicolas';
// player.point = player.point + 15;
// console.log(player);
// console.log(player.name);
// ====================================================
// function sayHi(a,b) {
//     console.log('Hi my name is ',a,'and i am ',b, 'years old');
// }

// sayHi('nico', 19)
// sayHi('nicolas', 23)
// sayHi('flynn', 24)
// sayHi('minsu', 35)

// function calcu(a,b) {
//     console.log(a + b);
//     console.log(a * b);
//     console.log(a / b);
//     console.log(a % b);
// }

// calcu(1345,467)
// calcu(2,34576)
// calcu(234,75)
// calcu(34,89)

// const player = {
//     name: 'nico',
//     sayHello: function(a) {
//         console.log('Hi my name is ',a)
//     },
// };

// console.log(player.name);
// player.sayHello('flynn');

// const calculator = {
//     add: function(a, b) {
//         console.log(a + b)
//     },
//     minus: function(a, b) {
//         console.log(a - b)
//     },
//     div: function(a, b) {
//         console.log(a / b)
//     },
//     pow: function(a, b) {
//         console.log(a ** b)
//     },
// };

// calculator.add(1,2)
// calculator.minus(1,2)
// calculator.div(1,2)
// calculator.pow(1,2)

// const age = parseInt(prompt('how old r u?'));

// if (isNaN(age) || age < 0) {
//     console.log('please write a real positive number');
// }
// else if(age === 100){
//     console.log('wow u r wise');
// }
// else if(79 < age){
//     console.log('u have to exercise, dont drink');
// }
// else if(age < 18 || age > 65){
//     console.log('u can not drink');
// }
// else if(65 >= age && age >= 18){
//     console.log('u can drink');
// }

// const h1 = document.querySelector('div.hello h1');

// function titleClickHandle() {
//     const clickedClass = 'clicked';
//     h1.classList.toggle(clickedClass);
//     // if(h1.classList.contains(clickedClass)){
//     //     h1.classList.remove(clickedClass);
//     // } else {
//     // h1.classList.add(clickedClass);
//     // }
// }

// h1.addEventListener('click', titleClickHandle);

// function titleClickHandle() {

//     const currentColor = h1.style.color;
//     let newColor;

//     if (currentColor === 'blue') {
//         newColor = '#d08e90';
//     }
//     else {
//         newColor = 'blue';
//     }
//     h1.style.color = newColor;
// }

// console.log(h1);
// console.dir(h1);
// function mouseEnterHandlr() {
//     h1.innerText = 'mouse is here!';
// }

// function mouseLeaveHandlr() {
//     h1.innerText = 'mouse left...';
// }

// function windowResizeHandler() {
//     document.body.style.backgroundColor = '#d08e90';
// }

// function windowCopyHandler() {
//     alert('Copier!!!!!!!')
// }

// function windowOfflineHandler() {
//     alert('Offline, wifi unavailable')
// }

// function windowOnlineHandler() {
//     alert('Online, wifi available')
// }

// h1.addEventListener('mouseenter', mouseEnterHandlr);
// h1.addEventListener('mouseleave', mouseLeaveHandlr);

// window.addEventListener('resize', windowResizeHandler);
// window.addEventListener('copy', windowCopyHandler);
// window.addEventListener('offline', windowOfflineHandler);
// window.addEventListener('online', windowOnlineHandler);

// const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const date = new Date();
const hours = date.getHours();

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(player) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  if(hours === 1 || hours === 2 || hours === 0){
    greeting.innerText = `Good Night ${player}`;
  }else if(hours > 21 && hours < 25){
    greeting.innerText = `Good Night ${player}`;
  }else if(hours > 2 && hours < 7){
    greeting.innerText = `Should sleep ${player}!`;
  }else if(hours > 6 && hours < 13){
    greeting.innerText = `Good Morning ${player}!!!`;
  }else if(hours > 12 && hours < 19){
    greeting.innerText = `Good Afternoon ${player}!!!`;
  }else if(hours > 18 && hours < 22){
    greeting.innerText = `Good Evening ${player}!!!`;
  }
}

const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUser);
}
