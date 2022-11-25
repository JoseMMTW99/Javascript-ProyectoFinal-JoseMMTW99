
//INICIO REGISTRO USUARIOS

let arreglo_de_usuarios = [];

function datos_usuario(){
    let nombre_usuario = document.getElementById("nombre_usuario");
    let apellido_usuario = document.getElementById("apellido_usuario");
    let edad_usuario = document.getElementById("edad_usuario");
    let mail_usuario = document.getElementById("mail_usuario");
    let contraseña_usuario = document.getElementById("contraseña_usuario");

    let usuario = {nombre:nombre_usuario.value , apellido:apellido_usuario.value , edad:edad_usuario.value , mail:mail_usuario.value , contraseña:contraseña_usuario};
    arreglo_de_usuarios.push(usuario);

    let arreglo_JSON = JSON.stringify(arreglo_de_usuarios);

    localStorage.setItem("arreglo_de_usuarios",arreglo_JSON);

    let recuperando = localStorage.getItem("arreglo_de_usuarios")
    console.log(recuperando);

    recuperando = JSON.parse(recuperando);
    console.log(recuperando);
}


let registrate = document.getElementById("registrate");

registrate.addEventListener("click",datos_usuario);

//FIN REGISTRO USUARIOS


//FIN INICIAR SESION