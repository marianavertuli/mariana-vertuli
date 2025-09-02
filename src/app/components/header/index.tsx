import styles from './styles.module.scss';

import Link from "next/link";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.identification}>
                    <span className={styles.name}>Mariana Vertuli</span>
                    <span className={styles.role}>Full Stack Software Engineer</span>
                </div>
                <nav className={styles.nav}>
                    <Link href="/#about-me">ABOUT ME</Link>
                    <Link href="/#projects">PROJECTS</Link>
                    <Link href="/#contact">CONTACT ME</Link>
                </nav>
            </div>
        </header>
    )
}