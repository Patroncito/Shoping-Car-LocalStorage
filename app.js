window.onload = function(){

    const form = document.getElementById("form");
    const username = document.getElementById('user');
    const password = document.getElementById('password');
    const email = document.getElementById('correo');
    let usuarios;
    form.addEventListener('submit',function(event){
            event.preventDefault();
            
             usuarioss = Array(
            {
                usuario : username.value,
                correo : email.value,
                contrasena :password.value
            })
            
            localStorage.setItem('user', JSON.stringify(usuarioss));
            alert("Cuenta creada satisfactoriamente, inicia sesion para continuar.")
            location.href="login.html";
            console.log(usuarioss);

            

            });

           

}
 

