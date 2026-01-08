

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

 let infoCursoJSON = JSON.stringify(infoCurso);

 console.log(infoCursoJSON);

 //cadena de caracteres a objeto json.parse

let infoCursoObjeto=JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);