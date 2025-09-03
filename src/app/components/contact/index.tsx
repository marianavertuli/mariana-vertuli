import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiPhone } from 'react-icons/fi';

import { DetailsCard } from '../details-card';
import styles from './styles.module.scss';
import { Container } from '../container';
import { ContactsType, HomeDataContactProps } from '@/types/homeDataProps.type';


export function Contact({contacts}: {contacts: HomeDataContactProps[]}) {

    function chooseIcon(type: ContactsType) {
      switch (type) {
        case 'linkedin':
          return <AiFillLinkedin className={styles.linkedInIcon} size={22}/>;
        case 'github':
          return <AiFillGithub className={styles.linkedInIcon} size={22}/>;
        case 'email':
          return <FiMail className={styles.linkedInIcon} size={22}/>;
        case 'phone':
          return <FiPhone className={styles.linkedInIcon} size={22}/>;
        default:
          break;
      }
    }

    return (
        <section id="contact" className={styles.sectionContact}>
          <Container title='CONTACT ME'>
            {contacts.map(contact => (
                <div key={contact.type} className={styles.card}>
                  <DetailsCard
                    icon={chooseIcon(contact.type)}
                    text={contact.content}
                    href={contact.href}
                  />
                </div>
              ))}
          </Container>
      </section>
    )
}