import ContactButton from "./ContactButton"
import GitHubLogo from "../../assets/images/GihtubLogo.png"

export default function Contacts(){
  return (
    <>
      <div className='flex items-center flex-col border border-[#aba7a5] rounded-[.2rem] h-[12rem] pt-7'>
        <div className="font-Minecraft text-[1.1rem]">
          Contact me
        </div>
        <br />
        <div className="flex flex-row">
          <ContactButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                         link="https://www.linkedin.com/in/jan-romel-caranguian-67090b303/" />
          <ContactButton image={GitHubLogo}
                         link="https://github.com/leafboo" />
        </div>
      </div>
    </>
  )
}