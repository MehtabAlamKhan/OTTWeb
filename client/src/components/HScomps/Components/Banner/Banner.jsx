import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./banner.css";
import axios from "../../../axios";
import { HomeRequests } from "../../../Requests";
import { Link } from "react-router-dom";
import Play from "../../../../icons/play.svg";
import Bookmark from "../../../../icons/bookmark.svg";
import { bookmark, deleteBookmark } from "./../../../../actions/authAction";
import LoginRegister from "../login/LoginRegister";

var timer;

function Banner(props) {
  const [movies, setMovies] = useState([]);
  const [openLogin, setOpenLogin] = useState(false);

  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);

  const bookmarks = props.user?.bookmarks;

  const [isBookMarked, setIsBookMarked] = useState(false);

  var bks = [];

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(HomeRequests.fetchNetflixOriginals);
      function setM() {
        setMovies(req.data.results);
      }
      if (movies.length === 0) {
        setM();
      }
      return req;
    }
    fetchData();
    return () => {};
  }, []);

  useEffect(() => {
    if (movies.length !== 0) {
      timer = setInterval(() => {
        loopSlider();
      }, 5000);
    }
    return () => {};
  }, [movies]);

  useEffect(() => {
    if (index !== 0) setIsBookMarked(false);
    if (index === movies.length) {
      setIndex(0);
      setTransform(0);
    } else {
      transformSlider(index);
    }
    return () => {};
  }, [index]);

  useEffect(() => {
    bookmarks?.map((bk) => {
      if (bk?.id === movies[index]?.id && bk?.media_type === "tv") {
        setIsBookMarked(true);
      }
    });
  }, [bookmarks, index, movies]);

  function loopSlider() {
    setIndex((index) => setIndex(index + 1));
  }

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function transformSlider(idx) {
    setTransform(idx * 100);
  }

  function redirectHandler() {
    if (!props.isAuthenticated) {
      return (
        <LoginRegister openLogin={openLogin} setOpenLogin={setOpenLogin} />
      );
    }
  }

  return (
    <div className="bannerContainer">
      <div className="bgImageCont">
        {movies &&
          movies.map((movie, idx) => (
            <div
              key={idx}
              className="bgImage"
              style={{
                // resize: "both",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/w200/${movie?.backdrop_path}")`,
                transform: `translateX(-${transform}%)`,
              }}
            ></div>
          ))}
      </div>
      <div className="sliderContainer">
        {movies &&
          movies.map((movie, idx) => (
            <header
              key={idx}
              className="bannerImage"
              style={{
                resize: "both",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                imageRendering: "-webkit-optimize-contrast",
                transform: `translateX(-${transform}%)`,
              }}
            >
              <div className="banner-contents">
                <Link
                  style={{ width: "fit-content" }}
                  to={`/tv/${movie && movie.id}`}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  title="Title"
                >
                  <h1 className="banner-title">
                    {movie?.name || movie?.title || movie?.original_name}
                  </h1>
                </Link>
                <div className="button-cont">
                  <div className="buttons">
                    <img
                      className="play"
                      src={Play}
                      alt="Play"
                      title="Play"
                    ></img>
                  </div>
                  <div
                    onLoad={(e) => {}}
                    style={{
                      backgroundColor: isBookMarked ? "white" : "",
                    }}
                    onClick={() => {
                      redirectHandler();
                      if (props.isAuthenticated) {
                        if (!isBookMarked) {
                          props.bookmark({ id: movie.id, media_type: "tv" });
                        }
                        if (isBookMarked) {
                          props.deleteBookmark({
                            id: movie.id,
                            media_type: "tv",
                          });
                        }
                        setIsBookMarked((isBookMarked) =>
                          setIsBookMarked(!isBookMarked)
                        );
                      }
                    }}
                    className="buttons"
                  >
                    <img
                      className="my-list"
                      src={Bookmark}
                      alt="Bookmark"
                      title="Bookmark"
                    ></img>
                  </div>
                </div>
                <h3 className="banner-description">
                  {truncate(`${movie?.overview}`, 160)}
                </h3>
              </div>
            </header>
          ))}
      </div>
      <div className="navigationcontainer">
        {movies &&
          movies.map((movie, idx) => (
            <div
              onClick={() => {
                setIndex(idx);
                transformSlider(idx);
                clearInterval(timer);
              }}
              key={idx}
              className={`navigationCircles ${
                index === idx && "navigationCirclesWhite"
              }`}
            ></div>
          ))}
      </div>

      <div className="banner-fade" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.error,
});

export default connect(mapStateToProps, { bookmark, deleteBookmark })(Banner);
