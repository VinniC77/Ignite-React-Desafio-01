import { Header } from "./Components/Header";
import { AddTasks } from "./Components/AddTasks";
import { TaskHeader } from "./Components/TaskHeader";
import { v4 } from 'uuid';


import { useState } from "react";

import './global.css'

export const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Terminar desafio",
      isCompleted: false
    },
    {
      id: 2,
      content: "Organizar a agenda da semana",
      isCompleted: true
    }
  ])

  function addTask(taskContent) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content: taskContent,
        isCompleted: false
      }
    ])
  }

  return (
    <div className="App">
      <Header />
      <AddTasks onAddTasks={addTask} />
      <TaskHeader tasks={tasks} />
    </div>
  );
};
