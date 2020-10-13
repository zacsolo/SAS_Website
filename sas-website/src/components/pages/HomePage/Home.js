import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}
