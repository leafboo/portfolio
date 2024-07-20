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
      <div className='flex justify-center mt-20 text-zinc-50'>
        <div className='flex justify-between w-[70rem]'>

          <div className='w-[50rem]'> 
            <div className=' flex flex-col gap-y-8'>
                <Name />
                <Description />
                <Projects />
                <br /><br /><br />
            </div>
          </div>
          
          <div className='w-[17rem]'>
            <div className=' flex flex-col gap-8'>
                <Globe />
                <Technologies />
                <Contacts />
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  )
}


