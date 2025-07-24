import { StaticImageData } from 'next/image';

import TechStack2 from '../../public/icons/css.png';
import TechStack6 from '../../public/icons/figma.png';
import TechStack1 from '../../public/icons/html.png';
import TechStack3 from '../../public/icons/javascript.png';
import TechStack5 from '../../public/icons/react.png';
import TechStack4 from '../../public/icons/tailwind.png';

type IconTechProps = {
  src: StaticImageData;
  alt: string;
};

export const iconTechData: IconTechProps[] = [
  {
    src: TechStack1,
    alt: 'HTML',
  },
  {
    src: TechStack2,
    alt: 'CSS',
  },
  {
    src: TechStack3,
    alt: 'Javascript',
  },
  {
    src: TechStack4,
    alt: 'Tailwind',
  },
  {
    src: TechStack5,
    alt: 'React',
  },
  {
    src: TechStack6,
    alt: 'Figma',
  },
];
