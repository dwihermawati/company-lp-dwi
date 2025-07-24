import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';

import CodingJourney from './home/partials/codingJourney';
import CTA from './home/partials/cta';
import FAQ from './home/partials/faq';
import Hero from './home/partials/hero';
import LearnReact from './home/partials/learnReact';
import Module from './home/partials/module';
import Testimony from './home/partials/testimony';
import TrustedCompany from './home/partials/trustedCompany';

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
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
