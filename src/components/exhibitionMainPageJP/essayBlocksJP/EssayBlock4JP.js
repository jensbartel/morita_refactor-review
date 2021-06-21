import React from "react"
import ReactHtmlParser from 'react-html-parser'

import { essayQuickLinkJP } from "../../../data/TextConstantsJP";
import { morita10JP, sectionLabelJP } from "../../../data/TextConstantsJP";
import ChapterQuickLinkJP from "../textOnlyComponentsJP/ChapterQuickLinkJP";
import DefaultTextBlockJP from "../textOnlyComponentsJP/DefaultTextBlockJP";
import SectionHeaderJP from "../textOnlyComponentsJP/SectionHeaderJP";


export default function EssayBlock4() {
    return (
        <>
            <div id='quicklink3' style={anchordivVertAdjust}></div>
            <SectionHeaderJP text={sectionLabelJP[3]} />
            <ChapterQuickLinkJP 
                item1={essayQuickLinkJP[1].text} 
                item2={essayQuickLinkJP[2].text} 
                item3={essayQuickLinkJP[4].text} 
                item1Link={essayQuickLinkJP[1].quickLink} 
                item2Link={essayQuickLinkJP[2].quickLink} 
                item3Link={essayQuickLinkJP[4].quickLink} />
            <DefaultTextBlockJP text={ReactHtmlParser (morita10JP)} />
        </>
    );
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}