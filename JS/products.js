

const API = "../Json/productosJASON.json";

let alimentoParaGato = [];
let arenaSanitaria = [];
let camasYCasas = [];
let juguetes = [];
let vitaminas = [];
let rascadores = [];
let ropayaccesorios = [];
let cepillos = [];

let contadorAlimento = 0;
let contadorArena = 1;
let contadorCamas = 1;
let contadorJuguetes = 1;
let contadorVitaminas = 1;
let contadorRascadores = 1;
let contadorAccesorios = 1;
let contadorCepillos = 1;
export async function getProducts(){
    await fetch(API)

    .then(response => response.json())

    .then((data) => {
        data.Alimento_Para_Gatos.map((alimento)=>{
            alimentoParaGato.push(alimento);
        })
        data.Arena_Sanitaria.map((arena)=>{
            arenaSanitaria.push(arena);
        })
        data.Camas_y_Casas.map((casas)=>{
            camasYCasas.push(casas);
        })
        data.Juguetes.map((juguete)=>{
            juguetes.push(juguete);
        })
        data.Vitaminas.map((vitamina)=>{
            vitaminas.push(vitamina);
        })
        data.Rascadores.map((rascadore)=>{
            rascadores.push(rascadore);
        })
        data.Ropa_y_Accesorios.map((ropayacc)=>{
            ropayaccesorios.push(ropayacc)
        })
        data.Cepillos.map((cepillo)=>{
            cepillos.push(cepillo);
        })
    })
    .then(()=>{
        alimentoParaGato.map((alimento)=>{ 
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");
            
            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = alimento.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${alimento.id} - ${alimento.nombre} - Precio: $${alimento.precio}</p>`;
            botones.innerHTML = `<svg id="alimento-car-${contadorAlimento}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class=" cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="alimento-fav-${contadorAlimento}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]", "cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);
            document.getElementById("alimento").appendChild(caja);

            document.getElementById(`alimento-car-${contadorAlimento}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:alimento.img, id: alimento.id, nombre: alimento.nombre, precio: alimento.precio, categoria:"alimento"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            

            document.getElementById(`alimento-fav-${contadorAlimento}`).addEventListener("click", ()=>{
                let favoritosActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritosActual = [...favoritosActual, {img:alimento.img, id: alimento.id, nombre: alimento.nombre, precio: alimento.precio, categoria:"alimento"}];
                localStorage.setItem("favorito", JSON.stringify(favoritosActual));
            })
            contadorAlimento++;
        })

        arenaSanitaria.map((arena)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = arena.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${arena.id} - ${arena.nombre} <br> Precio: $${arena.precio}</p>`;
            botones.innerHTML = `<svg id="arena-car-${contadorArena}"class="hover:scale-125" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="arena-fav-${contadorArena}" class="hover:scale-125" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]", "cursor-pointer"),"cursor-pointer";
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("arena").appendChild(caja);
            
            document.getElementById(`arena-car-${contadorArena}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:arena.img, id: arena.id, nombre: arena.nombre, precio: arena.precio, categoria:"arena"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            

            document.getElementById(`arena-fav-${contadorArena}`).addEventListener("click", ()=>{
                let favoritosActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritosActual = [...favoritosActual, {img:arena.img, id: arena.id, nombre: arena.nombre, precio: arena.precio, categoria:"arena"}];
                localStorage.setItem("favorito", JSON.stringify(favoritosActual));
            })
            contadorArena++;
        })

        camasYCasas.map((camas)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = camas.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${camas.id} - ${camas.nombre} <br> Precio: $${camas.precio}</p>`;
            botones.innerHTML = `<svg id="camas-car-${contadorCamas}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="camas-fav-${contadorCamas}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]","cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("CamasYCasas").appendChild(caja);
            
            document.getElementById(`camas-car-${contadorCamas}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:camas.img, id: camas.id, nombre: camas.nombre, precio: camas.precio, categoria:"camas"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            
            document.getElementById(`camas-fav-${contadorCamas}`).addEventListener("click", ()=>{
                let favoritosActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritosActual = [...favoritosActual, {img:camas.img, id: camas.id, nombre: camas.nombre, precio: camas.precio, categoria:"camas"}];
                localStorage.setItem("favorito",JSON.stringify(favoritosActual));
            })
            contadorCamas++;
        })

        juguetes.map((juguete)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = juguete.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${juguete.id} - ${juguete.nombre} <br> Precio: $${juguete.precio}</p>`;
            botones.innerHTML = `<svg id="juguetes-car-${contadorJuguetes}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="juguetes-fav-${contadorJuguetes}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]","cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("Juguetes").appendChild(caja);
            
            document.getElementById(`juguetes-car-${contadorJuguetes}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:juguete.img, id: juguete.id, nombre: juguete.nombre, precio: juguete.precio, categoria:"juguetes"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })

            document.getElementById(`juguetes-fav-${contadorJuguetes}`).addEventListener("click", ()=>{
                let favoritoActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritoActual = [...favoritoActual, {img:juguete.img, id: juguete.id, nombre: juguete.nombre, precio: juguete.precio, categoria:"juguetes"}];
                localStorage.setItem("favorito",JSON.stringify(favoritoActual));
            })
            contadorJuguetes++;
        })

        vitaminas.map((vtn)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = vtn.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${vtn.id} - ${vtn.nombre} <br> Precio: $${vtn.precio}</p>`;
            botones.innerHTML = `<svg id="vitaminas-car-${contadorVitaminas}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="vitaminas-fav-${contadorVitaminas}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]","cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("Vitaminas").appendChild(caja);
            
            document.getElementById(`vitaminas-car-${contadorVitaminas}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:vtn.img, id: vtn.id, nombre: vtn.nombre, precio: vtn.precio, categoria:"vtn"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            
            document.getElementById(`vitaminas-fav-${contadorVitaminas}`).addEventListener("click", ()=>{
                let favoritoActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritoActual = [...favoritoActual, {img:vtn.img, id: vtn.id, nombre: vtn.nombre, precio: vtn.precio, categoria:"vtn"}];
                localStorage.setItem("favorito",JSON.stringify(favoritoActual));
            })
            contadorVitaminas++;
        })

        rascadores.map((rascador)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = rascador.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${rascador.id} - ${rascador.nombre} <br> Precio: $${rascador.precio}</p>`;
            botones.innerHTML = `<svg id="rascadores-car-${contadorRascadores}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="rascadores-fav-${contadorRascadores}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]","cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("Rascadores").appendChild(caja);
            
            document.getElementById(`rascadores-car-${contadorRascadores}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:rascador.img, id: rascador.id, nombre: rascador.nombre, precio: rascador.precio, categoria:"rascador"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            
            document.getElementById(`rascadores-fav-${contadorRascadores}`).addEventListener("click", ()=>{
                let favoritoActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritoActual = [...favoritoActual, {img:rascador.img, id: rascador.id, nombre: rascador.nombre, precio: rascador.precio, categoria:"rascador"}];
                localStorage.setItem("favorito",JSON.stringify(favoritoActual));
            })
            contadorRascadores++;
        })

        ropayaccesorios.map((ropaacs)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = ropaacs.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${ropaacs.id} - ${ropaacs.nombre} <br> Precio: $${ropaacs.precio}`;
            botones.innerHTML = `<svg id="accesorios-car-${contadorAccesorios}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="accesorios-fav-${contadorAccesorios}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]","cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("RopaYAccesorios").appendChild(caja);
            
            document.getElementById(`accesorios-car-${contadorAccesorios}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:ropaacs.img, id: ropaacs.id, nombre: ropaacs.nombre, precio: ropaacs.precio, categoria:"ropaacs"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            
            document.getElementById(`accesorios-fav-${contadorAccesorios}`).addEventListener("click", ()=>{
                let favoritoActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritoActual = [...favoritoActual, {img:ropaacs.img, id: ropaacs.id, nombre: ropaacs.nombre, precio: ropaacs.precio, categoria:"ropaacs"}];
                localStorage.setItem("favorito",JSON.stringify(favoritoActual));
            })
            contadorAccesorios++;
        })

        cepillos.map((cepi)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");
            let botones = document.createElement("div");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[500px]", "h-[450px]", "text-[25px]", "text-center", "rounded-lg","border-double","border-2","border-black", "m-[20px]", "bg-[#90a9b765]" );
            imagen.src = cepi.img;
            imagen.classList.add("w-[250px]", "rounded-lg" );
            lista.innerHTML = `<p>${cepi.id} - ${cepi.nombre} <br> Precio: $${cepi.precio} </p>`;
            botones.innerHTML = `<svg id="cepillos-car-${contadorCepillos}" class="hover:scale-125" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g data-name="Layer 30" id="Layer_30"> <path class="cls-1" d="M12.52,13.59,63,13.39l-7.1,28H20.23l-8.86-32H1.25"></path> <circle class="cls-1" cx="23.83" cy="52.17" r="3.92"></circle> <circle class="cls-1" cx="53.1" cy="52.17" r="3.92"></circle> <line class="cls-1" x1="17.65" x2="58.29" y1="32.1" y2="32.1"></line> <line class="cls-1" x1="15" x2="60.7" y1="22.56" y2="22.56"></line> <line class="cls-1" x1="24.15" x2="24.15" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="15.83" x2="15.83" y1="13.54" y2="25.54"></line> <line class="cls-1" x1="32.41" x2="32.41" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="40.66" x2="40.66" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="48.92" x2="48.92" y1="13.54" y2="41.41"></line> <line class="cls-1" x1="57.18" x2="57.18" y1="13.54" y2="36.47"></line> <path class="cls-1" d="M20.23,41.41V45.7a2.55,2.55,0,0,0,2.55,2.55H53.24"></path> </g> </g></svg>
                                <svg id="cepillos-fav-${contadorCepillos}" class="hover:scale-125" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            botones.classList.add("w-[80px]", "h-[60px]", "flex", "flex-row", "gap-[15px]","cursor-pointer")
            caja.appendChild(imagen);
            caja.appendChild(lista);
            caja.appendChild(botones);

            document.getElementById("Cepillos").appendChild(caja);
            
            document.getElementById(`cepillos-car-${contadorCepillos}`).addEventListener("click", ()=>{
                let carritoActual = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
                carritoActual = [...carritoActual, {img:cepi.img, id: cepi.id, nombre: cepi.nombre, precio: cepi.precio, categoria:"cepillos"}];
                localStorage.setItem("carrito",JSON.stringify(carritoActual));
            })
            
            document.getElementById(`cepillos-fav-${contadorCepillos}`).addEventListener("click", ()=>{
                let favoritoActual = localStorage.getItem("favorito") ? JSON.parse(localStorage.getItem("favorito")) : [];
                favoritoActual = [...favoritoActual, {img:cepi.img, id: cepi.id, nombre: cepi.nombre, precio: cepi.precio, categoria:"cepillos"}];
                localStorage.setItem("favorito",JSON.stringify(favoritoActual));
            })
            contadorCepillos++;
        })
    })
    .catch(error => {
        console.log('Hubo un error:', error);
    });
}

getProducts();

