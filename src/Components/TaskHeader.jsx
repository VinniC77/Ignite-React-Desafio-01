import { Task } from "./Task";
import styles from "./TaskHeader.module.css";

export const TaskHeader = ({ tasks }) => {

  const tasksQtd = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <>
      <section className={styles.miniHeader}>
        <h3 className={styles.taskCounter}>
          Tarefas criadas <span>{tasksQtd}</span>
        </h3>
        <h3 className={styles.purple}>
          Concluídas <span>{completedTasks} de {tasksQtd}</span>
        </h3>
      </section>
      <div>
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
    </>
  );
};
