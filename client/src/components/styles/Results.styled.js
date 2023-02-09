import styled from "styled-components";

export const ResultsContainer = styled.main`
  width: 600px;
  margin-top: 15px;
`;

export const Result = styled.article`
  width: 100%;

  height: 175px;
  height: 45px;

  display: flex;
  background-color: #ede8e8;
  cursor: pointer;
  margin: 10px 0px;
  border-radius: 5px;
  box-shadow:
    rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  
  transition: box-shadow 75ms linear;
  overflow: hidden;
  
  &:hover {
    box-shadow:
    rgba(6, 24, 44, 0.4) 0px 0px 7px 2px,
    rgba(6, 24, 44, 0.65) 0px 7px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 0px 0px inset;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 0px 20px;
  border-right: 1px solid black;

  & > img {
    max-height: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const Title = styled.header`
  font-weight: 900;
  padding: 10px 10px;
  border-bottom: 1px solid #bbb;
`;

export const StatsContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;

  div {
    margin: 2px 0px;
  }
`;

export const StatLabel = styled.span`
  font-weight: 500;
  padding-left: 15px;
`;