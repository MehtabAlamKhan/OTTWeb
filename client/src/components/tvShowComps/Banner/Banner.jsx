import { useState, useEffect } from "react";
import "./bannerTV.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import UserScore from "./UserScore";
import Play from "../../../icons/play.svg";
import Favorite from "../../../icons/favorite.png";
import Rate from "../../../icons/rate.svg";
import BookmarkIcon from "../../../icons/bookmark.svg";
import {
  bookmark,
  deleteBookmark,
  favorite,
  deleteFavorite,
} from "../../../actions/authAction";

function Banner({
  showDetails,
  user,
  bookmark,
  deleteBookmark,
  deleteFavorite,
  favorite,
  isAuthenticated,
}) {
  // console.log(user);
  const [runTime, setRunTime] = useState();
  const [showHomePage, setShowHomePage] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const bookmarks = user?.bookmarks;
  const favorites = user?.favorites;

  const genres = showDetails.genres;

  useEffect(() => {
    if (showDetails.episode_run_time) {
      setRunTime(showDetails.episode_run_time[0]);
    }
  }, [showDetails]);

  useEffect(() => {
    console.log(bookmarks);
    bookmarks?.map((bk) => {
      if (bk.id === showDetails.id && bk.media_type === "tv") {
        setIsBookmarked(true);
      }
    });
  }, [bookmarks, showDetails]);

  useEffect(() => {
    favorites?.map((f) => {
      if (f.id === showDetails.id && f.media_type === "tv") {
        setIsFavorite(true);
      }
    });
  }, [favorites, showDetails]);

  return (
    <>
      <div className="tv-screen-banner-cont">
        <div
          className="tv-screen-banner"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${showDetails?.backdrop_path}")`,
            imageRendering: "-webkit-optimize-contrast",
          }}
        ></div>

        <div className="details-cont">
          <div className="tv-poster-cont">
            <a
              onMouseEnter={() => setShowHomePage(true)}
              onMouseLeave={() => setShowHomePage(false)}
              href={showDetails.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w300/${showDetails?.poster_path}`}
                alt="tv-poster"
              ></img>

              <div
                className="tv-show-home-page"
                id="tv-show-home-page"
                style={{ opacity: showHomePage ? "1" : "0" }}
              >
                Home Page
              </div>

              <div className="tv-poster-blackout" id="tv-poster-blackout"></div>
            </a>
          </div>

          <div className="text-cont">
            <h1 className="tv-title">
              {showDetails.name ||
                showDetails.title ||
                showDetails.original_name}
            </h1>
            <div className="tv-genre-cont">
              {genres &&
                genres.map((g) => (
                  <div className="tv-genre" key={g.id}>
                    {g.name}
                  </div>
                ))}
              <div className="tv-run-time">{runTime && runTime}min</div>
            </div>
            <div className="tv-banner-buttons-cont">
              {showDetails.vote_average !== 0 && (
                <UserScore score={parseFloat(showDetails.vote_average).toFixed(1)} />
              )}
              <div className="tv-banner-icons">
                <img
                  className="tv-banner-icon-img"
                  src={Play}
                  alt="Play"
                  title="Play"
                />
              </div>
              <div
                onClick={() => {
                  if (isAuthenticated) {
                    setIsFavorite((isFavorite) => setIsFavorite(!isFavorite));
                    if (isFavorite) {
                      deleteFavorite({ id: showDetails.id, media_type: "tv" });
                    }
                    if (!isFavorite) {
                      favorite({ id: showDetails.id, media_type: "tv" });
                    }
                  }
                }}
                className="tv-banner-icons"
                style={{
                  backgroundColor: isFavorite ? "white" : "",
                }}
              >
                <img
                  className="tv-banner-icon-img"
                  src={Favorite}
                  alt="Favorite"
                  title="Favorite"
                />
              </div>
              <div
                onClick={() => {
                  if (isAuthenticated) {
                    setIsBookmarked((isBookmarked) =>
                      setIsBookmarked(!isBookmarked)
                    );
                    if (isBookmarked) {
                      deleteBookmark({ id: showDetails.id, media_type: "tv" });
                    }
                    if (!isBookmarked) {
                      bookmark({ id: showDetails.id, media_type: "tv" });
                    }
                  }
                }}
                className="tv-banner-icons"
                style={{
                  backgroundColor: isBookmarked ? "white" : "",
                }}
              >
                <img
                  className="tv-banner-icon-img"
                  src={BookmarkIcon}
                  alt="Bookmark"
                  title="Bookmark"
                />
              </div>
              <div className="tv-banner-icons">
                <img
                  className="tv-banner-icon-img"
                  src={Rate}
                  alt="Rate"
                  title="Rate"
                />
              </div>
            </div>
            <div className="tv-overview-cont">
              <h1 className="tv-overview-title">OverView</h1>
              <p className="tv-overview-details">
                {showDetails && showDetails.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="tv-banner-fade" />
        <div className="tv-screen-poster-cont"></div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.error,
});

export default connect(mapStateToProps, {
  bookmark,
  deleteBookmark,
  favorite,
  deleteFavorite,
})(Banner);
