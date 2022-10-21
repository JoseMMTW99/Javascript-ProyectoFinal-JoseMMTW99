

//FUNCION PARA LA ELECCION DE CATEGORÍAS DISPONIBLES EN LA PÁGINA

let seleccion = prompt("Escriba marketcap o tipo");

if(seleccion == "marketcap"){
    console.log("Usted eligió el menú tipo de criptomonedas")

    let marketcap = prompt("Escriba todas, top10, top25, top50 o top100")

    if(marketcap=="todas"){
        console.log("Usted elegió ver todas las criptomonedas")
    }
    else if(marketcap=="top10"){
        console.log("Usted elegió ver el top 10 de criptomonedas")
        for(let i=0;i<=10;i=i+1){
            if(i==0){
                continue;
            }
            console.log("Criptomoneda número:",i);
        }
    }
    else if(marketcap=="top25"){
        console.log("Usted elegió ver el top 25 de criptomonedas")
        for(let i=0;i<=25;i=i+1){
            if(i==0){
                continue;
            }
            console.log("Criptomoneda número:",i);
        }
    }
    else if(marketcap=="top50"){
        console.log("Usted elegió ver el top 50 de criptomonedas")
        for(let i=0;i<=50;i=i+1){
            if(i==0){
                continue;
            }
            console.log("Criptomoneda número:",i);
        }
    }
    else if(marketcap=="top100"){
        console.log("Usted elegió ver el top 100 de criptomonedas")
        for(let i=0;i<=100;i=i+1){
            if(i==0){
                continue;
            }
            console.log("Criptomoneda número:",i);
        }
    }
    else{
        console.log("Usted no eligió ninguna opción correctamente")
    }
}

else if(seleccion == "tipo"){
    console.log("Usted eligió el menú tipo de criptomonedas")

    let tipo_de_criptomonedas = prompt("Escriba centralizadas, descentalizadas o metaversos")

    if(tipo_de_criptomonedas=="centralizadas"){
        console.log("Usted elegió ver las criptomonedas centralizadas")
    }
    else if(tipo_de_criptomonedas=="descentralizadas"){
        console.log("Usted elegió ver las criptomonedas descentralizadas")
    }
    else if(tipo_de_criptomonedas=="metaversos"){
        console.log("Usted elegió ver las criptomonedas de metaversos")
    }
    else{
        console.log("Usted no eligió ninguna opción correctamente")
    }
}

else{
    console.log("Usted no eligió ninguna opción correctamente")
}













