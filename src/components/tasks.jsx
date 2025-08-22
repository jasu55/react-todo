export function Tasks(props) {
  return (
    <div className="flex p-[16px] bg-[#F9FAFB] justify-between w-full  m-[20px]">
      <div className="flex items-center gap-3">
        <input type="checkbox" defaultChecked={props.isDone} />
        <p>{props.taskText}</p>
      </div>
      {props.isDone && (
        <button className="bg-[#FEF2F2] text-[#EF4444] px-[12px] py-[6px]">
          Delete
        </button>
      )}
    </div>
  );
}
