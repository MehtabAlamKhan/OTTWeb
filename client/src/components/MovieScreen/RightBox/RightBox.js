import React from "react";
import styled from "styled-components/macro";

const RightBoxWrapper = styled.div`
  display: flex;
  width: 25%;
  margin-left: 10px;
  margin-top: 20px;
`;
const RightBoxContainer = styled.div`
  background-color: rgba(158, 158, 158, 0.123);
  width: 90%;
  height: fit-content;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  font-family: customThin;
  padding: 10px;
  padding-bottom: 40px;
  color: #fff;
  user-select: none;
`;
const DetailsCont = styled.div`
  margin-bottom: 20px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.4rem;
`;
const Details = styled.div``;
const UpperDetails = styled.div`
  font-family: custom;
  font-size: 1.1rem;
`;

function RightBox({ showDetails }) {
  return (
    <RightBoxWrapper>
      <RightBoxContainer>
        <DetailsCont>
          <Details>
            <UpperDetails>Release Date </UpperDetails>
            {showDetails.release_date}
          </Details>
        </DetailsCont>
        <DetailsCont>
          <Details>
            <UpperDetails>Budget </UpperDetails>${showDetails.budget}
          </Details>
        </DetailsCont>
        <DetailsCont>
          <Details>
            <UpperDetails>Revenue </UpperDetails>${showDetails.revenue}
          </Details>
        </DetailsCont>
        {showDetails.tagline && (
          <DetailsCont>
            <Details>
              <UpperDetails> Tagline </UpperDetails>
              {showDetails.tagline}
            </Details>
          </DetailsCont>
        )}
        <DetailsCont>
          <Details>
            <UpperDetails> Status </UpperDetails>
            {showDetails.status}
          </Details>
        </DetailsCont>
      </RightBoxContainer>
    </RightBoxWrapper>
  );
}

export default RightBox;
