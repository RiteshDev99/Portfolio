import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface SocialProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const Social = ({ children, className, ...props }: SocialProps) => {
    return (
        <div>
            <button {...props} className={
                twMerge("h-12 w-12 rounded-full  overflow-hidden bg-yellow-200", className)
            }>{children}</button>


        </div>
    )
}

export default Social;