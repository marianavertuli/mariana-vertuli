import { ReactNode } from 'react';
import styles from './styles.module.scss';


export function Container({children, title}: {children: ReactNode, title?: string}) {
    return (
        <>
            {title && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.container}>
                {children}
            </div>
        </>

    )
}