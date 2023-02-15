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
  
  export function sliderItem(weatherApi) {
    //   console.log(weatherApi.forecast.forecastday[0]);
    const html = weatherApi.forecast.forecastday
      .filter((e) => e.date !== weatherApi.forecast.forecastday[0].date)
      .map((e) => {
        // console.log(e)
        const [yy, mm, dd] = e.date.split("-");
        const day = dayOfTheWeek(yy, mm, dd);
        return `
              <div class="carousel-item">
                <div class="sub-item">
                    <div class="sub-day">
                        ${day}, ${dd}-${mm}-${yy}
                    </div>
                    <img src=${e.day.condition.icon} alt="">
                    <div class="sub-temperature">
                        <span class="value">${e.day.avgtemp_c}°C</span>
                    </div>
                </div>
              </div>
            `;
      })
      .join("");
    return html;
  }
  