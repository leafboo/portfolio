import OnlineStatus from "./assets/OnlineStatus"

export default function Name(){
  return (
    <>
      <div className='relative border border-[#aba7a5] rounded-[.2rem] h-[25rem] pt-24 pl-24 leading-[5rem]'>
        <div className="text-[#77B05F] text-4xl">
          &gt; Hello there,
        </div>
        <div className="font-medium text-[4.3rem]">
          My name is Jan
        </div>
        <div className="absolute bottom-[-0.5rem] right-[2rem]">
          <OnlineStatus />
        </div>
      </div>
    </>
  )
}