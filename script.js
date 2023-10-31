//total de preguntas del juego
const total_preguntas = 27;
//letras de la a A la Z
const container= document.querySelector(".container")

    for(let i=1; i<total_preguntas; i++){
const circle=document.createElement("div"); 
circle.classList.add("circle");
circle.textContent=String.fromCharCode(i + 96);
circle.id=String.fromCharCode(i + 96);
container.appendChild(circle);
const angle=((i-1)/total_preguntas)  * Math.PI * 2- (Math.PI/2);
const x= Math.round(100+130*Math.cos(angle))  
const y= Math.round(100+130*Math.sin(angle))  
circle.style.left=`${x}px`;
circle.style.top=`${y}px`;
}

    


