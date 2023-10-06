/*
Comentarios por parte de Fátima:
    Estuvo bien preguntar en las indicaciones las dudas.
    Leer el ejercicio previamnete fue un acierto.
    Estuvo bien conectar desde un principio los documentos.
    Es necesario repasar funciones y manipulación del DOM.
    Tener un poco más de limpieza en el código.
    Buena comprensión lectora y de instrucciones.
*/

// Escribe tu código aquí.
const arrayNombres = ["Ale", "Fatima", "Felipe", "Jose", "Alexis", "Julieta", "Ricardo", "Martha", "Xochitl", "Susana"];
const nombre = "Karla";
let arrayFinal = [];

//Función para agregar los nombres de mayor longitud a mi arrayFinal
arrayNombres.forEach(nombres => {
    if (nombres.length > nombre.length){
    arrayFinal.push(nombres);
    }
});
// console.log(arrayFinal);

/* Gardando un solo dato en una etiqueta
const n = document.querySelector('.nombre1');//Guardo mi etiqueta en una constante
//console.log(n);
n.textContent = arrayFinal[0];//Modifica el contenido de mi etiqueta que tiene una clase llamada nombre1 y escribe lo que haya en mi rray en la posición 0
*/

//Guarda en una constante lo que encuentres en el documento que tenga como nombre de clase "nombreLargos"
const ul = document.querySelector('.nombresLargos');

//De mi arrayFinal toma cada dato y guárdalo en elemento
arrayFinal.forEach(nombreL => {
    const li = document.createElement('li');//Crea un elemento li en el documento HTML y guárdalo en una constante
    li.textContent = nombreL;//en mi elemento li agrega como contenido lo que haya en nombreL

    ul.appendChild(li);//Dentro de mi etiqueta ul mete mis elementos li con su respectivo contenido

});



