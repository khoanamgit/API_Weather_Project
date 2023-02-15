export default function todayWeather(data){
    return `
            <div class="todayForecast-header">
                <h2 class="todayForecast-title">
                    Today's Weather for ${data.location.name}, ${data.location.country}
                </h2>
            </div>
            <div class="today-detail-header">
                <div class="today-detail-card">
                    <span class="today-tempValue">${data.current.temp_c}°</span>
                    <span>${data.current.condition.text}</span>
                </div>
                <div class="today-sunrise">
                   
                </div>
                <div class="today-detail-card-container">
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-temperature-three-quarters"></i>
                            <span>High / Low</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.maxtemp_c}°</span>
                            <span>/</span>
                            <span>${data.forecast.forecastday[0].day.mintemp_c}°</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-droplet"></i>
                            <span>Humidity</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.avghumidity}%</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-wind"></i>
                            <span>Wind</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.maxwind_kph} km/h</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-cloud-rain"></i>
                            <span>Change of rain</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.daily_chance_of_rain} %</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            <span>Pressure</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].hour[0].pressure_mb} mb</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-sun"></i>
                            <span>UV Index</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.uv} of 10</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-eye"></i>
                            <span>Visibility</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.avgvis_km} km</span>
                        </div>
                    </div>
                    <div class="today-detail-item">
                        <div class="today-detail-lable">
                            <i class="fa-solid fa-snowflake"></i>
                            <span>Snow</span>
                        </div>
                        <div class="today-detail-temp">
                            <span>${data.forecast.forecastday[0].day.daily_chance_of_snow} %</span>
                        </div>
                    </div>
                </div>
            </div>
    `
}