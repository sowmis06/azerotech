import { useParams } from "react-router-dom";


function Details(){
    const { id } = useParams();
    return(
        <div className="min-h-screen bg-gray-950 text-white px-10 py-12">
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-blue-400 mb-2">
                Movie Details
            </p>

            <h1 className="text-4xl font-bold mb-4" >
                Movie ID: { id }
            </h1>

            <p className="text-gray-400">
               You r viewing the details of movie{id}.
            </p>

            </div>
        </div>
    );
}
export default Details;