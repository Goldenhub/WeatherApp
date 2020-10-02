
let city = document.querySelector('#city');
let btn = document.querySelector('#btn');
let get = document.querySelector('#getWeather');
let content = document.querySelector('.content');
let main = document.querySelector('.main');

get.addEventListener('submit', (e)=> {
    e.preventDefault();
    // if(city.value == '') {
    //     alert('enter a city')
    // }
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?cnt=20&type=link%252C%20accurate&units=metric&q=${city.value}`,
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "8f482d0e56mshe2f5d8761ae3065p1685e6jsn0baf7516d4f0"
        }
    })
    .then(response => {
        content.innerHTML = '';
        return response.json()

    })
    .then(data => {
        for(e of data.list) {
            console.log(e);
            let result = document.createElement('div');
            result.classList.add('result');
            let card =  `
                <div class="h">
                <h2 id="name">${e.name}
                </h2>
                <strong>
                <small>Long: ${e.coord.lon},</small>
                <small> Lat: ${e.coord.lat}</small>
                <strong>
                </div>
                <div class="para">
                <p>Temp: ${e.main.temp} <sup>o</sup>celsius</p>
                <p>Pressure: ${e.main.pressure} bar</p>
                <p>Humidity: ${e.main.humidity}%</p>
                </div>
                `;
            result.innerHTML = card;
            content.appendChild(result);
        }
    })
    .catch(err => {
        console.log(err);
    });
})


