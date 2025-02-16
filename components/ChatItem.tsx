import Image from "next/image";
import DefaultUserImage from "./DefaultUserImage";

export default function ChatItem() {
    return (
        <a href="#" className="flex items-center gap-4 hover:bg-[#F0F2F5] pl-4">
            {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MWm4Uc-yhWB5bkRg8r_Vy6ueABFtDb_qSA&s"
                alt="Profile Picture Example"
                width={50}
                height={50}
                className="rounded-full aspect-square object-cover border" /> */}
            <DefaultUserImage size={50} />
            <div className="flex-1 border-t py-4 flex items-center justify-between">
                <div className="flex-1">
                    <h4>Donald Trump</h4>
                    <p className="text-slate-400 font-light text-sm">I know you btw...</p>
                </div>
                <div className="px-4">
                    <span className="text-xs font-light text-gray-500">8:30 AM</span>
                </div>
            </div>
        </a>
    )
}
