

class Criptomonedas{
    constructor(nombre,unidades){
        this.nombre=nombre;
        this.unidades=unidades;
    }
    get_datos(){
        console.log("<---Datos de la Criptomoneda--->");
        console.log("Nombre:",this.nombre);
        console.log("Unidades:",this.unidades);
        console.log("");
    }
}


//ARMADO DE LISTA DE CRIPTOMONEDAS DEL USUARIO

let lista_criptomonedas = [];

let i_cantidad=prompt("Ingrese cuantas tipos (no unidades) de criptomonedas usted posee o quiere cargar en su portfolio")

for (let i=0; i<i_cantidad ; i++){
    let nombre = prompt("Ingrese el nombre de la criptomoneda");
    let unidades = prompt("Ingrese las unidades que posee de la misma");
    let criptomonedas = new Criptomonedas (nombre,unidades);
    lista_criptomonedas.push(criptomonedas);
}

console.log(lista_criptomonedas);
console.log("");

//SIMULO VISTA DE LISTA DE CRIPTOMONEDAS

for (let criptomonedas of lista_criptomonedas){
    criptomonedas.get_datos();
}