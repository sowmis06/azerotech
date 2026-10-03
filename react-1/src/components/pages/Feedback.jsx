import { useState } from "react";

//rating icons
import { SadCircleIcon } from '@solar-icons/react/outline/sad-circle';
import { ConfoundedCircleIcon } from '@solar-icons/react/outline/confounded-circle';
import { ExpressionlessCircleIcon } from '@solar-icons/react/outline/expressionless-circle';
import { SmileCircleIcon } from '@solar-icons/react/outline/smile-circle';
import { FireIcon } from '@solar-icons/react/outline/fire'

function Feedback(){
    const [rating,setRating] = useState(0);
    const [name,setName] =useState("");
    const [email,setEmail]= useState("");
    const [movie, setMovie] = useState("");
    const [review,setReview] = useState("");
    const [errors, setErrors] =useState({});
    const [submitted,setSubmitted] = useState(false);

    //validation
    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(false);

        const newErrors = {};
        if (name.trim() === "") {
            newErrors.name = "Please enter ur name.";
        }
        if (email.trim() === "") {
            newErrors.email = "Please enter ur email.";
        }
        if (movie === "") {
            newErrors.movie = "Please enter ur movie.";
        }
        if (rating === 0) {
            newErrors.rating = "Please enter ur rating.";
        }
        if (review.trim() === "") {
            newErrors.review = "Please enter ur review.";
        }
        setErrors(newErrors);
        
        if(Object.keys(newErrors).length === 0){
            setSubmitted(true);
            setName("");
            setEmail("");
            setMovie("");
            setReview("");
            setRating(0);
        }
    };

    return(
        <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
            <form 
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h1 className="text-3xl font-bold mb-3">
                    Share ur Feedback
                </h1>
                <p className="text-gray-400 mb-8">
                    How would you rate ur movie experience?
                </p>
                <div>
                    <button
                        type="button"
                        onClick={() => setRating(1)}
                        className={`${rating === 1 ? "text-red-800": "text-white"} hover:text-red-800 transition duration-200`} >
                        <SadCircleIcon size={45} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(2)}
                        className={`${rating === 2 ? "text-pink-400" : "text-white"} hover:text-pink-400 transition duration-200`} >
                        <ConfoundedCircleIcon size={45} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(3)}
                        className={`${rating === 3 ? "text-yellow-300": "text-white"} hover:text-yellow-300 transition duration-200`} >
                        <ExpressionlessCircleIcon size={45} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(4)}
                        className={`${rating === 4 ? "text-blue-400": "text-white"} hover:text-blue-400 transition duration-200`}>
                        <SmileCircleIcon size={45} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setRating(5)}
                        className={`${ rating === 5 ? "text-orange-400" : "text-white"} hover:text-orange-400 transition duration-200`}>
                        <FireIcon size={45} />
                    </button>

                    {errors.rating && (
    <p className="mt-2 text-sm text-red-400">
        {errors.rating}
    </p>
)}
                </div>

                <div className="mt-8">
                    <label className="block text-sm font-medium mb-2">
                        Your Name!
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter ur name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400"  />

                        {errors.name && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.name}
                            </p>
                        )}
                </div>

                <div className="mt-5">
                    <label className="block text-sm font-medium mb-2">
                        Your Email!
                    </label>
                    <input
                        type="email"
                        placeholder="Enter ur email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400"  />

                        {errors.email && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}
                </div>

                <div className="mt-5">
                    <label className="block text-sm font-medium mb-2">
                        Select Movie
                    </label>
                    <select 
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400">
                    <option value="" disabled>Choose a movie</option>
                    <option value="Modha Rathiri">Modha Rathiri</option>
                    <option value="Ram Leela">Ram Leela</option>
                    <option value="The Dark Knight">The Dark Knight</option> 
                    </select>

                    {errors.movie && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.movie}
                            </p>
                        )}

                    
                </div>

                <div className="mt-5">
                    <label className="block text-sm font-medium mb-2">
                        Your Review
                    </label>
                    <textarea 
                        placeholder="Tell us about ur movie experience..."
                        rows={5}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400"  />

                        {errors.review && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.review}
                            </p>
                        )}
                </div>

                {submitted && (
                    <p className="mt-5 text-center text-green-400 font-medium">
                       🎉 Your feedback was submitted successfully!
                    </p>
                )}


                <button 
                    type="submit"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition duration-200"  >

                        Submit Feedback
                </button>

                

            </form>
        </div>
    );
}
export default Feedback;