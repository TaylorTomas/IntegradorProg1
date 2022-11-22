let contenedorgenerospelis = document.querySelector(`.container-generos-pelis`)
let contenedorgenerosseries = document.querySelector(`.container-generos-series`)

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.genres.length; index++) {
            let results = data.genres[index]
            
            
            contenedorgenerospelis.innerHTML += 
            `<li>
            <a href="./Detalle-genero.html?tipo=genero&id=${results.id}&tipodegenero=pelicula&nombredelgenero=${results.name}"">
            <p class="Categorias">${results.name}</p>
            </a>
        </li>`
        }


        })
    .catch(function(error){
        console.log(error);
    })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.genres.length; index++) {
            let results = data.genres[index]
            
            
            contenedorgenerosseries.innerHTML += 
            `<li>
            <a href="Detalle-genero.html?tipo=genero&id=${results.id}&tipodegenero=serie&nombredelgenero=${results.name}">
            <p class="Categorias">${results.name}</p>
            </a>
        </li>`

        }
    })
    
    .catch(function(error){
        console.log(error);
    })