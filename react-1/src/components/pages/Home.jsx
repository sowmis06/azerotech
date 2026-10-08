import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import banner from "/assets/banner1.jpg";
import AuthPopup from "../AuthPopup";
import { FaStar,FaSearch } from "react-icons/fa";

function Home(){
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    const [heroIndex, setHeroIndex] = useState(0);
    const [showFullSummary,setShowFullSummary] = useState(false);
    const [latestIndex,setLatestIndex] = useState(0);
    const [selectedCategory,setSelectedCategory] = useState(0);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(function(){
        axios.get("https://api.tvmaze.com/shows")
        //   .then(function(response){
        //         if (!response.ok) {
        //             throw new Error("Failed to fetch movies.");
        //         }
        //         return response.json();
        //     })

           .then(function(response){
            setMovies(response.data);


            setTimeout(function(){
             setLoading(false);
             },2000);
           })

           .catch(function(){
            setError("Failed to fetch movies.");
            setLoading(false);
           });
    },[]);


    //image
    const heroMovies = movies.slice(0,3);
    const featuredMovie = heroMovies[heroIndex];

    useEffect(function(){
        if(heroMovies.length === 0){
            return;
        }
        const interval = setInterval(function(){
            setHeroIndex(function(currentIndex){
                setShowFullSummary(false);
                return(currentIndex + 1)% heroMovies.length;
            });
        },5000);
        return function(){
            clearInterval(interval);
        };
    },[heroMovies.length]);

    //latest movies

    useEffect(() => {
  if (movies.length === 0) {
    return;
  }

  const latestMovies = movies.slice(3, 11);
  const totalMovies = latestMovies.length;

  const interval = setInterval(() => {
    setLatestIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;

      // When first set is completed,
      // immediately start again from the beginning
      if (nextIndex >= totalMovies) {
        return 0;
      }

      return nextIndex;
    });
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, [movies.length]);

    //loading msg

    if(loading) {
        return(
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center " >
                <p className="text-xl">
                    Loading movies....
                </p>
            </div>
        );
    }

    //error msg

    if (error) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <p className="text-xl text-red-400">
                    {error}
                </p>
            </div>
        )
    }

    const categories = [
        {
            name: "Action",
            image: "/assets/category/action.png",
            genre: "Action"
        },
        {
            name: "Comedy",
            image: "/assets/category/comedy.png",
            genre: "Comedy"
        },
        {
            name: "Drama",
            image: "/assets/category/drama.png",
            genre: "Drama"
        },
        {
            name: "Horror",
            image: "/assets/category/horror.png",
            genre: "Horror"
        },
        {
            name: "Sci-Fi",
            image: "/assets/category/scifi.png",
            genre: "Science-Fiction"
        },
        {
            name: "Romance",
            image: "/assets/category/romance.png",
            genre: "Romance"
        }
    ];

    const filteredMovies = selectedCategory ? movies.filter(function(movie){
        return movie.genres.includes(selectedCategory);
    }) : movies;

    const searchedMovies = movies.filter(function(movie) {
    return movie.name.toLowerCase().includes(searchTerm.toLowerCase());
});
    
    
    return (
        
        //Hero section

        <div>
        <section
    className="relative min-h-[700px] bg-cover bg-center"
    style={{
        backgroundImage: "url('/assets/banner1.jpg ')"
    }}
>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Movie content */}
    <div className="relative z-10 max-w-6xl mx-auto px-10 pt-56 text-white">

        <div className="max-w-2xl">

            <p className="text-yellow-400 text-lg font-semibold mb-5 uppercase tracking-wide">
                Featured Movie
            </p>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-light">
                {featuredMovie.name}
            </h1>

            <div className="flex items-center gap-5 mb-6">

                <span className="text-yellow-400 text-l">
                    ★ {featuredMovie.rating.average}
                </span>

                <span className="text-gray-200">
                    {featuredMovie.genres.join(" • ")}
                </span>

            </div>

        <div className="mb-8">
            <div
                className={`text-gray-300 text-lg leading-relaxed ${showFullSummary ? "" : "line-clamp-3"}`}
                dangerouslySetInnerHTML={{
                    __html: featuredMovie.summary
                }}
            />

            <button 
                onClick = {function(){
                    setShowFullSummary(!showFullSummary);
                }}
                className="mt-2 text-yellow-400 font-semibold hover:text-blue-300 transition">
                {showFullSummary ? "Read Less" : "Read More"}
            </button>

        </div>

            <Link
                to={`/details/${featuredMovie.id}`}
                className="inline-block border-2 border-yellow-400 text-white px-7 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
                {/* <FaPlay /> */}
                <span> View Details </span>
            </Link>

        </div>

    </div>
</section>

 

{/* Latest Movies */}
<section className="bg-gray-950 text-white px-10 py-12">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-3">
      Latest Movies
    </h2>

    <p className="text-gray-400 mb-8">
      Check out the latest movies and shows.
    </p>

    <div className="overflow-hidden">
      <div
        className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${latestIndex * 246}px)`,
        }}
      >
        {[...movies.slice(3, 11), ...movies.slice(3, 11)].map(
          (movie, index) => (
            <Link
              key={`${movie.id}-${index}`}
              to={`/details/${movie.id}`}
              className="group relative overflow-hidden rounded-xl min-w-[220px] w-[220px] flex-shrink-0"
            >
              <img
                src={movie.image.original || movie.image.medium}
                alt={movie.name}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-5 w-full">
                  <h3 className="text-xl font-bold mb-2">
                    {movie.name}
                  </h3>

                  <p className="text-yellow-400 mb-2 flex items-center gap-1">
                    <FaStar />
                    {movie.rating.average || "N/A"}
                  </p>

                  <p className="text-gray-300 text-sm">
                    {movie.genres.join(" • ")}
                  </p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  </div>
</section>

    {/* Categories */}

    <section className="bg-gray-950 text-white px-10 py-12">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-3">
                Categories
            </h2>
            <p className="text-gray-400 mb-8">
                Explore movies by genre.
            </p>
            <div className="flex gap-19 overflow-x-auto pb-4">
                {categories.map((category) => (
                    <button
                      key={category.name}
                      type="button"
                      onClick={function(){
                         navigate(`/category/${category.genre}`);
                      }}
                      className="group flex-shirnk-0 text-center" >
                        <div className="relative w-32 h-32 rounded-full overflow-hidden">
                            <img  
                             src={category.image}
                             alt={category.name}
                             className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                    {category.name}
                            </span> 
                        </div>
                        </div>
                        

                    </button>
                ))}
            </div>
        </div>
    </section>


   {/* Discover Movies */}
<section className="bg-gray-950 text-white px-10 py-12">
    <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-3">
            <h2 className="text-4xl font-bold">
                Discover Movies
            </h2>

            <div className="relative w-64">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                   type="text"
                   placeholder="Search movies..."
                   value={searchTerm}
                   onChange={function(event){
                       setSearchTerm(event.target.value);
                    }}
                className="w-full pl-11 pr-5 py-3 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 outline-none focus:border-purple-500" />
            </div>
        </div>

        <p className="text-gray-400 mb-8">
            Explore movies and view their details.
        </p>

        <div className="overflow-hidden">
            <div className="flex gap-6">
                {searchedMovies.slice(0, 5).map(function(movie) {
                    return (
                        <Link
                            key={movie.id}
                            to={`/details/${movie.id}`}
                            className="group relative overflow-hidden rounded-xl min-w-[220px] w-[220px]"
                        >
                            <img
                                src={movie.image.original || movie.image.medium}
                                alt={movie.name}
                                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                                <div className="p-5 w-full">
                                    <h3 className="text-xl font-bold mb-2">
                                        {movie.name}
                                    </h3>

                                    <p className="text-yellow-400 flex items-center gap-1">
                                        <FaStar />
                                        {movie.rating.average || "N/A"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>

        <div className="text-center mt-8">
            <Link
                to="/all-movies"
                className="text-purple-400 font-semibold hover:text-purple-300 transition"
            >
                See More →
            </Link>
        </div>

    </div>
</section>
        <AuthPopup />
        </div>
        
    );
}
export default Home;