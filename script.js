

//total de preguntas del juego
const total_preguntas = 27;

//cantidad de respuestas correctas
var cantidadAcertadas=0;
//controla la pregunta actual
var numPreguntaActual=-1;
//musica
let sound = new Audio ()
//estructura para saber que pregunta se respondio o no
//i=0 no se respondio, 1 si se respondio

//pongo la cant de preguntas (27)
var estadoPreguntas=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//base de datos de las preguntas
const bd_juego = [
    {        id: 'A',
            pregunta: "Marca de botella de vodka con diferentes sabores",
            respuesta: "absolut"
        },
        {
            id: 'B',
            pregunta: "Es un elisir",
            respuesta: "blue label"
        },
        {
            id: 'C',
            pregunta: "Botella de alcohol llamada cororona, que es?",
            respuesta: "cerveza"
        },
        {
            id: 'D',
            pregunta: "Trago, tipo licuado frutal que puede contener ron o vodka ",
            respuesta: "daikiri"

        },
        {
            id: 'E',
            pregunta: "Bebida que se utiliza para completentar por ejemplo un vodka, marca Speed, que tipo de bebida es?",
            respuesta: "energizante"
        },
        {
            id: 'F',
            pregunta: "Trago especial mientras se hace el asado, lleva coca cola",
            respuesta: "fernet"
        },
        {
            id: 'G',
            pregunta: "Trago que contiene agua tonica y gin",
            respuesta: "gin tonic"
        },
        {
            id: 'H',
            pregunta: "marca de cerveza, su botella es color verde",
            respuesta: "heneiken"
        },
        {
            id: 'I',
            pregunta: "Cerveza etiqueta dorada",
            respuesta: "imperial"
        },
        {
            id: 'J',
            pregunta: "marca de whisky de origen estadounidense. Se trata de un whisky Tennesse",
            respuesta: "jack daniels"
        },
        {
            id: 'K',
            pregunta: "Licor mexicano, elaborado a partir de granos de café tostados macerados en alcohol, aromatizantes y azúcar.",
            respuesta: "kahlua"
        },
        {
            id: 'L',
            pregunta: "Trago con champange con helado de limon",
            respuesta: "lemon champ"
        },

        {
            id: 'M',
            pregunta: "Trago ron blanco, azúcar, lima, hojas de menta y agua con gas.",
            respuesta: "Mojito"
        },
        {
            id: 'N',
            pregunta: "Vodka mezclado con jugo de....",
            respuesta: "naranja"
        },
        {
            id: 'O',
            pregunta: "Licor anisado de origen griego con fuerte sabor dulce y olor a regaliz.",
            respuesta: "ouzo"
        },
        {
            id: 'P',
            pregunta: "trago puertoriqueño que contiene La dulce mezcla de crema de coco, jugo de anana, ron blanco y hielo ",
            respuesta: "piña colada"
        },
        {
            id: 'Q',
            pregunta: "Cerveza tipica de argentina con etiqueta azul",
            respuesta: "quilmes"
        },
        {
            id: 'R',
            pregunta: "Bebida alcoholica que se suele mezclar con daikiri o con coca  ",
            respuesta: "ron"
        },
        {
            id: 'S',
            pregunta: "Marca de botella de vodka con diferentes sabores",
            respuesta: "smirnoff"
        },
        {
            id: 'T',
            pregunta: "Marca de Bebida se hace presente en la mesa de las familias argentinas es uno de los vinos más consumidos",
            respuesta: "termidor"
        },
        {
            id: 'U',
            pregunta: "Marca de bebida Como el vino termidor misma definicion y estetica ",
            respuesta: "uvita"
        },
        {
            id: 'V',
            pregunta: "Trago de licor aperitivo hecho con ajenjo y otras plantas amargas y tónicas ",
            respuesta: "vermu"
        },
        {
            id: 'W',
            pregunta: "Bebida alcoholica que principal mente se toma solo o con hielo, pero sino tambien se puede mezclar con otras cosas ",
            respuesta: "whisky"
        },
        {
            id: 'X',
            pregunta: "Marca de licor mexicano, elaborado a partir de anís y miel, según fórmula de los antiguos mayas.",
            respuesta: "xtabentun"
        },
        {
            id: 'Y',
            pregunta: "Aguardiente turco anisado. ",
            respuesta: "yani raki"
        },
        {
            id: 'Z',
            pregunta: "Aguardiente alemán, destilado de ciruelas de la Selva Negra.",
            respuesta: "zwetschgenwasser"
        },
        {
            id: '☠',
            pregunta: "se toma en las fiestas, con alcohol y sin alcohol",
            respuesta: "sidra "
        }

    ]
    //variables para controlar el tiempo

const timer = document.getElementById("tiempo");

const TIEMPO_DEL_JUEGO = 70;
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
    circle.id = String.fromCharCode(i + 96).toUpperCase();
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

    largarTiempo();
    cargarPregunta();
})

//tiempo
function largarTiempo() {
    countdown = setInterval(() => {
        //restar un segundo al tiempo restante
        timeleft--;
        //se actualiza el cronometro
        timer.innerText = timeleft;

        //si el tiempo llega a 0, se detiene el cronometro
        if (timeleft < 1) {
            clearInterval(countdown);
             Swal.fire("Se termino el tiempo, tenes que tomar un shot!");
            mostrarPantallaFinal();
        }

    }, 1000);
}
//funcion que carga la pregunta
function cargarPregunta(){
numPreguntaActual++;
//me fijo si llego al final de las preguntas para empezar de nuevo
if(numPreguntaActual>=total_preguntas){
    numPreguntaActual=0;
}


//controlo que todavia hayan preguntas para contestar, es decir ver si en estadoPreguntas existe algun 0
if(estadoPreguntas.indexOf(0)>=0){
    //busco cuan de todas esta sin responder osea el primer 0
    while(estadoPreguntas[numPreguntaActual]==1){
       numPreguntaActual++;
       if(numPreguntaActual>=total_preguntas){
        numPreguntaActual=0;
       } 
    }
//busco la pregunta en la base de datos
document.getElementById("letra-pregunta").textContent=bd_juego[numPreguntaActual].id;
document.getElementById("pregunta").textContent=bd_juego[numPreguntaActual].pregunta;
var letra=bd_juego[numPreguntaActual].id;
document.getElementById(letra).classList.add("pregunta-actual");
}
else{//ya se respondieron todas las preguntas
    clearInterval(countdown);
    mostrarPantallaFinal();

}



}
//me fijo cada vez que haya un cambio en el input para ver cuando se presiona ENTER y controlar si lo que ingreso es o no es
var respuesta=document.getElementById("respuesta");
respuesta.addEventListener("keyup", function(event){
    //si presiona enter
    if(event.keyCode ===13){//si presiono enter y esta vacio
     
     if(respuesta.value==""){
        Swal.fire("Tenes que ingresar la respuesta!");
        return;
     }
     //tengo la respuesta ingresada
     var txtRespuesta=respuesta.value;
     controlarRespuesta(txtRespuesta.toLowerCase());

    }
})
function controlarRespuesta(txtRespuesta){
    //controlo si la respuesta es correcta
    if(txtRespuesta == bd_juego[numPreguntaActual].respuesta){
       // Swal.fire("Correcto!");  
       cantidadAcertadas++;

       //actualizo la pregunta actual a 1 para saber que ya esta respondida
       estadoPreguntas[numPreguntaActual]=1;

       var letra=bd_juego[numPreguntaActual].id;

       document.getElementById(letra).classList.remove("pregunta-actual");
       document.getElementById(letra).classList.add("bien-respondida");


    }
    else{
        estadoPreguntas[numPreguntaActual]=1;
var letra=bd_juego[numPreguntaActual].id;
      document.getElementById(letra).classList.remove("pregunta-actual");
       document.getElementById(letra).classList.add("mal-respondida");
    }
    //borro
    respuesta.value="";
    cargarPregunta()
}
//boton para pasar pregunta sin contestar
var pasar=document.getElementById("pasar");
pasar.addEventListener("click", function(event){
    var letra = bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");

    cargarPregunta();
})

//muestro la pantalla final 
function mostrarPantallaFinal(){
    document.getElementById("acertadas").textContent =cantidadAcertadas;
    document.getElementById("score").textContent=(cantidadAcertadas*100)/27 + "% de acierto";
    document.getElementById("pantalla-juego").style.display="none";
    document.getElementById("pantalla-final").style.display="block";

}

//boton para jugar de nuevo
var recomenzar=document.getElementById("recomenzar");
recomenzar.addEventListener("click", function (event){
    numPreguntaActual=-1;
    timeleft=TIEMPO_DEL_JUEGO;
    timer.innerText=timeleft;
    cantidadAcertadas=0;
    estadoPreguntas=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//saco las clases de los circulos
var circulos=document.getElementsByClassName("circle");
for(i=0; i<circulos.length;i++){

    circulos[i].classList.remove("pregunta-actual");
    circulos[i].classList.remove("bien-respondida");
    circulos[i].classList.remove("mal-respondida");

    
}
Document.getElementById("pantalla-final").style.display="none";
Document.getElementById("pantalla-juego").style.display="block";
respuesta.value="";
largarTiempo()
cargarPregunta()


})







