import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-10 py-12">

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Logo / About */}
                    <div>
                        <h2 className="text-2xl font-bold text-purple-500 mb-3">
                            Movie Explorer
                        </h2>

                        <p className="text-gray-400 max-w-sm">
                            Explore movies and shows, discover new favorites,
                            and find something great to watch.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-2 text-gray-400">
                            <Link to="/" className="hover:text-white transition">
                                Home
                            </Link>

                            <Link to="/about" className="hover:text-white transition">
                                About
                            </Link>

                            <Link to="/feedback" className="hover:text-white transition">
                                Feedback
                            </Link>

                            <Link to="/login" className="hover:text-white transition">
                                Sign In
                            </Link>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-purple-700 transition">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-purple-700 transition">
                                <FaInstagram />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-purple-700 transition">
                                <FaTwitter />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-purple-700 transition">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © 2026 Movie Explorer. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;