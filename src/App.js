import React, { Component } from "react";
import Row from "./Row";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import styled from "styled-components";

const CIRCLE = "◯";
const CROSS = "×";

class App extends Component {
  // コンストラクタの中に書く
  state = {
    letters: [
      [
        { index: 0, letter: null },
        { index: 1, letter: null },
        { index: 2, letter: null },
      ],
      [
        { index: 3, letter: null },
        { index: 4, letter: null },
        { index: 5, letter: null },
      ],
      [
        { index: 6, letter: null },
        { index: 7, letter: null },
        { index: 8, letter: null },
      ],
    ],
    currentTurn: CIRCLE,
    isEnd: false,
    winner: null,
  };

  initLetters = () => {
    // アロー関数にする
    const { letters, isEnd, winner, currentTurn } = this.state;
    this.setState({
      isEnd: false,
      winner: null,
      currentTurn: CIRCLE,
      letters: letters.map((row) => {
        row.map((data) => {
          data.letter = null;
          return data;
        });
        return row;
      }),
    });
  };

  toggleTurn = () => {
    const { currentTurn } = this.state;
    return currentTurn === CIRCLE ? CROSS : CIRCLE;
  };

  checkEnd = () => {
    const { letters, currentTurn } = this.state;
    let count = 0;
    for (let i = 0; i < letters.length; i++) {
      for (let k = 0; k < letters.length; k++) {
        if (letters[i][k].letter === CIRCLE || letters[i][k].letter === CROSS) {
          count++;
        }
      }
    }
    console.log(count);
    if (count === letters.length * letters.length) {
      return true;
    }
    if (
      this.fullfilledRow(letters, currentTurn) ||
      this.fullfilledColumn(letters, currentTurn) ||
      this.fullfilledDiagonal(letters, currentTurn)
    ) {
      this.setState({
        winner: currentTurn,
      });
      return true;
    }
    return false;
  };

  wrapUp = () => {
    const { isEnd } = this.state;
    this.setState({
      isEnd: !isEnd,
    });
  };

  fullfilledRow = (array, mark) => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      let count = 0;
      for (let k = 0; k < len; k++) {
        if (array[i][k].letter === mark) {
          count++;
        }
      }
      if (count === len) {
        return true;
      } else {
        count = 0;
      }
    }
    return false;
  };

  fullfilledColumn = (array, mark) => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      let count = 0;
      for (let k = 0; k < len; k++) {
        if (array[k][i].letter === mark) {
          count++;
        }
      }
      if (count === len) {
        return true;
      } else {
        count = 0;
      }
    }
    return false;
  };

  fullfilledDiagonal = (array, mark) => {
    const len = array.length; //3
    let count = 0;
    let count2 = 0;
    let length2 = len - 1;
    for (let i = 0; i < len; i++) {
      if (array[i][i].letter === mark) {
        count++;
      }
      if (array[i][length2--].letter === mark) {
        count2++;
      }
    }
    if (count === len || count2 === len) {
      return true;
    } else {
      return false;
    }
  };

  fillCell = (index, letter) => {
    const { letters, currentTurn, isEnd } = this.state;
    // ここで文字が入ってるかいないかで入力拒否
    if (isEnd === true) {
      return;
    } else if (letter === null) {
      let newLetters = letters.map((row) => {
        row.map((data) => {
          if (data.index === index) {
            data.letter = currentTurn;
          }
          return data;
        });
        return row;
      });
      this.setState({
        letters: newLetters,
        isEnd: this.checkEnd(),
        currentTurn: this.toggleTurn(),
      });
    }
  };

  render() {
    // ここにconsole.log入れてレンダリング順番確認可能
    const { letters, currentTurn, isEnd, winner } = this.state;
    return (
      <Div>
        <Header currentTurn={currentTurn} />
        <Table>
          <Row filledData={letters} fillCell={this.fillCell} />
        </Table>
        <Footer
          initLetters={this.initLetters}
          currentTurn={currentTurn}
          isEnd={isEnd}
          winner={winner}
        />
      </Div>
    );
  }
}

const Div = styled.div`
  padding: 8px;
  text-align: center;
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex ? "space-around" : "none")};
`;

const Table = styled.table`
  margin: 16px auto;
  background-color: #000;
  text-align: center;
  padding: 0px
  margin: 0px
  `;

export default App;
