import React from 'react'

export default function Cell(props) {
    if (props.cellValue === true) {
        const chip = <img src={props.cellValue} alt="player" />
    } else {
        null
    }

    return (
        <div className="cell">
            <div className="chip">
                {chip}
            </div>
        </div>
    )
}