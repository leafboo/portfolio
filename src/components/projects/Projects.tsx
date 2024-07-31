import ProjectButton from "./ProjectButton"

const projectsFont = {
  wordSpacing: '.45rem'
}

export default function Projects(){
  return (
    <>
      <div className='border border-[#aba7a5] rounded-[.2rem] h-[25rem] pl-16 pr-16 pt-14'>
        <span className="text-[#77B05F] font-medium text-3xl">&gt; Projects</span>
        <br />
        <br />
        
        <div className=" grid grid-cols-1 gap-3 font-Minecraft text-[.92rem]" style={projectsFont}>
          <ProjectButton text="Art Gallery" />
          <ProjectButton text="Todo List" />
          <ProjectButton text="MyAnimeList Clone" />
          <ProjectButton text="CPU Scheduling" />
        </div>
      </div>
    </>
  )
}