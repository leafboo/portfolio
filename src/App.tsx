import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="bg-blue-600 text-cyan-300">Hello world</h1>
        <button className='bg-indigo-600 text-amber-50'>Press me</button>
      </div>
      
    </>
  )
}

export default App
