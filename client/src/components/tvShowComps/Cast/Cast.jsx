import React, { useState, useEffect } from "react";
import "./cast.css";
import Axios from "../../axios";

function Cast({ tv_id }) {
  const [casts, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  // const [showT, setShowT] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  // const [movieName, setMovieName] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/w200/";
  // console.log(casts[0].roles[0].character);

  useEffect(() => {
    // console.log("fetch data called");
    async function fetchData() {
      const req = await Axios.get(
        `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`
      );
      if (req.data.cast.length === 0) {
        const req = await Axios.get(
          `https://api.themoviedb.org/3/tv/${tv_id}/aggregate_credits?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`
        );
        // console.log(req);
        setCast(req.data.cast);
        setCrew(req.data.crew);
      } else {
        setCast(req.data.cast);
        setCrew(req.data.crew);
        // console.log(req.data.cast);
      }

      return req;
    }
    fetchData();
  }, [tv_id]);

  function arrowClickHandler(e, direction) {
    const element = e.view.document.activeElement.parentNode.children[2];
    // console.log(e);
    if (direction === "left") {
      element.scrollLeft -= 500;
    } else {
      element.scrollLeft += 500;
    }
  }

  return (
    <div className={tv_id ? "tv-cast-row" : "movie-cast-row"}>
      <RowCont casts={casts} baseUrl={baseUrl} />
    </div>
  );
}

function RowCont({ casts, baseUrl }) {
  return (
    <>
      <div className="tv-cast-container">
        <div className="tv-cast-title">Cast</div>
        <div className="tv-cast-row-cont">
          <div className="tv-cast-post-cont">
            {casts &&
              casts.map(
                (cast) =>
                  cast.profile_path && (
                    <div key={cast.id} className="tv-cast-img-cont">
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
                            Character:
                            {cast.character || cast.roles[0].character}
                          </div>
                        )}
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cast;
