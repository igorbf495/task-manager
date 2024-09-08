function AddTask() {
  return (
 
      <div className="bg-slate-200 rounded-md shadow space-y-4 p-6 flex flex-col">
        <input type="text" placeholder="Title" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
        <input type="text" placeholder="Description"className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
        <button className=" bg-slate-500 px-4 py-2 text-white ">Add</button>
      </div>
    
  );
}

export default AddTask;
