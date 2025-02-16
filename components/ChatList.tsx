import ChatItem from "./ChatItem";

export default function ChatList() {
    return (
        <div className="flex-1 mt-2 overflow-y-scroll scrollbar">
            <ChatItem />
        </div>
    )
}
