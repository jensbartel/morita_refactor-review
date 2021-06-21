import React from 'react'
import ReactHTMLParser from 'react-html-parser'
import Fade from 'react-reveal/Fade'
import '../mainPageStylesJP.css'
import '../mainPageStylesTabletJP.css'
import '../mainPageStylesPhoneJP.css'

export default function TextLeftImageRightJP(props) {
    const text = props.text;
    const item = props.item;

    return (
        <Fade bottom>
            <div className="text-left-flexboxJP">
                <div className="text-left-left-columnJP">
                    {ReactHTMLParser (text)}    
                </div>
                <div className="text-left-containerJP">
                    <img src={item.img} className="text-left-imageJP" alt=""/>
                    <p className="text-left-captionJP"><strong>{item.emphasisJP}</strong>{ReactHTMLParser(item.textJP)}</p>
                </div>
            </div>
        </Fade>
    )
}


