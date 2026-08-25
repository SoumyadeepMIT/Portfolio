import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Contacts = () => {
  return (
    <div className='flex flex-row gap-4 mt-4'>
        <a href="https://github.com/SoumyadeepMIT" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-[#f4f1eb] hover:text-[#9C978E] transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/soumyadeep-mitra-07496a1b9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-[#f4f1eb] hover:text-[#9C978E] transition-colors" />
        </a>
    </div>
  )
}
