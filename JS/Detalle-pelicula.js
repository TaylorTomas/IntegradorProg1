let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let queryStringObjId = queryStringObj.get(`id`)
console.log(queryStringObjId)

let urldetallepeli = `https://api.themoviedb.org/3/movie/${queryStringObjId}?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US`

fetch(urldetallepeli)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let section = document.querySelector(".todo")

        section.innerHTML += 
        
        `<h2 class="Titulo"> ${data.title}</h2>
        <img class="DescripcionFoto" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
        <p class="MirarAhora">Mirar Ahora</p>
        <button class = "favoritos">Agregar a favoritos</button>

        <p class="Texto">Sinopsis: ${data.overview}</p>
        <p class="Texto">Calificacion: ${data.vote_average}</p>
        <p class="Texto">Fecha de estreno: ${data.release_date}</p>
        <p class="Texto listageneros">Genero:</p>
        <p class="Texto dondever">Donde ver:</p>`

        let infotexto = document.querySelector(".listageneros")
        let cantidadgeneros = ''

        for (let i=0; i<data.genres.length; i++){
            cantidadgeneros += `<li>${data.genres[i].name}</li>`
        }

        infotexto.innerHTML += cantidadgeneros
    })
 
    .catch(function(error){
        console.log(error)
    })

    let infourl = `https://api.themoviedb.org/3/movie/${queryStringObjId}/watch/providers?api_key=b76faeee5fc3002a166c7f5c929c2c33`

    fetch(infourl)
        .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        
        let plataformas_streaming = ''

    if (data.results.AR && data.results.AR.frustrate) {
        plataformas_streaming +=
        `<p class="Texto dondever">Donde ver:</p>`
        `<a class="Texto dondever" href="./descripcion-pelicula.html?=${data.id}"</a>`
        for (let i=0; i<data.results.AR && data.results.AR.frustrate.length; i++){
            const cantidadgeneros = data.results.AR.frustrate[i]
            plataformas_streaming += `imagen class="Texto dondever" src="${data.logo_path}">`
        }

    }

    Section.innerHTML+=plataformas_streaming
    })

        .catch(function(error){
            console.log(error)
    })

//Favoritos

let favoritos = []

let recuperstorage = localStorage.getitem ('PelisFavs')

if (recuperstorage !== null){
    favoritos = JSON.parse(recuperstorage)

}

let boton = document.querySelector(".favoritos");

if (favoritos.includes(queryStringObjId)){
    boton.innerText = 'quitar de Favoritos'

}

boton.addEventListener('click',function(){
    
    if (favoritos.includes(id)){
        let indicedePelicula = favoritos.indexOf(queryStringObjId)
        favoritos.splice(indicedePelicula,1)
        boton.innerText =  'agregar a Favoritos'
    }
    else{
        favoritos.push(queryStringObjId);
        boton.innerText = 'quitar de Favoritos'
    }
    
    

    let favstostrings = JSON.stringify(favoritos)
    localStorage.setItem('PelisFavs',favstostrings)


}
)