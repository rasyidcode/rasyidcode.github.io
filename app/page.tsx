import AppHeader from "@/components/AppHeader";
import ChatCategories from "@/components/ChatCategories";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatList from "@/components/ChatList";
import ChatPanel from "@/components/ChatPanel";
import ChatSearch from "@/components/ChatSearch";
import SideMenu from "@/components/SideMenu";
import { PhoneIcon } from "@heroicons/react/24/outline";


export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className='absolute w-full h-full z-0 bg-[#DAD7D3]'>
        <div className='h-30 bg-[#00A783]'></div>
      </div>
      <div className='flex-1 flex overflow-hidden p-5 z-50'>
        <div className="flex-1 flex overflow-hidden shadow-xl">
          <SideMenu />
          <div className="bg-white w-md border flex flex-col relative">
            <AppHeader />
            <ChatSearch />
            <ChatCategories />
            <ChatList />
            <a href="#" className="absolute bottom-0 bg-white text-center
            flex items-center p-2 justify-center gap-4 w-full border-t">
              <div className="bg-[#25D366] p-1 rounded-sm">
                <PhoneIcon className="size-7 text-white" />
              </div>
              <h1>Get WhyApp for Windows</h1>
            </a>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <div className="w-full h-full absolute bg-[url(./wa-bg.png)] bg-fixed bg-contain
            bg-[#EFEAE2] bg-repeat z-0"></div>
            <ChatHeader />
            <ChatPanel />
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  )
}