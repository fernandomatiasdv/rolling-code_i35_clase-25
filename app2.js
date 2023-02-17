/*
2) Hacer una función que se llame cargaError. Tendrá dos parametros, 
   en el primero se cargará un número y el segundo una cadena.
*/

const cargaError = (numero, cadena) => {
    return [numero, cadena]
} 

function cargaError(num,cad){
    let vector = [];
        vector[0] = num;
        vector[1] = cad;
    return vector;
}

function cargaError(num,cad){
    let vector = [];
        vector.push(num)
        vector.push(cad)
    return vector;
}
