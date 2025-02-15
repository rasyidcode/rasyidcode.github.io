import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { EllipsisVerticalIcon, MagnifyingGlassIcon, MicrophoneIcon, PhotoIcon, PlusIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
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
            <MagnifyingGlassIcon className="size-6 text-slate-800" />
          </button>
          <Popover className="relative">
            <PopoverButton className="p-2 rounded-full cursor-pointer active:bg-slate-300/60
          transition-all duration-150 ease-in-out ring-0 outline-0 focus:bg-slate-300/60">
              <EllipsisVerticalIcon className="size-6 text-slate-800" />
            </PopoverButton>
            <PopoverPanel as="ul" anchor="bottom start" className="bg-white py-4 shadow rounded-sm
            w-52 flex flex-col gap-2 mr-2 ">
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
      <div className="flex-1 overflow-y-scroll bg-[#EFEAE2] relative flex">
        <div className="w-full h-full absolute bg-[url(./wa-bg.png)]"></div>
        <div className="flex flex-col z-50 py-5 px-10 w-full gap-4">
          <div className="relative rounded-lg bg-[#DCF8C6] px-3 py-2 shadow-xs
           self-end max-w-[65%]">
            <p className="text-[15px] text-gray-700">
              Halo Admin Joy Dental, saya mau konsultasi gigi
            </p>
            <div className="flex items-center justify-end gap-1 text-[11px] text-gray-500">
              <span>8:16 AM</span>
              <span className="ml-1">✓✓</span>
            </div>
            {/* Triangle shape for chat bubble */}
            <div
              className="absolute top-0 -right-2.5 h-4 w-4"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%, 0 50%)",
              }}
            >
              <div className="absolute h-5 w-5 transform bg-[#DCF8C6]" />
            </div>
          </div>

          <div className="relative rounded-lg bg-white px-3 py-2 shadow-xs
           self-start max-w-[65%]">
            <p className="text-[15px] text-gray-700">
              Terima kasih telah menghubungi Hotline Klinik Gigi Joy Dental. Mohon maaf saat ini di luar jam operasional kami. Kami akan segera menghubungi kembali di jam operasional:
            </p>
            <div className="flex items-center justify-end gap-1 text-[11px] text-gray-500">
              <span>8:16 AM</span>
              <span className="ml-1">✓✓</span>
            </div>
            {/* Triangle shape for chat bubble */}
            <div
              className="absolute top-0 -left-2.5 h-4 w-4"
              style={{
                clipPath: "polygon(0 0, 0 0, 100% 0, 100% 100%)",
              }}
            >
              <div className="absolute h-5 w-5 transform bg-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 gap-4 bg-[#F0F2F5] 
      shadow-[0_-1px_3px_0_rgba(0,0,0,0.1),0_-1px_2px_0_rgba(0,0,0,0.06)]">
        <button>
          <PlusIcon className="size-6 text-gray-700" />
        </button>
        <div className="flex-1 flex items-center gap-3 bg-white p-3
        rounded-lg">
          <button>
            <PhotoIcon className="size-6 text-gray-700" />
          </button>
          <input placeholder="Type a message" className="outline-none flex-1" />
        </div>
        <button>
          <MicrophoneIcon className="size-6 text-gray-700" />
        </button>
      </div>
    </div>
  )
}