type buttonProps = {
  image: string;
  link: string;
}

export default function TechnologyButton(props: buttonProps) {
  return (
    <>
      <a className="flex justify-center p-4 rounded-[3px] bg-[#2c2a29] cursor-pointer
                       hover:shadow-[0_0_11px_#77B05F] transition ease-out duration-150"
         href={props.link}
         target="_blank" >
        <img src={props.image} className="w-6" />
      </a>
    </>
  )
}