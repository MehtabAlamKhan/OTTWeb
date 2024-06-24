import React, { useState, useEffect, Suspense } from "react";
import { Conatiner, Sections, Button, SearchBar } from "./styles/SectionNavBar";
import SearchInput from "./components/SearchBar";

export default function SectionNavBar({ selectedSection, setSelectedSection }) {
  const selectedStyle = {
    color: "white",
    borderBottom: "2px solid white",
  };

  const renderLoader = () => (
    <h1
      style={{
        position: "absolute",
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      Loading
    </h1>
  );

  // useEffect(() => {
  //   console.log(selectedSection);
  // }, [selectedSection]);

  function hideSearch(e) {
    // console.log(e);
    if (e.isPropagationStopped()) {
      console.log("stopped");
    }
    // return false;
  }

  return (
    <Conatiner>
      <Sections>
        <Suspense fallback={renderLoader()}>
          <Button
            style={selectedSection === "Home" ? selectedStyle : null}
            onClick={() => setSelectedSection("Home")}
          >
            Home
          </Button>
          <Button
            style={selectedSection === "Movies" ? selectedStyle : null}
            onClick={() => setSelectedSection("Movies")}
          >
            Movies
          </Button>
          <Button
            style={selectedSection === "TV" ? selectedStyle : null}
            onClick={() => setSelectedSection("TV")}
          >
            TV
          </Button>
          <Button
            style={selectedSection === "Animated" ? selectedStyle : null}
            onClick={() => setSelectedSection("Animated")}
          >
            Animated
          </Button>
        </Suspense>
      </Sections>
      <SearchBar onClick={(e) => hideSearch(e)}>
        <SearchInput />
      </SearchBar>
    </Conatiner>
  );
}
