import Image from "next/image"
import { FaWindows } from "react-icons/fa"
import { ImWindows } from "react-icons/im"

const Home = () => {
  return (
    <div className="flex flex-col w-[1152px] h-[864px] border">
      <div className="relative flex-1">
        <Image
          src="/assets/win-xp-bg.jpg"
          alt="Win XP Bg"
          fill={true} />
      </div>

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