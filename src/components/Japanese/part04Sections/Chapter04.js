import { useState } from 'react';
import html from 'react-html-parser';
import Fade from 'react-reveal';

import ChapterQuickLinkJP from '../layout/textOnlyJP/ChapterQuickLinkJP';
import DefaultTextBlockJP from '../layout/textOnlyJP/DefaultTextBlockJP';
import EndnotesJP from '../layout/textOnlyJP/EndnotesJP';
import LargeImage from '../../English/layout/image/LargeImage';
import SectionHeaderJP from '../layout/textOnlyJP/SectionHeaderJP';
import TextRightImageLeftJP from '../layout/textAndImageJP/TextRightImageLeftJP';

import {
    essay20,
    essay22,
    essay27,
    essay28,
} from '../../../data/ImageConstantsEssay';
import {
    acknowledgmentsJP,
    essayQuickLinkJP,
    morita14aJP,
    morita14bJP,
    morita14cJP,
    morita14JP,
    morita15JP,
    moritaEndnotesJP,
    sectionLabelJP,
} from '../../../data/TextConstantsJP';

const Chapter04 = () => {
    const [visible, setVisible] = useState(false);
    const btnText = visible ? '折りたたむ' : '続きを読む';

    return (
        <>
            <Fade bottom>
                <>
                    <div id='quicklink4' className='anchordiv'></div>
                    <SectionHeaderJP text={sectionLabelJP[4]} />
                    <ChapterQuickLinkJP
                        item1={essayQuickLinkJP[1].text}
                        item2={essayQuickLinkJP[2].text}
                        item3={essayQuickLinkJP[3].text}
                        item1Link={essayQuickLinkJP[1].quickLink}
                        item2Link={essayQuickLinkJP[2].quickLink}
                        item3Link={essayQuickLinkJP[3].quickLink}
                    />
                    <DefaultTextBlockJP text={html(morita14JP)} fade='none' lessMaBo='true'/>
                </>
            </Fade>

            <Fade bottom>
                <TextRightImageLeftJP text={morita14aJP} item={essay20} />
            </Fade>

            {visible ? (
                <>
                    <DefaultTextBlockJP text={html(morita14bJP)} />
                    <LargeImage item={essay22} lang='jp' />
                    <DefaultTextBlockJP text={html(morita14cJP)} />
                    <Fade>
                        <EndnotesJP text={html(moritaEndnotesJP)} />
                    </Fade>
                </>
            ) : null}

            <button
                className='read-more-or-lessJP'
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {btnText}
            </button>

            <LargeImage item={essay27} lang='jp' />
            <LargeImage item={essay28} lang='jp' />
            <DefaultTextBlockJP text={html(acknowledgmentsJP)} />
        </>
    );
};

export default Chapter04;
