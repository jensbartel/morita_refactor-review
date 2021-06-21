import React from "react";
import Fade from "react-reveal/Fade";

export default function Endnotes(props) {
    const textValue = props.text;

    return (
        <div className='endnotesJP'>
            <Fade bottom>
                {textValue}
                <br /> 
                <br />
            </Fade>
        </div>
    );
}