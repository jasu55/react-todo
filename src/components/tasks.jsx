export function Tasks({
  isDone,
  taskText,
  handleOnchangeCheckBox,
  id,
  handleDelete,
}) {
  return (
    <div className="flex p-[16px] bg-[#F9FAFB] justify-between w-full  m-[20px]">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={isDone}
          onChange={(event) => handleOnchangeCheckBox(event, id)}
        />
        <p className={isDone ? "line-through" : ""}>{taskText}</p>
      </div>
      {isDone && (
        <button
          onClick={handleDelete}
          className="bg-[#FEF2F2] text-[#EF4444] px-[12px] py-[6px]"
        >
          Delete
        </button>
      )}
    </div>
  );
}
