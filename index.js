// OPCIONES JUGADOR

let piedra = 1;
let papel = 2;
let tijera = 3;

//OPCION ESCOGIDA Y OPCION RANDOM

let opcion = 0;
let opcionRandom = 0;

// CONTADORES PARA MARCADOR

let counterUser = 0, counterCode = 0;

//LIMITES PARA NUMERO RANDOM

const min = 1;
const max = 3;


const piedraBoton = document.getElementById("piedra");
const papelBoton = document.getElementById("papel");
const tijeraBoton = document.getElementById("tijera");
const contadorUser = document.getElementById("marcadorUno");
const contadorCode = document.getElementById("marcadorDos");


console.log(opcion);


opciones();


function opciones() {
    piedraBoton.addEventListener("click", () => {
        opcion = piedra;

        jugar();

    })

    papelBoton.addEventListener("click", () => {
        opcion = papel;
        jugar();


    })

    tijeraBoton.addEventListener("click", () => {
        opcion = tijera;
        jugar();

    })


}

function selectorRandom() {
    opcionRandom = Math.floor(Math.random() * max) + 1;

    let imgMaquina = document.getElementById("opcionMaquina");

    if (opcionRandom === 1) {
        imgMaquina.src = "./images/punch.png";   // piedra
    } else if (opcionRandom === 2) {
        imgMaquina.src = "./images/palm.png";    // papel
    } else if (opcionRandom === 3) {
        imgMaquina.src = "./images/scissors.png"; // tijera
    }
}


// 1 Piedra
// 2 papel 
// 3 tijeras

function compararRespuestas() {


    setTimeout(() => {

        // POSIBILIDADES GANA EL JUGADOR


        if ((opcion == 1) && (opcionRandom == 3)) // si eljugador selecciona piedra
        {

            contadorUno();


        }
        else if ((opcion == 2) && (opcionRandom == 1)) // si el jugador elige papel
        {

            contadorUno();
        }
        else if ((opcion == 3) && (opcionRandom == 2)) // si el jugador selecciona tijera
        {

            contadorUno();
        }

        //POSIBILIDADES PIERDE DL JUGADOR

        if ((opcion == 1) && (opcionRandom == 2)) // si eljugador selecciona piedra
        {

            contadorDos();
        }
        else if ((opcion == 2) && (opcionRandom == 3)) // si el jugador elige papel
        {

            contadorDos();
        }
        else if ((opcion == 3) && (opcionRandom == 1)) {

            contadorDos();
        }
    }, 200);

}

function contadorUno() {
    counterUser++;
    contadorUser.textContent = counterUser;
}

function contadorDos() {
    counterCode++;
    contadorCode.textContent = counterCode;
}

function cambiarImagen(nombre) {
    let img = document.querySelector("#opcionUsuario");
    img.setAttribute("src", nombre);
}

function jugar() {



    selectorRandom();
    // Cambiar la imagen final de la máquina según lo que salió random

    compararRespuestas();

    // REVISAR las variables de contador, el primero que llegue a 5 gana
    if (counterCode == 5) {
        alert("Perdiste");
        reiniciar();

    }
    else if (counterUser == 5) {
        alert("Ganaste");
        reiniciar();
    }



}




function reiniciar() {



    counterCode = 0;
    counterUser = 0;
    contadorUser.textContent = 0;
    contadorCode.textContent = 0;


}
