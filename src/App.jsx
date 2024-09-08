import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTsks] = useState([
    {
      id: 1,
      title: "Estudar Typescript",
      description: "nunca parar de estudar",
      isComplited: false,
    },
  ]);
  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
