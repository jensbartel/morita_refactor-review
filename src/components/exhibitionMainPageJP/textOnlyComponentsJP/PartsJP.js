import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import '../mainPageStylesJP.css'
import '../mainPageStylesTabletJP.css'
import '../mainPageStylesPhoneJP.css'

export default function Parts(props) {
    return (
        <p className="parts-headerJP">{ReactHtmlParser(props.text)}</p>
    )    
}


