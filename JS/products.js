

const API = "../Json/productosJASON.json";

let alimentoParaGato = [];
let arenaSanitaria = [];
let camasYCasas = [];
let juguetes = [];
let vitaminas = [];
let rascadores = [];
let ropayaccesorios = [];
let cepillos = [];

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
            
            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = alimento.img;
            imagen.classList.add("w-[200px]", );
            caja.appendChild(imagen);
            caja.appendChild(lista);
            lista.innerHTML = `<p>${alimento.id} - ${alimento.nombre} <br> Precio: $${alimento.precio}</p>`;
            document.getElementById("alimento").appendChild(caja);
            console.log(alimento.nombre)
        })

        arenaSanitaria.map((arena)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = arena.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${arena.id} - ${arena.nombre} <br> Precio: $${arena.precio}</p>`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("arena").appendChild(caja);
            console.log(arena.nombre)
        })

        camasYCasas.map((camas)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = camas.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${camas.id} - ${camas.nombre} <br> Precio: $${camas.precio}</p>`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("CamasYCasas").appendChild(caja);
            console.log(camas.nombre)
        })

        juguetes.map((juguete)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = juguete.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${juguete.id} - ${juguete.nombre} <br> Precio: $${juguete.precio}</p>`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("Juguetes").appendChild(caja);
            console.log(juguete.nombre)
        })

        vitaminas.map((vtn)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = vtn.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${vtn.id} - ${vtn.nombre} <br> Precio: $${vtn.precio}</p>`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("Vitaminas").appendChild(caja);
            console.log(vtn.nombre)
        })

        rascadores.map((rascador)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = rascador.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${rascador.id} - ${rascador.nombre} <br> Precio: $${rascador.precio}</p>`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("Rascadores").appendChild(caja);
            console.log(rascador.nombre)
        })

        ropayaccesorios.map((ropaacs)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = ropaacs.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${ropaacs.id} - ${ropaacs.nombre} <br> Precio: $${ropaacs.precio}`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("RopaYAccesorios").appendChild(caja);
            console.log(ropaacs.nombre)
        })

        cepillos.map((cepi)=>{
            let caja = document.createElement("div");
            let imagen = document.createElement("img");
            let lista = document.createElement("li");

            caja.classList.add("flex", "flex-col", "justify-center", "items-center", "w-full", "h-[400px]", "text-[25px]", "text-center");
            imagen.src = cepi.img;
            imagen.classList.add("w-[200px]", );
            lista.innerHTML = `<p>${cepi.id} - ${cepi.nombre} <br> Precio: $${cepi.precio} </p>`;
            caja.appendChild(imagen);
            caja.appendChild(lista);

            document.getElementById("Cepillos").appendChild(caja);
            console.log(cepi.nombre)
        })
    })
    .catch(error => {
        console.log('Hubo un error:', error);
    });
}

getProducts();

