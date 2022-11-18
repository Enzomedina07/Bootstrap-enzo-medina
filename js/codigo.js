//Carrito
let carro = JSON.parse(localStorage.getItem("carrito")) || [];
let totalCarrito
let btnCompra = document.getElementById("btncompra")
let cartas = document.getElementById("cartas")
//ARRAY DE PRODUCTOS que saco desde el JSON
let prodJSON=[] //array
//
//
if(carro.lenght !=0){
    console.log("Retrieving Cart")
    dibujarCarrito()
    obtenerproductos();
}

//Funcion para dibujar el carrito viejo
function dibujarCarrito(){
    for(const producto of carro){
        document.getElementById("carrito").innerHTML +=`
    <tr>
        <td>${producto.id}</td>
        <td>${producto.producto}</td>
        <td>${producto.precio}</td>
        <td><button class="btn btn-light" onclick="eliminar(event)">Eliminar</button></td>
        </tr>
    `;
}
    totalCarrito = carro.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let info = document.getElementById("total");
    //agregar carro al storage
    info.innerText="Total amount $: "+totalCarrito
}


//Funcionar para renderizar los productos en DOM
function renderizar(){
    for(const producto of prodJSON){
        cartas.innerHTML += `
        <div class="col">
                <div class="card text-white bg-info mb-3">
                    <img src="${producto.foto}" class="card-img-top" alt="card-grid-image">
                    <div class="card-body">
                    <h5 class="card-title">${producto.producto}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <button class="btn btn-outline-danger btn-sm" id="btn${producto.id}">
                        <p>Add to cart</p>
                    </div>
                </div>
                </div>
        `;
    }

//evento para agregar
    prodJSON.forEach(producto => {
        //asi creamos un evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarCarrito(producto)
        })
    })
}

//funcionar para agregar al carrito
function agregarCarrito(productoComprado){
    carro.push(productoComprado);
    console.table(carro);
    //uso sweet alert para hacer las notificaciones al usuario
    Swal.fire({
        title: productoComprado.nombre,
        text: 'You found this loot in a goblin cave',
        imageUrl: productoComprado.foto,
        imageWidth: 225,
        imageHeight: 300,
        imageAlt: productoComprado.producto,
        showConfirmButton: false,
        timer: 1500
    })
    document.getElementById("carrito").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.producto}</td>
            <td>${productoComprado.precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">Eliminar</button></td>
        </tr>
    `;
    totalCarrito = carro.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let info = document.getElementById("total");
    //agregar carro al storage
    info.innerText="Total amount $: "+totalCarrito
    localStorage.setItem("carrito",JSON.stringify(carro));
}

//Borrar productos del carrito
function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carro.findIndex(producto => producto.id == id);
    console.log(indice)
    //remueve el producto del carro
    carro.splice(indice,1);
    console.table(carro);
    //remueve la fila del carrito
    fila.remove();
    //recalcula el total a pagar
    let preciosAcumulados = carro.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    total.innerText="Total a pagar $: "+preciosAcumulados;
    //lo pasamos al storage
    localStorage.setItem("carrito",JSON.stringify(carro))
}

//Traer productos JSON
async function obtenerproductos(){ //llamar el JSON es un proceso asyncronico
    const URLJSON="../js/productos.json";
    const resp=await fetch(URLJSON); //por eso pongo un wait dps de las respuestas
    const data=await resp.json(); // convierto la respuesta en data
    prodJSON = data; //asigno la data al array de productos que declaramos arriba
    renderizar(); //renderizamos las cartas
}

//Terminar la compra
btnCompra.onclick = () =>{
    if(carro.length==0){
        Swal.fire({
            title: "Empty Cart",
            text: 'Make a death saving throw or buy something',
            icon: 'error',
            showConfirmButton: false,
            timer: 3500
    })
    }else{
        carro = [];
        document.getElementById("carrito").innerHTML="";
        let info = document.getElementById("total");
        info.innerText="Total a pagar $: ";
        Swal.fire({
            title: "You succeeded your skill check",
            text: 'Our wizard will send you an eagle in the next hours with your dices',
            icon: 'success',
            showConfirmButton: false,
            timer: 4500
        })
    //Sacamos el carrito que ya se compro supuestamente
    localStorage.removeItem("carrito");
    }
}


