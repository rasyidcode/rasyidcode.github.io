import { ReactNode } from "react"

export default function ChatPanelSender({ children }: {
    children: ReactNode
}) {
    return (
        <div className="relative rounded-lg bg-white px-3 py-2 shadow-xs
           self-start max-w-[65%]">
            {children}
            <div className="flex items-center justify-end gap-1 text-[11px] text-gray-500">
                <span>8:16 AM</span>
            </div>
            {/* Triangle shape for chat bubble */}
            <div
                className="absolute top-0 -left-2.5 h-4 w-4"
                style={{
                    clipPath: "polygon(0 0, 0 0, 100% 0, 100% 100%)",
                }}
            >
                <div className="absolute h-5 w-5 transform bg-white" />
            </div>
        </div>
    )
}
