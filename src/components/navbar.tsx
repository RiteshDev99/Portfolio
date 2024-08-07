
interface NavbarProps {
    onHomeClick?: () => void;
    onSkillsClick?: () => void;
    onEducationClick?: () => void;
}

const Navbar = ({ onHomeClick, onSkillsClick, onEducationClick, ...props }: NavbarProps) => {
    return (
        <div className="flex justify-between p-5 text-white absolute min-w-[100%]">
            <img  src="public/pic.jpeg" className="h-10 w-10 rounded-full"/>
            <div className="flex gap-9 px-9 nav-elements ">
                <button {...props} onClick={onHomeClick} className="hover:text-blue-500 font-bold">Home</button>
                <button {...props} onClick={onSkillsClick} className="hover:text-blue-500 font-bold">Skills</button>
                <button {...props} onClick={onEducationClick} className="hover:text-blue-500 font-bold">Education</button>
            </div>
        </div>
    )
}

export default Navbar
