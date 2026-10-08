import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    FaStar,
    FaCalendarAlt,
    FaGlobe,
    FaPlay,
    FaTv
} from "react-icons/fa";

function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showFullSummary, setShowFullSummary] = useState(false);

    useEffect(function () {
        axios
            .get(`https://api.tvmaze.com/shows/${id}`)
            .then(function (response) {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(function () {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <p className="text-xl">Loading movie details...</p>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <p className="text-xl">Movie not found.</p>
            </div>
        );
    }

    const cleanSummary = movie.summary
        ? movie.summary.replace(/<[^>]*>/g, "")
        : "No description available.";

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 md:px-10 py-30">

            <div className="max-w-4xl mx-auto">

                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Poster */}
                        <div>
                            <img
                                src={movie.image?.original || movie.image?.medium}
                                alt={movie.name}
                                className="w-full h-full max-h-[480px] object-cover rounded-xl transition duration-500 hover:scale-[1.02] hover:brigtness-110"
                            />
                        </div>

                        {/* Movie Information */}
                        <div className="flex flex-col">

                            <p className="text-purple-400 text-lg mb-2">
                                Movie Details
                            </p>

                            <div className="flex items-start justify-between gap-4">

                                <h1 className="text-3xl md:text-4xl font-bold">
                                    {movie.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl text-yellow-400 flex-shrink-0">
                                    <FaStar />
                                    <span className="font-bold">
                                        {movie.rating?.average || "N/A"}
                                    </span>
                                </div>

                            </div>

                            {/* Genres */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {movie.genres.map(function (genre) {
                                    return (
                                        <span
                                            key={genre}
                                            className="bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300"
                                        >
                                            {genre}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Summary */}
                            <div className="mt-6 text-gray-300 leading-7">

                                <p className={showFullSummary ? "" : "line-clamp-3"}>
                                    {cleanSummary}
                                </p>

                                <button
                                    onClick={function () {
                                        setShowFullSummary(!showFullSummary);
                                    }}
                                    className="text-purple-400 font-semibold mt-3 hover:text-purple-300 transition"
                                >
                                    {showFullSummary
                                        ? "Read Less"
                                        : "Read More →"}
                                </button>

                            </div>

                            {/* Movie Info */}
                            <div className="border-t border-gray-800 mt-6 pt-6 space-y-5">

                                <div className="flex items-center gap-4">
                                    <FaCalendarAlt className="text-gray-400 text-xl" />

                                    <div className="flex justify-between w-full">
                                        <span className="text-gray-400">
                                            Premiered
                                        </span>

                                        <span>
                                            {movie.premiered || "N/A"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <FaGlobe className="text-gray-400 text-xl" />

                                    <div className="flex justify-between w-full">
                                        <span className="text-gray-400">
                                            Language
                                        </span>

                                        <span>
                                            {movie.language || "N/A"}
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">

                                <button
                                    type="button"
                                    className="flex-1 flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FaPlay />
                                    View Details
                                </button>

                                <button
                                    type="button"
                                    className="flex-1 flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
                                >
                                    <FaTv />
                                    Watch Now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Details;