import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";

import './global.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Tasks id="1" content="Terminar desafio 01 do Ignite" />
      <Tasks id="2" content="Fazer almoço" />
      <Tasks id="3" content="Ficar milionário" />
    </div>
  );
};
