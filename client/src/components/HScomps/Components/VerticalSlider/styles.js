import styled from "styled-components/macro";

export const SliderWrapper = styled.div`
  // height: 400px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
`;

export const SliderOuterContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SliderHeading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 10px;
  width: 100%;
  font-family: monospace;
  font-size: 1.9rem;
  -webkit-user-select: none;
  user-select: none;
  margin-bottom: 20px;
`;

export const SliderContainer = styled.div`
  width: 1100px;
  min-width: 1000px;
  height: 450px;
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const SliderDetailsCont = styled.div`
  height: 100%;
  width: 1000px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const SliderNav = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20px;
`;

export const SliderMovieCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 1000px;
  transition: all 300ms ease;
`;
export const SliderPoster = styled.img`
  height: 450px;
  object-fit: cover;
  width: 300px;
  image-rendering: -webkit-optimize-contrast;
  cursor: pointer;
`;

export const DetailsCont = styled.div`
  position: relative;
  height: 100%;
  width: 700px;
  object-fit: cover;
`;

export const SliderBg = styled.img`
  position: absolute;
  height: 450px;
  object-fit: cover;
  width: 100%;
  -webkit-mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left top, left bottom;
  z-index: -1;
  filter: opacity(0.7);
  image-rendering: -webkit-optimize-contrast;
`;

export const SliderPost = styled.div``;

export const Details = styled.div`
  height: max-content;
  // background-color: grey;
  padding: 40px;
`;

export const DetailsTitle = styled.h2`
  margin: 0;
  color: white;
  font-family: custom;
  font-size: 2.2rem;
`;
export const GenreCont = styled.div``;

export const Genre = styled.div``;

export const ButtonsCont = styled.div`
  width: 100px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;
export const Play = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.09);
  }
`;
export const Bookmark = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.09);
  }
`;

export const Overview = styled.div`
  color: white;
  margin-top: 45px;
  font-family: customThin;
  font-weight: 300;
  line-height: 1.5;
`;

export const NavCircle = styled.div`
  height: 5px;
  margin: 5px 0px 5px 0px;
  width: 5px;
  border: 2px solid grey;
  border-radius: 50%;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: white;
  }
`;
