import { ChatBubbleOvalLeftEllipsisIcon, Cog6ToothIcon, RssIcon, StopCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import DefaultUserImage from "@/components/DefaultUserImage";

export default function Menu() {
    return (
        <div className="bg-[#F0F2F5] w-15 flex flex-col justify-between py-2">
            <div className="flex flex-col gap-4 items-center">
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <ChatBubbleLeftIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Chats
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <RssIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Status
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Channels
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <UserGroupIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Communities
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <StopCircleIcon className="size-6 text-sky-500" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Mata AI
                    </div>
                </a>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <Cog6ToothIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Settings
                    </div>
                </a>
                <a href="#" className="p-2 relative group flex items-center">
                    <DefaultUserImage size={32} />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-75
                    opacity-0 transition-all duration-300 group-hover:scale-100
                    group-hover:opacity-100">
                        Profile
                    </div>
                </a>
            </div>
        </div>
    )
}
