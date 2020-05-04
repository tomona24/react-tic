import React from "react";
import styled from 'styled-components'

const CurrentState = (props) => {
  const { currentTurn, isEnd, winner } = props;
  if (isEnd === true) {
    if (winner != null) {
      return <Div>{winner} win!!</Div>;
    } else {
      return <Div>Draw</Div>;
    }
  } else {
    return <Div>Starting...</Div>;
  }
};

const ResetButton = (props) => {
  const { initLetters } = props;
  return (
    <div>
      <Button onClick={initLetters}>RESTART</Button>
    </div>
  );
};

const Footer = (props) => {
  const { initLetters, currentTurn, isEnd, winner } = props;
  return (
    <div>
      <CurrentState currentTurn={currentTurn} isEnd={isEnd} winner={winner} />
      <ResetButton initLetters={initLetters} />
    </div>
  );
};

const Button = styled.button`
  padding: 4px 8px;
  font-size: .8em;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #888
  `;

  const Div = styled.div`
  padding: 8px;
  margin: 5px;
  height: 24px;
  `;

export default Footer;
