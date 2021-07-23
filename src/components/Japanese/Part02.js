import html from 'react-html-parser'
import Iframe from 'react-iframe'
import Fade from 'react-reveal'

import DefaultTextBlockJP from './layout/textOnlyJP/DefaultTextBlockJP'
import FullWidthImage from '../English/layout/image/FullWidthImage'
import PartsJP from './layout/textOnlyJP/PartsJP'
import RepresentedWorks from '../English/layout/image/RepresentedWorks'
import TextLeftImageRightJP from './layout/textAndImageJP/TextLeftImageRightJP'
import TwoImages from '../English/layout/image/TwoImages'

import { essay15, essay23, essay24, wanobi02 } from '../../data/ImageConstantsEssay'
import { partsLabelJP, workSelectionJP, workSelectionJP3, workSelectionJP4 } from '../../data/TextConstantsJP'

const Part02 = () => {
    return (
        <>
            <div id='part2' className='anchordiv'></div>
            
            <Fade bottom>
                <PartsJP text={partsLabelJP[2]} />
                <DefaultTextBlockJP text={html(workSelectionJP)} fade='none' lessMaBo='true'/>
            </Fade>

            <Fade>        
                <TextLeftImageRightJP text={workSelectionJP3} item={essay15} />
            </Fade>
            
            <Fade bottom>
                <RepresentedWorks lang='jp' />
            </Fade>

            <div className='listcontainerJP' >
                <a href="http://exh.shibunkaku.co.jp/MoritaShiryu_作品リスト.pdf" download ><u>作品リストをダウンロード</u></a>
            </div>

            <DefaultTextBlockJP text={html(workSelectionJP4)} />
            <Fade bottom>                
                <TwoImages item1={essay24} item2={essay23} lang='jp'/>
            </Fade>
            
            <div className="theVideoJP">
                <Iframe className="iframe" src="https://player.vimeo.com/video/546329551?title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture"
                    title="Morita Shiryu"
                />
            </div>

            <FullWidthImage item={wanobi02} lang='jp' />

        </>
    )
}

export default Part02
