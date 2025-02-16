export default function TryTooltipPage() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-10 bg-blue-200">
            <div className="relative group inline-block">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Hover me
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden
                group-hover:block bg-gray-800 text-white text-sm rounded-md px-2 py-1
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all
                duration-200 ease-linear transition-discrete">
                    Tooltip text
                </div>
            </div>
            <div className="relative group flex items-center">
                <button className="px-4 py-2 bg-sky-600 text-white rounded-md">
                    Amazing
                </button>
                <div className="absolute left-7/6
              bg-gray-800 text-white text-sm rounded-full px-2 py-1 whitespace-nowrap 
              transform scale-75 opacity-0 transition-all duration-300 
              group-hover:scale-100 group-hover:opacity-100">
                    Hello World World
                </div>
            </div>
            <div className="relative group bg-green-600 flex items-center">
                <button className="px-4 py-2 text-white rounded-md">
                    Hover me
                </button>
                <div className="absolute -right-25 px-2 py-1 hidden
                group-hover:block bg-gray-800 text-white text-sm rounded-full
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all
                duration-200 ease-linear transition-discrete">
                    Tooltip text
                </div>
            </div>
            <div className="relative group flex items-center">
                <button className="px-4 py-2 bg-amber-600 text-white rounded-md">
                    Hover me
                </button>
                <div className="absolute -right-25 px-2 py-1 hidden
                group-hover:block bg-gray-800 text-white text-sm rounded-full
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all
                duration-200 ease-linear transition-discrete">
                    Tooltip text
                </div>
            </div>
            <div className="relative group flex items-center">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-md">
                    Hover me
                </button>
                <div className="absolute -right-25 px-2 py-1 hidden
                group-hover:block bg-gray-800 text-white text-sm rounded-full
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all
                duration-200 ease-linear transition-discrete">
                    Tooltip text
                </div>
            </div>
            <div className="relative group inline-block">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    With Scale
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-2 py-1 whitespace-nowrap 
              transform scale-75 group-hover:scale-100 transition-all duration-150 opacity-0 group-hover:opacity-100
              transition-normal ease-linear">
                    Tooltip text
                </div>
            </div>
            <div className="relative group inline-block">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Hover me
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-2 py-1 whitespace-nowrap">
                    Tooltip text
                </div>
            </div>
            <div className="relative group inline-block">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Hover me
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full
                mb-2 hidden group-hover:block bg-gray-800 text-white text-sm
                rounded-md px-2 py-1 whitespace-nowrap">
                    Tooltip text
                </div>
            </div>
            <div className="relative group inline-block">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Doesn't work
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
              bg-gray-800 text-white text-sm rounded-md px-2 py-1 whitespace-nowrap 
              transform scale-75 opacity-0 transition-all duration-300 
              group-hover:scale-100 group-hover:opacity-100">
                    Tooltip text
                </div>
            </div>

        </div>

    )
}
