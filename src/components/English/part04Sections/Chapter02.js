import html from 'react-html-parser'
import { useState } from 'react'

import ChapterQuickLink from '../layout/textOnly/ChapterQuickLink'
import DefaultTextBlock from '../layout/textOnly/DefaultTextBlock'
import LargeImage from '../layout/image/LargeImage'
import Quote from '../layout/textOnly/Quote'
import Pullquote2 from '../layout/textOnly/Pullquote2'
import SectionHeader from '../layout/textOnly/SectionHeader'
import TextLeftImageRight from '../layout/textAndImage/TextLeftImageRight'
import TwoImages from '../layout/image/TwoImages'

import { 
    essayQuickLink, 
    morita02, 
    morita02a, 
    morita03, 
    morita04, 
    morita05, 
    morita06, 
    morita07, 
    morita08, 
    morita09, 
    morita09a, 
    sectionLabel } from '../../../data/TextConstants'
import { 
    essay1, 
    essay10, 
    essay2, 
    essay3, 
    essay4, 
    essay5, 
    essay6 } from '../../../data/ImageConstantsEssay'

const Chapter02 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "Read less..." : "Read More...";

    return (
        <>
            {/* <EssayBlock3 /> */}
            <div id='quicklink2' className='anchordiv'></div>
            <SectionHeader text={sectionLabel[2]} />
            <ChapterQuickLink
                item1={essayQuickLink[1].text}
                item2={essayQuickLink[3].text}
                item3={essayQuickLink[4].text}
                item1Link={essayQuickLink[1].quickLink}
                item2Link={essayQuickLink[3].quickLink}
                item3Link={essayQuickLink[4].quickLink}
            />
            <DefaultTextBlock text={html(morita02)} />


            <LargeImage item={essay1} />
            <DefaultTextBlock text={html(morita02a)} />
            <TwoImages item1={essay2} item2={essay3} />
            
            { visible ? 
                <>
                <DefaultTextBlock text={html(morita03)} />
                <Quote text={html(morita04)} />
                <TextLeftImageRight text={morita05} item={essay4} />
                <DefaultTextBlock text={html(morita06)} />
                <TwoImages item1={essay5} item2={essay6} />
                <br/><br/><DefaultTextBlock text={html(morita07)} />
                <br/><br/><DefaultTextBlock text={html(morita08)} />
                <Pullquote2 />
                <br/><br/><DefaultTextBlock text={html(morita09)} />
                <TextLeftImageRight text={morita09a} item={essay10} />
                </> : null

            }

            <button 
                className='read-more-less'
                onClick={() => {
                    setVisible(!visible)
                }}
            >
                {btnText}
            </button>

        </>
    )
};

export default Chapter02;
