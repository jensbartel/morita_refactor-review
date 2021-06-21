import React from 'react'
import ReactHTMLParser from 'react-html-parser'
import Fade from 'react-reveal/Fade'
import '../mainPageStyles.css'
import '../mainPageStylesTablet.css'
import '../mainPageStylesPhone.css'

export default function TextLeftImageRight(props) {
    const text = props.text;
    const item = props.item;

    return (
        <Fade bottom>
            <div className="text-left-flexbox">
                <div className="text-left-left-column">
                    {ReactHTMLParser (text)}    
                </div>
                <div className="text-left-container">
                    <img src={item.img} className="text-left-image" alt=""/>
                    <p className="TLIR-TRIL-caption"><strong>{item.emphasis}</strong>{ReactHTMLParser(item.text)}</p>
                </div>
            </div>
        </Fade>
    )
}