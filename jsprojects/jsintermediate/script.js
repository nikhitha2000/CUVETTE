const input = document.querySelector('input');
const btn = document.getElementById("btn");
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');


const apikey = 'bfc67d5ab962d21444f2a22b9d85cfce';


btn.addEventListener("click",AfterClick)

function AfterClick() {
    let city = input.value;
    getweather(city);
}

function getweather(city) {
    console.log(city);
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apikey}`)
        .then(response=>response.json())
        .then(data=>console.log(data))
        // const iconCode = data.weather[0].icon;
        // icon.innerHTML = `${iconCode}`;
}

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
