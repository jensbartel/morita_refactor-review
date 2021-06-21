import React from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from 'react-html-parser'

import '../mainPageStyles.css'
import '../mainPageStylesTablet.css'
import '../mainPageStylesPhone.css'

export default function FullWidthImage(props) {
    const item = props.item;

    var langStyle, captionText, emphasisText;
    if (props.lang) {
        langStyle = "two-images-caption-jp";
        captionText = item.textJP;
        emphasisText = item.emphasisJP;
    } else {
        langStyle = "two-images-caption";
        captionText = item.text;
        emphasisText = item.emphasis;
    }

    return (
        <Fade>
            <div className='fullwidthContainerstyle'>
                <img src={item.img} className='fullwidthImageStyle' alt="" />
                <div className={langStyle}>
                    <span>
                        <strong>{emphasisText}</strong>{ReactHtmlParser(captionText)}
                    </span>
                </div>
            </div>
        </Fade>
    );
}


