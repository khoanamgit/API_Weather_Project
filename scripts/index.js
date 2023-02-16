import currentCondition from "./currentConition.js";
import dailyForecast from "./dailyForecast.js";
import hourlyForecast from "./hourlyForecast.js";
import todayForeCast from "./todayForecast.js";
import todayWeather from "./todayWeather.js";

const inputSearch = document.querySelector(".input-search");
const btnSubmit = document.querySelector(".btn-search");
const content = document.querySelector(".content-test");
const current = document.querySelector(".current-condition")
const todayF = document.querySelector(".today-forecast")
const todayW = document.querySelector(".today-weather")
const dailyF = document.querySelector("#daily-list")
const hourF = document.querySelector("#hour-list")
const body = document.querySelector("body")
const navbar = document.querySelector(".navbar")
// console.log(body)
// const changeCtoF = document.querySelector(".nav-temp_f")

let place = "London"
let fetchedData
// Click button search
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    place = inputSearch.value;
    inputSearch.value = "";
    localStorage.setItem("test",place)
    // getWeather(place)
    renderUI()

});

//   Fetch Api
async function getWeather(inputValue){

    // http://api.weatherapi.com/v1/forecast.json?key=713bba47a51b403b86e31123230802&q=${inputValue}&days=7&aqi=yes&alerts=yes
    // http://api.weatherapi.com/v1/forecast.json?key=11b9921868184b8187175511231402&q=${inputValue}&days=7&aqi=yes&alerts=yes
    try{
        const url = `https://api.weatherapi.com/v1/forecast.json?key=11b9921868184b8187175511231402&q=${inputValue}&days=7&aqi=yes&alerts=yes`;
        const res = await fetch(url)
        const data = await res.json()
        
        
        // renderUI(data)
        return data
    }catch{
        alert("Không tồn tại địa điểm. Xin hãy nhập lại")
    }
}

// getWeather(place)

function renderUI(){
    getWeather(place).then(data =>{
        fetchedData = data
        const temp_c_test = fetchedData.current.temp_c
        // console.log(fetchedData)
        hourF.innerHTML = hourlyForecast(fetchedData)
        current.innerHTML = currentCondition(fetchedData,current,temp_c_test,body,navbar)
        todayF.innerHTML = todayForeCast(fetchedData)
        todayW.innerHTML = todayWeather(fetchedData)
        dailyF.innerHTML = dailyForecast(fetchedData)
        // localStorage.setItem("weatherApi", fetchedData)
        // test(data)
    }) 
    // hourF.innerHTML = hourlyForecast(data)
    // current.innerHTML = currentCondition(data,current)
    // todayF.innerHTML = todayForeCast(data)
    // todayW.innerHTML = todayWeather(data)
    // dailyF.innerHTML = dailyForecast(data)
    // test(data)
}

renderUI()
export default getWeather   
export {place}