# 🌤️ Simple Weather App

A simple weather application built using **HTML**, **CSS**, and **JavaScript**, demonstrating real-time data fetching from a public **Weather API**.

---

## 📌 Project Overview

This application allows users to input a location (e.g., **London**, **Dehradun**) and receive up-to-date weather information such as:

- 🌡️ Temperature  
- 🌍 Location  
- ☁️ Weather conditions  

It uses [WeatherAPI.com](https://www.weatherapi.com/) to fetch data and dynamically updates the user interface based on the response.

---

## ⚙️ How It Works

1. **User Input**  
   User enters a location in the input field.

2. **API Request**  
   JavaScript sends a request to the Weather API using your API key.

3. **Data Processing**  
   The app parses the JSON response and extracts weather information.

4. **Dynamic UI Update**  
   Retrieved weather data is displayed in the browser.

> 🔑 **Note:** You must sign up at [WeatherAPI.com](https://www.weatherapi.com/) to get your own API key.

---

## 🛠️ Development Steps

### ✅ Step 1: Front-End Setup

- Structure the page using **HTML**
- Style it with **CSS**
- Add interactivity using **JavaScript**

### ✅ Step 2: Get Your API Key

- Sign up or log in to [WeatherAPI.com](https://www.weatherapi.com/)
- Generate and copy your personal **API key**

### ✅ Step 3: Understand the API

- Use the API **Explorer** to:
  - Understand request parameters (e.g., `q=London`)
  - Analyze response format (e.g., location, temperature, condition)

### ✅ Step 4: API Integration

- Use JavaScript (`fetch()` or `axios`) to:
  - Send requests with your API key
  - Process and display relevant weather data

### ✅ Step 5: Testing & Deployment

- Run the project locally using a **Live Server**
- Test with different locations like `New York`, `Tokyo`, or `Dehradun`
- Optionally, **deploy** the project using:
  - GitHub Pages
  - Netlify
  - Vercel

---

## 💡 Bonus: What Are APIs?

An **API (Application Programming Interface)** allows different software components to communicate with each other.

🔹 Not limited to web services!  
Even your **keyboard** uses **System APIs** to send keystrokes to the screen.

🧠 In JavaScript, `console.log()` is **not** part of the language itself.  
It’s provided by the browser environment – **an API**, in action.

---

## 🚀 Future Ideas

- 🌐 Add support for different units (Celsius/Fahrenheit)
- 📍 Use browser **geolocation** to detect user's current location
- 🎨 Improve UI with animations and weather icons
- 📰 **Build a News App** using a News API as a follow-up project

---

## 📷 Preview (Optional)

![Weather App Screenshot](path-to-your-screenshot.png)

---

## Author

**Arghya Das**  

---


