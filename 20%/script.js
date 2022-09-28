let correoelectronico, contraseña;

let formulario = document.getElementById('form-register')

formulario.addeventlistener('submit',(e)=>{
    console.log('hola');
    e.preventDefault();
    leerdatos()
})

function leerdatos(){
    correo=document.getElementById('correo').Value;
    contraseña = document.getElementById('contraseña').Value;
    validardata (correo,contraseña)
    guardarlocarstorage(correo,contraseña)
}

function validardata (contraseña,correo){
    if(contraseña.length==0 || correo.length==0){
        alert('ERROR')
            Swal("Error de informacion",
            "ups...",
            "Error");
    }
}

functionlistadata(){
    let correoUs = localStorage.getItem('correo');
    let contraseñaUs = localStorage.getItem('contraseña');
}