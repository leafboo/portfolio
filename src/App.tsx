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
        <div className='flex justify-between w-[65rem] h-[40rem] border'>

          <div className='w-[45rem] h-[40rem] border'> 
            column 1
            <div className=' flex flex-col'>
                <span>Name</span>
                <span>Description</span>
                <span>Projects</span>
            </div>
          </div>
          
          <div className='w-[17rem] h-[40rem] border'>
            column 2
            <div className=' flex flex-col'>
                <span>Globe</span>
                <span>Technologies</span>
                <span>Contacts</span>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  )
}


