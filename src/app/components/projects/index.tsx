import { Container } from '../container';
import { ProjectCaroussel, ProjectCarousselProps } from '../project-caroussel';

import mgmtSystemImg from '@/assets/mgmt-system.png';

export function Projects() {
    const items: ProjectCarousselProps[] = [{
        name: "DevControl - Management System",
        description: "This web application is a customer support ticketing platform designed to streamline issue tracking and resolution. It allows businesses to register and manage customer information, while customers can create and monitor support tickets to address their problems efficiently.\nThe system is built with a modern, scalable tech stack: \n    • Frontend & Framework: Developed with Next.js 15, providing a fast, SEO-friendly, and dynamic user experience.\n    • Database & ORM: MongoDB serves as the primary database, managed with Prisma.io for schema management and migrations.\n    • Authentication: Secure sign-in via NextAuth.js with Google Provider integration.\n    • API Layer: Implements Next.js API Routes to handle server-side logic and database interactions from client-side components.\n    • UI & Styling: Designed with Tailwind CSS, ensuring a clean, responsive, and accessible interface.",
        href: "https://customer-management-silk.vercel.app/",
        imageUrl: mgmtSystemImg,
        imageAlt: "Management system website"
      }];
  
    return (
      <section id="projects">
        <Container title='PROJECTS'>
          <ProjectCaroussel items={items}/>
        </Container>
      </section>
    )
}