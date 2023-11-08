//total de preguntas del juego
const total_preguntas = 27;

//base de datos de las preguntas
const bd_juego = [{
            id: 'A',
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
            pregunta: "La botella de alcohol llamada cororona, que es?",
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
            id: 'l',
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
            respuesta: " zwetschgenwasser"
        },
        {
            id: '☠',
            pregunta: "se toma en las fiestas, con alcohol y sin alcohol",
            respuesta: "sidra "
        }

    ]
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

    largarTiempo()
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
            // Swal.fire("Se termino el tiempo, tenes que tomar un shot!");
            //mostrarPantallaFinal()
        }

    }, 1000);
}