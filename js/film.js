$(function(){
    console.log("chargé")
    $.getJSON('./js/film.json', (data)=>{
        for(let i = 0; i< data.film.length; i++){
            console.log(data.film[i].titre+" "+data.film[i].date
            +" "+data.film[i].real+" "+data.film[i].genre
            +" "+data.film[i].sortie_dvd)
            $('main').append(`
                                <figure>
                                    <img src="./asset/${data.film[i].image}" alt="">
                                    <figcaption><h2>${data.film[i].titre}</h2>
                                    <p><span>Date</span> ${data.film[i].date}<br>
                                    <span>Réal</span> ${data.film[i].real}<br>
                                    <span>Genre</span> ${data.film[i].genre}<br>
                                    <span>Sortie DVD</span> ${data.film[i].sortie_dvd}
                                    </p>

                                </figure>
                                `)
        }
    })
})