import { useState } from 'react'
import html from 'react-html-parser'
import { essay20, essay22, essay27, essay28 } from '../../../data/ImageConstantsEssay';
import { acknowledgments, morita14a, morita14b, morita14c, morita15, moritaEndnotes } from '../../../data/TextConstants';
import EssayBlock5 from '../layout/essay/EssayBlock5';
import LargeImage from '../layout/image/LargeImage';
import TextRightImageLeft from '../layout/textAndImage/TextRightImageLeft';
import DefaultTextBlock from '../layout/textOnly/DefaultTextBlock';
import DefaultTextBlock2 from '../layout/textOnly/DefaultTextBlock2';
import Endnotes from '../layout/textOnly/Endnotes';

const Chapter04 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "Read less..." : "Read More...";

    return (
        <>
            <EssayBlock5 />
            <TextRightImageLeft text={morita14a} item={essay20} />

            { visible ? 
                <>
                    <DefaultTextBlock2 text={html(morita14b)} />
                    <LargeImage item={essay22} />
                    <DefaultTextBlock2 text={html(morita14c)} />
                    <DefaultTextBlock2 text={html(morita15)} />
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
}

export default Chapter04
