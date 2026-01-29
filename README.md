🌦️ Weather17 — Weather Web App -- https://weather17.niat.tech/

A responsive weather application that shows real-time weather details for any city using the OpenWeather API.

🚀 Features

🔍 Search weather by city name
🌡️ Temperature display with °C ↔ °F toggle
💧 Shows humidity, visibility, air pressure & wind speed
📅 Displays current date
🎯 Weather card appears only after search (clean UI)
📱 Fully responsive design

🛠️ Tech Stack

🧱 HTML5 — Structure
🎨 CSS3 + Tailwind CSS — Styling & layout
⚙️ JavaScript — Logic & dynamic updates
🌍 OpenWeather API — Live weather data
⭐ Font Awesome — Icons

🌐 API Integration

📡 Fetches real-time weather data from OpenWeather
📦 Receives data in JSON format
🔎 Extracts temperature, humidity, pressure, visibility & wind
⚠️ Handles invalid city names and network errors

🔄 Data Conversions

🌡️ Kelvin → Celsius
🌡️ Celsius → Fahrenheit (toggle without new API call)
🌬️ Wind speed: m/s → km/h
👀 Visibility: meters → kilometers

🧠 Challenges Faced

🧩 Understanding complex API response structure
🔄 Converting units to user-friendly values
🎛️ Managing dynamic UI updates without page reload
👁️ Showing weather card only after successful search
❌ Handling errors like empty input or wrong city
📱 Maintaining responsiveness across screen sizes

📁 Project Structure

index.html — Page structure
styles.css — Custom styles
script.js — App logic & API handling
