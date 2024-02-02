
let productos_Favoritos_alimento = localStorage.getItem("alimento") ? JSON.parse(localStorage.getItem("alimento")) : [];
let productos_Favoritos_arena = localStorage.getItem("arena") ? JSON.parse(localStorage.getItem("arena")) : [];
let productos_Favoritos_camas = localStorage.getItem("camas") ? JSON.parse(localStorage.getItem("camas")) : [];
let productos_Favoritos_juguetes = localStorage.getItem("juguetes") ? JSON.parse(localStorage.getItem("juguetes")) : [];
let productos_Favoritos_vitaminas = localStorage.getItem("vitaminas") ? JSON.parse(localStorage.getItem("vitaminas")) : [];
let productos_Favoritos_rascadores = localStorage.getItem("rascadores") ? JSON.parse(localStorage.getItem("rascadores")) : [];
let productos_Favoritos_ropayaccesorios = localStorage.getItem("ropaacs") ? JSON.parse(localStorage.getItem("ropaacs")) : [];
let productos_Favoritos_cepillos = localStorage.getItem("cepillos") ? JSON.parse(localStorage.getItem("cepillos")) : [];

let contador = 1;

let alimentos = productos_Favoritos_alimento.filter((producto)=>{
    return producto.categoria === "alimento";
})
let arena = productos_Favoritos_arena.filter((producto)=>{
    return producto.categoria === "arena";
})
let camas = productos_Favoritos_camas.filter((producto)=>{
    return producto.categoria === "camas";
})
let juguetes = productos_Favoritos_juguetes.filter((producto)=>{
    return producto.categoria === "juguetes";
})
let vitaminas = productos_Favoritos_vitaminas.filter((producto)=>{
    return producto.categoria === "vtn";
})
let rascador = productos_Favoritos_rascadores.filter((producto)=>{
    return producto.categoria === "rascador";
})
let ropayaccesorios = productos_Favoritos_ropayaccesorios.filter((producto)=>{
    return producto.categoria === "ropaacs";
})
let cepillos = productos_Favoritos_cepillos.filter((producto)=>{
    return producto.categoria === "cepillos";
})

alimentos.map((alimento)=>{
    let alimProducto = document.getElementById("alimentos_fav_localStorage");

    if(alimProducto){
        return alimProducto.innerHTML += `
        <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
            <img class="w-[60px]" src="${alimento.img}">
            <p>${alimento.nombre}-$ ${alimento.precio}</p>
        </div>
        `
    }else{
        return alert("No hay productos favoritos")
    }
})
arena.map((arenas)=>{
    document.getElementById("arena_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${arenas.img}">
        <p>${arenas.nombre} -$${arenas.precio}</p>
    </div>
    `
})
camas.map((cama)=>{
    document.getElementById("camas_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${cama.img}">
        <p>${cama.nombre} $${cama.precio}</p>
    </div>
    `
})
juguetes.map((juguete)=>{
    document.getElementById("juguetes_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${juguete.img}">
        <p>${juguete.nombre} $${juguete.precio}</p>
    </div>
    `
})
vitaminas.map((vtn)=>{
    document.getElementById("vitaminas_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${vtn.img}">
        <p>${vtn.nombre} $${vtn.precio}</p>
    </div>
    `
})
rascador.map((rasc)=>{
    document.getElementById("rascadores_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${rasc.img}">
        <p>${rasc.nombre} $${rasc.precio}</p>
    </div>
    `
})
ropayaccesorios.map((ropay)=>{
    document.getElementById("ropa_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${ropay.img}">
        <p>${ropay.nombre} $${ropay.precio}</p>
    </div>
    `
})
cepillos.map((cepi)=>{
    document.getElementById("cepillos_fav_localStorage").innerHTML += `
    <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
        <img class="w-[60px]" src="${cepi.img}">
        <p>${cepi.nombre} $${cepi.precio}</p>
    </div>
    `
})


document.getElementById("boton").addEventListener("change",()=>{
    document.getElementById("body_Favorito").classList.toggle("oscuro");
});

// Botones Eliminar
document.getElementById("eliminar_alimento").addEventListener("click",()=>{
    document.getElementById("alimentos_fav_localStorage").innerHTML = "";
    localStorage.removeItem("alimento");
})
document.getElementById("eliminar_arena").addEventListener("click",()=>{
    document.getElementById("arena_fav_localStorage").innerHTML = "";
    localStorage.removeItem("arena");
})
document.getElementById("eliminar_camas").addEventListener("click",()=>{
    document.getElementById("camas_fav_localStorage").innerHTML = "";
    localStorage.removeItem("camas");
})
document.getElementById("eliminar_juguetes").addEventListener("click",()=>{
    document.getElementById("juguetes_fav_localStorage").innerHTML = "";
    localStorage.removeItem("juguetes");
})
document.getElementById("eliminar_vitaminas").addEventListener("click",()=>{
    document.getElementById("vitaminas_fav_localStorage").innerHTML = "";
    localStorage.removeItem("vitaminas");
})
document.getElementById("eliminar_rascador").addEventListener("click",()=>{
    document.getElementById("rascadores_fav_localStorage").innerHTML = "";
    localStorage.removeItem("rascadores");
})
document.getElementById("eliminar_ropa").addEventListener("click",()=>{
    document.getElementById("ropa_fav_localStorage").innerHTML = "";
    localStorage.removeItem("ropaacs");
})
document.getElementById("eliminar_cepillos").addEventListener("click",()=>{
    document.getElementById("cepillos_fav_localStorage").innerHTML = "";
    localStorage.removeItem("cepillos");
})