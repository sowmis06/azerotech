import { Link } from "react-router-dom";
import { ClapperboardOpenPlayIcon } from '@solar-icons/react/bold-duotone/clapperboard-open-play'

function NavBar(){
    return(
        <nav className="flex items-center justify-between px-10 py-5 bg-gray-900 text-white ">
{/* {Header} */}

        <Link to="/" className="flex items-center gap-2">
            <ClapperboardOpenPlayIcon size={26}  />       
            <h2 className="text-2xl font-bold">
                Movie Explorer
            </h2>
        </Link>

        {/* {Links} */}

        <div className="flex items-center gap-8">
            
            <Link to="/" className="hover:text-blue-400 transition">
            Home
            </Link>
        
            <Link to="/about" className="hover:text-blue-400 transition">
            About
            </Link>

            {/* <Link to="/details" className="hover:text-blue-400 transition">
            Details
            </Link> */}
            
        </div>
        </nav>
    );
}
export default NavBar;