import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskShow(){

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">

        <div className="relative flex justify-center">
            <ArrowLeft  className="absolute top-0 start-0 mt-2 text-white cursor-pointer" onClick={() => navigate(-1)}/>
            <h1 className="text-slate-100 text-3xl font-bold text-center">Detalhes da Tarefa</h1>
        </div>
 
        <div className="bg-slate-200 rounded-md p-4">
            <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
            <p className="text-slate-600">{description !== 'undefined' ? description : ''}</p>
        </div>
      </div>
    </div>
    )
}

export default TaskShow;