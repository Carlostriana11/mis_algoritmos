let lista = []


function principal(){

    let tamaño = parseInt(prompt('ingresa el tamaño de la  lista'))
    for(let i = 0; i < tamaño; i++){
        let lista1={}

        let clave = prompt(`que deseas ingresar :`);
        if(clave === 'alumno'){
            let valor = prompt(`ingresa el valor de ${clave}`);
            lista1[clave]=valor
        }

        if(clave === 'materia'){
            let valor = prompt(`ingresa el valor de ${clave}`);
        }
        lista1[clave]= valor
        lista.push(lista1)

    }
}
principal();

// function cacturarNombres(lista1, clave){

// }
// function cacturarMaterias(lista1, clave){
    
// }
