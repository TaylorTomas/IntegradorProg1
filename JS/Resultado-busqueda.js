
    let linkimagen = "https://image.tmdb.org/t/p/w500"

    
    let sectionResultadosPelis = document.getElementsByClassName(`.resultados-peliculas`)
    let contenedorTituloPelis = document.getElementsByClassName(`.contenedorPelis`)
    let sectionResultadosSeries = document.getElementsByClassName(`.resultados-series`)
    let contenedorTituloSeries = document.getElementsByClassName(`.contenedorSeries`)

    let queryString = location.search
    let queryStringObj = new URLSearchParams (queryString)
    let queryStringObjBarraBusqueda = queryStringObj.get(`barrabusqueda`)
    let queryStringObjTipoPeliculas = queryStringObj.get(`tipoPeliculas`)
    let queryStringObjTipoSeries = queryStringObj.get(`tipoSeries`)
    
    console.log(queryString)


if (queryStringObjTipoPeliculas == `peliculas`) {
        

        contenedorTituloPelis.innerHTML += 
        `<h2>PELICULAS</h2>`

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
            return response.json();
            })
        .then(function(data){
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];

                sectionResultadosPelis.innerHTML += 
         `
                
                <a href="Descripcion-pelicula.html?id=${element.id}&tipo=pelicula">
                <img class="Img"src="${linkimagen}${element.poster_path}" alt="">
                <h2>${element.title}</h2>
                </a>

         `
         
         
            }

        })
    .catch(function(error){
        console.log(error);
    })

    }

if (queryStringObjTipoSeries == `series` ) {
       

       contenedorTituloSeries.innerHTML += `
       <h2>SERIES</h2>
       `

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
            return response.json();
            })
        .then(function(data){
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                 const element = data.results[index];
                 
                 sectionResultadosSeriesI.innerHTML += 
         
                `<article class="article-peli">
                <a href="detalle.html?id=${element.id}&tipo=serie">
                <img src="${linkimagen}${element.poster_path}" alt="">
                <h2>${element.name}</h2>
                </a>
                </article>`
         
            }

        })
        .catch(function(error){
            console.log(error);
        })

    }






