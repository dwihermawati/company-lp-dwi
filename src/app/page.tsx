import Navbar from '@/components/common/navbar';
import Hero from './home/partials/hero';
import TrustedCompany from './home/partials/trustedCompany';
import CodingJourney from './home/partials/codingJourney';
import Module from './home/partials/module';
import Testimony from './home/partials/testimony';
import LearnReact from './home/partials/learnReact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompany />
      <CodingJourney />
      <Module />
      <LearnReact />
      <Testimony />
    </>
  );
};

export default Home;
