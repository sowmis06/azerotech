import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";

function CategoryMovies() {
    const { genre } = useParams();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        axios.get("https://api.tvmaze.com/shows")
            .then(function (response) {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(function () {
                setLoading(false);
            });
    }, []);

    const filteredMovies = movies.filter(function (movie) {
        return movie.genres.includes(genre);
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <p className="text-xl">Loading movies....</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white px-10 py-12">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold mb-3">
                    {genre} Movies
                </h1>

                <p className="text-gray-400 mb-10">
                    Explore {genre} movies and shows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredMovies.map(function (movie) {
                        return (
                            <div
                                key={movie.id}
                                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
                            >
                                <img
                                    src={movie.image.medium}
                                    alt={movie.name}
                                    className="w-full h-72 object-cover rounded-lg mb-4"
                                />

                                <h2 className="text-2xl font-semibold mb-3">
                                    {movie.name}
                                </h2>

                                <p className="text-gray-400 mb-2">
                                    {movie.genres.join(" / ")}
                                </p>

                                <p className="text-yellow-400 mb-5 flex items-center gap-2">
                                    <FaStar />
                                    {movie.rating.average || "N/A"}
                                </p>

                                <Link
                                    to={`/details/${movie.id}`}
                                    className="inline-block bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default CategoryMovies;