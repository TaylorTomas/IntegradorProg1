
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
    .then(function(){
        console.log(data);
        let contenedor = document.querySelector(".pelitop")
        for (let i=0; i<4; i++){
            console.log(data.results[i]);
            let image = data.results[i].poster_path
            let titile = data.results[i].titile
            let id = data.results[i].id
            contenedor.innerHTML += `<a href="./Descripcion-pelicula.html">
            <img class = "Img" src="Fotos/Shawshank-Redemption.jpg/${image}"></a><h3 class = "texto">${title}</h3>` 
        }
            section1.innerHTML = movie;
            return data
    })

    .catch(function(error){
        console.log(error)
    })