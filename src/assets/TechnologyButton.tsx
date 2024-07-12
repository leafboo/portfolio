type buttonProps = {
  image: string;
}

export default function TechnologyButton(props: buttonProps) {
  return (
    <>
      <span className="text-center p-4 rounded-[3px] bg-[#2c2a29]">
        <img src={props.image} className=" w-7" />
      </span>
    </>
  )
}