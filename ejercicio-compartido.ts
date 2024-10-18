import * as rs from 'readline-sync';
// • El jardín infantil necesita un programa para poder asignar cursos a las aulas
// • Se cuentan con tres aulas: Azul, Verde y Amarilla
// • Cada aula cuenta con una capacidad diferente (es decir, un número de
// bancos)
// • La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
// • Dado un número de infantes ingresado por el usuario, el programa deberá
// determinar el aula que minimice la cantidad de bancos vacíos
// • La salida del algoritmo es el color que identifica al aula asignada

let aulaAzul : number = 40
let aulaVerde : number = 35
let aulaAmarilla : number = 30
//Definimos la cantidad de alumnos que va en cada aula

let cantidadInfantes : number = rs.questionInt("Ingrese la cantidad de infantes: ");
//Le pedimos al usuario que ingrese la cantidad de alumnos

let calcularAula = (alumnos:number) => {
    if(alumnos <= aulaAmarilla){
        console.log("El curso a ingresado al aula amarilla")
    } else if (alumnos >aulaAmarilla && alumnos <= aulaVerde) {
        console.log("El curso a ingresado al aula verde")
    } else if (alumnos >aulaVerde && alumnos <= aulaAzul) {
        console.log("El curso a ingresado al aula azul")
} else {
    console.log(`El aula no tiene suficiente espacio para ${alumnos} alumnos `)
}
}
calcularAula(cantidadInfantes)
//Realizamos una funcion en la que validamos segun la cantidad de alumnos que ingrese el usuario para ponerlo en el aula que corresponda.