const fs = require("fs");

fs.readFile("./modulos/index.html", "utf-8", (err, contenido) => {
  if (err) {
    console.error(err);
  } else {
    console.log(contenido);
  }
});

//cambiar el nombre de un archivo

fs.rename("./modulos/index.html"," main.html", (err) =>{
    if(err){
        throw err;
    }else{
        console.log("nombre cambiado exitosamanete")
    }
});

//agregar contenido al final de un archivo

fs.appendFile("index.html", "<p>Hola</p>", (err)=>{
    if(err){
        throw err;
    }
    console.log("archivo actualizado")
});

// remplazar todo el contenido del archivo

fs.writeFile("index.html", "contenido nuevo ", (err)=>{
    if(err){
        throw err;

    }
    console.log("contenido remplazado")
})