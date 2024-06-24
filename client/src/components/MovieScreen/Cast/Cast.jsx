import React, { useState, useEffect, useRef } from "react";
import "../../tvShowComps/Cast/cast.css";
import Axios from "../../axios";

function Cast({ movie_id }) {
  const [casts, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/w200/";

  useEffect(() => {
    async function fetchData() {
      // console.log("fetch data called");
      const req = await Axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`
      );

      setCast(req.data.cast);
      setCrew(req.data.crew);
      // console.log(req.data.cast);

      return req;
    }
    fetchData();
  }, [movie_id]);

  return (
    <div className="movie-cast-row">
      <RowCont casts={casts} baseUrl={baseUrl} />
    </div>
  );
}

function RowCont({ casts, baseUrl }) {
  const scrollLength = useRef({});
  const [scrollValue, setScrollValue] = useState(0);

  function scrollHandler() {
    setScrollValue(scrollLength.current.scrollLeft);
  }

  function arrowClickHandler(direction) {
    if (direction === "left") {
      scrollLength.current.scrollLeft -= 500;
    } else {
      scrollLength.current.scrollLeft += 500;
    }

    setTimeout(() => {
      setScrollValue(scrollLength.current.scrollLeft);
    }, 500);
  }

  return (
    <>
      <div className="movie-cast-container">
        <div className="tv-cast-title">Cast</div>
        {scrollValue > 0 && (
          <div
            className="scroll_left"
            onClick={() => arrowClickHandler("left")}
          >
            <img
              style={{
                height: "20px",
                width: "20px",
                filter: "brightness(0) invert(1)",
              }}
              src="https://www.svgrepo.com/show/90610/left-arrow-chevron.svg"
              alt="Scroll Left"
            />
          </div>
        )}
        <div
          className="tv-cast-post-cont"
          ref={scrollLength}
          onScroll={scrollHandler}
        >
          {casts &&
            casts.map(
              (cast, idx) =>
                cast.profile_path && (
                  <div key={idx} className="tv-cast-img-cont">
                    <img
                      className="tv-cast-image"
                      src={`${baseUrl}${cast.profile_path}`}
                      alt={cast.name}
                    />

                    <div className="tv-cast-details-cont">
                      <div className="tv-cast-name">
                        {cast.name || cast.original_name}
                      </div>
                      {(cast.character || cast.roles) && (
                        <div className="tv-cast-character">
                          Character: {cast.character || cast.roles[0].character}
                        </div>
                      )}
                    </div>
                  </div>
                )
            )}
        </div>
        {scrollValue !== scrollLength.current.scrollWidth && (
          <div
            className="scroll_right"
            onClick={() => arrowClickHandler("right")}
          >
            <img
              style={{
                filter: "brightness(0) invert(1)",
                height: "20px",
                width: "20px",
              }}
              src="https://www.svgrepo.com/show/5102/right-chevron.svg"
              alt="Scroll Right"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Cast;
