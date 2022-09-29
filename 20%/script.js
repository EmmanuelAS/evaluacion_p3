let correoelectronico, contraseña;

let formulario = document.getElementById('form-register')

formulario.addeventlistener('submit',(e)=>{
    console.log('hola');
    e.preventDefault();
    leerdatos()
})

function leerdatos(){
    correoelectronico=document.getElementById('correoelectronico').Value;
    contraseña = document.getElementById('contraseña').Value;
    validardata (correoelectronico,contraseña)
    guardarlocarstorage(correoelectronico,contraseña)
}

function validardata (contraseña,correoelectronico){
    if(contraseña.length==0 || correoelectronico.length==0){
        alert('ERROR')
            Swal("Error de informacion",
            "ups...",
            "Error");
    }
}

functionlistadata(){
    let correoelectronico = localStorage.getItem('correoelectronico');
    let contraseña = localStorage.getItem('contraseña');
    Swal(correoelectronico)
    Swal(contraseña)
}