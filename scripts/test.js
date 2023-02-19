import getWeather, { place } from "./index.js";


const dayOfTheWeek = (a, b, c) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ];
    return weekday[new Date(a, b, c).getDay()];
};

const getHours = (data) => {
    const time = data.time
    const timeResult = time.split(" ")
    return timeResult[1]
}


const cardHeader = document.querySelector(".card-weather-header")
const cardHour = document.querySelector(".card-hour")
const hourlyDate = document.querySelector(".hourlyDate")
const hourltForecastList = document.querySelector(".hourlyForecast-list")
// const btnC = document.querySelector('.nav-temp_c')
const placeNew = localStorage.getItem("test")
localStorage.clear()

function convertCelsiusToFahrenheit(tempCelsius) {
    const tempFahrenheit = (tempCelsius * 9/5) + 32;
    return tempFahrenheit;
}

function convertFahrenheitToCelsius(tempFahrenheit) {
    const tempCelsius = (tempFahrenheit - 32) * 5/9;
    return tempCelsius;
}

const btnC = document.querySelector('.nav-temp_c')
let checkConvert = false
btnC.addEventListener('click', function() {
   checkConvert = !checkConvert
  // Lấy tất cả các phần tử có class "daypart-temp" trên trang
  const tempElements = document.querySelectorAll('.daypart-temp');
  
  // Lặp qua từng phần tử và chuyển đổi nhiệt độ từ độ C sang độ F
  for (let i = 0; i < tempElements.length; i++) {
    if(checkConvert){
        const tempCelsius = parseFloat(tempElements[i].textContent);
        const tempFahrenheit = convertCelsiusToFahrenheit(tempCelsius);
        tempElements[i].textContent = tempFahrenheit.toFixed(1) + "°F";
    }else{
        const tempCelsius = parseFloat(tempElements[i].textContent);
        const tempFahrenheit = convertFahrenheitToCelsius(tempCelsius);
        tempElements[i].textContent = tempFahrenheit.toFixed(1) + "°C";
    }
  }
});

    
    




getWeather(!placeNew ? 'London' : placeNew).then(data => {
  

    const [yy, mm, dd] = data.forecast.forecastday[0].date.split("-");
    const day = dayOfTheWeek(yy, mm, dd);
    const localtime = data.location.localtime.split(" ")
   

    cardHeader.innerHTML = `${data.location.name}, ${data.location.country}`
    cardHour.innerHTML = `As of ${localtime[1]} GMT+07:00`
    const html = `
        <h2 class="hourlyDate">
            ${day}, ${dd}/${mm}/${yy}
        </h2>
        ${
           
            data.forecast.forecastday[0].hour.map((d,idx)=> {
                const timeDaypart = getHours(d)
                
               
                return `
 
                <div class="card-detail">
                    <div class="detail-summary">
                        <h3 class="daypart-time">
                            ${timeDaypart}
                        </h3>
                        <p class="daypart-temp">${d.temp_c}°C</p>
                        <div class="daypart-conditon">
                            <img src=${d.condition.icon} alt="">
                            <p>${d.condition.text}</p>
                        </div>
                        <div class="daypart-rain">
                            <i class="fa-solid fa-cloud-sun"></i>
                            ${d.cloud}%
                        </div>
                        <div class="daypart-wind">
                            <i class="fa-solid fa-wind"></i>
                            ${d.wind_kph} km/h
                        </div>
                        <i class="fa-solid fa-caret-down" data-bs-toggle="collapse" href="#collapseExample${idx}" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                      
                    </div>
                    <div class="dailypart-content collapse" id="collapseExample${idx}">
                        <ul class="dailypart-sub">
                            <li class="detailpart-sub-item">
                                <i class="fa-solid fa-temperature-three-quarters"></i>
                                <div class="detailpart-sub-dield">
                                    <p>Feels Like</p>
                                    <p>${d.feelslike_c}</p>
                                </div>
                            </li>
                            <li class="detailpart-sub-item">
                                <i class="fa-solid fa-wind"></i>
                                <div class="detailpart-sub-dield">
                                    <p>Wind</p>
                                    <p>${d.wind_kph} km/h</p>
                                </div>
                            </li>
                            <li class="detailpart-sub-item">
                                <i class="fa-solid fa-droplet"></i>
                                <div class="detailpart-sub-dield">
                                    <p>Humidity</p>
                                    <p>${d.humidity} %</p>
                                </div>
                            </li>
                            <li class="detailpart-sub-item">
                                <i class="fa-solid fa-sun"></i>
                                <div class="detailpart-sub-dield">
                                    <p>UV index</p>
                                    <p>${d.uv}</p>
                                </div>
                            </li>
                            <li class="detailpart-sub-item">
                                <i class="fa-solid fa-cloud-sun"></i>
                                <div class="detailpart-sub-dield">
                                    <p>Cloud Cover</p>
                                    <p>${d.cloud}%</p>
                                </div>
                            </li>
                            <li class="detailpart-sub-item">
                                <i class="fa-solid fa-cloud-rain"></i>
                                <div class="detailpart-sub-dield">
                                    <p>Rain Amount</p>
                                    <p>${d.will_it_rain}</p>
                                </div>
                            </li>
        
                        </ul>
        
                    </div>
                </div>
            `
        }).join("")
    }
    
    `
    hourltForecastList.insertAdjacentHTML("afterbegin", html)
    

})