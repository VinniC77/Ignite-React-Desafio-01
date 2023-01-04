import blank from "../assets/empty-page.svg";

import styles from "./EmptyTaskList.module.css";

export const EmptyTaskList = () => {
  return (
    <div className={styles.emptyTaskList}>
      <img src={blank} alt="Formulario em branco" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};