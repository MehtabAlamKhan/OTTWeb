import React, { useEffect, useState } from "react";
import moduleName from "react";
import { Link } from "react-router-dom";

import { HomeRequests } from "../../../Requests";
import axios from "../../../axios";
import {
  SliderWrapper,
  SliderOuterContainer,
  SliderHeading,
  SliderContainer,
  SliderDetailsCont,
  SliderMovieCont,
  SliderNav,
  SliderBg,
  SliderPoster,
  DetailsCont,
  DetailsTitle,
  SliderPost,
  Details,
  GenreCont,
  Genre,
  Play,
  Overview,
  Bookmark,
  ButtonsCont,
  NavCircle,
} from "./styles";
import Playimg from "../../../../icons/play.svg";
import Bookmarkimg from "../../../../icons/bookmark.svg";

import UserScore from "../../../tvShowComps/Banner/UserScore";

var timer;

function VerticalSlider({ fetchUrl, md_movie = false, title }) {
  const [movies, setMovies] = useState([]);

  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);

  const baseUrlBg = "https://image.tmdb.org/t/p/original/";
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      function setM() {
        setMovies(req.data.results);
      }
      if (movies.length === 0) {
        setM();
      }
      return req;
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length !== 0) {
      timer = setInterval(() => {
        loopSlider();
      }, 5000);
    }
  }, [movies]);

  useEffect(() => {
    if (index === movies.length) {
      setIndex(0);
      setTransform(0);
    } else {
      transformSlider(index);
    }
  }, [index]);

  function loopSlider() {
    setIndex((index) => setIndex(index + 1));
  }

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function transformSlider(idx) {
    setTransform(idx * 100);
  }

  return (
    <SliderWrapper>
      <SliderOuterContainer>
        <SliderHeading>{title}</SliderHeading>
        <SliderContainer>
          <SliderDetailsCont>
            {movies &&
              movies.map((movie, idx) => (
                <SliderMovieCont
                  style={{ transform: `translateY(-${transform}%)` }}
                  key={idx}
                >
                  <Link
                    target="_blank"
                    to={`/${
                      md_movie
                        ? "movie"
                        : movie.media_type === "movie"
                        ? "movie"
                        : "tv"
                    }/${movie.id}`}
                  >
                    <SliderPoster
                      src={`${baseUrl}${movie.poster_path}`}
                      alt="Poster"
                    ></SliderPoster>
                  </Link>
                  <DetailsCont>
                    <SliderBg
                      src={`${baseUrl}${movie.backdrop_path}`}
                      alt="Background Wall"
                    ></SliderBg>
                    <Details>
                      <DetailsTitle>
                        {movie?.name || movie?.title || movie?.original_name}
                      </DetailsTitle>
                      <GenreCont>
                        {movie.genre &&
                          movie.genre.map((g, idx) => (
                            <Genre key={idx}>{g.name}</Genre>
                          ))}
                      </GenreCont>
                      <ButtonsCont>
                        <Play src={Playimg} />
                        <Bookmark src={Bookmarkimg} />
                      </ButtonsCont>
                      <Overview>{truncate(`${movie?.overview}`, 450)}</Overview>
                    </Details>
                  </DetailsCont>
                </SliderMovieCont>
              ))}
          </SliderDetailsCont>
          <SliderNav>
            {movies &&
              movies.map((movie, idx) => (
                <NavCircle
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                    transformSlider(idx);
                    clearInterval(timer);
                  }}
                  style={{
                    backgroundColor: index === idx ? "white" : "transparent",
                    borderColor: index === idx ? "white" : "",
                  }}
                />
              ))}
          </SliderNav>
        </SliderContainer>
      </SliderOuterContainer>
    </SliderWrapper>
  );
}

export default VerticalSlider;
