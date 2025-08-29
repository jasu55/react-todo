export function Tasks({
  task,
  tasks,
  setTasks,
  handleDelete,
  handleEdit,
  editTask,
  handleEditInput,
  handleEditSave,
}) {
  const handleOnchangeCheckBox = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.isDone = !task.isDone;
        return task;
      })
    );
  };

  return (
    <div className="flex p-[16px] bg-[#F9FAFB] justify-between w-full  m-[20px]">
      {!editTask ? (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={task.isDone}
            onChange={() => handleOnchangeCheckBox(task.id)}
          />
          <p className={task.isDone ? "line-through" : ""}>{task.text}</p>
          <button onClick={() => handleEdit(task.id)}> &#x270E;</button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="text"
            defaultValue={task.text}
            onChange={(event) => handleEditInput(event, task.id)}
          />
          <button onClick={() => handleEditSave(task.id)}>Save</button>
        </div>
      )}
      {task.isDone && (
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
