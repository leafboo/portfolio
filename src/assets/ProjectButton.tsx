type buttonProps = {
  text: string;
}

export default function ProjectButton(props: buttonProps) {
  return (
    <>
      <span className="bg-[#201c1c] p-1.5 rounded-[10px] pl-6">
        {props.text}
      </span>
    </>
  )
}