import React, { useState, useEffect } from "react";
// import Lottie from "react-lottie";

import { Link } from "react-router-dom";
import { Input } from "../styles/SectionNavBar";
import icon from "../icons8-search.json";
import Axios from "../../axios";
import styled from "styled-components/macro";
import Spinner from "../Spinner.svg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: icon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SearchWrapper = styled.div`
  position: relative;
  right: 2%;
`;
const Cross = styled.button`
  position: absolute;
  transform: translateX(-100%);
  cursor: pointer;
  height: 100%;
  color: rgba(129, 129, 129, 0.924);
  background-color: transparent;
  padding: 0;
  width: 30px;
  border: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    color: white;
    background-color: rgba(140, 140, 140, 0.3);
  }
`;
const ResultsWrapper = styled.div`
  margin-top: 5px;
  z-index: 20;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  background-color: #1a1a1a;
  transition: all 300ms ease-in-out;
  &::-webkit-scrollbar {
    width: 3px;
  }
`;
const SearchResults = styled.div``;

const Image = styled.img.attrs((props) => ({
  style: {
    background: props.background,
  },
}))`
  max-height: 100px;
  image-rendering: auto;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const ResultCont = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-family: custom;
  &:hover {
    background-color: #ffffff18;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-right: 15px;
  margin-left: 10px;
`;
const Name = styled.div`
  margin-bottom: 15px;
`;
const Release = styled.div`
  margin-bottom: 5px;
  font-family: customThin;
  font-size: 0.8rem;
`;
const Rating = styled.div`
  margin-bottom: 5px;
  font-family: customThin;
  font-size: 0.8rem;
`;

function SearchBar() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // console.log(searchKey);
    if (!searchKey) {
      setMovies([]);
      return;
    }
    async function fetchData() {
      setIsLoading(true);
      await Axios.get(
        `/search/multi?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US&query=${searchKey}&page=1&include_adult=true`
      )
        .then((res) => {
          setMovies(res.data.results);
          // console.log(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {});
    }

    fetchData();
  }, [searchKey]);

  return (
    <>
      <SearchWrapper>
        <Input
          name="hidden"
          type="text"
          autoComplete="off"
          autoSave="off"
          onChange={({ target }) => setSearchKey(target.value)}
          id="inp"
          placeholder="Search"
        ></Input>
        {searchKey.length !== 0 && (
          <Cross
            onClick={() => {
              setSearchKey("");
              document.getElementById("inp").value = "";
            }}
          >
            &#10006;
          </Cross>
        )}
        <ResultsWrapper>
          {movies &&
            movies.map(
              (movie, idx) =>
                movie.poster_path && (
                  <SearchResults key={idx}>
                    <Link
                      to={`${movie.media_type}/${movie.id}`}
                      style={{
                        textDecoration: "none",
                        textDecorationColor: "none",
                      }}
                    >
                      <ResultCont>
                        {isLoading ? (
                          <Image src={Spinner}></Image>
                        ) : (
                          <Image src={`${baseUrl}${movie.poster_path}`}></Image>
                        )}
                        <Details>
                          <Name>{movie.title || movie.original_name}</Name>
                          <Release>Release Date: {movie.release_date}</Release>
                          <Rating>Rating: {movie.vote_average}</Rating>
                          {/* <UserScore
                          score={movie.vote_average}></UserScore> */}
                        </Details>
                      </ResultCont>
                    </Link>
                  </SearchResults>
                )
            )}
        </ResultsWrapper>
      </SearchWrapper>
      <div
        onClick={() => {
          document.getElementById("inp").focus();
        }}
        style={{ cursor: "pointer" }}
      >
        {/* <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={30}
          width={30}
        /> */}
      </div>
    </>
  );
}

export default SearchBar;
