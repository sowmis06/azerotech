{/* Message */}

function EnergyMessage({energy}){

    let emoji;
    let title;
    let description;

    if(energy === 0){
        emoji = "😴";
        title = "Just starting";
        description = "Let's get your energy going!";
    }

    else if(energy <= 3){
        emoji = "🌱";
        title = "Warming up";
        description = "You're getting started!";
    }

    else if(energy <= 6){
        emoji = "🔥";
        title = "Getting better";
        description = "Keep building your momentum!";
    }

    else if (energy <= 9) {
    emoji = "⚡";
    title = "High energy";
    description = "You're on a roll!";
    }

    else {
    emoji = "🚀";
    title = "Maximum energy";
    description = "You're unstoppable!";
    }


    return(
       <div className = "mt-6 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-300 p-5 text-center shadow-sm">
        <h2 className = "text-xl font-bold text-gray-800">
          {emoji} {title}
        </h2>

        <p className = "mt-1 text-gray-500">
          {description}
        </p>
       </div>
   );
}
export default EnergyMessage;