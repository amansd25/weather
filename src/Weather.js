import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";


const Weather = () =>{
 const [inputText , setInputText] = useState("mumbai");
 const [cityWeather, setCityWeather]= useState({});

 const [show, setShow]= useState(true);

 useEffect(() =>{
 getCityWeather();
 }, []);

 async function getCityWeather(){
  const data =  await fetch("https://api.weatherapi.com/v1/current.json?key=2b1a8f9bfc804b599e1141244232906&q="+ inputText +"&aqi=no")
  const json = await data.json();
  setCityWeather(json);
  console.log(json); 
 }
 const searchPressed = ()=>{
 //console.log(inputText);
 getCityWeather();
 }
 const clicked =()=>{
if(show == false){
  return setShow(true);
}
else{
  return setShow(false);
}
 }
return(Object.keys(cityWeather).length === 0)?(<h1>Fetching Weather....</h1>):(
        <div>
          <button onClick={clicked}>Click me</button>
        {
          (show)?(
      <div>
      <h1>Weather App</h1>
           
           <h2>{cityWeather.location.name +", "+ cityWeather.location.country}</h2>
           <h3>{cityWeather.current.temp_c}*C</h3>
           <img src={cityWeather.current.condition.icon}/>
           <h3>{cityWeather.current.condition.text}</h3>
        <input 
        type="text"
        placeholder="Enter City name"
        onChange={(e)=>setInputText(e.target.value)}
        value={inputText}/>
        <button onClick={()=>searchPressed()}>Search</button> 
      </div>
          ):(<div>Aman Raj Show me weather..... </div>)
      }</div>  
    )
}
export default Weather;
//search
//api
//update