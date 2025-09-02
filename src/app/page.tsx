import { AboutMe } from "./components/about-me";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

export default function Home() {
  return (
      <main style={{paddingTop: '60px'}}>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </main>
  );
}
