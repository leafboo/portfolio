import EnterButton from "./EnterButton"

export default function InputField() {
  return (
    <>
      <div className="flex h-[2rem] gap-2">
        <EnterButton />
        <input type="text" className="border border-[#aba7a5] rounded-[.2rem] w-[13rem] text-[#aba7a5]
                                      bg-transparent pl-1 hover:border-2 focus:outline-none focus:border-2
                                      transition ease-out duration-150" />
 
    

      </div>
    </>
  )
}