import currentCondition from "./currentConition.js";
import dailyForecast from "./dailyForecast.js";
import hourlyForecast from "./hourlyForecast.js";
// import test from "./test.js";
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


let place = "London"
// export {place}
// console.log(content)

// Click button search
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    place = inputSearch.value;
    inputSearch.value = "";
    getWeather(place);
    // console.log(place)
});

//   Fetch Api
async function getWeather(inputValue){

    // http://api.weatherapi.com/v1/forecast.json?key=713bba47a51b403b86e31123230802&q=${inputValue}&days=7&aqi=yes&alerts=yes
    // http://api.weatherapi.com/v1/forecast.json?key=11b9921868184b8187175511231402&q=${inputValue}&days=7&aqi=yes&alerts=yes
    try{
        const url = `https://api.weatherapi.com/v1/forecast.json?key=713bba47a51b403b86e31123230802&q=${inputValue}&days=7&aqi=yes&alerts=yes`;
        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)
    
        renderUI(data)
    }catch{
        alert("Không tồn tại địa điểm. Xin hãy nhập lại")
    }
}

getWeather(place)

function renderUI(data){
    hourF.innerHTML = hourlyForecast(data)
    current.innerHTML = currentCondition(data)
    todayF.innerHTML = todayForeCast(data)
    todayW.innerHTML = todayWeather(data)
    dailyF.innerHTML = dailyForecast(data)
    // test(data)
}

// export {place}

// background-image: linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a);