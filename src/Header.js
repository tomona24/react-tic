import React, { Component } from "react";
import styled from "styled-components";

const CIRCLE = "◯";
const CROSS = "×";

class Title extends Component {
  render() {
    return <h2>TicTacToe</h2>;
  }
}

const Turn = (props) => {
  const { currentTurn } = props;
  if (currentTurn === CIRCLE) {
    return (
      <Div flex>
        <CurrentDiv now>◯</CurrentDiv>
        <CurrentDiv>×</CurrentDiv>
      </Div>
    );
  } else {
    return (
      <Div flex>
        <CurrentDiv>◯</CurrentDiv>
        <CurrentDiv now>×</CurrentDiv>
      </Div>
    );
  }
};

const Header = (props) => {
  const { currentTurn } = props;
  return (
    <Div>
      <Title />
      <Turn currentTurn={currentTurn} />
    </Div>
  );
};

const Div = styled.div`
  text-align: center;
  margin: 16px auto;
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex ? "space-around" : "none")};
  width: 180px;
`;

const CurrentDiv = styled.div`
  width: 50px;
  padding: 8px;
  font-size: 1.3em;
  border-bottom: ${(props) =>
    props.now ? "3px solid #fa7364" : "3px solid #fff"};
`;

export default Header;
