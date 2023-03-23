const app = document.querySelector('.app');
const search = document.querySelector('.search-bar button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error = document.querySelector('.error');




search.addEventListener('click', () => {

  const city = document.querySelector('.search-bar input').value;
const APIKey ='d1678a1f882974f5f06d2cf72d6cd358'

  if (city != '') {

    app.style.height = '430px';
  }

    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
  .then(response => 
     response.json())
  .then(data => {

    if (data.cod === '404') {

      error.style.display = 'block';
      weatherBox.style.display = 'none';
      weatherDetails.style.display = 'none';
      app.style.height = '180px';
      return;
    }

    error.style.display = 'none';
    weatherBox.style.display = '';
    weatherDetails.style.display = '';

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.querySelector('.humidity section');
    const wind = document.querySelector('.wind section');

    switch (data.weather[0].main) {
      case 'Clear':
        image.src = 'images/clear.png';
        break;
      case 'Clouds':
         image.src = 'images/cloud.png';
        break;
      case 'Rain':
        image.src = 'images/rain.png';
        break;      
      case 'Thunderstorm':
        image.src = 'images/storm.png';
        break;
      case 'Snow':
        image.src = 'images/snow.png';
        break;
      case 'Mist':
        image.src = 'images/mist.png';
        break;
        default:
          image.src ='';
    }

    temperature.innerHTML = `${data.main.temp}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}Km/h`;


  })
  .catch(error => {
    console.log("Error!");
    console.error(error);
  });  


})

