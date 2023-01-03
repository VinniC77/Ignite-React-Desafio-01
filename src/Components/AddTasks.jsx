import mais from '../assets/mais.svg'
import { useState } from 'react'

import styles from './AddTasks.module.css'

export const AddTasks = ({ onAddTasks }) => {
    const [newContent, setNewContent] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        onAddTasks(newContent)
        setNewContent("")
    }

    function onChangeTask(event) {
        setNewContent(event.target.value)
    }

    return (
        <div className={styles.addTasks}>
            <form className={styles.formAdd} onSubmit={handleSubmit}>
                <input className={styles.addField} onChange={onChangeTask} value={newContent} type="text" placeholder="Adicione uma nova tarefa" />
                <button className={styles.addBtn} type="submit">Criar <img src={mais} alt="Sinal de +" /></button>
            </form>
        </div>
    )
}