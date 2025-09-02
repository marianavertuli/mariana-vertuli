import Link from "next/link";
import { ReactNode } from "react";

import styles from './styles.module.scss';

interface DetailsCardProps {
    text: string;
    href?: string;
    icon: ReactNode;
}

export function DetailsCard({ text, icon, href }: DetailsCardProps) {
    return (
        <div className={styles.card}>
            {href ? (
                <Link href={href} target="_blank">
                    <div className={styles.innerLink}>
                        {icon}
                        <span>
                        {text}
                        </span>
                    </div>

                </Link>
            ) : (
                <div className={styles.innerLink}>
                    {icon}
                    <span>
                    {text}
                    </span>
                </div>
            )}
            

        </div>
    )
}