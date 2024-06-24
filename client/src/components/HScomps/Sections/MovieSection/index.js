import React from "react";
import { MovieRequests } from "../../../Requests";
import Row from "../../Components/Row/Row";
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider";

function index() {
  return (
    <>
      <Row
        title="POPULAR MOVIES"
        fetchUrl={MovieRequests.fetchPopularMovies}
        isLargeRow
        md_movie
      />
      <VerticalSlider
        fetchUrl={MovieRequests.fetchTopRatedMovies}
        md_movie
        title="TOP RATED MOVIES"
      />

      <Row
        title="NOW PLAYING"
        fetchUrl={MovieRequests.fetchNowPlayingMovies}
        md_movie
        isLargeRow
      />
      <Row
        title="UPCOMING MOVIES"
        fetchUrl={MovieRequests.fetchUpComingMovies}
        md_movie
        isLargeRow
      />
    </>
  );
}

export default index;
