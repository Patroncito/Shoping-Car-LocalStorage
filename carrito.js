let contenedor = document.getElementById("contenedor1");
let articulosGuardados = localStorage.getItem("productos");
let labelTotal = document.getElementById('infototal');
articulosGuardados = JSON.parse(articulosGuardados);


window.onload = function(){
    console.log(articulosGuardados);
    cargarPaginaCarrito();

}

function cargarPaginaCarrito(){

    if(contenedor && articulosGuardados != null){
        contenedor.innerHTML = ` <div class="contenedor_tarjeta">
        <a href="http://www.google.com">
            <figure id="tarjeta">
                <img src="${articulosGuardados[0].imagen}" class="frontal" alt="">
                <figcaption class="trasera">
                    <h2 class="titulo">${articulosGuardados[0].nombre}</h2>
                    <hr>
                    <p>Este articulo no cuenta con informacion o descripcion detallada, sin embargo si esta en estea pagina, es de alta calidad :)</p>
                    
                    <h2>${articulosGuardados[0].precio}</h2>
                </figcaption>
            </figure>
        </a>
   
    
    `
    } else {
        alert("No hay articulos en el  carrito, agrege alguno. Saludos :)")
        location.href="shop.html";
            console.log("Se redirecciono al usuario a la tienda");
    }

  


   /*TOTAL DE LA COMPRA */
   labelTotal.innerHTML = `<i class="fas fa-money-check-alt"> TOTAL : ${articulosGuardados[0].precio}</i> <br>`


}