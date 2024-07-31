type buttonProps ={
  image: string;
  link: string;
}

export default function ContactButton(props: buttonProps) {
  return (
    <>
      <span className="bg-[#2c2a29] p-3 mr-3 ml-3 rounded-[30px] cursor-pointer transition shadow-[0.15s]
      hover:shadow-[0_0_11px_#77B05F]">
        <a href={props.link} target="_blank" ><img src={props.image} className="w-7" /></a>
      </span> 
    </>
  )
}