

const validaCanal = (canal, subeBaja) => {
    if(subeBaja === "baja"){
        if(canal === 1){
            alert("No se puede bajar por debajo del canal 1")
        }else{
            canal--
        }
    }else{
        if(canal === 50){
            alert("No se puede subir por encima del canal 50")
        }else{
            canal++
        }
    }
}


let estado = "A",
    canal = 3,
    volumen = 10

let funcion = prompt("Ingrese la ejecución")
if(!funcion === "E" && !funcion === "A"){
    let valor = prompt("Ingrese el valor")
    if(funcion === "SUBIR"){
        valor===canal ? validaCanal(canal, "sube") : volumen++
    }else{
        valor===canal ? validaCanal(canal, "baja") : volumen--
    }
    if(funcion==="S")
}else{
    if(funcion === "A" && estado === "A" ){
        alert("La tele ya esta apagada")
    }else if(funcion === "E" && estado === "E" ){
        alert("La tele ya esta encendida")
    }else if(funcion === "A" && estado === "E"){
        alert("Se apaga la tele")
        estado = "E"

    }else{
        alert("Se enciende la tele")
        estado = "A"
    }
}
