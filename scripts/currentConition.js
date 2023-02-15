export default function currentCondition(data,current){
    // const current = document.querySelector('.current-condition')
    let localtime = data.location.localtime.split(" ")
    const test = data.current.temp_c
    
    if(test < 25){
        current.style.backgroundImage = "url('https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70')"
    }else{
        //  url("https://s.w-x.co/WeatherImages_Web/WeatherImage_Fair-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70");
        current.style.backgroundImage = " url('https://s.w-x.co/WeatherImages_Web/WeatherImage_Fair-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70')"
    }
    return  `
       
            <div class="currentCondition-header">
                <h1 class="current-place">
                    ${data.location.name}, ${data.location.country} <span>As of ${localtime[1]} GMT+07:00</span>
                </h1>
            </div>
            <div class="currentConditon-body">
                    <div class="condition-primary">
                        <span class="temperature">
                            ${data.current.temp_c}°C
                        </span>
                    <div class="astro">
                        ${data.current.condition.text}
                    </div>
                    <div class="tempDayNight">
                        <span class="day">Day: ${data.forecast.forecastday[0].day.maxtemp_c}°C</span>
                        <span>|</span>
                        <span class="night">Night: ${data.forecast.forecastday[0].day.mintemp_c}°C</span>
                    </div>
            </div>
            <div class="condition-second">
                <img src=${data.current.condition.icon} alt="img">
            </div>
       
    `
    // current.innerHTML = html
}