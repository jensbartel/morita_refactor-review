import React from "react";
import '../mainPageStyles.css'
import '../mainPageStylesTablet.css'
import '../mainPageStylesPhone.css'

export default function DefaultTextBlock(props) {
        
    let textValue = props.text;
    return (
        <div className="defaultstyle">
            {textValue}<br /><br />
        </div>
    );
}