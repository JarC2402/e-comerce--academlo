const items = [
    {
        id: 1,
        amount: 1,
        nombre: 'monitor',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        precio: 200,
        stock: 10,
    },
    
    {
        id: 2,
        amount: 1,
        nombre: 'silla',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        precio: 300,
        stock: 10,
    },

    {
        id: 3,
        amount: 1,
        nombre: 'microfono',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        precio: 100,
        stock: 10,
    },
]


// esta es la logica para abrir y cerrar la seccion del carrito
const windowCar = document.querySelector('.windowCar')
const iconCar = document.querySelector('.bx-cart-download')
const itemArea = document.querySelector('.itemArea')
const btnClose = document.querySelector('.bx-x')
const resumeArea = document.querySelector('.resumeArea')

iconCar.addEventListener('click', (e) => {
    windowCar.classList.toggle('windowCar__show')
    
})

btnClose.addEventListener('click', (e) => {
    windowCar.classList.toggle('windowCar__show')
})

// asi pinto lo que hay en la pag principal
const productos = document.querySelector('.productos')

function printProductos (){
    let htmlproductos = '';

items.forEach(({nombre, id, stock, precio, amount}) => {
    htmlproductos += `
    <div class="monitor">
     <h2>${nombre} </h2> 
     <p class="card_stock">Stock${stock}</p>
     <p class="card_price">Price= $${precio}</p>
     <input class="addToCar" type="button" id="${id}" value="Agregar al carrito">
    </div>
    
    `;

})
productos.innerHTML = htmlproductos;
}

printProductos();


// logica para agregar productos al carro


let pushCar = [];
function printItems (){

let html = '';

pushCar.forEach(({nombre, id, stock, precio, amount}) => {
    html += `
    <article id="${id}" class="card">
  <img src="" alt="" class="card_image">
  <h2 class="card_title">${nombre}</h2>
  <p class="card_stock">Stock ${stock - amount} | $${precio}</p>
  <p class="card_subtotal">Subtotal= $${precio * amount}</p>
  <input id="${id}" type="button" class="btn btn-rest" value="-" >
  <p class="contenText" id="${id}" >${amount}</p>
  <input id="${id}" type="button" class="btn btn-add" value="+" >
  <input id="${id}" type="button" class="btn btn-delete" value="Elimnar" >
 </article>
    `;

})
itemArea.innerHTML = html;
} 

printItems()

arrayResume = [];


productos.addEventListener('click', function (e) {
    if (e.target.classList.contains('addToCar')){
       const productId = ( Number(e.target.id));  
    
       const dontRepeat = pushCar.find((test) => test.id == productId )
       if (dontRepeat) return alert('este producto ya esta en el carrito') // con esto evito que se repita el articulo en el carrito
    
       const test = items.find(test => test.id == productId)
       pushCar.push(test)        
    }
   
    
    
   printItems();
    } )


// con esto eliminas un articulo del carro
    itemArea.addEventListener('click', function (e) { 
          
  
    if (e.target.classList.contains('btn-delete')) {
        const productId = ( Number(e.target.id)); 
    
        const deleteCar = pushCar.filter(test => test.id != productId)        
        pushCar = deleteCar;    
    }
   
    printItems();
    })

    
    
//  esta es la lagica para modificar cantidad por productos

itemArea.addEventListener('click', (e) => {
    const item = document.querySelectorAll ('.contenText');

    const productId = ( Number(e.target.id)); // productId te da los ids de los elementos dentro de la ventana shop donde le hagas click
    let arrayId = [];  // arrayId te da los ides de los productos que esten en el carro
     for (let i = 0; i < pushCar.length; i++) {         
        arrayId.push(pushCar[i].id) 
         } 

     let ubicacion = (arrayId.indexOf(productId))
     if (e.target.value == '-') pushCar[ubicacion].amount = pushCar[ubicacion].amount - 1;
        
    if (pushCar[ubicacion].amount >= items[ubicacion].stock) {return(alert('We do not have enough in stock'))
    }else{if (e.target.value == '+') {
        pushCar[ubicacion].amount = pushCar[ubicacion].amount + 1
        
    }
    };
    
    
    // asi hago que al disminuir la cantidad de un producto a 0 se elimine del carro
    if (pushCar[ubicacion].amount === 0){
        const deleteCar = pushCar.filter(test => test.id != productId)        
        pushCar = deleteCar;  
    }
    
    printItems();
})

// logica para imprimir en el area de resume
function printResume () {
    const allPage = document.querySelector('body')
    allPage.addEventListener('click', (e) => {
        htmlResume = '';
        subTotalArray = []
        amountArray = []
        testing = [];
        for (let i = 0; i < pushCar.length; i++) {
            subTotalArray.push(pushCar[i].amount * pushCar[i].precio);
            amountArray.push(pushCar[i].amount)
            testing.push(pushCar[i].id )          
        }    
        
              

        let totalPrice = subTotalArray.reduce((anterior, actual)=> {
            return anterior + actual;
        });
        

        let totalamount = amountArray.reduce((anterior, actual)=> {
            return anterior + actual;
        });   
        
   
        htmlResume = `
        <h2>Hello World</h2>
        <p class="card_allItems">${totalamount} items</p>
        <p class="card_total">$ ${totalPrice}</p>
        <input id="" type="button" class="btn btn-Checkout" value="Checkout" >
        <input id="" type="button" class="btn btn-confirm" value="Confirm" >  
        `
        resumeArea.innerHTML =  htmlResume;

        let itemsId = [];
           for (let i = 0; i < items.length; i++) {
            itemsId.push(items[i].id)
           }
      
        if (e.target.classList.contains('btn-Checkout')){
            for (let i = 0; i < testing.length; i++) {
              let  ubicacion = itemsId.indexOf(testing[i]);

              items[ubicacion].stock =  (items[ubicacion].stock - amountArray[i]) 

              
              printProductos();    
            }
        }
      })
}

printResume();

resumeArea.addEventListener('click', (e) => {
if (e.target.classList.contains('btn-confirm')) {

     for (let i = 0; i < items.length; i++) {
       let itemsId = (items[i].id)

       const deleteCar = pushCar.filter(test => test.id != itemsId)        
    pushCar = deleteCar;
       } 
}
printItems();
})

resumeArea.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-confirm')) {
        htmlResume = `
        <h2>Hello World</h2>
        <p class="card_allItems">0 items</p>
        <p class="card_total">$ 0</p>
        <input id="" type="button" class="btn btn-Checkout" value="Checkout" >
        <input id="" type="button" class="btn btn-confirm" value="Confirm" >  
        `
        resumeArea.innerHTML =  htmlResume;

    }
    })
     

  



/*

puntos clave para ver en la clase de brayan :

--(CRUD: para modificar un objeto de usarios o productos por ejemplo - despues de la primera hora aprox) : https://us02web.zoom.us/rec/play/DVIDh3IaqsCGzb4ZiQoBqvoWhcgYXaSrTZVkZezgT4Bn-jMHPdEG4NJuAnVnMvOEmnre7qg5Q83GUqe3.gcc1iyCkH95jMGfE?continueMode=true&_x_zm_rtaid=9Xc0WbhmQDuj-uaqAw0FAg.1669371247901.9722271d91165519f7f32f46baccddea&_x_zm_rhtaid=946
pass: dRtV!Ai4 
-- forEach a la hora 1 https://us02web.zoom.us/rec/play/NLuwBF5zzjG_AHQIQ7d4v-V4AWSZkK8QAHMaLGbjf-iKI8UWIgCFO9zrUoYDCvTIQKS1qkczu_eBpGvU.H1R_KELeTTJ--0AW?continueMode=true&_x_zm_rtaid=Tg69IMXsQYWLpUDvVdOlGw.1669382663169.ab16f6b761d250276cacfe57f9a886a8&_x_zm_rhtaid=836
passs: 0$o1W=X4

*/