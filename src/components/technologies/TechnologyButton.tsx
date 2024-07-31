type buttonProps = {
  image: string;
}

export default function TechnologyButton(props: buttonProps) {
  return (
    <>
      <span className="flex justify-center p-4 rounded-[3px] bg-[#2c2a29] cursor-pointer
                       hover:shadow-[0_0_11px_#77B05F] transition ease-out duration-150">
        <img src={props.image} className="w-6" />
      </span>
    </>
  )
}