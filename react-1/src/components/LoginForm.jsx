import { useState, useEffect, useMemo, useRef } from "react";
function LoginForm(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    //useRef
    const emailRef = useRef();

    useEffect(function(){
        emailRef.current.focus();
    },[]);


    //usestate
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePassword(event){
        setPassword(event.target.value)

    }
    function handleLogin(){
        setHasSubmitted(true);
        if (email === "" || password === ""){
            return;
        }
        setIsLoggedIn(true);
    }

    //useMemo
   const validation = useMemo(
        function(){
           return{
            emailError: email === ""? "Email required" : "",
            passwordError: password ===""? "Password required" : "",
           };
        },[email,password]
        
    );

    //useffects
    useEffect(function(){
        console.log("Component loaded")
    },[isLoggedIn]);

    
    if (isLoggedIn) {
    return (
        <div className="w-1/2 flex items-center justify-center bg-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-purple-700">
                    Logged In
                </h1>

                <p className="mt-2 text-gray-500">
                    You have successfully logged in.
                </p>
            </div>
        </div>
    );
}

    return(

    <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[70%]">

            {/* Logo */}
            <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full border-2 border-purple-700 flex items-center justify-center">
                    <span className="text-purple-700 text-xl">◉</span>
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-center text-2xl font-bold text-gray-800">
                LOGIN
            </h1>

            <p className="text-center text-xs text-gray-400 mt-1 mb-7">
                Welcome to the website
            </p>


            {/* Email */}
            <div className="mb-4">
                <label className="block text-xs text-gray-500 mb-1">
                    Email
                </label>

                <input 
                    ref={emailRef}
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleEmail}
                    className="w-full h-10 px-4 rounded-full bg-purple-100 outline-none text-sm"
                />
                {hasSubmitted && validation.emailError && (
                    <p className = "text-red-500 text-xs mt-1">
                        {validation.emailError}
                    </p>
                )}
            </div>


            {/* Password */}
            <div className="relative mb-4">
                <label className="block text-xs text-gray-500 mb-1">
                    Password
                </label>

                <input
                    type = {showPassword ? "text":"password"}
                    placeholder="Enter your password"
                    onChange={handlePassword}
                    className="w-full h-10 px-4 rounded-full bg-purple-100 outline-none text-sm"
                />
                <button
                type="button"
                onClick={function(){
                    setShowPassword(!showPassword);
                }} 
                className="absolute right-4 top-10 -translate-y-1/2 text-gray-500" >
                   <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} ></i> 
                </button>
                {hasSubmitted && validation.passwordError && (
                    <p className = "text-red-500 text-xs mt-1">
                        {validation.passwordError}
                    </p>
                )}
            </div>


            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-xs mb-6">
                <label className="flex items-center gap-1 text-gray-500">
                    <input type="checkbox" />
                    Remember me
                </label>

                <span className="text-purple-700 cursor-pointer">
                    Forgot Password?
                </span>
            </div>

            {/* Login button */}
            <button 
            onClick={handleLogin}
            className="w-full h-10 rounded-full bg-purple-700 text-white text-sm font-semibold hover:bg-purple-800 transition">
                LOGIN
            </button>

        </div>
    </div>

    );
}
export default LoginForm;