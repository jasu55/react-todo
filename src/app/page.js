"use client";
import { v4 as uuidv4 } from "uuid";
import { use, useState } from "react";

import { Button, Tasks } from "@/components";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTasks([...tasks, { text: inputValue, isDone: false, id: uuidv4() }]);
    setInputValue("");
  };

  const handleStatus = (status) => {
    setStatus(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (status === "All") return true;
    if (status === "Active") return !task.isDone;
    return task.isDone;
  });

  const handleOnchangeCheckBox = (event, id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.isDone = event.target.checked;
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleClearCompleted = () => {
    const newTasks = tasks.filter((task) => task.isDone === false);
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
            className="border border-[#E4E4E7]  px-[16px] py-[8px] w-[280px] rounded-md"
            onChange={handleOnchange}
            value={inputValue}
          />

          <button
            className="px-16px bg-[#3C82F6] text-white px-[16px] py-[8px] rounded-md"
            onClick={handleOnClick}
          >
            Add
          </button>
        </div>

        <div className="flex gap-[6px]  w-full">
          <Button text="All" status={status} handleStatus={handleStatus} />
          <Button text="Active" status={status} handleStatus={handleStatus} />
          <Button
            text="Completed"
            status={status}
            handleStatus={handleStatus}
          />
        </div>

        {filteredTasks.map((task) => (
          <Tasks
            key={task.id}
            id={task.id}
            taskText={task.text}
            isDone={task.isDone}
            handleOnchangeCheckBox={handleOnchangeCheckBox}
            handleDelete={() => handleDelete(task.id)}
          />
        ))}

        {tasks.length === 0 ? (
          <p className="text-[#6B7280] py-[30px]">
            No tasks yet. Add one above!
          </p>
        ) : (
          <div className="border-t-[1px] border-[#E4E4E7]  w-full flex justify-between mb-[44px] pt-[16px]  ">
            <p className="text-[#6B7280]  ">
              {tasks.filter((task) => task.isDone === true).length} of{" "}
              {tasks.length} tasks completed
            </p>
            <button onClick={handleClearCompleted} className="text-[#EF4444]">
              Clear Completed
            </button>
          </div>
        )}

        <p className="text-[#6B7280]">
          Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
