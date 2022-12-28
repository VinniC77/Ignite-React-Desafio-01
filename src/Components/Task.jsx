import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export const Task = () => {
  return (
    <div className={styles.task}>
      <input className={styles.radio} type="checkbox" id='checkbox' />
      <label htmlFor='checkbox' className={styles.teste}></label>
      <label htmlFor='checkbox' className={styles.content}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>
      <button title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  );
};
