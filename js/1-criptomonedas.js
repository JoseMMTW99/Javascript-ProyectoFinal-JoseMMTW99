

const form = document.querySelector("#form-search");
const moneda = document.querySelector("#moneda");
const criptomoneda = document.querySelector("#criptomonedas");
const formContainer = document.querySelector(".form-side");
const containerAnswer = document.querySelector(".container-answer");

const busqueda = {
    moneda: "",
    criptomoneda: ""
}


document.addEventListener("DOMContentLoaded", ()=>{
    consultar_criptomoneda();

    form.addEventListener("submit",submitForm);
    moneda.addEventListener("change",getValue);
    criptomoneda.addEventListener("change",getValue);
})

function submitForm(e){
    e.preventDefault();
    const {moneda,criptomoneda} = busqueda;
    if(moneda===""||criptomoneda===""){
        Toastify({
            text:"Seleccione ambas monedas",
            duration:1500,
            gravity:"bottom",
            position:"center",
            style:{
                fontSize:"30px",
                background:"#0077b6",
                border:"white solid 3px"
            }
        }).showToast();
        return;
    }
    consultarAPI(moneda,criptomoneda);

    //console.log(moneda);
    //console.log(criptomoneda);
}

function consultarAPI(moneda,criptomoneda){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    fetch(url)
    .then(resultado=>resultado.json())
    .then(resultadoJson=>{
        cotizacion_criptomoneda(resultadoJson.DISPLAY[criptomoneda][moneda]);
        console.log(resultadoJson.DISPLAY[criptomoneda][moneda]);
    })
    .catch(error=>console.log("Error"))
}

function cotizacion_criptomoneda(data){
    clearHTML();
    const {PRICE,CIRCULATINGSUPPLYMKTCAP,HIGHDAY,LOWDAY,CHANGE24HOUR,VOLUMEDAY,VOLUMEDAYTO} = data;
    const answer = document.createElement("div");
    answer.classList.add("display-info");
    answer.innerHTML = `
    <p class="precio_criptomoneda">Precio: <span>${PRICE}</span></p>
    <p class="total_marketcap">Marketcap: <span>${CIRCULATINGSUPPLYMKTCAP}</span></p>
    <p>Precio más alto del día:: <span>${HIGHDAY}</span></p>
    <p>Precio más bajo del día: <span>${LOWDAY}</span></p>
    <p>Variación últimas 24 horas: <span>${CHANGE24HOUR}</span></p>
    <p>Volumen diario de la criptomoneda: <span>${VOLUMEDAY}</span></p>
    <p>Volumen diario en moneda corriente: <span>${VOLUMEDAYTO}</span></p>
    `;
    containerAnswer.appendChild(answer);
}

function clearHTML(){
    containerAnswer.innerHTML="";
}

function getValue(e){
    busqueda[e.target.name] = e.target.value;
    //console.log(e.target.value);
    //console.log(e.target.name);
}

function consultar_criptomoneda(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(respuestaJson=>{
            selectCriptos(respuestaJson.Data);
            console.log(respuestaJson.Data);
        })
        .catch(error=>console.log("Error"));
}

function selectCriptos(criptos){
    criptos.forEach(cripto=>{
        const{FullName,Name}=cripto.CoinInfo;
        const option = document.createElement("option");
        option.value = Name;
        option.textContent = FullName;
        criptomoneda.appendChild(option);
    });
}

