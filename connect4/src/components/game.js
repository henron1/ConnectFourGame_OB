import React, {Component} from 'react'

const column = new Array(7).fill(0)
const row = new Array(6).fill(0)

// const player1 = {image here}
// const player2 = {image here}



export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver: false,
            firstPlayer:[],
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