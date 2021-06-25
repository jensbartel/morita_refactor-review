import { useState } from 'react'
import html from 'react-html-parser'

import LargeImage from '../layout/image/LargeImage';
import TextRightImageLeft from '../layout/textAndImage/TextRightImageLeft';
import DefaultTextBlock from '../layout/textOnly/DefaultTextBlock';
import Endnotes from '../layout/textOnly/Endnotes';

import { essay20, essay22, essay27, essay28 } from '../../../data/ImageConstantsEssay';
import { acknowledgments, essayQuickLink, morita14, morita14a, morita14b, morita14c, morita15, moritaEndnotes, sectionLabel } from '../../../data/TextConstants';
import SectionHeader from '../layout/textOnly/SectionHeader';
import ChapterQuickLink from '../layout/textOnly/ChapterQuickLink';

const Chapter04 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "Read less..." : "Read More...";

    return (
        <>
            {/* <EssayBlock5 /> */}
            <div id='quicklink4' className='anchordiv'></div>
            <SectionHeader text={sectionLabel[4]} />
            <ChapterQuickLink
                item1={essayQuickLink[1].text}
                item2={essayQuickLink[2].text}
                item3={essayQuickLink[3].text}
                item1Link={essayQuickLink[1].quickLink}
                item2Link={essayQuickLink[2].quickLink}
                item3Link={essayQuickLink[3].quickLink}
            />
            <DefaultTextBlock text={html(morita14)} />

            <TextRightImageLeft text={morita14a} item={essay20} />

            { visible ? 
                <>
                    <DefaultTextBlock text={html(morita14b)} />
                    <LargeImage item={essay22} />
                    <DefaultTextBlock text={html(morita14c)} />
                    <DefaultTextBlock text={html(morita15)} />
                    <Endnotes text={html(moritaEndnotes)} />
                </> : null
            }
        
            <button 
                className="read-more-less"
                onClick={() => {
                    setVisible(!visible)
                }}
            >
                {btnText}
            </button>

            <LargeImage item={essay27} />
            <LargeImage item={essay28} />
            <DefaultTextBlock text={html(acknowledgments)} />
            <br /><br /><br /><br /> 
        </>
    )
};

export default Chapter04;
