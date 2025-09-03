export type ContactsType = 'email' | 'phone' | 'linkedin' | 'github';

interface ImageProps {
    url: string;
}

export interface HomeDataAboutMeProps {
    image: ImageProps;
    imagealt: string;
    description: string;
}

export interface HomeDataProjectProps {
    banner: ImageProps;
    banneralt: string;
    name: string;
    description: string;
    href: string;
}

export interface HomeDataContactProps {
    type: ContactsType;
    content: string;
    href?: string;
}

interface HomeDataMetadataProps {
    aboutme: HomeDataAboutMeProps,
    projects: HomeDataProjectProps[],
    contacts: HomeDataContactProps[]
}

interface HomeDataObjectProps {
    metadata: HomeDataMetadataProps
}

export interface HomeDataProps {
    objects: HomeDataObjectProps[];
    total: number;
}