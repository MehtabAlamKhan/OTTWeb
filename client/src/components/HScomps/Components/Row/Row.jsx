import React from "react";
import "./row.css";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "../../../axios";
import { Link } from "react-router-dom";

function Row({
  title,
  fetchUrl,
  isLargeRow = false,
  md_tv = false,
  md_movie = false,
}) {
  const [movies, setMovies] = useState([{ media_type: "" }]);
  // const [showT, setShowT] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  // const [newMovieList, setNewMovieList] = useState([]);
  // const [movieName, setMovieName] = useState("");

  const baseUrlLarge = "https://image.tmdb.org/t/p/w220_and_h330_face/";
  const baseUrlSmall = "https://image.tmdb.org/t/p/w300/";

  useEffect(() => {
    // console.log("fetch data called");
    async function fetchData() {
      const req = await Axios.get(fetchUrl);
      setMovies(req.data.results);
      // console.log(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  async function showToolTip(e, idx) {
    const element = e.target.offsetParent.offsetParent.children[1];
    element.style.opacity += "1";
  }

  async function removeToolTip(e, idx) {
    // setShowT(false);
    // console.log("remove called");
    const element = e.target.offsetParent.offsetParent.children[1];
    element.style.opacity = "0";
    // console.log(toolTime);

    // console.log(toolTime);
  }

  function arrowClickHandler(e, direction) {
    const element = e.view.document.activeElement.parentNode.children[2];
    // console.log(e);
    if (direction === "left") {
      element.scrollLeft -= 500;
    } else {
      element.scrollLeft += 500;
    }
  }

  // var toolstyle;
  // useEffect(() => {
  //   toolstyle = {
  //     opacity: toolTime ? "" : "0",
  //   };
  // }, [toolTime]);
  return (
    <div className="rowContainer">
      <div className="row">
        <button
          onClick={(e) => arrowClickHandler(e, "left")}
          onMouseEnter={() => {
            setShowArrow(true);
          }}
          onMouseLeave={() => {
            setShowArrow(false);
          }}
          style={{
            opacity: showArrow ? "1" : "0",
          }}
          className={`left-arrow ${isLargeRow && "left-arrow-large"}`}
        >
          <img
            className={`arrow-img ${isLargeRow && "arrow-img-large"}`}
            src="https://www.svgrepo.com/show/90610/left-arrow-chevron.svg"
            alt="Scroll Left"
          />
        </button>
        <h2 className={`genre-title ${isLargeRow && "large-title"}`}>
          {title}
        </h2>

        <div className="row-posts">
          {movies &&
            movies.map(
              (movie, idx) =>
                ((isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) && (
                  <div key={movie.id} className="row-poster-cont">
                    <div
                      className={`poster-cont ${
                        isLargeRow && "poster-cont-larger"
                      }`}
                    >
                      <Link
                        target="_blank"
                        to={`${
                          md_movie
                            ? "movie"
                            : movie.media_type === "movie"
                            ? "movie"
                            : "tv"
                        }/${movie.id}`}
                      >
                        <img
                          style={{ resize: "both" }}
                          // title={movie.name || movie.title || movie.original_name}
                          onMouseEnter={(e) => {
                            showToolTip(e, idx);
                          }}
                          onMouseOut={(e) => {
                            removeToolTip(e, idx);
                          }}
                          className={`row-poster ${
                            isLargeRow && "row-poster-larger"
                          }`}
                          src={`${isLargeRow ? baseUrlLarge : baseUrlSmall}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                          }`}
                          alt={movie.name}
                        ></img>
                      </Link>
                    </div>
                    <div className="row-poster-tooltip-cont">
                      {
                        <div className="row-poster-tooltip">
                          {truncate(
                            `${
                              movie.name || movie.title || movie.original_name
                            }`,
                            30
                          )}
                        </div>
                      }
                    </div>
                  </div>
                )
            )}
        </div>
        <button
          onClick={(e) => arrowClickHandler(e, "right")}
          onMouseEnter={() => {
            setShowArrow(true);
          }}
          onMouseLeave={() => {
            setShowArrow(false);
          }}
          style={{
            opacity: showArrow ? "1" : "0",
            scrollBehavior: "smooth",
          }}
          className={`right-arrow ${isLargeRow && "right-arrow-large"}`}
        >
          <img
            className={`arrow-img ${isLargeRow && "arrow-img-large"}`}
            src="https://www.svgrepo.com/show/5102/right-chevron.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Row;
