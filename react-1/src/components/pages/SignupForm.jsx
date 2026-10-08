import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignupForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);

    async function handleSignup() {
        setHasSubmitted(true);

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            return;
        }

        if (password !== confirmPassword) {
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            alert("Account created successfully!");

            navigate("/login");
        } catch (error) {
            console.error("Signup error:", error);
            alert(error.message);
        }
    }

    async function handleGoogleSignup() {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider);

            navigate("/");
        } catch (error) {
            console.error("Google signup error:", error);
            alert(error.message);
        }
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex items-center justify-center pt-24 pb-10"
            style={{
                backgroundImage: "url('/assets/banner1.jpg')"
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-[90%] max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">

                {/* Logo */}
                <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full border-2 border-purple-700 flex items-center justify-center">
                        <span className="text-purple-700 text-xl">
                            🎬
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-center text-2xl font-bold text-white">
                    SIGN UP
                </h1>

                <p className="text-center text-xs text-gray-200 mt-1 mb-6">
                    Create your Movie Explorer account
                </p>

                {/* Login link */}
                <div className="text-center mb-6">
                    <Link
                        to="/login"
                        className="text-purple-400 text-sm font-semibold hover:text-purple-300"
                    >
                        Already have an account? Login
                    </Link>
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-xs text-gray-200 mb-1">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={function (event) {
                            setName(event.target.value);
                        }}
                        className="w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                    />

                    {hasSubmitted && name === "" && (
                        <p className="text-red-400 text-xs mt-1">
                            Name required
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-xs text-gray-200 mb-1">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={function (event) {
                            setEmail(event.target.value);
                        }}
                        className="w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                    />

                    {hasSubmitted && email === "" && (
                        <p className="text-red-400 text-xs mt-1">
                            Email required
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-xs text-gray-200 mb-1">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={function (event) {
                            setPassword(event.target.value);
                        }}
                        className="w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                    />

                    {hasSubmitted && password === "" && (
                        <p className="text-red-400 text-xs mt-1">
                            Password required
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="mb-5">
                    <label className="block text-xs text-gray-200 mb-1">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={function (event) {
                            setConfirmPassword(event.target.value);
                        }}
                        className="w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                    />

                    {hasSubmitted &&
                        confirmPassword !== "" &&
                        password !== confirmPassword && (
                            <p className="text-red-400 text-xs mt-1">
                                Passwords do not match
                            </p>
                        )}
                </div>

                {/* Sign Up Button */}
                <button
                    type="button"
                    onClick={handleSignup}
                    className="w-full h-11 rounded-full bg-purple-700 text-white text-sm font-semibold hover:bg-purple-600 transition shadow-lg shadow-purple-900/30"
                >
                    SIGN UP
                </button>

                {/* Google Button */}
                <button
                    type="button"
                    onClick={handleGoogleSignup}
                    className="w-full mt-4 flex items-center justify-center gap-3 bg-white text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    <FcGoogle className="text-2xl" />
                    Continue with Google
                </button>

            </div>
        </div>
    );
}

export default SignupForm;