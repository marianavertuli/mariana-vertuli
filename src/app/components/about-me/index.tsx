"use client"

import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import styles from './styles.module.scss';
import { Container } from '../container';
import { DetailsCard } from '../details-card';
import { HomeDataAboutMeProps, HomeDataContactProps } from "@/types/homeDataProps.type";
import { useContext } from "react";
import { ThemeContext } from "@/providers/theme";


export function AboutMe({ about, contacts }: { about: HomeDataAboutMeProps, contacts: HomeDataContactProps[] }) {
    const {theme} = useContext(ThemeContext);

    const relevantContacts = contacts.filter(c => ['linkedin', 'github'].includes(c.type));

    return (
        <section id="about-me" className={styles.aboutMeSection}>
            <Container title="ABOUT ME">
                <Image
                    className={styles.profileImg}
                    src={about.image.url}
                    alt={about.imagealt}
                    width={300}
                    height={300}
                    quality={100}
                    priority={true}
                />
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>
                        <h4>{about.description}</h4>
                    </div>
                    <div className={styles.usefulLinks}>
                        {relevantContacts.map(contact => (
                            <div key={contact.type} className={styles.details}>
                                <DetailsCard
                                    icon={contact.type === 'linkedin' ? <AiFillLinkedin className={styles.linkedInIcon} size={22}/> : <AiFillGithub className={styles.linkedInIcon} size={22}/>}
                                    text={contact.content}
                                    href={contact.href}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
      </section>
    )
}