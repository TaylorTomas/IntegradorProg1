
    let linkimagen = "https://image.tmdb.org/t/p/w500"

    
    let sectionResultadosPelis = document.querySelector('.resultados-peliculas')
    let contenedorTituloPelis = document.querySelector(`.contenedorPelis`)
    let sectionResultadosSeries = document.querySelector(`.resultados-series`)
    let contenedorTituloSeries = document.querySelector(`.contenedorSeries`)

    let queryString = location.search
    let queryStringObj = new URLSearchParams (queryString)
    let queryStringObjBarraBusqueda = queryStringObj.get(`search`)
    
    console.log(queryString)

    
        
    contenedorTituloPelis.innerHTML += 
    `<h2>PELICULAS</h2>`

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
            return response.json();
            })
        .then(function(data){
            console.log(data);

            for (let index = 0; index < 10; index++) {
                const element = data.results[index];

                sectionResultadosPelis.innerHTML += 
         
                `<a href="Descripcion-pelicula.html?id=${element.id}&tipo=pelicula">
                <img class="Img" src="${linkimagen}${element.poster_path}" alt="">
                <h2 class="titulopeli">${element.title}</h2>
                </a>`

            }

        })
    .catch(function(error){
        console.log(error);
    })

       

       contenedorTituloSeries.innerHTML += `
       <h2>SERIES</h2>
       `

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
            return response.json();
            })
        .then(function(data){
            console.log(data);

            for (let index = 0; index < 10; index++) {
                 const element = data.results[index];
                 
                 sectionResultadosSeries.innerHTML += 
         
                `<a href="Descripcion-serie.html?id=${element.id}&tipo=pelicula">
                <img class="Img" src="${linkimagen}${element.poster_path}" alt="">
                <h2 class="titulopeli">${element.name}</h2>
                </a>`
         
            }

        })
        .catch(function(error){
            console.log(error);
        })

