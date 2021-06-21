import React from "react"
import ReactHtmlParser from 'react-html-parser'

import { essayQuickLink, morita01, sectionLabel } from "../../../data/TextConstants";
import ChapterQuickLink from "../textOnlyComponents/ChapterQuickLink";
import DefaultTextBlock from "../textOnlyComponents/DefaultTextBlock";
import SectionHeader from '../textOnlyComponents/SectionHeader';


export default function EssayBlock2() {
    return (
        <>
            <div id="quicklink1" style={anchordivVertAdjust}></div>
            <SectionHeader text={sectionLabel[1]} />
            <ChapterQuickLink
                item1={essayQuickLink[2].text}
                item2={essayQuickLink[3].text}
                item3={essayQuickLink[4].text}
                item1Link={essayQuickLink[2].quickLink}
                item2Link={essayQuickLink[3].quickLink}
                item3Link={essayQuickLink[4].quickLink}
            />
            <DefaultTextBlock text={ReactHtmlParser(morita01)} />
        </>
    );
}

const anchordivVertAdjust = {
    paddingTop: '100px',
    marginTop: '-100px'
}