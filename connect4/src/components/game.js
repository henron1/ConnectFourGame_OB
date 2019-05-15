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
            recentPlayer:p1,
        }
    }

    // pass in column number into the state object
    cellRender(column){
        return(
            <CellSet value={this.state.board[column]} onClick={() => this.placeChip()} />
        )
    }

    placeChip(){
        /*
            check and see if gameOver is false 
            if it is
                fill bottom most index of column clicked on (bottom row value)
                if last player = recentplayer[0]
                    return the value of the next player
            else
                return

            new varialbe that holds updated column information

        */

        // const updateColumn = 

        if (this.state.gameOver === false) {
            if (recentPlayer === p1) {
                return p1 // <-- not sure best way to physically push the image into this array
                // setState
            } else {
                return p2
                // setState
            }
        } else {
            return
        }
    }

    checkWin(player) {
        
        /*
        Win check logic psudeo code 
            Vertical
            Check every column
            if i[p1] || i[p2] exists 4 times

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