import { Header } from "./Components/Header";
import { AddTasks } from "./Components/AddTasks";

import './global.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTasks id="1" content="Terminar desafio 01 do Ignite" />
    </div>
  );
};
