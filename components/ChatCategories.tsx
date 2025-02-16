export default function ChatCategories() {
    return (
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
    )
}
