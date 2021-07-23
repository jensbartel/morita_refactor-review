import { useState } from 'react'
import html from 'react-html-parser'
import Fade from 'react-reveal'

import ChapterQuickLinkJP from '../layout/textOnlyJP/ChapterQuickLinkJP'
import DefaultTextBlockJP from "../layout/textOnlyJP/DefaultTextBlockJP"
import LargeImage from "../../English/layout/image/LargeImage"
import Pullquote2JP from '../layout/textOnlyJP/Pullquote2JP'
import SectionHeaderJP from '../layout/textOnlyJP/SectionHeaderJP'
import TextLeftImageRightJP from '../layout/textAndImageJP/TextLeftImageRightJP'
import TextRightImageLeftJP from '../layout/textAndImageJP/TextRightImageLeftJP'
import TwoImages from "../../English/layout/image/TwoImages"

import { 
    essayQuickLinkJP, 
    morita02aJP,
    morita02JP, 
    morita03JP, 
    morita04JP, 
    morita05JP, 
    morita06JP, 
    morita07JP, 
    morita08JP, 
    morita09aJP, 
    morita09JP,
    sectionLabelJP } from "../../../data/TextConstantsJP"
import { 
    essay1, 
    essay10, 
    essay2, 
    essay3, 
    essay4, 
    essay5, 
    essay6 } from "../../../data/ImageConstantsEssay"

const Chapter02 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "折りたたむ" : "続きを読む";

    return (
        <>
            <Fade bottom>
                <>
                    <div id='quicklink2' className='anchordiv'></div>
                    <SectionHeaderJP text={html(sectionLabelJP[2])} />
                    <ChapterQuickLinkJP 
                        item1={essayQuickLinkJP[1].text} 
                        item2={essayQuickLinkJP[3].text} 
                        item3={essayQuickLinkJP[4].text} 
                        item1Link={essayQuickLinkJP[1].quickLink} 
                        item2Link={essayQuickLinkJP[3].quickLink} 
                        item3Link={essayQuickLinkJP[4].quickLink}/>
                    <DefaultTextBlockJP text={html (morita02JP)} fade='none'/>
                </>
            </Fade>

            <LargeImage item={essay1} lang='jp'/>
            <DefaultTextBlockJP text={html(morita02aJP)} />
            
            <Fade bottom>
                <TwoImages item1={essay2} item2={essay3} lang='jp'/>  
            </Fade>

            { visible ?
                <>
                <DefaultTextBlockJP text={html(morita03JP)} />
                {/* <DefaultTextBlockJP text={html(morita04JP)} />  */}
                {/* Note: morita04 is a Quote in ENG! */}
                <Fade bottom>
                    <TextLeftImageRightJP text={morita05JP} item={essay4} lang='jp'/>
                </Fade>
                <DefaultTextBlockJP text={html(morita06JP)} />
                <Fade bottom>
                    <TwoImages item1={essay5} item2={essay6} lang='jp'/>
                </Fade>

                <DefaultTextBlockJP text={html(morita07JP)} />
                <Pullquote2JP />
                <DefaultTextBlockJP text={html(morita09JP)} lessMaBo='true'/>

                <Fade bottom>
                    <TextRightImageLeftJP item={essay10} text={morita09aJP} />
                </Fade>
                </> : null
            }

            <button
                className='read-more-or-lessJP'
                onClick={() => {
                    setVisible(!visible);
                }}>
                {btnText}
            </button>            
        </>
    )
};

export default Chapter02;
