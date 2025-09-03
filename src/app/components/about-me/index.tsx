import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import styles from './styles.module.scss';
import photo from "@/assets/personal-pic.png";
import { Container } from '../container';
import { DetailsCard } from '../details-card';

const aboutMe = "I am a Software Engineer with a background in Chemical Engineering, holding a bachelor’s degree with honors from a top-ranked Brazilian university. Over the past years, I’ve built a career that combines analytical problem-solving from engineering with technical expertise in software development.\nMy professional experience spans roles as a Process Engineer and Senior Software Engineer, where I worked with both industrial simulation tools (such as Ansys Fluent, PipeSim, LedaFlow, and Petex) and modern software technologies. My tech stack includes C#, .NET, Angular, React, FastAPI, Python, SQL, and Azure, alongside experience in full-stack development, cloud deployment, and data integration.\nThis dual background has given me a unique perspective: I not only understand complex engineering systems but also know how to design and implement software solutions that model, simulate, and optimize real-world processes.\nCurrently, I am focused on advancing my career in areas that unite these two passions — particularly in the development of engineering simulation software, CFD applications, and process optimization tools. I thrive at the intersection of engineering insight and software innovation, where I can create technology that empowers industries to work smarter and more efficiently."

export function AboutMe() {
    return (
        <section id="about-me" className={styles.aboutMeSection}>
            <Container title="ABOUT ME">
                <Image
                    className={styles.profileImg}
                    src={photo}
                    alt="Mariana Vertuli's photo"
                    width={300}
                    height={300}
                    priority={true}
                />
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>
                        <h4>{aboutMe}</h4>
                    </div>
                    <div className={styles.usefulLinks}>
                        <DetailsCard
                            icon={<AiFillLinkedin className={styles.linkedInIcon} size={22}/>}
                            text="/marianavertuli"
                            href="https://www.linkedin.com/in/marianavertuli"
                        />
                        <DetailsCard
                            icon={<AiFillGithub className={styles.linkedInIcon} size={22}/>}
                            text="/marianavertuli"
                            href="https://github.com/marianavertuli"
                        />
                    </div>
                </div>
            </Container>
      </section>
    )
}