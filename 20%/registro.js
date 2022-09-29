function verificarPasswords() {
 
    contraseña = document.getElementById('contraseña');
    confirmarcontraseña = document.getElementById('confirmarcontraseña');
    Nombre = document.getElementById('Nombre');
  
    correoelectronico = document.getElementById('correoelectronico');
 
}
// las constraseñas no coinciden
if (contraseña.value != confirmarcontraseña.value) {
 
    //  las constraseñas no coinciden mostramos un mensaje
    document.getElementById("error").classList.add("mostrar");
}
 
else {
 
    //  las contraseñas coinciden ocultamos el mensaje de error
    document.getElementById("error").classList.remove("mostrar");
 
    // Mostramos un mensaje mencionando que la Contraseña es correcta
    document.getElementById("ok").classList.remove("ocultar");
 
    // Desabilitamos el botón de login
    document.getElementById("login").disabled = true;
 
    // Refrescamos la página (Simulación de envío del formulario)
    setTimeout(function() {
    location.reload();
    }, 3000);

}

function guardarlocarstorage(Nombre, contraseña, correoelectronico, confirmarcontraseña, ){
    localStorage.setItem('Nombre', Nombre);
    localStorage.setItem('contraseña', contraseña);
    localStorage.setItem('correoelectronico', correoelectronico);
    
    localStorage.setItem('confirmarcontraseña', confirmarcontraseña);
    listaData()
}

function listaData(){
    let Nombre = localStorage.getItem('Nombre');
    let contraseña = localStorage.getItem('contraseña');
    let confirmarcontraseña = localStorage.getItem('confirmarcontraseña');
  
    let correoelectronico = localStorage.getItem('correoelectronico');
    swal(contraseña);
    swal(correoelectronico);
    swal(confirmarcontraseña);
    swal(Nombre);
    
}
