let productos_Carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

let alimentos = productos_Carrito.filter((producto)=>{
    return producto.categoria === "alimento";

})
console.log(alimentos);

alimentos.map((alimento)=>{
    document.getElementById("alimento_LocalStorage").innerHTML += `
    <img src="${alimento.img}">
    <p> - ${alimento.nombre} - Precio: $${alimento.precio}</p>
    `
})

// document.getElementById("alimento_total").innerText += `${alimentos}`

