import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  FooterWrapper,
  BottomContainer,
  BottomDetails,
  LinkContainer,
  Row,
  Link,
  ConnectWithUs,
  IconCont,
  Logo,
} from "./style";
import Insta from "../../icons/insta.svg";
import Facebook from "../../icons/facebook.svg";
import Twitter from "../../icons/twitter.svg";
import YouTube from "../../icons/youtube.svg";

export default function Footer() {
  const [color, setColor] = useState("black");

  return (
    <FooterWrapper>
      <LinkContainer>
        <Row>
          <Link href="#">Help</Link>
          <Link href="#">About us</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">Terms of use</Link>
        </Row>
        <Row>
          <Link href="#">Sci-fi</Link>
          <Link href="#">Action</Link>
          <Link href="#">Horror</Link>
          <Link href="#">Drama</Link>
          <Link href="#">More</Link>
        </Row>
        <Row>
          <Link href="#">Careers</Link>
        </Row>
        <Row>
          <Link href="#">Account</Link>
        </Row>
      </LinkContainer>
      <BottomContainer>
        <ConnectWithUs>Connect With Us</ConnectWithUs>
        <IconCont>
          <Logo src={Insta}></Logo>
          <Logo src={Facebook}></Logo>
          <Logo src={Twitter}></Logo>
          <Logo src={YouTube}></Logo>
        </IconCont>
        <BottomDetails>A PROJECT BY MEHTAB ALAM KHAN &copy;</BottomDetails>
      </BottomContainer>
    </FooterWrapper>
  );
}
