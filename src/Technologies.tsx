import TechnologyButton from "./assets/TechnologyButton"

export default function Technologies(){
  return (
    <>
      <div className='border h-[26rem] p-8'>
        <span className="text-[#77B05F]">
          &gt; Technologies
        </span>
        <br />
        <br />
        
        <div className=" grid grid-cols-3 gap-3">
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"/>
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"/>
        </div>
      </div>
    </>
  )
}