import html from 'react-html-parser';
import Fade from 'react-reveal';

import ChapterQuickLinkJP from '../layout/textOnlyJP/ChapterQuickLinkJP';
import DefaultTextBlockJP from '../layout/textOnlyJP/DefaultTextBlockJP';
import FullWidthImage from '../../English/layout/image/FullWidthImage';
import IntroToEssayJP from '../layout/textOnlyJP/IntroToEssayJP';
import PartsJP from '../layout/textOnlyJP/PartsJP';
import SectionHeaderJP from '../layout/textOnlyJP/SectionHeaderJP';

import { wanobi01 } from '../../../data/ImageConstantsEssay';
import {
    essayQuickLinkJP,
    morita01JP,
    partsLabelJP,
    sectionLabelJP,
} from '../../../data/TextConstantsJP';

const Chapter01 = () => {
    return (
        <>
            <div id='part4' className='anchordiv'></div>

            <Fade bottom>
                <>
                    <PartsJP text={partsLabelJP[4]} />
                    <IntroToEssayJP />
                </>
            </Fade>

            <Fade bottom>
                <>
                    <div id='quicklink1' className='anchordiv'></div>
                    <SectionHeaderJP text={sectionLabelJP[1]} />
                    <ChapterQuickLinkJP
                        item1={essayQuickLinkJP[2].text}
                        item2={essayQuickLinkJP[3].text}
                        item3={essayQuickLinkJP[4].text}
                        item1Link={essayQuickLinkJP[2].quickLink}
                        item2Link={essayQuickLinkJP[3].quickLink}
                        item3Link={essayQuickLinkJP[4].quickLink}
                    />
                    <DefaultTextBlockJP text={html(morita01JP)} fade='none' />
                </>
            </Fade>

            <FullWidthImage item={wanobi01} lang='jp' />
        </>
    );
};

export default Chapter01;
