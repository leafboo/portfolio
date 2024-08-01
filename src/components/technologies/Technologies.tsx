import TechnologyButton from "./TechnologyButton"

export default function Technologies(){
  return (
    <>
      <div className='border border-[#aba7a5] rounded-[.2rem] h-[30rem] p-8'>
        <span className="text-[#77B05F] font-normal text-2xl">
          &gt; Technologies
        </span>
        <br />
        <br />
        
        <div className=" grid grid-cols-3 gap-3">
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                            link="https://en.wikipedia.org/wiki/HTML" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"  
                            link="https://en.wikipedia.org/wiki/CSS" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                            link="https://tailwindcss.com" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            link="https://en.wikipedia.org/wiki/JavaScript" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                            link="https://www.typescriptlang.org" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            link="https://react.dev" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                            link="https://vitejs.dev" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                            link="https://www.php.net" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                            link="https://www.mysql.com" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                            link="https://git-scm.com" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                            link="https://code.visualstudio.com" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                            link="https://www.figma.com" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" 
                            link="https://www.postman.com" />
          <TechnologyButton image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                            link="https://en.wikipedia.org/wiki/Linux" />
        </div>
      </div>
    </>
  )
}