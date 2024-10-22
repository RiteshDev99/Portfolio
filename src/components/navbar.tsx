
interface NavbarProps {
    onHomeClick?: () => void;
    onSkillsClick?: () => void;
    onEducationClick?: () => void;
}

const Navbar = ({ onHomeClick, onSkillsClick, onEducationClick, ...props }: NavbarProps) => {
    return (
        <div className="flex justify-between p-5 text-white absolute min-w-[100%]">
            <span className="h-8 w-8 overflow-hidden">
                <img src="pic.jpeg" alt="Logo" className="object-cover w-full h-full rounded-full" />
            </span>
            <div className="flex gap-9 px-9 nav-elements ">
                <button {...props} onClick={onHomeClick} className="hover:text-blue-500 font-bold">Home</button>
                <button {...props} onClick={onSkillsClick} className="hover:text-blue-500 font-bold">Skills</button>
                <button {...props} onClick={onEducationClick} className="hover:text-blue-500 font-bold">Education</button>
            </div>
        </div>
    )
}

export default Navbar
