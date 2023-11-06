//total de preguntas del juego
const total_preguntas = 27;
//variables para controlar el tiempo

const timer = document.getElementById("tiempo");

const TIEMPO_DEL_JUEGO = 60;
//variable tiempo restante
let timeleft = TIEMPO_DEL_JUEGO;
//variable que maneja el contador
var countdown;
//letras de la a A la Z
const container = document.querySelector(".container")

for (let i = 1; i <= total_preguntas; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    if (i == 27) {
        circle.textContent = "☠";
    } else {
        circle.textContent = String.fromCharCode(i + 96);
    }
    circle.id = String.fromCharCode(i + 96);
    container.appendChild(circle);
    const angle = ((i - 1) / total_preguntas) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(100 + 130 * Math.cos(angle));
    const y = Math.round(100 + 130 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}
//boton comenzar
var comenzar = document.getElementById("Comenzar");
comenzar.addEventListener("click", function(event) {
    document.getElementById("pantalla-principal").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    console.log("Tocaste el boton para jugar!!")
})

//tiempo
function largarTiempo() {
    countdown = setInterval(() => {
        //restar un segundo al tiempo restante
        timeleft--;
        //se actualiza el cronometro
        timer.innerText = timeleft;

        //si el tiempo llega a 0, se detiene el cronometro
        if (timeleft < 0) {
            clearInterval(countdown);
            //mostrarPantallaFinal()
        }

    }, 1000);
}