import React from 'react'
import F from './F'

function E(props) {
    console.log(props)

    
    return (
        <div>
            <h3>component e:{props.name} </h3>
            <F name={props.name}/>
        </div>
    )
}

export default E
