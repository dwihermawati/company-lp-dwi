import { StaticImageData } from 'next/image';

import MasterCoding1 from '../../public/icons/icon-logo-master-coding.png';
import MasterCoding2 from '../../public/icons/icon-master-coding-1.png';
import MasterCoding3 from '../../public/icons/icon-master-coding-2.png';
import MasterCoding4 from '../../public/icons/icon-master-coding-3.png';
import MasterCoding5 from '../../public/icons/icon-master-coding-4.png';

type MasterCodingIconProps = {
  src: StaticImageData;
  alt: string;
};

export const masterCodingIconData: MasterCodingIconProps[] = [
  {
    src: MasterCoding1,
    alt: 'logo',
  },
  {
    src: MasterCoding2,
    alt: 'icon',
  },
  {
    src: MasterCoding3,
    alt: 'icon',
  },
  {
    src: MasterCoding4,
    alt: 'icon',
  },
  {
    src: MasterCoding5,
    alt: 'icon',
  },
];
