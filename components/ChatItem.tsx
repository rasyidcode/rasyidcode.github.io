import Image from "next/image";
import profilePic from "./../assets/me.jpg";

export default function ChatItem() {
    return (
        <a href="#" className="flex items-center gap-4 hover:bg-[#F0F2F5] pl-4">
            <Image
                src={profilePic}
                alt="Ahmad Jamil Al Rasyid"
                width={50}
                height={50}
                className="rounded-full aspect-square object-cover border" />
            {/* <DefaultUserImage size={50} /> */}
            <div className="flex-1 border-t py-4 flex items-center justify-between">
                <div className="flex-1">
                    <h4>Ahmad Jamil Al Rasyid</h4>
                    <p className="text-slate-400 font-light text-sm">
                        Welcome to my WhatsApp Style Portfolio
                    </p>
                </div>
                <div className="px-4">
                    <span className="text-xs font-light text-gray-500">8:30 AM</span>
                </div>
            </div>
        </a>
    )
}
