import { ITask } from "../App";
import { Trash } from "phosphor-react";
import { BsCheckCircleFill } from "react-icons/bs";

import styles from "./Task.module.css";

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export const Task = ({ task, onDelete, onCompleted }: Props) => {
  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => onCompleted(task.id)}>
        {task.isCompleted ? <BsCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.taskCompleted : styles.content}>
        {task.content}
      </p>
      <button title="Deletar tarefa" onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
};