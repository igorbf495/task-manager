import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Estudar programação",
      description: "nao para de estudar",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Estudar Hacking",
      description: "Estudar Hacking",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Inglês",
      description: "Estudar Inglês",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas
          </h1>
          <Tasks tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
