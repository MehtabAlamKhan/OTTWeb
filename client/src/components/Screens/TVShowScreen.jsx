import React, { useState, useEffect } from "react";
import NavBar from "../HScomps/Components/NavBar/NavBar";
import Banner from "../tvShowComps/Banner/Banner";
import Cast from "../tvShowComps/Cast/Cast";
import Seasons from "../tvShowComps/Season/Seasons";
import SeasonVideos from "../tvShowComps/S_Videos/SeasonVideos";
import Axios from "../axios";
import { Link } from "react-router-dom";
import Footer from "./../Footer/index";
import Gallery from "../MovieScreen/Gallery";

function TVShowScreen({ match }) {
  const [showDetails, setShowSetails] = useState({});
  const tv_id = match.params.id;

  var url = `/tv/${tv_id}?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`;

  useEffect(() => {
    async function fetchDatas() {
      // console.log("fetch data called");
      await Axios.get(url)
        .then((req) => {
          // console.log(req);
          setShowSetails(req.data);
          // console.log(showDetails);
          // console.log(genres);
        })
        .catch((err) => {
          throw err;
          // console.log(err);
        });
    }
    fetchDatas();
  }, [url]);

  useEffect(() => {
    if (showDetails) {
      document.title =
        showDetails.name || showDetails.title || showDetails.original_name;
    }
  }, [showDetails]);

  return (
    <div>
      <Banner showDetails={showDetails} />

      <Seasons showDetails={showDetails} />
      <SeasonVideos tv_id={tv_id} showDetails={showDetails} />
      <Cast tv_id={tv_id} />
      <Gallery movie_id={tv_id} tv={"tv"} />
      <Footer />
    </div>
  );
}

export default TVShowScreen;
