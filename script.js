
// function clickButton2(){
//   document.getElementById("info2").classList.add('info_on2');
//   document.body.style.overflowY = 'hidden';
// }

// function clickButton3(){
//   document.getElementById("info3").classList.add('info_on3');
//   document.body.style.overflowY = 'hidden';
// }

// function clickButton4(){
//   document.getElementById("info1").classList.remove('info_on1');
//   document.body.style.overflowY = 'scroll';
// }

// function clickButton5(){
//   document.getElementById("info2").classList.remove('info_on2');
//   document.body.style.overflowY = 'scroll';
// }

// function clickButton6(){
//   document.getElementById("info3").classList.remove('info_on3');
//   document.body.style.overflowY = 'scroll';
// }

// let buys = document.querySelectorAll('.buyness')

// items = {}

// for (let item of buys){
// 	item.addEventListener('click', addToCart)
// }

// function addToCart(){

//   let i = this.parentNode.parentNode.parentNode.parentNode.dataset.name
//   if (typeof items[i] == "undefined") {
//     items[i] = {number: 1, price: this.parentNode.parentNode.querySelector('.price').innerHTML}
//     h = document.querySelectorAll('.bsk_main')
//     for(let item of h){
//       let div = document.createElement('div');
//       div.className = "bsk_item";
//       div.id = `bsk-${this.parentNode.parentNode.parentNode.parentNode.dataset.id}`
//       div.innerHTML = `<p>${i}, ${this.parentNode.parentNode.querySelector('.price').innerHTML}, Количество: 1</p>`;
//       item.appendChild(div);
//     }
//   }
//   else {
//     items[i]['number'] += 1;
//     for (let item of document.querySelectorAll(`#bsk-${this.parentNode.parentNode.parentNode.parentNode.dataset.id}`)){
//        item.innerHTML = `<p>${i}, ${this.parentNode.parentNode.querySelector('.price').innerHTML}, Количество: ${items[i]['number']}</p>`;
//     }
//   }

//   localStorage.setItem('items', JSON.stringify(items));

//   var sum = 0;

//   for (var key in items) {
//       sum += items[key]['number'];
//   };

//   let nums = document.querySelectorAll('.number')

//   for(let item of nums){
//      item.innerHTML = sum
//   }
// }

// for (let item of document.querySelectorAll('.basket')){
//   item.addEventListener('click', openBasket)
// }

// function openBasket(){
//   if (this.classList.contains('bsk_on')){
//     this.parentNode.querySelector('.main_buy').style.display = 'flex'
//     this.parentNode.parentNode.querySelector('.bsk_main').style.display = 'none'
//     this.classList.remove('bsk_on');
//   }
//   else {
//     this.parentNode.querySelector('.main_buy').style.display = 'none'
//     this.parentNode.parentNode.querySelector('.bsk_main').style.display = 'flex'
//     this.classList.add('bsk_on');
//   }
// }