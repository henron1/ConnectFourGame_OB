import React, {Component} from 'react'
import player1 from "../images/react.png"
import player2 from "../images/redux.png"
import CellSet from "./CellSet"

// const column = new Array(7).fill(0)
// const row = new Array(6).fill(0)

const p1 = player1
const p2 = player2

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board : new Array(7).fill(0).map(() => new Array(6).fill(null)),
            gameOver: false,
            recentPlayer:[p1],
        }
    }

    // pass in column number into the state object
    cellRender(colNum){
        return(
            <CellSet value={this.state.board[colNum]} />
        )
    }

    placeChip(){
        /*
            check and see if gameOver is false 
            if it is
                fill bottom most index of column clicked on (bottom row value)
                if last player = first
        */
    }

    checkWin(player) {
        
        /*
        Win check logic psudeo code 
            Vertical
            Check every column
            if 
        */
    }

    
    // render each column start cell that propogates row down below it!
    render() {
        return (
            <>
                <div className="gameBoard">
                    {this.cellRender(0)}
                    {this.cellRender(1)}
                    {this.cellRender(2)}
                    {this.cellRender(3)}
                    {this.cellRender(4)}
                    {this.cellRender(5)}
                    {this.cellRender(6)}
                </div>
            </>
        )
    }
}