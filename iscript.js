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

let items = {}

function addToCart(){
  if (Object.keys(items).length == 0){
    document.querySelector('.def_bsk').innerHTML = ""
  }
  let i = this.dataset.id
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

  let item_add_btns = document.querySelectorAll('.add_item')
  for (let item_add_btn of item_add_btns){
    item_add_btn.addEventListener('click', itemAdd)
  }
  
  this.classList.add(`buyness_active`, `buyness_active_${i}`)
  this.disabled = !this.disabled
  this.innerHTML = 'В корзине'

  localStorage.setItem('items', JSON.stringify(items));
}



function itemDel(){
  if (items[this.dataset.id]['number'] != 1){
    items[this.dataset.id]['number'] -= 1;
    document.querySelector(`.bsk_item_${this.dataset.id} p`).innerHTML = `${items[this.dataset.id]['name']}, Цена: ${items[this.dataset.id]['price']}, Количество: ${items[this.dataset.id]['number']}`;
  }
  else{
    if (Object.keys(items).length == 1){
      document.querySelector('.def_bsk').innerHTML = "<p>Здесь пока ничего нет</p>"
    }
    buyness_btn_enable = document.querySelector(`.buyness_active_${this.dataset.id}`)
    buyness_btn_enable.classList.remove(`buyness_active`, `buyness_active_${this.dataset.id}`)
    buyness_btn_enable.disabled = 0
    buyness_btn_enable.innerHTML = 'Добавить'
    delete items[this.dataset.id]
    document.querySelector(`.bsk_item_${this.dataset.id}`).remove()
  }
  localStorage.setItem('items', JSON.stringify(items));
}

function itemAdd(){
  items[this.dataset.id]['number'] += 1;
  document.querySelector(`.bsk_item_${this.dataset.id} p`).innerHTML = `${items[this.dataset.id]['name']}, Цена: ${items[this.dataset.id]['price']}, Количество: ${items[this.dataset.id]['number']}`;
}

bsk = document.getElementById('basket')
bsk.addEventListener('click', Basket)

function Basket(){
  if(document.getElementById("back").classList != 'back'){
     let infob = document.getElementById(`${document.querySelector('.main_info_on').id}`)
     infob.classList.remove('main_info_on');
     document.querySelector('.main_bsk').classList.add('main_bsk_on')
     this.disabled = !this.disabled
  }
  else{
    document.getElementById("back").classList.add('back_on');
     document.querySelector('.main_bsk').classList.add('main_bsk_on')
     document.body.style.overflowY = 'hidden';
     this.disabled = !this.disabled
  }
}

bsk_close = document.getElementById('basket_close')
bsk_close.addEventListener('click', Basket_close)

function Basket_close(){
  document.querySelector('.main_bsk').classList.remove('main_bsk_on')
  document.getElementById("back").classList.remove('back_on');
  document.body.style.overflowY = 'visible';
  bsk.disabled = 0
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