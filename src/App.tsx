import Name from './components/name/Name';
import Globe from './components/globe/Globe';
import Description from './components/description/Description';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import CoolWebsites from './components/coolWebsite/CoolWebsites';
import './App.css'

export default function App() {

  return (
    <>
      <div className='flex justify-center mt-20 text-[#F5EFEB]'>
        <div className='flex w-[70rem] gap-x-9'>

          <div className='w-[50rem]'> 
            <div className=' flex flex-col gap-y-9'>
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
                <CoolWebsites />
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  )
}


