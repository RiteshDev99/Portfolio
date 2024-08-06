import { twMerge } from "tailwind-merge"
import { ReactNode, ButtonHTMLAttributes } from "react"
interface SocialProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const SkillsIcon = ({ children, className, ...props }: SocialProps) => {
    return (
        <div>
            <button {...props} className={
                twMerge("h-24 w-24 rounded-full  overflow-hidden bg-black border-white", className)
            }>{children}</button>


        </div>
    )
}

export default SkillsIcon;