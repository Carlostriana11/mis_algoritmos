// Escribe una funcion que reciba un array de numeros y devuelva la suma de los numeros pares


let numeros = [2, 4, 6, 8, 1, 3, 5, 7, 9];

function sumarNumeros(){
    let suma = 0;
    for(let numero of numeros){
        if(numero %2 == 0){
            suma += numero;
            console.log(suma)
        }
    }
    return suma;
}  

sumarNumeros()
