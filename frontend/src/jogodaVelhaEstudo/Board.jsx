
import React from 'react'
import Square from './Square'
// import Line from './Line';

export default class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square key={i}
          value={this.props.squares[i]}
          className={this.strongWinner(i)[0]===i ? "square strong" : "square"}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
    
    strongWinner(i){
      const test = this.props.strong
      const array = this.props.strong!==null ? this.props.strong.filter(j => j==i) : false
      return array
    }
    
    renderMatriz(){
        let line= []
        let column =[]
        let cont=0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                line.push(this.renderSquare(cont)) 
                cont++             
            }         
            column.push(<div key={i} className="board-row">{line}</div>)
            line=[]
        }
        return column
    }
    render() {
        return (
          <div>
              {this.renderMatriz()}
              {/* {this.strongWinner(0)} */}

          </div>
        );
      }
    }