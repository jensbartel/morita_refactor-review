import React from "react";
import '../mainPageStylesJP.css'
import '../mainPageStylesTabletJP.css'
import '../mainPageStylesPhoneJP.css'

export default function DefaultTextBlockJP(props) {
      
    let textValue = props.text;
    return (
        <div className="defaultstyleJP">
            {textValue}<br /><br />
        </div>
    );

}
