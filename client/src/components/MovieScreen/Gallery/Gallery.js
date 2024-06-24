import styled from "styled-components/macro";

export const GalleryWrapper = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`;
export const GallaryCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  font-size: 1.9rem;
  margin-bottom: 10px;
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Name = styled.button`
  color: rgb(125, 125, 125);
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  font-size: 1.4rem;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #ffffff18;
  }
`;
export const ImageCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Wallpapers = styled.img`
  image-rendering: auto;
  backface-visibility: hidden;
  max-height: 200px;
  margin-right: 15px;
`;

export const Posters = styled.img`
  image-rendering: auto;
  backface-visibility: hidden;
  max-height: 200px;
  margin-right: 15px;
`;
