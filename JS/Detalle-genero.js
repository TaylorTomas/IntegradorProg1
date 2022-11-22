let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let queryStringObjId = queryStringObj.get(`id`)

let generoTipo = queryStringObj.get(`tipodegenero`)
let nombreGenero = queryStringObj.get(`nombredelgenero`)

console.log(queryStringObjId)

let Titulo = document.querySelector(`.Titulo`)
let Generosimg = document.querySelector(`.Categorias`)


if (generoTipo == "pelicula"){
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${queryStringObjId}`)
        .then(function(response){
        return response.json();
        })

        .then(function(data){
            console.log(data);

            Titulo.innerHTML += 
            `<h2 class="Titulo">${nombreGenero}</h2>`
    
            for (let index = 0; index < 8; index++) {
                let resultados = data.results[index];

            Generosimg.innerHTML += 
            
            `
            <a href="./Descripcion-pelicula.html?id=${resultados.id}&tipo=pelicula">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${resultados.poster_path}"></a>`

            }
    
        })
    
        .catch(function(error){
            console.log(error);
        })
    }

else if (generoTipo == "serie"){
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${queryStringObjId}`)
        .then(function(response){
        return response.json();
        })

        .then(function(data){
            console.log(data);

            Titulo.innerHTML += 
            `<h2 class="Titulo">${nombreGenero}</h2>`
    
            for (let index = 0; index < 8; index++) {
                let resultados = data.results[index];
            
            Generosimg.innerHTML += 
            
            `
            <a href="./Descripcion-serie.html?id=${resultados.id}&tipo=pelicula">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${resultados.poster_path}"></a>`

            }
    
        })
    
        .catch(function(error){
            console.log(error);
        })
    }