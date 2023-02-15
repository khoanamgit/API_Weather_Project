export default function convertDay(weatherApi){

    const dayOfTheWeek = (a, b, c) => {
        const weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return weekday[new Date(a, b, c).getDay()];
      };
    // console.log(weatherApi)
    const test = weatherApi.forecast.forecastday[0].date
    const [yy,mm,dd] = test.split("-")
    const day = dayOfTheWeek(yy,mm,dd)
    // console.log(day)
    return day
}