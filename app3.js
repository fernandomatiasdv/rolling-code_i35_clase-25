/*
3) Hacer una función que reciba tres parámetros: Los primeros dos serán numeros y 
    el tercero puede ser "+" o "-".
   El tercero no es obligatorio, en caso de no ingresarlo será una suma. 
   La función debe realizar la suma o resta y mostrar el resultado:
   a) Por alert dentro de la función.
   b) Por alert a partir del retorno del valor desde la función.

*/


const operacion  = (valor1, valor2, signo="+") => {
    const resultado = signo === "+" ? valor1 + valor2 : valor1 - valor2

    return resultado

}


alert(operacion(9, 1, "-"))