"use client"

import { useContext } from 'react';
import styles from './styles.module.scss';

import Link from "next/link";
import { ThemeContext } from '@/providers/theme';
import { FiSun, FiMoon } from 'react-icons/fi';

export function Header() {

    const {theme, toggleTheme} = useContext(ThemeContext);

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
                    <button onClick={toggleTheme}>
                        {theme === 'light' ? <FiMoon size={20}/> : <FiSun size={20}/>}
                    </button>
                    
                </nav>
            </div>
        </header>
    )
}