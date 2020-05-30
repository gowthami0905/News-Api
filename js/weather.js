async function getPlaces() {
  var input = document.getElementById("input");
  await new google.maps.places.Autocomplete(input);
}
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchKey = document.getElementById("input").value;
  console.log(searchKey);
  searchWeather(searchKey);
});

function searchWeather(searchKey) {
  let WeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=8e5105b275de1fe967d1b077289af496`;

  window
    .fetch(WeatherApi)
    .then((data) => {
      data
        .json()
        .then((weathers) => {
          console.log(weathers);
          let weatherData = weathers.weather;
          let main = weathers.main;
          output = [];
          for (let x of weatherData) {
            output += `
                <div class="col-md-12 mt-4 card">
                <div class="card-body">
                <h1>${weathers.name}</h1>
                <div>
                <p class="icon">
                <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></p>
                <p><span>temp:</span>
                <span class="temp">${weathers.main.temp}</span></p>
                <p class="float-left">humidity:${weathers.main.humidity}&deg;c</p>
                <p class="des float-left">${x.description}</p>
                <p class="des float-right">${x.min}</p></div>
                </div>
                </div>
                `;
            document.getElementById("weatherTemplate").innerHTML = output;
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
