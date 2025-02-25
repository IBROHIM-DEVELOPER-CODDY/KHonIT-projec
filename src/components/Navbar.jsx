import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom';
import LanguageSwitcher from "./LanguageSwitcher";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6 ">
          <LanguageSwitcher />
        <div className="flex flex-shrink items-center">
            <img src="" alt="" />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <Link to={"https://t.me/Ibrh_Dev"} target="_blank" rel="noopener noreferrer">
          <FaTelegram/>
          </Link>
        <Link to="https://github.com/IBROHIM-DEVELOPER-CODDY" target="_blank" 
        rel="noopener noreferrer">
        <FaLinkedin/>
        </Link>
        <Link to="https://github.com/IBROHIM-DEVELOPER-CODDY" target="_blank" 
        rel="noopener noreferrer">
        <FaGithub/>
        </Link>
        <Link to={"https://t.me/KhonITAdmin"} target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter/>
        </Link>
        <Link to="https://www.instagram.com/rahimjonov.a.i?igsh=NmM2ZG5rZnY0eWRl&utm_source=qr" 
         target="_blank" rel="noopener noreferrer"
        >
        <FaInstagram/>
        </Link>

      </div>
      </nav>
      
    </div>
  )
}

export default Navbar
