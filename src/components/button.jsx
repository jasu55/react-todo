export function Button(props) {
  return (
    <button
      className={`px-[12px] py-[4px]  rounded-md ${
        props.isActive ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]  text-black"
      }`}
    >
      {props.text}
    </button>
  );
}
