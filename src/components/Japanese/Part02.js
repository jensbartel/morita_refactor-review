import html from 'react-html-parser'

import DefaultTextBlockJP from './layout/textOnlyJP/DefaultTextBlockJP'
import FullWidthImage from '../English/layout/image/FullWidthImage'
import PartsJP from './layout/textOnlyJP/PartsJP'
import RepresentedWorks from '../English/layout/image/RepresentedWorks'
import TextLeftImageRightJP from './layout/textAndImageJP/TextLeftImageRightJP'
import TwoImages from '../English/layout/image/TwoImages'

import { essay15, essay23, essay24, wanobi02 } from '../../data/ImageConstantsEssay'
import { partsLabelJP, workSelectionJP, workSelectionJP2, workSelectionJP3, workSelectionJP4 } from '../../data/TextConstantsJP'

const Part02 = () => {
    return (
        <>
            <div id='part2' className='anchordiv'></div>
            
            <PartsJP text={partsLabelJP[2]} />
            <DefaultTextBlockJP text={html(workSelectionJP)} />
            <TextLeftImageRightJP text={workSelectionJP2} item={essay15} />
            <DefaultTextBlockJP text={html(workSelectionJP3)} />            
            
            <RepresentedWorks lang='jp' />
            <div className='listcontainerJP' >
                <a href="http://exh.shibunkaku.co.jp/MoritaShiryu_作品リスト.pdf" download ><u>作品リストをダウンロード</u></a>
            </div>
            <DefaultTextBlockJP text={html(workSelectionJP4)} />
            <TwoImages item1={essay24} item2={essay23} />
            <div className="video-responsive">
                <iframe className="iframe" src="https://player.vimeo.com/video/546329551?title=0&byline=0&portrait=0"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allow="fullscreen"
                    title="Morita Shiryu"
                />
            </div>
            <div className='video-responsive2'></div> 
            {/* endtag was missing. mistake? */}

            <FullWidthImage item={wanobi02} lang='jp' />

        </>
    )
}

export default Part02
