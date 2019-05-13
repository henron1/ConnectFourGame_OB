import React from 'react'
import "./Cell.css"

export default function Cell(props) {
    // if (props.cellValue === true) {
    //     const chip = <img src={props.cellValue} alt="player" />
    // } else {
    //     null
    // }
    // refactor to ternary...no error
    const chip = props.value ? <img src={props.value} alt="player" /> : null

    return(
        <div className="cell">
            <div className="chip">{chip}</div>
        </div>
    )
}