import React from 'react'
import mainimg from '../assets/mainvisual.jpg'

export default function ComingSoon() {
    return (
        <>
        <div style={comingsoon}>
            Coming soon
        </div>
        <div style={imgContainer}>
            <img src={mainimg} style={imageStyle} alt='' />
        </div>
        </>
    )
}

const comingsoon = {
    color: 'red',
    textAlign: 'center',
    margin: '3rem 0'
}

const imgContainer = {
    width: '100vw',
    textAlign: 'center',
    margin: '0 auto'
}

const imageStyle = {
    width: '60%',
    margin: '0 auto'
}

