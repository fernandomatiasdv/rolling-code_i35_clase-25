/*
// Definición de la función
// ES5
function saludo(nombre="Pochi"){
    // console.log("aloha")
    return `aloha ${nombre}` 
}

// ES6
const saludo2 = () => {
    console.log("aloha!!")
}

// Llamado a la función
let retornoSaludo = saludo("Fer")
console.log(retornoSaludo)

console.log(saludo())


const retornoSaludos2 = saludo2()
console.log(retornoSaludos2)





let duplicaEdad = (anios) => {
    if(anios === undefined){
        return "Debe ingresar una edad"
    }
    // Si la edad es mayor a 50, que nos devuelva "El resultado tiene mas de dos cifras"
    // Sino que devuelva la leyenda "El resultado tiene una o dos cifras"
    
    if(anios>50){
        return "El resultado tiene mas de dos cifras"
    }else{
        return "El resultado tiene una o dos cifras"
    }
    
   
    let leyenda = anios > 50 ? "El resultado tiene mas de dos cifras" : "El resultado tiene una o dos cifras"
    
    
    //   if( anios > 50) return "El resultado tiene mas de dos cifras"
    
    //    const edadNueva = anios * 2
    //    return edadNueva
}



const duplicaEdad = (edad) => edad * 2 > 50 ? "una" : duplicaEdad(edad)  


let comparaEdad = (anios) => 
    anios > 50 ? 
        "El resultado tiene mas de dos cifras" : 
        duplicaEdad(anios)



console.log( duplicaEdad() )



let anteValor = undefined

let valor = anteValor ?? "Salio por aca"
console.log(valor)


*/



// 1) Hacer una función que reciba dos parámetros nos devuelva "Es mayor", "es igual" o "es menor".  
//Luego mostrar el resultado por alert.

const sonIguales = (v1, v2) => v1===v2 ? true : false

const compare = (valor1, valor2 ) => {
    let leyenda 
    if(valor1 > valor2){
        leyenda = "Es mayor"
    }else if(valor1 < valor2){
        leyenda =  "Es menor"
    }else{
        leyenda = "Son iguales"
    }
    const oracion = leyenda + "."
    return oracion
    /*
    if(valor1 === valor2) return "son iguales"

    return valor1 > valor2 ? "Es mayor" : "Es menor"
    */
   /*
    valor1 > valor2 ? "El primero es mayor" : 
        sonIguales(valor1, valor2) ? "son iguales" : 
        "El segundo es menor"
    */
} 

let val1 = parseInt(prompt("Ingresa el primer valor"))
let val2 = parseInt(prompt("Ingresa el segundo"))

alert(compare(val1, val2))






/******************/ 

function compararNumeros(num1, num2) {
    if (num1 > num2) {
      return "Es mayor";
    } else if (num1 < num2) {
      return "Es menor";
    } else {
      return "Es igual";
    }
  }
  
  let numero1 = parseInt(prompt("Ingrese el primer número:"));
  let numero2 = parseInt(prompt("Ingrese el segundo número:"));
  
  let resultado = compararNumeros(numero1, numero2);
  console.log(resultado);


  
  