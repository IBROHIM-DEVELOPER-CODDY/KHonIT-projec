import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink items-center">
            <img src="" alt="" />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
        <Link to="https://github.com/IBROHIM-DEVELOPER-CODDY" target="_blank" 
        rel="noopener noreferrer">
        <FaLinkedin/>
        </Link>
        <Link to="https://github.com/IBROHIM-DEVELOPER-CODDY" target="_blank" 
        rel="noopener noreferrer">
        <FaGithub/>
        </Link>
        <FaSquareXTwitter/>
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
