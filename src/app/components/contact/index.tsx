import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiPhone } from 'react-icons/fi';

import { DetailsCard } from '../details-card';
import styles from './styles.module.scss';
import { Container } from '../container';


export function Contact() {
    return (
        <section id="contact" className={styles.sectionContact}>
          <Container title='CONTACT ME'>
            <div className={styles.card}>
              <DetailsCard
                icon={<AiFillLinkedin className={styles.linkedInIcon} size={22}/>}
                text="/marianavertuli"
                href="https://www.linkedin.com/in/marianavertuli"
              />
            </div>
            <div className={styles.card}>
              <DetailsCard
                icon={<AiFillGithub className={styles.linkedInIcon} size={22}/>}
                text="/marianavertuli"
                href="https://github.com/marianavertuli"
              />
            </div>
            <div className={styles.card}>
              <DetailsCard
                icon={<FiMail className={styles.linkedInIcon} size={22}/>}
                text="mariana.vt.s@gmail.com"
              />
            </div>
            <div className={styles.card}>
              <DetailsCard
                icon={<FiPhone className={styles.linkedInIcon} size={22}/>}
                text="+971 561 64 3657"
              />
            </div>
          </Container>
      </section>
    )
}