import React from 'react'
import testImage from '../../../assets/mainvisual.jpg'

export default function MainVisual() {
    return (
        <div style={containerstyle}>
            <img src={testImage} style={imageStyle} alt='' />
        </div>
    )
}


const containerstyle = {
    backgroundColor: 'white',
    width: '94vw',
    margin: '20px auto 60px',
    textAlign: 'center',
}

const imageStyle = {
    width: '100%',
    margin: '0 auto'
}