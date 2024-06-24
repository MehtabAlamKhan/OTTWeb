import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Route } from "react-router-dom";

import NavBar from "../HScomps/Components/NavBar/NavBar";
import Banner from "../HScomps/Components/Banner/Banner";
import SectionNavBar from "./../SectionNav/index";
import HomeSection from "../HScomps/Sections/HomeSection";
import MovieSection from "../HScomps/Sections/MovieSection";
import TVSection from "../HScomps/Sections/TVSection";
import AnimationSection from "../HScomps/Sections/AnimationSection";
import Footer from "../Footer/index";

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 40px;
`;

function HomeScreen() {
  const [selectedSection, setSelectedSection] = useState("Home");

  useEffect(() => {
    // console.log(selectedSection);
  }, [selectedSection]);

  return (
    <>
      <Banner />
      <SectionNavBar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <SectionContainer>
        {selectedSection === "Home" && <HomeSection />}
        {selectedSection === "Movies" && <MovieSection />}
        {selectedSection === "TV" && <TVSection />}
        {selectedSection === "Animated" && <AnimationSection />}
      </SectionContainer>
      <Footer />
    </>
  );
}

export default HomeScreen;
