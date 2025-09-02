"use client"

import { Carousel } from 'react-responsive-carousel';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';

export interface ProjectCarousselProps {
  name: string;
  href: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  description: string;
}

export function ProjectCaroussel({items}: {items: ProjectCarousselProps[]}) {
    return (
        <Carousel
        showArrows={true}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {items.map(item => (
          <div key={item.name} className={styles.projectContainer}>
            <Image 
              className={styles.projectImg}
              src={item.imageUrl}
              alt={item.imageAlt}
              priority={true}
              quality={100}
              width={400}
              height={400}
            />
            <div className={styles.project}>
                <Link className={styles.projectLink} href={item.href} target='_blank'>
                  <h2 className={styles.projectName}>{item.name}</h2>
                  <LuCircleArrowOutUpRight size={20}/>
                </Link>
              <h4 className={styles.projectDescription}>{item.description}</h4>
            </div>
          </div>
        ))}
      </Carousel>
    )
}