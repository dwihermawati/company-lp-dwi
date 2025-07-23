import { StaticImageData } from 'next/image';

import profile1Src from '../../public/images/profile-testimoni-1.png';
import profile2Src from '../../public/images/profile-testimoni-2.png';
import profile3Src from '../../public/images/profile-testimoni-3.png';
import profile4Src from '../../public/images/profile-testimoni-4.png';

type Testimonial = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

export const testimonialsData: Testimonial[] = [
  {
    rating: 5,
    description:
      '"This bootcamp completely changed my life. The mentorship, hands-on projects, and job support helped me land a frontend developer role in just a few months!"',
    profileSrc: profile1Src,
    profileName: 'Rizky Aulia',
    profileOccupation: 'Student',
  },
  {
    rating: 5,
    description:
      '"The best part was the real-time mentor feedback. It felt like I had a personal coach guiding me every step of the way."',
    profileSrc: profile2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Student',
  },
  {
    rating: 5,
    description:
      '"I had zero tech background before joining, but the structured learning path made it easy to follow. Now I’m interning at a tech startup and loving it!"',
    profileSrc: profile3Src,
    profileName: 'Jonathan Santoso',
    profileOccupation: 'Student',
  },
  {
    rating: 5,
    description:
      '"The best part was the real-time mentor feedback. It felt like I had a personal coach guiding me every step of the way."',
    profileSrc: profile4Src,
    profileName: 'Dina Ramadhani',
    profileOccupation: 'Student',
  },
];
