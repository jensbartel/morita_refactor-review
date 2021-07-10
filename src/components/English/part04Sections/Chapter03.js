import { useState } from 'react'
import html from 'react-html-parser'
import Fade from 'react-reveal'

import ChapterQuickLink from '../layout/textOnly/ChapterQuickLink'
import DefaultTextBlock from '../layout/textOnly/DefaultTextBlock';
import LargeImage from '../layout/image/LargeImage';
import SectionHeader from '../layout/textOnly/SectionHeader'
import TwoImagesVariation from '../layout/image/TwoImagesVariation';
import TextLeftImageRight from '../layout/textAndImage/TextLeftImageRight';

import { essay11, essay13, essay14, essay17, essay18, essay19 } from '../../../data/ImageConstantsEssay';
import { essayQuickLink, sectionLabel, morita10, morita11, morita12, morita12a, morita13 } from '../../../data/TextConstants';

const Chapter03 = () => {
    const [ visible, setVisible ] = useState(false);
    const btnText = visible ? "Read less..." : "Read More...";

    return (
        <>
            <Fade bottom>
                <>
                    <div id='quicklink3' className='anchordiv'></div>
                    <SectionHeader text={sectionLabel[3]} />
                    <ChapterQuickLink 
                        item1={essayQuickLink[1].text}
                        item2={essayQuickLink[2].text}
                        item3={essayQuickLink[4].text}
                        item1Link={essayQuickLink[1].quickLink}
                        item2Link={essayQuickLink[2].quickLink}
                        item3Link={essayQuickLink[4].quickLink}
                    />
                    <DefaultTextBlock text={html(morita10)} fade='none'/>   
                </>
            </Fade>

                                <LargeImage item={essay11} />
                                <DefaultTextBlock text={html(morita11)} />

           { visible ? 
                <>
                                <LargeImage item={essay13} fade='none'/>
                                <DefaultTextBlock text={html(morita12)} />
                <Fade bottom>   <TextLeftImageRight item={essay14} text={morita12a} />          </Fade>
                                <DefaultTextBlock text={html(morita13)} />
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
            <Fade bottom>       <TwoImagesVariation item1={essay18} item2={essay19} />          </Fade>
        </>
    )
};

export default Chapter03;
