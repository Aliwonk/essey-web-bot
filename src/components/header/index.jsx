import styles from './Header.module.css';

export function Header() {
    return(
        <header className={styles.header}>
            <p className={styles.logotype}>Telivery</p>
        </header>
    )
}