import React from "react"
import ReactHtmlParser from 'react-html-parser'

import { essayQuickLinkJP } from "../../../data/TextConstantsJP";
import { morita01JP, sectionLabelJP } from "../../../data/TextConstantsJP";
import SectionHeaderJP
 from '../../exhibitionMainPageJP/textOnlyComponentsJP/SectionHeaderJP';
import ChapterQuickLinkJP from "../textOnlyComponentsJP/ChapterQuickLinkJP";
import DefaultTextBlockJP from "../textOnlyComponentsJP/DefaultTextBlockJP";


export default function EssayBlock2() {
    return (
        <>
            <div id="quicklink1" style={anchordivVertAdjust}></div>
            <SectionHeaderJP text={sectionLabelJP[1]} />
            <ChapterQuickLinkJP
                item1={essayQuickLinkJP[2].text}
                item2={essayQuickLinkJP[3].text}
                item3={essayQuickLinkJP[4].text}
                item1Link={essayQuickLinkJP[2].quickLink}
                item2Link={essayQuickLinkJP[3].quickLink}
                item3Link={essayQuickLinkJP[4].quickLink}
            />
            <DefaultTextBlockJP text={ReactHtmlParser(morita01JP)} />
        </>
    );
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}