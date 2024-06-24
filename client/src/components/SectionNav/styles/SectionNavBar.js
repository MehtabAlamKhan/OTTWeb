import styled from "styled-components/macro";
import icon from "../icons8-search.json";

export const Conatiner = styled.section`
  margin-top: 10px;
  margin-bottom: 40px;
  height: 40px;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 851px;
  align-items: center;
`;
export const Sections = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  height: 100%;
`;
export const Button = styled.button`
  color: rgba(129, 129, 129, 0.924);
  font-family: custom;
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0px 15px 0px 15px;
  transition: all 200ms ease-in-out;
  border-bottom: 2px solid rgba(173, 173, 173, 0.26);

  &:hover {
    background-color: rgba(173, 173, 173, 0.157);
  }
`;
export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 7%;
`;
export const Input = styled.input`
  padding: 5px;
  padding-left: 10px;
  padding-right: 40px;
  
  outline: none;
  border: 1px solid rgba(129, 129, 129, 0.924);
  background-color: transparent;
  color: white;
  width: 400px;
  height: 20px;
  font-family: custom;
  font-size: 1rem;
  transition: all 300ms ease-in-out;
  &:focus {
    border: 1px solid white;
  }
  @media screen and (max-width: 1200px) {    
    width: 200px;
    
  }
`;

export const Icon = styled.img`
  background-image: src(${icon});
  height: 40px;
  width: 40px;
  margin-left: 10px;
`;
