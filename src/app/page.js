import { Button } from "@/components";
export default function Home() {
  return (
    <div className="flex  justify-center w-screen bg-[#F3F4F6] h-screen ">
      <div className="flex flex-col items-center  w-[377px] h-[290px] rounded-md bg-[#FFFFFF] mt-[60px] px-[24px] py-[16px]  shadow-md">
        <h3 className="text-xl font-semibold">To-Do list</h3>
        <div className="flex my-[19px] w-full gap-2">
          <input
            type="text"
            placeholder="Add a new task..."
            className="border border-[#E4E4E7]  px-[16px] py-[8px] w-[280px]"
          />
          <Button
            className="px-16px bg-[#3C82F6] text-white px-[16px] py-[8px]"
            text="Add"
          />
        </div>
        <div className="flex gap-[6px]  w-full">
          <Button
            className="bg-[#3C82F6] px-[12px] py-[4px] text-white"
            text="All"
          />
          <Button
            className="px-[12px] py-[4px] bg-[#F3F4F6] text-black"
            text="Active"
          />
          <Button
            className="px-[12px] py-[4px] bg-[#F3F4F6] text-black"
            text="Completed"
          />
        </div>
        <p className="text-[#6B7280] py-[30px]">No tasks yet. Add one above!</p>
        <p className="text-[#6B7280]">
          Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
