import { AboutMe } from "./components/about-me";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { getHomeData } from "@/utils/getHomeData";
import styles from './styles.module.scss'

export default async function Home() {

  const data = await getHomeData();
  const details = data.objects[0].metadata;

  return (
      <main className={styles.main}>
        <AboutMe about={details.aboutme} contacts={details.contacts}/>
        <Projects projects={details.projects}/>
        <Contact contacts={details.contacts}/>
      </main>
  );
}
