import styles from './Header.module.css'

import rocket from '../assets/rocket.svg'

export const Header = () => {
    return (
        <div className={styles.header}> 
            <img className={styles.rocket} src={rocket} alt="Foguete da Rocketseat" />
            <h1><span className={styles.to}>to</span><span className={styles.do}>do</span></h1>
        </div>
    )
}