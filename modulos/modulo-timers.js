//para ejecutar codigo luego de un numero de milisegundos

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

setTimeout(mostrarTema, 5000, "Node.js");


function sumar(a,b){
    console.log(a+b);
}

setTimeout(sumar,2000, 5,5);

//setInmmediate se usa para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible)

function temaEspecifico(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

console.log("Antes");

setImmediate(temaEspecifico, "node.js") //se ejecuta despues de antes y despues, entonces al fina muestra temaEspecifico

console.log("Despues");

//setIntervall se usa para ejecutar codigo un numero infinito de codigo de veces con un retraso especifico de milisegundos

function unTema(temas){
    console.log(`Estoy aprendiendo ${temas}`)
}

setInterval(unTema,1500, "node.js");

