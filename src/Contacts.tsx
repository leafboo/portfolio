import ContactButton from "./assets/ContactButton"
import GitHubLogo from "./assets/images/GihtubLogo.png"

export default function Contacts(){
  return (
    <>
      <div className='flex items-center flex-col border h-[12rem] pt-7'>
        <div className="text-2xl">
          Contact me
        </div>
        <br />
        <div className="flex flex-row">
          <ContactButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
          <ContactButton image={GitHubLogo} />
        </div>
      </div>
    </>
  )
}