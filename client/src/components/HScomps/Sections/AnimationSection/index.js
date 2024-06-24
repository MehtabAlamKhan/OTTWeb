import React from "react";
import { AnimatedRequests } from "../../../Requests";
import Row from "../../Components/Row/Row";
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider";

function index() {
  return (
    <>
      <Row
        title="POPULAR"
        fetchUrl={AnimatedRequests.fetchPopular}
        isLargeRow
        md_movie
      />

      <VerticalSlider
        md_movie
        title="JAPANESE"
        fetchUrl={AnimatedRequests.fetchJapanese}
      />

      <Row
        title="COMING SOON"
        fetchUrl={AnimatedRequests.fetchLatest}
        isLargeRow
        md_movie
      />
      {/* <Row
        title="TOP RATED"
        fetchUrl={AnimatedRequests.fetchTopRatedTV}
        md_movie
        isLargeRow
      /> */}
    </>
  );
}

export default index;
