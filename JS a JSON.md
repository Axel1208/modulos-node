obejto a cadena de caracteres:

const { json } = require("stream/consumers")

let infoCurso= {
    "titulo": "aprende Node.js",
    "numVistas": 45623,
    "numLikes": 2000,
    "temas":[
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
    
}

//se usa stringyfy para convertirlo


 let infoCursoJSON = JSON.stringify(infoCurso);

 console.log(infoCursoJSON);