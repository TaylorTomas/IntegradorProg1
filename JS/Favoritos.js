let containerPelis = document.querySelector('containerPelis')
let containerSeries = document.querySelector('containerSeries')


let recuperostorage = localStorage.getItem('PelisFavs')
let peliculas = JSON.parse (recuperostorage)

for(let i=0; i<peliculas.length; i++){
    buscarYMostrarFavoritos()
}

function buscarYMostrarFavoritos(){

    let urldetallepeli = `https://api.themoviedb.org/3/movie/${queryStringObjId}?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US`

    fetch(urldetallepeli)
        .then(function(res){
                return res.json()
        })
        .then(function(data){
            containerPelis.innerHTML +=
            `<div class = "todo">
            <a href="./Descripcion-pelicula.html?id=${id}&tipo=pelicula">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${image}"></a><a href="./Descripcion-pelicula.html?id=${id}&tipo=pelicula"><h3 class = "titulopeli">${title} (${fecha})</h3></a>
            </div>`
        })

        .catch(function(error){
            console.log(error)
        })
}

let urldetalleserie = `https://api.themoviedb.org/3/tv/${queryStringObjId}?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US`

fetch(urldetalleserie)
        .then(function(res){
                return res.json()
        })
        .then(function(data){
            containerSeries.innerHTML +=
            `<div class = "todo">
            <a href="./Descripcion-serie.html?id=${id}&tipo=serie">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${image}"></a><a href="./Descripcion-serie.html"><h3 class = "titulopeli">${name} (${fecha})</h3></a>
            </div>`
        })

        .catch(function(error){
            console.log(error)
        })