export function Tasks({
  isDone,
  taskText,
  handleOnchangeCheckBox,
  id,
  handleDelete,
  handleEdit,
  editTask,
  handleEditInput,
  handleEditSave,
}) {
  return (
    <div className="flex p-[16px] bg-[#F9FAFB] justify-between w-full  m-[20px]">
      {editTask ? (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={isDone}
            onChange={(event) => handleOnchangeCheckBox(event, id)}
          />
          <p className={isDone ? "line-through" : ""}>{taskText}</p>
          <button onClick={() => handleEdit(id)}> &#x270E;</button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="text"
            defaultValue={taskText}
            onChange={(event) => handleEditInput(event, id)}
          />
          <button onClick={() => handleEditSave(id)}>Save</button>
        </div>
      )}
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
