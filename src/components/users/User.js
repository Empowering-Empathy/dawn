import React from 'react'

export default function User(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.job}</p>
        </div>
    )
}
