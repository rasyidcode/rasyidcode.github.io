import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function ChatSearch() {
    return (
        <div className="flex bg-[#F0F2F5] px-4 py-2 gap-8 rounded-lg mt-2 mx-4">
            <button className="cursor-pointer">
                <MagnifyingGlassIcon className="size-4 text-gray-700" />
            </button>
            <input placeholder="Search" className="flex-1 text-sm outline-0" />
        </div>
    )
}
