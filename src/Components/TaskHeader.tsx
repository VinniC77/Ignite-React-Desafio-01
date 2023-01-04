import { Task } from "./Task";
import { ITask } from "../App";
import { EmptyTaskList } from "./EmptyTaskList";

import styles from "./TaskHeader.module.css";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export const TaskHeader = ({ tasks, onDelete, onCompleted }: Props) => {
  const tasksQtd = tasks.length;

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <section className={styles.miniHeader}>
        <h3 className={styles.taskCounter}>
          Tarefas criadas <span>{tasksQtd}</span>
        </h3>
        <h3 className={styles.purple}>
          Concluídas{" "}
          <span>
            {completedTasks} de {tasksQtd}
          </span>
        </h3>
      </section>
      <div>
        {tasksQtd <= 0 ? (
          <EmptyTaskList />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onCompleted={onCompleted}
            />
          ))
        )}
      </div>
    </>
  );
};