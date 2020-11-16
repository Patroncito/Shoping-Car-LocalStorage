window.onload = function(){
    const form = document.getElementById("form");
    const password = document.getElementById('password');
    const email = document.getElementById('correo');
    let usuarios;


    form.addEventListener('submit',function(event){
            event.preventDefault();
            usuarioss = Array(
                {
                    correo : email.value,
                    contrasena :password.value
                })

            let registroUSuarios = JSON.parse(localStorage.getItem('user'));
           
            if(registroUSuarios!= null){

                if((usuarioss[0].correo == registroUSuarios[0].correo) && (usuarioss[0].contrasena == registroUSuarios[0].contrasena)){
                    alert("Login Satisfactorio")
                    location.href="shop.html";
                }else{
                    alert("Datos Incorrectos")
                }
            }


            console.log(registroUSuarios);
            console.log(usuarioss);
            });

           

}
 