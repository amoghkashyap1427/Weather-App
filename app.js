const placeLocation = document.getElementById("placeLocation");
const degree = document.getElementById("degree");
const date = document.getElementById("date");
const toggle = document.getElementById("miniToggle");
const humidity = document.getElementById("humidity");
const visiblity = document.getElementById("visiblity");
const airPressure = document.getElementById("airPressure");
const wind = document.getElementById("wind");
const inputLocation = document.getElementById("inputLocation");
const searchBtn = document.getElementById("searchLocation");
const mainContent = document.querySelector(".mainContent");

let currentCelsius = null;

// Update UI
function updateOutput(result) {
    placeLocation.innerText = result.name;

    let kelvin = result.main.temp;
    currentCelsius = kelvin - 275.15;
    degree.innerText = `${currentCelsius.toFixed(0)}°C`;

    humidity.innerText = `${result.main.humidity}%`;
    airPressure.innerText = `${result.main.pressure} hPa`;
    visiblity.innerText = `${(result.visibility / 1000).toFixed(1)} km`;
    wind.innerText = `${(result.wind.speed * 3.6).toFixed(2)} km/h`;

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    date.innerText = today.toLocaleDateString("en-US", options);

    // SHOW CONTENT
    mainContent.style.display = "block";
}

// Toggle °C / °F
toggle.addEventListener("change", () => {
    if (currentCelsius === null) return;

    if (toggle.checked) {
        let f = (currentCelsius * 9 / 5) + 32;
        degree.innerText = `${f.toFixed(1)}°F`;
    } else {
        degree.innerText = `${currentCelsius.toFixed(0)}°C`;
    }
});

// Fetch weather
function searchWeather() {
    let realLocation = inputLocation.value.trim();
    if (!realLocation) return;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${realLocation}&APPID=bc2a0d29fa9f121ef73e5026821483d8`;

    fetch(url)
        .then(res => res.json())
        .then(result => {
            if (result.cod !== 200) {
                mainContent.style.display = "none";
                alert("Location not found!");
                return;
            }
            updateOutput(result);
        })
        .catch(() => alert("Error fetching weather data"));
}

// Button click
searchBtn.addEventListener("click", searchWeather);

// Press Enter in input field
inputLocation.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchWeather();
    }
});
