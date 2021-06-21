import React from "react"
import ReactHtmlParser from 'react-html-parser'

import { essayQuickLinkJP, morita02JP, sectionLabelJP } from "../../../data/TextConstantsJP";
import ChapterQuickLinkJP from "../textOnlyComponentsJP/ChapterQuickLinkJP";
import DefaultTextBlockJP from "../textOnlyComponentsJP/DefaultTextBlockJP";
import SectionHeaderJP from "../textOnlyComponentsJP/SectionHeaderJP";


export default function EssayBlock3() {
    return (
        <>
            <div id='quicklink2' style={anchordivVertAdjust}></div>
            <SectionHeaderJP text={ReactHtmlParser(sectionLabelJP[2])} />
            <ChapterQuickLinkJP 
                item1={essayQuickLinkJP[1].text} 
                item2={essayQuickLinkJP[3].text} 
                item3={essayQuickLinkJP[4].text} 
                item1Link={essayQuickLinkJP[1].quickLink} 
                item2Link={essayQuickLinkJP[3].quickLink} 
                item3Link={essayQuickLinkJP[4].quickLink}/>
            <DefaultTextBlockJP text={ReactHtmlParser (morita02JP)} />
        </>
    );
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}