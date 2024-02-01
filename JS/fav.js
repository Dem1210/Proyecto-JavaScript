let productos_Favoritos = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
let contador = 0;
let alimentos = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "alimento";
})
let arena = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "arena";
})
let camas = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "camas";
})
let juguetes = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "juguetes";
})
let vitaminas = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "vtn";
})
let rascador = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "rascador";
})
let ropayaccesorios = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "ropaacs";
})
let cepillos = productos_Favoritos.filter((producto)=>{
    return producto.categoria === "cepillos";
})

alimentos.map((alimento)=>{
    if(contador === 0){
        document.getElementById("alimentos_fav_localStorage").innerHTML +=`
            <div class="flex flex-col w-[260px] justify-center items-center text-black text-[14px] mb-[4px] border-solid border-[1px] border-black rounded-xl p-[8px] hover:scale-90">
                <img class="w-[60px]" src="${alimento.img}">
                <p>${alimento.nombre}-$ ${alimento.precio}</p>
                <p> cantidad: ${contador} </p>
            </div>
            `
            contador++;
    } else{
        
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