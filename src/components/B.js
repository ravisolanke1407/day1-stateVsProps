import React from 'react'
import D from './D'

function B(props) {
    return (
        <>
            <h2>component B, value is : {props.name}</h2>
            <D nameOfD={props.name}/>
       </>
    )
}

export default B
