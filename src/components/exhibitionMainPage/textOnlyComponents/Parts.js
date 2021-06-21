import React from 'react'
import ReactHtmlParser from 'react-html-parser'


export default function Parts(props) {
    return (
        <p className="parts-header">{ReactHtmlParser(props.text)}</p>
    )    
}
