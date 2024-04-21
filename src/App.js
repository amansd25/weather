import React from "react";
import "./App.css";
import Weather from "./Weather";
import CityWeather from "./CitiesTable";
const  App =()=> {
  return (
    <div className="App">
      <Weather/>
      <CityWeather/>
    </div>
  );
}

export default App;
