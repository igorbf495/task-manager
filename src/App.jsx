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

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas
          </h1>
          <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        </div>
      </div>
    </>
  );
}

export default App;
