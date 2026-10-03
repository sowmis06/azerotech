import {Link} from "react-router-dom";

function Home(){
    const movies=[
        {
            id: 1,
            title: "Modha Rathiri",
            genre: "Sci-fi",
            rating: "8.7"
        },
        {
            id: 2,
            title: "Ram Leela",
            genre: "Sci-fi/Thriller",
            rating: "8.9"
        },
        {
            id: 3,
            title: "The Dark Knight",
            genre: "Action/ Crime",
            rating: "9.0"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white px-10 py-12 ">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3">
                Discover Movies
            </h1>

            <p className="text-gray-400 mb-10">
                Explore movies and view their details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* .map concept*/}
                {movies.map((movie) => (
                    <div   
                            // key concept
                      key={movie.id}
                      className="bg-gray-900 rounded-xl p-6 border border-gray-800">

                        <h2 className="text-2xl font-semibold mb-3">
                            {movie.title}
                        </h2>
                        <p className="text-gray-400 mb-2">
                            {movie.genre}
                        </p>
                        <p className="text-yellow-400 mb-5">
                            Rating: {movie.rating}
                        </p>

                        <Link
                           to={`/details/${movie.id}`}
                           className="inline-block bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                           
                                  View Details
                           </Link>
                    </div>
                ) )}
            </div>
            </div>
        </div>
    );
}
export default Home;