//* Weather POJO's
let enterpriseWeather = {
  latitude: 31.325638,
  longitude: -85.846725,
  generationtime_ms: 0.14209747314453125,
  utc_offset_seconds: -18000,
  timezone: "America/Chicago",
  timezone_abbreviation: "GMT-5",
  elevation: 108.0,
  current_units: {
    time: "iso8601",
    interval: "seconds",
    temperature_2m: "°F",
    weather_code: "wmo code",
    wind_speed_10m: "mp/h",
  },
  current: {
    time: "2025-08-27T18:45",
    interval: 900,
    temperature_2m: 79.3,
    weather_code: 0,
    wind_speed_10m: 5.9,
  },
};

let atlantaWeather = {
  latitude: 33.759865,
  longitude: -84.39587,
  generationtime_ms: 0.051975250244140625,
  utc_offset_seconds: -14400,
  timezone: "America/New_York",
  timezone_abbreviation: "GMT-4",
  elevation: 327.0,
  current_units: {
    time: "iso8601",
    interval: "seconds",
    temperature_2m: "°F",
    weather_code: "wmo code",
    wind_speed_10m: "mp/h",
  },
  current: {
    time: "2025-08-27T20:45",
    interval: 900,
    temperature_2m: 74.5,
    weather_code: 1,
    wind_speed_10m: 2.4,
  },
};

let seattleWeather = {
  latitude: 47.595562,
  longitude: -122.32443,
  generationtime_ms: 12.040138244628906,
  utc_offset_seconds: -25200,
  timezone: "America/Los_Angeles",
  timezone_abbreviation: "GMT-7",
  elevation: 59,
  current_units: {
    time: "iso8601",
    interval: "seconds",
    temperature_2m: "°F",
    weather_code: "wmo code",
    wind_speed_10m: "mp/h",
  },
  current: {
    time: "2025-08-27T17:45",
    interval: 900,
    temperature_2m: 71.4,
    weather_code: 0,
    wind_speed_10m: 4.5,
  },
};

let newOrleansWeather = {
  latitude: 29.95653,
  longitude: -90.07374,
  generationtime_ms: 0.06031990051269531,
  utc_offset_seconds: -18000,
  timezone: "America/Chicago",
  timezone_abbreviation: "GMT-5",
  elevation: 10,
  current_units: {
    time: "iso8601",
    interval: "seconds",
    temperature_2m: "°F",
    weather_code: "wmo code",
    wind_speed_10m: "mp/h",
  },
  current: {
    time: "2025-08-27T19:45",
    interval: 900,
    temperature_2m: 81.6,
    weather_code: 1,
    wind_speed_10m: 4.8,
  },
};

//* Other Variables
let currentCity = sessionStorage.getItem("currentCity");
let cityName = null;
let tempurature = null;
let windspeed = null;
let weatherCode = null;

//* Functions
onEvent("changeEnterprise", "click", function () {
  sessionStorage.setItem("currentCity", "enterprise");
  currentCity = sessionStorage.getItem("currentCity");
  fetchEnterpriseWeather();
});

onEvent("changeAtlanta", "click", function () {
  sessionStorage.setItem("currentCity", "atlanta");
  currentCity = sessionStorage.getItem("currentCity");
  fetchAtlantaWeather();
});

onEvent("changeSeattle", "click", function () {
  sessionStorage.setItem("currentCity", "seattle");
  currentCity = sessionStorage.getItem("currentCity");
  fetchSeattleWeather();
});

onEvent("changeNewOrleans", "click", function () {
  sessionStorage.setItem("currentCity", "newOrleans");
  currentCity = sessionStorage.getItem("currentCity");
  fetchNewOrleansWeather();
});

function displayInformation() {
  // Enterprise Information
  if (currentCity === "enterprise") {
    //setText("city", "Enterprise")
    cityName = document.getElementById("city");
    cityName.textContent = "Enterprise";

    //setText("temp", enterpriseWeather.current.temperature_2m)
    temperature = document.getElementById("temp");
    temperature.textContent = enterpriseWeather.current.temperature_2m;

    //setText("wind", enterpriseWeather.current.wind_speed_10m)
    windspeed = document.getElementById("wind");
    windspeed.textContent = enterpriseWeather.current.wind_speed_10m;

    //setText("code", enterpriseWeather.current.weather_code)
    weatherCode = document.getElementById("code");
    weatherCode.textContent = enterpriseWeather.current.weather_code;
  }
  // Atlanta Information
  if (currentCity === "atlanta") {
    //setText("city", "Atlanta")
    cityName = document.getElementById("city");
    cityName.textContent = "Atlanta";

    //setText("temp", atlantaWeather.current.temperature_2m)
    tempurature = document.getElementById("temp");
    temperature.textContent = atlantaWeather.current.temperature_2m;

    //setText("wind", atlantaWeather.current.wind_speed_10m;)
    windspeed = document.getElementById("wind");
    windspeed.textContent = atlantaWeather.current.wind_speed_10m;

    //setText("code", atlantaWeather.current.weather_code)
    weatherCode = document.getElementById("code");
    weatherCode.textContent = atlantaWeather.current.weather_code;
  }
  // Seattle Information
  if (currentCity === "seattle") {
    //setText("city", "Seattle")
    cityName = document.getElementById("city");
    cityName.textContent = "Seattle";

    //setText("temp", seattleWeather.current.temperature_2m)
    tempurature = document.getElementById("temp");
    temperature.textContent = seattleWeather.current.temperature_2m;

    //setText("wind", seattleWeather.current.wind_speed_10m;)
    windspeed = document.getElementById("wind");
    windspeed.textContent = seattleWeather.current.wind_speed_10m;

    //setText("code", seattleWeather.current.weather_code)
    weatherCode = document.getElementById("code");
    weatherCode.textContent = seattleWeather.current.weather_code;
  }
  // New Orleans Information
  if (currentCity === "newOrleans") {
    //setText("city", "New Orleans")
    cityName = document.getElementById("city");
    cityName.textContent = "New Orleans";

    //setText("temp", newOrleansWeather.current.temperature_2m)
    tempurature = document.getElementById("temp");
    temperature.textContent = newOrleansWeather.current.temperature_2m;

    //setText("wind", newOrleansWeather.current.wind_speed_10m;)
    windspeed = document.getElementById("wind");
    windspeed.textContent = newOrleansWeather.current.wind_speed_10m;

    //setText("code", newOrleansWeather.current.weather_code)
    weatherCode = document.getElementById("code");
    weatherCode.textContent = newOrleansWeather.current.weather_code;
  }
}

// Fetch Functions

function fetchNewOrleansWeather() {
  console.log("Fetch Weather from New Orleans");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=29.9547&longitude=-90.0751&current=temperature_2m,wind_speed_10m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      newOrleansWeather = result;
      displayInformation();
    })
    .catch((error) => console.error(error));
}

function fetchEnterpriseWeather() {
  console.log("Fetch Weather from Enterprise");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=31.3152&longitude=-85.8552&current=temperature_2m,wind_speed_10m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      enterpriseWeather = result;
      displayInformation();
    })
    .catch((error) => console.error(error));
}

function fetchSeattleWeather() {
  console.log("Fetch Weather from Seattle");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.6062&longitude=-122.3321&current=temperature_2m,wind_speed_10m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      seattleWeather = result;
      displayInformation();
    })
    .catch((error) => console.error(error));
}

function fetchAtlantaWeather() {
  console.log("Fetch Weather from Atlanta");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=33.749&longitude=-84.388&current=temperature_2m,wind_speed_10m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      atlantaWeather = result;
      displayInformation();
    })
    .catch((error) => console.error(error));
}
