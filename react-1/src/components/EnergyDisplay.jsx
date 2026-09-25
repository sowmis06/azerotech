{/* Energy Number */}

function EnergyDisplay({energy}){
    return(
       <div className = "mt-10 text-center">
        <div className = "text-7xl font-bold text-purple-600">
          {energy}
        </div>

        <p className = "mt-2 text-gray-500">
          /10
        </p>
       </div>
    );

}
export default EnergyDisplay;