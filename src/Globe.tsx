import React from "react";

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

    
  return (
    <>
      <div className='border h-[15rem]'>
        Globe
        <div>
          Time: {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
        </div>
        <div>
          Date: {currentDate.month}/{currentDate.day}/{currentDate.year}
        </div>
      </div>
    </>
  )
}