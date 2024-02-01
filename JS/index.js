/*  ***  Proyecto - Pareja ***

Elaborar una pagina web que contenga 4 secciones

Elaborar una pagina web que contenga 4 secciones

- Home
- Productos
- Carrito
- Favoritos
- About


- La vista de productos debe mostrar una cuadricula 4 x 4 de elementos obtenidos 
desde un archivo JSON que contenga la siguiente informacion por cada producto:

    * Nombre
    * Descripcion
    * Precio
    * Stock

NOTA: El archivo JSON debe contener un total de al menos 32 productos

- La Pagina de carrito debera mostrar los productos que se añadan desde la vista de productos usando almacenamiento del navegador.
- La Pagina de favoritos debera mostrar todos los elementos que se marquen como tal desde la vista de productos o la de carrito.
- La pagina de About debera mostrar informacion de los desarrolladores como: Foto Nombre, Herramientas empleadas, Conocimientos (Lenguajes, Librerias, Frameworks, Herramientas/Softwares )
- Todo el Website debe poder cambiar entre tema claro/oscuro
- Se puede utilizar cualquier libreria o framework para el CSS
- Se pueden utilizar componentes estilizados de la web (https://uiverse.io/)


REQUERIDO:
- Que el sitio sea Mobile y Desktop (2 resoluciones)

OPCIONAL:
- Que el sitio maneje 4 resoluciones distintas (Mobile, Tablet, Desktop, Large Desktop)  */


import { getProducts } from "./products.js";

document.getElementById("boton").addEventListener("change",()=>{
    document.body.classList.toggle("oscuro");
    document.getElementById("home").classList.toggle("oscuro");
    document.getElementById("Prod").classList.toggle("oscuro");
});