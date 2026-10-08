import { useState } from "react";
import bgImage from "../assets/todo-1.webp"

function Todo(){

   const [input,setInput] = useState("");
   const [tasks,setTasks] = useState([]);
   const [darkMode,setDarkMode] = useState(false);

//    {Add task}

   function addTask(){
    if (input.trim() === "") return;

    const newTask = {
        id: Date.now(),
        text: input,
        completed: false
    };
    setTasks([...tasks,newTask]);
    setInput("");
   }

//    {Toggle}

    function toggleTask(id) {
        setTasks(
            tasks.map((task) =>
            task.id === id
            ? {...task, completed: !task.completed}
            :task
             )
    
           );
    }

    // {delete}

    function deleteTask(id) {
        setTasks(
            tasks.filter((task) =>task.id !==id)
        );
    }

    return(
        <div className={`min-h-screen flex justify-center items-center p-6 transition-colors duration-500
            ${darkMode ? "bg-gray-950" : "bg-[#e8d7d2]"}`}
             style={!darkMode ? { backgroundImage: `url(${bgImage})` } : {}}>
                <div className={`w-full max-w-xl min-h-[650px] rounded-3xl shadow-2xl p-8 transition-all duration-500
                               ${darkMode ? "bg-gray-900/95 text-white" : "bg-[#f8f7f4] text-gray-800"}`}>

                {/* {Header} */}
                
                <div className="flex justify-between items-center mb-8"> 
                  
                  {/* {top} */}

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                             Task Flow
                            <span className=" text-2xl text-[#9b7777]">: Your Day, Elevated</span>
                            <span className="ml-2">✨</span>
                        </h1>
                        <p className="text-gray-500 mt-2 text-sm">
                            Plan it. Do it. Get Things Done.
                        </p>
                    </div>


                    {/* {right} */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-xl
                                        hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            🕐
                        </div>

                        <div className="w-11 h-11 rounded-full bg-[#d9b5b5] shadow-md flex items-center justify-center text-xl
                                        hover:scale-110 transition-transform duration-300">
                            👩🏻
                        </div>
                        
                        <button 
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-11 h-11 rounded-full bg-[#b8d8e8] shadow-md flex items-center justify-center text-xl 
                                           hover:scale-110 hover:bg-[#a8cedf] active:scale-95 transtion-all duration-300">
                            {darkMode ? "☀️" : "🌙"}
                        </button>
                    </div>
                </div>

            {/* {activity} */}
            
                {/* Statistics */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

    {/* Total */}
    <div className="group rounded-2xl bg-gradient-to-br from-[#ffe0a8] to-[#ffd1e8] p-5 shadow-md
                    hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        
        <p className="text-sm font-medium text-gray-600">
            Total
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mt-2">
            {tasks.length}
        </h2>
    </div>


    {/* Active */}
    <div className="group rounded-2xl bg-gradient-to-br from-[#c9f2d0] to-[#b8e5ee] p-5 shadow-md
                   hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <p className="text-sm font-medium text-gray-600">
            Active
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mt-2">
            {tasks.filter((task) => !task.completed).length}
        </h2>
    </div>


    {/* Done */}
    <div className="group rounded-2xl bg-gradient-to-br from-[#bce7f5] to-[#cfd0ff] p-5 shadow-md
                   hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <p className="text-sm font-medium text-gray-600">
            Done
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mt-2">
            {tasks.filter((task) => task.completed).length}
        </h2>
    </div>

</div>
                {/* {Task sec} */}

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Add a new task
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                          type="text"
                          placeholder="What needs to be done"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          className="flex-1 h-12 px-5 bg-white border border-gray-200 
                                    rounded-xl text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#d7a8c8] focus:ring-4 focus:ring-[#d7a8c8]/20 transition-all duration-300" />

                        <button 
                           onClick={addTask}
                           className="h-12 px-7 bg-gradient-to-r from-[#e9b8a8] to-[#b9b8e8] hover:bg-yellow-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 rounded-xl">
                            <span className="ml-2 mr-2 text-2xl font-bold"> + </span>
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-3">
                        Today's Tasks
                    </h2>
                    <div className="space-y-3">
                        {tasks.length === 0 ? (
                            <p className="text-gray-400 text-sm">
                                No tasks yet. Add ur first task ✨
                            </p>
                        ):(
                        tasks.map((task) => (
                            <div
                               key={task.id}
                               className="bg-white border border-gray-300 rounded-2xl p-4 flex items-center gap-3 shadow-lg hover:shadow-2xl transition"  >
                            
                            <button 
                                onClick={() => toggleTask(task.id)}
                                className={`w-7 h-7 rounded-full border-2 flex-items-center justify-center transition 
                                            ${task.completed ? "bg-green-500 border-green-500 text-white hover:bg-green-600" :
                                             "border-gray-300 hover:border-green-500 hover:bg-green-50"}`} >
                                    {task.completed && "✓"}
                            </button>

                            <p className={`flex-1 text-sm font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-700"}`} >
                                {task.text}
                            </p>

                            <button onClick={() => deleteTask(task.id)}
                                    className="p-2 rounded-lg bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition" >
                                        🗑️
                                    </button>
                            </div>
                        ) )
                    ) }
                    </div>
                </div>

            </div>
        </div>
    

    );
}
export default Todo;