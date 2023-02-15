
export default function todayForeCast(data){
    return `
            <div class="todayForecast-header">
                <h2 class="todayForecast-title">
                    Today's Forecast for ${data.location.name}, ${data.location.country}
                </h2>
            </div>
            <div class="today-weatherCard">
                <ul class="today-weather-list">
                    <li class="today-weather-item">
                        <a href="#" class="today-weather-content">
                            <h3 class="today-session">
                                Morning
                            </h3>
                            <div class="today-temp">
                                ${data.forecast.forecastday[0].hour[9].temp_c}°
                            </div>
                            <div class="today-astro">
                                <img src=${data.forecast.forecastday[0].hour[9].condition.icon} alt="img">
                            </div>
                            <div class="today-rain">
                                <i class="fa-solid fa-cloud-rain"></i>
                                <span>${data.forecast.forecastday[0].hour[9].chance_of_rain} %</span>
                            </div>
                        </a>
                    </li>
                    <li class="today-weather-item">
                        <a href="#" class="today-weather-content">
                            <h3 class="today-session">
                                Afternoon
                            </h3>
                            <div class="today-temp">
                                ${data.forecast.forecastday[0].hour[13].temp_c}°
                            </div>
                            <div class="today-astro">
                                <img src=${data.forecast.forecastday[0].hour[13].condition.icon} alt="img">
                            </div>
                            <div class="today-rain">
                                <i class="fa-solid fa-cloud-rain"></i>
                                <span>${data.forecast.forecastday[0].hour[13].chance_of_rain} %</span>
                            </div>
                        </a>
                    </li>
                    <li class="today-weather-item">
                        <a href="#" class="today-weather-content">
                            <h3 class="today-session">
                                Evening
                            </h3>
                            <div class="today-temp">
                                ${data.forecast.forecastday[0].hour[18].temp_c}°
                            </div>
                            <div class="today-astro">
                                <img src=${data.forecast.forecastday[0].hour[18].condition.icon} alt="img">
                            </div>
                            <div class="today-rain">
                                <i class="fa-solid fa-cloud-rain"></i>
                                <span>${data.forecast.forecastday[0].hour[18].chance_of_rain} %</span>
                            </div>
                        </a>
                    </li>
                    <li class="today-weather-item">
                        <a href="#" class="today-weather-content">
                            <h3 class="today-session">
                                Overnight
                            </h3>
                            <div class="today-temp">
                            ${data.forecast.forecastday[0].hour[21].temp_c}°
                            </div>
                            <div class="today-astro">
                                <img src=${data.forecast.forecastday[0].hour[21].condition.icon} alt="img">
                            </div>
                            <div class="today-rain">
                                <i class="fa-solid fa-cloud-rain"></i>
                                <span>${data.forecast.forecastday[0].hour[21].chance_of_rain} %</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="today-forecast-footer">
                <a href="#" class="btn">
                    Next Hours
                </a>
            </div>
      
    `
}