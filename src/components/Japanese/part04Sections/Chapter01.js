import html from 'react-html-parser'

import ChapterQuickLinkJP from "../textOnlyJP/ChapterQuickLinkJP"
import DefaultTextBlockJP from "../textOnlyJP/DefaultTextBlockJP"
import FullWidthImage from "../../English/layout/image/FullWidthImage"
import IntroToEssayJP from "../textOnlyJP/IntroToEssayJP"
import PartsJP from '../textOnlyJP/PartsJP'
import SectionHeaderJP from "../textOnlyJP/SectionHeaderJP"

import { wanobi01 } from "../../../data/ImageConstantsEssay"
import { essayQuickLinkJP, morita01JP, partsLabelJP, sectionLabelJP } from "../../../data/TextConstantsJP"

const Chapter01 = () => {
    return (
        <>
            <div id='part4' className='anchordiv'></div>
            <PartsJP text={partsLabelJP[4]} />
            <IntroToEssayJP />
            
            <div id="quicklink1" className='anchordiv'></div>
            <SectionHeaderJP text={sectionLabelJP[1]} />
            <ChapterQuickLinkJP
                item1={essayQuickLinkJP[2].text}
                item2={essayQuickLinkJP[3].text}
                item3={essayQuickLinkJP[4].text}
                item1Link={essayQuickLinkJP[2].quickLink}
                item2Link={essayQuickLinkJP[3].quickLink}
                item3Link={essayQuickLinkJP[4].quickLink}
            />
            <DefaultTextBlockJP text={html(morita01JP)} />            
            <FullWidthImage item={wanobi01} lang='jp' />   
        </>
    )
}

export default Chapter01