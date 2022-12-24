import mais from '../assets/mais.svg'

import styles from './AddTasks.module.css'

export const AddTasks = ({ id, content }) => {
    return (
        <div className={styles.addTasks}>
            <form className={styles.formAdd}>
                <input className={styles.addField} type="text" placeholder="Adicione uma nova tarefa" />
                <button className={styles.addBtn} type="submit">Criar <img src={mais} alt="Sinal de +" /></button>
            </form>
        </div>
    )
}