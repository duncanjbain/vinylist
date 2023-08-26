import styles from './Container.module.scss';

export default function Container({children}) {
    <div className={styles.container}>
        {children}
    </div>
}