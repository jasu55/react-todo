import { Button, Tasks } from "@/components";
const buttons = [
  { text: "All", isActive: true },
  { text: "Active", isActive: false },
  { text: "Completed", isActive: false },
];
const tasks = [
  { taskName: "Sample Task", isDone: false },
  { taskName: "Another Task", isDone: true },
  { taskName: "Another Task", isDone: true },
  { taskName: "Another Task", isDone: true },
  { taskName: "Another Task", isDone: true },
];
export default function Home() {
  return (
    <div className="w-screen bg-[#F3F4F6] h-screen pt-[20px]">
      <div className="flex flex-col items-center  w-[377px] mx-auto rounded-md bg-[#FFFFFF] mt-[60px] px-[24px] py-[16px]  shadow-md">
        <h3 className="text-xl font-semibold">To-Do list</h3>
        <div className="flex my-[19px] w-full gap-2">
          <input
            type="text"
            placeholder="Add a new task..."
            className="border border-[#E4E4E7]  px-[16px] py-[8px] w-[280px]"
          />
          <button className="px-16px bg-[#3C82F6] text-white px-[16px] py-[8px] rounded-md">
            Add
          </button>
        </div>
        <div className="flex gap-[6px]  w-full">
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} isActive={button.isActive} />
          ))}
        </div>
        {tasks.map((task, index) => (
          <Tasks key={index} taskName={task.taskName} isDone={task.isDone} />
        ))}

        <p className="text-[#6B7280] py-[30px]">No tasks yet. Add one above!</p>
        <p className="text-[#6B7280]">
          Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
