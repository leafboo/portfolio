import Name from './Name';
import Globe from './Globe';
import Description from './Description';
import Technologies from './Technologies';
import Projects from './Projects';
import Contacts from './Contacts';
import './App.css'

export default function App() {

  return (
    <>
      <div className='flex justify-center mt-20'>
        <div className='w-[60rem] h-20 border'>
          <Name />
          <Globe />
          <Description />
          <Technologies />
          <Projects />
          <Contacts />
        </div>
      </div>
      
    </>
  )
}


