import React from 'react'

const Avatar = props => (
    <div>
        <p>{props.firstName}</p>
        <p> {props.lastName} </p>
        <img src= {props.image} />

    </div>
)
export default Avatar;