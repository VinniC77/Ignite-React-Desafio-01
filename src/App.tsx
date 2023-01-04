import { Header } from "./Components/Header";
import { AddTasks } from "./Components/AddTasks";
import { TaskHeader } from "./Components/TaskHeader";

import { v4 } from "uuid";
import { useState } from "react";

import "./global.css";

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskContent: string) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content: taskContent,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function toggleTask(taskId: string) {
    const toggleTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(toggleTasks);
  }

  return (
    <div className="App">
      <Header />
      <AddTasks onAddTasks={addTask} />
      <TaskHeader
        tasks={tasks}
        onDelete={deleteTaskById}
        onCompleted={toggleTask}
      />
    </div>
  );
};