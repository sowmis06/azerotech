import { useState, useEffect, useMemo, useRef } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase";

const googleProvider = new GoogleAuthProvider();

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // useRef
    const emailRef = useRef();

    useEffect(function () {
        emailRef.current.focus();
    }, []);

    // Email
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    // Password
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    // Email / Password Login
    async function handleLogin() {
        setHasSubmitted(true);

        if (email === "" || password === "") {
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);

            setIsLoggedIn(true);
        } catch (error) {
            console.error("Login error:", error);
            alert(error.message);
        }
    }

    // Google Login
    async function handleGoogleLogin() {
        try {
            const result = await signInWithPopup(auth, googleProvider);

            console.log("Google login successful:", result.user);

            setIsLoggedIn(true);
        } catch (error) {
            console.error("Google login error:", error);
            alert(error.message);
        }
    }

    // useMemo
    const validation = useMemo(
        function () {
            return {
                emailError: email === "" ? "Email required" : "",
                passwordError: password === "" ? "Password required" : "",
            };
        },
        [email, password]
    );

    // useEffect
    useEffect(function () {
        console.log("Component loaded");
    }, [isLoggedIn]);

    // Logged in screen
    if (isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-purple-500">
                        Logged In
                    </h1>

                    <p className="mt-2 text-gray-400">
                        You have successfully logged in.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex items-center justify-center pt-24 pb-10"
            style={{
                backgroundImage: "url('/assets/banner1.jpg')",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Login Card */}
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
                    LOGIN
                </h1>

                <p className="text-center text-xs text-gray-200 mt-1 mb-6">
                    Welcome back to Movie Explorer
                </p>

                {/* Sign Up Link */}
                <div className="text-center mb-6">
                    <Link
                        to="/signup"
                        className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition"
                    >
                        Don't have an account? Sign Up
                    </Link>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-xs text-gray-200 mb-1">
                        Email
                    </label>

                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmail}
                        className="w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                    />

                    {hasSubmitted && validation.emailError && (
                        <p className="text-red-400 text-xs mt-1">
                            {validation.emailError}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="relative mb-4">
                    <label className="block text-xs text-gray-200 mb-1">
                        Password
                    </label>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePassword}
                        className="w-full h-11 px-4 rounded-full bg-white/10 border border-white/20 placeholder-gray-300 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 text-sm text-white"
                    />

                    <button
                        type="button"
                        onClick={function () {
                            setShowPassword(!showPassword);
                        }}
                        className="absolute right-4 top-10 -translate-y-1/2 text-gray-300 hover:text-white"
                    >
                        <i
                            className={
                                showPassword
                                    ? "fa-solid fa-eye-slash"
                                    : "fa-solid fa-eye"
                            }
                        ></i>
                    </button>

                    {hasSubmitted && validation.passwordError && (
                        <p className="text-red-400 text-xs mt-1">
                            {validation.passwordError}
                        </p>
                    )}
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-xs mb-6">
                    <label className="flex items-center gap-1 text-gray-300">
                        <input type="checkbox" />
                        Remember me
                    </label>

                    <span className="text-purple-400 cursor-pointer hover:text-purple-300">
                        Forgot Password?
                    </span>
                </div>

                {/* Login Button */}
                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full h-11 rounded-full bg-purple-700 text-white text-sm font-semibold hover:bg-purple-600 transition shadow-lg shadow-purple-900/30"
                >
                    LOGIN
                </button>

                {/* Google Login */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full mt-4 flex items-center justify-center gap-3 bg-white text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    <FcGoogle className="text-2xl" />
                    Continue with Google
                </button>

            </div>
        </div>
    );
}

export default LoginForm;