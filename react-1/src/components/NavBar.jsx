import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

function NavBar(){
    return(
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-7 bg-transparent text-white ">
{/* {Header} */}

        <Link to="/" className="flex items-center gap-8">
           <FaFilm className="text-2xl" />      
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

            <Link to="/feedback" className="hover:text-blue-400 transition">
            FeedBack
            </Link>

            <Link to="/login" className="border-2 border-purple-500 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:border-purple-600 transition">
             Sign In / Sign Up
            </Link>

            {/* <Link to="/details" className="hover:text-blue-400 transition">
            Details
            </Link> */}
            
        </div>
        </nav>
    );
}
export default NavBar;