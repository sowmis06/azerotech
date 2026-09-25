 {/* Controls */ }
function EnergyControl({
    increaseEnergy,
    decreaseEnergy,
    resetEnergy,
}) {
    return(
       <div className="mt-8 flex items-center justify-between gap-4">
        <button
        onClick = {decreaseEnergy}
        className="h-14 w-14 rounded-2xl bg-white text-4xl font-bold shadow-md transition hover:scale-105 hover:bg-gray-400 hover:text-white "
        >
          -
        </button>
        <button 
        onClick = {resetEnergy}
        className="flex-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 py-4 font-bold text-white shadow-md transition hover:scale-105 hover:from-purple-500 to-pink-500"
        >
           ↻ RESET
        </button>
        <button 
        onClick = {increaseEnergy}
        className = "h-14 w-14 rounded-2xl bg-white text-3xl font-bold shadow-md transition hover:scale-105 hover:bg-gray-400 hover:text-white"
        >
          +
        </button>
       </div>
    );
}
export default EnergyControl;