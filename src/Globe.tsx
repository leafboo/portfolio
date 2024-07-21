import React from "react";
import Clock from "./assets/Clock.png"
import Calendar from "./assets/Calendar.png"
import Cloud from "./assets/Cloud.png"

export default function Globe(){
  const [currentTime, setCurrentTime] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [currentDate, setCurrentDate] = React.useState({
      month: 0,
      day: 0,
      year: 0
    }
  )
  const [weatherTemperature, setWeatherTemperature] = React.useState(0)


    setInterval(() => {
      const date = new Date()
      setCurrentTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      })

      setCurrentDate({
        month: date.getMonth() + 1, // getMonth starts at 0 so add 1
        day: date.getDate(),
        year: date.getFullYear()
      })
      
    }, 1000)

    
    const myApiKey = "8ea9cc804ba1a34cd3955bc9403d3e24";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${1680932}&appid=${myApiKey}`;

    React.useEffect(() => {
      async function fetchWeatherData() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherTemperature(Number((data.main.temp - 273.15).toFixed(0)));
      }
      fetchWeatherData();
    })



    
  return (
    <>
      <div className='border h-[15rem] p-11'>
        <span>Globe</span> <br /><br />
        <div>
          <img src={Clock} className="inline-block mr-3" />
          <span>{currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}</span> 
        </div>
        <div>
          <img src={Calendar} className="inline-block mr-3"/>
          <span>{currentDate.month}/{currentDate.day}/{currentDate.year}</span>
        </div>
        <div>
          <img src={Cloud} className="inline-block mr-3"/>
          <span>{weatherTemperature} &deg;C</span>
        </div>
      </div>
    </>
  )
}