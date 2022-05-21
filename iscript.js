let info_btns = document.querySelectorAll('.info_btn')
for (let info_btn of info_btns){
  info_btn.addEventListener('click', Info)
}

function Info(){
  document.getElementById("back").classList.add('back_on');
  document.getElementById(`main_info_${this.dataset.id}`).classList.add('main_info_on');
  document.body.style.overflowY = 'hidden';
}

let buyness_btns = document.querySelectorAll('.buyness')
for (let buyness_btn of buyness_btns){
  buyness_btn.addEventListener('click', addToCart)
}

items = {}

function addToCart(){
  let i = this.dataset.id
  if (typeof items[i] == "undefined") {
    document.querySelector('.def_bsk').innerHTML = ""
    items[i] = {number: 1, price: this.dataset.price, name: this.dataset.name}
    itm = document.querySelector('.def_bsk');
    let div = document.createElement('div');
    div.className = `bsk_item bsk_item_${i}`;
    div.innerHTML = `<p>${items[i]['name']}, Цена: ${items[i]['price']}, Количество: ${items[i]['number']}</p><button class="del_item" data-id="${i}">Del</button><button class="add_item" data-id="${i}">Add</button>`;
    itm.appendChild(div);

    let item_del_btns = document.querySelectorAll('.del_item')
    for (let item_del_btn of item_del_btns){
      item_del_btn.addEventListener('click', itemDel)
    }
    // let item_del_btns = document.querySelectorAll('.del_item')
    // for (let item_del_btn of item_del_btns){
    //   item_del_btn.addEventListener('click', itemDel)
    // }
  }
  else {
    items[i]['number'] += 1;
    document.querySelector(`.bsk_item_${i} p`).innerHTML = `${items[i]['name']}, Цена: ${items[i]['price']}, Количество: ${items[i]['number']}`;
  }
  localStorage.setItem('items', JSON.stringify(items));
}



function itemDel(){
  if (items[this.dataset.id]['number'] != 1){
    items[this.dataset.id]['number'] -= 1;
    document.querySelector(`.bsk_item_${this.dataset.id} p`).innerHTML = `${items[this.dataset.id]['name']}, Цена: ${items[this.dataset.id]['price']}, Количество: ${items[this.dataset.id]['number']}`;
  }
  else{
    document.querySelector(`.bsk_item_${this.dataset.id}`).remove()
    document.querySelector('.def_bsk').innerHTML = "<p>Basket</p><p>Здесб пока ничего нет</p>"
    items = {}
  }
}

bsk = document.getElementById('basket')
bsk.addEventListener('click', Basket)

function Basket(){
  if(document.getElementById("back").classList != 'back'){
     let infob = document.getElementById(`${document.querySelector('.main_info_on').id}`)
     infob.classList.remove('main_info_on');
     document.querySelector('.main_bsk').classList.add('main_bsk_on')
  }
  else{
    document.getElementById("back").classList.add('back_on');
     document.querySelector('.main_bsk').classList.add('main_bsk_on')
     document.body.style.overflowY = 'hidden';
  }
}

bsk_close = document.getElementById('basket_close')
bsk_close.addEventListener('click', Basket_close)

function Basket_close(){
  document.querySelector('.main_bsk').classList.remove('main_bsk_on')
  document.getElementById("back").classList.remove('back_on');
  document.body.style.overflowY = 'visible';
}

let info_back_btns = document.querySelectorAll('.info_btn_back')
for (let info_back_btn of info_back_btns){
  info_back_btn.addEventListener('click', Info_back)
}

function Info_back(){
    document.getElementById("back").classList.remove('back_on');
    document.getElementById(`main_info_${this.dataset.id}`).classList.remove('main_info_on');
    document.body.style.overflowY = 'visible';
}