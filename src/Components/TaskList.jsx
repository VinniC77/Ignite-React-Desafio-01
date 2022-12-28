import blank from "../assets/empty-page.svg";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

export const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <img src={blank} alt="Formulario em branco" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
      <Task />
    </div>
  );
};
