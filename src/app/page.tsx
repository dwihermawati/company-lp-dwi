import Navbar from '@/components/common/navbar';
import Hero from './home/partials/hero';
import TrustedCompany from './home/partials/trustedCompany';
import CodingJourney from './home/partials/codingJourney';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompany />
      <CodingJourney />
    </>
  );
};

export default Home;
