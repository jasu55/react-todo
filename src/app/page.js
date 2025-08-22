"use client";
import { useState } from "react";

import { Button, Tasks } from "@/components";
const buttons = [
  { text: "All", isActive: true },
  { text: "Active", isActive: false },
  { text: "Completed", isActive: false },
];
// const tasks = [
//   { taskName: "Sample Task", isDone: false },
//   { taskName: "Another Task", isDone: true },
//   { taskName: "Another Task", isDone: true },
//   { taskName: "Another Task", isDone: true },
//   { taskName: "Another Task", isDone: true },
// ];
export default function Home() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks, "tasks");

  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleOnClick = () => {
    const newTasks = [...tasks, inputValue];
    setTasks(newTasks);
  };

  return (
    <div className="w-screen bg-[#F3F4F6] h-[1500px] pt-[20px]">
      <div className="flex flex-col items-center  w-[377px] mx-auto rounded-md bg-[#FFFFFF] mt-[60px] px-[24px] py-[16px]  shadow-md">
        <h3 className="text-xl font-semibold">To-Do list</h3>
        <div className="flex my-[19px] w-full gap-2">
          <input
            type="text"
            placeholder="Add a new task..."
            className="border border-[#E4E4E7]  px-[16px] py-[8px] w-[280px]"
            onChange={handleOnchange}
          />
          <button
            className="px-16px bg-[#3C82F6] text-white px-[16px] py-[8px] rounded-md"
            onClick={handleOnClick}
          >
            Add
          </button>
        </div>
        <div className="flex gap-[6px]  w-full">
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} isActive={button.isActive} />
          ))}
        </div>
        {tasks.map((task, index) => (
          <Tasks key={index} taskText={task} isDone={task.isDone} />
        ))}

        <p className="text-[#6B7280] py-[30px]">No tasks yet. Add one above!</p>
        <p className="text-[#6B7280]">
          Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
// export default function Home() {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState("");

//   const handleAddTask = () => {
//     if (taskInput.trim()) {
//       setTasks([...tasks, { taskName: taskInput, isDone: false }]);
//       setTaskInput("");
//     }
//   };

//   return (
//     <div className="w-screen bg-[#F3F4F6] h-[1500px] pt-[20px]">
//       <div className="flex flex-col items-center w-[377px] mx-auto rounded-md bg-white mt-[60px] px-[24px] py-[16px] shadow-md">
//         <h3 className="text-xl font-semibold">To-Do list</h3>
//         <div className="flex my-[19px] w-full gap-2">
//           <input
//             type="text"
//             placeholder="Add a new task..."
//             value={taskInput}
//             onChange={(e) => setTaskInput(e.target.value)}
//             className="border border-[#E4E4E7] px-[16px] py-[8px] w-[280px]"
//           />
//           <button
//             onClick={handleAddTask}
//             className="bg-[#3C82F6] text-white px-[16px] py-[8px] rounded-md"
//           >
//             Add
//           </button>
//         </div>
//         <div className="flex gap-[6px] w-full">
//           {/* Buttons can be added here */}
//         </div>
//         {tasks.map((task, index) => (
//           <Tasks key={index} taskName={task.taskName} isDone={task.isDone} />
//         ))}
//         {tasks.length === 0 && (
//           <p className="text-[#6B7280] py-[30px]">
//             No tasks yet. Add one above!
//           </p>
//         )}
//         <p className="text-[#6B7280]">
//           Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
//         </p>
//       </div>
//     </div>
//   );
// }
// export default function todo() {
//   const [array, setArray] = useState([]);
//   return (
//     <div>
//       {array}
//       <button onClick={() => setArray([...array, "a"])}>b</button>
//     </div>
//   );
// }
