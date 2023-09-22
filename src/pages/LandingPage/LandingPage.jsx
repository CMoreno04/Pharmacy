import React, { useRef } from "react";

import Header from "../../components/shared-components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";

import "./landing-page-styles.css";

const LandingPage = () => {

  // Create a ref for the FeaturesSection component
  const featuresRef = useRef();

  // Create a function to scroll to the FeaturesSection component
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      <Header />
      <HeroSection scrollToFeatures={scrollToFeatures} />
      <FeaturesSection ref={featuresRef} />
    </div>
  );
};

export default LandingPage;
