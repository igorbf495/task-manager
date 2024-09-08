import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 rounded-md shadow space-y-4 p-6 flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={() => onAddTaskSubmit(title, description)} className=" bg-slate-500 px-4 py-2 text-white ">Add</button>
    </div>
  );
}

export default AddTask;
