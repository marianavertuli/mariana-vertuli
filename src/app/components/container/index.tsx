"use client"

import { ReactNode, useContext } from 'react';
import styles from './styles.module.scss';
import { ThemeContext } from '@/providers/theme';


export function Container({children, title}: {children: ReactNode, title?: string}) {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            {title && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.container}>
                {children}
            </div>
        </>

    )
}