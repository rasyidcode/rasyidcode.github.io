import AppHeader from "@/components/AppHeader";
import ChatCategories from "@/components/ChatCategories";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatList from "@/components/ChatList";
import ChatPanel from "@/components/ChatPanel";
import ChatSearch from "@/components/ChatSearch";
import Menu from "@/components/Menu";


export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className='absolute w-full h-full z-0 bg-[#DAD7D3]'>
        <div className='h-30 bg-[#00A783]'></div>
      </div>
      <div className='flex-1 flex overflow-hidden p-5 z-50'>
        <div className="flex-1 flex overflow-hidden shadow-xl">
          <Menu />
          <div className="bg-white w-md border flex flex-col">
            <AppHeader />
            <ChatSearch />
            <ChatCategories />
            <ChatList />
            <div>Get WhyApp for Windows</div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <ChatHeader />
            <ChatPanel />
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  )
}