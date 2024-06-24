import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "../../axios";
import {
  GalleryWrapper,
  GallaryCont,
  Title,
  ImageCont,
  Wallpapers,
  Posters,
  Name,
  Section,
} from "./Gallery.js";

function Index({ movie, tv, movie_id }) {
  const [wallpapers, setWallpapers] = useState([]);
  const [posters, setPosters] = useState([]);
  const [selected, setSelected] = useState("Wallpapers");

  const baseURL = "https://image.tmdb.org/t/p/w400/";
  useEffect(() => {
    async function fetchImages() {
      await Axios.get(
        `https://api.themoviedb.org/3/${
          movie ? movie : tv
        }/${movie_id}/images?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f`
      )
        .then((res) => {
          // console.log(res.data);
          setWallpapers(res.data.backdrops);
          setPosters(res.data.posters);
        })
        .catch((err) => {});
    }
    fetchImages();
  }, [movie_id]);

  const bordertyle = {
    borderBottom: "2px white solid",
    color: "white",
  };

  return (
    <>
      <GalleryWrapper>
        <GallaryCont>
          <Title>Gallery</Title>
          <Section>
            <Name
              onClick={() => {
                setSelected("Wallpapers");
              }}
              style={selected === "Wallpapers" ? bordertyle : null}
            >
              Wallpapers
            </Name>
            <Name
              onClick={() => {
                setSelected("Posters");
              }}
              style={selected === "Posters" ? bordertyle : null}
            >
              Posters
            </Name>
          </Section>
          <ImageCont>
            {selected === "Wallpapers"
              ? wallpapers &&
                wallpapers.map(
                  (backdrop, idx) =>
                    backdrop.file_path && (
                      <Wallpapers
                        key={idx}
                        src={`${baseURL}${backdrop.file_path}`}
                        alt="Wallpaper"
                      ></Wallpapers>
                    )
                )
              : posters &&
                posters.map(
                  (poster, idx) =>
                    poster.file_path && (
                      <Posters
                        key={idx}
                        src={`${baseURL}${poster.file_path}`}
                        alt="Poster"
                      ></Posters>
                    )
                )}
          </ImageCont>
        </GallaryCont>
      </GalleryWrapper>
    </>
  );
}

export default Index;
