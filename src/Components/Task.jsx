import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      <button className={styles.check}><div/></button>
      <p className={styles.content}>{task.content}</p>
      <button title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  );
};
