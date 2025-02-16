import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export default function AppHeader() {
    return (
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
    )
}
