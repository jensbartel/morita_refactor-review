import React from "react"
import ReactHtmlParser from 'react-html-parser'

import { essayQuickLinkJP, morita14JP, sectionLabelJP } from "../../../data/TextConstantsJP";
import ChapterQuickLinkJP from "../textOnlyComponentsJP/ChapterQuickLinkJP";
import DefaultTextBlockJP from "../textOnlyComponentsJP/DefaultTextBlockJP";
import SectionHeaderJP from "../textOnlyComponentsJP/SectionHeaderJP";


export default function EssayBlock5() {
    return (
        <>
            <div id='quicklink4' style={anchordivVertAdjust}></div>
            <SectionHeaderJP text={sectionLabelJP[4]} />
            <ChapterQuickLinkJP 
                item1={essayQuickLinkJP[1].text} 
                item2={essayQuickLinkJP[2].text} 
                item3={essayQuickLinkJP[3].text} 
                item1Link={essayQuickLinkJP[1].quickLink} 
                item2Link={essayQuickLinkJP[2].quickLink} 
                item3Link={essayQuickLinkJP[3].quickLink} />
            <DefaultTextBlockJP text={ReactHtmlParser (morita14JP)} />
        </>
    );
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}