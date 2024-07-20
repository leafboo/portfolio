import ProjectButton from "./assets/ProjectButton"

export default function Projects(){
  return (
    <>
      <div className='border h-[21rem] p-11'>
        <span className="text-[#77B05F]">&gt; Projects</span>
        <br />
        <br />
        
        <div className=" grid grid-cols-1 gap-3">
          <ProjectButton text="Art Gallery" />
          <ProjectButton text="Todo List" />
          <ProjectButton text="MyAnimeList Clone" />
          <ProjectButton text="CPU Scheduling" />
        </div>
      </div>
    </>
  )
}