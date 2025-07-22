import { StaticImageData } from 'next/image';

import { iconTechData } from './icon-tech-stack';

type Module = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
};

export const modulesData: Module[] = [
  {
    imageSrc: iconTechData[0].src,
    name: 'HTML',
    description: 'The backbone of web pages, structuring content for browsers',
  },
  {
    imageSrc: iconTechData[1].src,
    name: 'CSS',
    description: 'Styles and enhances the visual presentation of web elements',
  },
  {
    imageSrc: iconTechData[2].src,
    name: 'Javascript',
    description: 'Adds interactivity and dynamic functionality to website',
  },
  {
    imageSrc: iconTechData[3].src,
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for fast and responsive UI design',
  },
  {
    imageSrc: iconTechData[4].src,
    name: 'React JS',
    description:
      'A JavaScript library for building dynamic and scalable user interfaces',
  },
  {
    imageSrc: iconTechData[5].src,
    name: 'Figma',
    description:
      'A collaborative design tool for creating UI/UX prototypes and wireframes',
  },
];
