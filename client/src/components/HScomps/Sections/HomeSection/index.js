import React from "react";

import Row from "../../Components/Row/Row";
import { HomeRequests } from "../../../Requests";
import VerticalSlider from "./../../Components/VerticalSlider/VerticalSlider";

export default function index() {
  return (
    <>
      <Row
        title="MAK ORIGINALS"
        fetchUrl={HomeRequests.fetchNetflixOriginals}
        isLargeRow
        md_tv
      />
      <Row
        title="POPULAR TV SHOWS"
        fetchUrl={HomeRequests.fetchPopularTvShows}
        isLargeRow
        md_tv
      />
      <VerticalSlider
        title="TRENDING NOW"
        fetchUrl={HomeRequests.fetchTrending}
      />
      <Row
        title="TOP RATED TV SHOWS"
        fetchUrl={HomeRequests.fetchTopRated}
        md_tv
      />

      {/* <Row title="TRENDING NOW" fetchUrl={HomeRequests.fetchTrending} /> */}
      <Row
        title="POPULAR MOVIES"
        fetchUrl={HomeRequests.fetchPopularMovies}
        md_movie
      />
      {/* <Row
        title="ACTION MOVIES"
        fetchUrl={HomeRequests.fetchActionMovies}
        md_movie
      /> */}
      <Row
        title="COMEDY MOVIES"
        fetchUrl={HomeRequests.fetchComedyMovies}
        md_movie
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={HomeRequests.fetchHorrorMovies}
        md_movie
      />
    </>
  );
}
