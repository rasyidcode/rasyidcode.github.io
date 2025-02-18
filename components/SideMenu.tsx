import { ChatBubbleOvalLeftEllipsisIcon, Cog6ToothIcon, RssIcon, StopCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import profilePic from "./../assets/me.jpg";
import Image from "next/image";

export default function SideMenu() {
    return (
        <div className="bg-[#F0F2F5] w-15 flex flex-col justify-between py-2">
            <div className="flex flex-col gap-4 items-center">
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <ChatBubbleLeftIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Chats
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <RssIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Status
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Channels
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <UserGroupIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Communities
                    </div>
                </a>
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <StopCircleIcon className="size-6 text-sky-500" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Mata AI
                    </div>
                </a>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <a href="#" className="p-2 rounded-full active:bg-slate-300/60 relative
                group flex items-center">
                    <Cog6ToothIcon className="size-6 text-slate-700" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Settings
                    </div>
                </a>
                <a href="#" className="p-2 relative group flex items-center">
                    <Image
                        src={profilePic}
                        alt="Ahmad Jamil Al Rasyid"
                        width={30}
                        height={30}
                        className="rounded-full aspect-square object-cover border" />
                    <div className="absolute left-7/6 bg-gray-800 text-white
                    text-sm rounded-full px-2 py-1 whitespace-nowrap transform scale-0
                    transition-all duration-300 group-hover:scale-100 z-50">
                        Profile
                    </div>
                </a>
            </div>
        </div>
    )
}
