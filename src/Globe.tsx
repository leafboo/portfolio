import React from "react";

export default function Globe(){

  const [currentTime, setCurrentTime] = React.useState({})


    React.useEffect(() => {
      try {
        async function fetchTime() {
          const response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Manila")
          const data = await response.json() 
          setCurrentTime(data)
        }
        fetchTime()
      } catch(err) {
        console.log(err)
      }
    }, [currentTime])

    console.log(currentTime)

  return (
    <>
      <div className='border h-[15rem]'>
        Globe
        <div>
          Time: {currentTime.datetime}
        </div>
        <div>
          Date: 
        </div>
      </div>
    </>
  )
}