const description = {
  wordSpacing: '.45rem'
}

export default function Description(){
  return (
    <>
      <div className='border border-[#aba7a5] rounded-[.2rem] h-[23rem] pt-[3.5rem] pl-[5rem] pr-[4.5rem]'>
        <span className="text-[#77B05F] font-medium text-3xl">&gt; About me</span> <br /><br />
        <div className="leading-10 font-Minecraft text-[.92rem]" style={description}>
          I am Jan Romel Caranguian, I'm a 3rd year college student majoring BSIT in the University of Saint Louis Tuguegarao expected to graduate in the year 2026. I mainly focus on web development specifically front end development.
        </div>
      </div>
    </>
  )
}