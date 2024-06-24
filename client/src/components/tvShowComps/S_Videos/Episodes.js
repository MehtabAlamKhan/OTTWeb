import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Axios from "../../axios";

const T_cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  width: 90%;
  &:hover {
    background-color: #4949497a;
  }
`;
const T_Arrow = styled.img`
  max-height: 30px;
  filter: brightness(0) invert(1);
  align-self: center;
  user-select: none;
  transition: all 300ms ease-in-out;
  transform: rotate(-90deg);
`;
const Title = styled.div`
  color: #fff;
  font-family: monospace;
  font-size: 1.9rem;
`;

const Episode_cont = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  transition: all 300ms ease-in-out;
  height: fit-content;
  &::-webkit-scrollbar {
    display: none;
  }
  user-select: none;
  width: 90%;
  color: #fff;
`;
const Each_episode_cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  cursor: pointer;
  padding: 5px;
  padding-bottom: 100px;
  transition: all 100ms ease-in-out;
  border-radius: 2px;
  &:hover {
    background-color: #4949497a;
  }
`;
const Img_cont = styled.div`
  display: flex;
  justify-content: center;
  min-height: 150px;
  overflow: hidden;
`;
const Image = styled.img.attrs((props) => ({
  style: {
    background: props.background,
  },
  
}
))`
  max-height: 150px;
  image-rendering: auto;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Details_Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 257px;
`;
const Details_name = styled.h1`
  margin: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: custom;
  margin-bottom: 6px;
`;
const Details_overview = styled.p`
  font-family: monospace;
  font-size: 0.9rem;
  margin-top: 0px;
`;

function Episodes({
  tv_id,
  season_no,
  season,
  setHeight,
  height,
  showDetails,
}) {
  const [episodes, setEpisodes] = useState({});
  const [showEp, setShowEp] = useState(false);

  const baseUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    // console.log(season_no);
    async function fetchData() {
      Axios.get(
        `/tv/${tv_id}/season/${season_no}?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US`
      )
        .then((res) => {
          setEpisodes(res.data.episodes);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, [season_no]);

  // useEffect(() => {
  //   console.log(episodes);
  // }, [episodes]);

  useEffect(() => {
    if (showEp) {
      // setHeight((height) => setHeight(height + 270));
      setHeight(height + 270);
    }
    if (!showEp) {
      setHeight(height - 270);
    }
  }, [showEp]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return episodes.length !== 0 ? (
    <>
      <T_cont onClick={() => setShowEp((showEp) => !showEp)}>
        <Title>{season.name}</Title>
        <T_Arrow
          style={{ transform: showEp ? "rotate(0deg)" : "rotate(-90deg)" }}
          src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSg5MCkgdHJhbnNsYXRlKC02MDAgLTYwMCkiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjxzdmcgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzcuODk2LDQwLjE2OWwtMS43NTctMS40OTZsLTAuMjI0LTAuMjAyYy0wLjM5Ny0wLjM1OC0wLjgxOS0wLjcxLTEuMjUxLTEuMDU2ICBMMzMuNDA0LDIuMjUzYy0zLjE4OC0zLjA4LTguMjctMi45OS0xMS4zNSwwLjE5N2wtMS4xLDEuMTRjLTMuMDgsMy4xODktMi45OSw4LjI3MSwwLjE5OCwxMS4zNWwyOC44MzIsMzQuNjA5TDI0LjMwOCw4NS41NDIgIGMtMi45NjcsMy4yOTUtMi43MDEsOC4zNywwLjU5NCwxMS4zMzdsMS4xNzcsMS4wNmMzLjI5NCwyLjk2Nyw4LjM2OSwyLjY5OSwxMS4zMzUtMC41OTRsMzguNzQzLTM5LjQwMSAgYzAuMTYzLTAuMTQyLDAuMzM2LTAuMjc2LDAuNDgzLTAuNDI5bDEuNTI5LTEuNTgzQzgyLjQ0Niw1MS41MDMsODIuMzIyLDQ0LjQ0NSw3Ny44OTYsNDAuMTY5eiI+PC9wYXRoPjwvc3ZnPjwvZz48L3N2Zz4=`}
        ></T_Arrow>
      </T_cont>
      <Episode_cont style={{ height: showEp ? "270px" : "0px" }}>
        {episodes.length &&
          episodes.map((episode) => (
            <Each_episode_cont key={episode.episode_number}>
              <Img_cont>
                {episode.still_path ? (
                  <Image
                    src={`${baseUrl}${
                      episode.still_path
                        ? episode.still_path
                        : showDetails.backdrop_path
                    }`}
                  />
                ) : (
                  <Details_name>Coming Soon...</Details_name>
                )}
              </Img_cont>
              <Details_Cont>
                <Details_name>Episode {episode.episode_number}</Details_name>
                <Details_name>{episode.name}</Details_name>
                <Details_overview>
                  {truncate(episode.overview, 100)}
                </Details_overview>
              </Details_Cont>
            </Each_episode_cont>
          ))}
      </Episode_cont>
    </>
  ) : null;
}

export default Episodes;
