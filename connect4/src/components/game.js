import React, {Component} from 'react'
import player1 from "../images/react.png"
import player2 from "../images/redux.png"

// const column = new Array(7).fill(0)
// const row = new Array(6).fill(0)

const p1 = player1
const p2 = player2



export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colRow = new Array(7).fill(0).map(() => new Array(6).fill(0)),
            gameOver: null,
            firstPlayer:[p1],
        }
    }

    cellRender(){
        return(
            <CellSet>
                
            </CellSet>
        )
    }

    render() {
        return (
            <>
                <div>

                </div>
            </>
        )
    }
}