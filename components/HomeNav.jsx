import styles from './HomeNav.module.scss'
import Link from 'next/link';

export default function HomeNav() {
    return (
        <nav className={styles.nav}>
            <p className={styles.header}>Vinylist</p>
            <ul>
                <li><Link className={styles.navLink} href="/login">Login</Link></li>
                <li><Link className={styles.navCta} href="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}