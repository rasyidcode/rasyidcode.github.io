import Image from "next/image"
import { MagnifyingGlassIcon, VideoCameraIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"

export default function ChatHeader() {
    return (
        <header className="flex items-center p-4 gap-4 bg-[#F0F2F5] shadow">
            <button className="cursor-pointer">
                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MWm4Uc-yhWB5bkRg8r_Vy6ueABFtDb_qSA&s"
                    alt="Donald Trump"
                    width={40}
                    height={40}
                    className=" rounded-full aspect-square object-cover" />
            </button>
            <h1 className="flex-1">Donald Trump</h1>
            <div className="flex items-center gap-8">
                <button className="p-2 rounded-full cursor-pointer active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
                    <VideoCameraIcon className="size-6 text-slate-400" />
                </button>
                <button className="p-2 rounded-full cursor-pointer active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
                    <MagnifyingGlassIcon className="size-6 text-gray-700" />
                </button>
                <Popover className="relative">
                    <PopoverButton className="p-2 rounded-full cursor-pointer active:bg-slate-300/60
          transition-all duration-150 ease-in-out ring-0 outline-0 focus:bg-slate-300/60">
                        <EllipsisVerticalIcon className="size-6 text-gray-700" />
                    </PopoverButton>
                    <PopoverPanel as="ul" anchor="bottom start" className="bg-white py-4 shadow rounded-sm
            w-52 flex flex-col gap-2 mr-2 z-50">
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Contact Info</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Select messages</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Mute notifications</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Disappearing messages</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Close chat</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Report</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Block</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Clear chat</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Delete chat</li>
                    </PopoverPanel>
                </Popover>
            </div>
        </header>
    )
}
