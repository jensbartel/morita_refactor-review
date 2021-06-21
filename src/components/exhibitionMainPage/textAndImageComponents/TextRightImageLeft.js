import React from 'react'
import Fade from 'react-reveal/Fade'
import ReactHTMLParser from 'react-html-parser'
import '../mainPageStyles.css'
import '../mainPageStylesTablet.css'
import '../mainPageStylesPhone.css'

export default function TextRightImageLeft(props) {
    const text = props.text;
    const item = props.item;

    return (
        <Fade bottom>
            <div className="text-right-flexbox">
                <div className="text-right-container">
                    <img src={item.img} className="text-right-image" alt=""/>
                    <p className="TLIR-TRIL-caption"><strong>{item.emphasis}</strong>{ReactHTMLParser(item.text)}</p>
                </div>
                <div className="text-right-left-column">
                    {ReactHTMLParser (text)}    
                </div>
            </div>
        </Fade>
    )    
}