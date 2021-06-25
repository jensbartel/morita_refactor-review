import html from 'react-html-parser'
import { useState } from 'react'

import EssayBlock3 from '../layout/essay/EssayBlock3'
import LargeImage from '../layout/image/LargeImage'
import DefaultTextBlock from '../layout/textOnly/DefaultTextBlock'
import TwoImages from '../layout/image/TwoImages'

import { morita02a, morita03, morita04, morita05, morita06, morita07, morita08, morita09, morita09a } from '../../../data/TextConstants'
import { essay1, essay10, essay2, essay3, essay4, essay5, essay6 } from '../../../data/ImageConstantsEssay'
import DefaultTextBlock2 from '../layout/textOnly/DefaultTextBlock2'
import Quote from '../layout/textOnly/Quote'
import TextLeftImageRight from '../layout/textAndImage/TextLeftImageRight'
import Pullquote2 from '../layout/textOnly/Pullquote2'

const Chapter02 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "Read less..." : "Read More...";

    return (
        <>
            <EssayBlock3 />
            <LargeImage item={essay1} />
            <DefaultTextBlock text={html(morita02a)} />
            <TwoImages item1={essay2} item2={essay3} />
            
            { visible ? 
                <>
                <DefaultTextBlock2 text={html(morita03)} />
                <Quote text={html(morita04)} />
                <TextLeftImageRight text={morita05} item={essay4} />
                <DefaultTextBlock2 text={html(morita06)} />
                <TwoImages item1={essay5} item2={essay6} />
                <br/><br/><DefaultTextBlock2 text={html(morita07)} />
                <br/><br/><DefaultTextBlock2 text={html(morita08)} />
                <Pullquote2 />
                <br/><br/><DefaultTextBlock2 text={html(morita09)} />
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
}

export default Chapter02
