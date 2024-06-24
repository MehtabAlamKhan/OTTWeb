import styled from "styled-components/macro";

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding-top: 50px;
  height: 350px;
  width: 100%;
  background-color: rgba(27, 27, 27, 0.7);
  font-family: customThin;
  color: white;
  margin-top: 60px;
  min-width: 851px;
`;
export const LinkContainer = styled.div`
  color: rgb(129, 129, 129);
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Link = styled.a`
  font-family: customThin;
  color: rgb(200, 200, 200);
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 0.9rem;
  transition: all 100ms ease-in-out;
  &:hover {
    color: white;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ConnectWithUs = styled.div`
  margin: 0;
  color: rgb(200, 200, 200);
  // font-size: 1.2rem;
  user-select: none;
`;
export const IconCont = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
`;
export const Logo = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
  margin: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
  image-rendering: -webkit-optimize-contrast;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  opacity: 0.5;
  transition: all 300ms ease;

  &:hover {
    opacity: 1;
    filter: brightness(1.1);
  }
`;

export const BottomDetails = styled.div`
  color: rgb(129, 129, 129);

  border-top: 1px solid rgb(170, 170, 170);
  padding: 2px;
  padding-top: 5px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 0.9rem;
`;
