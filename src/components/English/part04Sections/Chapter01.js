import html from 'react-html-parser'

import ChapterQuickLink from "../layout/textOnly/ChapterQuickLink"
import DefaultTextBlock from "../layout/textOnly/DefaultTextBlock"
import FullWidthImage from "../layout/image/FullWidthImage"
import IntroToEssay from "../layout/textOnly/IntroToEssay"
import Parts from "../layout/textOnly/Parts"
import SectionHeader from '../layout/textOnly/SectionHeader'

import { wanobi01 } from "../../../data/ImageConstantsEssay"
import { 
    essayQuickLink, 
    morita01, 
    partsLabel, 
    sectionLabel } from "../../../data/TextConstants"

const Chapter01 = () => {
    return (
        <>
            {/* <EssayBlock1 /> */}
            <Parts text={partsLabel[4]} />
            <IntroToEssay />

            {/* <EssayBlock2 /> */}
            <div id='quicklink1' className='anchordiv'></div>
            <SectionHeader text={sectionLabel[1]} />
            <ChapterQuickLink
                item1={essayQuickLink[2].text}
                item2={essayQuickLink[3].text}
                item3={essayQuickLink[4].text}
                item1Link={essayQuickLink[2].quickLink}
                item2Link={essayQuickLink[3].quickLink}
                item3Link={essayQuickLink[4].quickLink}
            />
            <DefaultTextBlock text={html(morita01)} />
            
            <FullWidthImage item={wanobi01} />
        </>
    )
};

export default Chapter01;
