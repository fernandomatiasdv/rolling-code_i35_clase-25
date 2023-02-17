/*
4) Crear una función que se llame nivelVolumen, en donde le podremos pasar un numero 
    entre 0 y 10:
   a) Validar que solo te deje ingresar un valor entre 0 y 10. 
      En caso de tener un volumen por debajo o por encima usaremos la función
	  cargaError(304, "Datos erróneos") y los mostraremos por alert.
   b) Si el valor es 
	  0: mostrar el alert "Silencio"
	  de 1 a 3: Bajo
	  de 4 a 6: Medio
	  de 7 a 9: Alto
	  10: Baja el volumen!!


*/
const cargaError = (numero, cadena) => {
    return [numero, cadena]
} 

const nivelVolumen = (valor) => {
    if(valor <0 || valor > 10 ){
        alert(cargaError(304, "Datos erróneos")[0] + cargaError(304, "Datos erróneos")[1])        
    } else{
        if(valor === 0) return "Silencio"
        if(valor>=1 && valor <= 3) return "Bajo"
        if(valor>=4 && valor <= 6) return "Medio"
        return valor>=7 && valor <= 9 ? "Alto" : "Baja el volumen!!!"        
    }
} 

let dato = nivelVolumen(11) 
dato && alert(nivelVolumen(11))