import React, { useState, useEffect } from "react";
import NavBar from "../HScomps/Components/NavBar/NavBar";
import Banner from "../MovieScreen/Banner/Banner";
import Cast from "../MovieScreen/Cast/Cast";
import Seasons from "../tvShowComps/Season/Seasons";
import Axios from "../axios";
import styled from "styled-components/macro";
import RightBox from "../MovieScreen/RightBox/RightBox";
import Footer from "../Footer/index";
import Gallery from "../MovieScreen/Gallery";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";

const MovieRightbox_Cast = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-width: 851px;
`;

function MovieScreen({ match }) {
  const [showDetails, setShowSetails] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);

  const movie_id = match.params.id;

  var url = `/movie/${movie_id}?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`;

  useEffect(() => {
    async function fetchDatas() {
      console.log("fetch data called");
      await Axios.get(url)
        .then((req) => {
          // console.log(req);
          setShowSetails(req.data);
          // console.log(showDetails);
          // console.log(genres);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchDatas();
  }, [url]);

  useEffect(() => {
    document.title =
      showDetails.name || showDetails.title || showDetails.original_name;
  }, [showDetails]);

  const leftStyle = {
    position: "relative",
    alignSelf: "center",
    justifySelf: "center",
    opacity: "1",
  };

  return (
    <>
      <Banner
        showDetails={showDetails}
        setShowPlayer={setShowPlayer}
        showPlayer={showPlayer}
      />
      {!showPlayer && (
        <>
          <MovieRightbox_Cast>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                width: "90%",
              }}
            >
              <Cast movie_id={movie_id} />
              <RightBox showDetails={showDetails} />
            </div>
          </MovieRightbox_Cast>
          <Gallery movie_id={movie_id} movie={"movie"} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MovieScreen;
