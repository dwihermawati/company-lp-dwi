import { Icon } from '@iconify/react';

type Icon = {
  socialIcon: React.ReactNode;
  href: string;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    socialIcon: (
      <Icon
        icon='akar-icons:instagram-fill'
        className='size-5 md:size-6'
        color='#FDFDFD'
      />
    ),
    href: 'https://www.instagram.com/',
    alt: 'Instagram',
  },
  {
    socialIcon: (
      <Icon
        icon='basil:linkedin-solid'
        className='size-4 md:size-5'
        color='#FDFDFD'
      />
    ),
    href: 'https://www.linkedin.com/',
    alt: 'LinkedIn',
  },
];
