//Carrito
const carro = [];

//ARRAY DE PRODUCTOS

const productos = [{ id: 1,  producto: "Blue dice", precio: 1500 },
                {  id: 2,  producto: "Gold dice", precio: 1500 },
                {  id: 3,  producto: "Beholder"  , precio: 500},
                {  id: 4,  producto: "Metal dice" , precio: 3000}];

//hacemos un let de los botones para agregar al carrito

let boton1 = document.getElementById("1")
let boton2 = document.getElementById("2")
let boton3 = document.getElementById("3")
let boton4 = document.getElementById("4")
boton1.onmouseover = () =>{
    console.log("Queres comprar un d20, son buenos");
    boton1.className="btn btn-danger"
}
boton1.onmouseout = () =>{
    boton1.className="btn btn-primary btn-sm btncarrito"
}
boton2.onmouseover = () =>{
    console.log("Queres comprar un d20, son buenos");
    boton2.className="btn btn-danger"
}
boton2.onmouseout = () =>{
    boton2.className="btn btn-primary btn-sm btncarrito"
}
boton3.onmouseover = () =>{
    console.log("Queres comprar esta mini, es genial");
    boton3.className="btn btn-danger"
}
boton3.onmouseout = () =>{
    boton3.className="btn btn-primary btn-sm btncarrito"
}
boton4.onmouseover = () =>{
    console.log("Queres comprar un d20, son buenos");
    boton4.className="btn btn-danger"
}
boton4.onmouseout = () =>{
    boton4.className="btn btn-primary btn-sm btncarrito"
}

boton1.onclick = () => {
    alert("Agregaste Blue dice set al carro");
    carro.push(productos[0]);
    console.log(carro)
}
boton2.onclick = () => {
    alert("Agregaste Gold dice set al carro");
    carro.push(productos[1]);
    console.log(carro)
}
boton3.onclick = () => {
    alert("Agregaste Beholder mini al carro");
    carro.push(productos[2]);
    console.log(carro)
}
boton4.onclick = () => {
    alert("Agregaste Metal dice set al carro");
    carro.push(productos[3]);
    console.log(carro)
}

//almacenar productos en el storage
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
guardarLocal("listaProductos", JSON.stringify(productos));
class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos2.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos2)
producto.sumaIva();
console.log(productos2)