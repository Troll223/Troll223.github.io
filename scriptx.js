
//---------------------------------------------------------

//let lis = document.getElementsByClassName('lis1');
//for( item of lis ){
//	item.style.border = '2px solid red';
//	item.style.fontWeight = '1000';
//	item.style.marginBottom = '10px';
//	item.style.background = 'green';
//}

//let elem = document.getElementById('dfd')
//console.log(elem)
//console.log(elem.nodeType)
//console.log(elem.innerHTML)
//console.log(elem.outerHTML)
//console.log(elem.textContent)
//console.log(elem.hidden)
//console.log(elem.parentNode)
//console.log(elem.childNodes)
//console.log(elem.nextSibling)
//console.log(elem.previousSibling)

//---------------------------------------------------------

//let children = elem.childNodes

//for (item of children) {
//	console.log(item)
//}

//let myName = prompt('Enter your name')

//let elems = document.getElementsByTagName('body')
//elems[0].innerHTML = '<h1 style = "color: white">'+myName+'</h1>'

// button.addEventListener('click', clickButton)
// button.removeEventListener('click', clickButton)

//---------------------------------------------------------

// function scrollHandler() {
// 	let cards = document.querySelectorAll('.bloc')

// 	for(let item of cards){

// 		let card1 = item.offsetTop - window.screen.height/2;
// 		let a = window.scrollY;

// 		if (a > card1){
// 			if(item.classList.contains('bloc-left')) {
// 				item.classList.add('bloc-left-new')
// 			}
// 			if(item.classList.contains('bloc-right')) {
// 				item.classList.add('bloc-right-new')
// 			}
// 		}
// 	}
	
// }

// window.addEventListener('scroll', scrollHandler)

//---------------------------------------------------------

// let currentDate = new Date()
// console.log(currentDate)

// let finalDate = new Date(2022,3,1,10)
// console.log(finalDate)

// let diff = finalDate - currentDate
// console.log(diff)
// console.log(Math.floor(diff/1000/60/60/24)) //Days
// console.log(Math.floor(diff/1000/60/60)) //Hours
// console.log(Math.floor(diff/1000/60))  //Mins
// console.log(Math.floor(diff/1000)) //Secounds

//---------------------------------------------------------

// function addZero(number) {
// 	if (number < 10) {
// 		return '0' + number
// 	}
// 	else{
// 		return '' + number
// 	}
// }

// let currentDate = new Date()
// let finalDate = new Date(2022,3,1,10)
// let diff = finalDate - currentDate

// timer = setInterval(function(){
// 	currentDate = new Date()
// 	diff = finalDate-currentDate
// 	let days = Math.floor(diff/1000/60/60/24)
// 	let hours = Math.floor((diff/1000/60/60) % 24)
// 	let minutes = Math.floor((diff/1000/60) % 60)
// 	let secounds = Math.floor((diff/1000) % 60)

// 	document.querySelector('#day').innerHTML = days
// 	document.querySelector('#hour').innerHTML = hours
// 	document.querySelector('#min').innerHTML = addZero(minutes)
// 	document.querySelector('#sec').innerHTML = addZero(secounds)
// }, 0)

// if (diff <= 0){
// 	clearInterval(timer)
// 	alert('Sale is over!!!')
// }


// let a = prompt('write sth...',);

// setTimeout(function(){
// 	let func = Function(a)
// 	func()
// },1000)

// let cart = {
// 	name: "John",
// 	age: 30,

// 	toString(){
// 		return `name: ${this.name}`
// 	}
// };

// delete cart.age;

// //alert(name.age)
// // alert(cart.name)
// // alert(cart['email'])
// alert(cart)

// let a = JSON.stringify(cart)
// localStorage.setItem('cart', a)
// localStorage.getItem('cart')

// let cart1 = JSON.parse(localStorage.getItem('cart'))
// alert(cart1.name)