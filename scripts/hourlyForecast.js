export default function hourlyForecast(data){
    // console.log(data)
    const currentHour = data.forecast.forecastday[0].date
    const hourCurrent = data.location.localtime
    const date  = new Date(hourCurrent)
    const [yy,mm,dd] = currentHour.split("-")
    let hour = date.getHours(yy,mm,dd)
  
    let hourAddOne = (hour + 1) > 23 ? 0 : hour + 1
    let hourAddTwo = (hour + 2) > 23 ? 0 : hour + 2
    let hourAddThree = (hour + 3) >= 23 ? 1 : hour + 3
    let hourAddFour = (hour + 4) >= 23 ? 2 : hour + 4
  
    return `
    <li class="today-weather-item">
        <a href="#" class="today-weather-content">
            <h3 class="today-session">
                Now
            </h3>
            <div class="today-temp">
                ${data.forecast.forecastday[0].hour[hour].temp_c}°
            </div>
            <div class="today-astro">
                <img src= ${data.forecast.forecastday[0].hour[hour].condition.icon} alt="img">
            </div>
            <div class="today-rain">
                <i class="fa-solid fa-cloud-rain"></i>
                <span>${data.forecast.forecastday[0].hour[hour].chance_of_rain}%</span>
            </div>
        </a>
    </li>
    <li class="today-weather-item">
        <a href="#" class="today-weather-content">
            <h3 class="today-session">
                ${hourAddOne} : 00
            </h3>
            <div class="today-temp">
                ${data.forecast.forecastday[0].hour[hourAddOne].temp_c}°
            </div>
            <div class="today-astro">
                <img src= ${data.forecast.forecastday[0].hour[hourAddOne].condition.icon} alt="img">
            </div>
            <div class="today-rain">
                <i class="fa-solid fa-cloud-rain"></i>
                <span>${data.forecast.forecastday[0].hour[hourAddOne].chance_of_rain}%</span>
            </div>
        </a>
    </li>
    <li class="today-weather-item">
        <a href="#" class="today-weather-content">
            <h3 class="today-session">
                ${hourAddTwo} : 00
            </h3>
            <div class="today-temp">
                ${data.forecast.forecastday[0].hour[hourAddTwo].temp_c}°
            </div>
            <div class="today-astro">
                <img src= ${data.forecast.forecastday[0].hour[hourAddTwo].condition.icon} alt="img">
            </div>
            <div class="today-rain">
                <i class="fa-solid fa-cloud-rain"></i>
                <span><span>${data.forecast.forecastday[0].hour[hourAddTwo].chance_of_rain}%</span>
            </div>
        </a>
    </li>
    <li class="today-weather-item">
        <a href="#" class="today-weather-content">
            <h3 class="today-session">
                ${hourAddThree} : 00
            </h3>
            <div class="today-temp">
                ${data.forecast.forecastday[0].hour[hourAddThree].temp_c}°
            </div>
            <div class="today-astro">
                <img src= ${data.forecast.forecastday[0].hour[hourAddThree].condition.icon} alt="img">
            </div>
            <div class="today-rain">
                <i class="fa-solid fa-cloud-rain"></i>
                <span><span>${data.forecast.forecastday[0].hour[hourAddThree].chance_of_rain}%</span>
            </div>
        </a>
    </li>
    <li class="today-weather-item">
        <a href="#" class="today-weather-content">
            <h3 class="today-session">
                ${hourAddFour} : 00
            </h3>
            <div class="today-temp">
                ${data.forecast.forecastday[0].hour[hourAddFour].temp_c}°
            </div>
            <div class="today-astro">
                <img src= ${data.forecast.forecastday[0].hour[hourAddFour].condition.icon} alt="img">
            </div>
            <div class="today-rain">
                <i class="fa-solid fa-cloud-rain"></i>
                <span><span>${data.forecast.forecastday[0].hour[hourAddFour].chance_of_rain}%</span>
            </div>
        </a>
    </li>
    
    `
}