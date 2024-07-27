import dimdenButton from "./assets/websiteButtons/dimden.gif"
import melankorinButton from "./assets/websiteButtons/melankorin.gif"
import feelingmachineButton from "./assets/websiteButtons/feelingmachine.gif"

export default function CoolWebsites() {
  return (
    <>
      <div className='flex flex-col items-center border border-[#aba7a5] rounded-[.2rem] h-[8rem] pt-4'>
        <div className="font-Minecraft text-[#77B05F] text-[.9rem]">
          Cool websites I found
        </div>
        <span>( will I add this? )</span>
        <div className="flex">
          <a href="https://dimden.dev/" target="_blank"><img src={dimdenButton} /></a>
          <a href="https://melankorin.net/" target="_blank"><img src={melankorinButton} /></a>
          <a href="https://feelingmachine.moe" target="_blank"><img src={feelingmachineButton}/></a>
        </div>
        
        
      </div>
      
    </>
  )
}