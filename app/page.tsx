import Image from "next/image"
import { ImFacebook2, ImKey2, ImUser, ImWindows } from "react-icons/im"
import { RiShutDownLine } from "react-icons/ri"

const Home = () => {
  return (
    <div className="flex flex-col w-[1152px] h-[864px] border">

      {/* Desktop */}
      <div className="relative flex-1">
        <Image
          src="/assets/win-xp-bg.jpg"
          alt="Win XP Bg"
          fill={true}
          className="select-none" />

        {/* Start Menu Window */}
        <div className=" w-96 h-[420px] bg-gradient-to-b from-blue-400 from-0% via-blue-600 
          via-[2.5%] to-blue-700 to-50% absolute z-50 bottom-0 rounded-tr-lg rounded-tl-lg 
          flex flex-col">
          {/* User Section */}
          <div className="flex justify-start items-center p-2 gap-2">
            <div className="p-2 rounded-md border">
              <ImUser className="h-6 w-6 text-white" />
            </div>
            <p className="text-white text-sm">User</p>
          </div>

          {/* Menus Section */}
          <div className=" flex bg-blue-100 flex-1">
            <div className="flex flex-col flex-1 bg-white p-1">
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex px-1 items-center justify-start text-xs gap-2
                hover:bg-blue-400 group/app-item hover:text-white
                transition-all ease-in-out duration-150 select-none">
                  <ImFacebook2 className="w-6 h-6 text-blue-700 drop-shadow-xl" />
                  <div>
                    <h5 className="font-medium">Social Media</h5>
                    <p className="text-gray-400 group-hover/app-item:text-white/75">Facebook</p>
                  </div>
                </div>
              </div>
              <div className="text-xs">All Programs</div>
            </div>

            <div className="flex-1">
              B
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-row justify-end items-center px-2 py-2 gap-2">
            <div className="flex justify-center items-center gap-1">
              <div className="p-1 border border-white rounded-md bg-gradient-to-b 
                from-yellow-700 via-yellow-500 to-yellow-700 drop-shadow-sm flex
                  justify-center items-center">
                <ImKey2 className=" h-4 w-4 text-center text-white" />
              </div>
              <p className="text-xs text-white">Lock Off</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="p-1 border border-white rounded-md bg-gradient-to-b 
                from-red-700 via-red-500 to-red-700 drop-shadow-sm flex
                  justify-center items-center">
                <RiShutDownLine className=" h-4 w-4 text-center text-white" />
              </div>
              <p className="text-xs text-white">Turn Off Computer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="h-8 w-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 flex 
        justify-between items-center">
        <div className="flex h-full w-24 select-none items-center justify-center gap-2 rounded-r-lg 
          bg-gradient-to-b from-green-400 via-green-600 to-green-700 hover:from-green-400 
          hover:via-green-500 hover:to-green-700 active:from-green-600 active:to-green-700
          transition-all duration-150 ease-in-out">
          <ImWindows className="text-yellow-400 drop-shadow-lg" />
          <p className="font-bold tracking-wider text-white drop-shadow-lg">start</p>
        </div>
        <div className="select-none flex h-8 w-24 items-center justify-center bg-gradient-to-b from-sky-300 
          via-sky-500 to-sky-600 border-s border-s-black/50">
          <p className="text-sm text-white">12:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Home