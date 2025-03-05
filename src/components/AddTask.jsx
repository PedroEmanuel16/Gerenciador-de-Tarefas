import { useState } from "react";

function AddTask({ onAddTaskSubmit }){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [statusFieldTitle, setStatusFieldTitle] = useState(false);
    const [statusFieldDescription, setStatusFieldDescription] = useState(false);

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input 
            type="text" 
            placeholder="Digite o título da tarefa"
            className={statusFieldTitle ? "border border-red-700 outline-red-900 rounded-md px-4 py-2 mb-1" : "border border-slate-300 outline-slate-400 rounded-md px-4 py-2"} 
            value={title}
            onChange={(event) => setTitle(event.target.value)} />

            {statusFieldTitle ? <p className="text-sm text-red-700 italic">Campo Obrigatório</p> : ''}

            <input 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            className={statusFieldDescription ? "border border-red-700 outline-red-900 rounded-md px-4 py-2 mb-1" : "border border-slate-300 outline-slate-400 rounded-md px-4 py-2"}
            value={description}
            onChange={(event) => setDescription(event.target.value)} />

            {statusFieldDescription ? <p className="text-sm text-red-700 italic">Campo Obrigatório</p> : ''}

            <button 
            className="cursor-pointer bg-slate-500 py-2 rounded-md text-white" onClick={() => {
                if(!title.trim() || !description.trim()){
                    if(!title.trim()){
                        setStatusFieldTitle(true);
                    }
                    if(!description.trim()){
                        setStatusFieldDescription(true);
                    }

                    return
                }

                setStatusFieldTitle(false)
                setStatusFieldDescription(false)

                onAddTaskSubmit(title, description)
                
                setTitle("")
                setDescription("")
            }}>Adicionar</button>
        </div>
    )
}

export default AddTask;