import ReactHtmlParser from 'react-html-parser'
import Iframe from 'react-iframe'

import DefaultTextBlock from './layout/textOnly/DefaultTextBlock';
import EssayBlock6 from './layout/essay/EssayBlock6'
import FullWidthImage from './layout/image/FullWidthImage'
import RepresentedWorks from './layout/image/RepresentedWorks'
import TwoImages from './layout/image/TwoImages'

import { essay23, essay24, wanobi02 } from '../../data/ImageConstantsEssay'
import { workSelection4 } from '../../data/TextConstants'

const Part02 = () => {
    return (
        <>
            <EssayBlock6/>            
            <RepresentedWorks />  
            <div className='listcontainer'>
                <a href="http://exh.shibunkaku.co.jp/MoritaShiryu_ListofWorks.pdf" download className='listlink'><u>Download work list</u></a>
            </div>                 
            <DefaultTextBlock item={ReactHtmlParser(workSelection4)} />
            <TwoImages item1={essay24} item2={essay23} />
            <div style={thevideo}>
                <Iframe url="https://player.vimeo.com/video/546329551?title=0&byline=0&portrait=0" //493273103
                    width="640px"
                    height="360px"
                    frameborder="0"
                    allow="fullscreen"
                    allowfullscreen
                />
            </div>
            <FullWidthImage item={wanobi02} />
        </>
    )
};

const thevideo = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4rem'
};

export default Part02
