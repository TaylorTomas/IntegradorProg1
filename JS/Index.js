let url = 'https://api.themoviedb.org/3/movie/550?api_key=b76faeee5fc3002a166c7f5c929c2c33'

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(){

    })

    .catch(function(){
        
    })