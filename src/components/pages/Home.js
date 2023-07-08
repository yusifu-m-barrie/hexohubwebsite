import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import {homeObjOne, homeObjThree} from "./HomeData";
import InfoSection from "../InfoSection/InfoSection";
import Subsection from "../Subsection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
