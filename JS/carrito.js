let productos_Carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

let contador = 1;
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
    <div class="flex flex-col text-[13px] w-[220px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${alimento.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${alimento.nombre} </p>
            <p> Precio: $${alimento.precio}</p>
        </div>
    </div>
    `

    document.getElementById("total_LocalStorage_alimento").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${alimento.nombre}</p>
        <p> -$ ${alimento.precio}</p>
    </div>
    `
    function sumarTotalPrecio(){
        let total = 0;
        for(let i = 0; i < alimentos.length; i++){
            total += productos_Carrito[i].precio;
            console.log(productos_Carrito[i].precio)
            document.getElementById("alimento_total").innerHTML = `Alimento:$${total.toFixed(2)}`
            
        }
    }
    sumarTotalPrecio();
})
arena.map((arenas)=>{
    document.getElementById("arena_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[240px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${arenas.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${arenas.nombre} </p>
            <p> Precio: $${arenas.precio}</p>
        </div>
    </div>
    `

    document.getElementById("total_LocalStorage_arena").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${arenas.nombre}</p>
        <p> -$ ${arenas.precio}</p>
    </div>
    `
    function sumarTotalPrecio(){
        let total = 0;
        for(let i = 0; i < arena.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("arena_total").innerHTML = `Arena:$${total.toFixed(2)}`
            
        }
    }
    sumarTotalPrecio();
})
camas.map((cama)=>{
    document.getElementById("camas_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[240px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${cama.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${cama.nombre} </p> 
            <p> Precio: $${cama.precio}</p>
        </div>
    </div>
    `

    document.getElementById("total_LocalStorage_camas").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${cama.nombre}</p>
        <p> -$ ${cama.precio}</p>
    </div>
    `
    function sumarTotal(){
        let total = 0;
        for(let i = 0; i < camas.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("camas_total").innerHTML = `Camas:$${total.toFixed(2)}`
        }
    }
    sumarTotal();
})
juguetes.map((juguete)=>{
    document.getElementById("juguetes_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[240px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${juguete.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${juguete.nombre} </p> 
            <p> Precio: $${juguete.precio}</p>
        </div>
    </div>
    `
    document.getElementById("total_LocalStorage_juguetes").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${juguete.nombre}</p>
        <p> -$ ${juguete.precio}</p>
    </div>
    `
    function sumarTotal(){
        let total = 0;
        for(let i = 0; i < juguetes.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("juguetes_total").innerHTML = `Juguetes:$${total.toFixed(2)}`
        }
    }
    sumarTotal();
})
vitaminas.map((vtn)=>{
    document.getElementById("vitaminas_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[240px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${vtn.img}"> 
        <div class="flex flex-col w-[100%]">
            <p> ${vtn.nombre} <p> 
            <p> Precio: $${vtn.precio}</p>
        </div>
    </div>
    `
    document.getElementById("total_LocalStorage_vitaminas").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${vtn.nombre}</p>
        <p> -$ ${vtn.precio}</p>
    </div>
    `
    function sumarTotal(){
        let total = 0;
        for(let i = 0; i < vitaminas.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("vitaminas_total").innerHTML = `Vitaminas:$${total.toFixed(2)}`
        }
    }
    sumarTotal();

})
rascador.map((rasc)=>{
    document.getElementById("rascadores_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[240px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${rasc.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${rasc.nombre} </p> 
            <p> Precio: $${rasc.precio}</p>
        </div>
    </div>
    `
    document.getElementById("total_LocalStorage_rascadores").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${rasc.nombre}</p>
        <p> -$ ${rasc.precio}</p>
    </div>
    `
    function sumarTotal(){
        let total = 0;
        for(let i = 0; i < rascador.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("rascadores_total").innerHTML = `Rascadores:$${total.toFixed(2)}`
        }
    }
    sumarTotal();

})
ropayaccesorios.map((ropay)=>{
    document.getElementById("ropa_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[230px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${ropay.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${ropay.nombre} </p> 
            <p> Precio: $${ropay.precio}</p>
        </div>
    </div>
    `
    document.getElementById("total_LocalStorage_ropa").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${ropay.nombre}</p>
        <p> -$ ${ropay.precio}</p>
    </div>
    `
    function sumarTotal(){
        let total = 0;
        for(let i = 0; i < ropayaccesorios.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("ropa_y_accesorios_total").innerHTML = `Ropa:$${total.toFixed(2)}`
        }
    }
    sumarTotal();
})
cepillos.map((cepi)=>{
    document.getElementById("cepillos_LocalStorage").innerHTML += `
    <div class="flex flex-col text-[13px] w-[240px] justify-center items-center border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[70px] rounded-xl" src="${cepi.img}">
        <div class="flex flex-col w-[100%]">
            <p> ${cepi.nombre} </p>
            <p> Precio: $${cepi.precio}</p>
        </div
    </div>
    `

    document.getElementById("total_LocalStorage_cepillos").innerHTML += `
    <div class="flex text-black text-[14px]">
        <p> ${cepi.nombre}</p>
        <p> -$ ${cepi.precio}</p>
    </div>
    `
    function sumarTotal(){
        let total = 0;
        for(let i = 0; i < cepillos.length; i++){
            total += productos_Carrito[i].precio;
            document.getElementById("cepillos_total").innerHTML = `Cepillos:$${total.toFixed(2)}`
        }
    }
    sumarTotal();
})

function sumarTotalPrecio(){
    let total = 0;
    for(let i = 0; i < productos_Carrito.length; i++){
        total += productos_Carrito[i].precio;
        document.getElementById("total_Productos").innerHTML = `Total: $${total.toFixed(2)}`
        
    }
}
sumarTotalPrecio();

document.getElementById("boton").addEventListener("change",()=>{
    document.getElementById("body_carrito").classList.toggle("oscuro");
});