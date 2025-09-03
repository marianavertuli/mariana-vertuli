import { HomeDataProjectProps } from '@/types/homeDataProps.type';
import { Container } from '../container';
import { ProjectCaroussel } from '../project-caroussel';

export function Projects({projects}: {projects: HomeDataProjectProps[]}) {
  
    return (
      <section id="projects">
        <Container title='PROJECTS'>
          <ProjectCaroussel projects={projects}/>
        </Container>
      </section>
    )
}