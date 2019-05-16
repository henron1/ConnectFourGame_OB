import React from 'react'
import Cell from './Cell'
import './CellSet.css'
// propogating rows to each cellSet/Column 

export default function CellSet(props) {
    return(
        <div className='cellSet'>
            <Cell value={props.value[5]} />
            <Cell value={props.value[4]} />
            <Cell value={props.value[3]} />
            <Cell value={props.value[2]} />
            <Cell value={props.value[1]} />
            <Cell value={props.value[0]} />
        </div>
    )
}