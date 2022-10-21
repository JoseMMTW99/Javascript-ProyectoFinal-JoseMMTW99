

alert("Tus Inversiones Descentralizadas no se hace responsable de las decisiones que toma con su dinero. Este sitio web se hizo con fines de brindar información al público. Nada de todo lo que a usted le sea brindado es asesoramiento financiero")

class Inversion{
    constructor(tipo,monto){
        this.tipo=tipo;
        this.monto=monto;
    }
    get_datos(){
        console.log("<---Datos de la Inversión--->");
        console.log("Tipo de Inversión que desea realizar:",this.tipo);
        console.log("El monto que desea invertir:",this.monto);
        console.log("");
    }
}


//TOMA DE DATOS DE LA INVERSIÓN DEl CLIENTES

let datos_de_inversión = [];

for (let i=0; i<1 ; i++){
    let tipo = prompt("Escriba el tipo de inversión que desea realizar (conservadora, intermedia o riesgosa)");

    if (tipo == "conservadora"){
        console.log("La página filtrara las monedas de menor riesgo");
    }
    else if (tipo == "intermedia"){
        console.log("La página filtrara las monedas de riesgo intermedio");
    }
    else if (tipo == "riesgosa"){
        console.log("La página filtrara las monedas de mayor riesgo");
    }
    else{
        console.log("Usted no eligió el tipo de inversón adecuadamente");
    }

    let monto = prompt("Escriba el monto en dólares que usted desea invertir");

    if (monto <= 250){
        console.log("Le recomendamos no distribuir su inversión en mas de 3 activos");
    }
    else if (monto <= 1000){
        console.log("Le recomendamos no distribuir su inversión en mas de 5 activos");
    }
    else if (monto >= 1000){
        console.log("No le recomendamos que arriesgue mas del 5% de todas sus inversiones en este tipo de activos");
    }
    else{
        console.log("Usted no eligió un monto adecuadamente");
    }

    let inversion = new Inversion (tipo,monto);
    datos_de_inversión.push(inversion);
}

console.log(datos_de_inversión);

//SIMULO VISTA DE LOS DATOS DE LA INVERSION

for (let inversion of datos_de_inversión){
    inversion.get_datos();
}