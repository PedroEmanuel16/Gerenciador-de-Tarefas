import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App(){

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {

      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })

    setTasks(newTasks);
  }

  function onDeleteTrashClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id : v4(),
      title, 
      description,
      isCompleted : false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTrashClick={onDeleteTrashClick} />

      </div>
    </div>
  )
}

export default App;