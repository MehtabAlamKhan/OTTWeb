import React, { useState, useEffect } from "react";
import "./season.css"

function Season({ showDetails }) {
  const [seasons, setSeasons] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/w300/";

  useEffect(() => {
    if (showDetails.seasons) {
      setSeasons(showDetails.seasons);
    }
  }, [showDetails]);

  return (
    <div className="tv-season-wrapper">
      <div className="tv-season-cont">
        <div className="tv-season-title">Seasons</div>
        <div className="tv-season-row-cont">
          <div className="tv-season-each-cont">
            {seasons &&
              seasons.map((season) => (
                <div key={season.season_number} className="each-season">
                  <img className='tv-season-image' src={`${baseUrl}${season.poster_path || showDetails.poster_path}`} alt="" />
                  <div className="tv-season-details-cont">
                      <h1 className="season-name">{season.name}</h1>
                    <div className="number-of-ep">Number of Episodes : {season.episode_count}</div>
                    <div className="release-date">Released on : {season.air_date}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Season;
