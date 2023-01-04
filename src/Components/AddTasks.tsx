import mais from "../assets/mais.svg";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./AddTasks.module.css";

interface Props {
  onAddTasks: (taskContent: string) => void;
}

export const AddTasks = ({ onAddTasks }: Props) => {
  const [newContent, setNewContent] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTasks(newContent);
    setNewContent("");
  }

  function onChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setNewContent(event.target.value);
  }

  return (
    <div className={styles.addTasks}>
      <form className={styles.formAdd} onSubmit={handleSubmit}>
        <input
          className={styles.addField}
          onChange={onChangeTask}
          value={newContent}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.addBtn} type="submit">
          Criar <img src={mais} alt="Sinal de +" />
        </button>
      </form>
    </div>
  );
};