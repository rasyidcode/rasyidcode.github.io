import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatItem from "@/components/ChatItem";
import ChatPanel from "@/components/ChatPanel";
import { ChatBubbleLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex-1 flex overflow-hidden shadow-xl">
      <div className="bg-[#F0F2F5] w-15">
        Icons
      </div>
      <div className="bg-white w-md border flex flex-col">
        <header className="flex items-center p-4 justify-between">
          <h1 className="font-bold tracking-wide text-xl text-slate-800">Chats</h1>
          <div className="flex gap-6">
            <button className="p-2 rounded-full cursor-pointer active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
              <ChatBubbleLeftIcon className="size-6 text-gray-700" />
            </button>
            <button className="p-2 rounded-full cursor-pointer active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
              <EllipsisVerticalIcon className="size-6 text-gray-700" />
            </button>
          </div>
        </header>
        <div className="flex bg-[#F0F2F5] px-4 py-2 gap-8 rounded-lg mt-2 mx-4">
          <button className="cursor-pointer">
            <MagnifyingGlassIcon className="size-4 text-gray-700" />
          </button>
          <input placeholder="Search" className="flex-1 text-sm outline-0" />
        </div>
        <div className="flex items-center gap-4 mt-2 px-4">
          <button className="bg-[#E7FCE3] text-[#00808D] px-2 py-1 rounded-2xl cursor-pointer
          text-sm font-light">All</button>
          <button className="bg-[#F0F2F5] px-2 py-1 rounded-2xl cursor-pointer text-sm
           font-light hover:brightness-95 transition-all duration-150 ease-linear">Unread</button>
          <button className="bg-[#F0F2F5] px-2 py-1 rounded-2xl cursor-pointer text-sm
           font-light hover:brightness-95 transition-all duration-150 ease-linear">Favorites</button>
          <button className="bg-[#F0F2F5] px-2 py-1 rounded-2xl cursor-pointer text-sm
           font-light hover:brightness-95 transition-all duration-150 ease-linear">Groups</button>
        </div>
        {/* Chat List */}
        <div className="flex-1 mt-2 overflow-y-scroll scrollbar">
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </div>
        <div>Get WhyApp for Windows</div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <ChatHeader />
        <ChatPanel />
        <ChatInput />
      </div>
    </div>
  )
}