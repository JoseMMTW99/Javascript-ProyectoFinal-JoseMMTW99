//CREANDO UNA LISTA DE CRIPTOMONEDAS


let cargar = document.getElementById("cargar");

cargar.addEventListener("click",function(){

    let criptomonedas = document.getElementById("criptomonedas");
    let unidades = document.getElementById("unidades");
    let inversion = document.getElementById("inversion");
    let lista = document.getElementById("lista");

    let li= document.createElement("li");
    li.innerHTML = `<span>Critpmoneda: ${criptomonedas.value}; Unidades Totales: ${unidades.value}; Inversion Realizada: ${inversion.value}</span><button class="borrar">Borrar</Button>`;
    lista.append(li);

    let botones_borrar = document.querySelectorAll(".borrar");
    console.log(botones_borrar);

    for(let cargar of botones_borrar){
        cargar.addEventListener("click", borrar_elemento);
    }
});

function borrar_elemento(e){
    console.log(e); 

    let hijo = e.target;
    let padre = hijo.parentNode;

    padre.remove();
}