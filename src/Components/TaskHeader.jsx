import styles from "./TaskHeader.module.css";

export const TaskHeader = () => {
  return (
    <div className={styles.miniHeader}>
      <h3 className={styles.taskCounter}>
        Tarefas criadas <span>0</span>
      </h3>
      <h3 className={styles.taskCounter}>
        Concluídas <span>0</span>
      </h3>
    </div>
  );
};
