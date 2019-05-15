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
            recentPlayer:[p1, p2]
        }
    }

    // pass in column number into the state object
    cellRender(column){
        return(
            <CellSet value={this.state.board[column]} onClick={() => this.placeChip()} />
        )
    }

    placeChip(column){

        /*
            ??Use ternary in CSS inline style to render both chips in each array, and reveal them upon click??
        */
        /*
            check and see if gameOver is false 
            if it is
                fill bottom most index of column clicked on (bottom row value)
                if last player = recentplayer[0]
                    return the value of the next player
            else
                return

            new varialbe that holds updated column information
            call check method method every time you place a chip!

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

    checkWin(prevMove) {
        
        /*
        Win check logic psudeo code 
            Vertical
            Check every column
            if i[p1] || i[p2] exists 4 times
                set state to gameover === true
                print message player _ wins!

            Horizontal
            check rows
             if i[p1] || i[p2] exists 4 times
                set state to gameover === true
                print message player _ wins! 

            Diagonal left to right bottom up
            check column 
            set i max to 4 
            record in count to track streaks
            if player exists at [i+1] in next column
                record and raise count
            else 
                count = 0
        */

        const player = this.state.recentPlayer[0] 
        streak = 0
        // Horizontal
        for (let i = 0; i <= 4; i++) {
            if (this.state.board[i][i+1] === player) {
                streak++
                if (streak = 4) {
                    return player
                }
            } else {

            }
        }
        
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