import React from 'react'
import { PlusIcon, PhotoIcon, MicrophoneIcon } from '@heroicons/react/24/solid'

export default function ChatInput() {
    return (
        <div className="flex items-center px-4 py-2 gap-4 bg-[#F0F2F5] z-50
      shadow-[0_-1px_3px_0_rgba(0,0,0,0.1),0_-1px_2px_0_rgba(0,0,0,0.06)]">
            <button className="cursor-pointer p-2 rounded-full active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
                <PlusIcon className="size-6 text-gray-700" />
            </button>
            <div className="flex-1 flex items-center gap-3 bg-white px-4 py-2
        rounded-lg">
                <button className="cursor-pointer p-2 rounded-full active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
                    <PhotoIcon className="size-6 text-gray-700" />
                </button>
                <input placeholder="Type a message" className="outline-none flex-1" />
            </div>
            <button className="cursor-pointer p-2 rounded-full active:bg-slate-300/60
          transition-all duration-150 ease-in-out">
                <MicrophoneIcon className="size-6 text-gray-700" />
            </button>
        </div>
    )
}
