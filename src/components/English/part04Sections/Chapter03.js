import { useState } from 'react'
import html from 'react-html-parser'
import { essay11, essay13, essay14, essay17, essay18, essay19 } from '../../../data/ImageConstantsEssay';
import { morita11, morita12, morita12a, morita13 } from '../../../data/TextConstants';
import EssayBlock4 from '../layout/essay/EssayBlock4';
import LargeImage from '../layout/image/LargeImage';
import TwoImagesVariation from '../layout/image/TwoImagesVariation';
import TextLeftImageRight from '../layout/textAndImage/TextLeftImageRight';
import DefaultTextBlock from '../layout/textOnly/DefaultTextBlock';
import DefaultTextBlock2 from '../layout/textOnly/DefaultTextBlock2';

const Chapter03 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "Read less..." : "Read More...";

    return (
        <>
           <EssayBlock4 />
           <LargeImage item={essay11} />
           <DefaultTextBlock text={html(morita11)} />

           { visible ? 
                <>
                <LargeImage item={essay13} />
                <DefaultTextBlock2 text={html(morita12)} />
                <TextLeftImageRight item={essay14} text={morita12a} />
                <DefaultTextBlock2 text={html(morita13)} />
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

            <LargeImage item={essay17} />
            <TwoImagesVariation item1={essay18} item2={essay19} />
        </>
    )
}

export default Chapter03
