const items = [
    {
        id: 1,
        amount: 1,
        name: 'Sweatshirt',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 200,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/97cc04c33fb623827703747d01496782.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    
    {
        id: 2,
        amount: 1,
        name: 'Shirt Gray',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 300,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },

    {
        id: 3,
        amount: 1,
        name: 'Shirt whithe log black',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 100,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/b5f41a80ac22de1af13c5b2ea8a9e3eb.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 4,
        amount: 1,
        name: 'Shirt whithe log red',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 105,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/b304b89f7f2b0e3cdb3673179306b939.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 5,
        amount: 1,
        name: 'SweatShirt black-red',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 109,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/46ac9d39acbd33cee2aadd5b6c230dc0.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 6,
        amount: 1,
        name: 'SweatShirt white-gray',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 104,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/743257c21cea30fa4a39378d32545bf6.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 7,
        amount: 1,
        name: 'Shirt black-white',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 104,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/e33ba02f02bf3f18ba5e0db1a424ba56.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 8,
        amount: 1,
        name: 'SweatShirt white-red',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 104,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/535666bf499a0c508ace882bb0420436.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 9,
        amount: 1,
        name: 'SweatShirt white-red',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 104,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/ee4a165cfdce4d17714bf8a39211746b.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 10,
        amount: 1,
        name: 'Shirt gray-red',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 104,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/a76857819caae151f62fb58e05621acd.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 11,
        amount: 1,
        name: 'SweatShirt redd-white',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 99,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/5fcd378346281f635a2cf71dd0494613.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
    {
        id: 12,
        amount: 1,
        name: 'SweatShirt shirt-red-white',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 104,
        stock: 10,
        images: {
            image1: "https://img.represent.com/uploads/ad9b3e6580cf66d28cbd90314ecdd0a6.jpeg?w=750&q=95&auto=format",
            image2: "https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format"
            }
    },
       
]

// arreglo para el primer item
const firstItem = [
    {
        id: 22,
        amount: 1,
        name: 'The Best Sweatshirt',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 99,
        stock: 10,
        images: {
            "image1": "img/featured1.png",
            "image2": "https://img.represent.com/uploads/78f99aa7a707e0f24763371132ab6668.jpeg?w=750&q=95&auto=format"
            }
        }
]

// asi lo llamas para trabajar con el

// console.log(JSON.parse(userFromlocalStorage))



const windowCar = document.querySelector('.windowCar')
const iconCar = document.querySelector('.bx-cart-download')
const itemArea = document.querySelector('.itemArea')
const btnClose = document.querySelector('.bx-x')
const resumeArea = document.querySelector('.resumeArea')
const firstProduct = document.querySelector('.first__product')
const btnmenu = document.querySelector('.bx-qr')
const menuArea = document.querySelector('.menuShow')
const rediretMenu = document.querySelector('.menu')

// esta es la logica para abrir y cerrar la seccion del carrito
iconCar.addEventListener('click', (e) => {
    windowCar.classList.toggle('windowCar__show')
    
})

btnClose.addEventListener('click', (e) => {
    windowCar.classList.toggle('windowCar__show')
})
// esta es la logica para abrir y cerrar la seccion del Menu
btnmenu.addEventListener('click', (e) => {
    menuArea.classList.toggle('menuShow')    
})

rediretMenu.addEventListener('click', (e) => {
    menuArea.classList.toggle('menuShow')
})


// asi pinto lo que hay en la pag principal
const productos = document.querySelector('.productos')

function printProductos (){
    let htmlproductos = '';

items.forEach(({name, id, stock, price, amount, images}) => {
    htmlproductos += `
    <div class="productos">
     <div class="card_product">
     <img src="${images.image1}" alt="first shirt" class="card_image">
     <i id="${id}" class='bx bx-message-square-add'></i>
      <div class="card_stockAndPrice">
       <p class="card_stock">$ ${price} | </p>
       <p> Stock ${stock}</p>      
      </div>
      <p class="card_name">${name}</p>
     </div>
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

pushCar.forEach(({name, id, stock, price, amount, images}) => {
    html += `
    <div id="${id}" class="card_car">
      <img src="${images.image1}" alt="first shirt" class="card_image">
      <div class="card_info">
        <h2 class="card_title">${name}</h2>
        <p class="card_stock">Stock ${stock - amount} | $${price}</p>
        <p class="card_subtotal">Subtotal= $${price * amount}</p>
        <div class="card_btns">
         <input id="${id}" type="button" class="btn btn-rest" value="-" >
         <p class="contenText" id="${id}" >${amount}</p>
         <input id="${id}" type="button" class="btn btn-add" value="+" >
         <input id="${id}" type="button" class="btn btn-delete" value="Elimnar" >
        </div>
      </div>
    </div>
    `;

})
itemArea.innerHTML = html;
} 

printItems()

arrayResume = [];
// logica para que el primer item se pueda agragar al carro
// firstProduct.addEventListener('click', function (e) {
//     if (e.target.classList.contains('first-btn') ){
//        const productId = (Number(e.target.id));     
    
//        const dontRepeat = pushCar.find((test) => test.id == productId )
//        if (dontRepeat) return alert('este producto ya esta en el carrito') // con esto evito que se repita el articulo en el carrito
    
//        const test = firstItem.find(test => test.id == productId)
//        pushCar.push(test)  
//        Swal.fire('se ha agregado este producto al carrito')      
//     }    
//    printItems();
//     } )

productos.addEventListener('click', function (e) {
    if (e.target.classList.contains('bx-message-square-add')){
       const productId = ( Number(e.target.id));     
    
       const dontRepeat = pushCar.find((test) => test.id == productId )
       if (dontRepeat) return alert('este producto ya esta en el carrito') // con esto evito que se repita el articulo en el carrito
    
       const test = items.find(test => test.id == productId)
       pushCar.push(test)  
       Swal.fire('se ha agregado este producto al carrito')      
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

    
    
//  esta es la logica para modificar cantidad por productos

itemArea.addEventListener('click', (e) => {
    const item = document.querySelectorAll ('.contenText');

    const productId = ( Number(e.target.id)); // productId te da los ids de los elementos dentro de la ventana shop donde le hagas click
    let arrayId = [];  // arrayId te da los ides de los productos que esten en el carro
     for (let i = 0; i < pushCar.length; i++) {         
        arrayId.push(pushCar[i].id) 
         } 

     let ubicacion = (arrayId.indexOf(productId))
     if (e.target.value == '-') pushCar[ubicacion].amount = pushCar[ubicacion].amount - 1;
        
    if (pushCar[ubicacion].amount >= items[ubicacion].stock) {return(Swal.fire('We do not have enough in stock'))
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
            subTotalArray.push(pushCar[i].amount * pushCar[i].price);
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
         <h2>Resume</h2>
        <div class="card_resume">
         <p class="card_allItems">${totalamount} items</p>
         <p class="card_total">$ ${totalPrice}</p>
        </div>
        <div class="btnSell">
        <input id="" type="button" class="btn-Checkout" value="Checkout" >
        </div>         
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
    if (e.target.classList.contains('btn-Checkout')) {
        const confirm = Swal.fire('gracias por su compra')
    }

function laging (){
setTimeout(() => {
     if (confirm != true) {pushCar = []};
     printItems();
     if (confirm != true) {
        htmlResume = `
        <h2>Hello World</h2>
        <p class="card_allItems">0 items</p>
        <p class="card_total">$ 0</p>
        <input id="" type="button" class="btn btn-Checkout" value="Checkout" >          `
        resumeArea.innerHTML =  htmlResume;
    }
}, 1000);
}

laging();
})




/*

puntos clave para ver en la clase de brayan :

--(CRUD: para modificar un objeto de usarios o productos por ejemplo - despues de la primera hora aprox) : https://us02web.zoom.us/rec/play/DVIDh3IaqsCGzb4ZiQoBqvoWhcgYXaSrTZVkZezgT4Bn-jMHPdEG4NJuAnVnMvOEmnre7qg5Q83GUqe3.gcc1iyCkH95jMGfE?continueMode=true&_x_zm_rtaid=9Xc0WbhmQDuj-uaqAw0FAg.1669371247901.9722271d91165519f7f32f46baccddea&_x_zm_rhtaid=946
pass: dRtV!Ai4 
-- forEach a la hora 1 https://us02web.zoom.us/rec/play/NLuwBF5zzjG_AHQIQ7d4v-V4AWSZkK8QAHMaLGbjf-iKI8UWIgCFO9zrUoYDCvTIQKS1qkczu_eBpGvU.H1R_KELeTTJ--0AW?continueMode=true&_x_zm_rtaid=Tg69IMXsQYWLpUDvVdOlGw.1669382663169.ab16f6b761d250276cacfe57f9a886a8&_x_zm_rhtaid=836
passs: 0$o1W=X4


// fetch le indica a nuestta funcion que estamos trabajando con asincronia y nos preparamos para crear una promesa
let items1 = []
function obtenerData (){
    let url = 'https://academlo-api-production.up.railway.app/api/products' 
    fetch(url)
    .then(response => response.json())
    .then((data) => mostrarItems(data))    
    .catch((error) => {console.log(error)})
    
    
    const mostrarItems = (data) => {
       
               for (let i = 0; i < data.length; i++) {
                items1.push(data[i])            
        } 
        console.log(items1)   
    }
}
obtenerData();

// async function obtenerPosts(){
//     try {
//         const respuesta = await fetch(
//             ('https://academlo-api-production.up.railway.app/api')
//         );
//         const json = await respuesta.json()
//         console.log(json);
//     } catch (error){
//         console.log(error);
//     }
// }

// obtenerPosts();
d
*/