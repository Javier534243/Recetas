console.log("hola recetas")

import {recetas} from "./recetas.js"

console.log(recetas)


document.querySelector("#limpiar").addEventListener("click", limpiarReceta)

function hacerReceta() {
    let lista = ""
    for(let i = 0;i < recetas.length;i++) {
        lista += `<div class="tarjeta"><h2>${recetas[i].nombre}</h2> <p>${recetas[i].descripcion}</p> <img src="${recetas[i].imagen}"></img><span>${recetas[i].usuario} </span><span>${recetas[i].nombreUsuario}</span></div>`
    }
    document.querySelector("#div1").innerHTML = lista
}

hacerReceta()

function limpiarReceta() {
    recetas.length = 0
    hacerReceta()
}

//Hacer formulario y crear boton con push sudmint hacer preventdefault