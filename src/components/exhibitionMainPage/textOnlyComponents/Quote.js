import React from "react";

import '../mainPageStyles.css'
import '../mainPageStylesTablet.css'
import '../mainPageStylesPhone.css'

export default function Quote(props) {

    let textValue = props.text;
    return (
        <div className='quoteStyle'>
            {textValue}
            <br /> 
            <br />
        </div>
    );
}