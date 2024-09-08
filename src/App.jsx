import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
 

  return (
    <>
      <h1 className="text-red-500" >Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask />

    </>
  );
}

export default App;
