//funcionalidad organizda en uno o varios archivos javascrit que puede ser reutilizada en una aplicacion 

//ventajas: evitar repetir codigo, reutilizar el codigo, facil de encontrar bugs

// nota: importante se tiene que importar y exportar

function saludar(nombre){
    return `hola  ${nombre}`;
}

function saludarHolaMundo (){
    return "hola, mundo";
}

module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;