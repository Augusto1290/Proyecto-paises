fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(datos => {
        let banderas = ''
        for (let pais of datos) {
            banderas += `<div class="tarjeta"><img src="${pais.flag}"><br>
                    <p>Pais:${pais.name}</p>
                    <p>Capital:${pais.capital}</p>
                    <p>Población:${pais.population.toLocaleString()}</p>
                    <p>Continente:${pais.region}</p>
                    <p>Idioma:${pais.languages[0].name}</p>
           
               </div>`
        }
        const elemento = document.querySelector("#banderas")
        elemento.innerHTML = banderas
    })
   // <p>Moneda:${pais.currencies[0].name}</p>