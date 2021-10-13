import React from 'react' 
import E from './E'

function C(props) {
    return (
        <>
        <h2>component C :{props.name}</h2>
        <E name={props.name}/>
        </>
    )
}

export default C
