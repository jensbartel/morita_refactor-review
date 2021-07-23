import { useState } from 'react'
import html from 'react-html-parser'
import Fade from 'react-reveal'

import ChapterQuickLinkJP from '../layout/textOnlyJP/ChapterQuickLinkJP'
import DefaultTextBlockJP from '../layout/textOnlyJP/DefaultTextBlockJP'
import LargeImage from '../../English/layout/image/LargeImage'
import SectionHeaderJP from '../layout/textOnlyJP/SectionHeaderJP'
import TextLeftImageRightJP from '../layout/textAndImageJP/TextLeftImageRightJP'
import TwoImagesVariation from '../../English/layout/image/TwoImagesVariation'

import { essay11, essay13, essay14, essay17, essay18, essay19 } from '../../../data/ImageConstantsEssay'
import { essayQuickLinkJP, morita10JP, morita11JP, morita12aJP, morita12JP, morita13JP, sectionLabelJP } from '../../../data/TextConstantsJP'

const Chapter03 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "折りたたむ" : "続きを読む";

    return (
        <>
            <Fade bottom>
                <>
                    <div id='quicklink3' className='anchordiv'></div>
                    <SectionHeaderJP text={sectionLabelJP[3]} />
                    <ChapterQuickLinkJP 
                        item1={essayQuickLinkJP[1].text} 
                        item2={essayQuickLinkJP[2].text} 
                        item3={essayQuickLinkJP[4].text} 
                        item1Link={essayQuickLinkJP[1].quickLink} 
                        item2Link={essayQuickLinkJP[2].quickLink} 
                        item3Link={essayQuickLinkJP[4].quickLink} />
                    <DefaultTextBlockJP text={html(morita10JP)} fade='none'/>
                </>
            </Fade>

            <LargeImage item={essay11} lang='jp' />
            <DefaultTextBlockJP text={html(morita11JP)} />

            { visible ?
                <>
                    <LargeImage item={essay13} lang='jp'/>
                    <DefaultTextBlockJP text={html(morita12JP)} lessMaBo='true'/>
                    <Fade bottom>
                        <TextLeftImageRightJP item={essay14} text={morita12aJP} lang='jp'/>
                    </Fade>
                    <DefaultTextBlockJP text={html(morita13JP)} />
                </> : null
            }

            <button
                className='read-more-or-lessJP'
                onClick={() => {
                    setVisible(!visible);
                }}>
                {btnText}
            </button>

            <LargeImage item={essay17} lang='jp' />
            <Fade bottom>
                <TwoImagesVariation item1={essay18} item2={essay19} lang='jp' />
            </Fade>
        </>
    )
};

export default Chapter03;
