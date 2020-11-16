let arrayItemName =["Bikini","Short","Short Grapes","Short Snail","Sun Bundle","Dark Mind","White Inversion","Brown Bundle","Glass Ban","Glass Ban V2","Glass Ban Red","Glass Circule Ban","Beach Glass","Short Men","T-Shirt Sun"];
let arrayInfo =["$55","$100","$49.00","$55.00","$40.00","$88.00","$99.99","$87.00","$88.00","$99.99","$90.00","$100.00","$85.00","$110.00","$590.00"];
let contenedor = document.getElementById("contenedor1");

let arrayImagenes=[];

window.onload = function(){
/*CICLO PARA RECUPERAR IMAGENES FACIL XD*/
for(var i=0; i<arrayInfo.length; i++){
    var one = "Imagenes/images/Shop";
    var two = i+1;
    var three =".png";
   arrayImagenes[i] = one + two + three;
   console.log(arrayImagenes[i]);
}


let xd;
let f = `${xd}`;





for(var i=0; i<arrayInfo.length;i++){
    

        xd = `<div class="card">
        <img src="${arrayImagenes[i]}">
        <h4>${arrayItemName[i]}</h4>
        <p>${arrayInfo[i]}</p>
        <button type="click" class="myButton" onclick="almacenarDatos(${i})">Add to car</button>
        </div>`;
       
        if(i<arrayInfo.length){
                f = f +`${xd}`;
        }
        
}

 contenedor.innerHTML =  `${f}`;
}


  

function almacenarDatos(posicion){

        let productosTotales = localStorage.getItem('productoTotales');
        productosTotales = parseInt(productosTotales);

        if(productosTotales){
                localStorage.setItem('productoTotales', productosTotales+1);
        } else {
                localStorage.setItem('productoTotales', 1);
        }

        producto = Array(
            {
                nombre : arrayItemName[posicion],
                precio : arrayInfo[posicion],
                imagen : arrayImagenes[posicion]
            })
            
           

            localStorage.setItem('productos', JSON.stringify(producto));
            alert("Producto Agregado al carrito.")
            location.href="shopcar.html";
           
           
            /*datosFinales(producto);*/
    }


function datosFinales(producto){
                let carrito = localStorage.getItem('productoscarro');
                carrito = JSON.parse(carrito);

                if(carrito != null) {
                        if(carrito[producto.nombre] == undefined){
                                carrito = {
                                        ...carrito,
                                        [producto.name] : producto
                                }
                        }

                        
                }
                console.log("my cart items are ", carrito);
                
                        

        
        let itemcarrito = {
          [producto.nombre] : producto
                }

        localStorage.setItem('productoscarro', JSON.stringify(itemcarrito));
    }