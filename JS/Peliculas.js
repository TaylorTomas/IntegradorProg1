
let urlpeliculastop = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1'
let urlpeliculaspop = 'https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1'
let urlseriestop = 'https://api.themoviedb.org/3/tv/top_rated?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1'
let urlseriespop = 'https://api.themoviedb.org/3/tv/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1'

let section1 = document.querySelector ('.pelitop')
let section2 = document.querySelector ('.pelipop')
let section3 = document.querySelector ('.serietop')
let section4 = document.querySelector ('.seriepop')



fetch(urlpeliculastop)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let seccion = document.querySelector(".pelitop")
        for (let i=0; i<4; i++){
            console.log(data.results[i]);
            let image = data.results[i].poster_path
            let title = data.results[i].title
            let id = data.results[i].id
            let fecha = data.results[i].release_date
            
            seccion.innerHTML += 
            `<div class = "todo">
            <a href="./Descripcion-pelicula.html?id=${id}&tipo=pelicula">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${image}"></a><a href="./Descripcion-pelicula.html?id=${id}&tipo=pelicula"><h3 class = "titulopeli">${title} (${fecha})</h3></a>
            </div>`
        }
            section1.innerHTML = movie;
            return data
    })

    .catch(function(error){
        console.log(error)
    })


fetch(urlpeliculaspop)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let seccion = document.querySelector(".pelipop")
        for (let i=0; i<4; i++){
            console.log(data.results[i]);
            let image = data.results[i].poster_path
            let title = data.results[i].title
            let id = data.results[i].id
            let fecha = data.results[i].release_date
            
            seccion.innerHTML += 
            `<div class = "todo">
            <a href="./Descripcion-pelicula.html?id=${id}&tipo=pelicula">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${image}"></a><a href="./Descripcion-pelicula.html?id=${id}&tipo=pelicula"><h3 class = "titulopeli">${title} (${fecha})</h3></a>
            </div>`
        }
            section1.innerHTML = movie;
            return data
    })

    .catch(function(error){
        console.log(error)
    })

fetch(urlseriestop)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let seccion = document.querySelector(".serietop")
        for (let i=0; i<4; i++){
            console.log(data.results[i]);
            let image = data.results[i].poster_path
            let name = data.results[i].name
            let id = data.results[i].id
            let fecha = data.results[i].first_air_date
            
            seccion.innerHTML += 
            `<div class = "todo">
            <a href="./Descripcion-serie.html?id=${id}&tipo=serie">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${image}"></a><a href="./Descripcion-serie.html"><h3 class = "titulopeli">${name} (${fecha})</h3></a>
            </div>`
        }
            section1.innerHTML = movie;
            return data
    })

    .catch(function(error){
        console.log(error)
    })

fetch(urlseriespop)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let seccion = document.querySelector(".seriepop")
        for (let i=0; i<4; i++){
            console.log(data.results[i]);
            let image = data.results[i].poster_path
            let name = data.results[i].name
            let id = data.results[i].id
            let fecha = data.results[i].first_air_date
            
            seccion.innerHTML += 
            `<div class = "todo">
            <a href="./Descripcion-serie.html?id=${id}&tipo=serie">
            <img class = "Img" src="https://image.tmdb.org/t/p/w500/${image}"></a><a href="./Descripcion-serie.html"><h3 class = "titulopeli">${name} (${fecha})</h3></a>
            </div>`
        }
            section1.innerHTML = movie;
            return data
    })

    .catch(function(error){
        console.log(error)
    })