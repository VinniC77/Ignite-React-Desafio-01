import { Header } from "./Components/Header";
import { AddTasks } from "./Components/AddTasks";
import { TaskHeader } from "./Components/TaskHeader";
import { TaskList } from "./Components/TaskList";

import './global.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTasks id="1" content="Terminar desafio 01 do Ignite" />
      <TaskHeader />
      <TaskList />
    </div>
  );
};
