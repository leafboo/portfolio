import React from "react";
import Clock from "../../assets/images/Clock.png"
import Calendar from "../../assets/images/Calendar.png"
import Cloud from "../../assets/images/Cloud.png"
import InputField from "./InputField";

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
      try {
        async function fetchWeatherData() {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeatherTemperature(Number((data.main.temp - 273.15).toFixed(0)));
        }
        fetchWeatherData();
      } catch(err) {
        console.error(err)
      }
      
    }, [])



    
  return (
    <>
     <div className="h-[18.5rem]">
      <div className='border border-[#aba7a5] rounded-[.2rem] h-[16rem] p-11 mb-[.5rem]'>
        <br />
        <br />
        <br />
        <br />
        <div className="leading-7">
          <div className="flex items-center ">
            <img src={Clock} className=" mr-3" />
            <span className="font-Minecraft text-[.8rem]">{currentTime.hours} : {currentTime.minutes} : {currentTime.seconds} &nbsp;(PHT)</span> 
          </div>
          <div className="flex items-center">
            <img src={Calendar} className="mr-3"/>
            <span className="font-Minecraft text-[.8rem]">{currentDate.month}/ {currentDate.day}/ {currentDate.year}</span>
          </div>
          <div className="flex items-center">
            <img src={Cloud} className="mr-3"/>
            <span className="font-Minecraft text-[.8rem]">{weatherTemperature} &deg;C</span>
          </div>
        </div>
      </div>
      
      <InputField />
    </div>
    </>
  )
}