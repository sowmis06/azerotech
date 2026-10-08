import { useState } from "react";
import { Link } from "react-router-dom";


function AuthPopup() {

    const[showPopup, setShowPopup] = useState(true);

    if (!showPopup) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 ">
            <div className="w-[90%] max-w-md rounded-2xl bg-gray-950/95 border border-white/20 p-18 text-center shadow-2xl">
                <div className="text-5xl mb-4">
                    🎬
                </div>
                <h1 className="text-3xl font-bold text-white mb-3" >
                    Welcome to Movie Explorer
                </h1>
                <p className="text-gray-400 mb-8">
                    Sign in to explore your favorite movies and shows.
                </p>
                <div className="space-y-3">
                    <Link 
                       to="/login"
                       className="block w-full rounded-full bg-purple-700 py-3 text-white font-semibold hover:bg-black/10 hover: border border-white/10 transition" >
                         
                        Sign In
                    </Link>

                    <Link 
                       to="/signup"
                       className="block w-full rounded-full bg-purple-700 py-3 text-white font-semibold hover:bg-black/10 hover: border border-white/10 transition">

                         Sign Up
                    </Link>

                    <button 
                       type="button"
                       onClick={function(){
                        setShowPopup(false);
                       }}
                       className="text-gray-400 hover:text-white text-sm mt-3">

                        Maybe Later

                    </button>
                </div>
            </div>
        </div>
    );
}
export default AuthPopup;