import './JogoDaVelha.css'

import React from 'react'
// import ReactDOM from 'react-dom'

import Board from './Board'
  
  export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null),
            locationClick: Array(2).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        orderIsCres: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      
      const currentClick = locationClick(i)
      
      this.setState({
        history: history.concat([
          {
            squares: squares,
            locationClick:currentClick
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }

    noOneWinner(squares)
    {
      const isADraw = squares.filter(j => j!==null).length === 9
      return isADraw
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }

    ordenar(){
        const orderIsCres = !this.state.orderIsCres
        this.setState({
            orderIsCres: orderIsCres
        })        
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const strong = winner ? winner[1] : null
        //console.log(strong)
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move + " in line " + step.locationClick[0]+", column "+step.locationClick[1] :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)} 
                className={move === this.state.stepNumber ? 'strong' : ''}>
                {desc}
            </button>
          </li>
        );
      });      
     
      let movesOrder
      if(!this.state.orderIsCres){
        const order = moves.map(function(obj){
            return {index: obj.key, move: obj}
        }).sort((a,b)=>b.index-a.index)      
        movesOrder = order.map((a)=> moves[a.index])
     }     
  
      let status;
      if (winner) {
        status = "Winner: " + winner[0];
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      if(this.noOneWinner(current.squares)){
        alert("Is a draw!!!")
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              strong={strong}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">           
            <div>{status}</div>
            <button onClick={()=>this.ordenar()}>Ordernar</button>
            <ol>{this.state.orderIsCres ? moves : movesOrder}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================  
  
  function locationClick(num){
    let cont=0 
    for(let i = 0; i<3; i++){
      for(let j = 0; j<3; j++){
        if(num==cont){
          return [i+1, j+1]
        }
        cont++      
      }
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a], [a, b, c]];
      }
    }
    return null;
  }
  