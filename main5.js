
// function principal(){
//     let principalN = []
    
//     const nombre = alumnosN();
//     const materia = materias();
//     const nota = ingresarNotas();

//     const studen = {
//         alumno: nombre,
//         materia: materia,
//         nota: nota
//     }
//     principalN.push(studen)

//     return principalN
// }

function alumnosN(){
    let opcionAlumnos;
    let Nalumnos =[]
    do {
        let alumnos = prompt('ingrese el alumno')
        const materia = materias();
        const notas = ingresarNotas();

        const studen = {
            nombre: alumnos,
            materia: materia,
            notas: notas
        }
        Nalumnos.push(studen)

        // materias();

        // ingresarNotas();

        opcionAlumnos = prompt('Desea ingresar otro alumno S/N') 
    } while (opcionAlumnos.toLowerCase() == 's');

    return Nalumnos
}
function materias(){
    let opcionMateria;
    let materias =[]
    do {
        let numMateria = prompt('ingrese la materia')

        // materias.push(numMateria)
        materias.push(numMateria)

        opcionMateria = prompt('Desea ingresar otra materia S/N') 
    } while (opcionMateria.toLowerCase() == 's');

    return materias
    
}
function ingresarNotas(){
    let lista =[];
    let opcionNotas;

    do {
        let notas = parseInt(prompt('ingrese la nota'));
        lista.push(notas)

        opcionNotas = prompt('Desea ingresar otras notas S/N')
    } while (opcionNotas.toLowerCase()  ==  's');

    return lista
}

function promedio (lista){
    let suma = 0;
    let promedio = 0;
    for(let numero of lista){
        suma += numero
        promedio = suma/lista.length
    }
    return promedio
}

const m = alumnosN();
console.log( m );

// console.log(alumnosN())
// const listadoNotas = ingresarNotas();
// const prom = promedio( listadoNotas )
// console.log( prom )
    




