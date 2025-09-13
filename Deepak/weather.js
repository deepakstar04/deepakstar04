const apiKey ="d63098f145215262649c95ee84989361";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
async function checkweather(city){
    const response = await fetch(apiUrl + city`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

}


 document.querySelector("city").innerHTML = data.name;
 document.querySelector("temp").innerHTML = Math.round(data.main.temp) + "°c";
 document.querySelector("humidity").innerHTML = data.main.humidity + "%";
 document.querySelector("wind").innerHTML = data.main.woind.speed + "km/h";
 
 searchbtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
 })