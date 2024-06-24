import React from "react";
import { TVRequests } from "../../../Requests";
import Row from "../../Components/Row/Row";
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider";

function index() {
  return (
    <>
      <Row
        title="ON THE AIR"
        fetchUrl={TVRequests.fetchOnTheAirTV}
        isLargeRow
        md_tv
      />
      <Row
        title="AIRING TODAY"
        fetchUrl={TVRequests.fetchAiringTodayTV}
        isLargeRow
        md_tv
      />
      <VerticalSlider
        md_tv
        fetchUrl={TVRequests.fetchPopularTV}
        title="POPULAR"
      />

      <Row
        title="TOP RATED"
        fetchUrl={TVRequests.fetchTopRatedTV}
        md_tv
        isLargeRow
      />
    </>
  );
}

export default index;
