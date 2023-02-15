// import convertDay from "./convertDay.js"
import { sliderItem } from "./sliderItem.js"


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

// export default function dailyForecast(data){
//     // const day = convertDay(data)
//     const html = data.forecast.forecastday.map(e => {
//         const [yy, mm, dd] = e.date.split("-");
//         const day = dayOfTheWeek(yy, mm, dd);
//         return `
//             <li class="today-weather-item">
//                 <a href="#" class="today-weather-content">
//                     <h3 class="today-session">
//                         ${day} ${dd}
//                     </h3>
//                     <div class="today-temp">
//                         ${e.day.avgtemp_c}°
//                     </div>
//                     <div class="today-astro">
//                         <img src=${e.day.condition.icon} alt="img">
//                     </div>
//                     <div class="today-rain">
//                         <i class="fa-solid fa-cloud-rain"></i>
//                         <span>${e.day.daily_chance_of_rain}%</span>
//                     </div>
//                 </a>
//             </li>

//         `
//     }).join("")
//     return html
// }

export default function dailyForecast(data){
    const [yy, mm, dd] = data.forecast.forecastday[0].date.split("-");
    const day = dayOfTheWeek(yy, mm, dd);
    return `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="sub-item">
                    <div class="sub-day">
                        ${day}
                    </div>
                
                    <img src=${data.forecast.forecastday[0].day.condition.icon} alt="">
                    <div class="sub-temperature">
                        <span class="value">${data.forecast.forecastday[0].day.avgtemp_c} °C</span>
                    </div>
                </div>
            </div>
            ${sliderItem(data)}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>  
    
    `
}