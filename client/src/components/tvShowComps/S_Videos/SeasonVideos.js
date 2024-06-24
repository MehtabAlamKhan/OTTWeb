import styled from "styled-components/macro";
import React, { useEffect, useState } from "react";
import Episodes from "./Episodes";

const Episodes_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 851px;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  user-select: none;
`;
const Season = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  min-width: 851px;
  height: fit-content;
  width: 100%;
  // padding-top: 10px;
`;
const Container = styled.div`
  width: 90%;
`;

const T_main_cont = styled.div`
  width: 100%;
  min-width: 851px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const T_cont = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  padding: 5px 5px 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #4949497a;
  }
  width: 90%;
`;
const Episode_Title = styled.div`
  color: #fff;
  font-family: monospace;
  font-size: 1.9rem;
`;
const T_Arrow = styled.img`
  max-height: 30px;
  filter: brightness(0) invert(1);
  align-self: center;
  user-select: none;
  transition: all 200ms ease-in-out;
  transform: rotate(-90deg);
`;

function SeasonVideos({ tv_id, showDetails }) {
  const [showEp, setShowEp] = useState(false);
  const [height, setHeight] = useState();

  useEffect(() => {
    if (showDetails.seasons) {
      const len = showDetails.seasons.filter(
        (season) => season.episode_count !== 0
      );
      // console.log(len.length);
      setHeight(len.length * 40);
    }
  }, [showDetails]);

  return showDetails.seasons ? (
    <>
      <T_main_cont>
        <T_cont onClick={() => setShowEp((showEp) => !showEp)}>
          <Episode_Title>Episodes</Episode_Title>
          <T_Arrow
            style={{ transform: showEp ? "rotate(0deg)" : "rotate(-90deg)" }}
            src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSg5MCkgdHJhbnNsYXRlKC02MDAgLTYwMCkiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjxzdmcgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzcuODk2LDQwLjE2OWwtMS43NTctMS40OTZsLTAuMjI0LTAuMjAyYy0wLjM5Ny0wLjM1OC0wLjgxOS0wLjcxLTEuMjUxLTEuMDU2ICBMMzMuNDA0LDIuMjUzYy0zLjE4OC0zLjA4LTguMjctMi45OS0xMS4zNSwwLjE5N2wtMS4xLDEuMTRjLTMuMDgsMy4xODktMi45OSw4LjI3MSwwLjE5OCwxMS4zNWwyOC44MzIsMzQuNjA5TDI0LjMwOCw4NS41NDIgIGMtMi45NjcsMy4yOTUtMi43MDEsOC4zNywwLjU5NCwxMS4zMzdsMS4xNzcsMS4wNmMzLjI5NCwyLjk2Nyw4LjM2OSwyLjY5OSwxMS4zMzUtMC41OTRsMzguNzQzLTM5LjQwMSAgYzAuMTYzLTAuMTQyLDAuMzM2LTAuMjc2LDAuNDgzLTAuNDI5bDEuNTI5LTEuNTgzQzgyLjQ0Niw1MS41MDMsODIuMzIyLDQ0LjQ0NSw3Ny44OTYsNDAuMTY5eiI+PC9wYXRoPjwvc3ZnPjwvZz48L3N2Zz4=`}
          ></T_Arrow>
        </T_cont>
      </T_main_cont>
      <Episodes_wrapper style={{ height: showEp ? `${height}px` : "0px" }}>
        {showDetails.seasons.map((season) => (
          <Season key={season.season_number}>
            <Episodes
              height={height}
              setHeight={setHeight}
              season={season}
              season_no={season.season_number}
              showDetails={showDetails}
              tv_id={tv_id}
            ></Episodes>
          </Season>
        ))}
      </Episodes_wrapper>
    </>
  ) : null;
}

export default SeasonVideos;
