let productos_Carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

let alimentos = productos_Carrito.filter((producto)=>{
    return producto.categoria === "alimento";
})
let arena = productos_Carrito.filter((producto)=>{
    return producto.categoria === "arena";
})
let camas = productos_Carrito.filter((producto)=>{
    return producto.categoria === "camas";
})
let juguetes = productos_Carrito.filter((producto)=>{
    return producto.categoria === "juguetes";
})
let vitaminas = productos_Carrito.filter((producto)=>{
    return producto.categoria === "vtn";
})
let rascador = productos_Carrito.filter((producto)=>{
    return producto.categoria === "rascador";
})
let ropayaccesorios = productos_Carrito.filter((producto)=>{
    return producto.categoria === "ropaacs";
})
let cepillos = productos_Carrito.filter((producto)=>{
    return producto.categoria === "cepillos";
})

alimentos.map((alimento)=>{
    document.getElementById("alimento_LocalStorage").innerHTML += `
    <img src="${alimento.img}">
    <p> - ${alimento.nombre} - Precio: $${alimento.precio}</p>
    `
})
arena.map((arenas)=>{
    document.getElementById("arena_LocalStorage").innerHTML += `
    <img src="${arenas.img}">
    <p> - ${arenas.nombre} - Precio: $${arenas.precio}</p>
    `
})
camas.map((cama)=>{
    document.getElementById("camas_LocalStorage").innerHTML += `
    <img src="${cama.img}">
    <p> - ${cama.nombre} - Precio: $${cama.precio}</p>
    `
})
juguetes.map((juguete)=>{
    document.getElementById("juguetes_LocalStorage").innerHTML += `
    <img src="${juguete.img}">
    <p> - ${juguete.nombre} - Precio: $${juguete.precio}</p>
    `
})
vitaminas.map((vtn)=>{
    document.getElementById("vitaminas_LocalStorage").innerHTML += `
    <img src="${vtn.img}">
    <p> - ${vtn.nombre} - Precio: $${vtn.precio}</p>
    `
})
rascador.map((rasc)=>{
    document.getElementById("rascadores_LocalStorage").innerHTML += `
    <img src="${rasc.img}">
    <p> - ${rasc.nombre} - Precio: $${rasc.precio}</p>
    `
})
ropayaccesorios.map((ropay)=>{
    document.getElementById("ropa_LocalStorage").innerHTML += `
    <img src="${ropay.img}">
    <p> - ${ropay.nombre} - Precio: $${ropay.precio}</p>
    `
})
cepillos.map((cepi)=>{
    document.getElementById("cepillos_LocalStorage").innerHTML += `
    <img src="${cepi.img}">
    <p> - ${cepi.nombre} - Precio: $${cepi.precio}</p>
    `
})